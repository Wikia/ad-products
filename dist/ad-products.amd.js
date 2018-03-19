define("ext.wikia.adProducts", ["ext.wikia.adEngine3"], function(__WEBPACK_EXTERNAL_MODULE_1__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(155);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(39);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(16);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(77);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(83);
var toPrimitive = __webpack_require__(63);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(120),
    getValue = __webpack_require__(126);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(82);
var defined = __webpack_require__(55);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(12) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(41);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(40);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(101);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(203);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(207);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(101);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    getRawTag = __webpack_require__(122),
    objectToString = __webpack_require__(123);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(55);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(81);
var enumBugKeys = __webpack_require__(60);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(26);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(137),
    listCacheDelete = __webpack_require__(138),
    listCacheGet = __webpack_require__(139),
    listCacheHas = __webpack_require__(140),
    listCacheSet = __webpack_require__(141);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(48);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(143);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


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

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(200);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(119);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObject = __webpack_require__(10);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isKey = __webpack_require__(50),
    stringToPath = __webpack_require__(127),
    toString = __webpack_require__(147);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(34);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(130),
    mapCacheDelete = __webpack_require__(142),
    mapCacheGet = __webpack_require__(144),
    mapCacheHas = __webpack_require__(145),
    mapCacheSet = __webpack_require__(146);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(57);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(0);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(161)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(85)(String, 'String', function (iterated) {
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(163);
var enumBugKeys = __webpack_require__(60);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(62)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(87).appendChild(iframe);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(40);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(100);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(42);
var wksExt = __webpack_require__(70);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(44);
var createDesc = __webpack_require__(31);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(63);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(83);
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
/* 74 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(103),
    baseKeys = __webpack_require__(226),
    isArrayLike = __webpack_require__(109);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(46),
    eq = __webpack_require__(48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(121)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(80);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(49),
    toKey = __webpack_require__(27);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(153)(false);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(12) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(62)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 84 */
/***/ (function(module, exports) {



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(86);
var hide = __webpack_require__(16);
var has = __webpack_require__(14);
var Iterators = __webpack_require__(32);
var $iterCreate = __webpack_require__(162);
var setToStringTag = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(88);
var ITERATOR = __webpack_require__(5)('iterator');
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
var global = __webpack_require__(2);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(32);
var TO_STRING_TAG = __webpack_require__(5)('toStringTag');

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(5)('toStringTag');
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(32);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(90);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(40);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(170);
var html = __webpack_require__(87);
var cel = __webpack_require__(62);
var global = __webpack_require__(2);
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
  if (__webpack_require__(30)(process) == 'process') {
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
/* 96 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(66);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    now = __webpack_require__(181),
    toNumber = __webpack_require__(182);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(190);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(71);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(81);
var hiddenKeys = __webpack_require__(60).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(213),
    isArguments = __webpack_require__(104),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(105),
    isIndex = __webpack_require__(53),
    isTypedArray = __webpack_require__(107);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(214),
    isObjectLike = __webpack_require__(26);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(7),
    stubFalse = __webpack_require__(215);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(106)(module)))

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(216),
    baseUnary = __webpack_require__(217),
    nodeUtil = __webpack_require__(218);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(47),
    isLength = __webpack_require__(74);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(36),
    stackClear = __webpack_require__(232),
    stackDelete = __webpack_require__(233),
    stackGet = __webpack_require__(234),
    stackHas = __webpack_require__(235),
    stackSet = __webpack_require__(236);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(237),
    isObjectLike = __webpack_require__(26);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(238),
    arraySome = __webpack_require__(241),
    cacheHas = __webpack_require__(242);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var constants_namespaceObject = {};
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_FADE_IN_ANIMATION", function() { return CSS_CLASSNAME_FADE_IN_ANIMATION; });
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_SLIDE_OUT_ANIMATION", function() { return CSS_CLASSNAME_SLIDE_OUT_ANIMATION; });
__webpack_require__.d(constants_namespaceObject, "CSS_CLASSNAME_STICKY_BFAA", function() { return CSS_CLASSNAME_STICKY_BFAA; });
__webpack_require__.d(constants_namespaceObject, "CSS_TIMING_EASE_IN_CUBIC", function() { return CSS_TIMING_EASE_IN_CUBIC; });
__webpack_require__.d(constants_namespaceObject, "SLIDE_OUT_TIME", function() { return SLIDE_OUT_TIME; });
__webpack_require__.d(constants_namespaceObject, "FADE_IN_TIME", function() { return FADE_IN_TIME; });
var themes_classic_namespaceObject = {};
__webpack_require__.d(themes_classic_namespaceObject, "BfaaTheme", function() { return classic_BfaaTheme; });
__webpack_require__.d(themes_classic_namespaceObject, "BfabTheme", function() { return classic_BfabTheme; });
__webpack_require__.d(themes_classic_namespaceObject, "adIsReady", function() { return adIsReady; });
var themes_hivi_namespaceObject = {};
__webpack_require__.d(themes_hivi_namespaceObject, "BfaaTheme", function() { return hivi_BfaaTheme; });
__webpack_require__.d(themes_hivi_namespaceObject, "BfabTheme", function() { return hivi_BfabTheme; });
__webpack_require__.d(themes_hivi_namespaceObject, "adIsReady", function() { return ready_adIsReady; });

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(117);
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__(79);
var get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: ./src/styles/styles.scss
var styles = __webpack_require__(150);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(54);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external {"amd":"ext.wikia.adEngine3"}
var external___amd___ext_wikia_adEngine3__ = __webpack_require__(1);
var external___amd___ext_wikia_adEngine3___default = /*#__PURE__*/__webpack_require__.n(external___amd___ext_wikia_adEngine3__);

// CONCATENATED MODULE: ./src/common/product-info.js



function findSlotGroup(product) {
	var slotGroups = external___amd___ext_wikia_adEngine3__["context"].get('slotGroups'),
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

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

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

		this.config = external___amd___ext_wikia_adEngine3__["context"].get('templates.floatingRail');
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

			external___amd___ext_wikia_adEngine3__["scrollListener"].addCallback(function () {
				var start = _this.config.startOffset + external___amd___ext_wikia_adEngine3__["utils"].getTopOffset(_this.railWrapper),
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
			return external___amd___ext_wikia_adEngine3__["context"].get('templates.floatingRail.enabled') && external___amd___ext_wikia_adEngine3__["context"].get('state.isMobile') === false;
		}
	}]);

	return FloatingRail;
}();
// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(19);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(176);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(180);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

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
var icons = __webpack_require__(183);
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
// CONCATENATED MODULE: ./src/templates/uap/ui/video/learn-more.js


var learn_more_text = 'Learn More';

function learn_more_add(video, container, params) {
	var learnMore = document.createElement('div'),
	    icon = createIcon(icons_icons.LEARN_MORE, ['learn-more-icon', 'porvata-icon']),
	    label = document.createElement('div');

	label.innerText = learn_more_text;
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
		external___amd___ext_wikia_adEngine3__["slotTweaker"].forceRepaint(currentTime);
		currentTime.style.transitionDuration = remainingTime;
	};
	progressBar.start = function () {
		var remainingTime = video.getRemainingTime();

		if (remainingTime) {
			if (remainingTime > 0) {
				currentTime.style.transitionDuration = remainingTime + 's';
			}
			external___amd___ext_wikia_adEngine3__["slotTweaker"].forceRepaint(currentTime);
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

	var isMobile = external___amd___ext_wikia_adEngine3__["utils"].client.isSmartphone() || external___amd___ext_wikia_adEngine3__["utils"].client.isTablet(),
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
						return external___amd___ext_wikia_adEngine3__["Porvata"].inject(params);

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





var uapId = 'none';
var uapType = 'uap';

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
	var slots = external___amd___ext_wikia_adEngine3__["context"].get('slots');
	keys_default()(slots).forEach(function (slotId) {
		if (!slots[slotId].nonUapSlot) {
			external___amd___ext_wikia_adEngine3__["context"].set('slots.' + slotId + '.targeting.uap', id);
		}
	});
}

function enableSlots(slotsToEnable) {
	if (getType() !== 'abcd') {
		slotsToEnable.forEach(function (slotName) {
			external___amd___ext_wikia_adEngine3__["btfBlockerService"].unblock(slotName);
		});
	}
}

function initSlot(params) {
	var adSlot = external___amd___ext_wikia_adEngine3__["slotService"].getBySlotName(params.slotName);
	params.container = adSlot.getElement();

	if (params.isDarkTheme) {
		params.container.classList.add('is-dark');
	}
	if (params.isMobile) {
		params.container.classList.add('is-mobile-layout');
	}
	if (external___amd___ext_wikia_adEngine3__["utils"].client.isSmartphone() || external___amd___ext_wikia_adEngine3__["utils"].client.isTablet()) {
		params.container.classList.add('is-mobile-device');
	}
}

var universalAdPackage = extends_default()({}, constants_namespaceObject, {
	init: function init(params) {
		var slotsToEnable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		var adProduct = 'uap';

		if (this.isVideoEnabled(params)) {
			adProduct = 'vuap';
		}

		params.adProduct = params.adProduct || adProduct;

		setUapId(params.uap);
		setType(params.adProduct);
		enableSlots(slotsToEnable);

		initSlot(params);
	},

	initSlot: initSlot,
	getType: getType,
	getUapId: getUapId,
	isVideoEnabled: function isVideoEnabled(params) {
		var triggersArrayIsNotEmpty = Array.isArray(params.videoTriggers) && params.videoTriggers.length > 0;

		return !!params.videoAspectRatio && (params.videoPlaceholderElement || triggersArrayIsNotEmpty);
	},

	loadVideoAd: loadVideoAd,
	setType: setType,
	setUapId: setUapId
});
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(67);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(69);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toArray.js
var toArray = __webpack_require__(187);
var toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(41);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/templates/uap/resolved-state-switch.js



var cacheKey = 'adEngine_resolvedStateCounter';
var cacheTtl = 24 * 3600;
var now = new Date();

function createCacheKey() {
	return cacheKey + '_' + universalAdPackage.getUapId();
}

function findRecordInCache() {
	return external___amd___ext_wikia_adEngine3__["localCache"].get(createCacheKey());
}

function wasDefaultStateSeen() {
	var record = findRecordInCache();

	// check for presence in localStorage and if present, make sure that we're
	// not comparing to current session data - bfab that wants to load after bfaa
	return !!record && now.getTime() !== record.lastSeenDate;
}

function updateInformationAboutSeenDefaultStateAd() {
	external___amd___ext_wikia_adEngine3__["localCache"].set(createCacheKey(), {
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
	return external___amd___ext_wikia_adEngine3__["utils"].queryString.get('resolved_state', null);
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
	promises.push(promise_default.a.race([external___amd___ext_wikia_adEngine3__["utils"].once(image1.element, 'load'), external___amd___ext_wikia_adEngine3__["utils"].once(image1.element, 'error')]));

	if (image2 && image2[srcPropertyName]) {
		image2.element.src = image2[srcPropertyName];
		promises.push(promise_default.a.race([external___amd___ext_wikia_adEngine3__["utils"].once(image2.element, 'load'), external___amd___ext_wikia_adEngine3__["utils"].once(image2.element, 'error')]));
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
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(20);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/get.js
var helpers_get = __webpack_require__(45);
var helpers_get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./src/templates/uap/themes/theme.js




var theme_BigFancyAdTheme = function () {
	function BigFancyAdTheme(adSlot, params) {
		classCallCheck_default()(this, BigFancyAdTheme);

		this.adSlot = adSlot;
		this.container = this.adSlot.getElement();
		this.config = external___amd___ext_wikia_adEngine3__["context"].get('templates.bfaa');
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
						_context.next = 4;
						return external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(adSlot, params.aspectRatio);

					case 4:
						return _context.abrupt('return', _context.sent);

					case 5:
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
var symbol = __webpack_require__(71);
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// EXTERNAL MODULE: ./node_modules/lodash/toPlainObject.js
var toPlainObject = __webpack_require__(210);
var toPlainObject_default = /*#__PURE__*/__webpack_require__.n(toPlainObject);

// EXTERNAL MODULE: ./node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__(221);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);

// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(222);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(99);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(115);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

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







var labelText = 'Advertisement';

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

			label.innerText = labelText;
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


// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(47);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);

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

			return external___amd___ext_wikia_adEngine3__["utils"].logger.apply(external___amd___ext_wikia_adEngine3__["utils"], [StickyBfaa.LOG_GROUP].concat(args));
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
								return external___amd___ext_wikia_adEngine3__["slotTweaker"].onReady(this.adSlot);

							case 2:
								if (!document.hidden) {
									_context.next = 5;
									break;
								}

								_context.next = 5;
								return external___amd___ext_wikia_adEngine3__["utils"].once(window, 'visibilitychange');

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
								return external___amd___ext_wikia_adEngine3__["utils"].once(window, 'scroll');

							case 3:
								_context2.next = 5;
								return external___amd___ext_wikia_adEngine3__["utils"].wait();

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
								return promise_default.a.all([external___amd___ext_wikia_adEngine3__["utils"].once(this.adSlot, external___amd___ext_wikia_adEngine3__["AdSlot"].SLOT_VIEWED_EVENT), isFunction_default()(this.customWhen) ? this.customWhen() : this.customWhen]);

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
}(events["EventEmitter"]);
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
						return external___amd___ext_wikia_adEngine3__["utils"].wait(duration);

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

		assign_default()(_this2, toPlainObject_default()(new events["EventEmitter"]()));

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
									return promise_default.a.all([external___amd___ext_wikia_adEngine3__["utils"].once(_this3, BfaaTheme.RESOLVED_STATE_EVENT), stickyUntilVideoViewed ? external___amd___ext_wikia_adEngine3__["utils"].once(_this3.adSlot, external___amd___ext_wikia_adEngine3__["AdSlot"].VIDEO_VIEWED_EVENT) : promise_default.a.resolve()]);

								case 2:
									_context.next = 4;
									return external___amd___ext_wikia_adEngine3__["utils"].wait(isUndefined_default()(stickyAdditionalTime) ? BfaaTheme.DEFAULT_UNSTICK_DELAY : stickyAdditionalTime);

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
			this.addUnstickButton();
			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.STICKINESS_CHANGE_EVENT, function (isSticky) {
				return _this3.onStickinessChange(isSticky);
			});
			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.CLOSE_CLICKED_EVENT, this.onCloseClicked.bind(this));
			this.stickyBfaa.on(sticky_bfaa_StickyBfaa.UNSTICK_IMMEDIATELY_EVENT, this.unstickImmediately.bind(this));
			this.stickyBfaa.run();
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
		key: 'onAdReady',
		value: function onAdReady() {
			var _this5 = this;

			helpers_get_default()(BfaaTheme.prototype.__proto__ || get_prototype_of_default()(BfaaTheme.prototype), 'onAdReady', this).call(this);

			if (resolvedState.isResolvedState(this.params)) {
				this.setResolvedState(true);
			} else {
				resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
				this.scrollListener = external___amd___ext_wikia_adEngine3__["scrollListener"].addCallback(function () {
					return _this5.updateAdSizes();
				});
				// Manually run update on scroll once
				this.updateAdSizes();
			}
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this6 = this;

			helpers_get_default()(BfaaTheme.prototype.__proto__ || get_prototype_of_default()(BfaaTheme.prototype), 'onVideoReady', this).call(this);

			this.video = video;
			video.addEventListener('wikiaAdStarted', function () {
				return _this6.updateAdSizes();
			});
			video.addEventListener('wikiaAdCompleted', function () {
				if (!_this6.isLocked) {
					_this6.setResolvedState(true);
				}
			});
			video.addEventListener('wikiaFullscreenChange', function () {
				if (video.isFullscreen()) {
					_this6.stickyBfaa.blockRevertStickiness();
					_this6.container.classList.add('theme-video-fullscreen');
				} else {
					_this6.stickyBfaa.unblockRevertStickiness();
					_this6.container.classList.remove('theme-video-fullscreen');
					_this6.updateAdSizes();
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
			external___amd___ext_wikia_adEngine3__["scrollListener"].removeCallback(this.scrollListener);
			this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);

			if (this.video && this.video.ima.getAdsManager()) {
				this.video.stop();
			}

			this.config.moveNavbar(0, 0);
		}
	}, {
		key: 'updateAdSizes',
		value: function updateAdSizes() {
			var config = this.params.config;
			var currentWidth = this.config.mainContainer.offsetWidth;
			var isResolved = this.container.classList.contains('theme-resolved');
			var maxHeight = currentWidth / config.aspectRatio.default;
			var minHeight = currentWidth / config.aspectRatio.resolved;
			var aspectScroll = this.isLocked ? minHeight : Math.max(minHeight, maxHeight - window.scrollY);
			var currentAspectRatio = currentWidth / aspectScroll;
			var aspectRatioDiff = config.aspectRatio.default - config.aspectRatio.resolved;
			var currentDiff = config.aspectRatio.default - currentAspectRatio;
			var currentState = 1 - (aspectRatioDiff - currentDiff) / aspectRatioDiff;
			var diff = config.state.height.default - config.state.height.resolved;
			var value = (config.state.height.default - diff * currentState) / 100;

			this.adjustVideoSize(aspectScroll * value);

			if (this.params.thumbnail) {
				this.setThumbnailStyle(currentState);
			}

			if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
				this.setResolvedState();
			} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
				this.container.style.top = '';
				this.switchImagesInAd(false);
			}

			external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(this.adSlot, currentAspectRatio);
		}
	}, {
		key: 'adjustVideoSize',
		value: function adjustVideoSize(value) {
			if (this.video && !this.video.isFullscreen()) {
				this.video.container.style.width = this.params.videoAspectRatio * value + 'px';
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
			external___amd___ext_wikia_adEngine3__["scrollListener"].removeCallback(this.scrollListener);
			this.adjustSizesToResolved(offset);
			this.emit(BfaaTheme.RESOLVED_STATE_EVENT);
		}
	}, {
		key: 'setResolvedState',
		value: function setResolvedState(immediately) {
			var _this7 = this;

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
					_this7.lock();
					resolve();
				} else {
					_this7.onResolvedStateScroll = debounce_default()(function () {
						if (window.scrollY < offset) {
							return;
						}

						window.removeEventListener('scroll', _this7.onResolvedStateScroll);
						_this7.onResolvedStateScroll = null;
						_this7.lock();
						resolve();
					}, 50);
					window.addEventListener('scroll', _this7.onResolvedStateScroll);
					_this7.onResolvedStateScroll();
				}
			});
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
				external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(this.adSlot, aspectRatio);
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
				resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
				external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
			}
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this9 = this;

			helpers_get_default()(BfabTheme.prototype.__proto__ || get_prototype_of_default()(BfabTheme.prototype), 'onVideoReady', this).call(this);

			video.addEventListener('wikiaAdStarted', function () {
				if (resolvedState.isResolvedState(_this9.params)) {
					_this9.setResolvedState(video);
				}
			});
			video.addEventListener('wikiaAdCompleted', function () {
				return _this9.setResolvedState(video);
			});
			video.addEventListener('wikiaFullscreenChange', function () {
				if (video.isFullscreen()) {
					_this9.container.classList.add('theme-video-fullscreen');
				} else {
					_this9.container.classList.remove('theme-video-fullscreen');
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
								return external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(this.adSlot, config.aspectRatio.resolved);

							case 5:
								if (this.params.thumbnail) {
									this.setThumbnailStyle(video);
								}

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function setResolvedState(_x2) {
				return _ref3.apply(this, arguments);
			}

			return setResolvedState;
		}()
	}, {
		key: 'setThumbnailStyle',
		value: function setThumbnailStyle(video) {
			var thumbnail = this.params.thumbnail;
			var style = mapValues_default()(this.params.config.state, function (styleProperty) {
				return styleProperty.resolved + '%';
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

	return external___amd___ext_wikia_adEngine3__["slotTweaker"].makeResponsive(adSlot, params.aspectRatio);
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
				slotsToEnable: ['BOTTOM_LEADERBOARD', 'INCONTENT_BOXAD'],
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
		this.config = external___amd___ext_wikia_adEngine3__["context"].get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
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
								return external___amd___ext_wikia_adEngine3__["utils"].once(window, 'visibilitychange');

							case 6:

								this.theme.onAdReady(iframe);

								if (!universalAdPackage.isVideoEnabled(this.params)) {
									_context.next = 12;
									break;
								}

								_context.next = 10;
								return external___amd___ext_wikia_adEngine3__["utils"].defer(universalAdPackage.loadVideoAd, this.videoSettings);

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
		this.config = external___amd___ext_wikia_adEngine3__["context"].get('templates.bfab');
		this.container = document.getElementById(this.adSlot.getId());
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
								return external___amd___ext_wikia_adEngine3__["utils"].once(window, 'visibilitychange');

							case 3:

								this.theme.onAdReady(iframe);

								if (!universalAdPackage.isVideoEnabled(this.params)) {
									_context.next = 9;
									break;
								}

								_context.next = 7;
								return external___amd___ext_wikia_adEngine3__["utils"].defer(universalAdPackage.loadVideoAd, this.videoSettings);

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
// CONCATENATED MODULE: ./src/templates/uap/index.js





// CONCATENATED MODULE: ./src/templates/index.js


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getAdProductInfo", function() { return getAdProductInfo; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FloatingRail", function() { return floating_rail_FloatingRail; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "resolvedState", function() { return resolvedState; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BigFancyAdAbove", function() { return big_fancy_ad_above_BigFancyAdAbove; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BigFancyAdBelow", function() { return big_fancy_ad_below_BigFancyAdBelow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "universalAdPackage", function() { return universalAdPackage; });





var versionField = 'ads.adProductsVersion';

if (get_default()(window, versionField, null)) {
	window.console.warn('Multiple @wikia/ad-products initializations. This may cause issues.');
}

set_default()(window, versionField, 'v4.2.6');




/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(118);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(76),
    castPath = __webpack_require__(49),
    isIndex = __webpack_require__(53),
    isObject = __webpack_require__(10),
    toKey = __webpack_require__(27);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(47),
    isMasked = __webpack_require__(124),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(78);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(125);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(128);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(129);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(131),
    ListCache = __webpack_require__(36),
    Map = __webpack_require__(52);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(132),
    hashDelete = __webpack_require__(133),
    hashGet = __webpack_require__(134),
    hashHas = __webpack_require__(135),
    hashSet = __webpack_require__(136);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(35);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(35);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(35);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(35);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(37);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(37);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(37);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(37);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(38);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(38);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(38);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(38);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(148);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    arrayMap = __webpack_require__(149),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(29);

__webpack_require__(61)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(56);
var toAbsoluteIndex = __webpack_require__(154);
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 158 */
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

module.exports = __webpack_require__(159);

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
/* 159 */
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
__webpack_require__(64);
__webpack_require__(89);
__webpack_require__(167);
__webpack_require__(174);
__webpack_require__(175);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var defined = __webpack_require__(55);
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(65);
var descriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(43);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(9);
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(165);
var step = __webpack_require__(166);
var Iterators = __webpack_require__(32);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(85)(Array, 'Array', function (iterated, kind) {
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
/* 165 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var global = __webpack_require__(2);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(90);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(40);
var anInstance = __webpack_require__(168);
var forOf = __webpack_require__(169);
var speciesConstructor = __webpack_require__(94);
var task = __webpack_require__(95).set;
var microtask = __webpack_require__(171)();
var newPromiseCapabilityModule = __webpack_require__(66);
var perform = __webpack_require__(96);
var promiseResolve = __webpack_require__(97);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(172)($Promise.prototype, {
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
__webpack_require__(43)($Promise, PROMISE);
__webpack_require__(173)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(98)(function (iter) {
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
/* 168 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(91);
var isArrayIter = __webpack_require__(92);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(56);
var getIterFn = __webpack_require__(93);
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
/* 170 */
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(95).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(30)(process) == 'process';

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(12);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(0);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(94);
var promiseResolve = __webpack_require__(97);

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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(66);
var perform = __webpack_require__(96);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(67);

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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(179) });


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(68);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(28);
var IObject = __webpack_require__(82);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(22)(function () {
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(99),
    isObject = __webpack_require__(10);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = {"CROSS":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.707 4.293a.999.999 0 0 0-1.414 0L12 10.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a.999.999 0 1 0 1.414 1.414L12 13.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l6.293-6.293a.999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></svg>","LEARN_MORE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"><g transform=\"translate(-753.000000, -1764.000000)\" fill-rule=\"nonzero\"><g transform=\"translate(153.000000, 1746.000000)\"><g transform=\"translate(5.000000, 0.000000)\"><g transform=\"translate(459.000000, 0.000000)\"><g transform=\"translate(136.000000, 18.000000)\"><polygon points=\"24 0 15 0 18.4395 3.4395 9.033 12.846 11.154 14.967 20.5605 5.5605 24 9\"></polygon><path d=\"M19.5,24 L1.5,24 C0.672,24 0,23.328 0,22.5 L0,4.5 C0,3.672 0.672,3 1.5,3 L10.5,3 L10.5,6 L3,6 L3,21 L18,21 L18,13.5 L21,13.5 L21,22.5 C21,23.328 20.328,24 19.5,24 Z\"></path></g></g></g></g></g></g></svg>","PAUSE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><rect width=\"7\" height=\"22\" rx=\"1\" x=\"3\" y=\"1\"></rect><rect x=\"14\" width=\"7\" height=\"22\" rx=\"1\" y=\"1\"></rect></g></svg>","PLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.69 12.6L5.143 22.867a.722.722 0 0 1-.753.05.733.733 0 0 1-.391-.65V1.733c0-.274.15-.524.391-.65a.724.724 0 0 1 .753.05l14.545 10.266a.734.734 0 0 1 0 1.201z\" fill-rule=\"evenodd\"></path></svg>","REPLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 23c6.065 0 11-4.863 11-10.84a.992.992 0 0 0-1-.985c-.553 0-1 .44-1 .986 0 4.89-4.037 8.868-9 8.868s-9-3.978-9-8.868c0-4.89 4.037-8.869 9-8.869a8.991 8.991 0 0 1 6.975 3.292l-3.794-.501a.996.996 0 0 0-1.124.845.987.987 0 0 0 .858 1.108l5.946.785a.996.996 0 0 0 1.124-.845l.797-5.86a.987.987 0 0 0-.858-1.107.994.994 0 0 0-1.124.846l-.446 3.28A10.997 10.997 0 0 0 12 1.322c-6.065 0-11 4.862-11 10.839C1 18.137 5.935 23 12 23\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.5 9H8V2H5v4H1v3h4.5zm13 0H16V2h3v4h4v3h-4.5zm-13 6H8v7H5v-4H1v-3h4.5zm13 0H16v7h3v-4h4v-3h-4.5z\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.5 22H23v-7h-3v4h-4v3h5.5zM23 3.5V9h-3V5h-4V2h7v1.5zm-22 17V15h3v4h4v3H1v-1.5zM2.5 2H1v7h3V5h4V2H2.5z\" fill-rule=\"evenodd\"/></svg>","VOLUME_OFF":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_off_button</title><circle class=\"cls-1\" cx=\"14.06\" cy=\"13.96\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume-off\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.25,9.17l-3.79,4.11H6.84c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Fill-1\" class=\"cls-2\" d=\"M22.91,16.21l3-3a.92.92,0,1,0-1.3-1.3l-3,3-3-3a.92.92,0,1,0-1.3,1.3l3,3-3,3a.92.92,0,1,0,1.3,1.3l3-3,3,3a.92.92,0,1,0,1.3-1.3Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","VOLUME_ON":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_on_button</title><circle class=\"cls-1\" cx=\"13.96\" cy=\"14.06\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.24,9.17l-3.79,4.11H6.82c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-2\" data-name=\"Shape\" class=\"cls-2\" d=\"M19.18,19.33a4.39,4.39,0,0,0,0-6.19.71.71,0,0,0-1,1,3,3,0,0,1,0,4.19.71.71,0,0,0,1,1Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-3\" data-name=\"Shape\" class=\"cls-2\" d=\"M23.3,16.23a6.19,6.19,0,0,0-1.81-4.39.71.71,0,1,0-1,1,4.81,4.81,0,0,1,0,6.79.71.71,0,1,0,1,1,6.19,6.19,0,0,0,1.81-4.39Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","HIVI_VOLUME_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zM20.305 12l2.425-2.425a.922.922 0 1 0-1.306-1.305l-2.425 2.424-2.423-2.424a.923.923 0 0 0-1.306 1.305L17.695 12l-2.425 2.425a.922.922 0 1 0 1.306 1.304L19 13.306l2.425 2.423a.92.92 0 0 0 1.306 0 .922.922 0 0 0 0-1.304L20.305 12z\" fill-rule=\"evenodd\"></path></svg>","HIVI_VOLUME_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zm11.612 8.524a5.858 5.858 0 0 0 0-8.253.944.944 0 0 0-1.337 1.332 3.97 3.97 0 0 1 0 5.59.943.943 0 1 0 1.337 1.331z\"></path><path d=\"M23.03 12.135c0-2.21-.859-4.292-2.418-5.857a.943.943 0 1 0-1.337 1.332 6.37 6.37 0 0 1 1.868 4.525 6.37 6.37 0 0 1-1.868 4.525.943.943 0 1 0 1.338 1.332 8.249 8.249 0 0 0 2.418-5.857z\"></path></g></svg>"}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(185);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(28);
var call = __webpack_require__(91);
var isArrayIter = __webpack_require__(92);
var toLength = __webpack_require__(56);
var createProperty = __webpack_require__(186);
var getIterFn = __webpack_require__(93);

$export($export.S + $export.F * !__webpack_require__(98)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(31);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(100);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(189);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(28);
var $getPrototypeOf = __webpack_require__(88);

__webpack_require__(61)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(89);
module.exports = __webpack_require__(70).f('iterator');


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
__webpack_require__(84);
__webpack_require__(198);
__webpack_require__(199);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(12);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(86);
var META = __webpack_require__(194).KEY;
var $fails = __webpack_require__(22);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(39);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(70);
var wksDefine = __webpack_require__(72);
var enumKeys = __webpack_require__(195);
var isArray = __webpack_require__(196);
var anObject = __webpack_require__(9);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(63);
var createDesc = __webpack_require__(31);
var _create = __webpack_require__(65);
var gOPNExt = __webpack_require__(197);
var $GOPD = __webpack_require__(73);
var $DP = __webpack_require__(8);
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
  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(44).f = $propertyIsEnumerable;
  __webpack_require__(68).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(42)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(39)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(68);
var pIE = __webpack_require__(44);
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(102).f;
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('asyncIterator');


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('observable');


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(73).f;

__webpack_require__(61)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(204), __esModule: true };

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(205);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(206).set });


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(73).f(Object.prototype, '__proto__').set, 2);
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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(65) });


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(211),
    keysIn = __webpack_require__(212);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(76),
    baseAssignValue = __webpack_require__(46);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(103),
    baseKeysIn = __webpack_require__(219),
    isArrayLike = __webpack_require__(109);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObjectLike = __webpack_require__(26);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isLength = __webpack_require__(74),
    isObjectLike = __webpack_require__(26);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(77);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(106)(module)))

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isPrototype = __webpack_require__(108),
    nativeKeysIn = __webpack_require__(220);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 220 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(46),
    baseForOwn = __webpack_require__(223),
    baseIteratee = __webpack_require__(229);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(224),
    keys = __webpack_require__(75);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(225);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(108),
    nativeKeys = __webpack_require__(227);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(228);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(230),
    baseMatchesProperty = __webpack_require__(260),
    identity = __webpack_require__(264),
    isArray = __webpack_require__(11),
    property = __webpack_require__(265);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(231),
    getMatchData = __webpack_require__(259),
    matchesStrictComparable = __webpack_require__(114);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(110),
    baseIsEqual = __webpack_require__(111);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(36);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 235 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(36),
    Map = __webpack_require__(52),
    MapCache = __webpack_require__(51);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(110),
    equalArrays = __webpack_require__(112),
    equalByTag = __webpack_require__(243),
    equalObjects = __webpack_require__(247),
    getTag = __webpack_require__(254),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(105),
    isTypedArray = __webpack_require__(107);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51),
    setCacheAdd = __webpack_require__(239),
    setCacheHas = __webpack_require__(240);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 239 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 242 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    Uint8Array = __webpack_require__(244),
    eq = __webpack_require__(48),
    equalArrays = __webpack_require__(112),
    mapToArray = __webpack_require__(245),
    setToArray = __webpack_require__(246);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(248);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(249),
    getSymbols = __webpack_require__(251),
    keys = __webpack_require__(75);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(250),
    isArray = __webpack_require__(11);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(252),
    stubArray = __webpack_require__(253);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(255),
    Map = __webpack_require__(52),
    Promise = __webpack_require__(256),
    Set = __webpack_require__(257),
    WeakMap = __webpack_require__(258),
    baseGetTag = __webpack_require__(25),
    toSource = __webpack_require__(78);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(113),
    keys = __webpack_require__(75);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(111),
    get = __webpack_require__(79),
    hasIn = __webpack_require__(261),
    isKey = __webpack_require__(50),
    isStrictComparable = __webpack_require__(113),
    matchesStrictComparable = __webpack_require__(114),
    toKey = __webpack_require__(27);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(262),
    hasPath = __webpack_require__(263);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(49),
    isArguments = __webpack_require__(104),
    isArray = __webpack_require__(11),
    isIndex = __webpack_require__(53),
    isLength = __webpack_require__(74),
    toKey = __webpack_require__(27);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(266),
    basePropertyDeep = __webpack_require__(267),
    isKey = __webpack_require__(50),
    toKey = __webpack_require__(27);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 266 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(80);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ })
/******/ ])});;
//# sourceMappingURL=ad-products.amd.js.map