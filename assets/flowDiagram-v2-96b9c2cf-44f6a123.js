import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-4afe6487.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-72a40116.js";
import { v as setConfig } from "./index-3271cb7c.js";
import "./app-54f05dd6.js";
import "./graph-4e2c660b.js";
import "./layout-0261c176.js";
import "./index-3862675e-12313d6f.js";
import "./clone-01b3c177.js";
import "./edges-e0da2a9e-9a3dcd89.js";
import "./createText-2e5e7dd3-912843b5.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-bdeb35de.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-3ff0c9d7.js";
import "./monaco-f0dde6c1.js";
import "./vendor-c051683a.js";
import "./react-utils-d801a309.js";
import "./common-utils-40e9b830.js";
import "./react-syntax-highlighter-8e0efc03.js";
import "./remark-gfm-e39f7469.js";
const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
