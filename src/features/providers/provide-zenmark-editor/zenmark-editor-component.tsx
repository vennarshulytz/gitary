import { useDocument } from "@/hooks/use-document";
import { Loader2 } from "lucide-react";
import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

// Lazy-load zenmark-editor so the main bundle stays smaller.
const LazyZenmarkEditor = lazy(async () => {
  const mod = await import("zenmark-editor");
  return { default: mod.ZenmarkEditor };
});

type ZenmarkModule = typeof import("zenmark-editor");
type ZenmarkKeybindingApi = Pick<
  ZenmarkModule,
  "KeyMod" | "KeyCode" | "matchesKeybinding"
>;

export const ZenmarkEditorComponent = (props: { uri: string }) => {
  const { t } = useTranslation();
  const { uri } = props;
  const { content, setContent, loading, flush } = useDocument(uri, {
    autosave: false,
  });
  const editorRef = useRef<HTMLDivElement>(null);
  const [zenmarkApi, setZenmarkApi] = useState<ZenmarkKeybindingApi | null>(
    null,
  );

  // Load keybinding helpers only when the editor view is mounted.
  useEffect(() => {
    let cancelled = false;
    void import("zenmark-editor")
      .then((mod) => {
        if (cancelled) return;
        setZenmarkApi({
          KeyMod: mod.KeyMod,
          KeyCode: mod.KeyCode,
          matchesKeybinding: mod.matchesKeybinding,
        });
      })
      .catch((error) => {
        console.error("Failed to load zenmark-editor keybindings", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      const isSaveShortcut =
        (event.metaKey || event.ctrlKey) &&
        (event.key === "s" || event.key === "S") &&
        !event.shiftKey;

      if (
        isSaveShortcut &&
        editorRef.current?.contains(document.activeElement)
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        flush();
      }
    };

    document.addEventListener("keydown", handleDocumentKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown, true);
    };
  }, [flush]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-0 h-full">
        <div className="flex flex-col items-center gap-3 text-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/70" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-foreground/90">
              {t("zenmark.loading")}
            </p>
            <p className="text-xs text-muted-foreground/60 truncate max-w-xs">
              {uri.split("/").pop()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleKeyDown = (event: {
    keyCode: number;
    code: string;
    key: string;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    if (!zenmarkApi) return false;

    const saveKeybinding =
      zenmarkApi.KeyMod.CtrlCmd | zenmarkApi.KeyCode.KEY_S;
    if (zenmarkApi.matchesKeybinding(event, saveKeybinding)) {
      event.preventDefault();
      event.stopPropagation();
      flush();
      return true;
    }
    return false;
  };

  return (
    <div
      ref={editorRef}
      style={{ height: "100%" }}
    >
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center min-h-0 h-full">
            <div className="flex flex-col items-center gap-3 text-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/70" />
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-medium text-foreground/90">
                  {t("zenmark.loadingEditor")}
                </p>
                <p className="text-xs text-muted-foreground/60 truncate max-w-xs">
                  {uri.split("/").pop()}
                </p>
              </div>
            </div>
          </div>
        }
      >
        <LazyZenmarkEditor
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
          onKeyDown={handleKeyDown}
        />
      </Suspense>
    </div>
  );
};
