import { s as __toESM, t as __commonJSMin } from "./rolldown-runtime-p26lAE5v.js";
import { A as require_hoist_non_react_statics_cjs, I as require_react, w as require_react_dom } from "./chakra-ui-CQDocrpT.js";
function _typeof(o$1) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$2) {
		return typeof o$2;
	} : function(o$2) {
		return o$2 && "function" == typeof Symbol && o$2.constructor === Symbol && o$2 !== Symbol.prototype ? "symbol" : typeof o$2;
	}, _typeof(o$1);
}
function toPrimitive(t$2, r$1) {
	if ("object" != _typeof(t$2) || !t$2) return t$2;
	var e$1 = t$2[Symbol.toPrimitive];
	if (void 0 !== e$1) {
		var i$1 = e$1.call(t$2, r$1 || "default");
		if ("object" != _typeof(i$1)) return i$1;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r$1 ? String : Number)(t$2);
}
function toPropertyKey(t$2) {
	var i$1 = toPrimitive(t$2, "string");
	return "symbol" == _typeof(i$1) ? i$1 : i$1 + "";
}
function _defineProperty(e$1, r$1, t$2) {
	return (r$1 = toPropertyKey(r$1)) in e$1 ? Object.defineProperty(e$1, r$1, {
		value: t$2,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e$1[r$1] = t$2, e$1;
}
function n$1(n$2) {
	for (var r$1 = arguments.length, t$2 = Array(r$1 > 1 ? r$1 - 1 : 0), e$1 = 1; e$1 < r$1; e$1++) t$2[e$1 - 1] = arguments[e$1];
	throw Error("[Immer] minified error nr: " + n$2 + (t$2.length ? " " + t$2.map((function(n$3) {
		return "'" + n$3 + "'";
	})).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n$2) {
	return !!n$2 && !!n$2[Q];
}
function t$1(n$2) {
	var r$1;
	return !!n$2 && (function(n$3) {
		if (!n$3 || "object" != typeof n$3) return !1;
		var r$2 = Object.getPrototypeOf(n$3);
		if (null === r$2) return !0;
		var t$2 = Object.hasOwnProperty.call(r$2, "constructor") && r$2.constructor;
		return t$2 === Object || "function" == typeof t$2 && Function.toString.call(t$2) === Z;
	}(n$2) || Array.isArray(n$2) || !!n$2[L] || !!(null === (r$1 = n$2.constructor) || void 0 === r$1 ? void 0 : r$1[L]) || s(n$2) || v(n$2));
}
function i(n$2, r$1, t$2) {
	void 0 === t$2 && (t$2 = !1), 0 === o(n$2) ? (t$2 ? Object.keys : nn)(n$2).forEach((function(e$1) {
		t$2 && "symbol" == typeof e$1 || r$1(e$1, n$2[e$1], n$2);
	})) : n$2.forEach((function(t$3, e$1) {
		return r$1(e$1, t$3, n$2);
	}));
}
function o(n$2) {
	var r$1 = n$2[Q];
	return r$1 ? r$1.i > 3 ? r$1.i - 4 : r$1.i : Array.isArray(n$2) ? 1 : s(n$2) ? 2 : v(n$2) ? 3 : 0;
}
function u$1(n$2, r$1) {
	return 2 === o(n$2) ? n$2.has(r$1) : Object.prototype.hasOwnProperty.call(n$2, r$1);
}
function a(n$2, r$1) {
	return 2 === o(n$2) ? n$2.get(r$1) : n$2[r$1];
}
function f$1(n$2, r$1, t$2) {
	var e$1 = o(n$2);
	2 === e$1 ? n$2.set(r$1, t$2) : 3 === e$1 ? n$2.add(t$2) : n$2[r$1] = t$2;
}
function c$1(n$2, r$1) {
	return n$2 === r$1 ? 0 !== n$2 || 1 / n$2 == 1 / r$1 : n$2 != n$2 && r$1 != r$1;
}
function s(n$2) {
	return X && n$2 instanceof Map;
}
function v(n$2) {
	return q$1 && n$2 instanceof Set;
}
function p$1(n$2) {
	return n$2.o || n$2.t;
}
function l$1(n$2) {
	if (Array.isArray(n$2)) return Array.prototype.slice.call(n$2);
	var r$1 = rn(n$2);
	delete r$1[Q];
	for (var t$2 = nn(r$1), e$1 = 0; e$1 < t$2.length; e$1++) {
		var i$1 = t$2[e$1], o$1 = r$1[i$1];
		!1 === o$1.writable && (o$1.writable = !0, o$1.configurable = !0), (o$1.get || o$1.set) && (r$1[i$1] = {
			configurable: !0,
			writable: !0,
			enumerable: o$1.enumerable,
			value: n$2[i$1]
		});
	}
	return Object.create(Object.getPrototypeOf(n$2), r$1);
}
function d$1(n$2, e$1) {
	return void 0 === e$1 && (e$1 = !1), y(n$2) || r(n$2) || !t$1(n$2) || (o(n$2) > 1 && (n$2.set = n$2.add = n$2.clear = n$2.delete = h$1), Object.freeze(n$2), e$1 && i(n$2, (function(n$3, r$1) {
		return d$1(r$1, !0);
	}), !0)), n$2;
}
function h$1() {
	n$1(2);
}
function y(n$2) {
	return null == n$2 || "object" != typeof n$2 || Object.isFrozen(n$2);
}
function b$1(r$1) {
	var t$2 = tn[r$1];
	return t$2 || n$1(18, r$1), t$2;
}
function m$2(n$2, r$1) {
	tn[n$2] || (tn[n$2] = r$1);
}
function _() {
	return U;
}
function j(n$2, r$1) {
	r$1 && (b$1("Patches"), n$2.u = [], n$2.s = [], n$2.v = r$1);
}
function g$1(n$2) {
	O(n$2), n$2.p.forEach(S), n$2.p = null;
}
function O(n$2) {
	n$2 === U && (U = n$2.l);
}
function w(n$2) {
	return U = {
		p: [],
		l: U,
		h: n$2,
		m: !0,
		_: 0
	};
}
function S(n$2) {
	var r$1 = n$2[Q];
	0 === r$1.i || 1 === r$1.i ? r$1.j() : r$1.g = !0;
}
function P(r$1, e$1) {
	e$1._ = e$1.p.length;
	var i$1 = e$1.p[0], o$1 = void 0 !== r$1 && r$1 !== i$1;
	return e$1.h.O || b$1("ES5").S(e$1, r$1, o$1), o$1 ? (i$1[Q].P && (g$1(e$1), n$1(4)), t$1(r$1) && (r$1 = M(e$1, r$1), e$1.l || x(e$1, r$1)), e$1.u && b$1("Patches").M(i$1[Q].t, r$1, e$1.u, e$1.s)) : r$1 = M(e$1, i$1, []), g$1(e$1), e$1.u && e$1.v(e$1.u, e$1.s), r$1 !== H ? r$1 : void 0;
}
function M(n$2, r$1, t$2) {
	if (y(r$1)) return r$1;
	var e$1 = r$1[Q];
	if (!e$1) return i(r$1, (function(i$1, o$2) {
		return A(n$2, e$1, r$1, i$1, o$2, t$2);
	}), !0), r$1;
	if (e$1.A !== n$2) return r$1;
	if (!e$1.P) return x(n$2, e$1.t, !0), e$1.t;
	if (!e$1.I) {
		e$1.I = !0, e$1.A._--;
		var o$1 = 4 === e$1.i || 5 === e$1.i ? e$1.o = l$1(e$1.k) : e$1.o, u$2 = o$1, a$1 = !1;
		3 === e$1.i && (u$2 = new Set(o$1), o$1.clear(), a$1 = !0), i(u$2, (function(r$2, i$1) {
			return A(n$2, e$1, o$1, r$2, i$1, t$2, a$1);
		})), x(n$2, o$1, !1), t$2 && n$2.u && b$1("Patches").N(e$1, t$2, n$2.u, n$2.s);
	}
	return e$1.o;
}
function A(e$1, i$1, o$1, a$1, c$2, s$1, v$1) {
	if (r(c$2)) {
		var p$2 = M(e$1, c$2, s$1 && i$1 && 3 !== i$1.i && !u$1(i$1.R, a$1) ? s$1.concat(a$1) : void 0);
		if (f$1(o$1, a$1, p$2), !r(p$2)) return;
		e$1.m = !1;
	} else v$1 && o$1.add(c$2);
	if (t$1(c$2) && !y(c$2)) {
		if (!e$1.h.D && e$1._ < 1) return;
		M(e$1, c$2), i$1 && i$1.A.l || x(e$1, c$2);
	}
}
function x(n$2, r$1, t$2) {
	void 0 === t$2 && (t$2 = !1), !n$2.l && n$2.h.D && n$2.m && d$1(r$1, t$2);
}
function z(n$2, r$1) {
	var t$2 = n$2[Q];
	return (t$2 ? p$1(t$2) : n$2)[r$1];
}
function I(n$2, r$1) {
	if (r$1 in n$2) for (var t$2 = Object.getPrototypeOf(n$2); t$2;) {
		var e$1 = Object.getOwnPropertyDescriptor(t$2, r$1);
		if (e$1) return e$1;
		t$2 = Object.getPrototypeOf(t$2);
	}
}
function k$1(n$2) {
	n$2.P || (n$2.P = !0, n$2.l && k$1(n$2.l));
}
function E(n$2) {
	n$2.o || (n$2.o = l$1(n$2.t));
}
function N(n$2, r$1, t$2) {
	var e$1 = s(r$1) ? b$1("MapSet").F(r$1, t$2) : v(r$1) ? b$1("MapSet").T(r$1, t$2) : n$2.O ? function(n$3, r$2) {
		var t$3 = Array.isArray(n$3), e$2 = {
			i: t$3 ? 1 : 0,
			A: r$2 ? r$2.A : _(),
			P: !1,
			I: !1,
			R: {},
			l: r$2,
			t: n$3,
			k: null,
			o: null,
			j: null,
			C: !1
		}, i$1 = e$2, o$1 = en;
		t$3 && (i$1 = [e$2], o$1 = on);
		var u$2 = Proxy.revocable(i$1, o$1), a$1 = u$2.revoke, f$2 = u$2.proxy;
		return e$2.k = f$2, e$2.j = a$1, f$2;
	}(r$1, t$2) : b$1("ES5").J(r$1, t$2);
	return (t$2 ? t$2.A : _()).p.push(e$1), e$1;
}
function R(e$1) {
	return r(e$1) || n$1(22, e$1), function n$2(r$1) {
		if (!t$1(r$1)) return r$1;
		var e$2, u$2 = r$1[Q], c$2 = o(r$1);
		if (u$2) {
			if (!u$2.P && (u$2.i < 4 || !b$1("ES5").K(u$2))) return u$2.t;
			u$2.I = !0, e$2 = D(r$1, c$2), u$2.I = !1;
		} else e$2 = D(r$1, c$2);
		return i(e$2, (function(r$2, t$2) {
			u$2 && a(u$2.t, r$2) === t$2 || f$1(e$2, r$2, n$2(t$2));
		})), 3 === c$2 ? new Set(e$2) : e$2;
	}(e$1);
}
function D(n$2, r$1) {
	switch (r$1) {
		case 2: return new Map(n$2);
		case 3: return Array.from(n$2);
	}
	return l$1(n$2);
}
function F() {
	function t$2(n$2, r$1) {
		var t$3 = s$1[n$2];
		return t$3 ? t$3.enumerable = r$1 : s$1[n$2] = t$3 = {
			configurable: !0,
			enumerable: r$1,
			get: function() {
				var r$2 = this[Q];
				return en.get(r$2, n$2);
			},
			set: function(r$2) {
				var t$4 = this[Q];
				en.set(t$4, n$2, r$2);
			}
		}, t$3;
	}
	function e$1(n$2) {
		for (var r$1 = n$2.length - 1; r$1 >= 0; r$1--) {
			var t$3 = n$2[r$1][Q];
			if (!t$3.P) switch (t$3.i) {
				case 5:
					a$1(t$3) && k$1(t$3);
					break;
				case 4: o$1(t$3) && k$1(t$3);
			}
		}
	}
	function o$1(n$2) {
		for (var r$1 = n$2.t, t$3 = n$2.k, e$2 = nn(t$3), i$1 = e$2.length - 1; i$1 >= 0; i$1--) {
			var o$2 = e$2[i$1];
			if (o$2 !== Q) {
				var a$2 = r$1[o$2];
				if (void 0 === a$2 && !u$1(r$1, o$2)) return !0;
				var f$2 = t$3[o$2], s$2 = f$2 && f$2[Q];
				if (s$2 ? s$2.t !== a$2 : !c$1(f$2, a$2)) return !0;
			}
		}
		var v$1 = !!r$1[Q];
		return e$2.length !== nn(r$1).length + (v$1 ? 0 : 1);
	}
	function a$1(n$2) {
		var r$1 = n$2.k;
		if (r$1.length !== n$2.t.length) return !0;
		var t$3 = Object.getOwnPropertyDescriptor(r$1, r$1.length - 1);
		if (t$3 && !t$3.get) return !0;
		for (var e$2 = 0; e$2 < r$1.length; e$2++) if (!r$1.hasOwnProperty(e$2)) return !0;
		return !1;
	}
	var s$1 = {};
	m$2("ES5", {
		J: function(n$2, r$1) {
			var e$2 = Array.isArray(n$2), i$1 = function(n$3, r$2) {
				if (n$3) {
					for (var e$3 = Array(r$2.length), i$2 = 0; i$2 < r$2.length; i$2++) Object.defineProperty(e$3, "" + i$2, t$2(i$2, !0));
					return e$3;
				}
				var o$3 = rn(r$2);
				delete o$3[Q];
				for (var u$2 = nn(o$3), a$2 = 0; a$2 < u$2.length; a$2++) {
					var f$2 = u$2[a$2];
					o$3[f$2] = t$2(f$2, n$3 || !!o$3[f$2].enumerable);
				}
				return Object.create(Object.getPrototypeOf(r$2), o$3);
			}(e$2, n$2), o$2 = {
				i: e$2 ? 5 : 4,
				A: r$1 ? r$1.A : _(),
				P: !1,
				I: !1,
				R: {},
				l: r$1,
				t: n$2,
				k: i$1,
				o: null,
				g: !1,
				C: !1
			};
			return Object.defineProperty(i$1, Q, {
				value: o$2,
				writable: !0
			}), i$1;
		},
		S: function(n$2, t$3, o$2) {
			o$2 ? r(t$3) && t$3[Q].A === n$2 && e$1(n$2.p) : (n$2.u && function n$3(r$1) {
				if (r$1 && "object" == typeof r$1) {
					var t$4 = r$1[Q];
					if (t$4) {
						var e$2 = t$4.t, o$3 = t$4.k, f$2 = t$4.R, c$2 = t$4.i;
						if (4 === c$2) i(o$3, (function(r$2) {
							r$2 !== Q && (void 0 !== e$2[r$2] || u$1(e$2, r$2) ? f$2[r$2] || n$3(o$3[r$2]) : (f$2[r$2] = !0, k$1(t$4)));
						})), i(e$2, (function(n$4) {
							void 0 !== o$3[n$4] || u$1(o$3, n$4) || (f$2[n$4] = !1, k$1(t$4));
						}));
						else if (5 === c$2) {
							if (a$1(t$4) && (k$1(t$4), f$2.length = !0), o$3.length < e$2.length) for (var s$2 = o$3.length; s$2 < e$2.length; s$2++) f$2[s$2] = !1;
							else for (var v$1 = e$2.length; v$1 < o$3.length; v$1++) f$2[v$1] = !0;
							for (var p$2 = Math.min(o$3.length, e$2.length), l$2 = 0; l$2 < p$2; l$2++) o$3.hasOwnProperty(l$2) || (f$2[l$2] = !0), void 0 === f$2[l$2] && n$3(o$3[l$2]);
						}
					}
				}
			}(n$2.p[0]), e$1(n$2.p));
		},
		K: function(n$2) {
			return 4 === n$2.i ? o$1(n$2) : a$1(n$2);
		}
	});
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q$1 = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state";
"undefined" != typeof Symbol && Symbol.iterator;
var Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n$2) {
	return Object.getOwnPropertyNames(n$2).concat(Object.getOwnPropertySymbols(n$2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n$2) {
	var r$1 = {};
	return nn(n$2).forEach((function(t$2) {
		r$1[t$2] = Object.getOwnPropertyDescriptor(n$2, t$2);
	})), r$1;
}, tn = {}, en = {
	get: function(n$2, r$1) {
		if (r$1 === Q) return n$2;
		var e$1 = p$1(n$2);
		if (!u$1(e$1, r$1)) return function(n$3, r$2, t$2) {
			var e$2, i$2 = I(r$2, t$2);
			return i$2 ? "value" in i$2 ? i$2.value : null === (e$2 = i$2.get) || void 0 === e$2 ? void 0 : e$2.call(n$3.k) : void 0;
		}(n$2, e$1, r$1);
		var i$1 = e$1[r$1];
		return n$2.I || !t$1(i$1) ? i$1 : i$1 === z(n$2.t, r$1) ? (E(n$2), n$2.o[r$1] = N(n$2.A.h, i$1, n$2)) : i$1;
	},
	has: function(n$2, r$1) {
		return r$1 in p$1(n$2);
	},
	ownKeys: function(n$2) {
		return Reflect.ownKeys(p$1(n$2));
	},
	set: function(n$2, r$1, t$2) {
		var e$1 = I(p$1(n$2), r$1);
		if (null == e$1 ? void 0 : e$1.set) return e$1.set.call(n$2.k, t$2), !0;
		if (!n$2.P) {
			var i$1 = z(p$1(n$2), r$1), o$1 = null == i$1 ? void 0 : i$1[Q];
			if (o$1 && o$1.t === t$2) return n$2.o[r$1] = t$2, n$2.R[r$1] = !1, !0;
			if (c$1(t$2, i$1) && (void 0 !== t$2 || u$1(n$2.t, r$1))) return !0;
			E(n$2), k$1(n$2);
		}
		return n$2.o[r$1] === t$2 && (void 0 !== t$2 || r$1 in n$2.o) || Number.isNaN(t$2) && Number.isNaN(n$2.o[r$1]) || (n$2.o[r$1] = t$2, n$2.R[r$1] = !0), !0;
	},
	deleteProperty: function(n$2, r$1) {
		return void 0 !== z(n$2.t, r$1) || r$1 in n$2.t ? (n$2.R[r$1] = !1, E(n$2), k$1(n$2)) : delete n$2.R[r$1], n$2.o && delete n$2.o[r$1], !0;
	},
	getOwnPropertyDescriptor: function(n$2, r$1) {
		var t$2 = p$1(n$2), e$1 = Reflect.getOwnPropertyDescriptor(t$2, r$1);
		return e$1 ? {
			writable: !0,
			configurable: 1 !== n$2.i || "length" !== r$1,
			enumerable: e$1.enumerable,
			value: t$2[r$1]
		} : e$1;
	},
	defineProperty: function() {
		n$1(11);
	},
	getPrototypeOf: function(n$2) {
		return Object.getPrototypeOf(n$2.t);
	},
	setPrototypeOf: function() {
		n$1(12);
	}
}, on = {};
i(en, (function(n$2, r$1) {
	on[n$2] = function() {
		return arguments[0] = arguments[0][0], r$1.apply(this, arguments);
	};
})), on.deleteProperty = function(r$1, t$2) {
	return on.set.call(this, r$1, t$2, void 0);
}, on.set = function(r$1, t$2, e$1) {
	return en.set.call(this, r$1[0], t$2, e$1, r$1[0]);
};
var an = new (function() {
	function e$1(r$1) {
		var e$2 = this;
		this.O = B, this.D = !0, this.produce = function(r$2, i$2, o$1) {
			if ("function" == typeof r$2 && "function" != typeof i$2) {
				var u$2 = i$2;
				i$2 = r$2;
				var a$1 = e$2;
				return function(n$2) {
					var r$3 = this;
					void 0 === n$2 && (n$2 = u$2);
					for (var t$2 = arguments.length, e$3 = Array(t$2 > 1 ? t$2 - 1 : 0), o$2 = 1; o$2 < t$2; o$2++) e$3[o$2 - 1] = arguments[o$2];
					return a$1.produce(n$2, (function(n$3) {
						var t$3;
						return (t$3 = i$2).call.apply(t$3, [r$3, n$3].concat(e$3));
					}));
				};
			}
			var f$2;
			if ("function" != typeof i$2 && n$1(6), void 0 !== o$1 && "function" != typeof o$1 && n$1(7), t$1(r$2)) {
				var c$2 = w(e$2), s$1 = N(e$2, r$2, void 0), v$1 = !0;
				try {
					f$2 = i$2(s$1), v$1 = !1;
				} finally {
					v$1 ? g$1(c$2) : O(c$2);
				}
				return "undefined" != typeof Promise && f$2 instanceof Promise ? f$2.then((function(n$2) {
					return j(c$2, o$1), P(n$2, c$2);
				}), (function(n$2) {
					throw g$1(c$2), n$2;
				})) : (j(c$2, o$1), P(f$2, c$2));
			}
			if (!r$2 || "object" != typeof r$2) {
				if (void 0 === (f$2 = i$2(r$2)) && (f$2 = r$2), f$2 === H && (f$2 = void 0), e$2.D && d$1(f$2, !0), o$1) {
					var p$2 = [], l$2 = [];
					b$1("Patches").M(r$2, f$2, p$2, l$2), o$1(p$2, l$2);
				}
				return f$2;
			}
			n$1(21, r$2);
		}, this.produceWithPatches = function(n$2, r$2) {
			if ("function" == typeof n$2) return function(r$3) {
				for (var t$3 = arguments.length, i$3 = Array(t$3 > 1 ? t$3 - 1 : 0), o$2 = 1; o$2 < t$3; o$2++) i$3[o$2 - 1] = arguments[o$2];
				return e$2.produceWithPatches(r$3, (function(r$4) {
					return n$2.apply(void 0, [r$4].concat(i$3));
				}));
			};
			var t$2, i$2, o$1 = e$2.produce(n$2, r$2, (function(n$3, r$3) {
				t$2 = n$3, i$2 = r$3;
			}));
			return "undefined" != typeof Promise && o$1 instanceof Promise ? o$1.then((function(n$3) {
				return [
					n$3,
					t$2,
					i$2
				];
			})) : [
				o$1,
				t$2,
				i$2
			];
		}, "boolean" == typeof (null == r$1 ? void 0 : r$1.useProxies) && this.setUseProxies(r$1.useProxies), "boolean" == typeof (null == r$1 ? void 0 : r$1.autoFreeze) && this.setAutoFreeze(r$1.autoFreeze);
	}
	var i$1 = e$1.prototype;
	return i$1.createDraft = function(e$2) {
		t$1(e$2) || n$1(8), r(e$2) && (e$2 = R(e$2));
		var i$2 = w(this), o$1 = N(this, e$2, void 0);
		return o$1[Q].C = !0, O(i$2), o$1;
	}, i$1.finishDraft = function(r$1, t$2) {
		var i$2 = (r$1 && r$1[Q]).A;
		return j(i$2, t$2), P(void 0, i$2);
	}, i$1.setAutoFreeze = function(n$2) {
		this.D = n$2;
	}, i$1.setUseProxies = function(r$1) {
		r$1 && !B && n$1(20), this.O = r$1;
	}, i$1.applyPatches = function(n$2, t$2) {
		var e$2;
		for (e$2 = t$2.length - 1; e$2 >= 0; e$2--) {
			var i$2 = t$2[e$2];
			if (0 === i$2.path.length && "replace" === i$2.op) {
				n$2 = i$2.value;
				break;
			}
		}
		e$2 > -1 && (t$2 = t$2.slice(e$2 + 1));
		var o$1 = b$1("Patches").$;
		return r(n$2) ? o$1(n$2, t$2) : this.produce(n$2, (function(n$3) {
			return o$1(n$3, t$2);
		}));
	}, e$1;
}())(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var immer_esm_default = fn;
function ownKeys(e$1, r$1) {
	var t$2 = Object.keys(e$1);
	if (Object.getOwnPropertySymbols) {
		var o$1 = Object.getOwnPropertySymbols(e$1);
		r$1 && (o$1 = o$1.filter(function(r$2) {
			return Object.getOwnPropertyDescriptor(e$1, r$2).enumerable;
		})), t$2.push.apply(t$2, o$1);
	}
	return t$2;
}
function _objectSpread2(e$1) {
	for (var r$1 = 1; r$1 < arguments.length; r$1++) {
		var t$2 = null != arguments[r$1] ? arguments[r$1] : {};
		r$1 % 2 ? ownKeys(Object(t$2), !0).forEach(function(r$2) {
			_defineProperty(e$1, r$2, t$2[r$2]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e$1, Object.getOwnPropertyDescriptors(t$2)) : ownKeys(Object(t$2)).forEach(function(r$2) {
			Object.defineProperty(e$1, r$2, Object.getOwnPropertyDescriptor(t$2, r$2));
		});
	}
	return e$1;
}
function formatProdErrorMessage(code) {
	return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = (function() {
	return typeof Symbol === "function" && Symbol.observable || "@@observable";
})();
var randomString = function randomString$1() {
	return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
	INIT: "@@redux/INIT" + randomString(),
	REPLACE: "@@redux/REPLACE" + randomString(),
	PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
		return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	}
};
function isPlainObject$1(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	var proto = obj;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
	var _ref2;
	if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(formatProdErrorMessage(0));
	if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
		enhancer = preloadedState;
		preloadedState = void 0;
	}
	if (typeof enhancer !== "undefined") {
		if (typeof enhancer !== "function") throw new Error(formatProdErrorMessage(1));
		return enhancer(createStore)(reducer, preloadedState);
	}
	if (typeof reducer !== "function") throw new Error(formatProdErrorMessage(2));
	var currentReducer = reducer;
	var currentState = preloadedState;
	var currentListeners = [];
	var nextListeners = currentListeners;
	var isDispatching = false;
	function ensureCanMutateNextListeners() {
		if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
	}
	function getState() {
		if (isDispatching) throw new Error(formatProdErrorMessage(3));
		return currentState;
	}
	function subscribe(listener$1) {
		if (typeof listener$1 !== "function") throw new Error(formatProdErrorMessage(4));
		if (isDispatching) throw new Error(formatProdErrorMessage(5));
		var isSubscribed = true;
		ensureCanMutateNextListeners();
		nextListeners.push(listener$1);
		return function unsubscribe() {
			if (!isSubscribed) return;
			if (isDispatching) throw new Error(formatProdErrorMessage(6));
			isSubscribed = false;
			ensureCanMutateNextListeners();
			var index = nextListeners.indexOf(listener$1);
			nextListeners.splice(index, 1);
			currentListeners = null;
		};
	}
	function dispatch(action) {
		if (!isPlainObject$1(action)) throw new Error(formatProdErrorMessage(7));
		if (typeof action.type === "undefined") throw new Error(formatProdErrorMessage(8));
		if (isDispatching) throw new Error(formatProdErrorMessage(9));
		try {
			isDispatching = true;
			currentState = currentReducer(currentState, action);
		} finally {
			isDispatching = false;
		}
		var listeners = currentListeners = nextListeners;
		for (var i$1 = 0; i$1 < listeners.length; i$1++) {
			var listener$1 = listeners[i$1];
			listener$1();
		}
		return action;
	}
	function replaceReducer(nextReducer) {
		if (typeof nextReducer !== "function") throw new Error(formatProdErrorMessage(10));
		currentReducer = nextReducer;
		dispatch({ type: ActionTypes.REPLACE });
	}
	function observable() {
		var _ref;
		var outerSubscribe = subscribe;
		return _ref = { subscribe: function subscribe$1(observer) {
			if (typeof observer !== "object" || observer === null) throw new Error(formatProdErrorMessage(11));
			function observeState() {
				if (observer.next) observer.next(getState());
			}
			observeState();
			return { unsubscribe: outerSubscribe(observeState) };
		} }, _ref[$$observable] = function() {
			return this;
		}, _ref;
	}
	dispatch({ type: ActionTypes.INIT });
	return _ref2 = {
		dispatch,
		subscribe,
		getState,
		replaceReducer
	}, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
	Object.keys(reducers).forEach(function(key) {
		var reducer = reducers[key];
		if (typeof reducer(void 0, { type: ActionTypes.INIT }) === "undefined") throw new Error(formatProdErrorMessage(12));
		if (typeof reducer(void 0, { type: ActionTypes.PROBE_UNKNOWN_ACTION() }) === "undefined") throw new Error(formatProdErrorMessage(13));
	});
}
function combineReducers(reducers) {
	var reducerKeys = Object.keys(reducers);
	var finalReducers = {};
	for (var i$1 = 0; i$1 < reducerKeys.length; i$1++) {
		var key = reducerKeys[i$1];
		if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
	}
	var finalReducerKeys = Object.keys(finalReducers);
	var shapeAssertionError;
	try {
		assertReducerShape(finalReducers);
	} catch (e$1) {
		shapeAssertionError = e$1;
	}
	return function combination(state, action) {
		if (state === void 0) state = {};
		if (shapeAssertionError) throw shapeAssertionError;
		var hasChanged = false;
		var nextState = {};
		for (var _i = 0; _i < finalReducerKeys.length; _i++) {
			var _key = finalReducerKeys[_i];
			var reducer = finalReducers[_key];
			var previousStateForKey = state[_key];
			var nextStateForKey = reducer(previousStateForKey, action);
			if (typeof nextStateForKey === "undefined") {
				action && action.type;
				throw new Error(formatProdErrorMessage(14));
			}
			nextState[_key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
		return hasChanged ? nextState : state;
	};
}
function compose() {
	for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
	if (funcs.length === 0) return function(arg) {
		return arg;
	};
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce(function(a$1, b$2) {
		return function() {
			return a$1(b$2.apply(void 0, arguments));
		};
	});
}
function applyMiddleware() {
	for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
	return function(createStore$1) {
		return function() {
			var store = createStore$1.apply(void 0, arguments);
			var _dispatch = function dispatch() {
				throw new Error(formatProdErrorMessage(15));
			};
			var middlewareAPI = {
				getState: store.getState,
				dispatch: function dispatch() {
					return _dispatch.apply(void 0, arguments);
				}
			};
			var chain = middlewares.map(function(middleware) {
				return middleware(middlewareAPI);
			});
			_dispatch = compose.apply(void 0, chain)(store.dispatch);
			return _objectSpread2(_objectSpread2({}, store), {}, { dispatch: _dispatch });
		};
	};
}
function createThunkMiddleware(extraArgument) {
	return function middleware(_ref) {
		var dispatch = _ref.dispatch, getState = _ref.getState;
		return function(next) {
			return function(action) {
				if (typeof action === "function") return action(dispatch, getState, extraArgument);
				return next(action);
			};
		};
	};
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var es_default = thunk;
var __extends = (function() {
	var extendStatics = function(d$2, b$2) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$3, b$3) {
			d$3.__proto__ = b$3;
		} || function(d$3, b$3) {
			for (var p$2 in b$3) if (Object.prototype.hasOwnProperty.call(b$3, p$2)) d$3[p$2] = b$3[p$2];
		};
		return extendStatics(d$2, b$2);
	};
	return function(d$2, b$2) {
		if (typeof b$2 !== "function" && b$2 !== null) throw new TypeError("Class extends value " + String(b$2) + " is not a constructor or null");
		extendStatics(d$2, b$2);
		function __() {
			this.constructor = d$2;
		}
		d$2.prototype = b$2 === null ? Object.create(b$2) : (__.prototype = b$2.prototype, new __());
	};
})();
var __generator = function(thisArg, body) {
	var _$1 = {
		label: 0,
		sent: function() {
			if (t$2[0] & 1) throw t$2[1];
			return t$2[1];
		},
		trys: [],
		ops: []
	}, f$2, y$1, t$2, g$2;
	return g$2 = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g$2[Symbol.iterator] = function() {
		return this;
	}), g$2;
	function verb(n$2) {
		return function(v$1) {
			return step([n$2, v$1]);
		};
	}
	function step(op) {
		if (f$2) throw new TypeError("Generator is already executing.");
		while (_$1) try {
			if (f$2 = 1, y$1 && (t$2 = op[0] & 2 ? y$1["return"] : op[0] ? y$1["throw"] || ((t$2 = y$1["return"]) && t$2.call(y$1), 0) : y$1.next) && !(t$2 = t$2.call(y$1, op[1])).done) return t$2;
			if (y$1 = 0, t$2) op = [op[0] & 2, t$2.value];
			switch (op[0]) {
				case 0:
				case 1:
					t$2 = op;
					break;
				case 4:
					_$1.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_$1.label++;
					y$1 = op[1];
					op = [0];
					continue;
				case 7:
					op = _$1.ops.pop();
					_$1.trys.pop();
					continue;
				default:
					if (!(t$2 = _$1.trys, t$2 = t$2.length > 0 && t$2[t$2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_$1 = 0;
						continue;
					}
					if (op[0] === 3 && (!t$2 || op[1] > t$2[0] && op[1] < t$2[3])) {
						_$1.label = op[1];
						break;
					}
					if (op[0] === 6 && _$1.label < t$2[1]) {
						_$1.label = t$2[1];
						t$2 = op;
						break;
					}
					if (t$2 && _$1.label < t$2[2]) {
						_$1.label = t$2[2];
						_$1.ops.push(op);
						break;
					}
					if (t$2[2]) _$1.ops.pop();
					_$1.trys.pop();
					continue;
			}
			op = body.call(thisArg, _$1);
		} catch (e$1) {
			op = [6, e$1];
			y$1 = 0;
		} finally {
			f$2 = t$2 = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
};
var __spreadArray = function(to, from) {
	for (var i$1 = 0, il = from.length, j$1 = to.length; i$1 < il; i$1++, j$1++) to[j$1] = from[i$1];
	return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
	return key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
};
var __spreadValues = function(a$1, b$2) {
	for (var prop in b$2 || (b$2 = {})) if (__hasOwnProp.call(b$2, prop)) __defNormalProp(a$1, prop, b$2[prop]);
	if (__getOwnPropSymbols) for (var _i = 0, _c = __getOwnPropSymbols(b$2); _i < _c.length; _i++) {
		var prop = _c[_i];
		if (__propIsEnum.call(b$2, prop)) __defNormalProp(a$1, prop, b$2[prop]);
	}
	return a$1;
};
var __spreadProps = function(a$1, b$2) {
	return __defProps(a$1, __getOwnPropDescs(b$2));
};
var __async = function(__this, __arguments, generator) {
	return new Promise(function(resolve, reject) {
		var fulfilled = function(value) {
			try {
				step(generator.next(value));
			} catch (e$1) {
				reject(e$1);
			}
		};
		var rejected = function(value) {
			try {
				step(generator.throw(value));
			} catch (e$1) {
				reject(e$1);
			}
		};
		var step = function(x$1) {
			return x$1.done ? resolve(x$1.value) : Promise.resolve(x$1.value).then(fulfilled, rejected);
		};
		step((generator = generator.apply(__this, __arguments)).next());
	});
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length === 0) return void 0;
	if (typeof arguments[0] === "object") return compose;
	return compose.apply(null, arguments);
};
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function isPlainObject(value) {
	if (typeof value !== "object" || value === null) return false;
	var proto = Object.getPrototypeOf(value);
	if (proto === null) return true;
	var baseProto = proto;
	while (Object.getPrototypeOf(baseProto) !== null) baseProto = Object.getPrototypeOf(baseProto);
	return proto === baseProto;
}
function createAction(type, prepareAction) {
	function actionCreator() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		if (prepareAction) {
			var prepared = prepareAction.apply(void 0, args);
			if (!prepared) throw new Error("prepareAction did not return an object");
			return __spreadValues(__spreadValues({
				type,
				payload: prepared.payload
			}, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
		}
		return {
			type,
			payload: args[0]
		};
	}
	actionCreator.toString = function() {
		return "" + type;
	};
	actionCreator.type = type;
	actionCreator.match = function(action) {
		return action.type === type;
	};
	return actionCreator;
}
var MiddlewareArray = function(_super) {
	__extends(MiddlewareArray$1, _super);
	function MiddlewareArray$1() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var _this = _super.apply(this, args) || this;
		Object.setPrototypeOf(_this, MiddlewareArray$1.prototype);
		return _this;
	}
	Object.defineProperty(MiddlewareArray$1, Symbol.species, {
		get: function() {
			return MiddlewareArray$1;
		},
		enumerable: false,
		configurable: true
	});
	MiddlewareArray$1.prototype.concat = function() {
		var arr = [];
		for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
		return _super.prototype.concat.apply(this, arr);
	};
	MiddlewareArray$1.prototype.prepend = function() {
		var arr = [];
		for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
		if (arr.length === 1 && Array.isArray(arr[0])) return new (MiddlewareArray$1.bind.apply(MiddlewareArray$1, __spreadArray([void 0], arr[0].concat(this))))();
		return new (MiddlewareArray$1.bind.apply(MiddlewareArray$1, __spreadArray([void 0], arr.concat(this))))();
	};
	return MiddlewareArray$1;
}(Array);
var EnhancerArray = function(_super) {
	__extends(EnhancerArray$1, _super);
	function EnhancerArray$1() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var _this = _super.apply(this, args) || this;
		Object.setPrototypeOf(_this, EnhancerArray$1.prototype);
		return _this;
	}
	Object.defineProperty(EnhancerArray$1, Symbol.species, {
		get: function() {
			return EnhancerArray$1;
		},
		enumerable: false,
		configurable: true
	});
	EnhancerArray$1.prototype.concat = function() {
		var arr = [];
		for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
		return _super.prototype.concat.apply(this, arr);
	};
	EnhancerArray$1.prototype.prepend = function() {
		var arr = [];
		for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
		if (arr.length === 1 && Array.isArray(arr[0])) return new (EnhancerArray$1.bind.apply(EnhancerArray$1, __spreadArray([void 0], arr[0].concat(this))))();
		return new (EnhancerArray$1.bind.apply(EnhancerArray$1, __spreadArray([void 0], arr.concat(this))))();
	};
	return EnhancerArray$1;
}(Array);
function freezeDraftable(val) {
	return t$1(val) ? immer_esm_default(val, function() {}) : val;
}
function isBoolean(x$1) {
	return typeof x$1 === "boolean";
}
function curryGetDefaultMiddleware() {
	return function curriedGetDefaultMiddleware(options) {
		return getDefaultMiddleware(options);
	};
}
function getDefaultMiddleware(options) {
	if (options === void 0) options = {};
	var _c = options.thunk, thunk$1 = _c === void 0 ? true : _c;
	options.immutableCheck;
	options.serializableCheck;
	options.actionCreatorCheck;
	var middlewareArray = new MiddlewareArray();
	if (thunk$1) if (isBoolean(thunk$1)) middlewareArray.push(es_default);
	else middlewareArray.push(es_default.withExtraArgument(thunk$1.extraArgument));
	return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
	var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
	var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
	var rootReducer;
	if (typeof reducer === "function") rootReducer = reducer;
	else if (isPlainObject(reducer)) rootReducer = combineReducers(reducer);
	else throw new Error("\"reducer\" is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
	var finalMiddleware = middleware;
	if (typeof finalMiddleware === "function") {
		finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
		if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) throw new Error("when using a middleware builder function, an array of middleware must be returned");
	}
	if (!IS_PRODUCTION && finalMiddleware.some(function(item) {
		return typeof item !== "function";
	})) throw new Error("each middleware provided to configureStore must be a function");
	var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
	var finalCompose = compose;
	if (devTools) finalCompose = composeWithDevTools(__spreadValues({ trace: !IS_PRODUCTION }, typeof devTools === "object" && devTools));
	var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
	var storeEnhancers = defaultEnhancers;
	if (Array.isArray(enhancers)) storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
	else if (typeof enhancers === "function") storeEnhancers = enhancers(defaultEnhancers);
	var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
	return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
	var actionsMap = {};
	var actionMatchers = [];
	var defaultCaseReducer;
	var builder = {
		addCase: function(typeOrActionCreator, reducer) {
			var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
			if (!type) throw new Error("`builder.addCase` cannot be called with an empty action type");
			if (type in actionsMap) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
			actionsMap[type] = reducer;
			return builder;
		},
		addMatcher: function(matcher, reducer) {
			actionMatchers.push({
				matcher,
				reducer
			});
			return builder;
		},
		addDefaultCase: function(reducer) {
			defaultCaseReducer = reducer;
			return builder;
		}
	};
	builderCallback(builder);
	return [
		actionsMap,
		actionMatchers,
		defaultCaseReducer
	];
}
function isStateFunction(x$1) {
	return typeof x$1 === "function";
}
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
	if (actionMatchers === void 0) actionMatchers = [];
	var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [
		mapOrBuilderCallback,
		actionMatchers,
		defaultCaseReducer
	], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
	var getInitialState;
	if (isStateFunction(initialState)) getInitialState = function() {
		return freezeDraftable(initialState());
	};
	else {
		var frozenInitialState_1 = freezeDraftable(initialState);
		getInitialState = function() {
			return frozenInitialState_1;
		};
	}
	function reducer(state, action) {
		if (state === void 0) state = getInitialState();
		var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function(_c$1) {
			var matcher = _c$1.matcher;
			return matcher(action);
		}).map(function(_c$1) {
			return _c$1.reducer;
		}));
		if (caseReducers.filter(function(cr) {
			return !!cr;
		}).length === 0) caseReducers = [finalDefaultCaseReducer];
		return caseReducers.reduce(function(previousState, caseReducer) {
			if (caseReducer) if (r(previousState)) {
				var result = caseReducer(previousState, action);
				if (result === void 0) return previousState;
				return result;
			} else if (!t$1(previousState)) {
				var result = caseReducer(previousState, action);
				if (result === void 0) {
					if (previousState === null) return previousState;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return result;
			} else return immer_esm_default(previousState, function(draft) {
				return caseReducer(draft, action);
			});
			return previousState;
		}, state);
	}
	reducer.getInitialState = getInitialState;
	return reducer;
}
function getType2(slice, actionKey) {
	return slice + "/" + actionKey;
}
function createSlice(options) {
	var name = options.name;
	if (!name) throw new Error("`name` is a required option for createSlice");
	var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
	var reducers = options.reducers || {};
	var reducerNames = Object.keys(reducers);
	var sliceCaseReducersByName = {};
	var sliceCaseReducersByType = {};
	var actionCreators = {};
	reducerNames.forEach(function(reducerName) {
		var maybeReducerWithPrepare = reducers[reducerName];
		var type = getType2(name, reducerName);
		var caseReducer;
		var prepareCallback;
		if ("reducer" in maybeReducerWithPrepare) {
			caseReducer = maybeReducerWithPrepare.reducer;
			prepareCallback = maybeReducerWithPrepare.prepare;
		} else caseReducer = maybeReducerWithPrepare;
		sliceCaseReducersByName[reducerName] = caseReducer;
		sliceCaseReducersByType[type] = caseReducer;
		actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
	});
	function buildReducer() {
		var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
		var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
		return createReducer(initialState, function(builder) {
			for (var key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
			for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
				var m$3 = actionMatchers_1[_i];
				builder.addMatcher(m$3.matcher, m$3.reducer);
			}
			if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
		});
	}
	var _reducer;
	return {
		name,
		reducer: function(state, action) {
			if (!_reducer) _reducer = buildReducer();
			return _reducer(state, action);
		},
		actions: actionCreators,
		caseReducers: sliceCaseReducersByName,
		getInitialState: function() {
			if (!_reducer) _reducer = buildReducer();
			return _reducer.getInitialState();
		}
	};
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
	if (size === void 0) size = 21;
	var id = "";
	var i$1 = size;
	while (i$1--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};
var commonProperties = [
	"name",
	"message",
	"stack",
	"code"
];
var RejectWithValue = function() {
	function RejectWithValue$1(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	return RejectWithValue$1;
}();
var FulfillWithMeta = function() {
	function FulfillWithMeta$1(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	return FulfillWithMeta$1;
}();
var miniSerializeError = function(value) {
	if (typeof value === "object" && value !== null) {
		var simpleError = {};
		for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
			var property = commonProperties_1[_i];
			if (typeof value[property] === "string") simpleError[property] = value[property];
		}
		return simpleError;
	}
	return { message: String(value) };
};
(function() {
	function createAsyncThunk2(typePrefix, payloadCreator, options) {
		var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
			return {
				payload,
				meta: __spreadProps(__spreadValues({}, meta || {}), {
					arg,
					requestId,
					requestStatus: "fulfilled"
				})
			};
		});
		var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
			return {
				payload: void 0,
				meta: __spreadProps(__spreadValues({}, meta || {}), {
					arg,
					requestId,
					requestStatus: "pending"
				})
			};
		});
		var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
			return {
				payload,
				error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
				meta: __spreadProps(__spreadValues({}, meta || {}), {
					arg,
					requestId,
					rejectedWithValue: !!payload,
					requestStatus: "rejected",
					aborted: (error == null ? void 0 : error.name) === "AbortError",
					condition: (error == null ? void 0 : error.name) === "ConditionError"
				})
			};
		});
		var AC = typeof AbortController !== "undefined" ? AbortController : function() {
			function class_1() {
				this.signal = {
					aborted: false,
					addEventListener: function() {},
					dispatchEvent: function() {
						return false;
					},
					onabort: function() {},
					removeEventListener: function() {},
					reason: void 0,
					throwIfAborted: function() {}
				};
			}
			class_1.prototype.abort = function() {};
			return class_1;
		}();
		function actionCreator(arg) {
			return function(dispatch, getState, extra) {
				var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
				var abortController = new AC();
				var abortReason;
				function abort(reason) {
					abortReason = reason;
					abortController.abort();
				}
				var promise2 = function() {
					return __async(this, null, function() {
						var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
						return __generator(this, function(_c) {
							switch (_c.label) {
								case 0:
									_c.trys.push([
										0,
										4,
										,
										5
									]);
									conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
										getState,
										extra
									});
									if (!isThenable(conditionResult)) return [3, 2];
									return [4, conditionResult];
								case 1:
									conditionResult = _c.sent();
									_c.label = 2;
								case 2:
									if (conditionResult === false || abortController.signal.aborted) throw {
										name: "ConditionError",
										message: "Aborted due to condition callback returning false."
									};
									abortedPromise = new Promise(function(_$1, reject) {
										return abortController.signal.addEventListener("abort", function() {
											return reject({
												name: "AbortError",
												message: abortReason || "Aborted"
											});
										});
									});
									dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
										requestId,
										arg
									}, {
										getState,
										extra
									})));
									return [4, Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
										dispatch,
										getState,
										extra,
										requestId,
										signal: abortController.signal,
										abort,
										rejectWithValue: function(value, meta) {
											return new RejectWithValue(value, meta);
										},
										fulfillWithValue: function(value, meta) {
											return new FulfillWithMeta(value, meta);
										}
									})).then(function(result) {
										if (result instanceof RejectWithValue) throw result;
										if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
										return fulfilled(result, requestId, arg);
									})])];
								case 3:
									finalAction = _c.sent();
									return [3, 5];
								case 4:
									err_1 = _c.sent();
									finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
									return [3, 5];
								case 5:
									skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
									if (!skipDispatch) dispatch(finalAction);
									return [2, finalAction];
							}
						});
					});
				}();
				return Object.assign(promise2, {
					abort,
					requestId,
					arg,
					unwrap: function() {
						return promise2.then(unwrapResult);
					}
				});
			};
		}
		return Object.assign(actionCreator, {
			pending,
			rejected,
			fulfilled,
			typePrefix
		});
	}
	createAsyncThunk2.withTypes = function() {
		return createAsyncThunk2;
	};
	return createAsyncThunk2;
})();
function unwrapResult(action) {
	if (action.meta && action.meta.rejectedWithValue) throw action.payload;
	if (action.error) throw action.error;
	return action.payload;
}
function isThenable(value) {
	return value !== null && typeof value === "object" && typeof value.then === "function";
}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
"" + cancelled;
"" + completed;
listener + "" + cancelled;
listener + "" + completed;
(function() {
	function TaskAbortError$1(code) {
		this.code = code;
		this.name = "TaskAbortError";
		this.message = task + " " + cancelled + " (reason: " + code + ")";
	}
	return TaskAbortError$1;
})();
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
typeof queueMicrotask === "function" && queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis);
var createQueueWithTimer = function(timeout) {
	return function(notify) {
		setTimeout(notify, timeout);
	};
};
typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
F();
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React$1 = require_react();
	function is$1(x$1, y$1) {
		return x$1 === y$1 && (0 !== x$1 || 1 / x$1 === 1 / y$1) || x$1 !== x$1 && y$1 !== y$1;
	}
	var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1, useState = React$1.useState, useEffect$1 = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue$2 = React$1.useDebugValue;
	function useSyncExternalStore$2$1(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect$1(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue$2(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs$1(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1$1 : useSyncExternalStore$2$1;
	exports.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
}));
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react(), shim = require_shim();
	function is(x$1, y$1) {
		return x$1 === y$1 && (0 !== x$1 || 1 / x$1 === 1 / y$1) || x$1 !== x$1 && y$1 !== y$1;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore$2 = shim.useSyncExternalStore, useRef$1 = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue$1 = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef$1(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore$2(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue$1(value);
		return value;
	};
}));
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
}));
var import_react_dom = require_react_dom();
function defaultNoopBatch(callback) {
	callback();
}
var batch$1 = defaultNoopBatch;
const setBatch = (newBatch) => batch$1 = newBatch;
const getBatch = () => batch$1;
var import_react = /* @__PURE__ */ __toESM(require_react());
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : {};
function getContext() {
	var _gT$ContextKey;
	if (!import_react.createContext) return {};
	const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
	let realContext = contextMap.get(import_react.createContext);
	if (!realContext) {
		realContext = import_react.createContext(null);
		contextMap.set(import_react.createContext, realContext);
	}
	return realContext;
}
const ReactReduxContext = /* @__PURE__ */ getContext();
function createReduxContextHook(context = ReactReduxContext) {
	return function useReduxContext$1() {
		return (0, import_react.useContext)(context);
	};
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
	throw new Error("uSES not initialized!");
};
var useSyncExternalStoreWithSelector$1 = notInitialized;
const initializeUseSelector = (fn$1) => {
	useSyncExternalStoreWithSelector$1 = fn$1;
};
var refEquality = (a$1, b$2) => a$1 === b$2;
function createSelectorHook(context = ReactReduxContext) {
	const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	return function useSelector$1(selector, equalityFnOrOptions = {}) {
		const { equalityFn = refEquality, stabilityCheck = void 0, noopCheck = void 0 } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
		const { store, subscription, getServerState, stabilityCheck: globalStabilityCheck, noopCheck: globalNoopCheck } = useReduxContext$1();
		(0, import_react.useRef)(true);
		const wrappedSelector = (0, import_react.useCallback)({ [selector.name](state) {
			return selector(state);
		} }[selector.name], [
			selector,
			globalStabilityCheck,
			stabilityCheck
		]);
		const selectedState = useSyncExternalStoreWithSelector$1(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
		(0, import_react.useDebugValue)(selectedState);
		return selectedState;
	};
}
const useSelector = /* @__PURE__ */ createSelectorHook();
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {}));
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production_min();
}));
function createListenerCollection() {
	const batch$2 = getBatch();
	let first = null;
	let last = null;
	return {
		clear() {
			first = null;
			last = null;
		},
		notify() {
			batch$2(() => {
				let listener$1 = first;
				while (listener$1) {
					listener$1.callback();
					listener$1 = listener$1.next;
				}
			});
		},
		get() {
			let listeners = [];
			let listener$1 = first;
			while (listener$1) {
				listeners.push(listener$1);
				listener$1 = listener$1.next;
			}
			return listeners;
		},
		subscribe(callback) {
			let isSubscribed = true;
			let listener$1 = last = {
				callback,
				next: null,
				prev: last
			};
			if (listener$1.prev) listener$1.prev.next = listener$1;
			else first = listener$1;
			return function unsubscribe() {
				if (!isSubscribed || first === null) return;
				isSubscribed = false;
				if (listener$1.next) listener$1.next.prev = listener$1.prev;
				else last = listener$1.prev;
				if (listener$1.prev) listener$1.prev.next = listener$1.next;
				else first = listener$1.next;
			};
		}
	};
}
var nullListeners = {
	notify() {},
	get: () => []
};
function createSubscription(store, parentSub) {
	let unsubscribe;
	let listeners = nullListeners;
	let subscriptionsAmount = 0;
	let selfSubscribed = false;
	function addNestedSub(listener$1) {
		trySubscribe();
		const cleanupListener = listeners.subscribe(listener$1);
		let removed = false;
		return () => {
			if (!removed) {
				removed = true;
				cleanupListener();
				tryUnsubscribe();
			}
		};
	}
	function notifyNestedSubs() {
		listeners.notify();
	}
	function handleChangeWrapper() {
		if (subscription.onStateChange) subscription.onStateChange();
	}
	function isSubscribed() {
		return selfSubscribed;
	}
	function trySubscribe() {
		subscriptionsAmount++;
		if (!unsubscribe) {
			unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
			listeners = createListenerCollection();
		}
	}
	function tryUnsubscribe() {
		subscriptionsAmount--;
		if (unsubscribe && subscriptionsAmount === 0) {
			unsubscribe();
			unsubscribe = void 0;
			listeners.clear();
			listeners = nullListeners;
		}
	}
	function trySubscribeSelf() {
		if (!selfSubscribed) {
			selfSubscribed = true;
			trySubscribe();
		}
	}
	function tryUnsubscribeSelf() {
		if (selfSubscribed) {
			selfSubscribed = false;
			tryUnsubscribe();
		}
	}
	const subscription = {
		addNestedSub,
		notifyNestedSubs,
		handleChangeWrapper,
		isSubscribed,
		trySubscribe: trySubscribeSelf,
		tryUnsubscribe: tryUnsubscribeSelf,
		getListeners: () => listeners
	};
	return subscription;
}
const useIsomorphicLayoutEffect = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined") ? import_react.useLayoutEffect : import_react.useEffect;
require_hoist_non_react_statics_cjs();
require_react_is();
const initializeConnect = (fn$1) => {};
function Provider({ store, context, children, serverState, stabilityCheck = "once", noopCheck = "once" }) {
	const contextValue = import_react.useMemo(() => {
		return {
			store,
			subscription: createSubscription(store),
			getServerState: serverState ? () => serverState : void 0,
			stabilityCheck,
			noopCheck
		};
	}, [
		store,
		serverState,
		stabilityCheck,
		noopCheck
	]);
	const previousState = import_react.useMemo(() => store.getState(), [store]);
	useIsomorphicLayoutEffect(() => {
		const { subscription } = contextValue;
		subscription.onStateChange = subscription.notifyNestedSubs;
		subscription.trySubscribe();
		if (previousState !== store.getState()) subscription.notifyNestedSubs();
		return () => {
			subscription.tryUnsubscribe();
			subscription.onStateChange = void 0;
		};
	}, [contextValue, previousState]);
	const Context = context || ReactReduxContext;
	return /* @__PURE__ */ import_react.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
var import_shim = require_shim();
initializeUseSelector(require_with_selector().useSyncExternalStoreWithSelector);
initializeConnect(import_shim.useSyncExternalStore);
setBatch(import_react_dom.unstable_batchedUpdates);
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
export { require_shim as a, nanoid as c, import_react_dom as i, combineReducers as l, Provider_default as n, configureStore as o, useSelector as r, createSlice as s, require_client as t, createStore as u };
