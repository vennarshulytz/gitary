import { b as baseClone } from "./graph-8dfdb4a2.js";
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
export {
  clone as c
};
