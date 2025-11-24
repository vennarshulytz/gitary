import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-8be4e1e6.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-a46d10a2.js";
import { v as setConfig } from "./index-8670840d.js";
import "./app-a3875679.js";
import "./graph-735e8c1e.js";
import "./layout-fedf003c.js";
import "./index-3862675e-1015fa1e.js";
import "./clone-e18893b0.js";
import "./edges-e0da2a9e-f1fdad5d.js";
import "./createText-2e5e7dd3-58491a55.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-19832c1e.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-f6394785.js";
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
