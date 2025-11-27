import {
  type GlobalSidecarUIState,
  useGlobalUIStore,
} from "@/core/stores/global-ui.store";

export class GlobalUIManager {
  // Read-only snapshot helpers
  getGlobalSidecarState = (): GlobalSidecarUIState => {
    return useGlobalUIStore.getState().globalSidecar;
  };

  // Low-level setters (rarely used directly; prefer semantic actions)
  setGlobalSidecarState = (next: GlobalSidecarUIState) => {
    useGlobalUIStore.getState().setGlobalSidecarState(next);
  };

  updateGlobalSidecarState = (partial: Partial<GlobalSidecarUIState>) => {
    useGlobalUIStore.getState().updateGlobalSidecarState(partial);
  };

  // Semantic actions for the global AI sidecar
  openGlobalSidecar = (paneId: string) => {
    const prev = useGlobalUIStore.getState().globalSidecar;
    const next: GlobalSidecarUIState = {
      ...prev,
      open: true,
      activePaneId: paneId,
    };
    useGlobalUIStore.getState().setGlobalSidecarState(next);
  };

  toggleGlobalSidecar = (paneId: string) => {
    const prev = useGlobalUIStore.getState().globalSidecar;
    const isSamePane = prev.activePaneId === paneId;
    const next: GlobalSidecarUIState =
      isSamePane && prev.open
        ? { ...prev, open: false }
        : { ...prev, open: true, activePaneId: paneId };
    useGlobalUIStore.getState().setGlobalSidecarState(next);
  };

  closeGlobalSidecar = () => {
    const prev = useGlobalUIStore.getState().globalSidecar;
    if (!prev.open) return;
    const next: GlobalSidecarUIState = {
      ...prev,
      open: false,
    };
    useGlobalUIStore.getState().setGlobalSidecarState(next);
  };

}

export const globalUIManager = new GlobalUIManager();
