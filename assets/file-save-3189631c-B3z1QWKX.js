var e = async (e$1, t = {}) => {
	Array.isArray(t) && (t = t[0]);
	const n = document.createElement("a");
	let a = e$1;
	"body" in e$1 && (a = await async function(e$2, t$1) {
		const n$1 = e$2.getReader(), a$1 = new ReadableStream({ start: (e$3) => async function t$2() {
			return n$1.read().then(({ done: n$2, value: a$2 }) => {
				if (!n$2) return e$3.enqueue(a$2), t$2();
				e$3.close();
			});
		}() }), c$1 = await new Response(a$1).blob();
		return n$1.releaseLock(), new Blob([c$1], { type: t$1 });
	}(e$1.body, e$1.headers.get("content-type"))), n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(await a);
	const r = () => {
		"function" == typeof c && c();
	}, c = t.legacySetup && t.legacySetup(r, () => c(reject), n);
	return n.addEventListener("click", () => {
		setTimeout(() => URL.revokeObjectURL(n.href), 3e4), r();
	}), n.click(), null;
};
export { e as default };
