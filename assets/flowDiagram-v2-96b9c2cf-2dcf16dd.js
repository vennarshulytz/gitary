import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-0395810f.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-de04776b.js";
import { v as setConfig } from "./index-142fd1d1.js";
import "./app-15aca6ee.js";
import "./graph-7f9295af.js";
import "./layout-c0ad524f.js";
import "./index-3862675e-2e7d2226.js";
import "./clone-45407ec2.js";
import "./edges-e0da2a9e-ef292013.js";
import "./createText-2e5e7dd3-c358ca66.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-828be605.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-6eb66d60.js";
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
