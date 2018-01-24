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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDescriptor */
/* harmony export (immutable) */ __webpack_exports__["c"] = decorate;
/* harmony export (immutable) */ __webpack_exports__["g"] = metaFor;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getOwnKeys; });
/* harmony export (immutable) */ __webpack_exports__["e"] = getOwnPropertyDescriptors;
/* harmony export (immutable) */ __webpack_exports__["b"] = createDefaultSetter;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return warn; });
/* harmony export (immutable) */ __webpack_exports__["f"] = internalDeprecation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_initialize__ = __webpack_require__(47);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var defineProperty = Object.defineProperty,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    getOwnPropertySymbols = Object.getOwnPropertySymbols;


function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }

  return false;
}

function decorate(handleDescriptor, entryArgs) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor.apply(undefined, _toConsumableArray(entryArgs).concat([[]]));
  } else {
    return function () {
      return handleDescriptor.apply(undefined, _toConsumableArray(Array.prototype.slice.call(arguments)).concat([entryArgs]));
    };
  }
}

var Meta = (_class = function Meta() {
  _classCallCheck(this, Meta);

  _initDefineProp(this, 'debounceTimeoutIds', _descriptor, this);

  _initDefineProp(this, 'throttleTimeoutIds', _descriptor2, this);

  _initDefineProp(this, 'throttlePreviousTimestamps', _descriptor3, this);

  _initDefineProp(this, 'throttleTrailingArgs', _descriptor4, this);

  _initDefineProp(this, 'profileLastRan', _descriptor5, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'debounceTimeoutIds', [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'throttleTimeoutIds', [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'throttlePreviousTimestamps', [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'throttleTrailingArgs', [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'profileLastRan', [__WEBPACK_IMPORTED_MODULE_0__lazy_initialize__["a" /* default */]], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class);


var META_KEY = typeof Symbol === 'function' ? Symbol('__core_decorators__') : '__core_decorators__';

function metaFor(obj) {
  if (obj.hasOwnProperty(META_KEY) === false) {
    defineProperty(obj, META_KEY, {
      // Defaults: NOT enumerable, configurable, or writable
      value: new Meta()
    });
  }

  return obj[META_KEY];
}

var getOwnKeys = getOwnPropertySymbols ? function (object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
} : getOwnPropertyNames;

function getOwnPropertyDescriptors(obj) {
  var descs = {};

  getOwnKeys(obj).forEach(function (key) {
    return descs[key] = getOwnPropertyDescriptor(obj, key);
  });

  return descs;
}

function createDefaultSetter(key) {
  return function set(newValue) {
    Object.defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });

    return newValue;
  };
}

function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else {
    return function __autobind__() {
      return fn.apply(context, arguments);
    };
  }
}

var warn = function () {
  if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) !== 'object' || !console || typeof console.warn !== 'function') {
    return function () {};
  } else {
    return bind(console.warn, console);
  }
}();

var seenDeprecations = {};
function internalDeprecation(msg) {
  if (seenDeprecations[msg] !== true) {
    seenDeprecations[msg] = true;
    warn('DEPRECATION: ' + msg);
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(25);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isArray);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getValue_js__ = __webpack_require__(87);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = Object(__WEBPACK_IMPORTED_MODULE_1__getValue_js__["a" /* default */])(object, key);
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__["a" /* default */])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (getNative);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createIcon;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_json__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons_json__);


var parser = new window.DOMParser();

function createIcon(iconName) {
	var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	if (__WEBPACK_IMPORTED_MODULE_0__icons_json___default.a[iconName]) {
		var element = parser.parseFromString(__WEBPACK_IMPORTED_MODULE_0__icons_json___default.a[iconName], 'image/svg+xml').documentElement;

		classNames.forEach(function (className) {
			return element.classList.add(className);
		});

		return element;
	}

	return null;
}

var icons = Object.keys(__WEBPACK_IMPORTED_MODULE_0__icons_json___default.a).reduce(function (map, name) {
	map[name] = name;
	return map;
}, {});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(61);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return universalAdPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_throttle__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_video__ = __webpack_require__(62);





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

function loadPorvata(videoSettings, slotContainer, imageContainer) {
	var params = videoSettings.getParams();
	var template = __WEBPACK_IMPORTED_MODULE_2__ui_video__["a" /* selectTemplate */](videoSettings);

	params.autoPlay = videoSettings.isAutoPlay();
	videoSettings.updateParams(params);

	return __WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__["Porvata"].inject(params).then(function (video) {
		video.container.style.position = 'relative';
		__WEBPACK_IMPORTED_MODULE_2__ui_video__["b" /* setup */](video, template, {
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

		return video;
	});
}

function loadVideoAd(videoSettings) {
	var params = videoSettings.getParams();
	var adSlot = __WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__["slotService"].getBySlotName(params.slotName);
	var slotContainer = document.getElementById(adSlot.getId());
	var imageContainer = slotContainer.querySelector('div:last-of-type');
	var size = getVideoSize(slotContainer, params, videoSettings);

	params.vastTargeting = {
		passback: getType()
	};
	params.width = size.width;
	params.height = size.height;
	params.container = slotContainer;
	videoSettings.updateParams(params);

	function recalculateVideoSize(video) {
		return function () {
			var currentSize = getVideoSize(slotContainer, params, videoSettings);
			video.resize(currentSize.width, currentSize.height);
		};
	}

	return loadPorvata(videoSettings, slotContainer, imageContainer).then(function (video) {
		window.addEventListener('resize', Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_throttle__["a" /* default */])(recalculateVideoSize(video), 250));

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

		return video;
	});
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
	var slots = __WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__["context"].get('slots');
	Object.keys(slots).forEach(function (slotId) {
		if (!slots[slotId].nonUapSlot) {
			__WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__["context"].set('slots.' + slotId + '.targeting.uap', id);
		}
	});
}

function enableSlots(slotsToEnable) {
	if (getType() !== 'abcd') {
		slotsToEnable.forEach(function (slotName) {
			__WEBPACK_IMPORTED_MODULE_1__wikia_ad_engine__["slotService"].enable(slotName);
		});
	}
}

var universalAdPackage = {
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
	},

	getType: getType,
	getUapId: getUapId,
	isVideoEnabled: function isVideoEnabled(params) {
		var triggersArrayIsNotEmpty = Array.isArray(params.videoTriggers) && params.videoTriggers.length > 0;

		return !!params.videoAspectRatio && (params.videoPlaceholderElement || triggersArrayIsNotEmpty);
	},

	loadVideoAd: loadVideoAd,
	setType: setType,
	setUapId: setUapId
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(8);



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
    (Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(2);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolvedState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolved_state_switch__ = __webpack_require__(28);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }




var DEFAULT_STATE = 'default';
var RESOLVED_STATE = 'resolved';

function getQueryParam() {
	return __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].queryString.get('resolved_state', null);
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

	promises.push(Promise.resolve(params));
	image1.element.src = image1[srcPropertyName];
	promises.push(Promise.race([__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].once(image1.element, 'load'), __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].once(image1.element, 'error')]));

	if (image2 && image2[srcPropertyName]) {
		image2.element.src = image2[srcPropertyName];
		promises.push(Promise.race([__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].once(image2.element, 'load'), __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].once(image2.element, 'error')]));
	}

	return Promise.all(promises);
}

function setDefaultState(params) {
	return setState(DEFAULT_STATE, params);
}

function setResolvedState(params) {
	return setState(RESOLVED_STATE, params);
}

function templateSupportsResolvedState(params) {
	return !!(params.image1 && params.image1.resolvedStateSrc) || params.theme === 'hivi';
}

function isResolvedState(params) {
	var result = false;

	if (templateSupportsResolvedState(params)) {
		var showResolvedState = !isBlockedByURLParam();
		var defaultStateSeen = true;

		if (showResolvedState) {
			defaultStateSeen = __WEBPACK_IMPORTED_MODULE_1__resolved_state_switch__["a" /* resolvedStateSwitch */].wasDefaultStateSeen() || isForcedByURLParam();
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
				return setResolvedState(params).then(function (_ref) {
					var _ref2 = _toArray(_ref),
					    updatedParams = _ref2[0],
					    args = _ref2.slice(1);

					videoSettings.updateParams(updatedParams);
					return [updatedParams].concat(_toConsumableArray(args));
				});
			}

			__WEBPACK_IMPORTED_MODULE_1__resolved_state_switch__["a" /* resolvedStateSwitch */].updateInformationAboutSeenDefaultStateAd();
			return setDefaultState(params);
		}

		return Promise.resolve();
	},

	isResolvedState: isResolvedState
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listCacheClear_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listCacheDelete_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listCacheGet_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listCacheHas_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listCacheSet_js__ = __webpack_require__(110);






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
ListCache.prototype.clear = __WEBPACK_IMPORTED_MODULE_0__listCacheClear_js__["a" /* default */];
ListCache.prototype['delete'] = __WEBPACK_IMPORTED_MODULE_1__listCacheDelete_js__["a" /* default */];
ListCache.prototype.get = __WEBPACK_IMPORTED_MODULE_2__listCacheGet_js__["a" /* default */];
ListCache.prototype.has = __WEBPACK_IMPORTED_MODULE_3__listCacheHas_js__["a" /* default */];
ListCache.prototype.set = __WEBPACK_IMPORTED_MODULE_4__listCacheSet_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (ListCache);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eq_js__ = __webpack_require__(40);


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
    if (Object(__WEBPACK_IMPORTED_MODULE_0__eq_js__["a" /* default */])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (assocIndexOf);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(Object, 'create');

/* harmony default export */ __webpack_exports__["a"] = (nativeCreate);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isKeyable_js__ = __webpack_require__(124);


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
  return Object(__WEBPACK_IMPORTED_MODULE_0__isKeyable_js__["a" /* default */])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["a"] = (getMapData);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSymbol_js__ = __webpack_require__(10);


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
  if (typeof value == 'string' || Object(__WEBPACK_IMPORTED_MODULE_0__isSymbol_js__["a" /* default */])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (toKey);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeys_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(102);




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
  return Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__["a" /* default */])(object) ? Object(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__["a" /* default */])(object) : Object(__WEBPACK_IMPORTED_MODULE_1__baseKeys_js__["a" /* default */])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keys);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isLength);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(2);



/* Built-in method references that are verified to be native. */
var Map = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["a" /* default */], 'Map');

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapCacheClear_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapCacheDelete_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapCacheGet_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapCacheHas_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapCacheSet_js__ = __webpack_require__(127);






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
MapCache.prototype.clear = __WEBPACK_IMPORTED_MODULE_0__mapCacheClear_js__["a" /* default */];
MapCache.prototype['delete'] = __WEBPACK_IMPORTED_MODULE_1__mapCacheDelete_js__["a" /* default */];
MapCache.prototype.get = __WEBPACK_IMPORTED_MODULE_2__mapCacheGet_js__["a" /* default */];
MapCache.prototype.has = __WEBPACK_IMPORTED_MODULE_3__mapCacheHas_js__["a" /* default */];
MapCache.prototype.set = __WEBPACK_IMPORTED_MODULE_4__mapCacheSet_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MapCache);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(10);



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
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArray_js__["a" /* default */])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ __webpack_exports__["a"] = (isKey);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiComponent; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UiComponent = function () {
	_createClass(UiComponent, [{
		key: "classNames",
		get: function get() {
			return this.props.classNames || [];
		}
	}]);

	function UiComponent() {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, UiComponent);

		this.props = props;
	}

	_createClass(UiComponent, [{
		key: "render",
		value: function render() {
			return document.createDocumentFragment();
		}
	}]);

	return UiComponent;
}();



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toNumber_js__ = __webpack_require__(59);




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
  wait = Object(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(wait) || 0;
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(options.maxWait) || 0, wait) : maxWait;
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
    var time = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])();
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
    return timerId === undefined ? result : trailingEdge(Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])());
  }

  function debounced() {
    var time = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])(),
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

/* harmony default export */ __webpack_exports__["a"] = (debounce);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(58)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var duration = 400,
    onAnimationClassName = 'on-animation';

function resizeContainer(container, finalAspectRatio) {
	container.style.height = container.offsetHeight + 'px';
	container.style.height = container.offsetWidth / finalAspectRatio + 'px';

	setTimeout(function () {
		container.style.height = '';
	}, duration);
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
	}, duration);
}

function showVideo(video, params) {
	params.container.classList.add(onAnimationClassName);
	resizeContainer(params.container, params.videoAspectRatio);
	toggle(video.container, params.image);
}

