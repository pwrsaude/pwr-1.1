(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/vendor/libs/masonry/masonry.js":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/libs/masonry/masonry.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(self, function (__WEBPACK_EXTERNAL_MODULE_jquery__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      var __webpack_modules__ = {
        /***/"./libs/masonry/masonry.js":
        /*!*********************************!*\
          !*** ./libs/masonry/masonry.js ***!
          \*********************************/
        /***/
        function libsMasonryMasonryJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          "use strict";

          eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Masonry\": function() { return /* reexport module object */ masonry_layout_dist_masonry_pkgd__WEBPACK_IMPORTED_MODULE_0__; }\n/* harmony export */ });\n/* harmony import */ var masonry_layout_dist_masonry_pkgd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout/dist/masonry.pkgd */ \"./node_modules/masonry-layout/dist/masonry.pkgd.js\");\n/* harmony import */ var masonry_layout_dist_masonry_pkgd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout_dist_masonry_pkgd__WEBPACK_IMPORTED_MODULE_0__);\n// var Masonry = require('masonry-layout/dist/masonry.pkgd')\n\n// export { Masonry }\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL21hc29ucnkvbWFzb25yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7QUFFNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVhdC8uL2xpYnMvbWFzb25yeS9tYXNvbnJ5LmpzPzE0Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIE1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dC9kaXN0L21hc29ucnkucGtnZCcpXHJcblxyXG4vLyBleHBvcnQgeyBNYXNvbnJ5IH1cclxuXHJcbmltcG9ydCAqIGFzIE1hc29ucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQvZGlzdC9tYXNvbnJ5LnBrZ2QnO1xyXG5cclxuZXhwb3J0IHsgTWFzb25yeSB9O1xyXG4iXSwibmFtZXMiOlsiTWFzb25yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/masonry/masonry.js\n");

          /***/
        },

        /***/"./node_modules/masonry-layout/dist/masonry.pkgd.js":
        /*!**********************************************************!*\
          !*** ./node_modules/masonry-layout/dist/masonry.pkgd.js ***!
          \**********************************************************/
        /***/
        function node_modulesMasonryLayoutDistMasonryPkgdJs(module, exports, __webpack_require__) {
          eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__factory, __WEBPACK_LOCAL_MODULE_2__module;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_4__exports;var __WEBPACK_LOCAL_MODULE_5__array, __WEBPACK_LOCAL_MODULE_5__factory, __WEBPACK_LOCAL_MODULE_5__exports, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_6__exports;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * Masonry PACKAGED v4.2.2\n * Cascading grid layout library\n * https://masonry.desandro.com\n * MIT License\n * by David DeSandro\n */\n\n/**\n * Bridget makes jQuery widgets\n * v2.0.1\n * MIT license\n */\n\n/* jshint browser: true, strict: true, undef: true, unused: true */\n\n( function( window, factory ) {\n  // universal module definition\n  /*jshint strict: false */ /* globals define, module, require */\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"jquery\") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {\n      return factory( window, jQuery );\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n}( window, function factory( window, jQuery ) {\n'use strict';\n\n// ----- utils ----- //\n\nvar arraySlice = Array.prototype.slice;\n\n// helper function for logging errors\n// $.error breaks jQuery chaining\nvar console = window.console;\nvar logError = typeof console == 'undefined' ? function() {} :\n  function( message ) {\n    console.error( message );\n  };\n\n// ----- jQueryBridget ----- //\n\nfunction jQueryBridget( namespace, PluginClass, $ ) {\n  $ = $ || jQuery || window.jQuery;\n  if ( !$ ) {\n    return;\n  }\n\n  // add option method -> $().plugin('option', {...})\n  if ( !PluginClass.prototype.option ) {\n    // option setter\n    PluginClass.prototype.option = function( opts ) {\n      // bail out if not an object\n      if ( !$.isPlainObject( opts ) ){\n        return;\n      }\n      this.options = $.extend( true, this.options, opts );\n    };\n  }\n\n  // make jQuery plugin\n  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {\n    if ( typeof arg0 == 'string' ) {\n      // method call $().plugin( 'methodName', { options } )\n      // shift arguments by 1\n      var args = arraySlice.call( arguments, 1 );\n      return methodCall( this, arg0, args );\n    }\n    // just $().plugin({ options })\n    plainCall( this, arg0 );\n    return this;\n  };\n\n  // $().plugin('methodName')\n  function methodCall( $elems, methodName, args ) {\n    var returnValue;\n    var pluginMethodStr = '$().' + namespace + '(\"' + methodName + '\")';\n\n    $elems.each( function( i, elem ) {\n      // get instance\n      var instance = $.data( elem, namespace );\n      if ( !instance ) {\n        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +\n          pluginMethodStr );\n        return;\n      }\n\n      var method = instance[ methodName ];\n      if ( !method || methodName.charAt(0) == '_' ) {\n        logError( pluginMethodStr + ' is not a valid method' );\n        return;\n      }\n\n      // apply method, get return value\n      var value = method.apply( instance, args );\n      // set return value if value is returned, use only first value\n      returnValue = returnValue === undefined ? value : returnValue;\n    });\n\n    return returnValue !== undefined ? returnValue : $elems;\n  }\n\n  function plainCall( $elems, options ) {\n    $elems.each( function( i, elem ) {\n      var instance = $.data( elem, namespace );\n      if ( instance ) {\n        // set options & init\n        instance.option( options );\n        instance._init();\n      } else {\n        // initialize new instance\n        instance = new PluginClass( elem, options );\n        $.data( elem, namespace, instance );\n      }\n    });\n  }\n\n  updateJQuery( $ );\n\n}\n\n// ----- updateJQuery ----- //\n\n// set $.bridget for v1 backwards compatibility\nfunction updateJQuery( $ ) {\n  if ( !$ || ( $ && $.bridget ) ) {\n    return;\n  }\n  $.bridget = jQueryBridget;\n}\n\nupdateJQuery( jQuery || window.jQuery );\n\n// -----  ----- //\n\nreturn jQueryBridget;\n\n}));\n\n/**\n * EvEmitter v1.1.0\n * Lil' event emitter\n * MIT License\n */\n\n/* jshint unused: true, undef: true, strict: true */\n\n( function( global, factory ) {\n  // universal module definition\n  /* jshint strict: false */ /* globals define, module, window */\n  if ( true ) {\n    // AMD - RequireJS\n    !(__WEBPACK_LOCAL_MODULE_1__factory = (factory), (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_1__module = { id: \"ev-emitter/ev-emitter\", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : __WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__factory));\n  } else {}\n\n}( typeof window != 'undefined' ? window : this, function() {\n\n\n\nfunction EvEmitter() {}\n\nvar proto = EvEmitter.prototype;\n\nproto.on = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // set events hash\n  var events = this._events = this._events || {};\n  // set listeners array\n  var listeners = events[ eventName ] = events[ eventName ] || [];\n  // only add once\n  if ( listeners.indexOf( listener ) == -1 ) {\n    listeners.push( listener );\n  }\n\n  return this;\n};\n\nproto.once = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // add event\n  this.on( eventName, listener );\n  // set once flag\n  // set onceEvents hash\n  var onceEvents = this._onceEvents = this._onceEvents || {};\n  // set onceListeners object\n  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};\n  // set flag\n  onceListeners[ listener ] = true;\n\n  return this;\n};\n\nproto.off = function( eventName, listener ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  var index = listeners.indexOf( listener );\n  if ( index != -1 ) {\n    listeners.splice( index, 1 );\n  }\n\n  return this;\n};\n\nproto.emitEvent = function( eventName, args ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  // copy over to avoid interference if .off() in listener\n  listeners = listeners.slice(0);\n  args = args || [];\n  // once stuff\n  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];\n\n  for ( var i=0; i < listeners.length; i++ ) {\n    var listener = listeners[i]\n    var isOnce = onceListeners && onceListeners[ listener ];\n    if ( isOnce ) {\n      // remove listener\n      // remove before trigger to prevent recursion\n      this.off( eventName, listener );\n      // unset once flag\n      delete onceListeners[ listener ];\n    }\n    // trigger listener\n    listener.apply( this, args );\n  }\n\n  return this;\n};\n\nproto.allOff = function() {\n  delete this._events;\n  delete this._onceEvents;\n};\n\nreturn EvEmitter;\n\n}));\n\n/*!\n * getSize v2.0.3\n * measure size of elements\n * MIT license\n */\n\n/* jshint browser: true, strict: true, undef: true, unused: true */\n/* globals console: false */\n\n( function( window, factory ) {\n  /* jshint strict: false */ /* globals define, module */\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_LOCAL_MODULE_2__factory = (factory), (typeof __WEBPACK_LOCAL_MODULE_2__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_2__module = { id: \"get-size/get-size\", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory.call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module)), (__WEBPACK_LOCAL_MODULE_2__module.loaded = true), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports)) : __WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory));\n  } else {}\n\n})( window, function factory() {\n'use strict';\n\n// -------------------------- helpers -------------------------- //\n\n// get a number from a string, not a percentage\nfunction getStyleSize( value ) {\n  var num = parseFloat( value );\n  // not a percent like '100%', and a number\n  var isValid = value.indexOf('%') == -1 && !isNaN( num );\n  return isValid && num;\n}\n\nfunction noop() {}\n\nvar logError = typeof console == 'undefined' ? noop :\n  function( message ) {\n    console.error( message );\n  };\n\n// -------------------------- measurements -------------------------- //\n\nvar measurements = [\n  'paddingLeft',\n  'paddingRight',\n  'paddingTop',\n  'paddingBottom',\n  'marginLeft',\n  'marginRight',\n  'marginTop',\n  'marginBottom',\n  'borderLeftWidth',\n  'borderRightWidth',\n  'borderTopWidth',\n  'borderBottomWidth'\n];\n\nvar measurementsLength = measurements.length;\n\nfunction getZeroSize() {\n  var size = {\n    width: 0,\n    height: 0,\n    innerWidth: 0,\n    innerHeight: 0,\n    outerWidth: 0,\n    outerHeight: 0\n  };\n  for ( var i=0; i < measurementsLength; i++ ) {\n    var measurement = measurements[i];\n    size[ measurement ] = 0;\n  }\n  return size;\n}\n\n// -------------------------- getStyle -------------------------- //\n\n/**\n * getStyle, get style of element, check for Firefox bug\n * https://bugzilla.mozilla.org/show_bug.cgi?id=548397\n */\nfunction getStyle( elem ) {\n  var style = getComputedStyle( elem );\n  if ( !style ) {\n    logError( 'Style returned ' + style +\n      '. Are you running this code in a hidden iframe on Firefox? ' +\n      'See https://bit.ly/getsizebug1' );\n  }\n  return style;\n}\n\n// -------------------------- setup -------------------------- //\n\nvar isSetup = false;\n\nvar isBoxSizeOuter;\n\n/**\n * setup\n * check isBoxSizerOuter\n * do on first getSize() rather than on page load for Firefox bug\n */\nfunction setup() {\n  // setup once\n  if ( isSetup ) {\n    return;\n  }\n  isSetup = true;\n\n  // -------------------------- box sizing -------------------------- //\n\n  /**\n   * Chrome & Safari measure the outer-width on style.width on border-box elems\n   * IE11 & Firefox<29 measures the inner-width\n   */\n  var div = document.createElement('div');\n  div.style.width = '200px';\n  div.style.padding = '1px 2px 3px 4px';\n  div.style.borderStyle = 'solid';\n  div.style.borderWidth = '1px 2px 3px 4px';\n  div.style.boxSizing = 'border-box';\n\n  var body = document.body || document.documentElement;\n  body.appendChild( div );\n  var style = getStyle( div );\n  // round value for browser zoom. desandro/masonry#928\n  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;\n  getSize.isBoxSizeOuter = isBoxSizeOuter;\n\n  body.removeChild( div );\n}\n\n// -------------------------- getSize -------------------------- //\n\nfunction getSize( elem ) {\n  setup();\n\n  // use querySeletor if elem is string\n  if ( typeof elem == 'string' ) {\n    elem = document.querySelector( elem );\n  }\n\n  // do not proceed on non-objects\n  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {\n    return;\n  }\n\n  var style = getStyle( elem );\n\n  // if hidden, everything is 0\n  if ( style.display == 'none' ) {\n    return getZeroSize();\n  }\n\n  var size = {};\n  size.width = elem.offsetWidth;\n  size.height = elem.offsetHeight;\n\n  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';\n\n  // get all measurements\n  for ( var i=0; i < measurementsLength; i++ ) {\n    var measurement = measurements[i];\n    var value = style[ measurement ];\n    var num = parseFloat( value );\n    // any 'auto', 'medium' value will be 0\n    size[ measurement ] = !isNaN( num ) ? num : 0;\n  }\n\n  var paddingWidth = size.paddingLeft + size.paddingRight;\n  var paddingHeight = size.paddingTop + size.paddingBottom;\n  var marginWidth = size.marginLeft + size.marginRight;\n  var marginHeight = size.marginTop + size.marginBottom;\n  var borderWidth = size.borderLeftWidth + size.borderRightWidth;\n  var borderHeight = size.borderTopWidth + size.borderBottomWidth;\n\n  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;\n\n  // overwrite width and height if we can get it from style\n  var styleWidth = getStyleSize( style.width );\n  if ( styleWidth !== false ) {\n    size.width = styleWidth +\n      // add padding and border unless it's already including it\n      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );\n  }\n\n  var styleHeight = getStyleSize( style.height );\n  if ( styleHeight !== false ) {\n    size.height = styleHeight +\n      // add padding and border unless it's already including it\n      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );\n  }\n\n  size.innerWidth = size.width - ( paddingWidth + borderWidth );\n  size.innerHeight = size.height - ( paddingHeight + borderHeight );\n\n  size.outerWidth = size.width + marginWidth;\n  size.outerHeight = size.height + marginHeight;\n\n  return size;\n}\n\nreturn getSize;\n\n});\n\n/**\n * matchesSelector v2.0.2\n * matchesSelector( element, '.selector' )\n * MIT license\n */\n\n/*jshint browser: true, strict: true, undef: true, unused: true */\n\n( function( window, factory ) {\n  /*global define: false, module: false */\n  'use strict';\n  // universal module definition\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_LOCAL_MODULE_3__factory = (factory), (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_3__module = { id: \"desandro-matches-selector/matches-selector\", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)) : __WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__factory));\n  } else {}\n\n}( window, function factory() {\n  'use strict';\n\n  var matchesMethod = ( function() {\n    var ElemProto = window.Element.prototype;\n    // check for the standard method name first\n    if ( ElemProto.matches ) {\n      return 'matches';\n    }\n    // check un-prefixed\n    if ( ElemProto.matchesSelector ) {\n      return 'matchesSelector';\n    }\n    // check vendor prefixes\n    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];\n\n    for ( var i=0; i < prefixes.length; i++ ) {\n      var prefix = prefixes[i];\n      var method = prefix + 'MatchesSelector';\n      if ( ElemProto[ method ] ) {\n        return method;\n      }\n    }\n  })();\n\n  return function matchesSelector( elem, selector ) {\n    return elem[ matchesMethod ]( selector );\n  };\n\n}));\n\n/**\n * Fizzy UI utils v2.0.7\n * MIT license\n */\n\n/*jshint browser: true, undef: true, unused: true, strict: true */\n\n( function( window, factory ) {\n  // universal module definition\n  /*jshint strict: false */ /*globals define, module, require */\n\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n      __WEBPACK_LOCAL_MODULE_3__\n    ], __WEBPACK_LOCAL_MODULE_4__ = (function( matchesSelector ) {\n      return factory( window, matchesSelector );\n    }).apply(__WEBPACK_LOCAL_MODULE_4__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_4__ === undefined && (__WEBPACK_LOCAL_MODULE_4__ = __WEBPACK_LOCAL_MODULE_4__exports));\n  } else {}\n\n}( window, function factory( window, matchesSelector ) {\n\n\n\nvar utils = {};\n\n// ----- extend ----- //\n\n// extends objects\nutils.extend = function( a, b ) {\n  for ( var prop in b ) {\n    a[ prop ] = b[ prop ];\n  }\n  return a;\n};\n\n// ----- modulo ----- //\n\nutils.modulo = function( num, div ) {\n  return ( ( num % div ) + div ) % div;\n};\n\n// ----- makeArray ----- //\n\nvar arraySlice = Array.prototype.slice;\n\n// turn element or nodeList into an array\nutils.makeArray = function( obj ) {\n  if ( Array.isArray( obj ) ) {\n    // use object if already an array\n    return obj;\n  }\n  // return empty array if undefined or null. #6\n  if ( obj === null || obj === undefined ) {\n    return [];\n  }\n\n  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';\n  if ( isArrayLike ) {\n    // convert nodeList to array\n    return arraySlice.call( obj );\n  }\n\n  // array of single index\n  return [ obj ];\n};\n\n// ----- removeFrom ----- //\n\nutils.removeFrom = function( ary, obj ) {\n  var index = ary.indexOf( obj );\n  if ( index != -1 ) {\n    ary.splice( index, 1 );\n  }\n};\n\n// ----- getParent ----- //\n\nutils.getParent = function( elem, selector ) {\n  while ( elem.parentNode && elem != document.body ) {\n    elem = elem.parentNode;\n    if ( matchesSelector( elem, selector ) ) {\n      return elem;\n    }\n  }\n};\n\n// ----- getQueryElement ----- //\n\n// use element as selector string\nutils.getQueryElement = function( elem ) {\n  if ( typeof elem == 'string' ) {\n    return document.querySelector( elem );\n  }\n  return elem;\n};\n\n// ----- handleEvent ----- //\n\n// enable .ontype to trigger from .addEventListener( elem, 'type' )\nutils.handleEvent = function( event ) {\n  var method = 'on' + event.type;\n  if ( this[ method ] ) {\n    this[ method ]( event );\n  }\n};\n\n// ----- filterFindElements ----- //\n\nutils.filterFindElements = function( elems, selector ) {\n  // make array of elems\n  elems = utils.makeArray( elems );\n  var ffElems = [];\n\n  elems.forEach( function( elem ) {\n    // check that elem is an actual element\n    if ( !( elem instanceof HTMLElement ) ) {\n      return;\n    }\n    // add elem if no selector\n    if ( !selector ) {\n      ffElems.push( elem );\n      return;\n    }\n    // filter & find items if we have a selector\n    // filter\n    if ( matchesSelector( elem, selector ) ) {\n      ffElems.push( elem );\n    }\n    // find children\n    var childElems = elem.querySelectorAll( selector );\n    // concat childElems to filterFound array\n    for ( var i=0; i < childElems.length; i++ ) {\n      ffElems.push( childElems[i] );\n    }\n  });\n\n  return ffElems;\n};\n\n// ----- debounceMethod ----- //\n\nutils.debounceMethod = function( _class, methodName, threshold ) {\n  threshold = threshold || 100;\n  // original method\n  var method = _class.prototype[ methodName ];\n  var timeoutName = methodName + 'Timeout';\n\n  _class.prototype[ methodName ] = function() {\n    var timeout = this[ timeoutName ];\n    clearTimeout( timeout );\n\n    var args = arguments;\n    var _this = this;\n    this[ timeoutName ] = setTimeout( function() {\n      method.apply( _this, args );\n      delete _this[ timeoutName ];\n    }, threshold );\n  };\n};\n\n// ----- docReady ----- //\n\nutils.docReady = function( callback ) {\n  var readyState = document.readyState;\n  if ( readyState == 'complete' || readyState == 'interactive' ) {\n    // do async to allow for other scripts to run. metafizzy/flickity#441\n    setTimeout( callback );\n  } else {\n    document.addEventListener( 'DOMContentLoaded', callback );\n  }\n};\n\n// ----- htmlInit ----- //\n\n// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/\nutils.toDashed = function( str ) {\n  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {\n    return $1 + '-' + $2;\n  }).toLowerCase();\n};\n\nvar console = window.console;\n/**\n * allow user to initialize classes via [data-namespace] or .js-namespace class\n * htmlInit( Widget, 'widgetName' )\n * options are parsed from data-namespace-options\n */\nutils.htmlInit = function( WidgetClass, namespace ) {\n  utils.docReady( function() {\n    var dashedNamespace = utils.toDashed( namespace );\n    var dataAttr = 'data-' + dashedNamespace;\n    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );\n    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );\n    var elems = utils.makeArray( dataAttrElems )\n      .concat( utils.makeArray( jsDashElems ) );\n    var dataOptionsAttr = dataAttr + '-options';\n    var jQuery = window.jQuery;\n\n    elems.forEach( function( elem ) {\n      var attr = elem.getAttribute( dataAttr ) ||\n        elem.getAttribute( dataOptionsAttr );\n      var options;\n      try {\n        options = attr && JSON.parse( attr );\n      } catch ( error ) {\n        // log error, do not initialize\n        if ( console ) {\n          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +\n          ': ' + error );\n        }\n        return;\n      }\n      // initialize\n      var instance = new WidgetClass( elem, options );\n      // make available via $().data('namespace')\n      if ( jQuery ) {\n        jQuery.data( elem, namespace, instance );\n      }\n    });\n\n  });\n};\n\n// -----  ----- //\n\nreturn utils;\n\n}));\n\n/**\n * Outlayer Item\n */\n\n( function( window, factory ) {\n  // universal module definition\n  /* jshint strict: false */ /* globals define, module, require */\n  if ( true ) {\n    // AMD - RequireJS\n    !(__WEBPACK_LOCAL_MODULE_5__array = [\n        __WEBPACK_LOCAL_MODULE_1__,\n        __WEBPACK_LOCAL_MODULE_2__\n      ], __WEBPACK_LOCAL_MODULE_5__factory = (factory),\n\t\t(typeof __WEBPACK_LOCAL_MODULE_5__factory === 'function' ?\n\t\t\t((__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__factory.apply(__WEBPACK_LOCAL_MODULE_5__exports = {}, __WEBPACK_LOCAL_MODULE_5__array)), __WEBPACK_LOCAL_MODULE_5__ === undefined && (__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__exports)) :\n\t\t\t(__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__factory)\n\t\t));\n  } else {}\n\n}( window, function factory( EvEmitter, getSize ) {\n'use strict';\n\n// ----- helpers ----- //\n\nfunction isEmptyObj( obj ) {\n  for ( var prop in obj ) {\n    return false;\n  }\n  prop = null;\n  return true;\n}\n\n// -------------------------- CSS3 support -------------------------- //\n\n\nvar docElemStyle = document.documentElement.style;\n\nvar transitionProperty = typeof docElemStyle.transition == 'string' ?\n  'transition' : 'WebkitTransition';\nvar transformProperty = typeof docElemStyle.transform == 'string' ?\n  'transform' : 'WebkitTransform';\n\nvar transitionEndEvent = {\n  WebkitTransition: 'webkitTransitionEnd',\n  transition: 'transitionend'\n}[ transitionProperty ];\n\n// cache all vendor properties that could have vendor prefix\nvar vendorProperties = {\n  transform: transformProperty,\n  transition: transitionProperty,\n  transitionDuration: transitionProperty + 'Duration',\n  transitionProperty: transitionProperty + 'Property',\n  transitionDelay: transitionProperty + 'Delay'\n};\n\n// -------------------------- Item -------------------------- //\n\nfunction Item( element, layout ) {\n  if ( !element ) {\n    return;\n  }\n\n  this.element = element;\n  // parent layout class, i.e. Masonry, Isotope, or Packery\n  this.layout = layout;\n  this.position = {\n    x: 0,\n    y: 0\n  };\n\n  this._create();\n}\n\n// inherit EvEmitter\nvar proto = Item.prototype = Object.create( EvEmitter.prototype );\nproto.constructor = Item;\n\nproto._create = function() {\n  // transition objects\n  this._transn = {\n    ingProperties: {},\n    clean: {},\n    onEnd: {}\n  };\n\n  this.css({\n    position: 'absolute'\n  });\n};\n\n// trigger specified handler for event type\nproto.handleEvent = function( event ) {\n  var method = 'on' + event.type;\n  if ( this[ method ] ) {\n    this[ method ]( event );\n  }\n};\n\nproto.getSize = function() {\n  this.size = getSize( this.element );\n};\n\n/**\n * apply CSS styles to element\n * @param {Object} style\n */\nproto.css = function( style ) {\n  var elemStyle = this.element.style;\n\n  for ( var prop in style ) {\n    // use vendor property if available\n    var supportedProp = vendorProperties[ prop ] || prop;\n    elemStyle[ supportedProp ] = style[ prop ];\n  }\n};\n\n // measure position, and sets it\nproto.getPosition = function() {\n  var style = getComputedStyle( this.element );\n  var isOriginLeft = this.layout._getOption('originLeft');\n  var isOriginTop = this.layout._getOption('originTop');\n  var xValue = style[ isOriginLeft ? 'left' : 'right' ];\n  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];\n  var x = parseFloat( xValue );\n  var y = parseFloat( yValue );\n  // convert percent to pixels\n  var layoutSize = this.layout.size;\n  if ( xValue.indexOf('%') != -1 ) {\n    x = ( x / 100 ) * layoutSize.width;\n  }\n  if ( yValue.indexOf('%') != -1 ) {\n    y = ( y / 100 ) * layoutSize.height;\n  }\n  // clean up 'auto' or other non-integer values\n  x = isNaN( x ) ? 0 : x;\n  y = isNaN( y ) ? 0 : y;\n  // remove padding from measurement\n  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;\n  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;\n\n  this.position.x = x;\n  this.position.y = y;\n};\n\n// set settled position, apply padding\nproto.layoutPosition = function() {\n  var layoutSize = this.layout.size;\n  var style = {};\n  var isOriginLeft = this.layout._getOption('originLeft');\n  var isOriginTop = this.layout._getOption('originTop');\n\n  // x\n  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';\n  var xProperty = isOriginLeft ? 'left' : 'right';\n  var xResetProperty = isOriginLeft ? 'right' : 'left';\n\n  var x = this.position.x + layoutSize[ xPadding ];\n  // set in percentage or pixels\n  style[ xProperty ] = this.getXValue( x );\n  // reset other property\n  style[ xResetProperty ] = '';\n\n  // y\n  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';\n  var yProperty = isOriginTop ? 'top' : 'bottom';\n  var yResetProperty = isOriginTop ? 'bottom' : 'top';\n\n  var y = this.position.y + layoutSize[ yPadding ];\n  // set in percentage or pixels\n  style[ yProperty ] = this.getYValue( y );\n  // reset other property\n  style[ yResetProperty ] = '';\n\n  this.css( style );\n  this.emitEvent( 'layout', [ this ] );\n};\n\nproto.getXValue = function( x ) {\n  var isHorizontal = this.layout._getOption('horizontal');\n  return this.layout.options.percentPosition && !isHorizontal ?\n    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';\n};\n\nproto.getYValue = function( y ) {\n  var isHorizontal = this.layout._getOption('horizontal');\n  return this.layout.options.percentPosition && isHorizontal ?\n    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';\n};\n\nproto._transitionTo = function( x, y ) {\n  this.getPosition();\n  // get current x & y from top/left\n  var curX = this.position.x;\n  var curY = this.position.y;\n\n  var didNotMove = x == this.position.x && y == this.position.y;\n\n  // save end position\n  this.setPosition( x, y );\n\n  // if did not move and not transitioning, just go to layout\n  if ( didNotMove && !this.isTransitioning ) {\n    this.layoutPosition();\n    return;\n  }\n\n  var transX = x - curX;\n  var transY = y - curY;\n  var transitionStyle = {};\n  transitionStyle.transform = this.getTranslate( transX, transY );\n\n  this.transition({\n    to: transitionStyle,\n    onTransitionEnd: {\n      transform: this.layoutPosition\n    },\n    isCleaning: true\n  });\n};\n\nproto.getTranslate = function( x, y ) {\n  // flip cooridinates if origin on right or bottom\n  var isOriginLeft = this.layout._getOption('originLeft');\n  var isOriginTop = this.layout._getOption('originTop');\n  x = isOriginLeft ? x : -x;\n  y = isOriginTop ? y : -y;\n  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';\n};\n\n// non transition + transform support\nproto.goTo = function( x, y ) {\n  this.setPosition( x, y );\n  this.layoutPosition();\n};\n\nproto.moveTo = proto._transitionTo;\n\nproto.setPosition = function( x, y ) {\n  this.position.x = parseFloat( x );\n  this.position.y = parseFloat( y );\n};\n\n// ----- transition ----- //\n\n/**\n * @param {Object} style - CSS\n * @param {Function} onTransitionEnd\n */\n\n// non transition, just trigger callback\nproto._nonTransition = function( args ) {\n  this.css( args.to );\n  if ( args.isCleaning ) {\n    this._removeStyles( args.to );\n  }\n  for ( var prop in args.onTransitionEnd ) {\n    args.onTransitionEnd[ prop ].call( this );\n  }\n};\n\n/**\n * proper transition\n * @param {Object} args - arguments\n *   @param {Object} to - style to transition to\n *   @param {Object} from - style to start transition from\n *   @param {Boolean} isCleaning - removes transition styles after transition\n *   @param {Function} onTransitionEnd - callback\n */\nproto.transition = function( args ) {\n  // redirect to nonTransition if no transition duration\n  if ( !parseFloat( this.layout.options.transitionDuration ) ) {\n    this._nonTransition( args );\n    return;\n  }\n\n  var _transition = this._transn;\n  // keep track of onTransitionEnd callback by css property\n  for ( var prop in args.onTransitionEnd ) {\n    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];\n  }\n  // keep track of properties that are transitioning\n  for ( prop in args.to ) {\n    _transition.ingProperties[ prop ] = true;\n    // keep track of properties to clean up when transition is done\n    if ( args.isCleaning ) {\n      _transition.clean[ prop ] = true;\n    }\n  }\n\n  // set from styles\n  if ( args.from ) {\n    this.css( args.from );\n    // force redraw. http://blog.alexmaccaw.com/css-transitions\n    var h = this.element.offsetHeight;\n    // hack for JSHint to hush about unused var\n    h = null;\n  }\n  // enable transition\n  this.enableTransition( args.to );\n  // set styles that are transitioning\n  this.css( args.to );\n\n  this.isTransitioning = true;\n\n};\n\n// dash before all cap letters, including first for\n// WebkitTransform => -webkit-transform\nfunction toDashedAll( str ) {\n  return str.replace( /([A-Z])/g, function( $1 ) {\n    return '-' + $1.toLowerCase();\n  });\n}\n\nvar transitionProps = 'opacity,' + toDashedAll( transformProperty );\n\nproto.enableTransition = function(/* style */) {\n  // HACK changing transitionProperty during a transition\n  // will cause transition to jump\n  if ( this.isTransitioning ) {\n    return;\n  }\n\n  // make `transition: foo, bar, baz` from style object\n  // HACK un-comment this when enableTransition can work\n  // while a transition is happening\n  // var transitionValues = [];\n  // for ( var prop in style ) {\n  //   // dash-ify camelCased properties like WebkitTransition\n  //   prop = vendorProperties[ prop ] || prop;\n  //   transitionValues.push( toDashedAll( prop ) );\n  // }\n  // munge number to millisecond, to match stagger\n  var duration = this.layout.options.transitionDuration;\n  duration = typeof duration == 'number' ? duration + 'ms' : duration;\n  // enable transition styles\n  this.css({\n    transitionProperty: transitionProps,\n    transitionDuration: duration,\n    transitionDelay: this.staggerDelay || 0\n  });\n  // listen for transition end event\n  this.element.addEventListener( transitionEndEvent, this, false );\n};\n\n// ----- events ----- //\n\nproto.onwebkitTransitionEnd = function( event ) {\n  this.ontransitionend( event );\n};\n\nproto.onotransitionend = function( event ) {\n  this.ontransitionend( event );\n};\n\n// properties that I munge to make my life easier\nvar dashedVendorProperties = {\n  '-webkit-transform': 'transform'\n};\n\nproto.ontransitionend = function( event ) {\n  // disregard bubbled events from children\n  if ( event.target !== this.element ) {\n    return;\n  }\n  var _transition = this._transn;\n  // get property name of transitioned property, convert to prefix-free\n  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;\n\n  // remove property that has completed transitioning\n  delete _transition.ingProperties[ propertyName ];\n  // check if any properties are still transitioning\n  if ( isEmptyObj( _transition.ingProperties ) ) {\n    // all properties have completed transitioning\n    this.disableTransition();\n  }\n  // clean style\n  if ( propertyName in _transition.clean ) {\n    // clean up style\n    this.element.style[ event.propertyName ] = '';\n    delete _transition.clean[ propertyName ];\n  }\n  // trigger onTransitionEnd callback\n  if ( propertyName in _transition.onEnd ) {\n    var onTransitionEnd = _transition.onEnd[ propertyName ];\n    onTransitionEnd.call( this );\n    delete _transition.onEnd[ propertyName ];\n  }\n\n  this.emitEvent( 'transitionEnd', [ this ] );\n};\n\nproto.disableTransition = function() {\n  this.removeTransitionStyles();\n  this.element.removeEventListener( transitionEndEvent, this, false );\n  this.isTransitioning = false;\n};\n\n/**\n * removes style property from element\n * @param {Object} style\n**/\nproto._removeStyles = function( style ) {\n  // clean up transition styles\n  var cleanStyle = {};\n  for ( var prop in style ) {\n    cleanStyle[ prop ] = '';\n  }\n  this.css( cleanStyle );\n};\n\nvar cleanTransitionStyle = {\n  transitionProperty: '',\n  transitionDuration: '',\n  transitionDelay: ''\n};\n\nproto.removeTransitionStyles = function() {\n  // remove transition\n  this.css( cleanTransitionStyle );\n};\n\n// ----- stagger ----- //\n\nproto.stagger = function( delay ) {\n  delay = isNaN( delay ) ? 0 : delay;\n  this.staggerDelay = delay + 'ms';\n};\n\n// ----- show/hide/remove ----- //\n\n// remove element from DOM\nproto.removeElem = function() {\n  this.element.parentNode.removeChild( this.element );\n  // remove display: none\n  this.css({ display: '' });\n  this.emitEvent( 'remove', [ this ] );\n};\n\nproto.remove = function() {\n  // just remove element if no transition support or no transition\n  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {\n    this.removeElem();\n    return;\n  }\n\n  // start transition\n  this.once( 'transitionEnd', function() {\n    this.removeElem();\n  });\n  this.hide();\n};\n\nproto.reveal = function() {\n  delete this.isHidden;\n  // remove display: none\n  this.css({ display: '' });\n\n  var options = this.layout.options;\n\n  var onTransitionEnd = {};\n  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');\n  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;\n\n  this.transition({\n    from: options.hiddenStyle,\n    to: options.visibleStyle,\n    isCleaning: true,\n    onTransitionEnd: onTransitionEnd\n  });\n};\n\nproto.onRevealTransitionEnd = function() {\n  // check if still visible\n  // during transition, item may have been hidden\n  if ( !this.isHidden ) {\n    this.emitEvent('reveal');\n  }\n};\n\n/**\n * get style property use for hide/reveal transition end\n * @param {String} styleProperty - hiddenStyle/visibleStyle\n * @returns {String}\n */\nproto.getHideRevealTransitionEndProperty = function( styleProperty ) {\n  var optionStyle = this.layout.options[ styleProperty ];\n  // use opacity\n  if ( optionStyle.opacity ) {\n    return 'opacity';\n  }\n  // get first property\n  for ( var prop in optionStyle ) {\n    return prop;\n  }\n};\n\nproto.hide = function() {\n  // set flag\n  this.isHidden = true;\n  // remove display: none\n  this.css({ display: '' });\n\n  var options = this.layout.options;\n\n  var onTransitionEnd = {};\n  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');\n  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;\n\n  this.transition({\n    from: options.visibleStyle,\n    to: options.hiddenStyle,\n    // keep hidden stuff hidden\n    isCleaning: true,\n    onTransitionEnd: onTransitionEnd\n  });\n};\n\nproto.onHideTransitionEnd = function() {\n  // check if still hidden\n  // during transition, item may have been un-hidden\n  if ( this.isHidden ) {\n    this.css({ display: 'none' });\n    this.emitEvent('hide');\n  }\n};\n\nproto.destroy = function() {\n  this.css({\n    position: '',\n    left: '',\n    right: '',\n    top: '',\n    bottom: '',\n    transition: '',\n    transform: ''\n  });\n};\n\nreturn Item;\n\n}));\n\n/*!\n * Outlayer v2.1.1\n * the brains and guts of a layout library\n * MIT license\n */\n\n( function( window, factory ) {\n  'use strict';\n  // universal module definition\n  /* jshint strict: false */ /* globals define, module, require */\n  if ( true ) {\n    // AMD - RequireJS\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n        __WEBPACK_LOCAL_MODULE_1__,\n        __WEBPACK_LOCAL_MODULE_2__,\n        __WEBPACK_LOCAL_MODULE_4__,\n        __WEBPACK_LOCAL_MODULE_5__\n      ], __WEBPACK_LOCAL_MODULE_6__ = (function( EvEmitter, getSize, utils, Item ) {\n        return factory( window, EvEmitter, getSize, utils, Item);\n      }).apply(__WEBPACK_LOCAL_MODULE_6__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_6__ === undefined && (__WEBPACK_LOCAL_MODULE_6__ = __WEBPACK_LOCAL_MODULE_6__exports));\n  } else {}\n\n}( window, function factory( window, EvEmitter, getSize, utils, Item ) {\n'use strict';\n\n// ----- vars ----- //\n\nvar console = window.console;\nvar jQuery = window.jQuery;\nvar noop = function() {};\n\n// -------------------------- Outlayer -------------------------- //\n\n// globally unique identifiers\nvar GUID = 0;\n// internal store of all Outlayer intances\nvar instances = {};\n\n\n/**\n * @param {Element, String} element\n * @param {Object} options\n * @constructor\n */\nfunction Outlayer( element, options ) {\n  var queryElement = utils.getQueryElement( element );\n  if ( !queryElement ) {\n    if ( console ) {\n      console.error( 'Bad element for ' + this.constructor.namespace +\n        ': ' + ( queryElement || element ) );\n    }\n    return;\n  }\n  this.element = queryElement;\n  // add jQuery\n  if ( jQuery ) {\n    this.$element = jQuery( this.element );\n  }\n\n  // options\n  this.options = utils.extend( {}, this.constructor.defaults );\n  this.option( options );\n\n  // add id for Outlayer.getFromElement\n  var id = ++GUID;\n  this.element.outlayerGUID = id; // expando\n  instances[ id ] = this; // associate via id\n\n  // kick it off\n  this._create();\n\n  var isInitLayout = this._getOption('initLayout');\n  if ( isInitLayout ) {\n    this.layout();\n  }\n}\n\n// settings are for internal use only\nOutlayer.namespace = 'outlayer';\nOutlayer.Item = Item;\n\n// default options\nOutlayer.defaults = {\n  containerStyle: {\n    position: 'relative'\n  },\n  initLayout: true,\n  originLeft: true,\n  originTop: true,\n  resize: true,\n  resizeContainer: true,\n  // item options\n  transitionDuration: '0.4s',\n  hiddenStyle: {\n    opacity: 0,\n    transform: 'scale(0.001)'\n  },\n  visibleStyle: {\n    opacity: 1,\n    transform: 'scale(1)'\n  }\n};\n\nvar proto = Outlayer.prototype;\n// inherit EvEmitter\nutils.extend( proto, EvEmitter.prototype );\n\n/**\n * set options\n * @param {Object} opts\n */\nproto.option = function( opts ) {\n  utils.extend( this.options, opts );\n};\n\n/**\n * get backwards compatible option value, check old name\n */\nproto._getOption = function( option ) {\n  var oldOption = this.constructor.compatOptions[ option ];\n  return oldOption && this.options[ oldOption ] !== undefined ?\n    this.options[ oldOption ] : this.options[ option ];\n};\n\nOutlayer.compatOptions = {\n  // currentName: oldName\n  initLayout: 'isInitLayout',\n  horizontal: 'isHorizontal',\n  layoutInstant: 'isLayoutInstant',\n  originLeft: 'isOriginLeft',\n  originTop: 'isOriginTop',\n  resize: 'isResizeBound',\n  resizeContainer: 'isResizingContainer'\n};\n\nproto._create = function() {\n  // get items from children\n  this.reloadItems();\n  // elements that affect layout, but are not laid out\n  this.stamps = [];\n  this.stamp( this.options.stamp );\n  // set container style\n  utils.extend( this.element.style, this.options.containerStyle );\n\n  // bind resize method\n  var canBindResize = this._getOption('resize');\n  if ( canBindResize ) {\n    this.bindResize();\n  }\n};\n\n// goes through all children again and gets bricks in proper order\nproto.reloadItems = function() {\n  // collection of item elements\n  this.items = this._itemize( this.element.children );\n};\n\n\n/**\n * turn elements into Outlayer.Items to be used in layout\n * @param {Array or NodeList or HTMLElement} elems\n * @returns {Array} items - collection of new Outlayer Items\n */\nproto._itemize = function( elems ) {\n\n  var itemElems = this._filterFindItemElements( elems );\n  var Item = this.constructor.Item;\n\n  // create new Outlayer Items for collection\n  var items = [];\n  for ( var i=0; i < itemElems.length; i++ ) {\n    var elem = itemElems[i];\n    var item = new Item( elem, this );\n    items.push( item );\n  }\n\n  return items;\n};\n\n/**\n * get item elements to be used in layout\n * @param {Array or NodeList or HTMLElement} elems\n * @returns {Array} items - item elements\n */\nproto._filterFindItemElements = function( elems ) {\n  return utils.filterFindElements( elems, this.options.itemSelector );\n};\n\n/**\n * getter method for getting item elements\n * @returns {Array} elems - collection of item elements\n */\nproto.getItemElements = function() {\n  return this.items.map( function( item ) {\n    return item.element;\n  });\n};\n\n// ----- init & layout ----- //\n\n/**\n * lays out all items\n */\nproto.layout = function() {\n  this._resetLayout();\n  this._manageStamps();\n\n  // don't animate first layout\n  var layoutInstant = this._getOption('layoutInstant');\n  var isInstant = layoutInstant !== undefined ?\n    layoutInstant : !this._isLayoutInited;\n  this.layoutItems( this.items, isInstant );\n\n  // flag for initalized\n  this._isLayoutInited = true;\n};\n\n// _init is alias for layout\nproto._init = proto.layout;\n\n/**\n * logic before any new layout\n */\nproto._resetLayout = function() {\n  this.getSize();\n};\n\n\nproto.getSize = function() {\n  this.size = getSize( this.element );\n};\n\n/**\n * get measurement from option, for columnWidth, rowHeight, gutter\n * if option is String -> get element from selector string, & get size of element\n * if option is Element -> get size of element\n * else use option as a number\n *\n * @param {String} measurement\n * @param {String} size - width or height\n * @private\n */\nproto._getMeasurement = function( measurement, size ) {\n  var option = this.options[ measurement ];\n  var elem;\n  if ( !option ) {\n    // default to 0\n    this[ measurement ] = 0;\n  } else {\n    // use option as an element\n    if ( typeof option == 'string' ) {\n      elem = this.element.querySelector( option );\n    } else if ( option instanceof HTMLElement ) {\n      elem = option;\n    }\n    // use size of element, if element\n    this[ measurement ] = elem ? getSize( elem )[ size ] : option;\n  }\n};\n\n/**\n * layout a collection of item elements\n * @api public\n */\nproto.layoutItems = function( items, isInstant ) {\n  items = this._getItemsForLayout( items );\n\n  this._layoutItems( items, isInstant );\n\n  this._postLayout();\n};\n\n/**\n * get the items to be laid out\n * you may want to skip over some items\n * @param {Array} items\n * @returns {Array} items\n */\nproto._getItemsForLayout = function( items ) {\n  return items.filter( function( item ) {\n    return !item.isIgnored;\n  });\n};\n\n/**\n * layout items\n * @param {Array} items\n * @param {Boolean} isInstant\n */\nproto._layoutItems = function( items, isInstant ) {\n  this._emitCompleteOnItems( 'layout', items );\n\n  if ( !items || !items.length ) {\n    // no items, emit event with empty array\n    return;\n  }\n\n  var queue = [];\n\n  items.forEach( function( item ) {\n    // get x/y object from method\n    var position = this._getItemLayoutPosition( item );\n    // enqueue\n    position.item = item;\n    position.isInstant = isInstant || item.isLayoutInstant;\n    queue.push( position );\n  }, this );\n\n  this._processLayoutQueue( queue );\n};\n\n/**\n * get item layout position\n * @param {Outlayer.Item} item\n * @returns {Object} x and y position\n */\nproto._getItemLayoutPosition = function( /* item */ ) {\n  return {\n    x: 0,\n    y: 0\n  };\n};\n\n/**\n * iterate over array and position each item\n * Reason being - separating this logic prevents 'layout invalidation'\n * thx @paul_irish\n * @param {Array} queue\n */\nproto._processLayoutQueue = function( queue ) {\n  this.updateStagger();\n  queue.forEach( function( obj, i ) {\n    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );\n  }, this );\n};\n\n// set stagger from option in milliseconds number\nproto.updateStagger = function() {\n  var stagger = this.options.stagger;\n  if ( stagger === null || stagger === undefined ) {\n    this.stagger = 0;\n    return;\n  }\n  this.stagger = getMilliseconds( stagger );\n  return this.stagger;\n};\n\n/**\n * Sets position of item in DOM\n * @param {Outlayer.Item} item\n * @param {Number} x - horizontal position\n * @param {Number} y - vertical position\n * @param {Boolean} isInstant - disables transitions\n */\nproto._positionItem = function( item, x, y, isInstant, i ) {\n  if ( isInstant ) {\n    // if not transition, just set CSS\n    item.goTo( x, y );\n  } else {\n    item.stagger( i * this.stagger );\n    item.moveTo( x, y );\n  }\n};\n\n/**\n * Any logic you want to do after each layout,\n * i.e. size the container\n */\nproto._postLayout = function() {\n  this.resizeContainer();\n};\n\nproto.resizeContainer = function() {\n  var isResizingContainer = this._getOption('resizeContainer');\n  if ( !isResizingContainer ) {\n    return;\n  }\n  var size = this._getContainerSize();\n  if ( size ) {\n    this._setContainerMeasure( size.width, true );\n    this._setContainerMeasure( size.height, false );\n  }\n};\n\n/**\n * Sets width or height of container if returned\n * @returns {Object} size\n *   @param {Number} width\n *   @param {Number} height\n */\nproto._getContainerSize = noop;\n\n/**\n * @param {Number} measure - size of width or height\n * @param {Boolean} isWidth\n */\nproto._setContainerMeasure = function( measure, isWidth ) {\n  if ( measure === undefined ) {\n    return;\n  }\n\n  var elemSize = this.size;\n  // add padding and border width if border box\n  if ( elemSize.isBorderBox ) {\n    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +\n      elemSize.borderLeftWidth + elemSize.borderRightWidth :\n      elemSize.paddingBottom + elemSize.paddingTop +\n      elemSize.borderTopWidth + elemSize.borderBottomWidth;\n  }\n\n  measure = Math.max( measure, 0 );\n  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';\n};\n\n/**\n * emit eventComplete on a collection of items events\n * @param {String} eventName\n * @param {Array} items - Outlayer.Items\n */\nproto._emitCompleteOnItems = function( eventName, items ) {\n  var _this = this;\n  function onComplete() {\n    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );\n  }\n\n  var count = items.length;\n  if ( !items || !count ) {\n    onComplete();\n    return;\n  }\n\n  var doneCount = 0;\n  function tick() {\n    doneCount++;\n    if ( doneCount == count ) {\n      onComplete();\n    }\n  }\n\n  // bind callback\n  items.forEach( function( item ) {\n    item.once( eventName, tick );\n  });\n};\n\n/**\n * emits events via EvEmitter and jQuery events\n * @param {String} type - name of event\n * @param {Event} event - original event\n * @param {Array} args - extra arguments\n */\nproto.dispatchEvent = function( type, event, args ) {\n  // add original event to arguments\n  var emitArgs = event ? [ event ].concat( args ) : args;\n  this.emitEvent( type, emitArgs );\n\n  if ( jQuery ) {\n    // set this.$element\n    this.$element = this.$element || jQuery( this.element );\n    if ( event ) {\n      // create jQuery event\n      var $event = jQuery.Event( event );\n      $event.type = type;\n      this.$element.trigger( $event, args );\n    } else {\n      // just trigger with type if no event available\n      this.$element.trigger( type, args );\n    }\n  }\n};\n\n// -------------------------- ignore & stamps -------------------------- //\n\n\n/**\n * keep item in collection, but do not lay it out\n * ignored items do not get skipped in layout\n * @param {Element} elem\n */\nproto.ignore = function( elem ) {\n  var item = this.getItem( elem );\n  if ( item ) {\n    item.isIgnored = true;\n  }\n};\n\n/**\n * return item to layout collection\n * @param {Element} elem\n */\nproto.unignore = function( elem ) {\n  var item = this.getItem( elem );\n  if ( item ) {\n    delete item.isIgnored;\n  }\n};\n\n/**\n * adds elements to stamps\n * @param {NodeList, Array, Element, or String} elems\n */\nproto.stamp = function( elems ) {\n  elems = this._find( elems );\n  if ( !elems ) {\n    return;\n  }\n\n  this.stamps = this.stamps.concat( elems );\n  // ignore\n  elems.forEach( this.ignore, this );\n};\n\n/**\n * removes elements to stamps\n * @param {NodeList, Array, or Element} elems\n */\nproto.unstamp = function( elems ) {\n  elems = this._find( elems );\n  if ( !elems ){\n    return;\n  }\n\n  elems.forEach( function( elem ) {\n    // filter out removed stamp elements\n    utils.removeFrom( this.stamps, elem );\n    this.unignore( elem );\n  }, this );\n};\n\n/**\n * finds child elements\n * @param {NodeList, Array, Element, or String} elems\n * @returns {Array} elems\n */\nproto._find = function( elems ) {\n  if ( !elems ) {\n    return;\n  }\n  // if string, use argument as selector string\n  if ( typeof elems == 'string' ) {\n    elems = this.element.querySelectorAll( elems );\n  }\n  elems = utils.makeArray( elems );\n  return elems;\n};\n\nproto._manageStamps = function() {\n  if ( !this.stamps || !this.stamps.length ) {\n    return;\n  }\n\n  this._getBoundingRect();\n\n  this.stamps.forEach( this._manageStamp, this );\n};\n\n// update boundingLeft / Top\nproto._getBoundingRect = function() {\n  // get bounding rect for container element\n  var boundingRect = this.element.getBoundingClientRect();\n  var size = this.size;\n  this._boundingRect = {\n    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,\n    top: boundingRect.top + size.paddingTop + size.borderTopWidth,\n    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),\n    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )\n  };\n};\n\n/**\n * @param {Element} stamp\n**/\nproto._manageStamp = noop;\n\n/**\n * get x/y position of element relative to container element\n * @param {Element} elem\n * @returns {Object} offset - has left, top, right, bottom\n */\nproto._getElementOffset = function( elem ) {\n  var boundingRect = elem.getBoundingClientRect();\n  var thisRect = this._boundingRect;\n  var size = getSize( elem );\n  var offset = {\n    left: boundingRect.left - thisRect.left - size.marginLeft,\n    top: boundingRect.top - thisRect.top - size.marginTop,\n    right: thisRect.right - boundingRect.right - size.marginRight,\n    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom\n  };\n  return offset;\n};\n\n// -------------------------- resize -------------------------- //\n\n// enable event handlers for listeners\n// i.e. resize -> onresize\nproto.handleEvent = utils.handleEvent;\n\n/**\n * Bind layout to window resizing\n */\nproto.bindResize = function() {\n  window.addEventListener( 'resize', this );\n  this.isResizeBound = true;\n};\n\n/**\n * Unbind layout to window resizing\n */\nproto.unbindResize = function() {\n  window.removeEventListener( 'resize', this );\n  this.isResizeBound = false;\n};\n\nproto.onresize = function() {\n  this.resize();\n};\n\nutils.debounceMethod( Outlayer, 'onresize', 100 );\n\nproto.resize = function() {\n  // don't trigger if size did not change\n  // or if resize was unbound. See #9\n  if ( !this.isResizeBound || !this.needsResizeLayout() ) {\n    return;\n  }\n\n  this.layout();\n};\n\n/**\n * check if layout is needed post layout\n * @returns Boolean\n */\nproto.needsResizeLayout = function() {\n  var size = getSize( this.element );\n  // check that this.size and size are there\n  // IE8 triggers resize on body size change, so they might not be\n  var hasSizes = this.size && size;\n  return hasSizes && size.innerWidth !== this.size.innerWidth;\n};\n\n// -------------------------- methods -------------------------- //\n\n/**\n * add items to Outlayer instance\n * @param {Array or NodeList or Element} elems\n * @returns {Array} items - Outlayer.Items\n**/\nproto.addItems = function( elems ) {\n  var items = this._itemize( elems );\n  // add items to collection\n  if ( items.length ) {\n    this.items = this.items.concat( items );\n  }\n  return items;\n};\n\n/**\n * Layout newly-appended item elements\n * @param {Array or NodeList or Element} elems\n */\nproto.appended = function( elems ) {\n  var items = this.addItems( elems );\n  if ( !items.length ) {\n    return;\n  }\n  // layout and reveal just the new items\n  this.layoutItems( items, true );\n  this.reveal( items );\n};\n\n/**\n * Layout prepended elements\n * @param {Array or NodeList or Element} elems\n */\nproto.prepended = function( elems ) {\n  var items = this._itemize( elems );\n  if ( !items.length ) {\n    return;\n  }\n  // add items to beginning of collection\n  var previousItems = this.items.slice(0);\n  this.items = items.concat( previousItems );\n  // start new layout\n  this._resetLayout();\n  this._manageStamps();\n  // layout new stuff without transition\n  this.layoutItems( items, true );\n  this.reveal( items );\n  // layout previous items\n  this.layoutItems( previousItems );\n};\n\n/**\n * reveal a collection of items\n * @param {Array of Outlayer.Items} items\n */\nproto.reveal = function( items ) {\n  this._emitCompleteOnItems( 'reveal', items );\n  if ( !items || !items.length ) {\n    return;\n  }\n  var stagger = this.updateStagger();\n  items.forEach( function( item, i ) {\n    item.stagger( i * stagger );\n    item.reveal();\n  });\n};\n\n/**\n * hide a collection of items\n * @param {Array of Outlayer.Items} items\n */\nproto.hide = function( items ) {\n  this._emitCompleteOnItems( 'hide', items );\n  if ( !items || !items.length ) {\n    return;\n  }\n  var stagger = this.updateStagger();\n  items.forEach( function( item, i ) {\n    item.stagger( i * stagger );\n    item.hide();\n  });\n};\n\n/**\n * reveal item elements\n * @param {Array}, {Element}, {NodeList} items\n */\nproto.revealItemElements = function( elems ) {\n  var items = this.getItems( elems );\n  this.reveal( items );\n};\n\n/**\n * hide item elements\n * @param {Array}, {Element}, {NodeList} items\n */\nproto.hideItemElements = function( elems ) {\n  var items = this.getItems( elems );\n  this.hide( items );\n};\n\n/**\n * get Outlayer.Item, given an Element\n * @param {Element} elem\n * @param {Function} callback\n * @returns {Outlayer.Item} item\n */\nproto.getItem = function( elem ) {\n  // loop through items to get the one that matches\n  for ( var i=0; i < this.items.length; i++ ) {\n    var item = this.items[i];\n    if ( item.element == elem ) {\n      // return item\n      return item;\n    }\n  }\n};\n\n/**\n * get collection of Outlayer.Items, given Elements\n * @param {Array} elems\n * @returns {Array} items - Outlayer.Items\n */\nproto.getItems = function( elems ) {\n  elems = utils.makeArray( elems );\n  var items = [];\n  elems.forEach( function( elem ) {\n    var item = this.getItem( elem );\n    if ( item ) {\n      items.push( item );\n    }\n  }, this );\n\n  return items;\n};\n\n/**\n * remove element(s) from instance and DOM\n * @param {Array or NodeList or Element} elems\n */\nproto.remove = function( elems ) {\n  var removeItems = this.getItems( elems );\n\n  this._emitCompleteOnItems( 'remove', removeItems );\n\n  // bail if no items to remove\n  if ( !removeItems || !removeItems.length ) {\n    return;\n  }\n\n  removeItems.forEach( function( item ) {\n    item.remove();\n    // remove item from collection\n    utils.removeFrom( this.items, item );\n  }, this );\n};\n\n// ----- destroy ----- //\n\n// remove and disable Outlayer instance\nproto.destroy = function() {\n  // clean up dynamic styles\n  var style = this.element.style;\n  style.height = '';\n  style.position = '';\n  style.width = '';\n  // destroy items\n  this.items.forEach( function( item ) {\n    item.destroy();\n  });\n\n  this.unbindResize();\n\n  var id = this.element.outlayerGUID;\n  delete instances[ id ]; // remove reference to instance by id\n  delete this.element.outlayerGUID;\n  // remove data for jQuery\n  if ( jQuery ) {\n    jQuery.removeData( this.element, this.constructor.namespace );\n  }\n\n};\n\n// -------------------------- data -------------------------- //\n\n/**\n * get Outlayer instance from element\n * @param {Element} elem\n * @returns {Outlayer}\n */\nOutlayer.data = function( elem ) {\n  elem = utils.getQueryElement( elem );\n  var id = elem && elem.outlayerGUID;\n  return id && instances[ id ];\n};\n\n\n// -------------------------- create Outlayer class -------------------------- //\n\n/**\n * create a layout class\n * @param {String} namespace\n */\nOutlayer.create = function( namespace, options ) {\n  // sub-class Outlayer\n  var Layout = subclass( Outlayer );\n  // apply new options and compatOptions\n  Layout.defaults = utils.extend( {}, Outlayer.defaults );\n  utils.extend( Layout.defaults, options );\n  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );\n\n  Layout.namespace = namespace;\n\n  Layout.data = Outlayer.data;\n\n  // sub-class Item\n  Layout.Item = subclass( Item );\n\n  // -------------------------- declarative -------------------------- //\n\n  utils.htmlInit( Layout, namespace );\n\n  // -------------------------- jQuery bridge -------------------------- //\n\n  // make into jQuery plugin\n  if ( jQuery && jQuery.bridget ) {\n    jQuery.bridget( namespace, Layout );\n  }\n\n  return Layout;\n};\n\nfunction subclass( Parent ) {\n  function SubClass() {\n    Parent.apply( this, arguments );\n  }\n\n  SubClass.prototype = Object.create( Parent.prototype );\n  SubClass.prototype.constructor = SubClass;\n\n  return SubClass;\n}\n\n// ----- helpers ----- //\n\n// how many milliseconds are in each unit\nvar msUnits = {\n  ms: 1,\n  s: 1000\n};\n\n// munge time-like parameter into millisecond number\n// '0.4s' -> 40\nfunction getMilliseconds( time ) {\n  if ( typeof time == 'number' ) {\n    return time;\n  }\n  var matches = time.match( /(^\\d*\\.?\\d*)(\\w*)/ );\n  var num = matches && matches[1];\n  var unit = matches && matches[2];\n  if ( !num.length ) {\n    return 0;\n  }\n  num = parseFloat( num );\n  var mult = msUnits[ unit ] || 1;\n  return num * mult;\n}\n\n// ----- fin ----- //\n\n// back in global\nOutlayer.Item = Item;\n\nreturn Outlayer;\n\n}));\n\n/*!\n * Masonry v4.2.2\n * Cascading grid layout library\n * https://masonry.desandro.com\n * MIT License\n * by David DeSandro\n */\n\n( function( window, factory ) {\n  // universal module definition\n  /* jshint strict: false */ /*globals define, module, require */\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n        __WEBPACK_LOCAL_MODULE_6__,\n        __WEBPACK_LOCAL_MODULE_2__\n      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n}( window, function factory( Outlayer, getSize ) {\n\n\n\n// -------------------------- masonryDefinition -------------------------- //\n\n  // create an Outlayer layout class\n  var Masonry = Outlayer.create('masonry');\n  // isFitWidth -> fitWidth\n  Masonry.compatOptions.fitWidth = 'isFitWidth';\n\n  var proto = Masonry.prototype;\n\n  proto._resetLayout = function() {\n    this.getSize();\n    this._getMeasurement( 'columnWidth', 'outerWidth' );\n    this._getMeasurement( 'gutter', 'outerWidth' );\n    this.measureColumns();\n\n    // reset column Y\n    this.colYs = [];\n    for ( var i=0; i < this.cols; i++ ) {\n      this.colYs.push( 0 );\n    }\n\n    this.maxY = 0;\n    this.horizontalColIndex = 0;\n  };\n\n  proto.measureColumns = function() {\n    this.getContainerWidth();\n    // if columnWidth is 0, default to outerWidth of first item\n    if ( !this.columnWidth ) {\n      var firstItem = this.items[0];\n      var firstItemElem = firstItem && firstItem.element;\n      // columnWidth fall back to item of first element\n      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||\n        // if first elem has no width, default to size of container\n        this.containerWidth;\n    }\n\n    var columnWidth = this.columnWidth += this.gutter;\n\n    // calculate columns\n    var containerWidth = this.containerWidth + this.gutter;\n    var cols = containerWidth / columnWidth;\n    // fix rounding errors, typically with gutters\n    var excess = columnWidth - containerWidth % columnWidth;\n    // if overshoot is less than a pixel, round up, otherwise floor it\n    var mathMethod = excess && excess < 1 ? 'round' : 'floor';\n    cols = Math[ mathMethod ]( cols );\n    this.cols = Math.max( cols, 1 );\n  };\n\n  proto.getContainerWidth = function() {\n    // container is parent if fit width\n    var isFitWidth = this._getOption('fitWidth');\n    var container = isFitWidth ? this.element.parentNode : this.element;\n    // check that this.size and size are there\n    // IE8 triggers resize on body size change, so they might not be\n    var size = getSize( container );\n    this.containerWidth = size && size.innerWidth;\n  };\n\n  proto._getItemLayoutPosition = function( item ) {\n    item.getSize();\n    // how many columns does this brick span\n    var remainder = item.size.outerWidth % this.columnWidth;\n    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';\n    // round if off by 1 pixel, otherwise use ceil\n    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );\n    colSpan = Math.min( colSpan, this.cols );\n    // use horizontal or top column position\n    var colPosMethod = this.options.horizontalOrder ?\n      '_getHorizontalColPosition' : '_getTopColPosition';\n    var colPosition = this[ colPosMethod ]( colSpan, item );\n    // position the brick\n    var position = {\n      x: this.columnWidth * colPosition.col,\n      y: colPosition.y\n    };\n    // apply setHeight to necessary columns\n    var setHeight = colPosition.y + item.size.outerHeight;\n    var setMax = colSpan + colPosition.col;\n    for ( var i = colPosition.col; i < setMax; i++ ) {\n      this.colYs[i] = setHeight;\n    }\n\n    return position;\n  };\n\n  proto._getTopColPosition = function( colSpan ) {\n    var colGroup = this._getTopColGroup( colSpan );\n    // get the minimum Y value from the columns\n    var minimumY = Math.min.apply( Math, colGroup );\n\n    return {\n      col: colGroup.indexOf( minimumY ),\n      y: minimumY,\n    };\n  };\n\n  /**\n   * @param {Number} colSpan - number of columns the element spans\n   * @returns {Array} colGroup\n   */\n  proto._getTopColGroup = function( colSpan ) {\n    if ( colSpan < 2 ) {\n      // if brick spans only one column, use all the column Ys\n      return this.colYs;\n    }\n\n    var colGroup = [];\n    // how many different places could this brick fit horizontally\n    var groupCount = this.cols + 1 - colSpan;\n    // for each group potential horizontal position\n    for ( var i = 0; i < groupCount; i++ ) {\n      colGroup[i] = this._getColGroupY( i, colSpan );\n    }\n    return colGroup;\n  };\n\n  proto._getColGroupY = function( col, colSpan ) {\n    if ( colSpan < 2 ) {\n      return this.colYs[ col ];\n    }\n    // make an array of colY values for that one group\n    var groupColYs = this.colYs.slice( col, col + colSpan );\n    // and get the max value of the array\n    return Math.max.apply( Math, groupColYs );\n  };\n\n  // get column position based on horizontal index. #873\n  proto._getHorizontalColPosition = function( colSpan, item ) {\n    var col = this.horizontalColIndex % this.cols;\n    var isOver = colSpan > 1 && col + colSpan > this.cols;\n    // shift to next row if item can't fit on current row\n    col = isOver ? 0 : col;\n    // don't let zero-size items take up space\n    var hasSize = item.size.outerWidth && item.size.outerHeight;\n    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;\n\n    return {\n      col: col,\n      y: this._getColGroupY( col, colSpan ),\n    };\n  };\n\n  proto._manageStamp = function( stamp ) {\n    var stampSize = getSize( stamp );\n    var offset = this._getElementOffset( stamp );\n    // get the columns that this stamp affects\n    var isOriginLeft = this._getOption('originLeft');\n    var firstX = isOriginLeft ? offset.left : offset.right;\n    var lastX = firstX + stampSize.outerWidth;\n    var firstCol = Math.floor( firstX / this.columnWidth );\n    firstCol = Math.max( 0, firstCol );\n    var lastCol = Math.floor( lastX / this.columnWidth );\n    // lastCol should not go over if multiple of columnWidth #425\n    lastCol -= lastX % this.columnWidth ? 0 : 1;\n    lastCol = Math.min( this.cols - 1, lastCol );\n    // set colYs to bottom of the stamp\n\n    var isOriginTop = this._getOption('originTop');\n    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +\n      stampSize.outerHeight;\n    for ( var i = firstCol; i <= lastCol; i++ ) {\n      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );\n    }\n  };\n\n  proto._getContainerSize = function() {\n    this.maxY = Math.max.apply( Math, this.colYs );\n    var size = {\n      height: this.maxY\n    };\n\n    if ( this._getOption('fitWidth') ) {\n      size.width = this._getContainerFitWidth();\n    }\n\n    return size;\n  };\n\n  proto._getContainerFitWidth = function() {\n    var unusedCols = 0;\n    // count unused columns\n    var i = this.cols;\n    while ( --i ) {\n      if ( this.colYs[i] !== 0 ) {\n        break;\n      }\n      unusedCols++;\n    }\n    // fit container to columns that have been used\n    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;\n  };\n\n  proto.needsResizeLayout = function() {\n    var previousWidth = this.containerWidth;\n    this.getContainerWidth();\n    return previousWidth != this.containerWidth;\n  };\n\n  return Masonry;\n\n}));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWFzb25yeS1sYXlvdXQvZGlzdC9tYXNvbnJ5LnBrZ2QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQXlDO0FBQ2hEO0FBQ0EsSUFBSSxpQ0FBd0MsRUFBRSwyQ0FBUSxFQUFFLG1DQUFFO0FBQzFEO0FBQ0EsS0FBSztBQUFBLGtHQUFDO0FBQ04sSUFBSSxLQUFLLEVBWU47O0FBRUgsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBeUM7QUFDaEQ7QUFDQSxJQUFJLHVDQUFnQyxPQUFPLDRsQkFBRTtBQUM3QyxJQUFJLEtBQUssRUFNTjs7QUFFSCxDQUFDOzs7O0FBSUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLElBQXlDO0FBQ2hEO0FBQ0EsSUFBSSx1Q0FBNEIsT0FBTyx3bEJBQUU7QUFDekMsSUFBSSxLQUFLLEVBTU47O0FBRUgsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBeUM7QUFDaEQ7QUFDQSxJQUFJLHVDQUFxRCxPQUFPLGluQkFBRTtBQUNsRSxJQUFJLEtBQUssRUFNTjs7QUFFSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxJQUF5QztBQUNoRDtBQUNBLElBQUksaUNBQStCO0FBQ25DLE1BQU0sMEJBQTRDO0FBQ2xELEtBQUssZ0NBQUU7QUFDUDtBQUNBLEtBQUssNExBQUM7QUFDTixJQUFJLEtBQUssRUFZTjs7QUFFSCxDQUFDOzs7O0FBSUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUF5QztBQUNoRDtBQUNBLElBQUksb0NBQXdCO0FBQzVCLFFBQVEsMEJBQXVCO0FBQy9CLFFBQVEsMEJBQW1CO0FBQzNCLE9BQU8sdUNBQ0QsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ1I7QUFDTCxJQUFJLEtBQUssRUFhTjs7QUFFSCxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBeUM7QUFDaEQ7QUFDQSxJQUFJLGlDQUE0QjtBQUNoQyxRQUFRLDBCQUF1QjtBQUMvQixRQUFRLDBCQUFtQjtBQUMzQixRQUFRLDBCQUFzQjtBQUM5QixRQUFRLDBCQUFRO0FBQ2hCLE9BQU8sZ0NBQ0Q7QUFDTjtBQUNBLE9BQU8sNExBQ0Y7QUFDTCxJQUFJLEtBQUssRUFrQk47O0FBRUgsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQztBQUM3QyxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsa0NBQWtDO0FBQzdDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcscUNBQXFDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHFDQUFxQztBQUNoRCxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QyxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTSxHQUFHLFFBQVEsR0FBRyxVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTSxHQUFHLFFBQVEsR0FBRyxVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFVBQVU7QUFDckIsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSx5Q0FBeUM7O0FBRXpDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUF5QztBQUNoRDtBQUNBLElBQUksaUNBQVE7QUFDWixRQUFRLDBCQUFtQjtBQUMzQixRQUFRLDBCQUFtQjtBQUMzQixPQUFPLG9DQUNELE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUU7QUFDZixJQUFJLEtBQUssRUFZTjs7QUFFSCxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1NuZWF0Ly4vbm9kZV9tb2R1bGVzL21hc29ucnktbGF5b3V0L2Rpc3QvbWFzb25yeS5wa2dkLmpzPzYzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBNYXNvbnJ5IFBBQ0tBR0VEIHY0LjIuMlxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHBzOi8vbWFzb25yeS5kZXNhbmRyby5jb21cbiAqIE1JVCBMaWNlbnNlXG4gKiBieSBEYXZpZCBEZVNhbmRyb1xuICovXG5cbi8qKlxuICogQnJpZGdldCBtYWtlcyBqUXVlcnkgd2lkZ2V0c1xuICogdjIuMC4xXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qIGpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCAnanF1ZXJ5LWJyaWRnZXQvanF1ZXJ5LWJyaWRnZXQnLFsgJ2pxdWVyeScgXSwgZnVuY3Rpb24oIGpRdWVyeSApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIGpRdWVyeSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnanF1ZXJ5JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmpRdWVyeUJyaWRnZXQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmpRdWVyeVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIGpRdWVyeSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gdXRpbHMgLS0tLS0gLy9cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbG9nZ2luZyBlcnJvcnNcbi8vICQuZXJyb3IgYnJlYWtzIGpRdWVyeSBjaGFpbmluZ1xudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24oKSB7fSA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0galF1ZXJ5QnJpZGdldCAtLS0tLSAvL1xuXG5mdW5jdGlvbiBqUXVlcnlCcmlkZ2V0KCBuYW1lc3BhY2UsIFBsdWdpbkNsYXNzLCAkICkge1xuICAkID0gJCB8fCBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcbiAgaWYgKCAhJCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBhZGQgb3B0aW9uIG1ldGhvZCAtPiAkKCkucGx1Z2luKCdvcHRpb24nLCB7Li4ufSlcbiAgaWYgKCAhUGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbiApIHtcbiAgICAvLyBvcHRpb24gc2V0dGVyXG4gICAgUGx1Z2luQ2xhc3MucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICAgICAgLy8gYmFpbCBvdXQgaWYgbm90IGFuIG9iamVjdFxuICAgICAgaWYgKCAhJC5pc1BsYWluT2JqZWN0KCBvcHRzICkgKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHRoaXMub3B0aW9ucywgb3B0cyApO1xuICAgIH07XG4gIH1cblxuICAvLyBtYWtlIGpRdWVyeSBwbHVnaW5cbiAgJC5mblsgbmFtZXNwYWNlIF0gPSBmdW5jdGlvbiggYXJnMCAvKiwgYXJnMSAqLyApIHtcbiAgICBpZiAoIHR5cGVvZiBhcmcwID09ICdzdHJpbmcnICkge1xuICAgICAgLy8gbWV0aG9kIGNhbGwgJCgpLnBsdWdpbiggJ21ldGhvZE5hbWUnLCB7IG9wdGlvbnMgfSApXG4gICAgICAvLyBzaGlmdCBhcmd1bWVudHMgYnkgMVxuICAgICAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuICAgICAgcmV0dXJuIG1ldGhvZENhbGwoIHRoaXMsIGFyZzAsIGFyZ3MgKTtcbiAgICB9XG4gICAgLy8ganVzdCAkKCkucGx1Z2luKHsgb3B0aW9ucyB9KVxuICAgIHBsYWluQ2FsbCggdGhpcywgYXJnMCApO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vICQoKS5wbHVnaW4oJ21ldGhvZE5hbWUnKVxuICBmdW5jdGlvbiBtZXRob2RDYWxsKCAkZWxlbXMsIG1ldGhvZE5hbWUsIGFyZ3MgKSB7XG4gICAgdmFyIHJldHVyblZhbHVlO1xuICAgIHZhciBwbHVnaW5NZXRob2RTdHIgPSAnJCgpLicgKyBuYW1lc3BhY2UgKyAnKFwiJyArIG1ldGhvZE5hbWUgKyAnXCIpJztcblxuICAgICRlbGVtcy5lYWNoKCBmdW5jdGlvbiggaSwgZWxlbSApIHtcbiAgICAgIC8vIGdldCBpbnN0YW5jZVxuICAgICAgdmFyIGluc3RhbmNlID0gJC5kYXRhKCBlbGVtLCBuYW1lc3BhY2UgKTtcbiAgICAgIGlmICggIWluc3RhbmNlICkge1xuICAgICAgICBsb2dFcnJvciggbmFtZXNwYWNlICsgJyBub3QgaW5pdGlhbGl6ZWQuIENhbm5vdCBjYWxsIG1ldGhvZHMsIGkuZS4gJyArXG4gICAgICAgICAgcGx1Z2luTWV0aG9kU3RyICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1ldGhvZCA9IGluc3RhbmNlWyBtZXRob2ROYW1lIF07XG4gICAgICBpZiAoICFtZXRob2QgfHwgbWV0aG9kTmFtZS5jaGFyQXQoMCkgPT0gJ18nICkge1xuICAgICAgICBsb2dFcnJvciggcGx1Z2luTWV0aG9kU3RyICsgJyBpcyBub3QgYSB2YWxpZCBtZXRob2QnICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgbWV0aG9kLCBnZXQgcmV0dXJuIHZhbHVlXG4gICAgICB2YXIgdmFsdWUgPSBtZXRob2QuYXBwbHkoIGluc3RhbmNlLCBhcmdzICk7XG4gICAgICAvLyBzZXQgcmV0dXJuIHZhbHVlIGlmIHZhbHVlIGlzIHJldHVybmVkLCB1c2Ugb25seSBmaXJzdCB2YWx1ZVxuICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiByZXR1cm5WYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkID8gcmV0dXJuVmFsdWUgOiAkZWxlbXM7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFpbkNhbGwoICRlbGVtcywgb3B0aW9ucyApIHtcbiAgICAkZWxlbXMuZWFjaCggZnVuY3Rpb24oIGksIGVsZW0gKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIGVsZW0sIG5hbWVzcGFjZSApO1xuICAgICAgaWYgKCBpbnN0YW5jZSApIHtcbiAgICAgICAgLy8gc2V0IG9wdGlvbnMgJiBpbml0XG4gICAgICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgICAgICBpbnN0YW5jZS5faW5pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBuZXcgaW5zdGFuY2VcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgUGx1Z2luQ2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgICAgJC5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVKUXVlcnkoICQgKTtcblxufVxuXG4vLyAtLS0tLSB1cGRhdGVKUXVlcnkgLS0tLS0gLy9cblxuLy8gc2V0ICQuYnJpZGdldCBmb3IgdjEgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbmZ1bmN0aW9uIHVwZGF0ZUpRdWVyeSggJCApIHtcbiAgaWYgKCAhJCB8fCAoICQgJiYgJC5icmlkZ2V0ICkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gICQuYnJpZGdldCA9IGpRdWVyeUJyaWRnZXQ7XG59XG5cbnVwZGF0ZUpRdWVyeSggalF1ZXJ5IHx8IHdpbmRvdy5qUXVlcnkgKTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBqUXVlcnlCcmlkZ2V0O1xuXG59KSk7XG5cbi8qKlxuICogRXZFbWl0dGVyIHYxLjEuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblxuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCB2YXIgaT0wOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG5cbi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjNcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKiBnbG9iYWxzIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2dldC1zaXplL2dldC1zaXplJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5nZXRTaXplID0gZmFjdG9yeSgpO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2V0IGEgbnVtYmVyIGZyb20gYSBzdHJpbmcsIG5vdCBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGdldFN0eWxlU2l6ZSggdmFsdWUgKSB7XG4gIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAvLyBub3QgYSBwZXJjZW50IGxpa2UgJzEwMCUnLCBhbmQgYSBudW1iZXJcbiAgdmFyIGlzVmFsaWQgPSB2YWx1ZS5pbmRleE9mKCclJykgPT0gLTEgJiYgIWlzTmFOKCBudW0gKTtcbiAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGxvZ0Vycm9yID0gdHlwZW9mIGNvbnNvbGUgPT0gJ3VuZGVmaW5lZCcgPyBub29wIDpcbiAgZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG4gICAgY29uc29sZS5lcnJvciggbWVzc2FnZSApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIG1lYXN1cmVtZW50cyA9IFtcbiAgJ3BhZGRpbmdMZWZ0JyxcbiAgJ3BhZGRpbmdSaWdodCcsXG4gICdwYWRkaW5nVG9wJyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAnbWFyZ2luTGVmdCcsXG4gICdtYXJnaW5SaWdodCcsXG4gICdtYXJnaW5Ub3AnLFxuICAnbWFyZ2luQm90dG9tJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJ1xuXTtcblxudmFyIG1lYXN1cmVtZW50c0xlbmd0aCA9IG1lYXN1cmVtZW50cy5sZW5ndGg7XG5cbmZ1bmN0aW9uIGdldFplcm9TaXplKCkge1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgaW5uZXJXaWR0aDogMCxcbiAgICBpbm5lckhlaWdodDogMCxcbiAgICBvdXRlcldpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwXG4gIH07XG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNpemU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0U3R5bGUsIGdldCBzdHlsZSBvZiBlbGVtZW50LCBjaGVjayBmb3IgRmlyZWZveCBidWdcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICovXG5mdW5jdGlvbiBnZXRTdHlsZSggZWxlbSApIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuICBpZiAoICFzdHlsZSApIHtcbiAgICBsb2dFcnJvciggJ1N0eWxlIHJldHVybmVkICcgKyBzdHlsZSArXG4gICAgICAnLiBBcmUgeW91IHJ1bm5pbmcgdGhpcyBjb2RlIGluIGEgaGlkZGVuIGlmcmFtZSBvbiBGaXJlZm94PyAnICtcbiAgICAgICdTZWUgaHR0cHM6Ly9iaXQubHkvZ2V0c2l6ZWJ1ZzEnICk7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgaXNTZXR1cCA9IGZhbHNlO1xuXG52YXIgaXNCb3hTaXplT3V0ZXI7XG5cbi8qKlxuICogc2V0dXBcbiAqIGNoZWNrIGlzQm94U2l6ZXJPdXRlclxuICogZG8gb24gZmlyc3QgZ2V0U2l6ZSgpIHJhdGhlciB0aGFuIG9uIHBhZ2UgbG9hZCBmb3IgRmlyZWZveCBidWdcbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIHNldHVwIG9uY2VcbiAgaWYgKCBpc1NldHVwICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1NldHVwID0gdHJ1ZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBib3ggc2l6aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIENocm9tZSAmIFNhZmFyaSBtZWFzdXJlIHRoZSBvdXRlci13aWR0aCBvbiBzdHlsZS53aWR0aCBvbiBib3JkZXItYm94IGVsZW1zXG4gICAqIElFMTEgJiBGaXJlZm94PDI5IG1lYXN1cmVzIHRoZSBpbm5lci13aWR0aFxuICAgKi9cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBkaXYuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGRpdiApO1xuICAvLyByb3VuZCB2YWx1ZSBmb3IgYnJvd3NlciB6b29tLiBkZXNhbmRyby9tYXNvbnJ5IzkyOFxuICBpc0JveFNpemVPdXRlciA9IE1hdGgucm91bmQoIGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKSApID09IDIwMDtcbiAgZ2V0U2l6ZS5pc0JveFNpemVPdXRlciA9IGlzQm94U2l6ZU91dGVyO1xuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNpemUoIGVsZW0gKSB7XG4gIHNldHVwKCk7XG5cbiAgLy8gdXNlIHF1ZXJ5U2VsZXRvciBpZiBlbGVtIGlzIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cblxuICAvLyBkbyBub3QgcHJvY2VlZCBvbiBub24tb2JqZWN0c1xuICBpZiAoICFlbGVtIHx8IHR5cGVvZiBlbGVtICE9ICdvYmplY3QnIHx8ICFlbGVtLm5vZGVUeXBlICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBlbGVtICk7XG5cbiAgLy8gaWYgaGlkZGVuLCBldmVyeXRoaW5nIGlzIDBcbiAgaWYgKCBzdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcbiAgICByZXR1cm4gZ2V0WmVyb1NpemUoKTtcbiAgfVxuXG4gIHZhciBzaXplID0ge307XG4gIHNpemUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICBzaXplLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gIHZhciBpc0JvcmRlckJveCA9IHNpemUuaXNCb3JkZXJCb3ggPSBzdHlsZS5ib3hTaXppbmcgPT0gJ2JvcmRlci1ib3gnO1xuXG4gIC8vIGdldCBhbGwgbWVhc3VyZW1lbnRzXG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgdmFyIHZhbHVlID0gc3R5bGVbIG1lYXN1cmVtZW50IF07XG4gICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgLy8gYW55ICdhdXRvJywgJ21lZGl1bScgdmFsdWUgd2lsbCBiZSAwXG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9ICFpc05hTiggbnVtICkgPyBudW0gOiAwO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdXaWR0aCA9IHNpemUucGFkZGluZ0xlZnQgKyBzaXplLnBhZGRpbmdSaWdodDtcbiAgdmFyIHBhZGRpbmdIZWlnaHQgPSBzaXplLnBhZGRpbmdUb3AgKyBzaXplLnBhZGRpbmdCb3R0b207XG4gIHZhciBtYXJnaW5XaWR0aCA9IHNpemUubWFyZ2luTGVmdCArIHNpemUubWFyZ2luUmlnaHQ7XG4gIHZhciBtYXJnaW5IZWlnaHQgPSBzaXplLm1hcmdpblRvcCArIHNpemUubWFyZ2luQm90dG9tO1xuICB2YXIgYm9yZGVyV2lkdGggPSBzaXplLmJvcmRlckxlZnRXaWR0aCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgdmFyIGJvcmRlckhlaWdodCA9IHNpemUuYm9yZGVyVG9wV2lkdGggKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuXG4gIHZhciBpc0JvcmRlckJveFNpemVPdXRlciA9IGlzQm9yZGVyQm94ICYmIGlzQm94U2l6ZU91dGVyO1xuXG4gIC8vIG92ZXJ3cml0ZSB3aWR0aCBhbmQgaGVpZ2h0IGlmIHdlIGNhbiBnZXQgaXQgZnJvbSBzdHlsZVxuICB2YXIgc3R5bGVXaWR0aCA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKTtcbiAgaWYgKCBzdHlsZVdpZHRoICE9PSBmYWxzZSApIHtcbiAgICBzaXplLndpZHRoID0gc3R5bGVXaWR0aCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIH1cblxuICB2YXIgc3R5bGVIZWlnaHQgPSBnZXRTdHlsZVNpemUoIHN0eWxlLmhlaWdodCApO1xuICBpZiAoIHN0eWxlSGVpZ2h0ICE9PSBmYWxzZSApIHtcbiAgICBzaXplLmhlaWdodCA9IHN0eWxlSGVpZ2h0ICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuICB9XG5cbiAgc2l6ZS5pbm5lcldpZHRoID0gc2l6ZS53aWR0aCAtICggcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgc2l6ZS5pbm5lckhlaWdodCA9IHNpemUuaGVpZ2h0IC0gKCBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG5cbiAgc2l6ZS5vdXRlcldpZHRoID0gc2l6ZS53aWR0aCArIG1hcmdpbldpZHRoO1xuICBzaXplLm91dGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBtYXJnaW5IZWlnaHQ7XG5cbiAgcmV0dXJuIHNpemU7XG59XG5cbnJldHVybiBnZXRTaXplO1xuXG59KTtcblxuLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4yXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcicsZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhbmRhcmQgbWV0aG9kIG5hbWUgZmlyc3RcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdW4tcHJlZml4ZWRcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXNTZWxlY3Rvcic7XG4gICAgfVxuICAgIC8vIGNoZWNrIHZlbmRvciBwcmVmaXhlc1xuICAgIHZhciBwcmVmaXhlcyA9IFsgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycgXTtcblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfTtcblxufSkpO1xuXG4vKipcbiAqIEZpenp5IFVJIHV0aWxzIHYyLjAuN1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cblxuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgZmZFbGVtcyA9IFtdO1xuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIGlmICggISggZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAvLyBmaWx0ZXJcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRFbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggY2hpbGRFbGVtc1tpXSApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZmRWxlbXM7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIHZhciB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggY2FsbGJhY2sgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuXG4vKipcbiAqIE91dGxheWVyIEl0ZW1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnb3V0bGF5ZXIvaXRlbScsW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnlcbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0ge307XG4gICAgd2luZG93Lk91dGxheWVyLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgZ2V0U2l6ZSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBpc0VtcHR5T2JqKCBvYmogKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvcCA9IG51bGw7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDU1MzIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2l0aW9uID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zaXRpb24nIDogJ1dlYmtpdFRyYW5zaXRpb24nO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2Zvcm0gPT0gJ3N0cmluZycgP1xuICAndHJhbnNmb3JtJyA6ICdXZWJraXRUcmFuc2Zvcm0nO1xuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufVsgdHJhbnNpdGlvblByb3BlcnR5IF07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHZlbmRvclByb3BlcnRpZXMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRHVyYXRpb24nLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdQcm9wZXJ0eScsXG4gIHRyYW5zaXRpb25EZWxheTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0RlbGF5J1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBJdGVtKCBlbGVtZW50LCBsYXlvdXQgKSB7XG4gIGlmICggIWVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gcGFyZW50IGxheW91dCBjbGFzcywgaS5lLiBNYXNvbnJ5LCBJc290b3BlLCBvciBQYWNrZXJ5XG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICB0aGlzLnBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5wcm90by5jb25zdHJ1Y3RvciA9IEl0ZW07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxucHJvdG8uaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xucHJvdG8uY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxucHJvdG8uZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB2YXIgeFZhbHVlID0gc3R5bGVbIGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcgXTtcbiAgdmFyIHlWYWx1ZSA9IHN0eWxlWyBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbScgXTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KCB4VmFsdWUgKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KCB5VmFsdWUgKTtcbiAgLy8gY29udmVydCBwZXJjZW50IHRvIHBpeGVsc1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIGlmICggeFZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB4ID0gKCB4IC8gMTAwICkgKiBsYXlvdXRTaXplLndpZHRoO1xuICB9XG4gIGlmICggeVZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSApIHtcbiAgICB5ID0gKCB5IC8gMTAwICkgKiBsYXlvdXRTaXplLmhlaWdodDtcbiAgfVxuICAvLyBjbGVhbiB1cCAnYXV0bycgb3Igb3RoZXIgbm9uLWludGVnZXIgdmFsdWVzXG4gIHggPSBpc05hTiggeCApID8gMCA6IHg7XG4gIHkgPSBpc05hTiggeSApID8gMCA6IHk7XG4gIC8vIHJlbW92ZSBwYWRkaW5nIGZyb20gbWVhc3VyZW1lbnRcbiAgeCAtPSBpc09yaWdpbkxlZnQgPyBsYXlvdXRTaXplLnBhZGRpbmdMZWZ0IDogbGF5b3V0U2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHkgLT0gaXNPcmlnaW5Ub3AgPyBsYXlvdXRTaXplLnBhZGRpbmdUb3AgOiBsYXlvdXRTaXplLnBhZGRpbmdCb3R0b207XG5cbiAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgdGhpcy5wb3NpdGlvbi55ID0geTtcbn07XG5cbi8vIHNldCBzZXR0bGVkIHBvc2l0aW9uLCBhcHBseSBwYWRkaW5nXG5wcm90by5sYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciBzdHlsZSA9IHt9O1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcblxuICAvLyB4XG4gIHZhciB4UGFkZGluZyA9IGlzT3JpZ2luTGVmdCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgdmFyIHhQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIHZhciB4UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLnggKyBsYXlvdXRTaXplWyB4UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHhQcm9wZXJ0eSBdID0gdGhpcy5nZXRYVmFsdWUoIHggKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHhSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICAvLyB5XG4gIHZhciB5UGFkZGluZyA9IGlzT3JpZ2luVG9wID8gJ3BhZGRpbmdUb3AnIDogJ3BhZGRpbmdCb3R0b20nO1xuICB2YXIgeVByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgeVJlc2V0UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnkgKyBsYXlvdXRTaXplWyB5UGFkZGluZyBdO1xuICAvLyBzZXQgaW4gcGVyY2VudGFnZSBvciBwaXhlbHNcbiAgc3R5bGVbIHlQcm9wZXJ0eSBdID0gdGhpcy5nZXRZVmFsdWUoIHkgKTtcbiAgLy8gcmVzZXQgb3RoZXIgcHJvcGVydHlcbiAgc3R5bGVbIHlSZXNldFByb3BlcnR5IF0gPSAnJztcblxuICB0aGlzLmNzcyggc3R5bGUgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdsYXlvdXQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZ2V0WFZhbHVlID0gZnVuY3Rpb24oIHggKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiAhaXNIb3Jpem9udGFsID9cbiAgICAoICggeCAvIHRoaXMubGF5b3V0LnNpemUud2lkdGggKSAqIDEwMCApICsgJyUnIDogeCArICdweCc7XG59O1xuXG5wcm90by5nZXRZVmFsdWUgPSBmdW5jdGlvbiggeSApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmIGlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHkgLyB0aGlzLmxheW91dC5zaXplLmhlaWdodCApICogMTAwICkgKyAnJScgOiB5ICsgJ3B4Jztcbn07XG5cbnByb3RvLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAvLyBnZXQgY3VycmVudCB4ICYgeSBmcm9tIHRvcC9sZWZ0XG4gIHZhciBjdXJYID0gdGhpcy5wb3NpdGlvbi54O1xuICB2YXIgY3VyWSA9IHRoaXMucG9zaXRpb24ueTtcblxuICB2YXIgZGlkTm90TW92ZSA9IHggPT0gdGhpcy5wb3NpdGlvbi54ICYmIHkgPT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIC8vIHNhdmUgZW5kIHBvc2l0aW9uXG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcblxuICAvLyBpZiBkaWQgbm90IG1vdmUgYW5kIG5vdCB0cmFuc2l0aW9uaW5nLCBqdXN0IGdvIHRvIGxheW91dFxuICBpZiAoIGRpZE5vdE1vdmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICkge1xuICAgIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJhbnNYID0geCAtIGN1clg7XG4gIHZhciB0cmFuc1kgPSB5IC0gY3VyWTtcbiAgdmFyIHRyYW5zaXRpb25TdHlsZSA9IHt9O1xuICB0cmFuc2l0aW9uU3R5bGUudHJhbnNmb3JtID0gdGhpcy5nZXRUcmFuc2xhdGUoIHRyYW5zWCwgdHJhbnNZICk7XG5cbiAgdGhpcy50cmFuc2l0aW9uKHtcbiAgICB0bzogdHJhbnNpdGlvblN0eWxlLFxuICAgIG9uVHJhbnNpdGlvbkVuZDoge1xuICAgICAgdHJhbnNmb3JtOiB0aGlzLmxheW91dFBvc2l0aW9uXG4gICAgfSxcbiAgICBpc0NsZWFuaW5nOiB0cnVlXG4gIH0pO1xufTtcblxucHJvdG8uZ2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIC8vIGZsaXAgY29vcmlkaW5hdGVzIGlmIG9yaWdpbiBvbiByaWdodCBvciBib3R0b21cbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHggPSBpc09yaWdpbkxlZnQgPyB4IDogLXg7XG4gIHkgPSBpc09yaWdpblRvcCA/IHkgOiAteTtcbiAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbn07XG5cbi8vIG5vbiB0cmFuc2l0aW9uICsgdHJhbnNmb3JtIHN1cHBvcnRcbnByb3RvLmdvVG8gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG59O1xuXG5wcm90by5tb3ZlVG8gPSBwcm90by5fdHJhbnNpdGlvblRvO1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnBvc2l0aW9uLnggPSBwYXJzZUZsb2F0KCB4ICk7XG4gIHRoaXMucG9zaXRpb24ueSA9IHBhcnNlRmxvYXQoIHkgKTtcbn07XG5cbi8vIC0tLS0tIHRyYW5zaXRpb24gLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSBDU1NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZFxuICovXG5cbi8vIG5vbiB0cmFuc2l0aW9uLCBqdXN0IHRyaWdnZXIgY2FsbGJhY2tcbnByb3RvLl9ub25UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG4gIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgIHRoaXMuX3JlbW92ZVN0eWxlcyggYXJncy50byApO1xuICB9XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG4vKipcbiAqIHByb3BlciB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIGFyZ3VtZW50c1xuICogICBAcGFyYW0ge09iamVjdH0gdG8gLSBzdHlsZSB0byB0cmFuc2l0aW9uIHRvXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gc3R5bGUgdG8gc3RhcnQgdHJhbnNpdGlvbiBmcm9tXG4gKiAgIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbGVhbmluZyAtIHJlbW92ZXMgdHJhbnNpdGlvbiBzdHlsZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmQgLSBjYWxsYmFja1xuICovXG5wcm90by50cmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIC8vIHJlZGlyZWN0IHRvIG5vblRyYW5zaXRpb24gaWYgbm8gdHJhbnNpdGlvbiBkdXJhdGlvblxuICBpZiAoICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMuX25vblRyYW5zaXRpb24oIGFyZ3MgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGtlZXAgdHJhY2sgb2Ygb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrIGJ5IGNzcyBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcCBdID0gYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICBmb3IgKCBwcm9wIGluIGFyZ3MudG8gKSB7XG4gICAgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcCBdID0gdHJ1ZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdG8gY2xlYW4gdXAgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICAgIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wIF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmcm9tIHN0eWxlc1xuICBpZiAoIGFyZ3MuZnJvbSApIHtcbiAgICB0aGlzLmNzcyggYXJncy5mcm9tICk7XG4gICAgLy8gZm9yY2UgcmVkcmF3LiBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgICB2YXIgaCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaGFjayBmb3IgSlNIaW50IHRvIGh1c2ggYWJvdXQgdW51c2VkIHZhclxuICAgIGggPSBudWxsO1xuICB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uXG4gIHRoaXMuZW5hYmxlVHJhbnNpdGlvbiggYXJncy50byApO1xuICAvLyBzZXQgc3R5bGVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcblxuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbn07XG5cbi8vIGRhc2ggYmVmb3JlIGFsbCBjYXAgbGV0dGVycywgaW5jbHVkaW5nIGZpcnN0IGZvclxuLy8gV2Via2l0VHJhbnNmb3JtID0+IC13ZWJraXQtdHJhbnNmb3JtXG5mdW5jdGlvbiB0b0Rhc2hlZEFsbCggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oW0EtWl0pL2csIGZ1bmN0aW9uKCAkMSApIHtcbiAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSAnb3BhY2l0eSwnICsgdG9EYXNoZWRBbGwoIHRyYW5zZm9ybVByb3BlcnR5ICk7XG5cbnByb3RvLmVuYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigvKiBzdHlsZSAqLykge1xuICAvLyBIQUNLIGNoYW5naW5nIHRyYW5zaXRpb25Qcm9wZXJ0eSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gIC8vIHdpbGwgY2F1c2UgdHJhbnNpdGlvbiB0byBqdW1wXG4gIGlmICggdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFrZSBgdHJhbnNpdGlvbjogZm9vLCBiYXIsIGJhemAgZnJvbSBzdHlsZSBvYmplY3RcbiAgLy8gSEFDSyB1bi1jb21tZW50IHRoaXMgd2hlbiBlbmFibGVUcmFuc2l0aW9uIGNhbiB3b3JrXG4gIC8vIHdoaWxlIGEgdHJhbnNpdGlvbiBpcyBoYXBwZW5pbmdcbiAgLy8gdmFyIHRyYW5zaXRpb25WYWx1ZXMgPSBbXTtcbiAgLy8gZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gIC8vICAgLy8gZGFzaC1pZnkgY2FtZWxDYXNlZCBwcm9wZXJ0aWVzIGxpa2UgV2Via2l0VHJhbnNpdGlvblxuICAvLyAgIHByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgLy8gICB0cmFuc2l0aW9uVmFsdWVzLnB1c2goIHRvRGFzaGVkQWxsKCBwcm9wICkgKTtcbiAgLy8gfVxuICAvLyBtdW5nZSBudW1iZXIgdG8gbWlsbGlzZWNvbmQsIHRvIG1hdGNoIHN0YWdnZXJcbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gKyAnbXMnIDogZHVyYXRpb247XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHRoaXMuc3RhZ2dlckRlbGF5IHx8IDBcbiAgfSk7XG4gIC8vIGxpc3RlbiBmb3IgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5vbndlYmtpdFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxucHJvdG8ub25vdHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG4vLyBwcm9wZXJ0aWVzIHRoYXQgSSBtdW5nZSB0byBtYWtlIG15IGxpZmUgZWFzaWVyXG52YXIgZGFzaGVkVmVuZG9yUHJvcGVydGllcyA9IHtcbiAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zZm9ybSdcbn07XG5cbnByb3RvLm9udHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzcmVnYXJkIGJ1YmJsZWQgZXZlbnRzIGZyb20gY2hpbGRyZW5cbiAgaWYgKCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBnZXQgcHJvcGVydHkgbmFtZSBvZiB0cmFuc2l0aW9uZWQgcHJvcGVydHksIGNvbnZlcnQgdG8gcHJlZml4LWZyZWVcbiAgdmFyIHByb3BlcnR5TmFtZSA9IGRhc2hlZFZlbmRvclByb3BlcnRpZXNbIGV2ZW50LnByb3BlcnR5TmFtZSBdIHx8IGV2ZW50LnByb3BlcnR5TmFtZTtcblxuICAvLyByZW1vdmUgcHJvcGVydHkgdGhhdCBoYXMgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgZGVsZXRlIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3BlcnR5TmFtZSBdO1xuICAvLyBjaGVjayBpZiBhbnkgcHJvcGVydGllcyBhcmUgc3RpbGwgdHJhbnNpdGlvbmluZ1xuICBpZiAoIGlzRW1wdHlPYmooIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXMgKSApIHtcbiAgICAvLyBhbGwgcHJvcGVydGllcyBoYXZlIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuICB9XG4gIC8vIGNsZWFuIHN0eWxlXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLmNsZWFuICkge1xuICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlWyBldmVudC5wcm9wZXJ0eU5hbWUgXSA9ICcnO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcGVydHlOYW1lIF07XG4gIH1cbiAgLy8gdHJpZ2dlciBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2tcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24ub25FbmQgKSB7XG4gICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgICBvblRyYW5zaXRpb25FbmQuY2FsbCggdGhpcyApO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCggJ3RyYW5zaXRpb25FbmQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgc3R5bGUgcHJvcGVydHkgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbioqL1xucHJvdG8uX3JlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgLy8gY2xlYW4gdXAgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdmFyIGNsZWFuU3R5bGUgPSB7fTtcbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgY2xlYW5TdHlsZVsgcHJvcCBdID0gJyc7XG4gIH1cbiAgdGhpcy5jc3MoIGNsZWFuU3R5bGUgKTtcbn07XG5cbnZhciBjbGVhblRyYW5zaXRpb25TdHlsZSA9IHtcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnJyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnJyxcbiAgdHJhbnNpdGlvbkRlbGF5OiAnJ1xufTtcblxucHJvdG8ucmVtb3ZlVHJhbnNpdGlvblN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgdHJhbnNpdGlvblxuICB0aGlzLmNzcyggY2xlYW5UcmFuc2l0aW9uU3R5bGUgKTtcbn07XG5cbi8vIC0tLS0tIHN0YWdnZXIgLS0tLS0gLy9cblxucHJvdG8uc3RhZ2dlciA9IGZ1bmN0aW9uKCBkZWxheSApIHtcbiAgZGVsYXkgPSBpc05hTiggZGVsYXkgKSA/IDAgOiBkZWxheTtcbiAgdGhpcy5zdGFnZ2VyRGVsYXkgPSBkZWxheSArICdtcyc7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5wcm90by5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICB9KTtcbiAgdGhpcy5oaWRlKCk7XG59O1xuXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNIaWRkZW47XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgndmlzaWJsZVN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgdG86IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vblJldmVhbFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgdmlzaWJsZVxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIGhpZGRlblxuICBpZiAoICF0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdyZXZlYWwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgc3R5bGUgcHJvcGVydHkgdXNlIGZvciBoaWRlL3JldmVhbCB0cmFuc2l0aW9uIGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlUHJvcGVydHkgLSBoaWRkZW5TdHlsZS92aXNpYmxlU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbnByb3RvLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkgPSBmdW5jdGlvbiggc3R5bGVQcm9wZXJ0eSApIHtcbiAgdmFyIG9wdGlvblN0eWxlID0gdGhpcy5sYXlvdXQub3B0aW9uc1sgc3R5bGVQcm9wZXJ0eSBdO1xuICAvLyB1c2Ugb3BhY2l0eVxuICBpZiAoIG9wdGlvblN0eWxlLm9wYWNpdHkgKSB7XG4gICAgcmV0dXJuICdvcGFjaXR5JztcbiAgfVxuICAvLyBnZXQgZmlyc3QgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gb3B0aW9uU3R5bGUgKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnByb3RvLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2V0IGZsYWdcbiAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgnaGlkZGVuU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25IaWRlVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIHRvOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIC8vIGtlZXAgaGlkZGVuIHN0dWZmIGhpZGRlblxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vbkhpZGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIGhpZGRlblxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIHVuLWhpZGRlblxuICBpZiAoIHRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2hpZGUnKTtcbiAgfVxufTtcblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICcnLFxuICAgIGxlZnQ6ICcnLFxuICAgIHJpZ2h0OiAnJyxcbiAgICB0b3A6ICcnLFxuICAgIGJvdHRvbTogJycsXG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgdHJhbnNmb3JtOiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG5cbi8qIVxuICogT3V0bGF5ZXIgdjIuMS4xXG4gKiB0aGUgYnJhaW5zIGFuZCBndXRzIG9mIGEgbGF5b3V0IGxpYnJhcnlcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnb3V0bGF5ZXIvb3V0bGF5ZXInLFtcbiAgICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdmaXp6eS11aS11dGlscy91dGlscycsXG4gICAgICAgICcuL2l0ZW0nXG4gICAgICBdLFxuICAgICAgZnVuY3Rpb24oIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0pO1xuICAgICAgfVxuICAgICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2l0ZW0nKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5PdXRsYXllci5JdGVtXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gdmFycyAtLS0tLSAvL1xuXG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xudmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG52YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE91dGxheWVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xudmFyIEdVSUQgPSAwO1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIE91dGxheWVyIGludGFuY2VzXG52YXIgaW5zdGFuY2VzID0ge307XG5cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnQsIFN0cmluZ30gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBPdXRsYXllciggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgdmFyIHF1ZXJ5RWxlbWVudCA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBpZiAoICFxdWVyeUVsZW1lbnQgKSB7XG4gICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciAnICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgK1xuICAgICAgICAnOiAnICsgKCBxdWVyeUVsZW1lbnQgfHwgZWxlbWVudCApICk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBxdWVyeUVsZW1lbnQ7XG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cblxuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMgKTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcblxuICAvLyBhZGQgaWQgZm9yIE91dGxheWVyLmdldEZyb21FbGVtZW50XG4gIHZhciBpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcblxuICAvLyBraWNrIGl0IG9mZlxuICB0aGlzLl9jcmVhdGUoKTtcblxuICB2YXIgaXNJbml0TGF5b3V0ID0gdGhpcy5fZ2V0T3B0aW9uKCdpbml0TGF5b3V0Jyk7XG4gIGlmICggaXNJbml0TGF5b3V0ICkge1xuICAgIHRoaXMubGF5b3V0KCk7XG4gIH1cbn1cblxuLy8gc2V0dGluZ3MgYXJlIGZvciBpbnRlcm5hbCB1c2Ugb25seVxuT3V0bGF5ZXIubmFtZXNwYWNlID0gJ291dGxheWVyJztcbk91dGxheWVyLkl0ZW0gPSBJdGVtO1xuXG4vLyBkZWZhdWx0IG9wdGlvbnNcbk91dGxheWVyLmRlZmF1bHRzID0ge1xuICBjb250YWluZXJTdHlsZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGluaXRMYXlvdXQ6IHRydWUsXG4gIG9yaWdpbkxlZnQ6IHRydWUsXG4gIG9yaWdpblRvcDogdHJ1ZSxcbiAgcmVzaXplOiB0cnVlLFxuICByZXNpemVDb250YWluZXI6IHRydWUsXG4gIC8vIGl0ZW0gb3B0aW9uc1xuICB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjRzJyxcbiAgaGlkZGVuU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuMDAxKSdcbiAgfSxcbiAgdmlzaWJsZVN0eWxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufTtcblxudmFyIHByb3RvID0gT3V0bGF5ZXIucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnV0aWxzLmV4dGVuZCggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBzZXQgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqL1xucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIHV0aWxzLmV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG4vKipcbiAqIGdldCBiYWNrd2FyZHMgY29tcGF0aWJsZSBvcHRpb24gdmFsdWUsIGNoZWNrIG9sZCBuYW1lXG4gKi9cbnByb3RvLl9nZXRPcHRpb24gPSBmdW5jdGlvbiggb3B0aW9uICkge1xuICB2YXIgb2xkT3B0aW9uID0gdGhpcy5jb25zdHJ1Y3Rvci5jb21wYXRPcHRpb25zWyBvcHRpb24gXTtcbiAgcmV0dXJuIG9sZE9wdGlvbiAmJiB0aGlzLm9wdGlvbnNbIG9sZE9wdGlvbiBdICE9PSB1bmRlZmluZWQgP1xuICAgIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gOiB0aGlzLm9wdGlvbnNbIG9wdGlvbiBdO1xufTtcblxuT3V0bGF5ZXIuY29tcGF0T3B0aW9ucyA9IHtcbiAgLy8gY3VycmVudE5hbWU6IG9sZE5hbWVcbiAgaW5pdExheW91dDogJ2lzSW5pdExheW91dCcsXG4gIGhvcml6b250YWw6ICdpc0hvcml6b250YWwnLFxuICBsYXlvdXRJbnN0YW50OiAnaXNMYXlvdXRJbnN0YW50JyxcbiAgb3JpZ2luTGVmdDogJ2lzT3JpZ2luTGVmdCcsXG4gIG9yaWdpblRvcDogJ2lzT3JpZ2luVG9wJyxcbiAgcmVzaXplOiAnaXNSZXNpemVCb3VuZCcsXG4gIHJlc2l6ZUNvbnRhaW5lcjogJ2lzUmVzaXppbmdDb250YWluZXInXG59O1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBpdGVtcyBmcm9tIGNoaWxkcmVuXG4gIHRoaXMucmVsb2FkSXRlbXMoKTtcbiAgLy8gZWxlbWVudHMgdGhhdCBhZmZlY3QgbGF5b3V0LCBidXQgYXJlIG5vdCBsYWlkIG91dFxuICB0aGlzLnN0YW1wcyA9IFtdO1xuICB0aGlzLnN0YW1wKCB0aGlzLm9wdGlvbnMuc3RhbXAgKTtcbiAgLy8gc2V0IGNvbnRhaW5lciBzdHlsZVxuICB1dGlscy5leHRlbmQoIHRoaXMuZWxlbWVudC5zdHlsZSwgdGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlICk7XG5cbiAgLy8gYmluZCByZXNpemUgbWV0aG9kXG4gIHZhciBjYW5CaW5kUmVzaXplID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemUnKTtcbiAgaWYgKCBjYW5CaW5kUmVzaXplICkge1xuICAgIHRoaXMuYmluZFJlc2l6ZSgpO1xuICB9XG59O1xuXG4vLyBnb2VzIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFnYWluIGFuZCBnZXRzIGJyaWNrcyBpbiBwcm9wZXIgb3JkZXJcbnByb3RvLnJlbG9hZEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICB0aGlzLml0ZW1zID0gdGhpcy5faXRlbWl6ZSggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG59O1xuXG5cbi8qKlxuICogdHVybiBlbGVtZW50cyBpbnRvIE91dGxheWVyLkl0ZW1zIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGNvbGxlY3Rpb24gb2YgbmV3IE91dGxheWVyIEl0ZW1zXG4gKi9cbnByb3RvLl9pdGVtaXplID0gZnVuY3Rpb24oIGVsZW1zICkge1xuXG4gIHZhciBpdGVtRWxlbXMgPSB0aGlzLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzKCBlbGVtcyApO1xuICB2YXIgSXRlbSA9IHRoaXMuY29uc3RydWN0b3IuSXRlbTtcblxuICAvLyBjcmVhdGUgbmV3IE91dGxheWVyIEl0ZW1zIGZvciBjb2xsZWN0aW9uXG4gIHZhciBpdGVtcyA9IFtdO1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbUVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBlbGVtID0gaXRlbUVsZW1zW2ldO1xuICAgIHZhciBpdGVtID0gbmV3IEl0ZW0oIGVsZW0sIHRoaXMgKTtcbiAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gIH1cblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGVsZW1lbnRzIHRvIGJlIHVzZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEhUTUxFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIGl0ZW0gZWxlbWVudHNcbiAqL1xucHJvdG8uX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHJldHVybiB1dGlscy5maWx0ZXJGaW5kRWxlbWVudHMoIGVsZW1zLCB0aGlzLm9wdGlvbnMuaXRlbVNlbGVjdG9yICk7XG59O1xuXG4vKipcbiAqIGdldHRlciBtZXRob2QgZm9yIGdldHRpbmcgaXRlbSBlbGVtZW50c1xuICogQHJldHVybnMge0FycmF5fSBlbGVtcyAtIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5nZXRJdGVtRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gaXRlbS5lbGVtZW50O1xuICB9KTtcbn07XG5cbi8vIC0tLS0tIGluaXQgJiBsYXlvdXQgLS0tLS0gLy9cblxuLyoqXG4gKiBsYXlzIG91dCBhbGwgaXRlbXNcbiAqL1xucHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuXG4gIC8vIGRvbid0IGFuaW1hdGUgZmlyc3QgbGF5b3V0XG4gIHZhciBsYXlvdXRJbnN0YW50ID0gdGhpcy5fZ2V0T3B0aW9uKCdsYXlvdXRJbnN0YW50Jyk7XG4gIHZhciBpc0luc3RhbnQgPSBsYXlvdXRJbnN0YW50ICE9PSB1bmRlZmluZWQgP1xuICAgIGxheW91dEluc3RhbnQgOiAhdGhpcy5faXNMYXlvdXRJbml0ZWQ7XG4gIHRoaXMubGF5b3V0SXRlbXMoIHRoaXMuaXRlbXMsIGlzSW5zdGFudCApO1xuXG4gIC8vIGZsYWcgZm9yIGluaXRhbGl6ZWRcbiAgdGhpcy5faXNMYXlvdXRJbml0ZWQgPSB0cnVlO1xufTtcblxuLy8gX2luaXQgaXMgYWxpYXMgZm9yIGxheW91dFxucHJvdG8uX2luaXQgPSBwcm90by5sYXlvdXQ7XG5cbi8qKlxuICogbG9naWMgYmVmb3JlIGFueSBuZXcgbGF5b3V0XG4gKi9cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldFNpemUoKTtcbn07XG5cblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogZ2V0IG1lYXN1cmVtZW50IGZyb20gb3B0aW9uLCBmb3IgY29sdW1uV2lkdGgsIHJvd0hlaWdodCwgZ3V0dGVyXG4gKiBpZiBvcHRpb24gaXMgU3RyaW5nIC0+IGdldCBlbGVtZW50IGZyb20gc2VsZWN0b3Igc3RyaW5nLCAmIGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGlmIG9wdGlvbiBpcyBFbGVtZW50IC0+IGdldCBzaXplIG9mIGVsZW1lbnRcbiAqIGVsc2UgdXNlIG9wdGlvbiBhcyBhIG51bWJlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZWFzdXJlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSB3aWR0aCBvciBoZWlnaHRcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9nZXRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uKCBtZWFzdXJlbWVudCwgc2l6ZSApIHtcbiAgdmFyIG9wdGlvbiA9IHRoaXMub3B0aW9uc1sgbWVhc3VyZW1lbnQgXTtcbiAgdmFyIGVsZW07XG4gIGlmICggIW9wdGlvbiApIHtcbiAgICAvLyBkZWZhdWx0IHRvIDBcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2Ugb3B0aW9uIGFzIGFuIGVsZW1lbnRcbiAgICBpZiAoIHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgKSB7XG4gICAgICBlbGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wdGlvbiApO1xuICAgIH0gZWxzZSBpZiAoIG9wdGlvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xuICAgICAgZWxlbSA9IG9wdGlvbjtcbiAgICB9XG4gICAgLy8gdXNlIHNpemUgb2YgZWxlbWVudCwgaWYgZWxlbWVudFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSBlbGVtID8gZ2V0U2l6ZSggZWxlbSApWyBzaXplIF0gOiBvcHRpb247XG4gIH1cbn07XG5cbi8qKlxuICogbGF5b3V0IGEgY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5wcm90by5sYXlvdXRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgaXNJbnN0YW50ICkge1xuICBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zRm9yTGF5b3V0KCBpdGVtcyApO1xuXG4gIHRoaXMuX2xheW91dEl0ZW1zKCBpdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgdGhpcy5fcG9zdExheW91dCgpO1xufTtcblxuLyoqXG4gKiBnZXQgdGhlIGl0ZW1zIHRvIGJlIGxhaWQgb3V0XG4gKiB5b3UgbWF5IHdhbnQgdG8gc2tpcCBvdmVyIHNvbWUgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gKi9cbnByb3RvLl9nZXRJdGVtc0ZvckxheW91dCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlciggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgcmV0dXJuICFpdGVtLmlzSWdub3JlZDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGxheW91dCBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbnN0YW50XG4gKi9cbnByb3RvLl9sYXlvdXRJdGVtcyA9IGZ1bmN0aW9uKCBpdGVtcywgaXNJbnN0YW50ICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnbGF5b3V0JywgaXRlbXMgKTtcblxuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIC8vIG5vIGl0ZW1zLCBlbWl0IGV2ZW50IHdpdGggZW1wdHkgYXJyYXlcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcXVldWUgPSBbXTtcblxuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAvLyBnZXQgeC95IG9iamVjdCBmcm9tIG1ldGhvZFxuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiggaXRlbSApO1xuICAgIC8vIGVucXVldWVcbiAgICBwb3NpdGlvbi5pdGVtID0gaXRlbTtcbiAgICBwb3NpdGlvbi5pc0luc3RhbnQgPSBpc0luc3RhbnQgfHwgaXRlbS5pc0xheW91dEluc3RhbnQ7XG4gICAgcXVldWUucHVzaCggcG9zaXRpb24gKTtcbiAgfSwgdGhpcyApO1xuXG4gIHRoaXMuX3Byb2Nlc3NMYXlvdXRRdWV1ZSggcXVldWUgKTtcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gbGF5b3V0IHBvc2l0aW9uXG4gKiBAcGFyYW0ge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IHggYW5kIHkgcG9zaXRpb25cbiAqL1xucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCAvKiBpdGVtICovICkge1xuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufTtcblxuLyoqXG4gKiBpdGVyYXRlIG92ZXIgYXJyYXkgYW5kIHBvc2l0aW9uIGVhY2ggaXRlbVxuICogUmVhc29uIGJlaW5nIC0gc2VwYXJhdGluZyB0aGlzIGxvZ2ljIHByZXZlbnRzICdsYXlvdXQgaW52YWxpZGF0aW9uJ1xuICogdGh4IEBwYXVsX2lyaXNoXG4gKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICovXG5wcm90by5fcHJvY2Vzc0xheW91dFF1ZXVlID0gZnVuY3Rpb24oIHF1ZXVlICkge1xuICB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgcXVldWUuZm9yRWFjaCggZnVuY3Rpb24oIG9iaiwgaSApIHtcbiAgICB0aGlzLl9wb3NpdGlvbkl0ZW0oIG9iai5pdGVtLCBvYmoueCwgb2JqLnksIG9iai5pc0luc3RhbnQsIGkgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gc2V0IHN0YWdnZXIgZnJvbSBvcHRpb24gaW4gbWlsbGlzZWNvbmRzIG51bWJlclxucHJvdG8udXBkYXRlU3RhZ2dlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhZ2dlciA9IHRoaXMub3B0aW9ucy5zdGFnZ2VyO1xuICBpZiAoIHN0YWdnZXIgPT09IG51bGwgfHwgc3RhZ2dlciA9PT0gdW5kZWZpbmVkICkge1xuICAgIHRoaXMuc3RhZ2dlciA9IDA7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc3RhZ2dlciA9IGdldE1pbGxpc2Vjb25kcyggc3RhZ2dlciApO1xuICByZXR1cm4gdGhpcy5zdGFnZ2VyO1xufTtcblxuLyoqXG4gKiBTZXRzIHBvc2l0aW9uIG9mIGl0ZW0gaW4gRE9NXG4gKiBAcGFyYW0ge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IC0gaG9yaXpvbnRhbCBwb3NpdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB2ZXJ0aWNhbCBwb3NpdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnQgLSBkaXNhYmxlcyB0cmFuc2l0aW9uc1xuICovXG5wcm90by5fcG9zaXRpb25JdGVtID0gZnVuY3Rpb24oIGl0ZW0sIHgsIHksIGlzSW5zdGFudCwgaSApIHtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgLy8gaWYgbm90IHRyYW5zaXRpb24sIGp1c3Qgc2V0IENTU1xuICAgIGl0ZW0uZ29UbyggeCwgeSApO1xuICB9IGVsc2Uge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHRoaXMuc3RhZ2dlciApO1xuICAgIGl0ZW0ubW92ZVRvKCB4LCB5ICk7XG4gIH1cbn07XG5cbi8qKlxuICogQW55IGxvZ2ljIHlvdSB3YW50IHRvIGRvIGFmdGVyIGVhY2ggbGF5b3V0LFxuICogaS5lLiBzaXplIHRoZSBjb250YWluZXJcbiAqL1xucHJvdG8uX3Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZXNpemVDb250YWluZXIoKTtcbn07XG5cbnByb3RvLnJlc2l6ZUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXNSZXNpemluZ0NvbnRhaW5lciA9IHRoaXMuX2dldE9wdGlvbigncmVzaXplQ29udGFpbmVyJyk7XG4gIGlmICggIWlzUmVzaXppbmdDb250YWluZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzaXplID0gdGhpcy5fZ2V0Q29udGFpbmVyU2l6ZSgpO1xuICBpZiAoIHNpemUgKSB7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS53aWR0aCwgdHJ1ZSApO1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUuaGVpZ2h0LCBmYWxzZSApO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgd2lkdGggb3IgaGVpZ2h0IG9mIGNvbnRhaW5lciBpZiByZXR1cm5lZFxuICogQHJldHVybnMge09iamVjdH0gc2l6ZVxuICogICBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICovXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IG5vb3A7XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1lYXN1cmUgLSBzaXplIG9mIHdpZHRoIG9yIGhlaWdodFxuICogQHBhcmFtIHtCb29sZWFufSBpc1dpZHRoXG4gKi9cbnByb3RvLl9zZXRDb250YWluZXJNZWFzdXJlID0gZnVuY3Rpb24oIG1lYXN1cmUsIGlzV2lkdGggKSB7XG4gIGlmICggbWVhc3VyZSA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB3aWR0aCBpZiBib3JkZXIgYm94XG4gIGlmICggZWxlbVNpemUuaXNCb3JkZXJCb3ggKSB7XG4gICAgbWVhc3VyZSArPSBpc1dpZHRoID8gZWxlbVNpemUucGFkZGluZ0xlZnQgKyBlbGVtU2l6ZS5wYWRkaW5nUmlnaHQgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyTGVmdFdpZHRoICsgZWxlbVNpemUuYm9yZGVyUmlnaHRXaWR0aCA6XG4gICAgICBlbGVtU2l6ZS5wYWRkaW5nQm90dG9tICsgZWxlbVNpemUucGFkZGluZ1RvcCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJUb3BXaWR0aCArIGVsZW1TaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgbWVhc3VyZSA9IE1hdGgubWF4KCBtZWFzdXJlLCAwICk7XG4gIHRoaXMuZWxlbWVudC5zdHlsZVsgaXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0JyBdID0gbWVhc3VyZSArICdweCc7XG59O1xuXG4vKipcbiAqIGVtaXQgZXZlbnRDb21wbGV0ZSBvbiBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbnByb3RvLl9lbWl0Q29tcGxldGVPbkl0ZW1zID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgaXRlbXMgKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgX3RoaXMuZGlzcGF0Y2hFdmVudCggZXZlbnROYW1lICsgJ0NvbXBsZXRlJywgbnVsbCwgWyBpdGVtcyBdICk7XG4gIH1cblxuICB2YXIgY291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGlmICggIWl0ZW1zIHx8ICFjb3VudCApIHtcbiAgICBvbkNvbXBsZXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRvbmVDb3VudCA9IDA7XG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgZG9uZUNvdW50Kys7XG4gICAgaWYgKCBkb25lQ291bnQgPT0gY291bnQgKSB7XG4gICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gYmluZCBjYWxsYmFja1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLm9uY2UoIGV2ZW50TmFtZSwgdGljayApO1xuICB9KTtcbn07XG5cbi8qKlxuICogZW1pdHMgZXZlbnRzIHZpYSBFdkVtaXR0ZXIgYW5kIGpRdWVyeSBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gbmFtZSBvZiBldmVudFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBvcmlnaW5hbCBldmVudFxuICogQHBhcmFtIHtBcnJheX0gYXJncyAtIGV4dHJhIGFyZ3VtZW50c1xuICovXG5wcm90by5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBhcmdzICkge1xuICAvLyBhZGQgb3JpZ2luYWwgZXZlbnQgdG8gYXJndW1lbnRzXG4gIHZhciBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG5cbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgLy8gc2V0IHRoaXMuJGVsZW1lbnRcbiAgICB0aGlzLiRlbGVtZW50ID0gdGhpcy4kZWxlbWVudCB8fCBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgJGV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgICAgJGV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8ganVzdCB0cmlnZ2VyIHdpdGggdHlwZSBpZiBubyBldmVudCBhdmFpbGFibGVcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggdHlwZSwgYXJncyApO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaWdub3JlICYgc3RhbXBzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblxuLyoqXG4gKiBrZWVwIGl0ZW0gaW4gY29sbGVjdGlvbiwgYnV0IGRvIG5vdCBsYXkgaXQgb3V0XG4gKiBpZ25vcmVkIGl0ZW1zIGRvIG5vdCBnZXQgc2tpcHBlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGl0ZW0uaXNJZ25vcmVkID0gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiByZXR1cm4gaXRlbSB0byBsYXlvdXQgY29sbGVjdGlvblxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLnVuaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBkZWxldGUgaXRlbS5pc0lnbm9yZWQ7XG4gIH1cbn07XG5cbi8qKlxuICogYWRkcyBlbGVtZW50cyB0byBzdGFtcHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBFbGVtZW50LCBvciBTdHJpbmd9IGVsZW1zXG4gKi9cbnByb3RvLnN0YW1wID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHRoaXMuX2ZpbmQoIGVsZW1zICk7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhbXBzID0gdGhpcy5zdGFtcHMuY29uY2F0KCBlbGVtcyApO1xuICAvLyBpZ25vcmVcbiAgZWxlbXMuZm9yRWFjaCggdGhpcy5pZ25vcmUsIHRoaXMgKTtcbn07XG5cbi8qKlxuICogcmVtb3ZlcyBlbGVtZW50cyB0byBzdGFtcHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by51bnN0YW1wID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHRoaXMuX2ZpbmQoIGVsZW1zICk7XG4gIGlmICggIWVsZW1zICl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gZmlsdGVyIG91dCByZW1vdmVkIHN0YW1wIGVsZW1lbnRzXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5zdGFtcHMsIGVsZW0gKTtcbiAgICB0aGlzLnVuaWdub3JlKCBlbGVtICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8qKlxuICogZmluZHMgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7Tm9kZUxpc3QsIEFycmF5LCBFbGVtZW50LCBvciBTdHJpbmd9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zXG4gKi9cbnByb3RvLl9maW5kID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBpZiAoICFlbGVtcyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgc3RyaW5nLCB1c2UgYXJndW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW1zID09ICdzdHJpbmcnICkge1xuICAgIGVsZW1zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW1zICk7XG4gIH1cbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHJldHVybiBlbGVtcztcbn07XG5cbnByb3RvLl9tYW5hZ2VTdGFtcHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5zdGFtcHMgfHwgIXRoaXMuc3RhbXBzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9nZXRCb3VuZGluZ1JlY3QoKTtcblxuICB0aGlzLnN0YW1wcy5mb3JFYWNoKCB0aGlzLl9tYW5hZ2VTdGFtcCwgdGhpcyApO1xufTtcblxuLy8gdXBkYXRlIGJvdW5kaW5nTGVmdCAvIFRvcFxucHJvdG8uX2dldEJvdW5kaW5nUmVjdCA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgYm91bmRpbmcgcmVjdCBmb3IgY29udGFpbmVyIGVsZW1lbnRcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gIHRoaXMuX2JvdW5kaW5nUmVjdCA9IHtcbiAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIHNpemUucGFkZGluZ0xlZnQgKyBzaXplLmJvcmRlckxlZnRXaWR0aCxcbiAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyBzaXplLnBhZGRpbmdUb3AgKyBzaXplLmJvcmRlclRvcFdpZHRoLFxuICAgIHJpZ2h0OiBib3VuZGluZ1JlY3QucmlnaHQgLSAoIHNpemUucGFkZGluZ1JpZ2h0ICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoICksXG4gICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tIC0gKCBzaXplLnBhZGRpbmdCb3R0b20gKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoIClcbiAgfTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdGFtcFxuKiovXG5wcm90by5fbWFuYWdlU3RhbXAgPSBub29wO1xuXG4vKipcbiAqIGdldCB4L3kgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byBjb250YWluZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvZmZzZXQgLSBoYXMgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tXG4gKi9cbnByb3RvLl9nZXRFbGVtZW50T2Zmc2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdGhpc1JlY3QgPSB0aGlzLl9ib3VuZGluZ1JlY3Q7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggZWxlbSApO1xuICB2YXIgb2Zmc2V0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0IC0gdGhpc1JlY3QubGVmdCAtIHNpemUubWFyZ2luTGVmdCxcbiAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgLSB0aGlzUmVjdC50b3AgLSBzaXplLm1hcmdpblRvcCxcbiAgICByaWdodDogdGhpc1JlY3QucmlnaHQgLSBib3VuZGluZ1JlY3QucmlnaHQgLSBzaXplLm1hcmdpblJpZ2h0LFxuICAgIGJvdHRvbTogdGhpc1JlY3QuYm90dG9tIC0gYm91bmRpbmdSZWN0LmJvdHRvbSAtIHNpemUubWFyZ2luQm90dG9tXG4gIH07XG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZW5hYmxlIGV2ZW50IGhhbmRsZXJzIGZvciBsaXN0ZW5lcnNcbi8vIGkuZS4gcmVzaXplIC0+IG9ucmVzaXplXG5wcm90by5oYW5kbGVFdmVudCA9IHV0aWxzLmhhbmRsZUV2ZW50O1xuXG4vKipcbiAqIEJpbmQgbGF5b3V0IHRvIHdpbmRvdyByZXNpemluZ1xuICovXG5wcm90by5iaW5kUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmlzUmVzaXplQm91bmQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBVbmJpbmQgbGF5b3V0IHRvIHdpbmRvdyByZXNpemluZ1xuICovXG5wcm90by51bmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IGZhbHNlO1xufTtcblxucHJvdG8ub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZXNpemUoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBPdXRsYXllciwgJ29ucmVzaXplJywgMTAwICk7XG5cbnByb3RvLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBkb24ndCB0cmlnZ2VyIGlmIHNpemUgZGlkIG5vdCBjaGFuZ2VcbiAgLy8gb3IgaWYgcmVzaXplIHdhcyB1bmJvdW5kLiBTZWUgIzlcbiAgaWYgKCAhdGhpcy5pc1Jlc2l6ZUJvdW5kIHx8ICF0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5sYXlvdXQoKTtcbn07XG5cbi8qKlxuICogY2hlY2sgaWYgbGF5b3V0IGlzIG5lZWRlZCBwb3N0IGxheW91dFxuICogQHJldHVybnMgQm9vbGVhblxuICovXG5wcm90by5uZWVkc1Jlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xuICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgLy8gSUU4IHRyaWdnZXJzIHJlc2l6ZSBvbiBib2R5IHNpemUgY2hhbmdlLCBzbyB0aGV5IG1pZ2h0IG5vdCBiZVxuICB2YXIgaGFzU2l6ZXMgPSB0aGlzLnNpemUgJiYgc2l6ZTtcbiAgcmV0dXJuIGhhc1NpemVzICYmIHNpemUuaW5uZXJXaWR0aCAhPT0gdGhpcy5zaXplLmlubmVyV2lkdGg7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogYWRkIGl0ZW1zIHRvIE91dGxheWVyIGluc3RhbmNlXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbioqL1xucHJvdG8uYWRkSXRlbXMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1pemUoIGVsZW1zICk7XG4gIC8vIGFkZCBpdGVtcyB0byBjb2xsZWN0aW9uXG4gIGlmICggaXRlbXMubGVuZ3RoICkge1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdCggaXRlbXMgKTtcbiAgfVxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIExheW91dCBuZXdseS1hcHBlbmRlZCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmFkZEl0ZW1zKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGxheW91dCBhbmQgcmV2ZWFsIGp1c3QgdGhlIG5ldyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBpdGVtcywgdHJ1ZSApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogTGF5b3V0IHByZXBlbmRlZCBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5wcmVwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuX2l0ZW1pemUoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGl0ZW1zIHRvIGJlZ2lubmluZyBvZiBjb2xsZWN0aW9uXG4gIHZhciBwcmV2aW91c0l0ZW1zID0gdGhpcy5pdGVtcy5zbGljZSgwKTtcbiAgdGhpcy5pdGVtcyA9IGl0ZW1zLmNvbmNhdCggcHJldmlvdXNJdGVtcyApO1xuICAvLyBzdGFydCBuZXcgbGF5b3V0XG4gIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAvLyBsYXlvdXQgbmV3IHN0dWZmIHdpdGhvdXQgdHJhbnNpdGlvblxuICB0aGlzLmxheW91dEl0ZW1zKCBpdGVtcywgdHJ1ZSApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbiAgLy8gbGF5b3V0IHByZXZpb3VzIGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIHByZXZpb3VzSXRlbXMgKTtcbn07XG5cbi8qKlxuICogcmV2ZWFsIGEgY29sbGVjdGlvbiBvZiBpdGVtc1xuICogQHBhcmFtIHtBcnJheSBvZiBPdXRsYXllci5JdGVtc30gaXRlbXNcbiAqL1xucHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmV2ZWFsJywgaXRlbXMgKTtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHN0YWdnZXIgPSB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0sIGkgKSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogc3RhZ2dlciApO1xuICAgIGl0ZW0ucmV2ZWFsKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBoaWRlIGEgY29sbGVjdGlvbiBvZiBpdGVtc1xuICogQHBhcmFtIHtBcnJheSBvZiBPdXRsYXllci5JdGVtc30gaXRlbXNcbiAqL1xucHJvdG8uaGlkZSA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2hpZGUnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5oaWRlKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiByZXZlYWwgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5yZXZlYWxJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBoaWRlIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9LCB7RWxlbWVudH0sIHtOb2RlTGlzdH0gaXRlbXNcbiAqL1xucHJvdG8uaGlkZUl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5oaWRlKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBnZXQgT3V0bGF5ZXIuSXRlbSwgZ2l2ZW4gYW4gRWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge091dGxheWVyLkl0ZW19IGl0ZW1cbiAqL1xucHJvdG8uZ2V0SXRlbSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBsb29wIHRocm91Z2ggaXRlbXMgdG8gZ2V0IHRoZSBvbmUgdGhhdCBtYXRjaGVzXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICBpZiAoIGl0ZW0uZWxlbWVudCA9PSBlbGVtICkge1xuICAgICAgLy8gcmV0dXJuIGl0ZW1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBPdXRsYXllci5JdGVtcywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uZ2V0SXRlbXMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgaXRlbXMgPSBbXTtcbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgICBpZiAoIGl0ZW0gKSB7XG4gICAgICBpdGVtcy5wdXNoKCBpdGVtICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiByZW1vdmUgZWxlbWVudChzKSBmcm9tIGluc3RhbmNlIGFuZCBET01cbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgcmVtb3ZlSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuXG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZW1vdmUnLCByZW1vdmVJdGVtcyApO1xuXG4gIC8vIGJhaWwgaWYgbm8gaXRlbXMgdG8gcmVtb3ZlXG4gIGlmICggIXJlbW92ZUl0ZW1zIHx8ICFyZW1vdmVJdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlSXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5yZW1vdmUoKTtcbiAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLml0ZW1zLCBpdGVtICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tIGRlc3Ryb3kgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGFuZCBkaXNhYmxlIE91dGxheWVyIGluc3RhbmNlXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNsZWFuIHVwIGR5bmFtaWMgc3R5bGVzXG4gIHZhciBzdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcbiAgc3R5bGUuaGVpZ2h0ID0gJyc7XG4gIHN0eWxlLnBvc2l0aW9uID0gJyc7XG4gIHN0eWxlLndpZHRoID0gJyc7XG4gIC8vIGRlc3Ryb3kgaXRlbXNcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgdGhpcy51bmJpbmRSZXNpemUoKTtcblxuICB2YXIgaWQgPSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICBkZWxldGUgaW5zdGFuY2VzWyBpZCBdOyAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGJ5IGlkXG4gIGRlbGV0ZSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO1xuICAvLyByZW1vdmUgZGF0YSBmb3IgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICk7XG4gIH1cblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBPdXRsYXllciBpbnN0YW5jZSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge091dGxheWVyfVxuICovXG5PdXRsYXllci5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgdmFyIGlkID0gZWxlbSAmJiBlbGVtLm91dGxheWVyR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY3JlYXRlIE91dGxheWVyIGNsYXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogY3JlYXRlIGEgbGF5b3V0IGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKi9cbk91dGxheWVyLmNyZWF0ZSA9IGZ1bmN0aW9uKCBuYW1lc3BhY2UsIG9wdGlvbnMgKSB7XG4gIC8vIHN1Yi1jbGFzcyBPdXRsYXllclxuICB2YXIgTGF5b3V0ID0gc3ViY2xhc3MoIE91dGxheWVyICk7XG4gIC8vIGFwcGx5IG5ldyBvcHRpb25zIGFuZCBjb21wYXRPcHRpb25zXG4gIExheW91dC5kZWZhdWx0cyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmRlZmF1bHRzICk7XG4gIHV0aWxzLmV4dGVuZCggTGF5b3V0LmRlZmF1bHRzLCBvcHRpb25zICk7XG4gIExheW91dC5jb21wYXRPcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuY29tcGF0T3B0aW9ucyAgKTtcblxuICBMYXlvdXQubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXG4gIExheW91dC5kYXRhID0gT3V0bGF5ZXIuZGF0YTtcblxuICAvLyBzdWItY2xhc3MgSXRlbVxuICBMYXlvdXQuSXRlbSA9IHN1YmNsYXNzKCBJdGVtICk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVjbGFyYXRpdmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICB1dGlscy5odG1sSW5pdCggTGF5b3V0LCBuYW1lc3BhY2UgKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgYnJpZGdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gbWFrZSBpbnRvIGpRdWVyeSBwbHVnaW5cbiAgaWYgKCBqUXVlcnkgJiYgalF1ZXJ5LmJyaWRnZXQgKSB7XG4gICAgalF1ZXJ5LmJyaWRnZXQoIG5hbWVzcGFjZSwgTGF5b3V0ICk7XG4gIH1cblxuICByZXR1cm4gTGF5b3V0O1xufTtcblxuZnVuY3Rpb24gc3ViY2xhc3MoIFBhcmVudCApIHtcbiAgZnVuY3Rpb24gU3ViQ2xhc3MoKSB7XG4gICAgUGFyZW50LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgfVxuXG4gIFN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFBhcmVudC5wcm90b3R5cGUgKTtcbiAgU3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViQ2xhc3M7XG5cbiAgcmV0dXJuIFN1YkNsYXNzO1xufVxuXG4vLyAtLS0tLSBoZWxwZXJzIC0tLS0tIC8vXG5cbi8vIGhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgaW4gZWFjaCB1bml0XG52YXIgbXNVbml0cyA9IHtcbiAgbXM6IDEsXG4gIHM6IDEwMDBcbn07XG5cbi8vIG11bmdlIHRpbWUtbGlrZSBwYXJhbWV0ZXIgaW50byBtaWxsaXNlY29uZCBudW1iZXJcbi8vICcwLjRzJyAtPiA0MFxuZnVuY3Rpb24gZ2V0TWlsbGlzZWNvbmRzKCB0aW1lICkge1xuICBpZiAoIHR5cGVvZiB0aW1lID09ICdudW1iZXInICkge1xuICAgIHJldHVybiB0aW1lO1xuICB9XG4gIHZhciBtYXRjaGVzID0gdGltZS5tYXRjaCggLyheXFxkKlxcLj9cXGQqKShcXHcqKS8gKTtcbiAgdmFyIG51bSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1sxXTtcbiAgdmFyIHVuaXQgPSBtYXRjaGVzICYmIG1hdGNoZXNbMl07XG4gIGlmICggIW51bS5sZW5ndGggKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgbnVtID0gcGFyc2VGbG9hdCggbnVtICk7XG4gIHZhciBtdWx0ID0gbXNVbml0c1sgdW5pdCBdIHx8IDE7XG4gIHJldHVybiBudW0gKiBtdWx0O1xufVxuXG4vLyAtLS0tLSBmaW4gLS0tLS0gLy9cblxuLy8gYmFjayBpbiBnbG9iYWxcbk91dGxheWVyLkl0ZW0gPSBJdGVtO1xuXG5yZXR1cm4gT3V0bGF5ZXI7XG5cbn0pKTtcblxuLyohXG4gKiBNYXNvbnJ5IHY0LjIuMlxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHBzOi8vbWFzb25yeS5kZXNhbmRyby5jb21cbiAqIE1JVCBMaWNlbnNlXG4gKiBieSBEYXZpZCBEZVNhbmRyb1xuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk1hc29ucnkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggT3V0bGF5ZXIsIGdldFNpemUgKSB7XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXNvbnJ5RGVmaW5pdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGNyZWF0ZSBhbiBPdXRsYXllciBsYXlvdXQgY2xhc3NcbiAgdmFyIE1hc29ucnkgPSBPdXRsYXllci5jcmVhdGUoJ21hc29ucnknKTtcbiAgLy8gaXNGaXRXaWR0aCAtPiBmaXRXaWR0aFxuICBNYXNvbnJ5LmNvbXBhdE9wdGlvbnMuZml0V2lkdGggPSAnaXNGaXRXaWR0aCc7XG5cbiAgdmFyIHByb3RvID0gTWFzb25yeS5wcm90b3R5cGU7XG5cbiAgcHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTaXplKCk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdjb2x1bW5XaWR0aCcsICdvdXRlcldpZHRoJyApO1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnZ3V0dGVyJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5tZWFzdXJlQ29sdW1ucygpO1xuXG4gICAgLy8gcmVzZXQgY29sdW1uIFlcbiAgICB0aGlzLmNvbFlzID0gW107XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuY29sczsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZcy5wdXNoKCAwICk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXhZID0gMDtcbiAgICB0aGlzLmhvcml6b250YWxDb2xJbmRleCA9IDA7XG4gIH07XG5cbiAgcHJvdG8ubWVhc3VyZUNvbHVtbnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgLy8gaWYgY29sdW1uV2lkdGggaXMgMCwgZGVmYXVsdCB0byBvdXRlcldpZHRoIG9mIGZpcnN0IGl0ZW1cbiAgICBpZiAoICF0aGlzLmNvbHVtbldpZHRoICkge1xuICAgICAgdmFyIGZpcnN0SXRlbSA9IHRoaXMuaXRlbXNbMF07XG4gICAgICB2YXIgZmlyc3RJdGVtRWxlbSA9IGZpcnN0SXRlbSAmJiBmaXJzdEl0ZW0uZWxlbWVudDtcbiAgICAgIC8vIGNvbHVtbldpZHRoIGZhbGwgYmFjayB0byBpdGVtIG9mIGZpcnN0IGVsZW1lbnRcbiAgICAgIHRoaXMuY29sdW1uV2lkdGggPSBmaXJzdEl0ZW1FbGVtICYmIGdldFNpemUoIGZpcnN0SXRlbUVsZW0gKS5vdXRlcldpZHRoIHx8XG4gICAgICAgIC8vIGlmIGZpcnN0IGVsZW0gaGFzIG5vIHdpZHRoLCBkZWZhdWx0IHRvIHNpemUgb2YgY29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbldpZHRoID0gdGhpcy5jb2x1bW5XaWR0aCArPSB0aGlzLmd1dHRlcjtcblxuICAgIC8vIGNhbGN1bGF0ZSBjb2x1bW5zXG4gICAgdmFyIGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aCArIHRoaXMuZ3V0dGVyO1xuICAgIHZhciBjb2xzID0gY29udGFpbmVyV2lkdGggLyBjb2x1bW5XaWR0aDtcbiAgICAvLyBmaXggcm91bmRpbmcgZXJyb3JzLCB0eXBpY2FsbHkgd2l0aCBndXR0ZXJzXG4gICAgdmFyIGV4Y2VzcyA9IGNvbHVtbldpZHRoIC0gY29udGFpbmVyV2lkdGggJSBjb2x1bW5XaWR0aDtcbiAgICAvLyBpZiBvdmVyc2hvb3QgaXMgbGVzcyB0aGFuIGEgcGl4ZWwsIHJvdW5kIHVwLCBvdGhlcndpc2UgZmxvb3IgaXRcbiAgICB2YXIgbWF0aE1ldGhvZCA9IGV4Y2VzcyAmJiBleGNlc3MgPCAxID8gJ3JvdW5kJyA6ICdmbG9vcic7XG4gICAgY29scyA9IE1hdGhbIG1hdGhNZXRob2QgXSggY29scyApO1xuICAgIHRoaXMuY29scyA9IE1hdGgubWF4KCBjb2xzLCAxICk7XG4gIH07XG5cbiAgcHJvdG8uZ2V0Q29udGFpbmVyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjb250YWluZXIgaXMgcGFyZW50IGlmIGZpdCB3aWR0aFxuICAgIHZhciBpc0ZpdFdpZHRoID0gdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpO1xuICAgIHZhciBjb250YWluZXIgPSBpc0ZpdFdpZHRoID8gdGhpcy5lbGVtZW50LnBhcmVudE5vZGUgOiB0aGlzLmVsZW1lbnQ7XG4gICAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gICAgLy8gSUU4IHRyaWdnZXJzIHJlc2l6ZSBvbiBib2R5IHNpemUgY2hhbmdlLCBzbyB0aGV5IG1pZ2h0IG5vdCBiZVxuICAgIHZhciBzaXplID0gZ2V0U2l6ZSggY29udGFpbmVyICk7XG4gICAgdGhpcy5jb250YWluZXJXaWR0aCA9IHNpemUgJiYgc2l6ZS5pbm5lcldpZHRoO1xuICB9O1xuXG4gIHByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLmdldFNpemUoKTtcbiAgICAvLyBob3cgbWFueSBjb2x1bW5zIGRvZXMgdGhpcyBicmljayBzcGFuXG4gICAgdmFyIHJlbWFpbmRlciA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICUgdGhpcy5jb2x1bW5XaWR0aDtcbiAgICB2YXIgbWF0aE1ldGhvZCA9IHJlbWFpbmRlciAmJiByZW1haW5kZXIgPCAxID8gJ3JvdW5kJyA6ICdjZWlsJztcbiAgICAvLyByb3VuZCBpZiBvZmYgYnkgMSBwaXhlbCwgb3RoZXJ3aXNlIHVzZSBjZWlsXG4gICAgdmFyIGNvbFNwYW4gPSBNYXRoWyBtYXRoTWV0aG9kIF0oIGl0ZW0uc2l6ZS5vdXRlcldpZHRoIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGNvbFNwYW4gPSBNYXRoLm1pbiggY29sU3BhbiwgdGhpcy5jb2xzICk7XG4gICAgLy8gdXNlIGhvcml6b250YWwgb3IgdG9wIGNvbHVtbiBwb3NpdGlvblxuICAgIHZhciBjb2xQb3NNZXRob2QgPSB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbE9yZGVyID9cbiAgICAgICdfZ2V0SG9yaXpvbnRhbENvbFBvc2l0aW9uJyA6ICdfZ2V0VG9wQ29sUG9zaXRpb24nO1xuICAgIHZhciBjb2xQb3NpdGlvbiA9IHRoaXNbIGNvbFBvc01ldGhvZCBdKCBjb2xTcGFuLCBpdGVtICk7XG4gICAgLy8gcG9zaXRpb24gdGhlIGJyaWNrXG4gICAgdmFyIHBvc2l0aW9uID0ge1xuICAgICAgeDogdGhpcy5jb2x1bW5XaWR0aCAqIGNvbFBvc2l0aW9uLmNvbCxcbiAgICAgIHk6IGNvbFBvc2l0aW9uLnlcbiAgICB9O1xuICAgIC8vIGFwcGx5IHNldEhlaWdodCB0byBuZWNlc3NhcnkgY29sdW1uc1xuICAgIHZhciBzZXRIZWlnaHQgPSBjb2xQb3NpdGlvbi55ICsgaXRlbS5zaXplLm91dGVySGVpZ2h0O1xuICAgIHZhciBzZXRNYXggPSBjb2xTcGFuICsgY29sUG9zaXRpb24uY29sO1xuICAgIGZvciAoIHZhciBpID0gY29sUG9zaXRpb24uY29sOyBpIDwgc2V0TWF4OyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzW2ldID0gc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICBwcm90by5fZ2V0VG9wQ29sUG9zaXRpb24gPSBmdW5jdGlvbiggY29sU3BhbiApIHtcbiAgICB2YXIgY29sR3JvdXAgPSB0aGlzLl9nZXRUb3BDb2xHcm91cCggY29sU3BhbiApO1xuICAgIC8vIGdldCB0aGUgbWluaW11bSBZIHZhbHVlIGZyb20gdGhlIGNvbHVtbnNcbiAgICB2YXIgbWluaW11bVkgPSBNYXRoLm1pbi5hcHBseSggTWF0aCwgY29sR3JvdXAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb2w6IGNvbEdyb3VwLmluZGV4T2YoIG1pbmltdW1ZICksXG4gICAgICB5OiBtaW5pbXVtWSxcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sU3BhbiAtIG51bWJlciBvZiBjb2x1bW5zIHRoZSBlbGVtZW50IHNwYW5zXG4gICAqIEByZXR1cm5zIHtBcnJheX0gY29sR3JvdXBcbiAgICovXG4gIHByb3RvLl9nZXRUb3BDb2xHcm91cCA9IGZ1bmN0aW9uKCBjb2xTcGFuICkge1xuICAgIGlmICggY29sU3BhbiA8IDIgKSB7XG4gICAgICAvLyBpZiBicmljayBzcGFucyBvbmx5IG9uZSBjb2x1bW4sIHVzZSBhbGwgdGhlIGNvbHVtbiBZc1xuICAgICAgcmV0dXJuIHRoaXMuY29sWXM7XG4gICAgfVxuXG4gICAgdmFyIGNvbEdyb3VwID0gW107XG4gICAgLy8gaG93IG1hbnkgZGlmZmVyZW50IHBsYWNlcyBjb3VsZCB0aGlzIGJyaWNrIGZpdCBob3Jpem9udGFsbHlcbiAgICB2YXIgZ3JvdXBDb3VudCA9IHRoaXMuY29scyArIDEgLSBjb2xTcGFuO1xuICAgIC8vIGZvciBlYWNoIGdyb3VwIHBvdGVudGlhbCBob3Jpem9udGFsIHBvc2l0aW9uXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgZ3JvdXBDb3VudDsgaSsrICkge1xuICAgICAgY29sR3JvdXBbaV0gPSB0aGlzLl9nZXRDb2xHcm91cFkoIGksIGNvbFNwYW4gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbEdyb3VwO1xuICB9O1xuXG4gIHByb3RvLl9nZXRDb2xHcm91cFkgPSBmdW5jdGlvbiggY29sLCBjb2xTcGFuICkge1xuICAgIGlmICggY29sU3BhbiA8IDIgKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xZc1sgY29sIF07XG4gICAgfVxuICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgY29sWSB2YWx1ZXMgZm9yIHRoYXQgb25lIGdyb3VwXG4gICAgdmFyIGdyb3VwQ29sWXMgPSB0aGlzLmNvbFlzLnNsaWNlKCBjb2wsIGNvbCArIGNvbFNwYW4gKTtcbiAgICAvLyBhbmQgZ2V0IHRoZSBtYXggdmFsdWUgb2YgdGhlIGFycmF5XG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KCBNYXRoLCBncm91cENvbFlzICk7XG4gIH07XG5cbiAgLy8gZ2V0IGNvbHVtbiBwb3NpdGlvbiBiYXNlZCBvbiBob3Jpem9udGFsIGluZGV4LiAjODczXG4gIHByb3RvLl9nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24gPSBmdW5jdGlvbiggY29sU3BhbiwgaXRlbSApIHtcbiAgICB2YXIgY29sID0gdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggJSB0aGlzLmNvbHM7XG4gICAgdmFyIGlzT3ZlciA9IGNvbFNwYW4gPiAxICYmIGNvbCArIGNvbFNwYW4gPiB0aGlzLmNvbHM7XG4gICAgLy8gc2hpZnQgdG8gbmV4dCByb3cgaWYgaXRlbSBjYW4ndCBmaXQgb24gY3VycmVudCByb3dcbiAgICBjb2wgPSBpc092ZXIgPyAwIDogY29sO1xuICAgIC8vIGRvbid0IGxldCB6ZXJvLXNpemUgaXRlbXMgdGFrZSB1cCBzcGFjZVxuICAgIHZhciBoYXNTaXplID0gaXRlbS5zaXplLm91dGVyV2lkdGggJiYgaXRlbS5zaXplLm91dGVySGVpZ2h0O1xuICAgIHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ID0gaGFzU2l6ZSA/IGNvbCArIGNvbFNwYW4gOiB0aGlzLmhvcml6b250YWxDb2xJbmRleDtcblxuICAgIHJldHVybiB7XG4gICAgICBjb2w6IGNvbCxcbiAgICAgIHk6IHRoaXMuX2dldENvbEdyb3VwWSggY29sLCBjb2xTcGFuICksXG4gICAgfTtcbiAgfTtcblxuICBwcm90by5fbWFuYWdlU3RhbXAgPSBmdW5jdGlvbiggc3RhbXAgKSB7XG4gICAgdmFyIHN0YW1wU2l6ZSA9IGdldFNpemUoIHN0YW1wICk7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoIHN0YW1wICk7XG4gICAgLy8gZ2V0IHRoZSBjb2x1bW5zIHRoYXQgdGhpcyBzdGFtcCBhZmZlY3RzXG4gICAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICAgIHZhciBmaXJzdFggPSBpc09yaWdpbkxlZnQgPyBvZmZzZXQubGVmdCA6IG9mZnNldC5yaWdodDtcbiAgICB2YXIgbGFzdFggPSBmaXJzdFggKyBzdGFtcFNpemUub3V0ZXJXaWR0aDtcbiAgICB2YXIgZmlyc3RDb2wgPSBNYXRoLmZsb29yKCBmaXJzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgZmlyc3RDb2wgPSBNYXRoLm1heCggMCwgZmlyc3RDb2wgKTtcbiAgICB2YXIgbGFzdENvbCA9IE1hdGguZmxvb3IoIGxhc3RYIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIC8vIGxhc3RDb2wgc2hvdWxkIG5vdCBnbyBvdmVyIGlmIG11bHRpcGxlIG9mIGNvbHVtbldpZHRoICM0MjVcbiAgICBsYXN0Q29sIC09IGxhc3RYICUgdGhpcy5jb2x1bW5XaWR0aCA/IDAgOiAxO1xuICAgIGxhc3RDb2wgPSBNYXRoLm1pbiggdGhpcy5jb2xzIC0gMSwgbGFzdENvbCApO1xuICAgIC8vIHNldCBjb2xZcyB0byBib3R0b20gb2YgdGhlIHN0YW1wXG5cbiAgICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICAgIHZhciBzdGFtcE1heFkgPSAoIGlzT3JpZ2luVG9wID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5ib3R0b20gKSArXG4gICAgICBzdGFtcFNpemUub3V0ZXJIZWlnaHQ7XG4gICAgZm9yICggdmFyIGkgPSBmaXJzdENvbDsgaSA8PSBsYXN0Q29sOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzW2ldID0gTWF0aC5tYXgoIHN0YW1wTWF4WSwgdGhpcy5jb2xZc1tpXSApO1xuICAgIH1cbiAgfTtcblxuICBwcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWF4WSA9IE1hdGgubWF4LmFwcGx5KCBNYXRoLCB0aGlzLmNvbFlzICk7XG4gICAgdmFyIHNpemUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMubWF4WVxuICAgIH07XG5cbiAgICBpZiAoIHRoaXMuX2dldE9wdGlvbignZml0V2lkdGgnKSApIHtcbiAgICAgIHNpemUud2lkdGggPSB0aGlzLl9nZXRDb250YWluZXJGaXRXaWR0aCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplO1xuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJGaXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1bnVzZWRDb2xzID0gMDtcbiAgICAvLyBjb3VudCB1bnVzZWQgY29sdW1uc1xuICAgIHZhciBpID0gdGhpcy5jb2xzO1xuICAgIHdoaWxlICggLS1pICkge1xuICAgICAgaWYgKCB0aGlzLmNvbFlzW2ldICE9PSAwICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHVudXNlZENvbHMrKztcbiAgICB9XG4gICAgLy8gZml0IGNvbnRhaW5lciB0byBjb2x1bW5zIHRoYXQgaGF2ZSBiZWVuIHVzZWRcbiAgICByZXR1cm4gKCB0aGlzLmNvbHMgLSB1bnVzZWRDb2xzICkgKiB0aGlzLmNvbHVtbldpZHRoIC0gdGhpcy5ndXR0ZXI7XG4gIH07XG5cbiAgcHJvdG8ubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJldmlvdXNXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG4gICAgdGhpcy5nZXRDb250YWluZXJXaWR0aCgpO1xuICAgIHJldHVybiBwcmV2aW91c1dpZHRoICE9IHRoaXMuY29udGFpbmVyV2lkdGg7XG4gIH07XG5cbiAgcmV0dXJuIE1hc29ucnk7XG5cbn0pKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/masonry-layout/dist/masonry.pkgd.js\n");

          /***/
        },

        /***/"jquery":
        /*!*************************!*\
          !*** external "jQuery" ***!
          \*************************/
        /***/
        function jquery(module) {
          "use strict";

          module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

          /***/
        }

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/
      var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_176988__(moduleId) {
        /******/ // Check if module is in cache
        /******/var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
          /******/return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_176988__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/
      !function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__nested_webpack_require_176988__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_176988__.d(getter, {
            a: getter
          });
          /******/
          return getter;
          /******/
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/
      !function () {
        /******/ // define getter functions for harmony exports
        /******/__nested_webpack_require_176988__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_176988__.o(definition, key) && !__nested_webpack_require_176988__.o(exports, key)) {
              /******/Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      !function () {
        /******/__nested_webpack_require_176988__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      !function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_176988__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
      }();
      /******/
      /************************************************************************/
      /******/
      /******/ // startup
      /******/ // Load entry module and return exports
      /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
      /******/
      var __webpack_exports__ = __nested_webpack_require_176988__("./libs/masonry/masonry.js");
      /******/
      /******/
      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./node_modules/jQuery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jQuery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.10
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2023-02-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
	// Make sure the the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {

			// Support: IE <9 only
			// IE doesn't have `contains` on `document` so we need to check for
			// `documentElement` presence.
			// We need to fall back to `a` when `documentElement` is missing
			// as `ownerDocument` of elements within `<template/>` may have
			// a null one - a default behavior of all modern browsers.
			var adown = a.nodeType === 9 && a.documentElement || a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/masonry/masonry.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});