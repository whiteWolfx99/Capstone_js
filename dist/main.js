/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/asset/css/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/asset/css/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: 'Roboto', sans-serif;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.headerhidden {\\n  display: none;\\n}\\n\\n.div_header {\\n  display: flex;\\n  gap: 25px;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 20px;\\n}\\n\\n.logo {\\n  display: flex;\\n  flex-direction: column;\\n  border: 2px solid #000;\\n  padding: 10px;\\n  border-radius: 50px;\\n  text-align: center;\\n}\\n\\n.active {\\n  text-decoration: underline;\\n  font-weight: bold;\\n}\\n\\n.img_url {\\n  width: 100px;\\n  height: 100px;\\n}\\n\\n.scorelist {\\n  list-style-type: none;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  text-align: center;\\n  gap: 50px;\\n}\\n\\n.paragraph_url {\\n  width: 150px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\nfooter {\\n  width: 100%;\\n}\\n\\n.div_footer {\\n  display: flex;\\n  border: 2px solid #000;\\n  padding: 25px 15px 25px 15px;\\n  margin: 0 5px 0 5px;\\n}\\n\\n.div_second_footer {\\n  display: flex;\\n  border: 2px solid #000;\\n  border-top: none;\\n  margin: 0 5px 5px 5px;\\n  background-color: #ccc;\\n  justify-content: flex-end;\\n  font-weight: bold;\\n  font-size: 20px;\\n}\\n\\n.rotate {\\n  transform: rotate(20deg);\\n  padding-right: 5px;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  padding: 30px 0 30px 0;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.planets,\\n.race,\\n.Spaceships {\\n  cursor: pointer;\\n  font-size: 20px;\\n}\\n\\n.score {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 200px;\\n  border: 2px solid #000;\\n  background-color: #ccc;\\n  box-shadow: 1px 1px 0 0 #000;\\n  font-size: 25px;\\n  font-weight: 500;\\n}\\n\\n.likes,\\n.Reservations,\\n.comment {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  border: 2px solid #000;\\n  background-color: #fff;\\n  box-shadow: 1px 1px 0 0 #000;\\n  padding: 2px 5px 2px 5px;\\n}\\n\\n.likes:hover,\\n.Reservations:hover,\\n.comment:hover {\\n  background-color: #ccc;\\n}\\n\\n.likes:active,\\n.Reservations:active,\\n.comment:active {\\n  background-color: #fff;\\n}\\n\\n.like_comment {\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 5px;\\n}\\n\\n.title_url {\\n  display: flex;\\n  gap: 5px;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.outline {\\n  border: 2px solid #000;\\n  padding: 10px;\\n  box-shadow: 1px 1px 0 0 #000;\\n  transition: 0.5s;\\n}\\n\\n.outline:hover {\\n  transform: scale(1.1);\\n  transition: 0.5s;\\n}\\n\\n/*  media query */\\n\\n@media screen and (max-width: 1100px) {\\n  .scorelist {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\\n@media screen and (max-width: 800px) {\\n  .scorelist {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/asset/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/asset/css/style.css":
/*!*********************************!*\
  !*** ./src/asset/css/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/asset/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/asset/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Likes/Likeclass.js":
/*!********************************!*\
  !*** ./src/Likes/Likeclass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Likeclass)\n/* harmony export */ });\nclass Likeclass {\n  constructor(array) {\n    this.LikesArray = array;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/Likes/Likeclass.js?");

/***/ }),

/***/ "./src/Likes/LikesApi.js":
/*!*******************************!*\
  !*** ./src/Likes/LikesApi.js ***!
  \*******************************/
/***/ ((module) => {

eval("class LikesApi {\n  constructor() {\n    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cNZqM0oVNMyctsSAIcbv/likes';\n  }\n\n      getmethod = async () => {\n        const result = await fetch(\n          `${this.baseURL}`,\n          {\n            method: 'GET',\n            headers: {\n              'Content-Type': 'application/json',\n            },\n          },\n        )\n          .then((res) => res.json())\n          .catch((err) => err);\n        return result;\n      };\n\n      postmethod = async (Id) => {\n        const result = await fetch(\n          `${this.baseURL}`,\n          {\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({ item_id: Id }),\n          },\n        )\n          .then((res) => {\n            if (!res.ok) {\n              throw new Error('Something went wrong on api server!');\n            }\n            return res.json();\n          })\n          .catch((err) => err);\n\n        return result;\n      };\n}\n\nmodule.exports = LikesApi;\n\n\n//# sourceURL=webpack://webpack-demo/./src/Likes/LikesApi.js?");

/***/ }),

