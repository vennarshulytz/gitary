import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { F as require_jsx_runtime, I as require_react, w as require_react_dom } from "./chakra-ui-CQDocrpT.js";
import { t as require_client } from "./vendor-CudnnA7L.js";
import { k as require_lodash } from "./react-utils-CvjcMHN2.js";
import "./common-utils-oTrucMut.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-DoGgeIas.js";
import "./remark-gfm-C53RL58o.js";
import { $n as require_markdown_it_task_lists, $t as iT, Qn as require_pinyin, er as require_markdown_it_multimd_table, et as R, un as m, w as If, wi as require_classnames, zn as wh } from "./app-BfwZs39Q.js";
import "./_baseUniq-214847ec-CZrvckRR.js";
import "./_basePickBy-f749536a-B9L3Mrw3.js";
import "./clone-8a8d8292-DcHSI79Y.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-CaN1Xq3F.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var g = { parse: /* @__PURE__ */ m(async (r) => {
	const t = await Yy("info", r);
	R.debug(t);
}, "parse") }, v = { version: wh.version + "" }, Gr = {
	parser: g,
	db: { getVersion: /* @__PURE__ */ m(() => v.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ m((r, t, m$1) => {
		R.debug(`rendering info diagram
` + r);
		const i = iT(t);
		If(i, 100, 400, !0), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${m$1}`);
	}, "draw") }
};
export { Gr as diagram };