function add(video, container, params) {
	video.addEventListener('wikiaAdStarted', function () {
		showVideo(video, params);
	});

	video.addEventListener('wikiaAdCompleted', function () {
		hideVideo(video, params);
	});
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add,
	duration: duration
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolved_state__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VideoSettings = function () {
	function VideoSettings(params) {
		_classCallCheck(this, VideoSettings);

		this.params = params;

		Object.defineProperty(this, 'resolvedState', {
			value: __WEBPACK_IMPORTED_MODULE_0__resolved_state__["a" /* resolvedState */].isResolvedState(this.params),
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

	_createClass(VideoSettings, [{
		key: 'detectAutoPlay',
		value: function detectAutoPlay() {
			var defaultStateAutoPlay = this.params.autoPlay && !this.resolvedState,
			    resolvedStateAutoPlay = this.params.resolvedStateAutoPlay && this.resolvedState;
			return Boolean(defaultStateAutoPlay || resolvedStateAutoPlay);
		}
	}, {
		key: 'getParams',
		value: function getParams() {
			return Object.assign({}, this.params);
		}
	}, {
		key: 'updateParams',
		value: function updateParams(params) {
			Object.assign(this.params, params);
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

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolvedStateSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__universal_ad_package__ = __webpack_require__(9);



var cacheKey = 'adEngine_resolvedStateCounter';
var cacheTtl = 24 * 3600;
var now = new Date();

function createCacheKey() {
	return cacheKey + '_' + __WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].getUapId();
}

function findRecordInCache() {
	return __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["localCache"].get(createCacheKey());
}

function wasDefaultStateSeen() {
	var record = findRecordInCache();

	// check for presence in localStorage and if present, make sure that we're
	// not comparing to current session data - bfab that wants to load after bfaa
	return !!record && now.getTime() !== record.lastSeenDate;
}

function updateInformationAboutSeenDefaultStateAd() {
	__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["localCache"].set(createCacheKey(), {
		adId: __WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].getUapId(),
		lastSeenDate: now.getTime()
	}, cacheTtl);
}

var resolvedStateSwitch = {
	updateInformationAboutSeenDefaultStateAd: updateInformationAboutSeenDefaultStateAd,
	wasDefaultStateSeen: wasDefaultStateSeen
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classic__ = __webpack_require__(78);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BfaaTheme", function() { return __WEBPACK_IMPORTED_MODULE_0__classic__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BfabTheme", function() { return __WEBPACK_IMPORTED_MODULE_0__classic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ready__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "adIsReady", function() { return __WEBPACK_IMPORTED_MODULE_1__ready__["a"]; });



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigFancyAdTheme; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BigFancyAdTheme = function () {
	function BigFancyAdTheme(adSlot, params) {
		_classCallCheck(this, BigFancyAdTheme);

		this.adSlot = adSlot;
		this.container = this.adSlot.getElement();
		this.params = params;
	}

	_createClass(BigFancyAdTheme, [{
		key: "onAdReady",
		value: function onAdReady() {}
	}, {
		key: "onVideoReady",
		value: function onVideoReady() {}
	}]);

	return BigFancyAdTheme;
}();

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hivi__ = __webpack_require__(80);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BfaaTheme", function() { return __WEBPACK_IMPORTED_MODULE_0__hivi__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BfabTheme", function() { return __WEBPACK_IMPORTED_MODULE_0__hivi__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ready__ = __webpack_require__(189);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "adIsReady", function() { return __WEBPACK_IMPORTED_MODULE_1__ready__["a"]; });



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(5);



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
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (toSource);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(8);



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
var isArguments = Object(__WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */])(function() { return arguments; }()) ? __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */] : function(value) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["a"] = (isArguments);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__ = __webpack_require__(94);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Buffer : undefined;

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
var isBuffer = nativeIsBuffer || __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isIndex);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUnary_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__ = __webpack_require__(97);




/* Node.js helper references. */
var nodeIsTypedArray = __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */].isTypedArray;

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
var isTypedArray = nodeIsTypedArray ? Object(__WEBPACK_IMPORTED_MODULE_1__baseUnary_js__["a" /* default */])(nodeIsTypedArray) : __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (isTypedArray);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListCache_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stackClear_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stackDelete_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stackGet_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stackHas_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stackSet_js__ = __webpack_require__(115);







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new __WEBPACK_IMPORTED_MODULE_0__ListCache_js__["a" /* default */](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = __WEBPACK_IMPORTED_MODULE_1__stackClear_js__["a" /* default */];
Stack.prototype['delete'] = __WEBPACK_IMPORTED_MODULE_2__stackDelete_js__["a" /* default */];
Stack.prototype.get = __WEBPACK_IMPORTED_MODULE_3__stackGet_js__["a" /* default */];
Stack.prototype.has = __WEBPACK_IMPORTED_MODULE_4__stackHas_js__["a" /* default */];
Stack.prototype.set = __WEBPACK_IMPORTED_MODULE_5__stackSet_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (Stack);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (eq);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsEqualDeep_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(8);



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
  if (value == null || other == null || (!Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && !Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(other))) {
    return value !== value && other !== other;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseIsEqualDeep_js__["a" /* default */])(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsEqual);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SetCache_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arraySome_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cacheHas_js__ = __webpack_require__(133);




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
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new __WEBPACK_IMPORTED_MODULE_0__SetCache_js__["a" /* default */] : undefined;

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
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__arraySome_js__["a" /* default */])(other, function(othValue, othIndex) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__cacheHas_js__["a" /* default */])(seen, othIndex) &&
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

/* harmony default export */ __webpack_exports__["a"] = (equalArrays);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(5);


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isStrictComparable);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (matchesStrictComparable);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__castPath_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toKey_js__ = __webpack_require__(17);



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = Object(__WEBPACK_IMPORTED_MODULE_0__castPath_js__["a" /* default */])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[Object(__WEBPACK_IMPORTED_MODULE_1__toKey_js__["a" /* default */])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (baseGet);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isKey_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringToPath_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString_js__ = __webpack_require__(156);





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArray_js__["a" /* default */])(value)) {
    return value;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__isKey_js__["a" /* default */])(value, object) ? [value] : Object(__WEBPACK_IMPORTED_MODULE_2__stringToPath_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__toString_js__["a" /* default */])(value));
}

/* harmony default export */ __webpack_exports__["a"] = (castPath);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lazyInitialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);

var defineProperty = Object.defineProperty;


function handleDescriptor(target, key, descriptor) {
  var configurable = descriptor.configurable,
      enumerable = descriptor.enumerable,
      initializer = descriptor.initializer,
      value = descriptor.value;

  return {
    configurable: configurable,
    enumerable: enumerable,

    get: function get() {
      // This happens if someone accesses the
      // property directly on the prototype
      if (this === target) {
        return;
      }

      var ret = initializer ? initializer.call(this) : value;

      defineProperty(this, key, {
        configurable: configurable,
        enumerable: enumerable,
        writable: true,
        value: ret
      });

      return ret;
    },


    set: Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["b" /* createDefaultSetter */])(key)
  };
}

function lazyInitialize() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(50);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAdProductInfo", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates__ = __webpack_require__(52);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FloatingRail", function() { return __WEBPACK_IMPORTED_MODULE_2__templates__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "resolvedState", function() { return __WEBPACK_IMPORTED_MODULE_2__templates__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BigFancyAdAbove", function() { return __WEBPACK_IMPORTED_MODULE_2__templates__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BigFancyAdBelow", function() { return __WEBPACK_IMPORTED_MODULE_2__templates__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "universalAdPackage", function() { return __WEBPACK_IMPORTED_MODULE_2__templates__["e"]; });





/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_info__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__product_info__["a"]; });


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAdProductInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);


function findSlotGroup(product) {
	var slotGroups = __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('slotGroups'),
	    result = Object.keys(slotGroups).filter(function (name) {
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

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floating_rail__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__floating_rail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uap__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__uap__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__uap__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__uap__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__uap__["d"]; });



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingRail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var adsInRail = 2;
var biggestAdSize = 600;

var availableSpace = null;

var FloatingRail = function () {
	_createClass(FloatingRail, null, [{
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
		_classCallCheck(this, FloatingRail);

		this.config = __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('templates.floatingRail');
		this.rail = document.querySelector(this.config.railSelector);
		this.railWrapper = document.querySelector(this.config.wrapperSelector);
	}

	_createClass(FloatingRail, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			var offset = this.params.offset || 0;

			if (!this.railWrapper || !FloatingRail.isEnabled() || this.getAvailableSpace() === 0) {
				return;
			}

			var floatingSpace = Math.min(offset, this.getAvailableSpace());

			__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["scrollListener"].addCallback(function () {
				var start = _this.config.startOffset + __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].getTopOffset(_this.railWrapper),
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
			return __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('templates.floatingRail.enabled') && __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('state.isMobile') === false;
		}
	}]);

	return FloatingRail;
}();

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__big_fancy_ad_above__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__big_fancy_ad_above__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__big_fancy_ad_below__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__big_fancy_ad_below__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__universal_ad_package__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__universal_ad_package__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolved_state__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__resolved_state__["a"]; });





/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigFancyAdAbove; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__universal_ad_package__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__themes_classic__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__themes_hivi__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var BigFancyAdAbove = function () {
	_createClass(BigFancyAdAbove, null, [{
		key: 'getName',
		value: function getName() {
			return 'bfaa';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			function onStickBfaaCallback(adSlot) {
				adSlot.getElement().classList.add('sticky-bfaa');
			}

			function onUnstickBfaaCallback(adSlot) {
				adSlot.getElement().classList.remove('sticky-bfaa');
			}

			return {
				desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
				handleNavbar: false,
				mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
				slotSibling: '.topic-header',
				slotsToEnable: ['BOTTOM_LEADERBOARD', 'INCONTENT_BOXAD'],
				stickyAnimationDuration: 500,
				onInit: function onInit() {},
				onStickBfaaCallback: onStickBfaaCallback,
				onUnstickBfaaCallback: onUnstickBfaaCallback,
				moveNavbar: function moveNavbar() {}
			};
		}

		/**
   * Constructor
   *
   * @param {object} adSlot
   */

	}]);

	function BigFancyAdAbove(adSlot) {
		_classCallCheck(this, BigFancyAdAbove);

		this.adSlot = adSlot;
		this.config = __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;
		this.theme = null;
	}

	/**
  * Initializes the BFAA unit
  */


	_createClass(BigFancyAdAbove, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			if (!this.container) {
				return;
			}

			var uapTheme = this.params.theme === 'hivi' ? __WEBPACK_IMPORTED_MODULE_4__themes_hivi__ : __WEBPACK_IMPORTED_MODULE_3__themes_classic__;

			__WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].init(this.params, this.config.slotsToEnable);
			this.videoSettings = new __WEBPACK_IMPORTED_MODULE_2__video_settings__["a" /* VideoSettings */](this.params);
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
		value: function onAdReady(iframe) {
			var _this2 = this;

			document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;
			document.body.classList.add('has-bfaa');

			if (this.config.handleNavbar) {
				this.setupNavbar();
			}

			if (__WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].isVideoEnabled(this.params)) {
				__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].defer(__WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].loadVideoAd, this.videoSettings) // defers for proper rendering
				.then(function (video) {
					_this2.theme.onVideoReady(video);
					return video;
				});
			}

			this.theme.onAdReady(iframe);
		}
	}]);

	return BigFancyAdAbove;
}();

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debounce_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(5);



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
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__debounce_js__["a" /* default */])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ __webpack_exports__["a"] = (throttle);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(2);


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
  return __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Date.now();
};

/* harmony default export */ __webpack_exports__["a"] = (now);


/***/ }),
/* 58 */
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(10);



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
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(value)) {
    return NAN;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(other) ? (other + '') : other;
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

/* harmony default export */ __webpack_exports__["a"] = (toNumber);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);


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
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_template__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_template__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_interface__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__video_interface__["a"]; });



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__close_button__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__learn_more__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pause_control__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pause_overlay__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_bar__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__replay_overlay__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toggle_animation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toggle_fullscreen__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toggle_thumbnail__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toggle_ui__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toggle_video__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__volume_control__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__panel__ = __webpack_require__(76);















