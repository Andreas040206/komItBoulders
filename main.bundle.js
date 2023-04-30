"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/bouldersBg.jpg */ "./src/Img/bouldersBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.hallerContentCon {\n  gap: 120px;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  width: max(400px, 48%);\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 3px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: max(350px, 80%);\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\nbody {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.hallerContentCon {\n  gap: 120px;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  width: max(400px, 48%);\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 3px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: max(350px, 80%);\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Pages/events.js":
/*!*****************************!*\
  !*** ./src/Pages/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageCreater */ "./src/pageCreater.js");
/* harmony import */ var _Img_lateNightBouldering_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Img/lateNightBouldering.jpg */ "./src/Img/lateNightBouldering.jpg");
/* harmony import */ var _Img_studentFriday_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/studentFriday.png */ "./src/Img/studentFriday.png");
/* harmony import */ var _Img_climathon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/climathon.jpg */ "./src/Img/climathon.jpg");
/* harmony import */ var _Img_sunnySaturday_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Img/sunnySaturday.jpg */ "./src/Img/sunnySaturday.jpg");


// Img





const createEvents = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  const lateNightBouldering = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Late Night Bouldering",
    _Img_lateNightBouldering_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "https://boulders.dk/lnb"
  );

  const studentFriday = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Student Friday",
    _Img_studentFriday_png__WEBPACK_IMPORTED_MODULE_2__,
    "https://boulders.dk/studentfriday"
  );

  const climbathon = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Climbathon",
    _Img_climathon_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "https://boulders.dk/climbathon"
  );

  const sunnySaturday = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Sunny Saturday",
    _Img_sunnySaturday_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "https://boulders.dk/sunnysaturday"
  );

  content.appendChild(lateNightBouldering.el());
  content.appendChild(studentFriday.el());
  content.appendChild(climbathon.el());
  content.appendChild(sunnySaturday.el());

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEvents);


/***/ }),

/***/ "./src/Pages/haller.js":
/*!*****************************!*\
  !*** ./src/Pages/haller.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageCreater */ "./src/pageCreater.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./src/controller.js");
/* harmony import */ var _Img_aarhusNord_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/aarhusNord.jpg */ "./src/Img/aarhusNord.jpg");
/* harmony import */ var _Img_aarhusCity_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/aarhusCity.jpg */ "./src/Img/aarhusCity.jpg");
/* harmony import */ var _Img_odense_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Img/odense.jpeg */ "./src/Img/odense.jpeg");
/* harmony import */ var _Img_aarhusSyd_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Img/aarhusSyd.jpg */ "./src/Img/aarhusSyd.jpg");
/* harmony import */ var _Img_hvidovre_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Img/hvidovre.jpg */ "./src/Img/hvidovre.jpg");
/* harmony import */ var _Img_kbhSydhavn_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Img/kbhSydhavn.jpg */ "./src/Img/kbhSydhavn.jpg");
/* harmony import */ var _Img_valby_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Img/valby.jpg */ "./src/Img/valby.jpg");











const createHallerpage = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon", "hallerContentCon");

  // Creating the upper part with text and map
  const firstpartCon = document.createElement("div");
  firstpartCon.classList.add("partTopHaller");

  // Creating RIGHT! part
  const firstpartRightCon = document.createElement("div");
  firstpartRightCon.classList.add("partOfTopCon");

  const hallerIntroTextHeader = document.createElement("span");
  hallerIntroTextHeader.classList.add("hallerIntroTextHeader", "thickText");
  hallerIntroTextHeader.textContent = "Haller";

  const underlineHallerHeader = document.createElement("div");
  underlineHallerHeader.classList.add("underlineHallerHeader");

  const hallerIntroText = document.createElement("span");
  hallerIntroText.classList.add("hallerIntroText", "notThickText");
  hallerIntroText.textContent =
    "Vores haller ligger over hele landet og er aaben for baade dig og dine venner, vi glaeder os til at se dig. Alle vores haller har aaben paa samme tid, saa alle tider gaelder i alle halder";

  const aabningstiderHeader = document.createElement("span");
  aabningstiderHeader.classList.add("hallerIntroTextHeader", "thickText");
  aabningstiderHeader.textContent = "Åbningstider";

  const underlineHallerHeader2 = document.createElement("div");
  underlineHallerHeader2.classList.add("underlineHallerHeader");

  const aabningstiderText = document.createElement("span");
  aabningstiderText.classList.add("thickText", "aabningtiderText");
  aabningstiderText.textContent = "Fra 10 - 22 Hver dag!";

  firstpartRightCon.appendChild(hallerIntroTextHeader);
  firstpartRightCon.appendChild(underlineHallerHeader);
  firstpartRightCon.appendChild(hallerIntroText);
  firstpartRightCon.appendChild(aabningstiderHeader);
  firstpartRightCon.appendChild(underlineHallerHeader2);
  firstpartRightCon.appendChild(aabningstiderText);

  // Creating LEFT! part
  const firstpartLeftCon = document.createElement("div");
  firstpartLeftCon.classList.add("partOfTopCon");

  const mapText = document.createElement("span");
  mapText.classList.add("thickText", "mapTextHaller");
  mapText.textContent =
    "Her kan du se et kort over alle vores forskellige afdelinger";

  const mapsMap = document.createElement("iframe");
  mapsMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1140432.468495451!2d10.726707994972438!3d56.0635636077771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sboulders!5e0!3m2!1sen!2sdk!4v1682772369415!5m2!1sen!2sdk"
  );
  mapsMap.classList.add("mapsMapHaller");

  firstpartLeftCon.appendChild(mapText);
  firstpartLeftCon.appendChild(mapsMap);

  // Appending both sides
  firstpartCon.appendChild(firstpartRightCon);
  firstpartCon.appendChild(firstpartLeftCon);

  // Creating lowerpart
  const secondpartCon = document.createElement("div");
  secondpartCon.classList.add("partBottomHaller");

  const hallerLinkText = document.createElement("span");
  hallerLinkText.classList.add("hallerLinkText", "thickText");
  hallerLinkText.textContent =
    "Herunder kan du laese mere om de forskellige haller";

  const underlineHallerBottom = document.createElement("div");
  underlineHallerBottom.classList.add(
    "underlineHallerHeader",
    "underlineHallerBottom"
  );

  // Creating hallerlink container
  const hallerLinkCon = document.createElement("div");
  hallerLinkCon.classList.add("hallerLinkCon");

  const aarhusNordCon = document.createElement("div");
  aarhusNordCon.classList.add("hallerFrame");

  aarhusNordCon.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_1__.btnActivation.pageSwitch("aarhusNord");
  });

  const aarhusNordEl = document.createElement("a");
  aarhusNordEl.classList.add("holdImgFrame");

  const aarhusNordBg = new Image();
  aarhusNordBg.src = _Img_aarhusNord_jpg__WEBPACK_IMPORTED_MODULE_2__;
  aarhusNordBg.classList.add("holdBgImg");

  const header = document.createElement("span");
  header.classList.add("thickText", "holdImgHeader");
  header.textContent = "Aarhus Nord";

  aarhusNordEl.appendChild(aarhusNordBg);
  aarhusNordEl.appendChild(header);

  aarhusNordCon.appendChild(aarhusNordEl);

  const aarhusCityCon = document.createElement("a");
  aarhusCityCon.classList.add("hallerFrame");

  const aarhusCityLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Aarhus City",
    _Img_aarhusCity_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "https://boulders.dk/aarhusc"
  );

  aarhusCityCon.appendChild(aarhusCityLink.el());

  const odenseLinkCon = document.createElement("div");
  odenseLinkCon.classList.add("hallerFrame");

  const odenseLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Odense",
    _Img_odense_jpeg__WEBPACK_IMPORTED_MODULE_4__,
    "https://boulders.dk/odense"
  );

  odenseLinkCon.appendChild(odenseLink.el());

  const aarhusSydCon = document.createElement("div");
  aarhusSydCon.classList.add("hallerFrame");

  const aarhusSydLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Aarhus Syd",
    _Img_aarhusSyd_jpg__WEBPACK_IMPORTED_MODULE_5__,
    "https://boulders.dk/aarhussyd"
  );

  aarhusSydCon.appendChild(aarhusSydLink.el());

  const hvidovreCon = document.createElement("div");
  hvidovreCon.classList.add("hallerFrame");

  const hvidovreLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "KBH Sydhavn",
    _Img_hvidovre_jpg__WEBPACK_IMPORTED_MODULE_6__,
    "https://boulders.dk/hvidovre"
  );

  hvidovreCon.appendChild(hvidovreLink.el());

  const kbhSydhavnCon = document.createElement("div");
  kbhSydhavnCon.classList.add("hallerFrame");

  const kbhSydhavnLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Hvidovre",
    _Img_kbhSydhavn_jpg__WEBPACK_IMPORTED_MODULE_7__,
    "https://boulders.dk/kbhsydhavn"
  );

  kbhSydhavnCon.appendChild(kbhSydhavnLink.el());

  const valbyCon = document.createElement("div");
  valbyCon.classList.add("hallerFrame");

  const valbyLink = new _pageCreater__WEBPACK_IMPORTED_MODULE_0__.displayLink(
    "Hvidovre",
    _Img_valby_jpg__WEBPACK_IMPORTED_MODULE_8__,
    "https://boulders.dk/valby"
  );

  valbyCon.appendChild(valbyLink.el());

  hallerLinkCon.appendChild(aarhusNordCon);
  hallerLinkCon.appendChild(valbyCon);
  hallerLinkCon.appendChild(kbhSydhavnCon);
  hallerLinkCon.appendChild(hvidovreCon);
  hallerLinkCon.appendChild(aarhusCityCon);
  hallerLinkCon.appendChild(aarhusSydCon);
  hallerLinkCon.appendChild(odenseLinkCon);

  // Appending children
  secondpartCon.appendChild(hallerLinkText);
  secondpartCon.appendChild(underlineHallerBottom);
  secondpartCon.appendChild(hallerLinkCon);

  // Appending children
  content.appendChild(firstpartCon);
  content.appendChild(secondpartCon);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHallerpage);


/***/ }),

/***/ "./src/Pages/haller/nord.js":
/*!**********************************!*\
  !*** ./src/Pages/haller/nord.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pageCreater */ "./src/pageCreater.js");


const createAarhusNord = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAarhusNord);


/***/ }),

/***/ "./src/Pages/hold.js":
/*!***************************!*\
  !*** ./src/Pages/hold.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Img_bouldersIntroHold_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Img/bouldersIntroHold.jpg */ "./src/Img/bouldersIntroHold.jpg");
