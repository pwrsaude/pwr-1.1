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

/***/ "./resources/assets/vendor/libs/typeahead-js/typeahead.js":
/*!****************************************************************!*\
  !*** ./resources/assets/vendor/libs/typeahead-js/typeahead.js ***!
  \****************************************************************/
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
        /***/"./libs/typeahead-js/typeahead.js":
        /*!****************************************!*\
          !*** ./libs/typeahead-js/typeahead.js ***!
          \****************************************/
        /***/
        function libsTypeaheadJsTypeaheadJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
          "use strict";

          eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeahead\": function() { return /* reexport default from dynamic */ typeahead_js_dist_typeahead_bundle__WEBPACK_IMPORTED_MODULE_0___default.a; }\n/* harmony export */ });\n/* harmony import */ var typeahead_js_dist_typeahead_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeahead.js/dist/typeahead.bundle */ \"./node_modules/typeahead.js/dist/typeahead.bundle.js\");\n/* harmony import */ var typeahead_js_dist_typeahead_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeahead_js_dist_typeahead_bundle__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3R5cGVhaGVhZC1qcy90eXBlYWhlYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU25lYXQvLi9saWJzL3R5cGVhaGVhZC1qcy90eXBlYWhlYWQuanM/N2FiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZWFoZWFkIGZyb20gJ3R5cGVhaGVhZC5qcy9kaXN0L3R5cGVhaGVhZC5idW5kbGUnO1xyXG5cclxuZXhwb3J0IHsgdHlwZWFoZWFkIH07XHJcbiJdLCJuYW1lcyI6WyJ0eXBlYWhlYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/typeahead-js/typeahead.js\n");

          /***/
        },

        /***/"./node_modules/typeahead.js/dist/typeahead.bundle.js":
        /*!************************************************************!*\
          !*** ./node_modules/typeahead.js/dist/typeahead.bundle.js ***!
          \************************************************************/
        /***/
        function node_modulesTypeaheadJsDistTypeaheadBundleJs(module, exports, __webpack_require__) {
          eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * typeahead.js 0.11.1\n * https://github.com/twitter/typeahead.js\n * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT\n */\n\n(function(root, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"jquery\") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a0) {\n            return root[\"Bloodhound\"] = factory(a0);\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})(this, function($) {\n    var _ = function() {\n        \"use strict\";\n        return {\n            isMsie: function() {\n                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\\d+(.\\d+)?)/i)[2] : false;\n            },\n            isBlankString: function(str) {\n                return !str || /^\\s*$/.test(str);\n            },\n            escapeRegExChars: function(str) {\n                return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \"\\\\$&\");\n            },\n            isString: function(obj) {\n                return typeof obj === \"string\";\n            },\n            isNumber: function(obj) {\n                return typeof obj === \"number\";\n            },\n            isArray: $.isArray,\n            isFunction: $.isFunction,\n            isObject: $.isPlainObject,\n            isUndefined: function(obj) {\n                return typeof obj === \"undefined\";\n            },\n            isElement: function(obj) {\n                return !!(obj && obj.nodeType === 1);\n            },\n            isJQuery: function(obj) {\n                return obj instanceof $;\n            },\n            toStr: function toStr(s) {\n                return _.isUndefined(s) || s === null ? \"\" : s + \"\";\n            },\n            bind: $.proxy,\n            each: function(collection, cb) {\n                $.each(collection, reverseArgs);\n                function reverseArgs(index, value) {\n                    return cb(value, index);\n                }\n            },\n            map: $.map,\n            filter: $.grep,\n            every: function(obj, test) {\n                var result = true;\n                if (!obj) {\n                    return result;\n                }\n                $.each(obj, function(key, val) {\n                    if (!(result = test.call(null, val, key, obj))) {\n                        return false;\n                    }\n                });\n                return !!result;\n            },\n            some: function(obj, test) {\n                var result = false;\n                if (!obj) {\n                    return result;\n                }\n                $.each(obj, function(key, val) {\n                    if (result = test.call(null, val, key, obj)) {\n                        return false;\n                    }\n                });\n                return !!result;\n            },\n            mixin: $.extend,\n            identity: function(x) {\n                return x;\n            },\n            clone: function(obj) {\n                return $.extend(true, {}, obj);\n            },\n            getIdGenerator: function() {\n                var counter = 0;\n                return function() {\n                    return counter++;\n                };\n            },\n            templatify: function templatify(obj) {\n                return $.isFunction(obj) ? obj : template;\n                function template() {\n                    return String(obj);\n                }\n            },\n            defer: function(fn) {\n                setTimeout(fn, 0);\n            },\n            debounce: function(func, wait, immediate) {\n                var timeout, result;\n                return function() {\n                    var context = this, args = arguments, later, callNow;\n                    later = function() {\n                        timeout = null;\n                        if (!immediate) {\n                            result = func.apply(context, args);\n                        }\n                    };\n                    callNow = immediate && !timeout;\n                    clearTimeout(timeout);\n                    timeout = setTimeout(later, wait);\n                    if (callNow) {\n                        result = func.apply(context, args);\n                    }\n                    return result;\n                };\n            },\n            throttle: function(func, wait) {\n                var context, args, timeout, result, previous, later;\n                previous = 0;\n                later = function() {\n                    previous = new Date();\n                    timeout = null;\n                    result = func.apply(context, args);\n                };\n                return function() {\n                    var now = new Date(), remaining = wait - (now - previous);\n                    context = this;\n                    args = arguments;\n                    if (remaining <= 0) {\n                        clearTimeout(timeout);\n                        timeout = null;\n                        previous = now;\n                        result = func.apply(context, args);\n                    } else if (!timeout) {\n                        timeout = setTimeout(later, remaining);\n                    }\n                    return result;\n                };\n            },\n            stringify: function(val) {\n                return _.isString(val) ? val : JSON.stringify(val);\n            },\n            noop: function() {}\n        };\n    }();\n    var VERSION = \"0.11.1\";\n    var tokenizers = function() {\n        \"use strict\";\n        return {\n            nonword: nonword,\n            whitespace: whitespace,\n            obj: {\n                nonword: getObjTokenizer(nonword),\n                whitespace: getObjTokenizer(whitespace)\n            }\n        };\n        function whitespace(str) {\n            str = _.toStr(str);\n            return str ? str.split(/\\s+/) : [];\n        }\n        function nonword(str) {\n            str = _.toStr(str);\n            return str ? str.split(/\\W+/) : [];\n        }\n        function getObjTokenizer(tokenizer) {\n            return function setKey(keys) {\n                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);\n                return function tokenize(o) {\n                    var tokens = [];\n                    _.each(keys, function(k) {\n                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));\n                    });\n                    return tokens;\n                };\n            };\n        }\n    }();\n    var LruCache = function() {\n        \"use strict\";\n        function LruCache(maxSize) {\n            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;\n            this.reset();\n            if (this.maxSize <= 0) {\n                this.set = this.get = $.noop;\n            }\n        }\n        _.mixin(LruCache.prototype, {\n            set: function set(key, val) {\n                var tailItem = this.list.tail, node;\n                if (this.size >= this.maxSize) {\n                    this.list.remove(tailItem);\n                    delete this.hash[tailItem.key];\n                    this.size--;\n                }\n                if (node = this.hash[key]) {\n                    node.val = val;\n                    this.list.moveToFront(node);\n                } else {\n                    node = new Node(key, val);\n                    this.list.add(node);\n                    this.hash[key] = node;\n                    this.size++;\n                }\n            },\n            get: function get(key) {\n                var node = this.hash[key];\n                if (node) {\n                    this.list.moveToFront(node);\n                    return node.val;\n                }\n            },\n            reset: function reset() {\n                this.size = 0;\n                this.hash = {};\n                this.list = new List();\n            }\n        });\n        function List() {\n            this.head = this.tail = null;\n        }\n        _.mixin(List.prototype, {\n            add: function add(node) {\n                if (this.head) {\n                    node.next = this.head;\n                    this.head.prev = node;\n                }\n                this.head = node;\n                this.tail = this.tail || node;\n            },\n            remove: function remove(node) {\n                node.prev ? node.prev.next = node.next : this.head = node.next;\n                node.next ? node.next.prev = node.prev : this.tail = node.prev;\n            },\n            moveToFront: function(node) {\n                this.remove(node);\n                this.add(node);\n            }\n        });\n        function Node(key, val) {\n            this.key = key;\n            this.val = val;\n            this.prev = this.next = null;\n        }\n        return LruCache;\n    }();\n    var PersistentStorage = function() {\n        \"use strict\";\n        var LOCAL_STORAGE;\n        try {\n            LOCAL_STORAGE = window.localStorage;\n            LOCAL_STORAGE.setItem(\"~~~\", \"!\");\n            LOCAL_STORAGE.removeItem(\"~~~\");\n        } catch (err) {\n            LOCAL_STORAGE = null;\n        }\n        function PersistentStorage(namespace, override) {\n            this.prefix = [ \"__\", namespace, \"__\" ].join(\"\");\n            this.ttlKey = \"__ttl__\";\n            this.keyMatcher = new RegExp(\"^\" + _.escapeRegExChars(this.prefix));\n            this.ls = override || LOCAL_STORAGE;\n            !this.ls && this._noop();\n        }\n        _.mixin(PersistentStorage.prototype, {\n            _prefix: function(key) {\n                return this.prefix + key;\n            },\n            _ttlKey: function(key) {\n                return this._prefix(key) + this.ttlKey;\n            },\n            _noop: function() {\n                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;\n            },\n            _safeSet: function(key, val) {\n                try {\n                    this.ls.setItem(key, val);\n                } catch (err) {\n                    if (err.name === \"QuotaExceededError\") {\n                        this.clear();\n                        this._noop();\n                    }\n                }\n            },\n            get: function(key) {\n                if (this.isExpired(key)) {\n                    this.remove(key);\n                }\n                return decode(this.ls.getItem(this._prefix(key)));\n            },\n            set: function(key, val, ttl) {\n                if (_.isNumber(ttl)) {\n                    this._safeSet(this._ttlKey(key), encode(now() + ttl));\n                } else {\n                    this.ls.removeItem(this._ttlKey(key));\n                }\n                return this._safeSet(this._prefix(key), encode(val));\n            },\n            remove: function(key) {\n                this.ls.removeItem(this._ttlKey(key));\n                this.ls.removeItem(this._prefix(key));\n                return this;\n            },\n            clear: function() {\n                var i, keys = gatherMatchingKeys(this.keyMatcher);\n                for (i = keys.length; i--; ) {\n                    this.remove(keys[i]);\n                }\n                return this;\n            },\n            isExpired: function(key) {\n                var ttl = decode(this.ls.getItem(this._ttlKey(key)));\n                return _.isNumber(ttl) && now() > ttl ? true : false;\n            }\n        });\n        return PersistentStorage;\n        function now() {\n            return new Date().getTime();\n        }\n        function encode(val) {\n            return JSON.stringify(_.isUndefined(val) ? null : val);\n        }\n        function decode(val) {\n            return $.parseJSON(val);\n        }\n        function gatherMatchingKeys(keyMatcher) {\n            var i, key, keys = [], len = LOCAL_STORAGE.length;\n            for (i = 0; i < len; i++) {\n                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {\n                    keys.push(key.replace(keyMatcher, \"\"));\n                }\n            }\n            return keys;\n        }\n    }();\n    var Transport = function() {\n        \"use strict\";\n        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);\n        function Transport(o) {\n            o = o || {};\n            this.cancelled = false;\n            this.lastReq = null;\n            this._send = o.transport;\n            this._get = o.limiter ? o.limiter(this._get) : this._get;\n            this._cache = o.cache === false ? new LruCache(0) : sharedCache;\n        }\n        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {\n            maxPendingRequests = num;\n        };\n        Transport.resetCache = function resetCache() {\n            sharedCache.reset();\n        };\n        _.mixin(Transport.prototype, {\n            _fingerprint: function fingerprint(o) {\n                o = o || {};\n                return o.url + o.type + $.param(o.data || {});\n            },\n            _get: function(o, cb) {\n                var that = this, fingerprint, jqXhr;\n                fingerprint = this._fingerprint(o);\n                if (this.cancelled || fingerprint !== this.lastReq) {\n                    return;\n                }\n                if (jqXhr = pendingRequests[fingerprint]) {\n                    jqXhr.done(done).fail(fail);\n                } else if (pendingRequestsCount < maxPendingRequests) {\n                    pendingRequestsCount++;\n                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);\n                } else {\n                    this.onDeckRequestArgs = [].slice.call(arguments, 0);\n                }\n                function done(resp) {\n                    cb(null, resp);\n                    that._cache.set(fingerprint, resp);\n                }\n                function fail() {\n                    cb(true);\n                }\n                function always() {\n                    pendingRequestsCount--;\n                    delete pendingRequests[fingerprint];\n                    if (that.onDeckRequestArgs) {\n                        that._get.apply(that, that.onDeckRequestArgs);\n                        that.onDeckRequestArgs = null;\n                    }\n                }\n            },\n            get: function(o, cb) {\n                var resp, fingerprint;\n                cb = cb || $.noop;\n                o = _.isString(o) ? {\n                    url: o\n                } : o || {};\n                fingerprint = this._fingerprint(o);\n                this.cancelled = false;\n                this.lastReq = fingerprint;\n                if (resp = this._cache.get(fingerprint)) {\n                    cb(null, resp);\n                } else {\n                    this._get(o, cb);\n                }\n            },\n            cancel: function() {\n                this.cancelled = true;\n            }\n        });\n        return Transport;\n    }();\n    var SearchIndex = window.SearchIndex = function() {\n        \"use strict\";\n        var CHILDREN = \"c\", IDS = \"i\";\n        function SearchIndex(o) {\n            o = o || {};\n            if (!o.datumTokenizer || !o.queryTokenizer) {\n                $.error(\"datumTokenizer and queryTokenizer are both required\");\n            }\n            this.identify = o.identify || _.stringify;\n            this.datumTokenizer = o.datumTokenizer;\n            this.queryTokenizer = o.queryTokenizer;\n            this.reset();\n        }\n        _.mixin(SearchIndex.prototype, {\n            bootstrap: function bootstrap(o) {\n                this.datums = o.datums;\n                this.trie = o.trie;\n            },\n            add: function(data) {\n                var that = this;\n                data = _.isArray(data) ? data : [ data ];\n                _.each(data, function(datum) {\n                    var id, tokens;\n                    that.datums[id = that.identify(datum)] = datum;\n                    tokens = normalizeTokens(that.datumTokenizer(datum));\n                    _.each(tokens, function(token) {\n                        var node, chars, ch;\n                        node = that.trie;\n                        chars = token.split(\"\");\n                        while (ch = chars.shift()) {\n                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());\n                            node[IDS].push(id);\n                        }\n                    });\n                });\n            },\n            get: function get(ids) {\n                var that = this;\n                return _.map(ids, function(id) {\n                    return that.datums[id];\n                });\n            },\n            search: function search(query) {\n                var that = this, tokens, matches;\n                tokens = normalizeTokens(this.queryTokenizer(query));\n                _.each(tokens, function(token) {\n                    var node, chars, ch, ids;\n                    if (matches && matches.length === 0) {\n                        return false;\n                    }\n                    node = that.trie;\n                    chars = token.split(\"\");\n                    while (node && (ch = chars.shift())) {\n                        node = node[CHILDREN][ch];\n                    }\n                    if (node && chars.length === 0) {\n                        ids = node[IDS].slice(0);\n                        matches = matches ? getIntersection(matches, ids) : ids;\n                    } else {\n                        matches = [];\n                        return false;\n                    }\n                });\n                return matches ? _.map(unique(matches), function(id) {\n                    return that.datums[id];\n                }) : [];\n            },\n            all: function all() {\n                var values = [];\n                for (var key in this.datums) {\n                    values.push(this.datums[key]);\n                }\n                return values;\n            },\n            reset: function reset() {\n                this.datums = {};\n                this.trie = newNode();\n            },\n            serialize: function serialize() {\n                return {\n                    datums: this.datums,\n                    trie: this.trie\n                };\n            }\n        });\n        return SearchIndex;\n        function normalizeTokens(tokens) {\n            tokens = _.filter(tokens, function(token) {\n                return !!token;\n            });\n            tokens = _.map(tokens, function(token) {\n                return token.toLowerCase();\n            });\n            return tokens;\n        }\n        function newNode() {\n            var node = {};\n            node[IDS] = [];\n            node[CHILDREN] = {};\n            return node;\n        }\n        function unique(array) {\n            var seen = {}, uniques = [];\n            for (var i = 0, len = array.length; i < len; i++) {\n                if (!seen[array[i]]) {\n                    seen[array[i]] = true;\n                    uniques.push(array[i]);\n                }\n            }\n            return uniques;\n        }\n        function getIntersection(arrayA, arrayB) {\n            var ai = 0, bi = 0, intersection = [];\n            arrayA = arrayA.sort();\n            arrayB = arrayB.sort();\n            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;\n            while (ai < lenArrayA && bi < lenArrayB) {\n                if (arrayA[ai] < arrayB[bi]) {\n                    ai++;\n                } else if (arrayA[ai] > arrayB[bi]) {\n                    bi++;\n                } else {\n                    intersection.push(arrayA[ai]);\n                    ai++;\n                    bi++;\n                }\n            }\n            return intersection;\n        }\n    }();\n    var Prefetch = function() {\n        \"use strict\";\n        var keys;\n        keys = {\n            data: \"data\",\n            protocol: \"protocol\",\n            thumbprint: \"thumbprint\"\n        };\n        function Prefetch(o) {\n            this.url = o.url;\n            this.ttl = o.ttl;\n            this.cache = o.cache;\n            this.prepare = o.prepare;\n            this.transform = o.transform;\n            this.transport = o.transport;\n            this.thumbprint = o.thumbprint;\n            this.storage = new PersistentStorage(o.cacheKey);\n        }\n        _.mixin(Prefetch.prototype, {\n            _settings: function settings() {\n                return {\n                    url: this.url,\n                    type: \"GET\",\n                    dataType: \"json\"\n                };\n            },\n            store: function store(data) {\n                if (!this.cache) {\n                    return;\n                }\n                this.storage.set(keys.data, data, this.ttl);\n                this.storage.set(keys.protocol, location.protocol, this.ttl);\n                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);\n            },\n            fromCache: function fromCache() {\n                var stored = {}, isExpired;\n                if (!this.cache) {\n                    return null;\n                }\n                stored.data = this.storage.get(keys.data);\n                stored.protocol = this.storage.get(keys.protocol);\n                stored.thumbprint = this.storage.get(keys.thumbprint);\n                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;\n                return stored.data && !isExpired ? stored.data : null;\n            },\n            fromNetwork: function(cb) {\n                var that = this, settings;\n                if (!cb) {\n                    return;\n                }\n                settings = this.prepare(this._settings());\n                this.transport(settings).fail(onError).done(onResponse);\n                function onError() {\n                    cb(true);\n                }\n                function onResponse(resp) {\n                    cb(null, that.transform(resp));\n                }\n            },\n            clear: function clear() {\n                this.storage.clear();\n                return this;\n            }\n        });\n        return Prefetch;\n    }();\n    var Remote = function() {\n        \"use strict\";\n        function Remote(o) {\n            this.url = o.url;\n            this.prepare = o.prepare;\n            this.transform = o.transform;\n            this.transport = new Transport({\n                cache: o.cache,\n                limiter: o.limiter,\n                transport: o.transport\n            });\n        }\n        _.mixin(Remote.prototype, {\n            _settings: function settings() {\n                return {\n                    url: this.url,\n                    type: \"GET\",\n                    dataType: \"json\"\n                };\n            },\n            get: function get(query, cb) {\n                var that = this, settings;\n                if (!cb) {\n                    return;\n                }\n                query = query || \"\";\n                settings = this.prepare(query, this._settings());\n                return this.transport.get(settings, onResponse);\n                function onResponse(err, resp) {\n                    err ? cb([]) : cb(that.transform(resp));\n                }\n            },\n            cancelLastRequest: function cancelLastRequest() {\n                this.transport.cancel();\n            }\n        });\n        return Remote;\n    }();\n    var oParser = function() {\n        \"use strict\";\n        return function parse(o) {\n            var defaults, sorter;\n            defaults = {\n                initialize: true,\n                identify: _.stringify,\n                datumTokenizer: null,\n                queryTokenizer: null,\n                sufficient: 5,\n                sorter: null,\n                local: [],\n                prefetch: null,\n                remote: null\n            };\n            o = _.mixin(defaults, o || {});\n            !o.datumTokenizer && $.error(\"datumTokenizer is required\");\n            !o.queryTokenizer && $.error(\"queryTokenizer is required\");\n            sorter = o.sorter;\n            o.sorter = sorter ? function(x) {\n                return x.sort(sorter);\n            } : _.identity;\n            o.local = _.isFunction(o.local) ? o.local() : o.local;\n            o.prefetch = parsePrefetch(o.prefetch);\n            o.remote = parseRemote(o.remote);\n            return o;\n        };\n        function parsePrefetch(o) {\n            var defaults;\n            if (!o) {\n                return null;\n            }\n            defaults = {\n                url: null,\n                ttl: 24 * 60 * 60 * 1e3,\n                cache: true,\n                cacheKey: null,\n                thumbprint: \"\",\n                prepare: _.identity,\n                transform: _.identity,\n                transport: null\n            };\n            o = _.isString(o) ? {\n                url: o\n            } : o;\n            o = _.mixin(defaults, o);\n            !o.url && $.error(\"prefetch requires url to be set\");\n            o.transform = o.filter || o.transform;\n            o.cacheKey = o.cacheKey || o.url;\n            o.thumbprint = VERSION + o.thumbprint;\n            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;\n            return o;\n        }\n        function parseRemote(o) {\n            var defaults;\n            if (!o) {\n                return;\n            }\n            defaults = {\n                url: null,\n                cache: true,\n                prepare: null,\n                replace: null,\n                wildcard: null,\n                limiter: null,\n                rateLimitBy: \"debounce\",\n                rateLimitWait: 300,\n                transform: _.identity,\n                transport: null\n            };\n            o = _.isString(o) ? {\n                url: o\n            } : o;\n            o = _.mixin(defaults, o);\n            !o.url && $.error(\"remote requires url to be set\");\n            o.transform = o.filter || o.transform;\n            o.prepare = toRemotePrepare(o);\n            o.limiter = toLimiter(o);\n            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;\n            delete o.replace;\n            delete o.wildcard;\n            delete o.rateLimitBy;\n            delete o.rateLimitWait;\n            return o;\n        }\n        function toRemotePrepare(o) {\n            var prepare, replace, wildcard;\n            prepare = o.prepare;\n            replace = o.replace;\n            wildcard = o.wildcard;\n            if (prepare) {\n                return prepare;\n            }\n            if (replace) {\n                prepare = prepareByReplace;\n            } else if (o.wildcard) {\n                prepare = prepareByWildcard;\n            } else {\n                prepare = idenityPrepare;\n            }\n            return prepare;\n            function prepareByReplace(query, settings) {\n                settings.url = replace(settings.url, query);\n                return settings;\n            }\n            function prepareByWildcard(query, settings) {\n                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));\n                return settings;\n            }\n            function idenityPrepare(query, settings) {\n                return settings;\n            }\n        }\n        function toLimiter(o) {\n            var limiter, method, wait;\n            limiter = o.limiter;\n            method = o.rateLimitBy;\n            wait = o.rateLimitWait;\n            if (!limiter) {\n                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);\n            }\n            return limiter;\n            function debounce(wait) {\n                return function debounce(fn) {\n                    return _.debounce(fn, wait);\n                };\n            }\n            function throttle(wait) {\n                return function throttle(fn) {\n                    return _.throttle(fn, wait);\n                };\n            }\n        }\n        function callbackToDeferred(fn) {\n            return function wrapper(o) {\n                var deferred = $.Deferred();\n                fn(o, onSuccess, onError);\n                return deferred;\n                function onSuccess(resp) {\n                    _.defer(function() {\n                        deferred.resolve(resp);\n                    });\n                }\n                function onError(err) {\n                    _.defer(function() {\n                        deferred.reject(err);\n                    });\n                }\n            };\n        }\n    }();\n    var Bloodhound = function() {\n        \"use strict\";\n        var old;\n        old = window && window.Bloodhound;\n        function Bloodhound(o) {\n            o = oParser(o);\n            this.sorter = o.sorter;\n            this.identify = o.identify;\n            this.sufficient = o.sufficient;\n            this.local = o.local;\n            this.remote = o.remote ? new Remote(o.remote) : null;\n            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;\n            this.index = new SearchIndex({\n                identify: this.identify,\n                datumTokenizer: o.datumTokenizer,\n                queryTokenizer: o.queryTokenizer\n            });\n            o.initialize !== false && this.initialize();\n        }\n        Bloodhound.noConflict = function noConflict() {\n            window && (window.Bloodhound = old);\n            return Bloodhound;\n        };\n        Bloodhound.tokenizers = tokenizers;\n        _.mixin(Bloodhound.prototype, {\n            __ttAdapter: function ttAdapter() {\n                var that = this;\n                return this.remote ? withAsync : withoutAsync;\n                function withAsync(query, sync, async) {\n                    return that.search(query, sync, async);\n                }\n                function withoutAsync(query, sync) {\n                    return that.search(query, sync);\n                }\n            },\n            _loadPrefetch: function loadPrefetch() {\n                var that = this, deferred, serialized;\n                deferred = $.Deferred();\n                if (!this.prefetch) {\n                    deferred.resolve();\n                } else if (serialized = this.prefetch.fromCache()) {\n                    this.index.bootstrap(serialized);\n                    deferred.resolve();\n                } else {\n                    this.prefetch.fromNetwork(done);\n                }\n                return deferred.promise();\n                function done(err, data) {\n                    if (err) {\n                        return deferred.reject();\n                    }\n                    that.add(data);\n                    that.prefetch.store(that.index.serialize());\n                    deferred.resolve();\n                }\n            },\n            _initialize: function initialize() {\n                var that = this, deferred;\n                this.clear();\n                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);\n                return this.initPromise;\n                function addLocalToIndex() {\n                    that.add(that.local);\n                }\n            },\n            initialize: function initialize(force) {\n                return !this.initPromise || force ? this._initialize() : this.initPromise;\n            },\n            add: function add(data) {\n                this.index.add(data);\n                return this;\n            },\n            get: function get(ids) {\n                ids = _.isArray(ids) ? ids : [].slice.call(arguments);\n                return this.index.get(ids);\n            },\n            search: function search(query, sync, async) {\n                var that = this, local;\n                local = this.sorter(this.index.search(query));\n                sync(this.remote ? local.slice() : local);\n                if (this.remote && local.length < this.sufficient) {\n                    this.remote.get(query, processRemote);\n                } else if (this.remote) {\n                    this.remote.cancelLastRequest();\n                }\n                return this;\n                function processRemote(remote) {\n                    var nonDuplicates = [];\n                    _.each(remote, function(r) {\n                        !_.some(local, function(l) {\n                            return that.identify(r) === that.identify(l);\n                        }) && nonDuplicates.push(r);\n                    });\n                    async && async(nonDuplicates);\n                }\n            },\n            all: function all() {\n                return this.index.all();\n            },\n            clear: function clear() {\n                this.index.reset();\n                return this;\n            },\n            clearPrefetchCache: function clearPrefetchCache() {\n                this.prefetch && this.prefetch.clear();\n                return this;\n            },\n            clearRemoteCache: function clearRemoteCache() {\n                Transport.resetCache();\n                return this;\n            },\n            ttAdapter: function ttAdapter() {\n                return this.__ttAdapter();\n            }\n        });\n        return Bloodhound;\n    }();\n    return Bloodhound;\n});\n\n(function(root, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ \"jquery\") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a0) {\n            return factory(a0);\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})(this, function($) {\n    var _ = function() {\n        \"use strict\";\n        return {\n            isMsie: function() {\n                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\\d+(.\\d+)?)/i)[2] : false;\n            },\n            isBlankString: function(str) {\n                return !str || /^\\s*$/.test(str);\n            },\n            escapeRegExChars: function(str) {\n                return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \"\\\\$&\");\n            },\n            isString: function(obj) {\n                return typeof obj === \"string\";\n            },\n            isNumber: function(obj) {\n                return typeof obj === \"number\";\n            },\n            isArray: $.isArray,\n            isFunction: $.isFunction,\n            isObject: $.isPlainObject,\n            isUndefined: function(obj) {\n                return typeof obj === \"undefined\";\n            },\n            isElement: function(obj) {\n                return !!(obj && obj.nodeType === 1);\n            },\n            isJQuery: function(obj) {\n                return obj instanceof $;\n            },\n            toStr: function toStr(s) {\n                return _.isUndefined(s) || s === null ? \"\" : s + \"\";\n            },\n            bind: $.proxy,\n            each: function(collection, cb) {\n                $.each(collection, reverseArgs);\n                function reverseArgs(index, value) {\n                    return cb(value, index);\n                }\n            },\n            map: $.map,\n            filter: $.grep,\n            every: function(obj, test) {\n                var result = true;\n                if (!obj) {\n                    return result;\n                }\n                $.each(obj, function(key, val) {\n                    if (!(result = test.call(null, val, key, obj))) {\n                        return false;\n                    }\n                });\n                return !!result;\n            },\n            some: function(obj, test) {\n                var result = false;\n                if (!obj) {\n                    return result;\n                }\n                $.each(obj, function(key, val) {\n                    if (result = test.call(null, val, key, obj)) {\n                        return false;\n                    }\n                });\n                return !!result;\n            },\n            mixin: $.extend,\n            identity: function(x) {\n                return x;\n            },\n            clone: function(obj) {\n                return $.extend(true, {}, obj);\n            },\n            getIdGenerator: function() {\n                var counter = 0;\n                return function() {\n                    return counter++;\n                };\n            },\n            templatify: function templatify(obj) {\n                return $.isFunction(obj) ? obj : template;\n                function template() {\n                    return String(obj);\n                }\n            },\n            defer: function(fn) {\n                setTimeout(fn, 0);\n            },\n            debounce: function(func, wait, immediate) {\n                var timeout, result;\n                return function() {\n                    var context = this, args = arguments, later, callNow;\n                    later = function() {\n                        timeout = null;\n                        if (!immediate) {\n                            result = func.apply(context, args);\n                        }\n                    };\n                    callNow = immediate && !timeout;\n                    clearTimeout(timeout);\n                    timeout = setTimeout(later, wait);\n                    if (callNow) {\n                        result = func.apply(context, args);\n                    }\n                    return result;\n                };\n            },\n            throttle: function(func, wait) {\n                var context, args, timeout, result, previous, later;\n                previous = 0;\n                later = function() {\n                    previous = new Date();\n                    timeout = null;\n                    result = func.apply(context, args);\n                };\n                return function() {\n                    var now = new Date(), remaining = wait - (now - previous);\n                    context = this;\n                    args = arguments;\n                    if (remaining <= 0) {\n                        clearTimeout(timeout);\n                        timeout = null;\n                        previous = now;\n                        result = func.apply(context, args);\n                    } else if (!timeout) {\n                        timeout = setTimeout(later, remaining);\n                    }\n                    return result;\n                };\n            },\n            stringify: function(val) {\n                return _.isString(val) ? val : JSON.stringify(val);\n            },\n            noop: function() {}\n        };\n    }();\n    var WWW = function() {\n        \"use strict\";\n        var defaultClassNames = {\n            wrapper: \"twitter-typeahead\",\n            input: \"tt-input\",\n            hint: \"tt-hint\",\n            menu: \"tt-menu\",\n            dataset: \"tt-dataset\",\n            suggestion: \"tt-suggestion\",\n            selectable: \"tt-selectable\",\n            empty: \"tt-empty\",\n            open: \"tt-open\",\n            cursor: \"tt-cursor\",\n            highlight: \"tt-highlight\"\n        };\n        return build;\n        function build(o) {\n            var www, classes;\n            classes = _.mixin({}, defaultClassNames, o);\n            www = {\n                css: buildCss(),\n                classes: classes,\n                html: buildHtml(classes),\n                selectors: buildSelectors(classes)\n            };\n            return {\n                css: www.css,\n                html: www.html,\n                classes: www.classes,\n                selectors: www.selectors,\n                mixin: function(o) {\n                    _.mixin(o, www);\n                }\n            };\n        }\n        function buildHtml(c) {\n            return {\n                wrapper: '<span class=\"' + c.wrapper + '\"></span>',\n                menu: '<div class=\"' + c.menu + '\"></div>'\n            };\n        }\n        function buildSelectors(classes) {\n            var selectors = {};\n            _.each(classes, function(v, k) {\n                selectors[k] = \".\" + v;\n            });\n            return selectors;\n        }\n        function buildCss() {\n            var css = {\n                wrapper: {\n                    position: \"relative\",\n                    display: \"inline-block\"\n                },\n                hint: {\n                    position: \"absolute\",\n                    top: \"0\",\n                    left: \"0\",\n                    borderColor: \"transparent\",\n                    boxShadow: \"none\",\n                    opacity: \"1\"\n                },\n                input: {\n                    position: \"relative\",\n                    verticalAlign: \"top\",\n                    backgroundColor: \"transparent\"\n                },\n                inputWithNoHint: {\n                    position: \"relative\",\n                    verticalAlign: \"top\"\n                },\n                menu: {\n                    position: \"absolute\",\n                    top: \"100%\",\n                    left: \"0\",\n                    zIndex: \"100\",\n                    display: \"none\"\n                },\n                ltr: {\n                    left: \"0\",\n                    right: \"auto\"\n                },\n                rtl: {\n                    left: \"auto\",\n                    right: \" 0\"\n                }\n            };\n            if (_.isMsie()) {\n                _.mixin(css.input, {\n                    backgroundImage: \"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)\"\n                });\n            }\n            return css;\n        }\n    }();\n    var EventBus = function() {\n        \"use strict\";\n        var namespace, deprecationMap;\n        namespace = \"typeahead:\";\n        deprecationMap = {\n            render: \"rendered\",\n            cursorchange: \"cursorchanged\",\n            select: \"selected\",\n            autocomplete: \"autocompleted\"\n        };\n        function EventBus(o) {\n            if (!o || !o.el) {\n                $.error(\"EventBus initialized without el\");\n            }\n            this.$el = $(o.el);\n        }\n        _.mixin(EventBus.prototype, {\n            _trigger: function(type, args) {\n                var $e;\n                $e = $.Event(namespace + type);\n                (args = args || []).unshift($e);\n                this.$el.trigger.apply(this.$el, args);\n                return $e;\n            },\n            before: function(type) {\n                var args, $e;\n                args = [].slice.call(arguments, 1);\n                $e = this._trigger(\"before\" + type, args);\n                return $e.isDefaultPrevented();\n            },\n            trigger: function(type) {\n                var deprecatedType;\n                this._trigger(type, [].slice.call(arguments, 1));\n                if (deprecatedType = deprecationMap[type]) {\n                    this._trigger(deprecatedType, [].slice.call(arguments, 1));\n                }\n            }\n        });\n        return EventBus;\n    }();\n    var EventEmitter = function() {\n        \"use strict\";\n        var splitter = /\\s+/, nextTick = getNextTick();\n        return {\n            onSync: onSync,\n            onAsync: onAsync,\n            off: off,\n            trigger: trigger\n        };\n        function on(method, types, cb, context) {\n            var type;\n            if (!cb) {\n                return this;\n            }\n            types = types.split(splitter);\n            cb = context ? bindContext(cb, context) : cb;\n            this._callbacks = this._callbacks || {};\n            while (type = types.shift()) {\n                this._callbacks[type] = this._callbacks[type] || {\n                    sync: [],\n                    async: []\n                };\n                this._callbacks[type][method].push(cb);\n            }\n            return this;\n        }\n        function onAsync(types, cb, context) {\n            return on.call(this, \"async\", types, cb, context);\n        }\n        function onSync(types, cb, context) {\n            return on.call(this, \"sync\", types, cb, context);\n        }\n        function off(types) {\n            var type;\n            if (!this._callbacks) {\n                return this;\n            }\n            types = types.split(splitter);\n            while (type = types.shift()) {\n                delete this._callbacks[type];\n            }\n            return this;\n        }\n        function trigger(types) {\n            var type, callbacks, args, syncFlush, asyncFlush;\n            if (!this._callbacks) {\n                return this;\n            }\n            types = types.split(splitter);\n            args = [].slice.call(arguments, 1);\n            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {\n                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));\n                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));\n                syncFlush() && nextTick(asyncFlush);\n            }\n            return this;\n        }\n        function getFlush(callbacks, context, args) {\n            return flush;\n            function flush() {\n                var cancelled;\n                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {\n                    cancelled = callbacks[i].apply(context, args) === false;\n                }\n                return !cancelled;\n            }\n        }\n        function getNextTick() {\n            var nextTickFn;\n            if (window.setImmediate) {\n                nextTickFn = function nextTickSetImmediate(fn) {\n                    setImmediate(function() {\n                        fn();\n                    });\n                };\n            } else {\n                nextTickFn = function nextTickSetTimeout(fn) {\n                    setTimeout(function() {\n                        fn();\n                    }, 0);\n                };\n            }\n            return nextTickFn;\n        }\n        function bindContext(fn, context) {\n            return fn.bind ? fn.bind(context) : function() {\n                fn.apply(context, [].slice.call(arguments, 0));\n            };\n        }\n    }();\n    var highlight = function(doc) {\n        \"use strict\";\n        var defaults = {\n            node: null,\n            pattern: null,\n            tagName: \"strong\",\n            className: null,\n            wordsOnly: false,\n            caseSensitive: false\n        };\n        return function hightlight(o) {\n            var regex;\n            o = _.mixin({}, defaults, o);\n            if (!o.node || !o.pattern) {\n                return;\n            }\n            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];\n            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);\n            traverse(o.node, hightlightTextNode);\n            function hightlightTextNode(textNode) {\n                var match, patternNode, wrapperNode;\n                if (match = regex.exec(textNode.data)) {\n                    wrapperNode = doc.createElement(o.tagName);\n                    o.className && (wrapperNode.className = o.className);\n                    patternNode = textNode.splitText(match.index);\n                    patternNode.splitText(match[0].length);\n                    wrapperNode.appendChild(patternNode.cloneNode(true));\n                    textNode.parentNode.replaceChild(wrapperNode, patternNode);\n                }\n                return !!match;\n            }\n            function traverse(el, hightlightTextNode) {\n                var childNode, TEXT_NODE_TYPE = 3;\n                for (var i = 0; i < el.childNodes.length; i++) {\n                    childNode = el.childNodes[i];\n                    if (childNode.nodeType === TEXT_NODE_TYPE) {\n                        i += hightlightTextNode(childNode) ? 1 : 0;\n                    } else {\n                        traverse(childNode, hightlightTextNode);\n                    }\n                }\n            }\n        };\n        function getRegex(patterns, caseSensitive, wordsOnly) {\n            var escapedPatterns = [], regexStr;\n            for (var i = 0, len = patterns.length; i < len; i++) {\n                escapedPatterns.push(_.escapeRegExChars(patterns[i]));\n            }\n            regexStr = wordsOnly ? \"\\\\b(\" + escapedPatterns.join(\"|\") + \")\\\\b\" : \"(\" + escapedPatterns.join(\"|\") + \")\";\n            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, \"i\");\n        }\n    }(window.document);\n    var Input = function() {\n        \"use strict\";\n        var specialKeyCodeMap;\n        specialKeyCodeMap = {\n            9: \"tab\",\n            27: \"esc\",\n            37: \"left\",\n            39: \"right\",\n            13: \"enter\",\n            38: \"up\",\n            40: \"down\"\n        };\n        function Input(o, www) {\n            o = o || {};\n            if (!o.input) {\n                $.error(\"input is missing\");\n            }\n            www.mixin(this);\n            this.$hint = $(o.hint);\n            this.$input = $(o.input);\n            this.query = this.$input.val();\n            this.queryWhenFocused = this.hasFocus() ? this.query : null;\n            this.$overflowHelper = buildOverflowHelper(this.$input);\n            this._checkLanguageDirection();\n            if (this.$hint.length === 0) {\n                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;\n            }\n        }\n        Input.normalizeQuery = function(str) {\n            return _.toStr(str).replace(/^\\s*/g, \"\").replace(/\\s{2,}/g, \" \");\n        };\n        _.mixin(Input.prototype, EventEmitter, {\n            _onBlur: function onBlur() {\n                this.resetInputValue();\n                this.trigger(\"blurred\");\n            },\n            _onFocus: function onFocus() {\n                this.queryWhenFocused = this.query;\n                this.trigger(\"focused\");\n            },\n            _onKeydown: function onKeydown($e) {\n                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];\n                this._managePreventDefault(keyName, $e);\n                if (keyName && this._shouldTrigger(keyName, $e)) {\n                    this.trigger(keyName + \"Keyed\", $e);\n                }\n            },\n            _onInput: function onInput() {\n                this._setQuery(this.getInputValue());\n                this.clearHintIfInvalid();\n                this._checkLanguageDirection();\n            },\n            _managePreventDefault: function managePreventDefault(keyName, $e) {\n                var preventDefault;\n                switch (keyName) {\n                  case \"up\":\n                  case \"down\":\n                    preventDefault = !withModifier($e);\n                    break;\n\n                  default:\n                    preventDefault = false;\n                }\n                preventDefault && $e.preventDefault();\n            },\n            _shouldTrigger: function shouldTrigger(keyName, $e) {\n                var trigger;\n                switch (keyName) {\n                  case \"tab\":\n                    trigger = !withModifier($e);\n                    break;\n\n                  default:\n                    trigger = true;\n                }\n                return trigger;\n            },\n            _checkLanguageDirection: function checkLanguageDirection() {\n                var dir = (this.$input.css(\"direction\") || \"ltr\").toLowerCase();\n                if (this.dir !== dir) {\n                    this.dir = dir;\n                    this.$hint.attr(\"dir\", dir);\n                    this.trigger(\"langDirChanged\", dir);\n                }\n            },\n            _setQuery: function setQuery(val, silent) {\n                var areEquivalent, hasDifferentWhitespace;\n                areEquivalent = areQueriesEquivalent(val, this.query);\n                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;\n                this.query = val;\n                if (!silent && !areEquivalent) {\n                    this.trigger(\"queryChanged\", this.query);\n                } else if (!silent && hasDifferentWhitespace) {\n                    this.trigger(\"whitespaceChanged\", this.query);\n                }\n            },\n            bind: function() {\n                var that = this, onBlur, onFocus, onKeydown, onInput;\n                onBlur = _.bind(this._onBlur, this);\n                onFocus = _.bind(this._onFocus, this);\n                onKeydown = _.bind(this._onKeydown, this);\n                onInput = _.bind(this._onInput, this);\n                this.$input.on(\"blur.tt\", onBlur).on(\"focus.tt\", onFocus).on(\"keydown.tt\", onKeydown);\n                if (!_.isMsie() || _.isMsie() > 9) {\n                    this.$input.on(\"input.tt\", onInput);\n                } else {\n                    this.$input.on(\"keydown.tt keypress.tt cut.tt paste.tt\", function($e) {\n                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {\n                            return;\n                        }\n                        _.defer(_.bind(that._onInput, that, $e));\n                    });\n                }\n                return this;\n            },\n            focus: function focus() {\n                this.$input.focus();\n            },\n            blur: function blur() {\n                this.$input.blur();\n            },\n            getLangDir: function getLangDir() {\n                return this.dir;\n            },\n            getQuery: function getQuery() {\n                return this.query || \"\";\n            },\n            setQuery: function setQuery(val, silent) {\n                this.setInputValue(val);\n                this._setQuery(val, silent);\n            },\n            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {\n                return this.query !== this.queryWhenFocused;\n            },\n            getInputValue: function getInputValue() {\n                return this.$input.val();\n            },\n            setInputValue: function setInputValue(value) {\n                this.$input.val(value);\n                this.clearHintIfInvalid();\n                this._checkLanguageDirection();\n            },\n            resetInputValue: function resetInputValue() {\n                this.setInputValue(this.query);\n            },\n            getHint: function getHint() {\n                return this.$hint.val();\n            },\n            setHint: function setHint(value) {\n                this.$hint.val(value);\n            },\n            clearHint: function clearHint() {\n                this.setHint(\"\");\n            },\n            clearHintIfInvalid: function clearHintIfInvalid() {\n                var val, hint, valIsPrefixOfHint, isValid;\n                val = this.getInputValue();\n                hint = this.getHint();\n                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;\n                isValid = val !== \"\" && valIsPrefixOfHint && !this.hasOverflow();\n                !isValid && this.clearHint();\n            },\n            hasFocus: function hasFocus() {\n                return this.$input.is(\":focus\");\n            },\n            hasOverflow: function hasOverflow() {\n                var constraint = this.$input.width() - 2;\n                this.$overflowHelper.text(this.getInputValue());\n                return this.$overflowHelper.width() >= constraint;\n            },\n            isCursorAtEnd: function() {\n                var valueLength, selectionStart, range;\n                valueLength = this.$input.val().length;\n                selectionStart = this.$input[0].selectionStart;\n                if (_.isNumber(selectionStart)) {\n                    return selectionStart === valueLength;\n                } else if (document.selection) {\n                    range = document.selection.createRange();\n                    range.moveStart(\"character\", -valueLength);\n                    return valueLength === range.text.length;\n                }\n                return true;\n            },\n            destroy: function destroy() {\n                this.$hint.off(\".tt\");\n                this.$input.off(\".tt\");\n                this.$overflowHelper.remove();\n                this.$hint = this.$input = this.$overflowHelper = $(\"<div>\");\n            }\n        });\n        return Input;\n        function buildOverflowHelper($input) {\n            return $('<pre aria-hidden=\"true\"></pre>').css({\n                position: \"absolute\",\n                visibility: \"hidden\",\n                whiteSpace: \"pre\",\n                fontFamily: $input.css(\"font-family\"),\n                fontSize: $input.css(\"font-size\"),\n                fontStyle: $input.css(\"font-style\"),\n                fontVariant: $input.css(\"font-variant\"),\n                fontWeight: $input.css(\"font-weight\"),\n                wordSpacing: $input.css(\"word-spacing\"),\n                letterSpacing: $input.css(\"letter-spacing\"),\n                textIndent: $input.css(\"text-indent\"),\n                textRendering: $input.css(\"text-rendering\"),\n                textTransform: $input.css(\"text-transform\")\n            }).insertAfter($input);\n        }\n        function areQueriesEquivalent(a, b) {\n            return Input.normalizeQuery(a) === Input.normalizeQuery(b);\n        }\n        function withModifier($e) {\n            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;\n        }\n    }();\n    var Dataset = function() {\n        \"use strict\";\n        var keys, nameGenerator;\n        keys = {\n            val: \"tt-selectable-display\",\n            obj: \"tt-selectable-object\"\n        };\n        nameGenerator = _.getIdGenerator();\n        function Dataset(o, www) {\n            o = o || {};\n            o.templates = o.templates || {};\n            o.templates.notFound = o.templates.notFound || o.templates.empty;\n            if (!o.source) {\n                $.error(\"missing source\");\n            }\n            if (!o.node) {\n                $.error(\"missing node\");\n            }\n            if (o.name && !isValidName(o.name)) {\n                $.error(\"invalid dataset name: \" + o.name);\n            }\n            www.mixin(this);\n            this.highlight = !!o.highlight;\n            this.name = o.name || nameGenerator();\n            this.limit = o.limit || 5;\n            this.displayFn = getDisplayFn(o.display || o.displayKey);\n            this.templates = getTemplates(o.templates, this.displayFn);\n            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;\n            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;\n            this._resetLastSuggestion();\n            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + \"-\" + this.name);\n        }\n        Dataset.extractData = function extractData(el) {\n            var $el = $(el);\n            if ($el.data(keys.obj)) {\n                return {\n                    val: $el.data(keys.val) || \"\",\n                    obj: $el.data(keys.obj) || null\n                };\n            }\n            return null;\n        };\n        _.mixin(Dataset.prototype, EventEmitter, {\n            _overwrite: function overwrite(query, suggestions) {\n                suggestions = suggestions || [];\n                if (suggestions.length) {\n                    this._renderSuggestions(query, suggestions);\n                } else if (this.async && this.templates.pending) {\n                    this._renderPending(query);\n                } else if (!this.async && this.templates.notFound) {\n                    this._renderNotFound(query);\n                } else {\n                    this._empty();\n                }\n                this.trigger(\"rendered\", this.name, suggestions, false);\n            },\n            _append: function append(query, suggestions) {\n                suggestions = suggestions || [];\n                if (suggestions.length && this.$lastSuggestion.length) {\n                    this._appendSuggestions(query, suggestions);\n                } else if (suggestions.length) {\n                    this._renderSuggestions(query, suggestions);\n                } else if (!this.$lastSuggestion.length && this.templates.notFound) {\n                    this._renderNotFound(query);\n                }\n                this.trigger(\"rendered\", this.name, suggestions, true);\n            },\n            _renderSuggestions: function renderSuggestions(query, suggestions) {\n                var $fragment;\n                $fragment = this._getSuggestionsFragment(query, suggestions);\n                this.$lastSuggestion = $fragment.children().last();\n                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));\n            },\n            _appendSuggestions: function appendSuggestions(query, suggestions) {\n                var $fragment, $lastSuggestion;\n                $fragment = this._getSuggestionsFragment(query, suggestions);\n                $lastSuggestion = $fragment.children().last();\n                this.$lastSuggestion.after($fragment);\n                this.$lastSuggestion = $lastSuggestion;\n            },\n            _renderPending: function renderPending(query) {\n                var template = this.templates.pending;\n                this._resetLastSuggestion();\n                template && this.$el.html(template({\n                    query: query,\n                    dataset: this.name\n                }));\n            },\n            _renderNotFound: function renderNotFound(query) {\n                var template = this.templates.notFound;\n                this._resetLastSuggestion();\n                template && this.$el.html(template({\n                    query: query,\n                    dataset: this.name\n                }));\n            },\n            _empty: function empty() {\n                this.$el.empty();\n                this._resetLastSuggestion();\n            },\n            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {\n                var that = this, fragment;\n                fragment = document.createDocumentFragment();\n                _.each(suggestions, function getSuggestionNode(suggestion) {\n                    var $el, context;\n                    context = that._injectQuery(query, suggestion);\n                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + \" \" + that.classes.selectable);\n                    fragment.appendChild($el[0]);\n                });\n                this.highlight && highlight({\n                    className: this.classes.highlight,\n                    node: fragment,\n                    pattern: query\n                });\n                return $(fragment);\n            },\n            _getFooter: function getFooter(query, suggestions) {\n                return this.templates.footer ? this.templates.footer({\n                    query: query,\n                    suggestions: suggestions,\n                    dataset: this.name\n                }) : null;\n            },\n            _getHeader: function getHeader(query, suggestions) {\n                return this.templates.header ? this.templates.header({\n                    query: query,\n                    suggestions: suggestions,\n                    dataset: this.name\n                }) : null;\n            },\n            _resetLastSuggestion: function resetLastSuggestion() {\n                this.$lastSuggestion = $();\n            },\n            _injectQuery: function injectQuery(query, obj) {\n                return _.isObject(obj) ? _.mixin({\n                    _query: query\n                }, obj) : obj;\n            },\n            update: function update(query) {\n                var that = this, canceled = false, syncCalled = false, rendered = 0;\n                this.cancel();\n                this.cancel = function cancel() {\n                    canceled = true;\n                    that.cancel = $.noop;\n                    that.async && that.trigger(\"asyncCanceled\", query);\n                };\n                this.source(query, sync, async);\n                !syncCalled && sync([]);\n                function sync(suggestions) {\n                    if (syncCalled) {\n                        return;\n                    }\n                    syncCalled = true;\n                    suggestions = (suggestions || []).slice(0, that.limit);\n                    rendered = suggestions.length;\n                    that._overwrite(query, suggestions);\n                    if (rendered < that.limit && that.async) {\n                        that.trigger(\"asyncRequested\", query);\n                    }\n                }\n                function async(suggestions) {\n                    suggestions = suggestions || [];\n                    if (!canceled && rendered < that.limit) {\n                        that.cancel = $.noop;\n                        rendered += suggestions.length;\n                        that._append(query, suggestions.slice(0, that.limit - rendered));\n                        that.async && that.trigger(\"asyncReceived\", query);\n                    }\n                }\n            },\n            cancel: $.noop,\n            clear: function clear() {\n                this._empty();\n                this.cancel();\n                this.trigger(\"cleared\");\n            },\n            isEmpty: function isEmpty() {\n                return this.$el.is(\":empty\");\n            },\n            destroy: function destroy() {\n                this.$el = $(\"<div>\");\n            }\n        });\n        return Dataset;\n        function getDisplayFn(display) {\n            display = display || _.stringify;\n            return _.isFunction(display) ? display : displayFn;\n            function displayFn(obj) {\n                return obj[display];\n            }\n        }\n        function getTemplates(templates, displayFn) {\n            return {\n                notFound: templates.notFound && _.templatify(templates.notFound),\n                pending: templates.pending && _.templatify(templates.pending),\n                header: templates.header && _.templatify(templates.header),\n                footer: templates.footer && _.templatify(templates.footer),\n                suggestion: templates.suggestion || suggestionTemplate\n            };\n            function suggestionTemplate(context) {\n                return $(\"<div>\").text(displayFn(context));\n            }\n        }\n        function isValidName(str) {\n            return /^[_a-zA-Z0-9-]+$/.test(str);\n        }\n    }();\n    var Menu = function() {\n        \"use strict\";\n        function Menu(o, www) {\n            var that = this;\n            o = o || {};\n            if (!o.node) {\n                $.error(\"node is required\");\n            }\n            www.mixin(this);\n            this.$node = $(o.node);\n            this.query = null;\n            this.datasets = _.map(o.datasets, initializeDataset);\n            function initializeDataset(oDataset) {\n                var node = that.$node.find(oDataset.node).first();\n                oDataset.node = node.length ? node : $(\"<div>\").appendTo(that.$node);\n                return new Dataset(oDataset, www);\n            }\n        }\n        _.mixin(Menu.prototype, EventEmitter, {\n            _onSelectableClick: function onSelectableClick($e) {\n                this.trigger(\"selectableClicked\", $($e.currentTarget));\n            },\n            _onRendered: function onRendered(type, dataset, suggestions, async) {\n                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());\n                this.trigger(\"datasetRendered\", dataset, suggestions, async);\n            },\n            _onCleared: function onCleared() {\n                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());\n                this.trigger(\"datasetCleared\");\n            },\n            _propagate: function propagate() {\n                this.trigger.apply(this, arguments);\n            },\n            _allDatasetsEmpty: function allDatasetsEmpty() {\n                return _.every(this.datasets, isDatasetEmpty);\n                function isDatasetEmpty(dataset) {\n                    return dataset.isEmpty();\n                }\n            },\n            _getSelectables: function getSelectables() {\n                return this.$node.find(this.selectors.selectable);\n            },\n            _removeCursor: function _removeCursor() {\n                var $selectable = this.getActiveSelectable();\n                $selectable && $selectable.removeClass(this.classes.cursor);\n            },\n            _ensureVisible: function ensureVisible($el) {\n                var elTop, elBottom, nodeScrollTop, nodeHeight;\n                elTop = $el.position().top;\n                elBottom = elTop + $el.outerHeight(true);\n                nodeScrollTop = this.$node.scrollTop();\n                nodeHeight = this.$node.height() + parseInt(this.$node.css(\"paddingTop\"), 10) + parseInt(this.$node.css(\"paddingBottom\"), 10);\n                if (elTop < 0) {\n                    this.$node.scrollTop(nodeScrollTop + elTop);\n                } else if (nodeHeight < elBottom) {\n                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));\n                }\n            },\n            bind: function() {\n                var that = this, onSelectableClick;\n                onSelectableClick = _.bind(this._onSelectableClick, this);\n                this.$node.on(\"click.tt\", this.selectors.selectable, onSelectableClick);\n                _.each(this.datasets, function(dataset) {\n                    dataset.onSync(\"asyncRequested\", that._propagate, that).onSync(\"asyncCanceled\", that._propagate, that).onSync(\"asyncReceived\", that._propagate, that).onSync(\"rendered\", that._onRendered, that).onSync(\"cleared\", that._onCleared, that);\n                });\n                return this;\n            },\n            isOpen: function isOpen() {\n                return this.$node.hasClass(this.classes.open);\n            },\n            open: function open() {\n                this.$node.addClass(this.classes.open);\n            },\n            close: function close() {\n                this.$node.removeClass(this.classes.open);\n                this._removeCursor();\n            },\n            setLanguageDirection: function setLanguageDirection(dir) {\n                this.$node.attr(\"dir\", dir);\n            },\n            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {\n                var $selectables, $oldCursor, oldIndex, newIndex;\n                $oldCursor = this.getActiveSelectable();\n                $selectables = this._getSelectables();\n                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;\n                newIndex = oldIndex + delta;\n                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;\n                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;\n                return newIndex === -1 ? null : $selectables.eq(newIndex);\n            },\n            setCursor: function setCursor($selectable) {\n                this._removeCursor();\n                if ($selectable = $selectable && $selectable.first()) {\n                    $selectable.addClass(this.classes.cursor);\n                    this._ensureVisible($selectable);\n                }\n            },\n            getSelectableData: function getSelectableData($el) {\n                return $el && $el.length ? Dataset.extractData($el) : null;\n            },\n            getActiveSelectable: function getActiveSelectable() {\n                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();\n                return $selectable.length ? $selectable : null;\n            },\n            getTopSelectable: function getTopSelectable() {\n                var $selectable = this._getSelectables().first();\n                return $selectable.length ? $selectable : null;\n            },\n            update: function update(query) {\n                var isValidUpdate = query !== this.query;\n                if (isValidUpdate) {\n                    this.query = query;\n                    _.each(this.datasets, updateDataset);\n                }\n                return isValidUpdate;\n                function updateDataset(dataset) {\n                    dataset.update(query);\n                }\n            },\n            empty: function empty() {\n                _.each(this.datasets, clearDataset);\n                this.query = null;\n                this.$node.addClass(this.classes.empty);\n                function clearDataset(dataset) {\n                    dataset.clear();\n                }\n            },\n            destroy: function destroy() {\n                this.$node.off(\".tt\");\n                this.$node = $(\"<div>\");\n                _.each(this.datasets, destroyDataset);\n                function destroyDataset(dataset) {\n                    dataset.destroy();\n                }\n            }\n        });\n        return Menu;\n    }();\n    var DefaultMenu = function() {\n        \"use strict\";\n        var s = Menu.prototype;\n        function DefaultMenu() {\n            Menu.apply(this, [].slice.call(arguments, 0));\n        }\n        _.mixin(DefaultMenu.prototype, Menu.prototype, {\n            open: function open() {\n                !this._allDatasetsEmpty() && this._show();\n                return s.open.apply(this, [].slice.call(arguments, 0));\n            },\n            close: function close() {\n                this._hide();\n                return s.close.apply(this, [].slice.call(arguments, 0));\n            },\n            _onRendered: function onRendered() {\n                if (this._allDatasetsEmpty()) {\n                    this._hide();\n                } else {\n                    this.isOpen() && this._show();\n                }\n                return s._onRendered.apply(this, [].slice.call(arguments, 0));\n            },\n            _onCleared: function onCleared() {\n                if (this._allDatasetsEmpty()) {\n                    this._hide();\n                } else {\n                    this.isOpen() && this._show();\n                }\n                return s._onCleared.apply(this, [].slice.call(arguments, 0));\n            },\n            setLanguageDirection: function setLanguageDirection(dir) {\n                this.$node.css(dir === \"ltr\" ? this.css.ltr : this.css.rtl);\n                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));\n            },\n            _hide: function hide() {\n                this.$node.hide();\n            },\n            _show: function show() {\n                this.$node.css(\"display\", \"block\");\n            }\n        });\n        return DefaultMenu;\n    }();\n    var Typeahead = function() {\n        \"use strict\";\n        function Typeahead(o, www) {\n            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;\n            o = o || {};\n            if (!o.input) {\n                $.error(\"missing input\");\n            }\n            if (!o.menu) {\n                $.error(\"missing menu\");\n            }\n            if (!o.eventBus) {\n                $.error(\"missing event bus\");\n            }\n            www.mixin(this);\n            this.eventBus = o.eventBus;\n            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;\n            this.input = o.input;\n            this.menu = o.menu;\n            this.enabled = true;\n            this.active = false;\n            this.input.hasFocus() && this.activate();\n            this.dir = this.input.getLangDir();\n            this._hacks();\n            this.menu.bind().onSync(\"selectableClicked\", this._onSelectableClicked, this).onSync(\"asyncRequested\", this._onAsyncRequested, this).onSync(\"asyncCanceled\", this._onAsyncCanceled, this).onSync(\"asyncReceived\", this._onAsyncReceived, this).onSync(\"datasetRendered\", this._onDatasetRendered, this).onSync(\"datasetCleared\", this._onDatasetCleared, this);\n            onFocused = c(this, \"activate\", \"open\", \"_onFocused\");\n            onBlurred = c(this, \"deactivate\", \"_onBlurred\");\n            onEnterKeyed = c(this, \"isActive\", \"isOpen\", \"_onEnterKeyed\");\n            onTabKeyed = c(this, \"isActive\", \"isOpen\", \"_onTabKeyed\");\n            onEscKeyed = c(this, \"isActive\", \"_onEscKeyed\");\n            onUpKeyed = c(this, \"isActive\", \"open\", \"_onUpKeyed\");\n            onDownKeyed = c(this, \"isActive\", \"open\", \"_onDownKeyed\");\n            onLeftKeyed = c(this, \"isActive\", \"isOpen\", \"_onLeftKeyed\");\n            onRightKeyed = c(this, \"isActive\", \"isOpen\", \"_onRightKeyed\");\n            onQueryChanged = c(this, \"_openIfActive\", \"_onQueryChanged\");\n            onWhitespaceChanged = c(this, \"_openIfActive\", \"_onWhitespaceChanged\");\n            this.input.bind().onSync(\"focused\", onFocused, this).onSync(\"blurred\", onBlurred, this).onSync(\"enterKeyed\", onEnterKeyed, this).onSync(\"tabKeyed\", onTabKeyed, this).onSync(\"escKeyed\", onEscKeyed, this).onSync(\"upKeyed\", onUpKeyed, this).onSync(\"downKeyed\", onDownKeyed, this).onSync(\"leftKeyed\", onLeftKeyed, this).onSync(\"rightKeyed\", onRightKeyed, this).onSync(\"queryChanged\", onQueryChanged, this).onSync(\"whitespaceChanged\", onWhitespaceChanged, this).onSync(\"langDirChanged\", this._onLangDirChanged, this);\n        }\n        _.mixin(Typeahead.prototype, {\n            _hacks: function hacks() {\n                var $input, $menu;\n                $input = this.input.$input || $(\"<div>\");\n                $menu = this.menu.$node || $(\"<div>\");\n                $input.on(\"blur.tt\", function($e) {\n                    var active, isActive, hasActive;\n                    active = document.activeElement;\n                    isActive = $menu.is(active);\n                    hasActive = $menu.has(active).length > 0;\n                    if (_.isMsie() && (isActive || hasActive)) {\n                        $e.preventDefault();\n                        $e.stopImmediatePropagation();\n                        _.defer(function() {\n                            $input.focus();\n                        });\n                    }\n                });\n                $menu.on(\"mousedown.tt\", function($e) {\n                    $e.preventDefault();\n                });\n            },\n            _onSelectableClicked: function onSelectableClicked(type, $el) {\n                this.select($el);\n            },\n            _onDatasetCleared: function onDatasetCleared() {\n                this._updateHint();\n            },\n            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {\n                this._updateHint();\n                this.eventBus.trigger(\"render\", suggestions, async, dataset);\n            },\n            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {\n                this.eventBus.trigger(\"asyncrequest\", query, dataset);\n            },\n            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {\n                this.eventBus.trigger(\"asynccancel\", query, dataset);\n            },\n            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {\n                this.eventBus.trigger(\"asyncreceive\", query, dataset);\n            },\n            _onFocused: function onFocused() {\n                this._minLengthMet() && this.menu.update(this.input.getQuery());\n            },\n            _onBlurred: function onBlurred() {\n                if (this.input.hasQueryChangedSinceLastFocus()) {\n                    this.eventBus.trigger(\"change\", this.input.getQuery());\n                }\n            },\n            _onEnterKeyed: function onEnterKeyed(type, $e) {\n                var $selectable;\n                if ($selectable = this.menu.getActiveSelectable()) {\n                    this.select($selectable) && $e.preventDefault();\n                }\n            },\n            _onTabKeyed: function onTabKeyed(type, $e) {\n                var $selectable;\n                if ($selectable = this.menu.getActiveSelectable()) {\n                    this.select($selectable) && $e.preventDefault();\n                } else if ($selectable = this.menu.getTopSelectable()) {\n                    this.autocomplete($selectable) && $e.preventDefault();\n                }\n            },\n            _onEscKeyed: function onEscKeyed() {\n                this.close();\n            },\n            _onUpKeyed: function onUpKeyed() {\n                this.moveCursor(-1);\n            },\n            _onDownKeyed: function onDownKeyed() {\n                this.moveCursor(+1);\n            },\n            _onLeftKeyed: function onLeftKeyed() {\n                if (this.dir === \"rtl\" && this.input.isCursorAtEnd()) {\n                    this.autocomplete(this.menu.getTopSelectable());\n                }\n            },\n            _onRightKeyed: function onRightKeyed() {\n                if (this.dir === \"ltr\" && this.input.isCursorAtEnd()) {\n                    this.autocomplete(this.menu.getTopSelectable());\n                }\n            },\n            _onQueryChanged: function onQueryChanged(e, query) {\n                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();\n            },\n            _onWhitespaceChanged: function onWhitespaceChanged() {\n                this._updateHint();\n            },\n            _onLangDirChanged: function onLangDirChanged(e, dir) {\n                if (this.dir !== dir) {\n                    this.dir = dir;\n                    this.menu.setLanguageDirection(dir);\n                }\n            },\n            _openIfActive: function openIfActive() {\n                this.isActive() && this.open();\n            },\n            _minLengthMet: function minLengthMet(query) {\n                query = _.isString(query) ? query : this.input.getQuery() || \"\";\n                return query.length >= this.minLength;\n            },\n            _updateHint: function updateHint() {\n                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;\n                $selectable = this.menu.getTopSelectable();\n                data = this.menu.getSelectableData($selectable);\n                val = this.input.getInputValue();\n                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {\n                    query = Input.normalizeQuery(val);\n                    escapedQuery = _.escapeRegExChars(query);\n                    frontMatchRegEx = new RegExp(\"^(?:\" + escapedQuery + \")(.+$)\", \"i\");\n                    match = frontMatchRegEx.exec(data.val);\n                    match && this.input.setHint(val + match[1]);\n                } else {\n                    this.input.clearHint();\n                }\n            },\n            isEnabled: function isEnabled() {\n                return this.enabled;\n            },\n            enable: function enable() {\n                this.enabled = true;\n            },\n            disable: function disable() {\n                this.enabled = false;\n            },\n            isActive: function isActive() {\n                return this.active;\n            },\n            activate: function activate() {\n                if (this.isActive()) {\n                    return true;\n                } else if (!this.isEnabled() || this.eventBus.before(\"active\")) {\n                    return false;\n                } else {\n                    this.active = true;\n                    this.eventBus.trigger(\"active\");\n                    return true;\n                }\n            },\n            deactivate: function deactivate() {\n                if (!this.isActive()) {\n                    return true;\n                } else if (this.eventBus.before(\"idle\")) {\n                    return false;\n                } else {\n                    this.active = false;\n                    this.close();\n                    this.eventBus.trigger(\"idle\");\n                    return true;\n                }\n            },\n            isOpen: function isOpen() {\n                return this.menu.isOpen();\n            },\n            open: function open() {\n                if (!this.isOpen() && !this.eventBus.before(\"open\")) {\n                    this.menu.open();\n                    this._updateHint();\n                    this.eventBus.trigger(\"open\");\n                }\n                return this.isOpen();\n            },\n            close: function close() {\n                if (this.isOpen() && !this.eventBus.before(\"close\")) {\n                    this.menu.close();\n                    this.input.clearHint();\n                    this.input.resetInputValue();\n                    this.eventBus.trigger(\"close\");\n                }\n                return !this.isOpen();\n            },\n            setVal: function setVal(val) {\n                this.input.setQuery(_.toStr(val));\n            },\n            getVal: function getVal() {\n                return this.input.getQuery();\n            },\n            select: function select($selectable) {\n                var data = this.menu.getSelectableData($selectable);\n                if (data && !this.eventBus.before(\"select\", data.obj)) {\n                    this.input.setQuery(data.val, true);\n                    this.eventBus.trigger(\"select\", data.obj);\n                    this.close();\n                    return true;\n                }\n                return false;\n            },\n            autocomplete: function autocomplete($selectable) {\n                var query, data, isValid;\n                query = this.input.getQuery();\n                data = this.menu.getSelectableData($selectable);\n                isValid = data && query !== data.val;\n                if (isValid && !this.eventBus.before(\"autocomplete\", data.obj)) {\n                    this.input.setQuery(data.val);\n                    this.eventBus.trigger(\"autocomplete\", data.obj);\n                    return true;\n                }\n                return false;\n            },\n            moveCursor: function moveCursor(delta) {\n                var query, $candidate, data, payload, cancelMove;\n                query = this.input.getQuery();\n                $candidate = this.menu.selectableRelativeToCursor(delta);\n                data = this.menu.getSelectableData($candidate);\n                payload = data ? data.obj : null;\n                cancelMove = this._minLengthMet() && this.menu.update(query);\n                if (!cancelMove && !this.eventBus.before(\"cursorchange\", payload)) {\n                    this.menu.setCursor($candidate);\n                    if (data) {\n                        this.input.setInputValue(data.val);\n                    } else {\n                        this.input.resetInputValue();\n                        this._updateHint();\n                    }\n                    this.eventBus.trigger(\"cursorchange\", payload);\n                    return true;\n                }\n                return false;\n            },\n            destroy: function destroy() {\n                this.input.destroy();\n                this.menu.destroy();\n            }\n        });\n        return Typeahead;\n        function c(ctx) {\n            var methods = [].slice.call(arguments, 1);\n            return function() {\n                var args = [].slice.call(arguments);\n                _.each(methods, function(method) {\n                    return ctx[method].apply(ctx, args);\n                });\n            };\n        }\n    }();\n    (function() {\n        \"use strict\";\n        var old, keys, methods;\n        old = $.fn.typeahead;\n        keys = {\n            www: \"tt-www\",\n            attrs: \"tt-attrs\",\n            typeahead: \"tt-typeahead\"\n        };\n        methods = {\n            initialize: function initialize(o, datasets) {\n                var www;\n                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);\n                o = o || {};\n                www = WWW(o.classNames);\n                return this.each(attach);\n                function attach() {\n                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;\n                    _.each(datasets, function(d) {\n                        d.highlight = !!o.highlight;\n                    });\n                    $input = $(this);\n                    $wrapper = $(www.html.wrapper);\n                    $hint = $elOrNull(o.hint);\n                    $menu = $elOrNull(o.menu);\n                    defaultHint = o.hint !== false && !$hint;\n                    defaultMenu = o.menu !== false && !$menu;\n                    defaultHint && ($hint = buildHintFromInput($input, www));\n                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));\n                    $hint && $hint.val(\"\");\n                    $input = prepInput($input, www);\n                    if (defaultHint || defaultMenu) {\n                        $wrapper.css(www.css.wrapper);\n                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);\n                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);\n                    }\n                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;\n                    eventBus = new EventBus({\n                        el: $input\n                    });\n                    input = new Input({\n                        hint: $hint,\n                        input: $input\n                    }, www);\n                    menu = new MenuConstructor({\n                        node: $menu,\n                        datasets: datasets\n                    }, www);\n                    typeahead = new Typeahead({\n                        input: input,\n                        menu: menu,\n                        eventBus: eventBus,\n                        minLength: o.minLength\n                    }, www);\n                    $input.data(keys.www, www);\n                    $input.data(keys.typeahead, typeahead);\n                }\n            },\n            isEnabled: function isEnabled() {\n                var enabled;\n                ttEach(this.first(), function(t) {\n                    enabled = t.isEnabled();\n                });\n                return enabled;\n            },\n            enable: function enable() {\n                ttEach(this, function(t) {\n                    t.enable();\n                });\n                return this;\n            },\n            disable: function disable() {\n                ttEach(this, function(t) {\n                    t.disable();\n                });\n                return this;\n            },\n            isActive: function isActive() {\n                var active;\n                ttEach(this.first(), function(t) {\n                    active = t.isActive();\n                });\n                return active;\n            },\n            activate: function activate() {\n                ttEach(this, function(t) {\n                    t.activate();\n                });\n                return this;\n            },\n            deactivate: function deactivate() {\n                ttEach(this, function(t) {\n                    t.deactivate();\n                });\n                return this;\n            },\n            isOpen: function isOpen() {\n                var open;\n                ttEach(this.first(), function(t) {\n                    open = t.isOpen();\n                });\n                return open;\n            },\n            open: function open() {\n                ttEach(this, function(t) {\n                    t.open();\n                });\n                return this;\n            },\n            close: function close() {\n                ttEach(this, function(t) {\n                    t.close();\n                });\n                return this;\n            },\n            select: function select(el) {\n                var success = false, $el = $(el);\n                ttEach(this.first(), function(t) {\n                    success = t.select($el);\n                });\n                return success;\n            },\n            autocomplete: function autocomplete(el) {\n                var success = false, $el = $(el);\n                ttEach(this.first(), function(t) {\n                    success = t.autocomplete($el);\n                });\n                return success;\n            },\n            moveCursor: function moveCursoe(delta) {\n                var success = false;\n                ttEach(this.first(), function(t) {\n                    success = t.moveCursor(delta);\n                });\n                return success;\n            },\n            val: function val(newVal) {\n                var query;\n                if (!arguments.length) {\n                    ttEach(this.first(), function(t) {\n                        query = t.getVal();\n                    });\n                    return query;\n                } else {\n                    ttEach(this, function(t) {\n                        t.setVal(newVal);\n                    });\n                    return this;\n                }\n            },\n            destroy: function destroy() {\n                ttEach(this, function(typeahead, $input) {\n                    revert($input);\n                    typeahead.destroy();\n                });\n                return this;\n            }\n        };\n        $.fn.typeahead = function(method) {\n            if (methods[method]) {\n                return methods[method].apply(this, [].slice.call(arguments, 1));\n            } else {\n                return methods.initialize.apply(this, arguments);\n            }\n        };\n        $.fn.typeahead.noConflict = function noConflict() {\n            $.fn.typeahead = old;\n            return this;\n        };\n        function ttEach($els, fn) {\n            $els.each(function() {\n                var $input = $(this), typeahead;\n                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);\n            });\n        }\n        function buildHintFromInput($input, www) {\n            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop(\"readonly\", true).removeAttr(\"id name placeholder required\").attr({\n                autocomplete: \"off\",\n                spellcheck: \"false\",\n                tabindex: -1\n            });\n        }\n        function prepInput($input, www) {\n            $input.data(keys.attrs, {\n                dir: $input.attr(\"dir\"),\n                autocomplete: $input.attr(\"autocomplete\"),\n                spellcheck: $input.attr(\"spellcheck\"),\n                style: $input.attr(\"style\")\n            });\n            $input.addClass(www.classes.input).attr({\n                autocomplete: \"off\",\n                spellcheck: false\n            });\n            try {\n                !$input.attr(\"dir\") && $input.attr(\"dir\", \"auto\");\n            } catch (e) {}\n            return $input;\n        }\n        function getBackgroundStyles($el) {\n            return {\n                backgroundAttachment: $el.css(\"background-attachment\"),\n                backgroundClip: $el.css(\"background-clip\"),\n                backgroundColor: $el.css(\"background-color\"),\n                backgroundImage: $el.css(\"background-image\"),\n                backgroundOrigin: $el.css(\"background-origin\"),\n                backgroundPosition: $el.css(\"background-position\"),\n                backgroundRepeat: $el.css(\"background-repeat\"),\n                backgroundSize: $el.css(\"background-size\")\n            };\n        }\n        function revert($input) {\n            var www, $wrapper;\n            www = $input.data(keys.www);\n            $wrapper = $input.parent().filter(www.selectors.wrapper);\n            _.each($input.data(keys.attrs), function(val, key) {\n                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);\n            });\n            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);\n            if ($wrapper.length) {\n                $input.detach().insertAfter($wrapper);\n                $wrapper.remove();\n            }\n        }\n        function $elOrNull(obj) {\n            var isValid, $el;\n            isValid = _.isJQuery(obj) || _.isElement(obj);\n            $el = isValid ? $(obj).first() : [];\n            return $el.length ? $el : null;\n        }\n    })();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdHlwZWFoZWFkLmpzL2Rpc3QvdHlwZWFoZWFkLmJ1bmRsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQSxRQUFRLElBQTBDO0FBQ2xELFFBQVEsaUNBQXFCLEVBQUUsMkNBQVEsRUFBRSxtQ0FBRTtBQUMzQztBQUNBLFNBQVM7QUFBQSxrR0FBQztBQUNWLE1BQU0sS0FBSyxFQUlOO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLCtDQUErQyxFQUFFO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQSxRQUFRLElBQTBDO0FBQ2xELFFBQVEsaUNBQXVCLEVBQUUsMkNBQVEsRUFBRSxtQ0FBRTtBQUM3QztBQUNBLFNBQVM7QUFBQSxrR0FBQztBQUNWLE1BQU0sS0FBSyxFQUlOO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLCtDQUErQyxFQUFFO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esd0NBQXdDO0FBQ3hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsdUJBQXVCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1NuZWF0Ly4vbm9kZV9tb2R1bGVzL3R5cGVhaGVhZC5qcy9kaXN0L3R5cGVhaGVhZC5idW5kbGUuanM/ZjRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIHR5cGVhaGVhZC5qcyAwLjExLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2l0dGVyL3R5cGVhaGVhZC5qc1xuICogQ29weXJpZ2h0IDIwMTMtMjAxNSBUd2l0dGVyLCBJbmMuIGFuZCBvdGhlciBjb250cmlidXRvcnM7IExpY2Vuc2VkIE1JVFxuICovXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShcImJsb29kaG91bmRcIiwgWyBcImpxdWVyeVwiIF0sIGZ1bmN0aW9uKGEwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdFtcIkJsb29kaG91bmRcIl0gPSBmYWN0b3J5KGEwKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdFtcIkJsb29kaG91bmRcIl0gPSBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24oJCkge1xuICAgIHZhciBfID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNNc2llOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhtc2llIHxydjopKFxcZCsoLlxcZCspPykvaSlbMl0gOiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0JsYW5rU3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXN0ciB8fCAvXlxccyokLy50ZXN0KHN0cik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXNjYXBlUmVnRXhDaGFyczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNTdHJpbmc6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTnVtYmVyOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0FycmF5OiAkLmlzQXJyYXksXG4gICAgICAgICAgICBpc0Z1bmN0aW9uOiAkLmlzRnVuY3Rpb24sXG4gICAgICAgICAgICBpc09iamVjdDogJC5pc1BsYWluT2JqZWN0LFxuICAgICAgICAgICAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRWxlbWVudDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzSlF1ZXJ5OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgJDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1N0cjogZnVuY3Rpb24gdG9TdHIocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHMpIHx8IHMgPT09IG51bGwgPyBcIlwiIDogcyArIFwiXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZDogJC5wcm94eSxcbiAgICAgICAgICAgIGVhY2g6IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGNiKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKGNvbGxlY3Rpb24sIHJldmVyc2VBcmdzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlQXJncyhpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcDogJC5tYXAsXG4gICAgICAgICAgICBmaWx0ZXI6ICQuZ3JlcCxcbiAgICAgICAgICAgIGV2ZXJ5OiBmdW5jdGlvbihvYmosIHRlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkLmVhY2gob2JqLCBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXN1bHQgPSB0ZXN0LmNhbGwobnVsbCwgdmFsLCBrZXksIG9iaikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFyZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29tZTogZnVuY3Rpb24ob2JqLCB0ZXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQuZWFjaChvYmosIGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPSB0ZXN0LmNhbGwobnVsbCwgdmFsLCBrZXksIG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaXhpbjogJC5leHRlbmQsXG4gICAgICAgICAgICBpZGVudGl0eTogZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQodHJ1ZSwge30sIG9iaik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SWRHZW5lcmF0b3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0aWZ5OiBmdW5jdGlvbiB0ZW1wbGF0aWZ5KG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmlzRnVuY3Rpb24ob2JqKSA/IG9iaiA6IHRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRlbXBsYXRlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmVyOiBmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlYm91bmNlOiBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGltZW91dCwgcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzLCBsYXRlciwgY2FsbE5vdztcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRocm90dGxlOiBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQsIGFyZ3MsIHRpbWVvdXQsIHJlc3VsdCwgcHJldmlvdXMsIGxhdGVyO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gMDtcbiAgICAgICAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKSwgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5pc1N0cmluZyh2YWwpID8gdmFsIDogSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub29wOiBmdW5jdGlvbigpIHt9XG4gICAgICAgIH07XG4gICAgfSgpO1xuICAgIHZhciBWRVJTSU9OID0gXCIwLjExLjFcIjtcbiAgICB2YXIgdG9rZW5pemVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vbndvcmQ6IG5vbndvcmQsXG4gICAgICAgICAgICB3aGl0ZXNwYWNlOiB3aGl0ZXNwYWNlLFxuICAgICAgICAgICAgb2JqOiB7XG4gICAgICAgICAgICAgICAgbm9ud29yZDogZ2V0T2JqVG9rZW5pemVyKG5vbndvcmQpLFxuICAgICAgICAgICAgICAgIHdoaXRlc3BhY2U6IGdldE9ialRva2VuaXplcih3aGl0ZXNwYWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKHN0cikge1xuICAgICAgICAgICAgc3RyID0gXy50b1N0cihzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbm9ud29yZChzdHIpIHtcbiAgICAgICAgICAgIHN0ciA9IF8udG9TdHIoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3BsaXQoL1xcVysvKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE9ialRva2VuaXplcih0b2tlbml6ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRLZXkoa2V5cykge1xuICAgICAgICAgICAgICAgIGtleXMgPSBfLmlzQXJyYXkoa2V5cykgPyBrZXlzIDogW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0b2tlbml6ZShvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGtleXMsIGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQodG9rZW5pemVyKF8udG9TdHIob1trXSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KCk7XG4gICAgdmFyIExydUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBMcnVDYWNoZShtYXhTaXplKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBfLmlzTnVtYmVyKG1heFNpemUpID8gbWF4U2l6ZSA6IDEwMDtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFNpemUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0ID0gdGhpcy5nZXQgPSAkLm5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXy5taXhpbihMcnVDYWNoZS5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhaWxJdGVtID0gdGhpcy5saXN0LnRhaWwsIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA+PSB0aGlzLm1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlbW92ZSh0YWlsSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhhc2hbdGFpbEl0ZW0ua2V5XTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlID0gdGhpcy5oYXNoW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52YWwgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5tb3ZlVG9Gcm9udChub2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbmV3IE5vZGUoa2V5LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuYWRkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc2hba2V5XSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaGFzaFtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5tb3ZlVG9Gcm9udChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2ggPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBuZXcgTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gTGlzdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXy5taXhpbihMaXN0LnByb3RvdHlwZSwge1xuICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiBhZGQobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWQucHJldiA9IG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsIHx8IG5vZGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucHJldiA/IG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0IDogdGhpcy5oZWFkID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgICAgIG5vZGUubmV4dCA/IG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2IDogdGhpcy50YWlsID0gbm9kZS5wcmV2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmVUb0Zyb250OiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUobm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBOb2RlKGtleSwgdmFsKSB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTHJ1Q2FjaGU7XG4gICAgfSgpO1xuICAgIHZhciBQZXJzaXN0ZW50U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIExPQ0FMX1NUT1JBR0U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBMT0NBTF9TVE9SQUdFID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICAgICAgICAgIExPQ0FMX1NUT1JBR0Uuc2V0SXRlbShcIn5+flwiLCBcIiFcIik7XG4gICAgICAgICAgICBMT0NBTF9TVE9SQUdFLnJlbW92ZUl0ZW0oXCJ+fn5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgTE9DQUxfU1RPUkFHRSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gUGVyc2lzdGVudFN0b3JhZ2UobmFtZXNwYWNlLCBvdmVycmlkZSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXggPSBbIFwiX19cIiwgbmFtZXNwYWNlLCBcIl9fXCIgXS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgdGhpcy50dGxLZXkgPSBcIl9fdHRsX19cIjtcbiAgICAgICAgICAgIHRoaXMua2V5TWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyBfLmVzY2FwZVJlZ0V4Q2hhcnModGhpcy5wcmVmaXgpKTtcbiAgICAgICAgICAgIHRoaXMubHMgPSBvdmVycmlkZSB8fCBMT0NBTF9TVE9SQUdFO1xuICAgICAgICAgICAgIXRoaXMubHMgJiYgdGhpcy5fbm9vcCgpO1xuICAgICAgICB9XG4gICAgICAgIF8ubWl4aW4oUGVyc2lzdGVudFN0b3JhZ2UucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBfcHJlZml4OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXggKyBrZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3R0bEtleTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZpeChrZXkpICsgdGhpcy50dGxLZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX25vb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0ID0gdGhpcy5zZXQgPSB0aGlzLnJlbW92ZSA9IHRoaXMuY2xlYXIgPSB0aGlzLmlzRXhwaXJlZCA9IF8ubm9vcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfc2FmZVNldDogZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxzLnNldEl0ZW0oa2V5LCB2YWwpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodGhpcy5scy5nZXRJdGVtKHRoaXMuX3ByZWZpeChrZXkpKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbCwgdHRsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNOdW1iZXIodHRsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYWZlU2V0KHRoaXMuX3R0bEtleShrZXkpLCBlbmNvZGUobm93KCkgKyB0dGwpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxzLnJlbW92ZUl0ZW0odGhpcy5fdHRsS2V5KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2FmZVNldCh0aGlzLl9wcmVmaXgoa2V5KSwgZW5jb2RlKHZhbCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5scy5yZW1vdmVJdGVtKHRoaXMuX3R0bEtleShrZXkpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxzLnJlbW92ZUl0ZW0odGhpcy5fcHJlZml4KGtleSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwga2V5cyA9IGdhdGhlck1hdGNoaW5nS2V5cyh0aGlzLmtleU1hdGNoZXIpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGtleXMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShrZXlzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNFeHBpcmVkOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHRsID0gZGVjb2RlKHRoaXMubHMuZ2V0SXRlbSh0aGlzLl90dGxLZXkoa2V5KSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmlzTnVtYmVyKHR0bCkgJiYgbm93KCkgPiB0dGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGVyc2lzdGVudFN0b3JhZ2U7XG4gICAgICAgIGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXy5pc1VuZGVmaW5lZCh2YWwpID8gbnVsbCA6IHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVjb2RlKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICQucGFyc2VKU09OKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2F0aGVyTWF0Y2hpbmdLZXlzKGtleU1hdGNoZXIpIHtcbiAgICAgICAgICAgIHZhciBpLCBrZXksIGtleXMgPSBbXSwgbGVuID0gTE9DQUxfU1RPUkFHRS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGtleSA9IExPQ0FMX1NUT1JBR0Uua2V5KGkpKS5tYXRjaChrZXlNYXRjaGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnJlcGxhY2Uoa2V5TWF0Y2hlciwgXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgfSgpO1xuICAgIHZhciBUcmFuc3BvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBwZW5kaW5nUmVxdWVzdHNDb3VudCA9IDAsIHBlbmRpbmdSZXF1ZXN0cyA9IHt9LCBtYXhQZW5kaW5nUmVxdWVzdHMgPSA2LCBzaGFyZWRDYWNoZSA9IG5ldyBMcnVDYWNoZSgxMCk7XG4gICAgICAgIGZ1bmN0aW9uIFRyYW5zcG9ydChvKSB7XG4gICAgICAgICAgICBvID0gbyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VuZCA9IG8udHJhbnNwb3J0O1xuICAgICAgICAgICAgdGhpcy5fZ2V0ID0gby5saW1pdGVyID8gby5saW1pdGVyKHRoaXMuX2dldCkgOiB0aGlzLl9nZXQ7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG8uY2FjaGUgPT09IGZhbHNlID8gbmV3IExydUNhY2hlKDApIDogc2hhcmVkQ2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgVHJhbnNwb3J0LnNldE1heFBlbmRpbmdSZXF1ZXN0cyA9IGZ1bmN0aW9uIHNldE1heFBlbmRpbmdSZXF1ZXN0cyhudW0pIHtcbiAgICAgICAgICAgIG1heFBlbmRpbmdSZXF1ZXN0cyA9IG51bTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNwb3J0LnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkge1xuICAgICAgICAgICAgc2hhcmVkQ2FjaGUucmVzZXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgXy5taXhpbihUcmFuc3BvcnQucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBfZmluZ2VycHJpbnQ6IGZ1bmN0aW9uIGZpbmdlcnByaW50KG8pIHtcbiAgICAgICAgICAgICAgICBvID0gbyB8fCB7fTtcbiAgICAgICAgICAgICAgICByZXR1cm4gby51cmwgKyBvLnR5cGUgKyAkLnBhcmFtKG8uZGF0YSB8fCB7fSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2dldDogZnVuY3Rpb24obywgY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsIGZpbmdlcnByaW50LCBqcVhocjtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludCA9IHRoaXMuX2ZpbmdlcnByaW50KG8pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbmNlbGxlZCB8fCBmaW5nZXJwcmludCAhPT0gdGhpcy5sYXN0UmVxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGpxWGhyID0gcGVuZGluZ1JlcXVlc3RzW2ZpbmdlcnByaW50XSkge1xuICAgICAgICAgICAgICAgICAgICBqcVhoci5kb25lKGRvbmUpLmZhaWwoZmFpbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZW5kaW5nUmVxdWVzdHNDb3VudCA8IG1heFBlbmRpbmdSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVxdWVzdHNDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVxdWVzdHNbZmluZ2VycHJpbnRdID0gdGhpcy5fc2VuZChvKS5kb25lKGRvbmUpLmZhaWwoZmFpbCkuYWx3YXlzKGFsd2F5cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRlY2tSZXF1ZXN0QXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9uZShyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKG51bGwsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9jYWNoZS5zZXQoZmluZ2VycHJpbnQsIHJlc3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgICAgICAgICAgICAgICBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWx3YXlzKCkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUmVxdWVzdHNDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGVuZGluZ1JlcXVlc3RzW2ZpbmdlcnByaW50XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub25EZWNrUmVxdWVzdEFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX2dldC5hcHBseSh0aGF0LCB0aGF0Lm9uRGVja1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub25EZWNrUmVxdWVzdEFyZ3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24obywgY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzcCwgZmluZ2VycHJpbnQ7XG4gICAgICAgICAgICAgICAgY2IgPSBjYiB8fCAkLm5vb3A7XG4gICAgICAgICAgICAgICAgbyA9IF8uaXNTdHJpbmcobykgPyB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogb1xuICAgICAgICAgICAgICAgIH0gOiBvIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50ID0gdGhpcy5fZmluZ2VycHJpbnQobyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSZXEgPSBmaW5nZXJwcmludDtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCA9IHRoaXMuX2NhY2hlLmdldChmaW5nZXJwcmludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgcmVzcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0KG8sIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gVHJhbnNwb3J0O1xuICAgIH0oKTtcbiAgICB2YXIgU2VhcmNoSW5kZXggPSB3aW5kb3cuU2VhcmNoSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBDSElMRFJFTiA9IFwiY1wiLCBJRFMgPSBcImlcIjtcbiAgICAgICAgZnVuY3Rpb24gU2VhcmNoSW5kZXgobykge1xuICAgICAgICAgICAgbyA9IG8gfHwge307XG4gICAgICAgICAgICBpZiAoIW8uZGF0dW1Ub2tlbml6ZXIgfHwgIW8ucXVlcnlUb2tlbml6ZXIpIHtcbiAgICAgICAgICAgICAgICAkLmVycm9yKFwiZGF0dW1Ub2tlbml6ZXIgYW5kIHF1ZXJ5VG9rZW5pemVyIGFyZSBib3RoIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pZGVudGlmeSA9IG8uaWRlbnRpZnkgfHwgXy5zdHJpbmdpZnk7XG4gICAgICAgICAgICB0aGlzLmRhdHVtVG9rZW5pemVyID0gby5kYXR1bVRva2VuaXplcjtcbiAgICAgICAgICAgIHRoaXMucXVlcnlUb2tlbml6ZXIgPSBvLnF1ZXJ5VG9rZW5pemVyO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIF8ubWl4aW4oU2VhcmNoSW5kZXgucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBib290c3RyYXA6IGZ1bmN0aW9uIGJvb3RzdHJhcChvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXR1bXMgPSBvLmRhdHVtcztcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWUgPSBvLnRyaWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGRhdGEgPSBfLmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogWyBkYXRhIF07XG4gICAgICAgICAgICAgICAgXy5lYWNoKGRhdGEsIGZ1bmN0aW9uKGRhdHVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCwgdG9rZW5zO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdHVtc1tpZCA9IHRoYXQuaWRlbnRpZnkoZGF0dW0pXSA9IGRhdHVtO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMgPSBub3JtYWxpemVUb2tlbnModGhhdC5kYXR1bVRva2VuaXplcihkYXR1bSkpO1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG9rZW5zLCBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUsIGNoYXJzLCBjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGF0LnRyaWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFycyA9IHRva2VuLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNoID0gY2hhcnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlW0NISUxEUkVOXVtjaF0gfHwgKG5vZGVbQ0hJTERSRU5dW2NoXSA9IG5ld05vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtJRFNdLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChpZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWFwKGlkcywgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuZGF0dW1zW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2g6IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgdG9rZW5zLCBtYXRjaGVzO1xuICAgICAgICAgICAgICAgIHRva2VucyA9IG5vcm1hbGl6ZVRva2Vucyh0aGlzLnF1ZXJ5VG9rZW5pemVyKHF1ZXJ5KSk7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRva2VucywgZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUsIGNoYXJzLCBjaCwgaWRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGF0LnRyaWU7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzID0gdG9rZW4uc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlICYmIChjaCA9IGNoYXJzLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZVtDSElMRFJFTl1bY2hdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIGNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRzID0gbm9kZVtJRFNdLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgPyBnZXRJbnRlcnNlY3Rpb24obWF0Y2hlcywgaWRzKSA6IGlkcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzID8gXy5tYXAodW5pcXVlKG1hdGNoZXMpLCBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5kYXR1bXNbaWRdO1xuICAgICAgICAgICAgICAgIH0pIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRhdHVtcykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLmRhdHVtc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXR1bXMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWUgPSBuZXdOb2RlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0dW1zOiB0aGlzLmRhdHVtcyxcbiAgICAgICAgICAgICAgICAgICAgdHJpZTogdGhpcy50cmllXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBTZWFyY2hJbmRleDtcbiAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplVG9rZW5zKHRva2Vucykge1xuICAgICAgICAgICAgdG9rZW5zID0gXy5maWx0ZXIodG9rZW5zLCBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXRva2VuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2tlbnMgPSBfLm1hcCh0b2tlbnMsIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbmV3Tm9kZSgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0ge307XG4gICAgICAgICAgICBub2RlW0lEU10gPSBbXTtcbiAgICAgICAgICAgIG5vZGVbQ0hJTERSRU5dID0ge307XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBzZWVuID0ge30sIHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc2VlblthcnJheVtpXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlblthcnJheVtpXV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVzLnB1c2goYXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmlxdWVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEludGVyc2VjdGlvbihhcnJheUEsIGFycmF5Qikge1xuICAgICAgICAgICAgdmFyIGFpID0gMCwgYmkgPSAwLCBpbnRlcnNlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIGFycmF5QSA9IGFycmF5QS5zb3J0KCk7XG4gICAgICAgICAgICBhcnJheUIgPSBhcnJheUIuc29ydCgpO1xuICAgICAgICAgICAgdmFyIGxlbkFycmF5QSA9IGFycmF5QS5sZW5ndGgsIGxlbkFycmF5QiA9IGFycmF5Qi5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoYWkgPCBsZW5BcnJheUEgJiYgYmkgPCBsZW5BcnJheUIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlBW2FpXSA8IGFycmF5QltiaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWkrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5QVthaV0gPiBhcnJheUJbYmldKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uLnB1c2goYXJyYXlBW2FpXSk7XG4gICAgICAgICAgICAgICAgICAgIGFpKys7XG4gICAgICAgICAgICAgICAgICAgIGJpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgfVxuICAgIH0oKTtcbiAgICB2YXIgUHJlZmV0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBrZXlzID0ge1xuICAgICAgICAgICAgZGF0YTogXCJkYXRhXCIsXG4gICAgICAgICAgICBwcm90b2NvbDogXCJwcm90b2NvbFwiLFxuICAgICAgICAgICAgdGh1bWJwcmludDogXCJ0aHVtYnByaW50XCJcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gUHJlZmV0Y2gobykge1xuICAgICAgICAgICAgdGhpcy51cmwgPSBvLnVybDtcbiAgICAgICAgICAgIHRoaXMudHRsID0gby50dGw7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gby5jYWNoZTtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZSA9IG8ucHJlcGFyZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gby50cmFuc2Zvcm07XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG8udHJhbnNwb3J0O1xuICAgICAgICAgICAgdGhpcy50aHVtYnByaW50ID0gby50aHVtYnByaW50O1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKG8uY2FjaGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIF8ubWl4aW4oUHJlZmV0Y2gucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBfc2V0dGluZ3M6IGZ1bmN0aW9uIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmU6IGZ1bmN0aW9uIHN0b3JlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGtleXMuZGF0YSwgZGF0YSwgdGhpcy50dGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoa2V5cy5wcm90b2NvbCwgbG9jYXRpb24ucHJvdG9jb2wsIHRoaXMudHRsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGtleXMudGh1bWJwcmludCwgdGhpcy50aHVtYnByaW50LCB0aGlzLnR0bCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJvbUNhY2hlOiBmdW5jdGlvbiBmcm9tQ2FjaGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlZCA9IHt9LCBpc0V4cGlyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZWQuZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXQoa2V5cy5kYXRhKTtcbiAgICAgICAgICAgICAgICBzdG9yZWQucHJvdG9jb2wgPSB0aGlzLnN0b3JhZ2UuZ2V0KGtleXMucHJvdG9jb2wpO1xuICAgICAgICAgICAgICAgIHN0b3JlZC50aHVtYnByaW50ID0gdGhpcy5zdG9yYWdlLmdldChrZXlzLnRodW1icHJpbnQpO1xuICAgICAgICAgICAgICAgIGlzRXhwaXJlZCA9IHN0b3JlZC50aHVtYnByaW50ICE9PSB0aGlzLnRodW1icHJpbnQgfHwgc3RvcmVkLnByb3RvY29sICE9PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVkLmRhdGEgJiYgIWlzRXhwaXJlZCA/IHN0b3JlZC5kYXRhIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcm9tTmV0d29yazogZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsIHNldHRpbmdzO1xuICAgICAgICAgICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXR0aW5ncyA9IHRoaXMucHJlcGFyZSh0aGlzLl9zZXR0aW5ncygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydChzZXR0aW5ncykuZmFpbChvbkVycm9yKS5kb25lKG9uUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvblJlc3BvbnNlKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgdGhhdC50cmFuc2Zvcm0ocmVzcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJlZmV0Y2g7XG4gICAgfSgpO1xuICAgIHZhciBSZW1vdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIFJlbW90ZShvKSB7XG4gICAgICAgICAgICB0aGlzLnVybCA9IG8udXJsO1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlID0gby5wcmVwYXJlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBvLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IFRyYW5zcG9ydCh7XG4gICAgICAgICAgICAgICAgY2FjaGU6IG8uY2FjaGUsXG4gICAgICAgICAgICAgICAgbGltaXRlcjogby5saW1pdGVyLFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogby50cmFuc3BvcnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIF8ubWl4aW4oUmVtb3RlLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgX3NldHRpbmdzOiBmdW5jdGlvbiBzZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHF1ZXJ5LCBjYikge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncyA9IHRoaXMucHJlcGFyZShxdWVyeSwgdGhpcy5fc2V0dGluZ3MoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmdldChzZXR0aW5ncywgb25SZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25SZXNwb25zZShlcnIsIHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyID8gY2IoW10pIDogY2IodGhhdC50cmFuc2Zvcm0ocmVzcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxMYXN0UmVxdWVzdDogZnVuY3Rpb24gY2FuY2VsTGFzdFJlcXVlc3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2FuY2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVtb3RlO1xuICAgIH0oKTtcbiAgICB2YXIgb1BhcnNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBhcnNlKG8pIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cywgc29ydGVyO1xuICAgICAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZGVudGlmeTogXy5zdHJpbmdpZnksXG4gICAgICAgICAgICAgICAgZGF0dW1Ub2tlbml6ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgcXVlcnlUb2tlbml6ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VmZmljaWVudDogNSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9jYWw6IFtdLFxuICAgICAgICAgICAgICAgIHByZWZldGNoOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlbW90ZTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG8gPSBfLm1peGluKGRlZmF1bHRzLCBvIHx8IHt9KTtcbiAgICAgICAgICAgICFvLmRhdHVtVG9rZW5pemVyICYmICQuZXJyb3IoXCJkYXR1bVRva2VuaXplciBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICFvLnF1ZXJ5VG9rZW5pemVyICYmICQuZXJyb3IoXCJxdWVyeVRva2VuaXplciBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgIHNvcnRlciA9IG8uc29ydGVyO1xuICAgICAgICAgICAgby5zb3J0ZXIgPSBzb3J0ZXIgPyBmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHguc29ydChzb3J0ZXIpO1xuICAgICAgICAgICAgfSA6IF8uaWRlbnRpdHk7XG4gICAgICAgICAgICBvLmxvY2FsID0gXy5pc0Z1bmN0aW9uKG8ubG9jYWwpID8gby5sb2NhbCgpIDogby5sb2NhbDtcbiAgICAgICAgICAgIG8ucHJlZmV0Y2ggPSBwYXJzZVByZWZldGNoKG8ucHJlZmV0Y2gpO1xuICAgICAgICAgICAgby5yZW1vdGUgPSBwYXJzZVJlbW90ZShvLnJlbW90ZSk7XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VQcmVmZXRjaChvKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdHM7XG4gICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgICAgICB0dGw6IDI0ICogNjAgKiA2MCAqIDFlMyxcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICAgICAgICB0aHVtYnByaW50OiBcIlwiLFxuICAgICAgICAgICAgICAgIHByZXBhcmU6IF8uaWRlbnRpdHksXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBfLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG8gPSBfLmlzU3RyaW5nKG8pID8ge1xuICAgICAgICAgICAgICAgIHVybDogb1xuICAgICAgICAgICAgfSA6IG87XG4gICAgICAgICAgICBvID0gXy5taXhpbihkZWZhdWx0cywgbyk7XG4gICAgICAgICAgICAhby51cmwgJiYgJC5lcnJvcihcInByZWZldGNoIHJlcXVpcmVzIHVybCB0byBiZSBzZXRcIik7XG4gICAgICAgICAgICBvLnRyYW5zZm9ybSA9IG8uZmlsdGVyIHx8IG8udHJhbnNmb3JtO1xuICAgICAgICAgICAgby5jYWNoZUtleSA9IG8uY2FjaGVLZXkgfHwgby51cmw7XG4gICAgICAgICAgICBvLnRodW1icHJpbnQgPSBWRVJTSU9OICsgby50aHVtYnByaW50O1xuICAgICAgICAgICAgby50cmFuc3BvcnQgPSBvLnRyYW5zcG9ydCA/IGNhbGxiYWNrVG9EZWZlcnJlZChvLnRyYW5zcG9ydCkgOiAkLmFqYXg7XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZVJlbW90ZShvKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdHM7XG4gICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlcGFyZTogbnVsbCxcbiAgICAgICAgICAgICAgICByZXBsYWNlOiBudWxsLFxuICAgICAgICAgICAgICAgIHdpbGRjYXJkOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbWl0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgcmF0ZUxpbWl0Qnk6IFwiZGVib3VuY2VcIixcbiAgICAgICAgICAgICAgICByYXRlTGltaXRXYWl0OiAzMDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBfLmlkZW50aXR5LFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG8gPSBfLmlzU3RyaW5nKG8pID8ge1xuICAgICAgICAgICAgICAgIHVybDogb1xuICAgICAgICAgICAgfSA6IG87XG4gICAgICAgICAgICBvID0gXy5taXhpbihkZWZhdWx0cywgbyk7XG4gICAgICAgICAgICAhby51cmwgJiYgJC5lcnJvcihcInJlbW90ZSByZXF1aXJlcyB1cmwgdG8gYmUgc2V0XCIpO1xuICAgICAgICAgICAgby50cmFuc2Zvcm0gPSBvLmZpbHRlciB8fCBvLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIG8ucHJlcGFyZSA9IHRvUmVtb3RlUHJlcGFyZShvKTtcbiAgICAgICAgICAgIG8ubGltaXRlciA9IHRvTGltaXRlcihvKTtcbiAgICAgICAgICAgIG8udHJhbnNwb3J0ID0gby50cmFuc3BvcnQgPyBjYWxsYmFja1RvRGVmZXJyZWQoby50cmFuc3BvcnQpIDogJC5hamF4O1xuICAgICAgICAgICAgZGVsZXRlIG8ucmVwbGFjZTtcbiAgICAgICAgICAgIGRlbGV0ZSBvLndpbGRjYXJkO1xuICAgICAgICAgICAgZGVsZXRlIG8ucmF0ZUxpbWl0Qnk7XG4gICAgICAgICAgICBkZWxldGUgby5yYXRlTGltaXRXYWl0O1xuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9SZW1vdGVQcmVwYXJlKG8pIHtcbiAgICAgICAgICAgIHZhciBwcmVwYXJlLCByZXBsYWNlLCB3aWxkY2FyZDtcbiAgICAgICAgICAgIHByZXBhcmUgPSBvLnByZXBhcmU7XG4gICAgICAgICAgICByZXBsYWNlID0gby5yZXBsYWNlO1xuICAgICAgICAgICAgd2lsZGNhcmQgPSBvLndpbGRjYXJkO1xuICAgICAgICAgICAgaWYgKHByZXBhcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlcGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgcHJlcGFyZSA9IHByZXBhcmVCeVJlcGxhY2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8ud2lsZGNhcmQpIHtcbiAgICAgICAgICAgICAgICBwcmVwYXJlID0gcHJlcGFyZUJ5V2lsZGNhcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXBhcmUgPSBpZGVuaXR5UHJlcGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcmVwYXJlO1xuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZUJ5UmVwbGFjZShxdWVyeSwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy51cmwgPSByZXBsYWNlKHNldHRpbmdzLnVybCwgcXVlcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXBhcmVCeVdpbGRjYXJkKHF1ZXJ5LCBzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnVybCA9IHNldHRpbmdzLnVybC5yZXBsYWNlKHdpbGRjYXJkLCBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpZGVuaXR5UHJlcGFyZShxdWVyeSwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9MaW1pdGVyKG8pIHtcbiAgICAgICAgICAgIHZhciBsaW1pdGVyLCBtZXRob2QsIHdhaXQ7XG4gICAgICAgICAgICBsaW1pdGVyID0gby5saW1pdGVyO1xuICAgICAgICAgICAgbWV0aG9kID0gby5yYXRlTGltaXRCeTtcbiAgICAgICAgICAgIHdhaXQgPSBvLnJhdGVMaW1pdFdhaXQ7XG4gICAgICAgICAgICBpZiAoIWxpbWl0ZXIpIHtcbiAgICAgICAgICAgICAgICBsaW1pdGVyID0gL150aHJvdHRsZSQvaS50ZXN0KG1ldGhvZCkgPyB0aHJvdHRsZSh3YWl0KSA6IGRlYm91bmNlKHdhaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpbWl0ZXI7XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWJvdW5jZSh3YWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmRlYm91bmNlKGZuLCB3YWl0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdGhyb3R0bGUod2FpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB0aHJvdHRsZShmbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy50aHJvdHRsZShmbiwgd2FpdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYWxsYmFja1RvRGVmZXJyZWQoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG4gICAgICAgICAgICAgICAgZm4obywgb25TdWNjZXNzLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25TdWNjZXNzKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kZWZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbkVycm9yKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfLmRlZmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KCk7XG4gICAgdmFyIEJsb29kaG91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBvbGQ7XG4gICAgICAgIG9sZCA9IHdpbmRvdyAmJiB3aW5kb3cuQmxvb2Rob3VuZDtcbiAgICAgICAgZnVuY3Rpb24gQmxvb2Rob3VuZChvKSB7XG4gICAgICAgICAgICBvID0gb1BhcnNlcihvKTtcbiAgICAgICAgICAgIHRoaXMuc29ydGVyID0gby5zb3J0ZXI7XG4gICAgICAgICAgICB0aGlzLmlkZW50aWZ5ID0gby5pZGVudGlmeTtcbiAgICAgICAgICAgIHRoaXMuc3VmZmljaWVudCA9IG8uc3VmZmljaWVudDtcbiAgICAgICAgICAgIHRoaXMubG9jYWwgPSBvLmxvY2FsO1xuICAgICAgICAgICAgdGhpcy5yZW1vdGUgPSBvLnJlbW90ZSA/IG5ldyBSZW1vdGUoby5yZW1vdGUpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMucHJlZmV0Y2ggPSBvLnByZWZldGNoID8gbmV3IFByZWZldGNoKG8ucHJlZmV0Y2gpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBuZXcgU2VhcmNoSW5kZXgoe1xuICAgICAgICAgICAgICAgIGlkZW50aWZ5OiB0aGlzLmlkZW50aWZ5LFxuICAgICAgICAgICAgICAgIGRhdHVtVG9rZW5pemVyOiBvLmRhdHVtVG9rZW5pemVyLFxuICAgICAgICAgICAgICAgIHF1ZXJ5VG9rZW5pemVyOiBvLnF1ZXJ5VG9rZW5pemVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG8uaW5pdGlhbGl6ZSAhPT0gZmFsc2UgJiYgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgQmxvb2Rob3VuZC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgICAgIHdpbmRvdyAmJiAod2luZG93LkJsb29kaG91bmQgPSBvbGQpO1xuICAgICAgICAgICAgcmV0dXJuIEJsb29kaG91bmQ7XG4gICAgICAgIH07XG4gICAgICAgIEJsb29kaG91bmQudG9rZW5pemVycyA9IHRva2VuaXplcnM7XG4gICAgICAgIF8ubWl4aW4oQmxvb2Rob3VuZC5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIF9fdHRBZGFwdGVyOiBmdW5jdGlvbiB0dEFkYXB0ZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW90ZSA/IHdpdGhBc3luYyA6IHdpdGhvdXRBc3luYztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3aXRoQXN5bmMocXVlcnksIHN5bmMsIGFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnNlYXJjaChxdWVyeSwgc3luYywgYXN5bmMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3aXRob3V0QXN5bmMocXVlcnksIHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuc2VhcmNoKHF1ZXJ5LCBzeW5jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2xvYWRQcmVmZXRjaDogZnVuY3Rpb24gbG9hZFByZWZldGNoKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgZGVmZXJyZWQsIHNlcmlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlcmlhbGl6ZWQgPSB0aGlzLnByZWZldGNoLmZyb21DYWNoZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXguYm9vdHN0cmFwKHNlcmlhbGl6ZWQpO1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmZXRjaC5mcm9tTmV0d29yayhkb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb25lKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hZGQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucHJlZmV0Y2guc3RvcmUodGhhdC5pbmRleC5zZXJpYWxpemUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2luaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBkZWZlcnJlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgKHRoaXMuaW5pdFByb21pc2UgPSB0aGlzLl9sb2FkUHJlZmV0Y2goKSkuZG9uZShhZGRMb2NhbFRvSW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRQcm9taXNlO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZExvY2FsVG9JbmRleCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hZGQodGhhdC5sb2NhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoZm9yY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaW5pdFByb21pc2UgfHwgZm9yY2UgPyB0aGlzLl9pbml0aWFsaXplKCkgOiB0aGlzLmluaXRQcm9taXNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZDogZnVuY3Rpb24gYWRkKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4LmFkZChkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChpZHMpIHtcbiAgICAgICAgICAgICAgICBpZHMgPSBfLmlzQXJyYXkoaWRzKSA/IGlkcyA6IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleC5nZXQoaWRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2g6IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgc3luYywgYXN5bmMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsIGxvY2FsO1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy5zb3J0ZXIodGhpcy5pbmRleC5zZWFyY2gocXVlcnkpKTtcbiAgICAgICAgICAgICAgICBzeW5jKHRoaXMucmVtb3RlID8gbG9jYWwuc2xpY2UoKSA6IGxvY2FsKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1vdGUgJiYgbG9jYWwubGVuZ3RoIDwgdGhpcy5zdWZmaWNpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3RlLmdldChxdWVyeSwgcHJvY2Vzc1JlbW90ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZS5jYW5jZWxMYXN0UmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9uRHVwbGljYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2gocmVtb3RlLCBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhXy5zb21lKGxvY2FsLCBmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuaWRlbnRpZnkocikgPT09IHRoYXQuaWRlbnRpZnkobCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAmJiBub25EdXBsaWNhdGVzLnB1c2gocik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhc3luYyAmJiBhc3luYyhub25EdXBsaWNhdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXguYWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgucmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhclByZWZldGNoQ2FjaGU6IGZ1bmN0aW9uIGNsZWFyUHJlZmV0Y2hDYWNoZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZldGNoICYmIHRoaXMucHJlZmV0Y2guY2xlYXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhclJlbW90ZUNhY2hlOiBmdW5jdGlvbiBjbGVhclJlbW90ZUNhY2hlKCkge1xuICAgICAgICAgICAgICAgIFRyYW5zcG9ydC5yZXNldENhY2hlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHRBZGFwdGVyOiBmdW5jdGlvbiB0dEFkYXB0ZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190dEFkYXB0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBCbG9vZGhvdW5kO1xuICAgIH0oKTtcbiAgICByZXR1cm4gQmxvb2Rob3VuZDtcbn0pO1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoXCJ0eXBlYWhlYWQuanNcIiwgWyBcImpxdWVyeVwiIF0sIGZ1bmN0aW9uKGEwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShhMCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigkKSB7XG4gICAgdmFyIF8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc01zaWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKG1zaWUgfHJ2OikoXFxkKyguXFxkKyk/KS9pKVsyXSA6IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQmxhbmtTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhc3RyIHx8IC9eXFxzKiQvLnRlc3Qoc3RyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlc2NhcGVSZWdFeENoYXJzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCBcIlxcXFwkJlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1N0cmluZzogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNOdW1iZXI6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQXJyYXk6ICQuaXNBcnJheSxcbiAgICAgICAgICAgIGlzRnVuY3Rpb246ICQuaXNGdW5jdGlvbixcbiAgICAgICAgICAgIGlzT2JqZWN0OiAkLmlzUGxhaW5PYmplY3QsXG4gICAgICAgICAgICBpc1VuZGVmaW5lZDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNFbGVtZW50OiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNKUXVlcnk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiAkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU3RyOiBmdW5jdGlvbiB0b1N0cihzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaXNVbmRlZmluZWQocykgfHwgcyA9PT0gbnVsbCA/IFwiXCIgOiBzICsgXCJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kOiAkLnByb3h5LFxuICAgICAgICAgICAgZWFjaDogZnVuY3Rpb24oY29sbGVjdGlvbiwgY2IpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goY29sbGVjdGlvbiwgcmV2ZXJzZUFyZ3MpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldmVyc2VBcmdzKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFwOiAkLm1hcCxcbiAgICAgICAgICAgIGZpbHRlcjogJC5ncmVwLFxuICAgICAgICAgICAgZXZlcnk6IGZ1bmN0aW9uKG9iaiwgdGVzdCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQuZWFjaChvYmosIGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHJlc3VsdCA9IHRlc3QuY2FsbChudWxsLCB2YWwsIGtleSwgb2JqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzb21lOiBmdW5jdGlvbihvYmosIHRlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJC5lYWNoKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9IHRlc3QuY2FsbChudWxsLCB2YWwsIGtleSwgb2JqKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1peGluOiAkLmV4dGVuZCxcbiAgICAgICAgICAgIGlkZW50aXR5OiBmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7fSwgb2JqKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJZEdlbmVyYXRvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRpZnk6IGZ1bmN0aW9uIHRlbXBsYXRpZnkob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihvYmopID8gb2JqIDogdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdGVtcGxhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmZXI6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVib3VuY2U6IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0LCByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHMsIGxhdGVyLCBjYWxsTm93O1xuICAgICAgICAgICAgICAgICAgICBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhyb3R0bGU6IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCwgYXJncywgdGltZW91dCwgcmVzdWx0LCBwcmV2aW91cywgbGF0ZXI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPSAwO1xuICAgICAgICAgICAgICAgIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmlzU3RyaW5nKHZhbCkgPyB2YWwgOiBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vb3A6IGZ1bmN0aW9uKCkge31cbiAgICAgICAgfTtcbiAgICB9KCk7XG4gICAgdmFyIFdXVyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGRlZmF1bHRDbGFzc05hbWVzID0ge1xuICAgICAgICAgICAgd3JhcHBlcjogXCJ0d2l0dGVyLXR5cGVhaGVhZFwiLFxuICAgICAgICAgICAgaW5wdXQ6IFwidHQtaW5wdXRcIixcbiAgICAgICAgICAgIGhpbnQ6IFwidHQtaGludFwiLFxuICAgICAgICAgICAgbWVudTogXCJ0dC1tZW51XCIsXG4gICAgICAgICAgICBkYXRhc2V0OiBcInR0LWRhdGFzZXRcIixcbiAgICAgICAgICAgIHN1Z2dlc3Rpb246IFwidHQtc3VnZ2VzdGlvblwiLFxuICAgICAgICAgICAgc2VsZWN0YWJsZTogXCJ0dC1zZWxlY3RhYmxlXCIsXG4gICAgICAgICAgICBlbXB0eTogXCJ0dC1lbXB0eVwiLFxuICAgICAgICAgICAgb3BlbjogXCJ0dC1vcGVuXCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwidHQtY3Vyc29yXCIsXG4gICAgICAgICAgICBoaWdobGlnaHQ6IFwidHQtaGlnaGxpZ2h0XCJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ1aWxkO1xuICAgICAgICBmdW5jdGlvbiBidWlsZChvKSB7XG4gICAgICAgICAgICB2YXIgd3d3LCBjbGFzc2VzO1xuICAgICAgICAgICAgY2xhc3NlcyA9IF8ubWl4aW4oe30sIGRlZmF1bHRDbGFzc05hbWVzLCBvKTtcbiAgICAgICAgICAgIHd3dyA9IHtcbiAgICAgICAgICAgICAgICBjc3M6IGJ1aWxkQ3NzKCksXG4gICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBodG1sOiBidWlsZEh0bWwoY2xhc3NlcyksXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBidWlsZFNlbGVjdG9ycyhjbGFzc2VzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3NzOiB3d3cuY3NzLFxuICAgICAgICAgICAgICAgIGh0bWw6IHd3dy5odG1sLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IHd3dy5jbGFzc2VzLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yczogd3d3LnNlbGVjdG9ycyxcbiAgICAgICAgICAgICAgICBtaXhpbjogZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICBfLm1peGluKG8sIHd3dyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZEh0bWwoYykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiAnPHNwYW4gY2xhc3M9XCInICsgYy53cmFwcGVyICsgJ1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgIG1lbnU6ICc8ZGl2IGNsYXNzPVwiJyArIGMubWVudSArICdcIj48L2Rpdj4nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkU2VsZWN0b3JzKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvcnMgPSB7fTtcbiAgICAgICAgICAgIF8uZWFjaChjbGFzc2VzLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzW2tdID0gXCIuXCIgKyB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkQ3NzKCkge1xuICAgICAgICAgICAgdmFyIGNzcyA9IHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXRXaXRoTm9IaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lbnU6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGx0cjoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBydGw6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIiAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKF8uaXNNc2llKCkpIHtcbiAgICAgICAgICAgICAgICBfLm1peGluKGNzcy5pbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNylcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgICAgfVxuICAgIH0oKTtcbiAgICB2YXIgRXZlbnRCdXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBuYW1lc3BhY2UsIGRlcHJlY2F0aW9uTWFwO1xuICAgICAgICBuYW1lc3BhY2UgPSBcInR5cGVhaGVhZDpcIjtcbiAgICAgICAgZGVwcmVjYXRpb25NYXAgPSB7XG4gICAgICAgICAgICByZW5kZXI6IFwicmVuZGVyZWRcIixcbiAgICAgICAgICAgIGN1cnNvcmNoYW5nZTogXCJjdXJzb3JjaGFuZ2VkXCIsXG4gICAgICAgICAgICBzZWxlY3Q6IFwic2VsZWN0ZWRcIixcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJhdXRvY29tcGxldGVkXCJcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gRXZlbnRCdXMobykge1xuICAgICAgICAgICAgaWYgKCFvIHx8ICFvLmVsKSB7XG4gICAgICAgICAgICAgICAgJC5lcnJvcihcIkV2ZW50QnVzIGluaXRpYWxpemVkIHdpdGhvdXQgZWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbCA9ICQoby5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5taXhpbihFdmVudEJ1cy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIF90cmlnZ2VyOiBmdW5jdGlvbih0eXBlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRlO1xuICAgICAgICAgICAgICAgICRlID0gJC5FdmVudChuYW1lc3BhY2UgKyB0eXBlKTtcbiAgICAgICAgICAgICAgICAoYXJncyA9IGFyZ3MgfHwgW10pLnVuc2hpZnQoJGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLnRyaWdnZXIuYXBwbHkodGhpcy4kZWwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncywgJGU7XG4gICAgICAgICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAkZSA9IHRoaXMuX3RyaWdnZXIoXCJiZWZvcmVcIiArIHR5cGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlcHJlY2F0ZWRUeXBlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIodHlwZSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVwcmVjYXRlZFR5cGUgPSBkZXByZWNhdGlvbk1hcFt0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyKGRlcHJlY2F0ZWRUeXBlLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBFdmVudEJ1cztcbiAgICB9KCk7XG4gICAgdmFyIEV2ZW50RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIHNwbGl0dGVyID0gL1xccysvLCBuZXh0VGljayA9IGdldE5leHRUaWNrKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvblN5bmM6IG9uU3luYyxcbiAgICAgICAgICAgIG9uQXN5bmM6IG9uQXN5bmMsXG4gICAgICAgICAgICBvZmY6IG9mZixcbiAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXJcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gb24obWV0aG9kLCB0eXBlcywgY2IsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHlwZXMgPSB0eXBlcy5zcGxpdChzcGxpdHRlcik7XG4gICAgICAgICAgICBjYiA9IGNvbnRleHQgPyBiaW5kQ29udGV4dChjYiwgY29udGV4dCkgOiBjYjtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgICAgICAgICAgIHdoaWxlICh0eXBlID0gdHlwZXMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1t0eXBlXSA9IHRoaXMuX2NhbGxiYWNrc1t0eXBlXSB8fCB7XG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1t0eXBlXVttZXRob2RdLnB1c2goY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Bc3luYyh0eXBlcywgY2IsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBvbi5jYWxsKHRoaXMsIFwiYXN5bmNcIiwgdHlwZXMsIGNiLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblN5bmModHlwZXMsIGNiLCBjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gb24uY2FsbCh0aGlzLCBcInN5bmNcIiwgdHlwZXMsIGNiLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvZmYodHlwZXMpIHtcbiAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR5cGVzID0gdHlwZXMuc3BsaXQoc3BsaXR0ZXIpO1xuICAgICAgICAgICAgd2hpbGUgKHR5cGUgPSB0eXBlcy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRyaWdnZXIodHlwZXMpIHtcbiAgICAgICAgICAgIHZhciB0eXBlLCBjYWxsYmFja3MsIGFyZ3MsIHN5bmNGbHVzaCwgYXN5bmNGbHVzaDtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlcyA9IHR5cGVzLnNwbGl0KHNwbGl0dGVyKTtcbiAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICB3aGlsZSAoKHR5cGUgPSB0eXBlcy5zaGlmdCgpKSAmJiAoY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW3R5cGVdKSkge1xuICAgICAgICAgICAgICAgIHN5bmNGbHVzaCA9IGdldEZsdXNoKGNhbGxiYWNrcy5zeW5jLCB0aGlzLCBbIHR5cGUgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgICAgIGFzeW5jRmx1c2ggPSBnZXRGbHVzaChjYWxsYmFja3MuYXN5bmMsIHRoaXMsIFsgdHlwZSBdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICAgICAgc3luY0ZsdXNoKCkgJiYgbmV4dFRpY2soYXN5bmNGbHVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRGbHVzaChjYWxsYmFja3MsIGNvbnRleHQsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmbHVzaDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgICAgICAgICAgIHZhciBjYW5jZWxsZWQ7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7ICFjYW5jZWxsZWQgJiYgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IGNhbGxiYWNrc1tpXS5hcHBseShjb250ZXh0LCBhcmdzKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhY2FuY2VsbGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRUaWNrKCkge1xuICAgICAgICAgICAgdmFyIG5leHRUaWNrRm47XG4gICAgICAgICAgICBpZiAod2luZG93LnNldEltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIG5leHRUaWNrRm4gPSBmdW5jdGlvbiBuZXh0VGlja1NldEltbWVkaWF0ZShmbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0VGlja0ZuID0gZnVuY3Rpb24gbmV4dFRpY2tTZXRUaW1lb3V0KGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrRm47XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYmluZENvbnRleHQoZm4sIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5iaW5kID8gZm4uYmluZChjb250ZXh0KSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSgpO1xuICAgIHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbihkb2MpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICBwYXR0ZXJuOiBudWxsLFxuICAgICAgICAgICAgdGFnTmFtZTogXCJzdHJvbmdcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHdvcmRzT25seTogZmFsc2UsXG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gaGlnaHRsaWdodChvKSB7XG4gICAgICAgICAgICB2YXIgcmVnZXg7XG4gICAgICAgICAgICBvID0gXy5taXhpbih7fSwgZGVmYXVsdHMsIG8pO1xuICAgICAgICAgICAgaWYgKCFvLm5vZGUgfHwgIW8ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8ucGF0dGVybiA9IF8uaXNBcnJheShvLnBhdHRlcm4pID8gby5wYXR0ZXJuIDogWyBvLnBhdHRlcm4gXTtcbiAgICAgICAgICAgIHJlZ2V4ID0gZ2V0UmVnZXgoby5wYXR0ZXJuLCBvLmNhc2VTZW5zaXRpdmUsIG8ud29yZHNPbmx5KTtcbiAgICAgICAgICAgIHRyYXZlcnNlKG8ubm9kZSwgaGlnaHRsaWdodFRleHROb2RlKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2h0bGlnaHRUZXh0Tm9kZSh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCwgcGF0dGVybk5vZGUsIHdyYXBwZXJOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IHJlZ2V4LmV4ZWModGV4dE5vZGUuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlck5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudChvLnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBvLmNsYXNzTmFtZSAmJiAod3JhcHBlck5vZGUuY2xhc3NOYW1lID0gby5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTm9kZSA9IHRleHROb2RlLnNwbGl0VGV4dChtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5Ob2RlLnNwbGl0VGV4dChtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyTm9kZS5hcHBlbmRDaGlsZChwYXR0ZXJuTm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh3cmFwcGVyTm9kZSwgcGF0dGVybk5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISFtYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKGVsLCBoaWdodGxpZ2h0VGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlLCBURVhUX05PREVfVFlQRSA9IDM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IFRFWFRfTk9ERV9UWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IGhpZ2h0bGlnaHRUZXh0Tm9kZShjaGlsZE5vZGUpID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShjaGlsZE5vZGUsIGhpZ2h0bGlnaHRUZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGdldFJlZ2V4KHBhdHRlcm5zLCBjYXNlU2Vuc2l0aXZlLCB3b3Jkc09ubHkpIHtcbiAgICAgICAgICAgIHZhciBlc2NhcGVkUGF0dGVybnMgPSBbXSwgcmVnZXhTdHI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0dGVybnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlc2NhcGVkUGF0dGVybnMucHVzaChfLmVzY2FwZVJlZ0V4Q2hhcnMocGF0dGVybnNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZ2V4U3RyID0gd29yZHNPbmx5ID8gXCJcXFxcYihcIiArIGVzY2FwZWRQYXR0ZXJucy5qb2luKFwifFwiKSArIFwiKVxcXFxiXCIgOiBcIihcIiArIGVzY2FwZWRQYXR0ZXJucy5qb2luKFwifFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgcmV0dXJuIGNhc2VTZW5zaXRpdmUgPyBuZXcgUmVnRXhwKHJlZ2V4U3RyKSA6IG5ldyBSZWdFeHAocmVnZXhTdHIsIFwiaVwiKTtcbiAgICAgICAgfVxuICAgIH0od2luZG93LmRvY3VtZW50KTtcbiAgICB2YXIgSW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBzcGVjaWFsS2V5Q29kZU1hcDtcbiAgICAgICAgc3BlY2lhbEtleUNvZGVNYXAgPSB7XG4gICAgICAgICAgICA5OiBcInRhYlwiLFxuICAgICAgICAgICAgMjc6IFwiZXNjXCIsXG4gICAgICAgICAgICAzNzogXCJsZWZ0XCIsXG4gICAgICAgICAgICAzOTogXCJyaWdodFwiLFxuICAgICAgICAgICAgMTM6IFwiZW50ZXJcIixcbiAgICAgICAgICAgIDM4OiBcInVwXCIsXG4gICAgICAgICAgICA0MDogXCJkb3duXCJcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gSW5wdXQobywgd3d3KSB7XG4gICAgICAgICAgICBvID0gbyB8fCB7fTtcbiAgICAgICAgICAgIGlmICghby5pbnB1dCkge1xuICAgICAgICAgICAgICAgICQuZXJyb3IoXCJpbnB1dCBpcyBtaXNzaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3d3Lm1peGluKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kaGludCA9ICQoby5oaW50KTtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0ID0gJChvLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLiRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlXaGVuRm9jdXNlZCA9IHRoaXMuaGFzRm9jdXMoKSA/IHRoaXMucXVlcnkgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmZsb3dIZWxwZXIgPSBidWlsZE92ZXJmbG93SGVscGVyKHRoaXMuJGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTGFuZ3VhZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRoaW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGludCA9IHRoaXMuZ2V0SGludCA9IHRoaXMuY2xlYXJIaW50ID0gdGhpcy5jbGVhckhpbnRJZkludmFsaWQgPSBfLm5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQubm9ybWFsaXplUXVlcnkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBfLnRvU3RyKHN0cikucmVwbGFjZSgvXlxccyovZywgXCJcIikucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIik7XG4gICAgICAgIH07XG4gICAgICAgIF8ubWl4aW4oSW5wdXQucHJvdG90eXBlLCBFdmVudEVtaXR0ZXIsIHtcbiAgICAgICAgICAgIF9vbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihcImJsdXJyZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVdoZW5Gb2N1c2VkID0gdGhpcy5xdWVyeTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vbktleWRvd246IGZ1bmN0aW9uIG9uS2V5ZG93bigkZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlOYW1lID0gc3BlY2lhbEtleUNvZGVNYXBbJGUud2hpY2ggfHwgJGUua2V5Q29kZV07XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlUHJldmVudERlZmF1bHQoa2V5TmFtZSwgJGUpO1xuICAgICAgICAgICAgICAgIGlmIChrZXlOYW1lICYmIHRoaXMuX3Nob3VsZFRyaWdnZXIoa2V5TmFtZSwgJGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihrZXlOYW1lICsgXCJLZXllZFwiLCAkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vbklucHV0OiBmdW5jdGlvbiBvbklucHV0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldFF1ZXJ5KHRoaXMuZ2V0SW5wdXRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySGludElmSW52YWxpZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrTGFuZ3VhZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfbWFuYWdlUHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIG1hbmFnZVByZXZlbnREZWZhdWx0KGtleU5hbWUsICRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCA9ICF3aXRoTW9kaWZpZXIoJGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgJiYgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfc2hvdWxkVHJpZ2dlcjogZnVuY3Rpb24gc2hvdWxkVHJpZ2dlcihrZXlOYW1lLCAkZSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcInRhYlwiOlxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyID0gIXdpdGhNb2RpZmllcigkZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2NoZWNrTGFuZ3VhZ2VEaXJlY3Rpb246IGZ1bmN0aW9uIGNoZWNrTGFuZ3VhZ2VEaXJlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9ICh0aGlzLiRpbnB1dC5jc3MoXCJkaXJlY3Rpb25cIikgfHwgXCJsdHJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXIgIT09IGRpcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGludC5hdHRyKFwiZGlyXCIsIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihcImxhbmdEaXJDaGFuZ2VkXCIsIGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9zZXRRdWVyeTogZnVuY3Rpb24gc2V0UXVlcnkodmFsLCBzaWxlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJlRXF1aXZhbGVudCwgaGFzRGlmZmVyZW50V2hpdGVzcGFjZTtcbiAgICAgICAgICAgICAgICBhcmVFcXVpdmFsZW50ID0gYXJlUXVlcmllc0VxdWl2YWxlbnQodmFsLCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBoYXNEaWZmZXJlbnRXaGl0ZXNwYWNlID0gYXJlRXF1aXZhbGVudCA/IHRoaXMucXVlcnkubGVuZ3RoICE9PSB2YWwubGVuZ3RoIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHZhbDtcbiAgICAgICAgICAgICAgICBpZiAoIXNpbGVudCAmJiAhYXJlRXF1aXZhbGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJxdWVyeUNoYW5nZWRcIiwgdGhpcy5xdWVyeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2lsZW50ICYmIGhhc0RpZmZlcmVudFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKFwid2hpdGVzcGFjZUNoYW5nZWRcIiwgdGhpcy5xdWVyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgb25CbHVyLCBvbkZvY3VzLCBvbktleWRvd24sIG9uSW5wdXQ7XG4gICAgICAgICAgICAgICAgb25CbHVyID0gXy5iaW5kKHRoaXMuX29uQmx1ciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgb25Gb2N1cyA9IF8uYmluZCh0aGlzLl9vbkZvY3VzLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBvbktleWRvd24gPSBfLmJpbmQodGhpcy5fb25LZXlkb3duLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBvbklucHV0ID0gXy5iaW5kKHRoaXMuX29uSW5wdXQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGlucHV0Lm9uKFwiYmx1ci50dFwiLCBvbkJsdXIpLm9uKFwiZm9jdXMudHRcIiwgb25Gb2N1cykub24oXCJrZXlkb3duLnR0XCIsIG9uS2V5ZG93bik7XG4gICAgICAgICAgICAgICAgaWYgKCFfLmlzTXNpZSgpIHx8IF8uaXNNc2llKCkgPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGlucHV0Lm9uKFwiaW5wdXQudHRcIiwgb25JbnB1dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQub24oXCJrZXlkb3duLnR0IGtleXByZXNzLnR0IGN1dC50dCBwYXN0ZS50dFwiLCBmdW5jdGlvbigkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpYWxLZXlDb2RlTWFwWyRlLndoaWNoIHx8ICRlLmtleUNvZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kZWZlcihfLmJpbmQodGhhdC5fb25JbnB1dCwgdGhhdCwgJGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldExhbmdEaXI6IGZ1bmN0aW9uIGdldExhbmdEaXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFF1ZXJ5OiBmdW5jdGlvbiBnZXRRdWVyeSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeSB8fCBcIlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFF1ZXJ5OiBmdW5jdGlvbiBzZXRRdWVyeSh2YWwsIHNpbGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldFF1ZXJ5KHZhbCwgc2lsZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNRdWVyeUNoYW5nZWRTaW5jZUxhc3RGb2N1czogZnVuY3Rpb24gaGFzUXVlcnlDaGFuZ2VkU2luY2VMYXN0Rm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkgIT09IHRoaXMucXVlcnlXaGVuRm9jdXNlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJbnB1dFZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySGludElmSW52YWxpZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrTGFuZ3VhZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldElucHV0VmFsdWU6IGZ1bmN0aW9uIHJlc2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy5xdWVyeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SGludDogZnVuY3Rpb24gZ2V0SGludCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaGludC52YWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRIaW50OiBmdW5jdGlvbiBzZXRIaW50KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGludC52YWwodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGludDogZnVuY3Rpb24gY2xlYXJIaW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGludChcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpbnRJZkludmFsaWQ6IGZ1bmN0aW9uIGNsZWFySGludElmSW52YWxpZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsLCBoaW50LCB2YWxJc1ByZWZpeE9mSGludCwgaXNWYWxpZDtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmdldElucHV0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBoaW50ID0gdGhpcy5nZXRIaW50KCk7XG4gICAgICAgICAgICAgICAgdmFsSXNQcmVmaXhPZkhpbnQgPSB2YWwgIT09IGhpbnQgJiYgaGludC5pbmRleE9mKHZhbCkgPT09IDA7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHZhbCAhPT0gXCJcIiAmJiB2YWxJc1ByZWZpeE9mSGludCAmJiAhdGhpcy5oYXNPdmVyZmxvdygpO1xuICAgICAgICAgICAgICAgICFpc1ZhbGlkICYmIHRoaXMuY2xlYXJIaW50KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzRm9jdXM6IGZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRpbnB1dC5pcyhcIjpmb2N1c1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNPdmVyZmxvdzogZnVuY3Rpb24gaGFzT3ZlcmZsb3coKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSB0aGlzLiRpbnB1dC53aWR0aCgpIC0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVyZmxvd0hlbHBlci50ZXh0KHRoaXMuZ2V0SW5wdXRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kb3ZlcmZsb3dIZWxwZXIud2lkdGgoKSA+PSBjb25zdHJhaW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQ3Vyc29yQXRFbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUxlbmd0aCwgc2VsZWN0aW9uU3RhcnQsIHJhbmdlO1xuICAgICAgICAgICAgICAgIHZhbHVlTGVuZ3RoID0gdGhpcy4kaW5wdXQudmFsKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gdGhpcy4kaW5wdXRbMF0uc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNOdW1iZXIoc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb25TdGFydCA9PT0gdmFsdWVMZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC12YWx1ZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZUxlbmd0aCA9PT0gcmFuZ2UudGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGludC5vZmYoXCIudHRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQub2ZmKFwiLnR0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJmbG93SGVscGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGhpbnQgPSB0aGlzLiRpbnB1dCA9IHRoaXMuJG92ZXJmbG93SGVscGVyID0gJChcIjxkaXY+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElucHV0O1xuICAgICAgICBmdW5jdGlvbiBidWlsZE92ZXJmbG93SGVscGVyKCRpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuICQoJzxwcmUgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9wcmU+JykuY3NzKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJwcmVcIixcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAkaW5wdXQuY3NzKFwiZm9udC1mYW1pbHlcIiksXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICRpbnB1dC5jc3MoXCJmb250LXNpemVcIiksXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiAkaW5wdXQuY3NzKFwiZm9udC1zdHlsZVwiKSxcbiAgICAgICAgICAgICAgICBmb250VmFyaWFudDogJGlucHV0LmNzcyhcImZvbnQtdmFyaWFudFwiKSxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAkaW5wdXQuY3NzKFwiZm9udC13ZWlnaHRcIiksXG4gICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6ICRpbnB1dC5jc3MoXCJ3b3JkLXNwYWNpbmdcIiksXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJGlucHV0LmNzcyhcImxldHRlci1zcGFjaW5nXCIpLFxuICAgICAgICAgICAgICAgIHRleHRJbmRlbnQ6ICRpbnB1dC5jc3MoXCJ0ZXh0LWluZGVudFwiKSxcbiAgICAgICAgICAgICAgICB0ZXh0UmVuZGVyaW5nOiAkaW5wdXQuY3NzKFwidGV4dC1yZW5kZXJpbmdcIiksXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJGlucHV0LmNzcyhcInRleHQtdHJhbnNmb3JtXCIpXG4gICAgICAgICAgICB9KS5pbnNlcnRBZnRlcigkaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyZVF1ZXJpZXNFcXVpdmFsZW50KGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnB1dC5ub3JtYWxpemVRdWVyeShhKSA9PT0gSW5wdXQubm9ybWFsaXplUXVlcnkoYik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2l0aE1vZGlmaWVyKCRlKSB7XG4gICAgICAgICAgICByZXR1cm4gJGUuYWx0S2V5IHx8ICRlLmN0cmxLZXkgfHwgJGUubWV0YUtleSB8fCAkZS5zaGlmdEtleTtcbiAgICAgICAgfVxuICAgIH0oKTtcbiAgICB2YXIgRGF0YXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGtleXMsIG5hbWVHZW5lcmF0b3I7XG4gICAgICAgIGtleXMgPSB7XG4gICAgICAgICAgICB2YWw6IFwidHQtc2VsZWN0YWJsZS1kaXNwbGF5XCIsXG4gICAgICAgICAgICBvYmo6IFwidHQtc2VsZWN0YWJsZS1vYmplY3RcIlxuICAgICAgICB9O1xuICAgICAgICBuYW1lR2VuZXJhdG9yID0gXy5nZXRJZEdlbmVyYXRvcigpO1xuICAgICAgICBmdW5jdGlvbiBEYXRhc2V0KG8sIHd3dykge1xuICAgICAgICAgICAgbyA9IG8gfHwge307XG4gICAgICAgICAgICBvLnRlbXBsYXRlcyA9IG8udGVtcGxhdGVzIHx8IHt9O1xuICAgICAgICAgICAgby50ZW1wbGF0ZXMubm90Rm91bmQgPSBvLnRlbXBsYXRlcy5ub3RGb3VuZCB8fCBvLnRlbXBsYXRlcy5lbXB0eTtcbiAgICAgICAgICAgIGlmICghby5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAkLmVycm9yKFwibWlzc2luZyBzb3VyY2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW8ubm9kZSkge1xuICAgICAgICAgICAgICAgICQuZXJyb3IoXCJtaXNzaW5nIG5vZGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoby5uYW1lICYmICFpc1ZhbGlkTmFtZShvLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgJC5lcnJvcihcImludmFsaWQgZGF0YXNldCBuYW1lOiBcIiArIG8ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3d3cubWl4aW4odGhpcyk7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICEhby5oaWdobGlnaHQ7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBvLm5hbWUgfHwgbmFtZUdlbmVyYXRvcigpO1xuICAgICAgICAgICAgdGhpcy5saW1pdCA9IG8ubGltaXQgfHwgNTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZuID0gZ2V0RGlzcGxheUZuKG8uZGlzcGxheSB8fCBvLmRpc3BsYXlLZXkpO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBnZXRUZW1wbGF0ZXMoby50ZW1wbGF0ZXMsIHRoaXMuZGlzcGxheUZuKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gby5zb3VyY2UuX190dEFkYXB0ZXIgPyBvLnNvdXJjZS5fX3R0QWRhcHRlcigpIDogby5zb3VyY2U7XG4gICAgICAgICAgICB0aGlzLmFzeW5jID0gXy5pc1VuZGVmaW5lZChvLmFzeW5jKSA/IHRoaXMuc291cmNlLmxlbmd0aCA+IDIgOiAhIW8uYXN5bmM7XG4gICAgICAgICAgICB0aGlzLl9yZXNldExhc3RTdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLiRlbCA9ICQoby5ub2RlKS5hZGRDbGFzcyh0aGlzLmNsYXNzZXMuZGF0YXNldCkuYWRkQ2xhc3ModGhpcy5jbGFzc2VzLmRhdGFzZXQgKyBcIi1cIiArIHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgRGF0YXNldC5leHRyYWN0RGF0YSA9IGZ1bmN0aW9uIGV4dHJhY3REYXRhKGVsKSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBpZiAoJGVsLmRhdGEoa2V5cy5vYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsOiAkZWwuZGF0YShrZXlzLnZhbCkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqOiAkZWwuZGF0YShrZXlzLm9iaikgfHwgbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgXy5taXhpbihEYXRhc2V0LnByb3RvdHlwZSwgRXZlbnRFbWl0dGVyLCB7XG4gICAgICAgICAgICBfb3ZlcndyaXRlOiBmdW5jdGlvbiBvdmVyd3JpdGUocXVlcnksIHN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclN1Z2dlc3Rpb25zKHF1ZXJ5LCBzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFzeW5jICYmIHRoaXMudGVtcGxhdGVzLnBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyUGVuZGluZyhxdWVyeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hc3luYyAmJiB0aGlzLnRlbXBsYXRlcy5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJOb3RGb3VuZChxdWVyeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKFwicmVuZGVyZWRcIiwgdGhpcy5uYW1lLCBzdWdnZXN0aW9ucywgZmFsc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZChxdWVyeSwgc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggJiYgdGhpcy4kbGFzdFN1Z2dlc3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFN1Z2dlc3Rpb25zKHF1ZXJ5LCBzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyU3VnZ2VzdGlvbnMocXVlcnksIHN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLiRsYXN0U3VnZ2VzdGlvbi5sZW5ndGggJiYgdGhpcy50ZW1wbGF0ZXMubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyTm90Rm91bmQocXVlcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJyZW5kZXJlZFwiLCB0aGlzLm5hbWUsIHN1Z2dlc3Rpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVuZGVyU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIHJlbmRlclN1Z2dlc3Rpb25zKHF1ZXJ5LCBzdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciAkZnJhZ21lbnQ7XG4gICAgICAgICAgICAgICAgJGZyYWdtZW50ID0gdGhpcy5fZ2V0U3VnZ2VzdGlvbnNGcmFnbWVudChxdWVyeSwgc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxhc3RTdWdnZXN0aW9uID0gJGZyYWdtZW50LmNoaWxkcmVuKCkubGFzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmh0bWwoJGZyYWdtZW50KS5wcmVwZW5kKHRoaXMuX2dldEhlYWRlcihxdWVyeSwgc3VnZ2VzdGlvbnMpKS5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKHF1ZXJ5LCBzdWdnZXN0aW9ucykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9hcHBlbmRTdWdnZXN0aW9uczogZnVuY3Rpb24gYXBwZW5kU3VnZ2VzdGlvbnMocXVlcnksIHN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyICRmcmFnbWVudCwgJGxhc3RTdWdnZXN0aW9uO1xuICAgICAgICAgICAgICAgICRmcmFnbWVudCA9IHRoaXMuX2dldFN1Z2dlc3Rpb25zRnJhZ21lbnQocXVlcnksIHN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICAgICAgICAkbGFzdFN1Z2dlc3Rpb24gPSAkZnJhZ21lbnQuY2hpbGRyZW4oKS5sYXN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbGFzdFN1Z2dlc3Rpb24uYWZ0ZXIoJGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsYXN0U3VnZ2VzdGlvbiA9ICRsYXN0U3VnZ2VzdGlvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVuZGVyUGVuZGluZzogZnVuY3Rpb24gcmVuZGVyUGVuZGluZyhxdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLnBlbmRpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRMYXN0U3VnZ2VzdGlvbigpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICYmIHRoaXMuJGVsLmh0bWwodGVtcGxhdGUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVuZGVyTm90Rm91bmQ6IGZ1bmN0aW9uIHJlbmRlck5vdEZvdW5kKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMubm90Rm91bmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRMYXN0U3VnZ2VzdGlvbigpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlICYmIHRoaXMuJGVsLmh0bWwodGVtcGxhdGUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRMYXN0U3VnZ2VzdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9nZXRTdWdnZXN0aW9uc0ZyYWdtZW50OiBmdW5jdGlvbiBnZXRTdWdnZXN0aW9uc0ZyYWdtZW50KHF1ZXJ5LCBzdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgZnJhZ21lbnQ7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHN1Z2dlc3Rpb25zLCBmdW5jdGlvbiBnZXRTdWdnZXN0aW9uTm9kZShzdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkZWwsIGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGF0Ll9pbmplY3RRdWVyeShxdWVyeSwgc3VnZ2VzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICRlbCA9ICQodGhhdC50ZW1wbGF0ZXMuc3VnZ2VzdGlvbihjb250ZXh0KSkuZGF0YShrZXlzLm9iaiwgc3VnZ2VzdGlvbikuZGF0YShrZXlzLnZhbCwgdGhhdC5kaXNwbGF5Rm4oc3VnZ2VzdGlvbikpLmFkZENsYXNzKHRoYXQuY2xhc3Nlcy5zdWdnZXN0aW9uICsgXCIgXCIgKyB0aGF0LmNsYXNzZXMuc2VsZWN0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKCRlbFswXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQgJiYgaGlnaGxpZ2h0KHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzZXMuaGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBub2RlOiBmcmFnbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogcXVlcnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJChmcmFnbWVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2dldEZvb3RlcjogZnVuY3Rpb24gZ2V0Rm9vdGVyKHF1ZXJ5LCBzdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlcy5mb290ZXIgPyB0aGlzLnRlbXBsYXRlcy5mb290ZXIoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBzdWdnZXN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldDogdGhpcy5uYW1lXG4gICAgICAgICAgICAgICAgfSkgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9nZXRIZWFkZXI6IGZ1bmN0aW9uIGdldEhlYWRlcihxdWVyeSwgc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZXMuaGVhZGVyID8gdGhpcy50ZW1wbGF0ZXMuaGVhZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHRoaXMubmFtZVxuICAgICAgICAgICAgICAgIH0pIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVzZXRMYXN0U3VnZ2VzdGlvbjogZnVuY3Rpb24gcmVzZXRMYXN0U3VnZ2VzdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsYXN0U3VnZ2VzdGlvbiA9ICQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfaW5qZWN0UXVlcnk6IGZ1bmN0aW9uIGluamVjdFF1ZXJ5KHF1ZXJ5LCBvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5pc09iamVjdChvYmopID8gXy5taXhpbih7XG4gICAgICAgICAgICAgICAgICAgIF9xdWVyeTogcXVlcnlcbiAgICAgICAgICAgICAgICB9LCBvYmopIDogb2JqO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBjYW5jZWxlZCA9IGZhbHNlLCBzeW5jQ2FsbGVkID0gZmFsc2UsIHJlbmRlcmVkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY2FuY2VsID0gJC5ub29wO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmFzeW5jICYmIHRoYXQudHJpZ2dlcihcImFzeW5jQ2FuY2VsZWRcIiwgcXVlcnkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UocXVlcnksIHN5bmMsIGFzeW5jKTtcbiAgICAgICAgICAgICAgICAhc3luY0NhbGxlZCAmJiBzeW5jKFtdKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzeW5jKHN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW5jQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3luY0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zID0gKHN1Z2dlc3Rpb25zIHx8IFtdKS5zbGljZSgwLCB0aGF0LmxpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBzdWdnZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX292ZXJ3cml0ZShxdWVyeSwgc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVuZGVyZWQgPCB0aGF0LmxpbWl0ICYmIHRoYXQuYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudHJpZ2dlcihcImFzeW5jUmVxdWVzdGVkXCIsIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhc3luYyhzdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkICYmIHJlbmRlcmVkIDwgdGhhdC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jYW5jZWwgPSAkLm5vb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBzdWdnZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9hcHBlbmQocXVlcnksIHN1Z2dlc3Rpb25zLnNsaWNlKDAsIHRoYXQubGltaXQgLSByZW5kZXJlZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hc3luYyAmJiB0aGF0LnRyaWdnZXIoXCJhc3luY1JlY2VpdmVkXCIsIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6ICQubm9vcCxcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbXB0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKFwiY2xlYXJlZFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5pcyhcIjplbXB0eVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsID0gJChcIjxkaXY+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIERhdGFzZXQ7XG4gICAgICAgIGZ1bmN0aW9uIGdldERpc3BsYXlGbihkaXNwbGF5KSB7XG4gICAgICAgICAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCBfLnN0cmluZ2lmeTtcbiAgICAgICAgICAgIHJldHVybiBfLmlzRnVuY3Rpb24oZGlzcGxheSkgPyBkaXNwbGF5IDogZGlzcGxheUZuO1xuICAgICAgICAgICAgZnVuY3Rpb24gZGlzcGxheUZuKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbZGlzcGxheV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKHRlbXBsYXRlcywgZGlzcGxheUZuKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5vdEZvdW5kOiB0ZW1wbGF0ZXMubm90Rm91bmQgJiYgXy50ZW1wbGF0aWZ5KHRlbXBsYXRlcy5ub3RGb3VuZCksXG4gICAgICAgICAgICAgICAgcGVuZGluZzogdGVtcGxhdGVzLnBlbmRpbmcgJiYgXy50ZW1wbGF0aWZ5KHRlbXBsYXRlcy5wZW5kaW5nKSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHRlbXBsYXRlcy5oZWFkZXIgJiYgXy50ZW1wbGF0aWZ5KHRlbXBsYXRlcy5oZWFkZXIpLFxuICAgICAgICAgICAgICAgIGZvb3RlcjogdGVtcGxhdGVzLmZvb3RlciAmJiBfLnRlbXBsYXRpZnkodGVtcGxhdGVzLmZvb3RlciksXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogdGVtcGxhdGVzLnN1Z2dlc3Rpb24gfHwgc3VnZ2VzdGlvblRlbXBsYXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZnVuY3Rpb24gc3VnZ2VzdGlvblRlbXBsYXRlKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxkaXY+XCIpLnRleHQoZGlzcGxheUZuKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkTmFtZShzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAvXltfYS16QS1aMC05LV0rJC8udGVzdChzdHIpO1xuICAgICAgICB9XG4gICAgfSgpO1xuICAgIHZhciBNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBNZW51KG8sIHd3dykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgbyA9IG8gfHwge307XG4gICAgICAgICAgICBpZiAoIW8ubm9kZSkge1xuICAgICAgICAgICAgICAgICQuZXJyb3IoXCJub2RlIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3d3Lm1peGluKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kbm9kZSA9ICQoby5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kYXRhc2V0cyA9IF8ubWFwKG8uZGF0YXNldHMsIGluaXRpYWxpemVEYXRhc2V0KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVEYXRhc2V0KG9EYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGF0LiRub2RlLmZpbmQob0RhdGFzZXQubm9kZSkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICBvRGF0YXNldC5ub2RlID0gbm9kZS5sZW5ndGggPyBub2RlIDogJChcIjxkaXY+XCIpLmFwcGVuZFRvKHRoYXQuJG5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YXNldChvRGF0YXNldCwgd3d3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfLm1peGluKE1lbnUucHJvdG90eXBlLCBFdmVudEVtaXR0ZXIsIHtcbiAgICAgICAgICAgIF9vblNlbGVjdGFibGVDbGljazogZnVuY3Rpb24gb25TZWxlY3RhYmxlQ2xpY2soJGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJzZWxlY3RhYmxlQ2xpY2tlZFwiLCAkKCRlLmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25SZW5kZXJlZDogZnVuY3Rpb24gb25SZW5kZXJlZCh0eXBlLCBkYXRhc2V0LCBzdWdnZXN0aW9ucywgYXN5bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRub2RlLnRvZ2dsZUNsYXNzKHRoaXMuY2xhc3Nlcy5lbXB0eSwgdGhpcy5fYWxsRGF0YXNldHNFbXB0eSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJkYXRhc2V0UmVuZGVyZWRcIiwgZGF0YXNldCwgc3VnZ2VzdGlvbnMsIGFzeW5jKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25DbGVhcmVkOiBmdW5jdGlvbiBvbkNsZWFyZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm9kZS50b2dnbGVDbGFzcyh0aGlzLmNsYXNzZXMuZW1wdHksIHRoaXMuX2FsbERhdGFzZXRzRW1wdHkoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKFwiZGF0YXNldENsZWFyZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3Byb3BhZ2F0ZTogZnVuY3Rpb24gcHJvcGFnYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9hbGxEYXRhc2V0c0VtcHR5OiBmdW5jdGlvbiBhbGxEYXRhc2V0c0VtcHR5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmV2ZXJ5KHRoaXMuZGF0YXNldHMsIGlzRGF0YXNldEVtcHR5KTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0RhdGFzZXRFbXB0eShkYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc2V0LmlzRW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2dldFNlbGVjdGFibGVzOiBmdW5jdGlvbiBnZXRTZWxlY3RhYmxlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kbm9kZS5maW5kKHRoaXMuc2VsZWN0b3JzLnNlbGVjdGFibGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yZW1vdmVDdXJzb3I6IGZ1bmN0aW9uIF9yZW1vdmVDdXJzb3IoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3RhYmxlID0gdGhpcy5nZXRBY3RpdmVTZWxlY3RhYmxlKCk7XG4gICAgICAgICAgICAgICAgJHNlbGVjdGFibGUgJiYgJHNlbGVjdGFibGUucmVtb3ZlQ2xhc3ModGhpcy5jbGFzc2VzLmN1cnNvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Vuc3VyZVZpc2libGU6IGZ1bmN0aW9uIGVuc3VyZVZpc2libGUoJGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsVG9wLCBlbEJvdHRvbSwgbm9kZVNjcm9sbFRvcCwgbm9kZUhlaWdodDtcbiAgICAgICAgICAgICAgICBlbFRvcCA9ICRlbC5wb3NpdGlvbigpLnRvcDtcbiAgICAgICAgICAgICAgICBlbEJvdHRvbSA9IGVsVG9wICsgJGVsLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIG5vZGVTY3JvbGxUb3AgPSB0aGlzLiRub2RlLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIG5vZGVIZWlnaHQgPSB0aGlzLiRub2RlLmhlaWdodCgpICsgcGFyc2VJbnQodGhpcy4kbm9kZS5jc3MoXCJwYWRkaW5nVG9wXCIpLCAxMCkgKyBwYXJzZUludCh0aGlzLiRub2RlLmNzcyhcInBhZGRpbmdCb3R0b21cIiksIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxUb3AgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5vZGUuc2Nyb2xsVG9wKG5vZGVTY3JvbGxUb3AgKyBlbFRvcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlSGVpZ2h0IDwgZWxCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbm9kZS5zY3JvbGxUb3Aobm9kZVNjcm9sbFRvcCArIChlbEJvdHRvbSAtIG5vZGVIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBvblNlbGVjdGFibGVDbGljaztcbiAgICAgICAgICAgICAgICBvblNlbGVjdGFibGVDbGljayA9IF8uYmluZCh0aGlzLl9vblNlbGVjdGFibGVDbGljaywgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm9kZS5vbihcImNsaWNrLnR0XCIsIHRoaXMuc2VsZWN0b3JzLnNlbGVjdGFibGUsIG9uU2VsZWN0YWJsZUNsaWNrKTtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5kYXRhc2V0cywgZnVuY3Rpb24oZGF0YXNldCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0Lm9uU3luYyhcImFzeW5jUmVxdWVzdGVkXCIsIHRoYXQuX3Byb3BhZ2F0ZSwgdGhhdCkub25TeW5jKFwiYXN5bmNDYW5jZWxlZFwiLCB0aGF0Ll9wcm9wYWdhdGUsIHRoYXQpLm9uU3luYyhcImFzeW5jUmVjZWl2ZWRcIiwgdGhhdC5fcHJvcGFnYXRlLCB0aGF0KS5vblN5bmMoXCJyZW5kZXJlZFwiLCB0aGF0Ll9vblJlbmRlcmVkLCB0aGF0KS5vblN5bmMoXCJjbGVhcmVkXCIsIHRoYXQuX29uQ2xlYXJlZCwgdGhhdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNPcGVuOiBmdW5jdGlvbiBpc09wZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG5vZGUuaGFzQ2xhc3ModGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vZGUucmVtb3ZlQ2xhc3ModGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUN1cnNvcigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldExhbmd1YWdlRGlyZWN0aW9uOiBmdW5jdGlvbiBzZXRMYW5ndWFnZURpcmVjdGlvbihkaXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRub2RlLmF0dHIoXCJkaXJcIiwgZGlyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RhYmxlUmVsYXRpdmVUb0N1cnNvcjogZnVuY3Rpb24gc2VsZWN0YWJsZVJlbGF0aXZlVG9DdXJzb3IoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHNlbGVjdGFibGVzLCAkb2xkQ3Vyc29yLCBvbGRJbmRleCwgbmV3SW5kZXg7XG4gICAgICAgICAgICAgICAgJG9sZEN1cnNvciA9IHRoaXMuZ2V0QWN0aXZlU2VsZWN0YWJsZSgpO1xuICAgICAgICAgICAgICAgICRzZWxlY3RhYmxlcyA9IHRoaXMuX2dldFNlbGVjdGFibGVzKCk7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXggPSAkb2xkQ3Vyc29yID8gJHNlbGVjdGFibGVzLmluZGV4KCRvbGRDdXJzb3IpIDogLTE7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBvbGRJbmRleCArIGRlbHRhO1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gKG5ld0luZGV4ICsgMSkgJSAoJHNlbGVjdGFibGVzLmxlbmd0aCArIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4IDwgLTEgPyAkc2VsZWN0YWJsZXMubGVuZ3RoIC0gMSA6IG5ld0luZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdJbmRleCA9PT0gLTEgPyBudWxsIDogJHNlbGVjdGFibGVzLmVxKG5ld0luZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDdXJzb3I6IGZ1bmN0aW9uIHNldEN1cnNvcigkc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUN1cnNvcigpO1xuICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0YWJsZSA9ICRzZWxlY3RhYmxlICYmICRzZWxlY3RhYmxlLmZpcnN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNlbGVjdGFibGUuYWRkQ2xhc3ModGhpcy5jbGFzc2VzLmN1cnNvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVZpc2libGUoJHNlbGVjdGFibGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTZWxlY3RhYmxlRGF0YTogZnVuY3Rpb24gZ2V0U2VsZWN0YWJsZURhdGEoJGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbCAmJiAkZWwubGVuZ3RoID8gRGF0YXNldC5leHRyYWN0RGF0YSgkZWwpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRBY3RpdmVTZWxlY3RhYmxlOiBmdW5jdGlvbiBnZXRBY3RpdmVTZWxlY3RhYmxlKCkge1xuICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0YWJsZSA9IHRoaXMuX2dldFNlbGVjdGFibGVzKCkuZmlsdGVyKHRoaXMuc2VsZWN0b3JzLmN1cnNvcikuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNlbGVjdGFibGUubGVuZ3RoID8gJHNlbGVjdGFibGUgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvcFNlbGVjdGFibGU6IGZ1bmN0aW9uIGdldFRvcFNlbGVjdGFibGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3RhYmxlID0gdGhpcy5fZ2V0U2VsZWN0YWJsZXMoKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkc2VsZWN0YWJsZS5sZW5ndGggPyAkc2VsZWN0YWJsZSA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUocXVlcnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZFVwZGF0ZSA9IHF1ZXJ5ICE9PSB0aGlzLnF1ZXJ5O1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMuZGF0YXNldHMsIHVwZGF0ZURhdGFzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFVwZGF0ZTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEYXRhc2V0KGRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldC51cGRhdGUocXVlcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMuZGF0YXNldHMsIGNsZWFyRGF0YXNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLmNsYXNzZXMuZW1wdHkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyRGF0YXNldChkYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRub2RlLm9mZihcIi50dFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRub2RlID0gJChcIjxkaXY+XCIpO1xuICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLmRhdGFzZXRzLCBkZXN0cm95RGF0YXNldCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVzdHJveURhdGFzZXQoZGF0YXNldCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTWVudTtcbiAgICB9KCk7XG4gICAgdmFyIERlZmF1bHRNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgcyA9IE1lbnUucHJvdG90eXBlO1xuICAgICAgICBmdW5jdGlvbiBEZWZhdWx0TWVudSgpIHtcbiAgICAgICAgICAgIE1lbnUuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgfVxuICAgICAgICBfLm1peGluKERlZmF1bHRNZW51LnByb3RvdHlwZSwgTWVudS5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgIXRoaXMuX2FsbERhdGFzZXRzRW1wdHkoKSAmJiB0aGlzLl9zaG93KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMub3Blbi5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMuY2xvc2UuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25SZW5kZXJlZDogZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWxsRGF0YXNldHNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbigpICYmIHRoaXMuX3Nob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMuX29uUmVuZGVyZWQuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25DbGVhcmVkOiBmdW5jdGlvbiBvbkNsZWFyZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FsbERhdGFzZXRzRW1wdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09wZW4oKSAmJiB0aGlzLl9zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzLl9vbkNsZWFyZWQuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRMYW5ndWFnZURpcmVjdGlvbjogZnVuY3Rpb24gc2V0TGFuZ3VhZ2VEaXJlY3Rpb24oZGlyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbm9kZS5jc3MoZGlyID09PSBcImx0clwiID8gdGhpcy5jc3MubHRyIDogdGhpcy5jc3MucnRsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zZXRMYW5ndWFnZURpcmVjdGlvbi5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9oaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vZGUuaGlkZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9zaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vZGUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRNZW51O1xuICAgIH0oKTtcbiAgICB2YXIgVHlwZWFoZWFkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBUeXBlYWhlYWQobywgd3d3KSB7XG4gICAgICAgICAgICB2YXIgb25Gb2N1c2VkLCBvbkJsdXJyZWQsIG9uRW50ZXJLZXllZCwgb25UYWJLZXllZCwgb25Fc2NLZXllZCwgb25VcEtleWVkLCBvbkRvd25LZXllZCwgb25MZWZ0S2V5ZWQsIG9uUmlnaHRLZXllZCwgb25RdWVyeUNoYW5nZWQsIG9uV2hpdGVzcGFjZUNoYW5nZWQ7XG4gICAgICAgICAgICBvID0gbyB8fCB7fTtcbiAgICAgICAgICAgIGlmICghby5pbnB1dCkge1xuICAgICAgICAgICAgICAgICQuZXJyb3IoXCJtaXNzaW5nIGlucHV0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvLm1lbnUpIHtcbiAgICAgICAgICAgICAgICAkLmVycm9yKFwibWlzc2luZyBtZW51XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvLmV2ZW50QnVzKSB7XG4gICAgICAgICAgICAgICAgJC5lcnJvcihcIm1pc3NpbmcgZXZlbnQgYnVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3d3Lm1peGluKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ldmVudEJ1cyA9IG8uZXZlbnRCdXM7XG4gICAgICAgICAgICB0aGlzLm1pbkxlbmd0aCA9IF8uaXNOdW1iZXIoby5taW5MZW5ndGgpID8gby5taW5MZW5ndGggOiAxO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IG8uaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBvLm1lbnU7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuaGFzRm9jdXMoKSAmJiB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRpciA9IHRoaXMuaW5wdXQuZ2V0TGFuZ0RpcigpO1xuICAgICAgICAgICAgdGhpcy5faGFja3MoKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5iaW5kKCkub25TeW5jKFwic2VsZWN0YWJsZUNsaWNrZWRcIiwgdGhpcy5fb25TZWxlY3RhYmxlQ2xpY2tlZCwgdGhpcykub25TeW5jKFwiYXN5bmNSZXF1ZXN0ZWRcIiwgdGhpcy5fb25Bc3luY1JlcXVlc3RlZCwgdGhpcykub25TeW5jKFwiYXN5bmNDYW5jZWxlZFwiLCB0aGlzLl9vbkFzeW5jQ2FuY2VsZWQsIHRoaXMpLm9uU3luYyhcImFzeW5jUmVjZWl2ZWRcIiwgdGhpcy5fb25Bc3luY1JlY2VpdmVkLCB0aGlzKS5vblN5bmMoXCJkYXRhc2V0UmVuZGVyZWRcIiwgdGhpcy5fb25EYXRhc2V0UmVuZGVyZWQsIHRoaXMpLm9uU3luYyhcImRhdGFzZXRDbGVhcmVkXCIsIHRoaXMuX29uRGF0YXNldENsZWFyZWQsIHRoaXMpO1xuICAgICAgICAgICAgb25Gb2N1c2VkID0gYyh0aGlzLCBcImFjdGl2YXRlXCIsIFwib3BlblwiLCBcIl9vbkZvY3VzZWRcIik7XG4gICAgICAgICAgICBvbkJsdXJyZWQgPSBjKHRoaXMsIFwiZGVhY3RpdmF0ZVwiLCBcIl9vbkJsdXJyZWRcIik7XG4gICAgICAgICAgICBvbkVudGVyS2V5ZWQgPSBjKHRoaXMsIFwiaXNBY3RpdmVcIiwgXCJpc09wZW5cIiwgXCJfb25FbnRlcktleWVkXCIpO1xuICAgICAgICAgICAgb25UYWJLZXllZCA9IGModGhpcywgXCJpc0FjdGl2ZVwiLCBcImlzT3BlblwiLCBcIl9vblRhYktleWVkXCIpO1xuICAgICAgICAgICAgb25Fc2NLZXllZCA9IGModGhpcywgXCJpc0FjdGl2ZVwiLCBcIl9vbkVzY0tleWVkXCIpO1xuICAgICAgICAgICAgb25VcEtleWVkID0gYyh0aGlzLCBcImlzQWN0aXZlXCIsIFwib3BlblwiLCBcIl9vblVwS2V5ZWRcIik7XG4gICAgICAgICAgICBvbkRvd25LZXllZCA9IGModGhpcywgXCJpc0FjdGl2ZVwiLCBcIm9wZW5cIiwgXCJfb25Eb3duS2V5ZWRcIik7XG4gICAgICAgICAgICBvbkxlZnRLZXllZCA9IGModGhpcywgXCJpc0FjdGl2ZVwiLCBcImlzT3BlblwiLCBcIl9vbkxlZnRLZXllZFwiKTtcbiAgICAgICAgICAgIG9uUmlnaHRLZXllZCA9IGModGhpcywgXCJpc0FjdGl2ZVwiLCBcImlzT3BlblwiLCBcIl9vblJpZ2h0S2V5ZWRcIik7XG4gICAgICAgICAgICBvblF1ZXJ5Q2hhbmdlZCA9IGModGhpcywgXCJfb3BlbklmQWN0aXZlXCIsIFwiX29uUXVlcnlDaGFuZ2VkXCIpO1xuICAgICAgICAgICAgb25XaGl0ZXNwYWNlQ2hhbmdlZCA9IGModGhpcywgXCJfb3BlbklmQWN0aXZlXCIsIFwiX29uV2hpdGVzcGFjZUNoYW5nZWRcIik7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmJpbmQoKS5vblN5bmMoXCJmb2N1c2VkXCIsIG9uRm9jdXNlZCwgdGhpcykub25TeW5jKFwiYmx1cnJlZFwiLCBvbkJsdXJyZWQsIHRoaXMpLm9uU3luYyhcImVudGVyS2V5ZWRcIiwgb25FbnRlcktleWVkLCB0aGlzKS5vblN5bmMoXCJ0YWJLZXllZFwiLCBvblRhYktleWVkLCB0aGlzKS5vblN5bmMoXCJlc2NLZXllZFwiLCBvbkVzY0tleWVkLCB0aGlzKS5vblN5bmMoXCJ1cEtleWVkXCIsIG9uVXBLZXllZCwgdGhpcykub25TeW5jKFwiZG93bktleWVkXCIsIG9uRG93bktleWVkLCB0aGlzKS5vblN5bmMoXCJsZWZ0S2V5ZWRcIiwgb25MZWZ0S2V5ZWQsIHRoaXMpLm9uU3luYyhcInJpZ2h0S2V5ZWRcIiwgb25SaWdodEtleWVkLCB0aGlzKS5vblN5bmMoXCJxdWVyeUNoYW5nZWRcIiwgb25RdWVyeUNoYW5nZWQsIHRoaXMpLm9uU3luYyhcIndoaXRlc3BhY2VDaGFuZ2VkXCIsIG9uV2hpdGVzcGFjZUNoYW5nZWQsIHRoaXMpLm9uU3luYyhcImxhbmdEaXJDaGFuZ2VkXCIsIHRoaXMuX29uTGFuZ0RpckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIF8ubWl4aW4oVHlwZWFoZWFkLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgX2hhY2tzOiBmdW5jdGlvbiBoYWNrcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0LCAkbWVudTtcbiAgICAgICAgICAgICAgICAkaW5wdXQgPSB0aGlzLmlucHV0LiRpbnB1dCB8fCAkKFwiPGRpdj5cIik7XG4gICAgICAgICAgICAgICAgJG1lbnUgPSB0aGlzLm1lbnUuJG5vZGUgfHwgJChcIjxkaXY+XCIpO1xuICAgICAgICAgICAgICAgICRpbnB1dC5vbihcImJsdXIudHRcIiwgZnVuY3Rpb24oJGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSwgaXNBY3RpdmUsIGhhc0FjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSAkbWVudS5pcyhhY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSAkbWVudS5oYXMoYWN0aXZlKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc01zaWUoKSAmJiAoaXNBY3RpdmUgfHwgaGFzQWN0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kZWZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJG1lbnUub24oXCJtb3VzZWRvd24udHRcIiwgZnVuY3Rpb24oJGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25TZWxlY3RhYmxlQ2xpY2tlZDogZnVuY3Rpb24gb25TZWxlY3RhYmxlQ2xpY2tlZCh0eXBlLCAkZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCgkZWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vbkRhdGFzZXRDbGVhcmVkOiBmdW5jdGlvbiBvbkRhdGFzZXRDbGVhcmVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhpbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25EYXRhc2V0UmVuZGVyZWQ6IGZ1bmN0aW9uIG9uRGF0YXNldFJlbmRlcmVkKHR5cGUsIGRhdGFzZXQsIHN1Z2dlc3Rpb25zLCBhc3luYykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhpbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLnRyaWdnZXIoXCJyZW5kZXJcIiwgc3VnZ2VzdGlvbnMsIGFzeW5jLCBkYXRhc2V0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25Bc3luY1JlcXVlc3RlZDogZnVuY3Rpb24gb25Bc3luY1JlcXVlc3RlZCh0eXBlLCBkYXRhc2V0LCBxdWVyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMudHJpZ2dlcihcImFzeW5jcmVxdWVzdFwiLCBxdWVyeSwgZGF0YXNldCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uQXN5bmNDYW5jZWxlZDogZnVuY3Rpb24gb25Bc3luY0NhbmNlbGVkKHR5cGUsIGRhdGFzZXQsIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy50cmlnZ2VyKFwiYXN5bmNjYW5jZWxcIiwgcXVlcnksIGRhdGFzZXQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vbkFzeW5jUmVjZWl2ZWQ6IGZ1bmN0aW9uIG9uQXN5bmNSZWNlaXZlZCh0eXBlLCBkYXRhc2V0LCBxdWVyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMudHJpZ2dlcihcImFzeW5jcmVjZWl2ZVwiLCBxdWVyeSwgZGF0YXNldCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uRm9jdXNlZDogZnVuY3Rpb24gb25Gb2N1c2VkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21pbkxlbmd0aE1ldCgpICYmIHRoaXMubWVudS51cGRhdGUodGhpcy5pbnB1dC5nZXRRdWVyeSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25CbHVycmVkOiBmdW5jdGlvbiBvbkJsdXJyZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQuaGFzUXVlcnlDaGFuZ2VkU2luY2VMYXN0Rm9jdXMoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLnRyaWdnZXIoXCJjaGFuZ2VcIiwgdGhpcy5pbnB1dC5nZXRRdWVyeSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uRW50ZXJLZXllZDogZnVuY3Rpb24gb25FbnRlcktleWVkKHR5cGUsICRlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3RhYmxlO1xuICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0YWJsZSA9IHRoaXMubWVudS5nZXRBY3RpdmVTZWxlY3RhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoJHNlbGVjdGFibGUpICYmICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vblRhYktleWVkOiBmdW5jdGlvbiBvblRhYktleWVkKHR5cGUsICRlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3RhYmxlO1xuICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0YWJsZSA9IHRoaXMubWVudS5nZXRBY3RpdmVTZWxlY3RhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoJHNlbGVjdGFibGUpICYmICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkc2VsZWN0YWJsZSA9IHRoaXMubWVudS5nZXRUb3BTZWxlY3RhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUoJHNlbGVjdGFibGUpICYmICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vbkVzY0tleWVkOiBmdW5jdGlvbiBvbkVzY0tleWVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25VcEtleWVkOiBmdW5jdGlvbiBvblVwS2V5ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKC0xKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25Eb3duS2V5ZWQ6IGZ1bmN0aW9uIG9uRG93bktleWVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUN1cnNvcigrMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uTGVmdEtleWVkOiBmdW5jdGlvbiBvbkxlZnRLZXllZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXIgPT09IFwicnRsXCIgJiYgdGhpcy5pbnB1dC5pc0N1cnNvckF0RW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUodGhpcy5tZW51LmdldFRvcFNlbGVjdGFibGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vblJpZ2h0S2V5ZWQ6IGZ1bmN0aW9uIG9uUmlnaHRLZXllZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXIgPT09IFwibHRyXCIgJiYgdGhpcy5pbnB1dC5pc0N1cnNvckF0RW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUodGhpcy5tZW51LmdldFRvcFNlbGVjdGFibGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9vblF1ZXJ5Q2hhbmdlZDogZnVuY3Rpb24gb25RdWVyeUNoYW5nZWQoZSwgcXVlcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5MZW5ndGhNZXQocXVlcnkpID8gdGhpcy5tZW51LnVwZGF0ZShxdWVyeSkgOiB0aGlzLm1lbnUuZW1wdHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb25XaGl0ZXNwYWNlQ2hhbmdlZDogZnVuY3Rpb24gb25XaGl0ZXNwYWNlQ2hhbmdlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVIaW50KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX29uTGFuZ0RpckNoYW5nZWQ6IGZ1bmN0aW9uIG9uTGFuZ0RpckNoYW5nZWQoZSwgZGlyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyICE9PSBkaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRMYW5ndWFnZURpcmVjdGlvbihkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfb3BlbklmQWN0aXZlOiBmdW5jdGlvbiBvcGVuSWZBY3RpdmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSgpICYmIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9taW5MZW5ndGhNZXQ6IGZ1bmN0aW9uIG1pbkxlbmd0aE1ldChxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXy5pc1N0cmluZyhxdWVyeSkgPyBxdWVyeSA6IHRoaXMuaW5wdXQuZ2V0UXVlcnkoKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeS5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3VwZGF0ZUhpbnQ6IGZ1bmN0aW9uIHVwZGF0ZUhpbnQoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3RhYmxlLCBkYXRhLCB2YWwsIHF1ZXJ5LCBlc2NhcGVkUXVlcnksIGZyb250TWF0Y2hSZWdFeCwgbWF0Y2g7XG4gICAgICAgICAgICAgICAgJHNlbGVjdGFibGUgPSB0aGlzLm1lbnUuZ2V0VG9wU2VsZWN0YWJsZSgpO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLm1lbnUuZ2V0U2VsZWN0YWJsZURhdGEoJHNlbGVjdGFibGUpO1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuaW5wdXQuZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFfLmlzQmxhbmtTdHJpbmcodmFsKSAmJiAhdGhpcy5pbnB1dC5oYXNPdmVyZmxvdygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gSW5wdXQubm9ybWFsaXplUXVlcnkodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZFF1ZXJ5ID0gXy5lc2NhcGVSZWdFeENoYXJzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbnRNYXRjaFJlZ0V4ID0gbmV3IFJlZ0V4cChcIl4oPzpcIiArIGVzY2FwZWRRdWVyeSArIFwiKSguKyQpXCIsIFwiaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmcm9udE1hdGNoUmVnRXguZXhlYyhkYXRhLnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoICYmIHRoaXMuaW5wdXQuc2V0SGludCh2YWwgKyBtYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5jbGVhckhpbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNFbmFibGVkOiBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRW5hYmxlZCgpIHx8IHRoaXMuZXZlbnRCdXMuYmVmb3JlKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMudHJpZ2dlcihcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV2ZW50QnVzLmJlZm9yZShcImlkbGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy50cmlnZ2VyKFwiaWRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzT3BlbjogZnVuY3Rpb24gaXNPcGVuKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnUuaXNPcGVuKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKCkgJiYgIXRoaXMuZXZlbnRCdXMuYmVmb3JlKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVIaW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMudHJpZ2dlcihcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzT3BlbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wZW4oKSAmJiAhdGhpcy5ldmVudEJ1cy5iZWZvcmUoXCJjbG9zZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5jbGVhckhpbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5yZXNldElucHV0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy50cmlnZ2VyKFwiY2xvc2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc09wZW4oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRWYWw6IGZ1bmN0aW9uIHNldFZhbCh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnNldFF1ZXJ5KF8udG9TdHIodmFsKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VmFsOiBmdW5jdGlvbiBnZXRWYWwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuZ2V0UXVlcnkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdCgkc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5tZW51LmdldFNlbGVjdGFibGVEYXRhKCRzZWxlY3RhYmxlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiAhdGhpcy5ldmVudEJ1cy5iZWZvcmUoXCJzZWxlY3RcIiwgZGF0YS5vYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0UXVlcnkoZGF0YS52YWwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLnRyaWdnZXIoXCJzZWxlY3RcIiwgZGF0YS5vYmopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBmdW5jdGlvbiBhdXRvY29tcGxldGUoJHNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnksIGRhdGEsIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSB0aGlzLmlucHV0LmdldFF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMubWVudS5nZXRTZWxlY3RhYmxlRGF0YSgkc2VsZWN0YWJsZSk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGRhdGEgJiYgcXVlcnkgIT09IGRhdGEudmFsO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkICYmICF0aGlzLmV2ZW50QnVzLmJlZm9yZShcImF1dG9jb21wbGV0ZVwiLCBkYXRhLm9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5zZXRRdWVyeShkYXRhLnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMudHJpZ2dlcihcImF1dG9jb21wbGV0ZVwiLCBkYXRhLm9iaik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZUN1cnNvcjogZnVuY3Rpb24gbW92ZUN1cnNvcihkZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeSwgJGNhbmRpZGF0ZSwgZGF0YSwgcGF5bG9hZCwgY2FuY2VsTW92ZTtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHRoaXMuaW5wdXQuZ2V0UXVlcnkoKTtcbiAgICAgICAgICAgICAgICAkY2FuZGlkYXRlID0gdGhpcy5tZW51LnNlbGVjdGFibGVSZWxhdGl2ZVRvQ3Vyc29yKGRlbHRhKTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5tZW51LmdldFNlbGVjdGFibGVEYXRhKCRjYW5kaWRhdGUpO1xuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBkYXRhID8gZGF0YS5vYmogOiBudWxsO1xuICAgICAgICAgICAgICAgIGNhbmNlbE1vdmUgPSB0aGlzLl9taW5MZW5ndGhNZXQoKSAmJiB0aGlzLm1lbnUudXBkYXRlKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbE1vdmUgJiYgIXRoaXMuZXZlbnRCdXMuYmVmb3JlKFwiY3Vyc29yY2hhbmdlXCIsIHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRDdXJzb3IoJGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnNldElucHV0VmFsdWUoZGF0YS52YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5yZXNldElucHV0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhpbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLnRyaWdnZXIoXCJjdXJzb3JjaGFuZ2VcIiwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFR5cGVhaGVhZDtcbiAgICAgICAgZnVuY3Rpb24gYyhjdHgpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIF8uZWFjaChtZXRob2RzLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSgpO1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBvbGQsIGtleXMsIG1ldGhvZHM7XG4gICAgICAgIG9sZCA9ICQuZm4udHlwZWFoZWFkO1xuICAgICAgICBrZXlzID0ge1xuICAgICAgICAgICAgd3d3OiBcInR0LXd3d1wiLFxuICAgICAgICAgICAgYXR0cnM6IFwidHQtYXR0cnNcIixcbiAgICAgICAgICAgIHR5cGVhaGVhZDogXCJ0dC10eXBlYWhlYWRcIlxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShvLCBkYXRhc2V0cykge1xuICAgICAgICAgICAgICAgIHZhciB3d3c7XG4gICAgICAgICAgICAgICAgZGF0YXNldHMgPSBfLmlzQXJyYXkoZGF0YXNldHMpID8gZGF0YXNldHMgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgbyA9IG8gfHwge307XG4gICAgICAgICAgICAgICAgd3d3ID0gV1dXKG8uY2xhc3NOYW1lcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChhdHRhY2gpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCwgJHdyYXBwZXIsICRoaW50LCAkbWVudSwgZGVmYXVsdEhpbnQsIGRlZmF1bHRNZW51LCBldmVudEJ1cywgaW5wdXQsIG1lbnUsIHR5cGVhaGVhZCwgTWVudUNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2goZGF0YXNldHMsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaGlnaGxpZ2h0ID0gISFvLmhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyID0gJCh3d3cuaHRtbC53cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgJGhpbnQgPSAkZWxPck51bGwoby5oaW50KTtcbiAgICAgICAgICAgICAgICAgICAgJG1lbnUgPSAkZWxPck51bGwoby5tZW51KTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEhpbnQgPSBvLmhpbnQgIT09IGZhbHNlICYmICEkaGludDtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lbnUgPSBvLm1lbnUgIT09IGZhbHNlICYmICEkbWVudTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEhpbnQgJiYgKCRoaW50ID0gYnVpbGRIaW50RnJvbUlucHV0KCRpbnB1dCwgd3d3KSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZW51ICYmICgkbWVudSA9ICQod3d3Lmh0bWwubWVudSkuY3NzKHd3dy5jc3MubWVudSkpO1xuICAgICAgICAgICAgICAgICAgICAkaGludCAmJiAkaGludC52YWwoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dCA9IHByZXBJbnB1dCgkaW5wdXQsIHd3dyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0SGludCB8fCBkZWZhdWx0TWVudSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuY3NzKHd3dy5jc3Mud3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQuY3NzKGRlZmF1bHRIaW50ID8gd3d3LmNzcy5pbnB1dCA6IHd3dy5jc3MuaW5wdXRXaXRoTm9IaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC53cmFwKCR3cmFwcGVyKS5wYXJlbnQoKS5wcmVwZW5kKGRlZmF1bHRIaW50ID8gJGhpbnQgOiBudWxsKS5hcHBlbmQoZGVmYXVsdE1lbnUgPyAkbWVudSA6IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIE1lbnVDb25zdHJ1Y3RvciA9IGRlZmF1bHRNZW51ID8gRGVmYXVsdE1lbnUgOiBNZW51O1xuICAgICAgICAgICAgICAgICAgICBldmVudEJ1cyA9IG5ldyBFdmVudEJ1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJGlucHV0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IG5ldyBJbnB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50OiAkaGludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiAkaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfSwgd3d3KTtcbiAgICAgICAgICAgICAgICAgICAgbWVudSA9IG5ldyBNZW51Q29uc3RydWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJG1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogZGF0YXNldHNcbiAgICAgICAgICAgICAgICAgICAgfSwgd3d3KTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkID0gbmV3IFR5cGVhaGVhZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51OiBtZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXM6IGV2ZW50QnVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiBvLm1pbkxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9LCB3d3cpO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZGF0YShrZXlzLnd3dywgd3d3KTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmRhdGEoa2V5cy50eXBlYWhlYWQsIHR5cGVhaGVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbmFibGVkO1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLmZpcnN0KCksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHQuaXNFbmFibGVkKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICAgICAgICAgICAgdHRFYWNoKHRoaXMsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlO1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLmZpcnN0KCksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gdC5pc0FjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzT3BlbjogZnVuY3Rpb24gaXNPcGVuKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcGVuO1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLmZpcnN0KCksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbiA9IHQuaXNPcGVuKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgICAgICAgICB0dEVhY2godGhpcywgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB0Lm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgdHRFYWNoKHRoaXMsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZSwgJGVsID0gJChlbCk7XG4gICAgICAgICAgICAgICAgdHRFYWNoKHRoaXMuZmlyc3QoKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdC5zZWxlY3QoJGVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2UsICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLmZpcnN0KCksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHQuYXV0b2NvbXBsZXRlKCRlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZUN1cnNvcjogZnVuY3Rpb24gbW92ZUN1cnNvZShkZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdHRFYWNoKHRoaXMuZmlyc3QoKSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdC5tb3ZlQ3Vyc29yKGRlbHRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWw6IGZ1bmN0aW9uIHZhbChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnk7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLmZpcnN0KCksIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gdC5nZXRWYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0dEVhY2godGhpcywgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRWYWwobmV3VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHR0RWFjaCh0aGlzLCBmdW5jdGlvbih0eXBlYWhlYWQsICRpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICByZXZlcnQoJGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJC5mbi50eXBlYWhlYWQgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChtZXRob2RzW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2RzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJC5mbi50eXBlYWhlYWQubm9Db25mbGljdCA9IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgICAgICAkLmZuLnR5cGVhaGVhZCA9IG9sZDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiB0dEVhY2goJGVscywgZm4pIHtcbiAgICAgICAgICAgICRlbHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKSwgdHlwZWFoZWFkO1xuICAgICAgICAgICAgICAgICh0eXBlYWhlYWQgPSAkaW5wdXQuZGF0YShrZXlzLnR5cGVhaGVhZCkpICYmIGZuKHR5cGVhaGVhZCwgJGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkSGludEZyb21JbnB1dCgkaW5wdXQsIHd3dykge1xuICAgICAgICAgICAgcmV0dXJuICRpbnB1dC5jbG9uZSgpLmFkZENsYXNzKHd3dy5jbGFzc2VzLmhpbnQpLnJlbW92ZURhdGEoKS5jc3Mod3d3LmNzcy5oaW50KS5jc3MoZ2V0QmFja2dyb3VuZFN0eWxlcygkaW5wdXQpKS5wcm9wKFwicmVhZG9ubHlcIiwgdHJ1ZSkucmVtb3ZlQXR0cihcImlkIG5hbWUgcGxhY2Vob2xkZXIgcmVxdWlyZWRcIikuYXR0cih7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByZXBJbnB1dCgkaW5wdXQsIHd3dykge1xuICAgICAgICAgICAgJGlucHV0LmRhdGEoa2V5cy5hdHRycywge1xuICAgICAgICAgICAgICAgIGRpcjogJGlucHV0LmF0dHIoXCJkaXJcIiksXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAkaW5wdXQuYXR0cihcImF1dG9jb21wbGV0ZVwiKSxcbiAgICAgICAgICAgICAgICBzcGVsbGNoZWNrOiAkaW5wdXQuYXR0cihcInNwZWxsY2hlY2tcIiksXG4gICAgICAgICAgICAgICAgc3R5bGU6ICRpbnB1dC5hdHRyKFwic3R5bGVcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGlucHV0LmFkZENsYXNzKHd3dy5jbGFzc2VzLmlucHV0KS5hdHRyKHtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAhJGlucHV0LmF0dHIoXCJkaXJcIikgJiYgJGlucHV0LmF0dHIoXCJkaXJcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIHJldHVybiAkaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0eWxlcygkZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIiksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLWNsaXBcIiksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAkZWwuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRPcmlnaW46ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLW9yaWdpblwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIpLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICRlbC5jc3MoXCJiYWNrZ3JvdW5kLXJlcGVhdFwiKSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJGVsLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXZlcnQoJGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgd3d3LCAkd3JhcHBlcjtcbiAgICAgICAgICAgIHd3dyA9ICRpbnB1dC5kYXRhKGtleXMud3d3KTtcbiAgICAgICAgICAgICR3cmFwcGVyID0gJGlucHV0LnBhcmVudCgpLmZpbHRlcih3d3cuc2VsZWN0b3JzLndyYXBwZXIpO1xuICAgICAgICAgICAgXy5lYWNoKCRpbnB1dC5kYXRhKGtleXMuYXR0cnMpLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIF8uaXNVbmRlZmluZWQodmFsKSA/ICRpbnB1dC5yZW1vdmVBdHRyKGtleSkgOiAkaW5wdXQuYXR0cihrZXksIHZhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRpbnB1dC5yZW1vdmVEYXRhKGtleXMudHlwZWFoZWFkKS5yZW1vdmVEYXRhKGtleXMud3d3KS5yZW1vdmVEYXRhKGtleXMuYXR0cikucmVtb3ZlQ2xhc3Mod3d3LmNsYXNzZXMuaW5wdXQpO1xuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRpbnB1dC5kZXRhY2goKS5pbnNlcnRBZnRlcigkd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gJGVsT3JOdWxsKG9iaikge1xuICAgICAgICAgICAgdmFyIGlzVmFsaWQsICRlbDtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBfLmlzSlF1ZXJ5KG9iaikgfHwgXy5pc0VsZW1lbnQob2JqKTtcbiAgICAgICAgICAgICRlbCA9IGlzVmFsaWQgPyAkKG9iaikuZmlyc3QoKSA6IFtdO1xuICAgICAgICAgICAgcmV0dXJuICRlbC5sZW5ndGggPyAkZWwgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSkoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/typeahead.js/dist/typeahead.bundle.js\n");

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
      function __nested_webpack_require_256288__(moduleId) {
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
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_256288__);
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
        /******/__nested_webpack_require_256288__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function () {
            return module['default'];
          } : /******/function () {
            return module;
          };
          /******/
          __nested_webpack_require_256288__.d(getter, {
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
        /******/__nested_webpack_require_256288__.d = function (exports, definition) {
          /******/for (var key in definition) {
            /******/if (__nested_webpack_require_256288__.o(definition, key) && !__nested_webpack_require_256288__.o(exports, key)) {
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
        /******/__nested_webpack_require_256288__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      }();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/
      !function () {
        /******/ // define __esModule on exports
        /******/__nested_webpack_require_256288__.r = function (exports) {
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
      var __webpack_exports__ = __nested_webpack_require_256288__("./libs/typeahead-js/typeahead.js");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/typeahead-js/typeahead.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});