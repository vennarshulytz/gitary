import type { Tool } from "@agent-labs/agent-chat";
import type { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types";
import { getCurrentExcalidrawHandle } from "@/services/excalidraw-runtime";
import { excalidrawAIService } from "@/services/ai/excalidraw-ai.service";
import { t } from "@/i18n/utils";

type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];

interface ExcalidrawSummaryNode {
  id: string;
  label: string;
  kind?: string;
  position?: { x: number; y: number };
}

interface ExcalidrawSummaryEdge {
  id: string;
  from: string;
  to: string;
}

interface ExcalidrawSummaryResult {
  nodeCount: number;
  edgeCount: number;
  nodes: ExcalidrawSummaryNode[];
  edges: ExcalidrawSummaryEdge[];
}

type ExcalidrawOperation = {
  op: "add_node" | "connect" | "rename_node" | "delete_node";
  // add_node
  id?: string;
  label?: string;
  kind?: string;
  near?: string;
  // connect
  from?: string;
  to?: string;
  // rename/delete
  target?: string;
  newLabel?: string;
};

interface ApplyOperationsResult {
  applied: number;
  failed: { index: number; op: string; reason: string }[];
}

function ensureExcalidrawAvailable() {
  const handle = getCurrentExcalidrawHandle();
  if (!handle) {
    throw new Error(t("excalidraw.tools.noCanvas"));
  }
  const scene = handle.getScene();
  const elements = (scene.elements ?? []) as ExcalidrawElement[];
  return { handle, scene, elements };
}

function inferKindFromLabel(label: string): string | undefined {
  const text = label.toLowerCase();
  if (text.includes("db") || text.includes("数据库")) return "database";
  if (text.includes("cache") || text.includes("redis")) return "cache";
  if (text.includes("api") || text.includes("service")) return "service";
  return undefined;
}

function getElementCenter(el: ExcalidrawElement): { x: number; y: number } {
  const anyEl = el as any;
  const x = (anyEl.x ?? 0) + (anyEl.width ?? 0) / 2;
  const y = (anyEl.y ?? 0) + (anyEl.height ?? 0) / 2;
  return { x, y };
}

function distanceSq(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function getArrowEndpoints(el: ExcalidrawElement): {
  start: { x: number; y: number };
  end: { x: number; y: number };
} {
  const anyEl = el as any;
  const points: [number, number][] = anyEl.points ?? [];
  const baseX = anyEl.x ?? 0;
  const baseY = anyEl.y ?? 0;
  if (!Array.isArray(points) || points.length < 2) {
    const start = { x: baseX, y: baseY };
    const end = {
      x: baseX + (anyEl.width ?? 0),
      y: baseY + (anyEl.height ?? 0),
    };
    return { start, end };
  }
  const first = points[0];
  const last = points[points.length - 1];
  return {
    start: { x: baseX + first[0], y: baseY + first[1] },
    end: { x: baseX + last[0], y: baseY + last[1] },
  };
}

function findNodeElementByRef(
  elements: ExcalidrawElement[],
  ref?: string
): ExcalidrawElement | null {
  if (!ref) return null;
  const trimmed = ref.trim();
  const lowered = trimmed.toLowerCase();

  // Prefer id exact match.
  let found = elements.find((el) => el.id === trimmed);
  if (found) return found;

  // Then text exact match.
  found = elements.find((el) => {
    if ((el as any).type !== "text") return false;
    const text = ((el as any).text ?? "") as string;
    return text.trim().toLowerCase() === lowered;
  });
  if (found) return found;

  // Finally, substring match on text.
  found = elements.find((el) => {
    if ((el as any).type !== "text") return false;
    const text = ((el as any).text ?? "") as string;
    return text.toLowerCase().includes(lowered);
  });
  return found ?? null;
}

function computeSceneBounds(elements: ExcalidrawElement[]): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
} | null {
  if (!elements.length) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const el of elements) {
    const anyEl = el as any;
    const x = anyEl.x ?? 0;
    const y = anyEl.y ?? 0;
    const w = anyEl.width ?? 0;
    const h = anyEl.height ?? 0;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x + w);
    maxY = Math.max(maxY, y + h);
  }

  return { minX, minY, maxX, maxY };
}