var createBottomPanel = function createBottomPanel(_ref) {
	var _ref$theme = _ref.theme,
	    theme = _ref$theme === undefined ? null : _ref$theme;

	var isHiVi = theme === 'hivi';
	var panelClassName = 'bottom-panel';

	if (isHiVi) {
		panelClassName += ' dynamic-panel';
	}

	return new __WEBPACK_IMPORTED_MODULE_13__panel__["a" /* default */](panelClassName, [isHiVi ? __WEBPACK_IMPORTED_MODULE_3__pause_control__["a" /* default */] : null, __WEBPACK_IMPORTED_MODULE_12__volume_control__["a" /* default */], isHiVi ? __WEBPACK_IMPORTED_MODULE_8__toggle_fullscreen__["a" /* default */] : null]);
};

var getTemplates = function getTemplates(params, videoSettings) {
	return {
		'auto-play': [__WEBPACK_IMPORTED_MODULE_5__progress_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__pause_overlay__["a" /* default */], createBottomPanel(params), __WEBPACK_IMPORTED_MODULE_7__toggle_animation__["a" /* default */]],
		default: [__WEBPACK_IMPORTED_MODULE_5__progress_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__pause_overlay__["a" /* default */], createBottomPanel(params), __WEBPACK_IMPORTED_MODULE_1__close_button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__toggle_animation__["a" /* default */]],
		'split-left': [__WEBPACK_IMPORTED_MODULE_5__progress_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__pause_overlay__["a" /* default */], createBottomPanel(params), __WEBPACK_IMPORTED_MODULE_11__toggle_video__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__replay_overlay__["a" /* default */], !videoSettings.isAutoPlay() ? __WEBPACK_IMPORTED_MODULE_1__close_button__["a" /* default */] : null],
		'split-right': [__WEBPACK_IMPORTED_MODULE_5__progress_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__pause_overlay__["a" /* default */], createBottomPanel(params), __WEBPACK_IMPORTED_MODULE_11__toggle_video__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__replay_overlay__["a" /* default */], !videoSettings.isAutoPlay() ? __WEBPACK_IMPORTED_MODULE_1__close_button__["a" /* default */] : null],
		hivi: [__WEBPACK_IMPORTED_MODULE_5__progress_bar__["a" /* default */], createBottomPanel(params), params.videoPlaceholderElement ? __WEBPACK_IMPORTED_MODULE_11__toggle_video__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_7__toggle_animation__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__toggle_thumbnail__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__toggle_ui__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__learn_more__["a" /* default */], params.videoPlaceholderElement ? __WEBPACK_IMPORTED_MODULE_6__replay_overlay__["a" /* default */] : null]
	};
};

function selectTemplate(videoSettings) {
	var params = videoSettings.getParams(),
	    templates = getTemplates(params, videoSettings);

	var template = 'default';

	if (params.theme === 'hivi') {
		template = 'hivi';
	} else if (videoSettings.isSplitLayout()) {
		template = params.splitLayoutVideoPosition === 'right' ? 'split-right' : 'split-left';
	} else if (videoSettings.isAutoPlay()) {
		template = 'auto-play';
	} else {
		document.body.classList.add('ctp-vuap-loaded');
	}

	params.container.classList.add('theme-' + template);
	if (params.isDarkTheme) {
		params.container.classList.add('theme-dark');
	}
	if (params.isMobile) {
		params.container.classList.add('theme-mobile-layout');
	}
	if (__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].client.isSmartphone() || __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].client.isTablet()) {
		params.container.classList.add('theme-mobile-device');
	}

	return templates[template];
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(video, container) {
	var closeButton = document.createElement('div');

	closeButton.classList.add('close-ad');
	closeButton.addEventListener('click', function (event) {
		video.stop();
		event.preventDefault();
	});

	container.appendChild(closeButton);
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(6);


var text = 'Learn More';

function add(video, container, params) {
	var learnMore = document.createElement('div'),
	    icon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].LEARN_MORE, ['learn-more-icon', 'porvata-icon']),
	    label = document.createElement('div');

	label.innerText = text;
	learnMore.appendChild(label);
	learnMore.appendChild(icon);

	learnMore.classList.add('learn-more');
	learnMore.addEventListener('click', function () {
		top.open(params.clickThroughURL, '_blank');
	});

	container.appendChild(learnMore);
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {"CROSS":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.707 4.293a.999.999 0 0 0-1.414 0L12 10.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a.999.999 0 1 0 1.414 1.414L12 13.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l6.293-6.293a.999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></svg>","LEARN_MORE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"><g transform=\"translate(-753.000000, -1764.000000)\" fill-rule=\"nonzero\"><g transform=\"translate(153.000000, 1746.000000)\"><g transform=\"translate(5.000000, 0.000000)\"><g transform=\"translate(459.000000, 0.000000)\"><g transform=\"translate(136.000000, 18.000000)\"><polygon points=\"24 0 15 0 18.4395 3.4395 9.033 12.846 11.154 14.967 20.5605 5.5605 24 9\"></polygon><path d=\"M19.5,24 L1.5,24 C0.672,24 0,23.328 0,22.5 L0,4.5 C0,3.672 0.672,3 1.5,3 L10.5,3 L10.5,6 L3,6 L3,21 L18,21 L18,13.5 L21,13.5 L21,22.5 C21,23.328 20.328,24 19.5,24 Z\"></path></g></g></g></g></g></g></svg>","PAUSE":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><rect width=\"7\" height=\"22\" rx=\"1\" x=\"3\" y=\"1\"></rect><rect x=\"14\" width=\"7\" height=\"22\" rx=\"1\" y=\"1\"></rect></g></svg>","PLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.69 12.6L5.143 22.867a.722.722 0 0 1-.753.05.733.733 0 0 1-.391-.65V1.733c0-.274.15-.524.391-.65a.724.724 0 0 1 .753.05l14.545 10.266a.734.734 0 0 1 0 1.201z\" fill-rule=\"evenodd\"></path></svg>","REPLAY":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 23c6.065 0 11-4.863 11-10.84a.992.992 0 0 0-1-.985c-.553 0-1 .44-1 .986 0 4.89-4.037 8.868-9 8.868s-9-3.978-9-8.868c0-4.89 4.037-8.869 9-8.869a8.991 8.991 0 0 1 6.975 3.292l-3.794-.501a.996.996 0 0 0-1.124.845.987.987 0 0 0 .858 1.108l5.946.785a.996.996 0 0 0 1.124-.845l.797-5.86a.987.987 0 0 0-.858-1.107.994.994 0 0 0-1.124.846l-.446 3.28A10.997 10.997 0 0 0 12 1.322c-6.065 0-11 4.862-11 10.839C1 18.137 5.935 23 12 23\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.5 9H8V2H5v4H1v3h4.5zm13 0H16V2h3v4h4v3h-4.5zm-13 6H8v7H5v-4H1v-3h4.5zm13 0H16v7h3v-4h4v-3h-4.5z\" fill-rule=\"evenodd\"/></svg>","FULLSCREEN_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.5 22H23v-7h-3v4h-4v3h5.5zM23 3.5V9h-3V5h-4V2h7v1.5zm-22 17V15h3v4h4v3H1v-1.5zM2.5 2H1v7h3V5h4V2H2.5z\" fill-rule=\"evenodd\"/></svg>","VOLUME_OFF":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_off_button</title><circle class=\"cls-1\" cx=\"14.06\" cy=\"13.96\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume-off\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.25,9.17l-3.79,4.11H6.84c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Fill-1\" class=\"cls-2\" d=\"M22.91,16.21l3-3a.92.92,0,1,0-1.3-1.3l-3,3-3-3a.92.92,0,1,0-1.3,1.3l3,3-3,3a.92.92,0,1,0,1.3,1.3l3-3,3,3a.92.92,0,1,0,1.3-1.3Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","VOLUME_ON":"<svg viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#fff;opacity:0.4;}.cls-2{fill:#231f20;}</style></defs><title>sound_on_button</title><circle class=\"cls-1\" cx=\"13.96\" cy=\"14.06\" r=\"13.74\"/><path class=\"cls-2\" d=\"M16,2.93A13.07,13.07,0,1,1,2.93,16,13.08,13.08,0,0,1,16,2.93M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z\" transform=\"translate(-2 -2)\"/><g id=\"Page-1\"><g id=\"Video-Player-Skin\"><g id=\"Video-Copy\"><g id=\"volume\"><path id=\"Shape\" class=\"cls-2\" d=\"M14.24,9.17l-3.79,4.11H6.82c-.78,0-1,.46-1,.89V17.7a1,1,0,0,0,1,1h3.65l3.79,4.18a1.09,1.09,0,0,0,.53.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.9V10a1,1,0,0,0-.5-.9,1.06,1.06,0,0,0-1,.05Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-2\" data-name=\"Shape\" class=\"cls-2\" d=\"M19.18,19.33a4.39,4.39,0,0,0,0-6.19.71.71,0,0,0-1,1,3,3,0,0,1,0,4.19.71.71,0,0,0,1,1Z\" transform=\"translate(-2 -2)\"/><path id=\"Shape-3\" data-name=\"Shape\" class=\"cls-2\" d=\"M23.3,16.23a6.19,6.19,0,0,0-1.81-4.39.71.71,0,1,0-1,1,4.81,4.81,0,0,1,0,6.79.71.71,0,1,0,1,1,6.19,6.19,0,0,0,1.81-4.39Z\" transform=\"translate(-2 -2)\"/></g></g></g></g></svg>","HIVI_VOLUME_OFF":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zM20.305 12l2.425-2.425a.922.922 0 1 0-1.306-1.305l-2.425 2.424-2.423-2.424a.923.923 0 0 0-1.306 1.305L17.695 12l-2.425 2.425a.922.922 0 1 0 1.306 1.304L19 13.306l2.425 2.423a.92.92 0 0 0 1.306 0 .922.922 0 0 0 0-1.304L20.305 12z\" fill-rule=\"evenodd\"></path></svg>","HIVI_VOLUME_ON":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zm11.612 8.524a5.858 5.858 0 0 0 0-8.253.944.944 0 0 0-1.337 1.332 3.97 3.97 0 0 1 0 5.59.943.943 0 1 0 1.337 1.331z\"></path><path d=\"M23.03 12.135c0-2.21-.859-4.292-2.418-5.857a.943.943 0 1 0-1.337 1.332 6.37 6.37 0 0 1 1.868 4.525 6.37 6.37 0 0 1-1.868 4.525.943.943 0 1 0 1.338 1.332 8.249 8.249 0 0 0 2.418-5.857z\"></path></g></svg>"}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(6);


function add(video, container) {
	var pauseButton = document.createElement('div'),
	    pauseIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].PAUSE, ['play-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    playIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].PLAY, ['play-on-icon', 'porvata-icon', 'porvata-on-icon']);

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

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(video, container) {
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

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);


function add(video, container) {
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
	progressBar.start = function () {
		var remainingTime = video.getRemainingTime();

		if (remainingTime) {
			currentTime.style.transitionDuration = remainingTime + 's';
			__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["slotTweaker"].forceRepaint(currentTime);
			currentTime.style.width = '100%';
		} else {
			currentTime.style.width = '0';
		}
	};

	video.addEventListener('wikiaAdPlay', progressBar.start);
	video.addEventListener('wikiaAdCompleted', progressBar.reset);
	video.addEventListener('wikiaAdPause', progressBar.pause);

	container.appendChild(progressBar);
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(6);


var replayOverlayClass = 'replay-overlay';

function add(video, container, params) {
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
	var replayIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].REPLAY, ['replay-icon', 'overlay-icon']);
	overlay.appendChild(replayIcon);

	return replayIcon;
}

function addPlayIcon(overlay) {
	var playIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].PLAY, ['play-icon', 'overlay-icon']);
	overlay.appendChild(playIcon);

	return playIcon;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(6);


