import {
  ExcalidrawAICanvas,
  type ExcalidrawSceneValue,
  type StoredFileData,
} from "@/components/excalidraw-ai-canvas";
import { Uri } from "@/toolkit/vscode/uri";
import { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, skip } from "rxjs/operators";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { useBehaviorSubjectValue } from "@/hooks/use-behavior-subject-value";
import xbook from "xbook/index";

type SaveStatus = "idle" | "dirty" | "saving" | "saved" | "error";

function buildSceneSnapshot(value: ExcalidrawSceneValue | null): string {
  if (!value) return "null";
  const elements = (value.elements ?? []).map((el) => {
    const element = el as Record<string, unknown>;
    const {
      version: _version,
      versionNonce: _versionNonce,
      updated: _updated,
      seed: _seed,
      ...rest
    } = element ?? {};
    return rest;
  });
  return JSON.stringify({
    elements,
    files: value.files ?? undefined,
  });
}

export const AppExcalidraw: FC<{
  uri: string;
}> = ({ uri }) => {
  const { t } = useTranslation();
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const scene$ = useMemo(
    () => new BehaviorSubject<ExcalidrawSceneValue | null>(null),
    [],
  );
  const scene = useBehaviorSubjectValue(scene$);

  const loadData = useMemoizedFn(
    async (): Promise<StoredFileData | null> => {
      try {
        const data = await xbook.fs.readFile(Uri.parse(uri));
        const parsed = JSON.parse(new TextDecoder().decode(data)) as
          | StoredFileData
          | null
          | undefined;
        if (!parsed || typeof parsed !== "object") {
          return null;
        }
        console.log("loadData", { parsed });
        return parsed;
      } catch {
        console.error("loadData error");
        // New files or read errors behave as empty scene
        return null;
      }
    },
  );

  const saveData = useMemoizedFn(async (value: ExcalidrawSceneValue) => {
    const payload: StoredFileData = {
      elements: value.elements ?? [],
      files: value.files ?? undefined,
    };
    console.log("saveData", { payload });
    await xbook.fs.writeFile(
      Uri.parse(uri),
      new TextEncoder().encode(JSON.stringify(payload)),
      { create: true, overwrite: true },
    );
  });

  // 初始化 / 读取文件
  useEffect(() => {
    let cancelled = false;
    setSaveStatus("idle");

    (async () => {
      const data = await loadData();
      if (cancelled) return;

      const initial: ExcalidrawSceneValue = {
        elements: data?.elements ?? [],
        files: data?.files,
      };
      setSaveStatus("saved");
      scene$.next(initial);
    })();

    return () => {
      cancelled = true;
    };
  }, [uri, loadData, scene$]);

  // 场景变化 → 防抖 → 去重 → 自动保存
  useEffect(() => {
    const sub = scene$
      .pipe(
        filter(
          (v): v is ExcalidrawSceneValue =>
            v !== null && v.elements !== undefined,
        ),
        debounceTime(1000),
        distinctUntilChanged(
          (a, b) => buildSceneSnapshot(a) === buildSceneSnapshot(b),
        ),
        skip(1),
      )
      .subscribe(async (value) => {
        try {
          setSaveStatus("saving");
          await saveData(value);
          setSaveStatus("saved");
        } catch (error) {
          console.error("Auto save excalidraw data failed:", error);
          setSaveStatus("error");
        }
      });

    return () => {
      sub.unsubscribe();
    };
  }, [scene$, saveData]);

  const handleSceneChange = useMemoizedFn((next: ExcalidrawSceneValue) => {
    scene$.next(next);
    setSaveStatus("dirty");
  });

  const handleManualSave = useMemoizedFn(async () => {
    const current = scene$.getValue();
    if (!current) return;
    try {
      setSaveStatus("saving");
      await saveData(current);
      setSaveStatus("saved");
    } catch (error) {
      console.error("Manual save excalidraw data failed:", error);
      setSaveStatus("error");
    }
  });

  // Cmd/Ctrl+S 手动保存
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        (event.key === "s" || event.key === "S")
      ) {
        event.preventDefault();
        void handleManualSave();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleManualSave]);

  if (!uri) {
    return <div>{t("excalidraw.uriRequired")}</div>;
  }

  if (!scene) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
        {t("excalidraw.loading")}
      </div>
    );
  }

  return (
    <ExcalidrawAICanvas
      key={uri}
      value={scene}
      onChange={handleSceneChange}
      showSaveStatus
      saveStatus={saveStatus}
      onSaveClick={handleManualSave}
    />
  );
};
