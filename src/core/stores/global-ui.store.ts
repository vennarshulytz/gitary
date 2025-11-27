import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type GlobalSidecarUIState = {
  open: boolean;
  activePaneId?: string;
};

interface GlobalUIStoreState {
  globalSidecar: GlobalSidecarUIState;
  setGlobalSidecarState: (next: GlobalSidecarUIState) => void;
  updateGlobalSidecarState: (partial: Partial<GlobalSidecarUIState>) => void;
}

const isPcDevice = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  return !mediaQuery.matches;
};

/**
 * Storage adapter:
 * - Uses zustand persist for JSON-based storage
 * - Only reads/writes real localStorage on desktop (PC); mobile stays in-memory
 */
const pcOnlyStorage = createJSONStorage<{ globalSidecar: GlobalSidecarUIState }>(
  () => {
    if (typeof window === "undefined") {
      // In SSR / non-browser environments, provide an in-memory Storage shim.
      const memory = new Map<string, string>();
      return {
        getItem: (name: string) => memory.get(name) ?? null,
        setItem: (name: string, value: string) => {
          memory.set(name, value);
        },
        removeItem: (name: string) => {
          memory.delete(name);
        },
        clear: () => {
          memory.clear();
        },
        key: (index: number) => Array.from(memory.keys())[index] ?? null,
        get length() {
          return memory.size;
        },
      } as Storage;
    }

    const base = window.localStorage;
    // Wrap base storage so only PC devices touch real localStorage.
    return {
      getItem: (name: string) => (isPcDevice() ? base.getItem(name) : null),
      setItem: (name: string, value: string) => {
        if (isPcDevice()) {
          base.setItem(name, value);
        }
      },
      removeItem: (name: string) => {
        if (isPcDevice()) {
          base.removeItem(name);
        }
      },
      clear: () => {
        if (isPcDevice()) {
          base.clear();
        }
      },
      key: (index: number) => (isPcDevice() ? base.key(index) ?? null : null),
      get length() {
        return isPcDevice() ? base.length : 0;
      },
    } as Storage;
  }
);

export const useGlobalUIStore = create<GlobalUIStoreState>()(
  persist(
    (set) => ({
      globalSidecar: {
        open: false,
        activePaneId: undefined,
      },
      setGlobalSidecarState: (next) => set({ globalSidecar: next }),
      updateGlobalSidecarState: (partial) =>
        set((state) => ({
          globalSidecar: {
            ...state.globalSidecar,
            ...partial,
          },
        })),
    }),
    {
      name: "global-ui:global-sidecar",
      storage: pcOnlyStorage,
      // If GlobalUIStoreState grows, adjust this to control which fields are persisted.
      partialize: (state) => ({
        globalSidecar: state.globalSidecar,
      }),
    }
  )
);
