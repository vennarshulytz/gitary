import "./chakra-ui-CQDocrpT.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-DQRuIG92.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-DoGgeIas.js";
import { ri as require_dist } from "./app-BfwZs39Q.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-hW6fZysQ.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-DXln6vOW.js";
import "./channel-bHLUIDAL.js";
import "./graphlib-CQlF4ZGl.js";
import "./clone-BIT0Elft.js";
import "./createText-2e5e7dd3-9l6RD7wW.js";
import "./edges-e0da2a9e-BJL9G6Aq.js";
import "./dagre-CSQ020A1.js";
import "./index-3862675e-lsdsr9c-.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-C9vUenV-.js";
require_dayjs_min();
require_dist();
require_purify();
var diagram = {
	parser: parser$1,
	db: flowDb,
	renderer: flowRendererV2,
	styles: flowStyles,
	init: (cnf) => {
		if (!cnf.flowchart) cnf.flowchart = {};
		cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
		setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
		flowRendererV2.setConf(cnf.flowchart);
		flowDb.clear();
		flowDb.setGen("gen-2");
	}
};
export { diagram };
