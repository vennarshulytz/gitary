import pinyinDefault, * as pinyinModule from "pinyin/lib/esm/pinyin.js";

type PinyinNamespace = typeof pinyinModule;
type PinyinFn = PinyinNamespace["default"];

const resolved: PinyinFn =
  typeof pinyinDefault === "function"
    ? pinyinDefault
    : (pinyinModule.pinyin as PinyinFn);

// Rolldown fails to keep the CommonJS default shape, so make sure we always
// expose a callable default function and copy the static helpers onto it.
const normalized: PinyinFn =
  typeof resolved === "function" ? resolved : ((() => []) as PinyinFn);

Object.assign(normalized, pinyinModule);

export default normalized;
export * from "pinyin/lib/esm/pinyin.js";
