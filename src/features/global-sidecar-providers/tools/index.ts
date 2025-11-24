import type { Tool } from "@agent-labs/agent-chat";
import { getWorkspaceContextTool } from "./workspace-context";

// Global tools used by the GlobalChatPanel.
// New tools should be added here, each implemented in its own folder/file.
export const GLOBAL_AGENT_TOOLS: Tool[] = [getWorkspaceContextTool];