/* harmony import */ var _Img_bouldersFortsaetterhold_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Img/bouldersFortsaetterhold.jpg */ "./src/Img/bouldersFortsaetterhold.jpg");
/* harmony import */ var _Img_langvarigthold_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/langvarigthold.jpg */ "./src/Img/langvarigthold.jpg");
/* harmony import */ var _Img_boernehold_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/boernehold.jpg */ "./src/Img/boernehold.jpg");
/* harmony import */ var _Img_summercamphold_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Img/summercamphold.jpg */ "./src/Img/summercamphold.jpg");
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pageCreater */ "./src/pageCreater.js");








const createHoldPage = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  // Creating first header
  const headerCon = document.createElement("div");
  headerCon.classList.add("holdHeaderCon");

  const headerText = document.createElement("span");
  headerText.classList.add("holdHeaderText", "thickText");
  headerText.textContent = "Hold";

  headerCon.appendChild(headerText);

  // Creating function to create el.

  const introhold = new _pageCreater__WEBPACK_IMPORTED_MODULE_5__.displayLink(
    "Intro Hold",
    _Img_bouldersIntroHold_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "https://boulders.dk/intro"
  );

  const fortsaetterhold = new _pageCreater__WEBPACK_IMPORTED_MODULE_5__.displayLink(
    "Fortsætter Hold",
    _Img_bouldersFortsaetterhold_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "https://boulders.dk/intermediate"
  );

  const langvarigthold = new _pageCreater__WEBPACK_IMPORTED_MODULE_5__.displayLink(
    "Langvarigt Hold",
    _Img_langvarigthold_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "https://boulders.dk/inthezone"
  );

  const boernehold = new _pageCreater__WEBPACK_IMPORTED_MODULE_5__.displayLink(
    "Børne Hold",
    _Img_boernehold_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "https://boulders.dk/boernehold"
  );

  const summercamphold = new _pageCreater__WEBPACK_IMPORTED_MODULE_5__.displayLink(
    "Summer Camp",
    _Img_summercamphold_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "https://boulders.dk/sommercamp"
  );

  // Appending all el
  Promise.all([
    content.appendChild(introhold.el()),
    content.appendChild(fortsaetterhold.el()),
    content.appendChild(langvarigthold.el()),
    content.appendChild(boernehold.el()),
    content.appendChild(summercamphold.el()),
  ]);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHoldPage);


/***/ }),

/***/ "./src/Pages/homepage.js":
/*!*******************************!*\
  !*** ./src/Pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomepage = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  const homepageBgFrame = document.createElement("div");
  homepageBgFrame.classList.add("homepageBgImg", "imgFrame");

  const homepageBgText = document.createElement("div");
  homepageBgText.classList.add("homepageBgText");
  homepageBgText.textContent = "Klatring - Fællesskab - Økocafe";

  const firsttimerBtn = document.createElement("div");
  firsttimerBtn.classList.add("firsttimerBtn");
  firsttimerBtn.textContent = "Første gang?";

  firsttimerBtn.addEventListener("click", () => {});

  homepageBgFrame.appendChild(homepageBgText);
  homepageBgFrame.appendChild(firsttimerBtn);

  content.appendChild(homepageBgFrame);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepage);


/***/ }),

/***/ "./src/Pages/pris.js":
/*!***************************!*\
  !*** ./src/Pages/pris.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createPrispage = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  // Creating imgFrame
  const imgFrame = document.createElement("div");
  imgFrame.classList.add("prisImgFrame", "imgFrame");

  const imgText = document.createElement("span");
  imgText.classList.add("prisImgText");
  imgText.textContent = "PRISER";

  imgFrame.appendChild(imgText);

  // Creating first pris part
  const entreprisPart = document.createElement("div");
  entreprisPart.classList.add("partWithCenEl", "entryPart");

  const entryPrisBox = document.createElement("div");
  entryPrisBox.classList.add("prisBox");

  // Creating one line
  const offPeakText = document.createElement("span");
  offPeakText.classList.add("textCon");

  let offPeakTextFirst = document.createElement("span");
  offPeakTextFirst.classList.add("thickText");
  offPeakTextFirst.textContent = "Offpeak:";

  let offPeakTextLast = document.createElement("span");
  offPeakTextLast.classList.add("notThickText");
  offPeakTextLast.textContent =
    " mandag til fredag foer kl 14, loerdag og soendag eftr kl 18";

  offPeakText.appendChild(offPeakTextFirst);
  offPeakText.appendChild(offPeakTextLast);

  // Creating second line
  const peakText = document.createElement("span");
  peakText.classList.add("textCon");

  let peakTextFirst = document.createElement("span");
  peakTextFirst.classList.add("thickText");
  peakTextFirst.textContent = "Peak:";

  let peakTextLast = document.createElement("span");
  peakTextLast.classList.add("notThickText");
  peakTextLast.textContent =
    " mandag til fredag foer kl 14, loerdag og soendag eftr kl 18";

  peakText.appendChild(peakTextFirst);
  peakText.appendChild(peakTextLast);

  // Appending both lines
  entryPrisBox.appendChild(offPeakText);
  entryPrisBox.appendChild(peakText);

  entreprisPart.appendChild(entryPrisBox);

  // Creating headerPart
  const engangsEntreHeader = document.createElement("div");
  engangsEntreHeader.classList.add("engangsEntreHeader", "partWithCenEl");

  // Creating header
  const engangsEntreHeaderText = document.createElement("span");
  engangsEntreHeaderText.classList.add("thickText", "prisHeader");
  engangsEntreHeaderText.textContent = "Engangs Entre";

  engangsEntreHeader.appendChild(engangsEntreHeaderText);

  // Creating Entrebox
  const engangEntreCon = document.createElement("div");
  engangEntreCon.classList.add("partWithCenEl");

  // Creating left side
  const engangEntreConLeft = document.createElement("div");
  engangEntreConLeft.classList.add("prisBox");

  let offPeakHeaderPris = document.createElement("span");
  offPeakHeaderPris.classList.add("thickText");
  offPeakHeaderPris.textContent = "Entre Off Peak";

  let offPeakVoksen = document.createElement("span");
  offPeakVoksen.classList.add("notThickText");
  offPeakVoksen.textContent = "Voksen: 95kr";

  let offPeakBoern = document.createElement("span");
  offPeakBoern.classList.add("notThickText");
  offPeakBoern.textContent = "Boern: 95kr";

  engangEntreConLeft.appendChild(offPeakHeaderPris);
  engangEntreConLeft.appendChild(offPeakVoksen);
  engangEntreConLeft.appendChild(offPeakBoern);

  // Creating right side
  const engangEntreConRight = document.createElement("div");
  engangEntreConRight.classList.add("prisBox");

  let peakHeaderPris = document.createElement("span");
  peakHeaderPris.classList.add("thickText");
  peakHeaderPris.textContent = "Entre Peak";

  let peakVoksen = document.createElement("span");
  peakVoksen.classList.add("notThickText");
  peakVoksen.textContent = "Voksen: 95kr";

  let peakBoern = document.createElement("span");
  peakBoern.classList.add("notThickText");
  peakBoern.textContent = "Boern: 95kr";

  engangEntreConRight.appendChild(peakHeaderPris);
  engangEntreConRight.appendChild(peakVoksen);
  engangEntreConRight.appendChild(peakBoern);

  // Appending last
  engangEntreCon.appendChild(engangEntreConLeft);
  engangEntreCon.appendChild(engangEntreConRight);

  // Creating header
  const medlemskabEntreHeader = document.createElement("div");
  medlemskabEntreHeader.classList.add("engangsEntreHeader", "partWithCenEl");

  const medlemskabHeaderText = document.createElement("span");
  medlemskabHeaderText.classList.add("thickText", "prisHeader");
  medlemskabHeaderText.textContent = "Medlemskab";

  medlemskabEntreHeader.appendChild(medlemskabHeaderText);

  // Creating medlemskabsbox
  const medlemskabCon = document.createElement("div");
  medlemskabCon.classList.add("partWithCenEl");

  // Creating left side
  const medlemskabConLeft = document.createElement("div");
  medlemskabConLeft.classList.add("prisBox");

  let standardHeader = document.createElement("span");
  standardHeader.classList.add("thickText");
  standardHeader.textContent = "Standard medlemskab";

  let standardPris = document.createElement("span");
  standardPris.classList.add("notThickText");
  standardPris.textContent = "399kr per maaned";

  medlemskabConLeft.appendChild(standardHeader);
  medlemskabConLeft.appendChild(standardPris);

  // Creating middle side
  const medlemskabConMiddle = document.createElement("div");
  medlemskabConMiddle.classList.add("prisBox");

  let studieHeader = document.createElement("span");
  studieHeader.classList.add("thickText");
  studieHeader.textContent = "Studie medlemskab";

  let studiePris = document.createElement("span");
  studiePris.classList.add("notThickText");
  studiePris.textContent = "359kr per maaned";

  medlemskabConMiddle.appendChild(studieHeader);
  medlemskabConMiddle.appendChild(studiePris);

  // Creating right side
  const medlemskabConRight = document.createElement("div");
  medlemskabConRight.classList.add("prisBox");

  let juniorHeader = document.createElement("span");
  juniorHeader.classList.add("thickText");
  juniorHeader.textContent = "Junior medlemskab";

  let juniorPris = document.createElement("span");
  juniorPris.classList.add("notThickText");
  juniorPris.textContent = "219kr per maaned";

  medlemskabConRight.appendChild(juniorHeader);
  medlemskabConRight.appendChild(juniorPris);

  // Appending last
  medlemskabCon.appendChild(medlemskabConLeft);
  medlemskabCon.appendChild(medlemskabConMiddle);
  medlemskabCon.appendChild(medlemskabConRight);

  // Creating header
  const klippekortHeaderCon = document.createElement("div");
  klippekortHeaderCon.classList.add("engangsEntreHeader", "partWithCenEl");

  const klippekortHeaderText = document.createElement("span");
  klippekortHeaderText.classList.add("thickText", "prisHeader");
  klippekortHeaderText.textContent = "Klippekort";

  klippekortHeaderCon.appendChild(klippekortHeaderText);

  // Creating Entrebox
  const klippekortCon = document.createElement("div");
  klippekortCon.classList.add("partWithCenEl");

  // Creating left side
  const klippekortConLeft = document.createElement("div");
  klippekortConLeft.classList.add("prisBox");

  let klippekortHeader = document.createElement("span");
  klippekortHeader.classList.add("thickText");
  klippekortHeader.textContent = "Klippekort alm.";

  let klippekort = document.createElement("span");
  klippekort.classList.add("notThickText");
  klippekort.textContent = "950kr (10 klip)";

  klippekortConLeft.appendChild(klippekortHeader);
  klippekortConLeft.appendChild(klippekort);

  // Creating right side
  const klippekortConRight = document.createElement("div");
  klippekortConRight.classList.add("prisBox");

  let klippekortU16Header = document.createElement("span");
  klippekortU16Header.classList.add("thickText");
  klippekortU16Header.textContent = "Klippekort U.16";

  let klippekortU16 = document.createElement("span");
  klippekortU16.classList.add("notThickText");
  klippekortU16.textContent = "600kr (10 klip)";

  klippekortConRight.appendChild(klippekortU16Header);
  klippekortConRight.appendChild(klippekortU16);

  // Appending both sides
  klippekortCon.appendChild(klippekortConLeft);
  klippekortCon.appendChild(klippekortConRight);

  // Creating header
  const udstyrHeaderCon = document.createElement("div");
  udstyrHeaderCon.classList.add("engangsEntreHeader", "partWithCenEl");

  const udstyrHeaderText = document.createElement("span");
  udstyrHeaderText.classList.add("thickText", "prisHeader");
  udstyrHeaderText.textContent = "Udstyr";

  udstyrHeaderCon.appendChild(udstyrHeaderText);

  // Creating Entrebox
  const udstyrCon = document.createElement("div");
  udstyrCon.classList.add("partWithCenEl");

  // Creating left side
  const udstyrConLeft = document.createElement("div");
  udstyrConLeft.classList.add("prisBox");

  let udstyrHeader = document.createElement("span");
  udstyrHeader.classList.add("thickText");
  udstyrHeader.textContent = "Klippekort alm.";

  let udstyrVoksen = document.createElement("span");
  udstyrVoksen.classList.add("notThickText");
  udstyrVoksen.textContent = "Leje af sko: 35kr";

  let udstyrBoern = document.createElement("span");
  udstyrBoern.classList.add("notThickText");
  udstyrBoern.textContent = "Kalk: 10kr";

  udstyrConLeft.appendChild(udstyrHeader);
  udstyrConLeft.appendChild(udstyrVoksen);
  udstyrConLeft.appendChild(udstyrBoern);

  // Appending last
  udstyrCon.appendChild(udstyrConLeft);

  // Appending all children
  content.appendChild(imgFrame);
  content.appendChild(entreprisPart);
  content.appendChild(engangsEntreHeader);
  content.appendChild(engangEntreCon);
  content.appendChild(medlemskabEntreHeader);
  content.appendChild(medlemskabCon);
  content.appendChild(klippekortHeaderCon);
  content.appendChild(klippekortCon);
  content.appendChild(udstyrHeaderCon);
  content.appendChild(udstyrCon);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPrispage);


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnActivation": () => (/* binding */ btnActivation)
/* harmony export */ });
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageCreater */ "./src/pageCreater.js");


