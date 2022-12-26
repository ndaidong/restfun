// restfun@0.0.10, by @ndaidong - built with esbuild at 2022-12-26T09:05:36.122Z - published under MIT license
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS({
  "node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js"(exports, module2) {
    "use strict";
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent(uri) {
      var percentPosition = uri.indexOf("%");
      if (percentPosition === -1)
        return uri;
      var length = uri.length;
      var decoded = "";
      var last = 0;
      var codepoint = 0;
      var startOfOctets = percentPosition;
      var state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        var high = hexCodeToInt(uri[percentPosition + 1], 4);
        var low = hexCodeToInt(uri[percentPosition + 2], 0);
        var byte = high | low;
        var type = UTF8_DATA[byte];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(
            55232 + (codepoint >> 10),
            56320 + (codepoint & 1023)
          );
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
            continue;
          return null;
        }
      }
      return decoded + uri.slice(last);
    }
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    function hexCodeToInt(c, shift) {
      var i = HEX[c];
      return i === void 0 ? 255 : i << shift;
    }
    module2.exports = decodeURIComponent;
  }
});

// node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/parse.js"(exports, module2) {
    "use strict";
    var fastDecode = require_fast_decode_uri_component();
    var plusRegex = /\+/g;
    var Empty = function() {
    };
    Empty.prototype = /* @__PURE__ */ Object.create(null);
    function parse(input) {
      const result = new Empty();
      if (typeof input !== "string") {
        return result;
      }
      let inputLength = input.length;
      let key = "";
      let value = "";
      let startingIndex = -1;
      let equalityIndex = -1;
      let shouldDecodeKey = false;
      let shouldDecodeValue = false;
      let keyHasPlus = false;
      let valueHasPlus = false;
      let hasBothKeyValuePair = false;
      let c = 0;
      for (let i = 0; i < inputLength + 1; i++) {
        c = i !== inputLength ? input.charCodeAt(i) : 38;
        if (c === 38) {
          hasBothKeyValuePair = equalityIndex > startingIndex;
          if (!hasBothKeyValuePair) {
            equalityIndex = i;
          }
          key = input.slice(startingIndex + 1, equalityIndex);
          if (hasBothKeyValuePair || key.length > 0) {
            if (keyHasPlus) {
              key = key.replace(plusRegex, " ");
            }
            if (shouldDecodeKey) {
              key = fastDecode(key) || key;
            }
            if (hasBothKeyValuePair) {
              value = input.slice(equalityIndex + 1, i);
              if (valueHasPlus) {
                value = value.replace(plusRegex, " ");
              }
              if (shouldDecodeValue) {
                value = fastDecode(value) || value;
              }
            }
            const currentValue = result[key];
            if (currentValue === void 0) {
              result[key] = value;
            } else {
              if (currentValue.pop) {
                currentValue.push(value);
              } else {
                result[key] = [currentValue, value];
              }
            }
          }
          value = "";
          startingIndex = i;
          equalityIndex = i;
          shouldDecodeKey = false;
          shouldDecodeValue = false;
          keyHasPlus = false;
          valueHasPlus = false;
        } else if (c === 61) {
          if (equalityIndex <= startingIndex) {
            equalityIndex = i;
          } else {
            shouldDecodeValue = true;
          }
        } else if (c === 43) {
          if (equalityIndex > startingIndex) {
            valueHasPlus = true;
          } else {
            keyHasPlus = true;
          }
        } else if (c === 37) {
          if (equalityIndex > startingIndex) {
            shouldDecodeValue = true;
          } else {
            shouldDecodeKey = true;
          }
        }
      }
      return result;
    }
    module2.exports = parse;
  }
});

// node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/internals/querystring.js
var require_querystring = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/internals/querystring.js"(exports, module2) {
    var hexTable = Array.from(
      { length: 256 },
      (_, i) => "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase()
    );
    var noEscape = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
    ]);
    function encodeString(str) {
      const len = str.length;
      if (len === 0)
        return "";
      let out = "";
      let lastPos = 0;
      let i = 0;
      outer:
        for (; i < len; i++) {
          let c = str.charCodeAt(i);
          while (c < 128) {
            if (noEscape[c] !== 1) {
              if (lastPos < i)
                out += str.slice(lastPos, i);
              lastPos = i + 1;
              out += hexTable[c];
            }
            if (++i === len)
              break outer;
            c = str.charCodeAt(i);
          }
          if (lastPos < i)
            out += str.slice(lastPos, i);
          if (c < 2048) {
            lastPos = i + 1;
            out += hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            lastPos = i + 1;
            out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          ++i;
          if (i >= len) {
            throw new Error("URI malformed");
          }
          const c2 = str.charCodeAt(i) & 1023;
          lastPos = i + 1;
          c = 65536 + ((c & 1023) << 10 | c2);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
      if (lastPos === 0)
        return str;
      if (lastPos < len)
        return out + str.slice(lastPos);
      return out;
    }
    module2.exports = { encodeString };
  }
});

// node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/stringify.js"(exports, module2) {
    "use strict";
    var { encodeString } = require_querystring();
    function getAsPrimitive(value) {
      const type = typeof value;
      if (type === "string") {
        return encodeString(value);
      } else if (type === "bigint") {
        return value.toString();
      } else if (type === "boolean") {
        return value ? "true" : "false";
      } else if (type === "number" && Number.isFinite(value)) {
        if (Math.abs(value) < 1e21)
          return value.toString();
        return encodeString(value.toString());
      }
      return "";
    }
    function stringify(input) {
      let result = "";
      if (input === null || typeof input !== "object") {
        return result;
      }
      const separator = "&";
      const keys = Object.keys(input);
      const keyLength = keys.length;
      let valueLength = 0;
      for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        const value = input[key];
        const encodedKey = encodeString(key) + "=";
        if (i) {
          result += separator;
        }
        if (Array.isArray(value)) {
          valueLength = value.length;
          for (let j = 0; j < valueLength; j++) {
            if (j) {
              result += separator;
            }
            result += encodedKey;
            result += getAsPrimitive(value[j]);
          }
        } else {
          result += encodedKey;
          result += getAsPrimitive(value);
        }
      }
      return result;
    }
    module2.exports = stringify;
  }
});

// node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.0.0/node_modules/fast-querystring/lib/index.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var stringify = require_stringify();
    var fastQuerystring = {
      parse,
      stringify
    };
    module2.exports = fastQuerystring;
    module2.exports.default = fastQuerystring;
  }
});

// node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/types.js"(exports, module2) {
    module2.exports = {
      ROOT: 0,
      GROUP: 1,
      POSITION: 2,
      SET: 3,
      RANGE: 4,
      REPETITION: 5,
      REFERENCE: 6,
      CHAR: 7
    };
  }
});

// node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/sets.js
var require_sets = __commonJS({
  "node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/sets.js"(exports) {
    var types = require_types();
    var INTS = () => [{ type: types.RANGE, from: 48, to: 57 }];
    var WORDS = () => {
      return [
        { type: types.CHAR, value: 95 },
        { type: types.RANGE, from: 97, to: 122 },
        { type: types.RANGE, from: 65, to: 90 }
      ].concat(INTS());
    };
    var WHITESPACE = () => {
      return [
        { type: types.CHAR, value: 9 },
        { type: types.CHAR, value: 10 },
        { type: types.CHAR, value: 11 },
        { type: types.CHAR, value: 12 },
        { type: types.CHAR, value: 13 },
        { type: types.CHAR, value: 32 },
        { type: types.CHAR, value: 160 },
        { type: types.CHAR, value: 5760 },
        { type: types.RANGE, from: 8192, to: 8202 },
        { type: types.CHAR, value: 8232 },
        { type: types.CHAR, value: 8233 },
        { type: types.CHAR, value: 8239 },
        { type: types.CHAR, value: 8287 },
        { type: types.CHAR, value: 12288 },
        { type: types.CHAR, value: 65279 }
      ];
    };
    var NOTANYCHAR = () => {
      return [
        { type: types.CHAR, value: 10 },
        { type: types.CHAR, value: 13 },
        { type: types.CHAR, value: 8232 },
        { type: types.CHAR, value: 8233 }
      ];
    };
    exports.words = () => ({ type: types.SET, set: WORDS(), not: false });
    exports.notWords = () => ({ type: types.SET, set: WORDS(), not: true });
    exports.ints = () => ({ type: types.SET, set: INTS(), not: false });
    exports.notInts = () => ({ type: types.SET, set: INTS(), not: true });
    exports.whitespace = () => ({ type: types.SET, set: WHITESPACE(), not: false });
    exports.notWhitespace = () => ({ type: types.SET, set: WHITESPACE(), not: true });
    exports.anyChar = () => ({ type: types.SET, set: NOTANYCHAR(), not: true });
  }
});

