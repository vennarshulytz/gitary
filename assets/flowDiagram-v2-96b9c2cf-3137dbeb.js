import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-d6d76e1b.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-9e579d36.js";
import { v as setConfig } from "./index-6f215d87.js";
import "./app-32980687.js";
import "./graph-01799910.js";
import "./layout-5eee36a4.js";
import "./index-3862675e-2e467423.js";
import "./clone-baef5ce8.js";
import "./edges-e0da2a9e-8885a7c6.js";
import "./createText-2e5e7dd3-a0be47d8.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-2202c2a6.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-01cd5059.js";
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
