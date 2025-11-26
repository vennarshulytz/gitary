import type { ExcalidrawElement } from "./types";

export function validateAndCompleteElements(
  elements: unknown[]
): ExcalidrawElement[] {
  if (!Array.isArray(elements)) {
    throw new Error("元素必须是数组格式");
  }

  return elements.map((element, index) => {
    if (!element || typeof element !== "object") {
      throw new Error(`元素 ${index} 必须是对象`);
    }

    const timestamp = Date.now() + index;
    const el = element as Record<string, unknown>;
    const baseElement = {
      ...el,
      id: (el.id as string) || `element-${timestamp}`,
      version: (el.version as number) || 141,
      versionNonce: (el.versionNonce as number) || timestamp,
      updated: (el.updated as number) || timestamp,
      seed: (el.seed as number) || timestamp,
      isDeleted: false,
      groupIds: (el.groupIds as string[]) || [],
      frameId: (el.frameId as string | null) || null,
      boundElements: (el.boundElements as unknown[]) || [],
      link: (el.link as string | null) || null,
      locked: (el.locked as boolean) || false,
      opacity: (el.opacity as number) ?? 100,
      angle: (el.angle as number) || 0,
      roughness: (el.roughness as number) ?? 1,
      strokeWidth: (el.strokeWidth as number) ?? 2,
      strokeStyle: (el.strokeStyle as string) || "solid",
      fillStyle: (el.fillStyle as string) || "solid",
      strokeColor: (el.strokeColor as string) || "#1e1e1e",
      backgroundColor: (el.backgroundColor as string) || "transparent",
    } as unknown as ExcalidrawElement;

    if (el.type === "text" && "text" in el) {
      const fontSize = (el.fontSize as number) ?? 20;
      const height = (el.height as number) ?? fontSize * 1.5;
      return {
        ...baseElement,
        text: (el.text as string) || "",
        fontSize,
        fontFamily: (el.fontFamily as number) ?? 1,
        textAlign: (el.textAlign as string) || "center",
        verticalAlign: (el.verticalAlign as string) || "middle",
        originalText: (el.originalText as string) || (el.text as string) || "",
        lineHeight: (el.lineHeight as number) ?? 1.25,
        baseline: (el.baseline as number) ?? Math.round(height * 0.8),
        containerId: (el.containerId as string | null) || null,
      } as unknown as ExcalidrawElement;
    }

    if (el.type === "arrow" && "points" in el) {
      const points = (el.points as number[][]) || [];
      return {
        ...baseElement,
        points,
        lastCommittedPoint: (el.lastCommittedPoint as number[] | null) || (points.length > 0 ? points[points.length - 1] : null),
        startArrowhead: (el.startArrowhead as string | null) ?? null,
        endArrowhead: (el.endArrowhead as string | null) ?? "arrow",
        startBinding: (el.startBinding as unknown) || null,
        endBinding: (el.endBinding as unknown) || null,
      } as unknown as ExcalidrawElement;
    }

    return baseElement;
  });
}