// node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/util.js"(exports) {
    var types = require_types();
    var sets = require_sets();
    var CTRL = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?";
    var SLSH = { "0": 0, "t": 9, "n": 10, "v": 11, "f": 12, "r": 13 };
    exports.strToChars = function(str) {
      var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
      str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
        if (lbs) {
          return s;
        }
        var code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : c8 ? parseInt(c8, 8) : dctrl ? CTRL.indexOf(dctrl) : SLSH[eslsh];
        var c = String.fromCharCode(code);
        if (/[[\]{}^$.|?*+()]/.test(c)) {
          c = "\\" + c;
        }
        return c;
      });
      return str;
    };
    exports.tokenizeClass = (str, regexpStr) => {
      var tokens = [];
      var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
      var rs, c;
      while ((rs = regexp.exec(str)) != null) {
        if (rs[1]) {
          tokens.push(sets.words());
        } else if (rs[2]) {
          tokens.push(sets.ints());
        } else if (rs[3]) {
          tokens.push(sets.whitespace());
        } else if (rs[4]) {
          tokens.push(sets.notWords());
        } else if (rs[5]) {
          tokens.push(sets.notInts());
        } else if (rs[6]) {
          tokens.push(sets.notWhitespace());
        } else if (rs[7]) {
          tokens.push({
            type: types.RANGE,
            from: (rs[8] || rs[9]).charCodeAt(0),
            to: rs[10].charCodeAt(0)
          });
        } else if (c = rs[12]) {
          tokens.push({
            type: types.CHAR,
            value: c.charCodeAt(0)
          });
        } else {
          return [tokens, regexp.lastIndex];
        }
      }
      exports.error(regexpStr, "Unterminated character class");
    };
    exports.error = (regexp, msg) => {
      throw new SyntaxError("Invalid regular expression: /" + regexp + "/: " + msg);
    };
  }
});

// node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/positions.js
var require_positions = __commonJS({
  "node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/positions.js"(exports) {
    var types = require_types();
    exports.wordBoundary = () => ({ type: types.POSITION, value: "b" });
    exports.nonWordBoundary = () => ({ type: types.POSITION, value: "B" });
    exports.begin = () => ({ type: types.POSITION, value: "^" });
    exports.end = () => ({ type: types.POSITION, value: "$" });
  }
});

// node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/ret@0.2.2/node_modules/ret/lib/index.js"(exports, module2) {
    var util = require_util();
    var types = require_types();
    var sets = require_sets();
    var positions = require_positions();
    module2.exports = (regexpStr) => {
      var i = 0, l, c, start = { type: types.ROOT, stack: [] }, lastGroup = start, last = start.stack, groupStack = [];
      var repeatErr = (i2) => {
        util.error(regexpStr, `Nothing to repeat at column ${i2 - 1}`);
      };
      var str = util.strToChars(regexpStr);
      l = str.length;
      while (i < l) {
        c = str[i++];
        switch (c) {
          case "\\":
            c = str[i++];
            switch (c) {
              case "b":
                last.push(positions.wordBoundary());
                break;
              case "B":
                last.push(positions.nonWordBoundary());
                break;
              case "w":
                last.push(sets.words());
                break;
              case "W":
                last.push(sets.notWords());
                break;
              case "d":
                last.push(sets.ints());
                break;
              case "D":
                last.push(sets.notInts());
                break;
              case "s":
                last.push(sets.whitespace());
                break;
              case "S":
                last.push(sets.notWhitespace());
                break;
              default:
                if (/\d/.test(c)) {
                  last.push({ type: types.REFERENCE, value: parseInt(c, 10) });
                } else {
                  last.push({ type: types.CHAR, value: c.charCodeAt(0) });
                }
            }
            break;
          case "^":
            last.push(positions.begin());
            break;
          case "$":
            last.push(positions.end());
            break;
          case "[":
            var not;
            if (str[i] === "^") {
              not = true;
              i++;
            } else {
              not = false;
            }
            var classTokens = util.tokenizeClass(str.slice(i), regexpStr);
            i += classTokens[1];
            last.push({
              type: types.SET,
              set: classTokens[0],
              not
            });
            break;
          case ".":
            last.push(sets.anyChar());
            break;
          case "(":
            var group = {
              type: types.GROUP,
              stack: [],
              remember: true
            };
            c = str[i];
            if (c === "?") {
              c = str[i + 1];
              i += 2;
              if (c === "=") {
                group.followedBy = true;
              } else if (c === "!") {
                group.notFollowedBy = true;
              } else if (c !== ":") {
                util.error(
                  regexpStr,
                  `Invalid group, character '${c}' after '?' at column ${i - 1}`
                );
              }
              group.remember = false;
            }
            last.push(group);
            groupStack.push(lastGroup);
            lastGroup = group;
            last = group.stack;
            break;
          case ")":
            if (groupStack.length === 0) {
              util.error(regexpStr, `Unmatched ) at column ${i - 1}`);
            }
            lastGroup = groupStack.pop();
            last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
            break;
          case "|":
            if (!lastGroup.options) {
              lastGroup.options = [lastGroup.stack];
              delete lastGroup.stack;
            }
            var stack = [];
            lastGroup.options.push(stack);
            last = stack;
            break;
          case "{":
            var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
            if (rs !== null) {
              if (last.length === 0) {
                repeatErr(i);
              }
              min = parseInt(rs[1], 10);
              max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
              i += rs[0].length;
              last.push({
                type: types.REPETITION,
                min,
                max,
                value: last.pop()
              });
            } else {
              last.push({
                type: types.CHAR,
                value: 123
              });
            }
            break;
          case "?":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 0,
              max: 1,
              value: last.pop()
            });
            break;
          case "+":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 1,
              max: Infinity,
              value: last.pop()
            });
            break;
          case "*":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 0,
              max: Infinity,
              value: last.pop()
            });
            break;
          default:
            last.push({
              type: types.CHAR,
              value: c.charCodeAt(0)
            });
        }
      }
      if (groupStack.length !== 0) {
        util.error(regexpStr, "Unterminated group");
      }
      return start;
    };
    module2.exports.types = types;
  }
});