function add(video, container) {
	var toggleFullscreenButton = document.createElement('div'),
	    offIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].FULLSCREEN_OFF, ['fullscreen-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    onIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */].FULLSCREEN_ON, ['fullscreen-on-icon', 'porvata-icon', 'porvata-on-icon']);

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

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(video, container, params) {
	video.addEventListener('wikiaAdStarted', function () {
		params.thumbnail.classList.add('hidden-state');
	});

	video.addEventListener('wikiaAdCompleted', function () {
		params.thumbnail.classList.remove('hidden-state');
	});
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var overlayTimeout = 5000;

function add(video, container, params) {
	var timeout = null;

	var isMobile = video.container.parentNode.classList.contains('theme-mobile-device'),
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

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(video, container) {
	video.addEventListener('wikiaAdStarted', function () {
		container.classList.remove('hide');
	});

	video.addEventListener('wikiaAdCompleted', function () {
		container.classList.add('hide');
	});
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(6);


function createVolumeControl(params) {
	var iconPrefix = params.theme === 'hivi' ? 'HIVI_' : '',
	    volume = document.createElement('div'),
	    offIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */][iconPrefix + 'VOLUME_OFF'], ['volume-off-icon', 'porvata-icon', 'porvata-off-icon']),
	    onIcon = Object(__WEBPACK_IMPORTED_MODULE_0__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_0__icons__["b" /* icons */][iconPrefix + 'VOLUME_ON'], ['volume-on-icon', 'porvata-icon', 'porvata-on-icon']);

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
}

function add(video, container) {
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

/* harmony default export */ __webpack_exports__["a"] = ({
	add: add
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Panel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panel = function () {
	function Panel(className, uiElements) {
		_classCallCheck(this, Panel);

		this.uiElements = uiElements;
		this.className = className;
		this.panelContainer = null;
	}

	_createClass(Panel, [{
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



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setup;
function setup(video, uiElements, params) {
	uiElements.forEach(function (element) {
		if (element) {
			element.add(video, video.container, params);
		}
	});
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BfaaTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BfabTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_video_toggle_animation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BfaaTheme = function (_BigFancyAdTheme) {
	_inherits(BfaaTheme, _BigFancyAdTheme);

	function BfaaTheme() {
		_classCallCheck(this, BfaaTheme);

		return _possibleConstructorReturn(this, (BfaaTheme.__proto__ || Object.getPrototypeOf(BfaaTheme)).apply(this, arguments));
	}

	_createClass(BfaaTheme, [{
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this2 = this;

			if (!this.params.splitLayoutVideoPosition) {
				video.addEventListener('wikiaAdStarted', function () {
					_this2.recalculatePaddingTop(_this2.params.videoAspectRatio);
				});

				video.addEventListener('wikiaAdCompleted', function () {
					_this2.recalculatePaddingTop(_this2.params.aspectRatio);
				});
			}
		}
	}, {
		key: 'recalculatePaddingTop',
		value: function recalculatePaddingTop(finalAspectRatio) {
			var _this3 = this;

			document.body.style.paddingTop = 100 / finalAspectRatio + '%';

			this.container.style.height = this.container.offsetHeight + 'px';
			// get offsetWidth from existing DOM element in order to force repaint
			this.container.style.height = this.container.offsetWidth / finalAspectRatio + 'px';

			setTimeout(function () {
				// clear height so ad is responsive again
				_this3.container.style.height = '';
			}, __WEBPACK_IMPORTED_MODULE_0__ui_video_toggle_animation__["a" /* default */].duration);
		}
	}]);

	return BfaaTheme;
}(__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BigFancyAdTheme */]);

var BfabTheme = function (_BigFancyAdTheme2) {
	_inherits(BfabTheme, _BigFancyAdTheme2);

	function BfabTheme() {
		_classCallCheck(this, BfabTheme);

		return _possibleConstructorReturn(this, (BfabTheme.__proto__ || Object.getPrototypeOf(BfabTheme)).apply(this, arguments));
	}

	return BfabTheme;
}(__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* BigFancyAdTheme */]);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adIsReady;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolved_state__ = __webpack_require__(12);



function adIsReady(_ref) {
	var adSlot = _ref.adSlot,
	    params = _ref.params,
	    videoSettings = _ref.videoSettings;

	return __WEBPACK_IMPORTED_MODULE_1__resolved_state__["a" /* resolvedState */].setImage(videoSettings).then(function () {
		return __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["slotTweaker"].makeResponsive(adSlot, params.aspectRatio);
	});
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BfaaTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BfabTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_mapValues__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_debounce__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_advertisement_label__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_close_button__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sticky_bfaa__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolved_state__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resolved_state_switch__ = __webpack_require__(28);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var HIVI_RESOLVED_THRESHOLD = 0.995;

var BfaaTheme = function (_BigFancyAdTheme) {
	_inherits(BfaaTheme, _BigFancyAdTheme);

	function BfaaTheme(adSlot, params) {
		_classCallCheck(this, BfaaTheme);

		var _this = _possibleConstructorReturn(this, (BfaaTheme.__proto__ || Object.getPrototypeOf(BfaaTheme)).call(this, adSlot, params));

		_this.stickyBfaa = null;
		_this.scrollListener = null;
		_this.video = null;
		_this.config = __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["context"].get('templates.bfaa');
		_this.isLocked = false;
		_this.onResolvedStateScroll = null;
		_this.addAdvertisementLabel();

		if (_this.params.isSticky) {
			_this.stickyBfaa = new __WEBPACK_IMPORTED_MODULE_6__sticky_bfaa__["a" /* StickyBfaa */](_this.adSlot, _this.params.stickyUntilVideoViewed);
			_this.addUnstickButton();
			_this.stickyBfaa.on(__WEBPACK_IMPORTED_MODULE_6__sticky_bfaa__["a" /* StickyBfaa */].STICKINESS_CHANGE_EVENT, function (isSticky) {
				return _this.onStickinessChange(isSticky);
			});
			_this.stickyBfaa.run();
		}
		return _this;
	}

	_createClass(BfaaTheme, [{
		key: 'addAdvertisementLabel',
		value: function addAdvertisementLabel() {
			var advertisementLabel = new __WEBPACK_IMPORTED_MODULE_3__ui_advertisement_label__["a" /* default */]();

			this.container.appendChild(advertisementLabel.render());
		}
	}, {
		key: 'addUnstickButton',
		value: function addUnstickButton() {
			var _this2 = this;

			var closeButton = new __WEBPACK_IMPORTED_MODULE_4__ui_close_button__["a" /* default */]({
				classNames: ['button-unstick'],
				onClick: function onClick() {
					return _this2.stickyBfaa.revertStickiness();
				}
			});

			this.container.appendChild(closeButton.render());
		}
	}, {
		key: 'onAdReady',
		value: function onAdReady() {
			var _this3 = this;

			if (__WEBPACK_IMPORTED_MODULE_7__resolved_state__["a" /* resolvedState */].isResolvedState(this.params)) {
				this.setResolvedState(true);
			} else {
				__WEBPACK_IMPORTED_MODULE_8__resolved_state_switch__["a" /* resolvedStateSwitch */].updateInformationAboutSeenDefaultStateAd();
				this.scrollListener = __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["scrollListener"].addCallback(function () {
					return _this3.updateAdSizes();
				});
				// Manually run update on scroll once
				this.updateAdSizes();
			}
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this4 = this;

			this.video = video;
			video.addEventListener('wikiaAdStarted', function () {
				return _this4.updateAdSizes();
			});
			video.addEventListener('wikiaAdCompleted', function () {
				if (!_this4.isLocked) {
					_this4.setResolvedState(true);
				}
			});
			video.addEventListener('wikiaFullscreenChange', function () {
				if (!video.isFullscreen()) {
					_this4.updateAdSizes();
				}
			});
		}
	}, {
		key: 'onStickinessChange',
		value: function onStickinessChange(isSticky) {
			var stickinessCallback = isSticky ? this.config.onStickBfaaCallback : this.config.onUnstickBfaaCallback;

			stickinessCallback.call(this.config, this.adSlot, this.params);

			if (!isSticky) {
				this.config.moveNavbar(0);
			}
		}
	}, {
		key: 'updateAdSizes',
		value: function updateAdSizes() {
			var config = this.params.config;
			var currentWidth = document.body.offsetWidth;
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
			this.setThumbnailStyle(currentState);

			if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
				this.setResolvedState();
			} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
				this.container.style.top = '';
				this.switchImagesInAd(false);
			}

			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["slotTweaker"].makeResponsive(this.adSlot, currentAspectRatio);
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
			var style = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_mapValues__["a" /* default */])(this.params.config.state, function (styleProperty) {
				var diff = styleProperty.default - styleProperty.resolved;
				return styleProperty.default - diff * state + '%';
			});

			Object.assign(this.params.thumbnail.style, style);

			if (this.video) {
				Object.assign(this.video.container.style, style);
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
			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["scrollListener"].removeCallback(this.scrollListener);
			this.adjustSizesToResolved(offset);
		}
	}, {
		key: 'setResolvedState',
		value: function setResolvedState(immediately) {
			var _this5 = this;

			var isSticky = this.stickyBfaa && this.stickyBfaa.isSticky();
			var width = this.container.offsetWidth;
			var aspectRatio = this.params.config.aspectRatio;
			var resolvedHeight = width / aspectRatio.resolved;
			var offset = this.getHeightDifferenceBetweenStates();

			if (this.onResolvedStateScroll) {
				window.removeEventListener('scroll', this.onResolvedStateScroll);
				this.onResolvedStateScroll.cancel();
			}

			if (immediately) {
				this.lock();
			} else {
				this.onResolvedStateScroll = Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_debounce__["a" /* default */])(function () {
					if (window.scrollY < offset) {
						return;
					}

					window.removeEventListener('scroll', _this5.onResolvedStateScroll);
					_this5.onResolvedStateScroll = null;
					_this5.lock();
				}, 50);
				window.addEventListener('scroll', this.onResolvedStateScroll);
				this.onResolvedStateScroll();
			}

			if (isSticky) {
				this.config.moveNavbar(resolvedHeight);
			} else {
				this.container.style.top = Math.min(window.scrollY, offset) + 'px';
			}

			this.switchImagesInAd(true);
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
			var aspectRatio = this.params.config.aspectRatio.resolved;

			this.container.style.top = '';
			document.body.style.paddingTop = 100 / aspectRatio + '%';
			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["slotTweaker"].makeResponsive(this.adSlot, aspectRatio);
			window.scrollBy(0, -offset);
			this.updateAdSizes();
		}
	}]);

	return BfaaTheme;
}(__WEBPACK_IMPORTED_MODULE_5__theme__["a" /* BigFancyAdTheme */]);

var BfabTheme = function (_BigFancyAdTheme2) {
	_inherits(BfabTheme, _BigFancyAdTheme2);

	function BfabTheme(adSlot, params) {
		_classCallCheck(this, BfabTheme);

		var _this6 = _possibleConstructorReturn(this, (BfabTheme.__proto__ || Object.getPrototypeOf(BfabTheme)).call(this, adSlot, params));

		_this6.addAdvertisementLabel();
		return _this6;
	}

	_createClass(BfabTheme, [{
		key: 'addAdvertisementLabel',
		value: function addAdvertisementLabel() {
			var advertisementLabel = new __WEBPACK_IMPORTED_MODULE_3__ui_advertisement_label__["a" /* default */]();

			this.container.appendChild(advertisementLabel.render());
		}
	}, {
		key: 'onAdReady',
		value: function onAdReady() {
			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["slotTweaker"].makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
		}
	}, {
		key: 'onVideoReady',
		value: function onVideoReady(video) {
			var _this7 = this;

			video.addEventListener('wikiaAdCompleted', function () {
				return _this7.setResolvedState(video);
			});
		}
	}, {
		key: 'setResolvedState',
		value: function setResolvedState(video) {
			var _this8 = this;

			var _params = this.params,
			    config = _params.config,
			    image2 = _params.image2;


			this.container.classList.add('theme-resolved');
			image2.element.classList.remove('hidden-state');
			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["slotTweaker"].makeResponsive(this.adSlot, config.aspectRatio.resolved).then(function () {
				_this8.setThumbnailStyle(video);
			});
		}
	}, {
		key: 'setThumbnailStyle',
		value: function setThumbnailStyle(video) {
			var thumbnail = this.params.thumbnail;
			var style = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_mapValues__["a" /* default */])(this.params.config.state, function (styleProperty) {
				return styleProperty.resolved + '%';
			});

			Object.assign(thumbnail.style, style);

			if (video) {
				Object.assign(video.container.style, style);
				window.requestAnimationFrame(function () {
					video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
				});
			}
		}
	}]);

	return BfabTheme;
}(__WEBPACK_IMPORTED_MODULE_5__theme__["a" /* BigFancyAdTheme */]);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseForOwn_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseIteratee_js__ = __webpack_require__(103);




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
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__baseIteratee_js__["a" /* default */])(iteratee, 3);

  Object(__WEBPACK_IMPORTED_MODULE_1__baseForOwn_js__["a" /* default */])(object, function(value, key, object) {
    Object(__WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__["a" /* default */])(result, key, iteratee(value, key, object));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (mapValues);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__ = __webpack_require__(83);


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
  if (key == '__proto__' && __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */]) {
    Object(__WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (baseAssignValue);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);


var defineProperty = (function() {
  try {
    var func = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (defineProperty);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMasked_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toSource_js__ = __webpack_require__(33);





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
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_1__isMasked_js__["a" /* default */])(value)) {
    return false;
  }
  var pattern = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(__WEBPACK_IMPORTED_MODULE_3__toSource_js__["a" /* default */])(value));
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsNative);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__ = __webpack_require__(86);


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(__WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys.IE_PROTO || '');
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

/* harmony default export */ __webpack_exports__["a"] = (isMasked);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(2);


/** Used to detect overreaching core-js shims. */
var coreJsData = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["a"] = (coreJsData);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (getValue);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFor_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(18);



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && Object(__WEBPACK_IMPORTED_MODULE_0__baseFor_js__["a" /* default */])(object, iteratee, __WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (baseForOwn);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBaseFor_js__ = __webpack_require__(90);


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
var baseFor = Object(__WEBPACK_IMPORTED_MODULE_0__createBaseFor_js__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (baseFor);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (createBaseFor);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseTimes_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArguments_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isBuffer_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isIndex_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__ = __webpack_require__(38);







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
  var isArr = Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value),
      isArg = !isArr && Object(__WEBPACK_IMPORTED_MODULE_1__isArguments_js__["a" /* default */])(value),
      isBuff = !isArr && !isArg && Object(__WEBPACK_IMPORTED_MODULE_3__isBuffer_js__["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && Object(__WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__["a" /* default */])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(__WEBPACK_IMPORTED_MODULE_0__baseTimes_js__["a" /* default */])(value.length, String) : [],
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
           Object(__WEBPACK_IMPORTED_MODULE_4__isIndex_js__["a" /* default */])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (arrayLikeKeys);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (baseTimes);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(8);



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
  return Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsArguments);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(8);




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
  return Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) &&
    Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !!typedArrayTags[Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value)];
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsTypedArray);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (baseUnary);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(25);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)(module)))

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrototype_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__ = __webpack_require__(100);



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
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPrototype_js__["a" /* default */])(object)) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__["a" /* default */])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseKeys);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(101);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["a"] = (nativeKeys);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(19);



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
  return value != null && Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseMatches_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseMatchesProperty_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_js__ = __webpack_require__(163);






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
    return __WEBPACK_IMPORTED_MODULE_2__identity_js__["a" /* default */];
  }
  if (typeof value == 'object') {
    return Object(__WEBPACK_IMPORTED_MODULE_3__isArray_js__["a" /* default */])(value)
      ? Object(__WEBPACK_IMPORTED_MODULE_1__baseMatchesProperty_js__["a" /* default */])(value[0], value[1])
      : Object(__WEBPACK_IMPORTED_MODULE_0__baseMatches_js__["a" /* default */])(value);
  }
  return Object(__WEBPACK_IMPORTED_MODULE_4__property_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseIteratee);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsMatch_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getMatchData_js__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchesStrictComparable_js__ = __webpack_require__(44);




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = Object(__WEBPACK_IMPORTED_MODULE_1__getMatchData_js__["a" /* default */])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__matchesStrictComparable_js__["a" /* default */])(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || Object(__WEBPACK_IMPORTED_MODULE_0__baseIsMatch_js__["a" /* default */])(object, source, matchData);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (baseMatches);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stack_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseIsEqual_js__ = __webpack_require__(41);



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
      var stack = new __WEBPACK_IMPORTED_MODULE_0__Stack_js__["a" /* default */];
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? Object(__WEBPACK_IMPORTED_MODULE_1__baseIsEqual_js__["a" /* default */])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsMatch);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (listCacheClear);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__ = __webpack_require__(14);


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
      index = Object(__WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__["a" /* default */])(data, key);

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

