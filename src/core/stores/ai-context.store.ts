import type { Context as AgentContext } from "@agent-labs/agent-chat";
import { isEqual } from "lodash-es";
import { create } from "zustand";

export type {AgentContext}

export interface AgentContextWithId {
  id: string;
  description: string;
  value: string;
}

interface AIContextStoreState {
  contexts: AgentContextWithId[];
  addContexts: (contexts: AgentContextWithId[]) => void;
  removeContexts: (ids: string[]) => void;
  getAllContexts: () => AgentContext[];
  clearAllContexts: () => void;
}

export const useAIContextStore = create<AIContextStoreState>((set, get) => ({
  contexts: [],

  addContexts: (contexts: AgentContextWithId[]) => {
    set((state) => {
      if (!contexts.length) {
        return state;
      }

      const contextsById = new Map(state.contexts.map((ctx) => [ctx.id, ctx]));
      let hasChanged = false;

      contexts.forEach((ctx) => {
        const next: AgentContextWithId = {
          id: ctx.id,
          description: ctx.description,
          value: ctx.value,
        };
        const existing = contextsById.get(ctx.id);

        if (!existing || !isEqual(existing, next)) {
          contextsById.set(ctx.id, next);
          hasChanged = true;
        }
      });

      if (!hasChanged) {
        return state;
      }

      return { contexts: Array.from(contextsById.values()) };
    });
  },


  removeContexts: (ids: string[]) => {
    set((state) => {
      if (!ids.length) {
        return state;
      }

      const idSet = new Set(ids);
      const filtered = state.contexts.filter((ctx) => !idSet.has(ctx.id));

      if (filtered.length === state.contexts.length) {
        return state;
      }

      return { contexts: filtered };
    });
  },

  getAllContexts: () => {
    const state = get();
    return state.contexts.map((ctx) => ({
      description: ctx.description,
      value: ctx.value,
    }));
  },

  clearAllContexts: () => {
    set({ contexts: [] });
  },
}));
