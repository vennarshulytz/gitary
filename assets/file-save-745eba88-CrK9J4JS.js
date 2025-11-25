var e = async (e$1, t = [{}], a = null, i = !1, n = null) => {
	Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
	const s = [];
	let c = null;
	if (e$1 instanceof Blob && e$1.type ? c = e$1.type : e$1.headers && e$1.headers.get("content-type") && (c = e$1.headers.get("content-type")), t.forEach((e$2, t$1) => {
		s[t$1] = {
			description: e$2.description || "",
			accept: {}
		}, e$2.mimeTypes ? (0 === t$1 && c && e$2.mimeTypes.push(c), e$2.mimeTypes.map((a$1) => {
			s[t$1].accept[a$1] = e$2.extensions || [];
		})) : c && (s[t$1].accept[c] = e$2.extensions || []);
	}), a) try {
		await a.getFile();
	} catch (e$2) {
		if (a = null, i) throw e$2;
	}
	const r = a || await window.showSaveFilePicker({
		suggestedName: t[0].fileName,
		id: t[0].id,
		startIn: t[0].startIn,
		types: s,
		excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
	});
	!a && n && n();
	const l = await r.createWritable();
	if ("stream" in e$1) return await e$1.stream().pipeTo(l), r;
	return "body" in e$1 ? (await e$1.body.pipeTo(l), r) : (await l.write(await e$1), await l.close(), r);
};
export { e as default };