/* harmony default export */ __webpack_exports__["a"] = (listCacheDelete);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__ = __webpack_require__(14);


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
      index = Object(__WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__["a" /* default */])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["a"] = (listCacheGet);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__ = __webpack_require__(14);


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
  return Object(__WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__["a" /* default */])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["a"] = (listCacheHas);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__ = __webpack_require__(14);


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
      index = Object(__WEBPACK_IMPORTED_MODULE_0__assocIndexOf_js__["a" /* default */])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["a"] = (listCacheSet);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListCache_js__ = __webpack_require__(13);


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new __WEBPACK_IMPORTED_MODULE_0__ListCache_js__["a" /* default */];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["a"] = (stackClear);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stackDelete);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stackGet);


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stackHas);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListCache_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MapCache_js__ = __webpack_require__(21);




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
  if (data instanceof __WEBPACK_IMPORTED_MODULE_0__ListCache_js__["a" /* default */]) {
    var pairs = data.__data__;
    if (!__WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new __WEBPACK_IMPORTED_MODULE_2__MapCache_js__["a" /* default */](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ __webpack_exports__["a"] = (stackSet);


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hash_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListCache_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Map_js__ = __webpack_require__(20);




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
    'hash': new __WEBPACK_IMPORTED_MODULE_0__Hash_js__["a" /* default */],
    'map': new (__WEBPACK_IMPORTED_MODULE_2__Map_js__["a" /* default */] || __WEBPACK_IMPORTED_MODULE_1__ListCache_js__["a" /* default */]),
    'string': new __WEBPACK_IMPORTED_MODULE_0__Hash_js__["a" /* default */]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (mapCacheClear);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hashClear_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hashDelete_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hashGet_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hashHas_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hashSet_js__ = __webpack_require__(122);






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
Hash.prototype.clear = __WEBPACK_IMPORTED_MODULE_0__hashClear_js__["a" /* default */];
Hash.prototype['delete'] = __WEBPACK_IMPORTED_MODULE_1__hashDelete_js__["a" /* default */];
Hash.prototype.get = __WEBPACK_IMPORTED_MODULE_2__hashGet_js__["a" /* default */];
Hash.prototype.has = __WEBPACK_IMPORTED_MODULE_3__hashHas_js__["a" /* default */];
Hash.prototype.set = __WEBPACK_IMPORTED_MODULE_4__hashSet_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (Hash);


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__ = __webpack_require__(15);


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__["a" /* default */] ? Object(__WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__["a" /* default */])(null) : {};
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["a"] = (hashClear);


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (hashDelete);


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__ = __webpack_require__(15);


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
  if (__WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__["a" /* default */]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (hashGet);


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__ = __webpack_require__(15);


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
  return __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__["a" /* default */] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["a"] = (hashHas);


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__ = __webpack_require__(15);


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
  data[key] = (__WEBPACK_IMPORTED_MODULE_0__nativeCreate_js__["a" /* default */] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["a"] = (hashSet);


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapData_js__ = __webpack_require__(16);


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
  var result = Object(__WEBPACK_IMPORTED_MODULE_0__getMapData_js__["a" /* default */])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (mapCacheDelete);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isKeyable);


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapData_js__ = __webpack_require__(16);


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
  return Object(__WEBPACK_IMPORTED_MODULE_0__getMapData_js__["a" /* default */])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["a"] = (mapCacheGet);


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapData_js__ = __webpack_require__(16);


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
  return Object(__WEBPACK_IMPORTED_MODULE_0__getMapData_js__["a" /* default */])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["a"] = (mapCacheHas);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapData_js__ = __webpack_require__(16);


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
  var data = Object(__WEBPACK_IMPORTED_MODULE_0__getMapData_js__["a" /* default */])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ __webpack_exports__["a"] = (mapCacheSet);


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Stack_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalArrays_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equalByTag_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equalObjects_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getTag_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isBuffer_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__ = __webpack_require__(38);









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
  var objIsArr = Object(__WEBPACK_IMPORTED_MODULE_5__isArray_js__["a" /* default */])(object),
      othIsArr = Object(__WEBPACK_IMPORTED_MODULE_5__isArray_js__["a" /* default */])(other),
      objTag = objIsArr ? arrayTag : Object(__WEBPACK_IMPORTED_MODULE_4__getTag_js__["a" /* default */])(object),
      othTag = othIsArr ? arrayTag : Object(__WEBPACK_IMPORTED_MODULE_4__getTag_js__["a" /* default */])(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(__WEBPACK_IMPORTED_MODULE_6__isBuffer_js__["a" /* default */])(object)) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__isBuffer_js__["a" /* default */])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new __WEBPACK_IMPORTED_MODULE_0__Stack_js__["a" /* default */]);
    return (objIsArr || Object(__WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__["a" /* default */])(object))
      ? Object(__WEBPACK_IMPORTED_MODULE_1__equalArrays_js__["a" /* default */])(object, other, bitmask, customizer, equalFunc, stack)
      : Object(__WEBPACK_IMPORTED_MODULE_2__equalByTag_js__["a" /* default */])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new __WEBPACK_IMPORTED_MODULE_0__Stack_js__["a" /* default */]);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new __WEBPACK_IMPORTED_MODULE_0__Stack_js__["a" /* default */]);
  return Object(__WEBPACK_IMPORTED_MODULE_3__equalObjects_js__["a" /* default */])(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsEqualDeep);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MapCache_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setCacheAdd_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setCacheHas_js__ = __webpack_require__(131);




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

  this.__data__ = new __WEBPACK_IMPORTED_MODULE_0__MapCache_js__["a" /* default */];
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = __WEBPACK_IMPORTED_MODULE_1__setCacheAdd_js__["a" /* default */];
SetCache.prototype.has = __WEBPACK_IMPORTED_MODULE_2__setCacheHas_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (SetCache);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (setCacheAdd);


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (setCacheHas);


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (arraySome);


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (cacheHas);


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Uint8Array_js__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eq_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equalArrays_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapToArray_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setToArray_js__ = __webpack_require__(137);







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
var symbolProto = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].prototype : undefined,
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
          !equalFunc(new __WEBPACK_IMPORTED_MODULE_1__Uint8Array_js__["a" /* default */](object), new __WEBPACK_IMPORTED_MODULE_1__Uint8Array_js__["a" /* default */](other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return Object(__WEBPACK_IMPORTED_MODULE_2__eq_js__["a" /* default */])(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = __WEBPACK_IMPORTED_MODULE_4__mapToArray_js__["a" /* default */];

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = __WEBPACK_IMPORTED_MODULE_5__setToArray_js__["a" /* default */]);

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
      var result = Object(__WEBPACK_IMPORTED_MODULE_3__equalArrays_js__["a" /* default */])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (equalByTag);


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(2);


/** Built-in value references. */
var Uint8Array = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Uint8Array;

/* harmony default export */ __webpack_exports__["a"] = (Uint8Array);


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (mapToArray);


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (setToArray);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getAllKeys_js__ = __webpack_require__(139);


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
      objProps = Object(__WEBPACK_IMPORTED_MODULE_0__getAllKeys_js__["a" /* default */])(object),
      objLength = objProps.length,
      othProps = Object(__WEBPACK_IMPORTED_MODULE_0__getAllKeys_js__["a" /* default */])(other),
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

/* harmony default export */ __webpack_exports__["a"] = (equalObjects);


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetAllKeys_js__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getSymbols_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(18);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__baseGetAllKeys_js__["a" /* default */])(object, __WEBPACK_IMPORTED_MODULE_2__keys_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__getSymbols_js__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (getAllKeys);


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayPush_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(3);



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
  return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a" /* default */])(object) ? result : Object(__WEBPACK_IMPORTED_MODULE_0__arrayPush_js__["a" /* default */])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetAllKeys);


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (arrayPush);


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayFilter_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubArray_js__ = __webpack_require__(144);



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
var getSymbols = !nativeGetSymbols ? __WEBPACK_IMPORTED_MODULE_1__stubArray_js__["a" /* default */] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return Object(__WEBPACK_IMPORTED_MODULE_0__arrayFilter_js__["a" /* default */])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getSymbols);


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (arrayFilter);


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stubArray);


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataView_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Set_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toSource_js__ = __webpack_require__(33);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */]),
    mapCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */]),
    promiseCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */]),
    setCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */]),
    weakMapCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__["a" /* default */];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((__WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */](new ArrayBuffer(1))) != dataViewTag) ||
    (__WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */]) != mapTag) ||
    (__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */] && getTag(__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */].resolve()) != promiseTag) ||
    (__WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */]) != setTag) ||
    (__WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */]) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__["a" /* default */])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(Ctor) : '';

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

