import "./chakra-ui-BP0KsvPN.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-D28zeVR0.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-CC4NHZ99.js";
import { ri as require_dist } from "./app-BiKdazfq.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-BdwE7Q2A.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-S-HVn8G8.js";
import "./channel-B3hplsj_.js";
import "./graphlib-CKQum7-R.js";
import "./clone-DvD8f-VH.js";
import "./createText-2e5e7dd3-D5_s_NBi.js";
import "./edges-e0da2a9e-CyvX9dQm.js";
import "./dagre-BDKgcGXU.js";
import "./index-3862675e-dpTzSZ6u.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-Deg3fRvN.js";
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
