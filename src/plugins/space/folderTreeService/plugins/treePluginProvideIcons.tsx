import { FolderTreeNode } from "@/plugins/space/folderTreeService/types";
import { createTreeHelper } from "@/toolkit/components/tree/treePlugins";
import {
  Brain,
  FilePlus,
  FolderPlus,
  FileText,
  FileCode,
  Pencil,
  Trash2,
  Copy,
  RefreshCw,
  Plus,
  Link,
  PenTool,
  Network,
} from "lucide-react";
import { SiMarkdown } from "react-icons/si";

export default createTreeHelper<FolderTreeNode>().createPlugin({
  activate({ viewSystem: { renderer } }) {
    renderer.register("Link", Link);
    renderer.register("FolderPlus", FolderPlus);
    renderer.register("FilePlus", FilePlus);
    renderer.register("Plus", Plus);
    renderer.register("Brain", Brain);
    renderer.register("Pencil", Pencil);
    renderer.register("Trash2", Trash2);
    renderer.register("Copy", Copy);
    renderer.register("FileText", FileText);
    renderer.register("FileCode", FileCode);
    renderer.register("RefreshCw", RefreshCw);
    renderer.register("PenTool", PenTool);
    renderer.register("Network", Network);
    renderer.register("SiMarkdown", SiMarkdown);
  },
});
