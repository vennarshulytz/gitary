var e = async (e$1 = [{}]) => (Array.isArray(e$1) || (e$1 = [e$1]), new Promise((t, n) => {
	const a = document.createElement("input");
	a.type = "file";
	const i = [...e$1.map((e$2) => e$2.mimeTypes || []), ...e$1.map((e$2) => e$2.extensions || [])].join();
	a.multiple = e$1[0].multiple || !1, a.accept = i || "";
	const c = (e$2) => {
		"function" == typeof l && l(), t(e$2);
	}, l = e$1[0].legacySetup && e$1[0].legacySetup(c, () => l(n), a);
	a.addEventListener("change", () => {
		c(a.multiple ? Array.from(a.files) : a.files[0]);
	}), a.click();
}));
export { e as default };