/***/ "./src/Likes/addBtn.js":
/*!*****************************!*\
  !*** ./src/Likes/addBtn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn)\n/* harmony export */ });\n/* harmony import */ var _LikesApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LikesApi.js */ \"./src/Likes/LikesApi.js\");\n/* harmony import */ var _LikesApi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LikesApi_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction addBtn(Id) {\r\n  const apilike = new (_LikesApi_js__WEBPACK_IMPORTED_MODULE_0___default())();\r\n  Id = Id + 1;\r\n  return apilike.postmethod(Id);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/Likes/addBtn.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((module) => {

eval("class MakeApicall {\n  constructor() {\n    this.baseURL = 'https://jsonplaceholder.typicode.com/comments';\n  }\n\n    getmethod = async () => {\n      const result = await fetch(\n        `${this.baseURL}`,\n        {\n          method: 'GET',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n        },\n      )\n        .then((res) => res.json())\n        .catch((err) => err);\n      return result;\n    };\n}\n\nmodule.exports = MakeApicall;\n\n\n//# sourceURL=webpack://webpack-demo/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asset_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/css/style.css */ \"./src/asset/css/style.css\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Todo_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Likes_addBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Likes/addBtn.js */ \"./src/Likes/addBtn.js\");\n/* harmony import */ var _Likes_LikesApi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Likes/LikesApi.js */ \"./src/Likes/LikesApi.js\");\n/* harmony import */ var _Likes_LikesApi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Likes_LikesApi_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Likes_Likeclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Likes/Likeclass.js */ \"./src/Likes/Likeclass.js\");\n\n// base class and api call\n\n\n\n\n// Likes api and class\n\n\n\n\nconst header = document.querySelector('.div_header');\n// container\nconst scorelist = document.querySelector('.scorelist');\n// MakeApicall to object\nconst api = new (_Todo_js__WEBPACK_IMPORTED_MODULE_2___default())();\n// Like class to object\nconst apilike = new (_Likes_LikesApi_js__WEBPACK_IMPORTED_MODULE_4___default())();\n\nconst refresher = async () => {\n\n  header.innerHTML = '';\n  scorelist.innerHTML = '';\n\n\n  // main api call\n  const res = await api.getmethod();\n  const main = new _main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](res);\n  // api likes\n  const reslike = await apilike.getmethod();\n  const mainlike = new _Likes_Likeclass_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](reslike);\n\n  for (let i = 0; i < mainlike.LikesArray.length; i += 1) {\n    main.username.forEach((usernames) => {\n      if (usernames.id < 7) {\n        if (mainlike.LikesArray[i].item_id === usernames.id) {\n          header.innerHTML = `\n          <a class=\"logo\"> <span>Blog</span> <span>logo</span> </a>\n          <a class=\"Spaceships active\"><span>Blogs(${mainlike.LikesArray.length})</span></a>\n          <a class=\"planets\"> <span>comments</span> </a>\n          <div></div>\n          <a class=\"race\"> <span>Login</span> </a>\n          `\n          scorelist.innerHTML += `\n\n  <div class=outline>\n  <div class=\"score\">\n  <p class=\"paragraph_url\"><span>${\n  usernames.id === 1\n    ? 'First'\n    : usernames.id === 2\n      ? 'Second'\n      : usernames.id === 3\n        ? 'Third'\n        : usernames.id === 4\n          ? 'Fourth'\n          : usernames.id === 5\n            ? 'Fifth'\n            : usernames.id === 6\n              ? 'Sixth'\n              : ''\n}\n\n  </span><span>Blog</span></p>\n  </div>\n   <div  class=\"title_url\"> \n    <p class=\"paragraph_url\"><span>${usernames.name}</span></p>\n    <p class=\"paragraph_url\"><span>Likes: ${\n  mainlike.LikesArray[i].likes\n}</span></p>\n   </div>\n   <div class=\"like_comment\">\n   <button class=\"likes\">Like</button>\n     <button class=\"comment\">Comment</button>\n   </div>\n\n   <div class=\"like_comment\">\n   <button class=\"Reservations\">Reservations</button>\n   </div>\n  </div>\n\n  `;\n        }\n      }\n    });\n  }\n\n  for (let i = 0; i < document.querySelectorAll('.likes').length; i += 1) {\n    document.querySelectorAll('.likes')[i].addEventListener('click', () => {\n      (0,_Likes_addBtn_js__WEBPACK_IMPORTED_MODULE_3__.addBtn)(i);\n      setTimeout(() => {\n        refresher();\n      }, 400);\n    });\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', refresher, false);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\nclass Main {\n  constructor(array) {\n    this.username = array;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/main.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);