module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@wikia/ad-engine");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(115);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(95);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(91);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(61);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(61);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(45)('wks');
var uid = __webpack_require__(28);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(7);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(63);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(12) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(120);
var defined = __webpack_require__(48);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(27);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
var global = __webpack_require__(9);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(110)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(60)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(65);
var enumBugKeys = __webpack_require__(44);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(73);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(70);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-decorators");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(27);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(63);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(12) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(39);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(108);
var enumBugKeys = __webpack_require__(44);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(7);
var fails = __webpack_require__(19);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys');
var uid = __webpack_require__(28);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(48);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(34);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(82);
var html = __webpack_require__(58);
var cel = __webpack_require__(42);
var global = __webpack_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(21)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(10);
var aFunction = __webpack_require__(27);
var SPECIES = __webpack_require__(8)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(35);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(65);
var hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(59);
var hide = __webpack_require__(15);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(109);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(112);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(104);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(49);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(12) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(47);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(119)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prebid_helper_namespaceObject = {};
__webpack_require__.d(prebid_helper_namespaceObject, "setupAdUnits", function() { return setupAdUnits; });
__webpack_require__.d(prebid_helper_namespaceObject, "getBidByAdId", function() { return getBidByAdId; });
__webpack_require__.d(prebid_helper_namespaceObject, "getAvailableBidsByAdUnitCode", function() { return getAvailableBidsByAdUnitCode; });
__webpack_require__.d(prebid_helper_namespaceObject, "getPrebid", function() { return getPrebid; });
__webpack_require__.d(prebid_helper_namespaceObject, "getTargeting", function() { return getTargeting; });
__webpack_require__.d(prebid_helper_namespaceObject, "getWinningVideoBidBySlotName", function() { return getWinningVideoBidBySlotName; });
__webpack_require__.d(prebid_helper_namespaceObject, "pushPrebid", function() { return pushPrebid; });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(6);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "@wikia/ad-engine"
var ad_engine_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(5);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(33);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/bidders/base-bidder.js





var base_bidder_BaseBidder = function () {
	function BaseBidder(name, bidderConfig) {
		var _this = this;

		var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

		classCallCheck_default()(this, BaseBidder);

		this.name = name;
		this.logGroup = name + '-bidder';
		this.bidderConfig = bidderConfig;
		this.timeout = timeout;

		this.resetState();
		this.onResponse = function () {
			return _this.onResponseCall();
		};

		ad_engine_["utils"].logger(this.logGroup, 'created');
	}

	createClass_default()(BaseBidder, [{
		key: 'addResponseListener',
		value: function addResponseListener(callback) {
			this.onResponseCallbacks.push(callback);
		}
	}, {
		key: 'call',
		value: function call() {
			this.response = false;
			this.called = true;

			if (this.callBids) {
				this.callBids(this.onResponse);
			}

			ad_engine_["utils"].logger(this.logGroup, 'called');
		}
	}, {
		key: 'createWithTimeout',
		value: function createWithTimeout(func) {
			var msToTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

			var timeout = new promise_default.a(function (resolve, reject) {
				setTimeout(reject, msToTimeout);
			});

			return promise_default.a.race([new promise_default.a(func), timeout]);
		}
	}, {
		key: 'getSlotBestPrice',
		value: function getSlotBestPrice(slotName) {
			if (this.getBestPrice) {
				return this.getBestPrice(slotName);
			}

			return {};
		}
	}, {
		key: 'getSlotTargetingParams',
		value: function getSlotTargetingParams(slotName) {
			if (!this.called || !this.isSlotSupported(slotName) || !this.getTargetingParams) {
				return {};
			}

			return this.getTargetingParams(slotName);
		}
	}, {
		key: 'hasResponse',
		value: function hasResponse() {
			return this.response;
		}
	}, {
		key: 'isSlotSupported',
		value: function isSlotSupported(slotName) {
			if (this.isSupported) {
				return this.isSupported(slotName);
			}

			return false;
		}
	}, {
		key: 'onResponseCall',
		value: function onResponseCall() {
			this.response = true;

			if (this.calculatePrices) {
				this.calculatePrices();
			}

			if (this.onResponseCallbacks) {
				this.onResponseCallbacks.start();
			}

			ad_engine_["utils"].logger(this.logGroup, 'respond');
		}
	}, {
		key: 'resetState',
		value: function resetState() {
			var _this2 = this;

			this.called = false;
			this.response = false;
			this.onResponseCallbacks = [];

			ad_engine_["utils"].makeLazyQueue(this.onResponseCallbacks, function (callback) {
				callback(_this2.name);
			});
		}
	}, {
		key: 'waitForResponse',
		value: function waitForResponse() {
			var _this3 = this;

			return this.createWithTimeout(function (resolve) {
				if (_this3.hasResponse()) {
					resolve();
				} else {
					_this3.addResponseListener(resolve);
				}
			}, this.timeout);
		}
	}, {
		key: 'wasCalled',
		value: function wasCalled() {
			return this.called;
		}
	}]);

	return BaseBidder;
}();
// CONCATENATED MODULE: ./src/bidders/a9/index.js









var a9_A9 = function (_BaseBidder) {
	inherits_default()(A9, _BaseBidder);

	function A9(bidderConfig) {
		var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

		classCallCheck_default()(this, A9);

		var _this = possibleConstructorReturn_default()(this, (A9.__proto__ || get_prototype_of_default()(A9)).call(this, 'a9', bidderConfig, timeout));

		_this.loaded = false;
		_this.isCMPEnabled = ad_engine_["context"].get('custom.isCMPEnabled');
		_this.amazonId = _this.bidderConfig.amazonId;
		_this.slots = _this.bidderConfig.slots;
		_this.slotsVideo = _this.bidderConfig.slotsVideo;
		_this.bids = {};
		_this.priceMap = {};
		_this.timeout = timeout;
		return _this;
	}

	createClass_default()(A9, [{
		key: 'calculatePrices',
		value: function calculatePrices() {
			var _this2 = this;

			keys_default()(this.bids).forEach(function (slotName) {
				_this2.priceMap[slotName] = _this2.bids[slotName].amznbid;
			});
		}
	}, {
		key: 'callBids',
		value: function callBids(onResponse) {
			var _this3 = this;

			if (window.__cmp) {
				window.__cmp('getConsentData', null, function (consentData) {
					_this3.init(onResponse, consentData);
				});
			} else {
				this.init(onResponse);
			}
		}
	}, {
		key: 'init',
		value: function init(onResponse) {
			var _this4 = this;

			var consentData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var a9Slots = void 0;

			if (!this.loaded) {
				this.insertScript();
				this.configureApstag();

				window.apstag.init({
					pubID: this.amazonId,
					videoAdServer: 'DFP',
					gdpr: this.isCMPEnabled ? {
						enabled: consentData.gdprApplies,
						consent: consentData.consentData,
						cmpTimeout: 5000
					} : undefined
				});

				this.loaded = true;
			}

			this.bids = {};
			this.priceMap = {};

			a9Slots = keys_default()(this.slots).map(this.createSlotDefinition, this);

			if (this.bidderConfig.videoEnabled) {
				a9Slots = a9Slots.concat(this.slotsVideo.map(this.createVideoSlotDefinition));
			}

			var disabledSlots = ad_engine_["context"].get('bidders.disabledSlots');

			if (disabledSlots) {
				a9Slots = a9Slots.filter(function (slot) {
					return disabledSlots.indexOf(slot.slotID) === -1;
				});
			}

			window.apstag.fetchBids({
				slots: a9Slots,
				timeout: this.timeout
			}, function (currentBids) {
				currentBids.forEach(function (bid) {
					_this4.bids[bid.slotID] = bid;
				});

				onResponse();
			});
		}
	}, {
		key: 'configureApstag',
		value: function configureApstag() {
			var _this5 = this;

			window.apstag = window.apstag || {};
			window.apstag._Q = window.apstag._Q || [];

			if (typeof window.apstag.init === 'undefined') {
				window.apstag.init = function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					_this5.configureApstagCommand('i', args);
				};
			}

			if (typeof window.apstag.fetchBids === 'undefined') {
				window.apstag.fetchBids = function () {
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						args[_key2] = arguments[_key2];
					}

					_this5.configureApstagCommand('f', args);
				};
			}
		}
	}, {
		key: 'configureApstagCommand',
		value: function configureApstagCommand(command, args) {
			window.apstag._Q.push([command, args]);
		}
	}, {
		key: 'createSlotDefinition',
		value: function createSlotDefinition(slotName) {
			return {
				sizes: this.slots[slotName],
				slotID: slotName,
				slotName: slotName
			};
		}
	}, {
		key: 'createVideoSlotDefinition',
		value: function createVideoSlotDefinition(slotID) {
			return {
				slotID: slotID,
				mediaType: 'video'
			};
		}
	}, {
		key: 'getBestPrice',
		value: function getBestPrice(slotName) {
			return this.priceMap[slotName] ? { a9: this.priceMap[slotName] } : {};
		}
	}, {
		key: 'getPrices',
		value: function getPrices() {
			return this.priceMap;
		}
	}, {
		key: 'getTargetingKeysToReset',
		value: function getTargetingKeysToReset() {
			return ['amznbid', 'amzniid', 'amznsz', 'amznp'];
		}
	}, {
		key: 'getTargetingParams',
		value: function getTargetingParams(slotName) {
			var bid = this.bids[slotName];

			if (!bid) {
				return {};
			}

			return {
				amznbid: bid.amznbid,
				amzniid: bid.amzniid,
				amznsz: bid.amznsz,
				amznp: bid.amznp
			};
		}
	}, {
		key: 'insertScript',
		value: function insertScript() {
			var a9Script = document.createElement('script');

			a9Script.type = 'text/javascript';
			a9Script.async = true;
			a9Script.src = '//c.amazon-adsystem.com/aax2/apstag.js';

			var node = document.getElementsByTagName('script')[0];

			node.parentNode.insertBefore(a9Script, node);
		}
	}, {
		key: 'isSupported',
		value: function isSupported(slotName) {
			return this.slots[slotName] || this.slotsVideo.indexOf(slotName) >= 0;
		}
	}]);

	return A9;
}(base_bidder_BaseBidder);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__(32);
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: external "core-decorators"
var external_core_decorators_ = __webpack_require__(31);

// CONCATENATED MODULE: ./src/bidders/prebid/adapters/base-adapter.js



var base_adapter_BaseAdapter = function () {
	function BaseAdapter(_ref) {
		var enabled = _ref.enabled,
		    slots = _ref.slots;

		classCallCheck_default()(this, BaseAdapter);

		this.enabled = enabled;
		this.slots = slots;
	}

	createClass_default()(BaseAdapter, [{
		key: "prepareAdUnits",
		value: function prepareAdUnits() {
			var _this = this;

			return keys_default()(this.slots).map(function (slotName) {
				return _this.prepareConfigForAdUnit(slotName, _this.slots[slotName]);
			});
		}
	}]);

	return BaseAdapter;
}();
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/aol.js







var aol_Aol = function (_BaseAdapter) {
	inherits_default()(Aol, _BaseAdapter);

	function Aol(options) {
		classCallCheck_default()(this, Aol);

		var _this = possibleConstructorReturn_default()(this, (Aol.__proto__ || get_prototype_of_default()(Aol)).call(this, options));

		_this.bidderName = 'aol';
		_this.network = options.network;
		return _this;
	}

	createClass_default()(Aol, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes,
			    placement = _ref.placement,
			    alias = _ref.alias,
			    sizeId = _ref.sizeId;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						placement: placement,
						network: this.network,
						alias: alias,
						sizeId: sizeId
					}
				}]
			};
		}
	}]);

	return Aol;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/appnexus.js








var appnexus_Appnexus = function (_BaseAdapter) {
	inherits_default()(Appnexus, _BaseAdapter);

	function Appnexus(options) {
		classCallCheck_default()(this, Appnexus);

		var _this = possibleConstructorReturn_default()(this, (Appnexus.__proto__ || get_prototype_of_default()(Appnexus)).call(this, options));

		_this.bidderName = 'appnexus';
		_this.placements = options.placements;
		return _this;
	}

	createClass_default()(Appnexus, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes,
			    _ref$position = _ref.position,
			    position = _ref$position === undefined ? 'mobile' : _ref$position;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						placementId: this.getPlacement(position)
					}
				}]
			};
		}
	}, {
		key: 'getPlacement',
		value: function getPlacement(position) {
			if (position === 'mobile') {
				var vertical = ad_engine_["context"].get('targeting.mappedVerticalName');

				position = vertical && this.placements[vertical] ? vertical : 'other';
			}

			return this.placements[position];
		}
	}]);

	return Appnexus;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/appnexus-ast.js








var appnexus_ast_AppnexusAst = function (_BaseAdapter) {
	inherits_default()(AppnexusAst, _BaseAdapter);

	function AppnexusAst(options) {
		classCallCheck_default()(this, AppnexusAst);

		var _this = possibleConstructorReturn_default()(this, (AppnexusAst.__proto__ || get_prototype_of_default()(AppnexusAst)).call(this, options));

		_this.bidderName = 'appnexusAst';
		_this.aliases = {
			appnexus: [_this.bidderName]
		};
		_this.debugPlacementId = options.debugPlacementId;
		_this.isDebugMode = ad_engine_["utils"].queryString.get('appnexusast_debug_mode') === '1';
		return _this;
	}

	createClass_default()(AppnexusAst, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var placementId = _ref.placementId,
			    context = _ref.context;

			return {
				code: code,
				mediaTypes: {
					video: {
						context: context,
						playerSize: [640, 480]
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						placementId: this.isDebugMode ? this.debugPlacementId : placementId,
						video: {
							skippable: false,
							playback_method: ['auto_play_sound_off']
						}
					}
				}]
			};
		}
	}]);

	return AppnexusAst;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/appnexus-webads.js







var appnexus_webads_AppnexusWebads = function (_BaseAdapter) {
	inherits_default()(AppnexusWebads, _BaseAdapter);

	function AppnexusWebads(options) {
		classCallCheck_default()(this, AppnexusWebads);

		var _this = possibleConstructorReturn_default()(this, (AppnexusWebads.__proto__ || get_prototype_of_default()(AppnexusWebads)).call(this, options));

		_this.bidderName = 'appnexusWebAds';
		_this.aliases = {
			appnexus: [_this.bidderName]
		};
		_this.priority = 0;
		return _this;
	}

	createClass_default()(AppnexusWebads, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var placementId = _ref.placementId,
			    sizes = _ref.sizes;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						placementId: placementId
					}
				}]
			};
		}
	}]);

	return AppnexusWebads;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/audience-network.js








var audience_network_AudienceNetwork = function (_BaseAdapter) {
	inherits_default()(AudienceNetwork, _BaseAdapter);

	function AudienceNetwork(options) {
		classCallCheck_default()(this, AudienceNetwork);

		var _this = possibleConstructorReturn_default()(this, (AudienceNetwork.__proto__ || get_prototype_of_default()(AudienceNetwork)).call(this, options));

		_this.bidderName = 'audienceNetwork';
		_this.testMode = ad_engine_["utils"].queryString.get('audiencenetworktest') === 'true';
		return _this;
	}

	createClass_default()(AudienceNetwork, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes,
			    placementId = _ref.placementId;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						testMode: this.testMode,
						placementId: placementId
					}
				}]
			};
		}
	}]);

	return AudienceNetwork;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/beachfront.js








var beachfront_Beachfront = function (_BaseAdapter) {
	inherits_default()(Beachfront, _BaseAdapter);

	function Beachfront(options) {
		classCallCheck_default()(this, Beachfront);

		var _this = possibleConstructorReturn_default()(this, (Beachfront.__proto__ || get_prototype_of_default()(Beachfront)).call(this, options));

		_this.bidderName = 'beachfront';
		_this.bidfloor = 0.01;
		_this.debugAppId = options.debugAppId;
		_this.isDebugMode = ad_engine_["utils"].queryString.get('beachfront_debug_mode') === '1';
		return _this;
	}

	createClass_default()(Beachfront, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var appId = _ref.appId;

			return {
				code: code,
				mediaTypes: {
					video: {
						playerSize: [640, 480]
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						bidfloor: this.bidfloor,
						appId: this.isDebugMode ? this.debugAppId : appId
					}
				}]
			};
		}
	}]);

	return Beachfront;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/index-exchange.js







var index_exchange_IndexExchange = function (_BaseAdapter) {
	inherits_default()(IndexExchange, _BaseAdapter);

	function IndexExchange(options) {
		classCallCheck_default()(this, IndexExchange);

		var _this = possibleConstructorReturn_default()(this, (IndexExchange.__proto__ || get_prototype_of_default()(IndexExchange)).call(this, options));

		_this.bidderName = 'indexExchange';
		_this.aliases = {
			ix: [_this.bidderName]
		};
		return _this;
	}

	createClass_default()(IndexExchange, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var _this2 = this;

			var sizes = _ref.sizes,
			    siteId = _ref.siteId;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: sizes.map(function (size) {
					return {
						bidder: _this2.bidderName,
						params: {
							siteId: siteId,
							size: size
						}
					};
				})
			};
		}
	}]);

	return IndexExchange;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/kargo.js







var kargo_Kargo = function (_BaseAdapter) {
	inherits_default()(Kargo, _BaseAdapter);

	function Kargo(options) {
		classCallCheck_default()(this, Kargo);

		var _this = possibleConstructorReturn_default()(this, (Kargo.__proto__ || get_prototype_of_default()(Kargo)).call(this, options));

		_this.bidderName = 'kargo';
		return _this;
	}

	createClass_default()(Kargo, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes,
			    placementId = _ref.placementId;

			return {
				code: code,
				sizes: sizes,
				bids: [{
					bidder: this.bidderName,
					params: {
						placementId: placementId
					}
				}]
			};
		}
	}]);

	return Kargo;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/onemobile.js







var onemobile_Onemobile = function (_BaseAdapter) {
	inherits_default()(Onemobile, _BaseAdapter);

	function Onemobile(options) {
		classCallCheck_default()(this, Onemobile);

		var _this = possibleConstructorReturn_default()(this, (Onemobile.__proto__ || get_prototype_of_default()(Onemobile)).call(this, options));

		_this.bidderName = 'onemobile';
		_this.siteId = options.siteId;
		return _this;
	}

	createClass_default()(Onemobile, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var size = _ref.size,
			    pos = _ref.pos;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: [size]
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						dcn: this.siteId,
						pos: pos
					}
				}]
			};
		}
	}]);

	return Onemobile;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/openx.js







var openx_Openx = function (_BaseAdapter) {
	inherits_default()(Openx, _BaseAdapter);

	function Openx(options) {
		classCallCheck_default()(this, Openx);

		var _this = possibleConstructorReturn_default()(this, (Openx.__proto__ || get_prototype_of_default()(Openx)).call(this, options));

		_this.bidderName = 'openx';
		_this.delDomain = options.delDomain;
		return _this;
	}

	createClass_default()(Openx, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes,
			    unit = _ref.unit;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						unit: unit,
						delDomain: this.delDomain
					}
				}]
			};
		}
	}]);

	return Openx;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/pubmatic.js







var pubmatic_Pubmatic = function (_BaseAdapter) {
	inherits_default()(Pubmatic, _BaseAdapter);

	function Pubmatic(options) {
		classCallCheck_default()(this, Pubmatic);

		var _this = possibleConstructorReturn_default()(this, (Pubmatic.__proto__ || get_prototype_of_default()(Pubmatic)).call(this, options));

		_this.bidderName = 'pubmatic';
		_this.publisherId = options.publisherId;
		return _this;
	}

	createClass_default()(Pubmatic, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var _this2 = this;

			var sizes = _ref.sizes,
			    ids = _ref.ids;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: ids.map(function (adSlot) {
					return {
						bidder: _this2.bidderName,
						params: {
							adSlot: adSlot,
							publisherId: _this2.publisherId
						}
					};
				})
			};
		}
	}]);

	return Pubmatic;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/prebid-helper.js




var lazyLoadSlots = ['bottom_leaderboard'];

function isSlotAvailable(code, lazyLoad) {
	var disabledSlots = ad_engine_["context"].get('bidders.disabledSlots');
	var isSlotLazy = lazyLoadSlots && lazyLoadSlots.indexOf(code) !== -1;

	if (disabledSlots && disabledSlots.indexOf(code) !== -1) {
		return false;
	}

	if (lazyLoad !== 'off' && (lazyLoad === 'pre' && isSlotLazy || lazyLoad === 'post' && !isSlotLazy)) {
		return false;
	}

	return true;
}

function setupAdUnits(adaptersConfig) {
	var lazyLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'off';

	var adUnits = [];
	var adapters = getAdapters(adaptersConfig);

	adapters.forEach(function (adapter) {
		if (adapter && adapter.enabled) {
			var adapterAdUnits = adapter.prepareAdUnits();

			adapterAdUnits.forEach(function (adUnit) {
				if (adUnit && isSlotAvailable(adUnit.code, lazyLoad)) {
					adUnits.push(adUnit);
				}
			});
		}
	});

	return adUnits;
}

function getBidByAdId(adId) {
	if (!window.pbjs || typeof window.pbjs.getBidResponses !== 'function') {
		return null;
	}

	var bids = window.pbjs.getAllPrebidWinningBids().filter(function (bid) {
		return adId === bid.adId;
	});

	if (!bids.length) {
		var responses = window.pbjs.getBidResponses();

		keys_default()(responses).forEach(function (adUnit) {
			var adUnitsBids = responses[adUnit].bids.filter(function (bid) {
				return adId === bid.adId;
			});

			bids = bids.concat(adUnitsBids);
		});
	}

	return bids.length ? bids[0] : null;
}

function getAvailableBidsByAdUnitCode(adUnitCode) {
	var bids = [];

	if (window.pbjs && typeof window.pbjs.getBidResponsesForAdUnitCode === 'function') {
		bids = window.pbjs.getBidResponsesForAdUnitCode(adUnitCode).bids || [];
		bids = bids.filter(function (bid) {
			return bid.status !== 'rendered';
		});
	}

	return bids;
}

function getPrebid() {
	return window.pbjs;
}

function getTargeting(slotName) {
	var targeting = ad_engine_["context"].get('bidders.prebid.targeting') || {};

	targeting.pos = [slotName];

	return targeting;
}

function getWinningVideoBidBySlotName(slotName, allowedBidders) {
	if (!window.pbjs || !window.pbjs.getBidResponsesForAdUnitCode) {
		return null;
	}

	var bids = window.pbjs.getBidResponsesForAdUnitCode(slotName).bids || [];

	return bids.filter(function (bid) {
		var canUseThisBidder = !allowedBidders || allowedBidders.indexOf(bid.bidderCode) !== -1;
		var hasVast = bid.vastUrl || bid.vastContent;

		return canUseThisBidder && hasVast && bid.cpm > 0;
	}).reduce(function (previousBid, currentBid) {
		if (previousBid === null || currentBid.cpm > previousBid.cpm) {
			return currentBid;
		}

		return previousBid;
	}, null);
}

function pushPrebid(callback) {
	window.pbjs.que.push(callback);
}
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/rubicon.js









var rubicon_Rubicon = function (_BaseAdapter) {
	inherits_default()(Rubicon, _BaseAdapter);

	function Rubicon(options) {
		classCallCheck_default()(this, Rubicon);

		var _this = possibleConstructorReturn_default()(this, (Rubicon.__proto__ || get_prototype_of_default()(Rubicon)).call(this, options));

		_this.bidderName = 'rubicon';
		_this.accountId = options.accountId;
		return _this;
	}

	createClass_default()(Rubicon, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var siteId = _ref.siteId,
			    zoneId = _ref.zoneId,
			    sizeId = _ref.sizeId,
			    position = _ref.position;

			if (code === 'featured' && !ad_engine_["context"].get('custom.rubiconInFV')) {
				return null;
			}

			var targeting = getTargeting(code);

			return {
				code: code,
				mediaType: 'video',
				mediaTypes: {
					video: {
						playerSize: [640, 480]
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						accountId: this.accountId,
						siteId: siteId,
						zoneId: zoneId,
						name: code,
						position: position,
						inventory: targeting,
						video: {
							playerWidth: '640',
							playerHeight: '480',
							size_id: sizeId,
							language: targeting.lang ? targeting.lang[0] : 'en'
						}
					}
				}]
			};
		}
	}]);

	return Rubicon;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/rubicon-display.js









