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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RnZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ5QztBQUNhOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDVTtBQUNDO0FBQ0k7QUFDRztBQUNKO0FBQ0c7QUFDbEI7O0FBRW9CO0FBQ1Y7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvZm9ybXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3M/ZmRkZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3M/NTEzNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzcz85YjFiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzcz9iYTBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3M/ZWYyOSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzcz9hMjBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3M/NjhhMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlc3RyaWN0IHNpemluZyB0byB0aGUgcGFnZSB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lLCBpbWcsIGlucHV0LCB2aWRlbywgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZXN0cmljdCBzaXppbmcgdG8gdGhlIHBhZ2Ugd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSwgaW1nLCBpbnB1dCwgdmlkZW8sIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTYlMjcgaGVpZ2h0PSUyNzQlMjclM0UlM0NwYXRoIGQ9JTI3TTQgMGg2TDcgNCUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGFBQWEsRUFBRSxNQUFNO0VBQ3JCLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsdUJBQXVCLEVBQUUsTUFBTTtBQUNqQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixnRkFBdUw7RUFDdkwsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzQnJTNFJTNDcGF0aCBkPSdNNCAwaDZMNyA0Jy8lM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogMS4gUmVtb3ZlIGFuaW1hdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSBmaXhlZCBiYWNrZ3JvdW5kIGF0dGFjaG1lbnRzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBSZW1vdmUgdGltZWQgc2Nyb2xsaW5nIGJlaGF2aW9ycyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogNC4gUmVtb3ZlIHRyYW5zaXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKixcXG4gIDo6YmVmb3JlLFxcbiAgOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbCAhaW1wb3J0YW50OyAvKiAyICovXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50OyAvKiAzICovXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztFQUtFOztBQUVGO0VBQ0U7OztJQUdFLGdDQUFnQyxFQUFFLE1BQU07SUFDeEMsa0NBQWtDLEVBQUUsTUFBTTtJQUMxQyx1Q0FBdUMsRUFBRSxNQUFNO0lBQy9DLHlDQUF5QyxFQUFFLE1BQU07SUFDakQsZ0NBQWdDLEVBQUUsTUFBTTtJQUN4QywrQkFBK0IsRUFBRSxNQUFNO0lBQ3ZDLGtDQUFrQyxFQUFFLE1BQU07RUFDNUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqIDEuIFJlbW92ZSBhbmltYXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgZml4ZWQgYmFja2dyb3VuZCBhdHRhY2htZW50cyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMy4gUmVtb3ZlIHRpbWVkIHNjcm9sbGluZyBiZWhhdmlvcnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFJlbW92ZSB0cmFuc2l0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICosXFxuICA6OmJlZm9yZSxcXG4gIDo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWwgIWltcG9ydGFudDsgLyogMiAqL1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDsgLyogMyAqL1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQmFja2dyb3VuZHMgZG8gbm90IHJlcGVhdCBieSBkZWZhdWx0IChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRleHQgZGVjb3JhdGlvbiBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdmVydGljYWwgYWxpZ25tZW50IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENoYW5nZSB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMy4gQnJlYWtzIHdvcmRzIHRvIHByZXZlbnQgb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNC4gVXNlIGEgNC1zcGFjZSB0YWIgd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNS4gUmVtb3ZlIHRoZSBncmV5IGhpZ2hsaWdodCBvbiBsaW5rcyBpbiBpT1MgKG9waW5pb25hdGVkKS5cXG4gKiA2LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG46d2hlcmUoOnJvb3QpIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyogMyAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDUgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogNiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJvZHkpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbGlzdCBzdHlsZSBvbiBuYXZpZ2F0aW9uIGxpc3RzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYpIDp3aGVyZShvbCwgdWwpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgVm9pY2VPdmVyIGZyb20gaWdub3JpbmcgbGlzdCBzZW1hbnRpY3MgaW4gU2FmYXJpIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdiBsaSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMEJcXFwiO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDMuIFByZXZlbnQgb3ZlcmZsb3cgb2YgdGhlIGNvbnRhaW5lciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogMyAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBhbGlnbm1lbnQgb24gbWVkaWEgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGF1ZGlvLCBjYW52YXMsIGlmcmFtZSwgaW1nLCBzdmcsIHZpZGVvKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpZnJhbWVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUpIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBmaWxsIGNvbG9yIHRvIG1hdGNoIHRoZSB0ZXh0IGNvbG9yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzdmc6bm90KFtmaWxsXSkpIHtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb2xsYXBzZSBib3JkZXIgc3BhY2luZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDMuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMyAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoZmllbGRzZXQpIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqIDMuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGV0YWlscyA+IHN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBBY2Nlc3NpYmlsaXR5XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBidXN5IGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1idXN5PVxcXCJ0cnVlXFxcIiBpXSkge1xcbiAgY3Vyc29yOiBwcm9ncmVzcztcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBjb250cm9sIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1jb250cm9sc10pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBkaXNhYmxlZCwgbm90LWVkaXRhYmxlLCBvciBvdGhlcndpc2VcXG4gKiBpbm9wZXJhYmxlIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgaV0sIFtkaXNhYmxlZF0pIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBkaXNwbGF5IG9uIHZpc3VhbGx5IGhpZGRlbiBhY2Nlc3NpYmxlIGVsZW1lbnRzXFxuICogaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dOm5vdCg6Zm9jdXMpKSB7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7O0VBR0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5Qiw0QkFBNEIsRUFBRSxNQUFNO0FBQ3RDOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSx3QkFBd0IsRUFBRSxNQUFNO0VBQ2hDLHVCQUF1QixFQUFFLE1BQU07QUFDakM7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFFRjtF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QUFDckI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIGJvcmRlciBib3ggc2l6aW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEJhY2tncm91bmRzIGRvIG5vdCByZXBlYXQgYnkgZGVmYXVsdCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0ZXh0IGRlY29yYXRpb24gaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHZlcnRpY2FsIGFsaWdubWVudCBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSBkZWZhdWx0IGN1cnNvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDaGFuZ2UgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIEJyZWFrcyB3b3JkcyB0byBwcmV2ZW50IG92ZXJmbG93IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFVzZSBhIDQtc3BhY2UgdGFiIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDUuIFJlbW92ZSB0aGUgZ3JleSBoaWdobGlnaHQgb24gbGlua3MgaW4gaU9TIChvcGluaW9uYXRlZCkuXFxuICogNi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuOndoZXJlKDpyb290KSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIDMgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiA0ICovXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA1ICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDYgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShib2R5KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGxpc3Qgc3R5bGUgb24gbmF2aWdhdGlvbiBsaXN0cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2KSA6d2hlcmUob2wsIHVsKSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IFZvaWNlT3ZlciBmcm9tIGlnbm9yaW5nIGxpc3Qgc2VtYW50aWNzIGluIFNhZmFyaSAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYgbGkpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDBCXFxcIjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBQcmV2ZW50IG92ZXJmbG93IG9mIHRoZSBjb250YWluZXIgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIDMgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgYWxpZ25tZW50IG9uIG1lZGlhIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShhdWRpbywgY2FudmFzLCBpZnJhbWUsIGltZywgc3ZnLCB2aWRlbykge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaWZyYW1lcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lKSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgZmlsbCBjb2xvciB0byBtYXRjaCB0aGUgdGV4dCBjb2xvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc3ZnOm5vdChbZmlsbF0pKSB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29sbGFwc2UgYm9yZGVyIHNwYWNpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAzLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDMgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGZpZWxkc2V0KSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRldGFpbHMgPiBzdW1tYXJ5OmZpcnN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogQWNjZXNzaWJpbGl0eVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gYnVzeSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtYnVzeT1cXFwidHJ1ZVxcXCIgaV0pIHtcXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gY29udHJvbCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtY29udHJvbHNdKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gZGlzYWJsZWQsIG5vdC1lZGl0YWJsZSwgb3Igb3RoZXJ3aXNlXFxuICogaW5vcGVyYWJsZSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiIGldLCBbZGlzYWJsZWRdKSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgZGlzcGxheSBvbiB2aXN1YWxseSBoaWRkZW4gYWNjZXNzaWJsZSBlbGVtZW50c1xcbiAqIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dKSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXTpub3QoOmZvY3VzKSkge1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJXFxcIiksIGxvY2FsKFxcXCJVYnVudHVcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxzQkFBc0I7RUFDdEIscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5SUFBeUk7QUFDM0k7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlJQUFpSTtBQUNuSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBKQUEwSjtBQUM1SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSVxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1XFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tUmVndWxhclxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZFxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLyogbWFjT1MgMTAuMTEtMTAuMTIgKi8gLWFwcGxlLXN5c3RlbSxcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHVcXFwiLFxcbiAgICAvKiBHbm9tZSAzKyAqLyBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBTYW5zXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gc2Fucy1zZXJpZixcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCBtb25vc3BhY2UgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgdWktbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyAxMC4xMCsgKi8gXFxcIk1lbmxvXFxcIixcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiQ29uc29sYXNcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG8gTW9ub1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dSBNb25vc3BhY2VcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIE1vbm9cXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDQrICovIFxcXCJPeHlnZW4gTW9ub1xcXCIsXFxuICAgIC8qIExpbnV4L09wZW5PZmZpY2UgZmFsbGJhY2sgKi8gXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIG1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdHlwb2dyYXBoeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRTs7Ozs7Ozs7Ozs7O3dDQVlzQztBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFOzs7Ozs7Ozs7Ozs7O3dDQWFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICBzeXN0ZW0tdWksXFxuICAgIC8qIG1hY09TIDEwLjExLTEwLjEyICovIC1hcHBsZS1zeXN0ZW0sXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1XFxcIixcXG4gICAgLyogR25vbWUgMysgKi8gXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gU2Fuc1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIHNhbnMtc2VyaWYsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgbW9ub3NwYWNlIHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHVpLW1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgMTAuMTArICovIFxcXCJNZW5sb1xcXCIsXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIkNvbnNvbGFzXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvIE1vbm9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBNb25vXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA0KyAqLyBcXFwiT3h5Z2VuIE1vbm9cXFwiLFxcbiAgICAvKiBMaW51eC9PcGVuT2ZmaWNlIGZhbGxiYWNrICovIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBtb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhclxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ub1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9ub1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm9cXFwiKSwgbG9jYWwoXFxcIk1lbmxvXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhckl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIscUlBQXFJO0FBQ3ZJOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1S0FBdUs7QUFDeks7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNKQUFzSjtBQUN4Sjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFMQUFxTDtBQUN2TFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9ub1xcXCIpLCBsb2NhbChcXFwiTWVubG9cXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFySXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLm1vZGFsLXR3byxcXG4ubW9kYWwtdGhyZWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cubmljZXBuZy5jb20vcG5nL2RldGFpbC8xMy0xMzExNzhfZG93bmxvYWQtZW1vamktbW9ua2V5LW5vLWV2aWwtMy1way5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNHM7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzNzkyMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA0MDBweCA1MHB4IDQwMHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY2FsZS12aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNHM7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZXhwbGFuYXRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItb25lLWNvbnRhaW5lcixcXG4ucGxheWVyLXR3by1jb250YWluZXIge1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lLFxcbi5oaWRlLWJ1dHRvbi10d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZGUtYnV0dG9uLW9uZTpob3ZlcixcXG4uaGlkZS1idXR0b24tdHdvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTgzLCAyNTApO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmFjdGl2ZSxcXG4uaGlkZS1idXR0b24tdHdvOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDVweCBncmF5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG5oZWFkZXIsXFxuLmluZGljYXRvciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZWFmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XFxufVxcblxcbi5nYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1vbmUsXFxuLmNvbnRhaW5lci10d28ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICM0NjNmM2Y7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVkLWJvcmRlciB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG4uZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaXQtYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4ubWlzcy1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWY1ZDc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwR0FBMEc7RUFDMUcsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC40cztcXG59XFxuXFxuLm1vZGFsLXR3byxcXG4ubW9kYWwtdGhyZWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cubmljZXBuZy5jb20vcG5nL2RldGFpbC8xMy0xMzExNzhfZG93bmxvYWQtZW1vamktbW9ua2V5LW5vLWV2aWwtMy1way5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNHM7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzNzkyMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA0MDBweCA1MHB4IDQwMHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY2FsZS12aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNHM7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZXhwbGFuYXRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItb25lLWNvbnRhaW5lcixcXG4ucGxheWVyLXR3by1jb250YWluZXIge1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lLFxcbi5oaWRlLWJ1dHRvbi10d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZGUtYnV0dG9uLW9uZTpob3ZlcixcXG4uaGlkZS1idXR0b24tdHdvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMTgzLCAyNTApO1xcbn1cXG5cXG4uaGlkZS1idXR0b24tb25lOmFjdGl2ZSxcXG4uaGlkZS1idXR0b24tdHdvOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDVweCBncmF5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG5oZWFkZXIsXFxuLmluZGljYXRvciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZWFmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XFxufVxcblxcbi5nYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1vbmUsXFxuLmNvbnRhaW5lci10d28ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICM0NjNmM2Y7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVkLWJvcmRlciB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG4uZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5oaXQtYm9hdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4ubWlzcy1ib2F0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWY1ZDc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWR1Y2UtbW90aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWR1Y2UtbW90aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nhbml0aXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zYW5pdGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zeXN0ZW0tdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N5c3RlbS11aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLW1vbm9zcGFjZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWktbW9ub3NwYWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2hpcE1ha2VyIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgZ2FtZWJvYXJkTWFrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHt9O1xuICBnYW1lYm9hcmQuc2hpcHMgPSBbXTtcbiAgZ2FtZWJvYXJkLnBsYXlzID0gW107XG4gIGdhbWVib2FyZC5wb3NpdGlvbnMgPSBbXTtcbiAgZ2FtZWJvYXJkLnRvdWNoID0gW107XG4gIGdhbWVib2FyZC5wbGFjZSA9ICh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwTWFrZXIobGVuZ3RoLCBoaXRzLCBzdW5rKTtcbiAgICBzaGlwLngxID0geDtcbiAgICBzaGlwLnkxID0geTtcbiAgICBzaGlwLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBgdmApIHtcbiAgICAgIGlmIChcbiAgICAgICAgKHNoaXAueTEgPT09IDkgJiYgbGVuZ3RoID4gMSkgfHxcbiAgICAgICAgKHNoaXAueTEgPT09IDggJiYgbGVuZ3RoID4gMikgfHxcbiAgICAgICAgKHNoaXAueTEgPT09IDcgJiYgbGVuZ3RoID4gMykgfHxcbiAgICAgICAgKHNoaXAueTEgPT09IDYgJiYgbGVuZ3RoID4gNClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gMiwgaiA9IDE7IGkgPD0gc2hpcC5sZW5ndGg7IGkgKz0gMSwgaiArPSAxKSB7XG4gICAgICAgICAgc2hpcFtgeSR7aX1gXSA9IHkgLSBqO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMiwgaiA9IDE7IGkgPD0gc2hpcC5sZW5ndGg7IGkgKz0gMSwgaiArPSAxKSB7XG4gICAgICAgICAgc2hpcFtgeSR7aX1gXSA9IHkgKyBqO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09IGBoYCkge1xuICAgICAgaWYgKFxuICAgICAgICAoc2hpcC54MSA9PT0gOSAmJiBsZW5ndGggPiAxKSB8fFxuICAgICAgICAoc2hpcC54MSA9PT0gOCAmJiBsZW5ndGggPiAyKSB8fFxuICAgICAgICAoc2hpcC54MSA9PT0gNyAmJiBsZW5ndGggPiAzKSB8fFxuICAgICAgICAoc2hpcC54MSA9PT0gNiAmJiBsZW5ndGggPiA0KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B4JHtpfWBdID0geCAtIGo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyLCBqID0gMTsgaSA8PSBzaGlwLmxlbmd0aDsgaSArPSAxLCBqICs9IDEpIHtcbiAgICAgICAgICBzaGlwW2B4JHtpfWBdID0geCArIGo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2FtZWJvYXJkLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5zaGlwcztcbiAgfTtcbiAgZ2FtZWJvYXJkLnJlbW92ZSA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmQuc2hpcHMucG9wKCk7XG4gIH07XG4gIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrID0gKHgsIHksIGlkZW50aXR5KSA9PiB7XG4gICAgbGV0IHRvdWNoID0gbnVsbDtcbiAgICBpZiAoaWRlbnRpdHkgPT09IGBjb21wdXRlcmApIHtcbiAgICAgIGNvbnN0IHJlc3RyaWN0TW92ZSA9IGdhbWVib2FyZC5wb3NpdGlvbnMuZmluZEluZGV4KFxuICAgICAgICAocG9zaXRpb24pID0+IHBvc2l0aW9uWzBdID09PSB4ICYmIHBvc2l0aW9uWzFdID09PSB5XG4gICAgICApO1xuICAgICAgZ2FtZWJvYXJkLnBvc2l0aW9ucy5zcGxpY2UocmVzdHJpY3RNb3ZlLCAxKTtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLnNoaXBzLm1hcCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAoc2hpcC54MSA9PT0geCB8fFxuICAgICAgICAgIHNoaXAueDIgPT09IHggfHxcbiAgICAgICAgICBzaGlwLngzID09PSB4IHx8XG4gICAgICAgICAgc2hpcC54NCA9PT0geCB8fFxuICAgICAgICAgIHNoaXAueDUgPT09IHgpICYmXG4gICAgICAgIChzaGlwLnkxID09PSB5IHx8XG4gICAgICAgICAgc2hpcC55MiA9PT0geSB8fFxuICAgICAgICAgIHNoaXAueTMgPT09IHkgfHxcbiAgICAgICAgICBzaGlwLnk0ID09PSB5IHx8XG4gICAgICAgICAgc2hpcC55NSA9PT0geSlcbiAgICAgICkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSA9PT0gMCkge1xuICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLnRvdWNoLnB1c2goW3gsIHldKTtcbiAgICAgICAgdG91Y2ggPSBzaGlwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0pO1xuICAgIGdhbWVib2FyZC5wbGF5cy5wdXNoKFt4LCB5XSk7XG4gICAgcmV0dXJuIHRvdWNoO1xuICB9O1xuICBnYW1lYm9hcmQuZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZVN0YXRlID0gZ2FtZWJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5zdW5rID09PSBmYWxzZSk7XG4gICAgaWYgKGdhbWVTdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBgR2FtZSBPdmVyYDtcbiAgICB9XG4gICAgcmV0dXJuIGBHYW1lIE9uYDtcbiAgfTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZE1ha2VyO1xuIiwiZXhwb3J0IGNvbnN0IHBsYXllck1ha2VyID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSB7fTtcbiAgcGxheWVyLmlkZW50aXR5ID0gYHBsYXllcmA7XG4gIHBsYXllci5wbGF5ID0gKGdhbWVib2FyZCwgeCwgeSkgPT4ge1xuICAgIC8vIGNoYW5nZWQgbGF0ZXJcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5LCBwbGF5ZXIuaWRlbnRpdHkpO1xuICAgIHJldHVybiBnYW1lYm9hcmQucGxheXMuc29tZSgocGxheSkgPT4gcGxheVswXSA9PT0geCAmJiBwbGF5WzFdID09PSB5KTtcbiAgfTtcbiAgcmV0dXJuIHBsYXllcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlck1ha2VyID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSB7fTtcbiAgcGxheWVyLmlkZW50aXR5ID0gYGNvbXB1dGVyYDtcbiAgcGxheWVyLnBsYXkgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgbGV0IFBvc1xuICAgIGlmIChwbGF5ZXIudGVzdGluZykge1xuICAgICAgUG9zID0gWzEsIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBQb3MgPSBnYW1lYm9hcmQucG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5wb3NpdGlvbnMubGVuZ3RoKV07XG4gICAgfVxuICAgIGlmIChQb3MgPT09IHVuZGVmaW5lZCkge3JldHVybiBmYWxzZX1cbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhQb3NbMF0sIFBvc1sxXSwgcGxheWVyLmlkZW50aXR5KTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnBsYXlzLnNvbWUoXG4gICAgICAocGxheSkgPT4gcGxheVswXSA9PT0gUG9zWzBdICYmIHBsYXlbMV0gPT09IFBvc1sxXVxuICAgICk7XG4gIH07XG4gIHJldHVybiBwbGF5ZXI7XG59O1xuIiwiaW1wb3J0IGdhbWVib2FyZE1ha2VyIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxheWVyTWFrZXIsIGNvbXB1dGVyTWFrZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcbmNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldC1idXR0b25cIik7XG5jb25zdCBvcHBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtYnV0dG9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3Qgc2hpcFBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIik7XG5jb25zdCBzZWxlY3Rpb25Db250YWluZXJPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtY29udGFpbmVyXCIpO1xuY29uc3Qgc2VsZWN0aW9uQ29udGFpbmVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNvbnRhaW5lck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW9uZVwiKTtcbmNvbnN0IGNvbnRhaW5lclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXR3b1wiKTtcbmNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kaWNhdG9yXCIpO1xuY29uc3QgcGxheWVyVHdvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d29cIik7XG5jb25zdCBoaWRlQnV0dG9uT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlLWJ1dHRvbi1vbmVcIik7XG5jb25zdCBoaWRlQnV0dG9uVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlLWJ1dHRvbi10d29cIik7XG5jb25zdCBtb2RhbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdHdvXCIpO1xuY29uc3QgbW9kYWxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGhyZWVcIik7XG5cbmxldCBHYW1lYm9hcmRPbmU7XG5sZXQgR2FtZWJvYXJkVHdvO1xubGV0IHBsYXllck9uZTtcbmxldCBwbGF5ZXJUd287XG5sZXQgY291bnRlck9uZSA9IDU7XG5sZXQgY291bnRlclR3byA9IDU7XG5cbmNvbnN0IGNvbXB1dGVyU2hpcHNSYW5kb21pemVyID0gKCkgPT4ge1xuICBsZXQgZHVwbGljYXRlWCA9IFtdO1xuICBsZXQgZHVwbGljYXRlWSA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBbMSwgMiwgMywgNCwgNV07XG4gIGZvciAobGV0IGkgPSAxLCBqID0gNTsgaSA8PSBqOyBpICs9IDEpIHtcbiAgICBjb25zdCBQb3MgPVxuICAgICAgR2FtZWJvYXJkVHdvLnBvc2l0aW9uc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR2FtZWJvYXJkVHdvLnBvc2l0aW9ucy5sZW5ndGgpXG4gICAgICBdO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFtgaGAsIGB2YF07XG4gICAgY29uc3QgcmFuZG9tUG9zaXRpb25YID0gUG9zWzBdO1xuICAgIGNvbnN0IHJhbmRvbVBvc2l0aW9uWSA9IFBvc1sxXTtcbiAgICBjb25zdCByYW5kb21MZW5ndGggPSBsZW5ndGhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoLmxlbmd0aCldO1xuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9XG4gICAgICBkaXJlY3Rpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9uLmxlbmd0aCldO1xuXG4gICAgR2FtZWJvYXJkVHdvLnBsYWNlKFxuICAgICAgcmFuZG9tUG9zaXRpb25YLFxuICAgICAgcmFuZG9tUG9zaXRpb25ZLFxuICAgICAgcmFuZG9tTGVuZ3RoLFxuICAgICAgcmFuZG9tRGlyZWN0aW9uXG4gICAgKTtcbiAgICBjb25zdCBsYXN0U2hpcCA9IEdhbWVib2FyZFR3by5zaGlwc1tHYW1lYm9hcmRUd28uc2hpcHMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGR1cGxpY2F0ZVgubGVuZ3RoICE9PSAwICYmIGR1cGxpY2F0ZVkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCB0ZXN0MSA9IGR1cGxpY2F0ZVguc29tZShcbiAgICAgICAgKHZhbHVlKSA9PlxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC54MSB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC54MiB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC54MyB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC54NCB8fFxuICAgICAgICAgIHZhbHVlID09PSBsYXN0U2hpcC54NVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRlc3QyID0gZHVwbGljYXRlWS5zb21lKFxuICAgICAgICAodmFsdWUpID0+XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLnkxIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLnkyIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLnkzIHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLnk0IHx8XG4gICAgICAgICAgdmFsdWUgPT09IGxhc3RTaGlwLnk1XG4gICAgICApO1xuICAgICAgaWYgKHRlc3QxICYmIHRlc3QyKSB7XG4gICAgICAgIEdhbWVib2FyZFR3by5yZW1vdmUoKTtcbiAgICAgICAgaiArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoVG9SZW1vdmUgPSBsZW5ndGguZmluZEluZGV4KFxuICAgICAgICAgIChyZW1vdmFibGVMZW5ndGgpID0+IHJlbW92YWJsZUxlbmd0aCA9PT0gcmFuZG9tTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGxlbmd0aC5zcGxpY2UobGVuZ3RoVG9SZW1vdmUsIDEpO1xuXG4gICAgICAgIGR1cGxpY2F0ZVgucHVzaChcbiAgICAgICAgICBsYXN0U2hpcC54MSxcbiAgICAgICAgICBsYXN0U2hpcC54MixcbiAgICAgICAgICBsYXN0U2hpcC54MyxcbiAgICAgICAgICBsYXN0U2hpcC54NCxcbiAgICAgICAgICBsYXN0U2hpcC54NVxuICAgICAgICApO1xuICAgICAgICBkdXBsaWNhdGVZLnB1c2goXG4gICAgICAgICAgbGFzdFNoaXAueTEsXG4gICAgICAgICAgbGFzdFNoaXAueTIsXG4gICAgICAgICAgbGFzdFNoaXAueTMsXG4gICAgICAgICAgbGFzdFNoaXAueTQsXG4gICAgICAgICAgbGFzdFNoaXAueTVcbiAgICAgICAgKTtcbiAgICAgICAgZHVwbGljYXRlWCA9IGR1cGxpY2F0ZVguZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIGR1cGxpY2F0ZVkgPSBkdXBsaWNhdGVZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZW5ndGhUb1JlbW92ZSA9IGxlbmd0aC5maW5kSW5kZXgoXG4gICAgICAgIChyZW1vdmFibGVMZW5ndGgpID0+IHJlbW92YWJsZUxlbmd0aCA9PT0gcmFuZG9tTGVuZ3RoXG4gICAgICApO1xuICAgICAgbGVuZ3RoLnNwbGljZShsZW5ndGhUb1JlbW92ZSwgMSk7XG5cbiAgICAgIGR1cGxpY2F0ZVgucHVzaChcbiAgICAgICAgbGFzdFNoaXAueDEsXG4gICAgICAgIGxhc3RTaGlwLngyLFxuICAgICAgICBsYXN0U2hpcC54MyxcbiAgICAgICAgbGFzdFNoaXAueDQsXG4gICAgICAgIGxhc3RTaGlwLng1XG4gICAgICApO1xuICAgICAgZHVwbGljYXRlWS5wdXNoKFxuICAgICAgICBsYXN0U2hpcC55MSxcbiAgICAgICAgbGFzdFNoaXAueTIsXG4gICAgICAgIGxhc3RTaGlwLnkzLFxuICAgICAgICBsYXN0U2hpcC55NCxcbiAgICAgICAgbGFzdFNoaXAueTVcbiAgICAgICk7XG4gICAgICBkdXBsaWNhdGVYID0gZHVwbGljYXRlWC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIGR1cGxpY2F0ZVkgPSBkdXBsaWNhdGVZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2FtZSA9IChkaXYpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5tYXRjaCgvXFxkKy8pWzBdLmNoYXJBdCgwKTtcbiAgICBjb25zdCB5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMSk7XG4gICAgaWYgKGNvbnRhaW5lck9uZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGNvbnRhaW5lck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLWJvcmRlclwiKTtcbiAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJyZWQtYm9yZGVyXCIpO1xuICAgICAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYHBsYXllcmApIHtcbiAgICAgICAgaWYgKEdhbWVib2FyZFR3by5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJUd28ucGxheShHYW1lYm9hcmRPbmUsIE51bWJlcih4KSwgTnVtYmVyKHkpKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEdhbWVib2FyZE9uZS50b3VjaC5zb21lKFxuICAgICAgICAgICAgKG1vdmUpID0+IG1vdmVbMF0gPT09IE51bWJlcih4KSAmJiBtb3ZlWzFdID09PSBOdW1iZXIoeSlcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMiBoaXQgUGxheWVyIDEhYDtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0LWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDIgbWlzc2VkIWA7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3MtYm9hdFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHYW1lYm9hcmRPbmUuZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDIgd29uIWA7XG4gICAgICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgICAgICBpZiAoR2FtZWJvYXJkVHdvLmdhbWVPdmVyKCkgPT09IGBHYW1lIE92ZXJgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gR2FtZWJvYXJkT25lLnBsYXlzW0dhbWVib2FyZE9uZS5wbGF5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEdhbWVib2FyZE9uZS50b3VjaC5zb21lKFxuICAgICAgICAgICAgKG1vdmUpID0+IG1vdmVbMF0gPT09IGxhc3RNb3ZlWzBdICYmIG1vdmVbMV0gPT09IGxhc3RNb3ZlWzFdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBDb21wdXRlciBoaXQgUGxheWVyIDEhYDtcbiAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdC1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgQ29tcHV0ZXIgbWlzc2VkIWA7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzcy1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWVib2FyZE9uZS5nYW1lT3ZlcigpID09PSBgR2FtZSBPdmVyYCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYENvbXB1dGVyIHdvbiFgO1xuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGFpbmVyVHdvLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJyZWQtYm9yZGVyXCIpO1xuICAgICAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLWJvcmRlclwiKTtcbiAgICAgIGNvbnRhaW5lclR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgIHBsYXllck9uZS5wbGF5KEdhbWVib2FyZFR3bywgTnVtYmVyKHgpLCBOdW1iZXIoeSkpO1xuICAgICAgaWYgKFxuICAgICAgICBHYW1lYm9hcmRUd28udG91Y2guc29tZShcbiAgICAgICAgICAobW92ZSkgPT4gbW92ZVswXSA9PT0gTnVtYmVyKHgpICYmIG1vdmVbMV0gPT09IE51bWJlcih5KVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYXllclR3by5pZGVudGl0eSA9PT0gYGNvbXB1dGVyYCkge1xuICAgICAgICAgIGluZGljYXRvci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBoaXQgQ29tcHV0ZXIhYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDEgaGl0IFBsYXllciAyIWA7XG4gICAgICAgIH1cbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdC1ib2F0XCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2F0b3IuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBgUGxheWVyIDEgbWlzc2VkIWA7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLWJvYXRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChHYW1lYm9hcmRUd28uZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgaW5kaWNhdG9yLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gYFBsYXllciAxIHdvbiFgO1xuICAgICAgICBjb250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICBjb250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgY29tcHV0ZXJgKSB7XG4gICAgICAgIGlmIChHYW1lYm9hcmRUd28uZ2FtZU92ZXIoKSA9PT0gYEdhbWUgT3ZlcmApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyVHdvLnBsYXkoR2FtZWJvYXJkT25lKTtcbiAgICAgICAgY29uc3QgbGFzdE1vdmUgPSBHYW1lYm9hcmRPbmUucGxheXNbR2FtZWJvYXJkT25lLnBsYXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NsaWNrID0gY29udGFpbmVyT25lLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke2xhc3RNb3ZlWzBdfSR7bGFzdE1vdmVbMV19YFxuICAgICAgICApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzcXVhcmVUb0NsaWNrLmNsaWNrKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNvbG9yU2hpcHMgPSAoZ2FtZWJvYXJkLCBjb250YWluZXIpID0+IHtcbiAgZ2FtZWJvYXJkLnNoaXBzLm1hcCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JPbmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuc3F1YXJlJHtzaGlwLngxfSR7c2hpcC55MX1gXG4gICAgKTtcbiAgICBzcXVhcmVUb0NvbG9yT25lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IGBoYCkge1xuICAgICAgaWYgKHNoaXAueDIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yVHdvID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDJ9JHtzaGlwLnkxfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvclR3by5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC54MyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JUaHJlZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngzfSR7c2hpcC55MX1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JUaHJlZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC54NCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JGb3VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDR9JHtzaGlwLnkxfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvckZvdXIuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueDUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yRml2ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLng1fSR7c2hpcC55MX1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JGaXZlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNoaXAueTIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yVHdvID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDF9JHtzaGlwLnkyfWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvclR3by5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC55MyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JUaHJlZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngxfSR7c2hpcC55M31gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JUaHJlZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zcXVhcmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC55NCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVRvQ29sb3JGb3VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5zcXVhcmUke3NoaXAueDF9JHtzaGlwLnk0fWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlVG9Db2xvckZvdXIuY2xhc3NMaXN0LmFkZChcInNoaXAtc3F1YXJlXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAueTUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzcXVhcmVUb0NvbG9yRml2ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuc3F1YXJlJHtzaGlwLngxfSR7c2hpcC55NX1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZVRvQ29sb3JGaXZlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNxdWFyZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXA7XG4gIH0pO1xufTtcblxuY29uc3Qgc2VsZWN0aW9uID0gKGRpdiwgY29udGFpbmVyKSA9PiB7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMCk7XG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDEpO1xuICAgIGlmIChjb250YWluZXIgPT09IHNlbGVjdGlvbkNvbnRhaW5lck9uZSkge1xuICAgICAgaWYgKGNvdW50ZXJPbmUgPT09IDApIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgR2FtZWJvYXJkT25lLnBsYWNlKE51bWJlcih4KSwgTnVtYmVyKHkpLCBjb3VudGVyT25lLCBgaGApO1xuICAgICAgY29sb3JTaGlwcyhHYW1lYm9hcmRPbmUsIHNlbGVjdGlvbkNvbnRhaW5lck9uZSk7XG4gICAgICBjb3VudGVyT25lIC09IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluZXIgPT09IHNlbGVjdGlvbkNvbnRhaW5lclR3bykge1xuICAgICAgaWYgKGNvdW50ZXJUd28gPT09IDApIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgR2FtZWJvYXJkVHdvLnBsYWNlKE51bWJlcih4KSwgTnVtYmVyKHkpLCBjb3VudGVyVHdvLCBgaGApO1xuICAgICAgY29sb3JTaGlwcyhHYW1lYm9hcmRUd28sIHNlbGVjdGlvbkNvbnRhaW5lclR3byk7XG4gICAgICBjb3VudGVyVHdvIC09IDE7XG4gICAgfVxuICB9KTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikubWF0Y2goL1xcZCsvKVswXS5jaGFyQXQoMCk7XG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLm1hdGNoKC9cXGQrLylbMF0uY2hhckF0KDEpO1xuXG4gICAgaWYgKGNvbnRhaW5lciA9PT0gc2VsZWN0aW9uQ29udGFpbmVyT25lKSB7XG4gICAgICBpZiAoY291bnRlck9uZSA9PT0gMCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBHYW1lYm9hcmRPbmUucGxhY2UoTnVtYmVyKHgpLCBOdW1iZXIoeSksIGNvdW50ZXJPbmUsIGB2YCk7XG4gICAgICBjb2xvclNoaXBzKEdhbWVib2FyZE9uZSwgc2VsZWN0aW9uQ29udGFpbmVyT25lKTtcbiAgICAgIGNvdW50ZXJPbmUgLT0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gc2VsZWN0aW9uQ29udGFpbmVyVHdvKSB7XG4gICAgICBpZiAoY291bnRlclR3byA9PT0gMCkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBHYW1lYm9hcmRUd28ucGxhY2UoTnVtYmVyKHgpLCBOdW1iZXIoeSksIGNvdW50ZXJUd28sIGB2YCk7XG4gICAgICBjb2xvclNoaXBzKEdhbWVib2FyZFR3bywgc2VsZWN0aW9uQ29udGFpbmVyVHdvKTtcbiAgICAgIGNvdW50ZXJUd28gLT0gMTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcG9wdWxhdGVTcXVhcmUgPSAoY29udGFpbmVyLCBnYW1lYm9hcmQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgcm93JHtpfWAsIGByb3dgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGlmIChjb250YWluZXIgPT09IGNvbnRhaW5lck9uZSB8fCBjb250YWluZXIgPT09IGNvbnRhaW5lclR3bykge1xuICAgICAgICBnYW1lYm9hcmQucG9zaXRpb25zLnB1c2goW2osIGldKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYHNxdWFyZSR7an0ke2l9YCwgYHNxdWFyZWApO1xuICAgICAgICBnYW1lKGRpdik7XG4gICAgICAgIGNvbnN0IHJvdyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAucm93JHtpfWApO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGBzcXVhcmUke2p9JHtpfWAsIGBzcXVhcmVgKTtcbiAgICAgICAgc2VsZWN0aW9uKGRpdiwgY29udGFpbmVyKTtcbiAgICAgICAgY29uc3Qgcm93ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5yb3cke2l9YCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY2hvb3NlT3Bwb25lbnQgPSAoKSA9PiB7XG4gIGlmIChvcHBvbmVudC50ZXh0Q29udGVudCA9PT0gYFBsYXllcmApIHtcbiAgICBvcHBvbmVudC50ZXh0Q29udGVudCA9IGBDb21wdXRlcmA7XG4gICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSBgUGxheWVyIDJgO1xuICAgIHBsYXllclR3byA9IHBsYXllck1ha2VyKCk7XG4gIH0gZWxzZSB7XG4gICAgb3Bwb25lbnQudGV4dENvbnRlbnQgPSBgUGxheWVyYDtcbiAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9IGBDb21wdXRlcmA7XG4gICAgcGxheWVyVHdvID0gY29tcHV0ZXJNYWtlcigpO1xuICB9XG59O1xuXG5jb25zdCByZXNldGVyID0gKCkgPT4ge1xuICBjb3VudGVyT25lID0gNTtcbiAgY291bnRlclR3byA9IDU7XG4gIGNvbnRhaW5lck9uZS5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluZXJUd28uaW5uZXJIVE1MID0gXCJcIjtcbiAgc2VsZWN0aW9uQ29udGFpbmVyT25lLmlubmVySFRNTCA9IFwiXCI7XG4gIHNlbGVjdGlvbkNvbnRhaW5lclR3by5pbm5lckhUTUwgPSBcIlwiO1xuICBzZWxlY3Rpb25Db250YWluZXJPbmUuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICBzZWxlY3Rpb25Db250YWluZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICBjb250YWluZXJPbmUuY2xhc3NMaXN0LnJlbW92ZShcInJlZC1ib3JkZXJcIiwgXCJkaXNhYmxlZFwiKTtcbiAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWQtYm9yZGVyXCIsIFwiZGlzYWJsZWRcIik7XG59O1xuXG5jb25zdCBpbml0aWF0ZUdhbWUgPSAoKSA9PiB7XG4gIHJlc2V0ZXIoKTtcbiAgR2FtZWJvYXJkT25lID0gZ2FtZWJvYXJkTWFrZXIoKTtcbiAgR2FtZWJvYXJkVHdvID0gZ2FtZWJvYXJkTWFrZXIoKTtcbiAgcGxheWVyT25lID0gcGxheWVyTWFrZXIoKTtcbiAgcG9wdWxhdGVTcXVhcmUoY29udGFpbmVyT25lLCBHYW1lYm9hcmRPbmUpO1xuICBwb3B1bGF0ZVNxdWFyZShjb250YWluZXJUd28sIEdhbWVib2FyZFR3byk7XG4gIGlmIChwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9PT0gYFBsYXllciAyYCkge1xuICAgIHBsYXllclR3byA9IHBsYXllck1ha2VyKCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyVHdvID0gY29tcHV0ZXJNYWtlcigpO1xuICB9XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzY2FsZS12aXNpYmxlXCIpO1xuICBzaGlwUGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgcGxheWVyYCkge1xuICAgIHBvcHVsYXRlU3F1YXJlKHNlbGVjdGlvbkNvbnRhaW5lck9uZSk7XG4gICAgcG9wdWxhdGVTcXVhcmUoc2VsZWN0aW9uQ29udGFpbmVyVHdvKTtcbiAgfVxuICBpZiAocGxheWVyVHdvLmlkZW50aXR5ID09PSBgY29tcHV0ZXJgKSB7XG4gICAgcG9wdWxhdGVTcXVhcmUoc2VsZWN0aW9uQ29udGFpbmVyT25lKTtcbiAgICBjb21wdXRlclNoaXBzUmFuZG9taXplcigpO1xuICB9XG59O1xuXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbml0aWF0ZUdhbWUoKTtcbiAgcmVzZXQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICBzdGFydC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG59KTtcblxucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5pdGlhdGVHYW1lKCk7XG59KTtcblxub3Bwb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgY29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgY2hvb3NlT3Bwb25lbnQoKTtcbn0pO1xuXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZS12aXNpYmxlXCIpO1xuICB9XG59KTtcblxuaGlkZUJ1dHRvbk9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaGlkZUJ1dHRvbk9uZS50ZXh0Q29udGVudCA9PT0gYEhpZGVgKSB7XG4gICAgbW9kYWxUd28uY2xhc3NMaXN0LmFkZChcInNjYWxlLXZpc2libGVcIik7XG4gICAgaGlkZUJ1dHRvbk9uZS50ZXh0Q29udGVudCA9IGBTaG93YDtcbiAgfSBlbHNlIHtcbiAgICBtb2RhbFR3by5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgICBoaWRlQnV0dG9uT25lLnRleHRDb250ZW50ID0gYEhpZGVgO1xuICB9XG59KTtcblxuaGlkZUJ1dHRvblR3by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaGlkZUJ1dHRvblR3by50ZXh0Q29udGVudCA9PT0gYEhpZGVgKSB7XG4gICAgbW9kYWxUaHJlZS5jbGFzc0xpc3QuYWRkKFwic2NhbGUtdmlzaWJsZVwiKTtcbiAgICBoaWRlQnV0dG9uVHdvLnRleHRDb250ZW50ID0gYFNob3dgO1xuICB9IGVsc2Uge1xuICAgIG1vZGFsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZShcInNjYWxlLXZpc2libGVcIik7XG4gICAgaGlkZUJ1dHRvblR3by50ZXh0Q29udGVudCA9IGBIaWRlYDtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgcG9wdWxhdGVTcXVhcmUgfTtcbiIsImNvbnN0IHNoaXBNYWtlciA9IChsZW5ndGgsIGhpdHMsIHN1bmspID0+IHtcbiAgICBjb25zdCBzaGlwID0ge2xlbmd0aCwgaGl0cywgc3Vua31cbiAgICBzaGlwLmhpdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcC5oaXRzICs9IDFcbiAgICAgICAgcmV0dXJuIHNoaXAuaGl0c1xuICAgIH1cbiAgICBzaGlwLmlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaHAgPSBzaGlwLmxlbmd0aCAtIHNoaXAuaGl0c1xuICAgICAgICBpZihocCA9PT0gMCkge3NoaXAuc3VuayA9IHRydWV9XG4gICAgICAgIHJldHVybiBocFxuICAgIH1cbiAgICByZXR1cm4gc2hpcFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcE1ha2VyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcInNhbml0aXplLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL2Zvcm1zLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL2Fzc2V0cy5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3Mvc3lzdGVtLXVpLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBnYW1lYm9hcmRNYWtlciBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBzaGlwTWFrZXIgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHBvcHVsYXRlU3F1YXJlIGZyb20gXCIuL3BvcHVsYXRlXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=