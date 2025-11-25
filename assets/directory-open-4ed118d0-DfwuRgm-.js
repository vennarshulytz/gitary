function e(r$1) {
	function t$1(e$1) {
		if (Object(e$1) !== e$1) return Promise.reject(/* @__PURE__ */ new TypeError(e$1 + " is not an object."));
		var r$2 = e$1.done;
		return Promise.resolve(e$1.value).then(function(e$2) {
			return {
				value: e$2,
				done: r$2
			};
		});
	}
	return e = function(e$1) {
		this.s = e$1, this.n = e$1.next;
	}, e.prototype = {
		s: null,
		n: null,
		next: function() {
			return t$1(this.n.apply(this.s, arguments));
		},
		return: function(e$1) {
			var r$2 = this.s.return;
			return void 0 === r$2 ? Promise.resolve({
				value: e$1,
				done: !0
			}) : t$1(r$2.apply(this.s, arguments));
		},
		throw: function(e$1) {
			var r$2 = this.s.return;
			return void 0 === r$2 ? Promise.reject(e$1) : t$1(r$2.apply(this.s, arguments));
		}
	}, new e(r$1);
}
var r = async (t$1, n, i = t$1.name, a) => {
	const o = [], l = [];
	var s, u = !1, c = !1;
	try {
		for (var y, f = function(r$1) {
			var t$2, n$1, i$1, a$1 = 2;
			for ("undefined" != typeof Symbol && (n$1 = Symbol.asyncIterator, i$1 = Symbol.iterator); a$1--;) {
				if (n$1 && null != (t$2 = r$1[n$1])) return t$2.call(r$1);
				if (i$1 && null != (t$2 = r$1[i$1])) return new e(t$2.call(r$1));
				n$1 = "@@asyncIterator", i$1 = "@@iterator";
			}
			throw new TypeError("Object is not async iterable");
		}(t$1.values()); u = !(y = await f.next()).done; u = !1) {
			const e$1 = y.value, s$1 = `${i}/${e$1.name}`;
			"file" === e$1.kind ? l.push(e$1.getFile().then((r$1) => (r$1.directoryHandle = t$1, r$1.handle = e$1, Object.defineProperty(r$1, "webkitRelativePath", {
				configurable: !0,
				enumerable: !0,
				get: () => s$1
			})))) : "directory" !== e$1.kind || !n || a && a(e$1) || o.push(r(e$1, n, s$1, a));
		}
	} catch (e$1) {
		c = !0, s = e$1;
	} finally {
		try {
			u && null != f.return && await f.return();
		} finally {
			if (c) throw s;
		}
	}
	return [...(await Promise.all(o)).flat(), ...await Promise.all(l)];
};
var t = async (e$1 = {}) => {
	e$1.recursive = e$1.recursive || !1;
	return r(await window.showDirectoryPicker({
		id: e$1.id,
		startIn: e$1.startIn
	}), e$1.recursive, void 0, e$1.skipDirectory);
};
export { t as default };