const btnActivation = {
  pageSwitch: (page) => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.lastChild);
    }
    document.body.appendChild((0,_pageCreater__WEBPACK_IMPORTED_MODULE_0__["default"])(page));
    window.scrollTo(0, 0);
  },
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageCreater_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageCreater.js */ "./src/pageCreater.js");



document.body.appendChild((0,_pageCreater_js__WEBPACK_IMPORTED_MODULE_1__["default"])("home"));


/***/ }),

/***/ "./src/pageCreater.js":
/*!****************************!*\
  !*** ./src/pageCreater.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayLink": () => (/* binding */ displayLink)
/* harmony export */ });
/* harmony import */ var _Pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/homepage */ "./src/Pages/homepage.js");
/* harmony import */ var _Pages_pris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/pris */ "./src/Pages/pris.js");
/* harmony import */ var _Pages_hold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/hold */ "./src/Pages/hold.js");
/* harmony import */ var _Pages_haller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/haller */ "./src/Pages/haller.js");
/* harmony import */ var _Pages_haller_nord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/haller/nord */ "./src/Pages/haller/nord.js");
/* harmony import */ var _Pages_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/events */ "./src/Pages/events.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _Img_bouldersLogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Img/bouldersLogo.png */ "./src/Img/bouldersLogo.png");
/* harmony import */ var _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Img/menuIcon.png */ "./src/Img/menuIcon.png");









// Img



const pageCreater = (page) => {
  const content = document.createElement("div");
  content.classList.add("bodyCon");

  content.appendChild(menuCreater(page));

  switch (page) {
    case "home":
      content.appendChild((0,_Pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])());
      break;
    case "pris":
      content.appendChild((0,_Pages_pris__WEBPACK_IMPORTED_MODULE_1__["default"])());
      break;
    case "hold":
      content.appendChild((0,_Pages_hold__WEBPACK_IMPORTED_MODULE_2__["default"])());
      break;
    case "haller":
      content.appendChild((0,_Pages_haller__WEBPACK_IMPORTED_MODULE_3__["default"])());
      break;
    case "aarhusNord":
      content.appendChild((0,_Pages_haller_nord__WEBPACK_IMPORTED_MODULE_4__["default"])());
      break;
    case "events":
      content.appendChild((0,_Pages_events__WEBPACK_IMPORTED_MODULE_5__["default"])());
      break;
  }

  return content;
};

const menuCreater = (page) => {
  const menuCon = document.createElement("div");
  menuCon.classList.add("menuCon");

  const logo = new Image();
  logo.src = _Img_bouldersLogo_png__WEBPACK_IMPORTED_MODULE_7__;
  logo.classList.add("bouldersLogo");

  logo.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_6__.btnActivation.pageSwitch("home");
  });

  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");

  const menuBtnPris = document.createElement("div");
  menuBtnPris.classList.add("menuBtn");
  menuBtnPris.textContent = "PRIS";

  menuBtnPris.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_6__.btnActivation.pageSwitch("pris");
  });

  const menuBtnHaller = document.createElement("div");
  menuBtnHaller.classList.add("menuBtn");
  menuBtnHaller.textContent = "HALLER";

  menuBtnHaller.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_6__.btnActivation.pageSwitch("haller");
  });

  const menuBtnFirsttimer = document.createElement("div");
  menuBtnFirsttimer.classList.add("menuBtn");
  menuBtnFirsttimer.textContent = "FØRSTE GANG?";

  menuBtnFirsttimer.addEventListener("click", () => {});

  const menuBtnEvents = document.createElement("div");
  menuBtnEvents.classList.add("menuBtn");
  menuBtnEvents.textContent = "EVENTS";

  menuBtnEvents.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_6__.btnActivation.pageSwitch("events");
  });

  const menuBtnHold = document.createElement("div");
  menuBtnHold.classList.add("menuBtn");
  menuBtnHold.textContent = "HOLD";

  menuBtnHold.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_6__.btnActivation.pageSwitch("hold");
  });

  const menuBtnTermer = document.createElement("div");
  menuBtnTermer.classList.add("menuBtn");
  menuBtnTermer.textContent = "TERMS";

  menuBtnTermer.addEventListener("click", () => {});

  const linkToOwnPage = document.createElement("a");
  linkToOwnPage.setAttribute("href", "https://boulders.dk/");
  linkToOwnPage.setAttribute("target", "_blank");
  linkToOwnPage.classList.add("menuBtn");
  linkToOwnPage.textContent = "Link til Boulders";

  linkToOwnPage.addEventListener("click", () => {});

  // Creating the side bar for the more btn
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const sidebarRemoveArrow = document.createElement("div");
  sidebarRemoveArrow.classList.add("sidebarRemoveArrow");
  sidebarRemoveArrow.textContent = "➔";

  sidebarRemoveArrow.addEventListener("click", () => {
    sidebar.style.right = "max(-500px, -80vw)";
  });

  const sidebarMenu = document.createElement("div");
  sidebarMenu.classList.add("sidebarMenu");

  sidebar.appendChild(sidebarRemoveArrow);
  sidebar.appendChild(sidebarMenu);

  const menuBtnMere = document.createElement("div");
  menuBtnMere.classList.add("menuBtn");
  menuBtnMere.textContent = "MERE";

  const appendSidebarMenu = (size) => {
    new Promise((resolve, reject) => {
      menuCon.appendChild(sidebar);
      while (sidebarMenu.firstChild) {
        sidebarMenu.removeChild(sidebarMenu.lastChild);
      }
      if (size == "large") {
        menuBtnArray.forEach((btn) => {
          sidebarMenu.appendChild(btn);
        });
      } else {
        sidebarMenu.appendChild(linkToOwnPage);
      }

      setTimeout(() => {
        resolve();
      }, 0);
    }).then(() => {
      sidebar.style.right = "0px";
    });
  };

  menuBtnMere.addEventListener("click", () => {
    appendSidebarMenu("small");
  });

  const menuIconBtn = new Image();
  menuIconBtn.src = _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_8__;
  menuIconBtn.classList.add("menuIconBtn");

  menuIconBtn.addEventListener("click", () => {
    appendSidebarMenu("large");
  });

  const menuBtnArray = [
    menuBtnPris,
    menuBtnHold,
    menuBtnHaller,
    menuBtnFirsttimer,
    menuBtnEvents,
    menuBtnTermer,
    menuBtnMere,
  ];

  let smallMenu = 0;
  let largeMenu = 0;

  const appendLargeMenu = () => {
    while (menuBar.firstChild) menuBar.removeChild(menuBar.lastChild);
    menuBtnArray.forEach((btn) => {
      menuBar.appendChild(btn);
    });
  };

  const appendSmallMenu = () => {
    while (menuBar.firstChild) menuBar.removeChild(menuBar.lastChild);
    menuBar.appendChild(menuIconBtn);
  };

  // Checks if the window i large enoutgh
  if (innerWidth > 1200) {
    smallMenu = 0;
    largeMenu = 1;
    appendLargeMenu();
  } else {
    smallMenu = 1;
    largeMenu = 0;
    appendSmallMenu();
  }

  window.addEventListener("resize", () => {
    if (innerWidth > 1200) {
      if (largeMenu == 0) {
        appendLargeMenu();
        largeMenu = 1;
        smallMenu = 0;
      }
    } else {
      if (smallMenu == 0) {
        appendSmallMenu();
        largeMenu = 0;
        smallMenu = 1;
      }
    }
  });

  const scrollMenuFunction = () => {
    if (menuCon.getBoundingClientRect().top < -40) {
      menuCon.classList.add("menuScroll");
      logo.style.height = "30px";
    } else {
      menuCon.classList.remove("menuScroll");
      logo.style.height = "50px";
    }
  };

  scrollMenuFunction();

  window.addEventListener("scroll", () => {
    scrollMenuFunction();
  });

  menuCon.appendChild(logo);
  menuCon.appendChild(menuBar);

  return menuCon;
};

