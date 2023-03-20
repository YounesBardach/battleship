/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Restrict sizing to the page width in all browsers (opinionated).\n */\n\n:where(iframe, img, input, video, select, textarea) {\n  height: auto;\n  max-width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/assets.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,YAAY;EACZ,eAAe;AACjB","sourcesContent":["/**\n * Restrict sizing to the page width in all browsers (opinionated).\n */\n\n:where(iframe, img, input, video, select, textarea) {\n  height: auto;\n  max-width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Add typography inheritance in all browsers (opinionated).\n */\n\n:where(button, input, select, textarea) {\n  background-color: transparent; /* 1 */\n  border: 1px solid WindowFrame; /* 1 */\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  letter-spacing: inherit; /* 2 */\n  padding: 0.25em 0.375em; /* 1 */\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(select) {\n  appearance: none;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat right center / 1em;\n  border-radius: 0;\n  padding-right: 1em;\n}\n\n/**\n * Don't show the arrow for multiple choice selects\n */\n\n:where(select[multiple]) {\n  background-image: none;\n}\n\n/**\n * Remove the border and padding in all browsers (opinionated).\n */\n\n:where([type=\"color\" i], [type=\"range\" i]) {\n  border-width: 0;\n  padding: 0;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/forms.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,6BAA6B,EAAE,MAAM;EACrC,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,uBAAuB,EAAE,MAAM;EAC/B,uBAAuB,EAAE,MAAM;AACjC;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,gFAAuL;EACvL,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE;;AAEF;EACE,sBAAsB;AACxB;;AAEA;;EAEE;;AAEF;EACE,eAAe;EACf,UAAU;AACZ","sourcesContent":["/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Add typography inheritance in all browsers (opinionated).\n */\n\n:where(button, input, select, textarea) {\n  background-color: transparent; /* 1 */\n  border: 1px solid WindowFrame; /* 1 */\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  letter-spacing: inherit; /* 2 */\n  padding: 0.25em 0.375em; /* 1 */\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(select) {\n  appearance: none;\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E\") no-repeat right center / 1em;\n  border-radius: 0;\n  padding-right: 1em;\n}\n\n/**\n * Don't show the arrow for multiple choice selects\n */\n\n:where(select[multiple]) {\n  background-image: none;\n}\n\n/**\n * Remove the border and padding in all browsers (opinionated).\n */\n\n:where([type=\"color\" i], [type=\"range\" i]) {\n  border-width: 0;\n  padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * 1. Remove animations when motion is reduced (opinionated).\n * 2. Remove fixed background attachments when motion is reduced (opinionated).\n * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).\n * 4. Remove transitions when motion is reduced (opinionated).\n */\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  ::before,\n  ::after {\n    animation-delay: -1ms !important; /* 1 */\n    animation-duration: 1ms !important; /* 1 */\n    animation-iteration-count: 1 !important; /* 1 */\n    background-attachment: initial !important; /* 2 */\n    scroll-behavior: auto !important; /* 3 */\n    transition-delay: 0s !important; /* 4 */\n    transition-duration: 0s !important; /* 4 */\n  }\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/reduce-motion.css"],"names":[],"mappings":"AAAA;;;;;EAKE;;AAEF;EACE;;;IAGE,gCAAgC,EAAE,MAAM;IACxC,kCAAkC,EAAE,MAAM;IAC1C,uCAAuC,EAAE,MAAM;IAC/C,yCAAyC,EAAE,MAAM;IACjD,gCAAgC,EAAE,MAAM;IACxC,+BAA+B,EAAE,MAAM;IACvC,kCAAkC,EAAE,MAAM;EAC5C;AACF","sourcesContent":["/*\n * 1. Remove animations when motion is reduced (opinionated).\n * 2. Remove fixed background attachments when motion is reduced (opinionated).\n * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).\n * 4. Remove transitions when motion is reduced (opinionated).\n */\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  ::before,\n  ::after {\n    animation-delay: -1ms !important; /* 1 */\n    animation-duration: 1ms !important; /* 1 */\n    animation-iteration-count: 1 !important; /* 1 */\n    background-attachment: initial !important; /* 2 */\n    scroll-behavior: auto !important; /* 3 */\n    transition-delay: 0s !important; /* 4 */\n    transition-duration: 0s !important; /* 4 */\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Document\n * ========================================================================== */\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Backgrounds do not repeat by default (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  background-repeat: no-repeat; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Breaks words to prevent overflow in all browsers (opinionated).\n * 4. Use a 4-space tab width in all browsers (opinionated).\n * 5. Remove the grey highlight on links in iOS (opinionated).\n * 6. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n:where(:root) {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  overflow-wrap: break-word; /* 3 */\n  -moz-tab-size: 4; /* 4 */\n  tab-size: 4; /* 4 */\n  -webkit-tap-highlight-color: transparent; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 6 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\n:where(body) {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the inheritance of border color in Firefox.\n * 2. Add the correct box sizing in Firefox.\n */\n\n:where(hr) {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\n:where(nav) :where(ol, ul) {\n  list-style-type: none;\n  padding: 0;\n}\n\n/**\n * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n */\n\n:where(nav li)::before {\n  content: \"\\200B\";\n  float: left;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Prevent overflow of the container in all browsers (opinionated).\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\n\n:where(audio, canvas, iframe, img, svg, video) {\n  vertical-align: middle;\n}\n\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\n\n:where(iframe) {\n  border-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\n:where(svg:not([fill])) {\n  fill: currentColor;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Collapse border spacing in all browsers (opinionated).\n * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, [type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i]) {\n  -webkit-appearance: button;\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(fieldset) {\n  border: 1px solid #a0a0a0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\n:where(textarea) {\n  margin: 0; /* 1 */\n  resize: vertical; /* 3 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where([type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in Safari.\n */\n\n:where(details > summary:first-of-type) {\n  display: list-item;\n}\n\n/* Accessibility\n * ========================================================================== */\n\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n\n:where([aria-busy=\"true\" i]) {\n  cursor: progress;\n}\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n\n:where([aria-controls]) {\n  cursor: pointer;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n\n:where([aria-disabled=\"true\" i], [disabled]) {\n  cursor: not-allowed;\n}\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n\n:where([aria-hidden=\"false\" i][hidden]) {\n  display: initial;\n}\n\n:where([aria-hidden=\"false\" i][hidden]:not(:focus)) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/sanitize.css"],"names":[],"mappings":"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","sourcesContent":["/* Document\n * ========================================================================== */\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Backgrounds do not repeat by default (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  background-repeat: no-repeat; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Breaks words to prevent overflow in all browsers (opinionated).\n * 4. Use a 4-space tab width in all browsers (opinionated).\n * 5. Remove the grey highlight on links in iOS (opinionated).\n * 6. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n:where(:root) {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  overflow-wrap: break-word; /* 3 */\n  -moz-tab-size: 4; /* 4 */\n  tab-size: 4; /* 4 */\n  -webkit-tap-highlight-color: transparent; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 6 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\n:where(body) {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the inheritance of border color in Firefox.\n * 2. Add the correct box sizing in Firefox.\n */\n\n:where(hr) {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\n:where(nav) :where(ol, ul) {\n  list-style-type: none;\n  padding: 0;\n}\n\n/**\n * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n */\n\n:where(nav li)::before {\n  content: \"\\200B\";\n  float: left;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Prevent overflow of the container in all browsers (opinionated).\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\n\n:where(audio, canvas, iframe, img, svg, video) {\n  vertical-align: middle;\n}\n\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\n\n:where(iframe) {\n  border-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\n:where(svg:not([fill])) {\n  fill: currentColor;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Collapse border spacing in all browsers (opinionated).\n * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, [type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i]) {\n  -webkit-appearance: button;\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(fieldset) {\n  border: 1px solid #a0a0a0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\n:where(textarea) {\n  margin: 0; /* 1 */\n  resize: vertical; /* 3 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where([type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in Safari.\n */\n\n:where(details > summary:first-of-type) {\n  display: list-item;\n}\n\n/* Accessibility\n * ========================================================================== */\n\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n\n:where([aria-busy=\"true\" i]) {\n  cursor: progress;\n}\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n\n:where([aria-controls]) {\n  cursor: pointer;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n\n:where([aria-disabled=\"true\" i], [disabled]) {\n  cursor: not-allowed;\n}\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n\n:where([aria-hidden=\"false\" i][hidden]) {\n  display: initial;\n}\n\n:where([aria-hidden=\"false\" i][hidden]:not(:focus)) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Add the correct system-ui font-family in Firefox.\n */\n\n@font-face {\n  font-family: system-ui;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"HelveticaNeue\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Italic\"), local(\"Ubuntu-Italic\"), local(\"Roboto-Italic\"), local(\"HelveticaNeue-Italic\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold\"), local(\"Ubuntu-Bold\"), local(\"Roboto-Bold\"), local(\"HelveticaNeue-Bold\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu-BoldItalic\"), local(\"Roboto-BoldItalic\"), local(\"HelveticaNeue-BoldItalic\");\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/system-ui.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,sBAAsB;EACtB,qHAAqH;AACvH;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yIAAyI;AAC3I;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,iIAAiI;AACnI;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,0JAA0J;AAC5J","sourcesContent":["/**\n * Add the correct system-ui font-family in Firefox.\n */\n\n@font-face {\n  font-family: system-ui;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"HelveticaNeue\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Italic\"), local(\"Ubuntu-Italic\"), local(\"Roboto-Italic\"), local(\"HelveticaNeue-Italic\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold\"), local(\"Ubuntu-Bold\"), local(\"Roboto-Bold\"), local(\"HelveticaNeue-Bold\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu-BoldItalic\"), local(\"Roboto-BoldItalic\"), local(\"HelveticaNeue-BoldItalic\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Use the default user interface font in all browsers (opinionated).\n */\n\nhtml {\n  font-family:\n    system-ui,\n    /* macOS 10.11-10.12 */ -apple-system,\n    /* Windows 6+ */ \"Segoe UI\",\n    /* Android 4+ */ \"Roboto\",\n    /* Ubuntu 10.10+ */ \"Ubuntu\",\n    /* Gnome 3+ */ \"Cantarell\",\n    /* KDE Plasma 5+ */ \"Noto Sans\",\n    /* fallback */ sans-serif,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n\n/**\n * Use the default monospace user interface font in all browsers (opinionated).\n */\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    /* macOS 10.10+ */ \"Menlo\",\n    /* Windows 6+ */ \"Consolas\",\n    /* Android 4+ */ \"Roboto Mono\",\n    /* Ubuntu 10.10+ */ \"Ubuntu Monospace\",\n    /* KDE Plasma 5+ */ \"Noto Mono\",\n    /* KDE Plasma 4+ */ \"Oxygen Mono\",\n    /* Linux/OpenOffice fallback */ \"Liberation Mono\",\n    /* fallback */ monospace,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/typography.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE;;;;;;;;;;;;wCAYsC;AACxC;;AAEA;;EAEE;;AAEF;;;;EAIE;;;;;;;;;;;;;wCAasC;AACxC","sourcesContent":["/**\n * Use the default user interface font in all browsers (opinionated).\n */\n\nhtml {\n  font-family:\n    system-ui,\n    /* macOS 10.11-10.12 */ -apple-system,\n    /* Windows 6+ */ \"Segoe UI\",\n    /* Android 4+ */ \"Roboto\",\n    /* Ubuntu 10.10+ */ \"Ubuntu\",\n    /* Gnome 3+ */ \"Cantarell\",\n    /* KDE Plasma 5+ */ \"Noto Sans\",\n    /* fallback */ sans-serif,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n\n/**\n * Use the default monospace user interface font in all browsers (opinionated).\n */\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    /* macOS 10.10+ */ \"Menlo\",\n    /* Windows 6+ */ \"Consolas\",\n    /* Android 4+ */ \"Roboto Mono\",\n    /* Ubuntu 10.10+ */ \"Ubuntu Monospace\",\n    /* KDE Plasma 5+ */ \"Noto Mono\",\n    /* KDE Plasma 4+ */ \"Oxygen Mono\",\n    /* Linux/OpenOffice fallback */ \"Liberation Mono\",\n    /* fallback */ monospace,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Add the correct system-ui font-family in Chrome, Edge, and Firefox.\n */\n\n@font-face {\n  font-family: ui-monospace;\n  src: local(\".AppleSystemUIFontMonospaced-Regular\"), local(\"Segoe UI Mono\"), local(\"UbuntuMono\"), local(\"Roboto-Mono\"), local(\"Menlo\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  src: local(\".AppleSystemUIFontMonospaced-RegularItalic\"), local(\"Segoe UI Mono Italic\"), local(\"UbuntuMono-Italic\"), local(\"Roboto-Mono-Italic\"), local(\"Menlo-Italic\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-Bold\"), local(\"Segoe UI Mono Bold\"), local(\"UbuntuMono-Bold\"), local(\"Roboto-Mono-Bold\"), local(\"Menlo-Bold\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-BoldItalic\"), local(\"Segoe UI Mono Bold Italic\"), local(\"UbuntuMono-BoldItalic\"), local(\"Roboto-Mono-BoldItalic\"), local(\"Menlo-BoldItalic\");\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/ui-monospace.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,qIAAqI;AACvI;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,uKAAuK;AACzK;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,sJAAsJ;AACxJ;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,qLAAqL;AACvL","sourcesContent":["/**\n * Add the correct system-ui font-family in Chrome, Edge, and Firefox.\n */\n\n@font-face {\n  font-family: ui-monospace;\n  src: local(\".AppleSystemUIFontMonospaced-Regular\"), local(\"Segoe UI Mono\"), local(\"UbuntuMono\"), local(\"Roboto-Mono\"), local(\"Menlo\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  src: local(\".AppleSystemUIFontMonospaced-RegularItalic\"), local(\"Segoe UI Mono Italic\"), local(\"UbuntuMono-Italic\"), local(\"Roboto-Mono-Italic\"), local(\"Menlo-Italic\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-Bold\"), local(\"Segoe UI Mono Bold\"), local(\"UbuntuMono-Bold\"), local(\"Roboto-Mono-Bold\"), local(\"Menlo-Bold\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-BoldItalic\"), local(\"Segoe UI Mono Bold Italic\"), local(\"UbuntuMono-BoldItalic\"), local(\"Roboto-Mono-BoldItalic\"), local(\"Menlo-BoldItalic\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000080;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.modal-two,\n.modal-three {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url(https://www.nicepng.com/png/detail/13-131178_download-emoji-monkey-no-evil-3-pk.png);\n  background-position: center;\n  background-size: cover;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.ship-placement {\n  border-radius: 5px;\n  padding: 1rem;\n  background-color: #e37922;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  gap: 1rem;\n  display: grid;\n  grid-template-rows: 100px 400px 50px 400px 50px;\n  justify-items: center;\n}\n\n.scale-visible {\n  transform: scale(1);\n  transition: ease 0.4s;\n  visibility: visible;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.explanation {\n  font-size: var(--font-size-default);\n  margin: 0;\n  text-align: center;\n  align-self: center;\n}\n\n.player-one-container,\n.player-two-container {\n  border: 5px solid black;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  position: relative;\n}\n\n.hide-button-one,\n.hide-button-two {\n  background-color: lightskyblue;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-in-out;\n  font-weight: bold;\n}\n\n.hide-button-one:hover,\n.hide-button-two:hover {\n  background-color: rgb(75, 183, 250);\n}\n\n.hide-button-one:active,\n.hide-button-two:active {\n  box-shadow: inset 1px 2px 5px gray;\n  transform: translateX(1px) translateY(1px);\n}\n\nheader,\n.indicator {\n  height: 100px;\n  background-color: #b4eaff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.indicator {\n  background-color: khaki;\n}\n\n.game {\n  text-align: center;\n  background-color: wheat;\n  height: calc(100vh - 300px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.container-one,\n.container-two {\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  box-shadow: 5px 5px 5px #463f3f;\n  border: 5px solid black;\n  background-color: white;\n}\n\n.red-border {\n  border-color: red;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n}\n\n.square {\n  border: 1px solid black;\n}\n\n.square:hover {\n  background-color: red;\n}\n\n.ship-square {\n  background-color: lightgrey;\n}\n.disabled {\n  pointer-events: none;\n}\n\n.hit-boat {\n  background-color: crimson;\n}\n\n.miss-boat {\n  background-color: blue;\n}\n\nfooter {\n  display: flex;\n  height: 100px;\n  background-color: #a1f5d7;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,0GAA0G;EAC1G,2BAA2B;EAC3B,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,SAAS;EACT,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;;EAEE,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,6CAA6C;EAC7C,iBAAiB;AACnB;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;;EAEE,kCAAkC;EAClC,0CAA0C;AAC5C;;AAEA;;EAEE,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":[":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000080;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.modal-two,\n.modal-three {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url(https://www.nicepng.com/png/detail/13-131178_download-emoji-monkey-no-evil-3-pk.png);\n  background-position: center;\n  background-size: cover;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.ship-placement {\n  border-radius: 5px;\n  padding: 1rem;\n  background-color: #e37922;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  gap: 1rem;\n  display: grid;\n  grid-template-rows: 100px 400px 50px 400px 50px;\n  justify-items: center;\n}\n\n.scale-visible {\n  transform: scale(1);\n  transition: ease 0.4s;\n  visibility: visible;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.explanation {\n  font-size: var(--font-size-default);\n  margin: 0;\n  text-align: center;\n  align-self: center;\n}\n\n.player-one-container,\n.player-two-container {\n  border: 5px solid black;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  position: relative;\n}\n\n.hide-button-one,\n.hide-button-two {\n  background-color: lightskyblue;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-in-out;\n  font-weight: bold;\n}\n\n.hide-button-one:hover,\n.hide-button-two:hover {\n  background-color: rgb(75, 183, 250);\n}\n\n.hide-button-one:active,\n.hide-button-two:active {\n  box-shadow: inset 1px 2px 5px gray;\n  transform: translateX(1px) translateY(1px);\n}\n\nheader,\n.indicator {\n  height: 100px;\n  background-color: #b4eaff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.indicator {\n  background-color: khaki;\n}\n\n.game {\n  text-align: center;\n  background-color: wheat;\n  height: calc(100vh - 300px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.container-one,\n.container-two {\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  box-shadow: 5px 5px 5px #463f3f;\n  border: 5px solid black;\n  background-color: white;\n}\n\n.red-border {\n  border-color: red;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n}\n\n.square {\n  border: 1px solid black;\n}\n\n.square:hover {\n  background-color: red;\n}\n\n.ship-square {\n  background-color: lightgrey;\n}\n.disabled {\n  pointer-events: none;\n}\n\n.hit-boat {\n  background-color: crimson;\n}\n\n.miss-boat {\n  background-color: blue;\n}\n\nfooter {\n  display: flex;\n  height: 100px;\n  background-color: #a1f5d7;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/sanitize.css/assets.css":
/*!**********************************************!*\
  !*** ./node_modules/sanitize.css/assets.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./assets.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/forms.css":
/*!*********************************************!*\
  !*** ./node_modules/sanitize.css/forms.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/reduce-motion.css":
/*!*****************************************************!*\
  !*** ./node_modules/sanitize.css/reduce-motion.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./reduce-motion.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/sanitize.css":
/*!************************************************!*\
  !*** ./node_modules/sanitize.css/sanitize.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./sanitize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/system-ui.css":
/*!*************************************************!*\
  !*** ./node_modules/sanitize.css/system-ui.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./system-ui.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/typography.css":
/*!**************************************************!*\
  !*** ./node_modules/sanitize.css/typography.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./typography.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/ui-monospace.css":
/*!****************************************************!*\
  !*** ./node_modules/sanitize.css/ui-monospace.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./ui-monospace.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const gameboardMaker = () => {
  const gameboard = {};
  gameboard.ships = [];
  gameboard.plays = [];
  gameboard.positions = [];
  gameboard.touch = [];
  gameboard.place = (x, y, length, direction, hits = 0, sunk = false) => {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, hits, sunk);
    ship.x1 = x;
    ship.y1 = y;
    ship.direction = direction;
    if (direction === `v`) {
      if (
        (ship.y1 === 9 && length > 1) ||
        (ship.y1 === 8 && length > 2) ||
        (ship.y1 === 7 && length > 3) ||
        (ship.y1 === 6 && length > 4)
      ) {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`y${i}`] = y - j;
        }
      } else {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`y${i}`] = y + j;
        }
      }
    }
    if (direction === `h`) {
      if (
        (ship.x1 === 9 && length > 1) ||
        (ship.x1 === 8 && length > 2) ||
        (ship.x1 === 7 && length > 3) ||
        (ship.x1 === 6 && length > 4)
      ) {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`x${i}`] = x - j;
        }
      } else {
        for (let i = 2, j = 1; i <= ship.length; i += 1, j += 1) {
          ship[`x${i}`] = x + j;
        }
      }
    }
    gameboard.ships.push(ship);
    return gameboard.ships;
  };
  gameboard.remove = () => {
    gameboard.ships.pop();
  };
  gameboard.receiveAttack = (x, y, identity) => {
    let touch = null;
    if (identity === `computer`) {
      const restrictMove = gameboard.positions.findIndex(
        (position) => position[0] === x && position[1] === y
      );
      gameboard.positions.splice(restrictMove, 1);
    }
    gameboard.ships.map((ship) => {
      if (
        (ship.x1 === x ||
          ship.x2 === x ||
          ship.x3 === x ||
          ship.x4 === x ||
          ship.x5 === x) &&
        (ship.y1 === y ||
          ship.y2 === y ||
          ship.y3 === y ||
          ship.y4 === y ||
          ship.y5 === y)
      ) {
        ship.hit();
        if (ship.isSunk() === 0) {
          ship.sunk = true;
        }
        gameboard.touch.push([x, y]);
        touch = ship;
      }
      return touch;
    });
    gameboard.plays.push([x, y]);
    return touch;
  };
  gameboard.gameOver = () => {
    const gameState = gameboard.ships.filter((ship) => ship.sunk === false);
    if (gameState.length === 0) {
      return `Game Over`;
    }
    return `Game On`;
  };
  return gameboard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardMaker);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerMaker": () => (/* binding */ computerMaker),
/* harmony export */   "playerMaker": () => (/* binding */ playerMaker)
/* harmony export */ });
const playerMaker = () => {
  const player = {};
  player.identity = `player`;
  player.play = (gameboard, x, y) => {
    // changed later
    gameboard.receiveAttack(x, y, player.identity);
    return gameboard.plays.some((play) => play[0] === x && play[1] === y);
  };
  return player;
};

const computerMaker = () => {
  const player = {};
  player.identity = `computer`;
  player.play = (gameboard) => {
    let Pos
    if (player.testing) {
      Pos = [1, 1];
    } else {
      Pos = gameboard.positions[Math.floor(Math.random() * gameboard.positions.length)];
    }
    if (Pos === undefined) {return false}
    gameboard.receiveAttack(Pos[0], Pos[1], player.identity);
    return gameboard.plays.some(
      (play) => play[0] === Pos[0] && play[1] === Pos[1]
    );
  };
  return player;
};


/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateSquare": () => (/* binding */ populateSquare)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



const start = document.querySelector(".start-button");
const reset = document.querySelector(".reset-button");
const opponent = document.querySelector(".opponent-button");
const modal = document.querySelector(".modal");
const shipPlacement = document.querySelector(".ship-placement");
const selectionContainerOne = document.querySelector(".player-one-container");
const selectionContainerTwo = document.querySelector(".player-two-container");
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
const indicator = document.querySelector(".indicator");
const playerTwoTitle = document.querySelector(".player-two");
const hideButtonOne = document.querySelector(".hide-button-one");
const hideButtonTwo = document.querySelector(".hide-button-two");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");

let GameboardOne;
let GameboardTwo;
let playerOne;
let playerTwo;
let counterOne = 5;
let counterTwo = 5;

const computerShipsRandomizer = () => {
  let duplicateX = [];
  let duplicateY = [];
  const length = [1, 2, 3, 4, 5];
  for (let i = 1, j = 5; i <= j; i += 1) {
    const Pos =
      GameboardTwo.positions[
        Math.floor(Math.random() * GameboardTwo.positions.length)
      ];
    const direction = [`h`, `v`];
    const randomPositionX = Pos[0];
    const randomPositionY = Pos[1];
    const randomLength = length[Math.floor(Math.random() * length.length)];
    const randomDirection =
      direction[Math.floor(Math.random() * direction.length)];

    GameboardTwo.place(
      randomPositionX,
      randomPositionY,
      randomLength,
      randomDirection
    );
    const lastShip = GameboardTwo.ships[GameboardTwo.ships.length - 1];
    if (duplicateX.length !== 0 && duplicateY.length !== 0) {
      const test1 = duplicateX.some(
        (value) =>
          value === lastShip.x1 ||
          value === lastShip.x2 ||
          value === lastShip.x3 ||
          value === lastShip.x4 ||
          value === lastShip.x5
      );
      const test2 = duplicateY.some(
        (value) =>
          value === lastShip.y1 ||
          value === lastShip.y2 ||
          value === lastShip.y3 ||
          value === lastShip.y4 ||
          value === lastShip.y5
      );
      if (test1 && test2) {
        GameboardTwo.remove();
        j += 1;
      } else {
        const lengthToRemove = length.findIndex(
          (removableLength) => removableLength === randomLength
        );
        length.splice(lengthToRemove, 1);

        duplicateX.push(
          lastShip.x1,
          lastShip.x2,
          lastShip.x3,
          lastShip.x4,
          lastShip.x5
        );
        duplicateY.push(
          lastShip.y1,
          lastShip.y2,
          lastShip.y3,
          lastShip.y4,
          lastShip.y5
        );
        duplicateX = duplicateX.filter((value) => value !== undefined);
        duplicateY = duplicateY.filter((value) => value !== undefined);
      }
    } else {
      const lengthToRemove = length.findIndex(
        (removableLength) => removableLength === randomLength
      );
      length.splice(lengthToRemove, 1);

      duplicateX.push(
        lastShip.x1,
        lastShip.x2,
        lastShip.x3,
        lastShip.x4,
        lastShip.x5
      );
      duplicateY.push(
        lastShip.y1,
        lastShip.y2,
        lastShip.y3,
        lastShip.y4,
        lastShip.y5
      );
      duplicateX = duplicateX.filter((value) => value !== undefined);
      duplicateY = duplicateY.filter((value) => value !== undefined);
    }
  }
};

const game = (div) => {
  div.addEventListener("click", (e) => {
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);
    if (containerOne.contains(e.target)) {
      containerOne.classList.remove("red-border");
      containerTwo.classList.remove("disabled");
      containerOne.classList.add("disabled");
      containerTwo.classList.add("red-border");
      if (playerTwo.identity === `player`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        playerTwo.play(GameboardOne, Number(x), Number(y));
        if (
          GameboardOne.touch.some(
            (move) => move[0] === Number(x) && move[1] === Number(y)
          )
        ) {
          indicator.children[0].textContent = `Player 2 hit Player 1!`;
          e.target.classList.add("hit-boat", "disabled");
        } else {
          indicator.children[0].textContent = `Player 2 missed!`;
          e.target.classList.add("miss-boat", "disabled");
        }
        if (GameboardOne.gameOver() === `Game Over`) {
          indicator.children[0].textContent = `Player 2 won!`;
          containerOne.classList.add("disabled");
          containerTwo.classList.add("disabled");
          return;
        }
      }
      if (playerTwo.identity === `computer`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        const lastMove = GameboardOne.plays[GameboardOne.plays.length - 1];
        if (
          GameboardOne.touch.some(
            (move) => move[0] === lastMove[0] && move[1] === lastMove[1]
          )
        ) {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer hit Player 1!`;
          }, 200);

          e.target.classList.add("hit-boat", "disabled");
        } else {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer missed!`;
          }, 200);
          e.target.classList.add("miss-boat", "disabled");
        }
        if (GameboardOne.gameOver() === `Game Over`) {
          setTimeout(() => {
            indicator.children[0].textContent = `Computer won!`;
          }, 200);
          containerOne.classList.add("disabled");
          containerTwo.classList.add("disabled");
          return;
        }
      }
    }
    if (containerTwo.contains(e.target)) {
      containerOne.classList.add("red-border");
      containerOne.classList.remove("disabled");
      containerTwo.classList.remove("red-border");
      containerTwo.classList.add("disabled");

      playerOne.play(GameboardTwo, Number(x), Number(y));
      if (
        GameboardTwo.touch.some(
          (move) => move[0] === Number(x) && move[1] === Number(y)
        )
      ) {
        if (playerTwo.identity === `computer`) {
          indicator.children[0].textContent = `Player 1 hit Computer!`;
        } else {
          indicator.children[0].textContent = `Player 1 hit Player 2!`;
        }
        e.target.classList.add("hit-boat", "disabled");
      } else {
        indicator.children[0].textContent = `Player 1 missed!`;
        e.target.classList.add("miss-boat", "disabled");
      }
      if (GameboardTwo.gameOver() === `Game Over`) {
        indicator.children[0].textContent = `Player 1 won!`;
        containerOne.classList.add("disabled");
        containerTwo.classList.add("disabled");
        return;
      }
      if (playerTwo.identity === `computer`) {
        if (GameboardTwo.gameOver() === `Game Over`) {
          return;
        }
        playerTwo.play(GameboardOne);
        const lastMove = GameboardOne.plays[GameboardOne.plays.length - 1];
        const squareToClick = containerOne.querySelector(
          `.square${lastMove[0]}${lastMove[1]}`
        );
        setTimeout(() => {
          squareToClick.click();
        }, 200);
      }
    }
  });
};

const colorShips = (gameboard, container) => {
  gameboard.ships.map((ship) => {
    const squareToColorOne = container.querySelector(
      `.square${ship.x1}${ship.y1}`
    );
    squareToColorOne.classList.add("ship-square");
    if (ship.direction === `h`) {
      if (ship.x2 !== undefined) {
        const squareToColorTwo = container.querySelector(
          `.square${ship.x2}${ship.y1}`
        );
        squareToColorTwo.classList.add("ship-square");
      }
      if (ship.x3 !== undefined) {
        const squareToColorThree = container.querySelector(
          `.square${ship.x3}${ship.y1}`
        );
        squareToColorThree.classList.add("ship-square");
      }
      if (ship.x4 !== undefined) {
        const squareToColorFour = container.querySelector(
          `.square${ship.x4}${ship.y1}`
        );
        squareToColorFour.classList.add("ship-square");
      }
      if (ship.x5 !== undefined) {
        const squareToColorFive = container.querySelector(
          `.square${ship.x5}${ship.y1}`
        );
        squareToColorFive.classList.add("ship-square");
      }
    } else {
      if (ship.y2 !== undefined) {
        const squareToColorTwo = container.querySelector(
          `.square${ship.x1}${ship.y2}`
        );
        squareToColorTwo.classList.add("ship-square");
      }
      if (ship.y3 !== undefined) {
        const squareToColorThree = container.querySelector(
          `.square${ship.x1}${ship.y3}`
        );
        squareToColorThree.classList.add("ship-square");
      }
      if (ship.y4 !== undefined) {
        const squareToColorFour = container.querySelector(
          `.square${ship.x1}${ship.y4}`
        );
        squareToColorFour.classList.add("ship-square");
      }
      if (ship.y5 !== undefined) {
        const squareToColorFive = container.querySelector(
          `.square${ship.x1}${ship.y5}`
        );
        squareToColorFive.classList.add("ship-square");
      }
    }
    return ship;
  });
};

const selection = (div, container) => {
  div.addEventListener("click", (e) => {
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);
    if (container === selectionContainerOne) {
      if (counterOne === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardOne.place(Number(x), Number(y), counterOne, `h`);
      colorShips(GameboardOne, selectionContainerOne);
      counterOne -= 1;
    }
    if (container === selectionContainerTwo) {
      if (counterTwo === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardTwo.place(Number(x), Number(y), counterTwo, `h`);
      colorShips(GameboardTwo, selectionContainerTwo);
      counterTwo -= 1;
    }
  });
  div.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const x = e.target.getAttribute("class").match(/\d+/)[0].charAt(0);
    const y = e.target.getAttribute("class").match(/\d+/)[0].charAt(1);

    if (container === selectionContainerOne) {
      if (counterOne === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardOne.place(Number(x), Number(y), counterOne, `v`);
      colorShips(GameboardOne, selectionContainerOne);
      counterOne -= 1;
    }
    if (container === selectionContainerTwo) {
      if (counterTwo === 0) {
        container.classList.add("disabled");
        return;
      }
      GameboardTwo.place(Number(x), Number(y), counterTwo, `v`);
      colorShips(GameboardTwo, selectionContainerTwo);
      counterTwo -= 1;
    }
  });
};

const populateSquare = (container, gameboard) => {
  for (let i = 0; i < 10; i += 1) {
    const div = document.createElement("div");
    div.classList.add(`row${i}`, `row`);
    container.appendChild(div);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (container === containerOne || container === containerTwo) {
        gameboard.positions.push([j, i]);
        const div = document.createElement("div");
        div.classList.add(`square${j}${i}`, `square`);
        game(div);
        const row = container.querySelector(`.row${i}`);
        row.appendChild(div);
      } else {
        const div = document.createElement("div");
        div.classList.add(`square${j}${i}`, `square`);
        selection(div, container);
        const row = container.querySelector(`.row${i}`);
        row.appendChild(div);
      }
    }
  }
};

const chooseOpponent = () => {
  if (opponent.textContent === `Player`) {
    opponent.textContent = `Computer`;
    playerTwoTitle.textContent = `Player 2`;
    playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerMaker)();
  } else {
    opponent.textContent = `Player`;
    playerTwoTitle.textContent = `Computer`;
    playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_1__.computerMaker)();
  }
};

const reseter = () => {
  counterOne = 5;
  counterTwo = 5;
  containerOne.innerHTML = "";
  containerTwo.innerHTML = "";
  selectionContainerOne.innerHTML = "";
  selectionContainerTwo.innerHTML = "";
  selectionContainerOne.classList.remove("disabled");
  selectionContainerTwo.classList.remove("disabled");
  containerOne.classList.remove("red-border", "disabled");
  containerTwo.classList.remove("red-border", "disabled");
};

const initiateGame = () => {
  reseter()
  GameboardOne = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  GameboardTwo = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerMaker)();
  populateSquare(containerOne, GameboardOne);
  populateSquare(containerTwo, GameboardTwo);
  if (playerTwoTitle.textContent === `Player 2`) {
    playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerMaker)();
  } else {
    playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_1__.computerMaker)();
  }
  modal.classList.add("scale-visible");
  shipPlacement.classList.add("visible");
  if (playerTwo.identity === `player`) {
    populateSquare(selectionContainerOne);
    populateSquare(selectionContainerTwo);
  }
  if (playerTwo.identity === `computer`) {
    populateSquare(selectionContainerOne);
    computerShipsRandomizer();
  }
};

