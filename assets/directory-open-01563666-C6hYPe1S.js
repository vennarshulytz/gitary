var e = async (e$1 = [{}]) => (Array.isArray(e$1) || (e$1 = [e$1]), e$1[0].recursive = e$1[0].recursive || !1, new Promise((t, r) => {
	const i = document.createElement("input");
	i.type = "file", i.webkitdirectory = !0;
	const c = (e$2) => {
		"function" == typeof a && a(), t(e$2);
	}, a = e$1[0].legacySetup && e$1[0].legacySetup(c, () => a(r), i);
	i.addEventListener("change", () => {
		let t$1 = Array.from(i.files);
		e$1[0].recursive ? e$1[0].recursive && e$1[0].skipDirectory && (t$1 = t$1.filter((t$2) => t$2.webkitRelativePath.split("/").every((t$3) => !e$1[0].skipDirectory({
			name: t$3,
			kind: "directory"
		})))) : t$1 = t$1.filter((e$2) => 2 === e$2.webkitRelativePath.split("/").length), c(t$1);
	}), i.click();
}));
export { e as default };