var rubicon_display_RubiconDisplay = function (_BaseAdapter) {
	inherits_default()(RubiconDisplay, _BaseAdapter);

	function RubiconDisplay(options) {
		classCallCheck_default()(this, RubiconDisplay);

		var _this = possibleConstructorReturn_default()(this, (RubiconDisplay.__proto__ || get_prototype_of_default()(RubiconDisplay)).call(this, options));

		_this.bidderName = 'rubicon_display';
		_this.aliases = {
			rubicon: [_this.bidderName]
		};
		_this.accountId = options.accountId;
		return _this;
	}

	createClass_default()(RubiconDisplay, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var siteId = _ref.siteId,
			    zoneId = _ref.zoneId,
			    sizes = _ref.sizes,
			    position = _ref.position,
			    targeting = _ref.targeting;

			var pageTargeting = getTargeting(code);

			keys_default()(targeting || {}).forEach(function (key) {
				pageTargeting[key] = targeting[key];
			});

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName,
					params: {
						accountId: this.accountId,
						siteId: siteId,
						zoneId: zoneId,
						name: code,
						position: position,
						keywords: ['rp.fastlane'],
						inventory: pageTargeting
					}
				}]
			};
		}
	}]);

	return RubiconDisplay;
}(base_adapter_BaseAdapter);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(30);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/bidders/prebid/adapters/wikia.js









var wikia_Wikia = function (_BaseAdapter) {
	inherits_default()(Wikia, _BaseAdapter);

	function Wikia(options) {
		classCallCheck_default()(this, Wikia);

		var _this = possibleConstructorReturn_default()(this, (Wikia.__proto__ || get_prototype_of_default()(Wikia)).call(this, options));

		_this.bidderName = 'wikia';
		_this.enabled = !!ad_engine_["utils"].queryString.get('wikia_adapter');

		_this.create = function () {
			return _this;
		};
		return _this;
	}

	createClass_default()(Wikia, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var sizes = _ref.sizes;

			return {
				code: code,
				mediaTypes: {
					banner: {
						sizes: sizes
					}
				},
				bids: [{
					bidder: this.bidderName
				}]
			};
		}
	}, {
		key: 'getSpec',
		value: function getSpec() {
			return {
				code: this.bidderName,
				supportedMediaTypes: ['banner']
			};
		}
	}, {
		key: 'getPrice',
		value: function getPrice() {
			var price = ad_engine_["context"].get('bidders.prebid.wikia.price') || ad_engine_["utils"].queryString.get('wikia_adapter');

			return parseInt(price, 10) / 100;
		}
	}, {
		key: 'callBids',
		value: function callBids(bidRequest, addBidResponse, done) {
			var _this2 = this;

			window.pbjs.que.push(function () {
				_this2.addBids(bidRequest, addBidResponse, done);
			});
		}
	}, {
		key: 'addBids',
		value: function addBids(bidRequest, addBidResponse, done) {
			var _this3 = this;

			bidRequest.bids.forEach(function (bid) {
				var bidResponse = window.pbjs.createBid(1),
				    _bid$sizes$ = slicedToArray_default()(bid.sizes[0], 2),
				    width = _bid$sizes$[0],
				    height = _bid$sizes$[1];


				bidResponse.ad = _this3.getCreative(bid.sizes[0]);
				bidResponse.bidderCode = bidRequest.bidderCode;
				bidResponse.cpm = _this3.getPrice();
				bidResponse.ttl = 300;
				bidResponse.mediaType = 'banner';
				bidResponse.width = width;
				bidResponse.height = height;

				addBidResponse(bid.adUnitCode, bidResponse);
			});
			done();
		}
	}, {
		key: 'getCreative',
		value: function getCreative(size) {
			var creative = document.createElement('div');

			creative.style.background = '#00b7e0';
			creative.style.color = '#fff';
			creative.style.fontFamily = 'sans-serif';
			creative.style.height = '100%';
			creative.style.textAlign = 'center';
			creative.style.width = '100%';

			var title = document.createElement('p');

			title.innerText = 'Wikia Creative';
			title.style.fontWeight = 'bold';
			title.style.margin = '0';
			title.style.paddingTop = '10px';

			var details = document.createElement('small');

			details.innerText = 'cpm: ' + this.getPrice() + ', size: ' + size.join('x');

			creative.appendChild(title);
			creative.appendChild(details);

			return creative.outerHTML;
		}
	}]);

	return Wikia;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/wikia-video.js









var wikia_video_WikiaVideo = function (_BaseAdapter) {
	inherits_default()(WikiaVideo, _BaseAdapter);

	function WikiaVideo(options) {
		classCallCheck_default()(this, WikiaVideo);

		var _this = possibleConstructorReturn_default()(this, (WikiaVideo.__proto__ || get_prototype_of_default()(WikiaVideo)).call(this, options));

		_this.bidderName = 'wikiaVideo';
		_this.enabled = !!ad_engine_["utils"].queryString.get('wikia_video_adapter');

		_this.create = function () {
			return _this;
		};
		return _this;
	}

	createClass_default()(WikiaVideo, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code) {
			return {
				code: code,
				mediaTypes: {
					video: {
						context: 'outstream',
						playerSize: [640, 480]
					}
				},
				bids: [{
					bidder: this.bidderName
				}]
			};
		}
	}, {
		key: 'getSpec',
		value: function getSpec() {
			return {
				code: this.bidderName,
				supportedMediaTypes: ['video']
			};
		}
	}, {
		key: 'getPrice',
		value: function getPrice() {
			var price = ad_engine_["context"].get('bidders.prebid.wikiaVideo.price') || ad_engine_["utils"].queryString.get('wikia_video_adapter');

			return parseInt(price, 10) / 100;
		}
	}, {
		key: 'callBids',
		value: function callBids(bidRequest, addBidResponse, done) {
			var _this2 = this;

			window.pbjs.que.push(function () {
				_this2.addBids(bidRequest, addBidResponse, done);
			});
		}
	}, {
		key: 'addBids',
		value: function addBids(bidRequest, addBidResponse, done) {
			var _this3 = this;

			bidRequest.bids.forEach(function (bid) {
				var bidResponse = window.pbjs.createBid(1),
				    _bid$sizes$ = slicedToArray_default()(bid.sizes[0], 2),
				    width = _bid$sizes$[0],
				    height = _bid$sizes$[1];


				bidResponse.bidderCode = bidRequest.bidderCode;
				bidResponse.cpm = _this3.getPrice();
				bidResponse.creativeId = 'foo123_wikiaVideoCreativeId';
				bidResponse.ttl = 300;
				bidResponse.mediaType = 'video';
				bidResponse.width = width;
				bidResponse.height = height;
				bidResponse.vastUrl = Object(ad_engine_["buildVastUrl"])(bidResponse.width / bidResponse.height, bid.adUnitCode, {
					src: 'test',
					pos: 'outstream',
					passback: 'wikiaVideo'
				});

				addBidResponse(bid.adUnitCode, bidResponse);
			});
			done();
		}
	}]);

	return WikiaVideo;
}(base_adapter_BaseAdapter);
// CONCATENATED MODULE: ./src/bidders/prebid/adapters-registry.js

















var adapters_registry_adapters = [];
var customAdapters = [];
var availableAdapters = {
	aol: aol_Aol,
	appnexus: appnexus_Appnexus,
	appnexusAst: appnexus_ast_AppnexusAst,
	appnexusWebads: appnexus_webads_AppnexusWebads,
	audienceNetwork: audience_network_AudienceNetwork,
	beachfront: beachfront_Beachfront,
	indexExchange: index_exchange_IndexExchange,
	kargo: kargo_Kargo,
	onemobile: onemobile_Onemobile,
	openx: openx_Openx,
	pubmatic: pubmatic_Pubmatic,
	rubicon: rubicon_Rubicon,
	rubiconDisplay: rubicon_display_RubiconDisplay
};

function registerAliases() {
	adapters_registry_adapters.filter(function (adapter) {
		return adapter.aliases;
	}).forEach(function (adapter) {
		window.pbjs.que.push(function () {
			var aliasMap = adapter.aliases;

			keys_default()(aliasMap).forEach(function (bidderName) {
				aliasMap[bidderName].forEach(function (alias) {
					window.pbjs.aliasBidder(bidderName, alias);
				});
			});
		});
	});
}

function setupAdapters(bidders) {
	keys_default()(availableAdapters).forEach(function (key) {
		if (bidders[key]) {
			var adapter = new availableAdapters[key](bidders[key]);

			adapters_registry_adapters.push(adapter);
		}
	});

	setupCustomAdapters(bidders);
}

function setupCustomAdapters(bidders) {
	if (bidders.wikia) {
		customAdapters.push(new wikia_Wikia(bidders.wikia));
	}

	if (bidders.wikiaVideo) {
		customAdapters.push(new wikia_video_WikiaVideo(bidders.wikiaVideo));
	}

	customAdapters.forEach(function (adapter) {
		adapters_registry_adapters.push(adapter);

		window.pbjs.que.push(function () {
			window.pbjs.registerBidAdapter(adapter.create, adapter.bidderName);
		});
	});
}

function getPriorities() {
	var priorities = {};

	adapters_registry_adapters.forEach(function (adapter) {
		priorities[adapter.bidderName] = adapter.priority || 1;
	});

	return priorities;
}

function getAdapters(config) {
	if (adapters_registry_adapters.length === 0 && config) {
		setupAdapters(config);
		registerAliases();
	}

	return adapters_registry_adapters;
}
// CONCATENATED MODULE: ./src/bidders/prebid/price-helper.js



function isValidPrice(bid) {
	return bid.getStatusCode && bid.getStatusCode() === prebid_Prebid.validResponseStatusCode;
}

function getPrebidBestPrice(slotName) {
	var bestPrices = {};

	if (window.pbjs && window.pbjs.getBidResponsesForAdUnitCode) {
		var slotBids = window.pbjs.getBidResponsesForAdUnitCode(slotName).bids || [];

		getAdapters().forEach(function (adapter) {
			bestPrices[adapter.bidderName] = '';
		});

		slotBids.forEach(function (bid) {
			if (isValidPrice(bid) && bid.status !== 'rendered') {
				var bidderCode = bid.bidderCode,
				    cpm = bid.cpm;

				var cpmPrice = transformPriceFromCpm(cpm);

				bestPrices[bidderCode] = Math.max(bestPrices[bidderCode] || 0, parseFloat(cpmPrice)).toFixed(2).toString();
			}
		});
	}

	return bestPrices;
}

function transformPriceFromCpm(cpm) {
	var maxCpm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	var defaultCpm = 20;

	if (maxCpm < defaultCpm) {
		maxCpm = defaultCpm;
	}

	var result = Math.floor(maxCpm).toFixed(2);

	if (cpm === 0) {
		result = '0.00';
	} else if (cpm < 0.05) {
		result = '0.01';
	} else if (cpm < 5.00) {
		result = (Math.floor(cpm * 20) / 20).toFixed(2);
	} else if (cpm < 10.00) {
		result = (Math.floor(cpm * 10) / 10).toFixed(2);
	} else if (cpm < 20.00) {
		result = (Math.floor(cpm * 2) / 2).toFixed(2);
	} else if (cpm < maxCpm) {
		result = Math.floor(cpm).toFixed(2);
	}

	return result;
}
// CONCATENATED MODULE: ./src/bidders/prebid/prebid-settings.js



function getSettings() {
	return {
		standard: {
			alwaysUseBid: false,
			adserverTargeting: [{
				key: 'hb_bidder',
				val: function val(_ref) {
					var bidderCode = _ref.bidderCode;
					return bidderCode;
				}
			}, {
				key: 'hb_adid',
				val: function val(_ref2) {
					var adId = _ref2.adId;
					return adId;
				}
			}, {
				key: 'hb_pb',
				val: function val(bidResponse) {
					return transformPriceFromCpm(bidResponse.cpm);
				}
			}, {
				key: 'hb_size',
				val: function val(_ref3) {
					var size = _ref3.size;
					return size;
				}
			}, {
				key: 'hb_uuid',
				val: function val(bidResponse) {
					return bidResponse.bidderCode === 'appnexusAst' && ad_engine_["context"].get('custom.appnexusDfp') || bidResponse.bidderCode === 'rubicon' && ad_engine_["context"].get('custom.rubiconDfp') ? bidResponse.videoCacheKey : 'disabled';
				}
			}]
		}
	};
}
// CONCATENATED MODULE: ./src/bidders/prebid/index.js







var prebid_this = undefined,
    _dec,
    _dec2,
    _dec3,
    _desc,
    _value,
    _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}









var prebidLazyRun = function prebidLazyRun(method) {
	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return window.pbjs.que.push(function () {
			return method.apply(prebid_this, args);
		});
	};
};

