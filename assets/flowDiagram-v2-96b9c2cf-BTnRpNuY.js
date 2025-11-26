import "./chakra-ui-NHV_-bGL.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-_X4ByWTW.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import { ri as require_dist } from "./app-DQCpdmdF.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-_wCtya72.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-DWxavCdo.js";
import "./channel-DQOg61k1.js";
import "./graphlib-CtKmUqMg.js";
import "./clone-K7Y827yz.js";
import "./createText-2e5e7dd3-YYAgzkEw.js";
import "./edges-e0da2a9e-DTFqeA-s.js";
import "./dagre-BfbJ9WPE.js";
import "./index-3862675e-3PG0tCW9.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-3GQpV8dN.js";
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
