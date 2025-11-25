import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Excalidraw } from "@excalidraw/excalidraw";
import type {
  ExcalidrawInitialDataState,
  ExcalidrawImperativeAPI,
} from "@excalidraw/excalidraw/types";
import "@excalidraw/excalidraw/index.css";
import { Save, CircleDot, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExcalidrawAIIcon } from "@/components/icons/ai-assistant-icon";
import { useExcalidrawAI } from "@/hooks/use-excalidraw-ai";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { useExcalidrawRuntime } from "@/hooks/use-excalidraw-runtime";

// Feature flag: 暂时隐藏 Excalidraw AI 入口
const ENABLE_EXCALIDRAW_AI = false;

type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];
type BinaryFiles = NonNullable<ExcalidrawInitialDataState["files"]>;

export interface ExcalidrawSceneValue {
  elements?: readonly ExcalidrawElement[];
  files?: BinaryFiles;
}

// 兼容旧命名，供上层文件读写存储使用。
export type StoredFileData = ExcalidrawSceneValue;

interface ExcalidrawAICanvasProps {
  value: ExcalidrawSceneValue | null;
  onChange: (next: ExcalidrawSceneValue) => void;

  // 仅用于展示保存状态，由上层控制。
  saveStatus?: "idle" | "dirty" | "saving" | "saved" | "error";
  onSaveClick?: () => void;
  showSaveStatus?: boolean;
}

function normalizeSceneValue(
  value: ExcalidrawSceneValue | null | undefined,
): ExcalidrawSceneValue {
  return {
    elements: value?.elements ?? [],
    files: value?.files,
  };
}

function buildSceneSnapshot(scene: ExcalidrawSceneValue): string {
  return JSON.stringify({
    elements: scene.elements ?? [],
    files: scene.files ?? undefined,
  });
}

export function ExcalidrawAICanvas({
  value,
  onChange,
  saveStatus,
  onSaveClick,
  showSaveStatus,
}: ExcalidrawAICanvasProps) {
  const { t } = useTranslation();

  const excalidrawRef = useRef<ExcalidrawImperativeAPI | null>(null);
  // 当前场景，仅用于 runtime 工具调用；源数据由外部 value 控制。
  const sceneRef = useRef<ExcalidrawSceneValue>(
    normalizeSceneValue(value),
  );
  // 本组件内部用于去重的快照，避免 Excalidraw 在内容未变时重复触发 onChange
  const lastLocalSnapshotRef = useRef<string | null>(null);

  const memoizedOnChange = useMemoizedFn(onChange);

  const { openExcalidrawAssistant } = useExcalidrawAI({
    sceneRef,
    excalidrawRef,
    onChange: memoizedOnChange,
  });

  // 外部 value 变化时，同步到本地快照。
  useEffect(() => {
    const next = normalizeSceneValue(value);
    sceneRef.current = next;

    // 更新本地快照，用于去重。
    try {
      const snapshot = buildSceneSnapshot(next);
      lastLocalSnapshotRef.current = snapshot;
    } catch {
      // ignore
    }

    // 将外部 value 同步到 Excalidraw 画布。
    if (excalidrawRef.current && next.elements) {
      excalidrawRef.current.updateScene({
        elements: next.elements as ExcalidrawElement[],
      });
    }
  }, [value]);

  // 将当前 Excalidraw 场景暴露给 runtime，便于工具读取/更新。
  useExcalidrawRuntime({
    sceneRef,
    excalidrawRef,
    onChange: memoizedOnChange,
  });

  const handleExcalidrawChange = useCallback(
    (
      elements: readonly ExcalidrawElement[],
      _appState: unknown,
      files: BinaryFiles,
    ) => {
      const next: ExcalidrawSceneValue = {
        elements,
        files,
      };

      // 构建本地快照，若与上一次相同，则认为没有实际内容变更，避免死循环。
      try {
        const snapshot = buildSceneSnapshot(next);
        if (snapshot === lastLocalSnapshotRef.current) {
          return;
        }
        lastLocalSnapshotRef.current = snapshot;
      } catch {
        // 若快照构建失败，仍然继续，让上层自行处理。
      }

      sceneRef.current = next;
      memoizedOnChange(next);
    },
    [memoizedOnChange],
  );

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-hidden">
      <div className="flex-1 relative flex min-h-0 overflow-hidden">
        <div className="flex-1 relative min-w-0 overflow-hidden">
          <div className="absolute inset-0">
            {showSaveStatus && (
              <TooltipProvider>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80 border border-border/60 text-muted-foreground">
                        {saveStatus === "saving" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : saveStatus === "dirty" ? (
                          <CircleDot className="h-4 w-4" />
                        ) : saveStatus === "error" ? (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      {saveStatus === "saving"
                        ? t("excalidraw.saving")
                        : saveStatus === "dirty"
                          ? t("excalidraw.edited")
                          : saveStatus === "error"
                            ? t("excalidraw.saveError")
                            : t("excalidraw.saved")}
                    </TooltipContent>
                  </Tooltip>
                  {onSaveClick && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-background/80 border border-border/60 hover:bg-background"
                          onClick={onSaveClick}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {t("excalidraw.saveNow")}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            )}

            <Excalidraw
              initialData={sceneRef.current}
              excalidrawAPI={(api) => {
                excalidrawRef.current = api;
              }}
              onChange={handleExcalidrawChange}
              aiEnabled={false}
            />
          </div>
          {ENABLE_EXCALIDRAW_AI && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <Button
                onClick={openExcalidrawAssistant}
                size="icon"
                className="h-11 w-11 rounded-full bg-background/90 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background shadow-lg"
                title={t("excalidraw.aiAssistant")}
              >
                <ExcalidrawAIIcon className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
