import { openerService } from "@/services/opener.service";
import { AppExcalidraw } from "./app";
import { createPlugin } from "xbook/common/createPlugin";
import { t } from "@/i18n/utils";
import { FILE_TYPES } from "@/plugins/space/folderTreeService/constants/fileTypes";

const EXCALIDRAW_COLOR = FILE_TYPES.excalidraw.color;

export const provideExcalidraw = createPlugin({
  initilize(xbook) {
    xbook.componentService.register("excalidraw", AppExcalidraw);

    openerService.register({
      id: "excalidraw",
      label: t("apps.excalidraw"),
      showInTreeMenu: true,
      icon: { name: "PenTool", color: EXCALIDRAW_COLOR },
      match: [".excalidraw.json", ".excalidraw"],
      priority: 100,
      templates: [
        {
          id: "new-excalidraw",
          label: t("excalidraw.newFile"),
          defaultFileName: "Untitled.excalidraw.json",
          initialContent: "{}",
          icon: { name: "PenTool", color: EXCALIDRAW_COLOR },
        },
      ],
      init: (uri) => {
        const getFileName = (value: string) => {
          return value.split("/").pop() ?? "unknown";
        };

        xbook.layoutService.pageBox.addPage({
          id: `excalidraw:${uri}`,
          title: `${t("apps.excalidraw")}:${getFileName(uri)}`,
          viewData: {
            type: "excalidraw",
            props: { uri },
          },
        });
      },
    });
  },
});