/* harmony default export */ __webpack_exports__["a"] = (getTag);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(2);



/* Built-in method references that are verified to be native. */
var DataView = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["a" /* default */], 'DataView');

/* harmony default export */ __webpack_exports__["a"] = (DataView);


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(2);



/* Built-in method references that are verified to be native. */
var Promise = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["a" /* default */], 'Promise');

/* harmony default export */ __webpack_exports__["a"] = (Promise);


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(2);



/* Built-in method references that are verified to be native. */
var Set = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["a" /* default */], 'Set');

/* harmony default export */ __webpack_exports__["a"] = (Set);


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(2);



/* Built-in method references that are verified to be native. */
var WeakMap = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["a" /* default */], 'WeakMap');

/* harmony default export */ __webpack_exports__["a"] = (WeakMap);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isStrictComparable_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(18);



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, Object(__WEBPACK_IMPORTED_MODULE_0__isStrictComparable_js__["a" /* default */])(value)];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getMatchData);


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsEqual_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_js__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hasIn_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isKey_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isStrictComparable_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matchesStrictComparable_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toKey_js__ = __webpack_require__(17);








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
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isKey_js__["a" /* default */])(path) && Object(__WEBPACK_IMPORTED_MODULE_4__isStrictComparable_js__["a" /* default */])(srcValue)) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__matchesStrictComparable_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__toKey_js__["a" /* default */])(path), srcValue);
  }
  return function(object) {
    var objValue = Object(__WEBPACK_IMPORTED_MODULE_1__get_js__["a" /* default */])(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? Object(__WEBPACK_IMPORTED_MODULE_2__hasIn_js__["a" /* default */])(object, path)
      : Object(__WEBPACK_IMPORTED_MODULE_0__baseIsEqual_js__["a" /* default */])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (baseMatchesProperty);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGet_js__ = __webpack_require__(45);


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
  var result = object == null ? undefined : Object(__WEBPACK_IMPORTED_MODULE_0__baseGet_js__["a" /* default */])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ __webpack_exports__["a"] = (get);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoizeCapped_js__ = __webpack_require__(154);


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
var stringToPath = Object(__WEBPACK_IMPORTED_MODULE_0__memoizeCapped_js__["a" /* default */])(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ __webpack_exports__["a"] = (stringToPath);


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoize_js__ = __webpack_require__(155);


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
  var result = Object(__WEBPACK_IMPORTED_MODULE_0__memoize_js__["a" /* default */])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (memoizeCapped);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MapCache_js__ = __webpack_require__(21);


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
  memoized.cache = new (memoize.Cache || __WEBPACK_IMPORTED_MODULE_0__MapCache_js__["a" /* default */]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = __WEBPACK_IMPORTED_MODULE_0__MapCache_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (memoize);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseToString_js__ = __webpack_require__(157);


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
  return value == null ? '' : Object(__WEBPACK_IMPORTED_MODULE_0__baseToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (toString);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrayMap_js__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isSymbol_js__ = __webpack_require__(10);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].prototype : undefined,
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
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(__WEBPACK_IMPORTED_MODULE_1__arrayMap_js__["a" /* default */])(value, baseToString) + '';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isSymbol_js__["a" /* default */])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseToString);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (arrayMap);


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseHasIn_js__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hasPath_js__ = __webpack_require__(161);



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
  return object != null && Object(__WEBPACK_IMPORTED_MODULE_1__hasPath_js__["a" /* default */])(object, path, __WEBPACK_IMPORTED_MODULE_0__baseHasIn_js__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (hasIn);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (baseHasIn);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__castPath_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArguments_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isIndex_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isLength_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toKey_js__ = __webpack_require__(17);







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
  path = Object(__WEBPACK_IMPORTED_MODULE_0__castPath_js__["a" /* default */])(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = Object(__WEBPACK_IMPORTED_MODULE_5__toKey_js__["a" /* default */])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && Object(__WEBPACK_IMPORTED_MODULE_4__isLength_js__["a" /* default */])(length) && Object(__WEBPACK_IMPORTED_MODULE_3__isIndex_js__["a" /* default */])(key, length) &&
    (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(object) || Object(__WEBPACK_IMPORTED_MODULE_1__isArguments_js__["a" /* default */])(object));
}

/* harmony default export */ __webpack_exports__["a"] = (hasPath);


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (identity);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseProperty_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basePropertyDeep_js__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isKey_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toKey_js__ = __webpack_require__(17);





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
  return Object(__WEBPACK_IMPORTED_MODULE_2__isKey_js__["a" /* default */])(path) ? Object(__WEBPACK_IMPORTED_MODULE_0__baseProperty_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__toKey_js__["a" /* default */])(path)) : Object(__WEBPACK_IMPORTED_MODULE_1__basePropertyDeep_js__["a" /* default */])(path);
}

/* harmony default export */ __webpack_exports__["a"] = (property);


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (baseProperty);


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGet_js__ = __webpack_require__(45);


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__baseGet_js__["a" /* default */])(object, path);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (basePropertyDeep);


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_component__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var labelText = 'Advertisement';

var AdvertisementLabel = function (_UiComponent) {
	_inherits(AdvertisementLabel, _UiComponent);

	function AdvertisementLabel() {
		_classCallCheck(this, AdvertisementLabel);

		return _possibleConstructorReturn(this, (AdvertisementLabel.__proto__ || Object.getPrototypeOf(AdvertisementLabel)).apply(this, arguments));
	}

	_createClass(AdvertisementLabel, [{
		key: 'render',
		value: function render() {
			var label = document.createElement('div');

			label.innerText = labelText;
			label.className = 'advertisement-label';

			return label;
		}
	}]);

	return AdvertisementLabel;
}(__WEBPACK_IMPORTED_MODULE_0__ui_component__["a" /* default */]);



/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CloseButton = function (_UiComponent) {
	_inherits(CloseButton, _UiComponent);

	function CloseButton() {
		_classCallCheck(this, CloseButton);

		return _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).apply(this, arguments));
	}

	_createClass(CloseButton, [{
		key: 'render',
		value: function render() {
			var onClick = this.props.onClick;

			var classNames = this.classNames;
			var button = new __WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */]({ onClick: onClick, classNames: classNames }).render();
			var closeIcon = Object(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* createIcon */])(__WEBPACK_IMPORTED_MODULE_2__icons__["b" /* icons */].CROSS, ['icon']);

			button.appendChild(closeIcon);

			return button;
		}
	}, {
		key: 'classNames',
		get: function get() {
			return ['button-close'].concat(_toConsumableArray(_get(CloseButton.prototype.__proto__ || Object.getPrototypeOf(CloseButton.prototype), 'classNames', this)));
		}
	}]);

	return CloseButton;
}(__WEBPACK_IMPORTED_MODULE_1__ui_component__["a" /* default */]);



/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_component__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Button = function (_UiComponent) {
	_inherits(Button, _UiComponent);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	}

	_createClass(Button, [{
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
			return ['button-control'].concat(_toConsumableArray(_get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'classNames', this)));
		}
	}]);

	return Button;
}(__WEBPACK_IMPORTED_MODULE_0__ui_component__["a" /* default */]);



/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyBfaa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_decorators__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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





var StickyBfaa = (_class = function (_EventEmitter) {
	_inherits(StickyBfaa, _EventEmitter);

	// time after which we'll remove stickiness even with no user interaction
	function StickyBfaa(adSlot) {
		var stickyUntilVideoViewed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		_classCallCheck(this, StickyBfaa);

		var _this = _possibleConstructorReturn(this, (StickyBfaa.__proto__ || Object.getPrototypeOf(StickyBfaa)).call(this));

		_this.adSlot = adSlot;
		_this.stickyUntilVideoViewed = stickyUntilVideoViewed;
		_this.sticky = false;
		_this.logger = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["utils"].logger.apply(__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["utils"], [StickyBfaa.LOG_GROUP].concat(args));
		};
		return _this;
	}

	_createClass(StickyBfaa, [{
		key: 'run',
		value: function run() {
			var _this2 = this;

			__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["slotTweaker"].onReady(this.adSlot).then(function () {
				if (document.hidden) {
					window.addEventListener('visibilitychange', function () {
						return _this2.onAdReady();
					}, { once: true });
				} else {
					_this2.onAdReady();
				}
			});
		}
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
		key: 'onViewed',
		value: function onViewed() {
			var _this3 = this;

			var revertTimeout = null;
			var adContainer = this.adSlot.getElement();
			var shouldRevertImmediately = Math.abs(window.scrollY - adContainer.offsetTop) < adContainer.offsetHeight / 2;
			var onRevertTimeout = function onRevertTimeout() {
				clearTimeout(revertTimeout);
				document.removeEventListener('scroll', onRevertTimeout);
				_this3.revertStickiness();
			};

			this.adSlot.removeListener(__WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["AdSlot"].SLOT_VIEWED_EVENT, this.onViewed);
			setTimeout(function () {
				document.addEventListener('scroll', onRevertTimeout);
				revertTimeout = setTimeout(onRevertTimeout, shouldRevertImmediately ? 0 : StickyBfaa.STICKINESS_REMOVAL_WINDOW);
			}, StickyBfaa.STICKINESS_ADDITIONAL_TIME);

			this.logger('slotViewed triggered on ' + this.adSlot.getSlotName());
		}
	}, {
		key: 'onAdReady',
		value: function onAdReady() {
			this.applyStickiness();
			this.adSlot.once(this.stickyUntilVideoViewed ? __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["AdSlot"].VIDEO_VIEWED_EVENT : __WEBPACK_IMPORTED_MODULE_2__wikia_ad_engine__["AdSlot"].SLOT_VIEWED_EVENT, this.onViewed);
		}
	}]);

	return StickyBfaa;
}(__WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"]), (_applyDecoratedDescriptor(_class.prototype, 'onViewed', [__WEBPACK_IMPORTED_MODULE_1_core_decorators__["a" /* autobind */]], Object.getOwnPropertyDescriptor(_class.prototype, 'onViewed'), _class.prototype)), _class);
StickyBfaa.STICKINESS_REMOVAL_WINDOW = 10000;
StickyBfaa.STICKINESS_ADDITIONAL_TIME = 3000;
StickyBfaa.LOG_GROUP = 'sticky-bfaa';
StickyBfaa.STICKINESS_CHANGE_EVENT = Symbol('stickinessChange');

/***/ }),
/* 170 */
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
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__override__ = __webpack_require__(172);
/* unused harmony reexport override */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecate__ = __webpack_require__(173);
/* unused harmony reexport deprecate */
/* unused harmony reexport deprecated */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suppress_warnings__ = __webpack_require__(174);
/* unused harmony reexport suppressWarnings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memoize__ = __webpack_require__(175);
/* unused harmony reexport memoize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autobind__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__autobind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__readonly__ = __webpack_require__(177);
/* unused harmony reexport readonly */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enumerable__ = __webpack_require__(178);
/* unused harmony reexport enumerable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nonenumerable__ = __webpack_require__(179);
/* unused harmony reexport nonenumerable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nonconfigurable__ = __webpack_require__(180);
/* unused harmony reexport nonconfigurable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__debounce__ = __webpack_require__(181);
/* unused harmony reexport debounce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__throttle__ = __webpack_require__(182);
/* unused harmony reexport throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__decorate__ = __webpack_require__(183);
/* unused harmony reexport decorate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mixin__ = __webpack_require__(184);
/* unused harmony reexport mixin */
/* unused harmony reexport mixins */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lazy_initialize__ = __webpack_require__(47);
/* unused harmony reexport lazyInitialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__time__ = __webpack_require__(185);
/* unused harmony reexport time */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__extendDescriptor__ = __webpack_require__(186);
/* unused harmony reexport extendDescriptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile__ = __webpack_require__(187);
/* unused harmony reexport profile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applyDecorators__ = __webpack_require__(188);
/* unused harmony reexport applyDecorators */
/**
 * core-decorators.js
 * (c) 2017 Jay Phelps and contributors
 * MIT Licensed
 * https://github.com/jayphelps/core-decorators.js
 * @license
 */


















// Helper to apply decorators to a class without transpiler support


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GENERIC_FUNCTION_ERROR = '{child} does not properly override {parent}';
var FUNCTION_REGEXP = /^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/;

