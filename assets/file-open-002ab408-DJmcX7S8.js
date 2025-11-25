var e = async (e$1) => {
	const t$1 = await e$1.getFile();
	return t$1.handle = e$1, t$1;
};
var t = async (t$1 = [{}]) => {
	Array.isArray(t$1) || (t$1 = [t$1]);
	const i = [];
	t$1.forEach((e$1, t$2) => {
		i[t$2] = {
			description: e$1.description || "",
			accept: {}
		}, e$1.mimeTypes ? e$1.mimeTypes.map((a$1) => {
			i[t$2].accept[a$1] = e$1.extensions || [];
		}) : i[t$2].accept["*/*"] = e$1.extensions || [];
	});
	const a = await window.showOpenFilePicker({
		id: t$1[0].id,
		startIn: t$1[0].startIn,
		types: i,
		multiple: t$1[0].multiple || !1,
		excludeAcceptAllOption: t$1[0].excludeAcceptAllOption || !1
	}), c = await Promise.all(a.map(e));
	return t$1[0].multiple ? c : c[0];
};
export { t as default };
