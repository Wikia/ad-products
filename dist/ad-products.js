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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
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

var _defineProperty = __webpack_require__(130);

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

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(117);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(113);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(70);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(70);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(10);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(54)('wks');
var uid = __webpack_require__(39);
var Symbol = __webpack_require__(12).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(91);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var core = __webpack_require__(8);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(20);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(75);
var toPrimitive = __webpack_require__(50);
var dP = Object.defineProperty;

exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(18) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(76);
var defined = __webpack_require__(58);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(146);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(137);

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
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(60);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(139)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(74)(String, 'String', function (iterated) {
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(77);
var enumBugKeys = __webpack_require__(53);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(58);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
var global = __webpack_require__(12);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

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
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {"CROSS":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.707 4.293a.999.999 0 0 0-1.414 0L12 10.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a.999.999 0 1 0 1.414 1.414L12 13.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l6.293-6.293a.999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></svg>","LEARN_MORE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"><g transform=\"translate(-753.000000, -1764.000000)\" fill-rule=\"nonzero\"><g transform=\"translate(153.000000, 1746.000000)\"><g transform=\"translate(5.000000, 0.000000)\"><g transform=\"translate(459.000000, 0.000000)\"><g transform=\"translate(136.000000, 18.000000)\"><polygon points=\"24 0 15 0 18.4395 3.4395 9.033 12.846 11.154 14.967 20.5605 5.5605 24 9\"></polygon><path d=\"M19.5,24 L1.5,24 C0.672,24 0,23.328 0,22.5 L0,4.5 C0,3.672 0.672,3 1.5,3 L10.5,3 L10.5,6 L3,6 L3,21 L18,21 L18,13.5 L21,13.5 L21,22.5 C21,23.328 20.328,24 19.5,24 Z\"></path></g></g></g></g></g></g></svg>","PAUSE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><rect width=\"7\" height=\"22\" rx=\"1\" x=\"3\" y=\"1\"></rect><rect x=\"14\" width=\"7\" height=\"22\" rx=\"1\" y=\"1\"></rect></g></svg>","PLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.69 12.6L5.143 22.867a.722.722 0 0 1-.753.05.733.733 0 0 1-.391-.65V1.733c0-.274.15-.524.391-.65a.724.724 0 0 1 .753.05l14.545 10.266a.734.734 0 0 1 0 1.201z\" fill-rule=\"evenodd\"></path></svg>","REPLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 23c6.065 0 11-4.863 11-10.84a.992.992 0 0 0-1-.985c-.553 0-1 .44-1 .986 0 4.89-4.037 8.868-9 8.868s-9-3.978-9-8.868c0-4.89 4.037-8.869 9-8.869a8.991 8.991 0 0 1 6.975 3.292l-3.794-.501a.996.996 0 0 0-1.124.845.987.987 0 0 0 .858 1.108l5.946.785a.996.996 0 0 0 1.124-.845l.797-5.86a.987.987 0 0 0-.858-1.107.994.994 0 0 0-1.124.846l-.446 3.28A10.997 10.997 0 0 0 12 1.322c-6.065 0-11 4.862-11 10.839C1 18.137 5.935 23 12 23\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.5 9H8V2H5v4H1v3h4.5zm13 0H16V2h3v4h4v3h-4.5zm-13 6H8v7H5v-4H1v-3h4.5zm13 0H16v7h3v-4h4v-3h-4.5z\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.5 22H23v-7h-3v4h-4v3h5.5zM23 3.5V9h-3V5h-4V2h7v1.5zm-22 17V15h3v4h4v3H1v-1.5zM2.5 2H1v7h3V5h4V2H2.5z\" fill-rule=\"evenodd\"/></svg>","VOLUME_OFF":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_off_button</title><circle class=\"cls-1\" cx=\"14.06\" cy=\"13.96\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume-off\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.25,9.17l-3.79,4.11H6.84c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Fill-1\" class=\"cls-2\" d=\"M22.91,16.21l3-3a.92.92,0,1,0-1.3-1.3l-3,3-3-3a.92.92,0,1,0-1.3,1.3l3,3-3,3a.92.92,0,1,0,1.3,1.3l3-3,3,3a.92.92,0,1,0,1.3-1.3Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","VOLUME_ON":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_on_button</title><circle class=\"cls-1\" cx=\"13.96\" cy=\"14.06\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.24,9.17l-3.79,4.11H6.82c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-2\" data-name=\"Shape\" class=\"cls-2\" d=\"M19.18,19.33a4.39,4.39,0,0,0,0-6.19.71.71,0,0,0-1,1,3,3,0,0,1,0,4.19.71.71,0,0,0,1,1Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-3\" data-name=\"Shape\" class=\"cls-2\" d=\"M23.3,16.23a6.19,6.19,0,0,0-1.81-4.39.71.71,0,1,0-1,1,4.81,4.81,0,0,1,0,6.79.71.71,0,1,0,1,1,6.19,6.19,0,0,0,1.81-4.39Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","HIVI_VOLUME_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zM20.305 12l2.425-2.425a.922.922 0 1 0-1.306-1.305l-2.425 2.424-2.423-2.424a.923.923 0 0 0-1.306 1.305L17.695 12l-2.425 2.425a.922.922 0 1 0 1.306 1.304L19 13.306l2.425 2.423a.92.92 0 0 0 1.306 0 .922.922 0 0 0 0-1.304L20.305 12z\" fill-rule=\"evenodd\"></path></svg>","HIVI_VOLUME_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zm11.612 8.524a5.858 5.858 0 0 0 0-8.253.944.944 0 0 0-1.337 1.332 3.97 3.97 0 0 1 0 5.59.943.943 0 1 0 1.337 1.331z\"></path><path d=\"M23.03 12.135c0-2.21-.859-4.292-2.418-5.857a.943.943 0 1 0-1.337 1.332 6.37 6.37 0 0 1 1.868 4.525 6.37 6.37 0 0 1-1.868 4.525.943.943 0 1 0 1.338 1.332 8.249 8.249 0 0 0 2.418-5.857z\"></path></g></svg>"}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(38);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(30);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(50);
var has = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(75);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(17).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(48);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(11)('toStringTag');
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(15);
var dPs = __webpack_require__(140);
var enumBugKeys = __webpack_require__(53);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(72).appendChild(iframe);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(12).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14);
var core = __webpack_require__(8);
var fails = __webpack_require__(26);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(54)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(56);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("lodash/mapValues");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var isObject = __webpack_require__(19);
var newPromiseCapability = __webpack_require__(42);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var invoke = __webpack_require__(106);
var html = __webpack_require__(72);
var cel = __webpack_require__(51);
var global = __webpack_require__(12);
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
  if (__webpack_require__(31)(process) == 'process') {
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(15);
var aFunction = __webpack_require__(38);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(15);
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
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(77);
var hiddenKeys = __webpack_require__(53).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(127);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(23);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(12).document;
module.exports = document && document.documentElement;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(73);
var hide = __webpack_require__(20);
var has = __webpack_require__(22);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(141);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(11)('iterator');
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(26)(function () {
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(148)(false);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');

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
/* 78 */
/***/ (function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("lodash/toPlainObject");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(60);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var utils_namespaceObject = {};
__webpack_require__.d(utils_namespaceObject, "setGeoData", function() { return setGeoData; });
__webpack_require__.d(utils_namespaceObject, "getCountryCode", function() { return getCountryCode; });
__webpack_require__.d(utils_namespaceObject, "getContinentCode", function() { return getContinentCode; });
__webpack_require__.d(utils_namespaceObject, "getRegionCode", function() { return getRegionCode; });
__webpack_require__.d(utils_namespaceObject, "isProperCountry", function() { return isProperCountry; });
__webpack_require__.d(utils_namespaceObject, "isProperRegion", function() { return isProperRegion; });
__webpack_require__.d(utils_namespaceObject, "isProperContinent", function() { return isProperContinent; });
__webpack_require__.d(utils_namespaceObject, "resetSamplingCache", function() { return resetSamplingCache; });
__webpack_require__.d(utils_namespaceObject, "getSamplingResults", function() { return getSamplingResults; });
__webpack_require__.d(utils_namespaceObject, "isProperGeo", function() { return isProperGeo; });
__webpack_require__.d(utils_namespaceObject, "setupNpaContext", function() { return setupNpaContext; });
var constants_namespaceObject = {};
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_FADE_IN_ANIMATION", function() { return CSS_CLASSNAME_FADE_IN_ANIMATION; });
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_SLIDE_OUT_ANIMATION", function() { return CSS_CLASSNAME_SLIDE_OUT_ANIMATION; });
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_STICKY_BFAA", function() { return CSS_CLASSNAME_STICKY_BFAA; });
__webpack_require__.d(constants_namespaceObject, "CSS_TIMING_EASE_IN_CUBIC", function() { return CSS_TIMING_EASE_IN_CUBIC; });
__webpack_require__.d(constants_namespaceObject, "SLIDE_OUT_TIME", function() { return SLIDE_OUT_TIME; });
__webpack_require__.d(constants_namespaceObject, "FADE_IN_TIME", function() { return FADE_IN_TIME; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_UAP_ID", function() { return DEFAULT_UAP_ID; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_UAP_TYPE", function() { return DEFAULT_UAP_TYPE; });
__webpack_require__.d(constants_namespaceObject, "FAN_TAKEOVER_TYPES", function() { return FAN_TAKEOVER_TYPES; });
var themes_classic_namespaceObject = {};
__webpack_require__.d(themes_classic_namespaceObject, "BfaaTheme", function() { return classic_BfaaTheme; });
__webpack_require__.d(themes_classic_namespaceObject, "BfabTheme", function() { return classic_BfabTheme; });
__webpack_require__.d(themes_classic_namespaceObject, "adIsReady", function() { return adIsReady; });
var themes_hivi_namespaceObject = {};
__webpack_require__.d(themes_hivi_namespaceObject, "BfaaTheme", function() { return hivi_BfaaTheme; });
__webpack_require__.d(themes_hivi_namespaceObject, "BfabTheme", function() { return hivi_BfabTheme; });
__webpack_require__.d(themes_hivi_namespaceObject, "adIsReady", function() { return ready_adIsReady; });

// EXTERNAL MODULE: external "lodash/set"
var set_ = __webpack_require__(87);
var set_default = /*#__PURE__*/__webpack_require__.n(set_);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(86);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(7);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(24);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(85);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/utils/random.js
// TODO remove this module
// It is a workaround for issue with mocking Math.random in our environment
// https://github.com/babel/babel/issues/5426#issuecomment-284839994

function getRandom() {
	return Math.random();
}

/* harmony default export */ var random = ({
	getRandom: getRandom
});
// CONCATENATED MODULE: ./src/utils/geo.js





var earth = 'XX',
    negativePrefix = 'non-',
    precision = Math.pow(10, 6),
    // precision to 0.00000001 (or 0.000001%) of traffic
samplingSeparator = '/';

var geoData = null,
    cache = {};

function hasSampling(geo) {
	return function (value) {
		return value.indexOf(negativePrefix) !== 0 && value.indexOf(geo + samplingSeparator) > -1;
	};
}

function getSamplingLimits(value) {
	var _value$split = value.split(samplingSeparator),
	    _value$split2 = slicedToArray_default()(_value$split, 2),
	    samplingValue = _value$split2[1];

	return Math.round(parseFloat(samplingValue) * precision) | 0; // eslint-disable-line no-bitwise
}

function addResultToCache(name, result, samplingLimits) {
	var _samplingLimits = slicedToArray_default()(samplingLimits, 1),
	    limitValue = _samplingLimits[0];

	cache[name] = {
		name: name,
		group: result ? 'B' : 'A',
		limit: (result ? limitValue : precision * 100 - limitValue) / precision,
		result: result
	};
}

function getResult(samplingLimits, name) {
	var randomValue = Math.round(random.getRandom() * (precision * 100)) | 0,
	    // eslint-disable-line no-bitwise
	result = samplingLimits.some(function (value) {
		return randomValue < value;
	});

	if (name) {
		addResultToCache(name, result, samplingLimits);
	}

	return result;
}

function isSampledForGeo(countryList, geo, name) {
	var countryListWithSampling = countryList.filter(hasSampling(geo));

	if (countryListWithSampling.length === 0) {
		return false;
	}

	return getResult(countryListWithSampling.map(getSamplingLimits), name);
}

function containsEarth(countryList, name) {
	return countryList.indexOf(earth) > -1 || isSampledForGeo(countryList, earth, name);
}

/**
 * Return geo data from cookie
 * @returns {Object}
 */
function getGeoData() {
	if (geoData === null) {
		var jsonData = decodeURIComponent(external_js_cookie_default.a.get('Geo'));

		try {
			geoData = JSON.parse(jsonData) || {};
		} catch (e) {
			geoData = {};
		}
	}

	return geoData;
}

/**
 * Set geo data
 * @param {Object} data
 * @returns {void}
 */
function setGeoData(data) {
	geoData = data;
}

/**
 * Return country code based on cookie
 * @returns {string}
 */
function getCountryCode() {
	return getGeoData().country;
}

/**
 * Return continent code based on cookie
 * @returns {string}
 */
function getContinentCode() {
	return getGeoData().continent;
}

/**
 * Return region code based on cookie
 * @returns {*}
 */
function getRegionCode() {
	return getGeoData().region;
}

/**
 * Checks whether current country (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined}name
 * @returns {boolean}
 */
function isProperCountry() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var name = arguments[1];

	return !!(countryList && countryList.indexOf && (countryList.indexOf(getCountryCode()) > -1 || isSampledForGeo(countryList, getCountryCode(), name)));
}

/**
 * Checks whether current regions (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
function isProperRegion() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var name = arguments[1];

	var code = getCountryCode() + '-' + getRegionCode();
	return !!(countryList && countryList.indexOf && (countryList.indexOf(code) > -1 || isSampledForGeo(countryList, code, name)));
}

function containsContinent() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var name = arguments[1];

	var geo = earth + '-' + getContinentCode();
	return countryList.indexOf(geo) > -1 || isSampledForGeo(countryList, geo, name);
}

/**
 * Checks whether current continent (from cookie) is listed in array
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
function isProperContinent() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var name = arguments[1];

	return !!(countryList && countryList.indexOf && (containsEarth(countryList, name) || containsContinent(countryList, name)));
}

/**
 * Checks whether current geo is excluded in array (by using non- prefix)
 * @param {string[]} countryList
 * @returns {boolean}
 */
function isGeoExcluded() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	return !!(countryList.indexOf('' + negativePrefix + getCountryCode()) > -1 || countryList.indexOf('' + negativePrefix + getCountryCode() + '-' + getRegionCode()) > -1 || countryList.indexOf('' + negativePrefix + earth + '-' + getContinentCode()) > -1);
}

function getResultLog(name) {
	var entry = cache[name];

	return entry.name + '_' + entry.group + '_' + entry.limit;
}

function resetSamplingCache() {
	cache = {};
}

function getSamplingResults() {
	return keys_default()(cache).map(getResultLog);
}

/**
 * Checks whether current geo (from cookie) is listed in array and it's not excluded
 *
 * @param {string[]} countryList
 * @param {string|undefined} name
 * @returns {boolean}
 */
function isProperGeo() {
	var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

	if (name !== undefined && typeof cache[name] !== 'undefined') {
		return cache[name].result;
	}
	return !!(countryList && countryList.indexOf && !isGeoExcluded(countryList) && (isProperContinent(countryList, name) || isProperCountry(countryList, name) || isProperRegion(countryList, name)));
}

/* harmony default export */ var geo = ({
	getContinentCode: getContinentCode,
	getCountryCode: getCountryCode,
	getRegionCode: getRegionCode,
	getSamplingResults: getSamplingResults,
	isProperGeo: isProperGeo,
	resetSamplingCache: resetSamplingCache
});
// EXTERNAL MODULE: external "@wikia/ad-engine"
var ad_engine_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/npa.js


function setupNpaContext() {
	var optedOut = ad_engine_["trackingOptIn"].isOptedIn() ? 0 : 1;

	ad_engine_["context"].set('targeting.npa', optedOut.toString());
}
// CONCATENATED MODULE: ./src/utils/index.js


// EXTERNAL MODULE: ./src/styles/styles.scss
var styles = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(3);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(10);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/bidders/base-bidder.js





var base_bidder_BaseBidder = function () {
	function BaseBidder(bidderConfig, resetListener) {
		var _this = this;

		var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

		classCallCheck_default()(this, BaseBidder);

		this.logGroup = 'bidder';
		this.bidderConfig = bidderConfig;
		this.timeout = timeout;

		this.resetState();

		if (resetListener) {
			resetListener(this.resetState);
		}

		this.onResponse = function () {
			return _this.onResponseCall();
		};
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
		key: 'getName',
		value: function getName() {
			return this.name;
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
		value: function getSlotTargetingParams(slotName, floorPrice) {
			if (!this.called || !this.isSlotSupported(slotName) || !this.getTargetingParams) {
				return {};
			}

			return this.getTargetingParams(slotName, floorPrice);
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
			if (this.calculatePrices) {
				this.calculatePrices();
			}

			if (this.onResponseCallbacks) {
				this.onResponseCallbacks.start();
			}

			this.response = true;
		}
	}, {
		key: 'resetState',
		value: function resetState() {
			this.called = false;
			this.response = false;
			this.onResponseCallbacks = [];

			ad_engine_["utils"].makeLazyQueue(this.onResponseCallbacks, this.responseCallback);
		}
	}, {
		key: 'responseCallback',
		value: function responseCallback(callback) {
			callback();
		}
	}, {
		key: 'waitForResponse',
		value: function waitForResponse() {
			var _this2 = this;

			return this.createWithTimeout(function (resolve) {
				if (_this2.hasResponse()) {
					resolve();
				} else {
					_this2.addResponseListener(resolve);
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

	function A9(bidderConfig, resetListener) {
		var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

		classCallCheck_default()(this, A9);

		var _this = possibleConstructorReturn_default()(this, (A9.__proto__ || get_prototype_of_default()(A9)).call(this, bidderConfig, resetListener, timeout));

		_this.logGroup = 'a9-bidder';
		_this.name = 'a9';
		_this.loaded = false;
		_this.isCMPEnabled = ad_engine_["context"].get('custom.isCMPEnabled');
		_this.amazonId = '3115';
		_this.slots = _this.bidderConfig.slots;
		_this.slotsVideo = _this.bidderConfig.slotsVideo;
		_this.gdpr = _this.bidderConfig.gdpr;
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
		key: 'call',
		value: function call(onResponse) {
			var _this3 = this;

			var a9Slots = void 0;

			if (!this.loaded) {
				this.insertScript();
				this.configureApstag();

				window.apstag.init({
					pubID: this.amazonId,
					videoAdServer: 'DFP',
					gdpr: this.isCMPEnabled ? {
						enabled: this.gdpr.enabled,
						consent: this.gdpr.consent,
						cmpTimeout: 2000
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

			window.apstag.fetchBids({
				slots: a9Slots,
				timeout: this.timeout
			}, function (currentBids) {
				currentBids.forEach(function (bid) {
					_this3.bids[bid.slotID] = bid;
				});

				onResponse();
			});
		}
	}, {
		key: 'configureApstag',
		value: function configureApstag() {
			var _this4 = this;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			window.apstag = window.apstag || {};
			window.apstag._Q = window.apstag._Q || [];

			if (typeof window.apstag.init === 'undefined') {
				window.apstag.init = function () {
					_this4.configureApstagCommand('i', args);
				};
			}

			if (typeof window.apstag.fetchBids === 'undefined') {
				window.apstag.fetchBids = function () {
					_this4.configureApstagCommand.apply(_this4, ['f'].concat(args));
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
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(84);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(9);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(83);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./src/templates/uap/ui/video/close-button.js
function add(video, container) {
	var closeButton = document.createElement('div');

	closeButton.classList.add('close-ad');
	closeButton.addEventListener('click', function (event) {
		video.stop();
		event.preventDefault();
	});

	container.appendChild(closeButton);
}

/* harmony default export */ var close_button = ({
	add: add
});
// EXTERNAL MODULE: ./src/templates/uap/ui/icons.json
var icons = __webpack_require__(41);
var icons_default = /*#__PURE__*/__webpack_require__.n(icons);

// CONCATENATED MODULE: ./src/templates/uap/ui/icons.js



var parser = new window.DOMParser();

function createIcon(iconName) {
	var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	if (icons_default.a[iconName]) {
		var element = parser.parseFromString(icons_default.a[iconName], 'image/svg+xml').documentElement;

		// IE 11 doesn't support classList nor className on SVG elements
		element.setAttribute('class', classNames.join(' '));

		return element;
	}

	return null;
}

var icons_icons = keys_default()(icons_default.a).reduce(function (map, name) {
	map[name] = name;
	return map;
}, {});
// CONCATENATED MODULE: ./src/common/translations.js
var TRANSLATIONS = {
	labels: {
		en: {
			advertisement: 'Advertisement',
			'learn-more': 'Learn More'
		},
		ar: {
			advertisement: 'إعلان'
		},
		bn: {
			advertisement: 'বিজ্ঞাপন'
		},
		br: {
			advertisement: 'Bomm bruderezh'
		},
		ca: {
			advertisement: 'Anunci'
		},
		cs: {
			advertisement: 'Reklama'
		},
		de: {
			advertisement: 'Anzeige',
			'learn-more': 'Erfahre mehr'
		},
		es: {
			advertisement: 'Anuncio',
			'learn-more': 'Conoce más'
		},
		eu: {
			advertisement: 'Iragarkia'
		},
		fa: {
			advertisement: 'تبلیغات'
		},
		fo: {
			advertisement: 'Lýsing'
		},
		fr: {
			advertisement: 'Publicité',
			'learn-more': 'En savoir plus'
		},
		fy: {
			advertisement: 'Advertinsje'
		},
		gl: {
			advertisement: 'Anuncio'
		},
		gv: {
			advertisement: 'Soilsheen'
		},
		he: {
			advertisement: 'פרסומת'
		},
		hu: {
			advertisement: 'Hirdetés'
		},
		id: {
			advertisement: 'Iklan',
			'learn-more': 'Baca Selengkapnya'
		},
		inh: {
			advertisement: 'дебат'
		},
		it: {
			advertisement: 'Pubblicità',
			'learn-more': 'Ulteriori informazioni'
		},
		ja: {
			advertisement: '広告',
			'learn-more': 'もっと見る'
		},
		ko: {
			advertisement: '광고'
		},
		krc: {
			advertisement: 'Pеклама'
		},
		lb: {
			advertisement: 'Reklamm'
		},
		mk: {
			advertisement: 'Pеклама'
		},
		mr: {
			advertisement: 'जाहिरात'
		},
		ms: {
			advertisement: 'Iklan'
		},
		nl: {
			advertisement: 'Advertentie',
			'learn-more': 'Meer te weten komen'
		},
		no: {
			advertisement: 'Reklame'
		},
		pl: {
			advertisement: 'Reklama',
			'learn-more': 'Czytaj więcej'
		},
		ps: {
			advertisement: 'خبرتيا'
		},
		pt: {
			advertisement: 'Anúncio',
			'learn-more': 'Saiba Mais'
		},
		'roa-tara': {
			advertisement: 'Pubblecetà'
		},
		ru: {
			advertisement: 'Pеклама',
			'learn-more': 'Узнать больше'
		},
		si: {
			advertisement: 'ප්‍රචාරක දැන්වීම'
		},
		sl: {
			advertisement: 'Oglas'
		},
		'sr-ec': {
			advertisement: 'Pеклама'
		},
		sv: {
			advertisement: 'Annons'
		},
		te: {
			advertisement: 'వాణిజ్య ప్రకటన'
		},
		th: {
			advertisement: 'การโฆษณา'
		},
		tr: {
			advertisement: 'Reklam'
		},
		'tt-cyrl': {
			advertisement: 'Pеклама'
		},
		uk: {
			advertisement: 'Pеклама'
		},
		vi: {
			advertisement: 'Quảng cáo'
		},
		'zh-hans': {
			advertisement: '广告',
			'learn-more': '了解更多'
		},
		'zh-hant': {
			advertisement: '廣告',
			'learn-more': '閱讀更多'
		}
	}
};
// CONCATENATED MODULE: ./src/common/i18n.js



var defaultLanguage = 'en';

function getTranslation(category, key) {
	var lang = ad_engine_["context"].get('options.contentLanguage'),
	    language = lang && typeof TRANSLATIONS[category][lang] !== 'undefined' ? lang : defaultLanguage;

	return TRANSLATIONS[category][language][key] || TRANSLATIONS[category][defaultLanguage][key];
}
// CONCATENATED MODULE: ./src/templates/uap/ui/video/learn-more.js



function learn_more_add(video, container, params) {
	var learnMore = document.createElement('div'),
	    icon = createIcon(icons_icons.LEARN_MORE, ['learn-more-icon', 'porvata-icon']),
	    label = document.createElement('div');

	label.innerText = getTranslation('labels', 'learn-more');
	learnMore.appendChild(label);
	learnMore.appendChild(icon);

	learnMore.classList.add('learn-more');
	learnMore.addEventListener('click', function () {
		top.open(params.clickThroughURL, '_blank');
	});

	container.appendChild(learnMore);
}

/* harmony default export */ var learn_more = ({
	add: learn_more_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/pause-control.js


function pause_control_add(video, container) {
	var pauseButton = document.createElement('div'),
	    pauseIcon = createIcon(icons_icons.PAUSE, ['play-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    playIcon = createIcon(icons_icons.PLAY, ['play-on-icon', 'porvata-icon', 'porvata-on-icon']);

	pauseButton.appendChild(playIcon);
	pauseButton.appendChild(pauseIcon);

	pauseButton.className = 'play-pause-button porvata-switchable-icon';
	pauseButton.addEventListener('click', function () {
		if (video.isPaused()) {
			video.resume();
		} else {
			video.pause();
		}
	});
	video.addEventListener('pause', function () {
		pauseButton.classList.remove('is-on');
	});
	video.addEventListener('resume', function () {
		pauseButton.classList.add('is-on');
	});
	video.addEventListener('start', function () {
		pauseButton.classList.add('is-on');
	});

	container.appendChild(pauseButton);
}

/* harmony default export */ var pause_control = ({
	add: pause_control_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/pause-overlay.js
function pause_overlay_add(video, container) {
	var overlay = document.createElement('div');

	overlay.classList.add('pause-overlay');
	overlay.addEventListener('click', function () {
		if (video.isPaused()) {
			video.resume();
		} else {
			video.pause();
		}
	});

	container.appendChild(overlay);
}

/* harmony default export */ var pause_overlay = ({
	add: pause_overlay_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/progress-bar.js


function progress_bar_add(video, container) {
	var progressBar = document.createElement('div'),
	    currentTime = document.createElement('div');

	progressBar.classList.add('progress-bar');
	currentTime.classList.add('current-time');

	progressBar.appendChild(currentTime);

	progressBar.pause = function () {
		currentTime.style.width = currentTime.offsetWidth / progressBar.offsetWidth * 100 + '%';
	};
	progressBar.reset = function () {
		currentTime.style.transitionDuration = '';
		currentTime.style.width = '0';
	};
	progressBar.rewind = function () {
		var remainingTime = currentTime.style.transitionDuration;

		progressBar.reset();
		ad_engine_["slotTweaker"].forceRepaint(currentTime);
		currentTime.style.transitionDuration = remainingTime;
	};
	progressBar.start = function () {
		var remainingTime = video.getRemainingTime();

		if (remainingTime) {
			if (remainingTime > 0) {
				currentTime.style.transitionDuration = remainingTime + 's';
			}
			ad_engine_["slotTweaker"].forceRepaint(currentTime);
			currentTime.style.width = '100%';
		} else {
			currentTime.style.width = '0';
		}
	};

	video.addEventListener('wikiaAdPlay', progressBar.start);
	video.addEventListener('wikiaAdCompleted', progressBar.reset);
	video.addEventListener('wikiaAdRestart', progressBar.rewind);
	video.addEventListener('wikiaAdPause', progressBar.pause);

	container.appendChild(progressBar);
}

/* harmony default export */ var progress_bar = ({
	add: progress_bar_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/replay-overlay.js


var replayOverlayClass = 'replay-overlay';

function replay_overlay_add(video, container, params) {
	var overlay = document.createElement('div');

	overlay.classList.add(replayOverlayClass);
	overlay.addEventListener('click', function () {
		return video.play();
	});

	if (!params.autoPlay) {
		showOverlay(overlay, params);
	}

	video.addEventListener('wikiaAdCompleted', function () {
		showOverlay(overlay, params);
	});

	if (video.params.theme && video.params.theme === 'hivi') {
		var replayIcon = addReplayIcon(overlay);

		if (!params.autoPlay) {
			var playIcon = addPlayIcon(overlay);
			replayIcon.style.display = 'none';

			video.addEventListener('start', function () {
				replayIcon.style.display = '';
				playIcon.style.display = 'none';
			});
		}

		container = video.params.thumbnail;
		container.appendChild(overlay);
	} else {
		container.parentElement.insertBefore(overlay, container);
	}
}

function showOverlay(overlay, params) {
	if (!params.container.classList.contains('theme-hivi')) {
		overlay.style.width = overlay.style.width || getOverlayWidth(params);
	}
	// make overlay visible after ad finishes
	overlay.style.display = 'block';
}
/**
 * Basing on video width and total ad width compute width (in %)
 * of overlay to make it responsive.
 *
 * offsetWidth won't work in case video container is hidden.
 * @param params
 * @return string in form '55%'
 */
function getOverlayWidth(params) {
	var adWidth = params.container.offsetWidth,
	    videoWidth = params.hideWhenPlaying.offsetWidth;

	return 100 * videoWidth / adWidth + '%';
}

function addReplayIcon(overlay) {
	var replayIcon = createIcon(icons_icons.REPLAY, ['replay-icon', 'overlay-icon']);
	overlay.appendChild(replayIcon);

	return replayIcon;
}

function addPlayIcon(overlay) {
	var playIcon = createIcon(icons_icons.PLAY, ['play-icon', 'overlay-icon']);
	overlay.appendChild(playIcon);

	return playIcon;
}

/* harmony default export */ var replay_overlay = ({
	add: replay_overlay_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/toggle-animation.js
var toggle_animation_duration = 400,
    onAnimationClassName = 'on-animation';

function resizeContainer(container, finalAspectRatio) {
	container.style.height = container.offsetHeight + 'px';
	container.style.height = container.offsetWidth / finalAspectRatio + 'px';

	setTimeout(function () {
		container.style.height = '';
	}, toggle_animation_duration);
}

function toggle(elementToShow, elementToHide) {
	elementToHide.classList.add('hide');
	elementToShow.classList.remove('hide');
}

function hideVideo(video, params) {
	resizeContainer(params.container, params.aspectRatio);
	setTimeout(function () {
		toggle(params.image, video.container);
		params.container.classList.remove(onAnimationClassName);
	}, toggle_animation_duration);
}

function showVideo(video, params) {
	params.container.classList.add(onAnimationClassName);
	resizeContainer(params.container, params.videoAspectRatio);
	toggle(video.container, params.image);
}

function toggle_animation_add(video, container, params) {
	video.addEventListener('wikiaAdStarted', function () {
		showVideo(video, params);
	});

	video.addEventListener('wikiaAdCompleted', function () {
		hideVideo(video, params);
	});
}

/* harmony default export */ var toggle_animation = ({
	add: toggle_animation_add,
	duration: toggle_animation_duration
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/toggle-fullscreen.js


function toggle_fullscreen_add(video, container) {
	var toggleFullscreenButton = document.createElement('div'),
	    offIcon = createIcon(icons_icons.FULLSCREEN_OFF, ['fullscreen-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    onIcon = createIcon(icons_icons.FULLSCREEN_ON, ['fullscreen-on-icon', 'porvata-icon', 'porvata-on-icon']);

	toggleFullscreenButton.appendChild(offIcon);
	toggleFullscreenButton.appendChild(onIcon);

	toggleFullscreenButton.className = 'toggle-fullscreen-button porvata-switchable-icon';
	toggleFullscreenButton.addEventListener('click', function () {
		video.toggleFullscreen();
	});
	video.addEventListener('wikiaFullscreenChange', function () {
		if (video.isFullscreen()) {
			toggleFullscreenButton.classList.add('is-on');
		} else {
			toggleFullscreenButton.classList.remove('is-on');
		}
	});
	video.addEventListener('wikiaAdStop', function () {
		if (video.isFullscreen()) {
			video.toggleFullscreen();
		}
	});

	container.appendChild(toggleFullscreenButton);
}

/* harmony default export */ var toggle_fullscreen = ({
	add: toggle_fullscreen_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/toggle-thumbnail.js
function toggle_thumbnail_add(video, container, params) {
	video.addEventListener('wikiaAdStarted', function () {
		params.thumbnail.classList.add('hidden-state');
	});

	video.addEventListener('wikiaAdCompleted', function () {
		params.thumbnail.classList.remove('hidden-state');
	});
}

/* harmony default export */ var toggle_thumbnail = ({
	add: toggle_thumbnail_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/toggle-ui.js


var overlayTimeout = 5000;

function toggle_ui_add(video, container, params) {
	var timeout = null;

	var isMobile = ad_engine_["utils"].client.isSmartphone() || ad_engine_["utils"].client.isTablet(),
	    overlay = document.createElement('div'),
	    setAutomaticToggle = function setAutomaticToggle() {
		timeout = setTimeout(function () {
			if (video.isPlaying()) {
				video.container.classList.remove('ui-visible');
			}
		}, overlayTimeout);
	};

	overlay.classList.add('toggle-ui-overlay');
	if (isMobile) {
		overlay.addEventListener('click', function () {
			video.container.classList.toggle('ui-visible');

			clearTimeout(timeout);
			setAutomaticToggle();
		});
		video.addEventListener('resume', setAutomaticToggle);
	} else {
		video.container.addEventListener('mouseenter', function () {
			video.container.classList.add('ui-visible');
		});
		video.container.addEventListener('mouseleave', function () {
			video.container.classList.remove('ui-visible');
		});
		overlay.addEventListener('click', function () {
			top.open(params.clickThroughURL, '_blank');
		});
	}

	container.appendChild(overlay);
}

/* harmony default export */ var toggle_ui = ({
	add: toggle_ui_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/toggle-video.js
function toggle_video_add(video, container) {
	video.addEventListener('wikiaAdStarted', function () {
		container.classList.remove('hide');
	});

	video.addEventListener('wikiaAdCompleted', function () {
		container.classList.add('hide');
	});
}

/* harmony default export */ var toggle_video = ({
	add: toggle_video_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/volume-control.js


function createVolumeControl(params) {
	var iconPrefix = params.theme === 'hivi' ? 'HIVI_' : '',
	    volume = document.createElement('div'),
	    offIcon = createIcon(icons_icons[iconPrefix + 'VOLUME_OFF'], ['volume-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    onIcon = createIcon(icons_icons[iconPrefix + 'VOLUME_ON'], ['volume-on-icon', 'porvata-icon', 'porvata-on-icon']);

	volume.className = 'volume-button porvata-switchable-icon hidden';
	volume.appendChild(offIcon);
	volume.appendChild(onIcon);

	return volume;
}

function updateCurrentState(video, volumeControl) {
	if (video.isMuted() || video.isMobilePlayerMuted()) {
		volumeControl.classList.add('is-on');
	} else {
		volumeControl.classList.remove('is-on');
	}

	if (!video.isMobilePlayerMuted() && video.mobileVideoAd && video.mobileVideoAd.muted) {
		video.updateVideoDOMElement(video.defaultVolume);
	}
}

function volume_control_add(video, container) {
	var volumeControl = createVolumeControl(video.params);

	video.addEventListener('wikiaVolumeChange', function () {
		updateCurrentState(video, volumeControl);
	});

	video.addEventListener('wikiaAdStarted', function () {
		updateCurrentState(video, volumeControl);
		volumeControl.classList.remove('hidden');
	});

	volumeControl.addEventListener('click', function (e) {
		video.volumeToggle();
		e.preventDefault();
	});

	container.appendChild(volumeControl);
}

/* harmony default export */ var volume_control = ({
	add: volume_control_add
});
// CONCATENATED MODULE: ./src/templates/uap/ui/video/panel.js



var panel_Panel = function () {
	function Panel(className, uiElements) {
		classCallCheck_default()(this, Panel);

		this.uiElements = uiElements;
		this.className = className;
		this.panelContainer = null;
	}

	createClass_default()(Panel, [{
		key: 'add',
		value: function add(video, container, params) {
			var _this = this;

			this.panelContainer = document.createElement('div');
			this.panelContainer.className = this.className;
			this.uiElements.forEach(function (uiElement) {
				if (uiElement) {
					uiElement.add(video, _this.panelContainer, params);
				}
			});
			container.appendChild(this.panelContainer);
		}
	}]);

	return Panel;
}();


// CONCATENATED MODULE: ./src/templates/uap/ui/video/ui-template.js














var ui_template_createBottomPanel = function createBottomPanel(_ref) {
	var _ref$fullscreenAllowe = _ref.fullscreenAllowed,
	    fullscreenAllowed = _ref$fullscreenAllowe === undefined ? true : _ref$fullscreenAllowe,
	    _ref$theme = _ref.theme,
	    theme = _ref$theme === undefined ? null : _ref$theme;

	var isHiVi = theme === 'hivi';
	var panelClassName = 'bottom-panel';

	if (isHiVi) {
		panelClassName += ' dynamic-panel';
	}

	return new panel_Panel(panelClassName, [isHiVi ? pause_control : null, volume_control, isHiVi && fullscreenAllowed ? toggle_fullscreen : null]);
};

var ui_template_getTemplates = function getTemplates(params, videoSettings) {
	return {
		'auto-play': [progress_bar, pause_overlay, ui_template_createBottomPanel(params), toggle_animation],
		default: [progress_bar, pause_overlay, ui_template_createBottomPanel(params), close_button, toggle_animation],
		'split-left': [progress_bar, pause_overlay, ui_template_createBottomPanel(params), toggle_video, replay_overlay, !videoSettings.isAutoPlay() ? close_button : null],
		'split-right': [progress_bar, pause_overlay, ui_template_createBottomPanel(params), toggle_video, replay_overlay, !videoSettings.isAutoPlay() ? close_button : null],
		hivi: [progress_bar, ui_template_createBottomPanel(params), params.videoPlaceholderElement ? toggle_video : toggle_animation, toggle_thumbnail, toggle_ui, learn_more, params.videoPlaceholderElement ? replay_overlay : null]
	};
};

function selectTemplate(videoSettings) {
	var params = videoSettings.getParams(),
	    templates = ui_template_getTemplates(params, videoSettings);

	var template = 'default';

	if (params.theme === 'hivi') {
		template = 'hivi';
	} else if (videoSettings.isSplitLayout()) {
		template = params.splitLayoutVideoPosition === 'right' ? 'split-right' : 'split-left';
	} else if (videoSettings.isAutoPlay()) {
		template = 'auto-play';
	}

	return templates[template];
}
// CONCATENATED MODULE: ./src/templates/uap/ui/video/video-interface.js
function setup(video, uiElements, params) {
	uiElements.forEach(function (element) {
		if (element) {
			element.add(video, video.container, params);
		}
	});
}
// CONCATENATED MODULE: ./src/templates/uap/ui/video/index.js


// CONCATENATED MODULE: ./src/templates/uap/constants.js
var CSS_CLASSNAME_FADE_IN_ANIMATION = 'fade-in';
var CSS_CLASSNAME_SLIDE_OUT_ANIMATION = 'slide-out';
var CSS_CLASSNAME_STICKY_BFAA = 'sticky-bfaa';
var CSS_TIMING_EASE_IN_CUBIC = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
// Animation time is defined also in CSS, remember to change it in both places
var SLIDE_OUT_TIME = 600;
var FADE_IN_TIME = 400;

var DEFAULT_UAP_ID = 'none';
var DEFAULT_UAP_TYPE = 'none';
var FAN_TAKEOVER_TYPES = ['uap', 'vuap'];
// CONCATENATED MODULE: ./src/templates/uap/universal-ad-package.js






var loadPorvata = function () {
	var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(videoSettings, slotContainer, imageContainer) {
		var params, template, video;
		return regenerator_default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						params = videoSettings.getParams();
						template = selectTemplate(videoSettings);


						params.autoPlay = videoSettings.isAutoPlay();
						videoSettings.updateParams(params);

						_context.next = 6;
						return ad_engine_["Porvata"].inject(params);

					case 6:
						video = _context.sent;


						video.container.style.position = 'relative';
						setup(video, template, {
							autoPlay: videoSettings.isAutoPlay(),
							image: imageContainer,
							container: slotContainer,
							thumbnail: params.thumbnail,
							clickThroughURL: params.clickThroughURL,
							aspectRatio: params.aspectRatio,
							videoAspectRatio: params.videoAspectRatio,
							hideWhenPlaying: params.videoPlaceholderElement || params.image,
							splitLayoutVideoPosition: params.splitLayoutVideoPosition
						});

						video.addEventListener('wikiaAdCompleted', function () {
							video.reload();
						});

						adjustVideoAdContainer(params);

						return _context.abrupt('return', video);

					case 12:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function loadPorvata(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();

var loadVideoAd = function () {
	var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(videoSettings) {
		var params, imageContainer, size, recalculateVideoSize, video;
		return regenerator_default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						recalculateVideoSize = function recalculateVideoSize(video) {
							return function () {
								var currentSize = getVideoSize(params.container, params, videoSettings);
								video.resize(currentSize.width, currentSize.height);
							};
						};

						params = videoSettings.getParams();
						imageContainer = params.container.querySelector('div:last-of-type');
						size = getVideoSize(params.container, params, videoSettings);


						params.vastTargeting = {
							passback: getType()
						};
						params.width = size.width;
						params.height = size.height;
						videoSettings.updateParams(params);

						_context2.next = 10;
						return loadPorvata(videoSettings, params.container, imageContainer);

					case 10:
						video = _context2.sent;

						window.addEventListener('resize', throttle_default()(recalculateVideoSize(video), 250));

						if (params.videoTriggerElement) {
							params.videoTriggerElement.addEventListener('click', function () {
								return video.play();
							});
						} else if (params.videoTriggers) {
							params.videoTriggers.forEach(function (trigger) {
								trigger.addEventListener('click', function () {
									return video.play();
								});
							});
						}

						return _context2.abrupt('return', video);

					case 14:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function loadVideoAd(_x4) {
		return _ref2.apply(this, arguments);
	};
}();





var uapId = DEFAULT_UAP_ID;
var uapType = DEFAULT_UAP_TYPE;

function getVideoSize(slot, params, videoSettings) {
	var width = videoSettings.isSplitLayout() ? params.videoPlaceholderElement.offsetWidth : slot.clientWidth;
	var height = width / params.videoAspectRatio;

	return {
		width: width,
		height: height
	};
}

function adjustVideoAdContainer(params) {
	if (params.splitLayoutVideoPosition) {
		var videoAdContainer = params.container.querySelector('.video-player');

		videoAdContainer.classList.add('video-player-' + params.splitLayoutVideoPosition);
	}
}

function getUapId() {
	return uapId;
}

function setUapId(id) {
	uapId = id;
	updateSlotsTargeting(id);
}

function getType() {
	return uapType;
}

function setType(type) {
	uapType = type;
}

function updateSlotsTargeting(id) {
	var slots = ad_engine_["context"].get('slots');
	keys_default()(slots).forEach(function (slotId) {
		if (!slots[slotId].nonUapSlot) {
			ad_engine_["context"].set('slots.' + slotId + '.targeting.uap', id);
		}
	});
}

function enableSlots(slotsToEnable) {
	if (getType() !== 'abcd') {
		slotsToEnable.forEach(function (slotName) {
			ad_engine_["btfBlockerService"].unblock(slotName);
		});
	}
}

function disableSlots(slotsToDisable) {
	slotsToDisable.forEach(function (slotName) {
		ad_engine_["slotService"].disable(slotName);
	});
}

function initSlot(params) {
	var adSlot = ad_engine_["slotService"].get(params.slotName);
	params.container = adSlot.getElement();

	if (params.isDarkTheme) {
		params.container.classList.add('is-dark');
	}
	if (params.isMobile) {
		params.container.classList.add('is-mobile-layout');
	}
	if (ad_engine_["utils"].client.isSmartphone() || ad_engine_["utils"].client.isTablet()) {
		params.container.classList.add('is-mobile-device');
	}
}

function universal_ad_package_reset() {
	setType(DEFAULT_UAP_TYPE);
	setUapId(DEFAULT_UAP_ID);
}

function isFanTakeoverLoaded() {
	return getUapId() !== DEFAULT_UAP_ID && FAN_TAKEOVER_TYPES.indexOf(getType()) !== -1;
}

var universalAdPackage = extends_default()({}, constants_namespaceObject, {
	init: function init(params) {
		var slotsToEnable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var slotsToDisable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

		var adProduct = 'uap';

		if (this.isVideoEnabled(params)) {
			adProduct = 'vuap';
		}

		params.adProduct = params.adProduct || adProduct;

		setUapId(params.uap);
		disableSlots(slotsToDisable);
		enableSlots(slotsToEnable);
		setType(params.adProduct);

		if (params.slotName) {
			initSlot(params);
		}
	},

	initSlot: initSlot,
	isFanTakeoverLoaded: isFanTakeoverLoaded,
	getType: getType,
	getUapId: getUapId,
	isVideoEnabled: function isVideoEnabled(params) {
		var triggersArrayIsNotEmpty = Array.isArray(params.videoTriggers) && params.videoTriggers.length > 0;

		return !!params.videoAspectRatio && (params.videoPlaceholderElement || triggersArrayIsNotEmpty);
	},

	loadVideoAd: loadVideoAd,
	reset: universal_ad_package_reset,
	setType: setType,
	setUapId: setUapId
});
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
		_this.network = '9435.1';
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
		/* this.recoveryPlacements = {
  	atf: '11823778',
  	btf: '11823724',
  	hivi: '11823799'
  } */
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
		_this.debugPlacementId = '5768085';
		_this.isDebugMode = ad_engine_["utils"].queryString.get('appnexusast_debug_mode') === '1';
		return _this;
	}

	createClass_default()(AppnexusAst, [{
		key: 'prepareConfigForAdUnit',
		value: function prepareConfigForAdUnit(code, _ref) {
			var placementId = _ref.placementId;

			return {
				code: code,
				mediaTypes: {
					video: {
						context: 'outstream',
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
		_this.debugAppId = '2e55f7ad-3558-49eb-a3e1-056ccd0e74e2';
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
		/* this.recoveryConfig = {
  	TOP_LEADERBOARD: {
  		sizes: [
  			[728, 90],
  			[970, 250]
  		],
  		siteId: 215807
  	},
  	TOP_RIGHT_BOXAD: {
  		sizes: [
  			[300, 250],
  			[300, 600]
  		],
  		siteId: 215808
  	},
  	INCONTENT_BOXAD_1: {
  		sizes: [
  			[160, 600],
  			[300, 600],
  			[300, 250]
  		],
  		siteId: 215809
  	},
  	BOTTOM_LEADERBOARD: {
  		sizes: [
  			[728, 90],
  			[970, 250]
  		],
  		siteId: 215810
  	}
  }; */
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
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/onemobile.js







var onemobile_Onemobile = function (_BaseAdapter) {
	inherits_default()(Onemobile, _BaseAdapter);

	function Onemobile(options) {
		classCallCheck_default()(this, Onemobile);

		var _this = possibleConstructorReturn_default()(this, (Onemobile.__proto__ || get_prototype_of_default()(Onemobile)).call(this, options));

		_this.bidderName = 'onemobile';
		_this.siteId = '2c9d2b50015e5e9a6540a64f3eac0266';
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
		_this.delDomain = 'wikia-d.openx.net';
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
		_this.publisherId = '156260';
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
	var available = true;
	var isSlotLazy = lazyLoadSlots.indexOf(code) !== -1;

	if (lazyLoad !== 'off' && (lazyLoad === 'pre' && isSlotLazy || lazyLoad === 'post' && !isSlotLazy)) {
		available = false;
	}

	return available;
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

function getPrebid() {
	return window.pbjs;
}

function getTargeting(slotName) {
	var provider = ad_engine_["context"].get('state.isMobile') ? 'mobile' : 'gpt',
	    s1 = ad_engine_["context"].get('targeting.wikiIsTop1000') ? ad_engine_["context"].get('targeting.s1') : 'not a top1k wiki';

	return {
		pos: [slotName],
		src: [provider],
		s0: [ad_engine_["context"].get('targeting.s0') || ''],
		s1: [s1],
		s2: [ad_engine_["context"].get('targeting.s2') || ''],
		lang: [ad_engine_["context"].get('targeting.wikiLanguage') || 'en']
	};
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
		_this.accountId = 7450;
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
							language: targeting.lang[0]
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
		_this.accountId = 7450;
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
// CONCATENATED MODULE: ./src/bidders/prebid/adapters/wikia.js









var wikia_Wikia = function (_BaseAdapter) {
	inherits_default()(Wikia, _BaseAdapter);

	function Wikia(options) {
		classCallCheck_default()(this, Wikia);

		var _this = possibleConstructorReturn_default()(this, (Wikia.__proto__ || get_prototype_of_default()(Wikia)).call(this, options));

		_this.bidderName = 'wikia';
		_this.enabled = !!ad_engine_["utils"].queryString.get('wikia_adapter');

		if (_this.enabled) {
			_this.price = _this.getPrice();
		}

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
			var price = ad_engine_["utils"].queryString.get('wikia_adapter');

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
				bidResponse.cpm = _this3.price;
				bidResponse.ttl = 300;
				bidResponse.mediaType = 'banner';
				bidResponse.width = width;
				bidResponse.height = height;

				addBidResponse(bid.adUnitCode, bidResponse);
				done();
			});
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

			details.innerText = 'price: ' + this.price + ', ' + size + ': ' + size.join('x');

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

		if (_this.enabled) {
			_this.price = _this.getPrice();
		}

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
			var price = ad_engine_["utils"].queryString.get('wikia_video_adapter');

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
				bidResponse.cpm = _this3.price;
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
				done();
			});
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
			if (isValidPrice(bid)) {
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
			}]
		}
	};
}
// CONCATENATED MODULE: ./src/bidders/prebid/index.js













var prebid_Prebid = function (_BaseBidder) {
	inherits_default()(Prebid, _BaseBidder);

	function Prebid(bidderConfig, resetListener) {
		var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

		classCallCheck_default()(this, Prebid);

		var _this = possibleConstructorReturn_default()(this, (Prebid.__proto__ || get_prototype_of_default()(Prebid)).call(this, bidderConfig, resetListener, timeout));

		_this.logGroup = 'prebid-bidder';
		_this.name = 'prebid';
		_this.loaded = false;
		_this.lazyLoaded = false;
		_this.isLazyLoadingEnabled = _this.bidderConfig.lazyLoadingEnabled;
		_this.isCMPEnabled = ad_engine_["context"].get('custom.isCMPEnabled');
		_this.adUnits = setupAdUnits(_this.bidderConfig, _this.isLazyLoadingEnabled ? 'pre' : 'off');
		_this.prebidConfig = {
			debug: ad_engine_["utils"].queryString.get('pbjs_debug') === '1',
			enableSendAllBids: true,
			bidderSequence: 'random',
			bidderTimeout: _this.timeout,
			userSync: {
				iframeEnabled: true,
				enabledBidders: [],
				syncDelay: 6000
			}
		};

		if (_this.isCMPEnabled) {
			_this.prebidConfig.consentManagement = {
				cmpApi: 'iab',
				timeout: _this.timeout,
				allowAuctionWithoutConsent: false
			};
		}

		window.pbjs = window.pbjs || {};
		window.pbjs.que = window.pbjs.que || [];
		window.pbjs.que.push(function () {
			window.pbjs.setConfig(_this.prebidConfig);
		});
		return _this;
	}

	createClass_default()(Prebid, [{
		key: 'calculatePrices',
		value: function calculatePrices() {
			// biddersPerformanceMap = performanceTracker.updatePerformanceMap(biddersPerformanceMap);
		}
	}, {
		key: 'callBids',
		value: function callBids(bidsBackHandler) {
			var _this2 = this;

			if (!this.adUnits) {
				this.adUnits = setupAdUnits(this.bidderConfig, this.isLazyLoadingEnabled ? 'pre' : 'off');
			}

			if (this.adUnits.length > 0) {
				window.pbjs.que.push(function () {
					window.pbjs.bidderSettings = getSettings();
				});

				this.requestBids(this.adUnits, bidsBackHandler, true);
			}

			this.loaded = true;

			if (this.isLazyLoadingEnabled) {
				window.addEventListener('adengine.lookup.prebid.lazy', function () {
					_this2.lazyCall(bidsBackHandler);
				});
			}
		}
	}, {
		key: 'lazyCall',
		value: function lazyCall(bidsBackHandler) {
			if (!this.lazyLoaded) {
				this.lazyLoaded = true;

				if (!universalAdPackage.isFanTakeoverLoaded()) {
					var adUnitsLazy = setupAdUnits(this.bidderConfig, 'post');

					if (adUnitsLazy.length > 0) {
						this.requestBids(adUnitsLazy, bidsBackHandler, false);

						this.adUnits = this.adUnits.concat(adUnitsLazy);
					}
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
			return getPrebidBestPrice(slotName);
		}
	}, {
		key: 'getTargetingParams',
		value: function getTargetingParams(slotName) {
			var slotParams = {};

			if (window.pbjs && typeof window.pbjs.getBidResponsesForAdUnitCode === 'function') {
				var bids = window.pbjs.getBidResponsesForAdUnitCode(slotName).bids || [];

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

					slotParams = bidParams.adserverTargeting;
				}
			}

			return slotParams || {};
		}
	}, {
		key: 'isSupported',
		value: function isSupported(slotName) {
			return this.adUnits && this.adUnits.some(function (adUnit) {
				return adUnit.code === slotName;
			});
		}
	}, {
		key: 'requestBids',
		value: function requestBids(adUnits, bidsBackHandler, withRemove) {
			var _this3 = this;

			window.pbjs.que.push(function () {
				if (withRemove) {
					_this3.removeAdUnits();
				}

				window.pbjs.requestBids({
					adUnits: adUnits,
					bidsBackHandler: bidsBackHandler
				});
			});
		}
	}]);

	return Prebid;
}(base_bidder_BaseBidder);
prebid_Prebid.validResponseStatusCode = 1;
prebid_Prebid.errorResponseStatusCode = 2;
// CONCATENATED MODULE: ./src/bidders/index.js





__webpack_require__(95);

var bidIndex = {
	a9: {
		pos: 2,
		char: '9'
	},
	prebid: {
		pos: 4,
		char: 'P'
	}
};

var bidderMarker = ['x', 'x', 'x', 'x', 'x'];
var biddersRegistry = {};
var realSlotPrices = {};

function applyTargetingParams(slotId, targeting) {
	keys_default()(targeting).forEach(function (key) {
		return ad_engine_["context"].set('slots.' + slotId + '.targeting.' + key, targeting[key]);
	});
}

function getBidParameters(slotName) {
	var floorPrice = 0;
	var slotParams = {};

	if (biddersRegistry.prebid && biddersRegistry.prebid.wasCalled()) {
		var prebidPrices = biddersRegistry.prebid.getSlotBestPrice(slotName);

		floorPrice = Math.max.apply(null, keys_default()(prebidPrices).filter(function (key) {
			return !isNaN(parseFloat(prebidPrices[key])) && parseFloat(prebidPrices[key]) > 0;
		}).map(function (key) {
			return parseFloat(prebidPrices[key]);
		}));
	}

	keys_default()(biddersRegistry).forEach(function (bidderName) {
		var bidder = biddersRegistry[bidderName];

		if (bidder && bidder.wasCalled()) {
			var params = bidder.getSlotTargetingParams(slotName, floorPrice);

			keys_default()(params).forEach(function (key) {
				slotParams[key] = params[key];
			});

			if (bidder.hasResponse()) {
				bidderMarker = updateBidderMarker(bidder.getName(), bidderMarker);
			}
		}
	});

	slotParams.bid = bidderMarker.join('');

	return slotParams;
}

function getCurrentSlotPrices(slotName) {
	var slotPrices = {};

	keys_default()(biddersRegistry).forEach(function (bidder) {
		bidder = biddersRegistry[bidder];

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

function requestBids(_ref) {
	var _ref$resetListener = _ref.resetListener,
	    resetListener = _ref$resetListener === undefined ? null : _ref$resetListener,
	    _ref$responseListener = _ref.responseListener,
	    responseListener = _ref$responseListener === undefined ? null : _ref$responseListener;

	var config = ad_engine_["context"].get('bidders');

	if (config.prebid) {
		biddersRegistry.prebid = new prebid_Prebid(config.prebid, resetListener, config.timeout);

		if (responseListener) {
			biddersRegistry.prebid.addResponseListener(responseListener);
		}

		biddersRegistry.prebid.call();
	}

	if (config.a9 && config.a9.enabled) {
		biddersRegistry.a9 = new a9_A9(config.a9, resetListener, config.timeout);

		if (responseListener) {
			biddersRegistry.a9.addResponseListener(responseListener);
		}

		biddersRegistry.a9.call();
	}
}

function storeRealSlotPrices(slotName) {
	realSlotPrices[slotName] = getCurrentSlotPrices(slotName);
}

function updateBidderMarker(bidderName, bidMarker) {
	if (!bidIndex[bidderName]) {
		return bidMarker;
	}

	var bidder = bidIndex[bidderName];
	bidMarker[bidder.pos] = bidder.char;

	return bidMarker;
}

function bidders_updateSlotsTargeting() {
	var slots = ad_engine_["context"].get('slots');

	keys_default()(slots).forEach(function (slotId) {
		var bidderTargeting = getBidParameters(slotId);

		applyTargetingParams(slotId, bidderTargeting);
	});
}

var bidders_bidders = {
	getDfpSlotPrices: getDfpSlotPrices,
	requestBids: requestBids,
	storeRealSlotPrices: storeRealSlotPrices,
	updateSlotsTargeting: bidders_updateSlotsTargeting
};
// CONCATENATED MODULE: ./src/common/product-info.js



function findSlotGroup(product) {
	var slotGroups = ad_engine_["context"].get('slotGroups'),
	    result = keys_default()(slotGroups).filter(function (name) {
		return slotGroups[name].indexOf(product) !== -1;
	});

	return result.length === 1 ? result[0] : null;
}

function getGroup(product) {
	return findSlotGroup(product.toUpperCase()) || 'OTHER';
}

function getAdProductInfo(slotName, loadedTemplate, loadedProduct) {
	var product = slotName;

	if (loadedProduct === 'abcd') {
		product = 'ABCD';
	} else if (loadedProduct === 'vuap') {
		product = 'UAP_' + loadedTemplate.toUpperCase();
	}

	return {
		adGroup: getGroup(product),
		adProduct: product.toLowerCase()
	};
}
// CONCATENATED MODULE: ./src/common/index.js

// CONCATENATED MODULE: ./src/templates/floating-rail.js




var adsInRail = 2;
var biggestAdSize = 600;

var availableSpace = null;

var floating_rail_FloatingRail = function () {
	createClass_default()(FloatingRail, null, [{
		key: 'getName',
		value: function getName() {
			return 'floatingRail';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			return {
				enabled: true,
				railSelector: '#rail',
				wrapperSelector: '#rail-wrapper',
				startOffset: 0
			};
		}
	}]);

	function FloatingRail() {
		classCallCheck_default()(this, FloatingRail);

		this.config = ad_engine_["context"].get('templates.floatingRail');
		this.rail = document.querySelector(this.config.railSelector);
		this.railWrapper = document.querySelector(this.config.wrapperSelector);
	}

	createClass_default()(FloatingRail, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			var offset = this.params.offset || 0;

			if (!this.railWrapper || !FloatingRail.isEnabled() || this.getAvailableSpace() === 0) {
				return;
			}

			var floatingSpace = Math.min(offset, this.getAvailableSpace());

			ad_engine_["scrollListener"].addCallback(function () {
				var start = _this.config.startOffset + ad_engine_["utils"].getTopOffset(_this.railWrapper),
				    end = start + floatingSpace,
				    scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

				if (scrollPosition <= start) {
					_this.rail.style.paddingTop = '';
					_this.rail.classList.add('rail-static');
					_this.rail.classList.remove('rail-fixed');
				} else if (scrollPosition >= end) {
					_this.rail.style.paddingTop = floatingSpace + 'px';
					_this.rail.classList.remove('rail-static');
					_this.rail.classList.remove('rail-fixed');
				} else {
					_this.rail.style.paddingTop = '';
					_this.rail.classList.remove('rail-static');
					_this.rail.classList.add('rail-fixed');
				}
			});
		}
	}, {
		key: 'getAvailableSpace',
		value: function getAvailableSpace() {
			if (availableSpace === null) {
				var children = this.railWrapper.lastElementChild,
				    childrenHeight = children.offsetTop + children.offsetHeight,
				    space = this.railWrapper.offsetHeight;

				availableSpace = Math.max(0, space - childrenHeight - adsInRail * biggestAdSize);
			}

			return availableSpace;
		}
	}], [{
		key: 'isEnabled',
		value: function isEnabled() {
			return ad_engine_["context"].get('templates.floatingRail.enabled') && ad_engine_["context"].get('state.isMobile') === false;
		}
	}]);

	return FloatingRail;
}();
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(16);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(28);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toArray.js
var toArray = __webpack_require__(82);
var toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);

// CONCATENATED MODULE: ./src/templates/uap/resolved-state-switch.js



var cacheKey = 'adEngine_resolvedStateCounter';
var cacheTtl = 24 * 3600;
var now = new Date();

function createCacheKey() {
	return cacheKey + '_' + universalAdPackage.getUapId();
}

function findRecordInCache() {
	return ad_engine_["localCache"].get(createCacheKey());
}

function wasDefaultStateSeen() {
	var record = findRecordInCache();

	// check for presence in localStorage and if present, make sure that we're
	// not comparing to current session data - bfab that wants to load after bfaa
	return !!record && now.getTime() !== record.lastSeenDate;
}

function updateInformationAboutSeenDefaultStateAd() {
	ad_engine_["localCache"].set(createCacheKey(), {
		adId: universalAdPackage.getUapId(),
		lastSeenDate: now.getTime()
	}, cacheTtl);
}

var resolvedStateSwitch = {
	updateInformationAboutSeenDefaultStateAd: updateInformationAboutSeenDefaultStateAd,
	wasDefaultStateSeen: wasDefaultStateSeen
};
// CONCATENATED MODULE: ./src/templates/uap/resolved-state.js






var DEFAULT_STATE = 'default';
var RESOLVED_STATE = 'resolved';

function getQueryParam() {
	return ad_engine_["utils"].queryString.get('resolved_state', null);
}

function isForcedByURLParam() {
	return [true, 'true', '1'].indexOf(getQueryParam()) > -1;
}

function isBlockedByURLParam() {
	return [false, 'blocked', 'false', '0'].indexOf(getQueryParam()) > -1;
}

function setState(state, params) {
	var image1 = params.image1,
	    image2 = params.image2;

	var promises = [];
	var srcPropertyName = 'defaultStateSrc';

	if (state === RESOLVED_STATE) {
		params.aspectRatio = params.resolvedStateAspectRatio;
		srcPropertyName = 'resolvedStateSrc';
	}

	promises.push(promise_default.a.resolve(params));
	image1.element.src = image1[srcPropertyName];
	promises.push(promise_default.a.race([ad_engine_["utils"].once(image1.element, 'load'), ad_engine_["utils"].once(image1.element, 'error')]));

	if (image2 && image2[srcPropertyName]) {
		image2.element.src = image2[srcPropertyName];
		promises.push(promise_default.a.race([ad_engine_["utils"].once(image2.element, 'load'), ad_engine_["utils"].once(image2.element, 'error')]));
	}

	return promise_default.a.all(promises);
}

function setDefaultState(params) {
	return setState(DEFAULT_STATE, params);
}

function resolved_state_setResolvedState(params) {
	return setState(RESOLVED_STATE, params);
}

function templateSupportsResolvedState(params) {
	return !!(params.image1 && params.image1.resolvedStateSrc) || params.theme === 'hivi';
}

function isResolvedState(params) {
	var result = false;

	if (params.resolvedStateForced) {
		return true;
	}

	if (templateSupportsResolvedState(params)) {
		var showResolvedState = !isBlockedByURLParam();
		var defaultStateSeen = true;

		if (showResolvedState) {
			defaultStateSeen = resolvedStateSwitch.wasDefaultStateSeen() || isForcedByURLParam();
		}

		result = showResolvedState && defaultStateSeen;
	}

	return result;
}

var resolvedState = {
	// This method is used by classic UAP only (not-HiVi)
	// UAP:HiVi template does not support srcPropertyNames like defaultStateSrc
	// UAP:HiVi switch images in uap/themes/hivi/hivi.js by swapping hidden-state class
	// TODO: Remove this code once we get rid of old (classic) UAP
	setImage: function setImage(videoSettings) {
		var params = videoSettings.getParams();

		if (templateSupportsResolvedState(params)) {
			if (videoSettings.isResolvedState()) {
				return resolved_state_setResolvedState(params).then(function (_ref) {
					var _ref2 = toArray_default()(_ref),
					    updatedParams = _ref2[0],
					    args = _ref2.slice(1);

					videoSettings.updateParams(updatedParams);
					return [updatedParams].concat(toConsumableArray_default()(args));
				});
			}

			resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			return setDefaultState(params);
		}

		return promise_default.a.resolve();
	},

	isResolvedState: isResolvedState
};
// CONCATENATED MODULE: ./src/templates/uap/video-settings.js





var video_settings_VideoSettings = function () {
	function VideoSettings(params) {
		classCallCheck_default()(this, VideoSettings);

		this.params = params;

		Object.defineProperty(this, 'resolvedState', {
			value: resolvedState.isResolvedState(this.params),
			writable: false
		});

		Object.defineProperty(this, 'autoPlay', {
			value: this.detectAutoPlay(),
			writable: false
		});

		Object.defineProperty(this, 'splitLayout', {
			value: Boolean(params.splitLayoutVideoPosition),
			writable: false
		});
	}

	createClass_default()(VideoSettings, [{
		key: 'detectAutoPlay',
		value: function detectAutoPlay() {
			var defaultStateAutoPlay = this.params.autoPlay && !this.resolvedState,
			    resolvedStateAutoPlay = this.params.resolvedStateAutoPlay && this.resolvedState;
			return Boolean(defaultStateAutoPlay || resolvedStateAutoPlay);
		}
	}, {
		key: 'getParams',
		value: function getParams() {
			return assign_default()({}, this.params);
		}
	}, {
		key: 'updateParams',
		value: function updateParams(params) {
			assign_default()(this.params, params);
		}
	}, {
		key: 'isAutoPlay',
		value: function isAutoPlay() {
			return this.autoPlay;
		}
	}, {
		key: 'isResolvedState',
		value: function isResolvedState() {
			return this.resolvedState;
		}
	}, {
		key: 'isSplitLayout',
		value: function isSplitLayout() {
			return this.splitLayout;
		}
	}]);

	return VideoSettings;
}();
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/get.js
var helpers_get = __webpack_require__(13);
var helpers_get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// CONCATENATED MODULE: ./src/templates/uap/themes/theme.js




var theme_BigFancyAdTheme = function () {
	function BigFancyAdTheme(adSlot, params) {
		classCallCheck_default()(this, BigFancyAdTheme);

		this.adSlot = adSlot;
		this.container = this.adSlot.getElement();
		this.config = ad_engine_["context"].get('templates.bfaa');
		this.params = params;
	}

	createClass_default()(BigFancyAdTheme, [{
		key: 'onAdReady',
		value: function onAdReady() {}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady() {}
	}]);

	return BigFancyAdTheme;
}();
// CONCATENATED MODULE: ./src/templates/uap/themes/classic/classic.js











var classic_BigFancyAdClassicTheme = function (_BigFancyAdTheme) {
	inherits_default()(BigFancyAdClassicTheme, _BigFancyAdTheme);

	function BigFancyAdClassicTheme() {
		classCallCheck_default()(this, BigFancyAdClassicTheme);

		return possibleConstructorReturn_default()(this, (BigFancyAdClassicTheme.__proto__ || get_prototype_of_default()(BigFancyAdClassicTheme)).apply(this, arguments));
	}

	createClass_default()(BigFancyAdClassicTheme, [{
		key: 'onAdReady',
		value: function onAdReady(iframe) {
			helpers_get_default()(BigFancyAdClassicTheme.prototype.__proto__ || get_prototype_of_default()(BigFancyAdClassicTheme.prototype), 'onAdReady', this).call(this, iframe);

			if (universalAdPackage.isVideoEnabled(this.params)) {
				var videoSettings = new video_settings_VideoSettings(this.params);

				if (videoSettings.isSplitLayout()) {
					var theme = videoSettings.getParams().splitLayoutVideoPosition === 'right' ? 'theme-split-right' : 'theme-split-left';

					this.params.container.classList.add(theme);
				} else if (!videoSettings.isAutoPlay()) {
					document.body.classList.add('ctp-vuap-loaded');
				}
			}
		}
	}]);

	return BigFancyAdClassicTheme;
}(theme_BigFancyAdTheme);

var classic_BfaaTheme = function (_BigFancyAdClassicThe) {
	inherits_default()(BfaaTheme, _BigFancyAdClassicThe);

	function BfaaTheme() {
		classCallCheck_default()(this, BfaaTheme);

		return possibleConstructorReturn_default()(this, (BfaaTheme.__proto__ || get_prototype_of_default()(BfaaTheme)).apply(this, arguments));
	}

	createClass_default()(BfaaTheme, [{
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this3 = this;

			if (!this.params.splitLayoutVideoPosition) {
				video.addEventListener('wikiaAdStarted', function () {
					_this3.recalculatePaddingTop(_this3.params.videoAspectRatio);
				});

				video.addEventListener('wikiaAdCompleted', function () {
					_this3.recalculatePaddingTop(_this3.params.aspectRatio);
				});
			}
		}
	}, {
		key: 'recalculatePaddingTop',
		value: function recalculatePaddingTop(finalAspectRatio) {
			var _this4 = this;

			this.config.mainContainer.style.paddingTop = 100 / finalAspectRatio + '%';

			this.container.style.height = this.container.offsetHeight + 'px';
			// get offsetWidth from existing DOM element in order to force repaint
			this.container.style.height = this.container.offsetWidth / finalAspectRatio + 'px';

			setTimeout(function () {
				// clear height so ad is responsive again
				_this4.container.style.height = '';
			}, toggle_animation.duration);
		}
	}]);

	return BfaaTheme;
}(classic_BigFancyAdClassicTheme);

var classic_BfabTheme = function (_BigFancyAdClassicThe2) {
	inherits_default()(BfabTheme, _BigFancyAdClassicThe2);

	function BfabTheme() {
		classCallCheck_default()(this, BfabTheme);

		return possibleConstructorReturn_default()(this, (BfabTheme.__proto__ || get_prototype_of_default()(BfabTheme)).apply(this, arguments));
	}

	return BfabTheme;
}(classic_BigFancyAdClassicTheme);
// CONCATENATED MODULE: ./src/templates/uap/themes/classic/ready.js





var adIsReady = function () {
	var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
		var adSlot = _ref.adSlot,
		    params = _ref.params,
		    videoSettings = _ref.videoSettings;
		return regenerator_default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return resolvedState.setImage(videoSettings);

					case 2:
						return _context.abrupt('return', ad_engine_["slotTweaker"].makeResponsive(adSlot, params.aspectRatio));

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function adIsReady(_x) {
		return _ref2.apply(this, arguments);
	};
}();
// CONCATENATED MODULE: ./src/templates/uap/themes/classic/index.js


// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/symbol.js
var symbol = __webpack_require__(23);
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// EXTERNAL MODULE: external "lodash/toPlainObject"
var toPlainObject_ = __webpack_require__(81);
var toPlainObject_default = /*#__PURE__*/__webpack_require__.n(toPlainObject_);

// EXTERNAL MODULE: external "lodash/isUndefined"
var isUndefined_ = __webpack_require__(80);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined_);

// EXTERNAL MODULE: external "lodash/mapValues"
var mapValues_ = __webpack_require__(59);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues_);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(79);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(40);

// CONCATENATED MODULE: ./src/templates/uap/ui/ui-component.js



var ui_component_UiComponent = function () {
	createClass_default()(UiComponent, [{
		key: "classNames",
		get: function get() {
			return this.props.classNames || [];
		}
	}]);

	function UiComponent() {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		classCallCheck_default()(this, UiComponent);

		this.props = props;
	}

	createClass_default()(UiComponent, [{
		key: "render",
		value: function render() {
			return document.createDocumentFragment();
		}
	}]);

	return UiComponent;
}();


// CONCATENATED MODULE: ./src/templates/uap/ui/advertisement-label.js








var advertisement_label_AdvertisementLabel = function (_UiComponent) {
	inherits_default()(AdvertisementLabel, _UiComponent);

	function AdvertisementLabel() {
		classCallCheck_default()(this, AdvertisementLabel);

		return possibleConstructorReturn_default()(this, (AdvertisementLabel.__proto__ || get_prototype_of_default()(AdvertisementLabel)).apply(this, arguments));
	}

	createClass_default()(AdvertisementLabel, [{
		key: 'render',
		value: function render() {
			var label = document.createElement('div');

			label.innerText = getTranslation('labels', 'advertisement');
			label.className = 'advertisement-label';

			return label;
		}
	}]);

	return AdvertisementLabel;
}(ui_component_UiComponent);


// CONCATENATED MODULE: ./src/templates/uap/ui/button.js









var button_Button = function (_UiComponent) {
	inherits_default()(Button, _UiComponent);

	function Button() {
		classCallCheck_default()(this, Button);

		return possibleConstructorReturn_default()(this, (Button.__proto__ || get_prototype_of_default()(Button)).apply(this, arguments));
	}

	createClass_default()(Button, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var buttonElement = document.createElement('button');

			this.classNames.forEach(function (className) {
				return buttonElement.classList.add(className);
			});
			buttonElement.addEventListener('click', function (event) {
				return _this2.onClick(event);
			});

			return buttonElement;
		}
	}, {
		key: 'onClick',
		value: function onClick(event) {
			var onClick = this.props.onClick;


			if (typeof onClick === 'function') {
				return onClick(event);
			}

			return undefined;
		}
	}, {
		key: 'classNames',
		get: function get() {
			return ['button-control'].concat(toConsumableArray_default()(helpers_get_default()(Button.prototype.__proto__ || get_prototype_of_default()(Button.prototype), 'classNames', this)));
		}
	}]);

	return Button;
}(ui_component_UiComponent);


// CONCATENATED MODULE: ./src/templates/uap/ui/close-button.js











var close_button_CloseButton = function (_UiComponent) {
	inherits_default()(CloseButton, _UiComponent);

	function CloseButton() {
		classCallCheck_default()(this, CloseButton);

		return possibleConstructorReturn_default()(this, (CloseButton.__proto__ || get_prototype_of_default()(CloseButton)).apply(this, arguments));
	}

	createClass_default()(CloseButton, [{
		key: 'render',
		value: function render() {
			var onClick = this.props.onClick;
			var classNames = this.classNames;

			var button = new button_Button({ onClick: onClick, classNames: classNames }).render();
			var closeIcon = createIcon(icons_icons.CROSS, ['icon']);

			button.appendChild(closeIcon);

			return button;
		}
	}, {
		key: 'classNames',
		get: function get() {
			return ['button-close'].concat(toConsumableArray_default()(helpers_get_default()(CloseButton.prototype.__proto__ || get_prototype_of_default()(CloseButton.prototype), 'classNames', this)));
		}
	}]);

	return CloseButton;
}(ui_component_UiComponent);


// EXTERNAL MODULE: external "lodash/isFunction"
var isFunction_ = __webpack_require__(78);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_);

// CONCATENATED MODULE: ./src/templates/uap/themes/hivi/sticky-bfaa.js














var sticky_bfaa_StickyBfaa = function (_EventEmitter) {
	inherits_default()(StickyBfaa, _EventEmitter);

	function StickyBfaa(adSlot) {
		var customWhen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : promise_default.a.resolve();

		classCallCheck_default()(this, StickyBfaa);

		var _this = possibleConstructorReturn_default()(this, (StickyBfaa.__proto__ || get_prototype_of_default()(StickyBfaa)).call(this));

		_this.adSlot = adSlot;
		_this.customWhen = customWhen;
		_this.sticky = false;
		_this.isRevertStickinessBlocked = false;
		_this.logger = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return ad_engine_["utils"].logger.apply(ad_engine_["utils"], [StickyBfaa.LOG_GROUP].concat(args));
		};
		return _this;
	}

	createClass_default()(StickyBfaa, [{
		key: 'run',
		value: function () {
			var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
				var _this2 = this;

				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return ad_engine_["slotTweaker"].onReady(this.adSlot);

							case 2:
								if (!document.hidden) {
									_context.next = 5;
									break;
								}

								_context.next = 5;
								return ad_engine_["utils"].once(window, 'visibilitychange');

							case 5:

								this.adSlot.once('unstickImmediately', function () {
									_this2.logger('Unsticking bfaa');
									_this2.emit(StickyBfaa.UNSTICK_IMMEDIATELY_EVENT);
									_this2.sticky = false;
								});

								this.onAdReady();

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function run() {
				return _ref.apply(this, arguments);
			}

			return run;
		}()
	}, {
		key: 'isSticky',
		value: function isSticky() {
			return this.sticky;
		}
	}, {
		key: 'applyStickiness',
		value: function applyStickiness() {
			if (!this.sticky) {
				this.logger('Applying bfaa stickiness');
				this.sticky = true;
				this.emit(StickyBfaa.STICKINESS_CHANGE_EVENT, this.sticky);
			} else {
				this.logger('bfaa stickiness is already applied');
			}
		}
	}, {
		key: 'revertStickiness',
		value: function revertStickiness() {
			if (this.sticky) {
				this.logger('Reverting bfaa stickiness');
				this.sticky = false;
				this.emit(StickyBfaa.STICKINESS_CHANGE_EVENT, this.sticky);
			} else {
				this.logger('bfaa stickiness is already reverted');
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.logger('Closing and removing bfaa');
			this.emit(StickyBfaa.CLOSE_CLICKED_EVENT, this.sticky);
			this.sticky = false;
		}
	}, {
		key: 'registerRevertStickiness',
		value: function () {
			var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
				return regenerator_default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.logger('waiting for user interaction');
								_context2.next = 3;
								return ad_engine_["utils"].once(window, 'scroll');

							case 3:
								_context2.next = 5;
								return ad_engine_["utils"].wait();

							case 5:
								if (!this.isRevertStickinessBlocked) {
									this.revertStickiness();
								} else {
									this.registerRevertStickiness();
								}

							case 6:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function registerRevertStickiness() {
				return _ref2.apply(this, arguments);
			}

			return registerRevertStickiness;
		}()
	}, {
		key: 'blockRevertStickiness',
		value: function blockRevertStickiness() {
			this.isRevertStickinessBlocked = true;
		}
	}, {
		key: 'unblockRevertStickiness',
		value: function unblockRevertStickiness() {
			this.isRevertStickinessBlocked = false;
		}
	}, {
		key: 'onAdReady',
		value: function () {
			var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
				return regenerator_default.a.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								this.applyStickiness();
								this.logger('waiting for viewability and custom condition');

								_context3.next = 4;
								return promise_default.a.all([ad_engine_["utils"].once(this.adSlot, ad_engine_["AdSlot"].SLOT_VIEWED_EVENT), isFunction_default()(this.customWhen) ? this.customWhen() : this.customWhen]);

							case 4:

								this.registerRevertStickiness();

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function onAdReady() {
				return _ref3.apply(this, arguments);
			}

			return onAdReady;
		}()
	}]);

	return StickyBfaa;
}(external_events_["EventEmitter"]);
sticky_bfaa_StickyBfaa.LOG_GROUP = 'sticky-bfaa';
sticky_bfaa_StickyBfaa.STICKINESS_CHANGE_EVENT = symbol_default()('stickinessChange');
sticky_bfaa_StickyBfaa.CLOSE_CLICKED_EVENT = symbol_default()('closeClicked');
sticky_bfaa_StickyBfaa.UNSTICK_IMMEDIATELY_EVENT = symbol_default()('unstickImmediately');
// CONCATENATED MODULE: ./src/templates/uap/ui/animate.js




var animate = function () {
	var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(adSlot, className, duration) {
		var container;
		return regenerator_default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						container = adSlot.getElement();


						container.style.animationDuration = duration + 'ms';
						container.classList.add(className);
						_context.next = 5;
						return ad_engine_["utils"].wait(duration);

					case 5:
						container.classList.remove(className);
						container.style.animationDuration = '';

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function animate(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();
// CONCATENATED MODULE: ./src/templates/uap/themes/hivi/hivi.js




























var HIVI_RESOLVED_THRESHOLD = 0.995;

var hivi_BigFancyAdHiviTheme = function (_BigFancyAdTheme) {
	inherits_default()(BigFancyAdHiviTheme, _BigFancyAdTheme);

	function BigFancyAdHiviTheme() {
		classCallCheck_default()(this, BigFancyAdHiviTheme);

		return possibleConstructorReturn_default()(this, (BigFancyAdHiviTheme.__proto__ || get_prototype_of_default()(BigFancyAdHiviTheme)).apply(this, arguments));
	}

	createClass_default()(BigFancyAdHiviTheme, [{
		key: 'onAdReady',
		value: function onAdReady() {
			helpers_get_default()(BigFancyAdHiviTheme.prototype.__proto__ || get_prototype_of_default()(BigFancyAdHiviTheme.prototype), 'onAdReady', this).call(this);
			this.container.classList.add('theme-hivi');
			this.addAdvertisementLabel();
		}
	}, {
		key: 'addAdvertisementLabel',
		value: function addAdvertisementLabel() {
			var advertisementLabel = new advertisement_label_AdvertisementLabel();

			this.container.appendChild(advertisementLabel.render());
		}
	}]);

	return BigFancyAdHiviTheme;
}(theme_BigFancyAdTheme);

var hivi_BfaaTheme = function (_BigFancyAdHiviTheme) {
	inherits_default()(BfaaTheme, _BigFancyAdHiviTheme);

	function BfaaTheme(adSlot, params) {
		classCallCheck_default()(this, BfaaTheme);

		var _this2 = possibleConstructorReturn_default()(this, (BfaaTheme.__proto__ || get_prototype_of_default()(BfaaTheme)).call(this, adSlot, params));

		assign_default()(_this2, toPlainObject_default()(new external_events_["EventEmitter"]()));

		_this2.stickyBfaa = null;
		_this2.scrollListener = null;
		_this2.video = null;
		_this2.isLocked = false;
		_this2.onResolvedStateScroll = null;

		if (_this2.params.isSticky && _this2.config.stickinessAllowed) {
			_this2.addStickinessPlugin();
		}

		if (!_this2.config.defaultStateAllowed) {
			_this2.params.resolvedStateForced = true;
		}
		return _this2;
	}

	createClass_default()(BfaaTheme, [{
		key: 'addStickinessPlugin',
		value: function addStickinessPlugin() {
			this.addUnstickLogic();
			this.addUnstickButton();
			this.addUnstickEvents();
			this.stickyBfaa.run();
		}
	}, {
		key: 'addUnstickLogic',
		value: function addUnstickLogic() {
			var _this3 = this;

			var _params = this.params,
			    stickyAdditionalTime = _params.stickyAdditionalTime,
			    stickyUntilVideoViewed = _params.stickyUntilVideoViewed;

			var whenResolvedAndVideoViewed = function () {
				var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
					return regenerator_default.a.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.next = 2;
									return promise_default.a.all([ad_engine_["utils"].once(_this3, BfaaTheme.RESOLVED_STATE_EVENT), stickyUntilVideoViewed ? ad_engine_["utils"].once(_this3.adSlot, ad_engine_["AdSlot"].VIDEO_VIEWED_EVENT) : promise_default.a.resolve()]);

								case 2:
									_context.next = 4;
									return ad_engine_["utils"].wait(isUndefined_default()(stickyAdditionalTime) ? BfaaTheme.DEFAULT_UNSTICK_DELAY : stickyAdditionalTime);

								case 4:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this3);
				}));

				return function whenResolvedAndVideoViewed() {
					return _ref.apply(this, arguments);
				};
			}();

			this.stickyBfaa = new sticky_bfaa_StickyBfaa(this.adSlot, whenResolvedAndVideoViewed());
		}
	}, {
		key: 'addUnstickButton',
		value: function addUnstickButton() {
			var _this4 = this;

			var closeButton = new close_button_CloseButton({
				classNames: ['button-unstick'],
				onClick: function onClick() {
					_this4.stickyBfaa.close();
				}
			});

			this.container.appendChild(closeButton.render());
		}
	}, {
		key: 'addUnstickEvents',
		value: function addUnstickEvents() {
			var _this5 = this;

			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.STICKINESS_CHANGE_EVENT, function (isSticky) {
				return _this5.onStickinessChange(isSticky);
			});
			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.CLOSE_CLICKED_EVENT, this.onCloseClicked.bind(this));
			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.UNSTICK_IMMEDIATELY_EVENT, this.unstickImmediately.bind(this));
		}
	}, {
		key: 'onAdReady',
		value: function onAdReady() {
			var _this6 = this;

			helpers_get_default()(BfaaTheme.prototype.__proto__ || get_prototype_of_default()(BfaaTheme.prototype), 'onAdReady', this).call(this);

			if (resolvedState.isResolvedState(this.params)) {
				this.setResolvedState(true);
			} else {
				resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
				this.scrollListener = ad_engine_["scrollListener"].addCallback(function () {
					return _this6.updateAdSizes();
				});
				// Manually run update on scroll once
				this.updateAdSizes();
			}
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this7 = this;

			helpers_get_default()(BfaaTheme.prototype.__proto__ || get_prototype_of_default()(BfaaTheme.prototype), 'onVideoReady', this).call(this, video);

			this.video = video;
			video.addEventListener('wikiaAdStarted', function () {
				_this7.updateAdSizes();

				if (!video.params.autoPlay) {
					_this7.resetResolvedState();
				}
			});
			video.addEventListener('wikiaAdCompleted', function () {
				if (!_this7.isLocked) {
					_this7.setResolvedState(true);
				}
			});
			video.addEventListener('wikiaFullscreenChange', function () {
				if (video.isFullscreen()) {
					_this7.stickyBfaa.blockRevertStickiness();
					_this7.container.classList.add('theme-video-fullscreen');
				} else {
					_this7.stickyBfaa.unblockRevertStickiness();
					_this7.container.classList.remove('theme-video-fullscreen');
					_this7.updateAdSizes();
				}
			});
		}
	}, {
		key: 'onStickinessChange',
		value: function () {
			var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(isSticky) {
				var stickinessBeforeCallback, stickinessAfterCallback;
				return regenerator_default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								stickinessBeforeCallback = isSticky ? this.config.onBeforeStickBfaaCallback : this.config.onBeforeUnstickBfaaCallback;
								stickinessAfterCallback = isSticky ? this.config.onAfterStickBfaaCallback : this.config.onAfterUnstickBfaaCallback;


								stickinessBeforeCallback.call(this.config, this.adSlot, this.params);

								if (isSticky) {
									_context2.next = 11;
									break;
								}

								this.config.moveNavbar(0, SLIDE_OUT_TIME);
								_context2.next = 7;
								return animate(this.adSlot, CSS_CLASSNAME_SLIDE_OUT_ANIMATION, SLIDE_OUT_TIME);

							case 7:
								this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);
								animate(this.adSlot, CSS_CLASSNAME_FADE_IN_ANIMATION, FADE_IN_TIME);
								_context2.next = 12;
								break;

							case 11:
								this.adSlot.getElement().classList.add(CSS_CLASSNAME_STICKY_BFAA);

							case 12:

								stickinessAfterCallback.call(this.config, this.adSlot, this.params);

							case 13:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function onStickinessChange(_x) {
				return _ref2.apply(this, arguments);
			}

			return onStickinessChange;
		}()
	}, {
		key: 'onCloseClicked',
		value: function onCloseClicked() {
			this.unstickImmediately();

			this.config.mainContainer.style.paddingTop = '0';

			this.adSlot.disable();
			this.adSlot.collapse();
		}
	}, {
		key: 'unstickImmediately',
		value: function unstickImmediately() {
			var stopVideo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			ad_engine_["scrollListener"].removeCallback(this.scrollListener);
			this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);

			if (stopVideo && this.video && this.video.ima.getAdsManager()) {
				this.video.stop();
			}

			this.config.moveNavbar(0, 0);
			this.stickyBfaa.sticky = false;
		}
	}, {
		key: 'updateAdSizes',
		value: function updateAdSizes() {
			var _params$config = this.params.config,
			    aspectRatio = _params$config.aspectRatio,
			    state = _params$config.state;
			var currentWidth = this.config.mainContainer.offsetWidth;

			var isResolved = this.container.classList.contains('theme-resolved');
			var maxHeight = currentWidth / aspectRatio.default;
			var minHeight = currentWidth / aspectRatio.resolved;
			var scrollY = window.scrollY || window.pageYOffset || 0;
			var aspectScroll = this.isLocked ? minHeight : Math.max(minHeight, maxHeight - scrollY);
			var currentAspectRatio = currentWidth / aspectScroll;
			var aspectRatioDiff = aspectRatio.default - aspectRatio.resolved;
			var currentDiff = aspectRatio.default - currentAspectRatio;
			var currentState = 1 - (aspectRatioDiff - currentDiff) / aspectRatioDiff;
			var heightDiff = state.height.default - state.height.resolved;
			var heightFactor = (state.height.default - heightDiff * currentState) / 100;
			var relativeHeight = aspectScroll * heightFactor;

			this.adjustVideoSize(relativeHeight);

			if (this.params.thumbnail) {
				this.setThumbnailStyle(currentState);
			}

			if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
				this.setResolvedState();
			} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
				this.container.style.top = '';
				this.switchImagesInAd(false);
			}

			return ad_engine_["slotTweaker"].makeResponsive(this.adSlot, currentAspectRatio);
		}
	}, {
		key: 'adjustVideoSize',
		value: function adjustVideoSize(relativeHeight) {
			if (this.video && !this.video.isFullscreen()) {
				this.video.container.style.width = this.params.videoAspectRatio * relativeHeight + 'px';
			}
		}
	}, {
		key: 'setThumbnailStyle',
		value: function setThumbnailStyle(state) {
			var style = mapValues_default()(this.params.config.state, function (styleProperty) {
				var diff = styleProperty.default - styleProperty.resolved;
				return styleProperty.default - diff * state + '%';
			});

			assign_default()(this.params.thumbnail.style, style);

			if (this.video) {
				assign_default()(this.video.container.style, style);

				if (this.video.isFullscreen()) {
					this.video.container.style.height = '100%';
				}
			}
		}
	}, {
		key: 'switchImagesInAd',
		value: function switchImagesInAd(isResolved) {
			if (isResolved) {
				this.container.classList.add('theme-resolved');
				this.params.image2.element.classList.remove('hidden-state');
			} else {
				this.container.classList.remove('theme-resolved');
				this.params.image2.element.classList.add('hidden-state');
			}
		}
	}, {
		key: 'lock',
		value: function lock() {
			var offset = this.getHeightDifferenceBetweenStates();

			this.isLocked = true;
			this.container.classList.add('theme-locked');
			ad_engine_["scrollListener"].removeCallback(this.scrollListener);
			this.adjustSizesToResolved(offset);
			this.emit(BfaaTheme.RESOLVED_STATE_EVENT);
		}
	}, {
		key: 'unlock',
		value: function unlock() {
			var _this8 = this;

			this.isLocked = false;
			this.container.classList.remove('theme-locked');
			this.scrollListener = ad_engine_["scrollListener"].addCallback(function () {
				return _this8.updateAdSizes();
			});
		}
	}, {
		key: 'setResolvedState',
		value: function setResolvedState(immediately) {
			var _this9 = this;

			var isSticky = this.stickyBfaa && this.stickyBfaa.isSticky();
			var width = this.container.offsetWidth;
			var aspectRatio = this.params.config.aspectRatio;

			var resolvedHeight = width / aspectRatio.resolved;
			var offset = this.getHeightDifferenceBetweenStates();

			if (isSticky) {
				this.config.moveNavbar(resolvedHeight, SLIDE_OUT_TIME);
			} else {
				this.container.style.top = Math.min(window.scrollY, offset) + 'px';
			}

			this.switchImagesInAd(true);

			if (this.onResolvedStateScroll) {
				window.removeEventListener('scroll', this.onResolvedStateScroll);
				this.onResolvedStateScroll.cancel();
			}

			return new promise_default.a(function (resolve) {
				if (immediately) {
					_this9.lock();
					resolve();
				} else {
					_this9.onResolvedStateScroll = debounce_default()(function () {
						if (window.scrollY < offset) {
							return;
						}

						window.removeEventListener('scroll', _this9.onResolvedStateScroll);
						_this9.onResolvedStateScroll = null;
						_this9.lock();
						resolve();
					}, 50);
					window.addEventListener('scroll', _this9.onResolvedStateScroll);
					_this9.onResolvedStateScroll();
				}
			});
		}
	}, {
		key: 'resetResolvedState',
		value: function resetResolvedState() {
			var offset = this.getHeightDifferenceBetweenStates();

			if (this.isLocked && this.config.defaultStateAllowed && window.scrollY < offset) {
				var aspectRatio = this.params.config.aspectRatio.default;

				this.container.style.top = '';
				this.config.mainContainer.style.paddingTop = 100 / aspectRatio + '%';

				if (this.params.isSticky && this.config.stickinessAllowed) {
					this.unstickImmediately(false);
				}

				this.unlock();
				this.switchImagesInAd(false);
				this.setResolvedState(false);
				this.updateAdSizes();
			}
		}
	}, {
		key: 'getHeightDifferenceBetweenStates',
		value: function getHeightDifferenceBetweenStates() {
			var width = this.container.offsetWidth;
			var aspectRatio = this.params.config.aspectRatio;


			return Math.round(width / aspectRatio.default - width / aspectRatio.resolved);
		}
	}, {
		key: 'adjustSizesToResolved',
		value: function adjustSizesToResolved(offset) {
			if (this.adSlot.isEnabled()) {
				var aspectRatio = this.params.config.aspectRatio.resolved;

				this.container.style.top = '';
				this.config.mainContainer.style.paddingTop = 100 / aspectRatio + '%';
				ad_engine_["slotTweaker"].makeResponsive(this.adSlot, aspectRatio);
				window.scrollBy(0, -Math.min(offset, window.scrollY));
				this.updateAdSizes();
			}
		}
	}]);

	return BfaaTheme;
}(hivi_BigFancyAdHiviTheme);

hivi_BfaaTheme.RESOLVED_STATE_EVENT = symbol_default()('RESOLVED_STATE_EVENT');
hivi_BfaaTheme.DEFAULT_UNSTICK_DELAY = 3000;
var hivi_BfabTheme = function (_BigFancyAdHiviTheme2) {
	inherits_default()(BfabTheme, _BigFancyAdHiviTheme2);

	function BfabTheme() {
		classCallCheck_default()(this, BfabTheme);

		return possibleConstructorReturn_default()(this, (BfabTheme.__proto__ || get_prototype_of_default()(BfabTheme)).apply(this, arguments));
	}

	createClass_default()(BfabTheme, [{
		key: 'onAdReady',
		value: function onAdReady() {
			helpers_get_default()(BfabTheme.prototype.__proto__ || get_prototype_of_default()(BfabTheme.prototype), 'onAdReady', this).call(this);

			if (!this.config.defaultStateAllowed) {
				this.params.resolvedStateForced = true;
			}

			if (resolvedState.isResolvedState(this.params)) {
				this.setResolvedState();
			} else {
				this.setThumbnailStyle();
				resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
				ad_engine_["slotTweaker"].makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
			}
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this11 = this;

			helpers_get_default()(BfabTheme.prototype.__proto__ || get_prototype_of_default()(BfabTheme.prototype), 'onVideoReady', this).call(this, video);

			var setThumbnailStyle = function setThumbnailStyle() {
				if (resolvedState.isResolvedState(_this11.params)) {
					_this11.setResolvedState(video);
				} else {
					_this11.setThumbnailStyle(video);
				}
			};

			video.addEventListener('wikiaAdStarted', setThumbnailStyle);
			video.addEventListener('wikiaAdCompleted', function () {
				return _this11.setResolvedState(video);
			});
			video.addEventListener('wikiaFullscreenChange', function () {
				if (video.isFullscreen()) {
					_this11.container.classList.add('theme-video-fullscreen');
				} else {
					_this11.container.classList.remove('theme-video-fullscreen');
					setThumbnailStyle();
				}
			});
		}
	}, {
		key: 'setResolvedState',
		value: function () {
			var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(video) {
				var _params2, config, image2;

				return regenerator_default.a.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_params2 = this.params, config = _params2.config, image2 = _params2.image2;


								this.container.classList.add('theme-resolved');
								image2.element.classList.remove('hidden-state');
								_context3.next = 5;
								return ad_engine_["slotTweaker"].makeResponsive(this.adSlot, config.aspectRatio.resolved);

							case 5:

								if (this.params.thumbnail) {
									this.setThumbnailStyle(video, 'resolved');
								}

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function setResolvedState(_x3) {
				return _ref3.apply(this, arguments);
			}

			return setResolvedState;
		}()
	}, {
		key: 'setThumbnailStyle',
		value: function setThumbnailStyle(video) {
			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
			var thumbnail = this.params.thumbnail;

			var style = mapValues_default()(this.params.config.state, function (styleProperty) {
				return styleProperty[state] + '%';
			});

			assign_default()(thumbnail.style, style);

			if (video) {
				assign_default()(video.container.style, style);
				window.requestAnimationFrame(function () {
					video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
				});
			}
		}
	}]);

	return BfabTheme;
}(hivi_BigFancyAdHiviTheme);
// CONCATENATED MODULE: ./src/templates/uap/themes/hivi/ready.js


function ready_adIsReady(_ref) {
	var adSlot = _ref.adSlot,
	    params = _ref.params;

	return ad_engine_["slotTweaker"].makeResponsive(adSlot, params.aspectRatio);
}
// CONCATENATED MODULE: ./src/templates/uap/themes/hivi/index.js


// CONCATENATED MODULE: ./src/templates/uap/big-fancy-ad-above.js











var big_fancy_ad_above_BigFancyAdAbove = function () {
	createClass_default()(BigFancyAdAbove, null, [{
		key: 'getName',
		value: function getName() {
			return 'bfaa';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			return {
				desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
				mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
				mainContainer: document.body,
				handleNavbar: false,
				autoPlayAllowed: true,
				defaultStateAllowed: true,
				fullscreenAllowed: true,
				stickinessAllowed: true,
				slotSibling: '.topic-header',
				slotsToEnable: ['bottom_leaderboard', 'incontent_boxad'],
				onInit: function onInit() {},
				onBeforeStickBfaaCallback: function onBeforeStickBfaaCallback() {},
				onAfterStickBfaaCallback: function onAfterStickBfaaCallback() {},
				onBeforeUnstickBfaaCallback: function onBeforeUnstickBfaaCallback() {},
				onAfterUnstickBfaaCallback: function onAfterUnstickBfaaCallback() {},
				moveNavbar: function moveNavbar(offset) {
					var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SLIDE_OUT_TIME;

					var navbarElement = document.querySelector('body > nav.navigation');

					if (navbarElement) {
						navbarElement.style.transition = offset ? '' : 'top ' + time + 'ms ' + universalAdPackage.CSS_TIMING_EASE_IN_CUBIC;
						navbarElement.style.top = offset ? offset + 'px' : '';
					}
				}
			};
		}

		/**
   * Constructor
   *
   * @param {object} adSlot
   */

	}]);

	function BigFancyAdAbove(adSlot) {
		classCallCheck_default()(this, BigFancyAdAbove);

		this.adSlot = adSlot;
		this.config = ad_engine_["context"].get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getSlotName());
		this.videoSettings = null;
		this.theme = null;
	}

	/**
  * Initializes the BFAA unit
  */


	createClass_default()(BigFancyAdAbove, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			if (!this.container) {
				return;
			}

			// TODO Remove this hack when all mobile apps support autoplay and fullscreen
			if (!this.config.autoPlayAllowed) {
				this.params.autoPlay = false;
				this.params.resolvedStateAutoPlay = false;
			}
			this.params.fullscreenAllowed = this.config.fullscreenAllowed;
			// TODO: End of hack

			var uapTheme = this.params.theme === 'hivi' ? themes_hivi_namespaceObject : themes_classic_namespaceObject;

			universalAdPackage.init(this.params, this.config.slotsToEnable);
			this.videoSettings = new video_settings_VideoSettings(this.params);
			this.container.style.backgroundColor = this.getBackgroundColor();
			this.container.classList.add('bfaa-template');
			this.theme = new uapTheme.BfaaTheme(this.adSlot, this.params);

			uapTheme.adIsReady({
				adSlot: this.adSlot,
				videoSettings: this.videoSettings,
				params: this.params
			}).then(function (iframe) {
				return _this.onAdReady(iframe);
			});

			this.config.onInit(this.adSlot, this.params, this.config);
		}
	}, {
		key: 'setupNavbar',
		value: function setupNavbar() {
			var desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);
			var mobileNavbarWrapper = document.querySelector(this.config.mobileNavbarWrapperSelector);
			var slotParent = this.container.parentNode;
			var sibling = document.querySelector(this.config.slotSibling) || this.container.nextElementSibling;

			if (mobileNavbarWrapper) {
				slotParent.insertBefore(mobileNavbarWrapper, sibling);
			}

			if (desktopNavbarWrapper) {
				slotParent.insertBefore(desktopNavbarWrapper, sibling);
			}
		}
	}, {
		key: 'getBackgroundColor',
		value: function getBackgroundColor() {
			var color = '#' + this.params.backgroundColor.replace('#', '');

			return this.params.backgroundColor ? color : '#000';
		}
	}, {
		key: 'onAdReady',
		value: function () {
			var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(iframe) {
				var video;
				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.config.mainContainer.style.paddingTop = iframe.parentElement.style.paddingBottom;
								this.config.mainContainer.classList.add('has-bfaa');

								if (this.config.handleNavbar) {
									this.setupNavbar();
								}

								if (!document.hidden) {
									_context.next = 6;
									break;
								}

								_context.next = 6;
								return ad_engine_["utils"].once(window, 'visibilitychange');

							case 6:

								this.theme.onAdReady(iframe);

								if (!universalAdPackage.isVideoEnabled(this.params)) {
									_context.next = 12;
									break;
								}

								_context.next = 10;
								return ad_engine_["utils"].defer(universalAdPackage.loadVideoAd, this.videoSettings);

							case 10:
								video = _context.sent;
								// defers for proper rendering

								this.theme.onVideoReady(video);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function onAdReady(_x2) {
				return _ref.apply(this, arguments);
			}

			return onAdReady;
		}()
	}]);

	return BigFancyAdAbove;
}();
// CONCATENATED MODULE: ./src/templates/uap/big-fancy-ad-below.js











var big_fancy_ad_below_BigFancyAdBelow = function () {
	createClass_default()(BigFancyAdBelow, null, [{
		key: 'getName',
		value: function getName() {
			return 'bfab';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			return {
				autoPlayAllowed: true,
				defaultStateAllowed: true,
				fullscreenAllowed: true,
				onInit: function onInit() {}
			};
		}

		/**
   * Constructor
   *
   * @param {object} adSlot
   */

	}]);

	function BigFancyAdBelow(adSlot) {
		classCallCheck_default()(this, BigFancyAdBelow);

		this.adSlot = adSlot;
		this.config = ad_engine_["context"].get('templates.bfab');
		this.container = document.getElementById(this.adSlot.getSlotName());
		this.theme = null;
		this.videoSettings = null;
	}

	/**
  * Initializes the BFAA unit
  */


	createClass_default()(BigFancyAdBelow, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			if (!this.container) {
				return;
			}

			// TODO Remove this hack when all mobile apps support autoplay and fullscreen
			if (!this.config.autoPlayAllowed) {
				this.params.autoPlay = false;
				this.params.resolvedStateAutoPlay = false;
			}
			this.params.fullscreenAllowed = this.config.fullscreenAllowed;
			// TODO: End of hack

			var uapTheme = this.params.theme === 'hivi' ? themes_hivi_namespaceObject : themes_classic_namespaceObject;

			universalAdPackage.initSlot(params);

			this.container.classList.add('bfab-template');
			this.videoSettings = new video_settings_VideoSettings(params);
			this.theme = new uapTheme.BfabTheme(this.adSlot, this.params);

			uapTheme.adIsReady({
				adSlot: this.adSlot,
				videoSettings: this.videoSettings,
				params: this.params
			}).then(function (iframe) {
				return _this.onAdReady(iframe);
			});

			this.config.onInit(this.adSlot, this.params, this.config);
		}
	}, {
		key: 'onAdReady',
		value: function () {
			var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(iframe) {
				var video;
				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!document.hidden) {
									_context.next = 3;
									break;
								}

								_context.next = 3;
								return ad_engine_["utils"].once(window, 'visibilitychange');

							case 3:

								this.theme.onAdReady(iframe);

								if (!universalAdPackage.isVideoEnabled(this.params)) {
									_context.next = 9;
									break;
								}

								_context.next = 7;
								return ad_engine_["utils"].defer(universalAdPackage.loadVideoAd, this.videoSettings);

							case 7:
								video = _context.sent;


								this.theme.onVideoReady(video);

							case 9:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function onAdReady(_x) {
				return _ref.apply(this, arguments);
			}

			return onAdReady;
		}()
	}]);

	return BigFancyAdBelow;
}();
// CONCATENATED MODULE: ./src/templates/uap/big-fancy-ad-in-player.js






var big_fancy_ad_in_player_BigFancyAdInPlayer = function () {
	createClass_default()(BigFancyAdInPlayer, null, [{
		key: 'getName',
		value: function getName() {
			return 'bfp';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			return {
				slotsToDisable: [],
				slotsToEnable: []
			};
		}
	}]);

	function BigFancyAdInPlayer() {
		classCallCheck_default()(this, BigFancyAdInPlayer);

		this.config = ad_engine_["context"].get('templates.bfp');
	}

	/**
  * Initializes the BFP unit
  */


	createClass_default()(BigFancyAdInPlayer, [{
		key: 'init',
		value: function init(params) {
			this.params = params;

			universalAdPackage.init(this.params, this.config.slotsToEnable, this.config.slotsToDisable);
		}
	}]);

	return BigFancyAdInPlayer;
}();
// CONCATENATED MODULE: ./src/templates/uap/index.js






// CONCATENATED MODULE: ./src/templates/index.js


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bidders", function() { return bidders_bidders; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getAdProductInfo", function() { return getAdProductInfo; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FloatingRail", function() { return floating_rail_FloatingRail; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "resolvedState", function() { return resolvedState; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BigFancyAdAbove", function() { return big_fancy_ad_above_BigFancyAdAbove; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BigFancyAdBelow", function() { return big_fancy_ad_below_BigFancyAdBelow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BigFancyAdInPlayer", function() { return big_fancy_ad_in_player_BigFancyAdInPlayer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "universalAdPackage", function() { return universalAdPackage; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utils", function() { return utils_namespaceObject; });






var versionField = 'ads.adProductsVersion';

if (get_default()(window, versionField, null)) {
	window.console.warn('Multiple @wikia/ad-products initializations. This may cause issues.');
}

set_default()(window, versionField, 'v7.0.3');






/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(21);
var $getOwnPropertyDescriptor = __webpack_require__(43).f;

__webpack_require__(52)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
var $Object = __webpack_require__(8).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(17);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(33);
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(66);
var toLength = __webpack_require__(57);
var createProperty = __webpack_require__(92);
var getIterFn = __webpack_require__(47);

$export($export.S + $export.F * !__webpack_require__(61)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(93);
module.exports = __webpack_require__(8).Array.from;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/* prebid.js v1.11.0
Updated : 2018-06-20 */
!(function(d){var s=window.pbjsChunk;window.pbjsChunk=function(e,t,n){for(var r,i,o,a=0,u=[];a<e.length;a++)i=e[a],c[i]&&u.push(c[i][0]),c[i]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(d[r]=t[r]);for(s&&s(e,t,n);u.length;)u.shift()();if(n)for(a=0;a<n.length;a++)o=f(f.s=n[a]);return o};var n={},c={136:0};function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return d[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=d,f.c=n,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.oe=function(e){throw console.error(e),e},f(f.s=463)})({0:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.getAdUnitSizes=function(e){if(!e)return;var t=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){var n=e.mediaTypes.banner.sizes;Array.isArray(n[0])?t=n:t.push(n)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes));return t},i.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)A(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===(void 0===e?"undefined":u(e))){var o=e.length;if(0<o)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(b(e));else for(var a=0;a<o;a++)t.push(b(e[a]))}return t},i.parseGPTSingleSizeArray=b,i.uniques=T,i.flatten=I,i.getBidRequest=function(t,e){return(0,a.default)(e.map((function(e){return(0,a.default)(e.bids,(function(e){return e.bidId===t}))})),(function(e){return e}))},i.getKeys=_,i.getValue=w,i.getBidderCodes=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits).map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(I,[])})).reduce(I).filter(T)},i.isGptPubadsDefined=function(){if(window.googletag&&i.isFn(window.googletag.pubads)&&i.isFn(window.googletag.pubads().getSlots))return!0},i.getHighestCpm=function(e,t){if(e.cpm===t.cpm)return e.timeToRespond>t.timeToRespond?t:e;return e.cpm<t.cpm?t:e},i.shuffle=function(e){var t=e.length;for(;0<t;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},i.adUnitsFilter=function(e,t){return(0,d.default)(e,t&&t.adUnitCode)},i.isSrcdocSupported=function(e){return e.defaultView&&e.defaultView.frameElement&&"srcdoc"in e.defaultView.frameElement&&!/firefox/i.test(navigator.userAgent)},i.deepClone=function(e){return(0,o.default)(e)},i.inIframe=function(){try{return i.getWindowSelf()!==i.getWindowTop()}catch(e){return!0}},i.isSafariBrowser=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},i.timestamp=function(){return(new Date).getTime()},i.checkCookieSupport=function(){if(window.navigator.cookieEnabled||document.cookie.length)return!0},i.cookiesAreEnabled=function(){if(i.checkCookieSupport())return!0;return window.document.cookie="prebid.cookieTest",-1!=window.document.cookie.indexOf("prebid.cookieTest")},i.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got "+t);var n=0;return function(){++n===t&&e.apply(null,arguments)}},i.groupBy=function(e,n){return e.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})},i.deepAccess=function(e,t){if(!e)return;t=String(t).split(".");for(var n=0;n<t.length;n++)if(void 0===(e=e[t[n]]))return;return e},i.createContentToExecuteExtScriptInFriendlyFrame=function(e){if(!e)return"";return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'+e+'"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'},i.getDefinedParams=function(n,e){return e.filter((function(e){return n[e]})).reduce((function(e,t){return r(e,(function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e})({},t,n[t]))}),{})},i.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every((function(e){return(0,d.default)(t,e)})))return!1;if(e.video&&e.video.context)return(0,d.default)(["instream","outstream"],e.video.context);return!0},i.getBidderRequest=function(e,t,n){return(0,a.default)(e,(function(e){return 0<e.bids.filter((function(e){return e.bidder===t&&e.adUnitCode===n})).length}))||{start:null,auctionId:null}},i.getUserConfiguredParams=function(e,t,n){return e.filter((function(e){return e.code===t})).map((function(e){return e.bids})).reduce(I,[]).filter((function(e){return e.bidder===n})).map((function(e){return e.params||{}}))},i.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},i.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},i.isAdUnitCodeMatchingSlot=function(t){return function(e){return C(t,e)}},i.isSlotMatchingAdUnitCode=function(t){return function(e){return C(e,t)}},i.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    "+e.code+" is a "+n+" ad unit\n    containing bidders that don't support "+n+": "+t+".\n    This bidder won't fetch demand.\n  "},i.deletePropertyFromObject=function(e,t){var n=r({},e);return delete n[t],n},i.removeRequestId=function(e){return i.deletePropertyFromObject(e,"requestId")},i.isInteger=function(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},i.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,t){return"_"+t.toLowerCase()})).replace(/^_/,"")};var n=t(4),o=c(t(62)),a=c(t(10)),d=c(t(7)),s=t(12);function c(e){return e&&e.__esModule?e:{default:e}}var f=t(2),l=!1,g=Object.prototype.toString,p=null;try{p=console.info.bind(window.console)}catch(e){}i.replaceTokenInString=function(i,e,o){return this._each(e,(function(e,t){e=void 0===e?"":e;var n=o+t.toUpperCase()+o,r=new RegExp(n,"g");i=i.replace(r,e)})),i};var v,y=(v=0,function(){return++v});function m(){return y()+Math.random().toString(16).substr(2)}function b(e){if(i.isArray(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1]))return e[0]+"x"+e[1]}function h(){return window.console&&window.console.log}i.getUniqueIdentifierStr=m,i.generateUUID=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},i.getBidIdParameter=function(e,t){return t&&t[e]?t[e]:""},i.tryAppendQueryString=function(e,t,n){return n?e+(t+"=")+encodeURIComponent(n)+"&":e},i.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t},i.transformAdServerTargetingObj=function(t){return t&&0<Object.getOwnPropertyNames(t).length?_(t).map((function(e){return e+"="+encodeURIComponent(w(t,e))})).join("&"):""},i.getTopWindowLocation=function(){if(i.inIframe()){var e=void 0;try{e=i.getAncestorOrigins()||i.getTopFrameReferrer()}catch(e){logInfo("could not obtain top window location",e)}if(e)return(0,s.parse)(e,{decodeSearchAsString:!0})}return i.getWindowLocation()},i.getTopFrameReferrer=function(){try{window.top.location.toString();for(var e="",t=void 0;(t=t?t.parent:window).document&&t.document.referrer&&(e=t.document.referrer),t!==window.top;);return e}catch(e){return window.document.referrer}},i.getAncestorOrigins=function(){if(window.document.location&&window.document.location.ancestorOrigins&&1<=window.document.location.ancestorOrigins.length)return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length-1]},i.getWindowTop=function(){return window.top},i.getWindowSelf=function(){return window.self},i.getWindowLocation=function(){return window.location},i.getTopWindowUrl=function(){var t=void 0;try{t=this.getTopWindowLocation().href}catch(e){t=""}return t},i.getTopWindowReferrer=function(){try{return window.top.document.referrer}catch(e){return document.referrer}},i.logWarn=function(e){E()&&console.warn&&console.warn("WARNING: "+e)},i.logInfo=function(e,t){E()&&h()&&p&&(t&&0!==t.length||(t=""),p("INFO: "+e+(""===t?"":" : params : "),t))},i.logMessage=function(e){E()&&h()&&console.log("MESSAGE: "+e)},i.hasConsoleLogger=h;var E=function(){if(!1===n.config.getConfig("debug")&&!1===l){var e="TRUE"===S(f.DEBUG_MODE).toUpperCase();n.config.setConfig({debug:e}),l=!0}return!!n.config.getConfig("debug")};i.debugTurnedOn=E,i.logError=function(){E()&&window.console&&window.console.error&&console.error.apply(console,arguments)},i.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=m(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e};var S=function(e){var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))};i.getParameterByName=S,i.hasValidBidRequest=function(e,n,t){var r=!1;function i(e,t){t===n[o]&&(r=!0)}for(var o=0;o<n.length;o++)if(r=!1,this._each(e,i),!r)return this.logError("Params are missing for bid request. One of these required paramaters are missing: "+n,t),!1;return!0},i.addEventHandler=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!0):e.attachEvent&&e.attachEvent("on"+t,n)},i.isA=function(e,t){return g.call(e)==="[object "+t+"]"},i.isFn=function(e){return this.isA(e,"Function")},i.isStr=function(e){return this.isA(e,"String")},i.isArray=function(e){return this.isA(e,"Array")},i.isNumber=function(e){return this.isA(e,"Number")},i.isPlainObject=function(e){return this.isA(e,"Object")},i.isEmpty=function(e){if(!e)return!0;if(i.isArray(e)||i.isStr(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},i.isEmptyStr=function(e){return this.isStr(e)&&(!e||0===e.length)},i._each=function(e,t){if(!this.isEmpty(e)){if(this.isFn(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(0<r)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}},i.contains=function(e,t){if(this.isEmpty(e))return!1;if(this.isFn(e.indexOf))return-1!==e.indexOf(t);for(var n=e.length;n--;)if(e[n]===t)return!0;return!1},i.indexOf=(function(){if(Array.prototype.indexOf)return Array.prototype.indexOf})(),i._map=function(n,r){if(this.isEmpty(n))return[];if(this.isFn(n.map))return n.map(r);var i=[];return this._each(n,(function(e,t){i.push(r(e,t,n))})),i};var A=function(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]};function T(e,t,n){return n.indexOf(e)===t}function I(e,t){return e.concat(t)}function _(e){return Object.keys(e)}function w(e,t){return e[t]}i.insertElement=function(e,t,n){t=t||document;var r=void 0;r=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{(r=r.length?r:t.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(e,r.firstChild)}catch(e){}},i.triggerPixel=function(e){(new Image).src=e},i.callBurl=function(e){var t=e.source,n=e.burl;t===f.S2S.SRC&&n&&i.triggerPixel(n)},i.insertHtmlIntoIframe=function(e){if(e){var t=document.createElement("iframe");t.id=i.getUniqueIdentifierStr(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",i.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()}},i.insertUserSyncIframe=function(e){var t=this.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),n=document.createElement("div");n.innerHTML=t;var r=n.firstChild;i.insertElement(r)},i.createTrackPixelHtml=function(e){if(!e)return"";var t='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return t+='<img src="'+encodeURI(e)+'"></div>'},i.createTrackPixelIframeHtml=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e?(t&&(e=encodeURI(e)),n&&(n='sandbox="'+n+'"'),"<iframe "+n+' id="'+i.getUniqueIdentifierStr()+'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'+e+'">\n    </iframe>'):""},i.getIframeDocument=function(e){if(e){var t=void 0;try{t=e.contentWindow?e.contentWindow.document:e.contentDocument.document?e.contentDocument.document:e.contentDocument}catch(e){this.logError("Cannot get iframe document",e)}return t}},i.getValueString=function(e,t,n){return null==t?n:this.isStr(t)?t:this.isNumber(t)?t.toString():void this.logWarn("Unsuported type for param: "+e+" required type: String")};var C=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.registerBidder=function(t){var n=Array.isArray(t.supportedMediaTypes)?{supportedMediaTypes:t.supportedMediaTypes}:void 0;function r(e){var t=l(e);i.default.registerBidAdapter(t,e.code,n)}r(t),Array.isArray(t.aliases)&&t.aliases.forEach((function(e){i.default.aliasRegistry[e]=t.code,r(v({},t,{code:e}))}))},t.newBidder=l,t.isValid=S;var r=s(n(25)),i=s(n(8)),y=n(4),m=s(n(19)),o=n(13),a=n(18),u=n(64),b=s(n(2)),h=s(n(9)),d=s(n(7)),E=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var f=["requestId","cpm","ttl","creativeId","netRevenue","currency"];function l(f){return v(new r.default(f.code),{getSpec:function(){return Object.freeze(f)},registerSyncs:l,callBids:function(o,a,r,n){if(Array.isArray(o.bids)){var u={},d=[],e=o.bids.filter(g);if(0!==e.length){var s={};e.forEach((function(e){(s[e.bidId]=e).adUnitCode||(e.adUnitCode=e.placementCode)}));var t=f.buildRequests(e,o);if(t&&0!==t.length){Array.isArray(t)||(t=[t]);var c=(0,E.delayExecution)(i,t.length);t.forEach((function(i){switch(i.method){case"GET":n(""+i.url+(function(e){if(e)return"?"+("object"===(void 0===e?"undefined":p(e))?(0,E.parseQueryStringParameters)(e):e);return""})(i.data),{success:e,error:t},void 0,v({method:"GET",withCredentials:!0},i.options));break;case"POST":n(i.url,{success:e,error:t},"string"==typeof i.data?i.data:JSON.stringify(i.data),v({method:"POST",contentType:"text/plain",withCredentials:!0},i.options));break;default:(0,E.logWarn)("Skipping invalid request from "+f.code+". Request type "+i.type+" must be GET or POST"),c()}function e(e,t){try{e=JSON.parse(e)}catch(e){}e={body:e,headers:{get:t.getResponseHeader.bind(t)}},d.push(e);var n=void 0;try{n=f.interpretResponse(e,i)}catch(e){return(0,E.logError)("Bidder "+f.code+" failed to interpret the server's response. Continuing without bids",null,e),void c()}function r(e){var t,n,r=s[e.requestId];if(r){var i=v(m.default.createBid(b.default.STATUS.GOOD,r),e);t=r.adUnitCode,n=i,u[t]=!0,S(t,n,[o])&&a(t,n)}else(0,E.logWarn)("Bidder "+f.code+" made bid for unknown request ID: "+e.requestId+". Ignoring.")}n&&(n.forEach?n.forEach(r):r(n)),c(n)}function t(e){(0,E.logError)("Server call for "+f.code+" failed: "+e+". Continuing without bids."),c()}}))}else i()}else i()}function i(e){var t=(e?e[0]?e:[e]:[]).some((function(e){return"video"===e.mediaType})),n=y.config.getConfig("cache.url");t&&n||r(),h.default.emit(b.default.EVENTS.BIDDER_DONE,o),l(d,o.gdprConsent)}}});function l(e,t){if(f.getUserSyncs){var n=f.getUserSyncs({iframeEnabled:y.config.getConfig("userSync.iframeEnabled"),pixelEnabled:y.config.getConfig("userSync.pixelEnabled")},e,t);n&&(Array.isArray(n)||(n=[n]),n.forEach((function(e){o.userSync.registerSync(e.type,f.code,e.url)})))}}function g(e){return!!f.isBidRequestValid(e)||((0,E.logWarn)("Invalid bid sent to bidder "+f.code+": "+JSON.stringify(e)),!1)}}function S(e,t,n){function r(e){return"Invalid bid from "+t.bidderCode+". Ignoring bid: "+e}return e?t?(i=Object.keys(t),f.every((function(e){return(0,d.default)(i,e)}))?"native"!==t.mediaType||(0,a.nativeBidIsValid)(t,n)?"video"!==t.mediaType||(0,u.isValidVideoBid)(t,n)?!("banner"===t.mediaType&&!(function(e,t,n){if((t.width||0===t.width)&&(t.height||0===t.height))return!0;var r=(0,E.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=(0,E.parseSizesInput)(i);if(1===o.length){var a=o[0].split("x"),u=c(a,2),d=u[0],s=u[1];return t.width=d,t.height=s,!0}return!1})(e,t,n))||((0,E.logError)(r("Banner bids require a width and height")),!1):((0,E.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):((0,E.logError)(r("Native bid missing some required properties.")),!1):((0,E.logError)(r("Bidder "+t.bidderCode+" is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),!1)):((0,E.logWarn)("Some adapter tried to add an undefined bid for "+e+"."),!1):((0,E.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}},10:function(e,t,n){n(42),e.exports=n(15).Array.find},101:function(e,t,n){"use strict";var r=n(16),i=n(30)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(24)(o)},11:function(e,t,n){"use strict";var r,i=n(7),o=(r=i)&&r.__esModule?r:{default:r},a=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0));var u={},d=["criteo"];function s(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,t&&"function"==typeof t&&(n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()}),n.src=e;var r=document.getElementsByTagName("head");(r=r.length?r:document.getElementsByTagName("body")).length&&(r=r[0]).insertBefore(n,r.firstChild)}t.loadExternalScript=function(e,t){if(t&&e)if((0,o.default)(d,t)){if(!u[e]){a.logWarn("module "+t+" is loading external JavaScript");var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,a.insertElement(n),u[e]=!0}}else a.logError(t+" not whitelisted for loading external JavaScript");else a.logError("cannot load external script without url and moduleCode")},t.loadScript=function(t,e,n){t?n?u[t]?e&&"function"==typeof e&&(u[t].loaded?e():u[t].callbacks.push(e)):(u[t]={loaded:!1,callbacks:[]},e&&"function"==typeof e&&u[t].callbacks.push(e),s(t,(function(){u[t].loaded=!0;try{for(var e=0;e<u[t].callbacks.length;e++)u[t].callbacks[e]()}catch(e){a.logError("Error executing callback","adloader.js:loadScript",e)}}))):s(t,e):a.logError("Error attempting to request empty URL","adloader.js:loadScript")}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function i(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=t.split("="),r=a(n,2),i=r[0],o=r[1];return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(o)):e[i]=o||"",e}),{}):{}}function r(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return t+"[]="+e})).join("&"):t+"="+e[t]})).join("&")}t.parseQS=i,t.formatQS=r,t.parse=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:i(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.format=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":"+e.port:""))+(e.pathname||"")+(e.search?"?"+r(e.search||""):"")+(e.hash?"#"+e.hash:"")}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userSync=void 0;var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newUserSync=r;var s=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0)),c=n(4);function r(e){var t={},o={image:[],iframe:[]},n=!1,a={},u=e.config;function r(){if(u.syncEnabled&&e.browserSupportsCookies&&!n){try{!(function(){if(!u.pixelEnabled)return;s.shuffle(o.image).forEach((function(e){var t=i(e,2),n=t[0],r=t[1];s.logMessage("Invoking image pixel user sync for bidder: "+n),s.triggerPixel(r)}))})(),(function(){if(!u.iframeEnabled)return;s.shuffle(o.iframe).forEach((function(e){var t=i(e,2),n=t[0],r=t[1];s.logMessage("Invoking iframe user sync for bidder: "+n),s.insertUserSyncIframe(r)}))})()}catch(e){return s.logError("Error firing user syncs",e)}o={image:[],iframe:[]},n=!0}}return c.config.getConfig("userSync",(function(e){u=d(u,e.userSync)})),t.registerSync=function(e,t,n){return u.syncEnabled&&s.isArray(o[e])?t?Number(a[t])>=u.syncsPerBidder?s.logWarn('Number of user syncs exceeded for "'+t+'"'):u.enabledBidders&&u.enabledBidders.length&&u.enabledBidders.indexOf(t)<0?s.logWarn('Bidder "'+t+'" not supported'):(o[e].push([t,n]),(r=a)[i=t]?r[i]+=1:r[i]=1,void(a=r)):s.logWarn("Bidder is required for registering sync"):s.logWarn('User sync type "'+e+'" not supported');var r,i},t.syncUsers=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(r,Number(e));r()},t.triggerUserSyncs=function(){u.enableOverride&&t.syncUsers()},t}c.config.setDefaults({userSync:{syncEnabled:!0,pixelEnabled:!0,syncsPerBidder:5,syncDelay:3e3}});var o=!s.isSafariBrowser()&&s.cookiesAreEnabled();t.userSync=r({config:c.config.getConfig("userSync"),browserSupportsCookies:o})},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=r;var u=n(11),d=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}})(n(0));function r(e){var t=this,n=e.url,r=e.config,i=e.id,o=e.callback,a=e.loaded;this.url=n,this.config=r,this.handlers={},this.id=i,this.loaded=a,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):d.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=o||function(){t.loaded=!0,t.process()},(0,u.loadScript)(n,this.callback,!0)}r.install=function(e){return new r({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded})},r.prototype.getConfig=function(){return this.config},r.prototype.setRender=function(e){this.render=e},r.prototype.setEventHandlers=function(e){this.handlers=e},r.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),d.logMessage("Prebid Renderer event for id "+t+" type "+n)},r.prototype.process=function(){for(;0<this.cmd.length;)try{this.cmd.shift().call()}catch(e){d.logError("Error processing Renderer command: ",e)}}},15:function(e,t){var n=e.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},16:function(e,t,n){var v=n(20),y=n(15),m=n(28),b=n(44),h=n(51),E="prototype",S=function(e,t,n){var r,i,o,a=e&S.F,u=e&S.G,d=e&S.S,s=e&S.P,c=e&S.B,f=e&S.W,l=u?y:y[t]||(y[t]={}),g=l[E],p=u?v:d?v[t]:(v[t]||{})[E];for(r in u&&(n=t),n)(i=!a&&p&&void 0!==p[r])&&h(l,r)||(o=i?p[r]:n[r],l[r]=u&&"function"!=typeof p[r]?n[r]:c&&i?m(o,v):f&&p[r]==o?(function(r){var e=function(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)};return e[E]=r[E],e})(o):s&&"function"==typeof o?m(Function.call,o):o,s&&((l.virtual||(l.virtual={}))[r]=o,e&S.R&&g&&!g[r]&&b(g,r,o)))};S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,e.exports=S},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addBidResponse=t.AUCTION_COMPLETED=t.AUCTION_IN_PROGRESS=t.AUCTION_STARTED=void 0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newAuction=function(e){var f=e.adUnits,t=e.adUnitCodes,n=e.callback,r=e.cbTimeout,i=e.labels,o=f,a=i,l=t,g=[],p=[],u=void 0,v=_.generateUUID(),y=void 0,m=n,b=void 0,h=r,d=[];function s(e,t){if(t&&clearTimeout(b),null!=m){var n=[];e&&(_.logMessage("Auction "+v+" timedOut"),u=p,d=(a=g).filter((function(e){return!e.doneCbCallCount})).map((function(e){return e.bidderCode})).filter(E.uniques),s=u.map((function(e){return e.bidder})).filter(E.uniques),c=d.filter((function(e){return!(0,T.default)(s,e)})),(n=a.map((function(e){return(e.bids||[]).filter((function(e){return(0,T.default)(c,e.bidder)}))})).reduce(E.flatten,[]).map((function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}}))).length&&C.emit(O.EVENTS.BID_TIMEOUT,n)),C.emit(O.EVENTS.AUCTION_END,{auctionId:v});try{y=R;var r=l,i=[p.filter(E.adUnitsFilter.bind(this,r)).reduce(D,{})];m.apply(pbjs,i)}catch(e){_.logError("Error executing bidsBackHandler",null,e)}finally{n.length&&w.callTimedOutBidders(f,n,h);var o=S.config.getConfig("userSync")||{};o.enableOverride||I(o.syncDelay)}m=null}var a,u,d,s,c}function c(){g.every((function(e){return 1<=e.doneCbCallCount}))&&(_.logInfo("Bids Received for Auction with id: "+v,p),y=R,s(!1,!0))}return{addBidReceived:function(e){p=p.concat(e)},executeCallback:s,callBids:function(){e=s.bind(null,!0),t=setTimeout(e,h),b=t,y=B;var e,t;var n={timestamp:u=Date.now(),auctionId:v,timeout:h};C.emit(O.EVENTS.AUCTION_INIT,n);var r=w.makeBidRequests(o,u,v,h,a);_.logInfo("Bids Requested for Auction with id: "+v,r),r.forEach((function(e){var t;t=e,g=g.concat(t)})),y=N,w.callBids(o,r,U.bind(this),function(e){var t=e;return(0,E.delayExecution)((function(){var e=(0,A.default)(g,(function(e){return t===e.bidderRequestId}));e.doneCbCallCount+=1,c()}),1)}.bind(this))},bidsBackAll:c,addWinningBid:function(e){d=d.concat(e)},getWinningBids:function(){return d},getTimeout:function(){return h},getAuctionId:function(){return v},getAuctionStatus:function(){return y},getAdUnits:function(){return o},getAdUnitCodes:function(){return l},getBidRequests:function(){return g},getBidsReceived:function(){return p}}},t.getStandardBidderSettings=u,t.getKeyValueTargetingPairs=y,t.adjustBids=s;var E=n(0),l=n(27),i=n(18),c=n(168),g=n(14),S=n(4),r=n(13),o=n(21),A=a(n(10)),T=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var I=r.userSync.syncUsers,_=n(0),w=n(8),C=n(9),O=n(2),B=t.AUCTION_STARTED="started",N=t.AUCTION_IN_PROGRESS="inProgress",R=t.AUCTION_COMPLETED="completed";function p(e,t){t.timeToRespond>e.getTimeout()+S.config.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function v(e,t){C.emit(O.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),p(e,t)}C.on(O.EVENTS.BID_ADJUSTMENT,(function(e){s(e)}));var U=t.addBidResponse=(0,o.createHook)("asyncSeries",(function(e,t){var n,r,i,o,a=this.getBidRequests(),u=this.getAuctionId(),d=(0,E.getBidderRequest)(a,t.bidderCode,e),s=(function(e){var t=e.adUnitCode,n=e.bid,r=e.bidRequest,i=e.auctionId,o=r.start,a=f({},n,{auctionId:i,responseTimestamp:(0,E.timestamp)(),requestTimestamp:o,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});a.timeToRespond=a.responseTimestamp-a.requestTimestamp,C.emit(O.EVENTS.BID_ADJUSTMENT,a);var u=r.bids&&(0,A.default)(r.bids,(function(e){return e.adUnitCode==t})),d=u&&u.renderer;d&&d.url&&(a.renderer=g.Renderer.install({url:d.url}),a.renderer.setRender(d.render));var s,c=(0,l.getPriceBucketString)(a.cpm,S.config.getConfig("customPriceBucket"),S.config.getConfig("currency.granularityMultiplier"));a.pbLg=c.low,a.pbMg=c.med,a.pbHg=c.high,a.pbAg=c.auto,a.pbDg=c.dense,a.pbCg=c.custom,a.bidderCode&&(0<a.cpm||a.dealId)&&(s=y(a.bidderCode,a));return a.adserverTargeting=f(a.adserverTargeting||{},s),a})({adUnitCode:e,bid:t,bidRequest:d,auctionId:u});"video"===s.mediaType?(n=this,r=s,i=d,o=!0,S.config.getConfig("cache.url")&&(r.videoCacheKey?r.vastUrl||(_.logError("videoCacheKey specified but not required vastUrl for video bid"),o=!1):(o=!1,(0,c.store)([r],(function(e,t){e?(_.logWarn("Failed to save to the video cache: "+e+". Video bid must be discarded."),p(n,r)):(r.videoCacheKey=t[0].uuid,r.vastUrl||(r.vastUrl=(0,c.getCacheUrl)(r.videoCacheKey)),i.doneCbCallCount+=1,v(n,r),n.bidsBackAll())})))),o&&v(n,r)):v(this,s)}),"addBidResponse");function u(){var t=S.config.getConfig("priceGranularity"),e=pbjs.bidderSettings;return e[O.JSON_MAPPING.BD_SETTING_STANDARD]||(e[O.JSON_MAPPING.BD_SETTING_STANDARD]={}),e[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]||(e[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]=[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(e){return t===O.GRANULARITY_OPTIONS.AUTO?e.pbAg:t===O.GRANULARITY_OPTIONS.DENSE?e.pbDg:t===O.GRANULARITY_OPTIONS.LOW?e.pbLg:t===O.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:t===O.GRANULARITY_OPTIONS.HIGH?e.pbHg:t===O.GRANULARITY_OPTIONS.CUSTOM?e.pbCg:void 0}},{key:"hb_size",val:function(e){return e.size}},{key:"hb_deal",val:function(e){return e.dealId}},{key:"hb_source",val:function(e){return e.source}},{key:"hb_format",val:function(e){return e.mediaType}}]),e[O.JSON_MAPPING.BD_SETTING_STANDARD]}function y(e,t){if(!t)return{};var n={},r=pbjs.bidderSettings;r&&(d(n,u(),t),e&&r[e]&&r[e][O.JSON_MAPPING.ADSERVER_TARGETING]&&(d(n,r[e],t),t.sendStandardTargeting=r[e].sendStandardTargeting));return t.native&&(n=f({},n,(0,i.getNativeTargeting)(t))),n}function d(r,i,o){var e=i[O.JSON_MAPPING.ADSERVER_TARGETING];return o.size=o.getSize(),_._each(e,(function(e){var t=e.key,n=e.val;if(r[t]&&_.logWarn("The key: "+t+" is getting ovewritten"),_.isFn(n))try{n=n(o)}catch(e){_.logError("bidmanager","ERROR",e)}(void 0===i.suppressEmptyKeys||!0!==i.suppressEmptyKeys)&&"hb_deal"!==t||!_.isEmptyStr(n)&&null!=n?r[t]=n:_.logInfo("suppressing empty key '"+t+"' from adserver targeting")})),r}function s(e){var t=e.bidderCode,n=e.cpm,r=void 0;if(pbjs.bidderSettings&&(t&&pbjs.bidderSettings[t]&&"function"==typeof pbjs.bidderSettings[t].bidCpmAdjustment?r=pbjs.bidderSettings[t].bidCpmAdjustment:pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(r=pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),r))try{n=r(e.cpm,f({},e))}catch(e){_.logError("Error during bid adjustment","bidmanager.js",e)}0<=n&&(e.cpm=n)}function D(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=function(e,t){var n={puts:e.map(a)};(0,i.ajax)(o.config.getConfig("cache.url"),(r=t,{success:function(e){var t=void 0;try{t=JSON.parse(e).responses}catch(e){return void r(e,[])}t?r(null,t):r(new Error("The cache server didn't respond with a responses property."),[])},error:function(e,t){r(new Error("Error storing video ad in the cache: "+e+": "+JSON.stringify(t)),[])}}),JSON.stringify(n),{contentType:"text/plain",withCredentials:!0});var r},t.getCacheUrl=function(e){return o.config.getConfig("cache.url")+"?uuid="+e};var i=n(6),o=n(4);function a(e){var t,n;return{type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['+t+"]]></VASTAdTagURI>\n        <Impression>"+(n?"<![CDATA["+n+"]]>":"")+"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}}},17:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonNativeBidder=t.nativeBidder=t.nativeAdUnit=t.NATIVE_TARGETING_KEYS=t.NATIVE_KEYS=t.nativeAdapters=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.processNativeAdUnitParams=function(e){if(e&&e.type&&(function(e){if(!e||!(0,u.default)(Object.keys(c),e))return(0,a.logError)(e+" nativeParam is not supported"),!1;return!0})(e.type))return c[e.type];return e},t.nativeBidIsValid=function(t,e){var n=(0,a.getBidRequest)(t.adId,e);if(!n)return!1;if(!(0,a.deepAccess)(t,"native.clickUrl"))return!1;if((0,a.deepAccess)(t,"native.image")&&(!(0,a.deepAccess)(t,"native.image.height")||!(0,a.deepAccess)(t,"native.image.width")))return!1;if((0,a.deepAccess)(t,"native.icon")&&(!(0,a.deepAccess)(t,"native.icon.height")||!(0,a.deepAccess)(t,"native.icon.width")))return!1;var r=n.nativeParams;if(!r)return!0;var i=Object.keys(r).filter((function(e){return r[e].required})),o=Object.keys(t.native).filter((function(e){return t.native[e]}));return i.every((function(e){return(0,u.default)(o,e)}))},t.fireNativeTrackers=function(e,t){var n=void 0;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&(0,a.insertHtmlIntoIframe)(t.native.javascriptTrackers));(n||[]).forEach(a.triggerPixel)},t.getNativeTargeting=function(r){var i={};return Object.keys(r.native).forEach((function(e){var t=s[e],n=r.native[e];"object"===(void 0===n?"undefined":o(n))&&n.url&&(n=n.url),t&&(i[t]=n)})),i};var r,a=n(0),i=n(7),u=(r=i)&&r.__esModule?r:{default:r};var d=t.nativeAdapters=[],s=t.NATIVE_KEYS={title:"hb_native_title",body:"hb_native_body",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",cta:"hb_native_cta"},c=(t.NATIVE_TARGETING_KEYS=Object.keys(s).map((function(e){return s[e]})),{image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}});t.nativeAdUnit=function(e){var t="native"===e.mediaType,n=(0,a.deepAccess)(e,"mediaTypes.native");return t||n};var f=t.nativeBidder=function(e){return(0,u.default)(d,e.bidder)};t.hasNonNativeBidder=function(e){return e.bids.filter((function(e){return!f(e)})).length}},19:function(e,t,n){"use strict";var o=n(0);function r(e,t){var n=t&&t.bidId||o.getUniqueIdentifierStr(),r=t&&t.src||"client",i=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=(function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}})(),this.adId=n,this.mediaType="banner",this.source=r,this.getStatusCode=function(){return i},this.getSize=function(){return this.width+"x"+this.height}}t.createBid=function(e,t){return new r(e,t)}},2:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"Wikia_prebid_1.11.0",DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocuemnt",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal","hb_source","hb_format"],S2S:{SRC:"s2s",SYNCED_BIDDERS_KEY:"pbjsSyncs"}}},20:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.createHook=function(r,i,e){var u=[{fn:i,priority:0}],o={sync:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];u.forEach((function(e){e.fn.apply(t,n)}))},asyncSeries:function(){for(var o=this,e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=0;return u[a].fn.apply(this,t.concat((function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=u[++a];if("object"===(void 0===i?"undefined":d(i))&&"function"==typeof i.fn)return i.fn.apply(o,n.concat(e))})))}};if(!o[r])throw"invalid hook type";var t={addHook:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10;"function"==typeof e&&(u.push({fn:e,priority:t}),u.sort((function(e,t){return t.priority-e.priority})))},removeHook:function(t){u=u.filter((function(e){return e.fn===i||e.fn!==t}))}};"string"==typeof e&&(s[e]=t);return a((function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1===u.length&&u[0].fn===i)return i.apply(this,t);return o[r].apply(this,t)}),t)};var s=t.hooks={}},22:function(e,t,n){n(101),e.exports=n(15).Array.findIndex},23:function(e,t,n){e.exports=!n(29)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},24:function(e,t){e.exports=function(){}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.auctionManager=void 0,t.newAuctionManager=d;var r,i=n(0),s=n(167),o=n(10),a=(r=o)&&r.__esModule?r:{default:r};var u=n(2);function d(){var d=[],e={};return e.addWinningBid=function(t){var e=(0,a.default)(d,(function(e){return e.getAuctionId()===t.auctionId}));e?e.addWinningBid(t):utils.logWarn("Auction not found when adding winning bid")},e.getAllWinningBids=function(){return d.map((function(e){return e.getWinningBids()})).reduce(i.flatten,[])},e.getBidsRequested=function(){return d.map((function(e){return e.getBidRequests()})).reduce(i.flatten,[])},e.getBidsReceived=function(){return d.map((function(e){if(e.getAuctionStatus()===s.AUCTION_COMPLETED)return e.getBidsReceived()})).reduce(i.flatten,[]).filter((function(e){return e}))},e.getAdUnits=function(){return d.map((function(e){return e.getAdUnits()})).reduce(i.flatten,[])},e.getAdUnitCodes=function(){return d.map((function(e){return e.getAdUnitCodes()})).reduce(i.flatten,[]).filter(i.uniques)},e.createAuction=function(e){var t,n=e.adUnits,r=e.adUnitCodes,i=e.callback,o=e.cbTimeout,a=e.labels,u=(0,s.newAuction)({adUnits:n,adUnitCodes:r,callback:i,cbTimeout:o,labels:a});return t=u,d.push(t),u},e.findBidByAdId=function(t){return(0,a.default)(d.map((function(e){return e.getBidsReceived()})).reduce(i.flatten,[]),(function(e){return e.adId===t}))},e.getStandardBidderAdServerTargeting=function(){return(0,s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING]},e}t.auctionManager=d()},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidPriceConfig=t.getPriceBucketString=void 0;var r,i=n(10),g=(r=i)&&r.__esModule?r:{default:r};var o=n(0),p=2,a={buckets:[{min:0,max:5,increment:.5}]},u={buckets:[{min:0,max:20,increment:.1}]},d={buckets:[{min:0,max:20,increment:.01}]},s={buckets:[{min:0,max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}]},c={buckets:[{min:0,max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}]};function f(n,e,r){var i="";if(!v(e))return i;var t,o,a,u,d,s,c,f=e.buckets.reduce((function(e,t){return e.max>t.max?e:t}),{max:0}),l=(0,g.default)(e.buckets,(function(e){if(n>f.max*r){var t=e.precision;void 0===t&&(t=p),i=(e.max*r).toFixed(t)}else if(n<=e.max*r&&n>=e.min*r)return e}));return l&&(t=n,a=r,u=void 0!==(o=l).precision?o.precision:p,d=o.increment*a,s=o.min*a,c=Math.floor((t-s)/d)*d+s,i=(c=Number(c.toFixed(10))).toFixed(u)),i}function v(e){if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e){void 0!==e.min&&e.max&&e.increment||(t=!1)})),t}t.getPriceBucketString=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":f(e,a,n),med:""===r?"":f(e,u,n),high:""===r?"":f(e,d,n),auto:""===r?"":f(e,c,n),dense:""===r?"":f(e,s,n),custom:""===r?"":f(e,t,n)}},t.isValidPriceConfig=v},28:function(e,t,n){var o=n(43);e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}},29:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NATIVE="native",t.VIDEO="video",t.BANNER="banner"},30:function(e,t,n){var h=n(28),E=n(31),S=n(52),A=n(34),r=n(53);e.exports=function(f,e){var l=1==f,g=2==f,p=3==f,v=4==f,y=6==f,m=5==f||y,b=e||r;return function(e,t,n){for(var r,i,o=S(e),a=E(o),u=h(t,n,3),d=A(a.length),s=0,c=l?b(e,d):g?b(e,0):void 0;s<d;s++)if((m||s in a)&&(i=u(r=a[s],s,o),f))if(l)c[s]=i;else if(i)switch(f){case 3:return!0;case 5:return r;case 6:return s;case 2:c.push(r)}else if(v)return!1;return y?-1:p||v?v:c}}},31:function(e,t,n){var r=n(32);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},32:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},33:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},34:function(e,t,n){var r=n(35),i=Math.min;e.exports=function(e){return 0<e?i(r(e),9007199254740991):0}},35:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},36:function(e,t,n){var r=n(32);e.exports=Array.isArray||function(e){return"Array"==r(e)}},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobal=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[]},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targeting=t.getOldestBid=t.isBidExpired=t.RENDERED=t.BID_TARGETING_SET=void 0;var b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.newTargeting=s;var r,h=n(0),E=n(4),S=n(18),i=n(26),o=n(7),A=(r=o)&&r.__esModule?r:{default:r};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=n(0),_=n(2),w=[],C=t.BID_TARGETING_SET="targetingSet",a=t.RENDERED="rendered",O=20,u=(t.isBidExpired=function(e){return e.responseTimestamp+1e3*e.ttl+1e3>(0,h.timestamp)()},function(e){return e&&(e.status&&!(0,A.default)([C,a],e.status)||!e.status)}),d=t.getOldestBid=function(n,r,e){var i=!0;return e.forEach((function(e,t){r!==t&&n.bidder===e.bidder&&n.adUnitCode===e.adUnitCode&&n.responseTimestamp>e.responseTimestamp&&(i=!1)})),i};function s(n){var f={};function l(e){return"string"==typeof e?[e]:I.isArray(e)?e:n.getAdUnitCodes()||[]}function g(){return n.getBidsReceived().filter(u).filter(t.isBidExpired).filter(d)}function p(){return n.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(_.TARGETING_KEYS).filter(h.uniques)}function v(r,i,e,t){return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e){var t,n;r.length&&r.filter((n=e,function(e){return e.adUnitCode===i.adUnitCode&&e.adserverTargeting[n]})).forEach((t=e,function(e){I.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]]),e.adserverTargeting[t]=e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(h.uniques),delete i.adserverTargeting[t]}))})),r.push(i),r}function o(){var t=p();return function(e){return-1===t.indexOf(e)}}function y(t){return T({},t.adUnitCode,Object.keys(t.adserverTargeting).filter(o()).map((function(e){return T({},e.substring(0,O),[t.adserverTargeting[e]])})))}function m(e){return{adUnitCode:e,cpm:0,adserverTargeting:{},timeToRespond:0}}return f.resetPresetTargeting=function(e){if((0,h.isGptPubadsDefined)()){var t=l(e),r=n.getAdUnits().filter((function(e){return(0,A.default)(t,e.code)}));window.googletag.pubads().getSlots().forEach((function(n){w.forEach((function(t){r.forEach((function(e){e.code!==n.getAdUnitPath()&&e.code!==n.getSlotElementId()||n.setTargeting(t,null)}))}))}))}},f.getAllTargeting=function(e){var r,t,i,n,o,a,u,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:g(),s=l(e),c=(function(e,t){var n=f.getWinningBids(e,t);n.forEach((function(e){e.status=C}));var r=p();return n=n.map((function(t){return T({},t.adUnitCode,Object.keys(t.adserverTargeting).filter((function(e){return void 0===t.sendStandardTargeting||t.sendStandardTargeting||-1===r.indexOf(e)})).map((function(e){return T({},"hb_deal"===e?(e+"_"+t.bidderCode).substring(0,O):e.substring(0,O),[t.adserverTargeting[e]])})))}))})(s,d).concat((a=s,u=d,u.filter((function(e){return(0,A.default)(a,e.adUnitCode)})).map((function(e){return b({},e)})).reduce(v,[]).map(y).filter((function(e){return e})))).concat(E.config.getConfig("enableSendAllBids")?(r=s,t=d,i=_.TARGETING_KEYS.concat(S.NATIVE_TARGETING_KEYS),n=[],o=(0,h.groupBy)(t,"adUnitCode"),Object.keys(o).forEach((function(e){var t=(0,h.groupBy)(o[e],"bidderCode");Object.keys(t).forEach((function(e){return n.push(t[e].reduce(h.getHighestCpm,m()))}))})),n.map((function(t){if(t.adserverTargeting&&r&&(I.isArray(r)&&(0,A.default)(r,t.adUnitCode)||"string"==typeof r&&t.adUnitCode===r))return T({},t.adUnitCode,(n=t,i.filter((function(e){return void 0!==t.adserverTargeting[e]})).map((function(e){return T({},(e+"_"+n.bidderCode).substring(0,O),[n.adserverTargeting[e]])}))));var n})).filter((function(e){return e}))):[]);return c.map((function(t){Object.keys(t).map((function(e){t[e].map((function(e){-1===w.indexOf(Object.keys(e)[0])&&(w=Object.keys(e).concat(w))}))}))})),c=c.map((function(e){return T({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return T({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return b(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];return e[n]=b({},e[n],t[n]),e}),{})},f.setTargetingForGPT=function(i){window.googletag.pubads().getSlots().forEach((function(r){Object.keys(i).filter((0,h.isAdUnitCodeMatchingSlot)(r)).forEach((function(n){return Object.keys(i[n]).forEach((function(t){var e=i[n][t].split(",");(e=1<e.length?[e]:e).map((function(e){return I.logMessage("Attempting to set key value for slot: "+r.getSlotElementId()+" key: "+t+" value: "+e),e})).forEach((function(e){r.setTargeting(t,e)}))}))}))}))},f.getWinningBids=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:g(),t=l(e);return n.filter((function(e){return(0,A.default)(t,e.adUnitCode)})).filter((function(e){return 0<e.cpm})).map((function(e){return e.adUnitCode})).filter(h.uniques).map((function(t){return n.filter((function(e){return e.adUnitCode===t?e:null})).reduce(h.getHighestCpm,m(t))}))},f.setTargetingForAst=function(){var r=f.getAllTargeting();Object.keys(r).forEach((function(n){return Object.keys(r[n]).forEach((function(e){if(I.logMessage("Attempting to set targeting for targetId: "+n+" key: "+e+" value: "+r[n][e]),I.isStr(r[n][e])||I.isArray(r[n][e])){var t={};t[e.toUpperCase()]=r[n][e],window.apntag.setKeywords(n,t)}}))}))},f.isApntagDefined=function(){if(window.apntag&&I.isFn(window.apntag.setKeywords))return!0},f}t.targeting=s(i.auctionManager)},39:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.RANDOM=void 0;var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.newConfig=u;var r=n(27),i=o(n(10)),c=o(n(7)),f=n(21);function o(e){return e&&e.__esModule?e:{default:e}}var l=n(0),g=!1,p=3e3,v=window.location.origin,y=100,m=!0,b=200,a=t.RANDOM="random",h={};h[a]=!0,h.fixed=!0;var E=a,S={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},A="*";function u(){var o=[],a=void 0,u=void 0;function e(){function t(t){return(0,i.default)(Object.keys(S),(function(e){return t===S[e]}))}a={},u={_debug:g,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:p,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:v,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_cookieSyncDelay:y,get cookieSyncDelay(){return pbjs.cookieSyncDelay||this._cookieSyncDelay},set cookieSyncDelay(e){this._cookieSyncDelay=e},_priceGranularity:S.MEDIUM,set priceGranularity(e){(function(e){if(!e)return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)t(e)||l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if("object"===(void 0===e?"undefined":s(e))&&!(0,r.isValidPriceConfig)(e))return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0})(e)&&("string"==typeof e?this._priceGranularity=t(e)?e:S.MEDIUM:"object"===(void 0===e?"undefined":s(e))&&(this._customPriceBucket=e,this._priceGranularity=S.CUSTOM,l.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_sendAllBids:m,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_bidderSequence:E,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){h[e]?this._bidderSequence=e:l.logWarn("Invalid order: "+e+". Bidder Sequence was not set.")},_timoutBuffer:b,get timeoutBuffer(){return this._timoutBuffer},set timeoutBuffer(e){this._timoutBuffer=e}}}var t=(0,f.createHook)("asyncSeries",(function(n){if("object"===(void 0===n?"undefined":s(n))){var i,t,e=Object.keys(n),r={};e.forEach((function(e){var t=n[e];"object"===s(a[e])&&"object"===(void 0===t?"undefined":s(t))&&(t=d({},a[e],t)),r[e]=u[e]=t})),i=r,t=Object.keys(i),o.filter((function(e){return(0,c.default)(t,e.topic)})).forEach((function(e){var t,n,r;e.callback((t={},n=e.topic,r=i[e.topic],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))})),o.filter((function(e){return e.topic===A})).forEach((function(e){return e.callback(i)}))}else l.logError("setConfig options must be an object")}));return e(),{getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?l.deepAccess(u,e):u}return function(e,t){var n=t;if("string"!=typeof e&&(n=e,e=A),"function"==typeof n)return o.push({topic:e,callback:n}),function(){o.splice(o.indexOf(t),1)};l.logError("listener must be a function")}.apply(void 0,arguments)},setConfig:t,setDefaults:function(e){"object"===(void 0===a?"undefined":s(a))?(d(a,e),d(u,e)):l.logError("defaults must be an object")},resetConfig:e}}t.config=u()},42:function(e,t,n){"use strict";var r=n(16),i=n(30)(5),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(24)(o)},43:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},44:function(e,t,n){var r=n(45),i=n(50);e.exports=n(23)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},45:function(e,t,n){var r=n(46),i=n(47),o=n(49),a=Object.defineProperty;t.f=n(23)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},46:function(e,t,n){var r=n(17);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},463:function(e,t,n){e.exports=n(464)},464:function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(37),u=n(0),d=n(465),s=n(13),c=n(11),f=n(4),l=n(26),g=n(38),p=n(21),v=n(7),y=(r=v)&&r.__esModule?r:{default:r};var m=(0,a.getGlobal)(),b=n(2),h=n(0),E=n(8),S=n(19),A=n(9),T=s.userSync.triggerUserSyncs,I=b.EVENTS,_=I.ADD_AD_UNITS,w=I.BID_WON,C=I.REQUEST_BIDS,O=I.SET_TARGETING,B=I.AD_RENDER_FAILED,N=b.AD_RENDER_FAILED_REASON,R=N.PREVENT_WRITING_ON_MAIN_DOCUMENT,U=N.NO_AD,D=N.EXCEPTION,j=N.CANNOT_FIND_AD,P=N.MISSING_DOC_OR_ADID,k={bidWon:function(e){var t=l.auctionManager.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(u.flatten).filter(u.uniques);if(!h.contains(t,e))return void h.logError('The "'+e+'" placement is not defined.');return!0}};function M(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function x(e,t,n){var r={};r.reason=e,r.message=t,n&&(r.bid=n),h.logError(t),A.emit(B,r)}function q(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){h.logError("Error processing command :","prebid.js",e)}}))}m.bidderSettings=m.bidderSettings||{},m.cbTimeout=m.cbTimeout||200,m.libLoaded=!0,m.version="v1.11.0",h.logInfo("Prebid.js v1.11.0 loaded"),m.adUnits=m.adUnits||[],m.triggerUserSyncs=T,m.getAdserverTargetingForAdUnitCodeStr=function(e){if(h.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=m.getAdserverTargetingForAdUnitCode(e);return h.transformAdServerTargetingObj(t)}h.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},m.getAdserverTargetingForAdUnitCode=function(e){return m.getAdserverTargeting(e)[e]},m.getAdserverTargeting=function(e){h.logInfo("Invoking pbjs.getAdserverTargeting",arguments);var t=l.auctionManager.getBidsReceived();return g.targeting.getAllTargeting(e,t)},m.getBidResponses=function(){h.logInfo("Invoking pbjs.getBidResponses",arguments);var e=l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind(this,l.auctionManager.getAdUnitCodes())),n=e&&e.length&&e[e.length-1].auctionId;return e.map((function(e){return e.adUnitCode})).filter(u.uniques).map((function(t){return e.filter((function(e){return e.auctionId===n&&e.adUnitCode===t}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return t={},n=e[0].adUnitCode,r={bids:e.map(u.removeRequestId)},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r})).reduce((function(e,t){return o(e,t)}),{})},m.getBidResponsesForAdUnitCode=function(t){return{bids:l.auctionManager.getBidsReceived().filter((function(e){return e.adUnitCode===t})).map(u.removeRequestId)}},m.setTargetingForGPTAsync=function(e){if(h.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,u.isGptPubadsDefined)()){var t=g.targeting.getAllTargeting(e);g.targeting.resetPresetTargeting(e),g.targeting.setTargetingForGPT(t),A.emit(O,t)}else h.logError("window.googletag is not defined on the page")},m.setTargetingForAst=function(){h.logInfo("Invoking pbjs.setTargetingForAn",arguments),g.targeting.isApntagDefined()?(g.targeting.setTargetingForAst(),A.emit(O,g.targeting.getAllTargeting())):h.logError("window.apntag is not defined on the page")},m.renderAd=function(e,t){if(h.logInfo("Invoking pbjs.renderAd",arguments),h.logMessage("Calling renderAd with adId :"+t),e&&t)try{var n=l.auctionManager.findBidByAdId(t);if(n){n.status=g.RENDERED,n.ad=h.replaceAuctionPrice(n.ad,n.cpm),n.adUrl=h.replaceAuctionPrice(n.adUrl,n.cpm),l.auctionManager.addWinningBid(n),A.emit(w,n);var r=n.height,i=n.width,o=n.ad,a=n.mediaType,u=n.adUrl,d=n.renderer,s=document.createComment("Creative "+n.creativeId+" served by "+n.bidder+" Prebid.js Header Bidding");if(h.insertElement(s,e,"body"),d&&d.url)d.render(n);else if(e===document&&!h.inIframe()||"video"===a){x(R,"Error trying to write ad. Ad render call ad id "+t+" was prevented from writing to the main document.",n)}else if(o)e.write(o),e.close(),M(e,i,r),h.callBurl(n);else if(u){var c=h.createInvisibleIframe();c.height=r,c.width=i,c.style.display="inline",c.style.overflow="hidden",c.src=u,h.insertElement(c,e,"body"),M(e,i,r),h.callBurl(n)}else{x(U,"Error trying to write ad. No ad for bid response id: "+t,n)}}else{x(j,"Error trying to write ad. Cannot find ad by given id : "+t)}}catch(e){var f="Error trying to write ad Id :"+t+" to the page:"+e.message;x(D,f)}else x(P,"Error trying to write ad Id :"+t+" to the page. Missing document or adId")},m.removeAdUnit=function(e){if(h.logInfo("Invoking pbjs.removeAdUnit",arguments),e)for(var t=0;t<m.adUnits.length;t++)m.adUnits[t].code===e&&m.adUnits.splice(t,1)},m.requestBids=(0,p.createHook)("asyncSeries",(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels;A.emit(C);var a=n||f.config.getConfig("bidderTimeout");if(r=r||m.adUnits,h.logInfo("Invoking pbjs.requestBids",arguments),i&&i.length?r=r.filter((function(e){return(0,y.default)(i,e.code)})):i=r&&r.map((function(e){return e.code})),r.forEach((function(i){var o=Object.keys(i.mediaTypes||{banner:"banner"}),e=i.bids.map((function(e){return e.bidder})),a=E.bidderRegistry;e.forEach((function(t){var e=a[t],n=e&&e.getSpec&&e.getSpec(),r=n&&n.supportedMediaTypes||["banner"];o.some((function(e){return(0,y.default)(r,e)}))||(h.logWarn(h.unsupportedBidderMessage(i,t)),i.bids=i.bids.filter((function(e){return e.bidder!==t})))}))})),r&&0!==r.length){var u=l.auctionManager.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:a,labels:o});return u.callBids(),u}if(h.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){h.logError("Error executing bidsBackHandler",null,e)}})),m.addAdUnits=function(e){h.logInfo("Invoking pbjs.addAdUnits",arguments),h.isArray(e)?(e.forEach((function(e){return e.transactionId=h.generateUUID()})),m.adUnits.push.apply(m.adUnits,e)):"object"===(void 0===e?"undefined":i(e))&&(e.transactionId=h.generateUUID(),m.adUnits.push(e)),A.emit(_)},m.onEvent=function(e,t,n){h.logInfo("Invoking pbjs.onEvent",arguments),h.isFn(t)?!n||k[e].call(null,n)?A.on(e,t,n):h.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):h.logError('The event handler provided is not a function and was not set on event "'+e+'".')},m.offEvent=function(e,t,n){h.logInfo("Invoking pbjs.offEvent",arguments),n&&!k[e].call(null,n)||A.off(e,t,n)},m.registerBidAdapter=function(e,t){h.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{E.registerBidAdapter(e(),t)}catch(e){h.logError("Error registering bidder adapter : "+e.message)}},m.registerAnalyticsAdapter=function(e){h.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{E.registerAnalyticsAdapter(e)}catch(e){h.logError("Error registering analytics adapter : "+e.message)}},m.createBid=function(e){return h.logInfo("Invoking pbjs.createBid",arguments),S.createBid(e)},m.loadScript=function(e,t,n){h.logInfo("Invoking pbjs.loadScript",arguments),(0,c.loadScript)(e,t,n)},m.enableAnalytics=function(e){e&&!h.isEmpty(e)?(h.logInfo("Invoking pbjs.enableAnalytics for: ",e),E.enableAnalytics(e)):h.logError("pbjs.enableAnalytics should be called with option {}")},m.aliasBidder=function(e,t){h.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?E.aliasBidAdapter(e,t):h.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},m.getAllWinningBids=function(){return l.auctionManager.getAllWinningBids().map(u.removeRequestId)},m.getAllPrebidWinningBids=function(){return l.auctionManager.getBidsReceived().filter((function(e){return e.status===g.BID_TARGETING_SET})).map(u.removeRequestId)},m.getHighestCpmBids=function(e){var t=l.auctionManager.getBidsReceived().filter(g.getOldestBid);return g.targeting.getWinningBids(e,t).map(u.removeRequestId)},m.getConfig=f.config.getConfig,m.setConfig=f.config.setConfig,m.que.push((function(){return(0,d.listenMessagesFromCreative)()})),m.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){h.logError("Error processing command :",e.message,e.stack)}else h.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},m.que.push=m.cmd.push,m.processQueue=function(){q(m.que),q(m.cmd)}},465:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listenMessagesFromCreative=function(){addEventListener("message",o,!1)};var m=i(n(9)),b=n(18),r=n(2),h=n(0),E=n(26),S=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}var A=r.EVENTS.BID_WON;function o(e){var t,n,r,i,o,a,u,d,s,c,f,l,g,p=e.message?"message":"data",v={};try{v=JSON.parse(e[p])}catch(e){return}if(v.adId){var y=(0,S.default)(E.auctionManager.getBidsReceived(),(function(e){return e.adId===v.adId}));"Prebid Request"===v.message&&(t=y,n=v.adServerDomain,r=e.source,i=t.adId,o=t.ad,a=t.adUrl,u=t.width,d=t.height,i&&(c=(s=t).adUnitCode,f=s.width,l=s.height,(g=document.getElementById((0,S.default)(window.googletag.pubads().getSlots().filter((0,h.isSlotMatchingAdUnitCode)(c)),(function(e){return e})).getSlotElementId()).querySelector("iframe")).width=""+f,g.height=""+l,r.postMessage(JSON.stringify({message:"Prebid Response",ad:o,adUrl:a,adId:i,width:u,height:d}),n)),E.auctionManager.addWinningBid(y),m.default.emit(A,y)),"Prebid Native"===v.message&&((0,b.fireNativeTrackers)(v,y),E.auctionManager.addWinningBid(y),m.default.emit(A,y))}}},47:function(e,t,n){e.exports=!n(23)&&!n(29)((function(){return 7!=Object.defineProperty(n(48)("div"),"a",{get:function(){return 7}}).a}))},48:function(e,t,n){var r=n(17),i=n(20).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},49:function(e,t,n){var i=n(17);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},50:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},51:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},52:function(e,t,n){var r=n(33);e.exports=function(e){return Object(r(e))}},53:function(e,t,n){var r=n(54);e.exports=function(e,t){return new(r(e))(t)}},54:function(e,t,n){var r=n(17),i=n(36),o=n(55)("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},55:function(e,t,n){var r=n(56)("wks"),i=n(57),o=n(20).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},56:function(e,t,n){var r=n(20),i="__core-js_shared__",o=r[i]||(r[i]={});e.exports=function(e){return o[e]||(o[e]={})}},57:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},58:function(e,t,n){"use strict";var r=n(16),i=n(59)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,1<arguments.length?arguments[1]:void 0)}}),n(24)("includes")},59:function(e,t,n){var d=n(60),s=n(34),c=n(61);e.exports=function(u){return function(e,t,n){var r,i=d(e),o=s(i.length),a=c(n,o);if(u&&t!=t){for(;a<o;)if((r=i[a++])!=r)return!0}else for(;a<o;a++)if((u||a in i)&&i[a]===t)return u||a||0;return!u&&-1}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.ajaxBuilder=r;var l=n(12),g=n(0),p=4;t.ajax=r();function r(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:3e3;return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i=void 0,o=!1,a=r.method||(n?"POST":"GET"),u="object"===(void 0===t?"undefined":f(t))&&null!==t?t:{success:function(){g.logMessage("xhr success")},error:function(e){g.logError("xhr error",null,e)}};if("function"==typeof t&&(u.success=t),window.XMLHttpRequest?void 0===(i=new window.XMLHttpRequest).responseType&&(o=!0):o=!0,o?((i=new window.XDomainRequest).onload=function(){u.success(i.responseText,i)},i.onerror=function(){u.error("error",i)},i.ontimeout=function(){u.error("timeout",i)},i.onprogress=function(){g.logMessage("xhr onprogress")}):(i.onreadystatechange=function(){if(i.readyState===p){var e=i.status;200<=e&&e<300||304===e?u.success(i.responseText,i):u.error(i.statusText,i)}},i.ontimeout=function(){g.logError("  xhr timeout after ",i.timeout,"ms")}),"GET"===a&&n){var d=(0,l.parse)(e,r);c(d.search,n),e=(0,l.format)(d)}i.open(a,e),i.timeout=s,o||(r.withCredentials&&(i.withCredentials=!0),g._each(r.customHeaders,(function(e,t){i.setRequestHeader(t,e)})),r.preflight&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type",r.contentType||"text/plain")),"POST"===a&&n?i.send(n):i.send()}catch(e){g.logError("xhr construction",e)}}}},60:function(e,t,n){var r=n(31),i=n(33);e.exports=function(e){return r(i(e))}},61:function(e,t,n){var r=n(35),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},62:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.setSizeConfig=a,t.resolveStatus=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,a=void 0===o?[]:o,u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=(c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:p,c.reduce((function(n,e){return"object"===(void 0===e?"undefined":f(e))&&"string"==typeof e.mediaQuery?matchMedia(e.mediaQuery).matches&&(Array.isArray(e.sizesSupported)&&(n.shouldFilter=!0),["labels","sizesSupported"].forEach((function(t){return(e[t]||[]).forEach((function(e){return n[t][e]=!0}))}))):(0,l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),n}),{labels:{},sizesSupported:{},shouldFilter:!1})),s=void 0;var c;s=d.shouldFilter?u.filter((function(e){return d.sizesSupported[e]})):u;return{active:0<s.length&&(0===n.length||!i&&(n.some((function(e){return d.labels[e]}))||n.some((function(e){return(0,g.default)(a,e)})))||i&&n.reduce((function(e,t){return e?d.labels[t]||(0,g.default)(a,t):e}),!0)),sizes:s}};var r,i=n(4),l=n(0),o=n(7),g=(r=o)&&r.__esModule?r:{default:r};var p=[];function a(e){p=e}i.config.getConfig("sizeConfig",(function(e){return a(e.sizeConfig)}))},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasNonVideoBidder=t.videoBidder=t.videoAdUnit=void 0,t.isValidVideoBid=function(e,t){var n=(0,o.getBidRequest)(e.adId,t),r=n&&(0,o.deepAccess)(n,"mediaTypes.video"),i=r&&(0,o.deepAccess)(r,"context");if(!n||r&&i!==s)return a.config.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):((0,o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1);if(i===s)return!!(e.renderer||n.renderer||e.vastContent);return!0};var r,i=n(8),o=n(0),a=n(4),u=n(7),d=(r=u)&&r.__esModule?r:{default:r};var s="outstream",c=(t.videoAdUnit=function(e){var t="video"===e.mediaType,n=(0,o.deepAccess)(e,"mediaTypes.video");return t||n},t.videoBidder=function(e){return(0,d.default)(i.videoAdapters,e.bidder)});t.hasNonVideoBidder=function(e){return e.bids.filter((function(e){return!c(e)})).length}},7:function(e,t,n){n(58),e.exports=n(15).Array.includes},8:function(e,b,t){"use strict";var y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=t(0),l=t(63),g=t(18),d=t(1),m=t(6),E=t(4),S=n(t(7)),A=n(t(10));function n(e){return e&&e.__esModule?e:{default:e}}var T=t(0),I=t(2),_=t(9),w=void 0,C={};b.bidderRegistry=C,b.aliasRegistry={};var O={};E.config.getConfig("s2sConfig",(function(e){O=e.s2sConfig}));var r={};function p(e,t){return e.labelAll?{labelAll:!0,labels:e.labelAll,activeLabels:t}:{labelAll:!1,labels:e.labelAny,activeLabels:t}}function B(e){var r=e.bidderCode,d=e.auctionId,s=e.bidderRequestId,t=e.adUnits,c=e.labels;return t.reduce((function(e,a){var t=(0,l.resolveStatus)(p(a,c),a.sizes),n=t.active,u=t.sizes;return n&&e.push(a.bids.filter((function(e){return e.bidder===r})).reduce((function(e,t){a.mediaTypes&&(T.isValidMediaTypes(a.mediaTypes)?t=f({},t,{mediaTypes:a.mediaTypes}):T.logError("mediaTypes is not correctly configured for adunit "+a.code));var n=a.nativeParams||T.deepAccess(a,"mediaTypes.native");n&&(t=f({},t,{nativeParams:(0,g.processNativeAdUnitParams)(n)})),t=f({},t,(0,h.getDefinedParams)(a,["mediaType","renderer"]));var r=(0,l.resolveStatus)(p(t,c),u),i=r.active,o=r.sizes;return i&&e.push(f({},t,{adUnitCode:a.code,transactionId:a.transactionId,sizes:o,bidId:t.bid_id||T.getUniqueIdentifierStr(),bidderRequestId:s,auctionId:d})),e}),[])),e}),[]).reduce(h.flatten,[]).filter((function(e){return""!==e}))}function N(){return O&&O.enabled&&O.testing&&w}b.gdprDataHandler={consentData:null,setConsentData:function(e){this.consentData=e},getConsentData:function(){return this.consentData}},b.makeBidRequests=function(e,r,i,o,a){var u=[];e=b.checkBidRequestSizes(e);var t=(0,h.getBidderCodes)(e);E.config.getConfig("bidderSequence")===E.RANDOM&&(t=(0,h.shuffle)(t));var n,d,s,c=t,f=[];if(O.enabled){N()&&(f=w.getSourceBidderMap(e)[w.CLIENT]);var l=O.bidders;c=t.filter((function(e){return!(0,S.default)(l,e)||(0,S.default)(f,e)}));var g=(n=e,d=O.bidders,(s=T.deepClone(n)).forEach((function(e){e.bids=e.bids.filter((function(e){return(0,S.default)(d,e.bidder)&&(!N()||e.finalSource!==w.CLIENT)})).map((function(e){return e.bid_id=T.getUniqueIdentifierStr(),e}))})),s=s.filter((function(e){return 0!==e.bids.length}))),p=T.generateUUID();l.forEach((function(e){var t=T.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:i,bidderRequestId:t,tid:p,adUnitsS2SCopy:g,bids:B({bidderCode:e,auctionId:i,bidderRequestId:t,adUnits:g,labels:a}),auctionStart:r,timeout:O.timeout,src:I.S2S.SRC};0!==n.bids.length&&u.push(n)}))}var v,y,m=(v=e,(y=T.deepClone(v)).forEach((function(e){e.bids=e.bids.filter((function(e){return!N()||e.finalSource!==w.SERVER}))})),y=y.filter((function(e){return 0!==e.bids.length})));return c.forEach((function(e){var t=T.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:i,bidderRequestId:t,bids:B({bidderCode:e,auctionId:i,bidderRequestId:t,adUnits:m,labels:a}),auctionStart:r,timeout:o};n.bids&&0!==n.bids.length&&u.push(n)})),b.gdprDataHandler.getConsentData()&&u.forEach((function(e){e.gdprConsent=b.gdprDataHandler.getConsentData()})),u},b.checkBidRequestSizes=function(e){function a(e){return Array.isArray(e)&&2===e.length&&T.isInteger(e[0])&&T.isInteger(e[1])}return e.forEach((function(e){e.sizes&&T.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).");var t=e.mediaTypes;if(t&&t.banner){var n=t.banner;n.sizes?e.sizes=n.sizes:(T.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."),delete e.mediaTypes.banner)}if(t&&t.video){var r=t.video;if(r.playerSize)if(Array.isArray(r.playerSize)&&1===r.playerSize.length&&r.playerSize.every(a))e.sizes=r.playerSize;else if(a(r.playerSize)){var i=[];i.push(r.playerSize),T.logInfo("Transforming video.playerSize from "+r.playerSize+" to "+i+" so it's in the proper format."),e.sizes=r.playerSize=i}else T.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete e.mediaTypes.video.playerSize}if(t&&t.native){var o=t.native;o.image&&o.image.sizes&&!Array.isArray(o.image.sizes)&&(T.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete e.mediaTypes.native.image.sizes),o.image&&o.image.aspect_ratios&&!Array.isArray(o.image.aspect_ratios)&&(T.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete e.mediaTypes.native.image.aspect_ratios),o.icon&&o.icon.sizes&&!Array.isArray(o.icon.sizes)&&(T.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete e.mediaTypes.native.icon.sizes)}})),e},b.callBids=function(e,t,r,i){if(t.length){var o=(0,m.ajaxBuilder)(t[0].timeout),n=t.reduce((function(e,t){return e[Number(void 0!==t.src&&t.src===I.S2S.SRC)].push(t),e}),[[],[]]),a=y(n,2),u=a[0],d=a[1];if(d.length){var s=O.bidders,c=C[O.adapter],f=d[0].tid,l=d[0].adUnitsS2SCopy;if(l.forEach((function(n){var e=n.bids.filter((function(t){return(0,A.default)(d,(function(e){return e.bidderCode===t.bidder&&(0,A.default)(e.bids,(function(e){return e.adUnitCode===n.code}))}))}));n.bids=e})),l=l.filter((function(e){return 0<e.bids.length})),c){var g={tid:f,ad_units:l};if(g.ad_units.length){var p=d.map((function(e){return e.start=(0,h.timestamp)(),e.doneCbCallCount=0,i(e.bidderRequestId)})),v=g.ad_units.reduce((function(e,t){return e.concat((t.bids||[]).reduce((function(e,t){return e.concat(t.bidder)}),[]))}),[]);T.logMessage("CALLING S2S HEADER BIDDERS ==== "+s.filter((function(e){return(0,S.default)(v,e)})).join(",")),d.forEach((function(e){_.emit(I.EVENTS.BID_REQUESTED,e)})),c.callBids(g,d,r,(function(){return p.forEach((function(e){return e()}))}),o)}}}u.forEach((function(e){e.start=(0,h.timestamp)();var t=C[e.bidderCode];if(t){T.logMessage("CALLING BIDDER ======= "+e.bidderCode),_.emit(I.EVENTS.BID_REQUESTED,e),e.doneCbCallCount=0;var n=i(e.bidderRequestId);t.callBids(e,r,n,o)}else T.logError("Adapter trying to be called which does not exist: "+e.bidderCode+" adaptermanager.callBids")}))}else T.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},b.videoAdapters=[],b.registerBidAdapter=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).supportedMediaTypes,r=void 0===n?[]:n;e&&t?"function"==typeof e.callBids?(C[t]=e,(0,S.default)(r,"video")&&b.videoAdapters.push(t),(0,S.default)(r,"native")&&g.nativeAdapters.push(t)):T.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):T.logError("bidAdaptor or bidderCode not specified")},b.aliasBidAdapter=function(t,e){var n,r;if(void 0===C[e]){var i=C[t];if(void 0===i)T.logError('bidderCode "'+t+'" is not an existing bidder.',"adaptermanager.aliasBidAdapter");else try{var o=void 0,a=(n=t,r=[],(0,S.default)(b.videoAdapters,n)&&r.push("video"),(0,S.default)(g.nativeAdapters,n)&&r.push("native"),r);if(i.constructor.prototype!=Object.prototype)(o=new i.constructor).setBidderCode(e);else{var u=i.getSpec();o=(0,d.newBidder)(f({},u,{code:e})),b.aliasRegistry[e]=t}this.registerBidAdapter(o,e,{supportedMediaTypes:a})}catch(e){T.logError(t+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}else T.logMessage('alias name "'+e+'" has been already specified.')},b.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,r[n]=t):T.logError('Prebid Error: Analytics adaptor error for analytics "'+n+'"\n        analytics adapter must implement an enableAnalytics() function'):T.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},b.enableAnalytics=function(e){T.isArray(e)||(e=[e]),T._each(e,(function(e){var t=r[e.provider];t?t.enableAnalytics(e):T.logError("Prebid Error: no analytics adapter found in registry for\n        "+e.provider+".")}))},b.getBidAdapter=function(e){return C[e]},b.setS2STestingModule=function(e){w=e},b.callTimedOutBidders=function(t,n,r){n=n.map((function(e){return e.params=T.getUserConfiguredParams(t,e.adUnitCode,e.bidder),e.timeout=r,e})),n=T.groupBy(n,"bidder"),Object.keys(n).forEach((function(t){try{var e=C[t].getSpec();e&&e.onTimeout&&"function"==typeof e.onTimeout&&(T.logInfo("Invoking "+t+".onTimeout"),e.onTimeout(n[t]))}catch(e){T.logWarn("Error calling onTimeout of "+t)}}))}},9:function(e,t,n){"use strict";var u,r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=n(0),o=n(2),a=Array.prototype.slice,s=Array.prototype.push,c=d._map(o.EVENTS,(function(e){return e})),f=o.EVENT_ID_PATHS,l=[];e.exports=(u={},(r={}).on=function(e,t,n){if(i=e,d.contains(c,i)){var r=u[e]||{que:[]};n?(r[n]=r[n]||{que:[]},r[n].que.push(t)):r.que.push(t),u[e]=r}else d.logError("Wrong event name : "+e+" Valid event names :"+c);var i},r.emit=function(e){!(function(e,t){d.logMessage("Emitting event for: "+e);var n=t[0]||{},r=n[f[e]],i=u[e]||{que:[]},o=d._map(i,(function(e,t){return t})),a=[];l.push({eventType:e,args:n,id:r}),r&&d.contains(o,r)&&s.apply(a,i[r].que),s.apply(a,i.que),d._each(a,(function(e){if(e)try{e.apply(null,t)}catch(e){d.logError("Error executing handler:","events.js",e)}}))})(e,a.call(arguments,1))},r.off=function(e,n,r){var i=u[e];d.isEmpty(i)||d.isEmpty(i.que)&&d.isEmpty(i[r])||r&&(d.isEmpty(i[r])||d.isEmpty(i[r].que))||(r?d._each(i[r].que,(function(e){var t=i[r].que;e===n&&t.splice(d.indexOf.call(t,e),1)})):d._each(i.que,(function(e){var t=i.que;e===n&&t.splice(d.indexOf.call(t,e),1)})),u[e]=i)},r.get=function(){return u},r.getEvents=function(){var n=[];return d._each(l,(function(e){var t=i({},e);n.push(t)})),n},r)}});
pbjsChunk([111],{113:function(e,r,i){i(114),e.exports=i(115)},114:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var t=p(["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=","","","",""],["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=",";misc=","","","",""]),n=p(["//","/bidRequest?"],["//","/bidRequest?"]),a=p(["dcn=","&pos=","&cmd=bid",""],["dcn=","&pos=","&cmd=bid",""]),c=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r.default=e,r}})(i(0)),o=i(1),s=i(4),d=i(2),u=i(3);function p(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var l={AOL:"aol",ONEMOBILE:"onemobile",ONEDISPLAY:"onedisplay"},b={DISPLAY:{GET:"display-get"},MOBILE:{GET:"mobile-get",POST:"mobile-post"}},m={IFRAME:{TAG:"iframe",TYPE:"iframe"},IMAGE:{TAG:"img",TYPE:"image"}},f=I(t,"host","network","placement","pageid","sizeid","alias","misc","bidfloor","keyValues","consentData"),v=I(n,"host"),h=I(a,"dcn","pos","dynamicParams"),g={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"};pbjs.aolGlobals={pixelsDropped:!1};var O,E=(O=!0,function(){var e=pbjs.bidderSettings;O&&e&&e.aol&&"function"==typeof e.aol.bidCpmAdjustment&&(c.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable."),O=!1)});function I(o){for(var e=arguments.length,i=Array(1<e?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[t.length-1]||{},a=[o[0]];return i.forEach((function(e,r){var i=c.isInteger(e)?t[e]:n[e];a.push(i,o[r+1])})),a.join("")}}function y(e){return e===l.AOL||e===l.ONEMOBILE}function A(e){if(y(e.bidder)&&e.params.id&&e.params.imp&&e.params.imp[0]){var r=e.params.imp[0];return r.id&&r.tagid&&(r.banner&&r.banner.w&&r.banner.h||r.video&&r.video.mimes&&r.video.minduration&&r.video.maxduration)}}function S(e){return y(e.bidder)&&e.params.dcn&&e.params.pos}function P(e){return((r=e.bidder)===l.AOL||r===l.ONEDISPLAY)&&e.params.placement&&e.params.network;var r}var x=r.spec={code:l.AOL,aliases:[l.ONEMOBILE,l.ONEDISPLAY],supportedMediaTypes:[u.BANNER],isBidRequestValid:function(e){return P(e)||(S(r=e)||A(r));var r},buildRequests:function(e,r){var t=this,n=r?r.gdprConsent:null;return e.map((function(e){var r,i=S(r=e)?b.MOBILE.GET:A(r)?b.MOBILE.POST:P(r)?b.DISPLAY.GET:void 0;if(i)return t.formatBidRequest(i,e,n)}))},interpretResponse:function(e,r){var i=e.body;if(E(),i){var t=this._parseBidResponse(i,r);if(t)return t}else c.logError("Empty bid response",r.bidderCode,i)},getUserSyncs:function(e,r){var i=r[0];return s.config.getConfig("aol.userSyncOn")===d.EVENTS.BID_RESPONSE&&!pbjs.aolGlobals.pixelsDropped&&i&&i.ext&&i.ext.pixels?(pbjs.aolGlobals.pixelsDropped=!0,(function(e){var t=/\w*(?=\s)/,n=/src=("|')(.*?)\1/,a=[];if(e){var r=e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);r&&r.forEach((function(e){var r=e.match(t)[0],i=e.match(n)[2];r&&r&&a.push({type:r===m.IMAGE.TAG?m.IMAGE.TYPE:m.IFRAME.TYPE,url:i})}))}return a})(i.ext.pixels)):[]},formatBidRequest:function(e,r,i){var t=void 0;switch(e){case b.DISPLAY.GET:t={url:this.buildMarketplaceUrl(r,i),method:"GET",ttl:60};break;case b.MOBILE.GET:t={url:this.buildOneMobileGetUrl(r,i),method:"GET",ttl:3600};break;case b.MOBILE.POST:t={url:this.buildOneMobileBaseUrl(r),method:"POST",ttl:3600,data:this.buildOpenRtbRequestData(r,i),options:{contentType:"application/json",customHeaders:{"x-openrtb-version":"2.2"}}}}return t.bidderCode=r.bidder,t.bidId=r.bidId,t.userSyncOn=r.params.userSyncOn,t},buildMarketplaceUrl:function(e,r){var i,t,n,a=e.params,o=a.server,s=a.region||"us",d=void 0;return g.hasOwnProperty(s)||(c.logWarn("Unknown region '"+s+"' for AOL bidder."),s="us"),d=o||g[s],a.region=s,f({host:d,network:a.network,placement:parseInt(a.placement),pageid:a.pageId||0,sizeid:a.sizeId||0,alias:a.alias||c.getUniqueIdentifierStr(),misc:(new Date).getTime(),bidfloor:(n=a.bidFloor,void 0!==n?";bidfloor="+n.toString():""),keyValues:(i=a.keyValues,t="",c._each(i,(function(e,r){t+=";kv"+r+"="+encodeURIComponent(e)})),t),consentData:this.formatMarketplaceConsentData(r)})},buildOneMobileGetUrl:function(e,r){var i=e.params,t=i.dcn,n=i.pos,a=i.ext,o=this.buildOneMobileBaseUrl(e);if(t&&n){var s=this.formatOneMobileDynamicParams(a,r);o+=h({dcn:t,pos:n,dynamicParams:s})}return o},buildOneMobileBaseUrl:function(e){return v({host:e.params.host||"hb.nexage.com"})},formatOneMobileDynamicParams:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];this.isSecureProtocol()&&(e.secure=1),this.isConsentRequired(r)&&(e.euconsent=r.consentString,e.gdpr=1);var i="";return c._each(e,(function(e,r){i+="&"+r+"="+encodeURIComponent(e)})),i},buildOpenRtbRequestData:function(e,r){var i={id:e.params.id,imp:e.params.imp};return this.isConsentRequired(r)&&(i.user={ext:{consent:r.consentString}},i.regs={ext:{gdpr:1}}),i},isConsentRequired:function(e){return!!(e&&e.consentString&&e.gdprApplies)},formatMarketplaceConsentData:function(e){return this.isConsentRequired(e)?";euconsent="+e.consentString+";gdpr=1":""},_parseBidResponse:function(e,r){var i=void 0;try{i=e.seatbid[0].bid[0]}catch(e){return}var t=void 0;if(i.ext&&i.ext.encp)t=i.ext.encp;else if(null===(t=i.price)||isNaN(t))return void c.logError("Invalid price in bid response",l.AOL,bid);var n={bidderCode:r.bidderCode,requestId:r.bidId,ad:i.adm,cpm:t,width:i.w,height:i.h,creativeId:i.crid,pubapiId:e.id,currency:e.cur,dealId:i.dealid,netRevenue:!0,ttl:r.ttl};return e.ext&&e.ext.pixels&&s.config.getConfig("aol.userSyncOn")!==d.EVENTS.BID_RESPONSE&&(n.ad+=this.formatPixels(e.ext.pixels)),n},formatPixels:function(e){return"<script>var w=window,prebid;for(var i=0;i<10;i++){w = w.parent;prebid=w.pbjs;if(prebid && prebid.aolGlobals && !prebid.aolGlobals.pixelsDropped){try{prebid.aolGlobals.pixelsDropped=true;"+e.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g,"")+"break;}catch(e){continue;}}}<\/script>"},isOneMobileBidder:y,isSecureProtocol:function(){return"https:"===document.location.protocol}};(0,o.registerBidder)(x)},115:function(e,r){}},[113]);
pbjsChunk([109],{118:function(e,r,a){a(119),e.exports=a(120)},119:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o=a(14),u=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r}})(a(0)),t=a(1),c=a(3),m=s(a(10)),l=s(a(7));function s(e){return e&&e.__esModule?e:{default:e}}var f=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],y=["age","external_uid","segments","gender","dnt","language"],v={body:"description",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},icon:{serverName:"icon",requiredParams:{required:!0},minimumParams:{sizes:[{}]}},sponsoredBy:"sponsored_by"},b=!1,n=r.spec={code:"appnexus",aliases:["appnexusAst","brealtime","pagescience","defymedia","gourmetads","matomy","featureforward","oftmedia","districtm"],supportedMediaTypes:[c.BANNER,c.VIDEO,c.NATIVE],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var a=e.map(g),t=(0,m.default)(e,_),s=void 0;t&&(s={},Object.keys(t.params.user).filter((function(e){return(0,l.default)(y,e)})).forEach((function(e){return s[e]=t.params.user[e]})));var i=(0,m.default)(e,I),n=i?parseInt(i.params.member,10):0,d={tags:[].concat(function(e){if(Array.isArray(e)){for(var r=0,a=Array(e.length);r<e.length;r++)a[r]=e[r];return a}return Array.from(e)}(a)),user:s,sdk:{source:"pbjs",version:"1.11.0"}};return 0<n&&(d.member_id=n),r&&r.gdprConsent&&(d.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),{method:"POST",url:"//ib.adnxs.com/ut/v3/prebid",data:JSON.stringify(d),bidderRequest:r}},interpretResponse:function(e,r){var i=this,n=r.bidderRequest;e=e.body;var d=[];if(!e||e.error){var a="in response for "+n.bidderCode+" adapter";return e&&e.error&&(a+=": "+e.error),u.logError(a),d}return e.tags&&e.tags.forEach((function(e){var r,a,t=(r=e)&&r.ads&&r.ads.length&&(0,m.default)(r.ads,(function(e){return e.rtb}));if(t&&isFinite(t.cpm)&&(0,l.default)(i.supportedMediaTypes,t.ad_type)){var s=(function(e,r,a){var t={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,appnexus:{buyerMemberId:r.buyer_member_id}};if(r.rtb.video){if(p(t,{width:r.rtb.video.player_width||0,height:r.rtb.video.player_height||0,vastUrl:r.rtb.video.asset_url,vastImpUrl:r.notify_url,vastContent:r.rtb.video.content,ttl:3600}),r.renderer_url&&b){var s=u.deepAccess(a.bids[0],"renderer.options");p(t,{adResponse:e,renderer:(function(e,r){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=o.Renderer.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1});try{t.setRender(E)}catch(e){u.logWarn("Prebid Error calling setRender on renderer",e)}return t.setEventHandlers({impression:function(){return u.logMessage("AppNexus outstream video impression event")},loaded:function(){return u.logMessage("AppNexus outstream video loaded event")},ended:function(){u.logMessage("AppNexus outstream renderer video event"),document.querySelector("#"+e).style.display="none"}}),t})(t.adUnitCode,r,s)}),t.adResponse.ad=t.adResponse.ads[0],t.adResponse.ad.video=t.adResponse.ad.rtb.video}}else if(r.rtb[c.NATIVE]){var i=r.rtb[c.NATIVE];t[c.NATIVE]={title:i.title,body:i.desc,cta:i.ctatext,sponsoredBy:i.sponsored,clickUrl:i.link.url,clickTrackers:i.link.click_trackers,impressionTrackers:i.impression_trackers,javascriptTrackers:i.javascript_trackers},i.main_img&&(t.native.image={url:i.main_img.url,height:i.main_img.height,width:i.main_img.width}),i.icon&&(t.native.icon={url:i.icon.url,height:i.icon.height,width:i.icon.width})}else{p(t,{width:r.rtb.banner.width||0,height:r.rtb.banner.height||0,ad:r.rtb.banner.content});try{var n=r.rtb.trackers[0].impression_urls[0],d=u.createTrackPixelHtml(n);t.ad+=d}catch(e){u.logError("Error appending tracking pixel",e)}}return t})(e,t,n);s.mediaType=(a=t.ad_type)===c.VIDEO?c.VIDEO:a===c.NATIVE?c.NATIVE:c.BANNER,d.push(s)}})),d},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"}]}};function g(r){var e,t,n,d,a={};if(a.sizes=h(r.sizes),a.primary_size=a.sizes[0],a.ad_types=[],a.uuid=r.bidId,r.params.placementId?a.id=parseInt(r.params.placementId,10):a.code=r.params.invCode,a.allow_smaller_sizes=r.params.allowSmallerSizes||!1,a.use_pmt_rule=r.params.usePaymentRule||!1,a.prebid=!0,a.disable_psa=!0,r.params.reserve&&(a.reserve=r.params.reserve),r.params.position&&(a.position={above:1,below:2}[r.params.position]||0),r.params.trafficSourceCode&&(a.traffic_source_code=r.params.trafficSourceCode),r.params.privateSizes&&(a.private_sizes=h(r.params.privateSizes)),r.params.supplyType&&(a.supply_type=r.params.supplyType),r.params.pubClick&&(a.pubclick=r.params.pubClick),r.params.extInvCode&&(a.ext_inv_code=r.params.extInvCode),r.params.externalImpId&&(a.external_imp_id=r.params.externalImpId),u.isEmpty(r.params.keywords)||(a.keywords=(e=r.params.keywords,t=[],u._each(e,(function(e,r){if(u.isArray(e)){var a=[];u._each(e,(function(e){(e=u.getValueString("keywords."+r,e))&&a.push(e)})),e=a}else{if(e=u.getValueString("keywords."+r,e),!u.isStr(e))return;e=[e]}t.push({key:r,value:e})})),t)),(r.mediaType===c.NATIVE||u.deepAccess(r,"mediaTypes."+c.NATIVE))&&(a.ad_types.push(c.NATIVE),r.nativeParams)){var s=(n=r.nativeParams,d={},Object.keys(n).forEach((function(e){var r=v[e]&&v[e].serverName||v[e]||e,a=v[e]&&v[e].requiredParams;d[r]=p({},a,n[e]);var t=v[e]&&v[e].minimumParams;if(a&&t){var s=Object.keys(n[e]),i=Object.keys(a);0===s.filter((function(e){return!(0,l.default)(i,e)})).length&&(d[r]=p({},d[r],t))}})),d);a[c.NATIVE]={layouts:[s]}}var i=u.deepAccess(r,"mediaTypes."+c.VIDEO),o=u.deepAccess(r,"mediaTypes.video.context");return(r.mediaType===c.VIDEO||i)&&a.ad_types.push(c.VIDEO),(r.mediaType===c.VIDEO||i&&"outstream"!==o)&&(a.require_asset_url=!0),r.params.video&&(a.video={},Object.keys(r.params.video).filter((function(e){return(0,l.default)(f,e)})).forEach((function(e){return a.video[e]=r.params.video[e]}))),(u.isEmpty(r.mediaType)&&u.isEmpty(r.mediaTypes)||r.mediaType===c.BANNER||r.mediaTypes&&r.mediaTypes[c.BANNER])&&a.ad_types.push(c.BANNER),a}function h(e){var r=[],a={};if(u.isArray(e)&&2===e.length&&!u.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===(void 0===e?"undefined":i(e)))for(var t=0;t<e.length;t++){var s=e[t];(a={}).width=parseInt(s[0],10),a.height=parseInt(s[1],10),r.push(a)}return r}function _(e){return!!e.params.user}function I(e){return!!parseInt(e.params.member,10)}function E(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},function(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}.bind(null,e))}))}(0,t.registerBidder)(n)},120:function(e,r){}},[118]);
pbjsChunk([106],{127:function(a,e,t){t(128),a.exports=t(129)},128:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spec=void 0;var g=function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return (function(a,e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,d=a[Symbol.iterator]();!(n=(o=d.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(a){r=!0,i=a}finally{try{!n&&d.return&&d.return()}finally{if(r)throw i}}return t})(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=t(1),i=t(4),p=t(12),l=t(0),b=d(t(22)),o=d(t(7));function d(a){return a&&a.__esModule?a:{default:a}}var w=function(a){return Array.isArray(a)&&2===a.length?a[0]+"x"+a[1]:a},A=function(a){return a.split("x").map(Number)},h=function(a){return(0,o.default)(["300x250","320x50"],a)},v=function(a){return(0,o.default)(["video","native"],a)},_=function(a){return"video"===a},y=function(a){return"fullwidth"===a},x=function(){return encodeURIComponent((0,l.getTopWindowUrl)())},c=e.spec={code:"audienceNetwork",supportedMediaTypes:["banner","video"],isBidRequestValid:function(a){return"object"===n(a.params)&&"string"==typeof a.params.placementId&&0<a.params.placementId.length&&Array.isArray(a.sizes)&&0<a.sizes.length&&(!y(a.params.format)||a.sizes.map(w).some((function(a){return"300x250"===a})))&&(v(a.params.format)||a.sizes.map(w).some(h))},buildRequests:function(a){var t=[],r=[],i=[],o=[],d=[];a.forEach((function(n){return n.sizes.map(w).filter((function(a){return e=a,t=n.params.format,y(t)&&"300x250"===w(e)||v(t)||h(w(e));var e,t})).slice(0,1).forEach((function(a){var e;t.push(n.params.placementId),r.push(n.params.format||a),i.push(a),o.push((e=n.params.format,_(e)?"":"5.5.web")),d.push(n.bidId)}))}));var e=Boolean(window&&window.location&&"string"==typeof window.location.search&&-1!==window.location.search.indexOf("anhb_testmode")).toString(),n=x(),c={placementids:t,adformats:r,testmode:e,pageurl:n,sdk:o,pbv:"1.11.0"},s=(0,b.default)(r,_);if(-1!==s){var u=A(i[s]),f=g(u,2);c.playerwidth=f[0],c.playerheight=f[1]}(0,l.isSafariBrowser)()&&(c.cb=(0,l.generateUUID)());var m=(0,p.formatQS)(c);return[{adformats:r,data:m,method:"GET",requestIds:d,sizes:i,url:"https://an.facebook.com/v2/placementbid.json"}]},interpretResponse:function(a,e){var t=a.body,b=e.adformats,h=e.requestIds,v=e.sizes,y=Number(i.config.getConfig().bidderTimeout),n=t.bids,r=void 0===n?{}:n;return Object.keys(r).map((function(a){return r[a]})).reduce((function(a,e){return a.concat(e)}),[]).map((function(a,e){var t,n,r=a.bid_id,i=a.placement_id,o=a.bid_price_cents,d=b[e],c=A(w(v[e])),s=g(c,2),u=s[0],f=s[1],m="<html><head>"+("native"===(n=d)?'<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>':"")+"</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'"+(t=i)+"',format:'"+n+"',bidid:'"+r+"',onAdLoaded:function(e){console.log('Audience Network ["+t+"] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network ["+t+"] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n"+("native"===n?'<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>':"")+"</div></body></html>",p={requestId:h[e],cpm:o/100,width:u,height:f,ad:m,ttl:y,creativeId:i,netRevenue:!0,currency:"USD",hb_bidder:"fan",fb_bidid:r,fb_format:d,fb_placementid:i};if(_(d)){var l=x();p.mediaType="video",p.vastUrl="https://an.facebook.com/v1/instream/vast.xml?placementid="+i+"&pageurl="+l+"&playerwidth="+u+"&playerheight="+f+"&bidid="+r}return p}))}};(0,r.registerBidder)(c)},129:function(a,e){}},[127]);
pbjsChunk([105],{130:function(e,r,t){t(131),e.exports=t(132)},131:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=r.DEFAULT_MIMES=r.VIDEO_TARGETING=r.OUTSTREAM_SRC=r.BANNER_ENDPOINT=r.VIDEO_ENDPOINT=void 0;var c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(n=(a=d.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&d.return&&d.return()}finally{if(i)throw o}}return t})(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),n=t(1),d=t(14),s=t(3),u=i(t(10)),l=i(t(7));function i(e){return e&&e.__esModule?e:{default:e}}var v="1.1",f="BFIO_PREBID",a=r.VIDEO_ENDPOINT="//reachms.bfmio.com/bid.json?exchange_id=",m=r.BANNER_ENDPOINT="//display.bfmio.com/prebid_display",h=r.OUTSTREAM_SRC="//player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",g=r.VIDEO_TARGETING=["mimes"],b=r.DEFAULT_MIMES=["video/mp4","application/javascript"],w=r.spec={code:"beachfront",supportedMediaTypes:[s.VIDEO,s.BANNER],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.appId&&e.params.bidfloor)},buildRequests:function(e,r){var t=[],n=e.filter((function(e){return _(e)})),i=e.filter((function(e){return!_(e)}));return n.forEach((function(e){t.push({method:"POST",url:a+e.params.appId,data:(function(e,r){var t=y(e),n=(a=e,Object.keys(Object(a.params.video)).filter((function(e){return(0,l.default)(g,e)})).reduce((function(e,r){return e[r]=a.params.video[r],e}),{})),i=p.getTopWindowLocation(),o={isPrebid:!0,appId:e.params.appId,domain:document.location.hostname,id:p.getUniqueIdentifierStr(),imp:[{video:c({w:t.w,h:t.h,mimes:b},n),bidfloor:e.params.bidfloor,secure:"https:"===i.protocol?1:0}],site:{page:i.href,domain:i.hostname},device:{ua:navigator.userAgent,language:navigator.language,devicetype:N()?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,dnt:O()?1:0,js:1,geo:{}},regs:{},user:{},cur:["USD"]};var a;if(r&&r.gdprConsent){var d=r.gdprConsent,s=d.consentRequired,u=d.consentString;o.regs.ext={gdpr:s?1:0},o.user.ext={consent:u}}return o})(e,r),bidRequest:e})})),i.length&&t.push({method:"POST",url:m,data:(function(e,r){var t=p.getTopWindowLocation(),n=p.getTopWindowReferrer(),i={slots:e.map((function(e){return{slot:e.adUnitCode,id:e.params.appId,bidfloor:e.params.bidfloor,sizes:I(e)}})),page:t.href,domain:t.hostname,search:t.search,secure:"https:"===t.protocol?1:0,referrer:n,ua:navigator.userAgent,deviceOs:(o=(0,u.default)([{s:"Android",r:/Android/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"Linux",r:/(Linux|X11)/},{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"UNIX",r:/UNIX/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],(function(e){return e.r.test(navigator.userAgent)})),o?o.s:"unknown"),isMobile:N()?1:0,dnt:O()?1:0,adapterVersion:v,adapterName:f};var o;if(r&&r.gdprConsent){var a=r.gdprConsent,d=a.consentRequired,s=a.consentString;i.gdpr=d?1:0,i.gdprConsent=s}return i})(i,r),bidRequest:i}),t},interpretResponse:function(e,r){var t,n,i=r.bidRequest;if(e=e.body,_(i)){if(!e||!e.url||!e.bidPrice)return p.logWarn("No valid video bids from "+w.code+" bidder"),[];var o=y(i),a=p.deepAccess(i,"mediaTypes.video.context");return{requestId:i.bidId,bidderCode:w.code,vastUrl:e.url,cpm:e.bidPrice,width:o.w,height:o.h,creativeId:e.cmpId,renderer:"outstream"===a?(t=i,n=d.Renderer.install({id:t.bidId,url:h,loaded:!1}),n.setRender(T),n):null,mediaType:s.VIDEO,currency:"USD",netRevenue:!0,ttl:300}}return e&&e.length?e.map((function(r){return{requestId:(0,u.default)(i,(function(e){return e.adUnitCode===r.slot})).bidId,bidderCode:w.code,ad:r.adm,creativeId:r.crid,cpm:r.price,width:r.w,height:r.h,mediaType:s.BANNER,currency:"USD",netRevenue:!0,ttl:300}})):(p.logWarn("No valid banner bids from "+w.code+" bidder"),[])}};function T(e){e.renderer.push((function(){window.Beachfront.Player(e.adUnitCode,{ad_tag_url:e.vastUrl,width:e.width,height:e.height,expand_in_view:!1,collapse_on_complete:!0})}))}function I(e){var r=(_(e)?p.deepAccess(e,"mediaTypes.video.playerSize"):p.deepAccess(e,"mediaTypes.banner.sizes"))||e.sizes;return p.parseSizesInput(r).map((function(e){var r=e.split("x"),t=o(r,2),n=t[0],i=t[1];return{w:parseInt(n,10)||void 0,h:parseInt(i,10)||void 0}}))}function y(e){var r=I(e);return r.length?r[0]:{w:void 0,h:void 0}}function N(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)}function O(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNoTrack||"yes"===navigator.doNotTrack}function _(e){return e.mediaTypes&&e.mediaTypes.video}(0,n.registerBidder)(w)},132:function(e,r){}},[130]);
pbjsChunk([135],{148:function(n,t,e){n.exports=e(149)},149:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allowAuction=t.consentTimeout=t.userCMP=void 0,t.requestBidsHook=A,t.resetConsentData=function(){g=void 0,s.gdprDataHandler.setConsentData(null)},t.setConfig=x;var o,a=(function(n){{if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}})(e(0)),i=e(4),s=e(8),r=e(7),d=(o=r)&&o.__esModule?o:{default:o};var u="iab",c=1e4,l=!0,f=t.userCMP=void 0,p=t.consentTimeout=void 0,m=t.allowAuction=void 0,g=void 0,w=void 0,v=void 0,C=void 0,_=void 0,M=void 0,y={iab:function(o,s,i){var r=void 0;a.isFn(window.__cmp)?window.__cmp("getVendorConsents",null,o):window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(function(){var n=1,t=1;if(Array.isArray(i)&&0<i.length){var e=a.getAdUnitSizes(i[0]);n=e[0][0],t=e[0][1]}window.$sf.ext.register(n,t,(function(n,t){"cmpReturn"===n&&o(t.vendorConsents)})),window.$sf.ext.cmp("getVendorConsents")})():(function(){var n=window,a=void 0;for(;!a;){try{n.frames.__cmpLocator&&(a=n)}catch(n){}if(n===window.top)break;n=n.parent}r={},window.__cmp=function(n,t,e){if(!a){u();return s("CMP not found")}var o=Math.random()+"",i={__cmpCall:{command:n,parameter:t,callId:o}};r[o]=e,a.postMessage(i,"*")},window.addEventListener("message",t,!1),window.__cmp("getVendorConsents",null,e)})();function t(n){var t="string"==typeof n.data&&(0,d.default)(n.data,"cmpReturn")?JSON.parse(n.data):n.data;if(t.__cmpReturn){var e=t.__cmpReturn;r[e.callId](e.returnValue,e.success),delete r[e.callId]}}function u(){window.removeEventListener("message",t,!1)}function e(n){u(),o(n)}}};function A(n,t){w=this,v=arguments,C=t,M=!1;var e=n.adUnits||pbjs.adUnits;return g?j():(0,d.default)(Object.keys(y),f)?(y[f].call(this,b,P,e),void(M||(0===p?b(void 0):_=setTimeout(h,p)))):(a.logWarn("CMP framework ("+f+") is not a supported framework.  Aborting consentManagement module and resuming auction."),C.apply(w,v))}function b(n){a.isPlainObject(n)&&a.isStr(n.metadata)&&""!==n.metadata?(clearTimeout(_),k(n),j()):P("CMP returned unexpected value during lookup process; returned value was ("+n+").")}function h(){P("CMP workflow exceeded timeout threshold.")}function P(n){clearTimeout(_),m&&k(void 0),j(n)}function k(n){g={consentString:n?n.metadata:void 0,vendorData:n,gdprApplies:n?n.gdprApplies:void 0},s.gdprDataHandler.setConsentData(g)}function j(n){!1===M&&(M=!0,n?m?(a.logWarn(n+" Resuming auction without consent data as per consentManagement config."),C.apply(w,v)):a.logError(n+" Canceling auction as per consentManagement config."):C.apply(w,v))}function x(n){a.isStr(n.cmpApi)?t.userCMP=f=n.cmpApi:(t.userCMP=f=u,a.logInfo("consentManagement config did not specify cmp.  Using system default setting ("+u+").")),a.isNumber(n.timeout)?t.consentTimeout=p=n.timeout:(t.consentTimeout=p=c,a.logInfo("consentManagement config did not specify timeout.  Using system default setting ("+c+").")),"boolean"==typeof n.allowAuctionWithoutConsent?t.allowAuction=m=n.allowAuctionWithoutConsent:(t.allowAuction=m=l,a.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting ("+l+").")),pbjs.requestBids.addHook(A,50)}i.config.getConfig("consentManagement",(function(n){return x(n.consentManagement)}))}},[148]);
pbjsChunk([0],{230:function(r,e,t){t(231),r.exports=t(237)},231:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spec=void 0;var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b=(function(r){{if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}})(t(0)),n=t(3),h=t(4),o=s(t(232)),i=s(t(234)),a=t(1);function s(r){return r&&r.__esModule?r:{default:r}}var p=[n.BANNER],f=100,c=60,l=!0,d=!0;0!==b.getTopWindowLocation().protocol.indexOf("https")&&(d=!1);var g=d?"https://as-sec.casalemedia.com/cygnus":"http://as.casalemedia.com/cygnus",y={JPY:1};function u(r){return(0,o.default)(r)&&2===r.length&&(0,i.default)(r[0])&&(0,i.default)(r[1])}var v=e.spec={code:"ix",supportedMediaTypes:p,isBidRequestValid:function(r){if(!u(r.params.size))return!1;if(!(function(r,e){if(u(r))return r[0]===e[0]&&r[1]===e[1];for(var t=0;t<r.length;t++)if(r[t][0]===e[0]&&r[t][1]===e[1])return!0;return!1})(r.sizes,r.params.size))return!1;if("string"!=typeof r.params.siteId)return!1;var e,t,n=r.params.hasOwnProperty("bidFloor"),o=r.params.hasOwnProperty("bidFloorCur");return!n&&!o||n&&o&&(e=r.params.bidFloor,t=r.params.bidFloorCur,Boolean("number"==typeof e&&"string"==typeof t&&t.match(/^[A-Z]{3}$/)))},buildRequests:function(r,e){for(var t,n,o=[],i=null,a=null,s=0;s<r.length;s++)i=r[s],(b.deepAccess(i,"mediaTypes.banner")||"banner"===i.mediaType)&&(n=void 0,(n={}).id=(t=i).bidId,n.banner={},n.banner.w=t.params.size[0],n.banner.h=t.params.size[1],n.banner.topframe=b.inIframe()?0:1,n.ext={},n.ext.sid=t.params.size[0]+"x"+t.params.size[1],n.ext.siteID=t.params.siteId,t.params.hasOwnProperty("bidFloor")&&t.params.hasOwnProperty("bidFloorCur")&&(n.bidfloor=t.params.bidFloor,n.bidfloorcur=t.params.bidFloorCur),a=n,o.push(a));var p={};if(p.id=r[0].bidderRequestId,p.imp=o,p.site={},p.site.page=b.getTopWindowUrl(),p.site.ref=b.getTopWindowReferrer(),p.ext={},p.ext.source="prebid",e&&e.gdprConsent){var d=e.gdprConsent;d.hasOwnProperty("gdprApplies")&&(p.regs={ext:{gdpr:d.gdprApplies?1:0}}),d.hasOwnProperty("consentString")&&(p.user={ext:{consent:d.consentString||""}})}var u={},f=h.config.getConfig("ix");if(f){if("object"===m(f.firstPartyData)){var c=f.firstPartyData,l="?";for(var y in c)c.hasOwnProperty(y)&&(l+=encodeURIComponent(y)+"="+encodeURIComponent(c[y])+"&");l=l.slice(0,-1),p.site.page+=l}"number"==typeof f.timeout&&(u.t=f.timeout)}return u.s=r[0].params.siteId,u.v=7.2,u.r=JSON.stringify(p),u.ac="j",u.sd=1,{method:"GET",url:g,data:u}},interpretResponse:function(r){var e=[],t=null;if(!r.hasOwnProperty("body")||!r.body.hasOwnProperty("seatbid"))return e;for(var n,o,i,a=r.body,s=a.seatbid,p=0;p<s.length;p++)if(s[p].hasOwnProperty("bid"))for(var d=s[p].bid,u=0;u<d.length;u++)n=d[u],o=a.cur,i=void 0,i={},y.hasOwnProperty(o)?i.cpm=n.price/y[o]:i.cpm=n.price/f,i.requestId=n.impid,i.width=n.w,i.height=n.h,i.ad=n.adm,i.dealId=b.deepAccess(n,"ext.dealid"),i.ttl=c,i.netRevenue=l,i.currency=o,i.creativeId=n.hasOwnProperty("crid")?n.crid:"-",t=i,e.push(t);return e}};(0,a.registerBidder)(v)},232:function(r,e,t){t(233),r.exports=t(15).Array.isArray},233:function(r,e,t){var n=t(16);n(n.S,"Array",{isArray:t(36)})},234:function(r,e,t){t(235),r.exports=t(15).Number.isInteger},235:function(r,e,t){var n=t(16);n(n.S,"Number",{isInteger:t(236)})},236:function(r,e,t){var n=t(17),o=Math.floor;r.exports=function(r){return!n(r)&&isFinite(r)&&o(r)===r}},237:function(r,e){}},[230]);
pbjsChunk([58],{291:function(e,t,r){r(292),e.exports=r(293)},292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.resetBoPixel=function(){f=!0};var d=r(4),n=r(1),c=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),u=r(13),p=r(3),l=r(12);var i=[p.BANNER,p.VIDEO],m="openx",h="hb_pb",v="2.1.0",f=!0;var a=t.spec={code:m,supportedMediaTypes:i,isBidRequestValid:function(e){return!(!e.params.unit||!e.params.delDomain)},buildRequests:function(e,a){if(0===e.length)return[];var s=[],t=e.reduce((function(e,t){var r;return r=t,c.deepAccess(r,"mediaTypes.video")||r.mediaType===p.VIDEO?e[0].push(t):e[1].push(t),e}),[[],[]]),r=o(t,2),n=r[0],i=r[1];return 0<i.length&&s.push(function(e,t){var r=g(e,t);r.auid=c._map(e,(function(e){return e.params.unit})).join(","),r.aus=c._map(e,(function(e){return c.parseSizesInput(e.sizes).join(",")})).join("|"),r.bc=e[0].params.bc||h+"_"+v;var n=[],a=!1;e.forEach((function(i){if(i.params.customParams){var e=c._map(Object.keys(i.params.customParams),(function(e){return t=e,r=i.params.customParams,n=r[t],c.isArray(n)&&(n=n.join(",")),(t.toLowerCase()+"="+n.toLowerCase()).replace("+",".").replace("/","_");var t,r,n})),t=window.btoa(e.join("&"));a=!0,n.push(t)}else n.push("")})),a&&(r.tps=n.join(","));var i=[],s=!1;e.forEach((function(e){e.params.customFloor?(i.push(1e3*e.params.customFloor),s=!0):i.push(0)})),s&&(r.aumfs=i.join(","));return{method:"GET",url:"//"+e[0].params.delDomain+"/w/1.0/arj",data:r,payload:{bids:e,startTime:new Date}}}(i,a)),0<n.length&&n.forEach((function(e){var t,r,n,i;s.push((r=a,n="//"+(t=e).params.delDomain+"/v/1.0/avjp",i=(function(e,t){var r=g([e],t),n=c.deepAccess(e,"params.video")||{},i=c.deepAccess(e,"mediaTypes.video.context"),a=c.deepAccess(e,"mediaTypes.video.playerSize"),s=void 0,o=void 0;c.isArray(e.sizes)&&2===e.sizes.length&&!c.isArray(e.sizes[0])?(s=parseInt(e.sizes[0],10),o=parseInt(e.sizes[1],10)):c.isArray(e.sizes)&&c.isArray(e.sizes[0])&&2===e.sizes[0].length?(s=parseInt(e.sizes[0][0],10),o=parseInt(e.sizes[0][1],10)):c.isArray(a)&&2===a.length&&(s=parseInt(a[0],10),o=parseInt(a[1],10));Object.keys(n).forEach((function(e){"openrtb"===e?(n[e].w=s||n[e].w,n[e].v=o||n[e].v,r[e]=JSON.stringify(n[e])):e in r||"url"===e||(r[e]=n[e])})),r.auid=e.params.unit,r.vwd=s||n.vwd,r.vht=o||n.vht,"outstream"===i&&(r.vos="101");n.mimes&&(r.vmimes=n.mimes);return r})(t,r),{method:"GET",url:n,data:i,payload:{bid:t,startTime:new Date}}))})),s},interpretResponse:function(e,t){var r=e.body;return(/avjp$/.test(t.url)?p.VIDEO:p.BANNER)===p.VIDEO?(function(e,t){var r=t.bid,n=t.startTime,i=[];if(void 0!==e&&""!==e.vastUrl&&""!==e.pub_rev){var a=(0,l.parse)(e.vastUrl).search||{},s={};s.requestId=r.bidId,s.bidderCode=m,s.ttl=300,s.netRevenue=!0,s.currency=e.currency,s.cpm=Number(e.pub_rev)/1e3,s.width=e.width,s.height=e.height,s.creativeId=e.adid,s.vastUrl=e.vastUrl,s.mediaType=p.VIDEO,e.ph=a.ph,e.colo=a.colo,e.ts=a.ts,i.push(s),y(p.VIDEO,e,n)}return i})(r,t.payload):(function(e,t){for(var r=t.bids,n=t.startTime,i=e.ads.ad,a=[],s=0;s<i.length;s++){var o=i[s],d=parseInt(o.idx,10),c={};if(c.requestId=r[d].bidId,o.pub_rev){c.cpm=Number(o.pub_rev)/1e3;var u=o.creative[0];u&&(c.width=u.width,c.height=u.height),c.creativeId=u.id,c.ad=o.html,o.deal_id&&(c.dealId=o.deal_id),c.ttl=300,c.netRevenue=!0,c.currency=o.currency,o.tbd&&(c.tbd=o.tbd),c.ts=o.ts,a.push(c),y(p.BANNER,o,n)}}return a})(r,t.payload)},getUserSyncs:function(e,t){if(e.iframeEnabled)return[{type:"iframe",url:c.deepAccess(t,"0.body.ads.pixels")||c.deepAccess(t,"0.body.pixels")||"//u.openx.net/w/1.0/pd"}]}};function b(t){for(var e in t)t.hasOwnProperty(e)&&(t[e]||delete t[e]);return c._map(Object.keys(t),(function(e){return e+"="+t[e]})).join("&")}function g(e,t){var r=c.inIframe(),n=void 0;if(n={ju:d.config.getConfig("pageUrl")||c.getTopWindowUrl(),jr:c.getTopWindowReferrer(),ch:document.charSet||document.characterSet,res:screen.width+"x"+screen.height+"x"+screen.colorDepth,ifr:r,tz:(new Date).getTimezoneOffset(),tws:(function(e){var t=void 0,r=void 0,n=window,i=document,a=i.documentElement,s=void 0;if(e){try{n=window.top,i=window.top.document}catch(e){return}a=i.documentElement,s=i.body,t=n.innerWidth||a.clientWidth||s.clientWidth,r=n.innerHeight||a.clientHeight||s.clientHeight}else a=i.documentElement,t=n.innerWidth||a.clientWidth,r=n.innerHeight||a.clientHeight;return t+"x"+r})(r),be:1,dddid:c._map(e,(function(e){return e.transactionId})).join(","),nocache:(new Date).getTime()},c.deepAccess(t,"gdprConsent")){var i=t.gdprConsent;void 0!==i.consentString&&(n.gdpr_consent=i.consentString),void 0!==i.gdprApplies&&(n.gdpr=i.gdprApplies?1:0),"iab"===d.config.getConfig("consentManagement.cmpApi")&&(n.x_gdpr_f=1)}return n}function y(e,t,r){if(f){f=!1;var n=d.config.getConfig("bidderTimeout"),i=void 0;window.PREBID_TIMEOUT&&(n=Math.min(window.PREBID_TIMEOUT,n));var a={bd:+new Date-r,bp:t.pub_rev,br:"0",bs:c.getTopWindowLocation().hostname,bt:n,ts:t.ts};if(a.br=a.bt<a.bd?"t":"p",e===p.VIDEO){var s=(0,l.parse)(t.colo);a.ph=t.ph,i="//"+s.hostname+"/w/1.0/bo?"+b(a)}else{var o=c.deepAccess(t,"creative.0.tracking.impression").match(/([^?]+\/)ri\?/);o&&1<o.length&&(i=o[1]+"bo?"+b(a))}i&&u.userSync.registerSync("image",m,i)}}(0,n.registerBidder)(a)},293:function(e,t){}},[291]);
pbjsChunk([50],{319:function(e,r,a){a(320),e.exports=a(321)},320:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r}})(a(0)),t=a(1);var l=a(2),u="USD",c=1,g=void 0,m={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},n={1:"PMP",5:"PREF",6:"PMPG"},f=0;function b(e,r){if(!p.isStr(r))return r&&p.logWarn("PubMatic: Ignoring param key: "+e+", expects string-value, found "+(void 0===r?"undefined":s(r))),g;switch(e){case"pmzoneid":return r.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(r)||g;case"yob":return parseInt(r)||g;default:return r}}function h(e){var r;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(r=e.params.adSlot,p.isStr(r)?r.replace(/^\s+/g,"").replace(/\s+$/g,""):"");var a=e.params.adSlot,t=a.split(":");a=t[0],2==t.length&&(e.params.adUnitIndex=t[1]),2==(t=a.split("@")).length?(e.params.adUnit=t[0],2==(t=t[1].split("x")).length?(e.params.width=parseInt(t[0]),e.params.height=parseInt(t[1])):p.logWarn("AdSlot Error: adSlot not in required format")):p.logWarn("AdSlot Error: adSlot not in required format")}var o=r.spec={code:"pubmatic",isBidRequestValid:function(e){return!(!e||!e.params)&&(p.isStr(e.params.publisherId)?!!p.isStr(e.params.adSlot)||(p.logWarn("PubMatic: adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),!1):(p.logWarn("PubMatic Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),!1))},buildRequests:function(e,r){var a,t,n,o,i=((a={}).pageURL=p.getTopWindowUrl(),a.refURL=p.getTopWindowReferrer(),a),d=(t=i,{id:""+(new Date).getTime(),at:c,cur:[u],imp:[],site:{page:t.pageURL,ref:t.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}});if(e.forEach((function(e){var r;(h(e),e.params.adSlot&&e.params.adUnit&&e.params.adUnitIndex&&e.params.width&&e.params.height)?(i.pubId=i.pubId||e.params.publisherId,(i=(function(e,r){var a,t,n;for(a in r.kadpageurl||(r.kadpageurl=r.pageURL),m)m.hasOwnProperty(a)&&(t=e[a])&&("object"===(void 0===(n=m[a])?"undefined":s(n))&&(t=n.f(t,r)),p.isStr(t)?r[a]=t:p.logWarn("PubMatic: Ignoring param : "+a+" with value : "+m[a]+", expects string-value, found "+(void 0===t?"undefined":s(t))));return r})(e.params,i)).transactionId=e.transactionId,d.imp.push({id:(r=e).bidId,tagid:r.params.adUnit,bidfloor:b("kadfloor",r.params.kadfloor),secure:"https:"===window.location.protocol?1:0,banner:{pos:0,w:r.params.width,h:r.params.height,topframe:p.inIframe()?0:1},ext:{pmZoneId:b("pmzoneid",r.params.pmzoneid)}})):p.logWarn("PubMatic: Skipping the non-standard adslot:",e.params.adSlot,e)})),0!=d.imp.length)return d.site.publisher.id=i.pubId.trim(),f=i.pubId.trim(),d.ext.wrapper={},d.ext.wrapper.profile=parseInt(i.profId)||g,d.ext.wrapper.version=parseInt(i.verId)||g,d.ext.wrapper.wiid=i.wiid||g,d.ext.wrapper.wv=l.REPO_AND_VERSION,d.ext.wrapper.transactionId=i.transactionId,d.ext.wrapper.wp="pbjs",d.user.gender=i.gender?i.gender.trim():g,d.user.geo={},r&&r.gdprConsent&&(d.user.ext={consent:r.gdprConsent.consentString},d.regs={ext:{gdpr:r.gdprConsent.gdprApplies?1:0}}),d.user.geo.lat=b("lat",i.lat),d.user.geo.lon=b("lon",i.lon),d.user.yob=b("yob",i.yob),d.device.geo={},d.device.geo.lat=b("lat",i.lat),d.device.geo.lon=b("lon",i.lon),d.site.page=i.kadpageurl.trim()||d.site.page.trim(),d.site.domain=(n=d.site.page,(o=document.createElement("a")).href=n,o.hostname),{method:"POST",url:"//hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(d)}},interpretResponse:function(e,r){var a=[];try{e.body&&e.body.seatbid&&p.isArray(e.body.seatbid)&&e.body.seatbid.forEach((function(e){e.bid&&p.isArray(e.bid)&&e.bid.forEach((function(e){var r={requestId:e.impid,cpm:(parseFloat(e.price)||0).toFixed(2),width:e.w,height:e.h,creativeId:e.crid||e.id,dealId:e.dealid,currency:u,netRevenue:!1,ttl:300,referrer:p.getTopWindowUrl(),ad:e.adm};e.ext&&e.ext.deal_channel&&(r.dealChannel=n[e.ext.deal_channel]||null),a.push(r)}))}))}catch(e){p.logError(e)}return a},getUserSyncs:function(e,r,a){var t="//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p="+f;if(a&&(t+="&gdpr="+(a.gdprApplies?1:0),t+="&gdpr_consent="+encodeURIComponent(a.consentString||"")),e.iframeEnabled)return[{type:"iframe",url:t}];p.logWarn("PubMatic: Please enable iframe based user sync.")}};(0,t.registerBidder)(o)},321:function(e,r){}},[319]);
pbjsChunk([36],{360:function(e,r,t){t(361),e.exports=t(362)},361:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var I=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,r){var t=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}return t})(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.masSizeOrdering=o,r.resetUserSync=function(){a=!1};var j=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),i=t(1),z=t(4),s=t(3);var S="pbjs_lite_v1.11.0";var d={1:"468x60",2:"728x90",5:"120x90",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",65:"640x480",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",94:"970x310",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",195:"600x300",199:"640x200",213:"1030x590",214:"980x360"};j._each(d,(function(e,r){return d[e]=r}));var k=r.spec={code:"rubicon",aliases:["rubiconLite"],supportedMediaTypes:[s.BANNER,s.VIDEO],isBidRequestValid:function(e){if("object"!==T(e.params))return!1;var r=e.params;return!!/^\d+$/.test(r.accountId)&&("outstream"===j.deepAccess(e,"mediaTypes."+s.VIDEO+".context")&&j.logWarn("Warning: outstream video for Rubicon Client Adapter is not supported yet"),k.hasVideoMediaType(e)&&void 0!==j.deepAccess(e,"mediaTypes."+s.BANNER)&&j.logWarn("Warning: instream video and banner requested for same ad unit, continuing with video instream request"),("video"!==e.mediaType||void 0!==j.deepAccess(e,"params.video.size_id"))&&(!(e.mediaTypes&&!k.hasVideoMediaType(e)&&void 0===e.mediaTypes.banner)&&!(R(e).length<1)))},buildRequests:function(e,w){return e.map((function(e){e.startTime=(new Date).getTime();var r=z.config.getConfig("pageUrl");e.params.referrer?r=e.params.referrer:r||(r=j.getTopWindowUrl());var t=w.gdprConsent;if(k.hasVideoMediaType(e)){var i=e.params,n=R(e),o={page_url:r,resolution:O(),account_id:i.accountId,integration:S,"x_source.tid":e.transactionId,timeout:w.timeout-(Date.now()-w.auctionStart+500),stash_creatives:!0,ae_pass_through_parameters:i.video.aeParams,rp_secure:!1!==e.params.secure,slots:[]},a={site_id:i.siteId,zone_id:i.zoneId,position:(function(e){if("atf"===e||"btf"===e)return e;return"unknown"})(i.position),floor:.01<parseFloat(i.floor)?i.floor:.01,element_id:e.adUnitCode,name:e.adUnitCode,language:i.video.language,width:n[0],height:n[1],size_id:i.video.size_id};return i.inventory&&"object"===T(i.inventory)&&(a.inventory=i.inventory),i.keywords&&Array.isArray(i.keywords)&&(a.keywords=i.keywords),i.visitor&&"object"===T(i.visitor)&&(a.visitor=i.visitor),o.slots.push(a),t&&("boolean"==typeof t.gdprApplies&&(o.gdpr=Number(t.gdprApplies)),o.gdpr_consent=t.consentString),{method:"POST",url:"//fastlane-adv.rubiconproject.com/v1/auction/video",data:o,bidRequest:e}}var s=e.params,d=s.accountId,u=s.siteId,p=s.zoneId,c=s.position,l=s.floor,v=s.keywords,f=s.visitor,y=s.inventory,g=s.userId,m=s.latLong,x=I(m=void 0===m?[]:m,2),h=x[0],_=x[1];l=.01<(l=parseFloat(l))?l:.01,c=c||"btf";var b=R(e),A=["account_id",d,"site_id",u,"zone_id",p,"size_id",b[0],"alt_size_ids",b.slice(1).join(",")||void 0,"p_pos",c,"rp_floor",l,"rp_secure","https:"===location.protocol?"1":"0","tk_flint",S,"x_source.tid",e.transactionId,"p_screen_res",O(),"kw",v,"tk_user_key",g,"p_geo.latitude",U(parseFloat(h))?void 0:parseFloat(h).toFixed(4),"p_geo.longitude",U(parseFloat(_))?void 0:parseFloat(_).toFixed(4)];return t&&("boolean"==typeof t.gdprApplies&&A.push("gdpr",Number(t.gdprApplies)),A.push("gdpr_consent",t.consentString)),null!==f&&"object"===(void 0===f?"undefined":T(f))&&j._each(f,(function(e,r){return A.push("tg_v."+r,e)})),null!==y&&"object"===(void 0===y?"undefined":T(y))&&j._each(y,(function(e,r){return A.push("tg_i."+r,e)})),A.push("rand",Math.random(),"rf",r),{method:"GET",url:"//fastlane.rubiconproject.com/a/api/fastlane.json",data:A=(A=A.concat(function(){var e=(r=window.DigiTrust&&(z.config.getConfig("digiTrustId")||window.DigiTrust.getUser({member:"T9QSFKPDN9"})),r&&r.success&&r.identity||null);var r;if(!e||e.privacy&&e.privacy.optout)return[];return["dt.id",e.id,"dt.keyv",e.keyv,"dt.pref",0]}())).reduce((function(e,r,t){return t%2!=0||void 0===A[t+1]||U(A[t+1])?e:e+r+"="+encodeURIComponent(A[t+1])+"&"}),"").slice(0,-1),bidRequest:e}}))},hasVideoMediaType:function(e){return void 0!==j.deepAccess(e,"params.video.size_id")&&(e.mediaType===s.VIDEO||"instream"===j.deepAccess(e,"mediaTypes."+s.VIDEO+".context"))},interpretResponse:function(e,r){var a=r.bidRequest,t=(e=e.body).ads;return"object"!==(void 0===e?"undefined":T(e))||"ok"!==e.status?[]:("object"===(void 0===a?"undefined":T(a))&&k.hasVideoMediaType(a)&&"object"===(void 0===t?"undefined":T(t))&&(t=t[a.adUnitCode]),!Array.isArray(t)||t.length<1?[]:(t=t.sort(n)).reduce((function(e,r){if("ok"!==r.status)return[];var t,i={requestId:a.bidId,currency:"USD",creativeId:r.creative_id,cpm:r.cpm||0,dealId:r.deal,ttl:300,netRevenue:z.config.getConfig("rubicon.netRevenue")||!1,rubicon:{advertiserId:r.advertiser,networkId:r.network}};if(r.creative_type&&(i.mediaType=r.creative_type),r.creative_type===s.VIDEO)i.width=a.params.video.playerWidth,i.height=a.params.video.playerHeight,i.vastUrl=r.creative_depot_url,i.rubiconAdId=r.ad_id,i.rubiconAdvertiserId=r.advertiser,i.descriptionUrl=r.impression_id,i.impression_id=r.impression_id,i.videoCacheKey=r.impression_id;else{i.ad=(t=r.script,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"+r.impression_id+"'>\n<script type='text/javascript'>"+t+"<\/script>\n</div>\n</body>\n</html>");var n=d[r.size_id].split("x").map((function(e){return Number(e)})),o=I(n,2);i.width=o[0],i.height=o[1]}return i.rubiconTargeting=(Array.isArray(r.targeting)?r.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:a.adUnitCode}),e.push(i),e}),[]))},getUserSyncs:function(e,r,t){if(!a&&e.iframeEnabled){var i="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr="+Number(t.gdprApplies)+"&gdpr_consent="+t.consentString:i+="?gdpr_consent="+t.consentString),a=!0,{type:"iframe",url:"https://eus.rubiconproject.com/usync.html"+i}}}};function n(e,r){return(r.cpm||0)-(e.cpm||0)}function O(){return[window.screen.width,window.screen.height].join("x")}function R(e){var r,t=e.params;if(k.hasVideoMediaType(e)){var i=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?i=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(e.sizes)&&0<e.sizes.length&&Array.isArray(e.sizes[0])&&1<e.sizes[0].length&&(i=e.sizes[0]),i}return o(Array.isArray(t.sizes)?t.sizes:(r=e.sizes,j.parseSizesInput(r).reduce((function(e,r){var t=parseInt(d[r],10);return t&&e.push(t),e}),[])))}function o(e){var n=[15,2,9];return e.sort((function(e,r){var t=n.indexOf(e),i=n.indexOf(r);return-1<t||-1<i?-1===t?1:-1===i?-1:t-i:e-r}))}var a=!1;function U(e){return e!=e}(0,i.registerBidder)(k)},362:function(e,r){}},[360]);
pbjs.processQueue();

/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(96);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(33);
var IObject = __webpack_require__(76);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(26)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(98) });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(42);
var perform = __webpack_require__(63);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(14);
var core = __webpack_require__(8);
var global = __webpack_require__(12);
var speciesConstructor = __webpack_require__(65);
var promiseResolve = __webpack_require__(62);

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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(12);
var core = __webpack_require__(8);
var dP = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(18);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var macrotask = __webpack_require__(64).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(31)(process) == 'process';

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
/* 106 */
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(66);
var anObject = __webpack_require__(15);
var toLength = __webpack_require__(57);
var getIterFn = __webpack_require__(47);
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
/* 108 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var global = __webpack_require__(12);
var ctx = __webpack_require__(27);
var classof = __webpack_require__(48);
var $export = __webpack_require__(14);
var isObject = __webpack_require__(19);
var aFunction = __webpack_require__(38);
var anInstance = __webpack_require__(108);
var forOf = __webpack_require__(107);
var speciesConstructor = __webpack_require__(65);
var task = __webpack_require__(64).set;
var microtask = __webpack_require__(105)();
var newPromiseCapabilityModule = __webpack_require__(42);
var perform = __webpack_require__(63);
var promiseResolve = __webpack_require__(62);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(11)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(104)($Promise.prototype, {
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
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(103)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(61)(function (iter) {
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(29);
__webpack_require__(37);
__webpack_require__(109);
__webpack_require__(102);
__webpack_require__(101);
module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(49) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(19);
var anObject = __webpack_require__(15);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(114).set });


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('observable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45)('asyncIterator');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(21);
var gOPN = __webpack_require__(69).f;
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(34);
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(39)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(22);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(26)(function () {
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(12);
var has = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(18);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(73);
var META = __webpack_require__(123).KEY;
var $fails = __webpack_require__(26);
var shared = __webpack_require__(54);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(39);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(45);
var enumKeys = __webpack_require__(122);
var isArray = __webpack_require__(121);
var anObject = __webpack_require__(15);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(50);
var createDesc = __webpack_require__(30);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(120);
var $GOPD = __webpack_require__(43);
var $DP = __webpack_require__(17);
var $keys = __webpack_require__(32);
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
  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(44).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
__webpack_require__(68);
__webpack_require__(119);
__webpack_require__(118);
module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(37);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(18), 'Object', { defineProperty: __webpack_require__(17).f });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(33);
var $getPrototypeOf = __webpack_require__(71);

__webpack_require__(52)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(8).Object.getPrototypeOf;


/***/ }),
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var get = __webpack_require__(47);
module.exports = __webpack_require__(8).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(29);
module.exports = __webpack_require__(135);


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(48);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(8).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56);
var defined = __webpack_require__(58);
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(15);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(20)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(143);
var step = __webpack_require__(142);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(74)(Array, 'Array', function (iterated, kind) {
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(29);
module.exports = __webpack_require__(138);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(147);
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(33);
var $keys = __webpack_require__(32);

__webpack_require__(52)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
module.exports = __webpack_require__(8).Object.keys;


/***/ })
/******/ ]);
//# sourceMappingURL=ad-products.js.map