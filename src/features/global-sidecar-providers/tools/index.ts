import type { Tool } from "@agent-labs/agent-chat";
import { getWorkspaceContextTool } from "./workspace-context";
import { fsReaddirTool, fsReadFileTool, fsStatTool } from "./fs";

// Global tools used by the GlobalChatPanel.
// New tools should be added here, each implemented in its own folder/file.
export const GLOBAL_AGENT_TOOLS: Tool[] = [
  getWorkspaceContextTool,
  fsReaddirTool,
  fsReadFileTool,
  fsStatTool,
];