var prebid_Prebid = (_dec = Object(external_core_decorators_["decorate"])(prebidLazyRun), _dec2 = Object(external_core_decorators_["decorate"])(prebidLazyRun), _dec3 = Object(external_core_decorators_["decorate"])(prebidLazyRun), (_class = function (_BaseBidder) {
	inherits_default()(Prebid, _BaseBidder);

	function Prebid(bidderConfig) {
		var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

		classCallCheck_default()(this, Prebid);

		var _this2 = possibleConstructorReturn_default()(this, (Prebid.__proto__ || get_prototype_of_default()(Prebid)).call(this, 'prebid', bidderConfig, timeout));

		_this2.loaded = false;
		_this2.lazyLoaded = false;
		_this2.isLazyLoadingEnabled = _this2.bidderConfig.lazyLoadingEnabled;
		_this2.isCMPEnabled = ad_engine_["context"].get('custom.isCMPEnabled');
		_this2.adUnits = setupAdUnits(_this2.bidderConfig, _this2.isLazyLoadingEnabled ? 'pre' : 'off');
		_this2.bidsRefreshing = ad_engine_["context"].get('bidders.prebid.bidsRefreshing');
		_this2.prebidConfig = {
			debug: ad_engine_["utils"].queryString.get('pbjs_debug') === '1' || ad_engine_["utils"].queryString.get('pbjs_debug') === 'true',
			enableSendAllBids: true,
			bidderSequence: 'random',
			bidderTimeout: _this2.timeout,
			cache: {
				url: 'https://prebid.adnxs.com/pbc/v1/cache'
			},
			userSync: {
				iframeEnabled: true,
				enabledBidders: [],
				syncDelay: 6000
			}
		};

		if (_this2.isCMPEnabled) {
			_this2.prebidConfig.consentManagement = {
				cmpApi: 'iab',
				timeout: _this2.timeout,
				allowAuctionWithoutConsent: false
			};
		}

		window.pbjs = window.pbjs || {};
		window.pbjs.que = window.pbjs.que || [];

		_this2.applyConfig(_this2.prebidConfig);

		if (_this2.bidsRefreshing && _this2.bidsRefreshing.enabled) {
			_this2.registerBidsRefreshing();
		}
		return _this2;
	}

	createClass_default()(Prebid, [{
		key: 'applyConfig',
		value: function applyConfig(config) {
			window.pbjs.setConfig(config);
		}
	}, {
		key: 'applySettings',
		value: function applySettings() {
			window.pbjs.bidderSettings = getSettings();
		}
	}, {
		key: 'callBids',
		value: function callBids(bidsBackHandler) {
			var _this3 = this;

			if (!this.adUnits) {
				this.adUnits = setupAdUnits(this.bidderConfig, this.isLazyLoadingEnabled ? 'pre' : 'off');
			}

			if (this.adUnits.length > 0) {
				this.applySettings();
				this.requestBids(this.adUnits, bidsBackHandler, this.removeAdUnits);
			}

			this.loaded = true;

			if (this.isLazyLoadingEnabled) {
				ad_engine_["events"].on(ad_engine_["events"].PREBID_LAZY_CALL, function () {
					_this3.lazyCall(bidsBackHandler);
				});
			}
		}
	}, {
		key: 'lazyCall',
		value: function lazyCall(bidsBackHandler) {
			if (!this.lazyLoaded) {
				this.lazyLoaded = true;

				var adUnitsLazy = setupAdUnits(this.bidderConfig, 'post');

				if (adUnitsLazy.length > 0) {
					this.requestBids(adUnitsLazy, bidsBackHandler);

					this.adUnits = this.adUnits.concat(adUnitsLazy);
				}
			}
		}
	}, {
		key: 'removeAdUnits',
		value: function removeAdUnits() {
			(window.pbjs.adUnits || []).forEach(function (adUnit) {
				window.pbjs.removeAdUnit(adUnit.code);
			});
		}
	}, {
		key: 'getBestPrice',
		value: function getBestPrice(slotName) {
			var slotAlias = ad_engine_["context"].get('slots.' + slotName + '.bidderAlias') || slotName;

			return getPrebidBestPrice(slotAlias);
		}
	}, {
		key: 'getTargetingKeysToReset',
		value: function getTargetingKeysToReset() {
			return ['hb_bidder', 'hb_adid', 'hb_pb', 'hb_size', 'hb_uuid'];
		}
	}, {
		key: 'getTargetingParams',
		value: function getTargetingParams(slotName) {
			var slotParams = {};

			var slotAlias = ad_engine_["context"].get('slots.' + slotName + '.bidderAlias') || slotName;
			var bids = getAvailableBidsByAdUnitCode(slotAlias);

			if (bids.length) {
				var bidParams = null;
				var priorities = getPriorities();

				bids.forEach(function (param) {
					if (!bidParams) {
						bidParams = param;
					} else if (bidParams.cpm === param.cpm) {
						if (priorities[bidParams.bidder] === priorities[param.bidder]) {
							bidParams = bidParams.timeToRespond > param.timeToRespond ? param : bidParams;
						} else {
							bidParams = priorities[bidParams.bidder] < priorities[param.bidder] ? param : bidParams;
						}
					} else {
						bidParams = bidParams.cpm < param.cpm ? param : bidParams;
					}
				});

				if (bidParams) {
					slotParams = bidParams.adserverTargeting;
				}

				// ADEN-7436: AppNexus hb_uuid fix (adserverTargeting params are being set before cache key is returned)
				slotParams.hb_uuid = slotParams.hb_uuid || bidParams.videoCacheKey || 'disabled';
			}

			return slotParams || {};
		}
	}, {
		key: 'isSupported',
		value: function isSupported(slotName) {
			var slotAlias = ad_engine_["context"].get('slots.' + slotName + '.bidderAlias') || slotName;

			return this.adUnits && this.adUnits.some(function (adUnit) {
				return adUnit.code === slotAlias;
			});
		}
	}, {
		key: 'registerBidsRefreshing',
		value: function registerBidsRefreshing() {
			var _this4 = this;

			window.pbjs.onEvent('bidWon', function (winningBid) {
				if (_this4.bidsRefreshing.slots.indexOf(winningBid.adUnitCode) !== -1) {
					var adUnitsToRefresh = _this4.adUnits.filter(function (adUnit) {
						return adUnit.code === winningBid.adUnitCode && adUnit.bids && adUnit.bids[0] && adUnit.bids[0].bidder === winningBid.bidderCode;
					});

					_this4.requestBids(adUnitsToRefresh);
				}
			});
		}
	}, {
		key: 'requestBids',
		value: function requestBids(adUnits, bidsBackHandler) {
			var withRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

			if (withRemove) {
				withRemove();
			}

			window.pbjs.requestBids({
				adUnits: adUnits,
				bidsBackHandler: bidsBackHandler
			});
		}
	}]);

	return Prebid;
}(base_bidder_BaseBidder), (_applyDecoratedDescriptor(_class.prototype, 'applyConfig', [_dec], get_own_property_descriptor_default()(_class.prototype, 'applyConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'applySettings', [_dec2], get_own_property_descriptor_default()(_class.prototype, 'applySettings'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'requestBids', [_dec3], get_own_property_descriptor_default()(_class.prototype, 'requestBids'), _class.prototype)), _class));
prebid_Prebid.validResponseStatusCode = 1;
prebid_Prebid.errorResponseStatusCode = 2;
// CONCATENATED MODULE: ./src/bidders/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidders", function() { return bidders_bidders; });






__webpack_require__(67);

var biddersRegistry = {};
var realSlotPrices = {};
var logGroup = 'bidders';

function applyTargetingParams(slotName, targeting) {
	keys_default()(targeting).forEach(function (key) {
		return ad_engine_["context"].set('slots.' + slotName + '.targeting.' + key, targeting[key]);
	});
}

function forEachBidder(callback) {
	keys_default()(biddersRegistry).forEach(function (bidderName) {
		callback(biddersRegistry[bidderName]);
	});
}

function getBidParameters(slotName) {
	var slotParams = {};

	forEachBidder(function (bidder) {
		if (bidder && bidder.wasCalled()) {
			var params = bidder.getSlotTargetingParams(slotName);

			keys_default()(params).forEach(function (key) {
				slotParams[key] = params[key];
			});
		}
	});

	return slotParams;
}

function getCurrentSlotPrices(slotName) {
	var slotPrices = {};

	forEachBidder(function (bidder) {
		if (bidder && bidder.isSlotSupported(slotName)) {
			var priceFromBidder = bidder.getSlotBestPrice(slotName);

			keys_default()(priceFromBidder).forEach(function (bidderName) {
				slotPrices[bidderName] = priceFromBidder[bidderName];
			});
		}
	});

	return slotPrices;
}

function getDfpSlotPrices(slotName) {
	return realSlotPrices[slotName] || {};
}

function hasAllResponses() {
	var missingBidders = keys_default()(biddersRegistry).filter(function (bidderName) {
		var bidder = biddersRegistry[bidderName];

		return !bidder.hasResponse();
	});

	return missingBidders.length === 0;
}

function resetTargetingKeys(slotName) {
	forEachBidder(function (bidder) {
		bidder.getTargetingKeysToReset().forEach(function (key) {
			ad_engine_["context"].set('slots.' + slotName + '.targeting.' + key, null);
		});
	});

	ad_engine_["utils"].logger(logGroup, 'resetTargetingKeys', slotName);
}

function requestBids(_ref) {
	var _ref$responseListener = _ref.responseListener,
	    responseListener = _ref$responseListener === undefined ? null : _ref$responseListener;

	var config = ad_engine_["context"].get('bidders');

	if (config.prebid && config.prebid.enabled) {
		if (!ad_engine_["events"].PREBID_LAZY_CALL) {
			ad_engine_["events"].registerEvent('PREBID_LAZY_CALL');
		}

		biddersRegistry.prebid = new prebid_Prebid(config.prebid, config.timeout);
	}

	if (config.a9 && config.a9.enabled) {
		biddersRegistry.a9 = new a9_A9(config.a9, config.timeout);
	}

	forEachBidder(function (bidder) {
		if (responseListener) {
			bidder.addResponseListener(responseListener);
		}

		bidder.call();
	});
}

function storeRealSlotPrices(slotName) {
	realSlotPrices[slotName] = getCurrentSlotPrices(slotName);
}

function updateSlotTargeting(slotName) {
	var bidderTargeting = getBidParameters(slotName);

	storeRealSlotPrices(slotName);

	resetTargetingKeys(slotName);
	applyTargetingParams(slotName, bidderTargeting);

	ad_engine_["utils"].logger(logGroup, 'updateSlotTargeting', slotName, bidderTargeting);

	return bidderTargeting;
}

var bidders_bidders = {
	getCurrentSlotPrices: getCurrentSlotPrices,
	getDfpSlotPrices: getDfpSlotPrices,
	hasAllResponses: hasAllResponses,
	prebidHelper: prebid_helper_namespaceObject,
	requestBids: requestBids,
	updateSlotTargeting: updateSlotTargeting
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

/* prebid.js v1.15.0
Updated : 2018-07-30 */
!(function(u){var s=window.pbjsChunk;window.pbjsChunk=function(e,t,n){for(var r,i,o,a=0,d=[];a<e.length;a++)i=e[a],c[i]&&d.push(c[i][0]),c[i]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(u[r]=t[r]);for(s&&s(e,t,n);d.length;)d.shift()();if(n)for(a=0;a<n.length;a++)o=f(f.s=n[a]);return o};var n={},c={146:0};function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=u,f.c=n,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.oe=function(e){throw console.error(e),e},f(f.s=498)})({0:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getLatestHighestCpmBid=a.getOldestHighestCpmBid=a.getHighestCpm=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a.getAdUnitSizes=function(e){if(!e)return;var t=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){var n=e.mediaTypes.banner.sizes;Array.isArray(n[0])?t=n:t.push(n)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes));return t},a.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)T(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===(void 0===e?"undefined":d(e))){var o=e.length;if(0<o)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(h(e));else for(var a=0;a<o;a++)t.push(h(e[a]))}return t},a.parseGPTSingleSizeArray=h,a.uniques=I,a.flatten=_,a.getBidRequest=function(n,e){var r=void 0;return e.some((function(e){var t=(0,o.default)(e.bids,(function(t){return["bidId","adId","bid_id"].some((function(e){return t[e]===n}))}));return t&&(r=t),t})),r},a.getKeys=w,a.getValue=C,a.getBidderCodes=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits).map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(_,[])})).reduce(_).filter(I)},a.isGptPubadsDefined=function(){if(window.googletag&&a.isFn(window.googletag.pubads)&&a.isFn(window.googletag.pubads().getSlots))return!0},a.shuffle=function(e){var t=e.length;for(;0<t;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},a.adUnitsFilter=function(e,t){return(0,u.default)(e,t&&t.adUnitCode)},a.isSrcdocSupported=function(e){return e.defaultView&&e.defaultView.frameElement&&"srcdoc"in e.defaultView.frameElement&&!/firefox/i.test(navigator.userAgent)},a.deepClone=function(e){return(0,i.default)(e)},a.inIframe=function(){try{return a.getWindowSelf()!==a.getWindowTop()}catch(e){return!0}},a.isSafariBrowser=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},a.timestamp=function(){return(new Date).getTime()},a.checkCookieSupport=function(){if(window.navigator.cookieEnabled||document.cookie.length)return!0},a.cookiesAreEnabled=function(){if(a.checkCookieSupport())return!0;return window.document.cookie="prebid.cookieTest",-1!=window.document.cookie.indexOf("prebid.cookieTest")},a.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got "+t);var n=0;return function(){++n===t&&e.apply(null,arguments)}},a.groupBy=function(e,n){return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})},a.deepAccess=function(e,t){if(!e)return;t=String(t).split(".");for(var n=0;n<t.length;n++)if(void 0===(e=e[t[n]]))return;return e},a.createContentToExecuteExtScriptInFriendlyFrame=function(e){if(!e)return"";return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'+e+'"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'},a.getDefinedParams=function(n,e){return e.filter((function(e){return n[e]})).reduce((function(e,t){return r(e,(function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e})({},t,n[t]))}),{})},a.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every((function(e){return(0,u.default)(t,e)})))return!1;if(e.video&&e.video.context)return(0,u.default)(["instream","outstream"],e.video.context);return!0},a.getBidderRequest=function(e,t,n){return(0,o.default)(e,(function(e){return 0<e.bids.filter((function(e){return e.bidder===t&&e.adUnitCode===n})).length}))||{start:null,auctionId:null}},a.getUserConfiguredParams=function(e,t,n){return e.filter((function(e){return e.code===t})).map((function(e){return e.bids})).reduce(_,[]).filter((function(e){return e.bidder===n})).map((function(e){return e.params||{}}))},a.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},a.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},a.isAdUnitCodeMatchingSlot=function(t){return function(e){return B(t,e)}},a.isSlotMatchingAdUnitCode=function(t){return function(e){return B(e,t)}},a.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    "+e.code+" is a "+n+" ad unit\n    containing bidders that don't support "+n+": "+t+".\n    This bidder won't fetch demand.\n  "},a.deletePropertyFromObject=function(e,t){var n=r({},e);return delete n[t],n},a.removeRequestId=function(e){return a.deletePropertyFromObject(e,"requestId")},a.isInteger=function(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},a.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,t){return"_"+t.toLowerCase()})).replace(/^_/,"")},a.transformBidderParamKeywords=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"keywords",i=[];return a._each(e,(function(e,t){if(a.isArray(e)){var n=[];a._each(e,(function(e){(e=a.getValueString(r+"."+t,e))&&n.push(e)})),e=n}else{if(e=a.getValueString(r+"."+t,e),!a.isStr(e))return;e=[e]}i.push({key:t,value:e})})),i};var n=t(2),i=c(t(63)),o=c(t(10)),u=c(t(6)),s=t(12);function c(e){return e&&e.__esModule?e:{default:e}}var f=t(4),l=!1,g=Object.prototype.toString,p=null,v=null;try{p=console.info.bind(window.console),v=console.warn.bind(window.console)}catch(e){}a.replaceTokenInString=function(i,e,o){return a._each(e,(function(e,t){e=void 0===e?"":e;var n=o+t.toUpperCase()+o,r=new RegExp(n,"g");i=i.replace(r,e)})),i};var y,m=(y=0,function(){return++y});function b(){return m()+Math.random().toString(16).substr(2)}function h(e){if(a.isArray(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1]))return e[0]+"x"+e[1]}function S(){return window.console&&window.console.log}a.getUniqueIdentifierStr=b,a.generateUUID=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},a.getBidIdParameter=function(e,t){return t&&t[e]?t[e]:""},a.tryAppendQueryString=function(e,t,n){return n?e+(t+"=")+encodeURIComponent(n)+"&":e},a.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t},a.transformAdServerTargetingObj=function(t){return t&&0<Object.getOwnPropertyNames(t).length?w(t).map((function(e){return e+"="+encodeURIComponent(C(t,e))})).join("&"):""},a.getTopWindowLocation=function(){if(a.inIframe()){var e=void 0;try{e=a.getAncestorOrigins()||a.getTopFrameReferrer()}catch(e){logInfo("could not obtain top window location",e)}if(e)return(0,s.parse)(e,{decodeSearchAsString:!0})}return a.getWindowLocation()},a.getTopFrameReferrer=function(){try{window.top.location.toString();for(var e="",t=void 0;(t=t?t.parent:window).document&&t.document.referrer&&(e=t.document.referrer),t!==window.top;);return e}catch(e){return window.document.referrer}},a.getAncestorOrigins=function(){if(window.document.location&&window.document.location.ancestorOrigins&&1<=window.document.location.ancestorOrigins.length)return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length-1]},a.getWindowTop=function(){return window.top},a.getWindowSelf=function(){return window.self},a.getWindowLocation=function(){return window.location},a.getTopWindowUrl=function(){var t=void 0;try{t=a.getTopWindowLocation().href}catch(e){t=""}return t},a.getTopWindowReferrer=function(){try{return window.top.document.referrer}catch(e){return document.referrer}},a.logWarn=function(e,t){E()&&console.warn&&v&&(t&&0!==t.length||(t=""),v("WARNING: "+e+(""===t?"":" : params : "),t))},a.logInfo=function(e,t){E()&&S()&&p&&(t&&0!==t.length||(t=""),p("INFO: "+e+(""===t?"":" : params : "),t))},a.logMessage=function(e){E()&&S()&&console.log("MESSAGE: "+e)},a.hasConsoleLogger=S;var E=function(){if(!1===n.config.getConfig("debug")&&!1===l){var e="TRUE"===A(f.DEBUG_MODE).toUpperCase();n.config.setConfig({debug:e}),l=!0}return!!n.config.getConfig("debug")};a.debugTurnedOn=E,a.logError=function(){E()&&window.console&&window.console.error&&console.error.apply(console,arguments)},a.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=b(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e};var A=function(e){var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))};a.getParameterByName=A,a.hasValidBidRequest=function(e,n,t){var r=!1;function i(e,t){t===n[o]&&(r=!0)}for(var o=0;o<n.length;o++)if(r=!1,a._each(e,i),!r)return a.logError("Params are missing for bid request. One of these required paramaters are missing: "+n,t),!1;return!0},a.addEventHandler=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!0):e.attachEvent&&e.attachEvent("on"+t,n)},a.isA=function(e,t){return g.call(e)==="[object "+t+"]"},a.isFn=function(e){return a.isA(e,"Function")},a.isStr=function(e){return a.isA(e,"String")},a.isArray=function(e){return a.isA(e,"Array")},a.isNumber=function(e){return a.isA(e,"Number")},a.isPlainObject=function(e){return a.isA(e,"Object")},a.isEmpty=function(e){if(!e)return!0;if(a.isArray(e)||a.isStr(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},a.isEmptyStr=function(e){return a.isStr(e)&&(!e||0===e.length)},a._each=function(e,t){if(!a.isEmpty(e)){if(a.isFn(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(0<r)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}},a.contains=function(e,t){if(a.isEmpty(e))return!1;if(a.isFn(e.indexOf))return-1!==e.indexOf(t);for(var n=e.length;n--;)if(e[n]===t)return!0;return!1},a.indexOf=(function(){if(Array.prototype.indexOf)return Array.prototype.indexOf})(),a._map=function(n,r){if(a.isEmpty(n))return[];if(a.isFn(n.map))return n.map(r);var i=[];return a._each(n,(function(e,t){i.push(r(e,t,n))})),i};var T=function(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]};function I(e,t,n){return n.indexOf(e)===t}function _(e,t){return e.concat(t)}function w(e){return Object.keys(e)}function C(e,t){return e[t]}a.insertElement=function(e,t,n){t=t||document;var r=void 0;r=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{(r=r.length?r:t.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(e,r.firstChild)}catch(e){}},a.triggerPixel=function(e){(new Image).src=e},a.callBurl=function(e){var t=e.source,n=e.burl;t===f.S2S.SRC&&n&&a.triggerPixel(n)},a.insertHtmlIntoIframe=function(e){if(e){var t=document.createElement("iframe");t.id=a.getUniqueIdentifierStr(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",a.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()}},a.insertUserSyncIframe=function(e){var t=a.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),n=document.createElement("div");n.innerHTML=t;var r=n.firstChild;a.insertElement(r)},a.createTrackPixelHtml=function(e){if(!e)return"";var t='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return t+='<img src="'+encodeURI(e)+'"></div>'},a.createTrackPixelIframeHtml=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e?(t&&(e=encodeURI(e)),n&&(n='sandbox="'+n+'"'),"<iframe "+n+' id="'+a.getUniqueIdentifierStr()+'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'+e+'">\n    </iframe>'):""},a.getIframeDocument=function(e){if(e){var t=void 0;try{t=e.contentWindow?e.contentWindow.document:e.contentDocument.document?e.contentDocument.document:e.contentDocument}catch(e){a.logError("Cannot get iframe document",e)}return t}},a.getValueString=function(e,t,n){return null==t?n:a.isStr(t)?t:a.isNumber(t)?t.toString():void a.logWarn("Unsuported type for param: "+e+" required type: String")};a.getHighestCpm=O("timeToRespond",(function(e,t){return t<e})),a.getOldestHighestCpmBid=O("responseTimestamp",(function(e,t){return t<e})),a.getLatestHighestCpmBid=O("responseTimestamp",(function(e,t){return e<t}));function O(n,r){return function(e,t){return e.cpm===t.cpm?r(e[n],t[n])?t:e:e.cpm<t.cpm?t:e}}var B=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.registerBidder=function(t){var n=Array.isArray(t.supportedMediaTypes)?{supportedMediaTypes:t.supportedMediaTypes}:void 0;function r(e){var t=l(e);i.default.registerBidAdapter(t,e.code,n)}r(t),Array.isArray(t.aliases)&&t.aliases.forEach((function(e){i.default.aliasRegistry[e]=t.code,r(v({},t,{code:e}))}))},t.newBidder=l,t.isValid=E;var r=s(n(28)),i=s(n(8)),y=n(2),m=s(n(19)),o=n(14),a=n(18),d=n(65),b=s(n(4)),h=s(n(9)),u=s(n(6)),S=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var f=["requestId","cpm","ttl","creativeId","netRevenue","currency"];function l(f){return v(new r.default(f.code),{getSpec:function(){return Object.freeze(f)},registerSyncs:l,callBids:function(o,a,r,n){if(Array.isArray(o.bids)){var d={},u=[],e=o.bids.filter(g);if(0!==e.length){var s={};e.forEach((function(e){(s[e.bidId]=e).adUnitCode||(e.adUnitCode=e.placementCode)}));var t=f.buildRequests(e,o);if(t&&0!==t.length){Array.isArray(t)||(t=[t]);var c=(0,S.delayExecution)(i,t.length);t.forEach((function(i){switch(i.method){case"GET":n(""+i.url+(function(e){if(e)return"?"+("object"===(void 0===e?"undefined":p(e))?(0,S.parseQueryStringParameters)(e):e);return""})(i.data),{success:e,error:t},void 0,v({method:"GET",withCredentials:!0},i.options));break;case"POST":n(i.url,{success:e,error:t},"string"==typeof i.data?i.data:JSON.stringify(i.data),v({method:"POST",contentType:"text/plain",withCredentials:!0},i.options));break;default:(0,S.logWarn)("Skipping invalid request from "+f.code+". Request type "+i.type+" must be GET or POST"),c()}function e(e,t){try{e=JSON.parse(e)}catch(e){}e={body:e,headers:{get:t.getResponseHeader.bind(t)}},u.push(e);var n=void 0;try{n=f.interpretResponse(e,i)}catch(e){return(0,S.logError)("Bidder "+f.code+" failed to interpret the server's response. Continuing without bids",null,e),void c()}function r(e){var t,n,r=s[e.requestId];if(r){var i=v(m.default.createBid(b.default.STATUS.GOOD,r),e);t=r.adUnitCode,n=i,d[t]=!0,E(t,n,[o])&&a(t,n)}else(0,S.logWarn)("Bidder "+f.code+" made bid for unknown request ID: "+e.requestId+". Ignoring.")}n&&(n.forEach?n.forEach(r):r(n)),c(n)}function t(e){(0,S.logError)("Server call for "+f.code+" failed: "+e+". Continuing without bids."),c()}}))}else i()}else i()}function i(e){var t=(e?e[0]?e:[e]:[]).some((function(e){return"video"===e.mediaType})),n=y.config.getConfig("cache.url");t&&n||r(),h.default.emit(b.default.EVENTS.BIDDER_DONE,o),l(u,o.gdprConsent)}}});function l(e,t){if(f.getUserSyncs){var n=y.config.getConfig("userSync.filterSettings"),r=f.getUserSyncs({iframeEnabled:!!(y.config.getConfig("userSync.iframeEnabled")||n&&(n.iframe||n.all)),pixelEnabled:!!(y.config.getConfig("userSync.pixelEnabled")||n&&(n.image||n.all))},e,t);r&&(Array.isArray(r)||(r=[r]),r.forEach((function(e){o.userSync.registerSync(e.type,f.code,e.url)})))}}function g(e){return!!f.isBidRequestValid(e)||((0,S.logWarn)("Invalid bid sent to bidder "+f.code+": "+JSON.stringify(e)),!1)}}function E(e,t,n){function r(e){return"Invalid bid from "+t.bidderCode+". Ignoring bid: "+e}return e?t?(i=Object.keys(t),f.every((function(e){return(0,u.default)(i,e)}))?"native"!==t.mediaType||(0,a.nativeBidIsValid)(t,n)?"video"!==t.mediaType||(0,d.isValidVideoBid)(t,n)?!("banner"===t.mediaType&&!(function(e,t,n){if((t.width||0===t.width)&&(t.height||0===t.height))return!0;var r=(0,S.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=(0,S.parseSizesInput)(i);if(1===o.length){var a=o[0].split("x"),d=c(a,2),u=d[0],s=d[1];return t.width=u,t.height=s,!0}return!1})(e,t,n))||((0,S.logError)(r("Banner bids require a width and height")),!1):((0,S.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):((0,S.logError)(r("Native bid missing some required properties.")),!1):((0,S.logError)(r("Bidder "+t.bidderCode+" is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),!1)):((0,S.logWarn)("Some adapter tried to add an undefined bid for "+e+"."),!1):((0,S.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}},10:function(e,t,n){n(44),e.exports=n(15).Array.find},102:function(e,t,n){"use strict";var r=n(16),i=n(34)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(27)(o)},11:function(e,t,n){"use strict";var r,i=n(6),o=(r=i)&&r.__esModule?r:{default:r},a=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0));var d={},u=["criteo"];function s(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,t&&"function"==typeof t&&(n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()}),n.src=e;var r=document.getElementsByTagName("head");(r=r.length?r:document.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(n,r.firstChild)}t.loadExternalScript=function(e,t){if(t&&e)if((0,o.default)(u,t)){if(!d[e]){a.logWarn("module "+t+" is loading external JavaScript");var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,a.insertElement(n),d[e]=!0}}else a.logError(t+" not whitelisted for loading external JavaScript");else a.logError("cannot load external script without url and moduleCode")},t.loadScript=function(t,e,n){t?n?d[t]?e&&"function"==typeof e&&(d[t].loaded?e():d[t].callbacks.push(e)):(d[t]={loaded:!1,callbacks:[]},e&&"function"==typeof e&&d[t].callbacks.push(e),s(t,(function(){d[t].loaded=!0;try{for(var e=0;e<d[t].callbacks.length;e++)d[t].callbacks[e]()}catch(e){a.logError("Error executing callback","adloader.js:loadScript",e)}}))):s(t,e):a.logError("Error attempting to request empty URL","adloader.js:loadScript")}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function i(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=t.split("="),r=a(n,2),i=r[0],o=r[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(o)):e[i]=o||"",e}),{}):{}}function r(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return t+"[]="+e})).join("&"):t+"="+e[t]})).join("&")}t.parseQS=i,t.formatQS=r,t.parse=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:i(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.format=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":"+e.port:""))+(e.pathname||"")+(e.search?"?"+r(e.search||""):"")+(e.hash?"#"+e.hash:"")}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=r;var d=n(11),u=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0));function r(e){var t=this,n=e.url,r=e.config,i=e.id,o=e.callback,a=e.loaded;this.url=n,this.config=r,this.handlers={},this.id=i,this.loaded=a,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):u.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=o||function(){t.loaded=!0,t.process()},(0,d.loadScript)(n,this.callback,!0)}r.install=function(e){return new r({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded})},r.prototype.getConfig=function(){return this.config},r.prototype.setRender=function(e){this.render=e},r.prototype.setEventHandlers=function(e){this.handlers=e},r.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),u.logMessage("Prebid Renderer event for id "+t+" type "+n)},r.prototype.process=function(){for(;0<this.cmd.length;)try{this.cmd.shift().call()}catch(e){u.logError("Error processing Renderer command: ",e)}}},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userSync=void 0;var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newUserSync=a;var r,c=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0)),f=n(2),o=n(6),l=(r=o)&&r.__esModule?r:{default:r};function a(e){var t={},o={image:[],iframe:[]},n=!1,a={},d={image:!1,iframe:!1},u=e.config;function r(){if(u.syncEnabled&&e.browserSupportsCookies&&!n){try{!(function(){if(!u.pixelEnabled&&!d.image)return;c.shuffle(o.image).forEach((function(e){var t=i(e,2),n=t[0],r=t[1];c.logMessage("Invoking image pixel user sync for bidder: "+n),c.triggerPixel(r)}))})(),(function(){if(!u.iframeEnabled&&!d.iframe)return;c.shuffle(o.iframe).forEach((function(e){var t=i(e,2),n=t[0],r=t[1];c.logMessage("Invoking iframe user sync for bidder: "+n),c.insertUserSyncIframe(r)}))})()}catch(e){return c.logError("Error firing user syncs",e)}o={image:[],iframe:[]},n=!0}}return f.config.getConfig("userSync",(function(e){u=s(u,e.userSync)})),t.registerSync=function(e,t,n){if(!u.syncEnabled||!c.isArray(o[e]))return c.logWarn('User sync type "'+e+'" not supported');if(!t)return c.logWarn("Bidder is required for registering sync");if(Number(a[t])>=u.syncsPerBidder)return c.logWarn('Number of user syncs exceeded for "'+t+'"');if(u.filterSettings){if(function(e,t){var n=u.filterSettings;if(function(e,t){if(e.all&&e[t])return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'+t+'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'),!1;var n=e.all?e.all:e[t],r=e.all?"all":t;if(!n)return!1;var i=n.filter,o=n.bidders;if(i&&"include"!==i&&"exclude"!==i)return c.logWarn('UserSync "filterSettings.'+r+".filter\" setting '"+i+"' is not a valid option; use either 'include' or 'exclude'."),!1;if("*"!==o&&!(Array.isArray(o)&&0<o.length&&o.every((function(e){return c.isStr(e)&&"*"!==e}))))return c.logWarn('Detected an invalid setup in userSync "filterSettings.'+r+".bidders\"; use either '*' (to represent all bidders) or an array of bidders."),!1;return!0}(n,e)){d[e]=!0;var r=n.all?n.all:n[e],i="*"===r.bidders?[t]:r.bidders,o=r.filter||"include",a={include:function(e,t){return!(0,l.default)(e,t)},exclude:function(e,t){return(0,l.default)(e,t)}};return a[o](i,t)}return!1}(e,t))return c.logWarn("Bidder '"+t+"' is not permitted to register their userSync "+e+" pixels as per filterSettings config.")}else if(u.enabledBidders&&u.enabledBidders.length&&u.enabledBidders.indexOf(t)<0)return c.logWarn('Bidder "'+t+'" not permitted to register their userSync pixels.');var r,i;o[e].push([t,n]),(r=a)[i=t]?r[i]+=1:r[i]=1,a=r},t.syncUsers=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(r,Number(e));r()},t.triggerUserSyncs=function(){u.enableOverride&&t.syncUsers()},t}f.config.setDefaults({userSync:{syncEnabled:!0,pixelEnabled:!0,syncsPerBidder:5,syncDelay:3e3}});var d=!c.isSafariBrowser()&&c.cookiesAreEnabled();t.userSync=a({config:f.config.getConfig("userSync"),browserSupportsCookies:d})},15:function(e,t){var n=e.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},16:function(e,t,n){var v=n(20),y=n(15),m=n(32),b=n(46),h=n(53),S="prototype",E=function(e,t,n){var r,i,o,a=e&E.F,d=e&E.G,u=e&E.S,s=e&E.P,c=e&E.B,f=e&E.W,l=d?y:y[t]||(y[t]={}),g=l[S],p=d?v:u?v[t]:(v[t]||{})[S];for(r in d&&(n=t),n)(i=!a&&p&&void 0!==p[r])&&h(l,r)||(o=i?p[r]:n[r],l[r]=d&&"function"!=typeof p[r]?n[r]:c&&i?m(o,v):f&&p[r]==o?(function(r){var e=function(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)};return e[S]=r[S],e})(o):s&&"function"==typeof o?m(Function.call,o):o,s&&((l.virtual||(l.virtual={}))[r]=o,e&E.R&&g&&!g[r]&&b(g,r,o)))};E.F=1,E.G=2,E.S=4,E.P=8,E.B=16,E.W=32,E.U=64,E.R=128,e.exports=E},17:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonNativeBidder=t.nativeBidder=t.nativeAdUnit=t.NATIVE_TARGETING_KEYS=t.NATIVE_KEYS=t.nativeAdapters=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.processNativeAdUnitParams=function(e){if(e&&e.type&&(function(e){if(!e||!(0,d.default)(Object.keys(c),e))return(0,a.logError)(e+" nativeParam is not supported"),!1;return!0})(e.type))return c[e.type];return e},t.nativeBidIsValid=function(t,e){var n=(0,a.getBidRequest)(t.adId,e);if(!n)return!1;if(!(0,a.deepAccess)(t,"native.clickUrl"))return!1;if((0,a.deepAccess)(t,"native.image")&&(!(0,a.deepAccess)(t,"native.image.height")||!(0,a.deepAccess)(t,"native.image.width")))return!1;if((0,a.deepAccess)(t,"native.icon")&&(!(0,a.deepAccess)(t,"native.icon.height")||!(0,a.deepAccess)(t,"native.icon.width")))return!1;var r=n.nativeParams;if(!r)return!0;var i=Object.keys(r).filter((function(e){return r[e].required})),o=Object.keys(t.native).filter((function(e){return t.native[e]}));return i.every((function(e){return(0,d.default)(o,e)}))},t.fireNativeTrackers=function(e,t){var n=void 0;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&(0,a.insertHtmlIntoIframe)(t.native.javascriptTrackers));(n||[]).forEach(a.triggerPixel)},t.getNativeTargeting=function(r){var i={};return Object.keys(r.native).forEach((function(e){var t=s[e],n=r.native[e];"object"===(void 0===n?"undefined":o(n))&&n.url&&(n=n.url),t&&(i[t]=n)})),i};var r,a=n(0),i=n(6),d=(r=i)&&r.__esModule?r:{default:r};var u=t.nativeAdapters=[],s=t.NATIVE_KEYS={title:"hb_native_title",body:"hb_native_body",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",cta:"hb_native_cta"},c=(t.NATIVE_TARGETING_KEYS=Object.keys(s).map((function(e){return s[e]})),{image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}});t.nativeAdUnit=function(e){var t="native"===e.mediaType,n=(0,a.deepAccess)(e,"mediaTypes.native");return t||n};var f=t.nativeBidder=function(e){return(0,d.default)(u,e.bidder)};t.hasNonNativeBidder=function(e){return e.bids.filter((function(e){return!f(e)})).length}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=function(e,t){var n={puts:e.map(a)};(0,i.ajax)(o.config.getConfig("cache.url"),(r=t,{success:function(e){var t=void 0;try{t=JSON.parse(e).responses}catch(e){return void r(e,[])}t?r(null,t):r(new Error("The cache server didn't respond with a responses property."),[])},error:function(e,t){r(new Error("Error storing video ad in the cache: "+e+": "+JSON.stringify(t)),[])}}),JSON.stringify(n),{contentType:"text/plain",withCredentials:!0});var r},t.getCacheUrl=function(e){return o.config.getConfig("cache.url")+"?uuid="+e};var i=n(7),o=n(2);function a(e){var t,n;return{type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['+t+"]]></VASTAdTagURI>\n        <Impression>"+(n?"<![CDATA["+n+"]]>":"")+"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}}},19:function(e,t,n){"use strict";var o=n(0);function r(e,t){var n=t&&t.bidId||o.getUniqueIdentifierStr(),r=t&&t.src||"client",i=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=(function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}})(),this.adId=n,this.mediaType="banner",this.source=r,this.getStatusCode=function(){return i},this.getSize=function(){return this.width+"x"+this.height}}t.createBid=function(e,t){return new r(e,t)}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.RANDOM=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.newConfig=d;var r=n(31),c=o(n(10)),f=o(n(6)),i=n(21);function o(e){return e&&e.__esModule?e:{default:e}}var l=n(0),g=!1,p=3e3,v=window.location.origin,y=100,m=!0,b=200,a=t.RANDOM="random",h={};h[a]=!0,h.fixed=!0;var S=a,E={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},A="*";function d(){var o=[],a=void 0,d=void 0;function e(){function i(t){return(0,c.default)(Object.keys(E),(function(e){return t===E[e]}))}function o(e){if(!e)return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)i(e)||l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if("object"===(void 0===e?"undefined":s(e))&&!(0,r.isValidPriceConfig)(e))return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}a={},d={_debug:g,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:p,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:v,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_cookieSyncDelay:y,get cookieSyncDelay(){return pbjs.cookieSyncDelay||this._cookieSyncDelay},set cookieSyncDelay(e){this._cookieSyncDelay=e},_priceGranularity:E.MEDIUM,set priceGranularity(e){o(e)&&("string"==typeof e?this._priceGranularity=i(e)?e:E.MEDIUM:"object"===(void 0===e?"undefined":s(e))&&(this._customPriceBucket=e,this._priceGranularity=E.CUSTOM,l.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(n){var r=this;this._mediaTypePriceGranularity=Object.keys(n).reduce((function(e,t){return o(n[t])?"string"==typeof n?e[t]=i(n[t])?n[t]:r._priceGranularity:"object"===(void 0===n?"undefined":s(n))&&(e[t]=n[t],l.logMessage("Using custom price granularity for "+t)):l.logWarn("Invalid price granularity for media type: "+t),e}),{})},_sendAllBids:m,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_bidderSequence:S,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){h[e]?this._bidderSequence=e:l.logWarn("Invalid order: "+e+". Bidder Sequence was not set.")},_timoutBuffer:b,get timeoutBuffer(){return this._timoutBuffer},set timeoutBuffer(e){this._timoutBuffer=e}}}var t=(0,i.createHook)("asyncSeries",(function(n){if("object"===(void 0===n?"undefined":s(n))){var i,t,e=Object.keys(n),r={};e.forEach((function(e){var t=n[e];"object"===s(a[e])&&"object"===(void 0===t?"undefined":s(t))&&(t=u({},a[e],t)),r[e]=d[e]=t})),i=r,t=Object.keys(i),o.filter((function(e){return(0,f.default)(t,e.topic)})).forEach((function(e){var t,n,r;e.callback((t={},n=e.topic,r=i[e.topic],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))})),o.filter((function(e){return e.topic===A})).forEach((function(e){return e.callback(i)}))}else l.logError("setConfig options must be an object")}));return e(),{getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?l.deepAccess(d,e):d}return function(e,t){var n=t;if("string"!=typeof e&&(n=e,e=A),"function"==typeof n)return o.push({topic:e,callback:n}),function(){o.splice(o.indexOf(t),1)};l.logError("listener must be a function")}.apply(void 0,arguments)},setConfig:t,setDefaults:function(e){"object"===(void 0===a?"undefined":s(a))?(u(a,e),u(d,e)):l.logError("defaults must be an object")},resetConfig:e}}t.config=d()},20:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.createHook=function(r,i,e){var d=[{fn:i,priority:0}],o={sync:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];d.forEach((function(e){e.fn.apply(t,n)}))},asyncSeries:function(){for(var o=this,e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=0;return d[a].fn.apply(this,t.concat((function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=d[++a];if("object"===(void 0===i?"undefined":u(i))&&"function"==typeof i.fn)return i.fn.apply(o,n.concat(e))})))}};if(!o[r])throw"invalid hook type";var t={addHook:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10;"function"==typeof e&&(d.push({fn:e,priority:t}),d.sort((function(e,t){return t.priority-e.priority})))},removeHook:function(t){d=d.filter((function(e){return e.fn===i||e.fn!==t}))},hasHook:function(t){return d.some((function(e){return e.fn===t}))}};"string"==typeof e&&(s[e]=t);return a((function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1===d.length&&d[0].fn===i)return i.apply(this,t);return o[r].apply(this,t)}),t)};var s=t.hooks={}},22:function(e,t,n){n(102),e.exports=n(15).Array.findIndex},23:function(e,t,n){e.exports=!n(33)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},24:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},25:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},26:function(e,t,n){var r=n(57)("wks"),i=n(58),o=n(20).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},27:function(e,t){e.exports=function(){}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.auctionManager=void 0,t.newAuctionManager=u;var r,i=n(0),s=n(41),o=n(10),a=(r=o)&&r.__esModule?r:{default:r};var d=n(4);function u(){var u=[],r={};return r.addWinningBid=function(t){var e=(0,a.default)(u,(function(e){return e.getAuctionId()===t.auctionId}));e?e.addWinningBid(t):utils.logWarn("Auction not found when adding winning bid")},r.getAllWinningBids=function(){return u.map((function(e){return e.getWinningBids()})).reduce(i.flatten,[])},r.getBidsRequested=function(){return u.map((function(e){return e.getBidRequests()})).reduce(i.flatten,[])},r.getBidsReceived=function(){return u.map((function(e){if(e.getAuctionStatus()===s.AUCTION_COMPLETED)return e.getBidsReceived()})).reduce(i.flatten,[]).filter((function(e){return e}))},r.getAdUnits=function(){return u.map((function(e){return e.getAdUnits()})).reduce(i.flatten,[])},r.getAdUnitCodes=function(){return u.map((function(e){return e.getAdUnitCodes()})).reduce(i.flatten,[]).filter(i.uniques)},r.createAuction=function(e){var t,n=e.adUnits,r=e.adUnitCodes,i=e.callback,o=e.cbTimeout,a=e.labels,d=(0,s.newAuction)({adUnits:n,adUnitCodes:r,callback:i,cbTimeout:o,labels:a});return t=d,u.push(t),d},r.findBidByAdId=function(t){return(0,a.default)(u.map((function(e){return e.getBidsReceived()})).reduce(i.flatten,[]),(function(e){return e.adId===t}))},r.getStandardBidderAdServerTargeting=function(){return(0,s.getStandardBidderSettings)()[d.JSON_MAPPING.ADSERVER_TARGETING]},r.setStatusForBids=function(e,t){var n=r.findBidByAdId(e);n&&(n.status=t)},r}t.auctionManager=u()},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NATIVE="native",t.VIDEO="video",t.BANNER="banner"},30:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidPriceConfig=t.getPriceBucketString=void 0;var r,i=n(10),v=(r=i)&&r.__esModule?r:{default:r};var o=n(0),y=2,a={buckets:[{min:0,max:5,increment:.5}]},d={buckets:[{min:0,max:20,increment:.1}]},u={buckets:[{min:0,max:20,increment:.01}]},s={buckets:[{min:0,max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}]},c={buckets:[{min:0,max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}]};function f(n,e,r){var i="";if(!m(e))return i;var t,o,a,d,u,s,c,f,l,g=e.buckets.reduce((function(e,t){return e.max>t.max?e:t}),{max:0}),p=(0,v.default)(e.buckets,(function(e){if(n>g.max*r){var t=e.precision;void 0===t&&(t=y),i=(e.max*r).toFixed(t)}else if(n<=e.max*r&&n>=e.min*r)return e}));return p&&(t=n,a=r,d=void 0!==(o=p).precision?o.precision:y,u=o.increment*a,s=o.min*a,c=Math.pow(10,d+2),f=(t*c-s*c)/(u*c),l=Math.floor(f)*u+s,i=(l=Number(l.toFixed(10))).toFixed(d)),i}function m(e){if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e){void 0!==e.min&&e.max&&e.increment||(t=!1)})),t}t.getPriceBucketString=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":f(e,a,n),med:""===r?"":f(e,d,n),high:""===r?"":f(e,u,n),auto:""===r?"":f(e,c,n),dense:""===r?"":f(e,s,n),custom:""===r?"":f(e,t,n)}},t.isValidPriceConfig=m},32:function(e,t,n){var o=n(45);e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}},33:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},34:function(e,t,n){var h=n(32),S=n(35),E=n(54),A=n(36),r=n(55);e.exports=function(f,e){var l=1==f,g=2==f,p=3==f,v=4==f,y=6==f,m=5==f||y,b=e||r;return function(e,t,n){for(var r,i,o=E(e),a=S(o),d=h(t,n,3),u=A(a.length),s=0,c=l?b(e,u):g?b(e,0):void 0;s<u;s++)if((m||s in a)&&(i=d(r=a[s],s,o),f))if(l)c[s]=i;else if(i)switch(f){case 3:return!0;case 5:return r;case 6:return s;case 2:c.push(r)}else if(v)return!1;return y?-1:p||v?v:c}}},35:function(e,t,n){var r=n(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},36:function(e,t,n){var r=n(37),i=Math.min;e.exports=function(e){return 0<e?i(r(e),9007199254740991):0}},37:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},38:function(e,t,n){var r=n(24);e.exports=Array.isArray||function(e){return"Array"==r(e)}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobal=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[]},4:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"Wikia_prebid_1.15.0",DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocuemnt",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal","hb_source","hb_format"],S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"}}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targeting=t.isBidNotExpired=t.RENDERED=t.BID_TARGETING_SET=void 0;var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.getHighestCpmBidsFromBidPool=B,t.newTargeting=c;var r,S=n(0),E=n(2),A=n(18),i=n(29),o=n(6),T=(r=o)&&r.__esModule?r:{default:r};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=n(0),w=n(4),C=[],a=t.BID_TARGETING_SET="targetingSet",d=t.RENDERED="rendered",O=20,u=(t.isBidNotExpired=function(e){return e.responseTimestamp+1e3*e.ttl+1e3>(0,S.timestamp)()},function(e){return e&&(e.status&&!(0,T.default)([a,d],e.status)||!e.status)});function B(e,n){var r=[],i=(0,S.groupBy)(e,"adUnitCode");return Object.keys(i).forEach((function(e){var t=(0,S.groupBy)(i[e],"bidderCode");Object.keys(t).forEach((function(e){return r.push(t[e].reduce(n,s()))}))})),r}function s(e){return{adUnitCode:e,cpm:0,adserverTargeting:{},timeToRespond:0}}function c(n){var g={};function p(e){return"string"==typeof e?[e]:_.isArray(e)?e:n.getAdUnitCodes()||[]}function v(){return B(n.getBidsReceived().filter(u).filter(t.isBidNotExpired),S.getOldestHighestCpmBid)}function y(){return n.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(w.TARGETING_KEYS).filter(S.uniques)}function m(r,i,e,t){return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e){var t,n;r.length&&r.filter((n=e,function(e){return e.adUnitCode===i.adUnitCode&&e.adserverTargeting[n]})).forEach((t=e,function(e){_.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]]),e.adserverTargeting[t]=e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques),delete i.adserverTargeting[t]}))})),r.push(i),r}function o(){var t=y();return function(e){return-1===t.indexOf(e)}}function b(t){return I({},t.adUnitCode,Object.keys(t.adserverTargeting).filter(o()).map((function(e){return I({},e.substring(0,O),[t.adserverTargeting[e]])})))}return g.resetPresetTargeting=function(e){if((0,S.isGptPubadsDefined)()){var t=p(e),r=n.getAdUnits().filter((function(e){return(0,T.default)(t,e.code)}));window.googletag.pubads().getSlots().forEach((function(n){C.forEach((function(t){r.forEach((function(e){e.code!==n.getAdUnitPath()&&e.code!==n.getSlotElementId()||n.setTargeting(t,null)}))}))}))}},g.getAllTargeting=function(e){var r,t,i,n,o,a,d,u,s,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v(),f=p(e),l=(a=f,d=c,u=g.getWinningBids(a,d),s=y(),u=u.map((function(t){return I({},t.adUnitCode,Object.keys(t.adserverTargeting).filter((function(e){return void 0===t.sendStandardTargeting||t.sendStandardTargeting||-1===s.indexOf(e)})).map((function(e){return I({},"hb_deal"===e?(e+"_"+t.bidderCode).substring(0,O):e.substring(0,O),[t.adserverTargeting[e]])})))}))).concat((n=f,o=c,o.filter((function(e){return(0,T.default)(n,e.adUnitCode)})).map((function(e){return h({},e)})).reduce(m,[]).map(b).filter((function(e){return e})))).concat(E.config.getConfig("enableSendAllBids")?(r=f,t=c,i=w.TARGETING_KEYS.concat(A.NATIVE_TARGETING_KEYS),B(t,S.getHighestCpm).map((function(t){if(t.adserverTargeting&&r&&(_.isArray(r)&&(0,T.default)(r,t.adUnitCode)||"string"==typeof r&&t.adUnitCode===r))return I({},t.adUnitCode,(n=t,i.filter((function(e){return void 0!==t.adserverTargeting[e]})).map((function(e){return I({},(e+"_"+n.bidderCode).substring(0,O),[n.adserverTargeting[e]])}))));var n})).filter((function(e){return e}))):[]);return l.map((function(t){Object.keys(t).map((function(e){t[e].map((function(e){-1===C.indexOf(Object.keys(e)[0])&&(C=Object.keys(e).concat(C))}))}))})),l=l.map((function(e){return I({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return I({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return h(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];return e[n]=h({},e[n],t[n]),e}),{}),f.forEach((function(e){l[e]||(l[e]={})})),l},g.setTargetingForGPT=function(i,e){window.googletag.pubads().getSlots().forEach((function(r){Object.keys(i).filter(e?e(r):(0,S.isAdUnitCodeMatchingSlot)(r)).forEach((function(n){return Object.keys(i[n]).forEach((function(t){var e=i[n][t].split(",");(e=1<e.length?[e]:e).map((function(e){return _.logMessage("Attempting to set key value for slot: "+r.getSlotElementId()+" key: "+t+" value: "+e),e})).forEach((function(e){r.setTargeting(t,e)}))}))}))}))},g.getWinningBids=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v(),t=p(e);return n.filter((function(e){return(0,T.default)(t,e.adUnitCode)})).filter((function(e){return 0<e.cpm})).map((function(e){return e.adUnitCode})).filter(S.uniques).map((function(t){return n.filter((function(e){return e.adUnitCode===t?e:null})).reduce(S.getHighestCpm,s(t))}))},g.setTargetingForAst=function(){var r=g.getAllTargeting();Object.keys(r).forEach((function(n){return Object.keys(r[n]).forEach((function(e){if(_.logMessage("Attempting to set targeting for targetId: "+n+" key: "+e+" value: "+r[n][e]),_.isStr(r[n][e])||_.isArray(r[n][e])){var t={};e.search(/pt[0-9]/)<0?t[e.toUpperCase()]=r[n][e]:t[e]=r[n][e],window.apntag.setKeywords(n,t)}}))}))},g.isApntagDefined=function(){if(window.apntag&&_.isFn(window.apntag.setKeywords))return!0},g}t.targeting=c(i.auctionManager)},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addBidResponse=t.AUCTION_COMPLETED=t.AUCTION_IN_PROGRESS=t.AUCTION_STARTED=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newAuction=function(e){var f=e.adUnits,t=e.adUnitCodes,n=e.callback,r=e.cbTimeout,i=e.labels,u=f,s=i,l=t,g=[],p=[],c=void 0,v=C.generateUUID(),y=void 0,m=n,b=void 0,h=r,o=[];function S(e,t){if(t&&clearTimeout(b),null!=m){var n=[];e&&(C.logMessage("Auction "+v+" timedOut"),d=p,u=(a=g).filter((function(e){return!e.doneCbCallCount})).map((function(e){return e.bidderCode})).filter(A.uniques),s=d.map((function(e){return e.bidder})).filter(A.uniques),c=u.filter((function(e){return!(0,_.default)(s,e)})),(n=a.map((function(e){return(e.bids||[]).filter((function(e){return(0,_.default)(c,e.bidder)}))})).reduce(A.flatten,[]).map((function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}}))).length&&B.emit(N.EVENTS.BID_TIMEOUT,n)),B.emit(N.EVENTS.AUCTION_END,{auctionId:v});try{y=D;var r=l,i=[p.filter(A.adUnitsFilter.bind(this,r)).reduce(q,{})];m.apply(pbjs,i)}catch(e){C.logError("Error executing bidsBackHandler",null,e)}finally{n.length&&O.callTimedOutBidders(f,n,h);var o=T.config.getConfig("userSync")||{};o.enableOverride||w(o.syncDelay)}m=null}var a,d,u,s,c}function E(){g.every((function(e){return 1<=e.doneCbCallCount}))&&(C.logInfo("Bids Received for Auction with id: "+v,p),y=D,S(!1,!0))}return{addBidReceived:function(e){p=p.concat(e)},executeCallback:S,callBids:function(){var r=this;y=R,c=Date.now();var i=O.makeBidRequests(u,c,v,h,s);C.logInfo("Bids Requested for Auction with id: "+v,i),i.forEach((function(e){var t;t=e,g=g.concat(t)}));var o={},e={bidRequests:i,run:function(){var e,t;e=S.bind(null,!0),t=setTimeout(e,h),b=t,y=U;var n={timestamp:c,auctionId:v,timeout:h};B.emit(N.EVENTS.AUCTION_INIT,n),O.callBids(u,i,M.bind(r),function(e){var t=e;return(0,A.delayExecution)((function(){var e=(0,I.default)(g,(function(e){return t===e.bidderRequestId}));e.doneCbCallCount+=1,E()}),1)}.bind(r),{request:function(e,t){d(P,t),d(o,e),k[e]||(k[e]={SRA:!0,origin:t}),1<o[e]&&(k[e].SRA=!1)},done:function(e){P[e]--,x[0]&&a(x[0])&&x.shift()}})}};a(e)||(C.logWarn("queueing auction due to limited endpoint capacity"),x.push(e));function a(e){var r=!0,i=T.config.getConfig("maxRequestsPerOrigin")||j;return e.bidRequests.some((function(e){var t=1,n=void 0!==e.src&&e.src===N.S2S.SRC?"s2s":e.bidderCode;return k[n]&&(!1===k[n].SRA&&(t=Math.min(e.bids.length,i)),P[k[n].origin]+t>i&&(r=!1)),!r})),r&&e.run(),r}function d(e,t){void 0===e[t]?e[t]=1:e[t]++}},bidsBackAll:E,addWinningBid:function(e){o=o.concat(e)},getWinningBids:function(){return o},getTimeout:function(){return h},getAuctionId:function(){return v},getAuctionStatus:function(){return y},getAdUnits:function(){return u},getAdUnitCodes:function(){return l},getBidRequests:function(){return g},getBidsReceived:function(){return p}}},t.getStandardBidderSettings=d,t.getKeyValueTargetingPairs=m,t.adjustBids=s;var A=n(0),p=n(31),i=n(18),c=n(188),v=n(13),T=n(2),r=n(14),o=n(21),I=a(n(10)),_=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}var w=r.userSync.syncUsers,C=n(0),O=n(8),B=n(9),N=n(4),R=t.AUCTION_STARTED="started",U=t.AUCTION_IN_PROGRESS="inProgress",D=t.AUCTION_COMPLETED="completed";B.on(N.EVENTS.BID_ADJUSTMENT,(function(e){s(e)}));var j=4,P={},k={},x=[];function f(e,t){t.timeToRespond>e.getTimeout()+T.config.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function y(e,t){B.emit(N.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),f(e,t)}var M=t.addBidResponse=(0,o.createHook)("asyncSeries",(function(e,t){var n,r,i,o,a=this.getBidRequests(),d=this.getAuctionId(),u=(0,A.getBidderRequest)(a,t.bidderCode,e),s=(function(e){var t=e.adUnitCode,n=e.bid,r=e.bidRequest,i=e.auctionId,o=r.start,a=g({},n,{auctionId:i,responseTimestamp:(0,A.timestamp)(),requestTimestamp:o,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});a.timeToRespond=a.responseTimestamp-a.requestTimestamp,B.emit(N.EVENTS.BID_ADJUSTMENT,a);var d=r.bids&&(0,I.default)(r.bids,(function(e){return e.adUnitCode==t})),u=d&&d.renderer;u&&u.url&&(a.renderer=v.Renderer.install({url:u.url}),a.renderer.setRender(u.render));var s,c=T.config.getConfig("mediaTypePriceGranularity."+n.mediaType),f=(0,p.getPriceBucketString)(a.cpm,"object"===(void 0===c?"undefined":l(c))?c:T.config.getConfig("customPriceBucket"),T.config.getConfig("currency.granularityMultiplier"));a.pbLg=f.low,a.pbMg=f.med,a.pbHg=f.high,a.pbAg=f.auto,a.pbDg=f.dense,a.pbCg=f.custom,a.bidderCode&&(0<a.cpm||a.dealId)&&(s=m(a.bidderCode,a));return a.adserverTargeting=g(a.adserverTargeting||{},s),a})({adUnitCode:e,bid:t,bidRequest:u,auctionId:d});"video"===s.mediaType?(n=this,r=s,i=u,o=!0,T.config.getConfig("cache.url")&&(r.videoCacheKey?r.vastUrl||(C.logError("videoCacheKey specified but not required vastUrl for video bid"),o=!1):(o=!1,(0,c.store)([r],(function(e,t){e?(C.logWarn("Failed to save to the video cache: "+e+". Video bid must be discarded."),f(n,r)):(r.videoCacheKey=t[0].uuid,r.vastUrl||(r.vastUrl=(0,c.getCacheUrl)(r.videoCacheKey)),i.doneCbCallCount+=1,y(n,r),n.bidsBackAll())})))),o&&y(n,r)):y(this,s)}),"addBidResponse");function d(e){var t=T.config.getConfig("mediaTypePriceGranularity."+e),n="string"==typeof e&&t?"string"==typeof t?t:"custom":T.config.getConfig("priceGranularity"),r=pbjs.bidderSettings;return r[N.JSON_MAPPING.BD_SETTING_STANDARD]||(r[N.JSON_MAPPING.BD_SETTING_STANDARD]={}),r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]||(r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING]=[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(e){return n===N.GRANULARITY_OPTIONS.AUTO?e.pbAg:n===N.GRANULARITY_OPTIONS.DENSE?e.pbDg:n===N.GRANULARITY_OPTIONS.LOW?e.pbLg:n===N.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:n===N.GRANULARITY_OPTIONS.HIGH?e.pbHg:n===N.GRANULARITY_OPTIONS.CUSTOM?e.pbCg:void 0}},{key:"hb_size",val:function(e){return e.size}},{key:"hb_deal",val:function(e){return e.dealId}},{key:"hb_source",val:function(e){return e.source}},{key:"hb_format",val:function(e){return e.mediaType}}]),r[N.JSON_MAPPING.BD_SETTING_STANDARD]}function m(e,t){if(!t)return{};var n={},r=pbjs.bidderSettings;r&&(u(n,d(t.mediaType),t),e&&r[e]&&r[e][N.JSON_MAPPING.ADSERVER_TARGETING]&&(u(n,r[e],t),t.sendStandardTargeting=r[e].sendStandardTargeting));return t.native&&(n=g({},n,(0,i.getNativeTargeting)(t))),n}function u(r,i,o){var e=i[N.JSON_MAPPING.ADSERVER_TARGETING];return o.size=o.getSize(),C._each(e,(function(e){var t=e.key,n=e.val;if(r[t]&&C.logWarn("The key: "+t+" is getting ovewritten"),C.isFn(n))try{n=n(o)}catch(e){C.logError("bidmanager","ERROR",e)}(void 0===i.suppressEmptyKeys||!0!==i.suppressEmptyKeys)&&"hb_deal"!==t||!C.isEmptyStr(n)&&null!=n?r[t]=n:C.logInfo("suppressing empty key '"+t+"' from adserver targeting")})),r}function s(e){var t=e.bidderCode,n=e.cpm,r=void 0;if(pbjs.bidderSettings&&(t&&pbjs.bidderSettings[t]&&"function"==typeof pbjs.bidderSettings[t].bidCpmAdjustment?r=pbjs.bidderSettings[t].bidCpmAdjustment:pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(r=pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),r))try{n=r(e.cpm,g({},e))}catch(e){C.logError("Error during bid adjustment","bidmanager.js",e)}0<=n&&(e.cpm=n)}function q(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},44:function(e,t,n){"use strict";var r=n(16),i=n(34)(5),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(27)(o)},45:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},46:function(e,t,n){var r=n(47),i=n(52);e.exports=n(23)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},47:function(e,t,n){var r=n(48),i=n(49),o=n(51),a=Object.defineProperty;t.f=n(23)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},48:function(e,t,n){var r=n(17);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},49:function(e,t,n){e.exports=!n(23)&&!n(33)((function(){return 7!=Object.defineProperty(n(50)("div"),"a",{get:function(){return 7}}).a}))},498:function(e,t,n){e.exports=n(499)},499:function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(39),d=n(0),u=n(500),s=n(14),c=n(11),f=n(2),l=n(29),g=n(40),p=n(21),v=n(501),y=n(6),m=(r=y)&&r.__esModule?r:{default:r};var b=(0,a.getGlobal)(),h=n(4),S=n(0),E=n(8),A=n(19),T=n(9),I=s.userSync.triggerUserSyncs,_=h.EVENTS,w=_.ADD_AD_UNITS,C=_.BID_WON,O=_.REQUEST_BIDS,B=_.SET_TARGETING,N=_.AD_RENDER_FAILED,R=h.AD_RENDER_FAILED_REASON,U=R.PREVENT_WRITING_ON_MAIN_DOCUMENT,D=R.NO_AD,j=R.EXCEPTION,P=R.CANNOT_FIND_AD,k=R.MISSING_DOC_OR_ADID,x={bidWon:function(e){var t=l.auctionManager.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(d.flatten).filter(d.uniques);if(!S.contains(t,e))return void S.logError('The "'+e+'" placement is not defined.');return!0}};function M(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function q(e,t,n){var r={};r.reason=e,r.message=t,n&&(r.bid=n),S.logError(t),T.emit(N,r)}function G(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){S.logError("Error processing command :","prebid.js",e)}}))}(0,v.sessionLoader)(),b.bidderSettings=b.bidderSettings||{},b.cbTimeout=b.cbTimeout||200,b.libLoaded=!0,b.version="v1.15.0",S.logInfo("Prebid.js v1.15.0 loaded"),b.adUnits=b.adUnits||[],b.triggerUserSyncs=I,b.getAdserverTargetingForAdUnitCodeStr=function(e){if(S.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=b.getAdserverTargetingForAdUnitCode(e);return S.transformAdServerTargetingObj(t)}S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},b.getAdserverTargetingForAdUnitCode=function(e){return b.getAdserverTargeting(e)[e]},b.getAdserverTargeting=function(e){return S.logInfo("Invoking pbjs.getAdserverTargeting",arguments),g.targeting.getAllTargeting(e)},b.getBidResponses=function(){S.logInfo("Invoking pbjs.getBidResponses",arguments);var e=l.auctionManager.getBidsReceived().filter(d.adUnitsFilter.bind(this,l.auctionManager.getAdUnitCodes())),n=e&&e.length&&e[e.length-1].auctionId;return e.map((function(e){return e.adUnitCode})).filter(d.uniques).map((function(t){return e.filter((function(e){return e.auctionId===n&&e.adUnitCode===t}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return t={},n=e[0].adUnitCode,r={bids:e.map(d.removeRequestId)},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r})).reduce((function(e,t){return o(e,t)}),{})},b.getBidResponsesForAdUnitCode=function(t){return{bids:l.auctionManager.getBidsReceived().filter((function(e){return e.adUnitCode===t})).map(d.removeRequestId)}},b.setTargetingForGPTAsync=function(e,t){if(S.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,d.isGptPubadsDefined)()){var n=g.targeting.getAllTargeting(e);g.targeting.resetPresetTargeting(e),g.targeting.setTargetingForGPT(n,t),Object.keys(n).forEach((function(t){Object.keys(n[t]).forEach((function(e){"hb_adid"===e&&l.auctionManager.setStatusForBids(n[t][e],g.BID_TARGETING_SET)}))})),T.emit(B,n)}else S.logError("window.googletag is not defined on the page")},b.setTargetingForAst=function(){S.logInfo("Invoking pbjs.setTargetingForAn",arguments),g.targeting.isApntagDefined()?(g.targeting.setTargetingForAst(),T.emit(B,g.targeting.getAllTargeting())):S.logError("window.apntag is not defined on the page")},b.renderAd=function(e,t){if(S.logInfo("Invoking pbjs.renderAd",arguments),S.logMessage("Calling renderAd with adId :"+t),e&&t)try{var n=l.auctionManager.findBidByAdId(t);if(n){n.status=g.RENDERED,n.ad=S.replaceAuctionPrice(n.ad,n.cpm),n.adUrl=S.replaceAuctionPrice(n.adUrl,n.cpm),l.auctionManager.addWinningBid(n),T.emit(C,n);var r=n.height,i=n.width,o=n.ad,a=n.mediaType,d=n.adUrl,u=n.renderer,s=document.createComment("Creative "+n.creativeId+" served by "+n.bidder+" Prebid.js Header Bidding");if(S.insertElement(s,e,"body"),u&&u.url)u.render(n);else if(e===document&&!S.inIframe()||"video"===a){q(U,"Error trying to write ad. Ad render call ad id "+t+" was prevented from writing to the main document.",n)}else if(o)e.write(o),e.close(),M(e,i,r),S.callBurl(n);else if(d){var c=S.createInvisibleIframe();c.height=r,c.width=i,c.style.display="inline",c.style.overflow="hidden",c.src=d,S.insertElement(c,e,"body"),M(e,i,r),S.callBurl(n)}else{q(D,"Error trying to write ad. No ad for bid response id: "+t,n)}}else{q(P,"Error trying to write ad. Cannot find ad by given id : "+t)}}catch(e){var f="Error trying to write ad Id :"+t+" to the page:"+e.message;q(j,f)}else q(k,"Error trying to write ad Id :"+t+" to the page. Missing document or adId")},b.removeAdUnit=function(e){if(S.logInfo("Invoking pbjs.removeAdUnit",arguments),e)for(var t=0;t<b.adUnits.length;t++)b.adUnits[t].code===e&&b.adUnits.splice(t,1)},b.requestBids=(0,p.createHook)("asyncSeries",(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels;T.emit(O);var a=n||f.config.getConfig("bidderTimeout");if(r=r||b.adUnits,S.logInfo("Invoking pbjs.requestBids",arguments),i&&i.length?r=r.filter((function(e){return(0,m.default)(i,e.code)})):i=r&&r.map((function(e){return e.code})),r.forEach((function(i){var o=Object.keys(i.mediaTypes||{banner:"banner"}),e=i.bids.map((function(e){return e.bidder})),a=E.bidderRegistry,t=f.config.getConfig("s2sConfig"),n=t&&t.bidders,r=n?e.filter((function(e){return!(0,m.default)(n,e)})):e;i.transactionId||(i.transactionId=S.generateUUID()),r.forEach((function(t){var e=a[t],n=e&&e.getSpec&&e.getSpec(),r=n&&n.supportedMediaTypes||["banner"];o.some((function(e){return(0,m.default)(r,e)}))||(S.logWarn(S.unsupportedBidderMessage(i,t)),i.bids=i.bids.filter((function(e){return e.bidder!==t})))}))})),r&&0!==r.length){var d=l.auctionManager.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:a,labels:o});return d.callBids(),d}if(S.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){S.logError("Error executing bidsBackHandler",null,e)}})),b.addAdUnits=function(e){S.logInfo("Invoking pbjs.addAdUnits",arguments),S.isArray(e)?b.adUnits.push.apply(b.adUnits,e):"object"===(void 0===e?"undefined":i(e))&&b.adUnits.push(e),T.emit(w)},b.onEvent=function(e,t,n){S.logInfo("Invoking pbjs.onEvent",arguments),S.isFn(t)?!n||x[e].call(null,n)?T.on(e,t,n):S.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):S.logError('The event handler provided is not a function and was not set on event "'+e+'".')},b.offEvent=function(e,t,n){S.logInfo("Invoking pbjs.offEvent",arguments),n&&!x[e].call(null,n)||T.off(e,t,n)},b.registerBidAdapter=function(e,t){S.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{E.registerBidAdapter(e(),t)}catch(e){S.logError("Error registering bidder adapter : "+e.message)}},b.registerAnalyticsAdapter=function(e){S.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{E.registerAnalyticsAdapter(e)}catch(e){S.logError("Error registering analytics adapter : "+e.message)}},b.createBid=function(e){return S.logInfo("Invoking pbjs.createBid",arguments),A.createBid(e)},b.loadScript=function(e,t,n){S.logInfo("Invoking pbjs.loadScript",arguments),(0,c.loadScript)(e,t,n)},b.enableAnalytics=function(e){e&&!S.isEmpty(e)?(S.logInfo("Invoking pbjs.enableAnalytics for: ",e),E.enableAnalytics(e)):S.logError("pbjs.enableAnalytics should be called with option {}")},b.aliasBidder=function(e,t){S.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?E.aliasBidAdapter(e,t):S.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},b.getAllWinningBids=function(){return l.auctionManager.getAllWinningBids().map(d.removeRequestId)},b.getAllPrebidWinningBids=function(){return l.auctionManager.getBidsReceived().filter((function(e){return e.status===g.BID_TARGETING_SET})).map(d.removeRequestId)},b.getHighestCpmBids=function(e){var t=(0,g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(),d.getLatestHighestCpmBid);return g.targeting.getWinningBids(e,t).map(d.removeRequestId)},b.getConfig=f.config.getConfig,b.setConfig=f.config.setConfig,b.que.push((function(){return(0,u.listenMessagesFromCreative)()})),b.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){S.logError("Error processing command :",e.message,e.stack)}else S.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},b.que.push=b.cmd.push,b.processQueue=function(){G(b.que),G(b.cmd)}},50:function(e,t,n){var r=n(17),i=n(20).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listenMessagesFromCreative=function(){addEventListener("message",o,!1)};var m=i(n(9)),b=n(18),r=n(4),h=n(0),S=n(29),E=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}var A=r.EVENTS.BID_WON;function o(e){var t,n,r,i,o,a,d,u,s,c,f,l,g,p=e.message?"message":"data",v={};try{v=JSON.parse(e[p])}catch(e){return}if(v.adId){var y=(0,E.default)(S.auctionManager.getBidsReceived(),(function(e){return e.adId===v.adId}));"Prebid Request"===v.message&&(t=y,n=v.adServerDomain,r=e.source,i=t.adId,o=t.ad,a=t.adUrl,d=t.width,u=t.height,i&&(c=(s=t).adUnitCode,f=s.width,l=s.height,(g=document.getElementById((0,E.default)(window.googletag.pubads().getSlots().filter((0,h.isSlotMatchingAdUnitCode)(c)),(function(e){return e})).getSlotElementId()).querySelector("iframe")).width=""+f,g.height=""+l,r.postMessage(JSON.stringify({message:"Prebid Response",ad:o,adUrl:a,adId:i,width:d,height:u}),n)),S.auctionManager.addWinningBid(y),m.default.emit(A,y)),"Prebid Native"===v.message&&((0,b.fireNativeTrackers)(v,y),S.auctionManager.addWinningBid(y),m.default.emit(A,y))}}},501:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.boundHook=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.disableOverrides=f,n.addBidResponseHook=l,n.getConfig=g,n.sessionLoader=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.sessionStorage,t=void 0;try{t=JSON.parse(e.getItem(d))}catch(e){}t&&c(t,!0)};var r=t(2),a=t(0),i=t(41),d="pbjs:debugging",u=n.boundHook=void 0;function s(e){(0,a.logMessage)("DEBUG: "+e)}function c(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];r.config.setConfig({debug:!0}),s("bidder overrides enabled"+(t?" from session":"")),u&&i.addBidResponse.removeHook(u),n.boundHook=u=l.bind(null,e),i.addBidResponse.addHook(u,5)}function f(){u&&(i.addBidResponse.removeHook(u),s("bidder overrides disabled"))}function l(e,r,i,t){if(Array.isArray(e.bidders)&&-1===e.bidders.indexOf(i.bidderCode))return n="bidder '"+i.bidderCode+"' excluded from auction by bidder overrides",void(0,a.logWarn)("DEBUG: "+n);var n;Array.isArray(e.bids)&&e.bids.forEach((function(n){n.bidder&&n.bidder!==i.bidderCode||n.adUnitCode&&n.adUnitCode!==r||(i=o({},i),Object.keys(n).filter((function(e){return-1===["bidder","adUnitCode"].indexOf(e)})).forEach((function(e){var t=n[e];s("bidder overrides changed '"+r+"/"+i.bidderCode+"' bid."+e+" from '"+i[e]+"' to '"+t+"'"),i[e]=t})))})),t(r,i)}function g(e){if(e.enabled){try{window.sessionStorage.setItem(d,JSON.stringify(e))}catch(e){}c(e)}else{f();try{window.sessionStorage.removeItem(d)}catch(e){}}}r.config.getConfig("debugging",(function(e){return g(e.debugging)}))},51:function(e,t,n){var i=n(17);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},52:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},53:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},54:function(e,t,n){var r=n(25);e.exports=function(e){return Object(r(e))}},55:function(e,t,n){var r=n(56);e.exports=function(e,t){return new(r(e))(t)}},56:function(e,t,n){var r=n(17),i=n(38),o=n(26)("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},57:function(e,t,n){var r=n(20),i="__core-js_shared__",o=r[i]||(r[i]={});e.exports=function(e){return o[e]||(o[e]={})}},58:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},59:function(e,t,n){"use strict";var r=n(16),i=n(60)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(27)("includes")},6:function(e,t,n){n(59),e.exports=n(15).Array.includes},60:function(e,t,n){var u=n(61),s=n(36),c=n(62);e.exports=function(d){return function(e,t,n){var r,i=u(e),o=s(i.length),a=c(n,o);if(d&&t!=t){for(;a<o;)if((r=i[a++])!=r)return!0}else for(;a<o;a++)if((d||a in i)&&i[a]===t)return d||a||0;return!d&&-1}}},61:function(e,t,n){var r=n(35),i=n(25);e.exports=function(e){return r(i(e))}},62:function(e,t,n){var r=n(37),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},63:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.setSizeConfig=a,t.resolveStatus=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,a=void 0===o?[]:o,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],u=(c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:p,c.reduce((function(n,e){return"object"===(void 0===e?"undefined":f(e))&&"string"==typeof e.mediaQuery?matchMedia(e.mediaQuery).matches&&(Array.isArray(e.sizesSupported)&&(n.shouldFilter=!0),["labels","sizesSupported"].forEach((function(t){return(e[t]||[]).forEach((function(e){return n[t][e]=!0}))}))):(0,l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),n}),{labels:{},sizesSupported:{},shouldFilter:!1})),s=void 0;var c;s=u.shouldFilter?d.filter((function(e){return u.sizesSupported[e]})):d;return{active:0<s.length&&(0===n.length||!i&&(n.some((function(e){return u.labels[e]}))||n.some((function(e){return(0,g.default)(a,e)})))||i&&n.reduce((function(e,t){return e?u.labels[t]||(0,g.default)(a,t):e}),!0)),sizes:s}};var r,i=n(2),l=n(0),o=n(6),g=(r=o)&&r.__esModule?r:{default:r};var p=[];function a(e){p=e}i.config.getConfig("sizeConfig",(function(e){return a(e.sizeConfig)}))},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonVideoBidder=t.videoBidder=t.videoAdUnit=void 0,t.isValidVideoBid=function(e,t){var n=(0,o.getBidRequest)(e.adId,t),r=n&&(0,o.deepAccess)(n,"mediaTypes.video"),i=r&&(0,o.deepAccess)(r,"context");if(!n||r&&i!==s)return a.config.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1);if(i===s)return!!(e.renderer||n.renderer||e.vastContent);return!0};var r,i=n(8),o=n(0),a=n(2),d=n(6),u=(r=d)&&r.__esModule?r:{default:r};var s="outstream",c=(t.videoAdUnit=function(e){var t="video"===e.mediaType,n=(0,o.deepAccess)(e,"mediaTypes.video");return t||n},t.videoBidder=function(e){return(0,u.default)(i.videoAdapters,e.bidder)});t.hasNonVideoBidder=function(e){return e.bids.filter((function(e){return!c(e)})).length}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.ajaxBuilder=r;var p=n(12),v=n(0),y=4;t.ajax=r();function r(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:3e3,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=e.request,f=e.done;return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i=void 0,o=r.method||(n?"POST":"GET"),a=document.createElement("a");a.href=e;var d="object"===(void 0===t?"undefined":g(t))&&null!==t?t:{success:function(){v.logMessage("xhr success")},error:function(e){v.logError("xhr error",null,e)}};if("function"==typeof t&&(d.success=t),(i=new window.XMLHttpRequest).onreadystatechange=function(){if(i.readyState===y){"function"==typeof f&&f(a.origin);var e=i.status;200<=e&&e<300||304===e?d.success(i.responseText,i):d.error(i.statusText,i)}},i.ontimeout=function(){v.logError("  xhr timeout after ",i.timeout,"ms")},"GET"===o&&n){var u=(0,p.parse)(e,r);l(u.search,n),e=(0,p.format)(u)}i.open(o,e),i.timeout=s,r.withCredentials&&(i.withCredentials=!0),v._each(r.customHeaders,(function(e,t){i.setRequestHeader(t,e)})),r.preflight&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type",r.contentType||"text/plain"),"function"==typeof c&&c(a.origin),"POST"===o&&n?i.send(n):i.send()}catch(e){v.logError("xhr construction",e)}}}},8:function(e,b,t){"use strict";var m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=t(0),l=t(64),g=t(18),c=t(1),S=t(7),E=t(2),A=n(t(6)),T=n(t(10));function n(e){return e&&e.__esModule?e:{default:e}}var I=t(0),_=t(4),w=t(9),C=void 0,O={};b.bidderRegistry=O,b.aliasRegistry={};var B={};E.config.getConfig("s2sConfig",(function(e){B=e.s2sConfig}));var r={};function p(e,t){return e.labelAll?{labelAll:!0,labels:e.labelAll,activeLabels:t}:{labelAll:!1,labels:e.labelAny,activeLabels:t}}function N(e){var r=e.bidderCode,u=e.auctionId,s=e.bidderRequestId,t=e.adUnits,c=e.labels;return t.reduce((function(e,a){var t=(0,l.resolveStatus)(p(a,c),a.sizes),n=t.active,d=t.sizes;return n&&e.push(a.bids.filter((function(e){return e.bidder===r})).reduce((function(e,t){a.mediaTypes&&(I.isValidMediaTypes(a.mediaTypes)?t=f({},t,{mediaTypes:a.mediaTypes}):I.logError("mediaTypes is not correctly configured for adunit "+a.code));var n=a.nativeParams||I.deepAccess(a,"mediaTypes.native");n&&(t=f({},t,{nativeParams:(0,g.processNativeAdUnitParams)(n)})),t=f({},t,(0,h.getDefinedParams)(a,["mediaType","renderer"]));var r=(0,l.resolveStatus)(p(t,c),d),i=r.active,o=r.sizes;return i&&e.push(f({},t,{adUnitCode:a.code,transactionId:a.transactionId,sizes:o,bidId:t.bid_id||I.getUniqueIdentifierStr(),bidderRequestId:s,auctionId:u})),e}),[])),e}),[]).reduce(h.flatten,[]).filter((function(e){return""!==e}))}function R(){return B&&B.enabled&&B.testing&&C}b.gdprDataHandler={consentData:null,setConsentData:function(e){this.consentData=e},getConsentData:function(){return this.consentData}},b.makeBidRequests=function(e,r,i,o,a){var d=[];e=b.checkBidRequestSizes(e);var t=(0,h.getBidderCodes)(e);E.config.getConfig("bidderSequence")===E.RANDOM&&(t=(0,h.shuffle)(t));var n,u,s,c=t,f=[];if(B.enabled){R()&&(f=C.getSourceBidderMap(e)[C.CLIENT]);var l=B.bidders;c=t.filter((function(e){return!(0,A.default)(l,e)||(0,A.default)(f,e)}));var g=(n=e,u=B.bidders,(s=I.deepClone(n)).forEach((function(e){e.bids=e.bids.filter((function(e){return(0,A.default)(u,e.bidder)&&(!R()||e.finalSource!==C.CLIENT)})).map((function(e){return e.bid_id=I.getUniqueIdentifierStr(),e}))})),s=s.filter((function(e){return 0!==e.bids.length}))),p=I.generateUUID();l.forEach((function(e){var t=I.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:i,bidderRequestId:t,tid:p,adUnitsS2SCopy:g,bids:N({bidderCode:e,auctionId:i,bidderRequestId:t,adUnits:g,labels:a}),auctionStart:r,timeout:B.timeout,src:_.S2S.SRC};0!==n.bids.length&&d.push(n)}))}var v,y,m=(v=e,(y=I.deepClone(v)).forEach((function(e){e.bids=e.bids.filter((function(e){return!R()||e.finalSource!==C.SERVER}))})),y=y.filter((function(e){return 0!==e.bids.length})));return c.forEach((function(e){var t=I.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:i,bidderRequestId:t,bids:N({bidderCode:e,auctionId:i,bidderRequestId:t,adUnits:m,labels:a}),auctionStart:r,timeout:o};n.bids&&0!==n.bids.length&&d.push(n)})),b.gdprDataHandler.getConsentData()&&d.forEach((function(e){e.gdprConsent=b.gdprDataHandler.getConsentData()})),d},b.checkBidRequestSizes=function(e){function a(e){return Array.isArray(e)&&2===e.length&&I.isInteger(e[0])&&I.isInteger(e[1])}return e.forEach((function(e){e.sizes&&I.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).");var t=e.mediaTypes;if(t&&t.banner){var n=t.banner;n.sizes?e.sizes=n.sizes:(I.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."),delete e.mediaTypes.banner)}if(t&&t.video){var r=t.video;if(r.playerSize)if(Array.isArray(r.playerSize)&&1===r.playerSize.length&&r.playerSize.every(a))e.sizes=r.playerSize;else if(a(r.playerSize)){var i=[];i.push(r.playerSize),I.logInfo("Transforming video.playerSize from "+r.playerSize+" to "+i+" so it's in the proper format."),e.sizes=r.playerSize=i}else I.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete e.mediaTypes.video.playerSize}if(t&&t.native){var o=t.native;o.image&&o.image.sizes&&!Array.isArray(o.image.sizes)&&(I.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete e.mediaTypes.native.image.sizes),o.image&&o.image.aspect_ratios&&!Array.isArray(o.image.aspect_ratios)&&(I.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete e.mediaTypes.native.image.aspect_ratios),o.icon&&o.icon.sizes&&!Array.isArray(o.icon.sizes)&&(I.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete e.mediaTypes.native.icon.sizes)}})),e},b.callBids=function(e,t,i,o,a){if(t.length){var n=t.reduce((function(e,t){return e[Number(void 0!==t.src&&t.src===_.S2S.SRC)].push(t),e}),[[],[]]),r=m(n,2),d=r[0],u=r[1];if(u.length){var s=(0,S.ajaxBuilder)(u[0].timeout,a?{request:a.request.bind(null,"s2s"),done:a.done}:void 0),c=B.bidders,f=O[B.adapter],l=u[0].tid,g=u[0].adUnitsS2SCopy;if(g.forEach((function(n){var e=n.bids.filter((function(t){return(0,T.default)(u,(function(e){return e.bidderCode===t.bidder&&(0,T.default)(e.bids,(function(e){return e.adUnitCode===n.code}))}))}));n.bids=e})),g=g.filter((function(e){return 0<e.bids.length})),f){var p={tid:l,ad_units:g};if(p.ad_units.length){var v=u.map((function(e){return e.start=(0,h.timestamp)(),e.doneCbCallCount=0,o(e.bidderRequestId)})),y=p.ad_units.reduce((function(e,t){return e.concat((t.bids||[]).reduce((function(e,t){return e.concat(t.bidder)}),[]))}),[]);I.logMessage("CALLING S2S HEADER BIDDERS ==== "+c.filter((function(e){return(0,A.default)(y,e)})).join(",")),u.forEach((function(e){w.emit(_.EVENTS.BID_REQUESTED,e)})),f.callBids(p,u,i,(function(){return v.forEach((function(e){return e()}))}),s)}}}d.forEach((function(e){e.start=(0,h.timestamp)();var t=O[e.bidderCode];if(t){I.logMessage("CALLING BIDDER ======= "+e.bidderCode),w.emit(_.EVENTS.BID_REQUESTED,e),e.doneCbCallCount=0;var n=o(e.bidderRequestId),r=(0,S.ajaxBuilder)(d[0].timeout,a?{request:a.request.bind(null,e.bidderCode),done:a.done}:void 0);t.callBids(e,i,n,r)}else I.logError("Adapter trying to be called which does not exist: "+e.bidderCode+" adaptermanager.callBids")}))}else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},b.videoAdapters=[],b.registerBidAdapter=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).supportedMediaTypes,r=void 0===n?[]:n;e&&t?"function"==typeof e.callBids?(O[t]=e,(0,A.default)(r,"video")&&b.videoAdapters.push(t),(0,A.default)(r,"native")&&g.nativeAdapters.push(t)):I.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):I.logError("bidAdaptor or bidderCode not specified")},b.aliasBidAdapter=function(t,e){var n,r;if(void 0===O[e]){var i=O[t];if(void 0===i){var o=E.config.getConfig("s2sConfig"),a=o&&o.bidders;a&&(0,A.default)(a,e)?b.aliasRegistry[e]=t:I.logError('bidderCode "'+t+'" is not an existing bidder.',"adaptermanager.aliasBidAdapter")}else try{var d=void 0,u=(n=t,r=[],(0,A.default)(b.videoAdapters,n)&&r.push("video"),(0,A.default)(g.nativeAdapters,n)&&r.push("native"),r);if(i.constructor.prototype!=Object.prototype)(d=new i.constructor).setBidderCode(e);else{var s=i.getSpec();d=(0,c.newBidder)(f({},s,{code:e})),b.aliasRegistry[e]=t}this.registerBidAdapter(d,e,{supportedMediaTypes:u})}catch(e){I.logError(t+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}else I.logMessage('alias name "'+e+'" has been already specified.')},b.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,r[n]=t):I.logError('Prebid Error: Analytics adaptor error for analytics "'+n+'"\n        analytics adapter must implement an enableAnalytics() function'):I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},b.enableAnalytics=function(e){I.isArray(e)||(e=[e]),I._each(e,(function(e){var t=r[e.provider];t?t.enableAnalytics(e):I.logError("Prebid Error: no analytics adapter found in registry for\n        "+e.provider+".")}))},b.getBidAdapter=function(e){return O[e]},b.setS2STestingModule=function(e){C=e},b.callTimedOutBidders=function(t,n,r){n=n.map((function(e){return e.params=I.getUserConfiguredParams(t,e.adUnitCode,e.bidder),e.timeout=r,e})),n=I.groupBy(n,"bidder"),Object.keys(n).forEach((function(t){try{var e=O[t].getSpec();e&&e.onTimeout&&"function"==typeof e.onTimeout&&(I.logInfo("Invoking "+t+".onTimeout"),e.onTimeout(n[t]))}catch(e){I.logWarn("Error calling onTimeout of "+t)}}))}},9:function(e,t,n){"use strict";var d,r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(0),o=n(4),a=Array.prototype.slice,s=Array.prototype.push,c=u._map(o.EVENTS,(function(e){return e})),f=o.EVENT_ID_PATHS,l=[];e.exports=(d={},(r={}).on=function(e,t,n){if(i=e,u.contains(c,i)){var r=d[e]||{que:[]};n?(r[n]=r[n]||{que:[]},r[n].que.push(t)):r.que.push(t),d[e]=r}else u.logError("Wrong event name : "+e+" Valid event names :"+c);var i},r.emit=function(e){!(function(e,t){u.logMessage("Emitting event for: "+e);var n=t[0]||{},r=n[f[e]],i=d[e]||{que:[]},o=u._map(i,(function(e,t){return t})),a=[];l.push({eventType:e,args:n,id:r}),r&&u.contains(o,r)&&s.apply(a,i[r].que),s.apply(a,i.que),u._each(a,(function(e){if(e)try{e.apply(null,t)}catch(e){u.logError("Error executing handler:","events.js",e)}}))})(e,a.call(arguments,1))},r.off=function(e,n,r){var i=d[e];u.isEmpty(i)||u.isEmpty(i.que)&&u.isEmpty(i[r])||r&&(u.isEmpty(i[r])||u.isEmpty(i[r].que))||(r?u._each(i[r].que,(function(e){var t=i[r].que;e===n&&t.splice(u.indexOf.call(t,e),1)})):u._each(i.que,(function(e){var t=i.que;e===n&&t.splice(u.indexOf.call(t,e),1)})),d[e]=i)},r.get=function(){return d},r.getEvents=function(){var n=[];return u._each(l,(function(e){var t=i({},e);n.push(t)})),n},r)}});
pbjsChunk([120],{120:function(e,r,t){t(121),e.exports=t(122)},121:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},i=l(["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=",";",""],["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=",";",""]),a=l(["//","/bidRequest?"],["//","/bidRequest?"]),o=l(["dcn=","&pos=","&cmd=bid",""],["dcn=","&pos=","&cmd=bid",""]),s=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),d=t(1),c=t(2),u=t(4),p=t(3);function l(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var m={AOL:"aol",ONEMOBILE:"onemobile",ONEDISPLAY:"onedisplay"},b={DISPLAY:{GET:"display-get"},MOBILE:{GET:"mobile-get",POST:"mobile-post"}},f={IFRAME:{TAG:"iframe",TYPE:"iframe"},IMAGE:{TAG:"img",TYPE:"image"}},v=P(i,"host","network","placement","pageid","sizeid","alias","misc","dynamicParams"),h=P(a,"host"),O=P(o,"dcn","pos","dynamicParams"),g={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"};pbjs.aolGlobals={pixelsDropped:!1};var E,y=1,I=(E=!0,function(){var e=pbjs.bidderSettings;E&&e&&e.aol&&"function"==typeof e.aol.bidCpmAdjustment&&(s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable."),E=!1)});function P(o){for(var e=arguments.length,t=Array(1<e?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=i[i.length-1]||{},a=[o[0]];return t.forEach((function(e,r){var t=s.isInteger(e)?i[e]:n[e];a.push(t,o[r+1])})),a.join("")}}function A(e){return e===m.AOL||e===m.ONEMOBILE}function S(e){if(A(e.bidder)&&e.params.id&&e.params.imp&&e.params.imp[0]){var r=e.params.imp[0];return r.id&&r.tagid&&(r.banner&&r.banner.w&&r.banner.h||r.video&&r.video.mimes&&r.video.minduration&&r.video.maxduration)}}function x(e){return A(e.bidder)&&e.params.dcn&&e.params.pos}function M(e){return((r=e.bidder)===m.AOL||r===m.ONEDISPLAY)&&e.params.placement&&e.params.network;var r}var T=r.spec={code:m.AOL,aliases:[m.ONEMOBILE,m.ONEDISPLAY],supportedMediaTypes:[p.BANNER],isBidRequestValid:function(e){return M(e)||(x(r=e)||S(r));var r},buildRequests:function(e,r){var i=this,n=r?r.gdprConsent:null;return e.map((function(e){var r,t=x(r=e)?b.MOBILE.GET:S(r)?b.MOBILE.POST:M(r)?b.DISPLAY.GET:void 0;if(t)return i.formatBidRequest(t,e,n)}))},interpretResponse:function(e,r){var t=e.body;if(I(),t){var i=this._parseBidResponse(t,r);if(i)return i}else s.logError("Empty bid response",r.bidderCode,t)},getUserSyncs:function(e,r){var t=r[0];return c.config.getConfig("aol.userSyncOn")===u.EVENTS.BID_RESPONSE&&!pbjs.aolGlobals.pixelsDropped&&t&&t.ext&&t.ext.pixels?(pbjs.aolGlobals.pixelsDropped=!0,(function(e){var i=/\w*(?=\s)/,n=/src=("|')(.*?)\1/,a=[];if(e){var r=e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);r&&r.forEach((function(e){var r=e.match(i)[0],t=e.match(n)[2];r&&r&&a.push({type:r===f.IMAGE.TAG?f.IMAGE.TYPE:f.IFRAME.TYPE,url:t})}))}return a})(t.ext.pixels)):[]},formatBidRequest:function(e,r,t){var i=void 0;switch(e){case b.DISPLAY.GET:i={url:this.buildMarketplaceUrl(r,t),method:"GET",ttl:60};break;case b.MOBILE.GET:i={url:this.buildOneMobileGetUrl(r,t),method:"GET",ttl:3600};break;case b.MOBILE.POST:i={url:this.buildOneMobileBaseUrl(r),method:"POST",ttl:3600,data:this.buildOpenRtbRequestData(r,t),options:{contentType:"application/json",customHeaders:{"x-openrtb-version":"2.2"}}}}return i.bidderCode=r.bidder,i.bidId=r.bidId,i.userSyncOn=r.params.userSyncOn,i},buildMarketplaceUrl:function(e,r){var t=e.params,i=t.server,n=t.region||"us",a=void 0;return g.hasOwnProperty(n)||(s.logWarn("Unknown region '"+n+"' for AOL bidder."),n="us"),a=i||g[n],t.region=n,v({host:a,network:t.network,placement:parseInt(t.placement),pageid:t.pageId||0,sizeid:t.sizeId||0,alias:t.alias||s.getUniqueIdentifierStr(),misc:(new Date).getTime(),dynamicParams:this.formatMarketplaceDynamicParams(t,r)})},buildOneMobileGetUrl:function(e,r){var t=e.params,i=t.dcn,n=t.pos,a=t.ext,o=this.buildOneMobileBaseUrl(e);if(i&&n){var s=this.formatOneMobileDynamicParams(a,r);o+=O({dcn:i,pos:n,dynamicParams:s})}return o},buildOneMobileBaseUrl:function(e){return h({host:e.params.host||"hb.nexage.com"})},formatMarketplaceDynamicParams:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],t={};e.bidFloor&&(t.bidfloor=e.bidFloor),n(t,this.formatKeyValues(e.keyValues)),n(t,this.formatConsentData(r));var i="";return s._each(t,(function(e,r){i+=r+"="+encodeURIComponent(e)+";"})),i},formatOneMobileDynamicParams:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];this.isSecureProtocol()&&(e.secure=y),n(e,this.formatConsentData(r));var t="";return s._each(e,(function(e,r){t+="&"+r+"="+encodeURIComponent(e)})),t},buildOpenRtbRequestData:function(e,r){var t={id:e.params.id,imp:e.params.imp};return this.isConsentRequired(r)&&(t.regs={ext:{gdpr:y}},r.consentString&&(t.user={ext:{consent:r.consentString}})),t},isConsentRequired:function(e){return!(!e||!e.gdprApplies)},formatKeyValues:function(e){var t={};return s._each(e,(function(e,r){t["kv"+r]=e})),t},formatConsentData:function(e){var r={};return this.isConsentRequired(e)&&(r.gdpr=y,e.consentString&&(r.euconsent=e.consentString)),r},_parseBidResponse:function(e,r){var t=void 0;try{t=e.seatbid[0].bid[0]}catch(e){return}var i=void 0;if(t.ext&&t.ext.encp)i=t.ext.encp;else if(null===(i=t.price)||isNaN(i))return void s.logError("Invalid price in bid response",m.AOL,bid);var n={bidderCode:r.bidderCode,requestId:r.bidId,ad:t.adm,cpm:i,width:t.w,height:t.h,creativeId:t.crid,pubapiId:e.id,currency:e.cur,dealId:t.dealid,netRevenue:!0,ttl:r.ttl};return e.ext&&e.ext.pixels&&c.config.getConfig("aol.userSyncOn")!==u.EVENTS.BID_RESPONSE&&(n.ad+=this.formatPixels(e.ext.pixels)),n},formatPixels:function(e){return"<script>var w=window,prebid;for(var i=0;i<10;i++){w = w.parent;prebid=w.pbjs;if(prebid && prebid.aolGlobals && !prebid.aolGlobals.pixelsDropped){try{prebid.aolGlobals.pixelsDropped=true;"+e.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g,"")+"break;}catch(e){continue;}}}<\/script>"},isOneMobileBidder:A,isSecureProtocol:function(){return"https:"===document.location.protocol}};(0,d.registerBidder)(T)},122:function(e,r){}},[120]);
pbjsChunk([118],{125:function(e,r,a){a(126),e.exports=a(127)},126:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},p=a(13),u=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r}})(a(0)),t=a(1),m=a(3),c=s(a(10)),l=s(a(6));function s(e){return e&&e.__esModule?e:{default:e}}var f=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],y=["age","external_uid","segments","gender","dnt","language"],v={body:"description",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},icon:{serverName:"icon",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},sponsoredBy:"sponsored_by"},b=!1,n=r.spec={code:"appnexus",aliases:["appnexusAst","brealtime","pagescience","defymedia","gourmetads","matomy","featureforward","oftmedia","districtm"],supportedMediaTypes:[m.BANNER,m.VIDEO,m.NATIVE],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var a=e.map(g),t=(0,c.default)(e,_),s=void 0;t&&(s={},Object.keys(t.params.user).filter((function(e){return(0,l.default)(y,e)})).forEach((function(e){return s[e]=t.params.user[e]})));var i=(0,c.default)(e,I),n=i?parseInt(i.params.member,10):0,d={tags:[].concat(function(e){if(Array.isArray(e)){for(var r=0,a=Array(e.length);r<e.length;r++)a[r]=e[r];return a}return Array.from(e)}(a)),user:s,sdk:{source:"pbjs",version:"1.15.0"}};return 0<n&&(d.member_id=n),r&&r.gdprConsent&&(d.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),{method:"POST",url:"//ib.adnxs.com/ut/v3/prebid",data:JSON.stringify(d),bidderRequest:r}},interpretResponse:function(e,r){var i=this,n=r.bidderRequest;e=e.body;var d=[];if(!e||e.error){var a="in response for "+n.bidderCode+" adapter";return e&&e.error&&(a+=": "+e.error),u.logError(a),d}return e.tags&&e.tags.forEach((function(e){var r,a,t=(r=e)&&r.ads&&r.ads.length&&(0,c.default)(r.ads,(function(e){return e.rtb}));if(t&&isFinite(t.cpm)&&(0,l.default)(i.supportedMediaTypes,t.ad_type)){var s=(function(e,r,a){var t={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,appnexus:{buyerMemberId:r.buyer_member_id}};if(r.rtb.video){if(o(t,{width:r.rtb.video.player_width||0,height:r.rtb.video.player_height||0,vastUrl:r.rtb.video.asset_url,vastImpUrl:r.notify_url,vastContent:r.rtb.video.content,ttl:3600}),r.renderer_url&&b){var s=u.deepAccess(a.bids[0],"renderer.options");o(t,{adResponse:e,renderer:(function(e,r){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=p.Renderer.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1});try{t.setRender(E)}catch(e){u.logWarn("Prebid Error calling setRender on renderer",e)}return t.setEventHandlers({impression:function(){return u.logMessage("AppNexus outstream video impression event")},loaded:function(){return u.logMessage("AppNexus outstream video loaded event")},ended:function(){u.logMessage("AppNexus outstream renderer video event"),document.querySelector("#"+e).style.display="none"}}),t})(t.adUnitCode,r,s)}),t.adResponse.ad=t.adResponse.ads[0],t.adResponse.ad.video=t.adResponse.ad.rtb.video}}else if(r.rtb[m.NATIVE]){var i=r.rtb[m.NATIVE];t[m.NATIVE]={title:i.title,body:i.desc,cta:i.ctatext,sponsoredBy:i.sponsored,clickUrl:i.link.url,clickTrackers:i.link.click_trackers,impressionTrackers:i.impression_trackers,javascriptTrackers:i.javascript_trackers},i.main_img&&(t.native.image={url:i.main_img.url,height:i.main_img.height,width:i.main_img.width}),i.icon&&(t.native.icon={url:i.icon.url,height:i.icon.height,width:i.icon.width})}else{o(t,{width:r.rtb.banner.width||0,height:r.rtb.banner.height||0,ad:r.rtb.banner.content});try{var n=r.rtb.trackers[0].impression_urls[0],d=u.createTrackPixelHtml(n);t.ad+=d}catch(e){u.logError("Error appending tracking pixel",e)}}return t})(e,t,n);s.mediaType=(a=t.ad_type)===m.VIDEO?m.VIDEO:a===m.NATIVE?m.NATIVE:m.BANNER,d.push(s)}})),d},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"}]}};function g(r){var n,d,a={};if(a.sizes=h(r.sizes),a.primary_size=a.sizes[0],a.ad_types=[],a.uuid=r.bidId,r.params.placementId?a.id=parseInt(r.params.placementId,10):a.code=r.params.invCode,a.allow_smaller_sizes=r.params.allowSmallerSizes||!1,a.use_pmt_rule=r.params.usePaymentRule||!1,a.prebid=!0,a.disable_psa=!0,r.params.reserve&&(a.reserve=r.params.reserve),r.params.position&&(a.position={above:1,below:2}[r.params.position]||0),r.params.trafficSourceCode&&(a.traffic_source_code=r.params.trafficSourceCode),r.params.privateSizes&&(a.private_sizes=h(r.params.privateSizes)),r.params.supplyType&&(a.supply_type=r.params.supplyType),r.params.pubClick&&(a.pubclick=r.params.pubClick),r.params.extInvCode&&(a.ext_inv_code=r.params.extInvCode),r.params.externalImpId&&(a.external_imp_id=r.params.externalImpId),u.isEmpty(r.params.keywords)||(a.keywords=u.transformBidderParamKeywords(r.params.keywords)),(r.mediaType===m.NATIVE||u.deepAccess(r,"mediaTypes."+m.NATIVE))&&(a.ad_types.push(m.NATIVE),r.nativeParams)){var e=(n=r.nativeParams,d={},Object.keys(n).forEach((function(e){var r=v[e]&&v[e].serverName||v[e]||e,a=v[e]&&v[e].requiredParams;d[r]=o({},a,n[e]);var t=v[e]&&v[e].minimumParams;if(a&&t){var s=Object.keys(n[e]),i=Object.keys(a);0===s.filter((function(e){return!(0,l.default)(i,e)})).length&&(d[r]=o({},d[r],t))}})),d);a[m.NATIVE]={layouts:[e]}}var t=u.deepAccess(r,"mediaTypes."+m.VIDEO),s=u.deepAccess(r,"mediaTypes.video.context");return(r.mediaType===m.VIDEO||t)&&a.ad_types.push(m.VIDEO),(r.mediaType===m.VIDEO||t&&"outstream"!==s)&&(a.require_asset_url=!0),r.params.video&&(a.video={},Object.keys(r.params.video).filter((function(e){return(0,l.default)(f,e)})).forEach((function(e){return a.video[e]=r.params.video[e]}))),(u.isEmpty(r.mediaType)&&u.isEmpty(r.mediaTypes)||r.mediaType===m.BANNER||r.mediaTypes&&r.mediaTypes[m.BANNER])&&a.ad_types.push(m.BANNER),a}function h(e){var r=[],a={};if(u.isArray(e)&&2===e.length&&!u.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===(void 0===e?"undefined":i(e)))for(var t=0;t<e.length;t++){var s=e[t];(a={}).width=parseInt(s[0],10),a.height=parseInt(s[1],10),r.push(a)}return r}function _(e){return!!e.params.user}function I(e){return!!parseInt(e.params.member,10)}function E(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},function(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}.bind(null,e))}))}(0,t.registerBidder)(n)},127:function(e,r){}},[125]);
pbjsChunk([115],{134:function(a,e,t){t(135),a.exports=t(136)},135:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spec=void 0;var g=function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return (function(a,e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,d=a[Symbol.iterator]();!(n=(o=d.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(a){r=!0,i=a}finally{try{!n&&d.return&&d.return()}finally{if(r)throw i}}return t})(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=t(1),i=t(2),p=t(12),l=t(0),b=d(t(22)),o=d(t(6));function d(a){return a&&a.__esModule?a:{default:a}}var w=function(a){return Array.isArray(a)&&2===a.length?a[0]+"x"+a[1]:a},A=function(a){return a.split("x").map(Number)},h=function(a){return(0,o.default)(["300x250","320x50"],a)},v=function(a){return(0,o.default)(["video","native"],a)},_=function(a){return"video"===a},y=function(a){return"fullwidth"===a},x=function(){return encodeURIComponent((0,l.getTopWindowUrl)())},c=e.spec={code:"audienceNetwork",supportedMediaTypes:["banner","video"],isBidRequestValid:function(a){return"object"===n(a.params)&&"string"==typeof a.params.placementId&&0<a.params.placementId.length&&Array.isArray(a.sizes)&&0<a.sizes.length&&(!y(a.params.format)||a.sizes.map(w).some((function(a){return"300x250"===a})))&&(v(a.params.format)||a.sizes.map(w).some(h))},buildRequests:function(a){var t=[],r=[],i=[],o=[],d=[];a.forEach((function(n){return n.sizes.map(w).filter((function(a){return e=a,t=n.params.format,y(t)&&"300x250"===w(e)||v(t)||h(w(e));var e,t})).slice(0,1).forEach((function(a){var e;t.push(n.params.placementId),r.push(n.params.format||a),i.push(a),o.push((e=n.params.format,_(e)?"":"5.5.web")),d.push(n.bidId)}))}));var e=Boolean(window&&window.location&&"string"==typeof window.location.search&&-1!==window.location.search.indexOf("anhb_testmode")).toString(),n=x(),c={placementids:t,adformats:r,testmode:e,pageurl:n,sdk:o,pbv:"1.15.0"},s=(0,b.default)(r,_);if(-1!==s){var u=A(i[s]),f=g(u,2);c.playerwidth=f[0],c.playerheight=f[1]}(0,l.isSafariBrowser)()&&(c.cb=(0,l.generateUUID)());var m=(0,p.formatQS)(c);return[{adformats:r,data:m,method:"GET",requestIds:d,sizes:i,url:"https://an.facebook.com/v2/placementbid.json"}]},interpretResponse:function(a,e){var t=a.body,b=e.adformats,h=e.requestIds,v=e.sizes,y=Number(i.config.getConfig().bidderTimeout),n=t.bids,r=void 0===n?{}:n;return Object.keys(r).map((function(a){return r[a]})).reduce((function(a,e){return a.concat(e)}),[]).map((function(a,e){var t,n,r=a.bid_id,i=a.placement_id,o=a.bid_price_cents,d=b[e],c=A(w(v[e])),s=g(c,2),u=s[0],f=s[1],m="<html><head>"+("native"===(n=d)?'<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>':"")+"</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'"+(t=i)+"',format:'"+n+"',bidid:'"+r+"',onAdLoaded:function(e){console.log('Audience Network ["+t+"] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network ["+t+"] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n"+("native"===n?'<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>':"")+"</div></body></html>",p={requestId:h[e],cpm:o/100,width:u,height:f,ad:m,ttl:y,creativeId:i,netRevenue:!0,currency:"USD",hb_bidder:"fan",fb_bidid:r,fb_format:d,fb_placementid:i};if(_(d)){var l=x();p.mediaType="video",p.vastUrl="https://an.facebook.com/v1/instream/vast.xml?placementid="+i+"&pageurl="+l+"&playerwidth="+u+"&playerheight="+f+"&bidid="+r}return p}))}};(0,r.registerBidder)(c)},136:function(a,e){}},[134]);
pbjsChunk([114],{137:function(e,r,n){n(138),e.exports=n(139)},138:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=r.DEFAULT_MIMES=r.VIDEO_TARGETING=r.OUTSTREAM_SRC=r.BANNER_ENDPOINT=r.VIDEO_ENDPOINT=void 0;var l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,r){var n=[],t=!0,i=!1,o=void 0;try{for(var d,a=e[Symbol.iterator]();!(t=(d=a.next()).done)&&(n.push(d.value),!r||n.length!==r);t=!0);}catch(e){i=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(i)throw o}}return n})(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}})(n(0)),t=n(1),a=n(13),s=n(3),u=i(n(10)),v=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}var c="1.1",p="BFIO_PREBID",d=r.VIDEO_ENDPOINT="//reachms.bfmio.com/bid.json?exchange_id=",h=r.BANNER_ENDPOINT="//display.bfmio.com/prebid_display",g=r.OUTSTREAM_SRC="//player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",m=r.VIDEO_TARGETING=["mimes"],b=r.DEFAULT_MIMES=["video/mp4","application/javascript"],w=r.spec={code:"beachfront",supportedMediaTypes:[s.VIDEO,s.BANNER],isBidRequestValid:function(e){return!(!W(e)&&!P(e))},buildRequests:function(e,r){var n=[],t=e.filter((function(e){return W(e)})),i=e.filter((function(e){return P(e)}));return t.forEach((function(e){n.push({method:"POST",url:d+E(e,"appId"),data:(function(e,r){var n=I(N(e)),t=(s=e,Object.keys(Object(s.params.video)).filter((function(e){return(0,v.default)(m,e)})).reduce((function(e,r){return e[r]=s.params.video[r],e}),{})),i=E(e,"appId"),o=E(e,"bidfloor"),d=f.getTopWindowLocation(),a={isPrebid:!0,appId:i,domain:document.location.hostname,id:f.getUniqueIdentifierStr(),imp:[{video:l({w:n.w,h:n.h,mimes:b},t),bidfloor:o,secure:"https:"===d.protocol?1:0}],site:{page:d.href,domain:d.hostname},device:{ua:navigator.userAgent,language:navigator.language,devicetype:A()?1:new RegExp("(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\\.tv|viera|nettv|roku|\\bdtv\\b|sonydtv|inettvbrowser|\\btv\\b)","i").test(navigator.userAgent)?3:2,dnt:O()?1:0,js:1,geo:{}},regs:{},user:{},cur:["USD"]};var s;if(r&&r.gdprConsent){var u=r.gdprConsent,c=u.gdprApplies,p=u.consentString;a.regs.ext={gdpr:c?1:0},a.user.ext={consent:p}}return a})(e,r),bidRequest:e})})),i.length&&n.push({method:"POST",url:h,data:(function(e,r){var n=f.getTopWindowLocation(),t=f.getTopWindowReferrer(),i={slots:e.map((function(e){return{slot:e.adUnitCode,id:S(e,"appId"),bidfloor:S(e,"bidfloor"),sizes:(r=e,y(f.deepAccess(r,"mediaTypes.banner.sizes")||r.sizes))};var r})),page:n.href,domain:n.hostname,search:n.search,secure:"https:"===n.protocol?1:0,referrer:t,ua:navigator.userAgent,deviceOs:(o=(0,u.default)([{s:"Android",r:/Android/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"Linux",r:/(Linux|X11)/},{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"UNIX",r:/UNIX/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],(function(e){return e.r.test(navigator.userAgent)})),o?o.s:"unknown"),isMobile:A()?1:0,dnt:O()?1:0,adapterVersion:c,adapterName:p};var o;if(r&&r.gdprConsent){var d=r.gdprConsent,a=d.gdprApplies,s=d.consentString;i.gdpr=a?1:0,i.gdprConsent=s}return i})(i,r),bidRequest:i}),n},interpretResponse:function(e,r){var n,t,i=r.bidRequest;if(e=e.body,_(i)){if(!e||!e.url||!e.bidPrice)return f.logWarn("No valid video bids from "+w.code+" bidder"),[];var o=I(N(i)),d=f.deepAccess(i,"mediaTypes.video.context");return{requestId:i.bidId,bidderCode:w.code,vastUrl:e.url,cpm:e.bidPrice,width:o.w,height:o.h,creativeId:e.cmpId,renderer:"outstream"===d?(n=i,t=a.Renderer.install({id:n.bidId,url:g,loaded:!1}),t.setRender(T),t):null,mediaType:s.VIDEO,currency:"USD",netRevenue:!0,ttl:300}}return e&&e.length?e.map((function(r){return{requestId:(0,u.default)(i,(function(e){return e.adUnitCode===r.slot})).bidId,bidderCode:w.code,ad:r.adm,creativeId:r.crid,cpm:r.price,width:r.w,height:r.h,mediaType:s.BANNER,currency:"USD",netRevenue:!0,ttl:300}})):(f.logWarn("No valid banner bids from "+w.code+" bidder"),[])}};function T(e){e.renderer.push((function(){window.Beachfront.Player(e.adUnitCode,{ad_tag_url:e.vastUrl,width:e.width,height:e.height,expand_in_view:!1,collapse_on_complete:!0})}))}function I(e){return e&&e.length?e[0]:{w:void 0,h:void 0}}function y(e){return f.parseSizesInput(e).map((function(e){var r=e.split("x"),n=o(r,2),t=n[0],i=n[1];return{w:parseInt(t,10)||void 0,h:parseInt(i,10)||void 0}}))}function N(e){return y(f.deepAccess(e,"mediaTypes.video.playerSize")||e.sizes)}function A(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)}function O(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNoTrack||"yes"===navigator.doNotTrack}function _(e){return f.deepAccess(e,"mediaTypes.video")}function E(e,r){return f.deepAccess(e,"params.video."+r)||f.deepAccess(e,"params."+r)}function S(e,r){return f.deepAccess(e,"params.banner."+r)||f.deepAccess(e,"params."+r)}function W(e){return _(e)&&E(e,"appId")&&E(e,"bidfloor")}function P(e){return r=e,(f.deepAccess(r,"mediaTypes.banner")||!_(r))&&S(e,"appId")&&S(e,"bidfloor");var r}(0,t.registerBidder)(w)},139:function(e,r){}},[137]);
pbjsChunk([1],{158:function(n,t,e){n.exports=e(159)},159:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allowAuction=t.consentTimeout=t.userCMP=void 0,t.requestBidsHook=C,t.resetConsentData=function(){m=void 0,a.gdprDataHandler.setConsentData(null)},t.setConfig=x;var d=(function(n){{if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}})(e(0)),o=e(2),a=e(8),i=r(e(6)),l=r(e(160));function r(n){return n&&n.__esModule?n:{default:n}}var s="iab",c=1e4,u=!0,f=t.userCMP=void 0,g=t.consentTimeout=void 0,p=t.allowAuction=void 0,m=void 0,v={iab:function(n,s,c){var t=(function(){var t={};function e(){t.getConsentData&&t.getVendorConsents&&n(t,c)}return{consentDataCallback:function(n){t.getConsentData=n,e()},vendorConsentsCallback:function(n){t.getVendorConsents=n,e()}}})(),u={},e=void 0;try{e=window.__cmp||d.getWindowTop().__cmp}catch(n){}if(d.isFn(e))e("getConsentData",null,t.consentDataCallback),e("getVendorConsents",null,t.vendorConsentsCallback);else if(window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp)i("getConsentData",t.consentDataCallback),i("getVendorConsents",t.vendorConsentsCallback);else{for(var o=window,a=void 0;!a;){try{o.frames.__cmpLocator&&(a=o)}catch(n){}if(o===window.top)break;o=o.parent}r("getConsentData",a,t.consentDataCallback),r("getVendorConsents",a,t.vendorConsentsCallback)}function i(o,a){var n=c.adUnits,t=1,e=1;if(Array.isArray(n)&&0<n.length){var i=d.getAdUnitSizes(n[0]);t=i[0][0],e=i[0][1]}window.$sf.ext.register(t,e,(function(n,t){if("cmpReturn"===n){var e="getConsentData"===o?t.vendorConsentData:t.vendorConsents;a(e)}})),window.$sf.ext.cmp(o)}function r(n,i,t){function e(n){var t="string"==typeof n.data&&(0,l.default)(n.data,"cmpReturn")?JSON.parse(n.data):n.data;if(t.__cmpReturn&&t.__cmpReturn.callId){var e=t.__cmpReturn;void 0!==u[e.callId]&&(u[e.callId](e.returnValue,e.success),delete u[e.callId])}}function r(){window.removeEventListener("message",e,!1)}window.__cmp=function(n,t,e){if(!i){r();return s("CMP not found",c)}var o=Math.random()+"",a={__cmpCall:{command:n,parameter:t,callId:o}};u[o]=e,i.postMessage(a,"*")},window.addEventListener("message",e,!1),window.__cmp(n,null,(function(n){r(),t(n)}))}}};function C(n,t){var e={context:this,args:arguments,nextFn:t,adUnits:n.adUnits||pbjs.adUnits,bidsBackHandler:n.bidsBackHandler,haveExited:!1,timer:null};return m?y(null,e):(0,i.default)(Object.keys(v),f)?(v[f].call(this,w,b,e),void(e.haveExited||(0===g?w(void 0,e):e.timer=setTimeout(function(n){b("CMP workflow exceeded timeout threshold.",n)}.bind(null,e),g)))):(d.logWarn("CMP framework ("+f+") is not a supported framework.  Aborting consentManagement module and resuming auction."),e.nextFn.apply(e.context,e.args))}function w(n,t){var e=n&&n.getConsentData&&n.getConsentData.gdprApplies;"boolean"==typeof e&&(!0!==e||d.isStr(n.getConsentData.consentData)&&d.isPlainObject(n.getVendorConsents)&&1<Object.keys(n.getVendorConsents).length)?(clearTimeout(t.timer),h(n),y(null,t)):b("CMP returned unexpected value during lookup process.",t,n)}function b(n,t,e){clearTimeout(t.timer),p&&h(void 0),y(n,t,e)}function h(n){m={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:void 0},a.gdprDataHandler.setConsentData(m)}function y(n,t,e){if(!1===t.haveExited){t.haveExited=!0;var o=t.context,a=t.args,i=t.nextFn;n?p?(d.logWarn(n+" Resuming auction without consent data as per consentManagement config.",e),i.apply(o,a)):(d.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():d.logError("Error executing bidsBackHandler")):i.apply(o,a)}}function x(n){d.isStr(n.cmpApi)?t.userCMP=f=n.cmpApi:(t.userCMP=f=s,d.logInfo("consentManagement config did not specify cmp.  Using system default setting ("+s+").")),d.isNumber(n.timeout)?t.consentTimeout=g=n.timeout:(t.consentTimeout=g=c,d.logInfo("consentManagement config did not specify timeout.  Using system default setting ("+c+").")),"boolean"==typeof n.allowAuctionWithoutConsent?t.allowAuction=p=n.allowAuctionWithoutConsent:(t.allowAuction=p=u,d.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting ("+u+").")),pbjs.requestBids.addHook(C,50)}o.config.getConfig("consentManagement",(function(n){return x(n.consentManagement)}))},160:function(n,t,e){e(161),n.exports=e(15).String.includes},161:function(n,t,e){"use strict";var o=e(16),a=e(162),i="includes";o(o.P+o.F*e(164)(i),"String",{includes:function(n){return!!~a(this,n,i).indexOf(n,1<arguments.length?arguments[1]:void 0)}})},162:function(n,t,e){var o=e(163),a=e(25);n.exports=function(n,t,e){if(o(t))throw TypeError("String#"+e+" doesn't accept regex!");return String(a(n))}},163:function(n,t,e){var o=e(17),a=e(24),i=e(26)("match");n.exports=function(n){var t;return o(n)&&(void 0!==(t=n[i])?!!t:"RegExp"==a(n))}},164:function(n,t,e){var o=e(26)("match");n.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(n){}}return!0}}},[158]);
pbjsChunk([0],{256:function(e,r,t){t(257),e.exports=t(263)},257:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),n=t(3),h=t(2),o=s(t(258)),i=s(t(260)),a=t(1);function s(e){return e&&e.__esModule?e:{default:e}}var p=[n.BANNER],c=100,f=60,l=!0,d=!0;0!==b.getTopWindowLocation().protocol.indexOf("https")&&(d=!1);var g=d?"https://as-sec.casalemedia.com/cygnus":"http://as.casalemedia.com/cygnus",y={JPY:1};function u(e){return(0,o.default)(e)&&2===e.length&&(0,i.default)(e[0])&&(0,i.default)(e[1])}var v=r.spec={code:"ix",supportedMediaTypes:p,isBidRequestValid:function(e){if(!u(e.params.size))return!1;if(!(function(e,r){if(u(e))return e[0]===r[0]&&e[1]===r[1];for(var t=0;t<e.length;t++)if(e[t][0]===r[0]&&e[t][1]===r[1])return!0;return!1})(e.sizes,e.params.size))return!1;if("string"!=typeof e.params.siteId)return!1;var r,t,n=e.params.hasOwnProperty("bidFloor"),o=e.params.hasOwnProperty("bidFloorCur");return!n&&!o||n&&o&&(r=e.params.bidFloor,t=e.params.bidFloorCur,Boolean("number"==typeof r&&"string"==typeof t&&t.match(/^[A-Z]{3}$/)))},buildRequests:function(e,r){for(var t,n,o=[],i=null,a=null,s=0;s<e.length;s++)i=e[s],(b.deepAccess(i,"mediaTypes.banner")||"banner"===i.mediaType||void 0===i.mediaType&&void 0===b.deepAccess(i,"mediaTypes.banner"))&&(n=void 0,(n={}).id=(t=i).bidId,n.banner={},n.banner.w=t.params.size[0],n.banner.h=t.params.size[1],n.banner.topframe=b.inIframe()?0:1,n.ext={},n.ext.sid=t.params.size[0]+"x"+t.params.size[1],n.ext.siteID=t.params.siteId,t.params.hasOwnProperty("bidFloor")&&t.params.hasOwnProperty("bidFloorCur")&&(n.bidfloor=t.params.bidFloor,n.bidfloorcur=t.params.bidFloorCur),a=n,o.push(a));var p={};if(p.id=e[0].bidderRequestId,p.imp=o,p.site={},p.site.page=b.getTopWindowUrl(),p.site.ref=b.getTopWindowReferrer(),p.ext={},p.ext.source="prebid",r&&r.gdprConsent){var d=r.gdprConsent;d.hasOwnProperty("gdprApplies")&&(p.regs={ext:{gdpr:d.gdprApplies?1:0}}),d.hasOwnProperty("consentString")&&(p.user={ext:{consent:d.consentString||""}})}var u={},c=h.config.getConfig("ix");if(c){if("object"===m(c.firstPartyData)){var f=c.firstPartyData,l="?";for(var y in f)f.hasOwnProperty(y)&&(l+=encodeURIComponent(y)+"="+encodeURIComponent(f[y])+"&");l=l.slice(0,-1),p.site.page+=l}"number"==typeof c.timeout&&(u.t=c.timeout)}return u.s=e[0].params.siteId,u.v=7.2,u.r=JSON.stringify(p),u.ac="j",u.sd=1,{method:"GET",url:g,data:u}},interpretResponse:function(e){var r=[],t=null;if(!e.hasOwnProperty("body")||!e.body.hasOwnProperty("seatbid"))return r;for(var n,o,i,a=e.body,s=a.seatbid,p=0;p<s.length;p++)if(s[p].hasOwnProperty("bid"))for(var d=s[p].bid,u=0;u<d.length;u++)n=d[u],o=a.cur,i=void 0,i={},y.hasOwnProperty(o)?i.cpm=n.price/y[o]:i.cpm=n.price/c,i.requestId=n.impid,i.width=n.w,i.height=n.h,i.ad=n.adm,i.dealId=b.deepAccess(n,"ext.dealid"),i.ttl=f,i.netRevenue=l,i.currency=o,i.creativeId=n.hasOwnProperty("crid")?n.crid:"-",t=i,r.push(t);return r}};(0,a.registerBidder)(v)},258:function(e,r,t){t(259),e.exports=t(15).Array.isArray},259:function(e,r,t){var n=t(16);n(n.S,"Array",{isArray:t(38)})},260:function(e,r,t){t(261),e.exports=t(15).Number.isInteger},261:function(e,r,t){var n=t(16);n(n.S,"Number",{isInteger:t(262)})},262:function(e,r,t){var n=t(17),o=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&o(e)===e}},263:function(e,r){}},[256]);
pbjsChunk([78],{270:function(e,r,t){t(271),e.exports=t(272)},271:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),u=t(2),n=t(1);var i=r.spec={code:"kargo",isBidRequestValid:function(e){return!(!e||!e.params)&&!!e.params.placementId},buildRequests:function(e,r){var t=u.config.getConfig("currency"),n=o({},{timeout:r.timeout,currency:t,cpmGranularity:1,cpmRange:{floor:0,ceil:20},adSlotIds:c._map(e,(function(e){return e.params.placementId}))},i._getAllMetadata()),a=encodeURIComponent(JSON.stringify(n));return o({},r,{method:"GET",url:"https://krk.kargo.com/api/v1/bid",data:"json="+a,currency:t})},interpretResponse:function(e,r){var t=e.body,n={};c._each(r.bids,(function(e){return n[e.params.placementId]=e}));var a=[];for(var o in t){var u=t[o];a.push({requestId:n[o].bidId,cpm:Number(u.cpm),width:u.width,height:u.height,ad:u.adm,ttl:300,creativeId:o,netRevenue:!0,currency:r.currency})}return a},_readCookie:function(e){var r=e+"=",t=document.cookie.split(";"),n=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){for(var i=u.value;" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(r))return i.substring(r.length,i.length)}}catch(e){a=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}return null},_getCrbIds:function(){try{var e=JSON.parse(decodeURIComponent(i._readCookie("krg_crb"))),r={};if(e&&e.v){var t=JSON.parse(atob(e.v));t&&t.syncIds&&(r=t.syncIds)}return r}catch(e){return{}}},_getUid:function(){try{var e=JSON.parse(decodeURIComponent(i._readCookie("krg_uid"))),r={};return e&&e.v&&(r=e.v),r}catch(e){return{}}},_getKruxUserId:function(){return i._getLocalStorageSafely("kxkar_user")},_getKruxSegments:function(){return i._getLocalStorageSafely("kxkar_segs")},_getKrux:function(){var e=i._getKruxSegments(),r=[];return e&&(r=e.split(",")),{userID:i._getKruxUserId(),segments:r}},_getLocalStorageSafely:function(e){try{return localStorage.getItem(e)}catch(e){return null}},_getUserIds:function(){var e=i._getUid(),r=i._getCrbIds();return{kargoID:e.userId,clientID:e.clientId,crbIDs:r,optOut:e.optOut}},_getAllMetadata:function(){return{userIDs:i._getUserIds(),krux:i._getKrux(),pageURL:window.location.href,rawCRB:i._readCookie("krg_crb")}}};(0,n.registerBidder)(i)},272:function(e,r){}},[270]);
pbjsChunk([62],{317:function(e,t,r){r(318),e.exports=r(319)},318:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.resetBoPixel=function(){f=!0};var d=r(2),n=r(1),c=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),u=r(14),p=r(3),l=r(12);var i=[p.BANNER,p.VIDEO],m="openx",h="hb_pb",v="2.1.1",f=!0;var a=t.spec={code:m,supportedMediaTypes:i,isBidRequestValid:function(e){return!(!e.params.unit||!e.params.delDomain)},buildRequests:function(e,a){if(0===e.length)return[];var s=[],t=e.reduce((function(e,t){var r;return r=t,c.deepAccess(r,"mediaTypes.video")||r.mediaType===p.VIDEO?e[0].push(t):e[1].push(t),e}),[[],[]]),r=o(t,2),n=r[0],i=r[1];return 0<i.length&&s.push(function(e,t){var r=g(e,t);r.auid=c._map(e,(function(e){return e.params.unit})).join(","),r.aus=c._map(e,(function(e){return c.parseSizesInput(e.sizes).join(",")})).join("|"),r.bc=e[0].params.bc||h+"_"+v;var n=[],a=!1;e.forEach((function(i){if(i.params.customParams){var e=c._map(Object.keys(i.params.customParams),(function(e){return t=e,r=i.params.customParams,n=r[t],c.isArray(n)&&(n=n.join(",")),(t.toLowerCase()+"="+n.toLowerCase()).replace("+",".").replace("/","_");var t,r,n})),t=window.btoa(e.join("&"));a=!0,n.push(t)}else n.push("")})),a&&(r.tps=n.join(","));var i=[],s=!1;e.forEach((function(e){e.params.customFloor?(i.push(1e3*e.params.customFloor),s=!0):i.push(0)})),s&&(r.aumfs=i.join(","));return{method:"GET",url:"//"+e[0].params.delDomain+"/w/1.0/arj",data:r,payload:{bids:e,startTime:new Date}}}(i,a)),0<n.length&&n.forEach((function(e){var t,r,n,i;s.push((r=a,n="//"+(t=e).params.delDomain+"/v/1.0/avjp",i=(function(e,t){var r=g([e],t),n=c.deepAccess(e,"params.video")||{},i=c.deepAccess(e,"mediaTypes.video.context"),a=c.deepAccess(e,"mediaTypes.video.playerSize"),s=void 0,o=void 0;c.isArray(e.sizes)&&2===e.sizes.length&&!c.isArray(e.sizes[0])?(s=parseInt(e.sizes[0],10),o=parseInt(e.sizes[1],10)):c.isArray(e.sizes)&&c.isArray(e.sizes[0])&&2===e.sizes[0].length?(s=parseInt(e.sizes[0][0],10),o=parseInt(e.sizes[0][1],10)):c.isArray(a)&&2===a.length&&(s=parseInt(a[0],10),o=parseInt(a[1],10));Object.keys(n).forEach((function(e){"openrtb"===e?(n[e].w=s||n[e].w,n[e].v=o||n[e].v,r[e]=JSON.stringify(n[e])):e in r||"url"===e||(r[e]=n[e])})),r.auid=e.params.unit,r.vwd=s||n.vwd,r.vht=o||n.vht,"outstream"===i&&(r.vos="101");n.mimes&&(r.vmimes=n.mimes);return r})(t,r),{method:"GET",url:n,data:i,payload:{bid:t,startTime:new Date}}))})),s},interpretResponse:function(e,t){var r=e.body;return(/avjp$/.test(t.url)?p.VIDEO:p.BANNER)===p.VIDEO?(function(e,t){var r=t.bid,n=t.startTime,i=[];if(void 0!==e&&""!==e.vastUrl&&""!==e.pub_rev){var a=(0,l.parse)(e.vastUrl).search||{},s={};s.requestId=r.bidId,s.bidderCode=m,s.ttl=300,s.netRevenue=!0,s.currency=e.currency,s.cpm=Number(e.pub_rev)/1e3,s.width=e.width,s.height=e.height,s.creativeId=e.adid,s.vastUrl=e.vastUrl,s.mediaType=p.VIDEO,e.ph=a.ph,e.colo=a.colo,e.ts=a.ts,i.push(s),y(p.VIDEO,e,n)}return i})(r,t.payload):(function(e,t){for(var r=t.bids,n=t.startTime,i=e.ads.ad,a=[],s=0;s<i.length;s++){var o=i[s],d=parseInt(o.idx,10),c={};if(c.requestId=r[d].bidId,o.pub_rev){c.cpm=Number(o.pub_rev)/1e3;var u=o.creative[0];u&&(c.width=u.width,c.height=u.height),c.creativeId=u.id,c.ad=o.html,o.deal_id&&(c.dealId=o.deal_id),c.ttl=300,c.netRevenue=!0,c.currency=o.currency,o.tbd&&(c.tbd=o.tbd),c.ts=o.ts,a.push(c),y(p.BANNER,o,n)}}return a})(r,t.payload)},getUserSyncs:function(e,t){if(e.iframeEnabled)return[{type:"iframe",url:c.deepAccess(t,"0.body.ads.pixels")||c.deepAccess(t,"0.body.pixels")||"//u.openx.net/w/1.0/pd"}]}};function b(t){for(var e in t)t.hasOwnProperty(e)&&(t[e]||delete t[e]);return c._map(Object.keys(t),(function(e){return e+"="+t[e]})).join("&")}function g(e,t){var r=c.inIframe(),n=void 0;if(n={ju:d.config.getConfig("pageUrl")||c.getTopWindowUrl(),jr:c.getTopWindowReferrer(),ch:document.charSet||document.characterSet,res:screen.width+"x"+screen.height+"x"+screen.colorDepth,ifr:r,tz:(new Date).getTimezoneOffset(),tws:(function(e){var t=void 0,r=void 0,n=window,i=document,a=i.documentElement,s=void 0;if(e){try{n=window.top,i=window.top.document}catch(e){return}a=i.documentElement,s=i.body,t=n.innerWidth||a.clientWidth||s.clientWidth,r=n.innerHeight||a.clientHeight||s.clientHeight}else a=i.documentElement,t=n.innerWidth||a.clientWidth,r=n.innerHeight||a.clientHeight;return t+"x"+r})(r),be:1,dddid:c._map(e,(function(e){return e.transactionId})).join(","),nocache:(new Date).getTime()},c.deepAccess(t,"gdprConsent")){var i=t.gdprConsent;void 0!==i.consentString&&(n.gdpr_consent=i.consentString),void 0!==i.gdprApplies&&(n.gdpr=i.gdprApplies?1:0),"iab"===d.config.getConfig("consentManagement.cmpApi")&&(n.x_gdpr_f=1)}return n}function y(e,t,r){if(f){f=!1;var n=d.config.getConfig("bidderTimeout"),i=void 0;window.PREBID_TIMEOUT&&(n=Math.min(window.PREBID_TIMEOUT,n));var a={bd:+new Date-r,bp:t.pub_rev,br:"0",bs:c.getTopWindowLocation().hostname,bt:n,ts:t.ts};if(a.br=a.bt<a.bd?"t":"p",e===p.VIDEO){var s=(0,l.parse)(t.colo);a.ph=t.ph,i="//"+s.hostname+"/w/1.0/bo?"+b(a)}else{var o=c.deepAccess(t,"creative.0.tracking.impression").match(/([^?]+\/)ri\?/);o&&1<o.length&&(i=o[1]+"bo?"+b(a))}i&&u.userSync.registerSync("image",m,i)}}(0,n.registerBidder)(a)},319:function(e,t){}},[317]);
pbjsChunk([52],{351:function(e,r,a){a(352),e.exports=a(353)},352:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r}})(a(0)),t=a(1);var l=a(4),u="USD",c=1,g=void 0,m={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},n={1:"PMP",5:"PREF",6:"PMPG"},f=0;function b(e,r){if(!p.isStr(r))return r&&p.logWarn("PubMatic: Ignoring param key: "+e+", expects string-value, found "+(void 0===r?"undefined":s(r))),g;switch(e){case"pmzoneid":return r.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(r)||g;case"yob":return parseInt(r)||g;default:return r}}function h(e){var r;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(r=e.params.adSlot,p.isStr(r)?r.replace(/^\s+/g,"").replace(/\s+$/g,""):"");var a=e.params.adSlot,t=a.split(":");a=t[0],2==t.length&&(e.params.adUnitIndex=t[1]),2==(t=a.split("@")).length?(e.params.adUnit=t[0],2==(t=t[1].split("x")).length?(e.params.width=parseInt(t[0]),e.params.height=parseInt(t[1])):p.logWarn("AdSlot Error: adSlot not in required format")):p.logWarn("AdSlot Error: adSlot not in required format")}var o=r.spec={code:"pubmatic",isBidRequestValid:function(e){return!(!e||!e.params)&&(p.isStr(e.params.publisherId)?!!p.isStr(e.params.adSlot)||(p.logWarn("PubMatic: adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),!1):(p.logWarn("PubMatic Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),!1))},buildRequests:function(e,r){var a,t,n,o,i=((a={}).pageURL=p.getTopWindowUrl(),a.refURL=p.getTopWindowReferrer(),a),d=(t=i,{id:""+(new Date).getTime(),at:c,cur:[u],imp:[],site:{page:t.pageURL,ref:t.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}});if(e.forEach((function(e){var r;(h(e),e.params.adSlot&&e.params.adUnit&&e.params.adUnitIndex&&e.params.width&&e.params.height)?(i.pubId=i.pubId||e.params.publisherId,(i=(function(e,r){var a,t,n;for(a in r.kadpageurl||(r.kadpageurl=r.pageURL),m)m.hasOwnProperty(a)&&(t=e[a])&&("object"===(void 0===(n=m[a])?"undefined":s(n))&&(t=n.f(t,r)),p.isStr(t)?r[a]=t:p.logWarn("PubMatic: Ignoring param : "+a+" with value : "+m[a]+", expects string-value, found "+(void 0===t?"undefined":s(t))));return r})(e.params,i)).transactionId=e.transactionId,d.imp.push({id:(r=e).bidId,tagid:r.params.adUnit,bidfloor:b("kadfloor",r.params.kadfloor),secure:"https:"===window.location.protocol?1:0,banner:{pos:0,w:r.params.width,h:r.params.height,topframe:p.inIframe()?0:1},ext:{pmZoneId:b("pmzoneid",r.params.pmzoneid)}})):p.logWarn("PubMatic: Skipping the non-standard adslot:",e.params.adSlot,e)})),0!=d.imp.length)return d.site.publisher.id=i.pubId.trim(),f=i.pubId.trim(),d.ext.wrapper={},d.ext.wrapper.profile=parseInt(i.profId)||g,d.ext.wrapper.version=parseInt(i.verId)||g,d.ext.wrapper.wiid=i.wiid||g,d.ext.wrapper.wv=l.REPO_AND_VERSION,d.ext.wrapper.transactionId=i.transactionId,d.ext.wrapper.wp="pbjs",d.user.gender=i.gender?i.gender.trim():g,d.user.geo={},r&&r.gdprConsent&&(d.user.ext={consent:r.gdprConsent.consentString},d.regs={ext:{gdpr:r.gdprConsent.gdprApplies?1:0}}),d.user.geo.lat=b("lat",i.lat),d.user.geo.lon=b("lon",i.lon),d.user.yob=b("yob",i.yob),d.device.geo={},d.device.geo.lat=b("lat",i.lat),d.device.geo.lon=b("lon",i.lon),d.site.page=i.kadpageurl.trim()||d.site.page.trim(),d.site.domain=(n=d.site.page,(o=document.createElement("a")).href=n,o.hostname),{method:"POST",url:"//hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(d)}},interpretResponse:function(e,r){var a=[];try{e.body&&e.body.seatbid&&p.isArray(e.body.seatbid)&&e.body.seatbid.forEach((function(e){e.bid&&p.isArray(e.bid)&&e.bid.forEach((function(e){var r={requestId:e.impid,cpm:(parseFloat(e.price)||0).toFixed(2),width:e.w,height:e.h,creativeId:e.crid||e.id,dealId:e.dealid,currency:u,netRevenue:!1,ttl:300,referrer:p.getTopWindowUrl(),ad:e.adm};e.ext&&e.ext.deal_channel&&(r.dealChannel=n[e.ext.deal_channel]||null),a.push(r)}))}))}catch(e){p.logError(e)}return a},getUserSyncs:function(e,r,a){var t="//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p="+f;if(a&&(t+="&gdpr="+(a.gdprApplies?1:0),t+="&gdpr_consent="+encodeURIComponent(a.consentString||"")),e.iframeEnabled)return[{type:"iframe",url:t}];p.logWarn("PubMatic: Please enable iframe based user sync.")}};(0,t.registerBidder)(o)},353:function(e,r){}},[351]);
pbjsChunk([38],{392:function(e,r,t){t(393),e.exports=t(394)},393:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var u=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,r){var t=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}return t})(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.masSizeOrdering=o,r.resetUserSync=function(){d=!1};var l=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),i=t(1),f=t(2),y=t(3);var v="pbjs_lite_v1.15.0";var a="//fastlane.rubiconproject.com/a/api/fastlane.json",g={1:"468x60",2:"728x90",5:"120x90",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",94:"970x310",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",159:"320x250",195:"600x300",199:"640x200",213:"1030x590",214:"980x360",232:"580x400"};l._each(g,(function(e,r){return g[e]=r}));var s=r.spec={code:"rubicon",aliases:["rubiconLite"],supportedMediaTypes:[y.BANNER,y.VIDEO],isBidRequestValid:function(e){if("object"!==p(e.params))return!1;var r=e.params;return!!/^\d+$/.test(r.accountId)&&("outstream"===l.deepAccess(e,"mediaTypes."+y.VIDEO+".context")&&l.logWarn("Warning: outstream video for Rubicon Client Adapter is not supported yet"),s.hasVideoMediaType(e)&&void 0!==l.deepAccess(e,"mediaTypes."+y.BANNER)&&l.logWarn("Warning: instream video and banner requested for same ad unit, continuing with video instream request"),("video"!==e.mediaType||void 0!==l.deepAccess(e,"params.video.size_id"))&&(!(e.mediaTypes&&!s.hasVideoMediaType(e)&&void 0===e.mediaTypes.banner)&&!(b(e).length<1)))},buildRequests:function(e,o){var r=[],t=e.filter(s.hasVideoMediaType).map((function(e){e.startTime=(new Date).getTime();var r=e.params,t=b(e),i={page_url:_(e),resolution:m(),account_id:r.accountId,integration:v,"x_source.tid":e.transactionId,timeout:o.timeout-(Date.now()-o.auctionStart+500),stash_creatives:!0,ae_pass_through_parameters:r.video.aeParams,slots:[]},n={site_id:r.siteId,zone_id:r.zoneId,position:h(r.position),floor:.01<parseFloat(r.floor)?r.floor:.01,element_id:e.adUnitCode,name:e.adUnitCode,language:r.video.language,width:t[0],height:t[1],size_id:r.video.size_id};return r.inventory&&"object"===p(r.inventory)&&(n.inventory=r.inventory),r.keywords&&Array.isArray(r.keywords)&&(n.keywords=r.keywords),r.visitor&&"object"===p(r.visitor)&&(n.visitor=r.visitor),i.slots.push(n),o.gdprConsent&&("boolean"==typeof o.gdprConsent.gdprApplies&&(i.gdpr=Number(o.gdprConsent.gdprApplies)),i.gdpr_consent=o.gdprConsent.consentString),{method:"POST",url:"//fastlane-adv.rubiconproject.com/v1/auction/video",data:i,bidRequest:e}}));if(!0!==f.config.getConfig("rubicon.singleRequest"))r=t.concat(e.filter((function(e){return!s.hasVideoMediaType(e)})).map((function(e){var i=s.createSlotParams(e,o);return{method:"GET",url:a,data:s.getOrderedParams(i).reduce((function(e,r){var t=i[r];return l.isStr(t)&&""!==t||l.isNumber(t)?""+e+r+"="+encodeURIComponent(t)+"&":e}),"")+"slots=1&rand="+Math.random(),bidRequest:e}})));else{var n=e.filter((function(e){return!s.hasVideoMediaType(e)})).reduce((function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e}),{});r=t.concat(Object.keys(n).map((function(e){var r=n[e];10<r.length&&(l.logWarn("single request mode has a limit of 10 bids: "+(r.length-10)+" bids were not sent"),r=r.slice(0,10));var i=s.combineSlotUrlParams(r.map((function(e){return s.createSlotParams(e,o)})));return{method:"GET",url:a,data:s.getOrderedParams(i).reduce((function(e,r){var t=i[r];return l.isStr(t)&&""!==t||l.isNumber(t)?""+e+r+"="+encodeURIComponent(t)+"&":e}),"")+"slots="+r.length+"&rand="+Math.random(),bidRequest:r}})))}return r},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","rf","dt.id","dt.keyv","dt.pref","p_geo.latitude","p_geo.longitude","kw"].concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(["tk_flint","x_source.tid","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(n){if(1===n.length)return n[0];var i=n.reduce((function(r,t,i){return Object.keys(t).forEach((function(e){r.hasOwnProperty(e)||(r[e]=new Array(n.length)),r[e].splice(i,1,t[e])})),r}),{}),o=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(i).forEach((function(e){var r=i[e].join(";"),t=r.match(o);i[e]=t?t[1]:r})),i},createSlotParams:function(e,r){e.startTime=(new Date).getTime();var t=e.params,i=b(e),n=t.latLong||[],o=u(n,2),a=o[0],s=o[1],d={account_id:t.accountId,site_id:t.siteId,zone_id:t.zoneId,size_id:i[0],alt_size_ids:i.slice(1).join(",")||void 0,p_pos:h(t.position),rp_floor:.01<(t.floor=parseFloat(t.floor))?t.floor:.01,rp_secure:"https:"===location.protocol?"1":"0",tk_flint:v,"x_source.tid":e.transactionId,p_screen_res:m(),kw:Array.isArray(t.keywords)?t.keywords.join(","):"",tk_user_key:t.userId,"p_geo.latitude":isNaN(parseFloat(a))?void 0:parseFloat(a).toFixed(4),"p_geo.longitude":isNaN(parseFloat(s))?void 0:parseFloat(s).toFixed(4),"tg_fl.eid":e.code,rf:_(e)};r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(d.gdpr=Number(r.gdprConsent.gdprApplies)),d.gdpr_consent=r.gdprConsent.consentString),null!==t.visitor&&"object"===p(t.visitor)&&Object.keys(t.visitor).forEach((function(e){d["tg_v."+e]=t.visitor[e].toString()})),null!==t.inventory&&"object"===p(t.inventory)&&Object.keys(t.inventory).forEach((function(e){d["tg_i."+e]=t.inventory[e].toString()}));var c=(function(){var e=(r=window.DigiTrust&&(f.config.getConfig("digiTrustId")||window.DigiTrust.getUser({member:"T9QSFKPDN9"})),r&&r.success&&r.identity||null);var r;if(!e||e.privacy&&e.privacy.optout)return[];return{"dt.id":e.id,"dt.keyv":e.keyv,"dt.pref":0}})();return Object.keys(c).forEach((function(e){d[e]=c[e]})),d},hasVideoMediaType:function(e){return void 0!==l.deepAccess(e,"params.video.size_id")&&(e.mediaType===y.VIDEO||"instream"===l.deepAccess(e,"mediaTypes."+y.VIDEO+".context"))},interpretResponse:function(d,e){var c=e.bidRequest;if(!(d=d.body)||"object"!==(void 0===d?"undefined":p(d)))return[];var r=d.ads;return"object"===(void 0===c?"undefined":p(c))&&!Array.isArray(c)&&s.hasVideoMediaType(c)&&"object"===(void 0===r?"undefined":p(r))&&(r=r[c.adUnitCode]),!Array.isArray(r)||r.length<1?[]:r.reduce((function(e,r,t){if("ok"!==r.status)return e;var i,n=Array.isArray(c)?c[t]:c;if(n&&"object"===(void 0===n?"undefined":p(n))){var o={requestId:n.bidId,currency:"USD",creativeId:r.creative_id,cpm:r.cpm||0,dealId:r.deal,ttl:300,netRevenue:f.config.getConfig("rubicon.netRevenue")||!1,rubicon:{advertiserId:r.advertiser,networkId:r.network}};if(r.creative_type&&(o.mediaType=r.creative_type),r.creative_type===y.VIDEO)o.width=n.params.video.playerWidth,o.height=n.params.video.playerHeight,o.vastUrl=r.creative_depot_url,o.impression_id=r.impression_id,o.videoCacheKey=r.impression_id,o.rubiconAdId=r.ad_id,o.rubiconAdvertiserId=r.advertiser,o.descriptionUrl=r.impression_id;else{o.ad=(i=r.script,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"+r.impression_id+"'>\n<script type='text/javascript'>"+i+"<\/script>\n</div>\n</body>\n</html>");var a=g[r.size_id].split("x").map((function(e){return Number(e)})),s=u(a,2);o.width=s[0],o.height=s[1]}o.rubiconTargeting=(Array.isArray(r.targeting)?r.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:n.adUnitCode}),e.push(o)}else l.logError("bidRequest undefined at index position:"+t,c,d);return e}),[]).sort((function(e,r){return(r.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,r,t){if(!d&&e.iframeEnabled){var i="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr="+Number(t.gdprApplies)+"&gdpr_consent="+t.consentString:i+="?gdpr_consent="+t.consentString),d=!0,{type:"iframe",url:"https://eus.rubiconproject.com/usync.html"+i}}}};function m(){return[window.screen.width,window.screen.height].join("x")}function _(e){var r=f.config.getConfig("pageUrl");return e.params.referrer?r=e.params.referrer:r||(r=l.getTopWindowUrl()),e.params.secure?r.replace(/^http:/i,"https:"):r}function b(e){var r=e.params;if(s.hasVideoMediaType(e)){var t=[];return r.video&&r.video.playerWidth&&r.video.playerHeight?t=[r.video.playerWidth,r.video.playerHeight]:Array.isArray(l.deepAccess(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?t=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&0<e.sizes.length&&Array.isArray(e.sizes[0])&&1<e.sizes[0].length&&(t=e.sizes[0]),t}var i=[];return Array.isArray(r.sizes)?i=r.sizes:void 0!==l.deepAccess(e,"mediaTypes.banner.sizes")?i=n(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&0<e.sizes.length?i=n(e.sizes):l.logWarn("Warning: no sizes are setup or found"),o(i)}function n(e){return l.parseSizesInput(e).reduce((function(e,r){var t=parseInt(g[r],10);return t&&e.push(t),e}),[])}function h(e){return"atf"===e||"btf"===e?e:"unknown"}function o(e){var n=[15,2,9];return e.sort((function(e,r){var t=n.indexOf(e),i=n.indexOf(r);return-1<t||-1<i?-1===t?1:-1===i?-1:t-i:e-r}))}var d=!1;(0,i.registerBidder)(s)},394:function(e,r){}},[392]);
pbjs.processQueue();

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var get = __webpack_require__(54);
module.exports = __webpack_require__(7).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(25);
module.exports = __webpack_require__(68);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(35);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(7).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(25);
module.exports = __webpack_require__(71);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(16);
var $getOwnPropertyDescriptor = __webpack_require__(36).f;

__webpack_require__(43)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var $Object = __webpack_require__(7).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(34);
var perform = __webpack_require__(51);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(7);
var global = __webpack_require__(9);
var speciesConstructor = __webpack_require__(53);
var promiseResolve = __webpack_require__(50);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(8)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var core = __webpack_require__(7);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(12);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var macrotask = __webpack_require__(52).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(21)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(8)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(10);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(84);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(10);
var toLength = __webpack_require__(64);
var getIterFn = __webpack_require__(54);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(9);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(35);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(86);
var forOf = __webpack_require__(85);
var speciesConstructor = __webpack_require__(53);
var task = __webpack_require__(52).set;
var microtask = __webpack_require__(81)();
var newPromiseCapabilityModule = __webpack_require__(34);
var perform = __webpack_require__(51);
var promiseResolve = __webpack_require__(50);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(80)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(79)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(78)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(25);
__webpack_require__(22);
__webpack_require__(87);
__webpack_require__(77);
__webpack_require__(76);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(40) });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(10);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(20)(Function.call, __webpack_require__(36).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(11);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(92).set });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(56).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(57);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(28)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(19)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(12);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(59);
var META = __webpack_require__(101).KEY;
var $fails = __webpack_require__(19);
var shared = __webpack_require__(45);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(28);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(39);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(100);
var isArray = __webpack_require__(99);
var anObject = __webpack_require__(10);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(40);
var gOPNExt = __webpack_require__(98);
var $GOPD = __webpack_require__(36);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(29);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(57).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(55);
__webpack_require__(97);
__webpack_require__(96);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(106);
var step = __webpack_require__(105);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(12) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var defined = __webpack_require__(48);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(22);
module.exports = __webpack_require__(39).f('iterator');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(49);
var $getPrototypeOf = __webpack_require__(62);

__webpack_require__(43)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(64);
var toAbsoluteIndex = __webpack_require__(118);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(49);
var $keys = __webpack_require__(29);

__webpack_require__(43)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(7).Object.keys;


/***/ })
/******/ ]);