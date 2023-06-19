(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("moment")) : factory(root["moment"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_moment__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js ***!
  \*********************************************************************************************/
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
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(/*! moment */ "moment"), __webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ "moment"), __webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(self, function (__WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
  return (/******/function () {
      // webpackBootstrap
      /******/
      var __webpack_modules__ = {
        /***/"./libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js":
        /*!*********************************************************************!*\
          !*** ./libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js ***!
          \*********************************************************************/
        /***/
        function libsBootstrapDaterangepickerBootstrapDaterangepickerJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          "use strict";

          eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_daterangepicker_daterangepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-daterangepicker/daterangepicker */ \"./node_modules/bootstrap-daterangepicker/daterangepicker.js\");\n/* harmony import */ var bootstrap_daterangepicker_daterangepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_daterangepicker_daterangepicker__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Patch detect when weeks are shown\n\nvar fnDaterangepicker = $.fn.daterangepicker;\n$.fn.daterangepicker = function (options, callback) {\n  fnDaterangepicker.call(this, options, callback);\n  if (options && (options.showWeekNumbers || options.showISOWeekNumbers)) {\n    this.each(function () {\n      var instance = $(this).data('daterangepicker');\n      console.log(instance);\n      if (instance && instance.container) instance.container.addClass('with-week-numbers');\n    });\n  }\n  return this;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2Jvb3RzdHJhcC1kYXRlcmFuZ2VwaWNrZXIvYm9vdHN0cmFwLWRhdGVyYW5nZXBpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBbUQ7O0FBRW5EOztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsZUFBZTtBQUU5Q0YsQ0FBQyxDQUFDQyxFQUFFLENBQUNDLGVBQWUsR0FBRyxVQUFVQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtFQUNsREwsaUJBQWlCLENBQUNNLElBQUksQ0FBQyxJQUFJLEVBQUVGLE9BQU8sRUFBRUMsUUFBUSxDQUFDO0VBRS9DLElBQUlELE9BQU8sS0FBS0EsT0FBTyxDQUFDRyxlQUFlLElBQUlILE9BQU8sQ0FBQ0ksa0JBQWtCLENBQUMsRUFBRTtJQUN0RSxJQUFJLENBQUNDLElBQUksQ0FBQyxZQUFZO01BQ3BCLElBQU1DLFFBQVEsR0FBR1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVSxJQUFJLENBQUMsaUJBQWlCLENBQUM7TUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7TUFDckIsSUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNJLFNBQVMsRUFBRUosUUFBUSxDQUFDSSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN0RixDQUFDLENBQUM7RUFDSjtFQUVBLE9BQU8sSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmVhdC8uL2xpYnMvYm9vdHN0cmFwLWRhdGVyYW5nZXBpY2tlci9ib290c3RyYXAtZGF0ZXJhbmdlcGlja2VyLmpzP2RmZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAtZGF0ZXJhbmdlcGlja2VyL2RhdGVyYW5nZXBpY2tlcic7XHJcblxyXG4vLyBQYXRjaCBkZXRlY3Qgd2hlbiB3ZWVrcyBhcmUgc2hvd25cclxuXHJcbmNvbnN0IGZuRGF0ZXJhbmdlcGlja2VyID0gJC5mbi5kYXRlcmFuZ2VwaWNrZXI7XHJcblxyXG4kLmZuLmRhdGVyYW5nZXBpY2tlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gIGZuRGF0ZXJhbmdlcGlja2VyLmNhbGwodGhpcywgb3B0aW9ucywgY2FsbGJhY2spO1xyXG5cclxuICBpZiAob3B0aW9ucyAmJiAob3B0aW9ucy5zaG93V2Vla051bWJlcnMgfHwgb3B0aW9ucy5zaG93SVNPV2Vla051bWJlcnMpKSB7XHJcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9ICQodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcclxuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmNvbnRhaW5lcikgaW5zdGFuY2UuY29udGFpbmVyLmFkZENsYXNzKCd3aXRoLXdlZWstbnVtYmVycycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuIl0sIm5hbWVzIjpbImZuRGF0ZXJhbmdlcGlja2VyIiwiJCIsImZuIiwiZGF0ZXJhbmdlcGlja2VyIiwib3B0aW9ucyIsImNhbGxiYWNrIiwiY2FsbCIsInNob3dXZWVrTnVtYmVycyIsInNob3dJU09XZWVrTnVtYmVycyIsImVhY2giLCJpbnN0YW5jZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiYWRkQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js\n");

          /***/
        },

        /***/"./node_modules/bootstrap-daterangepicker/daterangepicker.js":
        /*!*******************************************************************!*\
          !*** ./node_modules/bootstrap-daterangepicker/daterangepicker.js ***!
          \*******************************************************************/
        /***/
        function node_modulesBootstrapDaterangepickerDaterangepickerJs(module, exports, __webpack_require__) {
          eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\r\n* @version: 3.1\r\n* @author: Dan Grossman http://www.dangrossman.info/\r\n* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.\r\n* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php\r\n* @website: http://www.daterangepicker.com/\r\n*/\r\n// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js\r\n(function (root, factory) {\r\n    if (true) {\r\n        // AMD. Make globaly available as well\r\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ \"moment\"), __webpack_require__(/*! jquery */ \"jquery\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (moment, jquery) {\r\n            if (!jquery.fn) jquery.fn = {}; // webpack server rendering\r\n            if (typeof moment !== 'function' && moment.hasOwnProperty('default')) moment = moment['default']\r\n            return factory(moment, jquery);\r\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n    } else { var moment, jQuery; }\r\n}(this, function(moment, $) {\r\n    var DateRangePicker = function(element, options, cb) {\r\n\r\n        //default settings for options\r\n        this.parentEl = 'body';\r\n        this.element = $(element);\r\n        this.startDate = moment().startOf('day');\r\n        this.endDate = moment().endOf('day');\r\n        this.minDate = false;\r\n        this.maxDate = false;\r\n        this.maxSpan = false;\r\n        this.autoApply = false;\r\n        this.singleDatePicker = false;\r\n        this.showDropdowns = false;\r\n        this.minYear = moment().subtract(100, 'year').format('YYYY');\r\n        this.maxYear = moment().add(100, 'year').format('YYYY');\r\n        this.showWeekNumbers = false;\r\n        this.showISOWeekNumbers = false;\r\n        this.showCustomRangeLabel = true;\r\n        this.timePicker = false;\r\n        this.timePicker24Hour = false;\r\n        this.timePickerIncrement = 1;\r\n        this.timePickerSeconds = false;\r\n        this.linkedCalendars = true;\r\n        this.autoUpdateInput = true;\r\n        this.alwaysShowCalendars = false;\r\n        this.ranges = {};\r\n\r\n        this.opens = 'right';\r\n        if (this.element.hasClass('pull-right'))\r\n            this.opens = 'left';\r\n\r\n        this.drops = 'down';\r\n        if (this.element.hasClass('dropup'))\r\n            this.drops = 'up';\r\n\r\n        this.buttonClasses = 'btn btn-sm';\r\n        this.applyButtonClasses = 'btn-primary';\r\n        this.cancelButtonClasses = 'btn-default';\r\n\r\n        this.locale = {\r\n            direction: 'ltr',\r\n            format: moment.localeData().longDateFormat('L'),\r\n            separator: ' - ',\r\n            applyLabel: 'Apply',\r\n            cancelLabel: 'Cancel',\r\n            weekLabel: 'W',\r\n            customRangeLabel: 'Custom Range',\r\n            daysOfWeek: moment.weekdaysMin(),\r\n            monthNames: moment.monthsShort(),\r\n            firstDay: moment.localeData().firstDayOfWeek()\r\n        };\r\n\r\n        this.callback = function() { };\r\n\r\n        //some state information\r\n        this.isShowing = false;\r\n        this.leftCalendar = {};\r\n        this.rightCalendar = {};\r\n\r\n        //custom options from user\r\n        if (typeof options !== 'object' || options === null)\r\n            options = {};\r\n\r\n        //allow setting options with data attributes\r\n        //data-api options will be overwritten with custom javascript options\r\n        options = $.extend(this.element.data(), options);\r\n\r\n        //html template for the picker UI\r\n        if (typeof options.template !== 'string' && !(options.template instanceof $))\r\n            options.template =\r\n            '<div class=\"daterangepicker\">' +\r\n                '<div class=\"ranges\"></div>' +\r\n                '<div class=\"drp-calendar left\">' +\r\n                    '<div class=\"calendar-table\"></div>' +\r\n                    '<div class=\"calendar-time\"></div>' +\r\n                '</div>' +\r\n                '<div class=\"drp-calendar right\">' +\r\n                    '<div class=\"calendar-table\"></div>' +\r\n                    '<div class=\"calendar-time\"></div>' +\r\n                '</div>' +\r\n                '<div class=\"drp-buttons\">' +\r\n                    '<span class=\"drp-selected\"></span>' +\r\n                    '<button class=\"cancelBtn\" type=\"button\"></button>' +\r\n                    '<button class=\"applyBtn\" disabled=\"disabled\" type=\"button\"></button> ' +\r\n                '</div>' +\r\n            '</div>';\r\n\r\n        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);\r\n        this.container = $(options.template).appendTo(this.parentEl);\r\n\r\n        //\r\n        // handle all the possible options overriding defaults\r\n        //\r\n\r\n        if (typeof options.locale === 'object') {\r\n\r\n            if (typeof options.locale.direction === 'string')\r\n                this.locale.direction = options.locale.direction;\r\n\r\n            if (typeof options.locale.format === 'string')\r\n                this.locale.format = options.locale.format;\r\n\r\n            if (typeof options.locale.separator === 'string')\r\n                this.locale.separator = options.locale.separator;\r\n\r\n            if (typeof options.locale.daysOfWeek === 'object')\r\n                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();\r\n\r\n            if (typeof options.locale.monthNames === 'object')\r\n              this.locale.monthNames = options.locale.monthNames.slice();\r\n\r\n            if (typeof options.locale.firstDay === 'number')\r\n              this.locale.firstDay = options.locale.firstDay;\r\n\r\n            if (typeof options.locale.applyLabel === 'string')\r\n              this.locale.applyLabel = options.locale.applyLabel;\r\n\r\n            if (typeof options.locale.cancelLabel === 'string')\r\n              this.locale.cancelLabel = options.locale.cancelLabel;\r\n\r\n            if (typeof options.locale.weekLabel === 'string')\r\n              this.locale.weekLabel = options.locale.weekLabel;\r\n\r\n            if (typeof options.locale.customRangeLabel === 'string'){\r\n                //Support unicode chars in the custom range name.\r\n                var elem = document.createElement('textarea');\r\n                elem.innerHTML = options.locale.customRangeLabel;\r\n                var rangeHtml = elem.value;\r\n                this.locale.customRangeLabel = rangeHtml;\r\n            }\r\n        }\r\n        this.container.addClass(this.locale.direction);\r\n\r\n        if (typeof options.startDate === 'string')\r\n            this.startDate = moment(options.startDate, this.locale.format);\r\n\r\n        if (typeof options.endDate === 'string')\r\n            this.endDate = moment(options.endDate, this.locale.format);\r\n\r\n        if (typeof options.minDate === 'string')\r\n            this.minDate = moment(options.minDate, this.locale.format);\r\n\r\n        if (typeof options.maxDate === 'string')\r\n            this.maxDate = moment(options.maxDate, this.locale.format);\r\n\r\n        if (typeof options.startDate === 'object')\r\n            this.startDate = moment(options.startDate);\r\n\r\n        if (typeof options.endDate === 'object')\r\n            this.endDate = moment(options.endDate);\r\n\r\n        if (typeof options.minDate === 'object')\r\n            this.minDate = moment(options.minDate);\r\n\r\n        if (typeof options.maxDate === 'object')\r\n            this.maxDate = moment(options.maxDate);\r\n\r\n        // sanity check for bad options\r\n        if (this.minDate && this.startDate.isBefore(this.minDate))\r\n            this.startDate = this.minDate.clone();\r\n\r\n        // sanity check for bad options\r\n        if (this.maxDate && this.endDate.isAfter(this.maxDate))\r\n            this.endDate = this.maxDate.clone();\r\n\r\n        if (typeof options.applyButtonClasses === 'string')\r\n            this.applyButtonClasses = options.applyButtonClasses;\r\n\r\n        if (typeof options.applyClass === 'string') //backwards compat\r\n            this.applyButtonClasses = options.applyClass;\r\n\r\n        if (typeof options.cancelButtonClasses === 'string')\r\n            this.cancelButtonClasses = options.cancelButtonClasses;\r\n\r\n        if (typeof options.cancelClass === 'string') //backwards compat\r\n            this.cancelButtonClasses = options.cancelClass;\r\n\r\n        if (typeof options.maxSpan === 'object')\r\n            this.maxSpan = options.maxSpan;\r\n\r\n        if (typeof options.dateLimit === 'object') //backwards compat\r\n            this.maxSpan = options.dateLimit;\r\n\r\n        if (typeof options.opens === 'string')\r\n            this.opens = options.opens;\r\n\r\n        if (typeof options.drops === 'string')\r\n            this.drops = options.drops;\r\n\r\n        if (typeof options.showWeekNumbers === 'boolean')\r\n            this.showWeekNumbers = options.showWeekNumbers;\r\n\r\n        if (typeof options.showISOWeekNumbers === 'boolean')\r\n            this.showISOWeekNumbers = options.showISOWeekNumbers;\r\n\r\n        if (typeof options.buttonClasses === 'string')\r\n            this.buttonClasses = options.buttonClasses;\r\n\r\n        if (typeof options.buttonClasses === 'object')\r\n            this.buttonClasses = options.buttonClasses.join(' ');\r\n\r\n        if (typeof options.showDropdowns === 'boolean')\r\n            this.showDropdowns = options.showDropdowns;\r\n\r\n        if (typeof options.minYear === 'number')\r\n            this.minYear = options.minYear;\r\n\r\n        if (typeof options.maxYear === 'number')\r\n            this.maxYear = options.maxYear;\r\n\r\n        if (typeof options.showCustomRangeLabel === 'boolean')\r\n            this.showCustomRangeLabel = options.showCustomRangeLabel;\r\n\r\n        if (typeof options.singleDatePicker === 'boolean') {\r\n            this.singleDatePicker = options.singleDatePicker;\r\n            if (this.singleDatePicker)\r\n                this.endDate = this.startDate.clone();\r\n        }\r\n\r\n        if (typeof options.timePicker === 'boolean')\r\n            this.timePicker = options.timePicker;\r\n\r\n        if (typeof options.timePickerSeconds === 'boolean')\r\n            this.timePickerSeconds = options.timePickerSeconds;\r\n\r\n        if (typeof options.timePickerIncrement === 'number')\r\n            this.timePickerIncrement = options.timePickerIncrement;\r\n\r\n        if (typeof options.timePicker24Hour === 'boolean')\r\n            this.timePicker24Hour = options.timePicker24Hour;\r\n\r\n        if (typeof options.autoApply === 'boolean')\r\n            this.autoApply = options.autoApply;\r\n\r\n        if (typeof options.autoUpdateInput === 'boolean')\r\n            this.autoUpdateInput = options.autoUpdateInput;\r\n\r\n        if (typeof options.linkedCalendars === 'boolean')\r\n            this.linkedCalendars = options.linkedCalendars;\r\n\r\n        if (typeof options.isInvalidDate === 'function')\r\n            this.isInvalidDate = options.isInvalidDate;\r\n\r\n        if (typeof options.isCustomDate === 'function')\r\n            this.isCustomDate = options.isCustomDate;\r\n\r\n        if (typeof options.alwaysShowCalendars === 'boolean')\r\n            this.alwaysShowCalendars = options.alwaysShowCalendars;\r\n\r\n        // update day names order to firstDay\r\n        if (this.locale.firstDay != 0) {\r\n            var iterator = this.locale.firstDay;\r\n            while (iterator > 0) {\r\n                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());\r\n                iterator--;\r\n            }\r\n        }\r\n\r\n        var start, end, range;\r\n\r\n        //if no start/end dates set, check if an input element contains initial values\r\n        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {\r\n            if ($(this.element).is(':text')) {\r\n                var val = $(this.element).val(),\r\n                    split = val.split(this.locale.separator);\r\n\r\n                start = end = null;\r\n\r\n                if (split.length == 2) {\r\n                    start = moment(split[0], this.locale.format);\r\n                    end = moment(split[1], this.locale.format);\r\n                } else if (this.singleDatePicker && val !== \"\") {\r\n                    start = moment(val, this.locale.format);\r\n                    end = moment(val, this.locale.format);\r\n                }\r\n                if (start !== null && end !== null) {\r\n                    this.setStartDate(start);\r\n                    this.setEndDate(end);\r\n                }\r\n            }\r\n        }\r\n\r\n        if (typeof options.ranges === 'object') {\r\n            for (range in options.ranges) {\r\n\r\n                if (typeof options.ranges[range][0] === 'string')\r\n                    start = moment(options.ranges[range][0], this.locale.format);\r\n                else\r\n                    start = moment(options.ranges[range][0]);\r\n\r\n                if (typeof options.ranges[range][1] === 'string')\r\n                    end = moment(options.ranges[range][1], this.locale.format);\r\n                else\r\n                    end = moment(options.ranges[range][1]);\r\n\r\n                // If the start or end date exceed those allowed by the minDate or maxSpan\r\n                // options, shorten the range to the allowable period.\r\n                if (this.minDate && start.isBefore(this.minDate))\r\n                    start = this.minDate.clone();\r\n\r\n                var maxDate = this.maxDate;\r\n                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))\r\n                    maxDate = start.clone().add(this.maxSpan);\r\n                if (maxDate && end.isAfter(maxDate))\r\n                    end = maxDate.clone();\r\n\r\n                // If the end of the range is before the minimum or the start of the range is\r\n                // after the maximum, don't display this range option at all.\r\n                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day'))\r\n                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))\r\n                    continue;\r\n\r\n                //Support unicode chars in the range names.\r\n                var elem = document.createElement('textarea');\r\n                elem.innerHTML = range;\r\n                var rangeHtml = elem.value;\r\n\r\n                this.ranges[rangeHtml] = [start, end];\r\n            }\r\n\r\n            var list = '<ul>';\r\n            for (range in this.ranges) {\r\n                list += '<li data-range-key=\"' + range + '\">' + range + '</li>';\r\n            }\r\n            if (this.showCustomRangeLabel) {\r\n                list += '<li data-range-key=\"' + this.locale.customRangeLabel + '\">' + this.locale.customRangeLabel + '</li>';\r\n            }\r\n            list += '</ul>';\r\n            this.container.find('.ranges').prepend(list);\r\n        }\r\n\r\n        if (typeof cb === 'function') {\r\n            this.callback = cb;\r\n        }\r\n\r\n        if (!this.timePicker) {\r\n            this.startDate = this.startDate.startOf('day');\r\n            this.endDate = this.endDate.endOf('day');\r\n            this.container.find('.calendar-time').hide();\r\n        }\r\n\r\n        //can't be used together for now\r\n        if (this.timePicker && this.autoApply)\r\n            this.autoApply = false;\r\n\r\n        if (this.autoApply) {\r\n            this.container.addClass('auto-apply');\r\n        }\r\n\r\n        if (typeof options.ranges === 'object')\r\n            this.container.addClass('show-ranges');\r\n\r\n        if (this.singleDatePicker) {\r\n            this.container.addClass('single');\r\n            this.container.find('.drp-calendar.left').addClass('single');\r\n            this.container.find('.drp-calendar.left').show();\r\n            this.container.find('.drp-calendar.right').hide();\r\n            if (!this.timePicker && this.autoApply) {\r\n                this.container.addClass('auto-apply');\r\n            }\r\n        }\r\n\r\n        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {\r\n            this.container.addClass('show-calendar');\r\n        }\r\n\r\n        this.container.addClass('opens' + this.opens);\r\n\r\n        //apply CSS classes and labels to buttons\r\n        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);\r\n        if (this.applyButtonClasses.length)\r\n            this.container.find('.applyBtn').addClass(this.applyButtonClasses);\r\n        if (this.cancelButtonClasses.length)\r\n            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);\r\n        this.container.find('.applyBtn').html(this.locale.applyLabel);\r\n        this.container.find('.cancelBtn').html(this.locale.cancelLabel);\r\n\r\n        //\r\n        // event listeners\r\n        //\r\n\r\n        this.container.find('.drp-calendar')\r\n            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))\r\n            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))\r\n            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))\r\n            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))\r\n            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))\r\n            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))\r\n            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this));\r\n\r\n        this.container.find('.ranges')\r\n            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this));\r\n\r\n        this.container.find('.drp-buttons')\r\n            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))\r\n            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this));\r\n\r\n        if (this.element.is('input') || this.element.is('button')) {\r\n            this.element.on({\r\n                'click.daterangepicker': $.proxy(this.show, this),\r\n                'focus.daterangepicker': $.proxy(this.show, this),\r\n                'keyup.daterangepicker': $.proxy(this.elementChanged, this),\r\n                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility\r\n            });\r\n        } else {\r\n            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));\r\n            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));\r\n        }\r\n\r\n        //\r\n        // if attached to a text input, set the initial value\r\n        //\r\n\r\n        this.updateElement();\r\n\r\n    };\r\n\r\n    DateRangePicker.prototype = {\r\n\r\n        constructor: DateRangePicker,\r\n\r\n        setStartDate: function(startDate) {\r\n            if (typeof startDate === 'string')\r\n                this.startDate = moment(startDate, this.locale.format);\r\n\r\n            if (typeof startDate === 'object')\r\n                this.startDate = moment(startDate);\r\n\r\n            if (!this.timePicker)\r\n                this.startDate = this.startDate.startOf('day');\r\n\r\n            if (this.timePicker && this.timePickerIncrement)\r\n                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);\r\n\r\n            if (this.minDate && this.startDate.isBefore(this.minDate)) {\r\n                this.startDate = this.minDate.clone();\r\n                if (this.timePicker && this.timePickerIncrement)\r\n                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);\r\n            }\r\n\r\n            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {\r\n                this.startDate = this.maxDate.clone();\r\n                if (this.timePicker && this.timePickerIncrement)\r\n                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);\r\n            }\r\n\r\n            if (!this.isShowing)\r\n                this.updateElement();\r\n\r\n            this.updateMonthsInView();\r\n        },\r\n\r\n        setEndDate: function(endDate) {\r\n            if (typeof endDate === 'string')\r\n                this.endDate = moment(endDate, this.locale.format);\r\n\r\n            if (typeof endDate === 'object')\r\n                this.endDate = moment(endDate);\r\n\r\n            if (!this.timePicker)\r\n                this.endDate = this.endDate.endOf('day');\r\n\r\n            if (this.timePicker && this.timePickerIncrement)\r\n                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);\r\n\r\n            if (this.endDate.isBefore(this.startDate))\r\n                this.endDate = this.startDate.clone();\r\n\r\n            if (this.maxDate && this.endDate.isAfter(this.maxDate))\r\n                this.endDate = this.maxDate.clone();\r\n\r\n            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))\r\n                this.endDate = this.startDate.clone().add(this.maxSpan);\r\n\r\n            this.previousRightTime = this.endDate.clone();\r\n\r\n            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));\r\n\r\n            if (!this.isShowing)\r\n                this.updateElement();\r\n\r\n            this.updateMonthsInView();\r\n        },\r\n\r\n        isInvalidDate: function() {\r\n            return false;\r\n        },\r\n\r\n        isCustomDate: function() {\r\n            return false;\r\n        },\r\n\r\n        updateView: function() {\r\n            if (this.timePicker) {\r\n                this.renderTimePicker('left');\r\n                this.renderTimePicker('right');\r\n                if (!this.endDate) {\r\n                    this.container.find('.right .calendar-time select').prop('disabled', true).addClass('disabled');\r\n                } else {\r\n                    this.container.find('.right .calendar-time select').prop('disabled', false).removeClass('disabled');\r\n                }\r\n            }\r\n            if (this.endDate)\r\n                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));\r\n            this.updateMonthsInView();\r\n            this.updateCalendars();\r\n            this.updateFormInputs();\r\n        },\r\n\r\n        updateMonthsInView: function() {\r\n            if (this.endDate) {\r\n\r\n                //if both dates are visible already, do nothing\r\n                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&\r\n                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))\r\n                    &&\r\n                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))\r\n                    ) {\r\n                    return;\r\n                }\r\n\r\n                this.leftCalendar.month = this.startDate.clone().date(2);\r\n                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {\r\n                    this.rightCalendar.month = this.endDate.clone().date(2);\r\n                } else {\r\n                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');\r\n                }\r\n\r\n            } else {\r\n                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {\r\n                    this.leftCalendar.month = this.startDate.clone().date(2);\r\n                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');\r\n                }\r\n            }\r\n            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {\r\n              this.rightCalendar.month = this.maxDate.clone().date(2);\r\n              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');\r\n            }\r\n        },\r\n\r\n        updateCalendars: function() {\r\n\r\n            if (this.timePicker) {\r\n                var hour, minute, second;\r\n                if (this.endDate) {\r\n                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);\r\n                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);\r\n                    if (isNaN(minute)) {\r\n                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);\r\n                    }\r\n                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;\r\n                    if (!this.timePicker24Hour) {\r\n                        var ampm = this.container.find('.left .ampmselect').val();\r\n                        if (ampm === 'PM' && hour < 12)\r\n                            hour += 12;\r\n                        if (ampm === 'AM' && hour === 12)\r\n                            hour = 0;\r\n                    }\r\n                } else {\r\n                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);\r\n                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);\r\n                    if (isNaN(minute)) {\r\n                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);\r\n                    }\r\n                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;\r\n                    if (!this.timePicker24Hour) {\r\n                        var ampm = this.container.find('.right .ampmselect').val();\r\n                        if (ampm === 'PM' && hour < 12)\r\n                            hour += 12;\r\n                        if (ampm === 'AM' && hour === 12)\r\n                            hour = 0;\r\n                    }\r\n                }\r\n                this.leftCalendar.month.hour(hour).minute(minute).second(second);\r\n                this.rightCalendar.month.hour(hour).minute(minute).second(second);\r\n            }\r\n\r\n            this.renderCalendar('left');\r\n            this.renderCalendar('right');\r\n\r\n            //highlight any predefined range matching the current start and end dates\r\n            this.container.find('.ranges li').removeClass('active');\r\n            if (this.endDate == null) return;\r\n\r\n            this.calculateChosenLabel();\r\n        },\r\n\r\n        renderCalendar: function(side) {\r\n\r\n            //\r\n            // Build the matrix of dates that will populate the calendar\r\n            //\r\n\r\n            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;\r\n            var month = calendar.month.month();\r\n            var year = calendar.month.year();\r\n            var hour = calendar.month.hour();\r\n            var minute = calendar.month.minute();\r\n            var second = calendar.month.second();\r\n            var daysInMonth = moment([year, month]).daysInMonth();\r\n            var firstDay = moment([year, month, 1]);\r\n            var lastDay = moment([year, month, daysInMonth]);\r\n            var lastMonth = moment(firstDay).subtract(1, 'month').month();\r\n            var lastYear = moment(firstDay).subtract(1, 'month').year();\r\n            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();\r\n            var dayOfWeek = firstDay.day();\r\n\r\n            //initialize a 6 rows x 7 columns array for the calendar\r\n            var calendar = [];\r\n            calendar.firstDay = firstDay;\r\n            calendar.lastDay = lastDay;\r\n\r\n            for (var i = 0; i < 6; i++) {\r\n                calendar[i] = [];\r\n            }\r\n\r\n            //populate the calendar with date objects\r\n            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;\r\n            if (startDay > daysInLastMonth)\r\n                startDay -= 7;\r\n\r\n            if (dayOfWeek == this.locale.firstDay)\r\n                startDay = daysInLastMonth - 6;\r\n\r\n            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);\r\n\r\n            var col, row;\r\n            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {\r\n                if (i > 0 && col % 7 === 0) {\r\n                    col = 0;\r\n                    row++;\r\n                }\r\n                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);\r\n                curDate.hour(12);\r\n\r\n                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {\r\n                    calendar[row][col] = this.minDate.clone();\r\n                }\r\n\r\n                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {\r\n                    calendar[row][col] = this.maxDate.clone();\r\n                }\r\n\r\n            }\r\n\r\n            //make the calendar object available to hoverDate/clickDate\r\n            if (side == 'left') {\r\n                this.leftCalendar.calendar = calendar;\r\n            } else {\r\n                this.rightCalendar.calendar = calendar;\r\n            }\r\n\r\n            //\r\n            // Display the calendar\r\n            //\r\n\r\n            var minDate = side == 'left' ? this.minDate : this.startDate;\r\n            var maxDate = this.maxDate;\r\n            var selected = side == 'left' ? this.startDate : this.endDate;\r\n            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};\r\n\r\n            var html = '<table class=\"table-condensed\">';\r\n            html += '<thead>';\r\n            html += '<tr>';\r\n\r\n            // add empty cell for week number\r\n            if (this.showWeekNumbers || this.showISOWeekNumbers)\r\n                html += '<th></th>';\r\n\r\n            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {\r\n                html += '<th class=\"prev available\"><span></span></th>';\r\n            } else {\r\n                html += '<th></th>';\r\n            }\r\n\r\n            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(\" YYYY\");\r\n\r\n            if (this.showDropdowns) {\r\n                var currentMonth = calendar[1][1].month();\r\n                var currentYear = calendar[1][1].year();\r\n                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);\r\n                var minYear = (minDate && minDate.year()) || (this.minYear);\r\n                var inMinYear = currentYear == minYear;\r\n                var inMaxYear = currentYear == maxYear;\r\n\r\n                var monthHtml = '<select class=\"monthselect\">';\r\n                for (var m = 0; m < 12; m++) {\r\n                    if ((!inMinYear || (minDate && m >= minDate.month())) && (!inMaxYear || (maxDate && m <= maxDate.month()))) {\r\n                        monthHtml += \"<option value='\" + m + \"'\" +\r\n                            (m === currentMonth ? \" selected='selected'\" : \"\") +\r\n                            \">\" + this.locale.monthNames[m] + \"</option>\";\r\n                    } else {\r\n                        monthHtml += \"<option value='\" + m + \"'\" +\r\n                            (m === currentMonth ? \" selected='selected'\" : \"\") +\r\n                            \" disabled='disabled'>\" + this.locale.monthNames[m] + \"</option>\";\r\n                    }\r\n                }\r\n                monthHtml += \"</select>\";\r\n\r\n                var yearHtml = '<select class=\"yearselect\">';\r\n                for (var y = minYear; y <= maxYear; y++) {\r\n                    yearHtml += '<option value=\"' + y + '\"' +\r\n                        (y === currentYear ? ' selected=\"selected\"' : '') +\r\n                        '>' + y + '</option>';\r\n                }\r\n                yearHtml += '</select>';\r\n\r\n                dateHtml = monthHtml + yearHtml;\r\n            }\r\n\r\n            html += '<th colspan=\"5\" class=\"month\">' + dateHtml + '</th>';\r\n            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {\r\n                html += '<th class=\"next available\"><span></span></th>';\r\n            } else {\r\n                html += '<th></th>';\r\n            }\r\n\r\n            html += '</tr>';\r\n            html += '<tr>';\r\n\r\n            // add week number label\r\n            if (this.showWeekNumbers || this.showISOWeekNumbers)\r\n                html += '<th class=\"week\">' + this.locale.weekLabel + '</th>';\r\n\r\n            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {\r\n                html += '<th>' + dayOfWeek + '</th>';\r\n            });\r\n\r\n            html += '</tr>';\r\n            html += '</thead>';\r\n            html += '<tbody>';\r\n\r\n            //adjust maxDate to reflect the maxSpan setting in order to\r\n            //grey out end dates beyond the maxSpan\r\n            if (this.endDate == null && this.maxSpan) {\r\n                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');\r\n                if (!maxDate || maxLimit.isBefore(maxDate)) {\r\n                    maxDate = maxLimit;\r\n                }\r\n            }\r\n\r\n            for (var row = 0; row < 6; row++) {\r\n                html += '<tr>';\r\n\r\n                // add week number\r\n                if (this.showWeekNumbers)\r\n                    html += '<td class=\"week\">' + calendar[row][0].week() + '</td>';\r\n                else if (this.showISOWeekNumbers)\r\n                    html += '<td class=\"week\">' + calendar[row][0].isoWeek() + '</td>';\r\n\r\n                for (var col = 0; col < 7; col++) {\r\n\r\n                    var classes = [];\r\n\r\n                    //highlight today's date\r\n                    if (calendar[row][col].isSame(new Date(), \"day\"))\r\n                        classes.push('today');\r\n\r\n                    //highlight weekends\r\n                    if (calendar[row][col].isoWeekday() > 5)\r\n                        classes.push('weekend');\r\n\r\n                    //grey out the dates in other months displayed at beginning and end of this calendar\r\n                    if (calendar[row][col].month() != calendar[1][1].month())\r\n                        classes.push('off', 'ends');\r\n\r\n                    //don't allow selection of dates before the minimum date\r\n                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))\r\n                        classes.push('off', 'disabled');\r\n\r\n                    //don't allow selection of dates after the maximum date\r\n                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))\r\n                        classes.push('off', 'disabled');\r\n\r\n                    //don't allow selection of date if a custom function decides it's invalid\r\n                    if (this.isInvalidDate(calendar[row][col]))\r\n                        classes.push('off', 'disabled');\r\n\r\n                    //highlight the currently selected start date\r\n                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))\r\n                        classes.push('active', 'start-date');\r\n\r\n                    //highlight the currently selected end date\r\n                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))\r\n                        classes.push('active', 'end-date');\r\n\r\n                    //highlight dates in-between the selected dates\r\n                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)\r\n                        classes.push('in-range');\r\n\r\n                    //apply custom classes for this date\r\n                    var isCustom = this.isCustomDate(calendar[row][col]);\r\n                    if (isCustom !== false) {\r\n                        if (typeof isCustom === 'string')\r\n                            classes.push(isCustom);\r\n                        else\r\n                            Array.prototype.push.apply(classes, isCustom);\r\n                    }\r\n\r\n                    var cname = '', disabled = false;\r\n                    for (var i = 0; i < classes.length; i++) {\r\n                        cname += classes[i] + ' ';\r\n                        if (classes[i] == 'disabled')\r\n                            disabled = true;\r\n                    }\r\n                    if (!disabled)\r\n                        cname += 'available';\r\n\r\n                    html += '<td class=\"' + cname.replace(/^\\s+|\\s+$/g, '') + '\" data-title=\"' + 'r' + row + 'c' + col + '\">' + calendar[row][col].date() + '</td>';\r\n\r\n                }\r\n                html += '</tr>';\r\n            }\r\n\r\n            html += '</tbody>';\r\n            html += '</table>';\r\n\r\n            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);\r\n\r\n        },\r\n\r\n        renderTimePicker: function(side) {\r\n\r\n            // Don't bother updating the time picker if it's currently disabled\r\n            // because an end date hasn't been clicked yet\r\n            if (side == 'right' && !this.endDate) return;\r\n\r\n            var html, selected, minDate, maxDate = this.maxDate;\r\n\r\n            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)))\r\n                maxDate = this.startDate.clone().add(this.maxSpan);\r\n\r\n            if (side == 'left') {\r\n                selected = this.startDate.clone();\r\n                minDate = this.minDate;\r\n            } else if (side == 'right') {\r\n                selected = this.endDate.clone();\r\n                minDate = this.startDate;\r\n\r\n                //Preserve the time already selected\r\n                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');\r\n                if (timeSelector.html() != '') {\r\n\r\n                    selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());\r\n                    selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());\r\n                    selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());\r\n\r\n                    if (!this.timePicker24Hour) {\r\n                        var ampm = timeSelector.find('.ampmselect option:selected').val();\r\n                        if (ampm === 'PM' && selected.hour() < 12)\r\n                            selected.hour(selected.hour() + 12);\r\n                        if (ampm === 'AM' && selected.hour() === 12)\r\n                            selected.hour(0);\r\n                    }\r\n\r\n                }\r\n\r\n                if (selected.isBefore(this.startDate))\r\n                    selected = this.startDate.clone();\r\n\r\n                if (maxDate && selected.isAfter(maxDate))\r\n                    selected = maxDate.clone();\r\n\r\n            }\r\n\r\n            //\r\n            // hours\r\n            //\r\n\r\n            html = '<select class=\"hourselect\">';\r\n\r\n            var start = this.timePicker24Hour ? 0 : 1;\r\n            var end = this.timePicker24Hour ? 23 : 12;\r\n\r\n            for (var i = start; i <= end; i++) {\r\n                var i_in_24 = i;\r\n                if (!this.timePicker24Hour)\r\n                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);\r\n\r\n                var time = selected.clone().hour(i_in_24);\r\n                var disabled = false;\r\n                if (minDate && time.minute(59).isBefore(minDate))\r\n                    disabled = true;\r\n                if (maxDate && time.minute(0).isAfter(maxDate))\r\n                    disabled = true;\r\n\r\n                if (i_in_24 == selected.hour() && !disabled) {\r\n                    html += '<option value=\"' + i + '\" selected=\"selected\">' + i + '</option>';\r\n                } else if (disabled) {\r\n                    html += '<option value=\"' + i + '\" disabled=\"disabled\" class=\"disabled\">' + i + '</option>';\r\n                } else {\r\n                    html += '<option value=\"' + i + '\">' + i + '</option>';\r\n                }\r\n            }\r\n\r\n            html += '</select> ';\r\n\r\n            //\r\n            // minutes\r\n            //\r\n\r\n            html += ': <select class=\"minuteselect\">';\r\n\r\n            for (var i = 0; i < 60; i += this.timePickerIncrement) {\r\n                var padded = i < 10 ? '0' + i : i;\r\n                var time = selected.clone().minute(i);\r\n\r\n                var disabled = false;\r\n                if (minDate && time.second(59).isBefore(minDate))\r\n                    disabled = true;\r\n                if (maxDate && time.second(0).isAfter(maxDate))\r\n                    disabled = true;\r\n\r\n                if (selected.minute() == i && !disabled) {\r\n                    html += '<option value=\"' + i + '\" selected=\"selected\">' + padded + '</option>';\r\n                } else if (disabled) {\r\n                    html += '<option value=\"' + i + '\" disabled=\"disabled\" class=\"disabled\">' + padded + '</option>';\r\n                } else {\r\n                    html += '<option value=\"' + i + '\">' + padded + '</option>';\r\n                }\r\n            }\r\n\r\n            html += '</select> ';\r\n\r\n            //\r\n            // seconds\r\n            //\r\n\r\n            if (this.timePickerSeconds) {\r\n                html += ': <select class=\"secondselect\">';\r\n\r\n                for (var i = 0; i < 60; i++) {\r\n                    var padded = i < 10 ? '0' + i : i;\r\n                    var time = selected.clone().second(i);\r\n\r\n                    var disabled = false;\r\n                    if (minDate && time.isBefore(minDate))\r\n                        disabled = true;\r\n                    if (maxDate && time.isAfter(maxDate))\r\n                        disabled = true;\r\n\r\n                    if (selected.second() == i && !disabled) {\r\n                        html += '<option value=\"' + i + '\" selected=\"selected\">' + padded + '</option>';\r\n                    } else if (disabled) {\r\n                        html += '<option value=\"' + i + '\" disabled=\"disabled\" class=\"disabled\">' + padded + '</option>';\r\n                    } else {\r\n                        html += '<option value=\"' + i + '\">' + padded + '</option>';\r\n                    }\r\n                }\r\n\r\n                html += '</select> ';\r\n            }\r\n\r\n            //\r\n            // AM/PM\r\n            //\r\n\r\n            if (!this.timePicker24Hour) {\r\n                html += '<select class=\"ampmselect\">';\r\n\r\n                var am_html = '';\r\n                var pm_html = '';\r\n\r\n                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))\r\n                    am_html = ' disabled=\"disabled\" class=\"disabled\"';\r\n\r\n                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))\r\n                    pm_html = ' disabled=\"disabled\" class=\"disabled\"';\r\n\r\n                if (selected.hour() >= 12) {\r\n                    html += '<option value=\"AM\"' + am_html + '>AM</option><option value=\"PM\" selected=\"selected\"' + pm_html + '>PM</option>';\r\n                } else {\r\n                    html += '<option value=\"AM\" selected=\"selected\"' + am_html + '>AM</option><option value=\"PM\"' + pm_html + '>PM</option>';\r\n                }\r\n\r\n                html += '</select>';\r\n            }\r\n\r\n            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);\r\n\r\n        },\r\n\r\n        updateFormInputs: function() {\r\n\r\n            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {\r\n                this.container.find('button.applyBtn').prop('disabled', false);\r\n            } else {\r\n                this.container.find('button.applyBtn').prop('disabled', true);\r\n            }\r\n\r\n        },\r\n\r\n        move: function() {\r\n            var parentOffset = { top: 0, left: 0 },\r\n                containerTop,\r\n                drops = this.drops;\r\n\r\n            var parentRightEdge = $(window).width();\r\n            if (!this.parentEl.is('body')) {\r\n                parentOffset = {\r\n                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),\r\n                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()\r\n                };\r\n                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;\r\n            }\r\n\r\n            switch (drops) {\r\n            case 'auto':\r\n                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;\r\n                if (containerTop + this.container.outerHeight() >= this.parentEl[0].scrollHeight) {\r\n                    containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;\r\n                    drops = 'up';\r\n                }\r\n                break;\r\n            case 'up':\r\n                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;\r\n                break;\r\n            default:\r\n                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;\r\n                break;\r\n            }\r\n\r\n            // Force the container to it's actual width\r\n            this.container.css({\r\n              top: 0,\r\n              left: 0,\r\n              right: 'auto'\r\n            });\r\n            var containerWidth = this.container.outerWidth();\r\n\r\n            this.container.toggleClass('drop-up', drops == 'up');\r\n\r\n            if (this.opens == 'left') {\r\n                var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth();\r\n                if (containerWidth + containerRight > $(window).width()) {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        right: 'auto',\r\n                        left: 9\r\n                    });\r\n                } else {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        right: containerRight,\r\n                        left: 'auto'\r\n                    });\r\n                }\r\n            } else if (this.opens == 'center') {\r\n                var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2\r\n                                        - containerWidth / 2;\r\n                if (containerLeft < 0) {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        right: 'auto',\r\n                        left: 9\r\n                    });\r\n                } else if (containerLeft + containerWidth > $(window).width()) {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        left: 'auto',\r\n                        right: 0\r\n                    });\r\n                } else {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        left: containerLeft,\r\n                        right: 'auto'\r\n                    });\r\n                }\r\n            } else {\r\n                var containerLeft = this.element.offset().left - parentOffset.left;\r\n                if (containerLeft + containerWidth > $(window).width()) {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        left: 'auto',\r\n                        right: 0\r\n                    });\r\n                } else {\r\n                    this.container.css({\r\n                        top: containerTop,\r\n                        left: containerLeft,\r\n                        right: 'auto'\r\n                    });\r\n                }\r\n            }\r\n        },\r\n\r\n        show: function(e) {\r\n            if (this.isShowing) return;\r\n\r\n            // Create a click proxy that is private to this instance of datepicker, for unbinding\r\n            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);\r\n\r\n            // Bind global datepicker mousedown for hiding and\r\n            $(document)\r\n              .on('mousedown.daterangepicker', this._outsideClickProxy)\r\n              // also support mobile devices\r\n              .on('touchend.daterangepicker', this._outsideClickProxy)\r\n              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them\r\n              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)\r\n              // and also close when focus changes to outside the picker (eg. tabbing between controls)\r\n              .on('focusin.daterangepicker', this._outsideClickProxy);\r\n\r\n            // Reposition the picker if the window is resized while it's open\r\n            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));\r\n\r\n            this.oldStartDate = this.startDate.clone();\r\n            this.oldEndDate = this.endDate.clone();\r\n            this.previousRightTime = this.endDate.clone();\r\n\r\n            this.updateView();\r\n            this.container.show();\r\n            this.move();\r\n            this.element.trigger('show.daterangepicker', this);\r\n            this.isShowing = true;\r\n        },\r\n\r\n        hide: function(e) {\r\n            if (!this.isShowing) return;\r\n\r\n            //incomplete date selection, revert to last values\r\n            if (!this.endDate) {\r\n                this.startDate = this.oldStartDate.clone();\r\n                this.endDate = this.oldEndDate.clone();\r\n            }\r\n\r\n            //if a new date range was selected, invoke the user callback function\r\n            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))\r\n                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);\r\n\r\n            //if picker is attached to a text input, update it\r\n            this.updateElement();\r\n\r\n            $(document).off('.daterangepicker');\r\n            $(window).off('.daterangepicker');\r\n            this.container.hide();\r\n            this.element.trigger('hide.daterangepicker', this);\r\n            this.isShowing = false;\r\n        },\r\n\r\n        toggle: function(e) {\r\n            if (this.isShowing) {\r\n                this.hide();\r\n            } else {\r\n                this.show();\r\n            }\r\n        },\r\n\r\n        outsideClick: function(e) {\r\n            var target = $(e.target);\r\n            // if the page is clicked anywhere except within the daterangerpicker/button\r\n            // itself then call this.hide()\r\n            if (\r\n                // ie modal dialog fix\r\n                e.type == \"focusin\" ||\r\n                target.closest(this.element).length ||\r\n                target.closest(this.container).length ||\r\n                target.closest('.calendar-table').length\r\n                ) return;\r\n            this.hide();\r\n            this.element.trigger('outsideClick.daterangepicker', this);\r\n        },\r\n\r\n        showCalendars: function() {\r\n            this.container.addClass('show-calendar');\r\n            this.move();\r\n            this.element.trigger('showCalendar.daterangepicker', this);\r\n        },\r\n\r\n        hideCalendars: function() {\r\n            this.container.removeClass('show-calendar');\r\n            this.element.trigger('hideCalendar.daterangepicker', this);\r\n        },\r\n\r\n        clickRange: function(e) {\r\n            var label = e.target.getAttribute('data-range-key');\r\n            this.chosenLabel = label;\r\n            if (label == this.locale.customRangeLabel) {\r\n                this.showCalendars();\r\n            } else {\r\n                var dates = this.ranges[label];\r\n                this.startDate = dates[0];\r\n                this.endDate = dates[1];\r\n\r\n                if (!this.timePicker) {\r\n                    this.startDate.startOf('day');\r\n                    this.endDate.endOf('day');\r\n                }\r\n\r\n                if (!this.alwaysShowCalendars)\r\n                    this.hideCalendars();\r\n                this.clickApply();\r\n            }\r\n        },\r\n\r\n        clickPrev: function(e) {\r\n            var cal = $(e.target).parents('.drp-calendar');\r\n            if (cal.hasClass('left')) {\r\n                this.leftCalendar.month.subtract(1, 'month');\r\n                if (this.linkedCalendars)\r\n                    this.rightCalendar.month.subtract(1, 'month');\r\n            } else {\r\n                this.rightCalendar.month.subtract(1, 'month');\r\n            }\r\n            this.updateCalendars();\r\n        },\r\n\r\n        clickNext: function(e) {\r\n            var cal = $(e.target).parents('.drp-calendar');\r\n            if (cal.hasClass('left')) {\r\n                this.leftCalendar.month.add(1, 'month');\r\n            } else {\r\n                this.rightCalendar.month.add(1, 'month');\r\n                if (this.linkedCalendars)\r\n                    this.leftCalendar.month.add(1, 'month');\r\n            }\r\n            this.updateCalendars();\r\n        },\r\n\r\n        hoverDate: function(e) {\r\n\r\n            //ignore dates that can't be selected\r\n            if (!$(e.target).hasClass('available')) return;\r\n\r\n            var title = $(e.target).attr('data-title');\r\n            var row = title.substr(1, 1);\r\n            var col = title.substr(3, 1);\r\n            var cal = $(e.target).parents('.drp-calendar');\r\n            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];\r\n\r\n            //highlight the dates between the start date and the date being hovered as a potential end date\r\n            var leftCalendar = this.leftCalendar;\r\n            var rightCalendar = this.rightCalendar;\r\n            var startDate = this.startDate;\r\n            if (!this.endDate) {\r\n                this.container.find('.drp-calendar tbody td').each(function(index, el) {\r\n\r\n                    //skip week numbers, only look at dates\r\n                    if ($(el).hasClass('week')) return;\r\n\r\n                    var title = $(el).attr('data-title');\r\n                    var row = title.substr(1, 1);\r\n                    var col = title.substr(3, 1);\r\n                    var cal = $(el).parents('.drp-calendar');\r\n                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];\r\n\r\n                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {\r\n                        $(el).addClass('in-range');\r\n                    } else {\r\n                        $(el).removeClass('in-range');\r\n                    }\r\n\r\n                });\r\n            }\r\n\r\n        },\r\n\r\n        clickDate: function(e) {\r\n\r\n            if (!$(e.target).hasClass('available')) return;\r\n\r\n            var title = $(e.target).attr('data-title');\r\n            var row = title.substr(1, 1);\r\n            var col = title.substr(3, 1);\r\n            var cal = $(e.target).parents('.drp-calendar');\r\n            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];\r\n\r\n            //\r\n            // this function needs to do a few things:\r\n            // * alternate between selecting a start and end date for the range,\r\n            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date\r\n            // * if autoapply is enabled, and an end date was chosen, apply the selection\r\n            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately\r\n            // * if one of the inputs above the calendars was focused, cancel that manual input\r\n            //\r\n\r\n            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start\r\n                if (this.timePicker) {\r\n                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);\r\n                    if (!this.timePicker24Hour) {\r\n                        var ampm = this.container.find('.left .ampmselect').val();\r\n                        if (ampm === 'PM' && hour < 12)\r\n                            hour += 12;\r\n                        if (ampm === 'AM' && hour === 12)\r\n                            hour = 0;\r\n                    }\r\n                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);\r\n                    if (isNaN(minute)) {\r\n                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);\r\n                    }\r\n                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;\r\n                    date = date.clone().hour(hour).minute(minute).second(second);\r\n                }\r\n                this.endDate = null;\r\n                this.setStartDate(date.clone());\r\n            } else if (!this.endDate && date.isBefore(this.startDate)) {\r\n                //special case: clicking the same date for start/end,\r\n                //but the time of the end date is before the start date\r\n                this.setEndDate(this.startDate.clone());\r\n            } else { // picking end\r\n                if (this.timePicker) {\r\n                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);\r\n                    if (!this.timePicker24Hour) {\r\n                        var ampm = this.container.find('.right .ampmselect').val();\r\n                        if (ampm === 'PM' && hour < 12)\r\n                            hour += 12;\r\n                        if (ampm === 'AM' && hour === 12)\r\n                            hour = 0;\r\n                    }\r\n                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);\r\n                    if (isNaN(minute)) {\r\n                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);\r\n                    }\r\n                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;\r\n                    date = date.clone().hour(hour).minute(minute).second(second);\r\n                }\r\n                this.setEndDate(date.clone());\r\n                if (this.autoApply) {\r\n                  this.calculateChosenLabel();\r\n                  this.clickApply();\r\n                }\r\n            }\r\n\r\n            if (this.singleDatePicker) {\r\n                this.setEndDate(this.startDate);\r\n                if (!this.timePicker && this.autoApply)\r\n                    this.clickApply();\r\n            }\r\n\r\n            this.updateView();\r\n\r\n            //This is to cancel the blur event handler if the mouse was in one of the inputs\r\n            e.stopPropagation();\r\n\r\n        },\r\n\r\n        calculateChosenLabel: function () {\r\n            var customRange = true;\r\n            var i = 0;\r\n            for (var range in this.ranges) {\r\n              if (this.timePicker) {\r\n                    var format = this.timePickerSeconds ? \"YYYY-MM-DD HH:mm:ss\" : \"YYYY-MM-DD HH:mm\";\r\n                    //ignore times when comparing dates if time picker seconds is not enabled\r\n                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {\r\n                        customRange = false;\r\n                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');\r\n                        break;\r\n                    }\r\n                } else {\r\n                    //ignore times when comparing dates if time picker is not enabled\r\n                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {\r\n                        customRange = false;\r\n                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');\r\n                        break;\r\n                    }\r\n                }\r\n                i++;\r\n            }\r\n            if (customRange) {\r\n                if (this.showCustomRangeLabel) {\r\n                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');\r\n                } else {\r\n                    this.chosenLabel = null;\r\n                }\r\n                this.showCalendars();\r\n            }\r\n        },\r\n\r\n        clickApply: function(e) {\r\n            this.hide();\r\n            this.element.trigger('apply.daterangepicker', this);\r\n        },\r\n\r\n        clickCancel: function(e) {\r\n            this.startDate = this.oldStartDate;\r\n            this.endDate = this.oldEndDate;\r\n            this.hide();\r\n            this.element.trigger('cancel.daterangepicker', this);\r\n        },\r\n\r\n        monthOrYearChanged: function(e) {\r\n            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),\r\n                leftOrRight = isLeft ? 'left' : 'right',\r\n                cal = this.container.find('.drp-calendar.'+leftOrRight);\r\n\r\n            // Month must be Number for new moment versions\r\n            var month = parseInt(cal.find('.monthselect').val(), 10);\r\n            var year = cal.find('.yearselect').val();\r\n\r\n            if (!isLeft) {\r\n                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {\r\n                    month = this.startDate.month();\r\n                    year = this.startDate.year();\r\n                }\r\n            }\r\n\r\n            if (this.minDate) {\r\n                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {\r\n                    month = this.minDate.month();\r\n                    year = this.minDate.year();\r\n                }\r\n            }\r\n\r\n            if (this.maxDate) {\r\n                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {\r\n                    month = this.maxDate.month();\r\n                    year = this.maxDate.year();\r\n                }\r\n            }\r\n\r\n            if (isLeft) {\r\n                this.leftCalendar.month.month(month).year(year);\r\n                if (this.linkedCalendars)\r\n                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');\r\n            } else {\r\n                this.rightCalendar.month.month(month).year(year);\r\n                if (this.linkedCalendars)\r\n                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');\r\n            }\r\n            this.updateCalendars();\r\n        },\r\n\r\n        timeChanged: function(e) {\r\n\r\n            var cal = $(e.target).closest('.drp-calendar'),\r\n                isLeft = cal.hasClass('left');\r\n\r\n            var hour = parseInt(cal.find('.hourselect').val(), 10);\r\n            var minute = parseInt(cal.find('.minuteselect').val(), 10);\r\n            if (isNaN(minute)) {\r\n                minute = parseInt(cal.find('.minuteselect option:last').val(), 10);\r\n            }\r\n            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;\r\n\r\n            if (!this.timePicker24Hour) {\r\n                var ampm = cal.find('.ampmselect').val();\r\n                if (ampm === 'PM' && hour < 12)\r\n                    hour += 12;\r\n                if (ampm === 'AM' && hour === 12)\r\n                    hour = 0;\r\n            }\r\n\r\n            if (isLeft) {\r\n                var start = this.startDate.clone();\r\n                start.hour(hour);\r\n                start.minute(minute);\r\n                start.second(second);\r\n                this.setStartDate(start);\r\n                if (this.singleDatePicker) {\r\n                    this.endDate = this.startDate.clone();\r\n                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {\r\n                    this.setEndDate(start.clone());\r\n                }\r\n            } else if (this.endDate) {\r\n                var end = this.endDate.clone();\r\n                end.hour(hour);\r\n                end.minute(minute);\r\n                end.second(second);\r\n                this.setEndDate(end);\r\n            }\r\n\r\n            //update the calendars so all clickable dates reflect the new time component\r\n            this.updateCalendars();\r\n\r\n            //update the form inputs above the calendars with the new time\r\n            this.updateFormInputs();\r\n\r\n            //re-render the time pickers because changing one selection can affect what's enabled in another\r\n            this.renderTimePicker('left');\r\n            this.renderTimePicker('right');\r\n\r\n        },\r\n\r\n        elementChanged: function() {\r\n            if (!this.element.is('input')) return;\r\n            if (!this.element.val().length) return;\r\n\r\n            var dateString = this.element.val().split(this.locale.separator),\r\n                start = null,\r\n                end = null;\r\n\r\n            if (dateString.length === 2) {\r\n                start = moment(dateString[0], this.locale.format);\r\n                end = moment(dateString[1], this.locale.format);\r\n            }\r\n\r\n            if (this.singleDatePicker || start === null || end === null) {\r\n                start = moment(this.element.val(), this.locale.format);\r\n                end = start;\r\n            }\r\n\r\n            if (!start.isValid() || !end.isValid()) return;\r\n\r\n            this.setStartDate(start);\r\n            this.setEndDate(end);\r\n            this.updateView();\r\n        },\r\n\r\n        keydown: function(e) {\r\n            //hide on tab or enter\r\n            if ((e.keyCode === 9) || (e.keyCode === 13)) {\r\n                this.hide();\r\n            }\r\n\r\n            //hide on esc and prevent propagation\r\n            if (e.keyCode === 27) {\r\n                e.preventDefault();\r\n                e.stopPropagation();\r\n\r\n                this.hide();\r\n            }\r\n        },\r\n\r\n        updateElement: function() {\r\n            if (this.element.is('input') && this.autoUpdateInput) {\r\n                var newValue = this.startDate.format(this.locale.format);\r\n                if (!this.singleDatePicker) {\r\n                    newValue += this.locale.separator + this.endDate.format(this.locale.format);\r\n                }\r\n                if (newValue !== this.element.val()) {\r\n                    this.element.val(newValue).trigger('change');\r\n                }\r\n            }\r\n        },\r\n\r\n        remove: function() {\r\n            this.container.remove();\r\n            this.element.off('.daterangepicker');\r\n            this.element.removeData();\r\n        }\r\n\r\n    };\r\n\r\n    $.fn.daterangepicker = function(options, callback) {\r\n        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);\r\n        this.each(function() {\r\n            var el = $(this);\r\n            if (el.data('daterangepicker'))\r\n                el.data('daterangepicker').remove();\r\n            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));\r\n        });\r\n        return this;\r\n    };\r\n\r\n    return DateRangePicker;\r\n\r\n}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWRhdGVyYW5nZXBpY2tlci9kYXRlcmFuZ2VwaWNrZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsaUNBQU8sQ0FBQywyQ0FBUSxFQUFFLDJDQUFRLENBQUMsbUNBQUU7QUFDckMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxTQUFTO0FBQUEsa0dBQUM7QUFDVixNQUFNLEtBQUssdUJBYU47QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDhDQUE4QyxHQUFHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsdUJBQXVCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxlQUFlO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU25lYXQvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWRhdGVyYW5nZXBpY2tlci9kYXRlcmFuZ2VwaWNrZXIuanM/ZWY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBAdmVyc2lvbjogMy4xXHJcbiogQGF1dGhvcjogRGFuIEdyb3NzbWFuIGh0dHA6Ly93d3cuZGFuZ3Jvc3NtYW4uaW5mby9cclxuKiBAY29weXJpZ2h0OiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxOSBEYW4gR3Jvc3NtYW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogQGxpY2Vuc2U6IExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiogQHdlYnNpdGU6IGh0dHA6Ly93d3cuZGF0ZXJhbmdlcGlja2VyLmNvbS9cclxuKi9cclxuLy8gRm9sbG93aW5nIHRoZSBVTUQgdGVtcGxhdGUgaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci90ZW1wbGF0ZXMvcmV0dXJuRXhwb3J0c0dsb2JhbC5qc1xyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICAvLyBBTUQuIE1ha2UgZ2xvYmFseSBhdmFpbGFibGUgYXMgd2VsbFxyXG4gICAgICAgIGRlZmluZShbJ21vbWVudCcsICdqcXVlcnknXSwgZnVuY3Rpb24gKG1vbWVudCwganF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIGlmICghanF1ZXJ5LmZuKSBqcXVlcnkuZm4gPSB7fTsgLy8gd2VicGFjayBzZXJ2ZXIgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9tZW50ICE9PSAnZnVuY3Rpb24nICYmIG1vbWVudC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpKSBtb21lbnQgPSBtb21lbnRbJ2RlZmF1bHQnXVxyXG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShtb21lbnQsIGpxdWVyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAgICAgLy8gTm9kZSAvIEJyb3dzZXJpZnlcclxuICAgICAgICAvL2lzb21vcnBoaWMgaXNzdWVcclxuICAgICAgICB2YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmpRdWVyeSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoIWpRdWVyeSkge1xyXG4gICAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkuZm4pIGpRdWVyeS5mbiA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbW9tZW50ID0gKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tb21lbnQgIT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm1vbWVudCA6IHJlcXVpcmUoJ21vbWVudCcpO1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShtb21lbnQsIGpRdWVyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG4gICAgICAgIHJvb3QuZGF0ZXJhbmdlcGlja2VyID0gZmFjdG9yeShyb290Lm1vbWVudCwgcm9vdC5qUXVlcnkpO1xyXG4gICAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uKG1vbWVudCwgJCkge1xyXG4gICAgdmFyIERhdGVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMsIGNiKSB7XHJcblxyXG4gICAgICAgIC8vZGVmYXVsdCBzZXR0aW5ncyBmb3Igb3B0aW9uc1xyXG4gICAgICAgIHRoaXMucGFyZW50RWwgPSAnYm9keSc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdkYXknKTtcclxuICAgICAgICB0aGlzLm1pbkRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heERhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heFNwYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF1dG9BcHBseSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2luZ2xlRGF0ZVBpY2tlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3ducyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluWWVhciA9IG1vbWVudCgpLnN1YnRyYWN0KDEwMCwgJ3llYXInKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgICAgICB0aGlzLm1heFllYXIgPSBtb21lbnQoKS5hZGQoMTAwLCAneWVhcicpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgICAgIHRoaXMuc2hvd1dlZWtOdW1iZXJzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93SVNPV2Vla051bWJlcnMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dDdXN0b21SYW5nZUxhYmVsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpbWVQaWNrZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVQaWNrZXIyNEhvdXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQgPSAxO1xyXG4gICAgICAgIHRoaXMudGltZVBpY2tlclNlY29uZHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpbmtlZENhbGVuZGFycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWx3YXlzU2hvd0NhbGVuZGFycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMub3BlbnMgPSAncmlnaHQnO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ3B1bGwtcmlnaHQnKSlcclxuICAgICAgICAgICAgdGhpcy5vcGVucyA9ICdsZWZ0JztcclxuXHJcbiAgICAgICAgdGhpcy5kcm9wcyA9ICdkb3duJztcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdkcm9wdXAnKSlcclxuICAgICAgICAgICAgdGhpcy5kcm9wcyA9ICd1cCc7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyA9ICdidG4gYnRuLXNtJztcclxuICAgICAgICB0aGlzLmFwcGx5QnV0dG9uQ2xhc3NlcyA9ICdidG4tcHJpbWFyeSc7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25DbGFzc2VzID0gJ2J0bi1kZWZhdWx0JztcclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2x0cicsXHJcbiAgICAgICAgICAgIGZvcm1hdDogbW9tZW50LmxvY2FsZURhdGEoKS5sb25nRGF0ZUZvcm1hdCgnTCcpLFxyXG4gICAgICAgICAgICBzZXBhcmF0b3I6ICcgLSAnLFxyXG4gICAgICAgICAgICBhcHBseUxhYmVsOiAnQXBwbHknLFxyXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIHdlZWtMYWJlbDogJ1cnLFxyXG4gICAgICAgICAgICBjdXN0b21SYW5nZUxhYmVsOiAnQ3VzdG9tIFJhbmdlJyxcclxuICAgICAgICAgICAgZGF5c09mV2VlazogbW9tZW50LndlZWtkYXlzTWluKCksXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IG1vbWVudC5tb250aHNTaG9ydCgpLFxyXG4gICAgICAgICAgICBmaXJzdERheTogbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGZ1bmN0aW9uKCkgeyB9O1xyXG5cclxuICAgICAgICAvL3NvbWUgc3RhdGUgaW5mb3JtYXRpb25cclxuICAgICAgICB0aGlzLmlzU2hvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdENhbGVuZGFyID0ge307XHJcbiAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyID0ge307XHJcblxyXG4gICAgICAgIC8vY3VzdG9tIG9wdGlvbnMgZnJvbSB1c2VyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCBvcHRpb25zID09PSBudWxsKVxyXG4gICAgICAgICAgICBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgIC8vYWxsb3cgc2V0dGluZyBvcHRpb25zIHdpdGggZGF0YSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgLy9kYXRhLWFwaSBvcHRpb25zIHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2l0aCBjdXN0b20gamF2YXNjcmlwdCBvcHRpb25zXHJcbiAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRoaXMuZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL2h0bWwgdGVtcGxhdGUgZm9yIHRoZSBwaWNrZXIgVUlcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGVtcGxhdGUgIT09ICdzdHJpbmcnICYmICEob3B0aW9ucy50ZW1wbGF0ZSBpbnN0YW5jZW9mICQpKVxyXG4gICAgICAgICAgICBvcHRpb25zLnRlbXBsYXRlID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkYXRlcmFuZ2VwaWNrZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmFuZ2VzXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRycC1jYWxlbmRhciBsZWZ0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYWxlbmRhci10YWJsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2FsZW5kYXItdGltZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcnAtY2FsZW5kYXIgcmlnaHRcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNhbGVuZGFyLXRhYmxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYWxlbmRhci10aW1lXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRycC1idXR0b25zXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJwLXNlbGVjdGVkXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiY2FuY2VsQnRuXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYXBwbHlCdG5cIiBkaXNhYmxlZD1cImRpc2FibGVkXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPiAnICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50RWwgPSAob3B0aW9ucy5wYXJlbnRFbCAmJiAkKG9wdGlvbnMucGFyZW50RWwpLmxlbmd0aCkgPyAkKG9wdGlvbnMucGFyZW50RWwpIDogJCh0aGlzLnBhcmVudEVsKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQob3B0aW9ucy50ZW1wbGF0ZSkuYXBwZW5kVG8odGhpcy5wYXJlbnRFbCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaGFuZGxlIGFsbCB0aGUgcG9zc2libGUgb3B0aW9ucyBvdmVycmlkaW5nIGRlZmF1bHRzXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ29iamVjdCcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuZGlyZWN0aW9uID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlLmRpcmVjdGlvbiA9IG9wdGlvbnMubG9jYWxlLmRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuZm9ybWF0ID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlLmZvcm1hdCA9IG9wdGlvbnMubG9jYWxlLmZvcm1hdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuc2VwYXJhdG9yID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlLnNlcGFyYXRvciA9IG9wdGlvbnMubG9jYWxlLnNlcGFyYXRvcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuZGF5c09mV2VlayA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5kYXlzT2ZXZWVrID0gb3B0aW9ucy5sb2NhbGUuZGF5c09mV2Vlay5zbGljZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZS5tb250aE5hbWVzID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5tb250aE5hbWVzID0gb3B0aW9ucy5sb2NhbGUubW9udGhOYW1lcy5zbGljZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZS5maXJzdERheSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuZmlyc3REYXkgPSBvcHRpb25zLmxvY2FsZS5maXJzdERheTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuYXBwbHlMYWJlbCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuYXBwbHlMYWJlbCA9IG9wdGlvbnMubG9jYWxlLmFwcGx5TGFiZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmNhbmNlbExhYmVsID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5jYW5jZWxMYWJlbCA9IG9wdGlvbnMubG9jYWxlLmNhbmNlbExhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZS53ZWVrTGFiZWwgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlLndlZWtMYWJlbCA9IG9wdGlvbnMubG9jYWxlLndlZWtMYWJlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuY3VzdG9tUmFuZ2VMYWJlbCA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgLy9TdXBwb3J0IHVuaWNvZGUgY2hhcnMgaW4gdGhlIGN1c3RvbSByYW5nZSBuYW1lLlxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBvcHRpb25zLmxvY2FsZS5jdXN0b21SYW5nZUxhYmVsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlSHRtbCA9IGVsZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5jdXN0b21SYW5nZUxhYmVsID0gcmFuZ2VIdG1sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMubG9jYWxlLmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdGFydERhdGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG1vbWVudChvcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZERhdGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQob3B0aW9ucy5lbmREYXRlLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubWluRGF0ZSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHRoaXMubWluRGF0ZSA9IG1vbWVudChvcHRpb25zLm1pbkRhdGUsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhEYXRlID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5tYXhEYXRlID0gbW9tZW50KG9wdGlvbnMubWF4RGF0ZSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnN0YXJ0RGF0ZSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KG9wdGlvbnMuc3RhcnREYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmVuZERhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQob3B0aW9ucy5lbmREYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1pbkRhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLm1pbkRhdGUgPSBtb21lbnQob3B0aW9ucy5taW5EYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1heERhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLm1heERhdGUgPSBtb21lbnQob3B0aW9ucy5tYXhEYXRlKTtcclxuXHJcbiAgICAgICAgLy8gc2FuaXR5IGNoZWNrIGZvciBiYWQgb3B0aW9uc1xyXG4gICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgdGhpcy5zdGFydERhdGUuaXNCZWZvcmUodGhpcy5taW5EYXRlKSlcclxuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLm1pbkRhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgLy8gc2FuaXR5IGNoZWNrIGZvciBiYWQgb3B0aW9uc1xyXG4gICAgICAgIGlmICh0aGlzLm1heERhdGUgJiYgdGhpcy5lbmREYXRlLmlzQWZ0ZXIodGhpcy5tYXhEYXRlKSlcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5tYXhEYXRlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hcHBseUJ1dHRvbkNsYXNzZXMgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5QnV0dG9uQ2xhc3NlcyA9IG9wdGlvbnMuYXBwbHlCdXR0b25DbGFzc2VzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXBwbHlDbGFzcyA9PT0gJ3N0cmluZycpIC8vYmFja3dhcmRzIGNvbXBhdFxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5QnV0dG9uQ2xhc3NlcyA9IG9wdGlvbnMuYXBwbHlDbGFzcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbmNlbEJ1dHRvbkNsYXNzZXMgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbkNsYXNzZXMgPSBvcHRpb25zLmNhbmNlbEJ1dHRvbkNsYXNzZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jYW5jZWxDbGFzcyA9PT0gJ3N0cmluZycpIC8vYmFja3dhcmRzIGNvbXBhdFxyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbkNsYXNzZXMgPSBvcHRpb25zLmNhbmNlbENsYXNzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4U3BhbiA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHRoaXMubWF4U3BhbiA9IG9wdGlvbnMubWF4U3BhbjtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGVMaW1pdCA9PT0gJ29iamVjdCcpIC8vYmFja3dhcmRzIGNvbXBhdFxyXG4gICAgICAgICAgICB0aGlzLm1heFNwYW4gPSBvcHRpb25zLmRhdGVMaW1pdDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9wZW5zID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5vcGVucyA9IG9wdGlvbnMub3BlbnM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kcm9wcyA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHMgPSBvcHRpb25zLmRyb3BzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1dlZWtOdW1iZXJzID0gb3B0aW9ucy5zaG93V2Vla051bWJlcnM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaG93SVNPV2Vla051bWJlcnMgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5zaG93SVNPV2Vla051bWJlcnMgPSBvcHRpb25zLnNob3dJU09XZWVrTnVtYmVycztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmJ1dHRvbkNsYXNzZXMgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgPSBvcHRpb25zLmJ1dHRvbkNsYXNzZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5idXR0b25DbGFzc2VzID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DbGFzc2VzID0gb3B0aW9ucy5idXR0b25DbGFzc2VzLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNob3dEcm9wZG93bnMgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5zaG93RHJvcGRvd25zID0gb3B0aW9ucy5zaG93RHJvcGRvd25zO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubWluWWVhciA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRoaXMubWluWWVhciA9IG9wdGlvbnMubWluWWVhcjtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1heFllYXIgPT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aGlzLm1heFllYXIgPSBvcHRpb25zLm1heFllYXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaG93Q3VzdG9tUmFuZ2VMYWJlbCA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dDdXN0b21SYW5nZUxhYmVsID0gb3B0aW9ucy5zaG93Q3VzdG9tUmFuZ2VMYWJlbDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZURhdGVQaWNrZXIgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZURhdGVQaWNrZXIgPSBvcHRpb25zLnNpbmdsZURhdGVQaWNrZXI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbmdsZURhdGVQaWNrZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWVQaWNrZXIgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyID0gb3B0aW9ucy50aW1lUGlja2VyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGltZVBpY2tlclNlY29uZHMgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyU2Vjb25kcyA9IG9wdGlvbnMudGltZVBpY2tlclNlY29uZHM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aW1lUGlja2VySW5jcmVtZW50ID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VySW5jcmVtZW50ID0gb3B0aW9ucy50aW1lUGlja2VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGltZVBpY2tlcjI0SG91ciA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIyNEhvdXIgPSBvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdXRvQXBwbHkgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5hdXRvQXBwbHkgPSBvcHRpb25zLmF1dG9BcHBseTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1dG9VcGRhdGVJbnB1dCA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9VcGRhdGVJbnB1dCA9IG9wdGlvbnMuYXV0b1VwZGF0ZUlucHV0O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubGlua2VkQ2FsZW5kYXJzID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMubGlua2VkQ2FsZW5kYXJzID0gb3B0aW9ucy5saW5rZWRDYWxlbmRhcnM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pc0ludmFsaWREYXRlID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLmlzSW52YWxpZERhdGUgPSBvcHRpb25zLmlzSW52YWxpZERhdGU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pc0N1c3RvbURhdGUgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuaXNDdXN0b21EYXRlID0gb3B0aW9ucy5pc0N1c3RvbURhdGU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbHdheXNTaG93Q2FsZW5kYXJzID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMuYWx3YXlzU2hvd0NhbGVuZGFycyA9IG9wdGlvbnMuYWx3YXlzU2hvd0NhbGVuZGFycztcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGRheSBuYW1lcyBvcmRlciB0byBmaXJzdERheVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZS5maXJzdERheSAhPSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMubG9jYWxlLmZpcnN0RGF5O1xyXG4gICAgICAgICAgICB3aGlsZSAoaXRlcmF0b3IgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5kYXlzT2ZXZWVrLnB1c2godGhpcy5sb2NhbGUuZGF5c09mV2Vlay5zaGlmdCgpKTtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGFydCwgZW5kLCByYW5nZTtcclxuXHJcbiAgICAgICAgLy9pZiBubyBzdGFydC9lbmQgZGF0ZXMgc2V0LCBjaGVjayBpZiBhbiBpbnB1dCBlbGVtZW50IGNvbnRhaW5zIGluaXRpYWwgdmFsdWVzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnN0YXJ0RGF0ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdGlvbnMuZW5kRGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5pcygnOnRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcy5lbGVtZW50KS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzcGxpdCA9IHZhbC5zcGxpdCh0aGlzLmxvY2FsZS5zZXBhcmF0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gZW5kID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG1vbWVudChzcGxpdFswXSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBtb21lbnQoc3BsaXRbMV0sIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlciAmJiB2YWwgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG1vbWVudCh2YWwsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbW9tZW50KHZhbCwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGFydCAhPT0gbnVsbCAmJiBlbmQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShzdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGVuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5yYW5nZXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGZvciAocmFuZ2UgaW4gb3B0aW9ucy5yYW5nZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucmFuZ2VzW3JhbmdlXVswXSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQob3B0aW9ucy5yYW5nZXNbcmFuZ2VdWzBdLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbW9tZW50KG9wdGlvbnMucmFuZ2VzW3JhbmdlXVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnJhbmdlc1tyYW5nZV1bMV0gPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1vbWVudChvcHRpb25zLnJhbmdlc1tyYW5nZV1bMV0sIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbW9tZW50KG9wdGlvbnMucmFuZ2VzW3JhbmdlXVsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCBkYXRlIGV4Y2VlZCB0aG9zZSBhbGxvd2VkIGJ5IHRoZSBtaW5EYXRlIG9yIG1heFNwYW5cclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMsIHNob3J0ZW4gdGhlIHJhbmdlIHRvIHRoZSBhbGxvd2FibGUgcGVyaW9kLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWluRGF0ZSAmJiBzdGFydC5pc0JlZm9yZSh0aGlzLm1pbkRhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5taW5EYXRlLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhTcGFuICYmIG1heERhdGUgJiYgc3RhcnQuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKS5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIG1heERhdGUgPSBzdGFydC5jbG9uZSgpLmFkZCh0aGlzLm1heFNwYW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heERhdGUgJiYgZW5kLmlzQWZ0ZXIobWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbWF4RGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbmQgb2YgdGhlIHJhbmdlIGlzIGJlZm9yZSB0aGUgbWluaW11bSBvciB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlIGlzXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgbWF4aW11bSwgZG9uJ3QgZGlzcGxheSB0aGlzIHJhbmdlIG9wdGlvbiBhdCBhbGwuXHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMubWluRGF0ZSAmJiBlbmQuaXNCZWZvcmUodGhpcy5taW5EYXRlLCB0aGlzLnRpbWVwaWNrZXIgPyAnbWludXRlJyA6ICdkYXknKSlcclxuICAgICAgICAgICAgICAgICAgfHwgKG1heERhdGUgJiYgc3RhcnQuaXNBZnRlcihtYXhEYXRlLCB0aGlzLnRpbWVwaWNrZXIgPyAnbWludXRlJyA6ICdkYXknKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TdXBwb3J0IHVuaWNvZGUgY2hhcnMgaW4gdGhlIHJhbmdlIG5hbWVzLlxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSByYW5nZTtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZUh0bWwgPSBlbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzW3JhbmdlSHRtbF0gPSBbc3RhcnQsIGVuZF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJzx1bD4nO1xyXG4gICAgICAgICAgICBmb3IgKHJhbmdlIGluIHRoaXMucmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ICs9ICc8bGkgZGF0YS1yYW5nZS1rZXk9XCInICsgcmFuZ2UgKyAnXCI+JyArIHJhbmdlICsgJzwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q3VzdG9tUmFuZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdCArPSAnPGxpIGRhdGEtcmFuZ2Uta2V5PVwiJyArIHRoaXMubG9jYWxlLmN1c3RvbVJhbmdlTGFiZWwgKyAnXCI+JyArIHRoaXMubG9jYWxlLmN1c3RvbVJhbmdlTGFiZWwgKyAnPC9saT4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpc3QgKz0gJzwvdWw+JztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLnJhbmdlcycpLnByZXBlbmQobGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50aW1lUGlja2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5zdGFydERhdGUuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZS5lbmRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jYW4ndCBiZSB1c2VkIHRvZ2V0aGVyIGZvciBub3dcclxuICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyICYmIHRoaXMuYXV0b0FwcGx5KVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9BcHBseSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdXRvQXBwbHkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2F1dG8tYXBwbHknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5yYW5nZXMgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnc2hvdy1yYW5nZXMnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnc2luZ2xlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtY2FsZW5kYXIubGVmdCcpLmFkZENsYXNzKCdzaW5nbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1jYWxlbmRhci5sZWZ0Jykuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLnJpZ2h0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlciAmJiB0aGlzLmF1dG9BcHBseSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2F1dG8tYXBwbHknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb3B0aW9ucy5yYW5nZXMgPT09ICd1bmRlZmluZWQnICYmICF0aGlzLnNpbmdsZURhdGVQaWNrZXIpIHx8IHRoaXMuYWx3YXlzU2hvd0NhbGVuZGFycykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnc2hvdy1jYWxlbmRhcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ29wZW5zJyArIHRoaXMub3BlbnMpO1xyXG5cclxuICAgICAgICAvL2FwcGx5IENTUyBjbGFzc2VzIGFuZCBsYWJlbHMgdG8gYnV0dG9uc1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5hcHBseUJ0biwgLmNhbmNlbEJ0bicpLmFkZENsYXNzKHRoaXMuYnV0dG9uQ2xhc3Nlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBwbHlCdXR0b25DbGFzc2VzLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmFwcGx5QnRuJykuYWRkQ2xhc3ModGhpcy5hcHBseUJ1dHRvbkNsYXNzZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbmNlbEJ1dHRvbkNsYXNzZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuY2FuY2VsQnRuJykuYWRkQ2xhc3ModGhpcy5jYW5jZWxCdXR0b25DbGFzc2VzKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuYXBwbHlCdG4nKS5odG1sKHRoaXMubG9jYWxlLmFwcGx5TGFiZWwpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5jYW5jZWxCdG4nKS5odG1sKHRoaXMubG9jYWxlLmNhbmNlbExhYmVsKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyJylcclxuICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlcmFuZ2VwaWNrZXInLCAnLnByZXYnLCAkLnByb3h5KHRoaXMuY2xpY2tQcmV2LCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlcmFuZ2VwaWNrZXInLCAnLm5leHQnLCAkLnByb3h5KHRoaXMuY2xpY2tOZXh0LCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWRvd24uZGF0ZXJhbmdlcGlja2VyJywgJ3RkLmF2YWlsYWJsZScsICQucHJveHkodGhpcy5jbGlja0RhdGUsIHRoaXMpKVxyXG4gICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuZGF0ZXJhbmdlcGlja2VyJywgJ3RkLmF2YWlsYWJsZScsICQucHJveHkodGhpcy5ob3ZlckRhdGUsIHRoaXMpKVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZS5kYXRlcmFuZ2VwaWNrZXInLCAnc2VsZWN0LnllYXJzZWxlY3QnLCAkLnByb3h5KHRoaXMubW9udGhPclllYXJDaGFuZ2VkLCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UuZGF0ZXJhbmdlcGlja2VyJywgJ3NlbGVjdC5tb250aHNlbGVjdCcsICQucHJveHkodGhpcy5tb250aE9yWWVhckNoYW5nZWQsIHRoaXMpKVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZS5kYXRlcmFuZ2VwaWNrZXInLCAnc2VsZWN0LmhvdXJzZWxlY3Qsc2VsZWN0Lm1pbnV0ZXNlbGVjdCxzZWxlY3Quc2Vjb25kc2VsZWN0LHNlbGVjdC5hbXBtc2VsZWN0JywgJC5wcm94eSh0aGlzLnRpbWVDaGFuZ2VkLCB0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5yYW5nZXMnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVyYW5nZXBpY2tlcicsICdsaScsICQucHJveHkodGhpcy5jbGlja1JhbmdlLCB0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtYnV0dG9ucycpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZGF0ZXJhbmdlcGlja2VyJywgJ2J1dHRvbi5hcHBseUJ0bicsICQucHJveHkodGhpcy5jbGlja0FwcGx5LCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlcmFuZ2VwaWNrZXInLCAnYnV0dG9uLmNhbmNlbEJ0bicsICQucHJveHkodGhpcy5jbGlja0NhbmNlbCwgdGhpcykpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmlzKCdpbnB1dCcpIHx8IHRoaXMuZWxlbWVudC5pcygnYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKHtcclxuICAgICAgICAgICAgICAgICdjbGljay5kYXRlcmFuZ2VwaWNrZXInOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcyksXHJcbiAgICAgICAgICAgICAgICAnZm9jdXMuZGF0ZXJhbmdlcGlja2VyJzogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgJ2tleXVwLmRhdGVyYW5nZXBpY2tlcic6ICQucHJveHkodGhpcy5lbGVtZW50Q2hhbmdlZCwgdGhpcyksXHJcbiAgICAgICAgICAgICAgICAna2V5ZG93bi5kYXRlcmFuZ2VwaWNrZXInOiAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcykgLy9JRSAxMSBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2suZGF0ZXJhbmdlcGlja2VyJywgJC5wcm94eSh0aGlzLnRvZ2dsZSwgdGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleWRvd24uZGF0ZXJhbmdlcGlja2VyJywgJC5wcm94eSh0aGlzLnRvZ2dsZSwgdGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBpZiBhdHRhY2hlZCB0byBhIHRleHQgaW5wdXQsIHNldCB0aGUgaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRWxlbWVudCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgRGF0ZVJhbmdlUGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3I6IERhdGVSYW5nZVBpY2tlcixcclxuXHJcbiAgICAgICAgc2V0U3RhcnREYXRlOiBmdW5jdGlvbihzdGFydERhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFydERhdGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFydERhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50aW1lUGlja2VyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5zdGFydE9mKCdkYXknKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIgJiYgdGhpcy50aW1lUGlja2VySW5jcmVtZW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUubWludXRlKE1hdGgucm91bmQodGhpcy5zdGFydERhdGUubWludXRlKCkgLyB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpICogdGhpcy50aW1lUGlja2VySW5jcmVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgdGhpcy5zdGFydERhdGUuaXNCZWZvcmUodGhpcy5taW5EYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLm1pbkRhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIgJiYgdGhpcy50aW1lUGlja2VySW5jcmVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlLm1pbnV0ZShNYXRoLnJvdW5kKHRoaXMuc3RhcnREYXRlLm1pbnV0ZSgpIC8gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSAqIHRoaXMudGltZVBpY2tlckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heERhdGUgJiYgdGhpcy5zdGFydERhdGUuaXNBZnRlcih0aGlzLm1heERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMubWF4RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlciAmJiB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUubWludXRlKE1hdGguZmxvb3IodGhpcy5zdGFydERhdGUubWludXRlKCkgLyB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpICogdGhpcy50aW1lUGlja2VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2luZylcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb250aHNJblZpZXcoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRFbmREYXRlOiBmdW5jdGlvbihlbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kRGF0ZSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kRGF0ZSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZS5lbmRPZignZGF5Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyICYmIHRoaXMudGltZVBpY2tlckluY3JlbWVudClcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZS5taW51dGUoTWF0aC5yb3VuZCh0aGlzLmVuZERhdGUubWludXRlKCkgLyB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpICogdGhpcy50aW1lUGlja2VySW5jcmVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZERhdGUuaXNCZWZvcmUodGhpcy5zdGFydERhdGUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heERhdGUgJiYgdGhpcy5lbmREYXRlLmlzQWZ0ZXIodGhpcy5tYXhEYXRlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMubWF4RGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWF4U3BhbiAmJiB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLmFkZCh0aGlzLm1heFNwYW4pLmlzQmVmb3JlKHRoaXMuZW5kRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLmFkZCh0aGlzLm1heFNwYW4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JpZ2h0VGltZSA9IHRoaXMuZW5kRGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1zZWxlY3RlZCcpLmh0bWwodGhpcy5zdGFydERhdGUuZm9ybWF0KHRoaXMubG9jYWxlLmZvcm1hdCkgKyB0aGlzLmxvY2FsZS5zZXBhcmF0b3IgKyB0aGlzLmVuZERhdGUuZm9ybWF0KHRoaXMubG9jYWxlLmZvcm1hdCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2luZylcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb250aHNJblZpZXcoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc0ludmFsaWREYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzQ3VzdG9tRGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVWaWV3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaW1lUGlja2VyKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbWVQaWNrZXIoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuY2FsZW5kYXItdGltZSBzZWxlY3QnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLmNhbGVuZGFyLXRpbWUgc2VsZWN0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtc2VsZWN0ZWQnKS5odG1sKHRoaXMuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpICsgdGhpcy5sb2NhbGUuc2VwYXJhdG9yICsgdGhpcy5lbmREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb250aHNJblZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtSW5wdXRzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlTW9udGhzSW5WaWV3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgYm90aCBkYXRlcyBhcmUgdmlzaWJsZSBhbHJlYWR5LCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2luZ2xlRGF0ZVBpY2tlciAmJiB0aGlzLmxlZnRDYWxlbmRhci5tb250aCAmJiB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGggJiZcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguZm9ybWF0KCdZWVlZLU1NJykgfHwgdGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpKVxyXG4gICAgICAgICAgICAgICAgICAgICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZW5kRGF0ZS5mb3JtYXQoJ1lZWVktTU0nKSA9PSB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5mb3JtYXQoJ1lZWVktTU0nKSB8fCB0aGlzLmVuZERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aCA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgJiYgKHRoaXMuZW5kRGF0ZS5tb250aCgpICE9IHRoaXMuc3RhcnREYXRlLm1vbnRoKCkgfHwgdGhpcy5lbmREYXRlLnllYXIoKSAhPSB0aGlzLnN0YXJ0RGF0ZS55ZWFyKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5lbmREYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5kYXRlKDIpLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguZm9ybWF0KCdZWVlZLU1NJykgIT0gdGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgJiYgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpICE9IHRoaXMuc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGggPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLmRhdGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5kYXRlKDIpLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHRoaXMubGlua2VkQ2FsZW5kYXJzICYmICF0aGlzLnNpbmdsZURhdGVQaWNrZXIgJiYgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID4gdGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5tYXhEYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aCA9IHRoaXMubWF4RGF0ZS5jbG9uZSgpLmRhdGUoMikuc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVDYWxlbmRhcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvdXIsIG1pbnV0ZSwgc2Vjb25kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLm1pbnV0ZXNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKG1pbnV0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLm1pbnV0ZXNlbGVjdCBvcHRpb246bGFzdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IHRoaXMudGltZVBpY2tlclNlY29uZHMgPyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuc2Vjb25kc2VsZWN0JykudmFsKCksIDEwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtcG0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuYW1wbXNlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ1BNJyAmJiBob3VyIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBob3VyID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5taW51dGVzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW51dGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAubWludXRlc2VsZWN0IG9wdGlvbjpsYXN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gdGhpcy50aW1lUGlja2VyU2Vjb25kcyA/IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuc2Vjb25kc2VsZWN0JykudmFsKCksIDEwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtcG0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLmFtcG1zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgaG91ciA8IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgaG91ciA9PT0gMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmhvdXIoaG91cikubWludXRlKG1pbnV0ZSkuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FsZW5kYXIoJ2xlZnQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWxlbmRhcigncmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGFueSBwcmVkZWZpbmVkIHJhbmdlIG1hdGNoaW5nIHRoZSBjdXJyZW50IHN0YXJ0IGFuZCBlbmQgZGF0ZXNcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLnJhbmdlcyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUNob3NlbkxhYmVsKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVuZGVyQ2FsZW5kYXI6IGZ1bmN0aW9uKHNpZGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBtYXRyaXggb2YgZGF0ZXMgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyID0gc2lkZSA9PSAnbGVmdCcgPyB0aGlzLmxlZnRDYWxlbmRhciA6IHRoaXMucmlnaHRDYWxlbmRhcjtcclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gY2FsZW5kYXIubW9udGgubW9udGgoKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSBjYWxlbmRhci5tb250aC55ZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBob3VyID0gY2FsZW5kYXIubW9udGguaG91cigpO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlID0gY2FsZW5kYXIubW9udGgubWludXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmQgPSBjYWxlbmRhci5tb250aC5zZWNvbmQoKTtcclxuICAgICAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gbW9tZW50KFt5ZWFyLCBtb250aF0pLmRheXNJbk1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdERheSA9IG1vbWVudChbeWVhciwgbW9udGgsIDFdKTtcclxuICAgICAgICAgICAgdmFyIGxhc3REYXkgPSBtb21lbnQoW3llYXIsIG1vbnRoLCBkYXlzSW5Nb250aF0pO1xyXG4gICAgICAgICAgICB2YXIgbGFzdE1vbnRoID0gbW9tZW50KGZpcnN0RGF5KS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5tb250aCgpO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFllYXIgPSBtb21lbnQoZmlyc3REYXkpLnN1YnRyYWN0KDEsICdtb250aCcpLnllYXIoKTtcclxuICAgICAgICAgICAgdmFyIGRheXNJbkxhc3RNb250aCA9IG1vbWVudChbbGFzdFllYXIsIGxhc3RNb250aF0pLmRheXNJbk1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXlPZldlZWsgPSBmaXJzdERheS5kYXkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6ZSBhIDYgcm93cyB4IDcgY29sdW1ucyBhcnJheSBmb3IgdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IFtdO1xyXG4gICAgICAgICAgICBjYWxlbmRhci5maXJzdERheSA9IGZpcnN0RGF5O1xyXG4gICAgICAgICAgICBjYWxlbmRhci5sYXN0RGF5ID0gbGFzdERheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcltpXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3BvcHVsYXRlIHRoZSBjYWxlbmRhciB3aXRoIGRhdGUgb2JqZWN0c1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXkgPSBkYXlzSW5MYXN0TW9udGggLSBkYXlPZldlZWsgKyB0aGlzLmxvY2FsZS5maXJzdERheSArIDE7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERheSA+IGRheXNJbkxhc3RNb250aClcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF5IC09IDc7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09IHRoaXMubG9jYWxlLmZpcnN0RGF5KVxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXkgPSBkYXlzSW5MYXN0TW9udGggLSA2O1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1ckRhdGUgPSBtb21lbnQoW2xhc3RZZWFyLCBsYXN0TW9udGgsIHN0YXJ0RGF5LCAxMiwgbWludXRlLCBzZWNvbmRdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2wsIHJvdztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNvbCA9IDAsIHJvdyA9IDA7IGkgPCA0MjsgaSsrLCBjb2wrKywgY3VyRGF0ZSA9IG1vbWVudChjdXJEYXRlKS5hZGQoMjQsICdob3VyJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiBjb2wgJSA3ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyW3Jvd11bY29sXSA9IGN1ckRhdGUuY2xvbmUoKS5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgY3VyRGF0ZS5ob3VyKDEyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLm1pbkRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgY2FsZW5kYXJbcm93XVtjb2xdLmlzQmVmb3JlKHRoaXMubWluRGF0ZSkgJiYgc2lkZSA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhcltyb3ddW2NvbF0gPSB0aGlzLm1pbkRhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLm1heERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgY2FsZW5kYXJbcm93XVtjb2xdLmlzQWZ0ZXIodGhpcy5tYXhEYXRlKSAmJiBzaWRlID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhcltyb3ddW2NvbF0gPSB0aGlzLm1heERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbWFrZSB0aGUgY2FsZW5kYXIgb2JqZWN0IGF2YWlsYWJsZSB0byBob3ZlckRhdGUvY2xpY2tEYXRlXHJcbiAgICAgICAgICAgIGlmIChzaWRlID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIuY2FsZW5kYXIgPSBjYWxlbmRhcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYWxlbmRhci5jYWxlbmRhciA9IGNhbGVuZGFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pbkRhdGUgPSBzaWRlID09ICdsZWZ0JyA/IHRoaXMubWluRGF0ZSA6IHRoaXMuc3RhcnREYXRlO1xyXG4gICAgICAgICAgICB2YXIgbWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gc2lkZSA9PSAnbGVmdCcgPyB0aGlzLnN0YXJ0RGF0ZSA6IHRoaXMuZW5kRGF0ZTtcclxuICAgICAgICAgICAgdmFyIGFycm93ID0gdGhpcy5sb2NhbGUuZGlyZWN0aW9uID09ICdsdHInID8ge2xlZnQ6ICdjaGV2cm9uLWxlZnQnLCByaWdodDogJ2NoZXZyb24tcmlnaHQnfSA6IHtsZWZ0OiAnY2hldnJvbi1yaWdodCcsIHJpZ2h0OiAnY2hldnJvbi1sZWZ0J307XHJcblxyXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nO1xyXG4gICAgICAgICAgICBodG1sICs9ICc8dGhlYWQ+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRyPic7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgZW1wdHkgY2VsbCBmb3Igd2VlayBudW1iZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWtOdW1iZXJzIHx8IHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHRoPjwvdGg+JztcclxuXHJcbiAgICAgICAgICAgIGlmICgoIW1pbkRhdGUgfHwgbWluRGF0ZS5pc0JlZm9yZShjYWxlbmRhci5maXJzdERheSkpICYmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgfHwgc2lkZSA9PSAnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dGggY2xhc3M9XCJwcmV2IGF2YWlsYWJsZVwiPjxzcGFuPjwvc3Bhbj48L3RoPic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dGg+PC90aD4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0ZUh0bWwgPSB0aGlzLmxvY2FsZS5tb250aE5hbWVzW2NhbGVuZGFyWzFdWzFdLm1vbnRoKCldICsgY2FsZW5kYXJbMV1bMV0uZm9ybWF0KFwiIFlZWVlcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RHJvcGRvd25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE1vbnRoID0gY2FsZW5kYXJbMV1bMV0ubW9udGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WWVhciA9IGNhbGVuZGFyWzFdWzFdLnllYXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhZZWFyID0gKG1heERhdGUgJiYgbWF4RGF0ZS55ZWFyKCkpIHx8ICh0aGlzLm1heFllYXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pblllYXIgPSAobWluRGF0ZSAmJiBtaW5EYXRlLnllYXIoKSkgfHwgKHRoaXMubWluWWVhcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5NaW5ZZWFyID0gY3VycmVudFllYXIgPT0gbWluWWVhcjtcclxuICAgICAgICAgICAgICAgIHZhciBpbk1heFllYXIgPSBjdXJyZW50WWVhciA9PSBtYXhZZWFyO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtb250aEh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cIm1vbnRoc2VsZWN0XCI+JztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgMTI7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWluTWluWWVhciB8fCAobWluRGF0ZSAmJiBtID49IG1pbkRhdGUubW9udGgoKSkpICYmICghaW5NYXhZZWFyIHx8IChtYXhEYXRlICYmIG0gPD0gbWF4RGF0ZS5tb250aCgpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtICsgXCInXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPT09IGN1cnJlbnRNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPlwiICsgdGhpcy5sb2NhbGUubW9udGhOYW1lc1ttXSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtICsgXCInXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPT09IGN1cnJlbnRNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGRpc2FibGVkPSdkaXNhYmxlZCc+XCIgKyB0aGlzLmxvY2FsZS5tb250aE5hbWVzW21dICsgXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb250aEh0bWwgKz0gXCI8L3NlbGVjdD5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeWVhckh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cInllYXJzZWxlY3RcIj4nO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IG1pblllYXI7IHkgPD0gbWF4WWVhcjsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhckh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgeSArICdcIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSA9PT0gY3VycmVudFllYXIgPyAnIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPicgKyB5ICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5ZWFySHRtbCArPSAnPC9zZWxlY3Q+JztcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlSHRtbCA9IG1vbnRoSHRtbCArIHllYXJIdG1sO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBodG1sICs9ICc8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cIm1vbnRoXCI+JyArIGRhdGVIdG1sICsgJzwvdGg+JztcclxuICAgICAgICAgICAgaWYgKCghbWF4RGF0ZSB8fCBtYXhEYXRlLmlzQWZ0ZXIoY2FsZW5kYXIubGFzdERheSkpICYmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgfHwgc2lkZSA9PSAncmlnaHQnIHx8IHRoaXMuc2luZ2xlRGF0ZVBpY2tlcikpIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aCBjbGFzcz1cIm5leHQgYXZhaWxhYmxlXCI+PHNwYW4+PC9zcGFuPjwvdGg+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aD48L3RoPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRyPic7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgd2VlayBudW1iZXIgbGFiZWxcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWtOdW1iZXJzIHx8IHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHRoIGNsYXNzPVwid2Vla1wiPicgKyB0aGlzLmxvY2FsZS53ZWVrTGFiZWwgKyAnPC90aD4nO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKHRoaXMubG9jYWxlLmRheXNPZldlZWssIGZ1bmN0aW9uKGluZGV4LCBkYXlPZldlZWspIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aD4nICsgZGF5T2ZXZWVrICsgJzwvdGg+JztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9ICc8L3RyPic7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdGhlYWQ+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRib2R5Pic7XHJcblxyXG4gICAgICAgICAgICAvL2FkanVzdCBtYXhEYXRlIHRvIHJlZmxlY3QgdGhlIG1heFNwYW4gc2V0dGluZyBpbiBvcmRlciB0b1xyXG4gICAgICAgICAgICAvL2dyZXkgb3V0IGVuZCBkYXRlcyBiZXlvbmQgdGhlIG1heFNwYW5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSA9PSBudWxsICYmIHRoaXMubWF4U3Bhbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heExpbWl0ID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKS5lbmRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1heERhdGUgfHwgbWF4TGltaXQuaXNCZWZvcmUobWF4RGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEYXRlID0gbWF4TGltaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dHI+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgd2VlayBudW1iZXJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dXZWVrTnVtYmVycylcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8dGQgY2xhc3M9XCJ3ZWVrXCI+JyArIGNhbGVuZGFyW3Jvd11bMF0ud2VlaygpICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIndlZWtcIj4nICsgY2FsZW5kYXJbcm93XVswXS5pc29XZWVrKCkgKyAnPC90ZD4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IDc7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IHRvZGF5J3MgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxlbmRhcltyb3ddW2NvbF0uaXNTYW1lKG5ldyBEYXRlKCksIFwiZGF5XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3RvZGF5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IHdlZWtlbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5pc29XZWVrZGF5KCkgPiA1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3dlZWtlbmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ncmV5IG91dCB0aGUgZGF0ZXMgaW4gb3RoZXIgbW9udGhzIGRpc3BsYXllZCBhdCBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0aGlzIGNhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5tb250aCgpICE9IGNhbGVuZGFyWzFdWzFdLm1vbnRoKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnb2ZmJywgJ2VuZHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZXMgYmVmb3JlIHRoZSBtaW5pbXVtIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5pc0JlZm9yZSh0aGlzLm1pbkRhdGUsICdkYXknKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZXMgYWZ0ZXIgdGhlIG1heGltdW0gZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5pc0FmdGVyKG1heERhdGUsICdkYXknKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZSBpZiBhIGN1c3RvbSBmdW5jdGlvbiBkZWNpZGVzIGl0J3MgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZERhdGUoY2FsZW5kYXJbcm93XVtjb2xdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzdGFydCBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLnN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnLCAnc3RhcnQtZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2hpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVuZCBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSAhPSBudWxsICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLmVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJywgJ2VuZC1kYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGRhdGVzIGluLWJldHdlZW4gdGhlIHNlbGVjdGVkIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSAhPSBudWxsICYmIGNhbGVuZGFyW3Jvd11bY29sXSA+IHRoaXMuc3RhcnREYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXSA8IHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdpbi1yYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2FwcGx5IGN1c3RvbSBjbGFzc2VzIGZvciB0aGlzIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNDdXN0b20gPSB0aGlzLmlzQ3VzdG9tRGF0ZShjYWxlbmRhcltyb3ddW2NvbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc0N1c3RvbSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goaXNDdXN0b20pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjbGFzc2VzLCBpc0N1c3RvbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY25hbWUgPSAnJywgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY25hbWUgKz0gY2xhc3Nlc1tpXSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbaV0gPT0gJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY25hbWUgKz0gJ2F2YWlsYWJsZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjbmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykgKyAnXCIgZGF0YS10aXRsZT1cIicgKyAncicgKyByb3cgKyAnYycgKyBjb2wgKyAnXCI+JyArIGNhbGVuZGFyW3Jvd11bY29sXS5kYXRlKCkgKyAnPC90ZD4nO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnPC90Ym9keT4nO1xyXG4gICAgICAgICAgICBodG1sICs9ICc8L3RhYmxlPic7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLicgKyBzaWRlICsgJyAuY2FsZW5kYXItdGFibGUnKS5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW5kZXJUaW1lUGlja2VyOiBmdW5jdGlvbihzaWRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBEb24ndCBib3RoZXIgdXBkYXRpbmcgdGhlIHRpbWUgcGlja2VyIGlmIGl0J3MgY3VycmVudGx5IGRpc2FibGVkXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgYW4gZW5kIGRhdGUgaGFzbid0IGJlZW4gY2xpY2tlZCB5ZXRcclxuICAgICAgICAgICAgaWYgKHNpZGUgPT0gJ3JpZ2h0JyAmJiAhdGhpcy5lbmREYXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgaHRtbCwgc2VsZWN0ZWQsIG1pbkRhdGUsIG1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhTcGFuICYmICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuc3RhcnREYXRlLmNsb25lKCkuYWRkKHRoaXMubWF4U3BhbikuaXNCZWZvcmUodGhpcy5tYXhEYXRlKSkpXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaWRlID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgbWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaWRlID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5lbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlID0gdGhpcy5zdGFydERhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9QcmVzZXJ2ZSB0aGUgdGltZSBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZVNlbGVjdG9yID0gdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1jYWxlbmRhci5yaWdodCAuY2FsZW5kYXItdGltZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVTZWxlY3Rvci5odG1sKCkgIT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaG91cighaXNOYU4oc2VsZWN0ZWQuaG91cigpKSA/IHNlbGVjdGVkLmhvdXIoKSA6IHRpbWVTZWxlY3Rvci5maW5kKCcuaG91cnNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubWludXRlKCFpc05hTihzZWxlY3RlZC5taW51dGUoKSkgPyBzZWxlY3RlZC5taW51dGUoKSA6IHRpbWVTZWxlY3Rvci5maW5kKCcubWludXRlc2VsZWN0IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZWNvbmQoIWlzTmFOKHNlbGVjdGVkLnNlY29uZCgpKSA/IHNlbGVjdGVkLnNlY29uZCgpIDogdGltZVNlbGVjdG9yLmZpbmQoJy5zZWNvbmRzZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1wbSA9IHRpbWVTZWxlY3Rvci5maW5kKCcuYW1wbXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgc2VsZWN0ZWQuaG91cigpIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5ob3VyKHNlbGVjdGVkLmhvdXIoKSArIDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgc2VsZWN0ZWQuaG91cigpID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmhvdXIoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuaXNCZWZvcmUodGhpcy5zdGFydERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4RGF0ZSAmJiBzZWxlY3RlZC5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gbWF4RGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gaG91cnNcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIGh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cImhvdXJzZWxlY3RcIj4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy50aW1lUGlja2VyMjRIb3VyID8gMCA6IDE7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSB0aGlzLnRpbWVQaWNrZXIyNEhvdXIgPyAyMyA6IDEyO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaV9pbl8yNCA9IGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cilcclxuICAgICAgICAgICAgICAgICAgICBpX2luXzI0ID0gc2VsZWN0ZWQuaG91cigpID49IDEyID8gKGkgPT0gMTIgPyAxMiA6IGkgKyAxMikgOiAoaSA9PSAxMiA/IDAgOiBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IHNlbGVjdGVkLmNsb25lKCkuaG91cihpX2luXzI0KTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5taW51dGUoNTkpLmlzQmVmb3JlKG1pbkRhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUubWludXRlKDApLmlzQWZ0ZXIobWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpX2luXzI0ID09IHNlbGVjdGVkLmhvdXIoKSAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPicgKyBpICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBjbGFzcz1cImRpc2FibGVkXCI+JyArIGkgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBpICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvc2VsZWN0PiAnO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gbWludXRlc1xyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnOiA8c2VsZWN0IGNsYXNzPVwibWludXRlc2VsZWN0XCI+JztcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkgKz0gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gaSA8IDEwID8gJzAnICsgaSA6IGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IHNlbGVjdGVkLmNsb25lKCkubWludXRlKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5zZWNvbmQoNTkpLmlzQmVmb3JlKG1pbkRhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUuc2Vjb25kKDApLmlzQWZ0ZXIobWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5taW51dGUoKSA9PSBpICYmICFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+JyArIHBhZGRlZCArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIiBkaXNhYmxlZD1cImRpc2FibGVkXCIgY2xhc3M9XCJkaXNhYmxlZFwiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnPC9zZWxlY3Q+ICc7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBzZWNvbmRzXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyU2Vjb25kcykge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnOiA8c2VsZWN0IGNsYXNzPVwic2Vjb25kc2VsZWN0XCI+JztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gaSA8IDEwID8gJzAnICsgaSA6IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBzZWxlY3RlZC5jbG9uZSgpLnNlY29uZChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5pc0JlZm9yZShtaW5EYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUuaXNBZnRlcihtYXhEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuc2Vjb25kKCkgPT0gaSAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj4nICsgcGFkZGVkICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIGNsYXNzPVwiZGlzYWJsZWRcIj4nICsgcGFkZGVkICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC9zZWxlY3Q+ICc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFNL1BNXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNlbGVjdCBjbGFzcz1cImFtcG1zZWxlY3RcIj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbV9odG1sID0gJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG1faHRtbCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtaW5EYXRlICYmIHNlbGVjdGVkLmNsb25lKCkuaG91cigxMikubWludXRlKDApLnNlY29uZCgwKS5pc0JlZm9yZShtaW5EYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICBhbV9odG1sID0gJyBkaXNhYmxlZD1cImRpc2FibGVkXCIgY2xhc3M9XCJkaXNhYmxlZFwiJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4RGF0ZSAmJiBzZWxlY3RlZC5jbG9uZSgpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBtX2h0bWwgPSAnIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBjbGFzcz1cImRpc2FibGVkXCInO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5ob3VyKCkgPj0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiQU1cIicgKyBhbV9odG1sICsgJz5BTTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJQTVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgKyBwbV9odG1sICsgJz5QTTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCJBTVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgKyBhbV9odG1sICsgJz5BTTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJQTVwiJyArIHBtX2h0bWwgKyAnPlBNPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3NlbGVjdD4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLicgKyBzaWRlICsgJyAuY2FsZW5kYXItdGltZScpLmh0bWwoaHRtbCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUZvcm1JbnB1dHM6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlciB8fCAodGhpcy5lbmREYXRlICYmICh0aGlzLnN0YXJ0RGF0ZS5pc0JlZm9yZSh0aGlzLmVuZERhdGUpIHx8IHRoaXMuc3RhcnREYXRlLmlzU2FtZSh0aGlzLmVuZERhdGUpKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJ2J1dHRvbi5hcHBseUJ0bicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnYnV0dG9uLmFwcGx5QnRuJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJUb3AsXHJcbiAgICAgICAgICAgICAgICBkcm9wcyA9IHRoaXMuZHJvcHM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyZW50UmlnaHRFZGdlID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnRFbC5pcygnYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBhcmVudEVsLm9mZnNldCgpLnRvcCAtIHRoaXMucGFyZW50RWwuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5wYXJlbnRFbC5vZmZzZXQoKS5sZWZ0IC0gdGhpcy5wYXJlbnRFbC5zY3JvbGxMZWZ0KClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRSaWdodEVkZ2UgPSB0aGlzLnBhcmVudEVsWzBdLmNsaWVudFdpZHRoICsgdGhpcy5wYXJlbnRFbC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGRyb3BzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F1dG8nOlxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyVG9wID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLnRvcCArIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpIC0gcGFyZW50T2Zmc2V0LnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJUb3AgKyB0aGlzLmNvbnRhaW5lci5vdXRlckhlaWdodCgpID49IHRoaXMucGFyZW50RWxbMF0uc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVG9wID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLnRvcCAtIHRoaXMuY29udGFpbmVyLm91dGVySGVpZ2h0KCkgLSBwYXJlbnRPZmZzZXQudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BzID0gJ3VwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJUb3AgPSB0aGlzLmVsZW1lbnQub2Zmc2V0KCkudG9wIC0gdGhpcy5jb250YWluZXIub3V0ZXJIZWlnaHQoKSAtIHBhcmVudE9mZnNldC50b3A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclRvcCA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKS50b3AgKyB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSAtIHBhcmVudE9mZnNldC50b3A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRm9yY2UgdGhlIGNvbnRhaW5lciB0byBpdCdzIGFjdHVhbCB3aWR0aFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLm91dGVyV2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKCdkcm9wLXVwJywgZHJvcHMgPT0gJ3VwJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcGVucyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJSaWdodCA9IHBhcmVudFJpZ2h0RWRnZSAtIHRoaXMuZWxlbWVudC5vZmZzZXQoKS5sZWZ0IC0gdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJXaWR0aCArIGNvbnRhaW5lclJpZ2h0ID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNvbnRhaW5lclJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5zID09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyTGVmdCA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKS5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgKyB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBjb250YWluZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyTGVmdCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXJMZWZ0ICsgY29udGFpbmVyV2lkdGggPiAkKHdpbmRvdykud2lkdGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjb250YWluZXJMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyTGVmdCA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKS5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyTGVmdCArIGNvbnRhaW5lcldpZHRoID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY29udGFpbmVyTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsaWNrIHByb3h5IHRoYXQgaXMgcHJpdmF0ZSB0byB0aGlzIGluc3RhbmNlIG9mIGRhdGVwaWNrZXIsIGZvciB1bmJpbmRpbmdcclxuICAgICAgICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrUHJveHkgPSAkLnByb3h5KGZ1bmN0aW9uKGUpIHsgdGhpcy5vdXRzaWRlQ2xpY2soZSk7IH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmluZCBnbG9iYWwgZGF0ZXBpY2tlciBtb3VzZWRvd24gZm9yIGhpZGluZyBhbmRcclxuICAgICAgICAgICAgJChkb2N1bWVudClcclxuICAgICAgICAgICAgICAub24oJ21vdXNlZG93bi5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzLl9vdXRzaWRlQ2xpY2tQcm94eSlcclxuICAgICAgICAgICAgICAvLyBhbHNvIHN1cHBvcnQgbW9iaWxlIGRldmljZXNcclxuICAgICAgICAgICAgICAub24oJ3RvdWNoZW5kLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMuX291dHNpZGVDbGlja1Byb3h5KVxyXG4gICAgICAgICAgICAgIC8vIGFsc28gZXhwbGljaXRseSBwbGF5IG5pY2Ugd2l0aCBCb290c3RyYXAgZHJvcGRvd25zLCB3aGljaCBzdG9wUHJvcGFnYXRpb24gd2hlbiBjbGlja2luZyB0aGVtXHJcbiAgICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlcmFuZ2VwaWNrZXInLCAnW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXScsIHRoaXMuX291dHNpZGVDbGlja1Byb3h5KVxyXG4gICAgICAgICAgICAgIC8vIGFuZCBhbHNvIGNsb3NlIHdoZW4gZm9jdXMgY2hhbmdlcyB0byBvdXRzaWRlIHRoZSBwaWNrZXIgKGVnLiB0YWJiaW5nIGJldHdlZW4gY29udHJvbHMpXHJcbiAgICAgICAgICAgICAgLm9uKCdmb2N1c2luLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMuX291dHNpZGVDbGlja1Byb3h5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcG9zaXRpb24gdGhlIHBpY2tlciBpZiB0aGUgd2luZG93IGlzIHJlc2l6ZWQgd2hpbGUgaXQncyBvcGVuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbigncmVzaXplLmRhdGVyYW5nZXBpY2tlcicsICQucHJveHkoZnVuY3Rpb24oZSkgeyB0aGlzLm1vdmUoZSk7IH0sIHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub2xkU3RhcnREYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRFbmREYXRlID0gdGhpcy5lbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNSaWdodFRpbWUgPSB0aGlzLmVuZERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlcignc2hvdy5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy9pbmNvbXBsZXRlIGRhdGUgc2VsZWN0aW9uLCByZXZlcnQgdG8gbGFzdCB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5vbGRTdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMub2xkRW5kRGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2lmIGEgbmV3IGRhdGUgcmFuZ2Ugd2FzIHNlbGVjdGVkLCBpbnZva2UgdGhlIHVzZXIgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJ0RGF0ZS5pc1NhbWUodGhpcy5vbGRTdGFydERhdGUpIHx8ICF0aGlzLmVuZERhdGUuaXNTYW1lKHRoaXMub2xkRW5kRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuc3RhcnREYXRlLmNsb25lKCksIHRoaXMuZW5kRGF0ZS5jbG9uZSgpLCB0aGlzLmNob3NlbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgcGlja2VyIGlzIGF0dGFjaGVkIHRvIGEgdGV4dCBpbnB1dCwgdXBkYXRlIGl0XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCcuZGF0ZXJhbmdlcGlja2VyJyk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJy5kYXRlcmFuZ2VwaWNrZXInKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlcignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3V0c2lkZUNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHBhZ2UgaXMgY2xpY2tlZCBhbnl3aGVyZSBleGNlcHQgd2l0aGluIHRoZSBkYXRlcmFuZ2VycGlja2VyL2J1dHRvblxyXG4gICAgICAgICAgICAvLyBpdHNlbGYgdGhlbiBjYWxsIHRoaXMuaGlkZSgpXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIC8vIGllIG1vZGFsIGRpYWxvZyBmaXhcclxuICAgICAgICAgICAgICAgIGUudHlwZSA9PSBcImZvY3VzaW5cIiB8fFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5lbGVtZW50KS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuY29udGFpbmVyKS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCcuY2FsZW5kYXItdGFibGUnKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoJ291dHNpZGVDbGljay5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG93Q2FsZW5kYXJzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ3Nob3ctY2FsZW5kYXInKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJywgdGhpcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGlkZUNhbGVuZGFyczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzaG93LWNhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdoaWRlQ2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJywgdGhpcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xpY2tSYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmFuZ2Uta2V5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICAgICAgaWYgKGxhYmVsID09IHRoaXMubG9jYWxlLmN1c3RvbVJhbmdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhbGVuZGFycygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGVzID0gdGhpcy5yYW5nZXNbbGFiZWxdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBkYXRlc1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IGRhdGVzWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy50aW1lUGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlLmVuZE9mKCdkYXknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWx3YXlzU2hvd0NhbGVuZGFycylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVDYWxlbmRhcnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tBcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xpY2tQcmV2OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWwgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZHJwLWNhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgIGlmIChjYWwuaGFzQ2xhc3MoJ2xlZnQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saW5rZWRDYWxlbmRhcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLnN1YnRyYWN0KDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLnN1YnRyYWN0KDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FsZW5kYXJzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xpY2tOZXh0OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWwgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZHJwLWNhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgIGlmIChjYWwuaGFzQ2xhc3MoJ2xlZnQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguYWRkKDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmtlZENhbGVuZGFycylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5hZGQoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBob3ZlckRhdGU6IGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vaWdub3JlIGRhdGVzIHRoYXQgY2FuJ3QgYmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnYXZhaWxhYmxlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9ICQoZS50YXJnZXQpLmF0dHIoJ2RhdGEtdGl0bGUnKTtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IHRpdGxlLnN1YnN0cigxLCAxKTtcclxuICAgICAgICAgICAgdmFyIGNvbCA9IHRpdGxlLnN1YnN0cigzLCAxKTtcclxuICAgICAgICAgICAgdmFyIGNhbCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5kcnAtY2FsZW5kYXInKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBjYWwuaGFzQ2xhc3MoJ2xlZnQnKSA/IHRoaXMubGVmdENhbGVuZGFyLmNhbGVuZGFyW3Jvd11bY29sXSA6IHRoaXMucmlnaHRDYWxlbmRhci5jYWxlbmRhcltyb3ddW2NvbF07XHJcblxyXG4gICAgICAgICAgICAvL2hpZ2hsaWdodCB0aGUgZGF0ZXMgYmV0d2VlbiB0aGUgc3RhcnQgZGF0ZSBhbmQgdGhlIGRhdGUgYmVpbmcgaG92ZXJlZCBhcyBhIHBvdGVudGlhbCBlbmQgZGF0ZVxyXG4gICAgICAgICAgICB2YXIgbGVmdENhbGVuZGFyID0gdGhpcy5sZWZ0Q2FsZW5kYXI7XHJcbiAgICAgICAgICAgIHZhciByaWdodENhbGVuZGFyID0gdGhpcy5yaWdodENhbGVuZGFyO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5zdGFydERhdGU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyIHRib2R5IHRkJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9za2lwIHdlZWsgbnVtYmVycywgb25seSBsb29rIGF0IGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWwpLmhhc0NsYXNzKCd3ZWVrJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gJChlbCkuYXR0cignZGF0YS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSB0aXRsZS5zdWJzdHIoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IHRpdGxlLnN1YnN0cigzLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsID0gJChlbCkucGFyZW50cygnLmRycC1jYWxlbmRhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkdCA9IGNhbC5oYXNDbGFzcygnbGVmdCcpID8gbGVmdENhbGVuZGFyLmNhbGVuZGFyW3Jvd11bY29sXSA6IHJpZ2h0Q2FsZW5kYXIuY2FsZW5kYXJbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGR0LmlzQWZ0ZXIoc3RhcnREYXRlKSAmJiBkdC5pc0JlZm9yZShkYXRlKSkgfHwgZHQuaXNTYW1lKGRhdGUsICdkYXknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5hZGRDbGFzcygnaW4tcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5yZW1vdmVDbGFzcygnaW4tcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xpY2tEYXRlOiBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdhdmFpbGFibGUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJChlLnRhcmdldCkuYXR0cignZGF0YS10aXRsZScpO1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gdGl0bGUuc3Vic3RyKDEsIDEpO1xyXG4gICAgICAgICAgICB2YXIgY29sID0gdGl0bGUuc3Vic3RyKDMsIDEpO1xyXG4gICAgICAgICAgICB2YXIgY2FsID0gJChlLnRhcmdldCkucGFyZW50cygnLmRycC1jYWxlbmRhcicpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGNhbC5oYXNDbGFzcygnbGVmdCcpID8gdGhpcy5sZWZ0Q2FsZW5kYXIuY2FsZW5kYXJbcm93XVtjb2xdIDogdGhpcy5yaWdodENhbGVuZGFyLmNhbGVuZGFyW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gZG8gYSBmZXcgdGhpbmdzOlxyXG4gICAgICAgICAgICAvLyAqIGFsdGVybmF0ZSBiZXR3ZWVuIHNlbGVjdGluZyBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSBmb3IgdGhlIHJhbmdlLFxyXG4gICAgICAgICAgICAvLyAqIGlmIHRoZSB0aW1lIHBpY2tlciBpcyBlbmFibGVkLCBhcHBseSB0aGUgaG91ci9taW51dGUvc2Vjb25kIGZyb20gdGhlIHNlbGVjdCBib3hlcyB0byB0aGUgY2xpY2tlZCBkYXRlXHJcbiAgICAgICAgICAgIC8vICogaWYgYXV0b2FwcGx5IGlzIGVuYWJsZWQsIGFuZCBhbiBlbmQgZGF0ZSB3YXMgY2hvc2VuLCBhcHBseSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIC8vICogaWYgc2luZ2xlIGRhdGUgcGlja2VyIG1vZGUsIGFuZCB0aW1lIHBpY2tlciBpc24ndCBlbmFibGVkLCBhcHBseSB0aGUgc2VsZWN0aW9uIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIC8vICogaWYgb25lIG9mIHRoZSBpbnB1dHMgYWJvdmUgdGhlIGNhbGVuZGFycyB3YXMgZm9jdXNlZCwgY2FuY2VsIHRoYXQgbWFudWFsIGlucHV0XHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmREYXRlIHx8IGRhdGUuaXNCZWZvcmUodGhpcy5zdGFydERhdGUsICdkYXknKSkgeyAvL3BpY2tpbmcgc3RhcnRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5sZWZ0IC5ob3Vyc2VsZWN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1wbSA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5sZWZ0IC5hbXBtc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbXBtID09PSAnUE0nICYmIGhvdXIgPCAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbXBtID09PSAnQU0nICYmIGhvdXIgPT09IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW51dGUgPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAubWludXRlc2VsZWN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4obWludXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAubWludXRlc2VsZWN0IG9wdGlvbjpsYXN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZCA9IHRoaXMudGltZVBpY2tlclNlY29uZHMgPyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuc2Vjb25kc2VsZWN0JykudmFsKCksIDEwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUuY2xvbmUoKS5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZW5kRGF0ZSAmJiBkYXRlLmlzQmVmb3JlKHRoaXMuc3RhcnREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2U6IGNsaWNraW5nIHRoZSBzYW1lIGRhdGUgZm9yIHN0YXJ0L2VuZCxcclxuICAgICAgICAgICAgICAgIC8vYnV0IHRoZSB0aW1lIG9mIHRoZSBlbmQgZGF0ZSBpcyBiZWZvcmUgdGhlIHN0YXJ0IGRhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZSh0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gcGlja2luZyBlbmRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtcG0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLmFtcG1zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgaG91ciA8IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgaG91ciA9PT0gMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAubWludXRlc2VsZWN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4obWludXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLm1pbnV0ZXNlbGVjdCBvcHRpb246bGFzdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWNvbmQgPSB0aGlzLnRpbWVQaWNrZXJTZWNvbmRzID8gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5zZWNvbmRzZWxlY3QnKS52YWwoKSwgMTApIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5jbG9uZSgpLmhvdXIoaG91cikubWludXRlKG1pbnV0ZSkuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9BcHBseSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUNob3NlbkxhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tBcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUodGhpcy5zdGFydERhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIgJiYgdGhpcy5hdXRvQXBwbHkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja0FwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG5cclxuICAgICAgICAgICAgLy9UaGlzIGlzIHRvIGNhbmNlbCB0aGUgYmx1ciBldmVudCBoYW5kbGVyIGlmIHRoZSBtb3VzZSB3YXMgaW4gb25lIG9mIHRoZSBpbnB1dHNcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FsY3VsYXRlQ2hvc2VuTGFiZWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGN1c3RvbVJhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciByYW5nZSBpbiB0aGlzLnJhbmdlcykge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy50aW1lUGlja2VyU2Vjb25kcyA/IFwiWVlZWS1NTS1ERCBISDptbTpzc1wiIDogXCJZWVlZLU1NLUREIEhIOm1tXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZ25vcmUgdGltZXMgd2hlbiBjb21wYXJpbmcgZGF0ZXMgaWYgdGltZSBwaWNrZXIgc2Vjb25kcyBpcyBub3QgZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KSA9PSB0aGlzLnJhbmdlc1tyYW5nZV1bMF0uZm9ybWF0KGZvcm1hdCkgJiYgdGhpcy5lbmREYXRlLmZvcm1hdChmb3JtYXQpID09IHRoaXMucmFuZ2VzW3JhbmdlXVsxXS5mb3JtYXQoZm9ybWF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21SYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3NlbkxhYmVsID0gdGhpcy5jb250YWluZXIuZmluZCgnLnJhbmdlcyBsaTplcSgnICsgaSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLmF0dHIoJ2RhdGEtcmFuZ2Uta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZ25vcmUgdGltZXMgd2hlbiBjb21wYXJpbmcgZGF0ZXMgaWYgdGltZSBwaWNrZXIgaXMgbm90IGVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgPT0gdGhpcy5yYW5nZXNbcmFuZ2VdWzBdLmZvcm1hdCgnWVlZWS1NTS1ERCcpICYmIHRoaXMuZW5kRGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLnJhbmdlc1tyYW5nZV1bMV0uZm9ybWF0KCdZWVlZLU1NLUREJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9zZW5MYWJlbCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5yYW5nZXMgbGk6ZXEoJyArIGkgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKS5hdHRyKCdkYXRhLXJhbmdlLWtleScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1c3RvbVJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q3VzdG9tUmFuZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvc2VuTGFiZWwgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucmFuZ2VzIGxpOmxhc3QnKS5hZGRDbGFzcygnYWN0aXZlJykuYXR0cignZGF0YS1yYW5nZS1rZXknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9zZW5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYWxlbmRhcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsaWNrQXBwbHk6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGlja0NhbmNlbDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMub2xkU3RhcnREYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLm9sZEVuZERhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlcignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vbnRoT3JZZWFyQ2hhbmdlZDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgaXNMZWZ0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRycC1jYWxlbmRhcicpLmhhc0NsYXNzKCdsZWZ0JyksXHJcbiAgICAgICAgICAgICAgICBsZWZ0T3JSaWdodCA9IGlzTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBjYWwgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLicrbGVmdE9yUmlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gTW9udGggbXVzdCBiZSBOdW1iZXIgZm9yIG5ldyBtb21lbnQgdmVyc2lvbnNcclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gcGFyc2VJbnQoY2FsLmZpbmQoJy5tb250aHNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFyID0gY2FsLmZpbmQoJy55ZWFyc2VsZWN0JykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHllYXIgPCB0aGlzLnN0YXJ0RGF0ZS55ZWFyKCkgfHwgKHllYXIgPT0gdGhpcy5zdGFydERhdGUueWVhcigpICYmIG1vbnRoIDwgdGhpcy5zdGFydERhdGUubW9udGgoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMuc3RhcnREYXRlLm1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IHRoaXMuc3RhcnREYXRlLnllYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWluRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHllYXIgPCB0aGlzLm1pbkRhdGUueWVhcigpIHx8ICh5ZWFyID09IHRoaXMubWluRGF0ZS55ZWFyKCkgJiYgbW9udGggPCB0aGlzLm1pbkRhdGUubW9udGgoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMubWluRGF0ZS5tb250aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXIgPSB0aGlzLm1pbkRhdGUueWVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeWVhciA+IHRoaXMubWF4RGF0ZS55ZWFyKCkgfHwgKHllYXIgPT0gdGhpcy5tYXhEYXRlLnllYXIoKSAmJiBtb250aCA+IHRoaXMubWF4RGF0ZS5tb250aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5tYXhEYXRlLm1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IHRoaXMubWF4RGF0ZS55ZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdENhbGVuZGFyLm1vbnRoLm1vbnRoKG1vbnRoKS55ZWFyKHllYXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlua2VkQ2FsZW5kYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYWxlbmRhci5tb250aCA9IHRoaXMubGVmdENhbGVuZGFyLm1vbnRoLmNsb25lKCkuYWRkKDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLm1vbnRoKG1vbnRoKS55ZWFyKHllYXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlua2VkQ2FsZW5kYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENhbGVuZGFyLm1vbnRoID0gdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmNsb25lKCkuc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0aW1lQ2hhbmdlZDogZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcnAtY2FsZW5kYXInKSxcclxuICAgICAgICAgICAgICAgIGlzTGVmdCA9IGNhbC5oYXNDbGFzcygnbGVmdCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhvdXIgPSBwYXJzZUludChjYWwuZmluZCgnLmhvdXJzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlID0gcGFyc2VJbnQoY2FsLmZpbmQoJy5taW51dGVzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obWludXRlKSkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQoY2FsLmZpbmQoJy5taW51dGVzZWxlY3Qgb3B0aW9uOmxhc3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmQgPSB0aGlzLnRpbWVQaWNrZXJTZWNvbmRzID8gcGFyc2VJbnQoY2FsLmZpbmQoJy5zZWNvbmRzZWxlY3QnKS52YWwoKSwgMTApIDogMDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50aW1lUGlja2VyMjRIb3VyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW1wbSA9IGNhbC5maW5kKCcuYW1wbXNlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgaG91ciA8IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBob3VyID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0LmhvdXIoaG91cik7XHJcbiAgICAgICAgICAgICAgICBzdGFydC5taW51dGUobWludXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0LnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5kRGF0ZSAmJiB0aGlzLmVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgPT0gc3RhcnQuZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgdGhpcy5lbmREYXRlLmlzQmVmb3JlKHN0YXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShzdGFydC5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSB0aGlzLmVuZERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGVuZC5ob3VyKGhvdXIpO1xyXG4gICAgICAgICAgICAgICAgZW5kLm1pbnV0ZShtaW51dGUpO1xyXG4gICAgICAgICAgICAgICAgZW5kLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBjYWxlbmRhcnMgc28gYWxsIGNsaWNrYWJsZSBkYXRlcyByZWZsZWN0IHRoZSBuZXcgdGltZSBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBmb3JtIGlucHV0cyBhYm92ZSB0aGUgY2FsZW5kYXJzIHdpdGggdGhlIG5ldyB0aW1lXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybUlucHV0cygpO1xyXG5cclxuICAgICAgICAgICAgLy9yZS1yZW5kZXIgdGhlIHRpbWUgcGlja2VycyBiZWNhdXNlIGNoYW5naW5nIG9uZSBzZWxlY3Rpb24gY2FuIGFmZmVjdCB3aGF0J3MgZW5hYmxlZCBpbiBhbm90aGVyXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGltZVBpY2tlcignbGVmdCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRpbWVQaWNrZXIoJ3JpZ2h0Jyk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVsZW1lbnRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuaXMoJ2lucHV0JykpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQudmFsKCkubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0ZVN0cmluZyA9IHRoaXMuZWxlbWVudC52YWwoKS5zcGxpdCh0aGlzLmxvY2FsZS5zZXBhcmF0b3IpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW5kID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoZGF0ZVN0cmluZ1swXSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGVuZCA9IG1vbWVudChkYXRlU3RyaW5nWzFdLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVEYXRlUGlja2VyIHx8IHN0YXJ0ID09PSBudWxsIHx8IGVuZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQodGhpcy5lbGVtZW50LnZhbCgpLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc3RhcnQuaXNWYWxpZCgpIHx8ICFlbmQuaXNWYWxpZCgpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShzdGFydCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShlbmQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vaGlkZSBvbiB0YWIgb3IgZW50ZXJcclxuICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT09IDkpIHx8IChlLmtleUNvZGUgPT09IDEzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaGlkZSBvbiBlc2MgYW5kIHByZXZlbnQgcHJvcGFnYXRpb25cclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVFbGVtZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5pcygnaW5wdXQnKSAmJiB0aGlzLmF1dG9VcGRhdGVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5zdGFydERhdGUuZm9ybWF0KHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHRoaXMubG9jYWxlLnNlcGFyYXRvciArIHRoaXMuZW5kRGF0ZS5mb3JtYXQodGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5lbGVtZW50LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9mZignLmRhdGVyYW5nZXBpY2tlcicpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uZGF0ZXJhbmdlcGlja2VyID0gZnVuY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgaW1wbGVtZW50T3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmZuLmRhdGVyYW5nZXBpY2tlci5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoZWwuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykpXHJcbiAgICAgICAgICAgICAgICBlbC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZWwuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJywgbmV3IERhdGVSYW5nZVBpY2tlcihlbCwgaW1wbGVtZW50T3B0aW9ucywgY2FsbGJhY2spKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIERhdGVSYW5nZVBpY2tlcjtcclxuXHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bootstrap-daterangepicker/daterangepicker.js\n");

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
        },

        /***/"moment":
        /*!*************************!*\
          !*** external "moment" ***!
          \*************************/
        /***/
        function moment(module) {
          "use strict";

          module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

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
      function __nested_webpack_require_184787__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_184787__);
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
        /******/__nested_webpack_require_184787__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_184787__.d(getter, {
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
        /******/__nested_webpack_require_184787__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_184787__.o(definition, key) && !__nested_webpack_require_184787__.o(exports, key)) {
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
        /******/__nested_webpack_require_184787__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      !function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_184787__.r = function (exports) {
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
      var __webpack_exports__ = __nested_webpack_require_184787__("./libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js");
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


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});