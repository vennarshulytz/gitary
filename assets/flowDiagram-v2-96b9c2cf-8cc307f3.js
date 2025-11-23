import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-df73d95b.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-515a026c.js";
import { v as setConfig } from "./index-e19f80aa.js";
import "./app-b9c48d6c.js";
import "./graph-8dfdb4a2.js";
import "./layout-95678af4.js";
import "./index-3862675e-fede45b9.js";
import "./clone-f9f7be9f.js";
import "./edges-e0da2a9e-ede20864.js";
import "./createText-2e5e7dd3-e3ac8e0c.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-ee9c52a9.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-ea77ee5a.js";
import "./monaco-f0dde6c1.js";
import "./vendor-c051683a.js";
import "./react-utils-d801a309.js";
import "./common-utils-40e9b830.js";
import "./react-syntax-highlighter-bb88d724.js";
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
