import { aiGateway } from "@/services/ai/gateway";
import type { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types";

type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];

export class ExcalidrawAIService {
  async generateDiagram(prompt: string): Promise<ExcalidrawElement[]> {
    const systemPrompt = `你是一个专业的图表生成助手。根据用户描述生成 Excalidraw 图表元素。

要求：
1. 理解用户描述，生成相应的图表（流程图、架构图、系统图等）
2. 只返回 JSON 数组，不要包含其他文字
3. 每个元素只需包含核心字段，其他字段系统会自动补充

基础元素（rectangle, ellipse, diamond 等）必需字段：
- type: 元素类型
- x, y: 位置坐标
- width, height: 尺寸
- strokeColor: 边框颜色（可选，默认 "#1e1e1e"）
- backgroundColor: 背景颜色（可选，默认 "transparent"）

文本元素额外字段：
- text: 文本内容
- fontSize: 字体大小（默认 20）
- fontFamily: 字体族（1=normal, 2=code, 3=hand, 4=hand-drawn，默认 1）
- textAlign: 对齐方式（"left", "center", "right"，默认 "center"）
- verticalAlign: 垂直对齐（"top", "middle", "bottom"，默认 "middle"）

箭头元素额外字段：
- points: 点数组，如 [[0, 0], [100, 100]]
- startArrowhead: null 或 "arrow"（默认 null）
- endArrowhead: "arrow" 或 null（默认 "arrow"）

布局要求：
- 元素间距合理，避免重叠
- 使用合适的颜色搭配
- 坐标从 (100, 100) 开始，元素间距至少 50px

示例（只包含必需字段）：
[
  {
    "type": "rectangle",
    "x": 100,
    "y": 100,
    "width": 200,
    "height": 80,
    "strokeColor": "#1e1e1e",
    "backgroundColor": "#4f46e5"
  },
  {
    "type": "text",
    "x": 150,
    "y": 125,
    "width": 100,
    "height": 30,
    "text": "前端",
    "fontSize": 20,
    "fontFamily": 1,
    "textAlign": "center",
    "verticalAlign": "middle",
    "strokeColor": "#ffffff"
  }
]`;

    const userPrompt = `根据以下描述生成 Excalidraw 图表元素：${prompt}

只返回 JSON 数组，不要包含任何其他文字。`;

    try {
      const response = await aiGateway.chat({
        model: "dashscope/qwen3-max",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      });

      const content = response.messages[0]?.content || "";
      
      if (!content.trim()) {
        throw new Error("AI 返回的内容为空");
      }
      
      let jsonStr = content.trim();
      
      if (jsonStr.startsWith("```json")) {
        jsonStr = jsonStr.replace(/^```json\s*/m, "").replace(/\s*```$/m, "");
      } else if (jsonStr.startsWith("```")) {
        jsonStr = jsonStr.replace(/^```\s*/m, "").replace(/\s*```$/m, "");
      }

      jsonStr = jsonStr.trim();
      
      if (!jsonStr) {
        throw new Error("AI 返回的内容格式不正确");
      }

      let elements: ExcalidrawElement[];
      try {
        elements = JSON.parse(jsonStr) as ExcalidrawElement[];
      } catch (parseError) {
        console.error("JSON 解析错误:", parseError);
        console.error("原始内容:", jsonStr);
        throw new Error(`AI 返回的内容不是有效的 JSON 格式: ${parseError instanceof Error ? parseError.message : "未知错误"}`);
      }

      if (!Array.isArray(elements)) {
        throw new Error("AI 返回的不是数组格式");
      }

      const validatedElements = elements.map((element, index) => {
        const timestamp = Date.now() + index;
        const baseElement = {
          ...element,
          id: element.id || `element-${timestamp}`,
          version: element.version || 141,
          versionNonce: element.versionNonce || timestamp,
          updated: element.updated || timestamp,
          seed: element.seed || timestamp,
          isDeleted: false,
          groupIds: element.groupIds || [],
          frameId: element.frameId || null,
          boundElements: element.boundElements || [],
          link: element.link || null,
          locked: element.locked || false,
          opacity: element.opacity ?? 100,
          angle: element.angle || 0,
          roughness: element.roughness ?? 1,
          strokeWidth: element.strokeWidth ?? 2,
          strokeStyle: element.strokeStyle || "solid",
          fillStyle: element.fillStyle || "solid",
          strokeColor: element.strokeColor || "#1e1e1e",
          backgroundColor: element.backgroundColor || "transparent",
        } as unknown as ExcalidrawElement;

        if (element.type === "text" && "text" in element) {
          const textElement = element as Record<string, unknown>;
          const fontSize = (textElement.fontSize as number) ?? 20;
          const height = (textElement.height as number) ?? fontSize * 1.5;
          return {
            ...baseElement,
            text: (textElement.text as string) || "",
            fontSize,
            fontFamily: (textElement.fontFamily as number) ?? 1,
            textAlign: (textElement.textAlign as string) || "center",
            verticalAlign: (textElement.verticalAlign as string) || "middle",
            originalText: (textElement.originalText as string) || (textElement.text as string) || "",
            lineHeight: (textElement.lineHeight as number) ?? 1.25,
            baseline: (textElement.baseline as number) ?? Math.round(height * 0.8),
            containerId: (textElement.containerId as string | null) || null,
          } as unknown as ExcalidrawElement;
        }

        if (element.type === "arrow" && "points" in element) {
          const arrowElement = element as Record<string, unknown>;
          const points = (arrowElement.points as number[][]) || [];
          return {
            ...baseElement,
            points,
            lastCommittedPoint: (arrowElement.lastCommittedPoint as number[] | null) || (points.length > 0 ? points[points.length - 1] : null),
            startArrowhead: (arrowElement.startArrowhead as string | null) ?? null,
            endArrowhead: (arrowElement.endArrowhead as string | null) ?? "arrow",
            startBinding: (arrowElement.startBinding as unknown) || null,
            endBinding: (arrowElement.endBinding as unknown) || null,
          } as unknown as ExcalidrawElement;
        }

        return baseElement;
      });

      return validatedElements;
    } catch (error) {
      console.error("Error generating diagram:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "生成图表时出错，请重试"
      );
    }
  }
}

export const excalidrawAIService = new ExcalidrawAIService();