var SyntaxErrorReporter = function () {
  _createClass(SyntaxErrorReporter, [{
    key: '_getTopic',
    value: function _getTopic(descriptor) {
      if (descriptor === undefined) {
        return null;
      }

      if ('value' in descriptor) {
        return descriptor.value;
      }

      if ('get' in descriptor) {
        return descriptor.get;
      }

      if ('set' in descriptor) {
        return descriptor.set;
      }
    }
  }, {
    key: '_extractTopicSignature',
    value: function _extractTopicSignature(topic) {
      switch (typeof topic === 'undefined' ? 'undefined' : _typeof(topic)) {
        case 'function':
          return this._extractFunctionSignature(topic);
        default:
          return this.key;
      }
    }
  }, {
    key: '_extractFunctionSignature',
    value: function _extractFunctionSignature(fn) {
      var _this = this;

      return fn.toString().replace(FUNCTION_REGEXP, function (match) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.key;
        var params = arguments[2];
        return name + params;
      });
    }
  }, {
    key: 'key',
    get: function get() {
      return this.childDescriptor.key;
    }
  }, {
    key: 'parentNotation',
    get: function get() {
      return this.parentKlass.constructor.name + '#' + this.parentPropertySignature;
    }
  }, {
    key: 'childNotation',
    get: function get() {
      return this.childKlass.constructor.name + '#' + this.childPropertySignature;
    }
  }, {
    key: 'parentTopic',
    get: function get() {
      return this._getTopic(this.parentDescriptor);
    }
  }, {
    key: 'childTopic',
    get: function get() {
      return this._getTopic(this.childDescriptor);
    }
  }, {
    key: 'parentPropertySignature',
    get: function get() {
      return this._extractTopicSignature(this.parentTopic);
    }
  }, {
    key: 'childPropertySignature',
    get: function get() {
      return this._extractTopicSignature(this.childTopic);
    }
  }]);

  function SyntaxErrorReporter(parentKlass, childKlass, parentDescriptor, childDescriptor) {
    _classCallCheck(this, SyntaxErrorReporter);

    this.parentKlass = parentKlass;
    this.childKlass = childKlass;
    this.parentDescriptor = parentDescriptor;
    this.childDescriptor = childDescriptor;
  }

  _createClass(SyntaxErrorReporter, [{
    key: 'assert',
    value: function assert(condition) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (condition !== true) {
        this.error(GENERIC_FUNCTION_ERROR + msg);
      }
    }
  }, {
    key: 'error',
    value: function error(msg) {
      var _this2 = this;

      msg = msg
      // Replace lazily, because they actually might not
      // be available in all cases
      .replace('{parent}', function (m) {
        return _this2.parentNotation;
      }).replace('{child}', function (m) {
        return _this2.childNotation;
      });
      throw new SyntaxError(msg);
    }
  }]);

  return SyntaxErrorReporter;
}();

function getDescriptorType(descriptor) {
  if (descriptor.hasOwnProperty('value')) {
    return 'data';
  }

  if (descriptor.hasOwnProperty('get') || descriptor.hasOwnProperty('set')) {
    return 'accessor';
  }

  // If none of them exist, browsers treat it as
  // a data descriptor with a value of `undefined`
  return 'data';
}

function checkFunctionSignatures(parent, child, reporter) {
  reporter.assert(parent.length === child.length);
}

function checkDataDescriptors(parent, child, reporter) {
  var parentValueType = _typeof(parent.value);
  var childValueType = _typeof(child.value);

  if (parentValueType === 'undefined' && childValueType === 'undefined') {
    // class properties can be any expression, which isn't ran until the
    // the instance is created, so we can't reliably get type information
    // for them yet (per spec). Perhaps when Babel includes flow-type info
    // in runtime? Tried regex solutions, but super hacky and only feasible
    // on primitives, which is confusing for usage...
    reporter.error('descriptor values are both undefined. (class properties are are not currently supported)\'');
  }

  if (parentValueType !== childValueType) {
    var isFunctionOverUndefined = childValueType === 'function' && parentValueType === undefined;
    // Even though we don't support class properties, this
    // will still handle more than just functions, just in case.
    // Shadowing an undefined value is an error if the inherited
    // value was undefined (usually a class property, not a method)
    if (isFunctionOverUndefined || parentValueType !== undefined) {
      reporter.error('value types do not match. {parent} is "' + parentValueType + '", {child} is "' + childValueType + '"');
    }
  }

  // Switch, in preparation for supporting more types
  switch (childValueType) {
    case 'function':
      checkFunctionSignatures(parent.value, child.value, reporter);
      break;

    default:
      reporter.error('Unexpected error. Please file a bug with: {parent} is "' + parentValueType + '", {child} is "' + childValueType + '"');
      break;
  }
}

function checkAccessorDescriptors(parent, child, reporter) {
  var parentHasGetter = typeof parent.get === 'function';
  var childHasGetter = typeof child.get === 'function';
  var parentHasSetter = typeof parent.set === 'function';
  var childHasSetter = typeof child.set === 'function';

  if (parentHasGetter || childHasGetter) {
    if (!parentHasGetter && parentHasSetter) {
      reporter.error('{parent} is setter but {child} is getter');
    }

    if (!childHasGetter && childHasSetter) {
      reporter.error('{parent} is getter but {child} is setter');
    }

    checkFunctionSignatures(parent.get, child.get, reporter);
  }

  if (parentHasSetter || childHasSetter) {
    if (!parentHasSetter && parentHasGetter) {
      reporter.error('{parent} is getter but {child} is setter');
    }

    if (!childHasSetter && childHasGetter) {
      reporter.error('{parent} is setter but {child} is getter');
    }

    checkFunctionSignatures(parent.set, child.set, reporter);
  }
}

function checkDescriptors(parent, child, reporter) {
  var parentType = getDescriptorType(parent);
  var childType = getDescriptorType(child);

  if (parentType !== childType) {
    reporter.error('descriptor types do not match. {parent} is "' + parentType + '", {child} is "' + childType + '"');
  }

  switch (childType) {
    case 'data':
      checkDataDescriptors(parent, child, reporter);
      break;

    case 'accessor':
      checkAccessorDescriptors(parent, child, reporter);
      break;
  }
}

var suggestionTransforms = [function (key) {
  return key.toLowerCase();
}, function (key) {
  return key.toUpperCase();
}, function (key) {
  return key + 's';
}, function (key) {
  return key.slice(0, -1);
}, function (key) {
  return key.slice(1, key.length);
}];

function findPossibleAlternatives(superKlass, key) {
  for (var i = 0, l = suggestionTransforms.length; i < l; i++) {
    var fn = suggestionTransforms[i];
    var suggestion = fn(key);

    if (suggestion in superKlass) {
      return suggestion;
    }
  }

  return null;
}

function handleDescriptor(target, key, descriptor) {
  descriptor.key = key;
  var superKlass = Object.getPrototypeOf(target);
  var superDescriptor = Object.getOwnPropertyDescriptor(superKlass, key);
  var reporter = new SyntaxErrorReporter(superKlass, target, superDescriptor, descriptor);

  if (superDescriptor === undefined) {
    var suggestedKey = findPossibleAlternatives(superKlass, key);
    var suggestion = suggestedKey ? '\n\n  Did you mean "' + suggestedKey + '"?' : '';
    reporter.error('No descriptor matching {child} was found on the prototype chain.' + suggestion);
  }

  checkDescriptors(superDescriptor, descriptor, reporter);

  return descriptor;
}

function override() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var DEFAULT_MSG = 'This function will be removed in future versions.';

function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      msg = _ref2$ === undefined ? DEFAULT_MSG : _ref2$,
      _ref2$2 = _ref2[1],
      options = _ref2$2 === undefined ? {} : _ref2$2;

  if (typeof descriptor.value !== 'function') {
    throw new SyntaxError('Only functions can be marked as deprecated');
  }

  var methodSignature = target.constructor.name + '#' + key;

  if (options.url) {
    msg += '\n\n    See ' + options.url + ' for more details.\n\n';
  }

  return _extends({}, descriptor, {
    value: function deprecationWrapper() {
      Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["h" /* warn */])('DEPRECATION ' + methodSignature + ': ' + msg);
      return descriptor.value.apply(this, arguments);
    }
  });
}

function deprecate() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function suppressedWarningNoop() {
  // Warnings are currently suppressed via @suppressWarnings
}

function applyWithoutWarnings(context, fn, args) {
  if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object') {
    var nativeWarn = console.warn;
    console.warn = suppressedWarningNoop;
    var ret = fn.apply(context, args);
    console.warn = nativeWarn;
    return ret;
  } else {
    return fn.apply(context, args);
  }
}

function handleDescriptor(target, key, descriptor) {
  return _extends({}, descriptor, {
    value: function suppressWarningsWrapper() {
      return applyWithoutWarnings(this, descriptor.value, arguments);
    }
  });
}

function suppressWarnings() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function toObject(cache, value) {
  if (value === Object(value)) {
    return value;
  }
  return cache[value] || (cache[value] = {});
}

function applyAndCache(context, fn, args, cache, signature) {
  var ret = fn.apply(context, args);
  cache[signature] = ret;
  return ret;
}

function metaForDescriptor(descriptor) {
  var fn = void 0,
      wrapKey = void 0;

  // This is ugly code, but way faster than other
  // ways I tried that *looked* pretty

  if (descriptor.value) {
    fn = descriptor.value;
    wrapKey = 'value';
  } else if (descriptor.get) {
    fn = descriptor.get;
    wrapKey = 'get';
  } else if (descriptor.set) {
    fn = descriptor.set;
    wrapKey = 'set';
  }

  return { fn: fn, wrapKey: wrapKey };
}

function handleDescriptor(target, key, descriptor) {
  var _metaForDescriptor = metaForDescriptor(descriptor),
      fn = _metaForDescriptor.fn,
      wrapKey = _metaForDescriptor.wrapKey;

  var argumentCache = new WeakMap();
  var signatureCache = Object.create(null);
  var primativeRefCache = Object.create(null);
  var argumentIdCounter = 0;

  return _extends({}, descriptor, _defineProperty({}, wrapKey, function memoizeWrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var signature = '0';

    for (var i = 0, l = args.length; i < l; i++) {
      var arg = args[i];
      var argRef = toObject(primativeRefCache, arg);
      var argKey = argumentCache.get(argRef);

      if (argKey === undefined) {
        argKey = ++argumentIdCounter;
        argumentCache.set(argRef, argKey);
      }

      signature += argKey;
    }

    return signatureCache[signature] || applyAndCache(this, fn, arguments, signatureCache, signature);
  }));
}

function memoize() {
  Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["f" /* internalDeprecation */])('@memoize is deprecated and will be removed shortly. Use @memoize from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators');

  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autobind;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var defineProperty = Object.defineProperty,
    getPrototypeOf = Object.getPrototypeOf;


var mapStore = void 0;

function getBoundSuper(obj, fn) {
  if (typeof WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()\n      See https://github.com/jayphelps/core-decorators.js/issues/20');
  }

  if (!mapStore) {
    mapStore = new WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new WeakMap());
  }

  var superStore = mapStore.get(obj);

  if (superStore.has(fn) === false) {
    superStore.set(fn, Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(fn, obj));
  }

  return superStore.get(fn);
}

function autobindClass(klass) {
  var descs = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["e" /* getOwnPropertyDescriptors */])(klass.prototype);
  var keys = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["d" /* getOwnKeys */])(descs);

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    var desc = descs[key];

    if (typeof desc.value !== 'function' || key === 'constructor') {
      continue;
    }

    defineProperty(klass.prototype, key, autobindMethod(klass.prototype, key, desc));
  }
}

function autobindMethod(target, key, _ref) {
  var fn = _ref.value,
      configurable = _ref.configurable,
      enumerable = _ref.enumerable;

  if (typeof fn !== 'function') {
    throw new SyntaxError('@autobind can only be used on functions, not: ' + fn);
  }

  var constructor = target.constructor;


  return {
    configurable: configurable,
    enumerable: enumerable,

    get: function get() {
      // Class.prototype.key lookup
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === target) {
        return fn;
      }

      // Class.prototype.key lookup
      // Someone accesses the property directly on a prototype but it was found
      // up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && key in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }

      var boundFn = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(fn, this);

      defineProperty(this, key, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["b" /* createDefaultSetter */])(key)
  };
}

function handle(args) {
  if (args.length === 1) {
    return autobindClass.apply(undefined, _toConsumableArray(args));
  } else {
    return autobindMethod.apply(undefined, _toConsumableArray(args));
  }
}

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return function () {
      return handle(arguments);
    };
  } else {
    return handle(args);
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);