const footerCreater = () => {
  // create footer
};

class displayLink {
  constructor(name, imgSrc, link) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.link = link;
  }
  el = () => {
    const el = document.createElement("a");
    el.classList.add("holdImgFrame");
    el.setAttribute("href", this.link);
    el.setAttribute("target", "_blank");

    const bg = new Image();
    bg.src = this.imgSrc;
    bg.classList.add("holdBgImg");

    const header = document.createElement("span");
    header.classList.add("thickText", "holdImgHeader");
    header.textContent = this.name;

    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", this.link);
    linkEl.setAttribute("target", "_blank");
    linkEl.classList.add("thickText", "holdLinkEl");
    linkEl.textContent = "Link til Boulders.dk";

    el.appendChild(bg);
    el.appendChild(header);
    el.appendChild(linkEl);

    return el;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageCreater);



/***/ }),

/***/ "./src/Img/aarhusCity.jpg":
/*!********************************!*\
  !*** ./src/Img/aarhusCity.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "929479a4a4a2fa5c2ac9.jpg";

/***/ }),

/***/ "./src/Img/aarhusNord.jpg":
/*!********************************!*\
  !*** ./src/Img/aarhusNord.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e6b15a24fb683d9ee6a.jpg";

/***/ }),

/***/ "./src/Img/aarhusSyd.jpg":
/*!*******************************!*\
  !*** ./src/Img/aarhusSyd.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "688f630f913431ade325.jpg";

/***/ }),

/***/ "./src/Img/boernehold.jpg":
/*!********************************!*\
  !*** ./src/Img/boernehold.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5eacbd801f0fff0dd6f.jpg";

/***/ }),

/***/ "./src/Img/bouldersBg.jpg":
/*!********************************!*\
  !*** ./src/Img/bouldersBg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a0f0c5f3de7313c1b65.jpg";

/***/ }),

/***/ "./src/Img/bouldersFortsaetterhold.jpg":
/*!*********************************************!*\
  !*** ./src/Img/bouldersFortsaetterhold.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5712da74212a9fe0b3e.jpg";

/***/ }),

/***/ "./src/Img/bouldersIntroHold.jpg":
/*!***************************************!*\
  !*** ./src/Img/bouldersIntroHold.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31e184a0386a64331d85.jpg";

/***/ }),

/***/ "./src/Img/bouldersLogo.png":
/*!**********************************!*\
  !*** ./src/Img/bouldersLogo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03d7ce4a93452fccf730.png";

/***/ }),

/***/ "./src/Img/climathon.jpg":
/*!*******************************!*\
  !*** ./src/Img/climathon.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "954c8ae11c63d9a9ae80.jpg";

/***/ }),

/***/ "./src/Img/hvidovre.jpg":
/*!******************************!*\
  !*** ./src/Img/hvidovre.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f48b8f8330053b1105cc.jpg";

/***/ }),

/***/ "./src/Img/kbhSydhavn.jpg":
/*!********************************!*\
  !*** ./src/Img/kbhSydhavn.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "606c8f3b35a55b35b827.jpg";

/***/ }),

/***/ "./src/Img/langvarigthold.jpg":
/*!************************************!*\
  !*** ./src/Img/langvarigthold.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0e32c88df24a1599aaa.jpg";

/***/ }),

/***/ "./src/Img/lateNightBouldering.jpg":
/*!*****************************************!*\
  !*** ./src/Img/lateNightBouldering.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c9561b06d549feff94b.jpg";

/***/ }),

/***/ "./src/Img/menuIcon.png":
/*!******************************!*\
  !*** ./src/Img/menuIcon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a46bfa4d0da52e62ee39.png";

/***/ }),

/***/ "./src/Img/odense.jpeg":
/*!*****************************!*\
  !*** ./src/Img/odense.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79125527d1f634c33519.jpeg";

/***/ }),

/***/ "./src/Img/studentFriday.png":
/*!***********************************!*\
  !*** ./src/Img/studentFriday.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b0ee29c35fd97a7ffb.png";

/***/ }),

/***/ "./src/Img/summercamphold.jpg":
/*!************************************!*\
  !*** ./src/Img/summercamphold.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c9561b06d549feff94b.jpg";

/***/ }),

/***/ "./src/Img/sunnySaturday.jpg":
/*!***********************************!*\
  !*** ./src/Img/sunnySaturday.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd318ea9bf6713c94cdc.jpg";

/***/ }),

