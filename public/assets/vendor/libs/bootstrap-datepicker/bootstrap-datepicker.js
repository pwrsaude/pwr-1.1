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

/***/ "./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js ***!
  \***********************************************************************************/
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
        /***/"./libs/bootstrap-datepicker/bootstrap-datepicker.js":
        /*!***********************************************************!*\
          !*** ./libs/bootstrap-datepicker/bootstrap-datepicker.js ***!
          \***********************************************************/
        /***/
        function libsBootstrapDatepickerBootstrapDatepickerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2104__) {
          "use strict";

          __nested_webpack_require_2104__.r(__webpack_exports__);
          /* harmony import */
          var bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2104__( /*! bootstrap-datepicker/dist/js/bootstrap-datepicker */"./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");
          /* harmony import */
          var bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_2104__.n(bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__);

          /***/
        },

        /***/"./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js":
        /*!***************************************************************************!*\
          !*** ./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js ***!
          \***************************************************************************/
        /***/
        function node_modulesBootstrapDatepickerDistJsBootstrapDatepickerJs(module, exports, __webpack_require__) {
          eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)\n *\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n */\n\n(function(factory){\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"jquery\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(function($, undefined){\n\tfunction UTCDate(){\n\t\treturn new Date(Date.UTC.apply(Date, arguments));\n\t}\n\tfunction UTCToday(){\n\t\tvar today = new Date();\n\t\treturn UTCDate(today.getFullYear(), today.getMonth(), today.getDate());\n\t}\n\tfunction isUTCEquals(date1, date2) {\n\t\treturn (\n\t\t\tdate1.getUTCFullYear() === date2.getUTCFullYear() &&\n\t\t\tdate1.getUTCMonth() === date2.getUTCMonth() &&\n\t\t\tdate1.getUTCDate() === date2.getUTCDate()\n\t\t);\n\t}\n\tfunction alias(method, deprecationMsg){\n\t\treturn function(){\n\t\t\tif (deprecationMsg !== undefined) {\n\t\t\t\t$.fn.datepicker.deprecated(deprecationMsg);\n\t\t\t}\n\n\t\t\treturn this[method].apply(this, arguments);\n\t\t};\n\t}\n\tfunction isValidDate(d) {\n\t\treturn d && !isNaN(d.getTime());\n\t}\n\n\tvar DateArray = (function(){\n\t\tvar extras = {\n\t\t\tget: function(i){\n\t\t\t\treturn this.slice(i)[0];\n\t\t\t},\n\t\t\tcontains: function(d){\n\t\t\t\t// Array.indexOf is not cross-browser;\n\t\t\t\t// $.inArray doesn't work with Dates\n\t\t\t\tvar val = d && d.valueOf();\n\t\t\t\tfor (var i=0, l=this.length; i < l; i++)\n          // Use date arithmetic to allow dates with different times to match\n          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)\n\t\t\t\t\t\treturn i;\n\t\t\t\treturn -1;\n\t\t\t},\n\t\t\tremove: function(i){\n\t\t\t\tthis.splice(i,1);\n\t\t\t},\n\t\t\treplace: function(new_array){\n\t\t\t\tif (!new_array)\n\t\t\t\t\treturn;\n\t\t\t\tif (!$.isArray(new_array))\n\t\t\t\t\tnew_array = [new_array];\n\t\t\t\tthis.clear();\n\t\t\t\tthis.push.apply(this, new_array);\n\t\t\t},\n\t\t\tclear: function(){\n\t\t\t\tthis.length = 0;\n\t\t\t},\n\t\t\tcopy: function(){\n\t\t\t\tvar a = new DateArray();\n\t\t\t\ta.replace(this);\n\t\t\t\treturn a;\n\t\t\t}\n\t\t};\n\n\t\treturn function(){\n\t\t\tvar a = [];\n\t\t\ta.push.apply(a, arguments);\n\t\t\t$.extend(a, extras);\n\t\t\treturn a;\n\t\t};\n\t})();\n\n\n\t// Picker object\n\n\tvar Datepicker = function(element, options){\n\t\t$.data(element, 'datepicker', this);\n\n\t\tthis._events = [];\n\t\tthis._secondaryEvents = [];\n\n\t\tthis._process_options(options);\n\n\t\tthis.dates = new DateArray();\n\t\tthis.viewDate = this.o.defaultViewDate;\n\t\tthis.focusDate = null;\n\n\t\tthis.element = $(element);\n\t\tthis.isInput = this.element.is('input');\n\t\tthis.inputField = this.isInput ? this.element : this.element.find('input');\n\t\tthis.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;\n\t\tif (this.component && this.component.length === 0)\n\t\t\tthis.component = false;\n\t\tthis.isInline = !this.component && this.element.is('div');\n\n\t\tthis.picker = $(DPGlobal.template);\n\n\t\t// Checking templates and inserting\n\t\tif (this._check_template(this.o.templates.leftArrow)) {\n\t\t\tthis.picker.find('.prev').html(this.o.templates.leftArrow);\n\t\t}\n\n\t\tif (this._check_template(this.o.templates.rightArrow)) {\n\t\t\tthis.picker.find('.next').html(this.o.templates.rightArrow);\n\t\t}\n\n\t\tthis._buildEvents();\n\t\tthis._attachEvents();\n\n\t\tif (this.isInline){\n\t\t\tthis.picker.addClass('datepicker-inline').appendTo(this.element);\n\t\t}\n\t\telse {\n\t\t\tthis.picker.addClass('datepicker-dropdown dropdown-menu');\n\t\t}\n\n\t\tif (this.o.rtl){\n\t\t\tthis.picker.addClass('datepicker-rtl');\n\t\t}\n\n\t\tif (this.o.calendarWeeks) {\n\t\t\tthis.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')\n\t\t\t\t.attr('colspan', function(i, val){\n\t\t\t\t\treturn Number(val) + 1;\n\t\t\t\t});\n\t\t}\n\n\t\tthis._process_options({\n\t\t\tstartDate: this._o.startDate,\n\t\t\tendDate: this._o.endDate,\n\t\t\tdaysOfWeekDisabled: this.o.daysOfWeekDisabled,\n\t\t\tdaysOfWeekHighlighted: this.o.daysOfWeekHighlighted,\n\t\t\tdatesDisabled: this.o.datesDisabled\n\t\t});\n\n\t\tthis._allow_update = false;\n\t\tthis.setViewMode(this.o.startView);\n\t\tthis._allow_update = true;\n\n\t\tthis.fillDow();\n\t\tthis.fillMonths();\n\n\t\tthis.update();\n\n\t\tif (this.isInline){\n\t\t\tthis.show();\n\t\t}\n\t};\n\n\tDatepicker.prototype = {\n\t\tconstructor: Datepicker,\n\n\t\t_resolveViewName: function(view){\n\t\t\t$.each(DPGlobal.viewModes, function(i, viewMode){\n\t\t\t\tif (view === i || $.inArray(view, viewMode.names) !== -1){\n\t\t\t\t\tview = i;\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn view;\n\t\t},\n\n\t\t_resolveDaysOfWeek: function(daysOfWeek){\n\t\t\tif (!$.isArray(daysOfWeek))\n\t\t\t\tdaysOfWeek = daysOfWeek.split(/[,\\s]*/);\n\t\t\treturn $.map(daysOfWeek, Number);\n\t\t},\n\n\t\t_check_template: function(tmp){\n\t\t\ttry {\n\t\t\t\t// If empty\n\t\t\t\tif (tmp === undefined || tmp === \"\") {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\t// If no html, everything ok\n\t\t\t\tif ((tmp.match(/[<>]/g) || []).length <= 0) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t\t// Checking if html is fine\n\t\t\t\tvar jDom = $(tmp);\n\t\t\t\treturn jDom.length > 0;\n\t\t\t}\n\t\t\tcatch (ex) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t},\n\n\t\t_process_options: function(opts){\n\t\t\t// Store raw options for reference\n\t\t\tthis._o = $.extend({}, this._o, opts);\n\t\t\t// Processed options\n\t\t\tvar o = this.o = $.extend({}, this._o);\n\n\t\t\t// Check if \"de-DE\" style date is available, if not language should\n\t\t\t// fallback to 2 letter code eg \"de\"\n\t\t\tvar lang = o.language;\n\t\t\tif (!dates[lang]){\n\t\t\t\tlang = lang.split('-')[0];\n\t\t\t\tif (!dates[lang])\n\t\t\t\t\tlang = defaults.language;\n\t\t\t}\n\t\t\to.language = lang;\n\n\t\t\t// Retrieve view index from any aliases\n\t\t\to.startView = this._resolveViewName(o.startView);\n\t\t\to.minViewMode = this._resolveViewName(o.minViewMode);\n\t\t\to.maxViewMode = this._resolveViewName(o.maxViewMode);\n\n\t\t\t// Check view is between min and max\n\t\t\to.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));\n\n\t\t\t// true, false, or Number > 0\n\t\t\tif (o.multidate !== true){\n\t\t\t\to.multidate = Number(o.multidate) || false;\n\t\t\t\tif (o.multidate !== false)\n\t\t\t\t\to.multidate = Math.max(0, o.multidate);\n\t\t\t}\n\t\t\to.multidateSeparator = String(o.multidateSeparator);\n\n\t\t\to.weekStart %= 7;\n\t\t\to.weekEnd = (o.weekStart + 6) % 7;\n\n\t\t\tvar format = DPGlobal.parseFormat(o.format);\n\t\t\tif (o.startDate !== -Infinity){\n\t\t\t\tif (!!o.startDate){\n\t\t\t\t\tif (o.startDate instanceof Date)\n\t\t\t\t\t\to.startDate = this._local_to_utc(this._zero_time(o.startDate));\n\t\t\t\t\telse\n\t\t\t\t\t\to.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\to.startDate = -Infinity;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (o.endDate !== Infinity){\n\t\t\t\tif (!!o.endDate){\n\t\t\t\t\tif (o.endDate instanceof Date)\n\t\t\t\t\t\to.endDate = this._local_to_utc(this._zero_time(o.endDate));\n\t\t\t\t\telse\n\t\t\t\t\t\to.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\to.endDate = Infinity;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\to.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);\n\t\t\to.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);\n\n\t\t\to.datesDisabled = o.datesDisabled||[];\n\t\t\tif (!$.isArray(o.datesDisabled)) {\n\t\t\t\to.datesDisabled = o.datesDisabled.split(',');\n\t\t\t}\n\t\t\to.datesDisabled = $.map(o.datesDisabled, function(d){\n\t\t\t\treturn DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);\n\t\t\t});\n\n\t\t\tvar plc = String(o.orientation).toLowerCase().split(/\\s+/g),\n\t\t\t\t_plc = o.orientation.toLowerCase();\n\t\t\tplc = $.grep(plc, function(word){\n\t\t\t\treturn /^auto|left|right|top|bottom$/.test(word);\n\t\t\t});\n\t\t\to.orientation = {x: 'auto', y: 'auto'};\n\t\t\tif (!_plc || _plc === 'auto')\n\t\t\t\t; // no action\n\t\t\telse if (plc.length === 1){\n\t\t\t\tswitch (plc[0]){\n\t\t\t\t\tcase 'top':\n\t\t\t\t\tcase 'bottom':\n\t\t\t\t\t\to.orientation.y = plc[0];\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'left':\n\t\t\t\t\tcase 'right':\n\t\t\t\t\t\to.orientation.x = plc[0];\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\t_plc = $.grep(plc, function(word){\n\t\t\t\t\treturn /^left|right$/.test(word);\n\t\t\t\t});\n\t\t\t\to.orientation.x = _plc[0] || 'auto';\n\n\t\t\t\t_plc = $.grep(plc, function(word){\n\t\t\t\t\treturn /^top|bottom$/.test(word);\n\t\t\t\t});\n\t\t\t\to.orientation.y = _plc[0] || 'auto';\n\t\t\t}\n\t\t\tif (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {\n\t\t\t\to.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);\n\t\t\t} else if (o.defaultViewDate) {\n\t\t\t\tvar year = o.defaultViewDate.year || new Date().getFullYear();\n\t\t\t\tvar month = o.defaultViewDate.month || 0;\n\t\t\t\tvar day = o.defaultViewDate.day || 1;\n\t\t\t\to.defaultViewDate = UTCDate(year, month, day);\n\t\t\t} else {\n\t\t\t\to.defaultViewDate = UTCToday();\n\t\t\t}\n\t\t},\n\t\t_applyEvents: function(evs){\n\t\t\tfor (var i=0, el, ch, ev; i < evs.length; i++){\n\t\t\t\tel = evs[i][0];\n\t\t\t\tif (evs[i].length === 2){\n\t\t\t\t\tch = undefined;\n\t\t\t\t\tev = evs[i][1];\n\t\t\t\t} else if (evs[i].length === 3){\n\t\t\t\t\tch = evs[i][1];\n\t\t\t\t\tev = evs[i][2];\n\t\t\t\t}\n\t\t\t\tel.on(ev, ch);\n\t\t\t}\n\t\t},\n\t\t_unapplyEvents: function(evs){\n\t\t\tfor (var i=0, el, ev, ch; i < evs.length; i++){\n\t\t\t\tel = evs[i][0];\n\t\t\t\tif (evs[i].length === 2){\n\t\t\t\t\tch = undefined;\n\t\t\t\t\tev = evs[i][1];\n\t\t\t\t} else if (evs[i].length === 3){\n\t\t\t\t\tch = evs[i][1];\n\t\t\t\t\tev = evs[i][2];\n\t\t\t\t}\n\t\t\t\tel.off(ev, ch);\n\t\t\t}\n\t\t},\n\t\t_buildEvents: function(){\n            var events = {\n                keyup: $.proxy(function(e){\n                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)\n                        this.update();\n                }, this),\n                keydown: $.proxy(this.keydown, this),\n                paste: $.proxy(this.paste, this)\n            };\n\n            if (this.o.showOnFocus === true) {\n                events.focus = $.proxy(this.show, this);\n            }\n\n            if (this.isInput) { // single input\n                this._events = [\n                    [this.element, events]\n                ];\n            }\n            // component: input + button\n            else if (this.component && this.inputField.length) {\n                this._events = [\n                    // For components that are not readonly, allow keyboard nav\n                    [this.inputField, events],\n                    [this.component, {\n                        click: $.proxy(this.show, this)\n                    }]\n                ];\n            }\n\t\t\telse {\n\t\t\t\tthis._events = [\n\t\t\t\t\t[this.element, {\n\t\t\t\t\t\tclick: $.proxy(this.show, this),\n\t\t\t\t\t\tkeydown: $.proxy(this.keydown, this)\n\t\t\t\t\t}]\n\t\t\t\t];\n\t\t\t}\n\t\t\tthis._events.push(\n\t\t\t\t// Component: listen for blur on element descendants\n\t\t\t\t[this.element, '*', {\n\t\t\t\t\tblur: $.proxy(function(e){\n\t\t\t\t\t\tthis._focused_from = e.target;\n\t\t\t\t\t}, this)\n\t\t\t\t}],\n\t\t\t\t// Input: listen for blur on element\n\t\t\t\t[this.element, {\n\t\t\t\t\tblur: $.proxy(function(e){\n\t\t\t\t\t\tthis._focused_from = e.target;\n\t\t\t\t\t}, this)\n\t\t\t\t}]\n\t\t\t);\n\n\t\t\tif (this.o.immediateUpdates) {\n\t\t\t\t// Trigger input updates immediately on changed year/month\n\t\t\t\tthis._events.push([this.element, {\n\t\t\t\t\t'changeYear changeMonth': $.proxy(function(e){\n\t\t\t\t\t\tthis.update(e.date);\n\t\t\t\t\t}, this)\n\t\t\t\t}]);\n\t\t\t}\n\n\t\t\tthis._secondaryEvents = [\n\t\t\t\t[this.picker, {\n\t\t\t\t\tclick: $.proxy(this.click, this)\n\t\t\t\t}],\n\t\t\t\t[this.picker, '.prev, .next', {\n\t\t\t\t\tclick: $.proxy(this.navArrowsClick, this)\n\t\t\t\t}],\n\t\t\t\t[this.picker, '.day:not(.disabled)', {\n\t\t\t\t\tclick: $.proxy(this.dayCellClick, this)\n\t\t\t\t}],\n\t\t\t\t[$(window), {\n\t\t\t\t\tresize: $.proxy(this.place, this)\n\t\t\t\t}],\n\t\t\t\t[$(document), {\n\t\t\t\t\t'mousedown touchstart': $.proxy(function(e){\n\t\t\t\t\t\t// Clicked outside the datepicker, hide it\n\t\t\t\t\t\tif (!(\n\t\t\t\t\t\t\tthis.element.is(e.target) ||\n\t\t\t\t\t\t\tthis.element.find(e.target).length ||\n\t\t\t\t\t\t\tthis.picker.is(e.target) ||\n\t\t\t\t\t\t\tthis.picker.find(e.target).length ||\n\t\t\t\t\t\t\tthis.isInline\n\t\t\t\t\t\t)){\n\t\t\t\t\t\t\tthis.hide();\n\t\t\t\t\t\t}\n\t\t\t\t\t}, this)\n\t\t\t\t}]\n\t\t\t];\n\t\t},\n\t\t_attachEvents: function(){\n\t\t\tthis._detachEvents();\n\t\t\tthis._applyEvents(this._events);\n\t\t},\n\t\t_detachEvents: function(){\n\t\t\tthis._unapplyEvents(this._events);\n\t\t},\n\t\t_attachSecondaryEvents: function(){\n\t\t\tthis._detachSecondaryEvents();\n\t\t\tthis._applyEvents(this._secondaryEvents);\n\t\t},\n\t\t_detachSecondaryEvents: function(){\n\t\t\tthis._unapplyEvents(this._secondaryEvents);\n\t\t},\n\t\t_trigger: function(event, altdate){\n\t\t\tvar date = altdate || this.dates.get(-1),\n\t\t\t\tlocal_date = this._utc_to_local(date);\n\n\t\t\tthis.element.trigger({\n\t\t\t\ttype: event,\n\t\t\t\tdate: local_date,\n\t\t\t\tviewMode: this.viewMode,\n\t\t\t\tdates: $.map(this.dates, this._utc_to_local),\n\t\t\t\tformat: $.proxy(function(ix, format){\n\t\t\t\t\tif (arguments.length === 0){\n\t\t\t\t\t\tix = this.dates.length - 1;\n\t\t\t\t\t\tformat = this.o.format;\n\t\t\t\t\t} else if (typeof ix === 'string'){\n\t\t\t\t\t\tformat = ix;\n\t\t\t\t\t\tix = this.dates.length - 1;\n\t\t\t\t\t}\n\t\t\t\t\tformat = format || this.o.format;\n\t\t\t\t\tvar date = this.dates.get(ix);\n\t\t\t\t\treturn DPGlobal.formatDate(date, format, this.o.language);\n\t\t\t\t}, this)\n\t\t\t});\n\t\t},\n\n\t\tshow: function(){\n\t\t\tif (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))\n\t\t\t\treturn;\n\t\t\tif (!this.isInline)\n\t\t\t\tthis.picker.appendTo(this.o.container);\n\t\t\tthis.place();\n\t\t\tthis.picker.show();\n\t\t\tthis._attachSecondaryEvents();\n\t\t\tthis._trigger('show');\n\t\t\tif ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {\n\t\t\t\t$(this.element).blur();\n\t\t\t}\n\t\t\treturn this;\n\t\t},\n\n\t\thide: function(){\n\t\t\tif (this.isInline || !this.picker.is(':visible'))\n\t\t\t\treturn this;\n\t\t\tthis.focusDate = null;\n\t\t\tthis.picker.hide().detach();\n\t\t\tthis._detachSecondaryEvents();\n\t\t\tthis.setViewMode(this.o.startView);\n\n\t\t\tif (this.o.forceParse && this.inputField.val())\n\t\t\t\tthis.setValue();\n\t\t\tthis._trigger('hide');\n\t\t\treturn this;\n\t\t},\n\n\t\tdestroy: function(){\n\t\t\tthis.hide();\n\t\t\tthis._detachEvents();\n\t\t\tthis._detachSecondaryEvents();\n\t\t\tthis.picker.remove();\n\t\t\tdelete this.element.data().datepicker;\n\t\t\tif (!this.isInput){\n\t\t\t\tdelete this.element.data().date;\n\t\t\t}\n\t\t\treturn this;\n\t\t},\n\n\t\tpaste: function(e){\n\t\t\tvar dateString;\n\t\t\tif (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types\n\t\t\t\t&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {\n\t\t\t\tdateString = e.originalEvent.clipboardData.getData('text/plain');\n\t\t\t} else if (window.clipboardData) {\n\t\t\t\tdateString = window.clipboardData.getData('Text');\n\t\t\t} else {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tthis.setDate(dateString);\n\t\t\tthis.update();\n\t\t\te.preventDefault();\n\t\t},\n\n\t\t_utc_to_local: function(utc){\n\t\t\tif (!utc) {\n\t\t\t\treturn utc;\n\t\t\t}\n\n\t\t\tvar local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));\n\n\t\t\tif (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {\n\t\t\t\tlocal = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));\n\t\t\t}\n\n\t\t\treturn local;\n\t\t},\n\t\t_local_to_utc: function(local){\n\t\t\treturn local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));\n\t\t},\n\t\t_zero_time: function(local){\n\t\t\treturn local && new Date(local.getFullYear(), local.getMonth(), local.getDate());\n\t\t},\n\t\t_zero_utc_time: function(utc){\n\t\t\treturn utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());\n\t\t},\n\n\t\tgetDates: function(){\n\t\t\treturn $.map(this.dates, this._utc_to_local);\n\t\t},\n\n\t\tgetUTCDates: function(){\n\t\t\treturn $.map(this.dates, function(d){\n\t\t\t\treturn new Date(d);\n\t\t\t});\n\t\t},\n\n\t\tgetDate: function(){\n\t\t\treturn this._utc_to_local(this.getUTCDate());\n\t\t},\n\n\t\tgetUTCDate: function(){\n\t\t\tvar selected_date = this.dates.get(-1);\n\t\t\tif (selected_date !== undefined) {\n\t\t\t\treturn new Date(selected_date);\n\t\t\t} else {\n\t\t\t\treturn null;\n\t\t\t}\n\t\t},\n\n\t\tclearDates: function(){\n\t\t\tthis.inputField.val('');\n\t\t\tthis.update();\n\t\t\tthis._trigger('changeDate');\n\n\t\t\tif (this.o.autoclose) {\n\t\t\t\tthis.hide();\n\t\t\t}\n\t\t},\n\n\t\tsetDates: function(){\n\t\t\tvar args = $.isArray(arguments[0]) ? arguments[0] : arguments;\n\t\t\tthis.update.apply(this, args);\n\t\t\tthis._trigger('changeDate');\n\t\t\tthis.setValue();\n\t\t\treturn this;\n\t\t},\n\n\t\tsetUTCDates: function(){\n\t\t\tvar args = $.isArray(arguments[0]) ? arguments[0] : arguments;\n\t\t\tthis.setDates.apply(this, $.map(args, this._utc_to_local));\n\t\t\treturn this;\n\t\t},\n\n\t\tsetDate: alias('setDates'),\n\t\tsetUTCDate: alias('setUTCDates'),\n\t\tremove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),\n\n\t\tsetValue: function(){\n\t\t\tvar formatted = this.getFormattedDate();\n\t\t\tthis.inputField.val(formatted);\n\t\t\treturn this;\n\t\t},\n\n\t\tgetFormattedDate: function(format){\n\t\t\tif (format === undefined)\n\t\t\t\tformat = this.o.format;\n\n\t\t\tvar lang = this.o.language;\n\t\t\treturn $.map(this.dates, function(d){\n\t\t\t\treturn DPGlobal.formatDate(d, format, lang);\n\t\t\t}).join(this.o.multidateSeparator);\n\t\t},\n\n\t\tgetStartDate: function(){\n\t\t\treturn this.o.startDate;\n\t\t},\n\n\t\tsetStartDate: function(startDate){\n\t\t\tthis._process_options({startDate: startDate});\n\t\t\tthis.update();\n\t\t\tthis.updateNavArrows();\n\t\t\treturn this;\n\t\t},\n\n\t\tgetEndDate: function(){\n\t\t\treturn this.o.endDate;\n\t\t},\n\n\t\tsetEndDate: function(endDate){\n\t\t\tthis._process_options({endDate: endDate});\n\t\t\tthis.update();\n\t\t\tthis.updateNavArrows();\n\t\t\treturn this;\n\t\t},\n\n\t\tsetDaysOfWeekDisabled: function(daysOfWeekDisabled){\n\t\t\tthis._process_options({daysOfWeekDisabled: daysOfWeekDisabled});\n\t\t\tthis.update();\n\t\t\treturn this;\n\t\t},\n\n\t\tsetDaysOfWeekHighlighted: function(daysOfWeekHighlighted){\n\t\t\tthis._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});\n\t\t\tthis.update();\n\t\t\treturn this;\n\t\t},\n\n\t\tsetDatesDisabled: function(datesDisabled){\n\t\t\tthis._process_options({datesDisabled: datesDisabled});\n\t\t\tthis.update();\n\t\t\treturn this;\n\t\t},\n\n\t\tplace: function(){\n\t\t\tif (this.isInline)\n\t\t\t\treturn this;\n\t\t\tvar calendarWidth = this.picker.outerWidth(),\n\t\t\t\tcalendarHeight = this.picker.outerHeight(),\n\t\t\t\tvisualPadding = 10,\n\t\t\t\tcontainer = $(this.o.container),\n\t\t\t\twindowWidth = container.width(),\n\t\t\t\tscrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),\n\t\t\t\tappendOffset = container.offset();\n\n\t\t\tvar parentsZindex = [0];\n\t\t\tthis.element.parents().each(function(){\n\t\t\t\tvar itemZIndex = $(this).css('z-index');\n\t\t\t\tif (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));\n\t\t\t});\n\t\t\tvar zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;\n\t\t\tvar offset = this.component ? this.component.parent().offset() : this.element.offset();\n\t\t\tvar height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);\n\t\t\tvar width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);\n\t\t\tvar left = offset.left - appendOffset.left;\n\t\t\tvar top = offset.top - appendOffset.top;\n\n\t\t\tif (this.o.container !== 'body') {\n\t\t\t\ttop += scrollTop;\n\t\t\t}\n\n\t\t\tthis.picker.removeClass(\n\t\t\t\t'datepicker-orient-top datepicker-orient-bottom '+\n\t\t\t\t'datepicker-orient-right datepicker-orient-left'\n\t\t\t);\n\n\t\t\tif (this.o.orientation.x !== 'auto'){\n\t\t\t\tthis.picker.addClass('datepicker-orient-' + this.o.orientation.x);\n\t\t\t\tif (this.o.orientation.x === 'right')\n\t\t\t\t\tleft -= calendarWidth - width;\n\t\t\t}\n\t\t\t// auto x orientation is best-placement: if it crosses a window\n\t\t\t// edge, fudge it sideways\n\t\t\telse {\n\t\t\t\tif (offset.left < 0) {\n\t\t\t\t\t// component is outside the window on the left side. Move it into visible range\n\t\t\t\t\tthis.picker.addClass('datepicker-orient-left');\n\t\t\t\t\tleft -= offset.left - visualPadding;\n\t\t\t\t} else if (left + calendarWidth > windowWidth) {\n\t\t\t\t\t// the calendar passes the widow right edge. Align it to component right side\n\t\t\t\t\tthis.picker.addClass('datepicker-orient-right');\n\t\t\t\t\tleft += width - calendarWidth;\n\t\t\t\t} else {\n\t\t\t\t\tif (this.o.rtl) {\n\t\t\t\t\t\t// Default to right\n\t\t\t\t\t\tthis.picker.addClass('datepicker-orient-right');\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Default to left\n\t\t\t\t\t\tthis.picker.addClass('datepicker-orient-left');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// auto y orientation is best-situation: top or bottom, no fudging,\n\t\t\t// decision based on which shows more of the calendar\n\t\t\tvar yorient = this.o.orientation.y,\n\t\t\t\ttop_overflow;\n\t\t\tif (yorient === 'auto'){\n\t\t\t\ttop_overflow = -scrollTop + top - calendarHeight;\n\t\t\t\tyorient = top_overflow < 0 ? 'bottom' : 'top';\n\t\t\t}\n\n\t\t\tthis.picker.addClass('datepicker-orient-' + yorient);\n\t\t\tif (yorient === 'top')\n\t\t\t\ttop -= calendarHeight + parseInt(this.picker.css('padding-top'));\n\t\t\telse\n\t\t\t\ttop += height;\n\n\t\t\tif (this.o.rtl) {\n\t\t\t\tvar right = windowWidth - (left + width);\n\t\t\t\tthis.picker.css({\n\t\t\t\t\ttop: top,\n\t\t\t\t\tright: right,\n\t\t\t\t\tzIndex: zIndex\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tthis.picker.css({\n\t\t\t\t\ttop: top,\n\t\t\t\t\tleft: left,\n\t\t\t\t\tzIndex: zIndex\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn this;\n\t\t},\n\n\t\t_allow_update: true,\n\t\tupdate: function(){\n\t\t\tif (!this._allow_update)\n\t\t\t\treturn this;\n\n\t\t\tvar oldDates = this.dates.copy(),\n\t\t\t\tdates = [],\n\t\t\t\tfromArgs = false;\n\t\t\tif (arguments.length){\n\t\t\t\t$.each(arguments, $.proxy(function(i, date){\n\t\t\t\t\tif (date instanceof Date)\n\t\t\t\t\t\tdate = this._local_to_utc(date);\n\t\t\t\t\tdates.push(date);\n\t\t\t\t}, this));\n\t\t\t\tfromArgs = true;\n\t\t\t} else {\n\t\t\t\tdates = this.isInput\n\t\t\t\t\t\t? this.element.val()\n\t\t\t\t\t\t: this.element.data('date') || this.inputField.val();\n\t\t\t\tif (dates && this.o.multidate)\n\t\t\t\t\tdates = dates.split(this.o.multidateSeparator);\n\t\t\t\telse\n\t\t\t\t\tdates = [dates];\n\t\t\t\tdelete this.element.data().date;\n\t\t\t}\n\n\t\t\tdates = $.map(dates, $.proxy(function(date){\n\t\t\t\treturn DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);\n\t\t\t}, this));\n\t\t\tdates = $.grep(dates, $.proxy(function(date){\n\t\t\t\treturn (\n\t\t\t\t\t!this.dateWithinRange(date) ||\n\t\t\t\t\t!date\n\t\t\t\t);\n\t\t\t}, this), true);\n\t\t\tthis.dates.replace(dates);\n\n\t\t\tif (this.o.updateViewDate) {\n\t\t\t\tif (this.dates.length)\n\t\t\t\t\tthis.viewDate = new Date(this.dates.get(-1));\n\t\t\t\telse if (this.viewDate < this.o.startDate)\n\t\t\t\t\tthis.viewDate = new Date(this.o.startDate);\n\t\t\t\telse if (this.viewDate > this.o.endDate)\n\t\t\t\t\tthis.viewDate = new Date(this.o.endDate);\n\t\t\t\telse\n\t\t\t\t\tthis.viewDate = this.o.defaultViewDate;\n\t\t\t}\n\n\t\t\tif (fromArgs){\n\t\t\t\t// setting date by clicking\n\t\t\t\tthis.setValue();\n\t\t\t\tthis.element.change();\n\t\t\t}\n\t\t\telse if (this.dates.length){\n\t\t\t\t// setting date by typing\n\t\t\t\tif (String(oldDates) !== String(this.dates) && fromArgs) {\n\t\t\t\t\tthis._trigger('changeDate');\n\t\t\t\t\tthis.element.change();\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!this.dates.length && oldDates.length) {\n\t\t\t\tthis._trigger('clearDate');\n\t\t\t\tthis.element.change();\n\t\t\t}\n\n\t\t\tthis.fill();\n\t\t\treturn this;\n\t\t},\n\n\t\tfillDow: function(){\n      if (this.o.showWeekDays) {\n\t\t\tvar dowCnt = this.o.weekStart,\n\t\t\t\thtml = '<tr>';\n\t\t\tif (this.o.calendarWeeks){\n\t\t\t\thtml += '<th class=\"cw\">&#160;</th>';\n\t\t\t}\n\t\t\twhile (dowCnt < this.o.weekStart + 7){\n\t\t\t\thtml += '<th class=\"dow';\n        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)\n          html += ' disabled';\n        html += '\">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';\n\t\t\t}\n\t\t\thtml += '</tr>';\n\t\t\tthis.picker.find('.datepicker-days thead').append(html);\n      }\n\t\t},\n\n\t\tfillMonths: function(){\n      var localDate = this._utc_to_local(this.viewDate);\n\t\t\tvar html = '';\n\t\t\tvar focused;\n\t\t\tfor (var i = 0; i < 12; i++){\n\t\t\t\tfocused = localDate && localDate.getMonth() === i ? ' focused' : '';\n\t\t\t\thtml += '<span class=\"month' + focused + '\">' + dates[this.o.language].monthsShort[i] + '</span>';\n\t\t\t}\n\t\t\tthis.picker.find('.datepicker-months td').html(html);\n\t\t},\n\n\t\tsetRange: function(range){\n\t\t\tif (!range || !range.length)\n\t\t\t\tdelete this.range;\n\t\t\telse\n\t\t\t\tthis.range = $.map(range, function(d){\n\t\t\t\t\treturn d.valueOf();\n\t\t\t\t});\n\t\t\tthis.fill();\n\t\t},\n\n\t\tgetClassNames: function(date){\n\t\t\tvar cls = [],\n\t\t\t\tyear = this.viewDate.getUTCFullYear(),\n\t\t\t\tmonth = this.viewDate.getUTCMonth(),\n\t\t\t\ttoday = UTCToday();\n\t\t\tif (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){\n\t\t\t\tcls.push('old');\n\t\t\t} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){\n\t\t\t\tcls.push('new');\n\t\t\t}\n\t\t\tif (this.focusDate && date.valueOf() === this.focusDate.valueOf())\n\t\t\t\tcls.push('focused');\n\t\t\t// Compare internal UTC date with UTC today, not local today\n\t\t\tif (this.o.todayHighlight && isUTCEquals(date, today)) {\n\t\t\t\tcls.push('today');\n\t\t\t}\n\t\t\tif (this.dates.contains(date) !== -1)\n\t\t\t\tcls.push('active');\n\t\t\tif (!this.dateWithinRange(date)){\n\t\t\t\tcls.push('disabled');\n\t\t\t}\n\t\t\tif (this.dateIsDisabled(date)){\n\t\t\t\tcls.push('disabled', 'disabled-date');\n\t\t\t}\n\t\t\tif ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){\n\t\t\t\tcls.push('highlighted');\n\t\t\t}\n\n\t\t\tif (this.range){\n\t\t\t\tif (date > this.range[0] && date < this.range[this.range.length-1]){\n\t\t\t\t\tcls.push('range');\n\t\t\t\t}\n\t\t\t\tif ($.inArray(date.valueOf(), this.range) !== -1){\n\t\t\t\t\tcls.push('selected');\n\t\t\t\t}\n\t\t\t\tif (date.valueOf() === this.range[0]){\n          cls.push('range-start');\n        }\n        if (date.valueOf() === this.range[this.range.length-1]){\n          cls.push('range-end');\n        }\n\t\t\t}\n\t\t\treturn cls;\n\t\t},\n\n\t\t_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){\n\t\t\tvar html = '';\n\t\t\tvar step = factor / 10;\n\t\t\tvar view = this.picker.find(selector);\n\t\t\tvar startVal = Math.floor(year / factor) * factor;\n\t\t\tvar endVal = startVal + step * 9;\n\t\t\tvar focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;\n\t\t\tvar selected = $.map(this.dates, function(d){\n\t\t\t\treturn Math.floor(d.getUTCFullYear() / step) * step;\n\t\t\t});\n\n\t\t\tvar classes, tooltip, before;\n\t\t\tfor (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {\n\t\t\t\tclasses = [cssClass];\n\t\t\t\ttooltip = null;\n\n\t\t\t\tif (currVal === startVal - step) {\n\t\t\t\t\tclasses.push('old');\n\t\t\t\t} else if (currVal === endVal + step) {\n\t\t\t\t\tclasses.push('new');\n\t\t\t\t}\n\t\t\t\tif ($.inArray(currVal, selected) !== -1) {\n\t\t\t\t\tclasses.push('active');\n\t\t\t\t}\n\t\t\t\tif (currVal < startYear || currVal > endYear) {\n\t\t\t\t\tclasses.push('disabled');\n\t\t\t\t}\n\t\t\t\tif (currVal === focusedVal) {\n\t\t\t\t  classes.push('focused');\n        }\n\n\t\t\t\tif (beforeFn !== $.noop) {\n\t\t\t\t\tbefore = beforeFn(new Date(currVal, 0, 1));\n\t\t\t\t\tif (before === undefined) {\n\t\t\t\t\t\tbefore = {};\n\t\t\t\t\t} else if (typeof before === 'boolean') {\n\t\t\t\t\t\tbefore = {enabled: before};\n\t\t\t\t\t} else if (typeof before === 'string') {\n\t\t\t\t\t\tbefore = {classes: before};\n\t\t\t\t\t}\n\t\t\t\t\tif (before.enabled === false) {\n\t\t\t\t\t\tclasses.push('disabled');\n\t\t\t\t\t}\n\t\t\t\t\tif (before.classes) {\n\t\t\t\t\t\tclasses = classes.concat(before.classes.split(/\\s+/));\n\t\t\t\t\t}\n\t\t\t\t\tif (before.tooltip) {\n\t\t\t\t\t\ttooltip = before.tooltip;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\thtml += '<span class=\"' + classes.join(' ') + '\"' + (tooltip ? ' title=\"' + tooltip + '\"' : '') + '>' + currVal + '</span>';\n\t\t\t}\n\n\t\t\tview.find('.datepicker-switch').text(startVal + '-' + endVal);\n\t\t\tview.find('td').html(html);\n\t\t},\n\n\t\tfill: function(){\n\t\t\tvar d = new Date(this.viewDate),\n\t\t\t\tyear = d.getUTCFullYear(),\n\t\t\t\tmonth = d.getUTCMonth(),\n\t\t\t\tstartYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,\n\t\t\t\tstartMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,\n\t\t\t\tendYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,\n\t\t\t\tendMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,\n\t\t\t\ttodaytxt = dates[this.o.language].today || dates['en'].today || '',\n\t\t\t\tcleartxt = dates[this.o.language].clear || dates['en'].clear || '',\n        titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,\n        todayDate = UTCToday(),\n        titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate),\n\t\t\t\ttooltip,\n\t\t\t\tbefore;\n\t\t\tif (isNaN(year) || isNaN(month))\n\t\t\t\treturn;\n\t\t\tthis.picker.find('.datepicker-days .datepicker-switch')\n\t\t\t\t\t\t.text(DPGlobal.formatDate(d, titleFormat, this.o.language));\n\t\t\tthis.picker.find('tfoot .today')\n\t\t\t\t\t\t.text(todaytxt)\n            .css('display', titleBtnVisible ? 'table-cell' : 'none');\n\t\t\tthis.picker.find('tfoot .clear')\n\t\t\t\t\t\t.text(cleartxt)\n\t\t\t\t\t\t.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');\n\t\t\tthis.picker.find('thead .datepicker-title')\n\t\t\t\t\t\t.text(this.o.title)\n\t\t\t\t\t\t.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');\n\t\t\tthis.updateNavArrows();\n\t\t\tthis.fillMonths();\n\t\t\tvar prevMonth = UTCDate(year, month, 0),\n\t\t\t\tday = prevMonth.getUTCDate();\n\t\t\tprevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);\n\t\t\tvar nextMonth = new Date(prevMonth);\n\t\t\tif (prevMonth.getUTCFullYear() < 100){\n        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());\n      }\n\t\t\tnextMonth.setUTCDate(nextMonth.getUTCDate() + 42);\n\t\t\tnextMonth = nextMonth.valueOf();\n\t\t\tvar html = [];\n\t\t\tvar weekDay, clsName;\n\t\t\twhile (prevMonth.valueOf() < nextMonth){\n\t\t\t\tweekDay = prevMonth.getUTCDay();\n\t\t\t\tif (weekDay === this.o.weekStart){\n\t\t\t\t\thtml.push('<tr>');\n\t\t\t\t\tif (this.o.calendarWeeks){\n\t\t\t\t\t\t// ISO 8601: First week contains first thursday.\n\t\t\t\t\t\t// ISO also states week starts on Monday, but we can be more abstract here.\n\t\t\t\t\t\tvar\n\t\t\t\t\t\t\t// Start of current week: based on weekstart/current date\n\t\t\t\t\t\t\tws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),\n\t\t\t\t\t\t\t// Thursday of this week\n\t\t\t\t\t\t\tth = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),\n\t\t\t\t\t\t\t// First Thursday of year, year from thursday\n\t\t\t\t\t\t\tyth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),\n\t\t\t\t\t\t\t// Calendar week: ms between thursdays, div ms per day, div 7 days\n\t\t\t\t\t\t\tcalWeek = (th - yth) / 864e5 / 7 + 1;\n\t\t\t\t\t\thtml.push('<td class=\"cw\">'+ calWeek +'</td>');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tclsName = this.getClassNames(prevMonth);\n\t\t\t\tclsName.push('day');\n\n\t\t\t\tvar content = prevMonth.getUTCDate();\n\n\t\t\t\tif (this.o.beforeShowDay !== $.noop){\n\t\t\t\t\tbefore = this.o.beforeShowDay(this._utc_to_local(prevMonth));\n\t\t\t\t\tif (before === undefined)\n\t\t\t\t\t\tbefore = {};\n\t\t\t\t\telse if (typeof before === 'boolean')\n\t\t\t\t\t\tbefore = {enabled: before};\n\t\t\t\t\telse if (typeof before === 'string')\n\t\t\t\t\t\tbefore = {classes: before};\n\t\t\t\t\tif (before.enabled === false)\n\t\t\t\t\t\tclsName.push('disabled');\n\t\t\t\t\tif (before.classes)\n\t\t\t\t\t\tclsName = clsName.concat(before.classes.split(/\\s+/));\n\t\t\t\t\tif (before.tooltip)\n\t\t\t\t\t\ttooltip = before.tooltip;\n\t\t\t\t\tif (before.content)\n\t\t\t\t\t\tcontent = before.content;\n\t\t\t\t}\n\n\t\t\t\t//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)\n\t\t\t\t//Fallback to unique function for older jquery versions\n\t\t\t\tif ($.isFunction($.uniqueSort)) {\n\t\t\t\t\tclsName = $.uniqueSort(clsName);\n\t\t\t\t} else {\n\t\t\t\t\tclsName = $.unique(clsName);\n\t\t\t\t}\n\n\t\t\t\thtml.push('<td class=\"'+clsName.join(' ')+'\"' + (tooltip ? ' title=\"'+tooltip+'\"' : '') + ' data-date=\"' + prevMonth.getTime().toString() + '\">' + content + '</td>');\n\t\t\t\ttooltip = null;\n\t\t\t\tif (weekDay === this.o.weekEnd){\n\t\t\t\t\thtml.push('</tr>');\n\t\t\t\t}\n\t\t\t\tprevMonth.setUTCDate(prevMonth.getUTCDate() + 1);\n\t\t\t}\n\t\t\tthis.picker.find('.datepicker-days tbody').html(html.join(''));\n\n\t\t\tvar monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';\n\t\t\tvar months = this.picker.find('.datepicker-months')\n\t\t\t\t\t\t.find('.datepicker-switch')\n\t\t\t\t\t\t\t.text(this.o.maxViewMode < 2 ? monthsTitle : year)\n\t\t\t\t\t\t\t.end()\n\t\t\t\t\t\t.find('tbody span').removeClass('active');\n\n\t\t\t$.each(this.dates, function(i, d){\n\t\t\t\tif (d.getUTCFullYear() === year)\n\t\t\t\t\tmonths.eq(d.getUTCMonth()).addClass('active');\n\t\t\t});\n\n\t\t\tif (year < startYear || year > endYear){\n\t\t\t\tmonths.addClass('disabled');\n\t\t\t}\n\t\t\tif (year === startYear){\n\t\t\t\tmonths.slice(0, startMonth).addClass('disabled');\n\t\t\t}\n\t\t\tif (year === endYear){\n\t\t\t\tmonths.slice(endMonth+1).addClass('disabled');\n\t\t\t}\n\n\t\t\tif (this.o.beforeShowMonth !== $.noop){\n\t\t\t\tvar that = this;\n\t\t\t\t$.each(months, function(i, month){\n          var moDate = new Date(year, i, 1);\n          var before = that.o.beforeShowMonth(moDate);\n\t\t\t\t\tif (before === undefined)\n\t\t\t\t\t\tbefore = {};\n\t\t\t\t\telse if (typeof before === 'boolean')\n\t\t\t\t\t\tbefore = {enabled: before};\n\t\t\t\t\telse if (typeof before === 'string')\n\t\t\t\t\t\tbefore = {classes: before};\n\t\t\t\t\tif (before.enabled === false && !$(month).hasClass('disabled'))\n\t\t\t\t\t    $(month).addClass('disabled');\n\t\t\t\t\tif (before.classes)\n\t\t\t\t\t    $(month).addClass(before.classes);\n\t\t\t\t\tif (before.tooltip)\n\t\t\t\t\t    $(month).prop('title', before.tooltip);\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// Generating decade/years picker\n\t\t\tthis._fill_yearsView(\n\t\t\t\t'.datepicker-years',\n\t\t\t\t'year',\n\t\t\t\t10,\n\t\t\t\tyear,\n\t\t\t\tstartYear,\n\t\t\t\tendYear,\n\t\t\t\tthis.o.beforeShowYear\n\t\t\t);\n\n\t\t\t// Generating century/decades picker\n\t\t\tthis._fill_yearsView(\n\t\t\t\t'.datepicker-decades',\n\t\t\t\t'decade',\n\t\t\t\t100,\n\t\t\t\tyear,\n\t\t\t\tstartYear,\n\t\t\t\tendYear,\n\t\t\t\tthis.o.beforeShowDecade\n\t\t\t);\n\n\t\t\t// Generating millennium/centuries picker\n\t\t\tthis._fill_yearsView(\n\t\t\t\t'.datepicker-centuries',\n\t\t\t\t'century',\n\t\t\t\t1000,\n\t\t\t\tyear,\n\t\t\t\tstartYear,\n\t\t\t\tendYear,\n\t\t\t\tthis.o.beforeShowCentury\n\t\t\t);\n\t\t},\n\n\t\tupdateNavArrows: function(){\n\t\t\tif (!this._allow_update)\n\t\t\t\treturn;\n\n\t\t\tvar d = new Date(this.viewDate),\n\t\t\t\tyear = d.getUTCFullYear(),\n\t\t\t\tmonth = d.getUTCMonth(),\n\t\t\t\tstartYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,\n\t\t\t\tstartMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,\n\t\t\t\tendYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,\n\t\t\t\tendMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,\n\t\t\t\tprevIsDisabled,\n\t\t\t\tnextIsDisabled,\n\t\t\t\tfactor = 1;\n\t\t\tswitch (this.viewMode){\n\t\t\t\tcase 4:\n\t\t\t\t\tfactor *= 10;\n\t\t\t\t\t/* falls through */\n\t\t\t\tcase 3:\n\t\t\t\t\tfactor *= 10;\n\t\t\t\t\t/* falls through */\n\t\t\t\tcase 2:\n\t\t\t\t\tfactor *= 10;\n\t\t\t\t\t/* falls through */\n\t\t\t\tcase 1:\n\t\t\t\t\tprevIsDisabled = Math.floor(year / factor) * factor <= startYear;\n\t\t\t\t\tnextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 0:\n\t\t\t\t\tprevIsDisabled = year <= startYear && month <= startMonth;\n\t\t\t\t\tnextIsDisabled = year >= endYear && month >= endMonth;\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tthis.picker.find('.prev').toggleClass('disabled', prevIsDisabled);\n\t\t\tthis.picker.find('.next').toggleClass('disabled', nextIsDisabled);\n\t\t},\n\n\t\tclick: function(e){\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\n\t\t\tvar target, dir, day, year, month;\n\t\t\ttarget = $(e.target);\n\n\t\t\t// Clicked on the switch\n\t\t\tif (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){\n\t\t\t\tthis.setViewMode(this.viewMode + 1);\n\t\t\t}\n\n\t\t\t// Clicked on today button\n\t\t\tif (target.hasClass('today') && !target.hasClass('day')){\n\t\t\t\tthis.setViewMode(0);\n\t\t\t\tthis._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');\n\t\t\t}\n\n\t\t\t// Clicked on clear button\n\t\t\tif (target.hasClass('clear')){\n\t\t\t\tthis.clearDates();\n\t\t\t}\n\n\t\t\tif (!target.hasClass('disabled')){\n\t\t\t\t// Clicked on a month, year, decade, century\n\t\t\t\tif (target.hasClass('month')\n\t\t\t\t\t\t|| target.hasClass('year')\n\t\t\t\t\t\t|| target.hasClass('decade')\n\t\t\t\t\t\t|| target.hasClass('century')) {\n\t\t\t\t\tthis.viewDate.setUTCDate(1);\n\n\t\t\t\t\tday = 1;\n\t\t\t\t\tif (this.viewMode === 1){\n\t\t\t\t\t\tmonth = target.parent().find('span').index(target);\n\t\t\t\t\t\tyear = this.viewDate.getUTCFullYear();\n\t\t\t\t\t\tthis.viewDate.setUTCMonth(month);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmonth = 0;\n\t\t\t\t\t\tyear = Number(target.text());\n\t\t\t\t\t\tthis.viewDate.setUTCFullYear(year);\n\t\t\t\t\t}\n\n\t\t\t\t\tthis._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);\n\n\t\t\t\t\tif (this.viewMode === this.o.minViewMode){\n\t\t\t\t\t\tthis._setDate(UTCDate(year, month, day));\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis.setViewMode(this.viewMode - 1);\n\t\t\t\t\t\tthis.fill();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (this.picker.is(':visible') && this._focused_from){\n\t\t\t\tthis._focused_from.focus();\n\t\t\t}\n\t\t\tdelete this._focused_from;\n\t\t},\n\n\t\tdayCellClick: function(e){\n\t\t\tvar $target = $(e.currentTarget);\n\t\t\tvar timestamp = $target.data('date');\n\t\t\tvar date = new Date(timestamp);\n\n\t\t\tif (this.o.updateViewDate) {\n\t\t\t\tif (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {\n\t\t\t\t\tthis._trigger('changeYear', this.viewDate);\n\t\t\t\t}\n\n\t\t\t\tif (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {\n\t\t\t\t\tthis._trigger('changeMonth', this.viewDate);\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis._setDate(date);\n\t\t},\n\n\t\t// Clicked on prev or next\n\t\tnavArrowsClick: function(e){\n\t\t\tvar $target = $(e.currentTarget);\n\t\t\tvar dir = $target.hasClass('prev') ? -1 : 1;\n\t\t\tif (this.viewMode !== 0){\n\t\t\t\tdir *= DPGlobal.viewModes[this.viewMode].navStep * 12;\n\t\t\t}\n\t\t\tthis.viewDate = this.moveMonth(this.viewDate, dir);\n\t\t\tthis._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);\n\t\t\tthis.fill();\n\t\t},\n\n\t\t_toggle_multidate: function(date){\n\t\t\tvar ix = this.dates.contains(date);\n\t\t\tif (!date){\n\t\t\t\tthis.dates.clear();\n\t\t\t}\n\n\t\t\tif (ix !== -1){\n\t\t\t\tif (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){\n\t\t\t\t\tthis.dates.remove(ix);\n\t\t\t\t}\n\t\t\t} else if (this.o.multidate === false) {\n\t\t\t\tthis.dates.clear();\n\t\t\t\tthis.dates.push(date);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tthis.dates.push(date);\n\t\t\t}\n\n\t\t\tif (typeof this.o.multidate === 'number')\n\t\t\t\twhile (this.dates.length > this.o.multidate)\n\t\t\t\t\tthis.dates.remove(0);\n\t\t},\n\n\t\t_setDate: function(date, which){\n\t\t\tif (!which || which === 'date')\n\t\t\t\tthis._toggle_multidate(date && new Date(date));\n\t\t\tif ((!which && this.o.updateViewDate) || which === 'view')\n\t\t\t\tthis.viewDate = date && new Date(date);\n\n\t\t\tthis.fill();\n\t\t\tthis.setValue();\n\t\t\tif (!which || which !== 'view') {\n\t\t\t\tthis._trigger('changeDate');\n\t\t\t}\n\t\t\tthis.inputField.trigger('change');\n\t\t\tif (this.o.autoclose && (!which || which === 'date')){\n\t\t\t\tthis.hide();\n\t\t\t}\n\t\t},\n\n\t\tmoveDay: function(date, dir){\n\t\t\tvar newDate = new Date(date);\n\t\t\tnewDate.setUTCDate(date.getUTCDate() + dir);\n\n\t\t\treturn newDate;\n\t\t},\n\n\t\tmoveWeek: function(date, dir){\n\t\t\treturn this.moveDay(date, dir * 7);\n\t\t},\n\n\t\tmoveMonth: function(date, dir){\n\t\t\tif (!isValidDate(date))\n\t\t\t\treturn this.o.defaultViewDate;\n\t\t\tif (!dir)\n\t\t\t\treturn date;\n\t\t\tvar new_date = new Date(date.valueOf()),\n\t\t\t\tday = new_date.getUTCDate(),\n\t\t\t\tmonth = new_date.getUTCMonth(),\n\t\t\t\tmag = Math.abs(dir),\n\t\t\t\tnew_month, test;\n\t\t\tdir = dir > 0 ? 1 : -1;\n\t\t\tif (mag === 1){\n\t\t\t\ttest = dir === -1\n\t\t\t\t\t// If going back one month, make sure month is not current month\n\t\t\t\t\t// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)\n\t\t\t\t\t? function(){\n\t\t\t\t\t\treturn new_date.getUTCMonth() === month;\n\t\t\t\t\t}\n\t\t\t\t\t// If going forward one month, make sure month is as expected\n\t\t\t\t\t// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)\n\t\t\t\t\t: function(){\n\t\t\t\t\t\treturn new_date.getUTCMonth() !== new_month;\n\t\t\t\t\t};\n\t\t\t\tnew_month = month + dir;\n\t\t\t\tnew_date.setUTCMonth(new_month);\n\t\t\t\t// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11\n\t\t\t\tnew_month = (new_month + 12) % 12;\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// For magnitudes >1, move one month at a time...\n\t\t\t\tfor (var i=0; i < mag; i++)\n\t\t\t\t\t// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...\n\t\t\t\t\tnew_date = this.moveMonth(new_date, dir);\n\t\t\t\t// ...then reset the day, keeping it in the new month\n\t\t\t\tnew_month = new_date.getUTCMonth();\n\t\t\t\tnew_date.setUTCDate(day);\n\t\t\t\ttest = function(){\n\t\t\t\t\treturn new_month !== new_date.getUTCMonth();\n\t\t\t\t};\n\t\t\t}\n\t\t\t// Common date-resetting loop -- if date is beyond end of month, make it\n\t\t\t// end of month\n\t\t\twhile (test()){\n\t\t\t\tnew_date.setUTCDate(--day);\n\t\t\t\tnew_date.setUTCMonth(new_month);\n\t\t\t}\n\t\t\treturn new_date;\n\t\t},\n\n\t\tmoveYear: function(date, dir){\n\t\t\treturn this.moveMonth(date, dir*12);\n\t\t},\n\n\t\tmoveAvailableDate: function(date, dir, fn){\n\t\t\tdo {\n\t\t\t\tdate = this[fn](date, dir);\n\n\t\t\t\tif (!this.dateWithinRange(date))\n\t\t\t\t\treturn false;\n\n\t\t\t\tfn = 'moveDay';\n\t\t\t}\n\t\t\twhile (this.dateIsDisabled(date));\n\n\t\t\treturn date;\n\t\t},\n\n\t\tweekOfDateIsDisabled: function(date){\n\t\t\treturn $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;\n\t\t},\n\n\t\tdateIsDisabled: function(date){\n\t\t\treturn (\n\t\t\t\tthis.weekOfDateIsDisabled(date) ||\n\t\t\t\t$.grep(this.o.datesDisabled, function(d){\n\t\t\t\t\treturn isUTCEquals(date, d);\n\t\t\t\t}).length > 0\n\t\t\t);\n\t\t},\n\n\t\tdateWithinRange: function(date){\n\t\t\treturn date >= this.o.startDate && date <= this.o.endDate;\n\t\t},\n\n\t\tkeydown: function(e){\n\t\t\tif (!this.picker.is(':visible')){\n\t\t\t\tif (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker\n\t\t\t\t\tthis.show();\n\t\t\t\t\te.stopPropagation();\n        }\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tvar dateChanged = false,\n\t\t\t\tdir, newViewDate,\n\t\t\t\tfocusDate = this.focusDate || this.viewDate;\n\t\t\tswitch (e.keyCode){\n\t\t\t\tcase 27: // escape\n\t\t\t\t\tif (this.focusDate){\n\t\t\t\t\t\tthis.focusDate = null;\n\t\t\t\t\t\tthis.viewDate = this.dates.get(-1) || this.viewDate;\n\t\t\t\t\t\tthis.fill();\n\t\t\t\t\t}\n\t\t\t\t\telse\n\t\t\t\t\t\tthis.hide();\n\t\t\t\t\te.preventDefault();\n\t\t\t\t\te.stopPropagation();\n\t\t\t\t\tbreak;\n\t\t\t\tcase 37: // left\n\t\t\t\tcase 38: // up\n\t\t\t\tcase 39: // right\n\t\t\t\tcase 40: // down\n\t\t\t\t\tif (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tdir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;\n          if (this.viewMode === 0) {\n  \t\t\t\t\tif (e.ctrlKey){\n  \t\t\t\t\t\tnewViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');\n\n  \t\t\t\t\t\tif (newViewDate)\n  \t\t\t\t\t\t\tthis._trigger('changeYear', this.viewDate);\n  \t\t\t\t\t} else if (e.shiftKey){\n  \t\t\t\t\t\tnewViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');\n\n  \t\t\t\t\t\tif (newViewDate)\n  \t\t\t\t\t\t\tthis._trigger('changeMonth', this.viewDate);\n  \t\t\t\t\t} else if (e.keyCode === 37 || e.keyCode === 39){\n  \t\t\t\t\t\tnewViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');\n  \t\t\t\t\t} else if (!this.weekOfDateIsDisabled(focusDate)){\n  \t\t\t\t\t\tnewViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');\n  \t\t\t\t\t}\n          } else if (this.viewMode === 1) {\n            if (e.keyCode === 38 || e.keyCode === 40) {\n              dir = dir * 4;\n            }\n            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');\n          } else if (this.viewMode === 2) {\n            if (e.keyCode === 38 || e.keyCode === 40) {\n              dir = dir * 4;\n            }\n            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');\n          }\n\t\t\t\t\tif (newViewDate){\n\t\t\t\t\t\tthis.focusDate = this.viewDate = newViewDate;\n\t\t\t\t\t\tthis.setValue();\n\t\t\t\t\t\tthis.fill();\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t\tcase 13: // enter\n\t\t\t\t\tif (!this.o.forceParse)\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tfocusDate = this.focusDate || this.dates.get(-1) || this.viewDate;\n\t\t\t\t\tif (this.o.keyboardNavigation) {\n\t\t\t\t\t\tthis._toggle_multidate(focusDate);\n\t\t\t\t\t\tdateChanged = true;\n\t\t\t\t\t}\n\t\t\t\t\tthis.focusDate = null;\n\t\t\t\t\tthis.viewDate = this.dates.get(-1) || this.viewDate;\n\t\t\t\t\tthis.setValue();\n\t\t\t\t\tthis.fill();\n\t\t\t\t\tif (this.picker.is(':visible')){\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\te.stopPropagation();\n\t\t\t\t\t\tif (this.o.autoclose)\n\t\t\t\t\t\t\tthis.hide();\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t\tcase 9: // tab\n\t\t\t\t\tthis.focusDate = null;\n\t\t\t\t\tthis.viewDate = this.dates.get(-1) || this.viewDate;\n\t\t\t\t\tthis.fill();\n\t\t\t\t\tthis.hide();\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif (dateChanged){\n\t\t\t\tif (this.dates.length)\n\t\t\t\t\tthis._trigger('changeDate');\n\t\t\t\telse\n\t\t\t\t\tthis._trigger('clearDate');\n\t\t\t\tthis.inputField.trigger('change');\n\t\t\t}\n\t\t},\n\n\t\tsetViewMode: function(viewMode){\n\t\t\tthis.viewMode = viewMode;\n\t\t\tthis.picker\n\t\t\t\t.children('div')\n\t\t\t\t.hide()\n\t\t\t\t.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)\n\t\t\t\t\t.show();\n\t\t\tthis.updateNavArrows();\n      this._trigger('changeViewMode', new Date(this.viewDate));\n\t\t}\n\t};\n\n\tvar DateRangePicker = function(element, options){\n\t\t$.data(element, 'datepicker', this);\n\t\tthis.element = $(element);\n\t\tthis.inputs = $.map(options.inputs, function(i){\n\t\t\treturn i.jquery ? i[0] : i;\n\t\t});\n\t\tdelete options.inputs;\n\n\t\tthis.keepEmptyValues = options.keepEmptyValues;\n\t\tdelete options.keepEmptyValues;\n\n\t\tdatepickerPlugin.call($(this.inputs), options)\n\t\t\t.on('changeDate', $.proxy(this.dateUpdated, this));\n\n\t\tthis.pickers = $.map(this.inputs, function(i){\n\t\t\treturn $.data(i, 'datepicker');\n\t\t});\n\t\tthis.updateDates();\n\t};\n\tDateRangePicker.prototype = {\n\t\tupdateDates: function(){\n\t\t\tthis.dates = $.map(this.pickers, function(i){\n\t\t\t\treturn i.getUTCDate();\n\t\t\t});\n\t\t\tthis.updateRanges();\n\t\t},\n\t\tupdateRanges: function(){\n\t\t\tvar range = $.map(this.dates, function(d){\n\t\t\t\treturn d.valueOf();\n\t\t\t});\n\t\t\t$.each(this.pickers, function(i, p){\n\t\t\t\tp.setRange(range);\n\t\t\t});\n\t\t},\n\t\tclearDates: function(){\n\t\t\t$.each(this.pickers, function(i, p){\n\t\t\t\tp.clearDates();\n\t\t\t});\n\t\t},\n\t\tdateUpdated: function(e){\n\t\t\t// `this.updating` is a workaround for preventing infinite recursion\n\t\t\t// between `changeDate` triggering and `setUTCDate` calling.  Until\n\t\t\t// there is a better mechanism.\n\t\t\tif (this.updating)\n\t\t\t\treturn;\n\t\t\tthis.updating = true;\n\n\t\t\tvar dp = $.data(e.target, 'datepicker');\n\n\t\t\tif (dp === undefined) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar new_date = dp.getUTCDate(),\n\t\t\t\tkeep_empty_values = this.keepEmptyValues,\n\t\t\t\ti = $.inArray(e.target, this.inputs),\n\t\t\t\tj = i - 1,\n\t\t\t\tk = i + 1,\n\t\t\t\tl = this.inputs.length;\n\t\t\tif (i === -1)\n\t\t\t\treturn;\n\n\t\t\t$.each(this.pickers, function(i, p){\n\t\t\t\tif (!p.getUTCDate() && (p === dp || !keep_empty_values))\n\t\t\t\t\tp.setUTCDate(new_date);\n\t\t\t});\n\n\t\t\tif (new_date < this.dates[j]){\n\t\t\t\t// Date being moved earlier/left\n\t\t\t\twhile (j >= 0 && new_date < this.dates[j]){\n\t\t\t\t\tthis.pickers[j--].setUTCDate(new_date);\n\t\t\t\t}\n\t\t\t} else if (new_date > this.dates[k]){\n\t\t\t\t// Date being moved later/right\n\t\t\t\twhile (k < l && new_date > this.dates[k]){\n\t\t\t\t\tthis.pickers[k++].setUTCDate(new_date);\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis.updateDates();\n\n\t\t\tdelete this.updating;\n\t\t},\n\t\tdestroy: function(){\n\t\t\t$.map(this.pickers, function(p){ p.destroy(); });\n\t\t\t$(this.inputs).off('changeDate', this.dateUpdated);\n\t\t\tdelete this.element.data().datepicker;\n\t\t},\n\t\tremove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')\n\t};\n\n\tfunction opts_from_el(el, prefix){\n\t\t// Derive options from element data-attrs\n\t\tvar data = $(el).data(),\n\t\t\tout = {}, inkey,\n\t\t\treplace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');\n\t\tprefix = new RegExp('^' + prefix.toLowerCase());\n\t\tfunction re_lower(_,a){\n\t\t\treturn a.toLowerCase();\n\t\t}\n\t\tfor (var key in data)\n\t\t\tif (prefix.test(key)){\n\t\t\t\tinkey = key.replace(replace, re_lower);\n\t\t\t\tout[inkey] = data[key];\n\t\t\t}\n\t\treturn out;\n\t}\n\n\tfunction opts_from_locale(lang){\n\t\t// Derive options from locale plugins\n\t\tvar out = {};\n\t\t// Check if \"de-DE\" style date is available, if not language should\n\t\t// fallback to 2 letter code eg \"de\"\n\t\tif (!dates[lang]){\n\t\t\tlang = lang.split('-')[0];\n\t\t\tif (!dates[lang])\n\t\t\t\treturn;\n\t\t}\n\t\tvar d = dates[lang];\n\t\t$.each(locale_opts, function(i,k){\n\t\t\tif (k in d)\n\t\t\t\tout[k] = d[k];\n\t\t});\n\t\treturn out;\n\t}\n\n\tvar old = $.fn.datepicker;\n\tvar datepickerPlugin = function(option){\n\t\tvar args = Array.apply(null, arguments);\n\t\targs.shift();\n\t\tvar internal_return;\n\t\tthis.each(function(){\n\t\t\tvar $this = $(this),\n\t\t\t\tdata = $this.data('datepicker'),\n\t\t\t\toptions = typeof option === 'object' && option;\n\t\t\tif (!data){\n\t\t\t\tvar elopts = opts_from_el(this, 'date'),\n\t\t\t\t\t// Preliminary otions\n\t\t\t\t\txopts = $.extend({}, defaults, elopts, options),\n\t\t\t\t\tlocopts = opts_from_locale(xopts.language),\n\t\t\t\t\t// Options priority: js args, data-attrs, locales, defaults\n\t\t\t\t\topts = $.extend({}, defaults, locopts, elopts, options);\n\t\t\t\tif ($this.hasClass('input-daterange') || opts.inputs){\n\t\t\t\t\t$.extend(opts, {\n\t\t\t\t\t\tinputs: opts.inputs || $this.find('input').toArray()\n\t\t\t\t\t});\n\t\t\t\t\tdata = new DateRangePicker(this, opts);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tdata = new Datepicker(this, opts);\n\t\t\t\t}\n\t\t\t\t$this.data('datepicker', data);\n\t\t\t}\n\t\t\tif (typeof option === 'string' && typeof data[option] === 'function'){\n\t\t\t\tinternal_return = data[option].apply(data, args);\n\t\t\t}\n\t\t});\n\n\t\tif (\n\t\t\tinternal_return === undefined ||\n\t\t\tinternal_return instanceof Datepicker ||\n\t\t\tinternal_return instanceof DateRangePicker\n\t\t)\n\t\t\treturn this;\n\n\t\tif (this.length > 1)\n\t\t\tthrow new Error('Using only allowed for the collection of a single element (' + option + ' function)');\n\t\telse\n\t\t\treturn internal_return;\n\t};\n\t$.fn.datepicker = datepickerPlugin;\n\n\tvar defaults = $.fn.datepicker.defaults = {\n\t\tassumeNearbyYear: false,\n\t\tautoclose: false,\n\t\tbeforeShowDay: $.noop,\n\t\tbeforeShowMonth: $.noop,\n\t\tbeforeShowYear: $.noop,\n\t\tbeforeShowDecade: $.noop,\n\t\tbeforeShowCentury: $.noop,\n\t\tcalendarWeeks: false,\n\t\tclearBtn: false,\n\t\ttoggleActive: false,\n\t\tdaysOfWeekDisabled: [],\n\t\tdaysOfWeekHighlighted: [],\n\t\tdatesDisabled: [],\n\t\tendDate: Infinity,\n\t\tforceParse: true,\n\t\tformat: 'mm/dd/yyyy',\n\t\tkeepEmptyValues: false,\n\t\tkeyboardNavigation: true,\n\t\tlanguage: 'en',\n\t\tminViewMode: 0,\n\t\tmaxViewMode: 4,\n\t\tmultidate: false,\n\t\tmultidateSeparator: ',',\n\t\torientation: \"auto\",\n\t\trtl: false,\n\t\tstartDate: -Infinity,\n\t\tstartView: 0,\n\t\ttodayBtn: false,\n\t\ttodayHighlight: false,\n\t\tupdateViewDate: true,\n\t\tweekStart: 0,\n\t\tdisableTouchKeyboard: false,\n\t\tenableOnReadonly: true,\n\t\tshowOnFocus: true,\n\t\tzIndexOffset: 10,\n\t\tcontainer: 'body',\n\t\timmediateUpdates: false,\n\t\ttitle: '',\n\t\ttemplates: {\n\t\t\tleftArrow: '&#x00AB;',\n\t\t\trightArrow: '&#x00BB;'\n\t\t},\n    showWeekDays: true\n\t};\n\tvar locale_opts = $.fn.datepicker.locale_opts = [\n\t\t'format',\n\t\t'rtl',\n\t\t'weekStart'\n\t];\n\t$.fn.datepicker.Constructor = Datepicker;\n\tvar dates = $.fn.datepicker.dates = {\n\t\ten: {\n\t\t\tdays: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n\t\t\tdaysShort: [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"],\n\t\t\tdaysMin: [\"Su\", \"Mo\", \"Tu\", \"We\", \"Th\", \"Fr\", \"Sa\"],\n\t\t\tmonths: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n\t\t\tmonthsShort: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n\t\t\ttoday: \"Today\",\n\t\t\tclear: \"Clear\",\n\t\t\ttitleFormat: \"MM yyyy\"\n\t\t}\n\t};\n\n\tvar DPGlobal = {\n\t\tviewModes: [\n\t\t\t{\n\t\t\t\tnames: ['days', 'month'],\n\t\t\t\tclsName: 'days',\n\t\t\t\te: 'changeMonth'\n\t\t\t},\n\t\t\t{\n\t\t\t\tnames: ['months', 'year'],\n\t\t\t\tclsName: 'months',\n\t\t\t\te: 'changeYear',\n\t\t\t\tnavStep: 1\n\t\t\t},\n\t\t\t{\n\t\t\t\tnames: ['years', 'decade'],\n\t\t\t\tclsName: 'years',\n\t\t\t\te: 'changeDecade',\n\t\t\t\tnavStep: 10\n\t\t\t},\n\t\t\t{\n\t\t\t\tnames: ['decades', 'century'],\n\t\t\t\tclsName: 'decades',\n\t\t\t\te: 'changeCentury',\n\t\t\t\tnavStep: 100\n\t\t\t},\n\t\t\t{\n\t\t\t\tnames: ['centuries', 'millennium'],\n\t\t\t\tclsName: 'centuries',\n\t\t\t\te: 'changeMillennium',\n\t\t\t\tnavStep: 1000\n\t\t\t}\n\t\t],\n\t\tvalidParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,\n\t\tnonpunctuation: /[^ -\\/:-@\\u5e74\\u6708\\u65e5\\[-`{-~\\t\\n\\r]+/g,\n\t\tparseFormat: function(format){\n\t\t\tif (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')\n                return format;\n            // IE treats \\0 as a string end in inputs (truncating the value),\n\t\t\t// so it's a bad format delimiter, anyway\n\t\t\tvar separators = format.replace(this.validParts, '\\0').split('\\0'),\n\t\t\t\tparts = format.match(this.validParts);\n\t\t\tif (!separators || !separators.length || !parts || parts.length === 0){\n\t\t\t\tthrow new Error(\"Invalid date format.\");\n\t\t\t}\n\t\t\treturn {separators: separators, parts: parts};\n\t\t},\n\t\tparseDate: function(date, format, language, assumeNearby){\n\t\t\tif (!date)\n\t\t\t\treturn undefined;\n\t\t\tif (date instanceof Date)\n\t\t\t\treturn date;\n\t\t\tif (typeof format === 'string')\n\t\t\t\tformat = DPGlobal.parseFormat(format);\n\t\t\tif (format.toValue)\n\t\t\t\treturn format.toValue(date, format, language);\n\t\t\tvar fn_map = {\n\t\t\t\t\td: 'moveDay',\n\t\t\t\t\tm: 'moveMonth',\n\t\t\t\t\tw: 'moveWeek',\n\t\t\t\t\ty: 'moveYear'\n\t\t\t\t},\n\t\t\t\tdateAliases = {\n\t\t\t\t\tyesterday: '-1d',\n\t\t\t\t\ttoday: '+0d',\n\t\t\t\t\ttomorrow: '+1d'\n\t\t\t\t},\n\t\t\t\tparts, part, dir, i, fn;\n\t\t\tif (date in dateAliases){\n\t\t\t\tdate = dateAliases[date];\n\t\t\t}\n\t\t\tif (/^[\\-+]\\d+[dmwy]([\\s,]+[\\-+]\\d+[dmwy])*$/i.test(date)){\n\t\t\t\tparts = date.match(/([\\-+]\\d+)([dmwy])/gi);\n\t\t\t\tdate = new Date();\n\t\t\t\tfor (i=0; i < parts.length; i++){\n\t\t\t\t\tpart = parts[i].match(/([\\-+]\\d+)([dmwy])/i);\n\t\t\t\t\tdir = Number(part[1]);\n\t\t\t\t\tfn = fn_map[part[2].toLowerCase()];\n\t\t\t\t\tdate = Datepicker.prototype[fn](date, dir);\n\t\t\t\t}\n\t\t\t\treturn Datepicker.prototype._zero_utc_time(date);\n\t\t\t}\n\n\t\t\tparts = date && date.match(this.nonpunctuation) || [];\n\n\t\t\tfunction applyNearbyYear(year, threshold){\n\t\t\t\tif (threshold === true)\n\t\t\t\t\tthreshold = 10;\n\n\t\t\t\t// if year is 2 digits or less, than the user most likely is trying to get a recent century\n\t\t\t\tif (year < 100){\n\t\t\t\t\tyear += 2000;\n\t\t\t\t\t// if the new year is more than threshold years in advance, use last century\n\t\t\t\t\tif (year > ((new Date()).getFullYear()+threshold)){\n\t\t\t\t\t\tyear -= 100;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn year;\n\t\t\t}\n\n\t\t\tvar parsed = {},\n\t\t\t\tsetters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],\n\t\t\t\tsetters_map = {\n\t\t\t\t\tyyyy: function(d,v){\n\t\t\t\t\t\treturn d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);\n\t\t\t\t\t},\n\t\t\t\t\tm: function(d,v){\n\t\t\t\t\t\tif (isNaN(d))\n\t\t\t\t\t\t\treturn d;\n\t\t\t\t\t\tv -= 1;\n\t\t\t\t\t\twhile (v < 0) v += 12;\n\t\t\t\t\t\tv %= 12;\n\t\t\t\t\t\td.setUTCMonth(v);\n\t\t\t\t\t\twhile (d.getUTCMonth() !== v)\n\t\t\t\t\t\t\td.setUTCDate(d.getUTCDate()-1);\n\t\t\t\t\t\treturn d;\n\t\t\t\t\t},\n\t\t\t\t\td: function(d,v){\n\t\t\t\t\t\treturn d.setUTCDate(v);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tval, filtered;\n\t\t\tsetters_map['yy'] = setters_map['yyyy'];\n\t\t\tsetters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];\n\t\t\tsetters_map['dd'] = setters_map['d'];\n\t\t\tdate = UTCToday();\n\t\t\tvar fparts = format.parts.slice();\n\t\t\t// Remove noop parts\n\t\t\tif (parts.length !== fparts.length){\n\t\t\t\tfparts = $(fparts).filter(function(i,p){\n\t\t\t\t\treturn $.inArray(p, setters_order) !== -1;\n\t\t\t\t}).toArray();\n\t\t\t}\n\t\t\t// Process remainder\n\t\t\tfunction match_part(){\n\t\t\t\tvar m = this.slice(0, parts[i].length),\n\t\t\t\t\tp = parts[i].slice(0, m.length);\n\t\t\t\treturn m.toLowerCase() === p.toLowerCase();\n\t\t\t}\n\t\t\tif (parts.length === fparts.length){\n\t\t\t\tvar cnt;\n\t\t\t\tfor (i=0, cnt = fparts.length; i < cnt; i++){\n\t\t\t\t\tval = parseInt(parts[i], 10);\n\t\t\t\t\tpart = fparts[i];\n\t\t\t\t\tif (isNaN(val)){\n\t\t\t\t\t\tswitch (part){\n\t\t\t\t\t\t\tcase 'MM':\n\t\t\t\t\t\t\t\tfiltered = $(dates[language].months).filter(match_part);\n\t\t\t\t\t\t\t\tval = $.inArray(filtered[0], dates[language].months) + 1;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'M':\n\t\t\t\t\t\t\t\tfiltered = $(dates[language].monthsShort).filter(match_part);\n\t\t\t\t\t\t\t\tval = $.inArray(filtered[0], dates[language].monthsShort) + 1;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tparsed[part] = val;\n\t\t\t\t}\n\t\t\t\tvar _date, s;\n\t\t\t\tfor (i=0; i < setters_order.length; i++){\n\t\t\t\t\ts = setters_order[i];\n\t\t\t\t\tif (s in parsed && !isNaN(parsed[s])){\n\t\t\t\t\t\t_date = new Date(date);\n\t\t\t\t\t\tsetters_map[s](_date, parsed[s]);\n\t\t\t\t\t\tif (!isNaN(_date))\n\t\t\t\t\t\t\tdate = _date;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn date;\n\t\t},\n\t\tformatDate: function(date, format, language){\n\t\t\tif (!date)\n\t\t\t\treturn '';\n\t\t\tif (typeof format === 'string')\n\t\t\t\tformat = DPGlobal.parseFormat(format);\n\t\t\tif (format.toDisplay)\n                return format.toDisplay(date, format, language);\n            var val = {\n\t\t\t\td: date.getUTCDate(),\n\t\t\t\tD: dates[language].daysShort[date.getUTCDay()],\n\t\t\t\tDD: dates[language].days[date.getUTCDay()],\n\t\t\t\tm: date.getUTCMonth() + 1,\n\t\t\t\tM: dates[language].monthsShort[date.getUTCMonth()],\n\t\t\t\tMM: dates[language].months[date.getUTCMonth()],\n\t\t\t\tyy: date.getUTCFullYear().toString().substring(2),\n\t\t\t\tyyyy: date.getUTCFullYear()\n\t\t\t};\n\t\t\tval.dd = (val.d < 10 ? '0' : '') + val.d;\n\t\t\tval.mm = (val.m < 10 ? '0' : '') + val.m;\n\t\t\tdate = [];\n\t\t\tvar seps = $.extend([], format.separators);\n\t\t\tfor (var i=0, cnt = format.parts.length; i <= cnt; i++){\n\t\t\t\tif (seps.length)\n\t\t\t\t\tdate.push(seps.shift());\n\t\t\t\tdate.push(val[format.parts[i]]);\n\t\t\t}\n\t\t\treturn date.join('');\n\t\t},\n\t\theadTemplate: '<thead>'+\n\t\t\t              '<tr>'+\n\t\t\t                '<th colspan=\"7\" class=\"datepicker-title\"></th>'+\n\t\t\t              '</tr>'+\n\t\t\t\t\t\t\t'<tr>'+\n\t\t\t\t\t\t\t\t'<th class=\"prev\">'+defaults.templates.leftArrow+'</th>'+\n\t\t\t\t\t\t\t\t'<th colspan=\"5\" class=\"datepicker-switch\"></th>'+\n\t\t\t\t\t\t\t\t'<th class=\"next\">'+defaults.templates.rightArrow+'</th>'+\n\t\t\t\t\t\t\t'</tr>'+\n\t\t\t\t\t\t'</thead>',\n\t\tcontTemplate: '<tbody><tr><td colspan=\"7\"></td></tr></tbody>',\n\t\tfootTemplate: '<tfoot>'+\n\t\t\t\t\t\t\t'<tr>'+\n\t\t\t\t\t\t\t\t'<th colspan=\"7\" class=\"today\"></th>'+\n\t\t\t\t\t\t\t'</tr>'+\n\t\t\t\t\t\t\t'<tr>'+\n\t\t\t\t\t\t\t\t'<th colspan=\"7\" class=\"clear\"></th>'+\n\t\t\t\t\t\t\t'</tr>'+\n\t\t\t\t\t\t'</tfoot>'\n\t};\n\tDPGlobal.template = '<div class=\"datepicker\">'+\n\t\t\t\t\t\t\t'<div class=\"datepicker-days\">'+\n\t\t\t\t\t\t\t\t'<table class=\"table-condensed\">'+\n\t\t\t\t\t\t\t\t\tDPGlobal.headTemplate+\n\t\t\t\t\t\t\t\t\t'<tbody></tbody>'+\n\t\t\t\t\t\t\t\t\tDPGlobal.footTemplate+\n\t\t\t\t\t\t\t\t'</table>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t\t'<div class=\"datepicker-months\">'+\n\t\t\t\t\t\t\t\t'<table class=\"table-condensed\">'+\n\t\t\t\t\t\t\t\t\tDPGlobal.headTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.contTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.footTemplate+\n\t\t\t\t\t\t\t\t'</table>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t\t'<div class=\"datepicker-years\">'+\n\t\t\t\t\t\t\t\t'<table class=\"table-condensed\">'+\n\t\t\t\t\t\t\t\t\tDPGlobal.headTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.contTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.footTemplate+\n\t\t\t\t\t\t\t\t'</table>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t\t'<div class=\"datepicker-decades\">'+\n\t\t\t\t\t\t\t\t'<table class=\"table-condensed\">'+\n\t\t\t\t\t\t\t\t\tDPGlobal.headTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.contTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.footTemplate+\n\t\t\t\t\t\t\t\t'</table>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t\t'<div class=\"datepicker-centuries\">'+\n\t\t\t\t\t\t\t\t'<table class=\"table-condensed\">'+\n\t\t\t\t\t\t\t\t\tDPGlobal.headTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.contTemplate+\n\t\t\t\t\t\t\t\t\tDPGlobal.footTemplate+\n\t\t\t\t\t\t\t\t'</table>'+\n\t\t\t\t\t\t\t'</div>'+\n\t\t\t\t\t\t'</div>';\n\n\t$.fn.datepicker.DPGlobal = DPGlobal;\n\n\n\t/* DATEPICKER NO CONFLICT\n\t* =================== */\n\n\t$.fn.datepicker.noConflict = function(){\n\t\t$.fn.datepicker = old;\n\t\treturn this;\n\t};\n\n\t/* DATEPICKER VERSION\n\t * =================== */\n\t$.fn.datepicker.version = '1.9.0';\n\n\t$.fn.datepicker.deprecated = function(msg){\n\t\tvar console = window.console;\n\t\tif (console && console.warn) {\n\t\t\tconsole.warn('DEPRECATED: ' + msg);\n\t\t}\n\t};\n\n\n\t/* DATEPICKER DATA-API\n\t* ================== */\n\n\t$(document).on(\n\t\t'focus.datepicker.data-api click.datepicker.data-api',\n\t\t'[data-provide=\"datepicker\"]',\n\t\tfunction(e){\n\t\t\tvar $this = $(this);\n\t\t\tif ($this.data('datepicker'))\n\t\t\t\treturn;\n\t\t\te.preventDefault();\n\t\t\t// component click requires us to explicitly show it\n\t\t\tdatepickerPlugin.call($this, 'show');\n\t\t}\n\t);\n\t$(function(){\n\t\tdatepickerPlugin.call($('[data-provide=\"datepicker-inline\"]'));\n\t});\n\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRCxRQUFRLGlDQUFPLENBQUMsMkNBQVEsQ0FBQyxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ25DLE1BQU0sS0FBSyxFQUlOO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0I7QUFDcEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDBCQUEwQix1Q0FBdUM7QUFDakU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwwQkFBMEIsNkNBQTZDO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVhdC8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci9kaXN0L2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzP2VmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBEYXRlcGlja2VyIGZvciBCb290c3RyYXAgdjEuOS4wIChodHRwczovL2dpdGh1Yi5jb20vdXhzb2x1dGlvbnMvYm9vdHN0cmFwLWRhdGVwaWNrZXIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMClcbiAqL1xuXG4oZnVuY3Rpb24oZmFjdG9yeSl7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24oJCwgdW5kZWZpbmVkKXtcblx0ZnVuY3Rpb24gVVRDRGF0ZSgpe1xuXHRcdHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLCBhcmd1bWVudHMpKTtcblx0fVxuXHRmdW5jdGlvbiBVVENUb2RheSgpe1xuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0cmV0dXJuIFVUQ0RhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcblx0fVxuXHRmdW5jdGlvbiBpc1VUQ0VxdWFscyhkYXRlMSwgZGF0ZTIpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZGF0ZTEuZ2V0VVRDRnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0VVRDRnVsbFllYXIoKSAmJlxuXHRcdFx0ZGF0ZTEuZ2V0VVRDTW9udGgoKSA9PT0gZGF0ZTIuZ2V0VVRDTW9udGgoKSAmJlxuXHRcdFx0ZGF0ZTEuZ2V0VVRDRGF0ZSgpID09PSBkYXRlMi5nZXRVVENEYXRlKClcblx0XHQpO1xuXHR9XG5cdGZ1bmN0aW9uIGFsaWFzKG1ldGhvZCwgZGVwcmVjYXRpb25Nc2cpe1xuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKGRlcHJlY2F0aW9uTXNnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0JC5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQoZGVwcmVjYXRpb25Nc2cpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXHRmdW5jdGlvbiBpc1ZhbGlkRGF0ZShkKSB7XG5cdFx0cmV0dXJuIGQgJiYgIWlzTmFOKGQuZ2V0VGltZSgpKTtcblx0fVxuXG5cdHZhciBEYXRlQXJyYXkgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgZXh0cmFzID0ge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbihpKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2xpY2UoaSlbMF07XG5cdFx0XHR9LFxuXHRcdFx0Y29udGFpbnM6IGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHQvLyBBcnJheS5pbmRleE9mIGlzIG5vdCBjcm9zcy1icm93c2VyO1xuXHRcdFx0XHQvLyAkLmluQXJyYXkgZG9lc24ndCB3b3JrIHdpdGggRGF0ZXNcblx0XHRcdFx0dmFyIHZhbCA9IGQgJiYgZC52YWx1ZU9mKCk7XG5cdFx0XHRcdGZvciAodmFyIGk9MCwgbD10aGlzLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAvLyBVc2UgZGF0ZSBhcml0aG1ldGljIHRvIGFsbG93IGRhdGVzIHdpdGggZGlmZmVyZW50IHRpbWVzIHRvIG1hdGNoXG4gICAgICAgICAgaWYgKDAgPD0gdGhpc1tpXS52YWx1ZU9mKCkgLSB2YWwgJiYgdGhpc1tpXS52YWx1ZU9mKCkgLSB2YWwgPCAxMDAwKjYwKjYwKjI0KVxuXHRcdFx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHR0aGlzLnNwbGljZShpLDEpO1xuXHRcdFx0fSxcblx0XHRcdHJlcGxhY2U6IGZ1bmN0aW9uKG5ld19hcnJheSl7XG5cdFx0XHRcdGlmICghbmV3X2FycmF5KVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0aWYgKCEkLmlzQXJyYXkobmV3X2FycmF5KSlcblx0XHRcdFx0XHRuZXdfYXJyYXkgPSBbbmV3X2FycmF5XTtcblx0XHRcdFx0dGhpcy5jbGVhcigpO1xuXHRcdFx0XHR0aGlzLnB1c2guYXBwbHkodGhpcywgbmV3X2FycmF5KTtcblx0XHRcdH0sXG5cdFx0XHRjbGVhcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0dGhpcy5sZW5ndGggPSAwO1xuXHRcdFx0fSxcblx0XHRcdGNvcHk6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBhID0gbmV3IERhdGVBcnJheSgpO1xuXHRcdFx0XHRhLnJlcGxhY2UodGhpcyk7XG5cdFx0XHRcdHJldHVybiBhO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhID0gW107XG5cdFx0XHRhLnB1c2guYXBwbHkoYSwgYXJndW1lbnRzKTtcblx0XHRcdCQuZXh0ZW5kKGEsIGV4dHJhcyk7XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cblx0Ly8gUGlja2VyIG9iamVjdFxuXG5cdHZhciBEYXRlcGlja2VyID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucyl7XG5cdFx0JC5kYXRhKGVsZW1lbnQsICdkYXRlcGlja2VyJywgdGhpcyk7XG5cblx0XHR0aGlzLl9ldmVudHMgPSBbXTtcblx0XHR0aGlzLl9zZWNvbmRhcnlFdmVudHMgPSBbXTtcblxuXHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhvcHRpb25zKTtcblxuXHRcdHRoaXMuZGF0ZXMgPSBuZXcgRGF0ZUFycmF5KCk7XG5cdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHR0aGlzLmlzSW5wdXQgPSB0aGlzLmVsZW1lbnQuaXMoJ2lucHV0Jyk7XG5cdFx0dGhpcy5pbnB1dEZpZWxkID0gdGhpcy5pc0lucHV0ID8gdGhpcy5lbGVtZW50IDogdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0Jyk7XG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2RhdGUnKSA/IHRoaXMuZWxlbWVudC5maW5kKCcuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5pbnB1dC1ncm91cC1hcHBlbmQsIC5pbnB1dC1ncm91cC1wcmVwZW5kLCAuYnRuJykgOiBmYWxzZTtcblx0XHRpZiAodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQubGVuZ3RoID09PSAwKVxuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBmYWxzZTtcblx0XHR0aGlzLmlzSW5saW5lID0gIXRoaXMuY29tcG9uZW50ICYmIHRoaXMuZWxlbWVudC5pcygnZGl2Jyk7XG5cblx0XHR0aGlzLnBpY2tlciA9ICQoRFBHbG9iYWwudGVtcGxhdGUpO1xuXG5cdFx0Ly8gQ2hlY2tpbmcgdGVtcGxhdGVzIGFuZCBpbnNlcnRpbmdcblx0XHRpZiAodGhpcy5fY2hlY2tfdGVtcGxhdGUodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpKSB7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpKSB7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5yaWdodEFycm93KTtcblx0XHR9XG5cblx0XHR0aGlzLl9idWlsZEV2ZW50cygpO1xuXHRcdHRoaXMuX2F0dGFjaEV2ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuaXNJbmxpbmUpe1xuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItaW5saW5lJykuYXBwZW5kVG8odGhpcy5lbGVtZW50KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1kcm9wZG93biBkcm9wZG93bi1tZW51Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuby5ydGwpe1xuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItcnRsJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKSB7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaCwgdGhlYWQgLmRhdGVwaWNrZXItdGl0bGUsIHRmb290IC50b2RheSwgdGZvb3QgLmNsZWFyJylcblx0XHRcdFx0LmF0dHIoJ2NvbHNwYW4nLCBmdW5jdGlvbihpLCB2YWwpe1xuXHRcdFx0XHRcdHJldHVybiBOdW1iZXIodmFsKSArIDE7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7XG5cdFx0XHRzdGFydERhdGU6IHRoaXMuX28uc3RhcnREYXRlLFxuXHRcdFx0ZW5kRGF0ZTogdGhpcy5fby5lbmREYXRlLFxuXHRcdFx0ZGF5c09mV2Vla0Rpc2FibGVkOiB0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLFxuXHRcdFx0ZGF5c09mV2Vla0hpZ2hsaWdodGVkOiB0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkLFxuXHRcdFx0ZGF0ZXNEaXNhYmxlZDogdGhpcy5vLmRhdGVzRGlzYWJsZWRcblx0XHR9KTtcblxuXHRcdHRoaXMuX2FsbG93X3VwZGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0Vmlldyk7XG5cdFx0dGhpcy5fYWxsb3dfdXBkYXRlID0gdHJ1ZTtcblxuXHRcdHRoaXMuZmlsbERvdygpO1xuXHRcdHRoaXMuZmlsbE1vbnRocygpO1xuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdGlmICh0aGlzLmlzSW5saW5lKXtcblx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdH1cblx0fTtcblxuXHREYXRlcGlja2VyLnByb3RvdHlwZSA9IHtcblx0XHRjb25zdHJ1Y3RvcjogRGF0ZXBpY2tlcixcblxuXHRcdF9yZXNvbHZlVmlld05hbWU6IGZ1bmN0aW9uKHZpZXcpe1xuXHRcdFx0JC5lYWNoKERQR2xvYmFsLnZpZXdNb2RlcywgZnVuY3Rpb24oaSwgdmlld01vZGUpe1xuXHRcdFx0XHRpZiAodmlldyA9PT0gaSB8fCAkLmluQXJyYXkodmlldywgdmlld01vZGUubmFtZXMpICE9PSAtMSl7XG5cdFx0XHRcdFx0dmlldyA9IGk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHZpZXc7XG5cdFx0fSxcblxuXHRcdF9yZXNvbHZlRGF5c09mV2VlazogZnVuY3Rpb24oZGF5c09mV2Vlayl7XG5cdFx0XHRpZiAoISQuaXNBcnJheShkYXlzT2ZXZWVrKSlcblx0XHRcdFx0ZGF5c09mV2VlayA9IGRheXNPZldlZWsuc3BsaXQoL1ssXFxzXSovKTtcblx0XHRcdHJldHVybiAkLm1hcChkYXlzT2ZXZWVrLCBOdW1iZXIpO1xuXHRcdH0sXG5cblx0XHRfY2hlY2tfdGVtcGxhdGU6IGZ1bmN0aW9uKHRtcCl7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJZiBlbXB0eVxuXHRcdFx0XHRpZiAodG1wID09PSB1bmRlZmluZWQgfHwgdG1wID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmIG5vIGh0bWwsIGV2ZXJ5dGhpbmcgb2tcblx0XHRcdFx0aWYgKCh0bXAubWF0Y2goL1s8Pl0vZykgfHwgW10pLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2hlY2tpbmcgaWYgaHRtbCBpcyBmaW5lXG5cdFx0XHRcdHZhciBqRG9tID0gJCh0bXApO1xuXHRcdFx0XHRyZXR1cm4gakRvbS5sZW5ndGggPiAwO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGV4KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0X3Byb2Nlc3Nfb3B0aW9uczogZnVuY3Rpb24ob3B0cyl7XG5cdFx0XHQvLyBTdG9yZSByYXcgb3B0aW9ucyBmb3IgcmVmZXJlbmNlXG5cdFx0XHR0aGlzLl9vID0gJC5leHRlbmQoe30sIHRoaXMuX28sIG9wdHMpO1xuXHRcdFx0Ly8gUHJvY2Vzc2VkIG9wdGlvbnNcblx0XHRcdHZhciBvID0gdGhpcy5vID0gJC5leHRlbmQoe30sIHRoaXMuX28pO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBcImRlLURFXCIgc3R5bGUgZGF0ZSBpcyBhdmFpbGFibGUsIGlmIG5vdCBsYW5ndWFnZSBzaG91bGRcblx0XHRcdC8vIGZhbGxiYWNrIHRvIDIgbGV0dGVyIGNvZGUgZWcgXCJkZVwiXG5cdFx0XHR2YXIgbGFuZyA9IG8ubGFuZ3VhZ2U7XG5cdFx0XHRpZiAoIWRhdGVzW2xhbmddKXtcblx0XHRcdFx0bGFuZyA9IGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHRcdFx0aWYgKCFkYXRlc1tsYW5nXSlcblx0XHRcdFx0XHRsYW5nID0gZGVmYXVsdHMubGFuZ3VhZ2U7XG5cdFx0XHR9XG5cdFx0XHRvLmxhbmd1YWdlID0gbGFuZztcblxuXHRcdFx0Ly8gUmV0cmlldmUgdmlldyBpbmRleCBmcm9tIGFueSBhbGlhc2VzXG5cdFx0XHRvLnN0YXJ0VmlldyA9IHRoaXMuX3Jlc29sdmVWaWV3TmFtZShvLnN0YXJ0Vmlldyk7XG5cdFx0XHRvLm1pblZpZXdNb2RlID0gdGhpcy5fcmVzb2x2ZVZpZXdOYW1lKG8ubWluVmlld01vZGUpO1xuXHRcdFx0by5tYXhWaWV3TW9kZSA9IHRoaXMuX3Jlc29sdmVWaWV3TmFtZShvLm1heFZpZXdNb2RlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgdmlldyBpcyBiZXR3ZWVuIG1pbiBhbmQgbWF4XG5cdFx0XHRvLnN0YXJ0VmlldyA9IE1hdGgubWF4KHRoaXMuby5taW5WaWV3TW9kZSwgTWF0aC5taW4odGhpcy5vLm1heFZpZXdNb2RlLCBvLnN0YXJ0VmlldykpO1xuXG5cdFx0XHQvLyB0cnVlLCBmYWxzZSwgb3IgTnVtYmVyID4gMFxuXHRcdFx0aWYgKG8ubXVsdGlkYXRlICE9PSB0cnVlKXtcblx0XHRcdFx0by5tdWx0aWRhdGUgPSBOdW1iZXIoby5tdWx0aWRhdGUpIHx8IGZhbHNlO1xuXHRcdFx0XHRpZiAoby5tdWx0aWRhdGUgIT09IGZhbHNlKVxuXHRcdFx0XHRcdG8ubXVsdGlkYXRlID0gTWF0aC5tYXgoMCwgby5tdWx0aWRhdGUpO1xuXHRcdFx0fVxuXHRcdFx0by5tdWx0aWRhdGVTZXBhcmF0b3IgPSBTdHJpbmcoby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xuXG5cdFx0XHRvLndlZWtTdGFydCAlPSA3O1xuXHRcdFx0by53ZWVrRW5kID0gKG8ud2Vla1N0YXJ0ICsgNikgJSA3O1xuXG5cdFx0XHR2YXIgZm9ybWF0ID0gRFBHbG9iYWwucGFyc2VGb3JtYXQoby5mb3JtYXQpO1xuXHRcdFx0aWYgKG8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkpe1xuXHRcdFx0XHRpZiAoISFvLnN0YXJ0RGF0ZSl7XG5cdFx0XHRcdFx0aWYgKG8uc3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZSlcblx0XHRcdFx0XHRcdG8uc3RhcnREYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShvLnN0YXJ0RGF0ZSkpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdG8uc3RhcnREYXRlID0gRFBHbG9iYWwucGFyc2VEYXRlKG8uc3RhcnREYXRlLCBmb3JtYXQsIG8ubGFuZ3VhZ2UsIG8uYXNzdW1lTmVhcmJ5WWVhcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0by5zdGFydERhdGUgPSAtSW5maW5pdHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChvLmVuZERhdGUgIT09IEluZmluaXR5KXtcblx0XHRcdFx0aWYgKCEhby5lbmREYXRlKXtcblx0XHRcdFx0XHRpZiAoby5lbmREYXRlIGluc3RhbmNlb2YgRGF0ZSlcblx0XHRcdFx0XHRcdG8uZW5kRGF0ZSA9IHRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoby5lbmREYXRlKSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0by5lbmREYXRlID0gRFBHbG9iYWwucGFyc2VEYXRlKG8uZW5kRGF0ZSwgZm9ybWF0LCBvLmxhbmd1YWdlLCBvLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdG8uZW5kRGF0ZSA9IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG8uZGF5c09mV2Vla0Rpc2FibGVkID0gdGhpcy5fcmVzb2x2ZURheXNPZldlZWsoby5kYXlzT2ZXZWVrRGlzYWJsZWR8fFtdKTtcblx0XHRcdG8uZGF5c09mV2Vla0hpZ2hsaWdodGVkID0gdGhpcy5fcmVzb2x2ZURheXNPZldlZWsoby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWR8fFtdKTtcblxuXHRcdFx0by5kYXRlc0Rpc2FibGVkID0gby5kYXRlc0Rpc2FibGVkfHxbXTtcblx0XHRcdGlmICghJC5pc0FycmF5KG8uZGF0ZXNEaXNhYmxlZCkpIHtcblx0XHRcdFx0by5kYXRlc0Rpc2FibGVkID0gby5kYXRlc0Rpc2FibGVkLnNwbGl0KCcsJyk7XG5cdFx0XHR9XG5cdFx0XHRvLmRhdGVzRGlzYWJsZWQgPSAkLm1hcChvLmRhdGVzRGlzYWJsZWQsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwucGFyc2VEYXRlKGQsIGZvcm1hdCwgby5sYW5ndWFnZSwgby5hc3N1bWVOZWFyYnlZZWFyKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgcGxjID0gU3RyaW5nKG8ub3JpZW50YXRpb24pLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyksXG5cdFx0XHRcdF9wbGMgPSBvLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRwbGMgPSAkLmdyZXAocGxjLCBmdW5jdGlvbih3b3JkKXtcblx0XHRcdFx0cmV0dXJuIC9eYXV0b3xsZWZ0fHJpZ2h0fHRvcHxib3R0b20kLy50ZXN0KHdvcmQpO1xuXHRcdFx0fSk7XG5cdFx0XHRvLm9yaWVudGF0aW9uID0ge3g6ICdhdXRvJywgeTogJ2F1dG8nfTtcblx0XHRcdGlmICghX3BsYyB8fCBfcGxjID09PSAnYXV0bycpXG5cdFx0XHRcdDsgLy8gbm8gYWN0aW9uXG5cdFx0XHRlbHNlIGlmIChwbGMubGVuZ3RoID09PSAxKXtcblx0XHRcdFx0c3dpdGNoIChwbGNbMF0pe1xuXHRcdFx0XHRcdGNhc2UgJ3RvcCc6XG5cdFx0XHRcdFx0Y2FzZSAnYm90dG9tJzpcblx0XHRcdFx0XHRcdG8ub3JpZW50YXRpb24ueSA9IHBsY1swXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdG8ub3JpZW50YXRpb24ueCA9IHBsY1swXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X3BsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xuXHRcdFx0XHRcdHJldHVybiAvXmxlZnR8cmlnaHQkLy50ZXN0KHdvcmQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0by5vcmllbnRhdGlvbi54ID0gX3BsY1swXSB8fCAnYXV0byc7XG5cblx0XHRcdFx0X3BsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xuXHRcdFx0XHRcdHJldHVybiAvXnRvcHxib3R0b20kLy50ZXN0KHdvcmQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0by5vcmllbnRhdGlvbi55ID0gX3BsY1swXSB8fCAnYXV0byc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoby5kZWZhdWx0Vmlld0RhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBvLmRlZmF1bHRWaWV3RGF0ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0by5kZWZhdWx0Vmlld0RhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5kZWZhdWx0Vmlld0RhdGUsIGZvcm1hdCwgby5sYW5ndWFnZSwgby5hc3N1bWVOZWFyYnlZZWFyKTtcblx0XHRcdH0gZWxzZSBpZiAoby5kZWZhdWx0Vmlld0RhdGUpIHtcblx0XHRcdFx0dmFyIHllYXIgPSBvLmRlZmF1bHRWaWV3RGF0ZS55ZWFyIHx8IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dmFyIG1vbnRoID0gby5kZWZhdWx0Vmlld0RhdGUubW9udGggfHwgMDtcblx0XHRcdFx0dmFyIGRheSA9IG8uZGVmYXVsdFZpZXdEYXRlLmRheSB8fCAxO1xuXHRcdFx0XHRvLmRlZmF1bHRWaWV3RGF0ZSA9IFVUQ0RhdGUoeWVhciwgbW9udGgsIGRheSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvLmRlZmF1bHRWaWV3RGF0ZSA9IFVUQ1RvZGF5KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfYXBwbHlFdmVudHM6IGZ1bmN0aW9uKGV2cyl7XG5cdFx0XHRmb3IgKHZhciBpPTAsIGVsLCBjaCwgZXY7IGkgPCBldnMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRlbCA9IGV2c1tpXVswXTtcblx0XHRcdFx0aWYgKGV2c1tpXS5sZW5ndGggPT09IDIpe1xuXHRcdFx0XHRcdGNoID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzFdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV2c1tpXS5sZW5ndGggPT09IDMpe1xuXHRcdFx0XHRcdGNoID0gZXZzW2ldWzFdO1xuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzJdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsLm9uKGV2LCBjaCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfdW5hcHBseUV2ZW50czogZnVuY3Rpb24oZXZzKXtcblx0XHRcdGZvciAodmFyIGk9MCwgZWwsIGV2LCBjaDsgaSA8IGV2cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGVsID0gZXZzW2ldWzBdO1xuXHRcdFx0XHRpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMil7XG5cdFx0XHRcdFx0Y2ggPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMV07XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMyl7XG5cdFx0XHRcdFx0Y2ggPSBldnNbaV1bMV07XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMl07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWwub2ZmKGV2LCBjaCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfYnVpbGRFdmVudHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0ge1xuICAgICAgICAgICAgICAgIGtleXVwOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGUua2V5Q29kZSwgWzI3LCAzNywgMzksIDM4LCA0MCwgMzIsIDEzLCA5XSkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICAgICBrZXlkb3duOiAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcyksXG4gICAgICAgICAgICAgICAgcGFzdGU6ICQucHJveHkodGhpcy5wYXN0ZSwgdGhpcylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm8uc2hvd09uRm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudHMuZm9jdXMgPSAkLnByb3h5KHRoaXMuc2hvdywgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHsgLy8gc2luZ2xlIGlucHV0XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gW1xuICAgICAgICAgICAgICAgICAgICBbdGhpcy5lbGVtZW50LCBldmVudHNdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbXBvbmVudDogaW5wdXQgKyBidXR0b25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuaW5wdXRGaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCByZWFkb25seSwgYWxsb3cga2V5Ym9hcmQgbmF2XG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmlucHV0RmllbGQsIGV2ZW50c10sXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5fZXZlbnRzID0gW1xuXHRcdFx0XHRcdFt0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0XHRcdGNsaWNrOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcyksXG5cdFx0XHRcdFx0XHRrZXlkb3duOiAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcylcblx0XHRcdFx0XHR9XVxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZXZlbnRzLnB1c2goXG5cdFx0XHRcdC8vIENvbXBvbmVudDogbGlzdGVuIGZvciBibHVyIG9uIGVsZW1lbnQgZGVzY2VuZGFudHNcblx0XHRcdFx0W3RoaXMuZWxlbWVudCwgJyonLCB7XG5cdFx0XHRcdFx0Ymx1cjogJC5wcm94eShmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHQvLyBJbnB1dDogbGlzdGVuIGZvciBibHVyIG9uIGVsZW1lbnRcblx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRcdGJsdXI6ICQucHJveHkoZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHR0aGlzLl9mb2N1c2VkX2Zyb20gPSBlLnRhcmdldDtcblx0XHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0XHR9XVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKHRoaXMuby5pbW1lZGlhdGVVcGRhdGVzKSB7XG5cdFx0XHRcdC8vIFRyaWdnZXIgaW5wdXQgdXBkYXRlcyBpbW1lZGlhdGVseSBvbiBjaGFuZ2VkIHllYXIvbW9udGhcblx0XHRcdFx0dGhpcy5fZXZlbnRzLnB1c2goW3RoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRcdCdjaGFuZ2VZZWFyIGNoYW5nZU1vbnRoJzogJC5wcm94eShmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlKGUuZGF0ZSk7XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fV0pO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zZWNvbmRhcnlFdmVudHMgPSBbXG5cdFx0XHRcdFt0aGlzLnBpY2tlciwge1xuXHRcdFx0XHRcdGNsaWNrOiAkLnByb3h5KHRoaXMuY2xpY2ssIHRoaXMpXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRbdGhpcy5waWNrZXIsICcucHJldiwgLm5leHQnLCB7XG5cdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5uYXZBcnJvd3NDbGljaywgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFt0aGlzLnBpY2tlciwgJy5kYXk6bm90KC5kaXNhYmxlZCknLCB7XG5cdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5kYXlDZWxsQ2xpY2ssIHRoaXMpXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRbJCh3aW5kb3cpLCB7XG5cdFx0XHRcdFx0cmVzaXplOiAkLnByb3h5KHRoaXMucGxhY2UsIHRoaXMpXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRbJChkb2N1bWVudCksIHtcblx0XHRcdFx0XHQnbW91c2Vkb3duIHRvdWNoc3RhcnQnOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0Ly8gQ2xpY2tlZCBvdXRzaWRlIHRoZSBkYXRlcGlja2VyLCBoaWRlIGl0XG5cdFx0XHRcdFx0XHRpZiAoIShcblx0XHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmlzKGUudGFyZ2V0KSB8fFxuXHRcdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZChlLnRhcmdldCkubGVuZ3RoIHx8XG5cdFx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmlzKGUudGFyZ2V0KSB8fFxuXHRcdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKGUudGFyZ2V0KS5sZW5ndGggfHxcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0lubGluZVxuXHRcdFx0XHRcdFx0KSl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdH1dXG5cdFx0XHRdO1xuXHRcdH0sXG5cdFx0X2F0dGFjaEV2ZW50czogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuX2RldGFjaEV2ZW50cygpO1xuXHRcdFx0dGhpcy5fYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKTtcblx0XHR9LFxuXHRcdF9kZXRhY2hFdmVudHM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyk7XG5cdFx0fSxcblx0XHRfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzOiBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XG5cdFx0XHR0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpO1xuXHRcdH0sXG5cdFx0X2RldGFjaFNlY29uZGFyeUV2ZW50czogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKTtcblx0XHR9LFxuXHRcdF90cmlnZ2VyOiBmdW5jdGlvbihldmVudCwgYWx0ZGF0ZSl7XG5cdFx0XHR2YXIgZGF0ZSA9IGFsdGRhdGUgfHwgdGhpcy5kYXRlcy5nZXQoLTEpLFxuXHRcdFx0XHRsb2NhbF9kYXRlID0gdGhpcy5fdXRjX3RvX2xvY2FsKGRhdGUpO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcih7XG5cdFx0XHRcdHR5cGU6IGV2ZW50LFxuXHRcdFx0XHRkYXRlOiBsb2NhbF9kYXRlLFxuXHRcdFx0XHR2aWV3TW9kZTogdGhpcy52aWV3TW9kZSxcblx0XHRcdFx0ZGF0ZXM6ICQubWFwKHRoaXMuZGF0ZXMsIHRoaXMuX3V0Y190b19sb2NhbCksXG5cdFx0XHRcdGZvcm1hdDogJC5wcm94eShmdW5jdGlvbihpeCwgZm9ybWF0KXtcblx0XHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG5cdFx0XHRcdFx0XHRpeCA9IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGZvcm1hdCA9IHRoaXMuby5mb3JtYXQ7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgaXggPT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRcdGZvcm1hdCA9IGl4O1xuXHRcdFx0XHRcdFx0aXggPSB0aGlzLmRhdGVzLmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLm8uZm9ybWF0O1xuXHRcdFx0XHRcdHZhciBkYXRlID0gdGhpcy5kYXRlcy5nZXQoaXgpO1xuXHRcdFx0XHRcdHJldHVybiBEUEdsb2JhbC5mb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlKTtcblx0XHRcdFx0fSwgdGhpcylcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRzaG93OiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKHRoaXMuaW5wdXRGaWVsZC5pcygnOmRpc2FibGVkJykgfHwgKHRoaXMuaW5wdXRGaWVsZC5wcm9wKCdyZWFkb25seScpICYmIHRoaXMuby5lbmFibGVPblJlYWRvbmx5ID09PSBmYWxzZSkpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGlmICghdGhpcy5pc0lubGluZSlcblx0XHRcdFx0dGhpcy5waWNrZXIuYXBwZW5kVG8odGhpcy5vLmNvbnRhaW5lcik7XG5cdFx0XHR0aGlzLnBsYWNlKCk7XG5cdFx0XHR0aGlzLnBpY2tlci5zaG93KCk7XG5cdFx0XHR0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ3Nob3cnKTtcblx0XHRcdGlmICgod2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzIHx8ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSAmJiB0aGlzLm8uZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcblx0XHRcdFx0JCh0aGlzLmVsZW1lbnQpLmJsdXIoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRoaWRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUgfHwgIXRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKTtcblx0XHRcdHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpO1xuXHRcdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KTtcblxuXHRcdFx0aWYgKHRoaXMuby5mb3JjZVBhcnNlICYmIHRoaXMuaW5wdXRGaWVsZC52YWwoKSlcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcignaGlkZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdHRoaXMuX2RldGFjaEV2ZW50cygpO1xuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XG5cdFx0XHR0aGlzLnBpY2tlci5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXI7XG5cdFx0XHRpZiAoIXRoaXMuaXNJbnB1dCl7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0cGFzdGU6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGRhdGVTdHJpbmc7XG5cdFx0XHRpZiAoZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEgJiYgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXNcblx0XHRcdFx0JiYgJC5pbkFycmF5KCd0ZXh0L3BsYWluJywgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMpICE9PSAtMSkge1xuXHRcdFx0XHRkYXRlU3RyaW5nID0gZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cuY2xpcGJvYXJkRGF0YSkge1xuXHRcdFx0XHRkYXRlU3RyaW5nID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXREYXRlKGRhdGVTdHJpbmcpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0X3V0Y190b19sb2NhbDogZnVuY3Rpb24odXRjKXtcblx0XHRcdGlmICghdXRjKSB7XG5cdFx0XHRcdHJldHVybiB1dGM7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsb2NhbCA9IG5ldyBEYXRlKHV0Yy5nZXRUaW1lKCkgKyAodXRjLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuXG5cdFx0XHRpZiAobG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSAhPT0gdXRjLmdldFRpbWV6b25lT2Zmc2V0KCkpIHtcblx0XHRcdFx0bG9jYWwgPSBuZXcgRGF0ZSh1dGMuZ2V0VGltZSgpICsgKGxvY2FsLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbG9jYWw7XG5cdFx0fSxcblx0XHRfbG9jYWxfdG9fdXRjOiBmdW5jdGlvbihsb2NhbCl7XG5cdFx0XHRyZXR1cm4gbG9jYWwgJiYgbmV3IERhdGUobG9jYWwuZ2V0VGltZSgpIC0gKGxvY2FsLmdldFRpbWV6b25lT2Zmc2V0KCkqNjAwMDApKTtcblx0XHR9LFxuXHRcdF96ZXJvX3RpbWU6IGZ1bmN0aW9uKGxvY2FsKXtcblx0XHRcdHJldHVybiBsb2NhbCAmJiBuZXcgRGF0ZShsb2NhbC5nZXRGdWxsWWVhcigpLCBsb2NhbC5nZXRNb250aCgpLCBsb2NhbC5nZXREYXRlKCkpO1xuXHRcdH0sXG5cdFx0X3plcm9fdXRjX3RpbWU6IGZ1bmN0aW9uKHV0Yyl7XG5cdFx0XHRyZXR1cm4gdXRjICYmIFVUQ0RhdGUodXRjLmdldFVUQ0Z1bGxZZWFyKCksIHV0Yy5nZXRVVENNb250aCgpLCB1dGMuZ2V0VVRDRGF0ZSgpKTtcblx0XHR9LFxuXG5cdFx0Z2V0RGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKTtcblx0XHR9LFxuXG5cdFx0Z2V0VVRDRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShkKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXREYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSk7XG5cdFx0fSxcblxuXHRcdGdldFVUQ0RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZWN0ZWRfZGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKTtcblx0XHRcdGlmIChzZWxlY3RlZF9kYXRlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKHNlbGVjdGVkX2RhdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNsZWFyRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmlucHV0RmllbGQudmFsKCcnKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XG5cblx0XHRcdGlmICh0aGlzLm8uYXV0b2Nsb3NlKSB7XG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXREYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG5cdFx0XHR0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRzZXRVVENEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG5cdFx0XHR0aGlzLnNldERhdGVzLmFwcGx5KHRoaXMsICQubWFwKGFyZ3MsIHRoaXMuX3V0Y190b19sb2NhbCkpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldERhdGU6IGFsaWFzKCdzZXREYXRlcycpLFxuXHRcdHNldFVUQ0RhdGU6IGFsaWFzKCdzZXRVVENEYXRlcycpLFxuXHRcdHJlbW92ZTogYWxpYXMoJ2Rlc3Ryb3knLCAnTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkJyksXG5cblx0XHRzZXRWYWx1ZTogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBmb3JtYXR0ZWQgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoKTtcblx0XHRcdHRoaXMuaW5wdXRGaWVsZC52YWwoZm9ybWF0dGVkKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRnZXRGb3JtYXR0ZWREYXRlOiBmdW5jdGlvbihmb3JtYXQpe1xuXHRcdFx0aWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmb3JtYXQgPSB0aGlzLm8uZm9ybWF0O1xuXG5cdFx0XHR2YXIgbGFuZyA9IHRoaXMuby5sYW5ndWFnZTtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZCwgZm9ybWF0LCBsYW5nKTtcblx0XHRcdH0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik7XG5cdFx0fSxcblxuXHRcdGdldFN0YXJ0RGF0ZTogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0aGlzLm8uc3RhcnREYXRlO1xuXHRcdH0sXG5cblx0XHRzZXRTdGFydERhdGU6IGZ1bmN0aW9uKHN0YXJ0RGF0ZSl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTogc3RhcnREYXRlfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRnZXRFbmREYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMuby5lbmREYXRlO1xuXHRcdH0sXG5cblx0XHRzZXRFbmREYXRlOiBmdW5jdGlvbihlbmREYXRlKXtcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZW5kRGF0ZTogZW5kRGF0ZX0pO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0c2V0RGF5c09mV2Vla0Rpc2FibGVkOiBmdW5jdGlvbihkYXlzT2ZXZWVrRGlzYWJsZWQpe1xuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrRGlzYWJsZWQ6IGRheXNPZldlZWtEaXNhYmxlZH0pO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IGZ1bmN0aW9uKGRheXNPZldlZWtIaWdobGlnaHRlZCl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtIaWdobGlnaHRlZDogZGF5c09mV2Vla0hpZ2hsaWdodGVkfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldERhdGVzRGlzYWJsZWQ6IGZ1bmN0aW9uKGRhdGVzRGlzYWJsZWQpe1xuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXRlc0Rpc2FibGVkOiBkYXRlc0Rpc2FibGVkfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHBsYWNlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUpXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0dmFyIGNhbGVuZGFyV2lkdGggPSB0aGlzLnBpY2tlci5vdXRlcldpZHRoKCksXG5cdFx0XHRcdGNhbGVuZGFySGVpZ2h0ID0gdGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0dmlzdWFsUGFkZGluZyA9IDEwLFxuXHRcdFx0XHRjb250YWluZXIgPSAkKHRoaXMuby5jb250YWluZXIpLFxuXHRcdFx0XHR3aW5kb3dXaWR0aCA9IGNvbnRhaW5lci53aWR0aCgpLFxuXHRcdFx0XHRzY3JvbGxUb3AgPSB0aGlzLm8uY29udGFpbmVyID09PSAnYm9keScgPyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA6IGNvbnRhaW5lci5zY3JvbGxUb3AoKSxcblx0XHRcdFx0YXBwZW5kT2Zmc2V0ID0gY29udGFpbmVyLm9mZnNldCgpO1xuXG5cdFx0XHR2YXIgcGFyZW50c1ppbmRleCA9IFswXTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgaXRlbVpJbmRleCA9ICQodGhpcykuY3NzKCd6LWluZGV4Jyk7XG5cdFx0XHRcdGlmIChpdGVtWkluZGV4ICE9PSAnYXV0bycgJiYgTnVtYmVyKGl0ZW1aSW5kZXgpICE9PSAwKSBwYXJlbnRzWmluZGV4LnB1c2goTnVtYmVyKGl0ZW1aSW5kZXgpKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIHpJbmRleCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHBhcmVudHNaaW5kZXgpICsgdGhpcy5vLnpJbmRleE9mZnNldDtcblx0XHRcdHZhciBvZmZzZXQgPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpIDogdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXHRcdFx0dmFyIGhlaWdodCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQodHJ1ZSkgOiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXHRcdFx0dmFyIHdpZHRoID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKHRydWUpIDogdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXHRcdFx0dmFyIGxlZnQgPSBvZmZzZXQubGVmdCAtIGFwcGVuZE9mZnNldC5sZWZ0O1xuXHRcdFx0dmFyIHRvcCA9IG9mZnNldC50b3AgLSBhcHBlbmRPZmZzZXQudG9wO1xuXG5cdFx0XHRpZiAodGhpcy5vLmNvbnRhaW5lciAhPT0gJ2JvZHknKSB7XG5cdFx0XHRcdHRvcCArPSBzY3JvbGxUb3A7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFxuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSAnK1xuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQgZGF0ZXBpY2tlci1vcmllbnQtbGVmdCdcblx0XHRcdCk7XG5cblx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCAhPT0gJ2F1dG8nKXtcblx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LScgKyB0aGlzLm8ub3JpZW50YXRpb24ueCk7XG5cdFx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCA9PT0gJ3JpZ2h0Jylcblx0XHRcdFx0XHRsZWZ0IC09IGNhbGVuZGFyV2lkdGggLSB3aWR0aDtcblx0XHRcdH1cblx0XHRcdC8vIGF1dG8geCBvcmllbnRhdGlvbiBpcyBiZXN0LXBsYWNlbWVudDogaWYgaXQgY3Jvc3NlcyBhIHdpbmRvd1xuXHRcdFx0Ly8gZWRnZSwgZnVkZ2UgaXQgc2lkZXdheXNcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAob2Zmc2V0LmxlZnQgPCAwKSB7XG5cdFx0XHRcdFx0Ly8gY29tcG9uZW50IGlzIG91dHNpZGUgdGhlIHdpbmRvdyBvbiB0aGUgbGVmdCBzaWRlLiBNb3ZlIGl0IGludG8gdmlzaWJsZSByYW5nZVxuXHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1sZWZ0Jyk7XG5cdFx0XHRcdFx0bGVmdCAtPSBvZmZzZXQubGVmdCAtIHZpc3VhbFBhZGRpbmc7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3dXaWR0aCkge1xuXHRcdFx0XHRcdC8vIHRoZSBjYWxlbmRhciBwYXNzZXMgdGhlIHdpZG93IHJpZ2h0IGVkZ2UuIEFsaWduIGl0IHRvIGNvbXBvbmVudCByaWdodCBzaWRlXG5cdFx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LXJpZ2h0Jyk7XG5cdFx0XHRcdFx0bGVmdCArPSB3aWR0aCAtIGNhbGVuZGFyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuby5ydGwpIHtcblx0XHRcdFx0XHRcdC8vIERlZmF1bHQgdG8gcmlnaHRcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1yaWdodCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHRvIGxlZnRcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1sZWZ0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF1dG8geSBvcmllbnRhdGlvbiBpcyBiZXN0LXNpdHVhdGlvbjogdG9wIG9yIGJvdHRvbSwgbm8gZnVkZ2luZyxcblx0XHRcdC8vIGRlY2lzaW9uIGJhc2VkIG9uIHdoaWNoIHNob3dzIG1vcmUgb2YgdGhlIGNhbGVuZGFyXG5cdFx0XHR2YXIgeW9yaWVudCA9IHRoaXMuby5vcmllbnRhdGlvbi55LFxuXHRcdFx0XHR0b3Bfb3ZlcmZsb3c7XG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ2F1dG8nKXtcblx0XHRcdFx0dG9wX292ZXJmbG93ID0gLXNjcm9sbFRvcCArIHRvcCAtIGNhbGVuZGFySGVpZ2h0O1xuXHRcdFx0XHR5b3JpZW50ID0gdG9wX292ZXJmbG93IDwgMCA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC0nICsgeW9yaWVudCk7XG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ3RvcCcpXG5cdFx0XHRcdHRvcCAtPSBjYWxlbmRhckhlaWdodCArIHBhcnNlSW50KHRoaXMucGlja2VyLmNzcygncGFkZGluZy10b3AnKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRvcCArPSBoZWlnaHQ7XG5cblx0XHRcdGlmICh0aGlzLm8ucnRsKSB7XG5cdFx0XHRcdHZhciByaWdodCA9IHdpbmRvd1dpZHRoIC0gKGxlZnQgKyB3aWR0aCk7XG5cdFx0XHRcdHRoaXMucGlja2VyLmNzcyh7XG5cdFx0XHRcdFx0dG9wOiB0b3AsXG5cdFx0XHRcdFx0cmlnaHQ6IHJpZ2h0LFxuXHRcdFx0XHRcdHpJbmRleDogekluZGV4XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5waWNrZXIuY3NzKHtcblx0XHRcdFx0XHR0b3A6IHRvcCxcblx0XHRcdFx0XHRsZWZ0OiBsZWZ0LFxuXHRcdFx0XHRcdHpJbmRleDogekluZGV4XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdF9hbGxvd191cGRhdGU6IHRydWUsXG5cdFx0dXBkYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCF0aGlzLl9hbGxvd191cGRhdGUpXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHR2YXIgb2xkRGF0ZXMgPSB0aGlzLmRhdGVzLmNvcHkoKSxcblx0XHRcdFx0ZGF0ZXMgPSBbXSxcblx0XHRcdFx0ZnJvbUFyZ3MgPSBmYWxzZTtcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKXtcblx0XHRcdFx0JC5lYWNoKGFyZ3VtZW50cywgJC5wcm94eShmdW5jdGlvbihpLCBkYXRlKXtcblx0XHRcdFx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG5cdFx0XHRcdFx0XHRkYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKGRhdGUpO1xuXHRcdFx0XHRcdGRhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHRcdH0sIHRoaXMpKTtcblx0XHRcdFx0ZnJvbUFyZ3MgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0ZXMgPSB0aGlzLmlzSW5wdXRcblx0XHRcdFx0XHRcdD8gdGhpcy5lbGVtZW50LnZhbCgpXG5cdFx0XHRcdFx0XHQ6IHRoaXMuZWxlbWVudC5kYXRhKCdkYXRlJykgfHwgdGhpcy5pbnB1dEZpZWxkLnZhbCgpO1xuXHRcdFx0XHRpZiAoZGF0ZXMgJiYgdGhpcy5vLm11bHRpZGF0ZSlcblx0XHRcdFx0XHRkYXRlcyA9IGRhdGVzLnNwbGl0KHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGF0ZXMgPSBbZGF0ZXNdO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRlcyA9ICQubWFwKGRhdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwucGFyc2VEYXRlKGRhdGUsIHRoaXMuby5mb3JtYXQsIHRoaXMuby5sYW5ndWFnZSwgdGhpcy5vLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdFx0ZGF0ZXMgPSAkLmdyZXAoZGF0ZXMsICQucHJveHkoZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0IXRoaXMuZGF0ZVdpdGhpblJhbmdlKGRhdGUpIHx8XG5cdFx0XHRcdFx0IWRhdGVcblx0XHRcdFx0KTtcblx0XHRcdH0sIHRoaXMpLCB0cnVlKTtcblx0XHRcdHRoaXMuZGF0ZXMucmVwbGFjZShkYXRlcyk7XG5cblx0XHRcdGlmICh0aGlzLm8udXBkYXRlVmlld0RhdGUpIHtcblx0XHRcdFx0aWYgKHRoaXMuZGF0ZXMubGVuZ3RoKVxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpO1xuXHRcdFx0XHRlbHNlIGlmICh0aGlzLnZpZXdEYXRlIDwgdGhpcy5vLnN0YXJ0RGF0ZSlcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLnN0YXJ0RGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMudmlld0RhdGUgPiB0aGlzLm8uZW5kRGF0ZSlcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLmVuZERhdGUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmcm9tQXJncyl7XG5cdFx0XHRcdC8vIHNldHRpbmcgZGF0ZSBieSBjbGlja2luZ1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRoaXMuZGF0ZXMubGVuZ3RoKXtcblx0XHRcdFx0Ly8gc2V0dGluZyBkYXRlIGJ5IHR5cGluZ1xuXHRcdFx0XHRpZiAoU3RyaW5nKG9sZERhdGVzKSAhPT0gU3RyaW5nKHRoaXMuZGF0ZXMpICYmIGZyb21BcmdzKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmRhdGVzLmxlbmd0aCAmJiBvbGREYXRlcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0ZmlsbERvdzogZnVuY3Rpb24oKXtcbiAgICAgIGlmICh0aGlzLm8uc2hvd1dlZWtEYXlzKSB7XG5cdFx0XHR2YXIgZG93Q250ID0gdGhpcy5vLndlZWtTdGFydCxcblx0XHRcdFx0aHRtbCA9ICc8dHI+Jztcblx0XHRcdGlmICh0aGlzLm8uY2FsZW5kYXJXZWVrcyl7XG5cdFx0XHRcdGh0bWwgKz0gJzx0aCBjbGFzcz1cImN3XCI+JiMxNjA7PC90aD4nO1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKGRvd0NudCA8IHRoaXMuby53ZWVrU3RhcnQgKyA3KXtcblx0XHRcdFx0aHRtbCArPSAnPHRoIGNsYXNzPVwiZG93JztcbiAgICAgICAgaWYgKCQuaW5BcnJheShkb3dDbnQsIHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpICE9PSAtMSlcbiAgICAgICAgICBodG1sICs9ICcgZGlzYWJsZWQnO1xuICAgICAgICBodG1sICs9ICdcIj4nK2RhdGVzW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pblsoZG93Q250KyspJTddKyc8L3RoPic7XG5cdFx0XHR9XG5cdFx0XHRodG1sICs9ICc8L3RyPic7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRoZWFkJykuYXBwZW5kKGh0bWwpO1xuICAgICAgfVxuXHRcdH0sXG5cblx0XHRmaWxsTW9udGhzOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxvY2FsRGF0ZSA9IHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLnZpZXdEYXRlKTtcblx0XHRcdHZhciBodG1sID0gJyc7XG5cdFx0XHR2YXIgZm9jdXNlZDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKyl7XG5cdFx0XHRcdGZvY3VzZWQgPSBsb2NhbERhdGUgJiYgbG9jYWxEYXRlLmdldE1vbnRoKCkgPT09IGkgPyAnIGZvY3VzZWQnIDogJyc7XG5cdFx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwibW9udGgnICsgZm9jdXNlZCArICdcIj4nICsgZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtpXSArICc8L3NwYW4+Jztcblx0XHRcdH1cblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocyB0ZCcpLmh0bWwoaHRtbCk7XG5cdFx0fSxcblxuXHRcdHNldFJhbmdlOiBmdW5jdGlvbihyYW5nZSl7XG5cdFx0XHRpZiAoIXJhbmdlIHx8ICFyYW5nZS5sZW5ndGgpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnJhbmdlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnJhbmdlID0gJC5tYXAocmFuZ2UsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRcdHJldHVybiBkLnZhbHVlT2YoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHR9LFxuXG5cdFx0Z2V0Q2xhc3NOYW1lczogZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHR2YXIgY2xzID0gW10sXG5cdFx0XHRcdHllYXIgPSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG5cdFx0XHRcdG1vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLFxuXHRcdFx0XHR0b2RheSA9IFVUQ1RvZGF5KCk7XG5cdFx0XHRpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpIDwgeWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA8IG1vbnRoKSl7XG5cdFx0XHRcdGNscy5wdXNoKCdvbGQnKTtcblx0XHRcdH0gZWxzZSBpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID4geWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA+IG1vbnRoKSl7XG5cdFx0XHRcdGNscy5wdXNoKCduZXcnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmZvY3VzRGF0ZSAmJiBkYXRlLnZhbHVlT2YoKSA9PT0gdGhpcy5mb2N1c0RhdGUudmFsdWVPZigpKVxuXHRcdFx0XHRjbHMucHVzaCgnZm9jdXNlZCcpO1xuXHRcdFx0Ly8gQ29tcGFyZSBpbnRlcm5hbCBVVEMgZGF0ZSB3aXRoIFVUQyB0b2RheSwgbm90IGxvY2FsIHRvZGF5XG5cdFx0XHRpZiAodGhpcy5vLnRvZGF5SGlnaGxpZ2h0ICYmIGlzVVRDRXF1YWxzKGRhdGUsIHRvZGF5KSkge1xuXHRcdFx0XHRjbHMucHVzaCgndG9kYXknKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmRhdGVzLmNvbnRhaW5zKGRhdGUpICE9PSAtMSlcblx0XHRcdFx0Y2xzLnB1c2goJ2FjdGl2ZScpO1xuXHRcdFx0aWYgKCF0aGlzLmRhdGVXaXRoaW5SYW5nZShkYXRlKSl7XG5cdFx0XHRcdGNscy5wdXNoKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZGF0ZUlzRGlzYWJsZWQoZGF0ZSkpe1xuXHRcdFx0XHRjbHMucHVzaCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQtZGF0ZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCQuaW5BcnJheShkYXRlLmdldFVUQ0RheSgpLCB0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkKSAhPT0gLTEpe1xuXHRcdFx0XHRjbHMucHVzaCgnaGlnaGxpZ2h0ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucmFuZ2Upe1xuXHRcdFx0XHRpZiAoZGF0ZSA+IHRoaXMucmFuZ2VbMF0gJiYgZGF0ZSA8IHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0pe1xuXHRcdFx0XHRcdGNscy5wdXNoKCdyYW5nZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkLmluQXJyYXkoZGF0ZS52YWx1ZU9mKCksIHRoaXMucmFuZ2UpICE9PSAtMSl7XG5cdFx0XHRcdFx0Y2xzLnB1c2goJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGUudmFsdWVPZigpID09PSB0aGlzLnJhbmdlWzBdKXtcbiAgICAgICAgICBjbHMucHVzaCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZS52YWx1ZU9mKCkgPT09IHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0pe1xuICAgICAgICAgIGNscy5wdXNoKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNscztcblx0XHR9LFxuXG5cdFx0X2ZpbGxfeWVhcnNWaWV3OiBmdW5jdGlvbihzZWxlY3RvciwgY3NzQ2xhc3MsIGZhY3RvciwgeWVhciwgc3RhcnRZZWFyLCBlbmRZZWFyLCBiZWZvcmVGbil7XG5cdFx0XHR2YXIgaHRtbCA9ICcnO1xuXHRcdFx0dmFyIHN0ZXAgPSBmYWN0b3IgLyAxMDtcblx0XHRcdHZhciB2aWV3ID0gdGhpcy5waWNrZXIuZmluZChzZWxlY3Rvcik7XG5cdFx0XHR2YXIgc3RhcnRWYWwgPSBNYXRoLmZsb29yKHllYXIgLyBmYWN0b3IpICogZmFjdG9yO1xuXHRcdFx0dmFyIGVuZFZhbCA9IHN0YXJ0VmFsICsgc3RlcCAqIDk7XG5cdFx0XHR2YXIgZm9jdXNlZFZhbCA9IE1hdGguZmxvb3IodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpIC8gc3RlcCkgKiBzdGVwO1xuXHRcdFx0dmFyIHNlbGVjdGVkID0gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBNYXRoLmZsb29yKGQuZ2V0VVRDRnVsbFllYXIoKSAvIHN0ZXApICogc3RlcDtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgY2xhc3NlcywgdG9vbHRpcCwgYmVmb3JlO1xuXHRcdFx0Zm9yICh2YXIgY3VyclZhbCA9IHN0YXJ0VmFsIC0gc3RlcDsgY3VyclZhbCA8PSBlbmRWYWwgKyBzdGVwOyBjdXJyVmFsICs9IHN0ZXApIHtcblx0XHRcdFx0Y2xhc3NlcyA9IFtjc3NDbGFzc107XG5cdFx0XHRcdHRvb2x0aXAgPSBudWxsO1xuXG5cdFx0XHRcdGlmIChjdXJyVmFsID09PSBzdGFydFZhbCAtIHN0ZXApIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ29sZCcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJWYWwgPT09IGVuZFZhbCArIHN0ZXApIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ25ldycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkLmluQXJyYXkoY3VyclZhbCwgc2VsZWN0ZWQpICE9PSAtMSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN1cnJWYWwgPCBzdGFydFllYXIgfHwgY3VyclZhbCA+IGVuZFllYXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN1cnJWYWwgPT09IGZvY3VzZWRWYWwpIHtcblx0XHRcdFx0ICBjbGFzc2VzLnB1c2goJ2ZvY3VzZWQnKTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGlmIChiZWZvcmVGbiAhPT0gJC5ub29wKSB7XG5cdFx0XHRcdFx0YmVmb3JlID0gYmVmb3JlRm4obmV3IERhdGUoY3VyclZhbCwgMCwgMSkpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYmVmb3JlID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtlbmFibGVkOiBiZWZvcmV9O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtjbGFzc2VzOiBiZWZvcmV9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3Nlcykge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KGJlZm9yZS5jbGFzc2VzLnNwbGl0KC9cXHMrLykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYmVmb3JlLnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdHRvb2x0aXAgPSBiZWZvcmUudG9vbHRpcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRodG1sICs9ICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAodG9vbHRpcCA/ICcgdGl0bGU9XCInICsgdG9vbHRpcCArICdcIicgOiAnJykgKyAnPicgKyBjdXJyVmFsICsgJzwvc3Bhbj4nO1xuXHRcdFx0fVxuXG5cdFx0XHR2aWV3LmZpbmQoJy5kYXRlcGlja2VyLXN3aXRjaCcpLnRleHQoc3RhcnRWYWwgKyAnLScgKyBlbmRWYWwpO1xuXHRcdFx0dmlldy5maW5kKCd0ZCcpLmh0bWwoaHRtbCk7XG5cdFx0fSxcblxuXHRcdGZpbGw6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUpLFxuXHRcdFx0XHR5ZWFyID0gZC5nZXRVVENGdWxsWWVhcigpLFxuXHRcdFx0XHRtb250aCA9IGQuZ2V0VVRDTW9udGgoKSxcblx0XHRcdFx0c3RhcnRZZWFyID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpIDogLUluZmluaXR5LFxuXHRcdFx0XHRzdGFydE1vbnRoID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpIDogLUluZmluaXR5LFxuXHRcdFx0XHRlbmRZZWFyID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IEluZmluaXR5LFxuXHRcdFx0XHRlbmRNb250aCA9IHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSA/IHRoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCkgOiBJbmZpbml0eSxcblx0XHRcdFx0dG9kYXl0eHQgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5IHx8IGRhdGVzWydlbiddLnRvZGF5IHx8ICcnLFxuXHRcdFx0XHRjbGVhcnR4dCA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0uY2xlYXIgfHwgZGF0ZXNbJ2VuJ10uY2xlYXIgfHwgJycsXG4gICAgICAgIHRpdGxlRm9ybWF0ID0gZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS50aXRsZUZvcm1hdCB8fCBkYXRlc1snZW4nXS50aXRsZUZvcm1hdCxcbiAgICAgICAgdG9kYXlEYXRlID0gVVRDVG9kYXkoKSxcbiAgICAgICAgdGl0bGVCdG5WaXNpYmxlID0gKHRoaXMuby50b2RheUJ0biA9PT0gdHJ1ZSB8fCB0aGlzLm8udG9kYXlCdG4gPT09ICdsaW5rZWQnKSAmJiB0b2RheURhdGUgPj0gdGhpcy5vLnN0YXJ0RGF0ZSAmJiB0b2RheURhdGUgPD0gdGhpcy5vLmVuZERhdGUgJiYgIXRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQodG9kYXlEYXRlKSxcblx0XHRcdFx0dG9vbHRpcCxcblx0XHRcdFx0YmVmb3JlO1xuXHRcdFx0aWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2gnKVxuXHRcdFx0XHRcdFx0LnRleHQoRFBHbG9iYWwuZm9ybWF0RGF0ZShkLCB0aXRsZUZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlKSk7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0Zm9vdCAudG9kYXknKVxuXHRcdFx0XHRcdFx0LnRleHQodG9kYXl0eHQpXG4gICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgdGl0bGVCdG5WaXNpYmxlID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnKTtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJ3Rmb290IC5jbGVhcicpXG5cdFx0XHRcdFx0XHQudGV4dChjbGVhcnR4dClcblx0XHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCB0aGlzLm8uY2xlYXJCdG4gPT09IHRydWUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGhlYWQgLmRhdGVwaWNrZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0LnRleHQodGhpcy5vLnRpdGxlKVxuXHRcdFx0XHRcdFx0LmNzcygnZGlzcGxheScsIHR5cGVvZiB0aGlzLm8udGl0bGUgPT09ICdzdHJpbmcnICYmIHRoaXMuby50aXRsZSAhPT0gJycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcblx0XHRcdHRoaXMuZmlsbE1vbnRocygpO1xuXHRcdFx0dmFyIHByZXZNb250aCA9IFVUQ0RhdGUoeWVhciwgbW9udGgsIDApLFxuXHRcdFx0XHRkYXkgPSBwcmV2TW9udGguZ2V0VVRDRGF0ZSgpO1xuXHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUoZGF5IC0gKHByZXZNb250aC5nZXRVVENEYXkoKSAtIHRoaXMuby53ZWVrU3RhcnQgKyA3KSU3KTtcblx0XHRcdHZhciBuZXh0TW9udGggPSBuZXcgRGF0ZShwcmV2TW9udGgpO1xuXHRcdFx0aWYgKHByZXZNb250aC5nZXRVVENGdWxsWWVhcigpIDwgMTAwKXtcbiAgICAgICAgbmV4dE1vbnRoLnNldFVUQ0Z1bGxZZWFyKHByZXZNb250aC5nZXRVVENGdWxsWWVhcigpKTtcbiAgICAgIH1cblx0XHRcdG5leHRNb250aC5zZXRVVENEYXRlKG5leHRNb250aC5nZXRVVENEYXRlKCkgKyA0Mik7XG5cdFx0XHRuZXh0TW9udGggPSBuZXh0TW9udGgudmFsdWVPZigpO1xuXHRcdFx0dmFyIGh0bWwgPSBbXTtcblx0XHRcdHZhciB3ZWVrRGF5LCBjbHNOYW1lO1xuXHRcdFx0d2hpbGUgKHByZXZNb250aC52YWx1ZU9mKCkgPCBuZXh0TW9udGgpe1xuXHRcdFx0XHR3ZWVrRGF5ID0gcHJldk1vbnRoLmdldFVUQ0RheSgpO1xuXHRcdFx0XHRpZiAod2Vla0RheSA9PT0gdGhpcy5vLndlZWtTdGFydCl7XG5cdFx0XHRcdFx0aHRtbC5wdXNoKCc8dHI+Jyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKXtcblx0XHRcdFx0XHRcdC8vIElTTyA4NjAxOiBGaXJzdCB3ZWVrIGNvbnRhaW5zIGZpcnN0IHRodXJzZGF5LlxuXHRcdFx0XHRcdFx0Ly8gSVNPIGFsc28gc3RhdGVzIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgYnV0IHdlIGNhbiBiZSBtb3JlIGFic3RyYWN0IGhlcmUuXG5cdFx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRcdFx0Ly8gU3RhcnQgb2YgY3VycmVudCB3ZWVrOiBiYXNlZCBvbiB3ZWVrc3RhcnQvY3VycmVudCBkYXRlXG5cdFx0XHRcdFx0XHRcdHdzID0gbmV3IERhdGUoK3ByZXZNb250aCArICh0aGlzLm8ud2Vla1N0YXJ0IC0gd2Vla0RheSAtIDcpICUgNyAqIDg2NGU1KSxcblx0XHRcdFx0XHRcdFx0Ly8gVGh1cnNkYXkgb2YgdGhpcyB3ZWVrXG5cdFx0XHRcdFx0XHRcdHRoID0gbmV3IERhdGUoTnVtYmVyKHdzKSArICg3ICsgNCAtIHdzLmdldFVUQ0RheSgpKSAlIDcgKiA4NjRlNSksXG5cdFx0XHRcdFx0XHRcdC8vIEZpcnN0IFRodXJzZGF5IG9mIHllYXIsIHllYXIgZnJvbSB0aHVyc2RheVxuXHRcdFx0XHRcdFx0XHR5dGggPSBuZXcgRGF0ZShOdW1iZXIoeXRoID0gVVRDRGF0ZSh0aC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSkgKyAoNyArIDQgLSB5dGguZ2V0VVRDRGF5KCkpICUgNyAqIDg2NGU1KSxcblx0XHRcdFx0XHRcdFx0Ly8gQ2FsZW5kYXIgd2VlazogbXMgYmV0d2VlbiB0aHVyc2RheXMsIGRpdiBtcyBwZXIgZGF5LCBkaXYgNyBkYXlzXG5cdFx0XHRcdFx0XHRcdGNhbFdlZWsgPSAodGggLSB5dGgpIC8gODY0ZTUgLyA3ICsgMTtcblx0XHRcdFx0XHRcdGh0bWwucHVzaCgnPHRkIGNsYXNzPVwiY3dcIj4nKyBjYWxXZWVrICsnPC90ZD4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2xzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyhwcmV2TW9udGgpO1xuXHRcdFx0XHRjbHNOYW1lLnB1c2goJ2RheScpO1xuXG5cdFx0XHRcdHZhciBjb250ZW50ID0gcHJldk1vbnRoLmdldFVUQ0RhdGUoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5vLmJlZm9yZVNob3dEYXkgIT09ICQubm9vcCl7XG5cdFx0XHRcdFx0YmVmb3JlID0gdGhpcy5vLmJlZm9yZVNob3dEYXkodGhpcy5fdXRjX3RvX2xvY2FsKHByZXZNb250aCkpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUgPT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHt9O1xuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBiZWZvcmUgPT09ICdib29sZWFuJylcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtlbmFibGVkOiBiZWZvcmV9O1xuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBiZWZvcmUgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2NsYXNzZXM6IGJlZm9yZX07XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5lbmFibGVkID09PSBmYWxzZSlcblx0XHRcdFx0XHRcdGNsc05hbWUucHVzaCgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmNsYXNzZXMpXG5cdFx0XHRcdFx0XHRjbHNOYW1lID0gY2xzTmFtZS5jb25jYXQoYmVmb3JlLmNsYXNzZXMuc3BsaXQoL1xccysvKSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS50b29sdGlwKVxuXHRcdFx0XHRcdFx0dG9vbHRpcCA9IGJlZm9yZS50b29sdGlwO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUuY29udGVudClcblx0XHRcdFx0XHRcdGNvbnRlbnQgPSBiZWZvcmUuY29udGVudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vQ2hlY2sgaWYgdW5pcXVlU29ydCBleGlzdHMgKHN1cHBvcnRlZCBieSBqcXVlcnkgPj0xLjEyIGFuZCA+PTIuMilcblx0XHRcdFx0Ly9GYWxsYmFjayB0byB1bmlxdWUgZnVuY3Rpb24gZm9yIG9sZGVyIGpxdWVyeSB2ZXJzaW9uc1xuXHRcdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKCQudW5pcXVlU29ydCkpIHtcblx0XHRcdFx0XHRjbHNOYW1lID0gJC51bmlxdWVTb3J0KGNsc05hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsc05hbWUgPSAkLnVuaXF1ZShjbHNOYW1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGh0bWwucHVzaCgnPHRkIGNsYXNzPVwiJytjbHNOYW1lLmpvaW4oJyAnKSsnXCInICsgKHRvb2x0aXAgPyAnIHRpdGxlPVwiJyt0b29sdGlwKydcIicgOiAnJykgKyAnIGRhdGEtZGF0ZT1cIicgKyBwcmV2TW9udGguZ2V0VGltZSgpLnRvU3RyaW5nKCkgKyAnXCI+JyArIGNvbnRlbnQgKyAnPC90ZD4nKTtcblx0XHRcdFx0dG9vbHRpcCA9IG51bGw7XG5cdFx0XHRcdGlmICh3ZWVrRGF5ID09PSB0aGlzLm8ud2Vla0VuZCl7XG5cdFx0XHRcdFx0aHRtbC5wdXNoKCc8L3RyPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByZXZNb250aC5zZXRVVENEYXRlKHByZXZNb250aC5nZXRVVENEYXRlKCkgKyAxKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGJvZHknKS5odG1sKGh0bWwuam9pbignJykpO1xuXG5cdFx0XHR2YXIgbW9udGhzVGl0bGUgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1RpdGxlIHx8IGRhdGVzWydlbiddLm1vbnRoc1RpdGxlIHx8ICdNb250aHMnO1xuXHRcdFx0dmFyIG1vbnRocyA9IHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocycpXG5cdFx0XHRcdFx0XHQuZmluZCgnLmRhdGVwaWNrZXItc3dpdGNoJylcblx0XHRcdFx0XHRcdFx0LnRleHQodGhpcy5vLm1heFZpZXdNb2RlIDwgMiA/IG1vbnRoc1RpdGxlIDogeWVhcilcblx0XHRcdFx0XHRcdFx0LmVuZCgpXG5cdFx0XHRcdFx0XHQuZmluZCgndGJvZHkgc3BhbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0JC5lYWNoKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGksIGQpe1xuXHRcdFx0XHRpZiAoZC5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyKVxuXHRcdFx0XHRcdG1vbnRocy5lcShkLmdldFVUQ01vbnRoKCkpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoeWVhciA8IHN0YXJ0WWVhciB8fCB5ZWFyID4gZW5kWWVhcil7XG5cdFx0XHRcdG1vbnRocy5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyID09PSBzdGFydFllYXIpe1xuXHRcdFx0XHRtb250aHMuc2xpY2UoMCwgc3RhcnRNb250aCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoeWVhciA9PT0gZW5kWWVhcil7XG5cdFx0XHRcdG1vbnRocy5zbGljZShlbmRNb250aCsxKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuby5iZWZvcmVTaG93TW9udGggIT09ICQubm9vcCl7XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0JC5lYWNoKG1vbnRocywgZnVuY3Rpb24oaSwgbW9udGgpe1xuICAgICAgICAgIHZhciBtb0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBpLCAxKTtcbiAgICAgICAgICB2YXIgYmVmb3JlID0gdGhhdC5vLmJlZm9yZVNob3dNb250aChtb0RhdGUpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUgPT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHt9O1xuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBiZWZvcmUgPT09ICdib29sZWFuJylcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtlbmFibGVkOiBiZWZvcmV9O1xuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBiZWZvcmUgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2NsYXNzZXM6IGJlZm9yZX07XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5lbmFibGVkID09PSBmYWxzZSAmJiAhJChtb250aCkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpXG5cdFx0XHRcdFx0ICAgICQobW9udGgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3Nlcylcblx0XHRcdFx0XHQgICAgJChtb250aCkuYWRkQ2xhc3MoYmVmb3JlLmNsYXNzZXMpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUudG9vbHRpcClcblx0XHRcdFx0XHQgICAgJChtb250aCkucHJvcCgndGl0bGUnLCBiZWZvcmUudG9vbHRpcCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZW5lcmF0aW5nIGRlY2FkZS95ZWFycyBwaWNrZXJcblx0XHRcdHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFxuXHRcdFx0XHQnLmRhdGVwaWNrZXIteWVhcnMnLFxuXHRcdFx0XHQneWVhcicsXG5cdFx0XHRcdDEwLFxuXHRcdFx0XHR5ZWFyLFxuXHRcdFx0XHRzdGFydFllYXIsXG5cdFx0XHRcdGVuZFllYXIsXG5cdFx0XHRcdHRoaXMuby5iZWZvcmVTaG93WWVhclxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gR2VuZXJhdGluZyBjZW50dXJ5L2RlY2FkZXMgcGlja2VyXG5cdFx0XHR0aGlzLl9maWxsX3llYXJzVmlldyhcblx0XHRcdFx0Jy5kYXRlcGlja2VyLWRlY2FkZXMnLFxuXHRcdFx0XHQnZGVjYWRlJyxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHR5ZWFyLFxuXHRcdFx0XHRzdGFydFllYXIsXG5cdFx0XHRcdGVuZFllYXIsXG5cdFx0XHRcdHRoaXMuby5iZWZvcmVTaG93RGVjYWRlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBHZW5lcmF0aW5nIG1pbGxlbm5pdW0vY2VudHVyaWVzIHBpY2tlclxuXHRcdFx0dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXG5cdFx0XHRcdCcuZGF0ZXBpY2tlci1jZW50dXJpZXMnLFxuXHRcdFx0XHQnY2VudHVyeScsXG5cdFx0XHRcdDEwMDAsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHRcdHN0YXJ0WWVhcixcblx0XHRcdFx0ZW5kWWVhcixcblx0XHRcdFx0dGhpcy5vLmJlZm9yZVNob3dDZW50dXJ5XG5cdFx0XHQpO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVOYXZBcnJvd3M6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIXRoaXMuX2FsbG93X3VwZGF0ZSlcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUpLFxuXHRcdFx0XHR5ZWFyID0gZC5nZXRVVENGdWxsWWVhcigpLFxuXHRcdFx0XHRtb250aCA9IGQuZ2V0VVRDTW9udGgoKSxcblx0XHRcdFx0c3RhcnRZZWFyID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpIDogLUluZmluaXR5LFxuXHRcdFx0XHRzdGFydE1vbnRoID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpIDogLUluZmluaXR5LFxuXHRcdFx0XHRlbmRZZWFyID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IEluZmluaXR5LFxuXHRcdFx0XHRlbmRNb250aCA9IHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSA/IHRoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCkgOiBJbmZpbml0eSxcblx0XHRcdFx0cHJldklzRGlzYWJsZWQsXG5cdFx0XHRcdG5leHRJc0Rpc2FibGVkLFxuXHRcdFx0XHRmYWN0b3IgPSAxO1xuXHRcdFx0c3dpdGNoICh0aGlzLnZpZXdNb2RlKXtcblx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdGZhY3RvciAqPSAxMDtcblx0XHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRmYWN0b3IgKj0gMTA7XG5cdFx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0ZmFjdG9yICo9IDEwO1xuXHRcdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHByZXZJc0Rpc2FibGVkID0gTWF0aC5mbG9vcih5ZWFyIC8gZmFjdG9yKSAqIGZhY3RvciA8PSBzdGFydFllYXI7XG5cdFx0XHRcdFx0bmV4dElzRGlzYWJsZWQgPSBNYXRoLmZsb29yKHllYXIgLyBmYWN0b3IpICogZmFjdG9yICsgZmFjdG9yID4gZW5kWWVhcjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdHByZXZJc0Rpc2FibGVkID0geWVhciA8PSBzdGFydFllYXIgJiYgbW9udGggPD0gc3RhcnRNb250aDtcblx0XHRcdFx0XHRuZXh0SXNEaXNhYmxlZCA9IHllYXIgPj0gZW5kWWVhciAmJiBtb250aCA+PSBlbmRNb250aDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLnByZXYnKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCBwcmV2SXNEaXNhYmxlZCk7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIG5leHRJc0Rpc2FibGVkKTtcblx0XHR9LFxuXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0dmFyIHRhcmdldCwgZGlyLCBkYXksIHllYXIsIG1vbnRoO1xuXHRcdFx0dGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdC8vIENsaWNrZWQgb24gdGhlIHN3aXRjaFxuXHRcdFx0aWYgKHRhcmdldC5oYXNDbGFzcygnZGF0ZXBpY2tlci1zd2l0Y2gnKSAmJiB0aGlzLnZpZXdNb2RlICE9PSB0aGlzLm8ubWF4Vmlld01vZGUpe1xuXHRcdFx0XHR0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUgKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xpY2tlZCBvbiB0b2RheSBidXR0b25cblx0XHRcdGlmICh0YXJnZXQuaGFzQ2xhc3MoJ3RvZGF5JykgJiYgIXRhcmdldC5oYXNDbGFzcygnZGF5Jykpe1xuXHRcdFx0XHR0aGlzLnNldFZpZXdNb2RlKDApO1xuXHRcdFx0XHR0aGlzLl9zZXREYXRlKFVUQ1RvZGF5KCksIHRoaXMuby50b2RheUJ0biA9PT0gJ2xpbmtlZCcgPyBudWxsIDogJ3ZpZXcnKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xpY2tlZCBvbiBjbGVhciBidXR0b25cblx0XHRcdGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2NsZWFyJykpe1xuXHRcdFx0XHR0aGlzLmNsZWFyRGF0ZXMoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0YXJnZXQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpe1xuXHRcdFx0XHQvLyBDbGlja2VkIG9uIGEgbW9udGgsIHllYXIsIGRlY2FkZSwgY2VudHVyeVxuXHRcdFx0XHRpZiAodGFyZ2V0Lmhhc0NsYXNzKCdtb250aCcpXG5cdFx0XHRcdFx0XHR8fCB0YXJnZXQuaGFzQ2xhc3MoJ3llYXInKVxuXHRcdFx0XHRcdFx0fHwgdGFyZ2V0Lmhhc0NsYXNzKCdkZWNhZGUnKVxuXHRcdFx0XHRcdFx0fHwgdGFyZ2V0Lmhhc0NsYXNzKCdjZW50dXJ5JykpIHtcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ0RhdGUoMSk7XG5cblx0XHRcdFx0XHRkYXkgPSAxO1xuXHRcdFx0XHRcdGlmICh0aGlzLnZpZXdNb2RlID09PSAxKXtcblx0XHRcdFx0XHRcdG1vbnRoID0gdGFyZ2V0LnBhcmVudCgpLmZpbmQoJ3NwYW4nKS5pbmRleCh0YXJnZXQpO1xuXHRcdFx0XHRcdFx0eWVhciA9IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcblx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDTW9udGgobW9udGgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtb250aCA9IDA7XG5cdFx0XHRcdFx0XHR5ZWFyID0gTnVtYmVyKHRhcmdldC50ZXh0KCkpO1xuXHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKERQR2xvYmFsLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlIC0gMV0uZSwgdGhpcy52aWV3RGF0ZSk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy52aWV3TW9kZSA9PT0gdGhpcy5vLm1pblZpZXdNb2RlKXtcblx0XHRcdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZSAtIDEpO1xuXHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSAmJiB0aGlzLl9mb2N1c2VkX2Zyb20pe1xuXHRcdFx0XHR0aGlzLl9mb2N1c2VkX2Zyb20uZm9jdXMoKTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSB0aGlzLl9mb2N1c2VkX2Zyb207XG5cdFx0fSxcblxuXHRcdGRheUNlbGxDbGljazogZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdHZhciB0aW1lc3RhbXAgPSAkdGFyZ2V0LmRhdGEoJ2RhdGUnKTtcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKHRoaXMuby51cGRhdGVWaWV3RGF0ZSkge1xuXHRcdFx0XHRpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpICE9PSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCkpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VZZWFyJywgdGhpcy52aWV3RGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZGF0ZS5nZXRVVENNb250aCgpICE9PSB0aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCkpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zZXREYXRlKGRhdGUpO1xuXHRcdH0sXG5cblx0XHQvLyBDbGlja2VkIG9uIHByZXYgb3IgbmV4dFxuXHRcdG5hdkFycm93c0NsaWNrOiBmdW5jdGlvbihlKXtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dmFyIGRpciA9ICR0YXJnZXQuaGFzQ2xhc3MoJ3ByZXYnKSA/IC0xIDogMTtcblx0XHRcdGlmICh0aGlzLnZpZXdNb2RlICE9PSAwKXtcblx0XHRcdFx0ZGlyICo9IERQR2xvYmFsLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5uYXZTdGVwICogMTI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgodGhpcy52aWV3RGF0ZSwgZGlyKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGVdLmUsIHRoaXMudmlld0RhdGUpO1xuXHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0fSxcblxuXHRcdF90b2dnbGVfbXVsdGlkYXRlOiBmdW5jdGlvbihkYXRlKXtcblx0XHRcdHZhciBpeCA9IHRoaXMuZGF0ZXMuY29udGFpbnMoZGF0ZSk7XG5cdFx0XHRpZiAoIWRhdGUpe1xuXHRcdFx0XHR0aGlzLmRhdGVzLmNsZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpeCAhPT0gLTEpe1xuXHRcdFx0XHRpZiAodGhpcy5vLm11bHRpZGF0ZSA9PT0gdHJ1ZSB8fCB0aGlzLm8ubXVsdGlkYXRlID4gMSB8fCB0aGlzLm8udG9nZ2xlQWN0aXZlKXtcblx0XHRcdFx0XHR0aGlzLmRhdGVzLnJlbW92ZShpeCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vLm11bHRpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5kYXRlcy5jbGVhcigpO1xuXHRcdFx0XHR0aGlzLmRhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5kYXRlcy5wdXNoKGRhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuby5tdWx0aWRhdGUgPT09ICdudW1iZXInKVxuXHRcdFx0XHR3aGlsZSAodGhpcy5kYXRlcy5sZW5ndGggPiB0aGlzLm8ubXVsdGlkYXRlKVxuXHRcdFx0XHRcdHRoaXMuZGF0ZXMucmVtb3ZlKDApO1xuXHRcdH0sXG5cblx0XHRfc2V0RGF0ZTogZnVuY3Rpb24oZGF0ZSwgd2hpY2gpe1xuXHRcdFx0aWYgKCF3aGljaCB8fCB3aGljaCA9PT0gJ2RhdGUnKVxuXHRcdFx0XHR0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGRhdGUgJiYgbmV3IERhdGUoZGF0ZSkpO1xuXHRcdFx0aWYgKCghd2hpY2ggJiYgdGhpcy5vLnVwZGF0ZVZpZXdEYXRlKSB8fCB3aGljaCA9PT0gJ3ZpZXcnKVxuXHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gZGF0ZSAmJiBuZXcgRGF0ZShkYXRlKTtcblxuXHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRpZiAoIXdoaWNoIHx8IHdoaWNoICE9PSAndmlldycpIHtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UgJiYgKCF3aGljaCB8fCB3aGljaCA9PT0gJ2RhdGUnKSl7XG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtb3ZlRGF5OiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0dmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblx0XHRcdG5ld0RhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpcik7XG5cblx0XHRcdHJldHVybiBuZXdEYXRlO1xuXHRcdH0sXG5cblx0XHRtb3ZlV2VlazogZnVuY3Rpb24oZGF0ZSwgZGlyKXtcblx0XHRcdHJldHVybiB0aGlzLm1vdmVEYXkoZGF0ZSwgZGlyICogNyk7XG5cdFx0fSxcblxuXHRcdG1vdmVNb250aDogZnVuY3Rpb24oZGF0ZSwgZGlyKXtcblx0XHRcdGlmICghaXNWYWxpZERhdGUoZGF0ZSkpXG5cdFx0XHRcdHJldHVybiB0aGlzLm8uZGVmYXVsdFZpZXdEYXRlO1xuXHRcdFx0aWYgKCFkaXIpXG5cdFx0XHRcdHJldHVybiBkYXRlO1xuXHRcdFx0dmFyIG5ld19kYXRlID0gbmV3IERhdGUoZGF0ZS52YWx1ZU9mKCkpLFxuXHRcdFx0XHRkYXkgPSBuZXdfZGF0ZS5nZXRVVENEYXRlKCksXG5cdFx0XHRcdG1vbnRoID0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSxcblx0XHRcdFx0bWFnID0gTWF0aC5hYnMoZGlyKSxcblx0XHRcdFx0bmV3X21vbnRoLCB0ZXN0O1xuXHRcdFx0ZGlyID0gZGlyID4gMCA/IDEgOiAtMTtcblx0XHRcdGlmIChtYWcgPT09IDEpe1xuXHRcdFx0XHR0ZXN0ID0gZGlyID09PSAtMVxuXHRcdFx0XHRcdC8vIElmIGdvaW5nIGJhY2sgb25lIG1vbnRoLCBtYWtlIHN1cmUgbW9udGggaXMgbm90IGN1cnJlbnQgbW9udGhcblx0XHRcdFx0XHQvLyAoZWcsIE1hciAzMSAtPiBGZWIgMzEgPT0gRmViIDI4LCBub3QgTWFyIDAyKVxuXHRcdFx0XHRcdD8gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHJldHVybiBuZXdfZGF0ZS5nZXRVVENNb250aCgpID09PSBtb250aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgZ29pbmcgZm9yd2FyZCBvbmUgbW9udGgsIG1ha2Ugc3VyZSBtb250aCBpcyBhcyBleHBlY3RlZFxuXHRcdFx0XHRcdC8vIChlZywgSmFuIDMxIC0+IEZlYiAzMSA9PSBGZWIgMjgsIG5vdCBNYXIgMDIpXG5cdFx0XHRcdFx0OiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ld19kYXRlLmdldFVUQ01vbnRoKCkgIT09IG5ld19tb250aDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRuZXdfbW9udGggPSBtb250aCArIGRpcjtcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDTW9udGgobmV3X21vbnRoKTtcblx0XHRcdFx0Ly8gRGVjIC0+IEphbiAoMTIpIG9yIEphbiAtPiBEZWMgKC0xKSAtLSBsaW1pdCBleHBlY3RlZCBkYXRlIHRvIDAtMTFcblx0XHRcdFx0bmV3X21vbnRoID0gKG5ld19tb250aCArIDEyKSAlIDEyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIEZvciBtYWduaXR1ZGVzID4xLCBtb3ZlIG9uZSBtb250aCBhdCBhIHRpbWUuLi5cblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgbWFnOyBpKyspXG5cdFx0XHRcdFx0Ly8gLi4ud2hpY2ggbWlnaHQgZGVjcmVhc2UgdGhlIGRheSAoZWcsIEphbiAzMSB0byBGZWIgMjgsIGV0YykuLi5cblx0XHRcdFx0XHRuZXdfZGF0ZSA9IHRoaXMubW92ZU1vbnRoKG5ld19kYXRlLCBkaXIpO1xuXHRcdFx0XHQvLyAuLi50aGVuIHJlc2V0IHRoZSBkYXksIGtlZXBpbmcgaXQgaW4gdGhlIG5ldyBtb250aFxuXHRcdFx0XHRuZXdfbW9udGggPSBuZXdfZGF0ZS5nZXRVVENNb250aCgpO1xuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENEYXRlKGRheSk7XG5cdFx0XHRcdHRlc3QgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiBuZXdfbW9udGggIT09IG5ld19kYXRlLmdldFVUQ01vbnRoKCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21tb24gZGF0ZS1yZXNldHRpbmcgbG9vcCAtLSBpZiBkYXRlIGlzIGJleW9uZCBlbmQgb2YgbW9udGgsIG1ha2UgaXRcblx0XHRcdC8vIGVuZCBvZiBtb250aFxuXHRcdFx0d2hpbGUgKHRlc3QoKSl7XG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ0RhdGUoLS1kYXkpO1xuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENNb250aChuZXdfbW9udGgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld19kYXRlO1xuXHRcdH0sXG5cblx0XHRtb3ZlWWVhcjogZnVuY3Rpb24oZGF0ZSwgZGlyKXtcblx0XHRcdHJldHVybiB0aGlzLm1vdmVNb250aChkYXRlLCBkaXIqMTIpO1xuXHRcdH0sXG5cblx0XHRtb3ZlQXZhaWxhYmxlRGF0ZTogZnVuY3Rpb24oZGF0ZSwgZGlyLCBmbil7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGRhdGUgPSB0aGlzW2ZuXShkYXRlLCBkaXIpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5kYXRlV2l0aGluUmFuZ2UoZGF0ZSkpXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdGZuID0gJ21vdmVEYXknO1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKHRoaXMuZGF0ZUlzRGlzYWJsZWQoZGF0ZSkpO1xuXG5cdFx0XHRyZXR1cm4gZGF0ZTtcblx0XHR9LFxuXG5cdFx0d2Vla09mRGF0ZUlzRGlzYWJsZWQ6IGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0cmV0dXJuICQuaW5BcnJheShkYXRlLmdldFVUQ0RheSgpLCB0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSAhPT0gLTE7XG5cdFx0fSxcblxuXHRcdGRhdGVJc0Rpc2FibGVkOiBmdW5jdGlvbihkYXRlKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoZGF0ZSkgfHxcblx0XHRcdFx0JC5ncmVwKHRoaXMuby5kYXRlc0Rpc2FibGVkLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0XHRyZXR1cm4gaXNVVENFcXVhbHMoZGF0ZSwgZCk7XG5cdFx0XHRcdH0pLmxlbmd0aCA+IDBcblx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGRhdGVXaXRoaW5SYW5nZTogZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRyZXR1cm4gZGF0ZSA+PSB0aGlzLm8uc3RhcnREYXRlICYmIGRhdGUgPD0gdGhpcy5vLmVuZERhdGU7XG5cdFx0fSxcblxuXHRcdGtleWRvd246IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYgKCF0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSl7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDQwIHx8IGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gYWxsb3cgZG93biB0byByZS1zaG93IHBpY2tlclxuXHRcdFx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGRhdGVDaGFuZ2VkID0gZmFsc2UsXG5cdFx0XHRcdGRpciwgbmV3Vmlld0RhdGUsXG5cdFx0XHRcdGZvY3VzRGF0ZSA9IHRoaXMuZm9jdXNEYXRlIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRzd2l0Y2ggKGUua2V5Q29kZSl7XG5cdFx0XHRcdGNhc2UgMjc6IC8vIGVzY2FwZVxuXHRcdFx0XHRcdGlmICh0aGlzLmZvY3VzRGF0ZSl7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcblx0XHRcdFx0Y2FzZSAzODogLy8gdXBcblx0XHRcdFx0Y2FzZSAzOTogLy8gcmlnaHRcblx0XHRcdFx0Y2FzZSA0MDogLy8gZG93blxuXHRcdFx0XHRcdGlmICghdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbiB8fCB0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLmxlbmd0aCA9PT0gNylcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRpciA9IGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCA/IC0xIDogMTtcbiAgICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gMCkge1xuICBcdFx0XHRcdFx0aWYgKGUuY3RybEtleSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVZZWFyJyk7XG5cbiAgXHRcdFx0XHRcdFx0aWYgKG5ld1ZpZXdEYXRlKVxuICBcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcbiAgXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS5zaGlmdEtleSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVNb250aCcpO1xuXG4gIFx0XHRcdFx0XHRcdGlmIChuZXdWaWV3RGF0ZSlcbiAgXHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xuICBcdFx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzkpe1xuICBcdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZUF2YWlsYWJsZURhdGUoZm9jdXNEYXRlLCBkaXIsICdtb3ZlRGF5Jyk7XG4gIFx0XHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGZvY3VzRGF0ZSkpe1xuICBcdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZUF2YWlsYWJsZURhdGUoZm9jdXNEYXRlLCBkaXIsICdtb3ZlV2VlaycpO1xuICBcdFx0XHRcdFx0fVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3TW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICBkaXIgPSBkaXIgKiA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVBdmFpbGFibGVEYXRlKGZvY3VzRGF0ZSwgZGlyLCAnbW92ZU1vbnRoJyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdNb2RlID09PSAyKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgIGRpciA9IGRpciAqIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZUF2YWlsYWJsZURhdGUoZm9jdXNEYXRlLCBkaXIsICdtb3ZlWWVhcicpO1xuICAgICAgICAgIH1cblx0XHRcdFx0XHRpZiAobmV3Vmlld0RhdGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSB0aGlzLnZpZXdEYXRlID0gbmV3Vmlld0RhdGU7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM6IC8vIGVudGVyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm8uZm9yY2VQYXJzZSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGZvY3VzRGF0ZSA9IHRoaXMuZm9jdXNEYXRlIHx8IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xuXHRcdFx0XHRcdGlmICh0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGZvY3VzRGF0ZSk7XG5cdFx0XHRcdFx0XHRkYXRlQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSl7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UpXG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA5OiAvLyB0YWJcblx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xuXHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGVDaGFuZ2VkKXtcblx0XHRcdFx0aWYgKHRoaXMuZGF0ZXMubGVuZ3RoKVxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NsZWFyRGF0ZScpO1xuXHRcdFx0XHR0aGlzLmlucHV0RmllbGQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldFZpZXdNb2RlOiBmdW5jdGlvbih2aWV3TW9kZSl7XG5cdFx0XHR0aGlzLnZpZXdNb2RlID0gdmlld01vZGU7XG5cdFx0XHR0aGlzLnBpY2tlclxuXHRcdFx0XHQuY2hpbGRyZW4oJ2RpdicpXG5cdFx0XHRcdC5oaWRlKClcblx0XHRcdFx0LmZpbHRlcignLmRhdGVwaWNrZXItJyArIERQR2xvYmFsLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5jbHNOYW1lKVxuXHRcdFx0XHRcdC5zaG93KCk7XG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcignY2hhbmdlVmlld01vZGUnLCBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBEYXRlUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKXtcblx0XHQkLmRhdGEoZWxlbWVudCwgJ2RhdGVwaWNrZXInLCB0aGlzKTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdHRoaXMuaW5wdXRzID0gJC5tYXAob3B0aW9ucy5pbnB1dHMsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0cmV0dXJuIGkuanF1ZXJ5ID8gaVswXSA6IGk7XG5cdFx0fSk7XG5cdFx0ZGVsZXRlIG9wdGlvbnMuaW5wdXRzO1xuXG5cdFx0dGhpcy5rZWVwRW1wdHlWYWx1ZXMgPSBvcHRpb25zLmtlZXBFbXB0eVZhbHVlcztcblx0XHRkZWxldGUgb3B0aW9ucy5rZWVwRW1wdHlWYWx1ZXM7XG5cblx0XHRkYXRlcGlja2VyUGx1Z2luLmNhbGwoJCh0aGlzLmlucHV0cyksIG9wdGlvbnMpXG5cdFx0XHQub24oJ2NoYW5nZURhdGUnLCAkLnByb3h5KHRoaXMuZGF0ZVVwZGF0ZWQsIHRoaXMpKTtcblxuXHRcdHRoaXMucGlja2VycyA9ICQubWFwKHRoaXMuaW5wdXRzLCBmdW5jdGlvbihpKXtcblx0XHRcdHJldHVybiAkLmRhdGEoaSwgJ2RhdGVwaWNrZXInKTtcblx0XHR9KTtcblx0XHR0aGlzLnVwZGF0ZURhdGVzKCk7XG5cdH07XG5cdERhdGVSYW5nZVBpY2tlci5wcm90b3R5cGUgPSB7XG5cdFx0dXBkYXRlRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmRhdGVzID0gJC5tYXAodGhpcy5waWNrZXJzLCBmdW5jdGlvbihpKXtcblx0XHRcdFx0cmV0dXJuIGkuZ2V0VVRDRGF0ZSgpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnVwZGF0ZVJhbmdlcygpO1xuXHRcdH0sXG5cdFx0dXBkYXRlUmFuZ2VzOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJhbmdlID0gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBkLnZhbHVlT2YoKTtcblx0XHRcdH0pO1xuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XG5cdFx0XHRcdHAuc2V0UmFuZ2UocmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjbGVhckRhdGVzOiBmdW5jdGlvbigpe1xuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XG5cdFx0XHRcdHAuY2xlYXJEYXRlcygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRkYXRlVXBkYXRlZDogZnVuY3Rpb24oZSl7XG5cdFx0XHQvLyBgdGhpcy51cGRhdGluZ2AgaXMgYSB3b3JrYXJvdW5kIGZvciBwcmV2ZW50aW5nIGluZmluaXRlIHJlY3Vyc2lvblxuXHRcdFx0Ly8gYmV0d2VlbiBgY2hhbmdlRGF0ZWAgdHJpZ2dlcmluZyBhbmQgYHNldFVUQ0RhdGVgIGNhbGxpbmcuICBVbnRpbFxuXHRcdFx0Ly8gdGhlcmUgaXMgYSBiZXR0ZXIgbWVjaGFuaXNtLlxuXHRcdFx0aWYgKHRoaXMudXBkYXRpbmcpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHRoaXMudXBkYXRpbmcgPSB0cnVlO1xuXG5cdFx0XHR2YXIgZHAgPSAkLmRhdGEoZS50YXJnZXQsICdkYXRlcGlja2VyJyk7XG5cblx0XHRcdGlmIChkcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5ld19kYXRlID0gZHAuZ2V0VVRDRGF0ZSgpLFxuXHRcdFx0XHRrZWVwX2VtcHR5X3ZhbHVlcyA9IHRoaXMua2VlcEVtcHR5VmFsdWVzLFxuXHRcdFx0XHRpID0gJC5pbkFycmF5KGUudGFyZ2V0LCB0aGlzLmlucHV0cyksXG5cdFx0XHRcdGogPSBpIC0gMSxcblx0XHRcdFx0ayA9IGkgKyAxLFxuXHRcdFx0XHRsID0gdGhpcy5pbnB1dHMubGVuZ3RoO1xuXHRcdFx0aWYgKGkgPT09IC0xKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdCQuZWFjaCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGksIHApe1xuXHRcdFx0XHRpZiAoIXAuZ2V0VVRDRGF0ZSgpICYmIChwID09PSBkcCB8fCAha2VlcF9lbXB0eV92YWx1ZXMpKVxuXHRcdFx0XHRcdHAuc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG5ld19kYXRlIDwgdGhpcy5kYXRlc1tqXSl7XG5cdFx0XHRcdC8vIERhdGUgYmVpbmcgbW92ZWQgZWFybGllci9sZWZ0XG5cdFx0XHRcdHdoaWxlIChqID49IDAgJiYgbmV3X2RhdGUgPCB0aGlzLmRhdGVzW2pdKXtcblx0XHRcdFx0XHR0aGlzLnBpY2tlcnNbai0tXS5zZXRVVENEYXRlKG5ld19kYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChuZXdfZGF0ZSA+IHRoaXMuZGF0ZXNba10pe1xuXHRcdFx0XHQvLyBEYXRlIGJlaW5nIG1vdmVkIGxhdGVyL3JpZ2h0XG5cdFx0XHRcdHdoaWxlIChrIDwgbCAmJiBuZXdfZGF0ZSA+IHRoaXMuZGF0ZXNba10pe1xuXHRcdFx0XHRcdHRoaXMucGlja2Vyc1trKytdLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZURhdGVzKCk7XG5cblx0XHRcdGRlbGV0ZSB0aGlzLnVwZGF0aW5nO1xuXHRcdH0sXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKXtcblx0XHRcdCQubWFwKHRoaXMucGlja2VycywgZnVuY3Rpb24ocCl7IHAuZGVzdHJveSgpOyB9KTtcblx0XHRcdCQodGhpcy5pbnB1dHMpLm9mZignY2hhbmdlRGF0ZScsIHRoaXMuZGF0ZVVwZGF0ZWQpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcjtcblx0XHR9LFxuXHRcdHJlbW92ZTogYWxpYXMoJ2Rlc3Ryb3knLCAnTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkJylcblx0fTtcblxuXHRmdW5jdGlvbiBvcHRzX2Zyb21fZWwoZWwsIHByZWZpeCl7XG5cdFx0Ly8gRGVyaXZlIG9wdGlvbnMgZnJvbSBlbGVtZW50IGRhdGEtYXR0cnNcblx0XHR2YXIgZGF0YSA9ICQoZWwpLmRhdGEoKSxcblx0XHRcdG91dCA9IHt9LCBpbmtleSxcblx0XHRcdHJlcGxhY2UgPSBuZXcgUmVnRXhwKCdeJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJyhbQS1aXSknKTtcblx0XHRwcmVmaXggPSBuZXcgUmVnRXhwKCdeJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpKTtcblx0XHRmdW5jdGlvbiByZV9sb3dlcihfLGEpe1xuXHRcdFx0cmV0dXJuIGEudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cdFx0Zm9yICh2YXIga2V5IGluIGRhdGEpXG5cdFx0XHRpZiAocHJlZml4LnRlc3Qoa2V5KSl7XG5cdFx0XHRcdGlua2V5ID0ga2V5LnJlcGxhY2UocmVwbGFjZSwgcmVfbG93ZXIpO1xuXHRcdFx0XHRvdXRbaW5rZXldID0gZGF0YVtrZXldO1xuXHRcdFx0fVxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBvcHRzX2Zyb21fbG9jYWxlKGxhbmcpe1xuXHRcdC8vIERlcml2ZSBvcHRpb25zIGZyb20gbG9jYWxlIHBsdWdpbnNcblx0XHR2YXIgb3V0ID0ge307XG5cdFx0Ly8gQ2hlY2sgaWYgXCJkZS1ERVwiIHN0eWxlIGRhdGUgaXMgYXZhaWxhYmxlLCBpZiBub3QgbGFuZ3VhZ2Ugc2hvdWxkXG5cdFx0Ly8gZmFsbGJhY2sgdG8gMiBsZXR0ZXIgY29kZSBlZyBcImRlXCJcblx0XHRpZiAoIWRhdGVzW2xhbmddKXtcblx0XHRcdGxhbmcgPSBsYW5nLnNwbGl0KCctJylbMF07XG5cdFx0XHRpZiAoIWRhdGVzW2xhbmddKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBkID0gZGF0ZXNbbGFuZ107XG5cdFx0JC5lYWNoKGxvY2FsZV9vcHRzLCBmdW5jdGlvbihpLGspe1xuXHRcdFx0aWYgKGsgaW4gZClcblx0XHRcdFx0b3V0W2tdID0gZFtrXTtcblx0XHR9KTtcblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0dmFyIG9sZCA9ICQuZm4uZGF0ZXBpY2tlcjtcblx0dmFyIGRhdGVwaWNrZXJQbHVnaW4gPSBmdW5jdGlvbihvcHRpb24pe1xuXHRcdHZhciBhcmdzID0gQXJyYXkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0XHRhcmdzLnNoaWZ0KCk7XG5cdFx0dmFyIGludGVybmFsX3JldHVybjtcblx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGRhdGEgPSAkdGhpcy5kYXRhKCdkYXRlcGlja2VyJyksXG5cdFx0XHRcdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cdFx0XHRpZiAoIWRhdGEpe1xuXHRcdFx0XHR2YXIgZWxvcHRzID0gb3B0c19mcm9tX2VsKHRoaXMsICdkYXRlJyksXG5cdFx0XHRcdFx0Ly8gUHJlbGltaW5hcnkgb3Rpb25zXG5cdFx0XHRcdFx0eG9wdHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGVsb3B0cywgb3B0aW9ucyksXG5cdFx0XHRcdFx0bG9jb3B0cyA9IG9wdHNfZnJvbV9sb2NhbGUoeG9wdHMubGFuZ3VhZ2UpLFxuXHRcdFx0XHRcdC8vIE9wdGlvbnMgcHJpb3JpdHk6IGpzIGFyZ3MsIGRhdGEtYXR0cnMsIGxvY2FsZXMsIGRlZmF1bHRzXG5cdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgbG9jb3B0cywgZWxvcHRzLCBvcHRpb25zKTtcblx0XHRcdFx0aWYgKCR0aGlzLmhhc0NsYXNzKCdpbnB1dC1kYXRlcmFuZ2UnKSB8fCBvcHRzLmlucHV0cyl7XG5cdFx0XHRcdFx0JC5leHRlbmQob3B0cywge1xuXHRcdFx0XHRcdFx0aW5wdXRzOiBvcHRzLmlucHV0cyB8fCAkdGhpcy5maW5kKCdpbnB1dCcpLnRvQXJyYXkoKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGRhdGEgPSBuZXcgRGF0ZVJhbmdlUGlja2VyKHRoaXMsIG9wdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEgPSBuZXcgRGF0ZXBpY2tlcih0aGlzLCBvcHRzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkdGhpcy5kYXRhKCdkYXRlcGlja2VyJywgZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGRhdGFbb3B0aW9uXSA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdGludGVybmFsX3JldHVybiA9IGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChcblx0XHRcdGludGVybmFsX3JldHVybiA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRpbnRlcm5hbF9yZXR1cm4gaW5zdGFuY2VvZiBEYXRlcGlja2VyIHx8XG5cdFx0XHRpbnRlcm5hbF9yZXR1cm4gaW5zdGFuY2VvZiBEYXRlUmFuZ2VQaWNrZXJcblx0XHQpXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIG9ubHkgYWxsb3dlZCBmb3IgdGhlIGNvbGxlY3Rpb24gb2YgYSBzaW5nbGUgZWxlbWVudCAoJyArIG9wdGlvbiArICcgZnVuY3Rpb24pJyk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGludGVybmFsX3JldHVybjtcblx0fTtcblx0JC5mbi5kYXRlcGlja2VyID0gZGF0ZXBpY2tlclBsdWdpbjtcblxuXHR2YXIgZGVmYXVsdHMgPSAkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMgPSB7XG5cdFx0YXNzdW1lTmVhcmJ5WWVhcjogZmFsc2UsXG5cdFx0YXV0b2Nsb3NlOiBmYWxzZSxcblx0XHRiZWZvcmVTaG93RGF5OiAkLm5vb3AsXG5cdFx0YmVmb3JlU2hvd01vbnRoOiAkLm5vb3AsXG5cdFx0YmVmb3JlU2hvd1llYXI6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93RGVjYWRlOiAkLm5vb3AsXG5cdFx0YmVmb3JlU2hvd0NlbnR1cnk6ICQubm9vcCxcblx0XHRjYWxlbmRhcldlZWtzOiBmYWxzZSxcblx0XHRjbGVhckJ0bjogZmFsc2UsXG5cdFx0dG9nZ2xlQWN0aXZlOiBmYWxzZSxcblx0XHRkYXlzT2ZXZWVrRGlzYWJsZWQ6IFtdLFxuXHRcdGRheXNPZldlZWtIaWdobGlnaHRlZDogW10sXG5cdFx0ZGF0ZXNEaXNhYmxlZDogW10sXG5cdFx0ZW5kRGF0ZTogSW5maW5pdHksXG5cdFx0Zm9yY2VQYXJzZTogdHJ1ZSxcblx0XHRmb3JtYXQ6ICdtbS9kZC95eXl5Jyxcblx0XHRrZWVwRW1wdHlWYWx1ZXM6IGZhbHNlLFxuXHRcdGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcblx0XHRsYW5ndWFnZTogJ2VuJyxcblx0XHRtaW5WaWV3TW9kZTogMCxcblx0XHRtYXhWaWV3TW9kZTogNCxcblx0XHRtdWx0aWRhdGU6IGZhbHNlLFxuXHRcdG11bHRpZGF0ZVNlcGFyYXRvcjogJywnLFxuXHRcdG9yaWVudGF0aW9uOiBcImF1dG9cIixcblx0XHRydGw6IGZhbHNlLFxuXHRcdHN0YXJ0RGF0ZTogLUluZmluaXR5LFxuXHRcdHN0YXJ0VmlldzogMCxcblx0XHR0b2RheUJ0bjogZmFsc2UsXG5cdFx0dG9kYXlIaWdobGlnaHQ6IGZhbHNlLFxuXHRcdHVwZGF0ZVZpZXdEYXRlOiB0cnVlLFxuXHRcdHdlZWtTdGFydDogMCxcblx0XHRkaXNhYmxlVG91Y2hLZXlib2FyZDogZmFsc2UsXG5cdFx0ZW5hYmxlT25SZWFkb25seTogdHJ1ZSxcblx0XHRzaG93T25Gb2N1czogdHJ1ZSxcblx0XHR6SW5kZXhPZmZzZXQ6IDEwLFxuXHRcdGNvbnRhaW5lcjogJ2JvZHknLFxuXHRcdGltbWVkaWF0ZVVwZGF0ZXM6IGZhbHNlLFxuXHRcdHRpdGxlOiAnJyxcblx0XHR0ZW1wbGF0ZXM6IHtcblx0XHRcdGxlZnRBcnJvdzogJyYjeDAwQUI7Jyxcblx0XHRcdHJpZ2h0QXJyb3c6ICcmI3gwMEJCOydcblx0XHR9LFxuICAgIHNob3dXZWVrRGF5czogdHJ1ZVxuXHR9O1xuXHR2YXIgbG9jYWxlX29wdHMgPSAkLmZuLmRhdGVwaWNrZXIubG9jYWxlX29wdHMgPSBbXG5cdFx0J2Zvcm1hdCcsXG5cdFx0J3J0bCcsXG5cdFx0J3dlZWtTdGFydCdcblx0XTtcblx0JC5mbi5kYXRlcGlja2VyLkNvbnN0cnVjdG9yID0gRGF0ZXBpY2tlcjtcblx0dmFyIGRhdGVzID0gJC5mbi5kYXRlcGlja2VyLmRhdGVzID0ge1xuXHRcdGVuOiB7XG5cdFx0XHRkYXlzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcblx0XHRcdGRheXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuXHRcdFx0ZGF5c01pbjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG5cdFx0XHRtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRcdFx0bW9udGhzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcblx0XHRcdHRvZGF5OiBcIlRvZGF5XCIsXG5cdFx0XHRjbGVhcjogXCJDbGVhclwiLFxuXHRcdFx0dGl0bGVGb3JtYXQ6IFwiTU0geXl5eVwiXG5cdFx0fVxuXHR9O1xuXG5cdHZhciBEUEdsb2JhbCA9IHtcblx0XHR2aWV3TW9kZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsnZGF5cycsICdtb250aCddLFxuXHRcdFx0XHRjbHNOYW1lOiAnZGF5cycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VNb250aCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVzOiBbJ21vbnRocycsICd5ZWFyJ10sXG5cdFx0XHRcdGNsc05hbWU6ICdtb250aHMnLFxuXHRcdFx0XHRlOiAnY2hhbmdlWWVhcicsXG5cdFx0XHRcdG5hdlN0ZXA6IDFcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVzOiBbJ3llYXJzJywgJ2RlY2FkZSddLFxuXHRcdFx0XHRjbHNOYW1lOiAneWVhcnMnLFxuXHRcdFx0XHRlOiAnY2hhbmdlRGVjYWRlJyxcblx0XHRcdFx0bmF2U3RlcDogMTBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVzOiBbJ2RlY2FkZXMnLCAnY2VudHVyeSddLFxuXHRcdFx0XHRjbHNOYW1lOiAnZGVjYWRlcycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VDZW50dXJ5Jyxcblx0XHRcdFx0bmF2U3RlcDogMTAwXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lczogWydjZW50dXJpZXMnLCAnbWlsbGVubml1bSddLFxuXHRcdFx0XHRjbHNOYW1lOiAnY2VudHVyaWVzJyxcblx0XHRcdFx0ZTogJ2NoYW5nZU1pbGxlbm5pdW0nLFxuXHRcdFx0XHRuYXZTdGVwOiAxMDAwXG5cdFx0XHR9XG5cdFx0XSxcblx0XHR2YWxpZFBhcnRzOiAvZGQ/fEREP3xtbT98TU0/fHl5KD86eXkpPy9nLFxuXHRcdG5vbnB1bmN0dWF0aW9uOiAvW14gLVxcLzotQFxcdTVlNzRcXHU2NzA4XFx1NjVlNVxcWy1gey1+XFx0XFxuXFxyXSsvZyxcblx0XHRwYXJzZUZvcm1hdDogZnVuY3Rpb24oZm9ybWF0KXtcblx0XHRcdGlmICh0eXBlb2YgZm9ybWF0LnRvVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGZvcm1hdC50b0Rpc3BsYXkgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgICAgIC8vIElFIHRyZWF0cyBcXDAgYXMgYSBzdHJpbmcgZW5kIGluIGlucHV0cyAodHJ1bmNhdGluZyB0aGUgdmFsdWUpLFxuXHRcdFx0Ly8gc28gaXQncyBhIGJhZCBmb3JtYXQgZGVsaW1pdGVyLCBhbnl3YXlcblx0XHRcdHZhciBzZXBhcmF0b3JzID0gZm9ybWF0LnJlcGxhY2UodGhpcy52YWxpZFBhcnRzLCAnXFwwJykuc3BsaXQoJ1xcMCcpLFxuXHRcdFx0XHRwYXJ0cyA9IGZvcm1hdC5tYXRjaCh0aGlzLnZhbGlkUGFydHMpO1xuXHRcdFx0aWYgKCFzZXBhcmF0b3JzIHx8ICFzZXBhcmF0b3JzLmxlbmd0aCB8fCAhcGFydHMgfHwgcGFydHMubGVuZ3RoID09PSAwKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge3NlcGFyYXRvcnM6IHNlcGFyYXRvcnMsIHBhcnRzOiBwYXJ0c307XG5cdFx0fSxcblx0XHRwYXJzZURhdGU6IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCwgbGFuZ3VhZ2UsIGFzc3VtZU5lYXJieSl7XG5cdFx0XHRpZiAoIWRhdGUpXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG5cdFx0XHRcdHJldHVybiBkYXRlO1xuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChmb3JtYXQpO1xuXHRcdFx0aWYgKGZvcm1hdC50b1ZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0LnRvVmFsdWUoZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSk7XG5cdFx0XHR2YXIgZm5fbWFwID0ge1xuXHRcdFx0XHRcdGQ6ICdtb3ZlRGF5Jyxcblx0XHRcdFx0XHRtOiAnbW92ZU1vbnRoJyxcblx0XHRcdFx0XHR3OiAnbW92ZVdlZWsnLFxuXHRcdFx0XHRcdHk6ICdtb3ZlWWVhcidcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0ZUFsaWFzZXMgPSB7XG5cdFx0XHRcdFx0eWVzdGVyZGF5OiAnLTFkJyxcblx0XHRcdFx0XHR0b2RheTogJyswZCcsXG5cdFx0XHRcdFx0dG9tb3Jyb3c6ICcrMWQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBhcnRzLCBwYXJ0LCBkaXIsIGksIGZuO1xuXHRcdFx0aWYgKGRhdGUgaW4gZGF0ZUFsaWFzZXMpe1xuXHRcdFx0XHRkYXRlID0gZGF0ZUFsaWFzZXNbZGF0ZV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoL15bXFwtK11cXGQrW2Rtd3ldKFtcXHMsXStbXFwtK11cXGQrW2Rtd3ldKSokL2kudGVzdChkYXRlKSl7XG5cdFx0XHRcdHBhcnRzID0gZGF0ZS5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvZ2kpO1xuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0cGFydCA9IHBhcnRzW2ldLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9pKTtcblx0XHRcdFx0XHRkaXIgPSBOdW1iZXIocGFydFsxXSk7XG5cdFx0XHRcdFx0Zm4gPSBmbl9tYXBbcGFydFsyXS50b0xvd2VyQ2FzZSgpXTtcblx0XHRcdFx0XHRkYXRlID0gRGF0ZXBpY2tlci5wcm90b3R5cGVbZm5dKGRhdGUsIGRpcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIERhdGVwaWNrZXIucHJvdG90eXBlLl96ZXJvX3V0Y190aW1lKGRhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJ0cyA9IGRhdGUgJiYgZGF0ZS5tYXRjaCh0aGlzLm5vbnB1bmN0dWF0aW9uKSB8fCBbXTtcblxuXHRcdFx0ZnVuY3Rpb24gYXBwbHlOZWFyYnlZZWFyKHllYXIsIHRocmVzaG9sZCl7XG5cdFx0XHRcdGlmICh0aHJlc2hvbGQgPT09IHRydWUpXG5cdFx0XHRcdFx0dGhyZXNob2xkID0gMTA7XG5cblx0XHRcdFx0Ly8gaWYgeWVhciBpcyAyIGRpZ2l0cyBvciBsZXNzLCB0aGFuIHRoZSB1c2VyIG1vc3QgbGlrZWx5IGlzIHRyeWluZyB0byBnZXQgYSByZWNlbnQgY2VudHVyeVxuXHRcdFx0XHRpZiAoeWVhciA8IDEwMCl7XG5cdFx0XHRcdFx0eWVhciArPSAyMDAwO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgeWVhciBpcyBtb3JlIHRoYW4gdGhyZXNob2xkIHllYXJzIGluIGFkdmFuY2UsIHVzZSBsYXN0IGNlbnR1cnlcblx0XHRcdFx0XHRpZiAoeWVhciA+ICgobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSt0aHJlc2hvbGQpKXtcblx0XHRcdFx0XHRcdHllYXIgLT0gMTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB5ZWFyO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGFyc2VkID0ge30sXG5cdFx0XHRcdHNldHRlcnNfb3JkZXIgPSBbJ3l5eXknLCAneXknLCAnTScsICdNTScsICdtJywgJ21tJywgJ2QnLCAnZGQnXSxcblx0XHRcdFx0c2V0dGVyc19tYXAgPSB7XG5cdFx0XHRcdFx0eXl5eTogZnVuY3Rpb24oZCx2KXtcblx0XHRcdFx0XHRcdHJldHVybiBkLnNldFVUQ0Z1bGxZZWFyKGFzc3VtZU5lYXJieSA/IGFwcGx5TmVhcmJ5WWVhcih2LCBhc3N1bWVOZWFyYnkpIDogdik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtOiBmdW5jdGlvbihkLHYpe1xuXHRcdFx0XHRcdFx0aWYgKGlzTmFOKGQpKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZDtcblx0XHRcdFx0XHRcdHYgLT0gMTtcblx0XHRcdFx0XHRcdHdoaWxlICh2IDwgMCkgdiArPSAxMjtcblx0XHRcdFx0XHRcdHYgJT0gMTI7XG5cdFx0XHRcdFx0XHRkLnNldFVUQ01vbnRoKHYpO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGQuZ2V0VVRDTW9udGgoKSAhPT0gdilcblx0XHRcdFx0XHRcdFx0ZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpLTEpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQ7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkOiBmdW5jdGlvbihkLHYpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRGF0ZSh2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbCwgZmlsdGVyZWQ7XG5cdFx0XHRzZXR0ZXJzX21hcFsneXknXSA9IHNldHRlcnNfbWFwWyd5eXl5J107XG5cdFx0XHRzZXR0ZXJzX21hcFsnTSddID0gc2V0dGVyc19tYXBbJ01NJ10gPSBzZXR0ZXJzX21hcFsnbW0nXSA9IHNldHRlcnNfbWFwWydtJ107XG5cdFx0XHRzZXR0ZXJzX21hcFsnZGQnXSA9IHNldHRlcnNfbWFwWydkJ107XG5cdFx0XHRkYXRlID0gVVRDVG9kYXkoKTtcblx0XHRcdHZhciBmcGFydHMgPSBmb3JtYXQucGFydHMuc2xpY2UoKTtcblx0XHRcdC8vIFJlbW92ZSBub29wIHBhcnRzXG5cdFx0XHRpZiAocGFydHMubGVuZ3RoICE9PSBmcGFydHMubGVuZ3RoKXtcblx0XHRcdFx0ZnBhcnRzID0gJChmcGFydHMpLmZpbHRlcihmdW5jdGlvbihpLHApe1xuXHRcdFx0XHRcdHJldHVybiAkLmluQXJyYXkocCwgc2V0dGVyc19vcmRlcikgIT09IC0xO1xuXHRcdFx0XHR9KS50b0FycmF5KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBQcm9jZXNzIHJlbWFpbmRlclxuXHRcdFx0ZnVuY3Rpb24gbWF0Y2hfcGFydCgpe1xuXHRcdFx0XHR2YXIgbSA9IHRoaXMuc2xpY2UoMCwgcGFydHNbaV0ubGVuZ3RoKSxcblx0XHRcdFx0XHRwID0gcGFydHNbaV0uc2xpY2UoMCwgbS5sZW5ndGgpO1xuXHRcdFx0XHRyZXR1cm4gbS50b0xvd2VyQ2FzZSgpID09PSBwLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSBmcGFydHMubGVuZ3RoKXtcblx0XHRcdFx0dmFyIGNudDtcblx0XHRcdFx0Zm9yIChpPTAsIGNudCA9IGZwYXJ0cy5sZW5ndGg7IGkgPCBjbnQ7IGkrKyl7XG5cdFx0XHRcdFx0dmFsID0gcGFyc2VJbnQocGFydHNbaV0sIDEwKTtcblx0XHRcdFx0XHRwYXJ0ID0gZnBhcnRzW2ldO1xuXHRcdFx0XHRcdGlmIChpc05hTih2YWwpKXtcblx0XHRcdFx0XHRcdHN3aXRjaCAocGFydCl7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ01NJzpcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXJlZCA9ICQoZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRocykuZmlsdGVyKG1hdGNoX3BhcnQpO1xuXHRcdFx0XHRcdFx0XHRcdHZhbCA9ICQuaW5BcnJheShmaWx0ZXJlZFswXSwgZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRocykgKyAxO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdNJzpcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXJlZCA9ICQoZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1Nob3J0KS5maWx0ZXIobWF0Y2hfcGFydCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gJC5pbkFycmF5KGZpbHRlcmVkWzBdLCBkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnQpICsgMTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFyc2VkW3BhcnRdID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBfZGF0ZSwgcztcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBzZXR0ZXJzX29yZGVyLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRzID0gc2V0dGVyc19vcmRlcltpXTtcblx0XHRcdFx0XHRpZiAocyBpbiBwYXJzZWQgJiYgIWlzTmFOKHBhcnNlZFtzXSkpe1xuXHRcdFx0XHRcdFx0X2RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblx0XHRcdFx0XHRcdHNldHRlcnNfbWFwW3NdKF9kYXRlLCBwYXJzZWRbc10pO1xuXHRcdFx0XHRcdFx0aWYgKCFpc05hTihfZGF0ZSkpXG5cdFx0XHRcdFx0XHRcdGRhdGUgPSBfZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH0sXG5cdFx0Zm9ybWF0RGF0ZTogZnVuY3Rpb24oZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSl7XG5cdFx0XHRpZiAoIWRhdGUpXG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJylcblx0XHRcdFx0Zm9ybWF0ID0gRFBHbG9iYWwucGFyc2VGb3JtYXQoZm9ybWF0KTtcblx0XHRcdGlmIChmb3JtYXQudG9EaXNwbGF5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQudG9EaXNwbGF5KGRhdGUsIGZvcm1hdCwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IHtcblx0XHRcdFx0ZDogZGF0ZS5nZXRVVENEYXRlKCksXG5cdFx0XHRcdEQ6IGRhdGVzW2xhbmd1YWdlXS5kYXlzU2hvcnRbZGF0ZS5nZXRVVENEYXkoKV0sXG5cdFx0XHRcdEREOiBkYXRlc1tsYW5ndWFnZV0uZGF5c1tkYXRlLmdldFVUQ0RheSgpXSxcblx0XHRcdFx0bTogZGF0ZS5nZXRVVENNb250aCgpICsgMSxcblx0XHRcdFx0TTogZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2RhdGUuZ2V0VVRDTW9udGgoKV0sXG5cdFx0XHRcdE1NOiBkYXRlc1tsYW5ndWFnZV0ubW9udGhzW2RhdGUuZ2V0VVRDTW9udGgoKV0sXG5cdFx0XHRcdHl5OiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMiksXG5cdFx0XHRcdHl5eXk6IGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuXHRcdFx0fTtcblx0XHRcdHZhbC5kZCA9ICh2YWwuZCA8IDEwID8gJzAnIDogJycpICsgdmFsLmQ7XG5cdFx0XHR2YWwubW0gPSAodmFsLm0gPCAxMCA/ICcwJyA6ICcnKSArIHZhbC5tO1xuXHRcdFx0ZGF0ZSA9IFtdO1xuXHRcdFx0dmFyIHNlcHMgPSAkLmV4dGVuZChbXSwgZm9ybWF0LnNlcGFyYXRvcnMpO1xuXHRcdFx0Zm9yICh2YXIgaT0wLCBjbnQgPSBmb3JtYXQucGFydHMubGVuZ3RoOyBpIDw9IGNudDsgaSsrKXtcblx0XHRcdFx0aWYgKHNlcHMubGVuZ3RoKVxuXHRcdFx0XHRcdGRhdGUucHVzaChzZXBzLnNoaWZ0KCkpO1xuXHRcdFx0XHRkYXRlLnB1c2godmFsW2Zvcm1hdC5wYXJ0c1tpXV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRhdGUuam9pbignJyk7XG5cdFx0fSxcblx0XHRoZWFkVGVtcGxhdGU6ICc8dGhlYWQ+Jytcblx0XHRcdCAgICAgICAgICAgICAgJzx0cj4nK1xuXHRcdFx0ICAgICAgICAgICAgICAgICc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L3RoPicrXG5cdFx0XHQgICAgICAgICAgICAgICc8L3RyPicrXG5cdFx0XHRcdFx0XHRcdCc8dHI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNsYXNzPVwicHJldlwiPicrZGVmYXVsdHMudGVtcGxhdGVzLmxlZnRBcnJvdysnPC90aD4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cImRhdGVwaWNrZXItc3dpdGNoXCI+PC90aD4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY2xhc3M9XCJuZXh0XCI+JytkZWZhdWx0cy50ZW1wbGF0ZXMucmlnaHRBcnJvdysnPC90aD4nK1xuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xuXHRcdFx0XHRcdFx0JzwvdGhlYWQ+Jyxcblx0XHRjb250VGVtcGxhdGU6ICc8dGJvZHk+PHRyPjx0ZCBjb2xzcGFuPVwiN1wiPjwvdGQ+PC90cj48L3Rib2R5PicsXG5cdFx0Zm9vdFRlbXBsYXRlOiAnPHRmb290PicrXG5cdFx0XHRcdFx0XHRcdCc8dHI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0b2RheVwiPjwvdGg+Jytcblx0XHRcdFx0XHRcdFx0JzwvdHI+Jytcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImNsZWFyXCI+PC90aD4nK1xuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xuXHRcdFx0XHRcdFx0JzwvdGZvb3Q+J1xuXHR9O1xuXHREUEdsb2JhbC50ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kYXlzXCI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+Jytcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdCc8dGJvZHk+PC90Ym9keT4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbW9udGhzXCI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+Jytcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmNvbnRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXllYXJzXCI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+Jytcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmNvbnRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRlY2FkZXNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY2VudHVyaWVzXCI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+Jytcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmNvbnRUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8L2Rpdj4nO1xuXG5cdCQuZm4uZGF0ZXBpY2tlci5EUEdsb2JhbCA9IERQR2xvYmFsO1xuXG5cblx0LyogREFURVBJQ0tFUiBOTyBDT05GTElDVFxuXHQqID09PT09PT09PT09PT09PT09PT0gKi9cblxuXHQkLmZuLmRhdGVwaWNrZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCl7XG5cdFx0JC5mbi5kYXRlcGlja2VyID0gb2xkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qIERBVEVQSUNLRVIgVkVSU0lPTlxuXHQgKiA9PT09PT09PT09PT09PT09PT09ICovXG5cdCQuZm4uZGF0ZXBpY2tlci52ZXJzaW9uID0gJzEuOS4wJztcblxuXHQkLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZCA9IGZ1bmN0aW9uKG1zZyl7XG5cdFx0dmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblx0XHRpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcblx0XHRcdGNvbnNvbGUud2FybignREVQUkVDQVRFRDogJyArIG1zZyk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyogREFURVBJQ0tFUiBEQVRBLUFQSVxuXHQqID09PT09PT09PT09PT09PT09PSAqL1xuXG5cdCQoZG9jdW1lbnQpLm9uKFxuXHRcdCdmb2N1cy5kYXRlcGlja2VyLmRhdGEtYXBpIGNsaWNrLmRhdGVwaWNrZXIuZGF0YS1hcGknLFxuXHRcdCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlclwiXScsXG5cdFx0ZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0aWYgKCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInKSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gY29tcG9uZW50IGNsaWNrIHJlcXVpcmVzIHVzIHRvIGV4cGxpY2l0bHkgc2hvdyBpdFxuXHRcdFx0ZGF0ZXBpY2tlclBsdWdpbi5jYWxsKCR0aGlzLCAnc2hvdycpO1xuXHRcdH1cblx0KTtcblx0JChmdW5jdGlvbigpe1xuXHRcdGRhdGVwaWNrZXJQbHVnaW4uY2FsbCgkKCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlci1pbmxpbmVcIl0nKSk7XG5cdH0pO1xuXG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js\n");

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
      function __nested_webpack_require_174670__(moduleId) {
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
        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_174670__);
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
        /******/__nested_webpack_require_174670__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_174670__.d(getter, {
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
        /******/__nested_webpack_require_174670__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_174670__.o(definition, key) && !__nested_webpack_require_174670__.o(exports, key)) {
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
        /******/__nested_webpack_require_174670__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      !function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_174670__.r = function (exports) {
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
      var __webpack_exports__ = __nested_webpack_require_174670__("./libs/bootstrap-datepicker/bootstrap-datepicker.js");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});