function handleDescriptor(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function readonly() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);


function handleDescriptor(target, key, descriptor) {
  descriptor.enumerable = true;
  return descriptor;
}

function enumerable() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);


function handleDescriptor(target, key, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

function nonenumerable() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);


function handleDescriptor(target, key, descriptor) {
  descriptor.configurable = false;
  return descriptor;
}

function nonconfigurable() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var DEFAULT_TIMEOUT = 300;

function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      wait = _ref2$ === undefined ? DEFAULT_TIMEOUT : _ref2$,
      _ref2$2 = _ref2[1],
      immediate = _ref2$2 === undefined ? false : _ref2$2;

  var callback = descriptor.value;

  if (typeof callback !== 'function') {
    throw new SyntaxError('Only functions can be debounced');
  }

  return _extends({}, descriptor, {
    value: function value() {
      var _this = this;

      var _metaFor = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["g" /* metaFor */])(this),
          debounceTimeoutIds = _metaFor.debounceTimeoutIds;

      var timeout = debounceTimeoutIds[key];
      var callNow = immediate && !timeout;
      var args = arguments;

      clearTimeout(timeout);

      debounceTimeoutIds[key] = setTimeout(function () {
        delete debounceTimeoutIds[key];
        if (!immediate) {
          callback.apply(_this, args);
        }
      }, wait);

      if (callNow) {
        callback.apply(this, args);
      }
    }
  });
}

function debounce() {
  Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["f" /* internalDeprecation */])('@debounce is deprecated and will be removed shortly. Use @debounce from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var DEFAULT_TIMEOUT = 300;

function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      wait = _ref2$ === undefined ? DEFAULT_TIMEOUT : _ref2$,
      _ref2$2 = _ref2[1],
      options = _ref2$2 === undefined ? {} : _ref2$2;

  var callback = descriptor.value;

  if (typeof callback !== 'function') {
    throw new SyntaxError('Only functions can be throttled');
  }

  if (options.leading !== false) {
    options.leading = true;
  }

  if (options.trailing !== false) {
    options.trailing = true;
  }

  return _extends({}, descriptor, {
    value: function value() {
      var _this = this;

      var meta = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["g" /* metaFor */])(this);
      var throttleTimeoutIds = meta.throttleTimeoutIds,
          throttlePreviousTimestamps = meta.throttlePreviousTimestamps;

      var timeout = throttleTimeoutIds[key];
      // last execute timestamp
      var previous = throttlePreviousTimestamps[key] || 0;
      var now = Date.now();

      if (options.trailing) {
        meta.throttleTrailingArgs = arguments;
      }

      // if first be called and disable the execution on the leading edge
      // set last execute timestamp to now
      if (!previous && options.leading === false) {
        previous = now;
      }

      var remaining = wait - (now - previous);

      if (remaining <= 0) {
        clearTimeout(timeout);
        delete throttleTimeoutIds[key];
        throttlePreviousTimestamps[key] = now;
        callback.apply(this, arguments);
      } else if (!timeout && options.trailing) {
        throttleTimeoutIds[key] = setTimeout(function () {
          throttlePreviousTimestamps[key] = options.leading === false ? 0 : Date.now();
          delete throttleTimeoutIds[key];
          callback.apply(_this, meta.throttleTrailingArgs);
          // don't leak memory!
          meta.throttleTrailingArgs = null;
        }, remaining);
      }
    }
  });
}

function throttle() {
  Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["f" /* internalDeprecation */])('@throttle is deprecated and will be removed shortly. Use @throttle from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }


var defineProperty = Object.defineProperty;


function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _toArray(_ref),
      decorator = _ref2[0],
      args = _ref2.slice(1);

  var configurable = descriptor.configurable,
      enumerable = descriptor.enumerable,
      writable = descriptor.writable;

  var originalGet = descriptor.get;
  var originalSet = descriptor.set;
  var originalValue = descriptor.value;
  var isGetter = !!originalGet;

  return {
    configurable: configurable,
    enumerable: enumerable,
    get: function get() {
      var fn = isGetter ? originalGet.call(this) : originalValue;
      var value = decorator.call.apply(decorator, [this, fn].concat(_toConsumableArray(args)));

      if (isGetter) {
        return value;
      } else {
        var desc = {
          configurable: configurable,
          enumerable: enumerable
        };

        desc.value = value;
        desc.writable = writable;

        defineProperty(this, key, desc);

        return value;
      }
    },

    set: isGetter ? originalSet : Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["b" /* createDefaultSetter */])()
  };
}

function decorate() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var defineProperty = Object.defineProperty,
    getPrototypeOf = Object.getPrototypeOf;


function buggySymbol(symbol) {
  return Object.prototype.toString.call(symbol) === '[object Symbol]' && (typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol)) === 'object';
}

function hasProperty(prop, obj) {
  // We have to traverse manually prototypes' chain for polyfilled ES6 Symbols
  // like "in" operator does.
  // I.e.: Babel 5 Symbol polyfill stores every created symbol in Object.prototype.
  // That's why we cannot use construction like "prop in obj" to check, if needed
  // prop actually exists in given object/prototypes' chain.
  if (buggySymbol(prop)) {
    do {
      if (obj === Object.prototype) {
        // Polyfill assigns undefined as value for stored symbol key.
        // We can assume in this special case if there is nothing assigned it doesn't exist.
        return typeof obj[prop] !== 'undefined';
      }
      if (obj.hasOwnProperty(prop)) {
        return true;
      }
    } while (obj = getPrototypeOf(obj));
    return false;
  } else {
    return prop in obj;
  }
}

function handleClass(target, mixins) {
  if (!mixins.length) {
    throw new SyntaxError('@mixin() class ' + target.name + ' requires at least one mixin as an argument');
  }

  for (var i = 0, l = mixins.length; i < l; i++) {
    var descs = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["e" /* getOwnPropertyDescriptors */])(mixins[i]);
    var keys = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["d" /* getOwnKeys */])(descs);

    for (var j = 0, k = keys.length; j < k; j++) {
      var key = keys[j];

      if (!hasProperty(key, target.prototype)) {
        defineProperty(target.prototype, key, descs[key]);
      }
    }
  }
}

function mixin() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["f" /* internalDeprecation */])('@mixin is deprecated and will be removed shortly. Use @mixin from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators');

  if (typeof mixins[0] === 'function') {
    return handleClass(mixins[0], []);
  } else {
    return function (target) {
      return handleClass(target, mixins);
    };
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultConsole */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var labels = {};

// Exported for mocking in tests
var defaultConsole = {
  time: console.time ? console.time.bind(console) : function (label) {
    labels[label] = new Date();
  },
  timeEnd: console.timeEnd ? console.timeEnd.bind(console) : function (label) {
    var timeNow = new Date();
    var timeTaken = timeNow - labels[label];
    delete labels[label];
    console.log(label + ': ' + timeTaken + 'ms');
  }
};

var count = 0;

function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      prefix = _ref2$ === undefined ? null : _ref2$,
      _ref2$2 = _ref2[1],
      console = _ref2$2 === undefined ? defaultConsole : _ref2$2;

  var fn = descriptor.value;

  if (prefix === null) {
    prefix = target.constructor.name + '.' + key;
  }

  if (typeof fn !== 'function') {
    throw new SyntaxError('@time can only be used on functions, not: ' + fn);
  }

  return _extends({}, descriptor, {
    value: function value() {
      var label = prefix + '-' + count;
      count++;
      console.time(label);

      try {
        return fn.apply(this, arguments);
      } finally {
        console.timeEnd(label);
      }
    }
  });
}

function time() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


var getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;


function handleDescriptor(target, key, descriptor) {
  var superKlass = getPrototypeOf(target);
  var superDesc = getOwnPropertyDescriptor(superKlass, key);

  return _extends({}, superDesc, {
    value: descriptor.value,
    initializer: descriptor.initializer,
    get: descriptor.get || superDesc.get,
    set: descriptor.set || superDesc.set
  });
}

function extendDescriptor() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultConsole */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var oc = console;

// Exported for mocking in tests
var defaultConsole = {
  profile: console.profile ? Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(console.profile, console) : function () {},
  profileEnd: console.profileEnd ? Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["a" /* bind */])(console.profileEnd, console) : function () {},
  warn: __WEBPACK_IMPORTED_MODULE_0__private_utils__["h" /* warn */]
};

function handleDescriptor(target, key, descriptor, _ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      _ref2$ = _ref2[0],
      prefix = _ref2$ === undefined ? null : _ref2$,
      _ref2$2 = _ref2[1],
      onceThrottleOrFunction = _ref2$2 === undefined ? false : _ref2$2,
      _ref2$3 = _ref2[2],
      console = _ref2$3 === undefined ? defaultConsole : _ref2$3;

  if (!profile.__enabled) {
    if (!profile.__warned) {
      console.warn('console.profile is not supported. All @profile decorators are disabled.');
      profile.__warned = true;
    }
    return descriptor;
  }

  var fn = descriptor.value;

  if (prefix === null) {
    prefix = target.constructor.name + '.' + key;
  }

  if (typeof fn !== 'function') {
    throw new SyntaxError('@profile can only be used on functions, not: ' + fn);
  }

  return _extends({}, descriptor, {
    value: function value() {
      var now = Date.now();
      var meta = Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["g" /* metaFor */])(this);
      if (onceThrottleOrFunction === true && !meta.profileLastRan || onceThrottleOrFunction === false || typeof onceThrottleOrFunction === 'number' && now - meta.profileLastRan > onceThrottleOrFunction || typeof onceThrottleOrFunction === 'function' && onceThrottleOrFunction.apply(this, arguments)) {
        console.profile(prefix);
        meta.profileLastRan = now;
      }

      try {
        return fn.apply(this, arguments);
      } finally {
        console.profileEnd(prefix);
      }
    }
  });
}

function profile() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__private_utils__["c" /* decorate */])(handleDescriptor, args);
}

// Only Chrome, Firefox, and Edge support profile.
// Exposing properties for testing.
profile.__enabled = !!console.profile;
profile.__warned = false;

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var defineProperty = Object.defineProperty,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;


function applyDecorators(Class, props) {
  var prototype = Class.prototype;


  for (var key in props) {
    var decorators = props[key];

    for (var i = 0, l = decorators.length; i < l; i++) {
      var decorator = decorators[i];

      defineProperty(prototype, key, decorator(prototype, key, getOwnPropertyDescriptor(prototype, key)));
    }
  }

  return Class;
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adIsReady;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);


function adIsReady(_ref) {
	var adSlot = _ref.adSlot,
	    params = _ref.params;

	return __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["slotTweaker"].makeResponsive(adSlot, params.aspectRatio);
}

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigFancyAdBelow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__universal_ad_package__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__themes_classic__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__themes_hivi__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var BigFancyAdBelow = function () {
	_createClass(BigFancyAdBelow, null, [{
		key: 'getName',
		value: function getName() {
			return 'bfab';
		}
	}, {
		key: 'getDefaultConfig',
		value: function getDefaultConfig() {
			return {
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
		_classCallCheck(this, BigFancyAdBelow);

		this.adSlot = adSlot;
		this.config = __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["context"].get('templates.bfab');
		this.container = document.getElementById(this.adSlot.getId());
		this.theme = null;
		this.videoSettings = null;
	}

	/**
  * Initializes the BFAA unit
  */


	_createClass(BigFancyAdBelow, [{
		key: 'init',
		value: function init(params) {
			var _this = this;

			this.params = params;

			if (!this.container) {
				return;
			}

			var uapTheme = this.params.theme === 'hivi' ? __WEBPACK_IMPORTED_MODULE_4__themes_hivi__ : __WEBPACK_IMPORTED_MODULE_3__themes_classic__;

			this.container.classList.add('bfab-template');
			this.videoSettings = new __WEBPACK_IMPORTED_MODULE_2__video_settings__["a" /* VideoSettings */](params);
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
		value: function onAdReady(iframe) {
			var _this2 = this;

			if (__WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].isVideoEnabled(this.params)) {
				__WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__["utils"].defer(__WEBPACK_IMPORTED_MODULE_1__universal_ad_package__["a" /* universalAdPackage */].loadVideoAd, this.videoSettings).then(function (video) {
					_this2.theme.onVideoReady(video);
					return video;
				});
			}

			this.theme.onAdReady(iframe);
		}
	}]);

	return BigFancyAdBelow;
}();

/***/ })
/******/ ])});;
//# sourceMappingURL=ad-products.amd.js.map