/***/ "./src/Img/valby.jpg":
/*!***************************!*\
  !*** ./src/Img/valby.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c469d8fa11c95d99954.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMVJVOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUFXO0FBQ3pDO0FBQ0EsR0FBRztBQUNIOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7QUNaSjtBQUNzQjs7QUFFM0MsMEJBQTBCLDJEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFM7QUFDSjtBQUNBO0FBQ0k7QUFDSztBQUNUOztBQUVHOztBQUU3QztBQUM2QztBQUNIOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwyREFBYztBQUN4QztBQUNBO0FBQ0EsMEJBQTBCLHVEQUFjO0FBQ3hDO0FBQ0E7QUFDQSwwQkFBMEIsdURBQWM7QUFDeEM7QUFDQTtBQUNBLDBCQUEwQix5REFBZ0I7QUFDMUM7QUFDQTtBQUNBLDBCQUEwQiw4REFBZ0I7QUFDMUM7QUFDQTtBQUNBLDBCQUEwQix5REFBWTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxrREFBTztBQUNwQjs7QUFFQTtBQUNBLElBQUksaUVBQXdCO0FBQzVCLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUF3QjtBQUM1QixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXdCO0FBQzVCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBd0I7QUFDNUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUF3QjtBQUM1QixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLDhDQUFRO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9oYWxsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2hhbGxlci9ub3JkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9ob2xkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvcHJpcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3BhZ2VDcmVhdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ltZy9ib3VsZGVyc0JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FudGFyaTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkdhbnRhcmlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbn1cXG5cXG4uYm9keUNvbiB7XFxufVxcblxcbi8qIFVuaXZlcnNhbCAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDkwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFydFdpdGhDZW5FbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogNjBweCA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGV4dENvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aGlja1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5vdFRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBVbml2ZXJzYWwgRU5EICovXFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51Q29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMzBweDtcXG59XFxuXFxuLm1lbnVTY3JvbGwge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogLTUwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm91bGRlcnNMb2dvIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogMC4yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ubWVudUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG4ubWVudUljb25CdG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IG1heCgtNTAwcHgsIC04MHZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXJSZW1vdmVBcnJvdyB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjYzNjM2MzO1xcbn1cXG5cXG4uc2lkZWJhck1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmhvbWVwYWdlQmdJbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwMHB4O1xcbn1cXG5cXG4uaG9tZXBhZ2VCZ1RleHQge1xcbiAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogODB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDI1cHggNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5maXJzdHRpbWVyQnRuOmFjdGl2ZSB7XFxuICBzY2FsZTogMS4wMTtcXG59XFxuXFxuLyogSG9tZXBhZ2UgRU1EICovXFxuXFxuLyogcHJpcyAqL1xcblxcbi5wcmlzSW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaXNJbWdUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5lbnRyeVBhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDcxZjtcXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcXG59XFxuXFxuLnByaXNCb3gge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbmdhbmdzRW50cmVIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLnByaXNIZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4vKiBwcmlzIEVNRCAqL1xcblxcbi8qIEhvbGQgICovXFxuXFxuLmhvbGRIZWFkZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9sZEhlYWRlclRleHQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaG9sZEltZ0ZyYW1lIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZyB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDgwMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xNTtcXG59XFxuXFxuLmhvbGRJbWdIZWFkZXIge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZExpbmtFbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogSG9sZCBFTkQgKi9cXG5cXG4vKiBoYWxsZXIgKi9cXG5cXG4uaGFsbGVyQ29udGVudENvbiB7XFxuICBnYXA6IDEyMHB4O1xcbn1cXG5cXG4ucGFydFRvcEhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHggNXZ3O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0T2ZUb3BDb24ge1xcbiAgd2lkdGg6IG1heCg0MDBweCwgNDglKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLm1hcFRleHRIYWxsZXIge1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4ubWFwc01hcEhhbGxlciB7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0IHtcXG4gIHdpZHRoOiBtYXgoMzUwcHgsIDgwJSk7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmFhYm5pbmd0aWRlclRleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnBhcnRCb3R0b21IYWxsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGFsbGVyTGlua0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaGFsbGVyRnJhbWUge1xcbiAgaGVpZ2h0OiBtaW4oNDAwcHgsIDkwdncpO1xcbiAgd2lkdGg6IG1pbig0MDBweCwgOTB2dyk7XFxufVxcblxcbi5oYWxsZXJMaW5rVGV4dCB7XFxuICB3aWR0aDogNzV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckJvdHRvbSB7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLyogaGFsbGVyIEVORCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCOztB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QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGVBQWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FudGFyaTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2FudGFyaVxcXCIsIHNhbnMtc2VyaWY7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDQ3MWY7XFxufVxcblxcbi5ib2R5Q29uIHtcXG59XFxuXFxuLyogVW5pdmVyc2FsICovXFxuXFxuLmNvbnRlbnRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogOTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0V2l0aENlbkVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDgwcHg7XFxuICBwYWRkaW5nOiA2MHB4IDUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50ZXh0Q29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubm90VGhpY2tUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qIFVuaXZlcnNhbCBFTkQgKi9cXG5cXG4vKiBNZW51ICovXFxuXFxuLm1lbnVDb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGhlaWdodDogNzZweDtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAzMHB4O1xcbn1cXG5cXG4ubWVudVNjcm9sbCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAtNTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib3VsZGVyc0xvZ28ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICB0cmFuc2l0aW9uOiAwLjI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudUJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5tZW51QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XFxufVxcblxcbi5tZW51SWNvbkJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogbWF4KC01MDBweCwgLTgwdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogbWluKDUwMHB4LCA4MHZ3KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93IHtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyUmVtb3ZlQXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNjM2MzYzM7XFxufVxcblxcbi5zaWRlYmFyTWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMHB4O1xcbiAgcGFkZGluZzogMHB4IDUwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi8qIE1lbnUgRU5EICovXFxuXFxuLyogSG9tZXBhZ2UgKi9cXG5cXG4uaG9tZXBhZ2VCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvYm91bGRlcnNCZy5qcGcpO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxufVxcblxcbi5ob21lcGFnZUJnVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lckJ0biB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjVweCA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG46YWN0aXZlIHtcXG4gIHNjYWxlOiAxLjAxO1xcbn1cXG5cXG4vKiBIb21lcGFnZSBFTUQgKi9cXG5cXG4vKiBwcmlzICovXFxuXFxuLnByaXNJbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvYm91bGRlcnNCZy5qcGcpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpc0ltZ1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmVudHJ5UGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcbn1cXG5cXG4ucHJpc0JveCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVuZ2FuZ3NFbnRyZUhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbn1cXG5cXG4ucHJpc0hlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qIHByaXMgRU1EICovXFxuXFxuLyogSG9sZCAgKi9cXG5cXG4uaG9sZEhlYWRlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjk0NDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob2xkSGVhZGVyVGV4dCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5ob2xkSW1nRnJhbWUge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaG9sZEJnSW1nIHtcXG4gIHRyYW5zaXRpb246IDJzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgODAwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZEJnSW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE1O1xcbn1cXG5cXG4uaG9sZEltZ0hlYWRlciB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ob2xkTGlua0VsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBIb2xkIEVORCAqL1xcblxcbi8qIGhhbGxlciAqL1xcblxcbi5oYWxsZXJDb250ZW50Q29uIHtcXG4gIGdhcDogMTIwcHg7XFxufVxcblxcbi5wYXJ0VG9wSGFsbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweCA1dnc7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnRPZlRvcENvbiB7XFxuICB3aWR0aDogbWF4KDQwMHB4LCA0OCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4ubWFwVGV4dEhhbGxlciB7XFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5tYXBzTWFwSGFsbGVyIHtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHRIZWFkZXIge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4udW5kZXJsaW5lSGFsbGVySGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHQge1xcbiAgd2lkdGg6IG1heCgzNTBweCwgODAlKTtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uYWFibmluZ3RpZGVyVGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucGFydEJvdHRvbUhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5oYWxsZXJMaW5rQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5oYWxsZXJGcmFtZSB7XFxuICBoZWlnaHQ6IG1pbig0MDBweCwgOTB2dyk7XFxuICB3aWR0aDogbWluKDQwMHB4LCA5MHZ3KTtcXG59XFxuXFxuLmhhbGxlckxpbmtUZXh0IHtcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udW5kZXJsaW5lSGFsbGVyQm90dG9tIHtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG5cXG4vKiBoYWxsZXIgRU5EICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5TGluayB9IGZyb20gXCIuLi9wYWdlQ3JlYXRlclwiO1xuXG4vLyBJbWdcbmltcG9ydCBsYXRlTmlnaHRCb3VsZGVyaW5nSW1nU3JjIGZyb20gXCIuLi9JbWcvbGF0ZU5pZ2h0Qm91bGRlcmluZy5qcGdcIjtcbmltcG9ydCBzdHVkZW50RnJpZGF5SW1nU3JjIGZyb20gXCIuLi9JbWcvc3R1ZGVudEZyaWRheS5wbmdcIjtcbmltcG9ydCBjbGltYmF0aG9uSW1nU3JjIGZyb20gXCIuLi9JbWcvY2xpbWF0aG9uLmpwZ1wiO1xuaW1wb3J0IHN1bm55U2F0dXJkYXlJbWdTcmMgZnJvbSBcIi4uL0ltZy9zdW5ueVNhdHVyZGF5LmpwZ1wiO1xuXG5jb25zdCBjcmVhdGVFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIGNvbnN0IGxhdGVOaWdodEJvdWxkZXJpbmcgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJMYXRlIE5pZ2h0IEJvdWxkZXJpbmdcIixcbiAgICBsYXRlTmlnaHRCb3VsZGVyaW5nSW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9sbmJcIlxuICApO1xuXG4gIGNvbnN0IHN0dWRlbnRGcmlkYXkgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJTdHVkZW50IEZyaWRheVwiLFxuICAgIHN0dWRlbnRGcmlkYXlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL3N0dWRlbnRmcmlkYXlcIlxuICApO1xuXG4gIGNvbnN0IGNsaW1iYXRob24gPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJDbGltYmF0aG9uXCIsXG4gICAgY2xpbWJhdGhvbkltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvY2xpbWJhdGhvblwiXG4gICk7XG5cbiAgY29uc3Qgc3VubnlTYXR1cmRheSA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIlN1bm55IFNhdHVyZGF5XCIsXG4gICAgc3VubnlTYXR1cmRheUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvc3VubnlzYXR1cmRheVwiXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChsYXRlTmlnaHRCb3VsZGVyaW5nLmVsKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN0dWRlbnRGcmlkYXkuZWwoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpbWJhdGhvbi5lbCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdW5ueVNhdHVyZGF5LmVsKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXZlbnRzO1xuIiwiaW1wb3J0IHsgZGlzcGxheUxpbmsgfSBmcm9tIFwiLi4vcGFnZUNyZWF0ZXJcIjtcbmltcG9ydCB7IGJ0bkFjdGl2YXRpb24gfSBmcm9tIFwiLi4vY29udHJvbGxlclwiO1xuXG5pbXBvcnQgYWFyaHVzTm9yZEltZ1NyYyBmcm9tIFwiLi4vSW1nL2Fhcmh1c05vcmQuanBnXCI7XG5pbXBvcnQgYWFyaHVzQ2l0eUltZ1NyYyBmcm9tIFwiLi4vSW1nL2Fhcmh1c0NpdHkuanBnXCI7XG5pbXBvcnQgb2RlbnNlSW1nU3JjIGZyb20gXCIuLi9JbWcvb2RlbnNlLmpwZWdcIjtcbmltcG9ydCBhYXJodXNTeWRJbWdTcmMgZnJvbSBcIi4uL0ltZy9hYXJodXNTeWQuanBnXCI7XG5pbXBvcnQgaHZpZG92cmVJbWdTcmMgZnJvbSBcIi4uL0ltZy9odmlkb3ZyZS5qcGdcIjtcbmltcG9ydCBrYmhTeWRoYXZuSW1nU3JjIGZyb20gXCIuLi9JbWcva2JoU3lkaGF2bi5qcGdcIjtcbmltcG9ydCB2YWxieUltZ1NyYyBmcm9tIFwiLi4vSW1nL3ZhbGJ5LmpwZ1wiO1xuXG5jb25zdCBjcmVhdGVIYWxsZXJwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcImhhbGxlckNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgdGhlIHVwcGVyIHBhcnQgd2l0aCB0ZXh0IGFuZCBtYXBcbiAgY29uc3QgZmlyc3RwYXJ0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0Q29uLmNsYXNzTGlzdC5hZGQoXCJwYXJ0VG9wSGFsbGVyXCIpO1xuXG4gIC8vIENyZWF0aW5nIFJJR0hUISBwYXJ0XG4gIGNvbnN0IGZpcnN0cGFydFJpZ2h0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBoYWxsZXJJbnRyb1RleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVySW50cm9UZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJJbnRyb1RleHRIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhhbGxlckludHJvVGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiSGFsbGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lSGFsbGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgaGFsbGVySW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhhbGxlckludHJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0XCIsIFwibm90VGhpY2tUZXh0XCIpO1xuICBoYWxsZXJJbnRyb1RleHQudGV4dENvbnRlbnQgPVxuICAgIFwiVm9yZXMgaGFsbGVyIGxpZ2dlciBvdmVyIGhlbGUgbGFuZGV0IG9nIGVyIGFhYmVuIGZvciBiYWFkZSBkaWcgb2cgZGluZSB2ZW5uZXIsIHZpIGdsYWVkZXIgb3MgdGlsIGF0IHNlIGRpZy4gQWxsZSB2b3JlcyBoYWxsZXIgaGFyIGFhYmVuIHBhYSBzYW1tZSB0aWQsIHNhYSBhbGxlIHRpZGVyIGdhZWxkZXIgaSBhbGxlIGhhbGRlclwiO1xuXG4gIGNvbnN0IGFhYm5pbmdzdGlkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWFibmluZ3N0aWRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0SGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBhYWJuaW5nc3RpZGVySGVhZGVyLnRleHRDb250ZW50ID0gXCLDhWJuaW5nc3RpZGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZGVybGluZUhhbGxlckhlYWRlcjIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBhYWJuaW5nc3RpZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhYWJuaW5nc3RpZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiYWFibmluZ3RpZGVyVGV4dFwiKTtcbiAgYWFibmluZ3N0aWRlclRleHQudGV4dENvbnRlbnQgPSBcIkZyYSAxMCAtIDIyIEh2ZXIgZGFnIVwiO1xuXG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dEhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUhhbGxlckhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dCk7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGFhYm5pbmdzdGlkZXJIZWFkZXIpO1xuICBmaXJzdHBhcnRSaWdodENvbi5hcHBlbmRDaGlsZCh1bmRlcmxpbmVIYWxsZXJIZWFkZXIyKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoYWFibmluZ3N0aWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIExFRlQhIHBhcnRcbiAgY29uc3QgZmlyc3RwYXJ0TGVmdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0cGFydExlZnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBtYXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1hcFRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcIm1hcFRleHRIYWxsZXJcIik7XG4gIG1hcFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiSGVyIGthbiBkdSBzZSBldCBrb3J0IG92ZXIgYWxsZSB2b3JlcyBmb3Jza2VsbGlnZSBhZmRlbGluZ2VyXCI7XG5cbiAgY29uc3QgbWFwc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIG1hcHNNYXAuc2V0QXR0cmlidXRlKFxuICAgIFwic3JjXCIsXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTYhMW0xMiExbTMhMWQxMTQwNDMyLjQ2ODQ5NTQ1MSEyZDEwLjcyNjcwNzk5NDk3MjQzOCEzZDU2LjA2MzU2MzYwNzc3NzEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITJtMSExc2JvdWxkZXJzITVlMCEzbTIhMXNlbiEyc2RrITR2MTY4Mjc3MjM2OTQxNSE1bTIhMXNlbiEyc2RrXCJcbiAgKTtcbiAgbWFwc01hcC5jbGFzc0xpc3QuYWRkKFwibWFwc01hcEhhbGxlclwiKTtcblxuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcFRleHQpO1xuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcHNNYXApO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRSaWdodENvbik7XG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRMZWZ0Q29uKTtcblxuICAvLyBDcmVhdGluZyBsb3dlcnBhcnRcbiAgY29uc3Qgc2Vjb25kcGFydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZHBhcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRCb3R0b21IYWxsZXJcIik7XG5cbiAgY29uc3QgaGFsbGVyTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVyTGlua1RleHQuY2xhc3NMaXN0LmFkZChcImhhbGxlckxpbmtUZXh0XCIsIFwidGhpY2tUZXh0XCIpO1xuICBoYWxsZXJMaW5rVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJIZXJ1bmRlciBrYW4gZHUgbGFlc2UgbWVyZSBvbSBkZSBmb3Jza2VsbGlnZSBoYWxsZXJcIjtcblxuICBjb25zdCB1bmRlcmxpbmVIYWxsZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmRlcmxpbmVIYWxsZXJCb3R0b20uY2xhc3NMaXN0LmFkZChcbiAgICBcInVuZGVybGluZUhhbGxlckhlYWRlclwiLFxuICAgIFwidW5kZXJsaW5lSGFsbGVyQm90dG9tXCJcbiAgKTtcblxuICAvLyBDcmVhdGluZyBoYWxsZXJsaW5rIGNvbnRhaW5lclxuICBjb25zdCBoYWxsZXJMaW5rQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGFsbGVyTGlua0Nvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyTGlua0NvblwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzTm9yZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgYWFyaHVzTm9yZENvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImFhcmh1c05vcmRcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYXJodXNOb3JkRWwuY2xhc3NMaXN0LmFkZChcImhvbGRJbWdGcmFtZVwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQmcgPSBuZXcgSW1hZ2UoKTtcbiAgYWFyaHVzTm9yZEJnLnNyYyA9IGFhcmh1c05vcmRJbWdTcmM7XG4gIGFhcmh1c05vcmRCZy5jbGFzc0xpc3QuYWRkKFwiaG9sZEJnSW1nXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRJbWdIZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWFyaHVzIE5vcmRcIjtcblxuICBhYXJodXNOb3JkRWwuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZEJnKTtcbiAgYWFyaHVzTm9yZEVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgYWFyaHVzTm9yZENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkRWwpO1xuXG4gIGNvbnN0IGFhcmh1c0NpdHlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWFyaHVzQ2l0eUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzQ2l0eUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJBYXJodXMgQ2l0eVwiLFxuICAgIGFhcmh1c0NpdHlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c2NcIlxuICApO1xuXG4gIGFhcmh1c0NpdHlDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUxpbmsuZWwoKSk7XG5cbiAgY29uc3Qgb2RlbnNlTGlua0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9kZW5zZUxpbmtDb24uY2xhc3NMaXN0LmFkZChcImhhbGxlckZyYW1lXCIpO1xuXG4gIGNvbnN0IG9kZW5zZUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJPZGVuc2VcIixcbiAgICBvZGVuc2VJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL29kZW5zZVwiXG4gICk7XG5cbiAgb2RlbnNlTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rLmVsKCkpO1xuXG4gIGNvbnN0IGFhcmh1c1N5ZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c1N5ZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzU3lkTGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkFhcmh1cyBTeWRcIixcbiAgICBhYXJodXNTeWRJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c3N5ZFwiXG4gICk7XG5cbiAgYWFyaHVzU3lkQ29uLmFwcGVuZENoaWxkKGFhcmh1c1N5ZExpbmsuZWwoKSk7XG5cbiAgY29uc3QgaHZpZG92cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodmlkb3ZyZUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgaHZpZG92cmVMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiS0JIIFN5ZGhhdm5cIixcbiAgICBodmlkb3ZyZUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaHZpZG92cmVcIlxuICApO1xuXG4gIGh2aWRvdnJlQ29uLmFwcGVuZENoaWxkKGh2aWRvdnJlTGluay5lbCgpKTtcblxuICBjb25zdCBrYmhTeWRoYXZuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2JoU3lkaGF2bkNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3Qga2JoU3lkaGF2bkxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJIdmlkb3ZyZVwiLFxuICAgIGtiaFN5ZGhhdm5JbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2tiaHN5ZGhhdm5cIlxuICApO1xuXG4gIGtiaFN5ZGhhdm5Db24uYXBwZW5kQ2hpbGQoa2JoU3lkaGF2bkxpbmsuZWwoKSk7XG5cbiAgY29uc3QgdmFsYnlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2YWxieUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgdmFsYnlMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiSHZpZG92cmVcIixcbiAgICB2YWxieUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvdmFsYnlcIlxuICApO1xuXG4gIHZhbGJ5Q29uLmFwcGVuZENoaWxkKHZhbGJ5TGluay5lbCgpKTtcblxuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKGFhcmh1c05vcmRDb24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKHZhbGJ5Q29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChrYmhTeWRoYXZuQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChodmlkb3ZyZUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzU3lkQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rVGV4dCk7XG4gIHNlY29uZHBhcnRDb24uYXBwZW5kQ2hpbGQodW5kZXJsaW5lSGFsbGVyQm90dG9tKTtcbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdHBhcnRDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY29uZHBhcnRDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFsbGVycGFnZTtcbiIsImltcG9ydCB7IGRpc3BsYXlMaW5rIH0gZnJvbSBcIi4uLy4uL3BhZ2VDcmVhdGVyXCI7XG5cbmNvbnN0IGNyZWF0ZUFhcmh1c05vcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWFyaHVzTm9yZDtcbiIsImltcG9ydCBpbnRyb0hvbGRJbWdTcmMgZnJvbSBcIi4uL0ltZy9ib3VsZGVyc0ludHJvSG9sZC5qcGdcIjtcbmltcG9ydCBmb3J0c2FldHRlcmhvbGRTcmMgZnJvbSBcIi4uL0ltZy9ib3VsZGVyc0ZvcnRzYWV0dGVyaG9sZC5qcGdcIjtcbmltcG9ydCBsYW5ndmFyaWd0aG9sZFNyYyBmcm9tIFwiLi4vSW1nL2xhbmd2YXJpZ3Rob2xkLmpwZ1wiO1xuaW1wb3J0IGJvZXJuZWhvbGRTcmMgZnJvbSBcIi4uL0ltZy9ib2VybmVob2xkLmpwZ1wiO1xuaW1wb3J0IHN1bW1lcmNhbXBob2xkU3JjIGZyb20gXCIuLi9JbWcvc3VtbWVyY2FtcGhvbGQuanBnXCI7XG5cbmltcG9ydCB7IGRpc3BsYXlMaW5rIH0gZnJvbSBcIi4uL3BhZ2VDcmVhdGVyXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbGRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBoZWFkZXJcbiAgY29uc3QgaGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJob2xkSGVhZGVyQ29uXCIpO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9sZEhlYWRlclRleHRcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkhvbGRcIjtcblxuICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgZnVuY3Rpb24gdG8gY3JlYXRlIGVsLlxuXG4gIGNvbnN0IGludHJvaG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkludHJvIEhvbGRcIixcbiAgICBpbnRyb0hvbGRJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludHJvXCJcbiAgKTtcblxuICBjb25zdCBmb3J0c2FldHRlcmhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJGb3J0c8OmdHRlciBIb2xkXCIsXG4gICAgZm9ydHNhZXR0ZXJob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9pbnRlcm1lZGlhdGVcIlxuICApO1xuXG4gIGNvbnN0IGxhbmd2YXJpZ3Rob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiTGFuZ3ZhcmlndCBIb2xkXCIsXG4gICAgbGFuZ3ZhcmlndGhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludGhlem9uZVwiXG4gICk7XG5cbiAgY29uc3QgYm9lcm5laG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkLDuHJuZSBIb2xkXCIsXG4gICAgYm9lcm5laG9sZFNyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvYm9lcm5laG9sZFwiXG4gICk7XG5cbiAgY29uc3Qgc3VtbWVyY2FtcGhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJTdW1tZXIgQ2FtcFwiLFxuICAgIHN1bW1lcmNhbXBob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9zb21tZXJjYW1wXCJcbiAgKTtcblxuICAvLyBBcHBlbmRpbmcgYWxsIGVsXG4gIFByb21pc2UuYWxsKFtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGludHJvaG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcnRzYWV0dGVyaG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxhbmd2YXJpZ3Rob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9lcm5laG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1bW1lcmNhbXBob2xkLmVsKCkpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbGRQYWdlO1xuIiwiY29uc3QgY3JlYXRlSG9tZXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlQmdGcmFtZS5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VCZ0ltZ1wiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VCZ1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlQmdUZXh0XCIpO1xuICBob21lcGFnZUJnVGV4dC50ZXh0Q29udGVudCA9IFwiS2xhdHJpbmcgLSBGw6ZsbGVzc2thYiAtIMOYa29jYWZlXCI7XG5cbiAgY29uc3QgZmlyc3R0aW1lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0dGltZXJCdG4uY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJCdG5cIik7XG4gIGZpcnN0dGltZXJCdG4udGV4dENvbnRlbnQgPSBcIkbDuHJzdGUgZ2FuZz9cIjtcblxuICBmaXJzdHRpbWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XG5cbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGhvbWVwYWdlQmdUZXh0KTtcbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGZpcnN0dGltZXJCdG4pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VCZ0ZyYW1lKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVwYWdlO1xuIiwiY29uc3QgY3JlYXRlUHJpc3BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGltZ0ZyYW1lXG4gIGNvbnN0IGltZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZChcInByaXNJbWdGcmFtZVwiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaW1nVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ1RleHRcIik7XG4gIGltZ1RleHQudGV4dENvbnRlbnQgPSBcIlBSSVNFUlwiO1xuXG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKGltZ1RleHQpO1xuXG4gIC8vIENyZWF0aW5nIGZpcnN0IHByaXMgcGFydFxuICBjb25zdCBlbnRyZXByaXNQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW50cmVwcmlzUGFydC5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiLCBcImVudHJ5UGFydFwiKTtcblxuICBjb25zdCBlbnRyeVByaXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyeVByaXNCb3guY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgLy8gQ3JlYXRpbmcgb25lIGxpbmVcbiAgY29uc3Qgb2ZmUGVha1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHQuY2xhc3NMaXN0LmFkZChcInRleHRDb25cIik7XG5cbiAgbGV0IG9mZlBlYWtUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRGaXJzdC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrVGV4dEZpcnN0LnRleHRDb250ZW50ID0gXCJPZmZwZWFrOlwiO1xuXG4gIGxldCBvZmZQZWFrVGV4dExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRMYXN0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtUZXh0TGFzdC50ZXh0Q29udGVudCA9XG4gICAgXCIgbWFuZGFnIHRpbCBmcmVkYWcgZm9lciBrbCAxNCwgbG9lcmRhZyBvZyBzb2VuZGFnIGVmdHIga2wgMThcIjtcblxuICBvZmZQZWFrVGV4dC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dEZpcnN0KTtcbiAgb2ZmUGVha1RleHQuYXBwZW5kQ2hpbGQob2ZmUGVha1RleHRMYXN0KTtcblxuICAvLyBDcmVhdGluZyBzZWNvbmQgbGluZVxuICBjb25zdCBwZWFrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dENvblwiKTtcblxuICBsZXQgcGVha1RleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dEZpcnN0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtUZXh0Rmlyc3QudGV4dENvbnRlbnQgPSBcIlBlYWs6XCI7XG5cbiAgbGV0IHBlYWtUZXh0TGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dExhc3QuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgcGVha1RleHRMYXN0LnRleHRDb250ZW50ID1cbiAgICBcIiBtYW5kYWcgdGlsIGZyZWRhZyBmb2VyIGtsIDE0LCBsb2VyZGFnIG9nIHNvZW5kYWcgZWZ0ciBrbCAxOFwiO1xuXG4gIHBlYWtUZXh0LmFwcGVuZENoaWxkKHBlYWtUZXh0Rmlyc3QpO1xuICBwZWFrVGV4dC5hcHBlbmRDaGlsZChwZWFrVGV4dExhc3QpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIGxpbmVzXG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dCk7XG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChwZWFrVGV4dCk7XG5cbiAgZW50cmVwcmlzUGFydC5hcHBlbmRDaGlsZChlbnRyeVByaXNCb3gpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclBhcnRcbiAgY29uc3QgZW5nYW5nc0VudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nc0VudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclxuICBjb25zdCBlbmdhbmdzRW50cmVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkVuZ2FuZ3MgRW50cmVcIjtcblxuICBlbmdhbmdzRW50cmVIZWFkZXIuYXBwZW5kQ2hpbGQoZW5nYW5nc0VudHJlSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3QgZW5nYW5nRW50cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbmdhbmdFbnRyZUNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nRW50cmVDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBvZmZQZWFrSGVhZGVyUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy50ZXh0Q29udGVudCA9IFwiRW50cmUgT2ZmIFBlYWtcIjtcblxuICBsZXQgb2ZmUGVha1Zva3NlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrVm9rc2VuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtWb2tzZW4udGV4dENvbnRlbnQgPSBcIlZva3NlbjogOTVrclwiO1xuXG4gIGxldCBvZmZQZWFrQm9lcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha0JvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtCb2Vybi50ZXh0Q29udGVudCA9IFwiQm9lcm46IDk1a3JcIjtcblxuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha0hlYWRlclByaXMpO1xuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uTGVmdC5hcHBlbmRDaGlsZChvZmZQZWFrQm9lcm4pO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHBlYWtIZWFkZXJQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtIZWFkZXJQcmlzLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtIZWFkZXJQcmlzLnRleHRDb250ZW50ID0gXCJFbnRyZSBQZWFrXCI7XG5cbiAgbGV0IHBlYWtWb2tzZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1Zva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrVm9rc2VuLnRleHRDb250ZW50ID0gXCJWb2tzZW46IDk1a3JcIjtcblxuICBsZXQgcGVha0JvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtCb2Vybi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrQm9lcm4udGV4dENvbnRlbnQgPSBcIkJvZXJuOiA5NWtyXCI7XG5cbiAgZW5nYW5nRW50cmVDb25SaWdodC5hcHBlbmRDaGlsZChwZWFrSGVhZGVyUHJpcyk7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha0JvZXJuKTtcblxuICAvLyBBcHBlbmRpbmcgbGFzdFxuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvbkxlZnQpO1xuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgbWVkbGVtc2thYkVudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkVudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IG1lZGxlbXNrYWJIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1lZGxlbXNrYWJIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJwcmlzSGVhZGVyXCIpO1xuICBtZWRsZW1za2FiSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWVkbGVtc2thYlwiO1xuXG4gIG1lZGxlbXNrYWJFbnRyZUhlYWRlci5hcHBlbmRDaGlsZChtZWRsZW1za2FiSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgbWVkbGVtc2thYnNib3hcbiAgY29uc3QgbWVkbGVtc2thYkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lZGxlbXNrYWJDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHN0YW5kYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHN0YW5kYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0YW5kYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTdGFuZGFyZCBtZWRsZW1za2FiXCI7XG5cbiAgbGV0IHN0YW5kYXJkUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdGFuZGFyZFByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgc3RhbmRhcmRQcmlzLnRleHRDb250ZW50ID0gXCIzOTlrciBwZXIgbWFhbmVkXCI7XG5cbiAgbWVkbGVtc2thYkNvbkxlZnQuYXBwZW5kQ2hpbGQoc3RhbmRhcmRIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uTGVmdC5hcHBlbmRDaGlsZChzdGFuZGFyZFByaXMpO1xuXG4gIC8vIENyZWF0aW5nIG1pZGRsZSBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25NaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uTWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBzdHVkaWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3R1ZGllSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0dWRpZUhlYWRlci50ZXh0Q29udGVudCA9IFwiU3R1ZGllIG1lZGxlbXNrYWJcIjtcblxuICBsZXQgc3R1ZGllUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdHVkaWVQcmlzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHN0dWRpZVByaXMudGV4dENvbnRlbnQgPSBcIjM1OWtyIHBlciBtYWFuZWRcIjtcblxuICBtZWRsZW1za2FiQ29uTWlkZGxlLmFwcGVuZENoaWxkKHN0dWRpZUhlYWRlcik7XG4gIG1lZGxlbXNrYWJDb25NaWRkbGUuYXBwZW5kQ2hpbGQoc3R1ZGllUHJpcyk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCBtZWRsZW1za2FiQ29uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGp1bmlvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBqdW5pb3JIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAganVuaW9ySGVhZGVyLnRleHRDb250ZW50ID0gXCJKdW5pb3IgbWVkbGVtc2thYlwiO1xuXG4gIGxldCBqdW5pb3JQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGp1bmlvclByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAganVuaW9yUHJpcy50ZXh0Q29udGVudCA9IFwiMjE5a3IgcGVyIG1hYW5lZFwiO1xuXG4gIG1lZGxlbXNrYWJDb25SaWdodC5hcHBlbmRDaGlsZChqdW5pb3JIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuYXBwZW5kQ2hpbGQoanVuaW9yUHJpcyk7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgbWVkbGVtc2thYkNvbi5hcHBlbmRDaGlsZChtZWRsZW1za2FiQ29uTGVmdCk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbk1pZGRsZSk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3Qga2xpcHBla29ydEhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcImVuZ2FuZ3NFbnRyZUhlYWRlclwiLCBcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgY29uc3Qga2xpcHBla29ydEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0XCI7XG5cbiAga2xpcHBla29ydEhlYWRlckNvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0SGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3Qga2xpcHBla29ydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2xpcHBla29ydENvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGtsaXBwZWtvcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBrbGlwcGVrb3J0SGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQga2xpcHBla29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnQudGV4dENvbnRlbnQgPSBcIjk1MGtyICgxMCBrbGlwKVwiO1xuXG4gIGtsaXBwZWtvcnRDb25MZWZ0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uTGVmdC5hcHBlbmRDaGlsZChrbGlwcGVrb3J0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb25SaWdodC5jbGFzc0xpc3QuYWRkKFwicHJpc0JveFwiKTtcblxuICBsZXQga2xpcHBla29ydFUxNkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0VTE2SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnRVMTZIZWFkZXIudGV4dENvbnRlbnQgPSBcIktsaXBwZWtvcnQgVS4xNlwiO1xuXG4gIGxldCBrbGlwcGVrb3J0VTE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtsaXBwZWtvcnRVMTYuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAga2xpcHBla29ydFUxNi50ZXh0Q29udGVudCA9IFwiNjAwa3IgKDEwIGtsaXApXCI7XG5cbiAga2xpcHBla29ydENvblJpZ2h0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRVMTZIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uUmlnaHQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydFUxNik7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAga2xpcHBla29ydENvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0Q29uTGVmdCk7XG4gIGtsaXBwZWtvcnRDb24uYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgdWRzdHlySGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdWRzdHlySGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IHVkc3R5ckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwicHJpc0hlYWRlclwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVWRzdHlyXCI7XG5cbiAgdWRzdHlySGVhZGVyQ29uLmFwcGVuZENoaWxkKHVkc3R5ckhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIEVudHJlYm94XG4gIGNvbnN0IHVkc3R5ckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgdWRzdHlyQ29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHVkc3R5ckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1ZHN0eXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgdWRzdHlySGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQgdWRzdHlyVm9rc2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5clZva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB1ZHN0eXJWb2tzZW4udGV4dENvbnRlbnQgPSBcIkxlamUgYWYgc2tvOiAzNWtyXCI7XG5cbiAgbGV0IHVkc3R5ckJvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5ckJvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHVkc3R5ckJvZXJuLnRleHRDb250ZW50ID0gXCJLYWxrOiAxMGtyXCI7XG5cbiAgdWRzdHlyQ29uTGVmdC5hcHBlbmRDaGlsZCh1ZHN0eXJIZWFkZXIpO1xuICB1ZHN0eXJDb25MZWZ0LmFwcGVuZENoaWxkKHVkc3R5clZva3Nlbik7XG4gIHVkc3R5ckNvbkxlZnQuYXBwZW5kQ2hpbGQodWRzdHlyQm9lcm4pO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0XG4gIHVkc3R5ckNvbi5hcHBlbmRDaGlsZCh1ZHN0eXJDb25MZWZ0KTtcblxuICAvLyBBcHBlbmRpbmcgYWxsIGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nRnJhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVudHJlcHJpc1BhcnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVuZ2FuZ3NFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5nYW5nRW50cmVDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lZGxlbXNrYWJFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydEhlYWRlckNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodWRzdHlySGVhZGVyQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1ZHN0eXJDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJpc3BhZ2U7XG4iLCJpbXBvcnQgcGFnZUNyZWF0ZXIgZnJvbSBcIi4vcGFnZUNyZWF0ZXJcIjtcblxuY29uc3QgYnRuQWN0aXZhdGlvbiA9IHtcbiAgcGFnZVN3aXRjaDogKHBhZ2UpID0+IHtcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ3JlYXRlcihwYWdlKSk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9LFxufTtcblxuZXhwb3J0IHsgYnRuQWN0aXZhdGlvbiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBwYWdlQ3JlYXRlciBmcm9tIFwiLi9wYWdlQ3JlYXRlci5qc1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDcmVhdGVyKFwiaG9tZVwiKSk7XG4iLCJpbXBvcnQgY3JlYXRlSG9tZXBhZ2UgZnJvbSBcIi4vUGFnZXMvaG9tZXBhZ2VcIjtcbmltcG9ydCBjcmVhdGVQcmlzcGFnZSBmcm9tIFwiLi9QYWdlcy9wcmlzXCI7XG5pbXBvcnQgY3JlYXRlSG9sZFBhZ2UgZnJvbSBcIi4vUGFnZXMvaG9sZFwiO1xuaW1wb3J0IGNyZWF0ZUhhbGxlcnBhZ2UgZnJvbSBcIi4vUGFnZXMvaGFsbGVyXCI7XG5pbXBvcnQgY3JlYXRlQWFyaHVzTm9yZCBmcm9tIFwiLi9QYWdlcy9oYWxsZXIvbm9yZFwiO1xuaW1wb3J0IGNyZWF0ZUV2ZW50cyBmcm9tIFwiLi9QYWdlcy9ldmVudHNcIjtcblxuaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuLy8gSW1nXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi9JbWcvYm91bGRlcnNMb2dvLnBuZ1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuL0ltZy9tZW51SWNvbi5wbmdcIjtcblxuY29uc3QgcGFnZUNyZWF0ZXIgPSAocGFnZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYm9keUNvblwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDcmVhdGVyKHBhZ2UpKTtcblxuICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlzXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByaXNwYWdlKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhvbGRcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9sZFBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFsbGVyXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhhbGxlcnBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWFyaHVzTm9yZFwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYXJodXNOb3JkKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImV2ZW50c1wiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFdmVudHMoKSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuY29uc3QgbWVudUNyZWF0ZXIgPSAocGFnZSkgPT4ge1xuICBjb25zdCBtZW51Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbi5jbGFzc0xpc3QuYWRkKFwibWVudUNvblwiKTtcblxuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gbG9nb1NyYztcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwiYm91bGRlcnNMb2dvXCIpO1xuXG4gIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJob21lXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJhci5jbGFzc0xpc3QuYWRkKFwibWVudUJhclwiKTtcblxuICBjb25zdCBtZW51QnRuUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5QcmlzLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuUHJpcy50ZXh0Q29udGVudCA9IFwiUFJJU1wiO1xuXG4gIG1lbnVCdG5QcmlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwicHJpc1wiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkhhbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5IYWxsZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5IYWxsZXIudGV4dENvbnRlbnQgPSBcIkhBTExFUlwiO1xuXG4gIG1lbnVCdG5IYWxsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJoYWxsZXJcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5GaXJzdHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0bkZpcnN0dGltZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5GaXJzdHRpbWVyLnRleHRDb250ZW50ID0gXCJGw5hSU1RFIEdBTkc/XCI7XG5cbiAgbWVudUJ0bkZpcnN0dGltZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICBjb25zdCBtZW51QnRuRXZlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0bkV2ZW50cy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0bkV2ZW50cy50ZXh0Q29udGVudCA9IFwiRVZFTlRTXCI7XG5cbiAgbWVudUJ0bkV2ZW50cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImV2ZW50c1wiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkhvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuSG9sZC5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0bkhvbGQudGV4dENvbnRlbnQgPSBcIkhPTERcIjtcblxuICBtZW51QnRuSG9sZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImhvbGRcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5UZXJtZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuVGVybWVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuVGVybWVyLnRleHRDb250ZW50ID0gXCJURVJNU1wiO1xuXG4gIG1lbnVCdG5UZXJtZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICBjb25zdCBsaW5rVG9Pd25QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmtUb093blBhZ2Uuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vYm91bGRlcnMuZGsvXCIpO1xuICBsaW5rVG9Pd25QYWdlLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgbGlua1RvT3duUGFnZS5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbGlua1RvT3duUGFnZS50ZXh0Q29udGVudCA9IFwiTGluayB0aWwgQm91bGRlcnNcIjtcblxuICBsaW5rVG9Pd25QYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XG5cbiAgLy8gQ3JlYXRpbmcgdGhlIHNpZGUgYmFyIGZvciB0aGUgbW9yZSBidG5cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29uc3Qgc2lkZWJhclJlbW92ZUFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhclJlbW92ZUFycm93LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyUmVtb3ZlQXJyb3dcIik7XG4gIHNpZGViYXJSZW1vdmVBcnJvdy50ZXh0Q29udGVudCA9IFwi4p6UXCI7XG5cbiAgc2lkZWJhclJlbW92ZUFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2lkZWJhci5zdHlsZS5yaWdodCA9IFwibWF4KC01MDBweCwgLTgwdncpXCI7XG4gIH0pO1xuXG4gIGNvbnN0IHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNpZGViYXJNZW51XCIpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclJlbW92ZUFycm93KTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgY29uc3QgbWVudUJ0bk1lcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuTWVyZS5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0bk1lcmUudGV4dENvbnRlbnQgPSBcIk1FUkVcIjtcblxuICBjb25zdCBhcHBlbmRTaWRlYmFyTWVudSA9IChzaXplKSA9PiB7XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWVudUNvbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICAgIHdoaWxlIChzaWRlYmFyTWVudS5maXJzdENoaWxkKSB7XG4gICAgICAgIHNpZGViYXJNZW51LnJlbW92ZUNoaWxkKHNpZGViYXJNZW51Lmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAoc2l6ZSA9PSBcImxhcmdlXCIpIHtcbiAgICAgICAgbWVudUJ0bkFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQobGlua1RvT3duUGFnZSk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNpZGViYXIuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuICAgIH0pO1xuICB9O1xuXG4gIG1lbnVCdG5NZXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYXBwZW5kU2lkZWJhck1lbnUoXCJzbWFsbFwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUljb25CdG4gPSBuZXcgSW1hZ2UoKTtcbiAgbWVudUljb25CdG4uc3JjID0gbWVudUljb247XG4gIG1lbnVJY29uQnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51SWNvbkJ0blwiKTtcblxuICBtZW51SWNvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFwcGVuZFNpZGViYXJNZW51KFwibGFyZ2VcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5BcnJheSA9IFtcbiAgICBtZW51QnRuUHJpcyxcbiAgICBtZW51QnRuSG9sZCxcbiAgICBtZW51QnRuSGFsbGVyLFxuICAgIG1lbnVCdG5GaXJzdHRpbWVyLFxuICAgIG1lbnVCdG5FdmVudHMsXG4gICAgbWVudUJ0blRlcm1lcixcbiAgICBtZW51QnRuTWVyZSxcbiAgXTtcblxuICBsZXQgc21hbGxNZW51ID0gMDtcbiAgbGV0IGxhcmdlTWVudSA9IDA7XG5cbiAgY29uc3QgYXBwZW5kTGFyZ2VNZW51ID0gKCkgPT4ge1xuICAgIHdoaWxlIChtZW51QmFyLmZpcnN0Q2hpbGQpIG1lbnVCYXIucmVtb3ZlQ2hpbGQobWVudUJhci5sYXN0Q2hpbGQpO1xuICAgIG1lbnVCdG5BcnJheS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIG1lbnVCYXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRTbWFsbE1lbnUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKG1lbnVCYXIuZmlyc3RDaGlsZCkgbWVudUJhci5yZW1vdmVDaGlsZChtZW51QmFyLmxhc3RDaGlsZCk7XG4gICAgbWVudUJhci5hcHBlbmRDaGlsZChtZW51SWNvbkJ0bik7XG4gIH07XG5cbiAgLy8gQ2hlY2tzIGlmIHRoZSB3aW5kb3cgaSBsYXJnZSBlbm91dGdoXG4gIGlmIChpbm5lcldpZHRoID4gMTIwMCkge1xuICAgIHNtYWxsTWVudSA9IDA7XG4gICAgbGFyZ2VNZW51ID0gMTtcbiAgICBhcHBlbmRMYXJnZU1lbnUoKTtcbiAgfSBlbHNlIHtcbiAgICBzbWFsbE1lbnUgPSAxO1xuICAgIGxhcmdlTWVudSA9IDA7XG4gICAgYXBwZW5kU21hbGxNZW51KCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgaWYgKGlubmVyV2lkdGggPiAxMjAwKSB7XG4gICAgICBpZiAobGFyZ2VNZW51ID09IDApIHtcbiAgICAgICAgYXBwZW5kTGFyZ2VNZW51KCk7XG4gICAgICAgIGxhcmdlTWVudSA9IDE7XG4gICAgICAgIHNtYWxsTWVudSA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzbWFsbE1lbnUgPT0gMCkge1xuICAgICAgICBhcHBlbmRTbWFsbE1lbnUoKTtcbiAgICAgICAgbGFyZ2VNZW51ID0gMDtcbiAgICAgICAgc21hbGxNZW51ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNjcm9sbE1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBpZiAobWVudUNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAtNDApIHtcbiAgICAgIG1lbnVDb24uY2xhc3NMaXN0LmFkZChcIm1lbnVTY3JvbGxcIik7XG4gICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IFwiMzBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51Q29uLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51U2Nyb2xsXCIpO1xuICAgICAgbG9nby5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICB9XG4gIH07XG5cbiAgc2Nyb2xsTWVudUZ1bmN0aW9uKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIHNjcm9sbE1lbnVGdW5jdGlvbigpO1xuICB9KTtcblxuICBtZW51Q29uLmFwcGVuZENoaWxkKGxvZ28pO1xuICBtZW51Q29uLmFwcGVuZENoaWxkKG1lbnVCYXIpO1xuXG4gIHJldHVybiBtZW51Q29uO1xufTtcblxuY29uc3QgZm9vdGVyQ3JlYXRlciA9ICgpID0+IHtcbiAgLy8gY3JlYXRlIGZvb3RlclxufTtcblxuY2xhc3MgZGlzcGxheUxpbmsge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWdTcmMsIGxpbmspIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW1nU3JjID0gaW1nU3JjO1xuICAgIHRoaXMubGluayA9IGxpbms7XG4gIH1cbiAgZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaG9sZEltZ0ZyYW1lXCIpO1xuICAgIGVsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhpcy5saW5rKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJnLnNyYyA9IHRoaXMuaW1nU3JjO1xuICAgIGJnLmNsYXNzTGlzdC5hZGQoXCJob2xkQmdJbWdcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRJbWdIZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuXG4gICAgY29uc3QgbGlua0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGlua0VsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhpcy5saW5rKTtcbiAgICBsaW5rRWwuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIGxpbmtFbC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiaG9sZExpbmtFbFwiKTtcbiAgICBsaW5rRWwudGV4dENvbnRlbnQgPSBcIkxpbmsgdGlsIEJvdWxkZXJzLmRrXCI7XG5cbiAgICBlbC5hcHBlbmRDaGlsZChiZyk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBlbC5hcHBlbmRDaGlsZChsaW5rRWwpO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlQ3JlYXRlcjtcbmV4cG9ydCB7IGRpc3BsYXlMaW5rIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=