function createRectangleAndTextNode(params: {
  baseId: string;
  label: string;
  center: { x: number; y: number };
}): ExcalidrawElement[] {
  const { baseId, label, center } = params;
  const timestamp = Date.now();
  const rectId = `${baseId}-box`;
  const textId = baseId;

  const width = 180;
  const height = 80;
  const rectX = center.x - width / 2;
  const rectY = center.y - height / 2;

  const rect: any = {
    type: "rectangle",
    version: 1,
    versionNonce: timestamp,
    isDeleted: false,
    id: rectId,
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x: rectX,
    y: rectY,
    strokeColor: "#1e293b",
    backgroundColor: "#e0f2fe",
    width,
    height,
    seed: timestamp,
    groupIds: [],
    frameId: null,
    roundness: { type: 3 },
    boundElements: [
      {
        type: "text",
        id: textId,
      },
    ],
    updated: timestamp,
    link: null,
    locked: false,
  };

  const textWidth = width - 40;
  const textHeight = 28;
  const textX = rectX + (width - textWidth) / 2;
  const textY = center.y - textHeight / 2;

  const text: any = {
    type: "text",
    version: 1,
    versionNonce: timestamp + 1,
    isDeleted: false,
    id: textId,
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x: textX,
    y: textY,
    strokeColor: "#0f172a",
    backgroundColor: "transparent",
    width: textWidth,
    height: textHeight,
    seed: timestamp + 1,
    groupIds: [],
    frameId: null,
    roundness: null,
    boundElements: null,
    updated: timestamp + 1,
    link: null,
    locked: false,
    fontSize: 18,
    fontFamily: 1,
    text: label,
    textAlign: "center",
    verticalAlign: "middle",
    containerId: rectId,
    originalText: label,
    lineHeight: 1.25,
    baseline: Math.round(textHeight * 0.8),
  };

  return [rect as ExcalidrawElement, text as ExcalidrawElement];
}

function createArrowBetween(
  fromEl: ExcalidrawElement,
  toEl: ExcalidrawElement
): ExcalidrawElement {
  const now = Date.now();
  const start = getElementCenter(fromEl);
  const end = getElementCenter(toEl);
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  const width = Math.max(Math.abs(dx), 1);
  const height = Math.max(Math.abs(dy), 1);

  const arrow: any = {
    type: "arrow",
    version: 1,
    versionNonce: now,
    isDeleted: false,
    id: `arrow-${now}-${Math.floor(Math.random() * 1e4)}`,
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 1,
    opacity: 100,
    angle: 0,
    x: start.x,
    y: start.y,
    strokeColor: "#1e293b",
    backgroundColor: "transparent",
    width,
    height,
    seed: now,
    groupIds: [],
    frameId: null,
    roundness: null,
    boundElements: [],
    updated: now,
    link: null,
    locked: false,
    startBinding: null,
    endBinding: null,
    points: [
      [0, 0],
      [dx, dy],
    ],
    lastCommittedPoint: [dx, dy],
    startArrowhead: null,
    endArrowhead: "arrow",
  };

  return arrow as ExcalidrawElement;
}

export const excalidrawGetSummaryTool: Tool<
  { maxNodes?: number },
  ExcalidrawSummaryResult