// node_modules/.pnpm/safe-regex2@2.0.0/node_modules/safe-regex2/index.js
var require_safe_regex2 = __commonJS({
  "node_modules/.pnpm/safe-regex2@2.0.0/node_modules/safe-regex2/index.js"(exports, module2) {
    "use strict";
    var parse = require_lib2();
    var types = parse.types;
    module2.exports = function(re, opts) {
      if (!opts)
        opts = {};
      var replimit = opts.limit === void 0 ? 25 : opts.limit;
      if (isRegExp(re))
        re = re.source;
      else if (typeof re !== "string")
        re = String(re);
      try {
        re = parse(re);
      } catch (err) {
        return false;
      }
      var reps = 0;
      return function walk(node, starHeight) {
        var i;
        var ok;
        var len;
        if (node.type === types.REPETITION) {
          starHeight++;
          reps++;
          if (starHeight > 1)
            return false;
          if (reps > replimit)
            return false;
        }
        if (node.options) {
          for (i = 0, len = node.options.length; i < len; i++) {
            ok = walk({ stack: node.options[i] }, starHeight);
            if (!ok)
              return false;
          }
        }
        var stack = node.stack || node.value && node.value.stack;
        if (!stack)
          return true;
        for (i = 0; i < stack.length; i++) {
          ok = walk(stack[i], starHeight);
          if (!ok)
            return false;
        }
        return true;
      }(re, 0);
    };
    function isRegExp(x) {
      return {}.toString.call(x) === "[object RegExp]";
    }
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/pretty-print.js
var require_pretty_print = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/pretty-print.js"(exports, module2) {
    "use strict";
    var indent = "    ";
    var branchIndent = "│   ";
    var midBranchIndent = "├── ";
    var endBranchIndent = "└── ";
    var wildcardDelimiter = "*";
    var pathDelimiter = "/";
    var pathRegExp = /(?=\/)/;
    function parseFunctionName(fn) {
      let fName = fn.name || "";
      fName = fName.replace("bound", "").trim();
      fName = (fName || "anonymous") + "()";
      return fName;
    }
    function parseMeta(meta) {
      if (Array.isArray(meta))
        return meta.map((m) => parseMeta(m));
      if (typeof meta === "symbol")
        return meta.toString();
      if (typeof meta === "function")
        return parseFunctionName(meta);
      return meta;
    }
    function buildMetaObject(route, metaArray) {
      const out = {};
      const cleanMeta = this.buildPrettyMeta(route);
      if (!Array.isArray(metaArray))
        metaArray = cleanMeta ? Reflect.ownKeys(cleanMeta) : [];
      metaArray.forEach((m) => {
        const metaKey = typeof m === "symbol" ? m.toString() : m;
        if (cleanMeta && cleanMeta[m]) {
          out[metaKey] = parseMeta(cleanMeta[m]);
        }
      });
      return out;
    }
    function prettyPrintRoutesArray(routeArray, opts = {}) {
      if (!this.buildPrettyMeta)
        throw new Error("buildPrettyMeta not defined");
      opts.includeMeta = opts.includeMeta || null;
      const mergedRouteArray = [];
      let tree = "";
      routeArray.sort((a, b) => {
        if (!a.path || !b.path)
          return 0;
        return a.path.localeCompare(b.path);
      });
      for (let i = 0; i < routeArray.length; i++) {
        const route = routeArray[i];
        const pathExists = mergedRouteArray.find((r) => route.path === r.path);
        if (pathExists) {
          pathExists.handlers.push({
            method: route.method,
            opts: route.opts.constraints || void 0,
            meta: opts.includeMeta ? buildMetaObject.call(this, route, opts.includeMeta) : null
          });
          continue;
        }
        const routeHandler = {
          method: route.method,
          opts: route.opts.constraints || void 0,
          meta: opts.includeMeta ? buildMetaObject.call(this, route, opts.includeMeta) : null
        };
        mergedRouteArray.push({
          path: route.path,
          methods: [route.method],
          opts: [route.opts],
          handlers: [routeHandler]
        });
      }
      if (!mergedRouteArray.filter((r) => r.path === pathDelimiter).length) {
        const rootPath = {
          path: pathDelimiter,
          truncatedPath: "",
          methods: [],
          opts: [],
          handlers: [{}]
        };
        if (mergedRouteArray.filter((r) => r.path === wildcardDelimiter).length) {
          mergedRouteArray.splice(1, 0, rootPath);
        } else {
          mergedRouteArray.unshift(rootPath);
        }
      }
      const routeTree = buildRouteTree(mergedRouteArray);
      routeTree.forEach((rootBranch, idx) => {
        tree += drawBranch(rootBranch, null, idx === routeTree.length - 1, false, true);
        tree += "\n";
      });
      return tree;
    }
    function buildRouteTree(mergedRouteArray) {
      const result = [];
      const temp = { result };
      mergedRouteArray.forEach((route, idx) => {
        let splitPath = route.path.split(pathRegExp);
        if (splitPath[0] !== pathDelimiter) {
          if (splitPath[0] !== wildcardDelimiter)
            splitPath = [pathDelimiter, splitPath[0].slice(1), ...splitPath.slice(1)];
        }
        splitPath.reduce((acc, path, pidx) => {
          if (!acc[path]) {
            acc[path] = { result: [] };
            const pathSeg = { path, children: acc[path].result };
            if (pidx === splitPath.length - 1)
              pathSeg.handlers = route.handlers;
            acc.result.push(pathSeg);
          }
          return acc[path];
        }, temp);
      });
      return result;
    }
    function drawBranch(pathSeg, prefix, endBranch, noPrefix, rootBranch) {
      let branch = "";
      if (!noPrefix && !rootBranch)
        branch += "\n";
      if (!noPrefix)
        branch += `${prefix || ""}${endBranch ? endBranchIndent : midBranchIndent}`;
      branch += `${pathSeg.path}`;
      if (pathSeg.handlers) {
        const flatHandlers = pathSeg.handlers.reduce((acc, curr) => {
          const match = acc.findIndex((h) => JSON.stringify(h.opts) === JSON.stringify(curr.opts));
          if (match !== -1) {
            acc[match].method = [acc[match].method, curr.method].join(", ");
          } else {
            acc.push(curr);
          }
          return acc;
        }, []);
        flatHandlers.forEach((handler, idx) => {
          if (idx > 0)
            branch += `${noPrefix ? "" : prefix || ""}${endBranch ? indent : branchIndent}${pathSeg.path}`;
          branch += ` (${handler.method || "-"})`;
          if (handler.opts && JSON.stringify(handler.opts) !== "{}")
            branch += ` ${JSON.stringify(handler.opts)}`;
          if (handler.meta) {
            Reflect.ownKeys(handler.meta).forEach((m, hidx) => {
              branch += `
${noPrefix ? "" : prefix || ""}${endBranch ? indent : branchIndent}`;
              branch += `• (${m}) ${JSON.stringify(handler.meta[m])}`;
            });
          }
          if (flatHandlers.length > 1 && idx !== flatHandlers.length - 1)
            branch += "\n";
        });
      } else {
        if (pathSeg.children.length > 1)
          branch += " (-)";
      }
      if (!noPrefix)
        prefix = `${prefix || ""}${endBranch ? indent : branchIndent}`;
      pathSeg.children.forEach((child, idx) => {
        const endBranch2 = idx === pathSeg.children.length - 1;
        const skipPrefix = !pathSeg.handlers && pathSeg.children.length === 1;
        branch += drawBranch(child, prefix, endBranch2, skipPrefix);
      });
      return branch;
    }
    function prettyPrintFlattenedNode(flattenedNode, prefix, tail, opts) {
      if (!this.buildPrettyMeta)
        throw new Error("buildPrettyMeta not defined");
      opts.includeMeta = opts.includeMeta || null;
      let paramName = "";
      const printHandlers = [];
      for (const { node, method } of flattenedNode.nodes) {
        for (const handler of node.handlerStorage.handlers) {
          printHandlers.push({ method, ...handler });
        }
      }
      if (printHandlers.length) {
        printHandlers.forEach((handler, index) => {
          let suffix = `(${handler.method || "-"})`;
          if (Object.keys(handler.constraints).length > 0) {
            suffix += " " + JSON.stringify(handler.constraints);
          }
          let name = "";
          const paramIndices = flattenedNode.prefix.split("").map((ch, idx) => ch === ":" ? idx : null).filter((idx) => idx !== null);
          if (paramIndices.length) {
            let prevLoc = 0;
            paramIndices.forEach((loc, idx) => {
              name += flattenedNode.prefix.slice(prevLoc, loc + 1);
              name += handler.params[handler.params.length - paramIndices.length + idx];
              if (idx === paramIndices.length - 1)
                name += flattenedNode.prefix.slice(loc + 1);
              prevLoc = loc + 1;
            });
          } else {
            name = flattenedNode.prefix;
          }
          if (index === 0) {
            paramName += `${name} ${suffix}`;
          } else {
            paramName += `
${prefix}${tail ? indent : branchIndent}${name} ${suffix}`;
          }
          if (opts.includeMeta) {
            const meta = buildMetaObject.call(this, handler, opts.includeMeta);
            Object.keys(meta).forEach((m, hidx) => {
              paramName += `
${prefix || ""}${tail ? indent : branchIndent}`;
              paramName += `• (${m}) ${JSON.stringify(meta[m])}`;
            });
          }
        });
      } else {
        paramName = flattenedNode.prefix;
      }
      let tree = `${prefix}${tail ? endBranchIndent : midBranchIndent}${paramName}
`;
      prefix = `${prefix}${tail ? indent : branchIndent}`;
      const labels = Object.keys(flattenedNode.children);
      for (let i = 0; i < labels.length; i++) {
        const child = flattenedNode.children[labels[i]];
        tree += prettyPrintFlattenedNode.call(this, child, prefix, i === labels.length - 1, opts);
      }
      return tree;
    }
    function flattenNode(flattened, node, method) {
      if (node.handlerStorage.handlers.length !== 0) {
        flattened.nodes.push({ method, node });
      }
      if (node.parametricChildren && node.parametricChildren[0]) {
        if (!flattened.children[":"]) {
          flattened.children[":"] = {
            prefix: ":",
            nodes: [],
            children: {}
          };
        }
        flattenNode(flattened.children[":"], node.parametricChildren[0], method);
      }
      if (node.wildcardChild) {
        if (!flattened.children["*"]) {
          flattened.children["*"] = {
            prefix: "*",
            nodes: [],
            children: {}
          };
        }
        flattenNode(flattened.children["*"], node.wildcardChild, method);
      }
      if (node.staticChildren) {
        for (const child of Object.values(node.staticChildren)) {
          const childPrefixSegments = child.prefix.split(pathRegExp);
          let cursor = flattened;
          let parent;
          for (const segment of childPrefixSegments) {
            parent = cursor;
            cursor = cursor.children[segment];
            if (!cursor) {
              cursor = {
                prefix: segment,
                nodes: [],
                children: {}
              };
              parent.children[segment] = cursor;
            }
          }
          flattenNode(cursor, child, method);
        }
      }
    }
    function compressFlattenedNode(flattenedNode) {
      const childKeys = Object.keys(flattenedNode.children);
      if (flattenedNode.nodes.length === 0 && childKeys.length === 1) {
        const child = flattenedNode.children[childKeys[0]];
        if (child.nodes.length <= 1) {
          compressFlattenedNode(child);
          flattenedNode.nodes = child.nodes;
          flattenedNode.prefix += child.prefix;
          flattenedNode.children = child.children;
          return flattenedNode;
        }
      }
      for (const key of Object.keys(flattenedNode.children)) {
        compressFlattenedNode(flattenedNode.children[key]);
      }
      return flattenedNode;
    }
    module2.exports = { flattenNode, compressFlattenedNode, prettyPrintFlattenedNode, prettyPrintRoutesArray };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/handler_storage.js
var require_handler_storage = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/handler_storage.js"(exports, module2) {
    "use strict";
    var HandlerStorage = class {
      constructor() {
        this.unconstrainedHandler = null;
        this.constraints = [];
        this.handlers = [];
        this.constrainedHandlerStores = null;
      }
      getMatchingHandler(derivedConstraints) {
        if (derivedConstraints === void 0) {
          return this.unconstrainedHandler;
        }
        return this._getHandlerMatchingConstraints(derivedConstraints);
      }
      addHandler(handler, params, store, constrainer, constraints) {
        const handlerObject = {
          handler,
          params,
          constraints,
          store: store || null,
          _createParamsObject: this._compileCreateParamsObject(params)
        };
        if (Object.keys(constraints).length === 0) {
          this.unconstrainedHandler = handlerObject;
        }
        for (const constraint of Object.keys(constraints)) {
          if (!this.constraints.includes(constraint)) {
            if (constraint === "version") {
              this.constraints.unshift(constraint);
            } else {
              this.constraints.push(constraint);
            }
          }
        }
        if (this.handlers.length >= 32) {
          throw new Error("find-my-way supports a maximum of 32 route handlers per node when there are constraints, limit reached");
        }
        this.handlers.push(handlerObject);
        this.handlers.sort((a, b) => Object.keys(a.constraints).length - Object.keys(b.constraints).length);
        this._compileGetHandlerMatchingConstraints(constrainer, constraints);
      }
      _compileCreateParamsObject(params) {
        const lines = [];
        for (let i = 0; i < params.length; i++) {
          lines.push(`'${params[i]}': paramsArray[${i}]`);
        }
        return new Function("paramsArray", `return {${lines.join(",")}}`);
      }
      _getHandlerMatchingConstraints() {
        return null;
      }
      _buildConstraintStore(store, constraint) {
        for (let i = 0; i < this.handlers.length; i++) {
          const handler = this.handlers[i];
          const constraintValue = handler.constraints[constraint];
          if (constraintValue !== void 0) {
            let indexes = store.get(constraintValue) || 0;
            indexes |= 1 << i;
            store.set(constraintValue, indexes);
          }
        }
      }
      _constrainedIndexBitmask(constraint) {
        let mask = 0;
        for (let i = 0; i < this.handlers.length; i++) {
          const handler = this.handlers[i];
          const constraintValue = handler.constraints[constraint];
          if (constraintValue !== void 0) {
            mask |= 1 << i;
          }
        }
        return ~mask;
      }
      _compileGetHandlerMatchingConstraints(constrainer) {
        this.constrainedHandlerStores = {};
        for (const constraint of this.constraints) {
          const store = constrainer.newStoreForConstraint(constraint);
          this.constrainedHandlerStores[constraint] = store;
          this._buildConstraintStore(store, constraint);
        }
        const lines = [];
        lines.push(`
    let candidates = ${(1 << this.handlers.length) - 1}
    let mask, matches
    `);
        for (const constraint of this.constraints) {
          lines.push(`
      mask = ${this._constrainedIndexBitmask(constraint)}
      value = derivedConstraints.${constraint}
      `);
          const strategy = constrainer.strategies[constraint];
          const matchMask = strategy.mustMatchWhenDerived ? "matches" : "(matches | mask)";
          lines.push(`
      if (value === undefined) {
        candidates &= mask
      } else {
        matches = this.constrainedHandlerStores.${constraint}.get(value) || 0
        candidates &= ${matchMask}
      }
      if (candidates === 0) return null;
      `);
        }
        for (const constraint in constrainer.strategies) {
          const strategy = constrainer.strategies[constraint];
          if (strategy.mustMatchWhenDerived && !this.constraints.includes(constraint)) {
            lines.push(`if (derivedConstraints.${constraint} !== undefined) return null`);
          }
        }
        lines.push("return this.handlers[Math.floor(Math.log2(candidates))]");
        this._getHandlerMatchingConstraints = new Function("derivedConstraints", lines.join("\n"));
      }
    };
    module2.exports = HandlerStorage;
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/custom_node.js
var require_custom_node = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/custom_node.js"(exports, module2) {
    "use strict";
    var HandlerStorage = require_handler_storage();
    var NODE_TYPES = {
      STATIC: 0,
      PARAMETRIC: 1,
      WILDCARD: 2
    };
    var Node = class {
      constructor() {
        this.handlerStorage = new HandlerStorage();
      }
    };
    var ParentNode = class extends Node {
      constructor() {
        super();
        this.staticChildren = {};
      }
      findStaticMatchingChild(path, pathIndex) {
        const staticChild = this.staticChildren[path.charAt(pathIndex)];
        if (staticChild === void 0 || !staticChild.matchPrefix(path, pathIndex)) {
          return null;
        }
        return staticChild;
      }
      createStaticChild(path) {
        if (path.length === 0) {
          return this;
        }
        let staticChild = this.staticChildren[path.charAt(0)];
        if (staticChild) {
          let i = 1;
          for (; i < staticChild.prefix.length; i++) {
            if (path.charCodeAt(i) !== staticChild.prefix.charCodeAt(i)) {
              staticChild = staticChild.split(this, i);
              break;
            }
          }
          return staticChild.createStaticChild(path.slice(i));
        }
        const label = path.charAt(0);
        this.staticChildren[label] = new StaticNode(path);
        return this.staticChildren[label];
      }
    };
    var StaticNode = class extends ParentNode {
      constructor(prefix) {
        super();
        this.prefix = prefix;
        this.wildcardChild = null;
        this.parametricChildren = [];
        this.kind = NODE_TYPES.STATIC;
        this._compilePrefixMatch();
      }
      createParametricChild(regex) {
        const regexpSource = regex && regex.source;
        let parametricChild = this.parametricChildren.find((child) => {
          const childRegexSource = child.regex && child.regex.source;
          return childRegexSource === regexpSource;
        });
        if (parametricChild) {
          return parametricChild;
        }
        parametricChild = new ParametricNode(regex);
        if (regex) {
          this.parametricChildren.unshift(parametricChild);
        } else {
          this.parametricChildren.push(parametricChild);
        }
        return parametricChild;
      }
      createWildcardChild() {
        if (this.wildcardChild) {
          return this.wildcardChild;
        }
        this.wildcardChild = new WildcardNode();
        return this.wildcardChild;
      }
      split(parentNode, length) {
        const parentPrefix = this.prefix.slice(0, length);
        const childPrefix = this.prefix.slice(length);
        this.prefix = childPrefix;
        this._compilePrefixMatch();
        const staticNode = new StaticNode(parentPrefix);
        staticNode.staticChildren[childPrefix.charAt(0)] = this;
        parentNode.staticChildren[parentPrefix.charAt(0)] = staticNode;
        return staticNode;
      }
      getNextNode(path, pathIndex, nodeStack, paramsCount) {
        let node = this.findStaticMatchingChild(path, pathIndex);
        let parametricBrotherNodeIndex = 0;
        if (node === null) {
          if (this.parametricChildren.length === 0) {
            return this.wildcardChild;
          }
          node = this.parametricChildren[0];
          parametricBrotherNodeIndex = 1;
        }
        if (this.wildcardChild !== null) {
          nodeStack.push({
            paramsCount,
            brotherPathIndex: pathIndex,
            brotherNode: this.wildcardChild
          });
        }
        for (let i = this.parametricChildren.length - 1; i >= parametricBrotherNodeIndex; i--) {
          nodeStack.push({
            paramsCount,
            brotherPathIndex: pathIndex,
            brotherNode: this.parametricChildren[i]
          });
        }
        return node;
      }
      _compilePrefixMatch() {
        if (this.prefix.length === 1) {
          this.matchPrefix = () => true;
          return;
        }
        const lines = [];
        for (let i = 1; i < this.prefix.length; i++) {
          const charCode = this.prefix.charCodeAt(i);
          lines.push(`path.charCodeAt(i + ${i}) === ${charCode}`);
        }
        this.matchPrefix = new Function("path", "i", `return ${lines.join(" && ")}`);
      }
    };
    var ParametricNode = class extends ParentNode {
      constructor(regex) {
        super();
        this.regex = regex || null;
        this.isRegex = !!regex;
        this.kind = NODE_TYPES.PARAMETRIC;
      }
      getNextNode(path, pathIndex) {
        return this.findStaticMatchingChild(path, pathIndex);
      }
    };
    var WildcardNode = class extends Node {
      constructor() {
        super();
        this.kind = NODE_TYPES.WILDCARD;
      }
      getNextNode() {
        return null;
      }
    };
    module2.exports = { StaticNode, ParametricNode, WildcardNode, NODE_TYPES };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/strategies/accept-version.js
var require_accept_version = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/strategies/accept-version.js"(exports, module2) {
    "use strict";
    var assert = require("assert");
    function SemVerStore() {
      if (!(this instanceof SemVerStore)) {
        return new SemVerStore();
      }
      this.store = {};
      this.maxMajor = 0;
      this.maxMinors = {};
      this.maxPatches = {};
    }
    SemVerStore.prototype.set = function(version, store) {
      if (typeof version !== "string") {
        throw new TypeError("Version should be a string");
      }
      let [major, minor, patch] = version.split(".");
      major = Number(major) || 0;
      minor = Number(minor) || 0;
      patch = Number(patch) || 0;
      if (major >= this.maxMajor) {
        this.maxMajor = major;
        this.store.x = store;
        this.store["*"] = store;
        this.store["x.x"] = store;
        this.store["x.x.x"] = store;
      }
      if (minor >= (this.maxMinors[major] || 0)) {
        this.maxMinors[major] = minor;
        this.store[`${major}.x`] = store;
        this.store[`${major}.x.x`] = store;
      }
      if (patch >= (this.store[`${major}.${minor}`] || 0)) {
        this.maxPatches[`${major}.${minor}`] = patch;
        this.store[`${major}.${minor}.x`] = store;
      }
      this.store[`${major}.${minor}.${patch}`] = store;
      return this;
    };
    SemVerStore.prototype.get = function(version) {
      return this.store[version];
    };
    module2.exports = {
      name: "version",
      mustMatchWhenDerived: true,
      storage: SemVerStore,
      validate(value) {
        assert(typeof value === "string", "Version should be a string");
      }
    };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/strategies/accept-host.js
var require_accept_host = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/strategies/accept-host.js"(exports, module2) {
    "use strict";
    var assert = require("assert");
    function HostStorage() {
      const hosts = {};
      const regexHosts = [];
      return {
        get: (host) => {
          const exact = hosts[host];
          if (exact) {
            return exact;
          }
          for (const regex of regexHosts) {
            if (regex.host.test(host)) {
              return regex.value;
            }
          }
        },
        set: (host, value) => {
          if (host instanceof RegExp) {
            regexHosts.push({ host, value });
          } else {
            hosts[host] = value;
          }
        }
      };
    }
    module2.exports = {
      name: "host",
      mustMatchWhenDerived: false,
      storage: HostStorage,
      validate(value) {
        assert(typeof value === "string" || Object.prototype.toString.call(value) === "[object RegExp]", "Host should be a string or a RegExp");
      }
    };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/constrainer.js
var require_constrainer = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/constrainer.js"(exports, module2) {
    "use strict";
    var acceptVersionStrategy = require_accept_version();
    var acceptHostStrategy = require_accept_host();
    var assert = require("assert");
    var Constrainer = class {
      constructor(customStrategies) {
        this.strategies = {
          version: acceptVersionStrategy,
          host: acceptHostStrategy
        };
        this.strategiesInUse = /* @__PURE__ */ new Set();
        this.asyncStrategiesInUse = /* @__PURE__ */ new Set();
        if (customStrategies) {
          for (const strategy of Object.values(customStrategies)) {
            this.addConstraintStrategy(strategy);
          }
        }
      }
      isStrategyUsed(strategyName) {
        return this.strategiesInUse.has(strategyName) || this.asyncStrategiesInUse.has(strategyName);
      }
      hasConstraintStrategy(strategyName) {
        const customConstraintStrategy = this.strategies[strategyName];
        if (customConstraintStrategy !== void 0) {
          return customConstraintStrategy.isCustom || this.isStrategyUsed(strategyName);
        }
        return false;
      }
      addConstraintStrategy(strategy) {
        assert(typeof strategy.name === "string" && strategy.name !== "", "strategy.name is required.");
        assert(strategy.storage && typeof strategy.storage === "function", "strategy.storage function is required.");
        assert(strategy.deriveConstraint && typeof strategy.deriveConstraint === "function", "strategy.deriveConstraint function is required.");
        if (this.strategies[strategy.name] && this.strategies[strategy.name].isCustom) {
          throw new Error(`There already exists a custom constraint with the name ${strategy.name}.`);
        }
        if (this.isStrategyUsed(strategy.name)) {
          throw new Error(`There already exists a route with ${strategy.name} constraint.`);
        }
        strategy.isCustom = true;
        strategy.isAsync = strategy.deriveConstraint.length === 3;
        this.strategies[strategy.name] = strategy;
        if (strategy.mustMatchWhenDerived) {
          this.noteUsage({ [strategy.name]: strategy });
        }
      }
      deriveConstraints(req, ctx, done) {
        const constraints = this.deriveSyncConstraints(req, ctx);
        if (done === void 0) {
          return constraints;
        }
        this.deriveAsyncConstraints(constraints, req, ctx, done);
      }
      deriveSyncConstraints(req, ctx) {
        return void 0;
      }
      noteUsage(constraints) {
        if (constraints) {
          const beforeSize = this.strategiesInUse.size;
          for (const key in constraints) {
            const strategy = this.strategies[key];
            if (strategy.isAsync) {
              this.asyncStrategiesInUse.add(key);
            } else {
              this.strategiesInUse.add(key);
            }
          }
          if (beforeSize !== this.strategiesInUse.size) {
            this._buildDeriveConstraints();
          }
        }
      }
      newStoreForConstraint(constraint) {
        if (!this.strategies[constraint]) {
          throw new Error(`No strategy registered for constraint key ${constraint}`);
        }
        return this.strategies[constraint].storage();
      }
      validateConstraints(constraints) {
        for (const key in constraints) {
          const value = constraints[key];
          if (typeof value === "undefined") {
            throw new Error("Can't pass an undefined constraint value, must pass null or no key at all");
          }
          const strategy = this.strategies[key];
          if (!strategy) {
            throw new Error(`No strategy registered for constraint key ${key}`);
          }
          if (strategy.validate) {
            strategy.validate(value);
          }
        }
      }
      deriveAsyncConstraints(constraints, req, ctx, done) {
        let asyncConstraintsCount = this.asyncStrategiesInUse.size;
        if (asyncConstraintsCount === 0) {
          done(null, constraints);
          return;
        }
        constraints = constraints || {};
        for (const key of this.asyncStrategiesInUse) {
          const strategy = this.strategies[key];
          strategy.deriveConstraint(req, ctx, (err, constraintValue) => {
            if (err !== null) {
              done(err);
              return;
            }
            constraints[key] = constraintValue;
            if (--asyncConstraintsCount === 0) {
              done(null, constraints);
            }
          });
        }
      }
      _buildDeriveConstraints() {
        if (this.strategiesInUse.size === 0)
          return;
        const lines = ["return {"];
        for (const key of this.strategiesInUse) {
          const strategy = this.strategies[key];
          if (!strategy.isCustom) {
            if (key === "version") {
              lines.push("   version: req.headers['accept-version'],");
            } else if (key === "host") {
              lines.push("   host: req.headers.host || req.headers[':authority'],");
            } else {
              throw new Error("unknown non-custom strategy for compiling constraint derivation function");
            }
          } else {
            lines.push(`  ${strategy.name}: this.strategies.${key}.deriveConstraint(req, ctx),`);
          }
        }
        lines.push("}");
        this.deriveSyncConstraints = new Function("req", "ctx", lines.join("\n")).bind(this);
      }
    };
    module2.exports = Constrainer;
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/url-sanitizer.js
var require_url_sanitizer = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/lib/url-sanitizer.js"(exports, module2) {
    "use strict";
    function decodeComponentChar(highCharCode, lowCharCode) {
      if (highCharCode === 50) {
        if (lowCharCode === 53)
          return "%";
        if (lowCharCode === 51)
          return "#";
        if (lowCharCode === 52)
          return "$";
        if (lowCharCode === 54)
          return "&";
        if (lowCharCode === 66)
          return "+";
        if (lowCharCode === 98)
          return "+";
        if (lowCharCode === 67)
          return ",";
        if (lowCharCode === 99)
          return ",";
        if (lowCharCode === 70)
          return "/";
        if (lowCharCode === 102)
          return "/";
        return null;
      }
      if (highCharCode === 51) {
        if (lowCharCode === 65)
          return ":";
        if (lowCharCode === 97)
          return ":";
        if (lowCharCode === 66)
          return ";";
        if (lowCharCode === 98)
          return ";";
        if (lowCharCode === 68)
          return "=";
        if (lowCharCode === 100)
          return "=";
        if (lowCharCode === 70)
          return "?";
        if (lowCharCode === 102)
          return "?";
        return null;
      }
      if (highCharCode === 52 && lowCharCode === 48) {
        return "@";
      }
      return null;
    }
    function safeDecodeURI(path) {
      let shouldDecode = false;
      let shouldDecodeParam = false;
      let querystring2 = "";
      for (let i = 1; i < path.length; i++) {
        const charCode = path.charCodeAt(i);
        if (charCode === 37) {
          const highCharCode = path.charCodeAt(i + 1);
          const lowCharCode = path.charCodeAt(i + 2);
          if (decodeComponentChar(highCharCode, lowCharCode) === null) {
            shouldDecode = true;
          } else {
            shouldDecodeParam = true;
            if (highCharCode === 50 && lowCharCode === 53) {
              shouldDecode = true;
              path = path.slice(0, i + 1) + "25" + path.slice(i + 1);
              i += 2;
            }
            i += 2;
          }
        } else if (charCode === 63 || charCode === 59 || charCode === 35) {
          querystring2 = path.slice(i + 1);
          path = path.slice(0, i);
          break;
        }
      }
      const decodedPath = shouldDecode ? decodeURI(path) : path;
      return { path: decodedPath, querystring: querystring2, shouldDecodeParam };
    }
    function safeDecodeURIComponent(uriComponent) {
      const startIndex = uriComponent.indexOf("%");
      if (startIndex === -1)
        return uriComponent;
      let decoded = "";
      let lastIndex = startIndex;
      for (let i = startIndex; i < uriComponent.length; i++) {
        if (uriComponent.charCodeAt(i) === 37) {
          const highCharCode = uriComponent.charCodeAt(i + 1);
          const lowCharCode = uriComponent.charCodeAt(i + 2);
          const decodedChar = decodeComponentChar(highCharCode, lowCharCode);
          decoded += uriComponent.slice(lastIndex, i) + decodedChar;
          lastIndex = i + 3;
        }
      }
      return uriComponent.slice(0, startIndex) + decoded + uriComponent.slice(lastIndex);
    }
    module2.exports = { safeDecodeURI, safeDecodeURIComponent };
  }
});

