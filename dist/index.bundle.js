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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000080;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.modal-two,\n.modal-three {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.ship-placement {\n  border-radius: 5px;\n  padding: 1rem;\n  background-color: #e37922;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  gap: 1rem;\n  display: grid;\n  grid-template-rows: 100px 400px 50px 400px 50px;\n  justify-items: center;\n}\n\n.scale-visible {\n  transform: scale(1);\n  transition: ease 0.4s;\n  visibility: visible;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.explanation {\n  font-size: var(--font-size-default);\n  margin: 0;\n  text-align: center;\n  align-self: center;\n}\n\n.player-one-container,\n.player-two-container {\n  border: 5px solid black;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  position: relative;\n}\n\n.hide-button-one,\n.hide-button-two {\n  background-color: lightskyblue;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-in-out;\n  font-weight: bold;\n}\n\n.hide-button-one:hover,\n.hide-button-two:hover {\n  background-color: rgb(75, 183, 250);\n}\n\n.hide-button-one:active,\n.hide-button-two:active {\n  box-shadow: inset 1px 2px 5px gray;\n  transform: translateX(1px) translateY(1px);\n}\n\nheader,\n.indicator {\n  height: 100px;\n  background-color: #b4eaff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.indicator {\n  background-color: khaki;\n}\n\n.game {\n  text-align: center;\n  background-color: wheat;\n  height: calc(100vh - 300px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.container-one,\n.container-two {\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  box-shadow: 5px 5px 5px #463f3f;\n  border: 5px solid black;\n  background-color: white;\n}\n\n.red-border {\n  border-color: red;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n}\n\n.square {\n  border: 1px solid black;\n}\n\n.square:hover {\n  background-color: red;\n}\n\n.ship-square {\n  background-color: lightgrey;\n}\n.disabled {\n  pointer-events: none;\n}\n\n.hit-boat {\n  background-color: crimson;\n}\n\n.miss-boat {\n  background-color: blue;\n}\n\nfooter {\n  display: flex;\n  height: 100px;\n  background-color: #a1f5d7;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,SAAS;EACT,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;;EAEE,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,6CAA6C;EAC7C,iBAAiB;AACnB;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;;EAEE,kCAAkC;EAClC,0CAA0C;AAC5C;;AAEA;;EAEE,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":[":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000080;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.modal-two,\n.modal-three {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  visibility: hidden;\n  transform: scale(0);\n  transition: ease 0.4s;\n}\n\n.ship-placement {\n  border-radius: 5px;\n  padding: 1rem;\n  background-color: #e37922;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  gap: 1rem;\n  display: grid;\n  grid-template-rows: 100px 400px 50px 400px 50px;\n  justify-items: center;\n}\n\n.scale-visible {\n  transform: scale(1);\n  transition: ease 0.4s;\n  visibility: visible;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.explanation {\n  font-size: var(--font-size-default);\n  margin: 0;\n  text-align: center;\n  align-self: center;\n}\n\n.player-one-container,\n.player-two-container {\n  border: 5px solid black;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  position: relative;\n}\n\n.hide-button-one,\n.hide-button-two {\n  background-color: lightskyblue;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-in-out;\n  font-weight: bold;\n}\n\n.hide-button-one:hover,\n.hide-button-two:hover {\n  background-color: rgb(75, 183, 250);\n}\n\n.hide-button-one:active,\n.hide-button-two:active {\n  box-shadow: inset 1px 2px 5px gray;\n  transform: translateX(1px) translateY(1px);\n}\n\nheader,\n.indicator {\n  height: 100px;\n  background-color: #b4eaff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.indicator {\n  background-color: khaki;\n}\n\n.game {\n  text-align: center;\n  background-color: wheat;\n  height: calc(100vh - 300px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.container-one,\n.container-two {\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  box-shadow: 5px 5px 5px #463f3f;\n  border: 5px solid black;\n  background-color: white;\n}\n\n.red-border {\n  border-color: red;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 100%;\n}\n\n.square {\n  border: 1px solid black;\n}\n\n.square:hover {\n  background-color: red;\n}\n\n.ship-square {\n  background-color: lightgrey;\n}\n.disabled {\n  pointer-events: none;\n}\n\n.hit-boat {\n  background-color: crimson;\n}\n\n.miss-boat {\n  background-color: blue;\n}\n\nfooter {\n  display: flex;\n  height: 100px;\n  background-color: #a1f5d7;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
const createdModalOne = document.createElement('div')
const createdModalTwo = document.createElement('div')
createdModalOne.classList.add('modal-two')
createdModalTwo.classList.add('modal-three')

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
  selectionContainerOne.appendChild(createdModalOne)
  selectionContainerTwo.appendChild(createdModalTwo)
  selectionContainerOne.classList.remove("disabled");
  selectionContainerTwo.classList.remove("disabled");
  containerOne.classList.remove("red-border", "disabled");
  containerTwo.classList.remove("red-border", "disabled");
};

const initiateGame = () => {
  reseter();
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
    createdModalOne.classList.add("scale-visible");
    hideButtonOne.textContent = `Show`;
  } else {
    createdModalOne.classList.remove("scale-visible");
    hideButtonOne.textContent = `Hide`;
  }
});