> = {
  name: "excalidraw_get_summary",
  description: t("excalidraw.tools.getSummaryDescription"),
  parameters: {
    type: "object",
    properties: {
      maxNodes: {
        type: "number",
        description: t("excalidraw.tools.getSummaryMaxNodesDescription"),
      },
    },
    required: [],
    additionalProperties: false,
  },
  async execute(args) {
    const { elements } = ensureExcalidrawAvailable();
    const maxNodes =
      typeof args?.maxNodes === "number" && args.maxNodes > 0
        ? args.maxNodes
        : undefined;

    const nodes: ExcalidrawSummaryNode[] = [];

    for (const el of elements) {
      const anyEl = el as any;
      if (anyEl.type === "text" && typeof anyEl.text === "string") {
        const label = anyEl.text.trim();
        if (!label) continue;
        const center = getElementCenter(el);
        nodes.push({
          id: el.id,
          label,
          kind: inferKindFromLabel(label),
          position: center,
        });
      }
    }

    const nodeLimit = maxNodes ?? nodes.length;
    const limitedNodes = nodes.slice(0, nodeLimit);

    const nodeById = new Map<string, ExcalidrawSummaryNode>();
    for (const n of nodes) {
      nodeById.set(n.id, n);
    }

    const edges: ExcalidrawSummaryEdge[] = [];
    for (const el of elements) {
      const anyEl = el as any;
      if (anyEl.type !== "arrow") continue;

      let fromId: string | null = null;
      let toId: string | null = null;

      if (
        anyEl.startBinding?.elementId &&
        anyEl.endBinding?.elementId &&
        typeof anyEl.startBinding.elementId === "string" &&
        typeof anyEl.endBinding.elementId === "string"
      ) {
        fromId = anyEl.startBinding.elementId;
        toId = anyEl.endBinding.elementId;
      } else {
        const { start, end } = getArrowEndpoints(el);
        let bestFrom: { id: string; dist: number } | null = null;
        let bestTo: { id: string; dist: number } | null = null;
        for (const n of nodes) {
          if (!n.position) continue;
          const dStart = distanceSq(start, n.position);
          const dEnd = distanceSq(end, n.position);
          if (!bestFrom || dStart < bestFrom.dist) {
            bestFrom = { id: n.id, dist: dStart };
          }
          if (!bestTo || dEnd < bestTo.dist) {
            bestTo = { id: n.id, dist: dEnd };
          }
        }
        fromId = bestFrom?.id ?? null;
        toId = bestTo?.id ?? null;
      }

      if (!fromId || !toId || fromId === toId) continue;
      if (!nodeById.has(fromId) || !nodeById.has(toId)) continue;

      edges.push({
        id: el.id,
        from: fromId,
        to: toId,
      });
    }

    const edgeLimit = nodeLimit * 4;
    const limitedEdges = edges.slice(0, edgeLimit);

    return {
      nodeCount: nodes.length,
      edgeCount: edges.length,
      nodes: limitedNodes,
      edges: limitedEdges,
    };
  },
};

export const excalidrawGenerateDiagramTool: Tool<
  { prompt: string; mode?: "append" | "replace" },
  { insertedCount: number; mode: "append" | "replace" }
> = {
  name: "excalidraw_generate_diagram",
  description: t("excalidraw.tools.generateDiagramDescription"),
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: t("excalidraw.tools.generateDiagramPromptDescription"),
      },
      mode: {
        type: "string",
        enum: ["append", "replace"],
        description: t("excalidraw.tools.generateDiagramModeDescription"),
        default: "append",
      },
    },
    required: ["prompt"],
    additionalProperties: false,
  },
  async execute(args) {
    const { handle, elements: currentElements } = ensureExcalidrawAvailable();
    const prompt = (args?.prompt ?? "").trim();
    const mode: "append" | "replace" =
      args?.mode === "replace" ? "replace" : "append";

    if (!prompt) {
      throw new Error(t("excalidraw.tools.promptRequired"));
    }

    const newElements = await excalidrawAIService.generateDiagram(prompt);
    const combined =
      mode === "append"
        ? [...currentElements, ...newElements]
        : [...newElements];

    handle.updateScene({ elements: combined });

    return {
      insertedCount: newElements.length,
      mode,
    };
  },
};

export const excalidrawApplyOperationsTool: Tool<
  { operations: ExcalidrawOperation[] },
  ApplyOperationsResult