// node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/index.js
var require_find_my_way = __commonJS({
  "node_modules/.pnpm/find-my-way@7.3.1/node_modules/find-my-way/index.js"(exports, module2) {
    "use strict";
    var assert = require("assert");
    var http2 = require("http");
    var querystring2 = require_lib();
    var isRegexSafe = require_safe_regex2();
    var deepEqual = require_fast_deep_equal();
    var { flattenNode, compressFlattenedNode, prettyPrintFlattenedNode, prettyPrintRoutesArray } = require_pretty_print();
    var { StaticNode, NODE_TYPES } = require_custom_node();
    var Constrainer = require_constrainer();
    var { safeDecodeURI, safeDecodeURIComponent } = require_url_sanitizer();
    var httpMethods = http2.METHODS;
    var FULL_PATH_REGEXP = /^https?:\/\/.*?\//;
    var OPTIONAL_PARAM_REGEXP = /(\/:[^/()]*?)\?(\/?)/;
    if (!isRegexSafe(FULL_PATH_REGEXP)) {
      throw new Error("the FULL_PATH_REGEXP is not safe, update this module");
    }
    if (!isRegexSafe(OPTIONAL_PARAM_REGEXP)) {
      throw new Error("the OPTIONAL_PARAM_REGEXP is not safe, update this module");
    }
    function Router(opts) {
      if (!(this instanceof Router)) {
        return new Router(opts);
      }
      opts = opts || {};
      if (opts.defaultRoute) {
        assert(typeof opts.defaultRoute === "function", "The default route must be a function");
        this.defaultRoute = opts.defaultRoute;
      } else {
        this.defaultRoute = null;
      }
      if (opts.onBadUrl) {
        assert(typeof opts.onBadUrl === "function", "The bad url handler must be a function");
        this.onBadUrl = opts.onBadUrl;
      } else {
        this.onBadUrl = null;
      }
      if (opts.buildPrettyMeta) {
        assert(typeof opts.buildPrettyMeta === "function", "buildPrettyMeta must be a function");
        this.buildPrettyMeta = opts.buildPrettyMeta;
      } else {
        this.buildPrettyMeta = defaultBuildPrettyMeta;
      }
      if (opts.querystringParser) {
        assert(typeof opts.querystringParser === "function", "querystringParser must be a function");
        this.querystringParser = opts.querystringParser;
      } else {
        this.querystringParser = (query) => query === "" ? {} : querystring2.parse(query);
      }
      this.caseSensitive = opts.caseSensitive === void 0 ? true : opts.caseSensitive;
      this.ignoreTrailingSlash = opts.ignoreTrailingSlash || false;
      this.ignoreDuplicateSlashes = opts.ignoreDuplicateSlashes || false;
      this.maxParamLength = opts.maxParamLength || 100;
      this.allowUnsafeRegex = opts.allowUnsafeRegex || false;
      this.routes = [];
      this.trees = {};
      this.constrainer = new Constrainer(opts.constraints);
      this._routesPatterns = [];
    }
    Router.prototype.on = function on(method, path, opts, handler, store) {
      if (typeof opts === "function") {
        if (handler !== void 0) {
          store = handler;
        }
        handler = opts;
        opts = {};
      }
      assert(typeof path === "string", "Path should be a string");
      assert(path.length > 0, "The path could not be empty");
      assert(path[0] === "/" || path[0] === "*", "The first character of a path should be `/` or `*`");
      assert(typeof handler === "function", "Handler should be a function");
      const optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP);
      if (optionalParamMatch) {
        assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, "Optional Parameter needs to be the last parameter of the path");
        const pathFull = path.replace(OPTIONAL_PARAM_REGEXP, "$1$2");
        const pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, "$2");
        this.on(method, pathFull, opts, handler, store);
        this.on(method, pathOptional, opts, handler, store);
        return;
      }
      const route = path;
      if (this.ignoreDuplicateSlashes) {
        path = removeDuplicateSlashes(path);
      }
      if (this.ignoreTrailingSlash) {
        path = trimLastSlash(path);
      }
      const methods = Array.isArray(method) ? method : [method];
      for (const method2 of methods) {
        this._on(method2, path, opts, handler, store, route);
        this.routes.push({ method: method2, path, opts, handler, store });
      }
    };
    Router.prototype._on = function _on(method, path, opts, handler, store) {
      assert(typeof method === "string", "Method should be a string");
      assert(httpMethods.includes(method), `Method '${method}' is not an http method.`);
      let constraints = {};
      if (opts.constraints !== void 0) {
        assert(typeof opts.constraints === "object" && opts.constraints !== null, "Constraints should be an object");
        if (Object.keys(opts.constraints).length !== 0) {
          constraints = opts.constraints;
        }
      }
      this.constrainer.validateConstraints(constraints);
      this.constrainer.noteUsage(constraints);
      if (this.trees[method] === void 0) {
        this.trees[method] = new StaticNode("/");
      }
      if (path === "*" && this.trees[method].prefix.length !== 0) {
        const currentRoot = this.trees[method];
        this.trees[method] = new StaticNode("");
        this.trees[method].staticChildren["/"] = currentRoot;
      }
      let currentNode = this.trees[method];
      let parentNodePathIndex = currentNode.prefix.length;
      const params = [];
      for (let i2 = 0; i2 <= path.length; i2++) {
        if (path.charCodeAt(i2) === 58 && path.charCodeAt(i2 + 1) === 58) {
          i2++;
          continue;
        }
        const isParametricNode = path.charCodeAt(i2) === 58 && path.charCodeAt(i2 + 1) !== 58;
        const isWildcardNode = path.charCodeAt(i2) === 42;
        if (isParametricNode || isWildcardNode || i2 === path.length && i2 !== parentNodePathIndex) {
          let staticNodePath = path.slice(parentNodePathIndex, i2);
          if (!this.caseSensitive) {
            staticNodePath = staticNodePath.toLowerCase();
          }
          staticNodePath = staticNodePath.split("::").join(":");
          staticNodePath = staticNodePath.split("%").join("%25");
          currentNode = currentNode.createStaticChild(staticNodePath);
        }
        if (isParametricNode) {
          let isRegexNode = false;
          const regexps = [];
          let staticEndingLength = 0;
          let lastParamStartIndex = i2 + 1;
          for (let j = lastParamStartIndex; ; j++) {
            const charCode = path.charCodeAt(j);
            if (charCode === 40 || charCode === 45 || charCode === 46) {
              isRegexNode = true;
              const paramName = path.slice(lastParamStartIndex, j);
              params.push(paramName);
              if (charCode === 40) {
                const endOfRegexIndex = getClosingParenthensePosition(path, j);
                const regexString = path.slice(j, endOfRegexIndex + 1);
                if (!this.allowUnsafeRegex) {
                  assert(isRegexSafe(new RegExp(regexString)), `The regex '${regexString}' is not safe!`);
                }
                regexps.push(trimRegExpStartAndEnd(regexString));
                j = endOfRegexIndex + 1;
              } else {
                regexps.push("(.*?)");
              }
              let lastParamEndIndex = j;
              for (; lastParamEndIndex < path.length; lastParamEndIndex++) {
                const charCode2 = path.charCodeAt(lastParamEndIndex);
                const nextCharCode = path.charCodeAt(lastParamEndIndex + 1);
                if (charCode2 === 58 && nextCharCode === 58) {
                  lastParamEndIndex++;
                  continue;
                }
                if (charCode2 === 58 || charCode2 === 47)
                  break;
              }
              let staticPart = path.slice(j, lastParamEndIndex);
              if (staticPart) {
                staticPart = staticPart.split("::").join(":");
                staticPart = staticPart.split("%").join("%25");
                regexps.push(escapeRegExp(staticPart));
              }
              lastParamStartIndex = lastParamEndIndex + 1;
              j = lastParamEndIndex;
              if (path.charCodeAt(j) === 47 || j === path.length) {
                staticEndingLength = staticPart.length;
              }
            } else if (charCode === 47 || j === path.length) {
              const paramName = path.slice(lastParamStartIndex, j);
              params.push(paramName);
              if (regexps.length !== 0) {
                regexps.push("(.*?)");
              }
            }
            if (path.charCodeAt(j) === 47 || j === path.length) {
              path = path.slice(0, i2 + 1) + path.slice(j - staticEndingLength);
              i2 += staticEndingLength;
              break;
            }
          }
          let regex = null;
          if (isRegexNode) {
            regex = new RegExp("^" + regexps.join("") + "$");
          }
          currentNode = currentNode.createParametricChild(regex);
          parentNodePathIndex = i2 + 1;
        } else if (isWildcardNode) {
          params.push("*");
          currentNode = currentNode.createWildcardChild();
          parentNodePathIndex = i2 + 1;
          if (i2 !== path.length - 1) {
            throw new Error("Wildcard must be the last character in the route");
          }
        }
      }
      if (!this.caseSensitive) {
        path = path.toLowerCase();
      }
      const isRootWildcard = path === "*" || path === "/*";
      for (const existRoute of this._routesPatterns) {
        let samePath = false;
        if (existRoute.path === path) {
          samePath = true;
        } else if (isRootWildcard && (existRoute.path === "/*" || existRoute.path === "*")) {
          samePath = true;
        }
        if (samePath && existRoute.method === method && deepEqual(existRoute.constraints, constraints)) {
          throw new Error(`Method '${method}' already declared for route '${path}' with constraints '${JSON.stringify(constraints)}'`);
        }
      }
      this._routesPatterns.push({ method, path, constraints });
      currentNode.handlerStorage.addHandler(handler, params, store, this.constrainer, constraints);
    };
    Router.prototype.hasConstraintStrategy = function(strategyName) {
      return this.constrainer.hasConstraintStrategy(strategyName);
    };
    Router.prototype.addConstraintStrategy = function(constraints) {
      this.constrainer.addConstraintStrategy(constraints);
      this._rebuild(this.routes);
    };
    Router.prototype.reset = function reset() {
      this.trees = {};
      this.routes = [];
      this._routesPatterns = [];
    };
    Router.prototype.off = function off(method, path, constraints) {
      assert(typeof path === "string", "Path should be a string");
      assert(path.length > 0, "The path could not be empty");
      assert(path[0] === "/" || path[0] === "*", "The first character of a path should be `/` or `*`");
      assert(
        typeof constraints === "undefined" || typeof constraints === "object" && !Array.isArray(constraints) && constraints !== null,
        "Constraints should be an object or undefined."
      );
      const optionalParamMatch = path.match(OPTIONAL_PARAM_REGEXP);
      if (optionalParamMatch) {
        assert(path.length === optionalParamMatch.index + optionalParamMatch[0].length, "Optional Parameter needs to be the last parameter of the path");
        const pathFull = path.replace(OPTIONAL_PARAM_REGEXP, "$1$2");
        const pathOptional = path.replace(OPTIONAL_PARAM_REGEXP, "$2");
        this.off(method, pathFull, constraints);
        this.off(method, pathOptional, constraints);
        return;
      }
      if (this.ignoreDuplicateSlashes) {
        path = removeDuplicateSlashes(path);
      }
      if (this.ignoreTrailingSlash) {
        path = trimLastSlash(path);
      }
      const methods = Array.isArray(method) ? method : [method];
      for (const method2 of methods) {
        this._off(method2, path, constraints);
      }
    };
    Router.prototype._off = function _off(method, path, constraints) {
      assert(typeof method === "string", "Method should be a string");
      assert(httpMethods.includes(method), `Method '${method}' is not an http method.`);
      function matcherWithoutConstraints(route) {
        return method !== route.method || path !== route.path;
      }
      function matcherWithConstraints(route) {
        return matcherWithoutConstraints(route) || !deepEqual(constraints, route.opts.constraints || {});
      }
      const predicate = constraints ? matcherWithConstraints : matcherWithoutConstraints;
      const newRoutes = this.routes.filter(predicate);
      this._rebuild(newRoutes);
    };
    Router.prototype.lookup = function lookup(req, res, ctx, done) {
      if (typeof ctx === "function") {
        done = ctx;
        ctx = void 0;
      }
      if (done === void 0) {
        const constraints = this.constrainer.deriveConstraints(req, ctx);
        const handle = this.find(req.method, req.url, constraints);
        return this.callHandler(handle, req, res, ctx);
      }
      this.constrainer.deriveConstraints(req, ctx, (err, constraints) => {
        if (err !== null) {
          done(err);
          return;
        }
        try {
          const handle = this.find(req.method, req.url, constraints);
          const result = this.callHandler(handle, req, res, ctx);
          done(null, result);
        } catch (err2) {
          done(err2);
        }
      });
    };
    Router.prototype.callHandler = function callHandler(handle, req, res, ctx) {
      if (handle === null)
        return this._defaultRoute(req, res, ctx);
      return ctx === void 0 ? handle.handler(req, res, handle.params, handle.store, handle.searchParams) : handle.handler.call(ctx, req, res, handle.params, handle.store, handle.searchParams);
    };
    Router.prototype.find = function find(method, path, derivedConstraints) {
      let currentNode = this.trees[method];
      if (currentNode === void 0)
        return null;
      if (path.charCodeAt(0) !== 47) {
        path = path.replace(FULL_PATH_REGEXP, "/");
      }
      if (this.ignoreDuplicateSlashes) {
        path = removeDuplicateSlashes(path);
      }
      let sanitizedUrl;
      let querystring3;
      let shouldDecodeParam;
      try {
        sanitizedUrl = safeDecodeURI(path);
        path = sanitizedUrl.path;
        querystring3 = sanitizedUrl.querystring;
        shouldDecodeParam = sanitizedUrl.shouldDecodeParam;
      } catch (error) {
        return this._onBadUrl(path);
      }
      if (this.ignoreTrailingSlash) {
        path = trimLastSlash(path);
      }
      const originPath = path;
      if (this.caseSensitive === false) {
        path = path.toLowerCase();
      }
      const maxParamLength = this.maxParamLength;
      let pathIndex = currentNode.prefix.length;
      const params = [];
      const pathLen = path.length;
      const brothersNodesStack = [];
      while (true) {
        if (pathIndex === pathLen) {
          const handle = currentNode.handlerStorage.getMatchingHandler(derivedConstraints);
          if (handle !== null) {
            return {
              handler: handle.handler,
              store: handle.store,
              params: handle._createParamsObject(params),
              searchParams: this.querystringParser(querystring3)
            };
          }
        }
        let node = currentNode.getNextNode(path, pathIndex, brothersNodesStack, params.length);
        if (node === null) {
          if (brothersNodesStack.length === 0) {
            return null;
          }
          const brotherNodeState = brothersNodesStack.pop();
          pathIndex = brotherNodeState.brotherPathIndex;
          params.splice(brotherNodeState.paramsCount);
          node = brotherNodeState.brotherNode;
        }
        currentNode = node;
        if (currentNode.kind === NODE_TYPES.STATIC) {
          pathIndex += currentNode.prefix.length;
          continue;
        }
        if (currentNode.kind === NODE_TYPES.WILDCARD) {
          let param = originPath.slice(pathIndex);
          if (shouldDecodeParam) {
            param = safeDecodeURIComponent(param);
          }
          params.push(param);
          pathIndex = pathLen;
          continue;
        }
        if (currentNode.kind === NODE_TYPES.PARAMETRIC) {
          let paramEndIndex = originPath.indexOf("/", pathIndex);
          if (paramEndIndex === -1) {
            paramEndIndex = pathLen;
          }
          let param = originPath.slice(pathIndex, paramEndIndex);
          if (shouldDecodeParam) {
            param = safeDecodeURIComponent(param);
          }
          if (currentNode.isRegex) {
            const matchedParameters = currentNode.regex.exec(param);
            if (matchedParameters === null)
              continue;
            for (let i2 = 1; i2 < matchedParameters.length; i2++) {
              const matchedParam = matchedParameters[i2];
              if (matchedParam.length > maxParamLength) {
                return null;
              }
              params.push(matchedParam);
            }
          } else {
            if (param.length > maxParamLength) {
              return null;
            }
            params.push(param);
          }
          pathIndex = paramEndIndex;
        }
      }
    };
    Router.prototype._rebuild = function(routes) {
      this.reset();
      for (const route of routes) {
        const { method, path, opts, handler, store } = route;
        this._on(method, path, opts, handler, store);
        this.routes.push({ method, path, opts, handler, store });
      }
    };
    Router.prototype._defaultRoute = function(req, res, ctx) {
      if (this.defaultRoute !== null) {
        return ctx === void 0 ? this.defaultRoute(req, res) : this.defaultRoute.call(ctx, req, res);
      } else {
        res.statusCode = 404;
        res.end();
      }
    };
    Router.prototype._onBadUrl = function(path) {
      if (this.onBadUrl === null) {
        return null;
      }
      const onBadUrl = this.onBadUrl;
      return {
        handler: (req, res, ctx) => onBadUrl(path, req, res),
        params: {},
        store: null
      };
    };
    Router.prototype.prettyPrint = function(opts = {}) {
      opts.commonPrefix = opts.commonPrefix === void 0 ? true : opts.commonPrefix;
      if (!opts.commonPrefix)
        return prettyPrintRoutesArray.call(this, this.routes, opts);
      const root = {
        prefix: "/",
        nodes: [],
        children: {}
      };
      for (const method in this.trees) {
        const node = this.trees[method];
        if (node) {
          flattenNode(root, node, method);
        }
      }
      compressFlattenedNode(root);
      return prettyPrintFlattenedNode.call(this, root, "", true, opts);
    };
    for (i in http2.METHODS) {
      if (!http2.METHODS.hasOwnProperty(i))
        continue;
      const m = http2.METHODS[i];
      const methodName = m.toLowerCase();
      if (Router.prototype[methodName])
        throw new Error("Method already exists: " + methodName);
      Router.prototype[methodName] = function(path, handler, store) {
        return this.on(m, path, handler, store);
      };
    }
    var i;
    Router.prototype.all = function(path, handler, store) {
      this.on(httpMethods, path, handler, store);
    };
    module2.exports = Router;
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function removeDuplicateSlashes(path) {
      return path.replace(/\/\/+/g, "/");
    }
    function trimLastSlash(path) {
      if (path.length > 1 && path.charCodeAt(path.length - 1) === 47) {
        return path.slice(0, -1);
      }
      return path;
    }
    function trimRegExpStartAndEnd(regexString) {
      if (regexString.charCodeAt(1) === 94) {
        regexString = regexString.slice(0, 1) + regexString.slice(2);
      }
      if (regexString.charCodeAt(regexString.length - 2) === 36) {
        regexString = regexString.slice(0, regexString.length - 2) + regexString.slice(regexString.length - 1);
      }
      return regexString;
    }
    function getClosingParenthensePosition(path, idx) {
      var parentheses = 1;
      while (idx < path.length) {
        idx++;
        if (path[idx] === "\\") {
          idx++;
          continue;
        }
        if (path[idx] === ")") {
          parentheses--;
        } else if (path[idx] === "(") {
          parentheses++;
        }
        if (!parentheses)
          return idx;
      }
      throw new TypeError('Invalid regexp expression in "' + path + '"');
    }
    function defaultBuildPrettyMeta(route) {
      if (!route)
        return {};
      if (!route.store)
        return {};
      return Object.assign({}, route.store);
    }
  }
});