start.addEventListener("click", () => {
  initiateGame();
  reset.classList.remove("disabled");
  start.classList.add("disabled");
});

reset.addEventListener("click", () => {
  initiateGame();
});

opponent.addEventListener("click", () => {
  containerOne.classList.add("disabled");
  containerTwo.classList.add("disabled");
  chooseOpponent();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("scale-visible");
  }
});

hideButtonOne.addEventListener("click", () => {
  if (hideButtonOne.textContent === `Hide`) {
    modalTwo.classList.add("scale-visible");
    hideButtonOne.textContent = `Show`;
  } else {
    modalTwo.classList.remove("scale-visible");
    hideButtonOne.textContent = `Hide`;
  }
});

hideButtonTwo.addEventListener("click", () => {
  if (hideButtonTwo.textContent === `Hide`) {
    modalThree.classList.add("scale-visible");
    hideButtonTwo.textContent = `Show`;
  } else {
    modalThree.classList.remove("scale-visible");
    hideButtonTwo.textContent = `Hide`;
  }
});




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipMaker = (length, hits, sunk) => {
    const ship = {length, hits, sunk}
    ship.hit = () => {
        ship.hits += 1
        return ship.hits
    }
    ship.isSunk = () => {
        const hp = ship.length - ship.hits
        if(hp === 0) {ship.sunk = true}
        return hp
    }
    return ship
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipMaker);

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sanitize.css */ "./node_modules/sanitize.css/sanitize.css");
/* harmony import */ var sanitize_css_forms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sanitize.css/forms.css */ "./node_modules/sanitize.css/forms.css");
/* harmony import */ var sanitize_css_assets_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sanitize.css/assets.css */ "./node_modules/sanitize.css/assets.css");
/* harmony import */ var sanitize_css_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sanitize.css/typography.css */ "./node_modules/sanitize.css/typography.css");
/* harmony import */ var sanitize_css_reduce_motion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sanitize.css/reduce-motion.css */ "./node_modules/sanitize.css/reduce-motion.css");
/* harmony import */ var sanitize_css_system_ui_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sanitize.css/system-ui.css */ "./node_modules/sanitize.css/system-ui.css");
/* harmony import */ var sanitize_css_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sanitize.css/ui-monospace.css */ "./node_modules/sanitize.css/ui-monospace.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./populate */ "./src/populate.js");













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RnZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ5QztBQUNhOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNVO0FBQ0M7QUFDSTtBQUNHO0FBQ0o7QUFDRztBQUNsQjs7QUFFb0I7QUFDVjtBQUNTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvYXNzZXRzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvcmVkdWNlLW1vdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvYXNzZXRzLmNzcz9mZGRkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Zvcm1zLmNzcz81MTM0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzPzliMWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzP2JhMGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc3lzdGVtLXVpLmNzcz9lZjI5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzP2EyMGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzcz82OGEyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVzdHJpY3Qgc2l6aW5nIHRvIHRoZSBwYWdlIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUsIGltZywgaW5wdXQsIHZpZGVvLCBzZWxlY3QsIHRleHRhcmVhKSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvYXNzZXRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7QUFFRjtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlc3RyaWN0IHNpemluZyB0byB0aGUgcGFnZSB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lLCBpbWcsIGlucHV0LCB2aWRlbywgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcxNiUyNyBoZWlnaHQ9JTI3NCUyNyUzRSUzQ3BhdGggZD0lMjdNNCAwaDZMNyA0JTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB0eXBvZ3JhcGh5IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgV2luZG93RnJhbWU7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMiAqL1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMzc1ZW07IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0KSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgcmlnaHQgY2VudGVyIC8gMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyoqXFxuICogRG9uJ3Qgc2hvdyB0aGUgYXJyb3cgZm9yIG11bHRpcGxlIGNob2ljZSBzZWxlY3RzXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdFttdWx0aXBsZV0pIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIGFuZCBwYWRkaW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmFuZ2VcXFwiIGldKSB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Zvcm1zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLDZCQUE2QixFQUFFLE1BQU07RUFDckMsY0FBYyxFQUFFLE1BQU07RUFDdEIsYUFBYSxFQUFFLE1BQU07RUFDckIsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQix1QkFBdUIsRUFBRSxNQUFNO0FBQ2pDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdGQUF1TDtFQUN2TCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB0eXBvZ3JhcGh5IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgV2luZG93RnJhbWU7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMiAqL1xcbiAgcGFkZGluZzogMC4yNWVtIDAuMzc1ZW07IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0KSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nNCclM0UlM0NwYXRoIGQ9J000IDBoNkw3IDQnLyUzRSUzQy9zdmclM0VcXFwiKSBuby1yZXBlYXQgcmlnaHQgY2VudGVyIC8gMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyoqXFxuICogRG9uJ3Qgc2hvdyB0aGUgYXJyb3cgZm9yIG11bHRpcGxlIGNob2ljZSBzZWxlY3RzXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdFttdWx0aXBsZV0pIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIGFuZCBwYWRkaW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmFuZ2VcXFwiIGldKSB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKiAxLiBSZW1vdmUgYW5pbWF0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIGZpeGVkIGJhY2tncm91bmQgYXR0YWNobWVudHMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIFJlbW92ZSB0aW1lZCBzY3JvbGxpbmcgYmVoYXZpb3JzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiA0LiBSZW1vdmUgdHJhbnNpdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqLFxcbiAgOjpiZWZvcmUsXFxuICA6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsICFpbXBvcnRhbnQ7IC8qIDIgKi9cXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7IC8qIDMgKi9cXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvcmVkdWNlLW1vdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0VBS0U7O0FBRUY7RUFDRTs7O0lBR0UsZ0NBQWdDLEVBQUUsTUFBTTtJQUN4QyxrQ0FBa0MsRUFBRSxNQUFNO0lBQzFDLHVDQUF1QyxFQUFFLE1BQU07SUFDL0MseUNBQXlDLEVBQUUsTUFBTTtJQUNqRCxnQ0FBZ0MsRUFBRSxNQUFNO0lBQ3hDLCtCQUErQixFQUFFLE1BQU07SUFDdkMsa0NBQWtDLEVBQUUsTUFBTTtFQUM1QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICogMS4gUmVtb3ZlIGFuaW1hdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSBmaXhlZCBiYWNrZ3JvdW5kIGF0dGFjaG1lbnRzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBSZW1vdmUgdGltZWQgc2Nyb2xsaW5nIGJlaGF2aW9ycyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogNC4gUmVtb3ZlIHRyYW5zaXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKixcXG4gIDo6YmVmb3JlLFxcbiAgOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbCAhaW1wb3J0YW50OyAvKiAyICovXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50OyAvKiAzICovXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRG9jdW1lbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCBib3JkZXIgYm94IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBCYWNrZ3JvdW5kcyBkbyBub3QgcmVwZWF0IGJ5IGRlZmF1bHQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGV4dCBkZWNvcmF0aW9uIGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgZGVmYXVsdCBjdXJzb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ2hhbmdlIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBCcmVha3Mgd29yZHMgdG8gcHJldmVudCBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiA0LiBVc2UgYSA0LXNwYWNlIHRhYiB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiA1LiBSZW1vdmUgdGhlIGdyZXkgaGlnaGxpZ2h0IG9uIGxpbmtzIGluIGlPUyAob3BpbmlvbmF0ZWQpLlxcbiAqIDYuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbjp3aGVyZSg6cm9vdCkge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKiAzICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiA0ICovXFxuICB0YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiA2ICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYm9keSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRWRnZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaDEpIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gbmVzdGVkIGxpc3RzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGwsIG9sLCB1bCkgOndoZXJlKGRsLCBvbCwgdWwpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoaHIpIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBsaXN0IHN0eWxlIG9uIG5hdmlnYXRpb24gbGlzdHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdikgOndoZXJlKG9sLCB1bCkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBWb2ljZU92ZXIgZnJvbSBpZ25vcmluZyBsaXN0IHNlbWFudGljcyBpbiBTYWZhcmkgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2IGxpKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjAwQlxcXCI7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMy4gUHJldmVudCBvdmVyZmxvdyBvZiB0aGUgY29udGFpbmVyIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShwcmUpIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiAzICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYWJiclt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShiLCBzdHJvbmcpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShjb2RlLCBrYmQsIHNhbXApIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHNtYWxsKSB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGFsaWdubWVudCBvbiBtZWRpYSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYXVkaW8sIGNhbnZhcywgaWZyYW1lLCBpbWcsIHN2ZywgdmlkZW8pIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGlmcmFtZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSkge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGZpbGwgY29sb3IgdG8gbWF0Y2ggdGhlIHRleHQgY29sb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHN2Zzpub3QoW2ZpbGxdKSkge1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiBUYWJ1bGFyIGRhdGFcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvbGxhcHNlIGJvcmRlciBzcGFjaW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMy4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRhYmxlKSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHRleHQtaW5kZW50OiAwOyAvKiAzICovXFxufVxcblxcbi8qIEZvcm1zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBjb250cm9scyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShmaWVsZHNldCkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShwcm9ncmVzcykge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICogMy4gQ2hhbmdlIHRoZSByZXNpemUgZGlyZWN0aW9uIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICByZXNpemU6IHZlcnRpY2FsOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcInNlYXJjaFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHRleHQgc3R5bGUgb2YgcGxhY2Vob2xkZXJzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjU0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSB1cGxvYWQgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3R5bGVzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbjp3aGVyZShkaWFsb2c6bm90KFtvcGVuXSkpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkZXRhaWxzID4gc3VtbWFyeTpmaXJzdC1vZi10eXBlKSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIEFjY2Vzc2liaWxpdHlcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGJ1c3kgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWJ1c3k9XFxcInRydWVcXFwiIGldKSB7XFxuICBjdXJzb3I6IHByb2dyZXNzO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGNvbnRyb2wgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWNvbnRyb2xzXSkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGRpc2FibGVkLCBub3QtZWRpdGFibGUsIG9yIG90aGVyd2lzZVxcbiAqIGlub3BlcmFibGUgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIiBpXSwgW2Rpc2FibGVkXSkge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGRpc3BsYXkgb24gdmlzdWFsbHkgaGlkZGVuIGFjY2Vzc2libGUgZWxlbWVudHNcXG4gKiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXSkge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl06bm90KDpmb2N1cykpIHtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7RUFHRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLDRCQUE0QixFQUFFLE1BQU07QUFDdEM7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHdCQUF3QixFQUFFLE1BQU07RUFDaEMsdUJBQXVCLEVBQUUsTUFBTTtBQUNqQzs7QUFFQTs7Ozs7OztFQU9FOztBQUVGO0VBQ0UsZUFBZSxFQUFFLE1BQU07RUFD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RUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQmFja2dyb3VuZHMgZG8gbm90IHJlcGVhdCBieSBkZWZhdWx0IChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRleHQgZGVjb3JhdGlvbiBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdmVydGljYWwgYWxpZ25tZW50IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENoYW5nZSB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMy4gQnJlYWtzIHdvcmRzIHRvIHByZXZlbnQgb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNC4gVXNlIGEgNC1zcGFjZSB0YWIgd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNS4gUmVtb3ZlIHRoZSBncmV5IGhpZ2hsaWdodCBvbiBsaW5rcyBpbiBpT1MgKG9waW5pb25hdGVkKS5cXG4gKiA2LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG46d2hlcmUoOnJvb3QpIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyogMyAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDUgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogNiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJvZHkpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbGlzdCBzdHlsZSBvbiBuYXZpZ2F0aW9uIGxpc3RzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYpIDp3aGVyZShvbCwgdWwpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgVm9pY2VPdmVyIGZyb20gaWdub3JpbmcgbGlzdCBzZW1hbnRpY3MgaW4gU2FmYXJpIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdiBsaSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMEJcXFwiO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDMuIFByZXZlbnQgb3ZlcmZsb3cgb2YgdGhlIGNvbnRhaW5lciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogMyAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBhbGlnbm1lbnQgb24gbWVkaWEgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGF1ZGlvLCBjYW52YXMsIGlmcmFtZSwgaW1nLCBzdmcsIHZpZGVvKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpZnJhbWVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUpIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBmaWxsIGNvbG9yIHRvIG1hdGNoIHRoZSB0ZXh0IGNvbG9yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzdmc6bm90KFtmaWxsXSkpIHtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb2xsYXBzZSBib3JkZXIgc3BhY2luZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDMuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMyAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoZmllbGRzZXQpIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqIDMuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGV0YWlscyA+IHN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBBY2Nlc3NpYmlsaXR5XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBidXN5IGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1idXN5PVxcXCJ0cnVlXFxcIiBpXSkge1xcbiAgY3Vyc29yOiBwcm9ncmVzcztcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBjb250cm9sIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1jb250cm9sc10pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBkaXNhYmxlZCwgbm90LWVkaXRhYmxlLCBvciBvdGhlcndpc2VcXG4gKiBpbm9wZXJhYmxlIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgaV0sIFtkaXNhYmxlZF0pIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBkaXNwbGF5IG9uIHZpc3VhbGx5IGhpZGRlbiBhY2Nlc3NpYmxlIGVsZW1lbnRzXFxuICogaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dOm5vdCg6Zm9jdXMpKSB7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUlcXFwiKSwgbG9jYWwoXFxcIlVidW50dVxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWVcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc3lzdGVtLXVpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7QUFFRjtFQUNFLHNCQUFzQjtFQUN0QixxSEFBcUg7QUFDdkg7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlJQUF5STtBQUMzSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUlBQWlJO0FBQ25JOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEpBQTBKO0FBQzVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJXFxcIiksIGxvY2FsKFxcXCJVYnVudHVcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogVXNlIHRoZSBkZWZhdWx0IHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTpcXG4gICAgc3lzdGVtLXVpLFxcbiAgICAvKiBtYWNPUyAxMC4xMS0xMC4xMiAqLyAtYXBwbGUtc3lzdGVtLFxcbiAgICAvKiBXaW5kb3dzIDYrICovIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIC8qIEFuZHJvaWQgNCsgKi8gXFxcIlJvYm90b1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dVxcXCIsXFxuICAgIC8qIEdub21lIDMrICovIFxcXCJDYW50YXJlbGxcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIFNhbnNcXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBzYW5zLXNlcmlmLFxcbiAgICAvKiBtYWNPUyBlbW9qaSAqLyBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxuICAgIC8qIExpbnV4IGVtb2ppICovIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBkZWZhdWx0IG1vbm9zcGFjZSB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICB1aS1tb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIDEwLjEwKyAqLyBcXFwiTWVubG9cXFwiLFxcbiAgICAvKiBXaW5kb3dzIDYrICovIFxcXCJDb25zb2xhc1xcXCIsXFxuICAgIC8qIEFuZHJvaWQgNCsgKi8gXFxcIlJvYm90byBNb25vXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1IE1vbm9zcGFjZVxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gTW9ub1xcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNCsgKi8gXFxcIk94eWdlbiBNb25vXFxcIixcXG4gICAgLyogTGludXgvT3Blbk9mZmljZSBmYWxsYmFjayAqLyBcXFwiTGliZXJhdGlvbiBNb25vXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyBlbW9qaSAqLyBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxuICAgIC8qIExpbnV4IGVtb2ppICovIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7QUFFRjtFQUNFOzs7Ozs7Ozs7Ozs7d0NBWXNDO0FBQ3hDOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUU7Ozs7Ozs7Ozs7Ozs7d0NBYXNDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLyogbWFjT1MgMTAuMTEtMTAuMTIgKi8gLWFwcGxlLXN5c3RlbSxcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHVcXFwiLFxcbiAgICAvKiBHbm9tZSAzKyAqLyBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBTYW5zXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gc2Fucy1zZXJpZixcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCBtb25vc3BhY2UgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgdWktbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyAxMC4xMCsgKi8gXFxcIk1lbmxvXFxcIixcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiQ29uc29sYXNcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG8gTW9ub1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dSBNb25vc3BhY2VcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIE1vbm9cXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDQrICovIFxcXCJPeHlnZW4gTW9ub1xcXCIsXFxuICAgIC8qIExpbnV4L09wZW5PZmZpY2UgZmFsbGJhY2sgKi8gXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIG1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9ub1xcXCIpLCBsb2NhbChcXFwiTWVubG9cXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFySXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixxSUFBcUk7QUFDdkk7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVLQUF1SztBQUN6Szs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsc0pBQXNKO0FBQ3hKOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUxBQXFMO0FBQ3ZMXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLVJlZ3VsYXJcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm9cXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm9cXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vXFxcIiksIGxvY2FsKFxcXCJNZW5sb1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLVJlZ3VsYXJJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlZmF1bHQpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtdHdvLFxcbi5tb2RhbC10aHJlZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5uaWNlcG5nLmNvbS9wbmcvZGV0YWlsLzEzLTEzMTE3OF9kb3dubG9hZC1lbW9qaS1tb25rZXktbm8tZXZpbC0zLXBrLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM3OTIyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4IDUwcHggNDAwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjYWxlLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5leHBsYW5hdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1vbmUtY29udGFpbmVyLFxcbi5wbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmUsXFxuLmhpZGUtYnV0dG9uLXR3byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmhvdmVyLFxcbi5oaWRlLWJ1dHRvbi10d286aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxODMsIDI1MCk7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmU6YWN0aXZlLFxcbi5oaWRlLWJ1dHRvbi10d286YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbmhlYWRlcixcXG4uaW5kaWNhdG9yIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRlYWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG59XFxuXFxuLmdhbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLW9uZSxcXG4uY29udGFpbmVyLXR3byB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzQ2M2YzZjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZWQtYm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpdC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5taXNzLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjVkNztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBHQUEwRztFQUMxRywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQywwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIC8qICg2Mi41LzEwMCkgKiAxNnB4ID0gMTBweCAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qIDE0cHggKi9cXG4gIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XFxuICAvKiAxNnB4ICovXFxuICAtLWZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XFxuICAvKiAyNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMi40cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlZmF1bHQpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtdHdvLFxcbi5tb2RhbC10aHJlZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5uaWNlcG5nLmNvbS9wbmcvZGV0YWlsLzEzLTEzMTE3OF9kb3dubG9hZC1lbW9qaS1tb25rZXktbm8tZXZpbC0zLXBrLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM3OTIyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4IDUwcHggNDAwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjYWxlLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5leHBsYW5hdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1vbmUtY29udGFpbmVyLFxcbi5wbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmUsXFxuLmhpZGUtYnV0dG9uLXR3byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmhvdmVyLFxcbi5oaWRlLWJ1dHRvbi10d286aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxODMsIDI1MCk7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmU6YWN0aXZlLFxcbi5oaWRlLWJ1dHRvbi10d286YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbmhlYWRlcixcXG4uaW5kaWNhdG9yIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRlYWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG59XFxuXFxuLmdhbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLW9uZSxcXG4uY29udGFpbmVyLXR3byB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzQ2M2YzZjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZWQtYm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpdC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5taXNzLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjVkNztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2FuaXRpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nhbml0aXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N5c3RlbS11aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3lzdGVtLXVpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWktbW9ub3NwYWNlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS1tb25vc3BhY2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwTWFrZXIgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBnYW1lYm9hcmRNYWtlciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0ge307XG4gIGdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICBnYW1lYm9hcmQucGxheXMgPSBbXTtcbiAgZ2FtZWJvYXJkLnBvc2l0aW9ucyA9IFtdO1xuICBnYW1lYm9hcmQudG91Y2ggPSBbXTtcbiAgZ2FtZWJvYXJkLnBsYWNlID0gKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBNYWtlcihsZW5ndGgsIGhpdHMsIHN1bmspO1xuICAgIHNoaXAueDEgPSB4O1xuICAgIHNoaXAueTEgPSB5O1xuICAgIHNoaXAuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IGB2YCkge1xuICAgICAgaWYgKFxuICAgICAgICAoc2hpcC55MSA9PT0gOSAmJiBsZW5ndGggPiAxKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gOCAmJiBsZW5ndGggPiAyKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gNyAmJiBsZW5ndGggPiAzKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gNiAmJiBsZW5ndGggPiA0KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B5JHtpfWBdID0geSAtIGo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B5JHtpfWBdID0geSArIGo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gYGhgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIChzaGlwLngxID09PSA5ICYmIGxlbmd0aCA+IDEpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA4ICYmIGxlbmd0aCA+IDIpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA3ICYmIGxlbmd0aCA+IDMpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA2ICYmIGxlbmd0aCA+IDQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDIsIGogPSAxOyBpIDw9IHNoaXAubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICAgIHNoaXBbYHgke2l9YF0gPSB4IC0gajtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDIsIGogPSAxOyBpIDw9IHNoaXAubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICAgIHNoaXBbYHgke2l9YF0gPSB4ICsgajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnYW1lYm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnNoaXBzO1xuICB9O1xuICBnYW1lYm9hcmQucmVtb3ZlID0gKCkgPT4ge1xuICAgIGdhbWVib2FyZC5zaGlwcy5wb3AoKTtcbiAgfTtcbiAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sgPSAoeCwgeSwgaWRlbnRpdHkpID0+IHtcbiAgICBsZXQgdG91Y2ggPSBudWxsO1xuICAgIGlmIChpZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgICAgY29uc3QgcmVzdHJpY3RNb3ZlID0gZ2FtZWJvYXJkLnBvc2l0aW9ucy5maW5kSW5kZXgoXG4gICAgICAgIChwb3NpdGlvbikgPT4gcG9zaXRpb25bMF0gPT09IHggJiYgcG9zaXRpb25bMV0gPT09IHlcbiAgICAgICk7XG4gICAgICBnYW1lYm9hcmQucG9zaXRpb25zLnNwbGljZShyZXN0cmljdE1vdmUsIDEpO1xuICAgIH1cbiAgICBnYW1lYm9hcmQuc2hpcHMubWFwKChzaGlwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChzaGlwLngxID09PSB4IHx8XG4gICAgICAgICAgc2hpcC54MiA9PT0geCB8fFxuICAgICAgICAgIHNoaXAueDMgPT09IHggfHxcbiAgICAgICAgICBzaGlwLng0ID09PSB4IHx8XG4gICAgICAgICAgc2hpcC54NSA9PT0geCkgJiZcbiAgICAgICAgKHNoaXAueTEgPT09IHkgfHxcbiAgICAgICAgICBzaGlwLnkyID09PSB5IHx8XG4gICAgICAgICAgc2hpcC55MyA9PT0geSB8fFxuICAgICAgICAgIHNoaXAueTQgPT09IHkgfHxcbiAgICAgICAgICBzaGlwLnk1ID09PSB5KVxuICAgICAgKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpID09PSAwKSB7XG4gICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lYm9hcmQudG91Y2gucHVzaChbeCwgeV0pO1xuICAgICAgICB0b3VjaCA9IHNoaXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSk7XG4gICAgZ2FtZWJvYXJkLnBsYXlzLnB1c2goW3gsIHldKTtcbiAgICByZXR1cm4gdG91Y2g7XG4gIH07XG4gIGdhbWVib2FyZC5nYW1lT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lU3RhdGUgPSBnYW1lYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IGZhbHNlKTtcbiAgICBpZiAoZ2FtZVN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGBHYW1lIE92ZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYEdhbWUgT25gO1xuICB9O1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkTWFrZXI7XG4iLCJleHBvcnQgY29uc3QgcGxheWVyTWFrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9O1xuICBwbGF5ZXIuaWRlbnRpdHkgPSBgcGxheWVyYDtcbiAgcGxheWVyLnBsYXkgPSAoZ2FtZWJvYXJkLCB4LCB5KSA9PiB7XG4gICAgLy8gY2hhbmdlZCBsYXRlclxuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHksIHBsYXllci5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5wbGF5cy5zb21lKChwbGF5KSA9PiBwbGF5WzBdID09PSB4ICYmIHBsYXlbMV0gPT09IHkpO1xuICB9O1xuICByZXR1cm4gcGxheWVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVyTWFrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9O1xuICBwbGF5ZXIuaWRlbnRpdHkgPSBgY29tcHV0ZXJgO1xuICBwbGF5ZXIucGxheSA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgUG9zXG4gICAgaWYgKHBsYXllci50ZXN0aW5nKSB7XG4gICAgICBQb3MgPSBbMSwgMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFBvcyA9IGdhbWVib2FyZC5wb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGgpXTtcbiAgICB9XG4gICAgaWYgKFBvcyA9PT0gdW5kZWZpbmVkKSB7cmV0dXJuIGZhbHNlfVxuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFBvc1swXSwgUG9zWzFdLCBwbGF5ZXIuaWRlbnRpdHkpO1xuICAgIHJldHVybiBnYW1lYm9hcmQucGxheXMuc29tZShcbiAgICAgIChwbGF5KSA9PiBwbGF5WzBdID09PSBQb3NbMF0gJiYgcGxheVsxXSA9PT0gUG9zWzFdXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIHBsYXllcjtcbn07XG4iLCJpbXBvcnQgZ2FtZWJvYXJkTWFrZXIgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXJNYWtlciwgY29tcHV0ZXJNYWtlciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpO1xuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcbmNvbnN0IG9wcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC1idXR0b25cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudFwiKTtcbmNvbnN0IHNlbGVjdGlvbkNvbnRhaW5lck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1jb250YWluZXJcIik7XG5jb25zdCBzZWxlY3Rpb25Db250YWluZXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tY29udGFpbmVyXCIpO1xuY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb25lXCIpO1xuY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItdHdvXCIpO1xuY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRpY2F0b3JcIik7XG5jb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3b1wiKTtcbmNvbnN0IGhpZGVCdXR0b25PbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGUtYnV0dG9uLW9uZVwiKTtcbmNvbnN0IGhpZGVCdXR0b25Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGUtYnV0dG9uLXR3b1wiKTtcbmNvbnN0IG1vZGFsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC10d29cIik7XG5jb25zdCBtb2RhbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC10aHJlZVwiKTtcblxubGV0IEdhbWVib2FyZE9uZTtcbmxldCBHYW1lYm9hcmRUd287XG5sZXQgcGxheWVyT25lO1xubGV0IHBsYXllclR3bztcbmxldCBjb3VudGVyT25lID0gNTtcbmxldCBjb3VudGVyVHdvID0gNTtcblxuY29uc3QgY29tcHV0ZXJTaGlwc1JhbmRvbWl6ZXIgPSAoKSA9PiB7XG4gIGxldCBkdXBsaWNhdGVYID0gW107XG4gIGxldCBkdXBsaWNhdGVZID0gW107XG4gIGNvbnN0IGxlbmd0aCA9IFsxLCAyLCAzLCA0LCA1XTtcbiAgZm9yIChsZXQgaSA9IDEsIGogPSA1OyBpIDw9IGo7IGkgKz0gMSkge1xuICAgIGNvbnN0IFBvcyA9XG4gICAgICBHYW1lYm9hcmRUd28ucG9zaXRpb25zW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHYW1lYm9hcmRUd28ucG9zaXRpb25zLmxlbmd0aClcbiAgICAgIF07XG4gICAgY29uc3QgZGlyZWN0aW9uID0gW2BoYCwgYHZgXTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvblggPSBQb3NbMF07XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb25ZID0gUG9zWzFdO1xuICAgIGNvbnN0IHJhbmRvbUxlbmd0aCA9IGxlbmd0aFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgubGVuZ3RoKV07XG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgIGRpcmVjdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb24ubGVuZ3RoKV07XG5cbiAgICBHYW1lYm9hcmRUd28ucGxhY2UoXG4gICAgICByYW5kb21Qb3NpdGlvblgsXG4gICAgICByYW5kb21Qb3NpdGlvblksXG4gICAgICByYW5kb21MZW5ndGgsXG4gICAgICByYW5kb21EaXJlY3Rpb25cbiAgICApO1xuICAgIGNvbnN0IGxhc3RTaGlwID0gR2FtZWJvYXJkVHdvLnNoaXBzW0dhbWVib2FyZFR3by5zaGlwcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoZHVwbGljYXRlWC5sZW5ndGggIT09IDAgJiYgZHVwbGljYXRlWS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHRlc3QxID0gZHVwbGljYXRlWC5zb21lKFxuICAgICAgICAodmFsdWUpID0+XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLngxIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLngyIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLngzIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLng0IHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLng1XG4gICAgICApO1xuICAgICAgY29uc3QgdGVzdDIgPSBkdXBsaWNhdGVZLnNvbWUoXG4gICAgICAgICh2YWx1ZSkgPT5cbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueTEgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueTIgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueTMgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueTQgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueTVcbiAgICAgICk7XG4gICAgICBpZiAodGVzdDEgJiYgdGVzdDIpIHtcbiAgICAgICAgR2FtZWJvYXJkVHdvLnJlbW92ZSgpO1xuICAgICAgICBqICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsZW5ndGhUb1JlbW92ZSA9IGxlbmd0aC5maW5kSW5kZXgoXG4gICAgICAgICAgKHJlbW92YWJsZUxlbmd0aCkgPT4gcmVtb3ZhYmxlTGVuZ3RoID09PSByYW5kb21MZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgbGVuZ3RoLnNwbGljZShsZW5ndGhUb1JlbW92ZSwgMSk7XG5cbiAgICAgICAgZHVwbGljYXRlWC5wdXNoKFxuICAgICAgICAgIGxhc3RTaGlwLngxLFxuICAgICAgICAgIGxhc3RTaGlwLngyLFxuICAgICAgICAgIGxhc3RTaGlwLngzLFxuICAgICAgICAgIGxhc3RTaGlwLng0LFxuICAgICAgICAgIGxhc3RTaGlwLng1XG4gICAgICAgICk7XG4gICAgICAgIGR1cGxpY2F0ZVkucHVzaChcbiAgICAgICAgICBsYXN0U2hpcC55MSxcbiAgICAgICAgICBsYXN0U2hpcC55MixcbiAgICAgICAgICBsYXN0U2hpcC55MyxcbiAgICAgICAgICBsYXN0U2hpcC55NCxcbiAgICAgICAgICBsYXN0U2hpcC55NVxuICAgICAgICApO1xuICAgICAgICBkdXBsaWNhdGVYID0gZHVwbGljYXRlWC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgZHVwbGljYXRlWSA9IGR1cGxpY2F0ZVkuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlbmd0aFRvUmVtb3ZlID0gbGVuZ3RoLmZpbmRJbmRleChcbiAgICAgICAgKHJlbW92YWJsZUxlbmd0aCkgPT4gcmVtb3ZhYmxlTGVuZ3RoID09PSByYW5kb21MZW5ndGhcbiAgICAgICk7XG4gICAgICBsZW5ndGguc3BsaWNlKGxlbmd0aFRvUmVtb3ZlLCAxKTtcblxuICAgICAgZHVwbGljYXRlWC5wdXNoKFxuICAgICAgICBsYXN0U2hpcC54MSxcbiAgICAgICAgbGFzdFNoaXAueDIsXG4gICAgICAgIGxhc3RTaGlwLngzLFxuICAgICAgICBsYXN0U2hpcC54NCxcbiAgICAgICAgbGFzdFNoaXAueDVcbiAgICAgICk7XG4gICAgICBkdXBsaWNhdGVZLnB1c2goXG4gICAgICAgIGxhc3RTaGlwLnkxLFxuICAgICAgICBsYXN0U2hpcC55MixcbiAgICAgICAgbGFzdFNoaXAueTMsXG4gICAgICAgIGxhc3RTaGlwLnk0LFxuICAgICAgICBsYXN0U2hpcC55NVxuICAgICAgKTtcbiAgICAgIGR1cGxpY2F0ZVggPSBkdXBsaWNhdGVYLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgICAgZHVwbGljYXRlWSA9IGR1cGxpY2F0ZVkuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnYW1lID0gKGRpdikgPT4ge1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDApO1xuICAgIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgxKTtcbiAgICBpZiAoY29udGFpbmVyT25lLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtYm9yZGVyXCIpO1xuICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcInJlZC1ib3JkZXJcIik7XG4gICAgICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgcGxheWVyYCkge1xuICAgICAgICBpZiAoR2FtZWJvYXJkVHdvLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllclR3by5wbGF5KEdhbWVib2FyZE9uZSwgTnVtYmVyKHgpLCBOdW1iZXIoeSkpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgR2FtZWJvYXJkT25lLnRvdWNoLnNvbWUoXG4gICAgICAgICAgICAobW92ZSkgPT4gbW92ZVswXSA9PT0gTnVtYmVyKHgpICYmIG1vdmVbMV0gPT09IE51bWJlcih5KVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAyIGhpdCBQbGF5ZXIgMSFgO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXQtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMiBtaXNzZWQhYDtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzcy1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWVib2FyZE9uZS5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMiB3b24hYDtcbiAgICAgICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgY29tcHV0ZXJgKSB7XG4gICAgICAgIGlmIChHYW1lYm9hcmRUd28uZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdE1vdmUgPSBHYW1lYm9hcmRPbmUucGxheXNbR2FtZWJvYXJkT25lLnBsYXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgR2FtZWJvYXJkT25lLnRvdWNoLnNvbWUoXG4gICAgICAgICAgICAobW92ZSkgPT4gbW92ZVswXSA9PT0gbGFzdE1vdmVbMF0gJiYgbW92ZVsxXSA9PT0gbGFzdE1vdmVbMV1cbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYENvbXB1dGVyIGhpdCBQbGF5ZXIgMSFgO1xuICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0LWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBDb21wdXRlciBtaXNzZWQhYDtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZWJvYXJkT25lLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgQ29tcHV0ZXIgd29uIWA7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250YWluZXJUd28uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcInJlZC1ib3JkZXJcIik7XG4gICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtYm9yZGVyXCIpO1xuICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcblxuICAgICAgcGxheWVyT25lLnBsYXkoR2FtZWJvYXJkVHdvLCBOdW1iZXIoeCksIE51bWJlcih5KSk7XG4gICAgICBpZiAoXG4gICAgICAgIEdhbWVib2FyZFR3by50b3VjaC5zb21lKFxuICAgICAgICAgIChtb3ZlKSA9PiBtb3ZlWzBdID09PSBOdW1iZXIoeCkgJiYgbW92ZVsxXSA9PT0gTnVtYmVyKHkpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgY29tcHV0ZXJgKSB7XG4gICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAxIGhpdCBDb21wdXRlciFgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBoaXQgUGxheWVyIDIhYDtcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0LWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBtaXNzZWQhYDtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3MtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKEdhbWVib2FyZFR3by5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDEgd29uIWA7XG4gICAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJUd28uaWRlbnRpdHkgPT09IGBjb21wdXRlcmApIHtcbiAgICAgICAgaWYgKEdhbWVib2FyZFR3by5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJUd28ucGxheShHYW1lYm9hcmRPbmUpO1xuICAgICAgICBjb25zdCBsYXN0TW92ZSA9IEdhbWVib2FyZE9uZS5wbGF5c1tHYW1lYm9hcmRPbmUucGxheXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ2xpY2sgPSBjb250YWluZXJPbmUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7bGFzdE1vdmVbMF19JHtsYXN0TW92ZVsxXX1gXG4gICAgICAgICk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNxdWFyZVRvQ2xpY2suY2xpY2soKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY29sb3JTaGlwcyA9IChnYW1lYm9hcmQsIGNvbnRhaW5lcikgPT4ge1xuICBnYW1lYm9hcmQuc2hpcHMubWFwKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlVG9Db2xvck9uZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5zcXVhcmUke3NoaXAueDF9JHtzaGlwLnkxfWBcbiAgICApO1xuICAgIHNxdWFyZVRvQ29sb3JPbmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gYGhgKSB7XG4gICAgICBpZiAoc2hpcC54MiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JUd28gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54Mn0ke3NoaXAueTF9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yVHdvLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLngzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvclRocmVlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDN9JHtzaGlwLnkxfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvclRocmVlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLng0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvckZvdXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54NH0ke3NoaXAueTF9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yRm91ci5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC54NSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JGaXZlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDV9JHtzaGlwLnkxfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvckZpdmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2hpcC55MiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JUd28gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54MX0ke3NoaXAueTJ9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yVHdvLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnkzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvclRocmVlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDF9JHtzaGlwLnkzfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvclRocmVlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnk0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvckZvdXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54MX0ke3NoaXAueTR9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yRm91ci5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC55NSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JGaXZlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDF9JHtzaGlwLnk1fWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvckZpdmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcDtcbiAgfSk7XG59O1xuXG5jb25zdCBzZWxlY3Rpb24gPSAoZGl2LCBjb250YWluZXIpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgwKTtcbiAgICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMSk7XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gc2VsZWN0aW9uQ29udGFpbmVyT25lKSB7XG4gICAgICBpZiAoY291bnRlck9uZSA9PT0gMCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBHYW1lYm9hcmRPbmUucGxhY2UoTnVtYmVyKHgpLCBOdW1iZXIoeSksIGNvdW50ZXJPbmUsIGBoYCk7XG4gICAgICBjb2xvclNoaXBzKEdhbWVib2FyZE9uZSwgc2VsZWN0aW9uQ29udGFpbmVyT25lKTtcbiAgICAgIGNvdW50ZXJPbmUgLT0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gc2VsZWN0aW9uQ29udGFpbmVyVHdvKSB7XG4gICAgICBpZiAoY291bnRlclR3byA9PT0gMCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBHYW1lYm9hcmRUd28ucGxhY2UoTnVtYmVyKHgpLCBOdW1iZXIoeSksIGNvdW50ZXJUd28sIGBoYCk7XG4gICAgICBjb2xvclNoaXBzKEdhbWVib2FyZFR3bywgc2VsZWN0aW9uQ29udGFpbmVyVHdvKTtcbiAgICAgIGNvdW50ZXJUd28gLT0gMTtcbiAgICB9XG4gIH0pO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgwKTtcbiAgICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMSk7XG5cbiAgICBpZiAoY29udGFpbmVyID09PSBzZWxlY3Rpb25Db250YWluZXJPbmUpIHtcbiAgICAgIGlmIChjb3VudGVyT25lID09PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEdhbWVib2FyZE9uZS5wbGFjZShOdW1iZXIoeCksIE51bWJlcih5KSwgY291bnRlck9uZSwgYHZgKTtcbiAgICAgIGNvbG9yU2hpcHMoR2FtZWJvYXJkT25lLCBzZWxlY3Rpb25Db250YWluZXJPbmUpO1xuICAgICAgY291bnRlck9uZSAtPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyID09PSBzZWxlY3Rpb25Db250YWluZXJUd28pIHtcbiAgICAgIGlmIChjb3VudGVyVHdvID09PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEdhbWVib2FyZFR3by5wbGFjZShOdW1iZXIoeCksIE51bWJlcih5KSwgY291bnRlclR3bywgYHZgKTtcbiAgICAgIGNvbG9yU2hpcHMoR2FtZWJvYXJkVHdvLCBzZWxlY3Rpb25Db250YWluZXJUd28pO1xuICAgICAgY291bnRlclR3byAtPSAxO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBwb3B1bGF0ZVNxdWFyZSA9IChjb250YWluZXIsIGdhbWVib2FyZCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGByb3cke2l9YCwgYHJvd2ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgaWYgKGNvbnRhaW5lciA9PT0gY29udGFpbmVyT25lIHx8IGNvbnRhaW5lciA9PT0gY29udGFpbmVyVHdvKSB7XG4gICAgICAgIGdhbWVib2FyZC5wb3NpdGlvbnMucHVzaChbaiwgaV0pO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgc3F1YXJlJHtqfSR7aX1gLCBgc3F1YXJlYCk7XG4gICAgICAgIGdhbWUoZGl2KTtcbiAgICAgICAgY29uc3Qgcm93ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5yb3cke2l9YCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHNxdWFyZSR7an0ke2l9YCwgYHNxdWFyZWApO1xuICAgICAgICBzZWxlY3Rpb24oZGl2LCBjb250YWluZXIpO1xuICAgICAgICBjb25zdCByb3cgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLnJvdyR7aX1gKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjaG9vc2VPcHBvbmVudCA9ICgpID0+IHtcbiAgaWYgKG9wcG9uZW50LnRleHRDb250ZW50ID09PSBgUGxheWVyYCkge1xuICAgIG9wcG9uZW50LnRleHRDb250ZW50ID0gYENvbXB1dGVyYDtcbiAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMmA7XG4gICAgcGxheWVyVHdvID0gcGxheWVyTWFrZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBvcHBvbmVudC50ZXh0Q29udGVudCA9IGBQbGF5ZXJgO1xuICAgIHBsYXllclR3b1RpdGxlLnRleHRDb250ZW50ID0gYENvbXB1dGVyYDtcbiAgICBwbGF5ZXJUd28gPSBjb21wdXRlck1ha2VyKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0ZXIgPSAoKSA9PiB7XG4gIGNvdW50ZXJPbmUgPSA1O1xuICBjb3VudGVyVHdvID0gNTtcbiAgY29udGFpbmVyT25lLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRhaW5lclR3by5pbm5lckhUTUwgPSBcIlwiO1xuICBzZWxlY3Rpb25Db250YWluZXJPbmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgc2VsZWN0aW9uQ29udGFpbmVyVHdvLmlubmVySFRNTCA9IFwiXCI7XG4gIHNlbGVjdGlvbkNvbnRhaW5lck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIHNlbGVjdGlvbkNvbnRhaW5lclR3by5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLWJvcmRlclwiLCBcImRpc2FibGVkXCIpO1xuICBjb250YWluZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcInJlZC1ib3JkZXJcIiwgXCJkaXNhYmxlZFwiKTtcbn07XG5cbmNvbnN0IGluaXRpYXRlR2FtZSA9ICgpID0+IHtcbiAgcmVzZXRlcigpXG4gIEdhbWVib2FyZE9uZSA9IGdhbWVib2FyZE1ha2VyKCk7XG4gIEdhbWVib2FyZFR3byA9IGdhbWVib2FyZE1ha2VyKCk7XG4gIHBsYXllck9uZSA9IHBsYXllck1ha2VyKCk7XG4gIHBvcHVsYXRlU3F1YXJlKGNvbnRhaW5lck9uZSwgR2FtZWJvYXJkT25lKTtcbiAgcG9wdWxhdGVTcXVhcmUoY29udGFpbmVyVHdvLCBHYW1lYm9hcmRUd28pO1xuICBpZiAocGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPT09IGBQbGF5ZXIgMmApIHtcbiAgICBwbGF5ZXJUd28gPSBwbGF5ZXJNYWtlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllclR3byA9IGNvbXB1dGVyTWFrZXIoKTtcbiAgfVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgc2hpcFBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYHBsYXllcmApIHtcbiAgICBwb3B1bGF0ZVNxdWFyZShzZWxlY3Rpb25Db250YWluZXJPbmUpO1xuICAgIHBvcHVsYXRlU3F1YXJlKHNlbGVjdGlvbkNvbnRhaW5lclR3byk7XG4gIH1cbiAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgIHBvcHVsYXRlU3F1YXJlKHNlbGVjdGlvbkNvbnRhaW5lck9uZSk7XG4gICAgY29tcHV0ZXJTaGlwc1JhbmRvbWl6ZXIoKTtcbiAgfVxufTtcblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5pdGlhdGVHYW1lKCk7XG4gIHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgc3RhcnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xufSk7XG5cbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGluaXRpYXRlR2FtZSgpO1xufSk7XG5cbm9wcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIGNob29zZU9wcG9uZW50KCk7XG59KTtcblxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgfVxufSk7XG5cbmhpZGVCdXR0b25PbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGhpZGVCdXR0b25PbmUudGV4dENvbnRlbnQgPT09IGBIaWRlYCkge1xuICAgIG1vZGFsVHdvLmNsYXNzTGlzdC5hZGQoXCJzY2FsZS12aXNpYmxlXCIpO1xuICAgIGhpZGVCdXR0b25PbmUudGV4dENvbnRlbnQgPSBgU2hvd2A7XG4gIH0gZWxzZSB7XG4gICAgbW9kYWxUd28uY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlLXZpc2libGVcIik7XG4gICAgaGlkZUJ1dHRvbk9uZS50ZXh0Q29udGVudCA9IGBIaWRlYDtcbiAgfVxufSk7XG5cbmhpZGVCdXR0b25Ud28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGhpZGVCdXR0b25Ud28udGV4dENvbnRlbnQgPT09IGBIaWRlYCkge1xuICAgIG1vZGFsVGhyZWUuY2xhc3NMaXN0LmFkZChcInNjYWxlLXZpc2libGVcIik7XG4gICAgaGlkZUJ1dHRvblR3by50ZXh0Q29udGVudCA9IGBTaG93YDtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbFRocmVlLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZS12aXNpYmxlXCIpO1xuICAgIGhpZGVCdXR0b25Ud28udGV4dENvbnRlbnQgPSBgSGlkZWA7XG4gIH1cbn0pO1xuXG5leHBvcnQge3BvcHVsYXRlU3F1YXJlfTtcbiIsImNvbnN0IHNoaXBNYWtlciA9IChsZW5ndGgsIGhpdHMsIHN1bmspID0+IHtcbiAgICBjb25zdCBzaGlwID0ge2xlbmd0aCwgaGl0cywgc3Vua31cbiAgICBzaGlwLmhpdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcC5oaXRzICs9IDFcbiAgICAgICAgcmV0dXJuIHNoaXAuaGl0c1xuICAgIH1cbiAgICBzaGlwLmlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaHAgPSBzaGlwLmxlbmd0aCAtIHNoaXAuaGl0c1xuICAgICAgICBpZihocCA9PT0gMCkge3NoaXAuc3VuayA9IHRydWV9XG4gICAgICAgIHJldHVybiBocFxuICAgIH1cbiAgICByZXR1cm4gc2hpcFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcE1ha2VyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcInNhbml0aXplLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL2Zvcm1zLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL2Fzc2V0cy5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3Mvc3lzdGVtLXVpLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBnYW1lYm9hcmRNYWtlciBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBzaGlwTWFrZXIgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHBvcHVsYXRlU3F1YXJlIGZyb20gXCIuL3BvcHVsYXRlXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=