> = {
  name: "excalidraw_apply_operations",
  description: t("excalidraw.tools.applyOperationsDescription"),
  parameters: {
    type: "object",
    properties: {
      operations: {
        type: "array",
        description: t("excalidraw.tools.applyOperationsOperationsDescription"),
        items: {
          type: "object",
          properties: {
            op: {
              type: "string",
              enum: ["add_node", "connect", "rename_node", "delete_node"],
              description: t("excalidraw.tools.applyOperationsOpDescription"),
            },
            id: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsIdDescription"),
            },
            label: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsLabelDescription"),
            },
            kind: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsKindDescription"),
            },
            near: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsNearDescription"),
            },
            from: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsFromDescription"),
            },
            to: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsToDescription"),
            },
            target: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsTargetDescription"),
            },
            newLabel: {
              type: "string",
              description: t("excalidraw.tools.applyOperationsNewLabelDescription"),
            },
          },
          required: ["op"],
          additionalProperties: false,
        },
      },
    },
    required: ["operations"],
    additionalProperties: false,
  },
  async execute(args) {
    const { handle, elements: initialElements } = ensureExcalidrawAvailable();
    const operations = args?.operations ?? [];
    if (!operations.length) {
      throw new Error(t("excalidraw.tools.operationsRequired"));
    }

    let elements = [...initialElements];
    const failed: { index: number; op: string; reason: string }[] = [];
    let applied = 0;

    const bounds = computeSceneBounds(elements);
    const defaultCenter = bounds
      ? {
          x: (bounds.minX + bounds.maxX) / 2,
          y: (bounds.minY + bounds.maxY) / 2,
        }
      : { x: 0, y: 0 };

    const addFailure = (index: number, op: ExcalidrawOperation, reason: string) => {
      failed.push({ index, op: op.op, reason });
    };

    operations.forEach((op, index) => {
      if (!op || typeof op.op !== "string") {
        addFailure(index, { op: "add_node" }, t("excalidraw.tools.invalidOperation"));
        return;
      }

      if (op.op === "add_node") {
        const label = (op.label ?? "").trim();
        if (!label) {
          addFailure(index, op, t("excalidraw.tools.addNodeLabelRequired"));
          return;
        }

        const baseId =
          (op.id && op.id.trim()) ||
          `node-${Date.now()}-${index}-${Math.floor(Math.random() * 1e4)}`;

        let center = defaultCenter;
        if (op.near) {
          const nearEl = findNodeElementByRef(elements, op.near);
          if (nearEl) {
            const nearCenter = getElementCenter(nearEl);
            center = { x: nearCenter.x + 220, y: nearCenter.y };
          }
        } else if (bounds) {
          center = { x: bounds.maxX + 220, y: defaultCenter.y };
        }

        const newEls = createRectangleAndTextNode({
          baseId,
          label,
          center,
        });

        elements = [...elements, ...newEls];
        applied += 1;
        return;
      }

      if (op.op === "connect") {
        const fromRef = (op.from ?? "").trim();
        const toRef = (op.to ?? "").trim();
        if (!fromRef || !toRef) {
          addFailure(index, op, t("excalidraw.tools.connectFromToRequired"));
          return;
        }
        const fromEl = findNodeElementByRef(elements, fromRef);
        const toEl = findNodeElementByRef(elements, toRef);
        if (!fromEl || !toEl) {
          addFailure(
            index,
            op,
            t("excalidraw.tools.connectNodeNotFound")
          );
          return;
        }

        const arrow = createArrowBetween(fromEl, toEl);
        elements = [...elements, arrow];
        applied += 1;
        return;
      }

      if (op.op === "rename_node") {
        const targetRef = (op.target ?? "").trim();
        const newLabel = (op.newLabel ?? "").trim();
        if (!targetRef || !newLabel) {
          addFailure(index, op, t("excalidraw.tools.renameTargetLabelRequired"));
          return;
        }
        const nodeEl = findNodeElementByRef(elements, targetRef);
        if (!nodeEl) {
          addFailure(
            index,
            op,
            t("excalidraw.tools.renameNodeNotFound")
          );
          return;
        }

        const anyNode = nodeEl as any;
        if (anyNode.type === "text") {
          anyNode.text = newLabel;
          anyNode.originalText = newLabel;
          anyNode.updated = Date.now();
          applied += 1;
        } else {
          addFailure(
            index,
            op,
            t("excalidraw.tools.renameOnlyTextNode")
          );
        }
        return;
      }

      if (op.op === "delete_node") {
        const targetRef = (op.target ?? "").trim();
        if (!targetRef) {
          addFailure(index, op, t("excalidraw.tools.deleteTargetRequired"));
          return;
        }
        const nodeEl = findNodeElementByRef(elements, targetRef);
        if (!nodeEl) {
          addFailure(
            index,
            op,
            t("excalidraw.tools.deleteNodeNotFound")
          );
          return;
        }

        const idsToRemove = new Set<string>();
        idsToRemove.add(nodeEl.id);
        const anyNode = nodeEl as any;
        if (anyNode.type === "text" && typeof anyNode.containerId === "string") {
          idsToRemove.add(anyNode.containerId);
        }

        elements = elements.filter((el) => !idsToRemove.has(el.id));
        applied += 1;
        return;
      }

      addFailure(index, op, t("excalidraw.tools.unknownOperationType", { type: op.op }));
    });

    handle.updateScene({ elements });

    return {
      applied,
      failed,
    };
  },
};