hideButtonTwo.addEventListener("click", () => {
  if (hideButtonTwo.textContent === `Hide`) {
    createdModalTwo.classList.add("scale-visible");
    hideButtonTwo.textContent = `Show`;
  } else {
    createdModalTwo.classList.remove("scale-visible");
    hideButtonTwo.textContent = `Hide`;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ populateSquare });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZ2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeUM7QUFDYTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDVTtBQUNDO0FBQ0k7QUFDRztBQUNKO0FBQ0c7QUFDbEI7O0FBRW9CO0FBQ1Y7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvZm9ybXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3M/ZmRkZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3M/NTEzNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzcz85YjFiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzcz9iYTBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3M/ZWYyOSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzcz9hMjBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3M/NjhhMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlc3RyaWN0IHNpemluZyB0byB0aGUgcGFnZSB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lLCBpbWcsIGlucHV0LCB2aWRlbywgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZXN0cmljdCBzaXppbmcgdG8gdGhlIHBhZ2Ugd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSwgaW1nLCBpbnB1dCwgdmlkZW8sIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTYlMjcgaGVpZ2h0PSUyNzQlMjclM0UlM0NwYXRoIGQ9JTI3TTQgMGg2TDcgNCUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGFBQWEsRUFBRSxNQUFNO0VBQ3JCLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsdUJBQXVCLEVBQUUsTUFBTTtBQUNqQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixnRkFBdUw7RUFDdkwsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzQnJTNFJTNDcGF0aCBkPSdNNCAwaDZMNyA0Jy8lM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogMS4gUmVtb3ZlIGFuaW1hdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSBmaXhlZCBiYWNrZ3JvdW5kIGF0dGFjaG1lbnRzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBSZW1vdmUgdGltZWQgc2Nyb2xsaW5nIGJlaGF2aW9ycyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogNC4gUmVtb3ZlIHRyYW5zaXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKixcXG4gIDo6YmVmb3JlLFxcbiAgOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbCAhaW1wb3J0YW50OyAvKiAyICovXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50OyAvKiAzICovXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztFQUtFOztBQUVGO0VBQ0U7OztJQUdFLGdDQUFnQyxFQUFFLE1BQU07SUFDeEMsa0NBQWtDLEVBQUUsTUFBTTtJQUMxQyx1Q0FBdUMsRUFBRSxNQUFNO0lBQy9DLHlDQUF5QyxFQUFFLE1BQU07SUFDakQsZ0NBQWdDLEVBQUUsTUFBTTtJQUN4QywrQkFBK0IsRUFBRSxNQUFNO0lBQ3ZDLGtDQUFrQyxFQUFFLE1BQU07RUFDNUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqIDEuIFJlbW92ZSBhbmltYXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgZml4ZWQgYmFja2dyb3VuZCBhdHRhY2htZW50cyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMy4gUmVtb3ZlIHRpbWVkIHNjcm9sbGluZyBiZWhhdmlvcnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFJlbW92ZSB0cmFuc2l0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICosXFxuICA6OmJlZm9yZSxcXG4gIDo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWwgIWltcG9ydGFudDsgLyogMiAqL1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDsgLyogMyAqL1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQmFja2dyb3VuZHMgZG8gbm90IHJlcGVhdCBieSBkZWZhdWx0IChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRleHQgZGVjb3JhdGlvbiBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdmVydGljYWwgYWxpZ25tZW50IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENoYW5nZSB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMy4gQnJlYWtzIHdvcmRzIHRvIHByZXZlbnQgb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNC4gVXNlIGEgNC1zcGFjZSB0YWIgd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNS4gUmVtb3ZlIHRoZSBncmV5IGhpZ2hsaWdodCBvbiBsaW5rcyBpbiBpT1MgKG9waW5pb25hdGVkKS5cXG4gKiA2LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG46d2hlcmUoOnJvb3QpIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyogMyAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDUgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogNiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJvZHkpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbGlzdCBzdHlsZSBvbiBuYXZpZ2F0aW9uIGxpc3RzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYpIDp3aGVyZShvbCwgdWwpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgVm9pY2VPdmVyIGZyb20gaWdub3JpbmcgbGlzdCBzZW1hbnRpY3MgaW4gU2FmYXJpIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdiBsaSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMEJcXFwiO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDMuIFByZXZlbnQgb3ZlcmZsb3cgb2YgdGhlIGNvbnRhaW5lciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogMyAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBhbGlnbm1lbnQgb24gbWVkaWEgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGF1ZGlvLCBjYW52YXMsIGlmcmFtZSwgaW1nLCBzdmcsIHZpZGVvKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpZnJhbWVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUpIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBmaWxsIGNvbG9yIHRvIG1hdGNoIHRoZSB0ZXh0IGNvbG9yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzdmc6bm90KFtmaWxsXSkpIHtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb2xsYXBzZSBib3JkZXIgc3BhY2luZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDMuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMyAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoZmllbGRzZXQpIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqIDMuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGV0YWlscyA+IHN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBBY2Nlc3NpYmlsaXR5XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBidXN5IGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1idXN5PVxcXCJ0cnVlXFxcIiBpXSkge1xcbiAgY3Vyc29yOiBwcm9ncmVzcztcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBjb250cm9sIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1jb250cm9sc10pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBkaXNhYmxlZCwgbm90LWVkaXRhYmxlLCBvciBvdGhlcndpc2VcXG4gKiBpbm9wZXJhYmxlIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgaV0sIFtkaXNhYmxlZF0pIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBkaXNwbGF5IG9uIHZpc3VhbGx5IGhpZGRlbiBhY2Nlc3NpYmxlIGVsZW1lbnRzXFxuICogaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dOm5vdCg6Zm9jdXMpKSB7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7O0VBR0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5Qiw0QkFBNEIsRUFBRSxNQUFNO0FBQ3RDOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSx3QkFBd0IsRUFBRSxNQUFNO0VBQ2hDLHVCQUF1QixFQUFFLE1BQU07QUFDakM7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFFRjtFQUNFLGVBQWUsRUFBRSxNQUFN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OztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIGJvcmRlciBib3ggc2l6aW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEJhY2tncm91bmRzIGRvIG5vdCByZXBlYXQgYnkgZGVmYXVsdCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0ZXh0IGRlY29yYXRpb24gaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHZlcnRpY2FsIGFsaWdubWVudCBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSBkZWZhdWx0IGN1cnNvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDaGFuZ2UgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIEJyZWFrcyB3b3JkcyB0byBwcmV2ZW50IG92ZXJmbG93IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFVzZSBhIDQtc3BhY2UgdGFiIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDUuIFJlbW92ZSB0aGUgZ3JleSBoaWdobGlnaHQgb24gbGlua3MgaW4gaU9TIChvcGluaW9uYXRlZCkuXFxuICogNi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuOndoZXJlKDpyb290KSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIDMgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiA0ICovXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA1ICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDYgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShib2R5KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGxpc3Qgc3R5bGUgb24gbmF2aWdhdGlvbiBsaXN0cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2KSA6d2hlcmUob2wsIHVsKSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IFZvaWNlT3ZlciBmcm9tIGlnbm9yaW5nIGxpc3Qgc2VtYW50aWNzIGluIFNhZmFyaSAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYgbGkpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDBCXFxcIjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBQcmV2ZW50IG92ZXJmbG93IG9mIHRoZSBjb250YWluZXIgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIDMgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgYWxpZ25tZW50IG9uIG1lZGlhIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShhdWRpbywgY2FudmFzLCBpZnJhbWUsIGltZywgc3ZnLCB2aWRlbykge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaWZyYW1lcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lKSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgZmlsbCBjb2xvciB0byBtYXRjaCB0aGUgdGV4dCBjb2xvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc3ZnOm5vdChbZmlsbF0pKSB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29sbGFwc2UgYm9yZGVyIHNwYWNpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAzLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDMgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGZpZWxkc2V0KSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRldGFpbHMgPiBzdW1tYXJ5OmZpcnN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogQWNjZXNzaWJpbGl0eVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gYnVzeSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtYnVzeT1cXFwidHJ1ZVxcXCIgaV0pIHtcXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gY29udHJvbCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtY29udHJvbHNdKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gZGlzYWJsZWQsIG5vdC1lZGl0YWJsZSwgb3Igb3RoZXJ3aXNlXFxuICogaW5vcGVyYWJsZSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiIGldLCBbZGlzYWJsZWRdKSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgZGlzcGxheSBvbiB2aXN1YWxseSBoaWRkZW4gYWNjZXNzaWJsZSBlbGVtZW50c1xcbiAqIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dKSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXTpub3QoOmZvY3VzKSkge1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJXFxcIiksIGxvY2FsKFxcXCJVYnVudHVcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxzQkFBc0I7RUFDdEIscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5SUFBeUk7QUFDM0k7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlJQUFpSTtBQUNuSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBKQUEwSjtBQUM1SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSVxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1XFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tUmVndWxhclxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZFxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLyogbWFjT1MgMTAuMTEtMTAuMTIgKi8gLWFwcGxlLXN5c3RlbSxcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHVcXFwiLFxcbiAgICAvKiBHbm9tZSAzKyAqLyBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBTYW5zXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gc2Fucy1zZXJpZixcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCBtb25vc3BhY2UgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgdWktbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyAxMC4xMCsgKi8gXFxcIk1lbmxvXFxcIixcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiQ29uc29sYXNcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG8gTW9ub1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dSBNb25vc3BhY2VcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIE1vbm9cXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDQrICovIFxcXCJPeHlnZW4gTW9ub1xcXCIsXFxuICAgIC8qIExpbnV4L09wZW5PZmZpY2UgZmFsbGJhY2sgKi8gXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIG1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdHlwb2dyYXBoeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRTs7Ozs7Ozs7Ozs7O3dDQVlzQztBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFOzs7Ozs7Ozs7Ozs7O3dDQWFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICBzeXN0ZW0tdWksXFxuICAgIC8qIG1hY09TIDEwLjExLTEwLjEyICovIC1hcHBsZS1zeXN0ZW0sXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1XFxcIixcXG4gICAgLyogR25vbWUgMysgKi8gXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gU2Fuc1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIHNhbnMtc2VyaWYsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgbW9ub3NwYWNlIHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHVpLW1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgMTAuMTArICovIFxcXCJNZW5sb1xcXCIsXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIkNvbnNvbGFzXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvIE1vbm9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBNb25vXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA0KyAqLyBcXFwiT3h5Z2VuIE1vbm9cXFwiLFxcbiAgICAvKiBMaW51eC9PcGVuT2ZmaWNlIGZhbGxiYWNrICovIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBtb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhclxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ub1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9ub1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm9cXFwiKSwgbG9jYWwoXFxcIk1lbmxvXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhckl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIscUlBQXFJO0FBQ3ZJOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1S0FBdUs7QUFDeks7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNKQUFzSjtBQUN4Sjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFMQUFxTDtBQUN2TFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9ub1xcXCIpLCBsb2NhbChcXFwiTWVubG9cXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFySXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLm1vZGFsLXR3byxcXG4ubW9kYWwtdGhyZWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM3OTIyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4IDUwcHggNDAwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjYWxlLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5leHBsYW5hdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1vbmUtY29udGFpbmVyLFxcbi5wbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmUsXFxuLmhpZGUtYnV0dG9uLXR3byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmhvdmVyLFxcbi5oaWRlLWJ1dHRvbi10d286aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxODMsIDI1MCk7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmU6YWN0aXZlLFxcbi5oaWRlLWJ1dHRvbi10d286YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbmhlYWRlcixcXG4uaW5kaWNhdG9yIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRlYWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG59XFxuXFxuLmdhbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLW9uZSxcXG4uY29udGFpbmVyLXR3byB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzQ2M2YzZjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZWQtYm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpdC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5taXNzLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjVkNztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLm1vZGFsLXR3byxcXG4ubW9kYWwtdGhyZWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM3OTIyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDQwMHB4IDUwcHggNDAwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjYWxlLXZpc2libGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5leHBsYW5hdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1vbmUtY29udGFpbmVyLFxcbi5wbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmUsXFxuLmhpZGUtYnV0dG9uLXR3byB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmhvdmVyLFxcbi5oaWRlLWJ1dHRvbi10d286aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxODMsIDI1MCk7XFxufVxcblxcbi5oaWRlLWJ1dHRvbi1vbmU6YWN0aXZlLFxcbi5oaWRlLWJ1dHRvbi10d286YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNXB4IGdyYXk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbmhlYWRlcixcXG4uaW5kaWNhdG9yIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRlYWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG59XFxuXFxuLmdhbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLW9uZSxcXG4uY29udGFpbmVyLXR3byB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzQ2M2YzZjtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZWQtYm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpdC1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5taXNzLWJvYXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjVkNztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2FuaXRpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nhbml0aXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N5c3RlbS11aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3lzdGVtLXVpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWktbW9ub3NwYWNlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS1tb25vc3BhY2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwTWFrZXIgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBnYW1lYm9hcmRNYWtlciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0ge307XG4gIGdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICBnYW1lYm9hcmQucGxheXMgPSBbXTtcbiAgZ2FtZWJvYXJkLnBvc2l0aW9ucyA9IFtdO1xuICBnYW1lYm9hcmQudG91Y2ggPSBbXTtcbiAgZ2FtZWJvYXJkLnBsYWNlID0gKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBNYWtlcihsZW5ndGgsIGhpdHMsIHN1bmspO1xuICAgIHNoaXAueDEgPSB4O1xuICAgIHNoaXAueTEgPSB5O1xuICAgIHNoaXAuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IGB2YCkge1xuICAgICAgaWYgKFxuICAgICAgICAoc2hpcC55MSA9PT0gOSAmJiBsZW5ndGggPiAxKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gOCAmJiBsZW5ndGggPiAyKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gNyAmJiBsZW5ndGggPiAzKSB8fFxuICAgICAgICAoc2hpcC55MSA9PT0gNiAmJiBsZW5ndGggPiA0KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B5JHtpfWBdID0geSAtIGo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B5JHtpfWBdID0geSArIGo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gYGhgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIChzaGlwLngxID09PSA5ICYmIGxlbmd0aCA+IDEpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA4ICYmIGxlbmd0aCA+IDIpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA3ICYmIGxlbmd0aCA+IDMpIHx8XG4gICAgICAgIChzaGlwLngxID09PSA2ICYmIGxlbmd0aCA+IDQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDIsIGogPSAxOyBpIDw9IHNoaXAubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICAgIHNoaXBbYHgke2l9YF0gPSB4IC0gajtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDIsIGogPSAxOyBpIDw9IHNoaXAubGVuZ3RoOyBpICs9IDEsIGogKz0gMSkge1xuICAgICAgICAgIHNoaXBbYHgke2l9YF0gPSB4ICsgajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnYW1lYm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnNoaXBzO1xuICB9O1xuICBnYW1lYm9hcmQucmVtb3ZlID0gKCkgPT4ge1xuICAgIGdhbWVib2FyZC5zaGlwcy5wb3AoKTtcbiAgfTtcbiAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sgPSAoeCwgeSwgaWRlbnRpdHkpID0+IHtcbiAgICBsZXQgdG91Y2ggPSBudWxsO1xuICAgIGlmIChpZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgICAgY29uc3QgcmVzdHJpY3RNb3ZlID0gZ2FtZWJvYXJkLnBvc2l0aW9ucy5maW5kSW5kZXgoXG4gICAgICAgIChwb3NpdGlvbikgPT4gcG9zaXRpb25bMF0gPT09IHggJiYgcG9zaXRpb25bMV0gPT09IHlcbiAgICAgICk7XG4gICAgICBnYW1lYm9hcmQucG9zaXRpb25zLnNwbGljZShyZXN0cmljdE1vdmUsIDEpO1xuICAgIH1cbiAgICBnYW1lYm9hcmQuc2hpcHMubWFwKChzaGlwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChzaGlwLngxID09PSB4IHx8XG4gICAgICAgICAgc2hpcC54MiA9PT0geCB8fFxuICAgICAgICAgIHNoaXAueDMgPT09IHggfHxcbiAgICAgICAgICBzaGlwLng0ID09PSB4IHx8XG4gICAgICAgICAgc2hpcC54NSA9PT0geCkgJiZcbiAgICAgICAgKHNoaXAueTEgPT09IHkgfHxcbiAgICAgICAgICBzaGlwLnkyID09PSB5IHx8XG4gICAgICAgICAgc2hpcC55MyA9PT0geSB8fFxuICAgICAgICAgIHNoaXAueTQgPT09IHkgfHxcbiAgICAgICAgICBzaGlwLnk1ID09PSB5KVxuICAgICAgKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpID09PSAwKSB7XG4gICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lYm9hcmQudG91Y2gucHVzaChbeCwgeV0pO1xuICAgICAgICB0b3VjaCA9IHNoaXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSk7XG4gICAgZ2FtZWJvYXJkLnBsYXlzLnB1c2goW3gsIHldKTtcbiAgICByZXR1cm4gdG91Y2g7XG4gIH07XG4gIGdhbWVib2FyZC5nYW1lT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lU3RhdGUgPSBnYW1lYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IGZhbHNlKTtcbiAgICBpZiAoZ2FtZVN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGBHYW1lIE92ZXJgO1xuICAgIH1cbiAgICByZXR1cm4gYEdhbWUgT25gO1xuICB9O1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkTWFrZXI7XG4iLCJleHBvcnQgY29uc3QgcGxheWVyTWFrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9O1xuICBwbGF5ZXIuaWRlbnRpdHkgPSBgcGxheWVyYDtcbiAgcGxheWVyLnBsYXkgPSAoZ2FtZWJvYXJkLCB4LCB5KSA9PiB7XG4gICAgLy8gY2hhbmdlZCBsYXRlclxuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHksIHBsYXllci5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5wbGF5cy5zb21lKChwbGF5KSA9PiBwbGF5WzBdID09PSB4ICYmIHBsYXlbMV0gPT09IHkpO1xuICB9O1xuICByZXR1cm4gcGxheWVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVyTWFrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHt9O1xuICBwbGF5ZXIuaWRlbnRpdHkgPSBgY29tcHV0ZXJgO1xuICBwbGF5ZXIucGxheSA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgUG9zXG4gICAgaWYgKHBsYXllci50ZXN0aW5nKSB7XG4gICAgICBQb3MgPSBbMSwgMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFBvcyA9IGdhbWVib2FyZC5wb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGgpXTtcbiAgICB9XG4gICAgaWYgKFBvcyA9PT0gdW5kZWZpbmVkKSB7cmV0dXJuIGZhbHNlfVxuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFBvc1swXSwgUG9zWzFdLCBwbGF5ZXIuaWRlbnRpdHkpO1xuICAgIHJldHVybiBnYW1lYm9hcmQucGxheXMuc29tZShcbiAgICAgIChwbGF5KSA9PiBwbGF5WzBdID09PSBQb3NbMF0gJiYgcGxheVsxXSA9PT0gUG9zWzFdXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIHBsYXllcjtcbn07XG4iLCJpbXBvcnQgZ2FtZWJvYXJkTWFrZXIgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXJNYWtlciwgY29tcHV0ZXJNYWtlciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpO1xuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcbmNvbnN0IG9wcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC1idXR0b25cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudFwiKTtcbmNvbnN0IHNlbGVjdGlvbkNvbnRhaW5lck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1jb250YWluZXJcIik7XG5jb25zdCBzZWxlY3Rpb25Db250YWluZXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tY29udGFpbmVyXCIpO1xuY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb25lXCIpO1xuY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItdHdvXCIpO1xuY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRpY2F0b3JcIik7XG5jb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3b1wiKTtcbmNvbnN0IGhpZGVCdXR0b25PbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGUtYnV0dG9uLW9uZVwiKTtcbmNvbnN0IGhpZGVCdXR0b25Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGUtYnV0dG9uLXR3b1wiKTtcbmNvbnN0IGNyZWF0ZWRNb2RhbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjcmVhdGVkTW9kYWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY3JlYXRlZE1vZGFsT25lLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXR3bycpXG5jcmVhdGVkTW9kYWxUd28uY2xhc3NMaXN0LmFkZCgnbW9kYWwtdGhyZWUnKVxuXG5sZXQgR2FtZWJvYXJkT25lO1xubGV0IEdhbWVib2FyZFR3bztcbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xubGV0IGNvdW50ZXJPbmUgPSA1O1xubGV0IGNvdW50ZXJUd28gPSA1O1xuXG5jb25zdCBjb21wdXRlclNoaXBzUmFuZG9taXplciA9ICgpID0+IHtcbiAgbGV0IGR1cGxpY2F0ZVggPSBbXTtcbiAgbGV0IGR1cGxpY2F0ZVkgPSBbXTtcbiAgY29uc3QgbGVuZ3RoID0gWzEsIDIsIDMsIDQsIDVdO1xuICBmb3IgKGxldCBpID0gMSwgaiA9IDU7IGkgPD0gajsgaSArPSAxKSB7XG4gICAgY29uc3QgUG9zID1cbiAgICAgIEdhbWVib2FyZFR3by5wb3NpdGlvbnNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEdhbWVib2FyZFR3by5wb3NpdGlvbnMubGVuZ3RoKVxuICAgICAgXTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBbYGhgLCBgdmBdO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uWCA9IFBvc1swXTtcbiAgICBjb25zdCByYW5kb21Qb3NpdGlvblkgPSBQb3NbMV07XG4gICAgY29uc3QgcmFuZG9tTGVuZ3RoID0gbGVuZ3RoW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aC5sZW5ndGgpXTtcbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPVxuICAgICAgZGlyZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbi5sZW5ndGgpXTtcblxuICAgIEdhbWVib2FyZFR3by5wbGFjZShcbiAgICAgIHJhbmRvbVBvc2l0aW9uWCxcbiAgICAgIHJhbmRvbVBvc2l0aW9uWSxcbiAgICAgIHJhbmRvbUxlbmd0aCxcbiAgICAgIHJhbmRvbURpcmVjdGlvblxuICAgICk7XG4gICAgY29uc3QgbGFzdFNoaXAgPSBHYW1lYm9hcmRUd28uc2hpcHNbR2FtZWJvYXJkVHdvLnNoaXBzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChkdXBsaWNhdGVYLmxlbmd0aCAhPT0gMCAmJiBkdXBsaWNhdGVZLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgdGVzdDEgPSBkdXBsaWNhdGVYLnNvbWUoXG4gICAgICAgICh2YWx1ZSkgPT5cbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueDEgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueDIgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueDMgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueDQgfHxcbiAgICAgICAgICB2YWx1ZSA9PT0gbGFzdFNoaXAueDVcbiAgICAgICk7XG4gICAgICBjb25zdCB0ZXN0MiA9IGR1cGxpY2F0ZVkuc29tZShcbiAgICAgICAgKHZhbHVlKSA9PlxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC55MSB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC55MiB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC55MyB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC55NCB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC55NVxuICAgICAgKTtcbiAgICAgIGlmICh0ZXN0MSAmJiB0ZXN0Mikge1xuICAgICAgICBHYW1lYm9hcmRUd28ucmVtb3ZlKCk7XG4gICAgICAgIGogKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aFRvUmVtb3ZlID0gbGVuZ3RoLmZpbmRJbmRleChcbiAgICAgICAgICAocmVtb3ZhYmxlTGVuZ3RoKSA9PiByZW1vdmFibGVMZW5ndGggPT09IHJhbmRvbUxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBsZW5ndGguc3BsaWNlKGxlbmd0aFRvUmVtb3ZlLCAxKTtcblxuICAgICAgICBkdXBsaWNhdGVYLnB1c2goXG4gICAgICAgICAgbGFzdFNoaXAueDEsXG4gICAgICAgICAgbGFzdFNoaXAueDIsXG4gICAgICAgICAgbGFzdFNoaXAueDMsXG4gICAgICAgICAgbGFzdFNoaXAueDQsXG4gICAgICAgICAgbGFzdFNoaXAueDVcbiAgICAgICAgKTtcbiAgICAgICAgZHVwbGljYXRlWS5wdXNoKFxuICAgICAgICAgIGxhc3RTaGlwLnkxLFxuICAgICAgICAgIGxhc3RTaGlwLnkyLFxuICAgICAgICAgIGxhc3RTaGlwLnkzLFxuICAgICAgICAgIGxhc3RTaGlwLnk0LFxuICAgICAgICAgIGxhc3RTaGlwLnk1XG4gICAgICAgICk7XG4gICAgICAgIGR1cGxpY2F0ZVggPSBkdXBsaWNhdGVYLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgICAgICBkdXBsaWNhdGVZID0gZHVwbGljYXRlWS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVuZ3RoVG9SZW1vdmUgPSBsZW5ndGguZmluZEluZGV4KFxuICAgICAgICAocmVtb3ZhYmxlTGVuZ3RoKSA9PiByZW1vdmFibGVMZW5ndGggPT09IHJhbmRvbUxlbmd0aFxuICAgICAgKTtcbiAgICAgIGxlbmd0aC5zcGxpY2UobGVuZ3RoVG9SZW1vdmUsIDEpO1xuXG4gICAgICBkdXBsaWNhdGVYLnB1c2goXG4gICAgICAgIGxhc3RTaGlwLngxLFxuICAgICAgICBsYXN0U2hpcC54MixcbiAgICAgICAgbGFzdFNoaXAueDMsXG4gICAgICAgIGxhc3RTaGlwLng0LFxuICAgICAgICBsYXN0U2hpcC54NVxuICAgICAgKTtcbiAgICAgIGR1cGxpY2F0ZVkucHVzaChcbiAgICAgICAgbGFzdFNoaXAueTEsXG4gICAgICAgIGxhc3RTaGlwLnkyLFxuICAgICAgICBsYXN0U2hpcC55MyxcbiAgICAgICAgbGFzdFNoaXAueTQsXG4gICAgICAgIGxhc3RTaGlwLnk1XG4gICAgICApO1xuICAgICAgZHVwbGljYXRlWCA9IGR1cGxpY2F0ZVguZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gICAgICBkdXBsaWNhdGVZID0gZHVwbGljYXRlWS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdhbWUgPSAoZGl2KSA9PiB7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMCk7XG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDEpO1xuICAgIGlmIChjb250YWluZXJPbmUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC1ib3JkZXJcIik7XG4gICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwicmVkLWJvcmRlclwiKTtcbiAgICAgIGlmIChwbGF5ZXJUd28uaWRlbnRpdHkgPT09IGBwbGF5ZXJgKSB7XG4gICAgICAgIGlmIChHYW1lYm9hcmRUd28uZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyVHdvLnBsYXkoR2FtZWJvYXJkT25lLCBOdW1iZXIoeCksIE51bWJlcih5KSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBHYW1lYm9hcmRPbmUudG91Y2guc29tZShcbiAgICAgICAgICAgIChtb3ZlKSA9PiBtb3ZlWzBdID09PSBOdW1iZXIoeCkgJiYgbW92ZVsxXSA9PT0gTnVtYmVyKHkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDIgaGl0IFBsYXllciAxIWA7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdC1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAyIG1pc3NlZCFgO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZWJvYXJkT25lLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAyIHdvbiFgO1xuICAgICAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJUd28uaWRlbnRpdHkgPT09IGBjb21wdXRlcmApIHtcbiAgICAgICAgaWYgKEdhbWVib2FyZFR3by5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0TW92ZSA9IEdhbWVib2FyZE9uZS5wbGF5c1tHYW1lYm9hcmRPbmUucGxheXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBHYW1lYm9hcmRPbmUudG91Y2guc29tZShcbiAgICAgICAgICAgIChtb3ZlKSA9PiBtb3ZlWzBdID09PSBsYXN0TW92ZVswXSAmJiBtb3ZlWzFdID09PSBsYXN0TW92ZVsxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgQ29tcHV0ZXIgaGl0IFBsYXllciAxIWA7XG4gICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXQtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYENvbXB1dGVyIG1pc3NlZCFgO1xuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3MtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHYW1lYm9hcmRPbmUuZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBDb21wdXRlciB3b24hYDtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lclR3by5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwicmVkLWJvcmRlclwiKTtcbiAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcInJlZC1ib3JkZXJcIik7XG4gICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuXG4gICAgICBwbGF5ZXJPbmUucGxheShHYW1lYm9hcmRUd28sIE51bWJlcih4KSwgTnVtYmVyKHkpKTtcbiAgICAgIGlmIChcbiAgICAgICAgR2FtZWJvYXJkVHdvLnRvdWNoLnNvbWUoXG4gICAgICAgICAgKG1vdmUpID0+IG1vdmVbMF0gPT09IE51bWJlcih4KSAmJiBtb3ZlWzFdID09PSBOdW1iZXIoeSlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGF5ZXJUd28uaWRlbnRpdHkgPT09IGBjb21wdXRlcmApIHtcbiAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDEgaGl0IENvbXB1dGVyIWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAxIGhpdCBQbGF5ZXIgMiFgO1xuICAgICAgICB9XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXQtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAxIG1pc3NlZCFgO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzcy1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoR2FtZWJvYXJkVHdvLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSB3b24hYDtcbiAgICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgICAgICBpZiAoR2FtZWJvYXJkVHdvLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllclR3by5wbGF5KEdhbWVib2FyZE9uZSk7XG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gR2FtZWJvYXJkT25lLnBsYXlzW0dhbWVib2FyZE9uZS5wbGF5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9DbGljayA9IGNvbnRhaW5lck9uZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtsYXN0TW92ZVswXX0ke2xhc3RNb3ZlWzFdfWBcbiAgICAgICAgKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc3F1YXJlVG9DbGljay5jbGljaygpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjb2xvclNoaXBzID0gKGdhbWVib2FyZCwgY29udGFpbmVyKSA9PiB7XG4gIGdhbWVib2FyZC5zaGlwcy5tYXAoKHNoaXApID0+IHtcbiAgICBjb25zdCBzcXVhcmVUb0NvbG9yT25lID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnNxdWFyZSR7c2hpcC54MX0ke3NoaXAueTF9YFxuICAgICk7XG4gICAgc3F1YXJlVG9Db2xvck9uZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBgaGApIHtcbiAgICAgIGlmIChzaGlwLngyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvclR3byA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngyfSR7c2hpcC55MX1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JUd28uY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueDMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yVGhyZWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54M30ke3NoaXAueTF9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yVGhyZWUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueDQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yRm91ciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLng0fSR7c2hpcC55MX1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JGb3VyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLng1ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvckZpdmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54NX0ke3NoaXAueTF9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yRml2ZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzaGlwLnkyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvclR3byA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngxfSR7c2hpcC55Mn1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JUd28uY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueTMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yVGhyZWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54MX0ke3NoaXAueTN9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yVGhyZWUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueTQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yRm91ciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngxfSR7c2hpcC55NH1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JGb3VyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnk1ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlVG9Db2xvckZpdmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnNxdWFyZSR7c2hpcC54MX0ke3NoaXAueTV9YFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmVUb0NvbG9yRml2ZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwO1xuICB9KTtcbn07XG5cbmNvbnN0IHNlbGVjdGlvbiA9IChkaXYsIGNvbnRhaW5lcikgPT4ge1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDApO1xuICAgIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgxKTtcbiAgICBpZiAoY29udGFpbmVyID09PSBzZWxlY3Rpb25Db250YWluZXJPbmUpIHtcbiAgICAgIGlmIChjb3VudGVyT25lID09PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEdhbWVib2FyZE9uZS5wbGFjZShOdW1iZXIoeCksIE51bWJlcih5KSwgY291bnRlck9uZSwgYGhgKTtcbiAgICAgIGNvbG9yU2hpcHMoR2FtZWJvYXJkT25lLCBzZWxlY3Rpb25Db250YWluZXJPbmUpO1xuICAgICAgY291bnRlck9uZSAtPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyID09PSBzZWxlY3Rpb25Db250YWluZXJUd28pIHtcbiAgICAgIGlmIChjb3VudGVyVHdvID09PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIEdhbWVib2FyZFR3by5wbGFjZShOdW1iZXIoeCksIE51bWJlcih5KSwgY291bnRlclR3bywgYGhgKTtcbiAgICAgIGNvbG9yU2hpcHMoR2FtZWJvYXJkVHdvLCBzZWxlY3Rpb25Db250YWluZXJUd28pO1xuICAgICAgY291bnRlclR3byAtPSAxO1xuICAgIH1cbiAgfSk7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDApO1xuICAgIGNvbnN0IHkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgxKTtcblxuICAgIGlmIChjb250YWluZXIgPT09IHNlbGVjdGlvbkNvbnRhaW5lck9uZSkge1xuICAgICAgaWYgKGNvdW50ZXJPbmUgPT09IDApIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgR2FtZWJvYXJkT25lLnBsYWNlKE51bWJlcih4KSwgTnVtYmVyKHkpLCBjb3VudGVyT25lLCBgdmApO1xuICAgICAgY29sb3JTaGlwcyhHYW1lYm9hcmRPbmUsIHNlbGVjdGlvbkNvbnRhaW5lck9uZSk7XG4gICAgICBjb3VudGVyT25lIC09IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluZXIgPT09IHNlbGVjdGlvbkNvbnRhaW5lclR3bykge1xuICAgICAgaWYgKGNvdW50ZXJUd28gPT09IDApIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgR2FtZWJvYXJkVHdvLnBsYWNlKE51bWJlcih4KSwgTnVtYmVyKHkpLCBjb3VudGVyVHdvLCBgdmApO1xuICAgICAgY29sb3JTaGlwcyhHYW1lYm9hcmRUd28sIHNlbGVjdGlvbkNvbnRhaW5lclR3byk7XG4gICAgICBjb3VudGVyVHdvIC09IDE7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlU3F1YXJlID0gKGNvbnRhaW5lciwgZ2FtZWJvYXJkKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYHJvdyR7aX1gLCBgcm93YCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBpZiAoY29udGFpbmVyID09PSBjb250YWluZXJPbmUgfHwgY29udGFpbmVyID09PSBjb250YWluZXJUd28pIHtcbiAgICAgICAgZ2FtZWJvYXJkLnBvc2l0aW9ucy5wdXNoKFtqLCBpXSk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBzcXVhcmUke2p9JHtpfWAsIGBzcXVhcmVgKTtcbiAgICAgICAgZ2FtZShkaXYpO1xuICAgICAgICBjb25zdCByb3cgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLnJvdyR7aX1gKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgc3F1YXJlJHtqfSR7aX1gLCBgc3F1YXJlYCk7XG4gICAgICAgIHNlbGVjdGlvbihkaXYsIGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IHJvdyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAucm93JHtpfWApO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNob29zZU9wcG9uZW50ID0gKCkgPT4ge1xuICBpZiAob3Bwb25lbnQudGV4dENvbnRlbnQgPT09IGBQbGF5ZXJgKSB7XG4gICAgb3Bwb25lbnQudGV4dENvbnRlbnQgPSBgQ29tcHV0ZXJgO1xuICAgIHBsYXllclR3b1RpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAyYDtcbiAgICBwbGF5ZXJUd28gPSBwbGF5ZXJNYWtlcigpO1xuICB9IGVsc2Uge1xuICAgIG9wcG9uZW50LnRleHRDb250ZW50ID0gYFBsYXllcmA7XG4gICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSBgQ29tcHV0ZXJgO1xuICAgIHBsYXllclR3byA9IGNvbXB1dGVyTWFrZXIoKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRlciA9ICgpID0+IHtcbiAgY291bnRlck9uZSA9IDU7XG4gIGNvdW50ZXJUd28gPSA1O1xuICBjb250YWluZXJPbmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyVHdvLmlubmVySFRNTCA9IFwiXCI7XG4gIHNlbGVjdGlvbkNvbnRhaW5lck9uZS5pbm5lckhUTUwgPSBcIlwiO1xuICBzZWxlY3Rpb25Db250YWluZXJUd28uaW5uZXJIVE1MID0gXCJcIjtcbiAgc2VsZWN0aW9uQ29udGFpbmVyT25lLmFwcGVuZENoaWxkKGNyZWF0ZWRNb2RhbE9uZSlcbiAgc2VsZWN0aW9uQ29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGNyZWF0ZWRNb2RhbFR3bylcbiAgc2VsZWN0aW9uQ29udGFpbmVyT25lLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgc2VsZWN0aW9uQ29udGFpbmVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtYm9yZGVyXCIsIFwiZGlzYWJsZWRcIik7XG4gIGNvbnRhaW5lclR3by5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLWJvcmRlclwiLCBcImRpc2FibGVkXCIpO1xufTtcblxuY29uc3QgaW5pdGlhdGVHYW1lID0gKCkgPT4ge1xuICByZXNldGVyKCk7XG4gIEdhbWVib2FyZE9uZSA9IGdhbWVib2FyZE1ha2VyKCk7XG4gIEdhbWVib2FyZFR3byA9IGdhbWVib2FyZE1ha2VyKCk7XG4gIHBsYXllck9uZSA9IHBsYXllck1ha2VyKCk7XG4gIHBvcHVsYXRlU3F1YXJlKGNvbnRhaW5lck9uZSwgR2FtZWJvYXJkT25lKTtcbiAgcG9wdWxhdGVTcXVhcmUoY29udGFpbmVyVHdvLCBHYW1lYm9hcmRUd28pO1xuICBpZiAocGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPT09IGBQbGF5ZXIgMmApIHtcbiAgICBwbGF5ZXJUd28gPSBwbGF5ZXJNYWtlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllclR3byA9IGNvbXB1dGVyTWFrZXIoKTtcbiAgfVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgc2hpcFBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYHBsYXllcmApIHtcbiAgICBwb3B1bGF0ZVNxdWFyZShzZWxlY3Rpb25Db250YWluZXJPbmUpO1xuICAgIHBvcHVsYXRlU3F1YXJlKHNlbGVjdGlvbkNvbnRhaW5lclR3byk7XG4gIH1cbiAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgIHBvcHVsYXRlU3F1YXJlKHNlbGVjdGlvbkNvbnRhaW5lck9uZSk7XG4gICAgY29tcHV0ZXJTaGlwc1JhbmRvbWl6ZXIoKTtcbiAgfVxufTtcblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5pdGlhdGVHYW1lKCk7XG4gIHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgc3RhcnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xufSk7XG5cbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGluaXRpYXRlR2FtZSgpO1xufSk7XG5cbm9wcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIGNob29zZU9wcG9uZW50KCk7XG59KTtcblxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgfVxufSk7XG5cbmhpZGVCdXR0b25PbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGhpZGVCdXR0b25PbmUudGV4dENvbnRlbnQgPT09IGBIaWRlYCkge1xuICAgIGNyZWF0ZWRNb2RhbE9uZS5jbGFzc0xpc3QuYWRkKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgICBoaWRlQnV0dG9uT25lLnRleHRDb250ZW50ID0gYFNob3dgO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZWRNb2RhbE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgICBoaWRlQnV0dG9uT25lLnRleHRDb250ZW50ID0gYEhpZGVgO1xuICB9XG59KTtcblxuaGlkZUJ1dHRvblR3by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaGlkZUJ1dHRvblR3by50ZXh0Q29udGVudCA9PT0gYEhpZGVgKSB7XG4gICAgY3JlYXRlZE1vZGFsVHdvLmNsYXNzTGlzdC5hZGQoXCJzY2FsZS12aXNpYmxlXCIpO1xuICAgIGhpZGVCdXR0b25Ud28udGV4dENvbnRlbnQgPSBgU2hvd2A7XG4gIH0gZWxzZSB7XG4gICAgY3JlYXRlZE1vZGFsVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZS12aXNpYmxlXCIpO1xuICAgIGhpZGVCdXR0b25Ud28udGV4dENvbnRlbnQgPSBgSGlkZWA7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7IHBvcHVsYXRlU3F1YXJlIH07XG4iLCJjb25zdCBzaGlwTWFrZXIgPSAobGVuZ3RoLCBoaXRzLCBzdW5rKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHtsZW5ndGgsIGhpdHMsIHN1bmt9XG4gICAgc2hpcC5oaXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXAuaGl0cyArPSAxXG4gICAgICAgIHJldHVybiBzaGlwLmhpdHNcbiAgICB9XG4gICAgc2hpcC5pc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhwID0gc2hpcC5sZW5ndGggLSBzaGlwLmhpdHNcbiAgICAgICAgaWYoaHAgPT09IDApIHtzaGlwLnN1bmsgPSB0cnVlfVxuICAgICAgICByZXR1cm4gaHBcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBNYWtlciIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCJzYW5pdGl6ZS5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy9mb3Jtcy5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy9hc3NldHMuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy91aS1tb25vc3BhY2UuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgZ2FtZWJvYXJkTWFrZXIgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgc2hpcE1ha2VyIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBwb3B1bGF0ZVNxdWFyZSBmcm9tIFwiLi9wb3B1bGF0ZVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9