// index.js
var restfun_exports = {};
__export(restfun_exports, {
  default: () => restfun_default
});
module.exports = __toCommonJS(restfun_exports);
var import_node_http = __toESM(require("http"), 1);
var import_node_querystring = __toESM(require("querystring"), 1);
var import_node_events = require("events");
var import_find_my_way = __toESM(require_find_my_way(), 1);

// node_modules/.pnpm/bellajs@11.1.1/node_modules/bellajs/src/utils/detection.js
var ob2Str = (val) => {
  return {}.toString.call(val);
};
var isFunction = (val) => {
  return ob2Str(val) === "[object Function]";
};

// node_modules/.pnpm/bellajs@11.1.1/node_modules/bellajs/src/utils/random.js
var genid = (len = 32, prefix = "") => {
  let s = prefix;
  for (let i = 0; i < len; i++) {
    const r = Math.random();
    const k = Math.floor(r * 36);
    const c = k.toString(36);
    s += k > 9 && r > 0.3 && r < 0.7 ? c.toUpperCase() : c;
  }
  return s.substring(0, len);
};

// index.js
var MIME_TYPES = {
  stream: "application/octet-stream",
  html: "text/html; charset=utf-8",
  text: "text/plain",
  css: "text/css",
  js: "text/javascript; charset=utf-8",
  json: "application/json; charset=utf-8",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  webp: "image/webp",
  ico: "image/x-icon",
  svg: "image/svg+xml"
};
var TYPES_FOR_BODY_PARSER = [
  "application/json",
  "application/x-www-form-urlencoded"
];
var SIM_BASE_URL = `http://rest-${genid(80)}.fun`;
var doNothing = () => {
};
var getIp = (req) => {
  var _a;
  const { headers = {}, connection = {}, socket = {} } = req;
  const remoteAddress = connection.remoteAddress || socket.remoteAddress;
  const socketAddress = (_a = connection.socket) == null ? void 0 : _a.remoteAddress;
  return headers["x-forwarded-for"] || remoteAddress || socketAddress || "";
};
var addRequestProperties = (req) => {
  req.method = req.method.toUpperCase();
  req.ip = getIp(req);
  req.params = {};
  req.query = {};
  req.body = {};
  const url = new URL(req.url, SIM_BASE_URL);
  req.path = url.pathname;
};
var addResponseMethods = (req, res) => {
  res.status = (code = 200) => {
    if (!res.writableEnded) {
      res.statusCode = code;
    }
    return res;
  };
  res.type = (ct = "text") => {
    if (!res.writableEnded) {
      res.setHeader("Content-Type", MIME_TYPES[ct] || ct);
    }
    return res;
  };
  res.send = (val) => {
    if (res.writableEnded) {
      return res;
    }
    const ct = res.getHeader("content-type");
    if (!ct) {
      res.type("text");
    }
    res.end(val);
  };
  res.html = (html) => {
    res.type("html").send(html);
  };
  res.json = (data) => {
    res.type("json").send(JSON.stringify(data));
  };
};
var restfun_default = (opts = {}) => {
  const emitter = new import_node_events.EventEmitter();
  const router = (0, import_find_my_way.default)({
    allowUnsafeRegex: false,
    caseSensitive: true,
    defaultRoute: (req, res) => {
      emitter.emit("notfound", req, res);
      if (!res.writableEnded) {
        res.type("").status(404).end(import_node_http.STATUS_CODES["404"]);
      }
    }
  });
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, token, x-token, apikey, x-api-key"
  };
  const {
    cors = {},
    noDelay = true,
    keepAlive = false,
    maxHeaderSize = 16384,
    headersTimeout = 6e4,
    requestTimeout = 3e5
  } = opts;
  Object.keys(cors).forEach((k) => {
    const v = cors[k];
    corsHeaders[k] = v;
  });
  const serverOptions = {
    noDelay,
    keepAlive,
    maxHeaderSize,
    headersTimeout,
    requestTimeout
  };
  const addCorsHeaders = (req, res) => {
    Object.keys(corsHeaders).forEach((k) => {
      res.setHeader(k, corsHeaders[k]);
    });
    if (req.method === "OPTIONS") {
      res.status(204).send();
    }
  };
  const parseBody = (req, res) => {
    return new Promise((resolve) => {
      const { method } = req;
      if (method === "GET") {
        return resolve();
      }
      const ct = req.headers["content-type"] || "";
      if (!TYPES_FOR_BODY_PARSER.includes(ct)) {
        return resolve();
      }
      const bodyParts = [];
      req.on("data", (chunk) => {
        bodyParts.push(chunk);
      }).on("end", () => {
        try {
          const body = Buffer.concat(bodyParts).toString();
          const data = ct === "application/json" ? JSON.parse(body) : import_node_querystring.default.parse(body);
          req.body = data;
        } catch (err) {
          err.errorCode = 400;
          emitter.emit("error", err, req, res);
          res.status(400).send(import_node_http.STATUS_CODES["400"]);
        } finally {
          resolve();
        }
      });
    });
  };
  const modifications = [
    addRequestProperties,
    addResponseMethods,
    addCorsHeaders,
    parseBody
  ];
  const addRoute = (method, pattern, handlers = []) => {
    router.on(method, pattern, async (req, res, params, store, searchParams) => {
      req.query = searchParams;
      req.params = params;
      for (const handle of handlers) {
        try {
          if (res.writableEnded) {
            break;
          }
          await handle(req, res);
        } catch (err) {
          err.errorCode = 500;
          emitter.emit("error", err, req, res);
          res.status(500).send(import_node_http.STATUS_CODES["500"]);
        }
      }
    });
  };
  const onHttpRequest = async (req, res) => {
    for (const fn of modifications) {
      if (res.writableEnded) {
        break;
      }
      await fn(req, res);
    }
    router.lookup(req, res);
  };
  const listen = (port = 7001, host = "0.0.0.0", callback = false) => {
    const fn = isFunction(callback) ? callback : isFunction(host) ? host : doNothing;
    const hs = isFunction(host) ? "0.0.0.0" : host;
    const server = import_node_http.default.createServer(serverOptions, onHttpRequest);
    return server.listen(Number(port), hs, fn);
  };
  return {
    listen,
    get: (...args) => {
      const pattern = args.shift();
      addRoute("GET", pattern, args);
    },
    put: (...args) => {
      const pattern = args.shift();
      addRoute("PUT", pattern, args);
    },
    post: (...args) => {
      const pattern = args.shift();
      addRoute("POST", pattern, args);
    },
    delete: (...args) => {
      const pattern = args.shift();
      addRoute("DELETE", pattern, args);
    },
    route: (...args) => {
      const method = args.shift();
      if (args.length > 1 && import_node_http.METHODS.includes(method)) {
        const pattern = args.shift();
        addRoute(method, pattern, args);
      }
    },
    use: (handle) => {
      modifications.push(handle);
    },
    onError: (handle) => {
      emitter.on("error", handle);
    },
    notFound: (handle) => {
      emitter.on("notfound", handle);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
