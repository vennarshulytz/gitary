import type { Tool } from "@agent-labs/agent-chat";
import {
  aiContextService,
  type AIContext,
} from "@/services/ai/context-service";

/**
 * 获取当前工作区上下文（浏览器标签页、编辑器、项目文件等）。
 * 这是一个只读工具，用于给模型提供更丰富的环境信息。
 */
export const getWorkspaceContextTool: Tool<
  {
    includeBrowserTab?: boolean;
    includeEditor?: boolean;
    includeProject?: boolean;
  },
  AIContext
> = {
  name: "get_workspace_context",
  description:
    "获取当前浏览器标签页、编辑器和项目相关的上下文信息，用于更好地理解用户问题。",
  parameters: {
    type: "object",
    properties: {
      includeBrowserTab: {
        type: "boolean",
        description: "是否包含当前浏览器标签页信息（URL、标题等）。",
      },
      includeEditor: {
        type: "boolean",
        description: "是否包含当前编辑器打开文件的内容和元信息。",
      },
      includeProject: {
        type: "boolean",
        description: "是否包含项目级别的上下文（当前文件、最近文件等）。",
      },
    },
    additionalProperties: false,
  },
  async execute(args) {
    const {
      includeBrowserTab = true,
      includeEditor = true,
      includeProject = false,
    } = args ?? {};

    const context = await aiContextService.getFullContext({
      includeBrowserTab,
      includeEditor,
      includeProject,
    });

    return context;
  },
};

