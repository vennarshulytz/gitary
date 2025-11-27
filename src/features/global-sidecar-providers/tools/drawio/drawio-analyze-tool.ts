import type { Tool } from "@agent-labs/agent-chat";
import { t } from "@/i18n/utils";
import { getCurrentDrawioHandle } from "@/services/drawio-runtime";

export interface DrawioAnalysisResult {
  nodeCount: number;
  edgeCount: number;
  nodes: Array<{ id: string; label: string; type?: string }>;
  edges: Array<{ id: string; from: string; to: string }>;
  summary: string;
}

export const drawioAnalyzeTool: Tool<
  Record<string, never>,
  DrawioAnalysisResult
> = {
  name: "drawio_analyze",
  description: t("drawio.tools.analyzeDescription"),
  parameters: {
    type: "object",
    properties: {},
    additionalProperties: false,
  },
  async execute() {
    const handle = getCurrentDrawioHandle();
    if (!handle) {
      throw new Error(t("drawio.tools.noCanvas"));
    }

    const xml = handle.getXml();
    if (!xml || !xml.trim()) {
      throw new Error(t("drawio.tools.emptyCanvas"));
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/xml");
      
      const nodes: Array<{ id: string; label: string; type?: string }> = [];
      const edges: Array<{ id: string; from: string; to: string }> = [];

      const mxfile = doc.querySelector("mxfile");
      if (!mxfile) {
        throw new Error("Invalid Draw.io XML: missing mxfile element");
      }

      const diagram = mxfile.querySelector("diagram");
      if (!diagram) {
        throw new Error("Invalid Draw.io XML: missing diagram element");
      }

      const mxGraphModel = diagram.querySelector("mxGraphModel");
      if (!mxGraphModel) {
        throw new Error("Invalid Draw.io XML: missing mxGraphModel element");
      }

      const root = mxGraphModel.querySelector("root");
      if (!root) {
        throw new Error("Invalid Draw.io XML: missing root element");
      }

      const cells = root.querySelectorAll("mxCell");
      cells.forEach((cell) => {
        const id = cell.getAttribute("id") || "";
        const value = cell.getAttribute("value") || "";
        const style = cell.getAttribute("style") || "";
        const vertex = cell.getAttribute("vertex");
        const edge = cell.getAttribute("edge");
        const source = cell.getAttribute("source");
        const target = cell.getAttribute("target");
        const parent = cell.getAttribute("parent");

        if (vertex === "1" && parent === "1") {
          let type = "rectangle";
          if (style.includes("ellipse") || style.includes("shape=ellipse")) type = "ellipse";
          else if (style.includes("rhombus") || style.includes("shape=rhombus")) type = "rhombus";
          else if (style.includes("hexagon") || style.includes("shape=hexagon")) type = "hexagon";
          else if (style.includes("cylinder") || style.includes("shape=cylinder")) type = "cylinder";
          else if (style.includes("actor") || style.includes("shape=actor")) type = "actor";
          else if (style.includes("cloud") || style.includes("shape=cloud")) type = "cloud";

          nodes.push({
            id,
            label: value || t("drawio.tools.nodeWithoutLabel", { id }),
            type,
          });
        }

        if (edge === "1" && source && target) {
          edges.push({
            id,
            from: source,
            to: target,
          });
        }
      });

      const summary = t("drawio.tools.analysisSummary", {
        nodeCount: nodes.length,
        edgeCount: edges.length,
      });

      return {
        nodeCount: nodes.length,
        edgeCount: edges.length,
        nodes,
        edges,
        summary,
      };
    } catch (error) {
      console.error("Failed to analyze Draw.io XML:", error);
      throw new Error(t("drawio.tools.analysisFailed"));
    }
  },
};

