import { useAIContextStore } from "@/core/stores/ai-context.store";
import { AIContextItem } from "@/hooks/use-provide-global-ai-contexts";
import type { Context as AgentContext } from "@agent-labs/agent-chat";

interface ContextUpdate {
  id: string;
  description: string;
  value: string;
}

export class AIContextManager {

  addContexts = (contexts: AIContextItem[]) => {
    useAIContextStore.getState().addContexts(contexts);
  };

  updateContexts = (updates: ContextUpdate[]) => {
    useAIContextStore.getState().updateContexts(updates);
  };

  removeContexts = (ids: string[]) => {
    useAIContextStore.getState().removeContexts(ids);
  };

  getAllContexts = (): AgentContext[] => {
    return useAIContextStore.getState().getAllContexts();
  };

  clearAllContexts = () => {
    useAIContextStore.getState().clearAllContexts();
  };
}

export const aiContextManager = new AIContextManager();
