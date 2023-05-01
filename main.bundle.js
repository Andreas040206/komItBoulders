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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/firsttimerBg.jpg */ "./src/Img/firsttimerBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/firsttimer.jpg */ "./src/Img/firsttimer.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.hallerContentCon {\n  gap: 120px;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 3px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n\n/* Aarhus Nord */\n\n.aarhusNordPart1Con {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 50px;\n  padding: 40px max(5vw, 20px);\n}\n\n.aarhusNordLeftOrRight {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.aarhusNordLidtomhallenHeader {\n  font-size: 40px;\n}\n\n.aarhusNordImg {\n  width: clamp(350px, 100%, 600px);\n}\n\n.aarhusNordPart2Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aarhusNordPart3Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 50px 0px;\n}\n\n.mapsMapAarhusNord {\n  height: 600px;\n  border: none;\n}\n\n/* Aarhus Nord END*/\n\n/* Terms */\n\n.termsPart {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 40px max(5vw, 20px);\n}\n\n.termsPartLeft {\n  display: flex;\n  flex-direction: column;\n  width: clamp(350px, 100%, 700px);\n}\n\n.termsPartRight {\n  display: flex;\n  flex-direction: column;\n}\n\n.termsImg1 {\n  height: min(20vw, 400px);\n}\n\n.termsImg2 {\n  height: min(600px, 30vw);\n}\n\n.termsImg3 {\n  height: min(600px, 30vw);\n}\n\n.termsTextCon {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n/* Terms END */\n\n/* Firsttimer */\n\n.firsttimerBgImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  height: 300px;\n  justify-content: center;\n}\n\n.firsttimeCon {\n  display: flex;\n  padding: 30px;\n  justify-content: space-between;\n}\n\n.firsttimerLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: calc(70vw - 60px);\n}\n\n.firsttimerImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  height: 800px;\n  width: 30vw;\n}\n\n.firsttimerTipsHeader {\n  font-size: 30px;\n}\n\n/* Firsttimer END */\n\n/* Media change */\n\n@media only screen and (max-width: 924px) {\n  .termsPart {\n    flex-direction: column;\n  }\n\n  .partTopHaller {\n    flex-direction: column;\n  }\n\n  .aarhusNordPart1Con {\n    flex-direction: column;\n  }\n}\n\n@media only screen and (max-width: 1400px) {\n  .termsPart {\n    flex-direction: column;\n  }\n  .termsPartLeft {\n    width: 90%;\n  }\n  .termsImg {\n    height: auto;\n    width: 100%;\n  }\n}\n\n/* Media change END*/\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\nbody {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.hallerContentCon {\n  gap: 120px;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 3px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n\n/* Aarhus Nord */\n\n.aarhusNordPart1Con {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 50px;\n  padding: 40px max(5vw, 20px);\n}\n\n.aarhusNordLeftOrRight {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.aarhusNordLidtomhallenHeader {\n  font-size: 40px;\n}\n\n.aarhusNordImg {\n  width: clamp(350px, 100%, 600px);\n}\n\n.aarhusNordPart2Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aarhusNordPart3Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 50px 0px;\n}\n\n.mapsMapAarhusNord {\n  height: 600px;\n  border: none;\n}\n\n/* Aarhus Nord END*/\n\n/* Terms */\n\n.termsPart {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 40px max(5vw, 20px);\n}\n\n.termsPartLeft {\n  display: flex;\n  flex-direction: column;\n  width: clamp(350px, 100%, 700px);\n}\n\n.termsPartRight {\n  display: flex;\n  flex-direction: column;\n}\n\n.termsImg1 {\n  height: min(20vw, 400px);\n}\n\n.termsImg2 {\n  height: min(600px, 30vw);\n}\n\n.termsImg3 {\n  height: min(600px, 30vw);\n}\n\n.termsTextCon {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n/* Terms END */\n\n/* Firsttimer */\n\n.firsttimerBgImg {\n  background-image: url(./Img/firsttimerBg.jpg);\n  height: 300px;\n  justify-content: center;\n}\n\n.firsttimeCon {\n  display: flex;\n  padding: 30px;\n  justify-content: space-between;\n}\n\n.firsttimerLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: calc(70vw - 60px);\n}\n\n.firsttimerImgFrame {\n  background-image: url(./Img/firsttimer.jpg);\n  height: 800px;\n  width: 30vw;\n}\n\n.firsttimerTipsHeader {\n  font-size: 30px;\n}\n\n/* Firsttimer END */\n\n/* Media change */\n\n@media only screen and (max-width: 924px) {\n  .termsPart {\n    flex-direction: column;\n  }\n\n  .partTopHaller {\n    flex-direction: column;\n  }\n\n  .aarhusNordPart1Con {\n    flex-direction: column;\n  }\n}\n\n@media only screen and (max-width: 1400px) {\n  .termsPart {\n    flex-direction: column;\n  }\n  .termsPartLeft {\n    width: 90%;\n  }\n  .termsImg {\n    height: auto;\n    width: 100%;\n  }\n}\n\n/* Media change END*/\n"],"sourceRoot":""}]);
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

/***/ "./src/Pages/firsttimer.js":
/*!*********************************!*\
  !*** ./src/Pages/firsttimer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createFirstTimer = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  // Creating display header
  const firsttimerImgFrame = document.createElement("div");
  firsttimerImgFrame.classList.add("imgFrame", "firsttimerBgImg");

  const firsttimerImgText = document.createElement("span");
  firsttimerImgText.classList.add("prisImgText");
  firsttimerImgText.textContent = "Første gang?";

  firsttimerImgFrame.appendChild(firsttimerImgText);

  // Creating bottom
  const firstimerCon = document.createElement("div");
  firstimerCon.classList.add("firsttimeCon");

  // Creating left part
  const leftSide = document.createElement("div");
  leftSide.classList.add("firsttimerLeft");

  const header1 = document.createElement("span");
  header1.classList.add("firsttimerTipsHeader", "thickText");
  header1.textContent = "Godt at vide / Tips og tricks";

  const header2 = document.createElement("div");
  header2.classList.add("firsttimerTipsHeader", "thickText");
  header2.textContent = "Første gang skal du...";

  const header3 = document.createElement("div");
  header3.classList.add("firsttimerTipsHeader", "thickText");
  header3.textContent = "Vi anbefalder...";

  leftSide.appendChild(header1);
  leftSide.appendChild(header2);
  leftSide.appendChild(header3);

  // Creating right part
  const rightSide = document.createElement("div");
  rightSide.classList.add("firsttimerImgFrame", "imgFrame");

  // Appending sides
  firstimerCon.appendChild(leftSide);
  firstimerCon.appendChild(rightSide);

  // Appending children
  content.appendChild(firsttimerImgFrame);
  content.appendChild(firstimerCon);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFirstTimer);


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
/* harmony import */ var _Img_aarhusNord_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Img/aarhusNord.jpg */ "./src/Img/aarhusNord.jpg");
/* harmony import */ var _Img_kortAarhusNord_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Img/kortAarhusNord.png */ "./src/Img/kortAarhusNord.png");



const createAarhusNord = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  // Creating first part
  const aarhusNordPart1Con = document.createElement("div");
  aarhusNordPart1Con.classList.add("aarhusNordPart1Con");

  // Creating left side
  const leftFirstCon = document.createElement("div");
  leftFirstCon.classList.add("aarhusNordLeftOrRight");

  const aarhusNordLidtomhallenHeader = document.createElement("span");
  aarhusNordLidtomhallenHeader.classList.add(
    "aarhusNordLidtomhallenHeader",
    "thickText"
  );
  aarhusNordLidtomhallenHeader.textContent = "Lidt om hallen";

  const underlineLidtOmHallen = document.createElement("div");
  underlineLidtOmHallen.classList.add("underlineHallerHeader");

  const aarhusNordLidtomhallenText = document.createElement("span");
  aarhusNordLidtomhallenText.classList.add("notThickText");
  aarhusNordLidtomhallenText.textContent =
    "Her staar der lidt om hallen, denne text er stadig under udvikling. Den ville selvfoelgelig vaere laengere saa det ser paennere ud og ikke saa tomt.";

  leftFirstCon.appendChild(aarhusNordLidtomhallenHeader);
  leftFirstCon.appendChild(underlineLidtOmHallen);
  leftFirstCon.appendChild(aarhusNordLidtomhallenText);

  // Creating right side
  const rightFirstCon = document.createElement("div");
  rightFirstCon.classList.add("aarhusNordLeftOrRight");

  const aarhusNordImg = new Image();
  aarhusNordImg.src = _Img_aarhusNord_jpg__WEBPACK_IMPORTED_MODULE_0__;
  aarhusNordImg.classList.add("aarhusNordImg");

  rightFirstCon.appendChild(aarhusNordImg);

  // Appending last children
  aarhusNordPart1Con.appendChild(leftFirstCon);
  aarhusNordPart1Con.appendChild(rightFirstCon);

  // Creating part 2
  const aarhusNordPart2Con = document.createElement("div");
  aarhusNordPart2Con.classList.add("aarhusNordPart2Con");

  const kortHeader = document.createElement("span");
  kortHeader.classList.add("thickText");
  kortHeader.textContent = "Her er et kort over hallen";

  const kortAarhusNord = new Image();
  kortAarhusNord.src = _Img_kortAarhusNord_png__WEBPACK_IMPORTED_MODULE_1__;
  kortAarhusNord.classList.add("kortAarhusNord");

  aarhusNordPart2Con.appendChild(kortHeader);
  aarhusNordPart2Con.appendChild(kortAarhusNord);

  // Creating part 3
  const aarhusNordPart3Con = document.createElement("div");
  aarhusNordPart3Con.classList.add("aarhusNordPart3Con");

  const findOsAarhusNordText = document.createElement("span");
  findOsAarhusNordText.classList.add("thickText");
  findOsAarhusNordText.style.fontSize = "60px";
  findOsAarhusNordText.textContent = "Find Os";

  const mapsMap = document.createElement("iframe");
  mapsMap.classList.add("mapsMapAarhusNord");
  mapsMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2219.2184124777673!2d10.179478615948153!3d56.20518468067678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c158a3a4c238f%3A0x8b2eb18a435d74cf!2sAarhus%20Boulders!5e0!3m2!1sen!2sdk!4v1682925212949!5m2!1sen!2sdk"
  );

  aarhusNordPart3Con.appendChild(findOsAarhusNordText);
  aarhusNordPart3Con.appendChild(mapsMap);

  // Appending last children
  content.appendChild(aarhusNordPart1Con);
  content.appendChild(aarhusNordPart2Con);
  content.appendChild(aarhusNordPart3Con);

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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./src/controller.js");


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

  firsttimerBtn.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_0__.btnActivation.pageSwitch("firsttimer");
  });

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

/***/ "./src/Pages/terms.js":
/*!****************************!*\
  !*** ./src/Pages/terms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Img_vaegge_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Img/vaegge.png */ "./src/Img/vaegge.png");
/* harmony import */ var _Img_greb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Img/greb.png */ "./src/Img/greb.png");
/* harmony import */ var _Img_bevaegelse_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/bevaegelse.png */ "./src/Img/bevaegelse.png");




const createTerms = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  // Creating first part
  const part1 = document.createElement("div");
  part1.classList.add("termsPart");

  // Creating left part
  const leftPart1 = document.createElement("div");
  leftPart1.classList.add("termsPartLeft");

  const leftPart1Header = document.createElement("span");
  leftPart1Header.classList.add("thickText");
  leftPart1Header.textContent = "Vægge";

  const leftPart1underline = document.createElement("div");
  leftPart1underline.classList.add("underlineHallerHeader");

  const leftPart1Text = document.createElement("div");
  leftPart1Text.classList.add("termsTextCon");

  let leftPart1Text1 = document.createElement("span");
  leftPart1Text1.classList.add("notThickText");
  leftPart1Text1.textContent =
    "Slab: Er betegnet som en væghældning på over 90o fra grundfladen. En rute på slab handler ofte om balance i stedet for styrke.";

  let leftPart1Text2 = document.createElement("span");
  leftPart1Text2.classList.add("notThickText");
  leftPart1Text2.textContent =
    "Face: Er vægge der har en hældning på under 90o fra gulvet.";

  let leftPart1Text3 = document.createElement("span");
  leftPart1Text3.classList.add("notThickText");
  leftPart1Text3.textContent =
    "Overhang: Er vægge med en kraftig face hældning, de er ofte en del tunge at klatre.";

  let leftPart1Text4 = document.createElement("span");
  leftPart1Text4.classList.add("notThickText");
  leftPart1Text4.textContent =
    "Roof: Bruges om vægge der er parallelle med gulvet, altså ingen hældning. Roof er for det meste meget tunge at klatre, og kræver en god teknik.";

  let leftPart1Text5 = document.createElement("span");
  leftPart1Text5.classList.add("notThickText");
  leftPart1Text5.textContent =
    "Ofte bliver vægge også beskrevet med deres hældning (F.eks. 20grader face)";

  leftPart1Text.appendChild(leftPart1Text1);
  leftPart1Text.appendChild(leftPart1Text2);
  leftPart1Text.appendChild(leftPart1Text3);
  leftPart1Text.appendChild(leftPart1Text4);
  leftPart1Text.appendChild(leftPart1Text5);

  leftPart1.appendChild(leftPart1Header);
  leftPart1.appendChild(leftPart1underline);
  leftPart1.appendChild(leftPart1Text);

  // Creating right part
  const rightPart1 = document.createElement("div");
  rightPart1.classList.add("termsPartRight");

  const vaeggeImg = new Image();
  vaeggeImg.src = _Img_vaegge_png__WEBPACK_IMPORTED_MODULE_0__;
  vaeggeImg.classList.add("termsImg", "termsImg1");

  rightPart1.appendChild(vaeggeImg);

  // Appending both sides
  part1.appendChild(leftPart1);
  part1.appendChild(rightPart1);

  // Creating part 2
  const part2 = document.createElement("div");
  part2.classList.add("termsPart");

  // Creating left part
  const leftPart2 = document.createElement("div");
  leftPart2.classList.add("termsPartLeft");

  const leftPart2Header = document.createElement("span");
  leftPart2Header.classList.add("thickText");
  leftPart2Header.textContent = "Greb";

  const leftPart2underline = document.createElement("div");
  leftPart2underline.classList.add("underlineHallerHeader");

  const leftPart2Text = document.createElement("div");
  leftPart2Text.classList.add("termsTextCon");

  let leftPart2Text1 = document.createElement("span");
  leftPart2Text1.classList.add("notThickText");
  leftPart2Text1.textContent =
    "Jug: Bruges om greb du kan tage fat i med alle tre fingerled. De er ofte gode at holde fast i.";

  let leftPart2Text2 = document.createElement("span");
  leftPart2Text2.classList.add("notThickText");
  leftPart2Text2.textContent =
    "Crimp: Er betegnelsen brugt om greb, man kun kan få fat i med det yderste finderled.";

  let leftPart2Text3 = document.createElement("span");
  leftPart2Text3.classList.add("notThickText");
  leftPart2Text3.textContent =
    "Slober: Er ofte rigtigt store greb. Man bruger hele hånden til at tage fat i dem, da de er lidt ujævne i overfladen.";

  let leftPart2Text4 = document.createElement("span");
  leftPart2Text4.classList.add("notThickText");
  leftPart2Text4.textContent =
    "Pocket: Også kaldet finger-pockets, er runde greb med en udhuling i midten, man kan holde fast i med fingrende.";

  let leftPart2Text5 = document.createElement("span");
  leftPart2Text5.classList.add("notThickText");
  leftPart2Text5.textContent =
    "Horn: Er et nogenlunde stort (Ofte spidst) greb, der stikker lige ud fra væggen eller lidt opad. Man tager fat i et horn, ved at ligge hele hånden rundt om det.";

  let leftPart2Text6 = document.createElement("span");
  leftPart2Text6.classList.add("notThickText");
  leftPart2Text6.textContent =
    "Pinch: Sidder mest normalt på hjørner af vægge, og kan godt bestå af flere greb. Når man tager fat i en pinch, skal man bruge hele hånden og spænde op mellem tommelfingeren og de andre fingre.";

  leftPart2Text.appendChild(leftPart2Text1);
  leftPart2Text.appendChild(leftPart2Text2);
  leftPart2Text.appendChild(leftPart2Text3);
  leftPart2Text.appendChild(leftPart2Text4);
  leftPart2Text.appendChild(leftPart2Text5);
  leftPart2Text.appendChild(leftPart2Text6);

  // Appding last
  leftPart2.appendChild(leftPart2Header);
  leftPart2.appendChild(leftPart2underline);
  leftPart2.appendChild(leftPart2Text);

  // Creating right part
  const rightPart2 = document.createElement("div");
  rightPart2.classList.add("termsPartRight");

  const grebImg = new Image();
  grebImg.src = _Img_greb_png__WEBPACK_IMPORTED_MODULE_1__;
  grebImg.classList.add("termsImg", "termsImg2");

  rightPart2.appendChild(grebImg);

  // Appending both sides
  part2.appendChild(leftPart2);
  part2.appendChild(rightPart2);

  // Creating part 3
  const part3 = document.createElement("div");
  part3.classList.add("termsPart");

  // Creating left part
  const leftPart3 = document.createElement("div");
  leftPart3.classList.add("termsPartLeft");

  const leftPart3Header = document.createElement("span");
  leftPart3Header.classList.add("thickText");
  leftPart3Header.textContent = "Greb";

  const leftPart3underline = document.createElement("div");
  leftPart3underline.classList.add("underlineHallerHeader");

  const leftPart3Text = document.createElement("span");
  leftPart3Text.classList.add("termsTextCon");

  let leftPart3Text1 = document.createElement("span");
  leftPart3Text1.classList.add("notThickText");
  leftPart3Text1.textContent =
    "Statisk: Er når man klatrer en bane stille og roligt, hvor man altid har fødder og hænder på grebene.";

  let leftPart3Text2 = document.createElement("span");
  leftPart3Text2.classList.add("notThickText");
  leftPart3Text2.textContent =
    "Dynamisk: Er hvor man hopper fra et greb til et andet, og på den måde slipper alt kontakt med grebene for en stund.";

  let leftPart3Text3 = document.createElement("span");
  leftPart3Text3.classList.add("notThickText");
  leftPart3Text3.textContent =
    "Heelhook: Også kaldet hælehug, er hvor man placerer udelukkende sin hæl på et greb, enten for at trække sig op eller for stabilitet.";

  let leftPart3Text4 = document.createElement("span");
  leftPart3Text4.classList.add("notThickText");
  leftPart3Text4.textContent =
    "Kneebar: Er hvor man fører sit knæ ind mellem to greb og bøjer det ud, til man sidder i spænd. ";

  let leftPart3Text5 = document.createElement("span");
  leftPart3Text5.classList.add("notThickText");
  leftPart3Text5.textContent =
    "Flag: Er bevægelsen hvor man sætter sig fod ind til et punkt på væggen, hvor der ikke er placeret et greb. Man gør det for at opnå en bedre stabilitet.";

  let leftPart3Text6 = document.createElement("span");
  leftPart3Text6.classList.add("notThickText");
  leftPart3Text6.textContent =
    "Match: Er hvor man enten samler begge hænder eller begge fødder på det samme greb. Denne bevægelse forekommer ofte fordi man har bruge for at skifte hånd eller fod.";

  leftPart3Text.appendChild(leftPart3Text1);
  leftPart3Text.appendChild(leftPart3Text2);
  leftPart3Text.appendChild(leftPart3Text3);
  leftPart3Text.appendChild(leftPart3Text4);
  leftPart3Text.appendChild(leftPart3Text5);
  leftPart3Text.appendChild(leftPart3Text6);

  leftPart3.appendChild(leftPart3Header);
  leftPart3.appendChild(leftPart3underline);
  leftPart3.appendChild(leftPart3Text);

  // Creating right part
  const rightPart3 = document.createElement("div");
  rightPart3.classList.add("termsPartRight");

  const bevaegelseImg = new Image();
  bevaegelseImg.src = _Img_bevaegelse_png__WEBPACK_IMPORTED_MODULE_2__;
  bevaegelseImg.classList.add("termsImg", "termsImg3");

  rightPart3.appendChild(bevaegelseImg);

  // Appending both sides
  part3.appendChild(leftPart3);
  part3.appendChild(rightPart3);

  // Appending all
  content.appendChild(part1);
  content.appendChild(part2);
  content.appendChild(part3);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTerms);


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
/* harmony import */ var _Pages_terms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/terms */ "./src/Pages/terms.js");
/* harmony import */ var _Pages_firsttimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/firsttimer */ "./src/Pages/firsttimer.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _Img_bouldersLogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Img/bouldersLogo.png */ "./src/Img/bouldersLogo.png");
/* harmony import */ var _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Img/menuIcon.png */ "./src/Img/menuIcon.png");











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
    case "terms":
      content.appendChild((0,_Pages_terms__WEBPACK_IMPORTED_MODULE_6__["default"])());
      break;
    case "firsttimer":
      content.appendChild((0,_Pages_firsttimer__WEBPACK_IMPORTED_MODULE_7__["default"])());
      break;
  }

  return content;
};

const menuCreater = (page) => {
  const menuCon = document.createElement("div");
  menuCon.classList.add("menuCon");

  const logo = new Image();
  logo.src = _Img_bouldersLogo_png__WEBPACK_IMPORTED_MODULE_9__;
  logo.classList.add("bouldersLogo");

  logo.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("home");
  });

  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");

  const menuBtnPris = document.createElement("div");
  menuBtnPris.classList.add("menuBtn");
  menuBtnPris.textContent = "PRIS";

  menuBtnPris.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("pris");
  });

  const menuBtnHaller = document.createElement("div");
  menuBtnHaller.classList.add("menuBtn");
  menuBtnHaller.textContent = "HALLER";

  menuBtnHaller.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("haller");
  });

  const menuBtnFirsttimer = document.createElement("div");
  menuBtnFirsttimer.classList.add("menuBtn");
  menuBtnFirsttimer.textContent = "FØRSTE GANG?";

  menuBtnFirsttimer.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("firsttimer");
  });

  const menuBtnEvents = document.createElement("div");
  menuBtnEvents.classList.add("menuBtn");
  menuBtnEvents.textContent = "EVENTS";

  menuBtnEvents.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("events");
  });

  const menuBtnHold = document.createElement("div");
  menuBtnHold.classList.add("menuBtn");
  menuBtnHold.textContent = "HOLD";

  menuBtnHold.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("hold");
  });

  const menuBtnTermer = document.createElement("div");
  menuBtnTermer.classList.add("menuBtn");
  menuBtnTermer.textContent = "TERMS";

  menuBtnTermer.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("terms");
  });

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
  menuIconBtn.src = _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_10__;
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

/***/ "./src/Img/bevaegelse.png":
/*!********************************!*\
  !*** ./src/Img/bevaegelse.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92fb1eb9d7a457a2afbe.png";

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

/***/ "./src/Img/firsttimer.jpg":
/*!********************************!*\
  !*** ./src/Img/firsttimer.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3a9876867d1503ab04d.jpg";

/***/ }),

/***/ "./src/Img/firsttimerBg.jpg":
/*!**********************************!*\
  !*** ./src/Img/firsttimerBg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2da6555794fe69b2600e.jpg";

/***/ }),

/***/ "./src/Img/greb.png":
/*!**************************!*\
  !*** ./src/Img/greb.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08fa29003aa57e0c8f79.png";

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

/***/ "./src/Img/kortAarhusNord.png":
/*!************************************!*\
  !*** ./src/Img/kortAarhusNord.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfa385b2e6084981b471.png";

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

/***/ "./src/Img/vaegge.png":
/*!****************************!*\
  !*** ./src/Img/vaegge.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de5d4e9b2c214eb14589.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUgsTUFBTSxNQUFNLG9CQUFvQjtBQUN2Six5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdEQUFnRCxnQkFBZ0IseUNBQXlDLHNCQUFzQiw4QkFBOEIsR0FBRyxjQUFjLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsR0FBRyxlQUFlLGdDQUFnQyxpQ0FBaUMsMkJBQTJCLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHVCQUF1QixvQkFBb0IsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixHQUFHLG1CQUFtQixpQkFBaUIsb0JBQW9CLHFCQUFxQixHQUFHLG1EQUFtRCw4QkFBOEIsaUJBQWlCLGFBQWEsa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixxQkFBcUIsZUFBZSxlQUFlLEdBQUcsbUJBQW1CLGlCQUFpQixnQkFBZ0Isb0JBQW9CLHFCQUFxQixjQUFjLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsY0FBYyx1QkFBdUIscUJBQXFCLHFCQUFxQixjQUFjLEdBQUcsY0FBYyxpQkFBaUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsa0JBQWtCLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLG9CQUFvQixhQUFhLDhCQUE4Qiw4QkFBOEIsa0JBQWtCLDRCQUE0QixxQkFBcUIsZUFBZSxHQUFHLHlCQUF5QixjQUFjLGVBQWUsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QixlQUFlLHNCQUFzQiw4QkFBOEIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsR0FBRyx3REFBd0Qsc0VBQXNFLG1CQUFtQixHQUFHLHFCQUFxQixzQkFBc0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsZ0JBQWdCLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0IscUJBQXFCLGlCQUFpQixzQkFBc0IsOEJBQThCLHVCQUF1Qix3QkFBd0IsR0FBRywyQkFBMkIsZ0JBQWdCLEdBQUcsdURBQXVELHNFQUFzRSxrQkFBa0IsNEJBQTRCLEdBQUcsa0JBQWtCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsZ0JBQWdCLDhCQUE4Qix1QkFBdUIsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsMkJBQTJCLGNBQWMsd0JBQXdCLDRCQUE0QixHQUFHLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFEQUFxRCxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsOEJBQThCLHVCQUF1QixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxtQkFBbUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLHVCQUF1QixHQUFHLHNCQUFzQixnQkFBZ0IsR0FBRyxvQkFBb0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsR0FBRyxpQkFBaUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLEdBQUcseURBQXlELGVBQWUsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QixjQUFjLHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLFlBQVksMkJBQTJCLHFCQUFxQixHQUFHLG9CQUFvQiw2QkFBNkIsR0FBRyxvQkFBb0Isa0JBQWtCLGlCQUFpQixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyw0QkFBNEIsb0JBQW9CLHdCQUF3QixnQkFBZ0IsMkJBQTJCLGlCQUFpQixHQUFHLHNCQUFzQixlQUFlLHlCQUF5QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixrQkFBa0Isb0JBQW9CLDRCQUE0QixjQUFjLHdCQUF3QixHQUFHLGtCQUFrQiw2QkFBNkIsNEJBQTRCLEdBQUcscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyw0QkFBNEIsZ0JBQWdCLEdBQUcsa0VBQWtFLGtCQUFrQix3QkFBd0IsbUNBQW1DLGNBQWMsaUNBQWlDLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEdBQUcsbUNBQW1DLG9CQUFvQixHQUFHLG9CQUFvQixxQ0FBcUMsR0FBRyx5QkFBeUIsaUNBQWlDLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLHlCQUF5QixpQ0FBaUMsa0JBQWtCLDJCQUEyQixjQUFjLHFCQUFxQixHQUFHLHdCQUF3QixrQkFBa0IsaUJBQWlCLEdBQUcsdURBQXVELGtCQUFrQix3QkFBd0IsbUNBQW1DLGNBQWMsaUNBQWlDLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIscUNBQXFDLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsZ0JBQWdCLDZCQUE2QixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsMkRBQTJELHNFQUFzRSxrQkFBa0IsNEJBQTRCLEdBQUcsbUJBQW1CLGtCQUFrQixrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsY0FBYyw2QkFBNkIsR0FBRyx5QkFBeUIsc0VBQXNFLGtCQUFrQixnQkFBZ0IsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsNkZBQTZGLGdCQUFnQiw2QkFBNkIsS0FBSyxzQkFBc0IsNkJBQTZCLEtBQUssMkJBQTJCLDZCQUE2QixLQUFLLEdBQUcsZ0RBQWdELGdCQUFnQiw2QkFBNkIsS0FBSyxvQkFBb0IsaUJBQWlCLEtBQUssZUFBZSxtQkFBbUIsa0JBQWtCLEtBQUssR0FBRyxrQ0FBa0MsZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxZQUFZLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxXQUFXLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxXQUFXLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSwrR0FBK0csTUFBTSxNQUFNLHNCQUFzQixVQUFVLGdCQUFnQix5Q0FBeUMsc0JBQXNCLDhCQUE4QixHQUFHLGNBQWMsR0FBRyxvQ0FBb0Msa0JBQWtCLDJCQUEyQixHQUFHLGVBQWUsZ0NBQWdDLGlDQUFpQywyQkFBMkIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsdUJBQXVCLG9CQUFvQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsbURBQW1ELDhCQUE4QixpQkFBaUIsYUFBYSxrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixlQUFlLGVBQWUsR0FBRyxtQkFBbUIsaUJBQWlCLGdCQUFnQixvQkFBb0IscUJBQXFCLGNBQWMsR0FBRyxjQUFjLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixjQUFjLHVCQUF1QixxQkFBcUIscUJBQXFCLGNBQWMsR0FBRyxjQUFjLGlCQUFpQixvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxrQkFBa0IsaUJBQWlCLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLGFBQWEsOEJBQThCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHFCQUFxQixlQUFlLEdBQUcseUJBQXlCLGNBQWMsZUFBZSx1QkFBdUIsb0JBQW9CLGlCQUFpQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyxrQkFBa0IsdUJBQXVCLGVBQWUsc0JBQXNCLDhCQUE4QixrQkFBa0IsMkJBQTJCLDBCQUEwQixHQUFHLHdEQUF3RCxnREFBZ0QsbUJBQW1CLEdBQUcscUJBQXFCLHNCQUFzQixvQkFBb0IscUJBQXFCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQixxQkFBcUIsaUJBQWlCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLHdCQUF3QixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyx1REFBdUQsZ0RBQWdELGtCQUFrQiw0QkFBNEIsR0FBRyxrQkFBa0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsR0FBRyxnQkFBZ0IsOEJBQThCLHVCQUF1QixHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsY0FBYyx3QkFBd0IsNEJBQTRCLEdBQUcseUJBQXlCLDhCQUE4Qix1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcscURBQXFELGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLG1CQUFtQixrQkFBa0IscUJBQXFCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLDRCQUE0QixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsdUJBQXVCLHVCQUF1QixHQUFHLGlCQUFpQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsR0FBRyx5REFBeUQsZUFBZSxHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLGNBQWMsc0JBQXNCLDRCQUE0QixHQUFHLG1CQUFtQixrQkFBa0IsWUFBWSwyQkFBMkIscUJBQXFCLEdBQUcsb0JBQW9CLDZCQUE2QixHQUFHLG9CQUFvQixrQkFBa0IsaUJBQWlCLEdBQUcsNEJBQTRCLG9CQUFvQixHQUFHLDRCQUE0QixvQkFBb0Isd0JBQXdCLGdCQUFnQiwyQkFBMkIsaUJBQWlCLEdBQUcsc0JBQXNCLGVBQWUseUJBQXlCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IsNEJBQTRCLGNBQWMsd0JBQXdCLEdBQUcsa0JBQWtCLDZCQUE2Qiw0QkFBNEIsR0FBRyxxQkFBcUIsZ0JBQWdCLHVCQUF1QixHQUFHLDRCQUE0QixnQkFBZ0IsR0FBRyxrRUFBa0Usa0JBQWtCLHdCQUF3QixtQ0FBbUMsY0FBYyxpQ0FBaUMsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLHFDQUFxQyxHQUFHLHlCQUF5QixpQ0FBaUMsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcseUJBQXlCLGlDQUFpQyxrQkFBa0IsMkJBQTJCLGNBQWMscUJBQXFCLEdBQUcsd0JBQXdCLGtCQUFrQixpQkFBaUIsR0FBRyx1REFBdUQsa0JBQWtCLHdCQUF3QixtQ0FBbUMsY0FBYyxpQ0FBaUMsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixxQ0FBcUMsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsZ0JBQWdCLDZCQUE2QixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRywyREFBMkQsa0RBQWtELGtCQUFrQiw0QkFBNEIsR0FBRyxtQkFBbUIsa0JBQWtCLGtCQUFrQixtQ0FBbUMsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixjQUFjLDZCQUE2QixHQUFHLHlCQUF5QixnREFBZ0Qsa0JBQWtCLGdCQUFnQixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyw2RkFBNkYsZ0JBQWdCLDZCQUE2QixLQUFLLHNCQUFzQiw2QkFBNkIsS0FBSywyQkFBMkIsNkJBQTZCLEtBQUssR0FBRyxnREFBZ0QsZ0JBQWdCLDZCQUE2QixLQUFLLG9CQUFvQixpQkFBaUIsS0FBSyxlQUFlLG1CQUFtQixrQkFBa0IsS0FBSyxHQUFHLDhDQUE4QztBQUN4aWxCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjZDOztBQUU3QztBQUN1RTtBQUNaO0FBQ1A7QUFDTzs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxxREFBVztBQUM3QztBQUNBLElBQUkseURBQXlCO0FBQzdCO0FBQ0E7O0FBRUEsNEJBQTRCLHFEQUFXO0FBQ3ZDO0FBQ0EsSUFBSSxtREFBbUI7QUFDdkI7QUFDQTs7QUFFQSx5QkFBeUIscURBQVc7QUFDcEM7QUFDQSxJQUFJLCtDQUFnQjtBQUNwQjtBQUNBOztBQUVBLDRCQUE0QixxREFBVztBQUN2QztBQUNBLElBQUksbURBQW1CO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRhO0FBQ0M7O0FBRU87QUFDQTtBQUNQO0FBQ0s7QUFDRjtBQUNJO0FBQ1Y7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXdCO0FBQzVCLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBZ0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIscURBQVc7QUFDeEM7QUFDQSxJQUFJLGdEQUFnQjtBQUNwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFXO0FBQ3BDO0FBQ0EsSUFBSSw2Q0FBWTtBQUNoQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLHFEQUFXO0FBQ3ZDO0FBQ0EsSUFBSSwrQ0FBZTtBQUNuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLHFEQUFXO0FBQ3RDO0FBQ0EsSUFBSSw4Q0FBYztBQUNsQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLHFEQUFXO0FBQ3hDO0FBQ0EsSUFBSSxnREFBZ0I7QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixxREFBVztBQUNuQztBQUNBLElBQUksMkNBQVc7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVNd0I7QUFDUTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnREFBZ0I7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQW9CO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGMkI7QUFDUztBQUNWO0FBQ1I7QUFDUTs7QUFFYjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHFEQUFXO0FBQ25DO0FBQ0EsSUFBSSx1REFBZTtBQUNuQjtBQUNBOztBQUVBLDhCQUE4QixxREFBVztBQUN6QztBQUNBLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0E7O0FBRUEsNkJBQTZCLHFEQUFXO0FBQ3hDO0FBQ0EsSUFBSSxvREFBaUI7QUFDckI7QUFDQTs7QUFFQSx5QkFBeUIscURBQVc7QUFDcEM7QUFDQSxJQUFJLGdEQUFhO0FBQ2pCO0FBQ0E7O0FBRUEsNkJBQTZCLHFEQUFXO0FBQ3hDO0FBQ0EsSUFBSSxvREFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVnQjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXdCO0FBQzVCLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0I5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVJlO0FBQ0o7QUFDWTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNENBQVk7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDBDQUFVO0FBQzFCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvZmlyc3R0aW1lci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaGFsbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9oYWxsZXIvbm9yZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaG9sZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL3ByaXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGFnZUNyZWF0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSW1nL2JvdWxkZXJzQmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9JbWcvZmlyc3R0aW1lckJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSW1nL2ZpcnN0dGltZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYW50YXJpOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHYW50YXJpXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDcxZjtcXG59XFxuXFxuLmJvZHlDb24ge1xcbn1cXG5cXG4vKiBVbml2ZXJzYWwgKi9cXG5cXG4uY29udGVudENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmltZ0ZyYW1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA5MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnRXaXRoQ2VuRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogODBweDtcXG4gIHBhZGRpbmc6IDYwcHggNTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRleHRDb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGhpY2tUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5ub3RUaGlja1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogVW5pdmVyc2FsIEVORCAqL1xcblxcbi8qIE1lbnUgKi9cXG5cXG4ubWVudUNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgaGVpZ2h0OiA3NnB4O1xcbiAgdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XFxufVxcblxcbi5tZW51U2Nyb2xsIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IC01MHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvdWxkZXJzTG9nbyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIHRyYW5zaXRpb246IDAuMjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51QmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudUJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuLm1lbnVCdG46aG92ZXIge1xcbiAgY29sb3I6IHJnYigxNjksIDE2OSwgMTY5KTtcXG59XFxuXFxuLm1lbnVJY29uQnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiBtYXgoLTUwMHB4LCAtODB2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaWRlYmFyUmVtb3ZlQXJyb3cge1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogNDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXJSZW1vdmVBcnJvdzpob3ZlciB7XFxuICBjb2xvcjogI2MzYzNjMztcXG59XFxuXFxuLnNpZGViYXJNZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwcHg7XFxuICBwYWRkaW5nOiAwcHggNTBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogTWVudSBFTkQgKi9cXG5cXG4vKiBIb21lcGFnZSAqL1xcblxcbi5ob21lcGFnZUJnSW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG59XFxuXFxuLmhvbWVwYWdlQmdUZXh0IHtcXG4gIG1hcmdpbi10b3A6IDI1MHB4O1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDgwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5maXJzdHRpbWVyQnRuIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjk0NDA7XFxuICBwYWRkaW5nOiAyNXB4IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZmlyc3R0aW1lckJ0bjphY3RpdmUge1xcbiAgc2NhbGU6IDEuMDE7XFxufVxcblxcbi8qIEhvbWVwYWdlIEVNRCAqL1xcblxcbi8qIHByaXMgKi9cXG5cXG4ucHJpc0ltZ0ZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmlzSW1nVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZW50cnlQYXJ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDQ3MWY7XFxuICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxufVxcblxcbi5wcmlzQm94IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW5nYW5nc0VudHJlSGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjk0NDA7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxufVxcblxcbi5wcmlzSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLyogcHJpcyBFTUQgKi9cXG5cXG4vKiBIb2xkICAqL1xcblxcbi5ob2xkSGVhZGVyQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbGRIZWFkZXJUZXh0IHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmhvbGRJbWdGcmFtZSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ob2xkQmdJbWcge1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IG1heCgxMDAlLCA4MDBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ob2xkQmdJbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTU7XFxufVxcblxcbi5ob2xkSW1nSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhvbGRMaW5rRWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIEhvbGQgRU5EICovXFxuXFxuLyogaGFsbGVyICovXFxuXFxuLmhhbGxlckNvbnRlbnRDb24ge1xcbiAgZ2FwOiAxMjBweDtcXG59XFxuXFxuLnBhcnRUb3BIYWxsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDV2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFydE9mVG9wQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5tYXBUZXh0SGFsbGVyIHtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLm1hcHNNYXBIYWxsZXIge1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhhbGxlckludHJvVGV4dEhlYWRlciB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi51bmRlcmxpbmVIYWxsZXJIZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmhhbGxlckludHJvVGV4dCB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5hYWJuaW5ndGlkZXJUZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wYXJ0Qm90dG9tSGFsbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmhhbGxlckxpbmtDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmhhbGxlckZyYW1lIHtcXG4gIGhlaWdodDogbWluKDQwMHB4LCA5MHZ3KTtcXG4gIHdpZHRoOiBtaW4oNDAwcHgsIDkwdncpO1xcbn1cXG5cXG4uaGFsbGVyTGlua1RleHQge1xcbiAgd2lkdGg6IDc1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51bmRlcmxpbmVIYWxsZXJCb3R0b20ge1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi8qIGhhbGxlciBFTkQgKi9cXG5cXG4vKiBBYXJodXMgTm9yZCAqL1xcblxcbi5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiA0MHB4IG1heCg1dncsIDIwcHgpO1xcbn1cXG5cXG4uYWFyaHVzTm9yZExlZnRPclJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZEltZyB7XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDYwMHB4KTtcXG59XFxuXFxuLmFhcmh1c05vcmRQYXJ0MkNvbiB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCg1dncsIDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkUGFydDNDb24ge1xcbiAgcGFkZGluZzogMjBweCBtYXgoNXZ3LCAyMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IDBweDtcXG59XFxuXFxuLm1hcHNNYXBBYXJodXNOb3JkIHtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEFhcmh1cyBOb3JkIEVORCovXFxuXFxuLyogVGVybXMgKi9cXG5cXG4udGVybXNQYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogNDBweCBtYXgoNXZ3LCAyMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydExlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDcwMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVybXNJbWcxIHtcXG4gIGhlaWdodDogbWluKDIwdncsIDQwMHB4KTtcXG59XFxuXFxuLnRlcm1zSW1nMiB7XFxuICBoZWlnaHQ6IG1pbig2MDBweCwgMzB2dyk7XFxufVxcblxcbi50ZXJtc0ltZzMge1xcbiAgaGVpZ2h0OiBtaW4oNjAwcHgsIDMwdncpO1xcbn1cXG5cXG4udGVybXNUZXh0Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4vKiBUZXJtcyBFTkQgKi9cXG5cXG4vKiBGaXJzdHRpbWVyICovXFxuXFxuLmZpcnN0dGltZXJCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmlyc3R0aW1lckxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogY2FsYyg3MHZ3IC0gNjBweCk7XFxufVxcblxcbi5maXJzdHRpbWVySW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGhlaWdodDogODAwcHg7XFxuICB3aWR0aDogMzB2dztcXG59XFxuXFxuLmZpcnN0dGltZXJUaXBzSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLyogRmlyc3R0aW1lciBFTkQgKi9cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyNHB4KSB7XFxuICAudGVybXNQYXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wYXJ0VG9wSGFsbGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAudGVybXNQYXJ0TGVmdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAudGVybXNJbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgRU5EKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFFbEIsU0FBUzs7QUFFVDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUEsYUFBYTs7QUFFYixhQUFhOztBQUViO0VBQ0UseURBQTJDO0VBQzNDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7O0FBRWpCLFNBQVM7O0FBRVQ7RUFDRSx5REFBMkM7RUFDM0MsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFFYixVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWIsV0FBVzs7QUFFWDtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGVBQWU7O0FBRWYsZ0JBQWdCOztBQUVoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQSxtQkFBbUI7O0FBRW5CLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQSxjQUFjOztBQUVkLGVBQWU7O0FBRWY7RUFDRSx5REFBNkM7RUFDN0MsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseURBQTJDO0VBQzNDLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjs7QUFFbkIsaUJBQWlCOztBQUVqQjtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0JBQW9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdhbnRhcmk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkdhbnRhcmlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbn1cXG5cXG4uYm9keUNvbiB7XFxufVxcblxcbi8qIFVuaXZlcnNhbCAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDkwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFydFdpdGhDZW5FbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogNjBweCA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGV4dENvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aGlja1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5vdFRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBVbml2ZXJzYWwgRU5EICovXFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51Q29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMzBweDtcXG59XFxuXFxuLm1lbnVTY3JvbGwge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogLTUwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm91bGRlcnNMb2dvIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogMC4yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ubWVudUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG4ubWVudUljb25CdG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IG1heCgtNTAwcHgsIC04MHZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXJSZW1vdmVBcnJvdyB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjYzNjM2MzO1xcbn1cXG5cXG4uc2lkZWJhck1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmhvbWVwYWdlQmdJbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2JvdWxkZXJzQmcuanBnKTtcXG4gIGhlaWdodDogMTAwMHB4O1xcbn1cXG5cXG4uaG9tZXBhZ2VCZ1RleHQge1xcbiAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogODB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDI1cHggNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5maXJzdHRpbWVyQnRuOmFjdGl2ZSB7XFxuICBzY2FsZTogMS4wMTtcXG59XFxuXFxuLyogSG9tZXBhZ2UgRU1EICovXFxuXFxuLyogcHJpcyAqL1xcblxcbi5wcmlzSW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2JvdWxkZXJzQmcuanBnKTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaXNJbWdUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5lbnRyeVBhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDcxZjtcXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcXG59XFxuXFxuLnByaXNCb3gge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbmdhbmdzRW50cmVIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLnByaXNIZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4vKiBwcmlzIEVNRCAqL1xcblxcbi8qIEhvbGQgICovXFxuXFxuLmhvbGRIZWFkZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9sZEhlYWRlclRleHQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaG9sZEltZ0ZyYW1lIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZyB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDgwMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xNTtcXG59XFxuXFxuLmhvbGRJbWdIZWFkZXIge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZExpbmtFbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogSG9sZCBFTkQgKi9cXG5cXG4vKiBoYWxsZXIgKi9cXG5cXG4uaGFsbGVyQ29udGVudENvbiB7XFxuICBnYXA6IDEyMHB4O1xcbn1cXG5cXG4ucGFydFRvcEhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHggNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0T2ZUb3BDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLm1hcFRleHRIYWxsZXIge1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4ubWFwc01hcEhhbGxlciB7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmFhYm5pbmd0aWRlclRleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnBhcnRCb3R0b21IYWxsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGFsbGVyTGlua0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaGFsbGVyRnJhbWUge1xcbiAgaGVpZ2h0OiBtaW4oNDAwcHgsIDkwdncpO1xcbiAgd2lkdGg6IG1pbig0MDBweCwgOTB2dyk7XFxufVxcblxcbi5oYWxsZXJMaW5rVGV4dCB7XFxuICB3aWR0aDogNzV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckJvdHRvbSB7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLyogaGFsbGVyIEVORCAqL1xcblxcbi8qIEFhcmh1cyBOb3JkICovXFxuXFxuLmFhcmh1c05vcmRQYXJ0MUNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDQwcHggbWF4KDV2dywgMjBweCk7XFxufVxcblxcbi5hYXJodXNOb3JkTGVmdE9yUmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZExpZHRvbWhhbGxlbkhlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkSW1nIHtcXG4gIHdpZHRoOiBjbGFtcCgzNTBweCwgMTAwJSwgNjAwcHgpO1xcbn1cXG5cXG4uYWFyaHVzTm9yZFBhcnQyQ29uIHtcXG4gIHBhZGRpbmc6IDIwcHggbWF4KDV2dywgMjBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRQYXJ0M0NvbiB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCg1dncsIDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDUwcHggMHB4O1xcbn1cXG5cXG4ubWFwc01hcEFhcmh1c05vcmQge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQWFyaHVzIE5vcmQgRU5EKi9cXG5cXG4vKiBUZXJtcyAqL1xcblxcbi50ZXJtc1BhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiA0MHB4IG1heCg1dncsIDIwcHgpO1xcbn1cXG5cXG4udGVybXNQYXJ0TGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgzNTBweCwgMTAwJSwgNzAwcHgpO1xcbn1cXG5cXG4udGVybXNQYXJ0UmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXJtc0ltZzEge1xcbiAgaGVpZ2h0OiBtaW4oMjB2dywgNDAwcHgpO1xcbn1cXG5cXG4udGVybXNJbWcyIHtcXG4gIGhlaWdodDogbWluKDYwMHB4LCAzMHZ3KTtcXG59XFxuXFxuLnRlcm1zSW1nMyB7XFxuICBoZWlnaHQ6IG1pbig2MDBweCwgMzB2dyk7XFxufVxcblxcbi50ZXJtc1RleHRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxufVxcbi8qIFRlcm1zIEVORCAqL1xcblxcbi8qIEZpcnN0dGltZXIgKi9cXG5cXG4uZmlyc3R0aW1lckJnSW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0ltZy9maXJzdHRpbWVyQmcuanBnKTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0dGltZUNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZpcnN0dGltZXJMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IGNhbGMoNzB2dyAtIDYwcHgpO1xcbn1cXG5cXG4uZmlyc3R0aW1lckltZ0ZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0ltZy9maXJzdHRpbWVyLmpwZyk7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgd2lkdGg6IDMwdnc7XFxufVxcblxcbi5maXJzdHRpbWVyVGlwc0hlYWRlciB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi8qIEZpcnN0dGltZXIgRU5EICovXFxuXFxuLyogTWVkaWEgY2hhbmdlICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjRweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGFydFRvcEhhbGxlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWFyaHVzTm9yZFBhcnQxQ29uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIC50ZXJtc1BhcnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLnRlcm1zUGFydExlZnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLnRlcm1zSW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLyogTWVkaWEgY2hhbmdlIEVORCovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5TGluayB9IGZyb20gXCIuLi9wYWdlQ3JlYXRlclwiO1xuXG4vLyBJbWdcbmltcG9ydCBsYXRlTmlnaHRCb3VsZGVyaW5nSW1nU3JjIGZyb20gXCIuLi9JbWcvbGF0ZU5pZ2h0Qm91bGRlcmluZy5qcGdcIjtcbmltcG9ydCBzdHVkZW50RnJpZGF5SW1nU3JjIGZyb20gXCIuLi9JbWcvc3R1ZGVudEZyaWRheS5wbmdcIjtcbmltcG9ydCBjbGltYmF0aG9uSW1nU3JjIGZyb20gXCIuLi9JbWcvY2xpbWF0aG9uLmpwZ1wiO1xuaW1wb3J0IHN1bm55U2F0dXJkYXlJbWdTcmMgZnJvbSBcIi4uL0ltZy9zdW5ueVNhdHVyZGF5LmpwZ1wiO1xuXG5jb25zdCBjcmVhdGVFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIGNvbnN0IGxhdGVOaWdodEJvdWxkZXJpbmcgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJMYXRlIE5pZ2h0IEJvdWxkZXJpbmdcIixcbiAgICBsYXRlTmlnaHRCb3VsZGVyaW5nSW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9sbmJcIlxuICApO1xuXG4gIGNvbnN0IHN0dWRlbnRGcmlkYXkgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJTdHVkZW50IEZyaWRheVwiLFxuICAgIHN0dWRlbnRGcmlkYXlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL3N0dWRlbnRmcmlkYXlcIlxuICApO1xuXG4gIGNvbnN0IGNsaW1iYXRob24gPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJDbGltYmF0aG9uXCIsXG4gICAgY2xpbWJhdGhvbkltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvY2xpbWJhdGhvblwiXG4gICk7XG5cbiAgY29uc3Qgc3VubnlTYXR1cmRheSA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIlN1bm55IFNhdHVyZGF5XCIsXG4gICAgc3VubnlTYXR1cmRheUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvc3VubnlzYXR1cmRheVwiXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChsYXRlTmlnaHRCb3VsZGVyaW5nLmVsKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN0dWRlbnRGcmlkYXkuZWwoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpbWJhdGhvbi5lbCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdW5ueVNhdHVyZGF5LmVsKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXZlbnRzO1xuIiwiY29uc3QgY3JlYXRlRmlyc3RUaW1lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgZGlzcGxheSBoZWFkZXJcbiAgY29uc3QgZmlyc3R0aW1lckltZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3R0aW1lckltZ0ZyYW1lLmNsYXNzTGlzdC5hZGQoXCJpbWdGcmFtZVwiLCBcImZpcnN0dGltZXJCZ0ltZ1wiKTtcblxuICBjb25zdCBmaXJzdHRpbWVySW1nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmaXJzdHRpbWVySW1nVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ1RleHRcIik7XG4gIGZpcnN0dGltZXJJbWdUZXh0LnRleHRDb250ZW50ID0gXCJGw7hyc3RlIGdhbmc/XCI7XG5cbiAgZmlyc3R0aW1lckltZ0ZyYW1lLmFwcGVuZENoaWxkKGZpcnN0dGltZXJJbWdUZXh0KTtcblxuICAvLyBDcmVhdGluZyBib3R0b21cbiAgY29uc3QgZmlyc3RpbWVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RpbWVyQ29uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBwYXJ0XG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJMZWZ0XCIpO1xuXG4gIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyMS5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lclRpcHNIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhlYWRlcjEudGV4dENvbnRlbnQgPSBcIkdvZHQgYXQgdmlkZSAvIFRpcHMgb2cgdHJpY2tzXCI7XG5cbiAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlcjIuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJUaXBzSGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBoZWFkZXIyLnRleHRDb250ZW50ID0gXCJGw7hyc3RlIGdhbmcgc2thbCBkdS4uLlwiO1xuXG4gIGNvbnN0IGhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIzLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVyVGlwc0hlYWRlclwiLCBcInRoaWNrVGV4dFwiKTtcbiAgaGVhZGVyMy50ZXh0Q29udGVudCA9IFwiVmkgYW5iZWZhbGRlci4uLlwiO1xuXG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIyKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyMyk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgcGFydFxuICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJJbWdGcmFtZVwiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIC8vIEFwcGVuZGluZyBzaWRlc1xuICBmaXJzdGltZXJDb24uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuICBmaXJzdGltZXJDb24uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdHRpbWVySW1nRnJhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZpcnN0aW1lckNvbik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGaXJzdFRpbWVyO1xuIiwiaW1wb3J0IHsgZGlzcGxheUxpbmsgfSBmcm9tIFwiLi4vcGFnZUNyZWF0ZXJcIjtcbmltcG9ydCB7IGJ0bkFjdGl2YXRpb24gfSBmcm9tIFwiLi4vY29udHJvbGxlclwiO1xuXG5pbXBvcnQgYWFyaHVzTm9yZEltZ1NyYyBmcm9tIFwiLi4vSW1nL2Fhcmh1c05vcmQuanBnXCI7XG5pbXBvcnQgYWFyaHVzQ2l0eUltZ1NyYyBmcm9tIFwiLi4vSW1nL2Fhcmh1c0NpdHkuanBnXCI7XG5pbXBvcnQgb2RlbnNlSW1nU3JjIGZyb20gXCIuLi9JbWcvb2RlbnNlLmpwZWdcIjtcbmltcG9ydCBhYXJodXNTeWRJbWdTcmMgZnJvbSBcIi4uL0ltZy9hYXJodXNTeWQuanBnXCI7XG5pbXBvcnQgaHZpZG92cmVJbWdTcmMgZnJvbSBcIi4uL0ltZy9odmlkb3ZyZS5qcGdcIjtcbmltcG9ydCBrYmhTeWRoYXZuSW1nU3JjIGZyb20gXCIuLi9JbWcva2JoU3lkaGF2bi5qcGdcIjtcbmltcG9ydCB2YWxieUltZ1NyYyBmcm9tIFwiLi4vSW1nL3ZhbGJ5LmpwZ1wiO1xuXG5jb25zdCBjcmVhdGVIYWxsZXJwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcImhhbGxlckNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgdGhlIHVwcGVyIHBhcnQgd2l0aCB0ZXh0IGFuZCBtYXBcbiAgY29uc3QgZmlyc3RwYXJ0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0Q29uLmNsYXNzTGlzdC5hZGQoXCJwYXJ0VG9wSGFsbGVyXCIpO1xuXG4gIC8vIENyZWF0aW5nIFJJR0hUISBwYXJ0XG4gIGNvbnN0IGZpcnN0cGFydFJpZ2h0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBoYWxsZXJJbnRyb1RleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVySW50cm9UZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJJbnRyb1RleHRIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhhbGxlckludHJvVGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiSGFsbGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lSGFsbGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgaGFsbGVySW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhhbGxlckludHJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0XCIsIFwibm90VGhpY2tUZXh0XCIpO1xuICBoYWxsZXJJbnRyb1RleHQudGV4dENvbnRlbnQgPVxuICAgIFwiVm9yZXMgaGFsbGVyIGxpZ2dlciBvdmVyIGhlbGUgbGFuZGV0IG9nIGVyIGFhYmVuIGZvciBiYWFkZSBkaWcgb2cgZGluZSB2ZW5uZXIsIHZpIGdsYWVkZXIgb3MgdGlsIGF0IHNlIGRpZy4gQWxsZSB2b3JlcyBoYWxsZXIgaGFyIGFhYmVuIHBhYSBzYW1tZSB0aWQsIHNhYSBhbGxlIHRpZGVyIGdhZWxkZXIgaSBhbGxlIGhhbGRlclwiO1xuXG4gIGNvbnN0IGFhYm5pbmdzdGlkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWFibmluZ3N0aWRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0SGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBhYWJuaW5nc3RpZGVySGVhZGVyLnRleHRDb250ZW50ID0gXCLDhWJuaW5nc3RpZGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZGVybGluZUhhbGxlckhlYWRlcjIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBhYWJuaW5nc3RpZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhYWJuaW5nc3RpZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiYWFibmluZ3RpZGVyVGV4dFwiKTtcbiAgYWFibmluZ3N0aWRlclRleHQudGV4dENvbnRlbnQgPSBcIkZyYSAxMCAtIDIyIEh2ZXIgZGFnIVwiO1xuXG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dEhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUhhbGxlckhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dCk7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGFhYm5pbmdzdGlkZXJIZWFkZXIpO1xuICBmaXJzdHBhcnRSaWdodENvbi5hcHBlbmRDaGlsZCh1bmRlcmxpbmVIYWxsZXJIZWFkZXIyKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoYWFibmluZ3N0aWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIExFRlQhIHBhcnRcbiAgY29uc3QgZmlyc3RwYXJ0TGVmdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0cGFydExlZnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBtYXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1hcFRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcIm1hcFRleHRIYWxsZXJcIik7XG4gIG1hcFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiSGVyIGthbiBkdSBzZSBldCBrb3J0IG92ZXIgYWxsZSB2b3JlcyBmb3Jza2VsbGlnZSBhZmRlbGluZ2VyXCI7XG5cbiAgY29uc3QgbWFwc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIG1hcHNNYXAuc2V0QXR0cmlidXRlKFxuICAgIFwic3JjXCIsXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTYhMW0xMiExbTMhMWQxMTQwNDMyLjQ2ODQ5NTQ1MSEyZDEwLjcyNjcwNzk5NDk3MjQzOCEzZDU2LjA2MzU2MzYwNzc3NzEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITJtMSExc2JvdWxkZXJzITVlMCEzbTIhMXNlbiEyc2RrITR2MTY4Mjc3MjM2OTQxNSE1bTIhMXNlbiEyc2RrXCJcbiAgKTtcbiAgbWFwc01hcC5jbGFzc0xpc3QuYWRkKFwibWFwc01hcEhhbGxlclwiKTtcblxuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcFRleHQpO1xuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcHNNYXApO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRSaWdodENvbik7XG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRMZWZ0Q29uKTtcblxuICAvLyBDcmVhdGluZyBsb3dlcnBhcnRcbiAgY29uc3Qgc2Vjb25kcGFydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZHBhcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRCb3R0b21IYWxsZXJcIik7XG5cbiAgY29uc3QgaGFsbGVyTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVyTGlua1RleHQuY2xhc3NMaXN0LmFkZChcImhhbGxlckxpbmtUZXh0XCIsIFwidGhpY2tUZXh0XCIpO1xuICBoYWxsZXJMaW5rVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJIZXJ1bmRlciBrYW4gZHUgbGFlc2UgbWVyZSBvbSBkZSBmb3Jza2VsbGlnZSBoYWxsZXJcIjtcblxuICBjb25zdCB1bmRlcmxpbmVIYWxsZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmRlcmxpbmVIYWxsZXJCb3R0b20uY2xhc3NMaXN0LmFkZChcbiAgICBcInVuZGVybGluZUhhbGxlckhlYWRlclwiLFxuICAgIFwidW5kZXJsaW5lSGFsbGVyQm90dG9tXCJcbiAgKTtcblxuICAvLyBDcmVhdGluZyBoYWxsZXJsaW5rIGNvbnRhaW5lclxuICBjb25zdCBoYWxsZXJMaW5rQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGFsbGVyTGlua0Nvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyTGlua0NvblwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzTm9yZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgYWFyaHVzTm9yZENvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImFhcmh1c05vcmRcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYXJodXNOb3JkRWwuY2xhc3NMaXN0LmFkZChcImhvbGRJbWdGcmFtZVwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQmcgPSBuZXcgSW1hZ2UoKTtcbiAgYWFyaHVzTm9yZEJnLnNyYyA9IGFhcmh1c05vcmRJbWdTcmM7XG4gIGFhcmh1c05vcmRCZy5jbGFzc0xpc3QuYWRkKFwiaG9sZEJnSW1nXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRJbWdIZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWFyaHVzIE5vcmRcIjtcblxuICBhYXJodXNOb3JkRWwuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZEJnKTtcbiAgYWFyaHVzTm9yZEVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgYWFyaHVzTm9yZENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkRWwpO1xuXG4gIGNvbnN0IGFhcmh1c0NpdHlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWFyaHVzQ2l0eUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzQ2l0eUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJBYXJodXMgQ2l0eVwiLFxuICAgIGFhcmh1c0NpdHlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c2NcIlxuICApO1xuXG4gIGFhcmh1c0NpdHlDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUxpbmsuZWwoKSk7XG5cbiAgY29uc3Qgb2RlbnNlTGlua0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9kZW5zZUxpbmtDb24uY2xhc3NMaXN0LmFkZChcImhhbGxlckZyYW1lXCIpO1xuXG4gIGNvbnN0IG9kZW5zZUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJPZGVuc2VcIixcbiAgICBvZGVuc2VJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL29kZW5zZVwiXG4gICk7XG5cbiAgb2RlbnNlTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rLmVsKCkpO1xuXG4gIGNvbnN0IGFhcmh1c1N5ZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c1N5ZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzU3lkTGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkFhcmh1cyBTeWRcIixcbiAgICBhYXJodXNTeWRJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c3N5ZFwiXG4gICk7XG5cbiAgYWFyaHVzU3lkQ29uLmFwcGVuZENoaWxkKGFhcmh1c1N5ZExpbmsuZWwoKSk7XG5cbiAgY29uc3QgaHZpZG92cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodmlkb3ZyZUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgaHZpZG92cmVMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiS0JIIFN5ZGhhdm5cIixcbiAgICBodmlkb3ZyZUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaHZpZG92cmVcIlxuICApO1xuXG4gIGh2aWRvdnJlQ29uLmFwcGVuZENoaWxkKGh2aWRvdnJlTGluay5lbCgpKTtcblxuICBjb25zdCBrYmhTeWRoYXZuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2JoU3lkaGF2bkNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3Qga2JoU3lkaGF2bkxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJIdmlkb3ZyZVwiLFxuICAgIGtiaFN5ZGhhdm5JbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2tiaHN5ZGhhdm5cIlxuICApO1xuXG4gIGtiaFN5ZGhhdm5Db24uYXBwZW5kQ2hpbGQoa2JoU3lkaGF2bkxpbmsuZWwoKSk7XG5cbiAgY29uc3QgdmFsYnlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2YWxieUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgdmFsYnlMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiSHZpZG92cmVcIixcbiAgICB2YWxieUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvdmFsYnlcIlxuICApO1xuXG4gIHZhbGJ5Q29uLmFwcGVuZENoaWxkKHZhbGJ5TGluay5lbCgpKTtcblxuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKGFhcmh1c05vcmRDb24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKHZhbGJ5Q29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChrYmhTeWRoYXZuQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChodmlkb3ZyZUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzU3lkQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rVGV4dCk7XG4gIHNlY29uZHBhcnRDb24uYXBwZW5kQ2hpbGQodW5kZXJsaW5lSGFsbGVyQm90dG9tKTtcbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdHBhcnRDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY29uZHBhcnRDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFsbGVycGFnZTtcbiIsImltcG9ydCBhYXJodXNOb3JkaW1nU3JjIGZyb20gXCIuLi8uLi9JbWcvYWFyaHVzTm9yZC5qcGdcIjtcbmltcG9ydCBrb3J0QWFyaHVzTm9yZEltZ1NyYyBmcm9tIFwiLi4vLi4vSW1nL2tvcnRBYXJodXNOb3JkLnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVBYXJodXNOb3JkID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBwYXJ0XG4gIGNvbnN0IGFhcmh1c05vcmRQYXJ0MUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c05vcmRQYXJ0MUNvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZFBhcnQxQ29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgc2lkZVxuICBjb25zdCBsZWZ0Rmlyc3RDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0Rmlyc3RDb24uY2xhc3NMaXN0LmFkZChcImFhcmh1c05vcmRMZWZ0T3JSaWdodFwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcImFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXJcIixcbiAgICBcInRoaWNrVGV4dFwiXG4gICk7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxpZHQgb20gaGFsbGVuXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lTGlkdE9tSGFsbGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lTGlkdE9tSGFsbGVuLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiSGVyIHN0YWFyIGRlciBsaWR0IG9tIGhhbGxlbiwgZGVubmUgdGV4dCBlciBzdGFkaWcgdW5kZXIgdWR2aWtsaW5nLiBEZW4gdmlsbGUgc2VsdmZvZWxnZWxpZyB2YWVyZSBsYWVuZ2VyZSBzYWEgZGV0IHNlciBwYWVubmVyZSB1ZCBvZyBpa2tlIHNhYSB0b210LlwiO1xuXG4gIGxlZnRGaXJzdENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyKTtcbiAgbGVmdEZpcnN0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUxpZHRPbUhhbGxlbik7XG4gIGxlZnRGaXJzdENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkTGlkdG9taGFsbGVuVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCByaWdodEZpcnN0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRGaXJzdENvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZExlZnRPclJpZ2h0XCIpO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYWFyaHVzTm9yZEltZy5zcmMgPSBhYXJodXNOb3JkaW1nU3JjO1xuICBhYXJodXNOb3JkSW1nLmNsYXNzTGlzdC5hZGQoXCJhYXJodXNOb3JkSW1nXCIpO1xuXG4gIHJpZ2h0Rmlyc3RDb24uYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZEltZyk7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3QgY2hpbGRyZW5cbiAgYWFyaHVzTm9yZFBhcnQxQ29uLmFwcGVuZENoaWxkKGxlZnRGaXJzdENvbik7XG4gIGFhcmh1c05vcmRQYXJ0MUNvbi5hcHBlbmRDaGlsZChyaWdodEZpcnN0Q29uKTtcblxuICAvLyBDcmVhdGluZyBwYXJ0IDJcbiAgY29uc3QgYWFyaHVzTm9yZFBhcnQyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzTm9yZFBhcnQyQ29uLmNsYXNzTGlzdC5hZGQoXCJhYXJodXNOb3JkUGFydDJDb25cIik7XG5cbiAgY29uc3Qga29ydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrb3J0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtvcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhlciBlciBldCBrb3J0IG92ZXIgaGFsbGVuXCI7XG5cbiAgY29uc3Qga29ydEFhcmh1c05vcmQgPSBuZXcgSW1hZ2UoKTtcbiAga29ydEFhcmh1c05vcmQuc3JjID0ga29ydEFhcmh1c05vcmRJbWdTcmM7XG4gIGtvcnRBYXJodXNOb3JkLmNsYXNzTGlzdC5hZGQoXCJrb3J0QWFyaHVzTm9yZFwiKTtcblxuICBhYXJodXNOb3JkUGFydDJDb24uYXBwZW5kQ2hpbGQoa29ydEhlYWRlcik7XG4gIGFhcmh1c05vcmRQYXJ0MkNvbi5hcHBlbmRDaGlsZChrb3J0QWFyaHVzTm9yZCk7XG5cbiAgLy8gQ3JlYXRpbmcgcGFydCAzXG4gIGNvbnN0IGFhcmh1c05vcmRQYXJ0M0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c05vcmRQYXJ0M0Nvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZFBhcnQzQ29uXCIpO1xuXG4gIGNvbnN0IGZpbmRPc0Fhcmh1c05vcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LnN0eWxlLmZvbnRTaXplID0gXCI2MHB4XCI7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LnRleHRDb250ZW50ID0gXCJGaW5kIE9zXCI7XG5cbiAgY29uc3QgbWFwc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIG1hcHNNYXAuY2xhc3NMaXN0LmFkZChcIm1hcHNNYXBBYXJodXNOb3JkXCIpO1xuICBtYXBzTWFwLnNldEF0dHJpYnV0ZShcbiAgICBcInNyY1wiLFxuICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjIxOS4yMTg0MTI0Nzc3NjczITJkMTAuMTc5NDc4NjE1OTQ4MTUzITNkNTYuMjA1MTg0NjgwNjc2NzghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ2NGMxNThhM2E0YzIzOGYlM0EweDhiMmViMThhNDM1ZDc0Y2YhMnNBYXJodXMlMjBCb3VsZGVycyE1ZTAhM20yITFzZW4hMnNkayE0djE2ODI5MjUyMTI5NDkhNW0yITFzZW4hMnNka1wiXG4gICk7XG5cbiAgYWFyaHVzTm9yZFBhcnQzQ29uLmFwcGVuZENoaWxkKGZpbmRPc0Fhcmh1c05vcmRUZXh0KTtcbiAgYWFyaHVzTm9yZFBhcnQzQ29uLmFwcGVuZENoaWxkKG1hcHNNYXApO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0IGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZFBhcnQxQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYXJodXNOb3JkUGFydDJDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFhcmh1c05vcmRQYXJ0M0Nvbik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYXJodXNOb3JkO1xuIiwiaW1wb3J0IGludHJvSG9sZEltZ1NyYyBmcm9tIFwiLi4vSW1nL2JvdWxkZXJzSW50cm9Ib2xkLmpwZ1wiO1xuaW1wb3J0IGZvcnRzYWV0dGVyaG9sZFNyYyBmcm9tIFwiLi4vSW1nL2JvdWxkZXJzRm9ydHNhZXR0ZXJob2xkLmpwZ1wiO1xuaW1wb3J0IGxhbmd2YXJpZ3Rob2xkU3JjIGZyb20gXCIuLi9JbWcvbGFuZ3ZhcmlndGhvbGQuanBnXCI7XG5pbXBvcnQgYm9lcm5laG9sZFNyYyBmcm9tIFwiLi4vSW1nL2JvZXJuZWhvbGQuanBnXCI7XG5pbXBvcnQgc3VtbWVyY2FtcGhvbGRTcmMgZnJvbSBcIi4uL0ltZy9zdW1tZXJjYW1waG9sZC5qcGdcIjtcblxuaW1wb3J0IHsgZGlzcGxheUxpbmsgfSBmcm9tIFwiLi4vcGFnZUNyZWF0ZXJcIjtcblxuY29uc3QgY3JlYXRlSG9sZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGZpcnN0IGhlYWRlclxuICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcImhvbGRIZWFkZXJDb25cIik7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJob2xkSGVhZGVyVGV4dFwiLCBcInRoaWNrVGV4dFwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSG9sZFwiO1xuXG4gIGhlYWRlckNvbi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICAvLyBDcmVhdGluZyBmdW5jdGlvbiB0byBjcmVhdGUgZWwuXG5cbiAgY29uc3QgaW50cm9ob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiSW50cm8gSG9sZFwiLFxuICAgIGludHJvSG9sZEltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaW50cm9cIlxuICApO1xuXG4gIGNvbnN0IGZvcnRzYWV0dGVyaG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkZvcnRzw6Z0dGVyIEhvbGRcIixcbiAgICBmb3J0c2FldHRlcmhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludGVybWVkaWF0ZVwiXG4gICk7XG5cbiAgY29uc3QgbGFuZ3ZhcmlndGhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJMYW5ndmFyaWd0IEhvbGRcIixcbiAgICBsYW5ndmFyaWd0aG9sZFNyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaW50aGV6b25lXCJcbiAgKTtcblxuICBjb25zdCBib2VybmVob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiQsO4cm5lIEhvbGRcIixcbiAgICBib2VybmVob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9ib2VybmVob2xkXCJcbiAgKTtcblxuICBjb25zdCBzdW1tZXJjYW1waG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIlN1bW1lciBDYW1wXCIsXG4gICAgc3VtbWVyY2FtcGhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL3NvbW1lcmNhbXBcIlxuICApO1xuXG4gIC8vIEFwcGVuZGluZyBhbGwgZWxcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm9ob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ydHNhZXR0ZXJob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZ3ZhcmlndGhvbGQuZWwoKSksXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2VybmVob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VtbWVyY2FtcGhvbGQuZWwoKSksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9sZFBhZ2U7XG4iLCJpbXBvcnQgeyBidG5BY3RpdmF0aW9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuY29uc3QgY3JlYXRlSG9tZXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlQmdGcmFtZS5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VCZ0ltZ1wiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VCZ1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlQmdUZXh0XCIpO1xuICBob21lcGFnZUJnVGV4dC50ZXh0Q29udGVudCA9IFwiS2xhdHJpbmcgLSBGw6ZsbGVzc2thYiAtIMOYa29jYWZlXCI7XG5cbiAgY29uc3QgZmlyc3R0aW1lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0dGltZXJCdG4uY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJCdG5cIik7XG4gIGZpcnN0dGltZXJCdG4udGV4dENvbnRlbnQgPSBcIkbDuHJzdGUgZ2FuZz9cIjtcblxuICBmaXJzdHRpbWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiZmlyc3R0aW1lclwiKTtcbiAgfSk7XG5cbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGhvbWVwYWdlQmdUZXh0KTtcbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGZpcnN0dGltZXJCdG4pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VCZ0ZyYW1lKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVwYWdlO1xuIiwiY29uc3QgY3JlYXRlUHJpc3BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGltZ0ZyYW1lXG4gIGNvbnN0IGltZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZChcInByaXNJbWdGcmFtZVwiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaW1nVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ1RleHRcIik7XG4gIGltZ1RleHQudGV4dENvbnRlbnQgPSBcIlBSSVNFUlwiO1xuXG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKGltZ1RleHQpO1xuXG4gIC8vIENyZWF0aW5nIGZpcnN0IHByaXMgcGFydFxuICBjb25zdCBlbnRyZXByaXNQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW50cmVwcmlzUGFydC5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiLCBcImVudHJ5UGFydFwiKTtcblxuICBjb25zdCBlbnRyeVByaXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyeVByaXNCb3guY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgLy8gQ3JlYXRpbmcgb25lIGxpbmVcbiAgY29uc3Qgb2ZmUGVha1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHQuY2xhc3NMaXN0LmFkZChcInRleHRDb25cIik7XG5cbiAgbGV0IG9mZlBlYWtUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRGaXJzdC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrVGV4dEZpcnN0LnRleHRDb250ZW50ID0gXCJPZmZwZWFrOlwiO1xuXG4gIGxldCBvZmZQZWFrVGV4dExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRMYXN0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtUZXh0TGFzdC50ZXh0Q29udGVudCA9XG4gICAgXCIgbWFuZGFnIHRpbCBmcmVkYWcgZm9lciBrbCAxNCwgbG9lcmRhZyBvZyBzb2VuZGFnIGVmdHIga2wgMThcIjtcblxuICBvZmZQZWFrVGV4dC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dEZpcnN0KTtcbiAgb2ZmUGVha1RleHQuYXBwZW5kQ2hpbGQob2ZmUGVha1RleHRMYXN0KTtcblxuICAvLyBDcmVhdGluZyBzZWNvbmQgbGluZVxuICBjb25zdCBwZWFrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dENvblwiKTtcblxuICBsZXQgcGVha1RleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dEZpcnN0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtUZXh0Rmlyc3QudGV4dENvbnRlbnQgPSBcIlBlYWs6XCI7XG5cbiAgbGV0IHBlYWtUZXh0TGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dExhc3QuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgcGVha1RleHRMYXN0LnRleHRDb250ZW50ID1cbiAgICBcIiBtYW5kYWcgdGlsIGZyZWRhZyBmb2VyIGtsIDE0LCBsb2VyZGFnIG9nIHNvZW5kYWcgZWZ0ciBrbCAxOFwiO1xuXG4gIHBlYWtUZXh0LmFwcGVuZENoaWxkKHBlYWtUZXh0Rmlyc3QpO1xuICBwZWFrVGV4dC5hcHBlbmRDaGlsZChwZWFrVGV4dExhc3QpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIGxpbmVzXG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dCk7XG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChwZWFrVGV4dCk7XG5cbiAgZW50cmVwcmlzUGFydC5hcHBlbmRDaGlsZChlbnRyeVByaXNCb3gpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclBhcnRcbiAgY29uc3QgZW5nYW5nc0VudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nc0VudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclxuICBjb25zdCBlbmdhbmdzRW50cmVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkVuZ2FuZ3MgRW50cmVcIjtcblxuICBlbmdhbmdzRW50cmVIZWFkZXIuYXBwZW5kQ2hpbGQoZW5nYW5nc0VudHJlSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3QgZW5nYW5nRW50cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbmdhbmdFbnRyZUNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nRW50cmVDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBvZmZQZWFrSGVhZGVyUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy50ZXh0Q29udGVudCA9IFwiRW50cmUgT2ZmIFBlYWtcIjtcblxuICBsZXQgb2ZmUGVha1Zva3NlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrVm9rc2VuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtWb2tzZW4udGV4dENvbnRlbnQgPSBcIlZva3NlbjogOTVrclwiO1xuXG4gIGxldCBvZmZQZWFrQm9lcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha0JvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtCb2Vybi50ZXh0Q29udGVudCA9IFwiQm9lcm46IDk1a3JcIjtcblxuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha0hlYWRlclByaXMpO1xuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uTGVmdC5hcHBlbmRDaGlsZChvZmZQZWFrQm9lcm4pO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHBlYWtIZWFkZXJQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtIZWFkZXJQcmlzLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtIZWFkZXJQcmlzLnRleHRDb250ZW50ID0gXCJFbnRyZSBQZWFrXCI7XG5cbiAgbGV0IHBlYWtWb2tzZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1Zva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrVm9rc2VuLnRleHRDb250ZW50ID0gXCJWb2tzZW46IDk1a3JcIjtcblxuICBsZXQgcGVha0JvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtCb2Vybi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrQm9lcm4udGV4dENvbnRlbnQgPSBcIkJvZXJuOiA5NWtyXCI7XG5cbiAgZW5nYW5nRW50cmVDb25SaWdodC5hcHBlbmRDaGlsZChwZWFrSGVhZGVyUHJpcyk7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha0JvZXJuKTtcblxuICAvLyBBcHBlbmRpbmcgbGFzdFxuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvbkxlZnQpO1xuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgbWVkbGVtc2thYkVudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkVudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IG1lZGxlbXNrYWJIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1lZGxlbXNrYWJIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJwcmlzSGVhZGVyXCIpO1xuICBtZWRsZW1za2FiSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWVkbGVtc2thYlwiO1xuXG4gIG1lZGxlbXNrYWJFbnRyZUhlYWRlci5hcHBlbmRDaGlsZChtZWRsZW1za2FiSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgbWVkbGVtc2thYnNib3hcbiAgY29uc3QgbWVkbGVtc2thYkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lZGxlbXNrYWJDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHN0YW5kYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHN0YW5kYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0YW5kYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTdGFuZGFyZCBtZWRsZW1za2FiXCI7XG5cbiAgbGV0IHN0YW5kYXJkUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdGFuZGFyZFByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgc3RhbmRhcmRQcmlzLnRleHRDb250ZW50ID0gXCIzOTlrciBwZXIgbWFhbmVkXCI7XG5cbiAgbWVkbGVtc2thYkNvbkxlZnQuYXBwZW5kQ2hpbGQoc3RhbmRhcmRIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uTGVmdC5hcHBlbmRDaGlsZChzdGFuZGFyZFByaXMpO1xuXG4gIC8vIENyZWF0aW5nIG1pZGRsZSBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25NaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uTWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBzdHVkaWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3R1ZGllSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0dWRpZUhlYWRlci50ZXh0Q29udGVudCA9IFwiU3R1ZGllIG1lZGxlbXNrYWJcIjtcblxuICBsZXQgc3R1ZGllUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdHVkaWVQcmlzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHN0dWRpZVByaXMudGV4dENvbnRlbnQgPSBcIjM1OWtyIHBlciBtYWFuZWRcIjtcblxuICBtZWRsZW1za2FiQ29uTWlkZGxlLmFwcGVuZENoaWxkKHN0dWRpZUhlYWRlcik7XG4gIG1lZGxlbXNrYWJDb25NaWRkbGUuYXBwZW5kQ2hpbGQoc3R1ZGllUHJpcyk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCBtZWRsZW1za2FiQ29uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGp1bmlvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBqdW5pb3JIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAganVuaW9ySGVhZGVyLnRleHRDb250ZW50ID0gXCJKdW5pb3IgbWVkbGVtc2thYlwiO1xuXG4gIGxldCBqdW5pb3JQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGp1bmlvclByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAganVuaW9yUHJpcy50ZXh0Q29udGVudCA9IFwiMjE5a3IgcGVyIG1hYW5lZFwiO1xuXG4gIG1lZGxlbXNrYWJDb25SaWdodC5hcHBlbmRDaGlsZChqdW5pb3JIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuYXBwZW5kQ2hpbGQoanVuaW9yUHJpcyk7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgbWVkbGVtc2thYkNvbi5hcHBlbmRDaGlsZChtZWRsZW1za2FiQ29uTGVmdCk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbk1pZGRsZSk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3Qga2xpcHBla29ydEhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcImVuZ2FuZ3NFbnRyZUhlYWRlclwiLCBcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgY29uc3Qga2xpcHBla29ydEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0XCI7XG5cbiAga2xpcHBla29ydEhlYWRlckNvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0SGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3Qga2xpcHBla29ydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2xpcHBla29ydENvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGtsaXBwZWtvcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBrbGlwcGVrb3J0SGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQga2xpcHBla29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnQudGV4dENvbnRlbnQgPSBcIjk1MGtyICgxMCBrbGlwKVwiO1xuXG4gIGtsaXBwZWtvcnRDb25MZWZ0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uTGVmdC5hcHBlbmRDaGlsZChrbGlwcGVrb3J0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb25SaWdodC5jbGFzc0xpc3QuYWRkKFwicHJpc0JveFwiKTtcblxuICBsZXQga2xpcHBla29ydFUxNkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0VTE2SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnRVMTZIZWFkZXIudGV4dENvbnRlbnQgPSBcIktsaXBwZWtvcnQgVS4xNlwiO1xuXG4gIGxldCBrbGlwcGVrb3J0VTE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtsaXBwZWtvcnRVMTYuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAga2xpcHBla29ydFUxNi50ZXh0Q29udGVudCA9IFwiNjAwa3IgKDEwIGtsaXApXCI7XG5cbiAga2xpcHBla29ydENvblJpZ2h0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRVMTZIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uUmlnaHQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydFUxNik7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAga2xpcHBla29ydENvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0Q29uTGVmdCk7XG4gIGtsaXBwZWtvcnRDb24uYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgdWRzdHlySGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdWRzdHlySGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IHVkc3R5ckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwicHJpc0hlYWRlclwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVWRzdHlyXCI7XG5cbiAgdWRzdHlySGVhZGVyQ29uLmFwcGVuZENoaWxkKHVkc3R5ckhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIEVudHJlYm94XG4gIGNvbnN0IHVkc3R5ckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgdWRzdHlyQ29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHVkc3R5ckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1ZHN0eXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgdWRzdHlySGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQgdWRzdHlyVm9rc2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5clZva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB1ZHN0eXJWb2tzZW4udGV4dENvbnRlbnQgPSBcIkxlamUgYWYgc2tvOiAzNWtyXCI7XG5cbiAgbGV0IHVkc3R5ckJvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5ckJvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHVkc3R5ckJvZXJuLnRleHRDb250ZW50ID0gXCJLYWxrOiAxMGtyXCI7XG5cbiAgdWRzdHlyQ29uTGVmdC5hcHBlbmRDaGlsZCh1ZHN0eXJIZWFkZXIpO1xuICB1ZHN0eXJDb25MZWZ0LmFwcGVuZENoaWxkKHVkc3R5clZva3Nlbik7XG4gIHVkc3R5ckNvbkxlZnQuYXBwZW5kQ2hpbGQodWRzdHlyQm9lcm4pO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0XG4gIHVkc3R5ckNvbi5hcHBlbmRDaGlsZCh1ZHN0eXJDb25MZWZ0KTtcblxuICAvLyBBcHBlbmRpbmcgYWxsIGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nRnJhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVudHJlcHJpc1BhcnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVuZ2FuZ3NFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5nYW5nRW50cmVDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lZGxlbXNrYWJFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydEhlYWRlckNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodWRzdHlySGVhZGVyQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1ZHN0eXJDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJpc3BhZ2U7XG4iLCJpbXBvcnQgdmFlZ2dlSW1nU3JjIGZyb20gXCIuLi9JbWcvdmFlZ2dlLnBuZ1wiO1xuaW1wb3J0IGdyZWJJbWdTcmMgZnJvbSBcIi4uL0ltZy9ncmViLnBuZ1wiO1xuaW1wb3J0IGJldmFlZ2Vsc2VJbWdTcmMgZnJvbSBcIi4uL0ltZy9iZXZhZWdlbHNlLnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVUZXJtcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgZmlyc3QgcGFydFxuICBjb25zdCBwYXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBwYXJ0XG4gIGNvbnN0IGxlZnRQYXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0MS5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0TGVmdFwiKTtcblxuICBjb25zdCBsZWZ0UGFydDFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MUhlYWRlci50ZXh0Q29udGVudCA9IFwiVsOmZ2dlXCI7XG5cbiAgY29uc3QgbGVmdFBhcnQxdW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQxdW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0MVRleHQuY2xhc3NMaXN0LmFkZChcInRlcm1zVGV4dENvblwiKTtcblxuICBsZXQgbGVmdFBhcnQxVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxVGV4dDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxVGV4dDEudGV4dENvbnRlbnQgPVxuICAgIFwiU2xhYjogRXIgYmV0ZWduZXQgc29tIGVuIHbDpmdow6ZsZG5pbmcgcMOlIG92ZXIgOTBvIGZyYSBncnVuZGZsYWRlbi4gRW4gcnV0ZSBww6Ugc2xhYiBoYW5kbGVyIG9mdGUgb20gYmFsYW5jZSBpIHN0ZWRldCBmb3Igc3R5cmtlLlwiO1xuXG4gIGxldCBsZWZ0UGFydDFUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFUZXh0Mi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFUZXh0Mi50ZXh0Q29udGVudCA9XG4gICAgXCJGYWNlOiBFciB2w6ZnZ2UgZGVyIGhhciBlbiBow6ZsZG5pbmcgcMOlIHVuZGVyIDkwbyBmcmEgZ3VsdmV0LlwiO1xuXG4gIGxldCBsZWZ0UGFydDFUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFUZXh0My5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFUZXh0My50ZXh0Q29udGVudCA9XG4gICAgXCJPdmVyaGFuZzogRXIgdsOmZ2dlIG1lZCBlbiBrcmFmdGlnIGZhY2UgaMOmbGRuaW5nLCBkZSBlciBvZnRlIGVuIGRlbCB0dW5nZSBhdCBrbGF0cmUuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MVRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MVRleHQ0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MVRleHQ0LnRleHRDb250ZW50ID1cbiAgICBcIlJvb2Y6IEJydWdlcyBvbSB2w6ZnZ2UgZGVyIGVyIHBhcmFsbGVsbGUgbWVkIGd1bHZldCwgYWx0c8OlIGluZ2VuIGjDpmxkbmluZy4gUm9vZiBlciBmb3IgZGV0IG1lc3RlIG1lZ2V0IHR1bmdlIGF0IGtsYXRyZSwgb2cga3LDpnZlciBlbiBnb2QgdGVrbmlrLlwiO1xuXG4gIGxldCBsZWZ0UGFydDFUZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFUZXh0NS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFUZXh0NS50ZXh0Q29udGVudCA9XG4gICAgXCJPZnRlIGJsaXZlciB2w6ZnZ2Ugb2dzw6UgYmVza3JldmV0IG1lZCBkZXJlcyBow6ZsZG5pbmcgKEYuZWtzLiAyMGdyYWRlciBmYWNlKVwiO1xuXG4gIGxlZnRQYXJ0MVRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dDEpO1xuICBsZWZ0UGFydDFUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQyKTtcbiAgbGVmdFBhcnQxVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0Myk7XG4gIGxlZnRQYXJ0MVRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dDQpO1xuICBsZWZ0UGFydDFUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQ1KTtcblxuICBsZWZ0UGFydDEuYXBwZW5kQ2hpbGQobGVmdFBhcnQxSGVhZGVyKTtcbiAgbGVmdFBhcnQxLmFwcGVuZENoaWxkKGxlZnRQYXJ0MXVuZGVybGluZSk7XG4gIGxlZnRQYXJ0MS5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBwYXJ0XG4gIGNvbnN0IHJpZ2h0UGFydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodFBhcnQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRSaWdodFwiKTtcblxuICBjb25zdCB2YWVnZ2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdmFlZ2dlSW1nLnNyYyA9IHZhZWdnZUltZ1NyYztcbiAgdmFlZ2dlSW1nLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc0ltZ1wiLCBcInRlcm1zSW1nMVwiKTtcblxuICByaWdodFBhcnQxLmFwcGVuZENoaWxkKHZhZWdnZUltZyk7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAgcGFydDEuYXBwZW5kQ2hpbGQobGVmdFBhcnQxKTtcbiAgcGFydDEuYXBwZW5kQ2hpbGQocmlnaHRQYXJ0MSk7XG5cbiAgLy8gQ3JlYXRpbmcgcGFydCAyXG4gIGNvbnN0IHBhcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFydDIuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHBhcnRcbiAgY29uc3QgbGVmdFBhcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQyLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRMZWZ0XCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQySGVhZGVyLnRleHRDb250ZW50ID0gXCJHcmViXCI7XG5cbiAgY29uc3QgbGVmdFBhcnQydW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQydW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0MlRleHQuY2xhc3NMaXN0LmFkZChcInRlcm1zVGV4dENvblwiKTtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDEudGV4dENvbnRlbnQgPVxuICAgIFwiSnVnOiBCcnVnZXMgb20gZ3JlYiBkdSBrYW4gdGFnZSBmYXQgaSBtZWQgYWxsZSB0cmUgZmluZ2VybGVkLiBEZSBlciBvZnRlIGdvZGUgYXQgaG9sZGUgZmFzdCBpLlwiO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0Mi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0Mi50ZXh0Q29udGVudCA9XG4gICAgXCJDcmltcDogRXIgYmV0ZWduZWxzZW4gYnJ1Z3Qgb20gZ3JlYiwgbWFuIGt1biBrYW4gZsOlIGZhdCBpIG1lZCBkZXQgeWRlcnN0ZSBmaW5kZXJsZWQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQzLnRleHRDb250ZW50ID1cbiAgICBcIlNsb2JlcjogRXIgb2Z0ZSByaWd0aWd0IHN0b3JlIGdyZWIuIE1hbiBicnVnZXIgaGVsZSBow6VuZGVuIHRpbCBhdCB0YWdlIGZhdCBpIGRlbSwgZGEgZGUgZXIgbGlkdCB1asOmdm5lIGkgb3ZlcmZsYWRlbi5cIjtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDQudGV4dENvbnRlbnQgPVxuICAgIFwiUG9ja2V0OiBPZ3PDpSBrYWxkZXQgZmluZ2VyLXBvY2tldHMsIGVyIHJ1bmRlIGdyZWIgbWVkIGVuIHVkaHVsaW5nIGkgbWlkdGVuLCBtYW4ga2FuIGhvbGRlIGZhc3QgaSBtZWQgZmluZ3JlbmRlLlwiO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0NS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0NS50ZXh0Q29udGVudCA9XG4gICAgXCJIb3JuOiBFciBldCBub2dlbmx1bmRlIHN0b3J0IChPZnRlIHNwaWRzdCkgZ3JlYiwgZGVyIHN0aWtrZXIgbGlnZSB1ZCBmcmEgdsOmZ2dlbiBlbGxlciBsaWR0IG9wYWQuIE1hbiB0YWdlciBmYXQgaSBldCBob3JuLCB2ZWQgYXQgbGlnZ2UgaGVsZSBow6VuZGVuIHJ1bmR0IG9tIGRldC5cIjtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDYuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDYudGV4dENvbnRlbnQgPVxuICAgIFwiUGluY2g6IFNpZGRlciBtZXN0IG5vcm1hbHQgcMOlIGhqw7hybmVyIGFmIHbDpmdnZSwgb2cga2FuIGdvZHQgYmVzdMOlIGFmIGZsZXJlIGdyZWIuIE7DpXIgbWFuIHRhZ2VyIGZhdCBpIGVuIHBpbmNoLCBza2FsIG1hbiBicnVnZSBoZWxlIGjDpW5kZW4gb2cgc3DDpm5kZSBvcCBtZWxsZW0gdG9tbWVsZmluZ2VyZW4gb2cgZGUgYW5kcmUgZmluZ3JlLlwiO1xuXG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDEpO1xuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQyKTtcbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0Myk7XG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDQpO1xuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQ1KTtcbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0Nik7XG5cbiAgLy8gQXBwZGluZyBsYXN0XG4gIGxlZnRQYXJ0Mi5hcHBlbmRDaGlsZChsZWZ0UGFydDJIZWFkZXIpO1xuICBsZWZ0UGFydDIuYXBwZW5kQ2hpbGQobGVmdFBhcnQydW5kZXJsaW5lKTtcbiAgbGVmdFBhcnQyLmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHBhcnRcbiAgY29uc3QgcmlnaHRQYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0UGFydDIuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFJpZ2h0XCIpO1xuXG4gIGNvbnN0IGdyZWJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZ3JlYkltZy5zcmMgPSBncmViSW1nU3JjO1xuICBncmViSW1nLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc0ltZ1wiLCBcInRlcm1zSW1nMlwiKTtcblxuICByaWdodFBhcnQyLmFwcGVuZENoaWxkKGdyZWJJbWcpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIHBhcnQyLmFwcGVuZENoaWxkKGxlZnRQYXJ0Mik7XG4gIHBhcnQyLmFwcGVuZENoaWxkKHJpZ2h0UGFydDIpO1xuXG4gIC8vIENyZWF0aW5nIHBhcnQgM1xuICBjb25zdCBwYXJ0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnQzLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBwYXJ0XG4gIGNvbnN0IGxlZnRQYXJ0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0My5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0TGVmdFwiKTtcblxuICBjb25zdCBsZWZ0UGFydDNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M0hlYWRlci50ZXh0Q29udGVudCA9IFwiR3JlYlwiO1xuXG4gIGNvbnN0IGxlZnRQYXJ0M3VuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0M3VuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0M1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dC5jbGFzc0xpc3QuYWRkKFwidGVybXNUZXh0Q29uXCIpO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0MS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0MS50ZXh0Q29udGVudCA9XG4gICAgXCJTdGF0aXNrOiBFciBuw6VyIG1hbiBrbGF0cmVyIGVuIGJhbmUgc3RpbGxlIG9nIHJvbGlndCwgaHZvciBtYW4gYWx0aWQgaGFyIGbDuGRkZXIgb2cgaMOmbmRlciBww6UgZ3JlYmVuZS5cIjtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDIuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDIudGV4dENvbnRlbnQgPVxuICAgIFwiRHluYW1pc2s6IEVyIGh2b3IgbWFuIGhvcHBlciBmcmEgZXQgZ3JlYiB0aWwgZXQgYW5kZXQsIG9nIHDDpSBkZW4gbcOlZGUgc2xpcHBlciBhbHQga29udGFrdCBtZWQgZ3JlYmVuZSBmb3IgZW4gc3R1bmQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQzLnRleHRDb250ZW50ID1cbiAgICBcIkhlZWxob29rOiBPZ3PDpSBrYWxkZXQgaMOmbGVodWcsIGVyIGh2b3IgbWFuIHBsYWNlcmVyIHVkZWx1a2tlbmRlIHNpbiBow6ZsIHDDpSBldCBncmViLCBlbnRlbiBmb3IgYXQgdHLDpmtrZSBzaWcgb3AgZWxsZXIgZm9yIHN0YWJpbGl0ZXQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQ0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQ0LnRleHRDb250ZW50ID1cbiAgICBcIktuZWViYXI6IEVyIGh2b3IgbWFuIGbDuHJlciBzaXQga27DpiBpbmQgbWVsbGVtIHRvIGdyZWIgb2cgYsO4amVyIGRldCB1ZCwgdGlsIG1hbiBzaWRkZXIgaSBzcMOmbmQuIFwiO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0NS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0NS50ZXh0Q29udGVudCA9XG4gICAgXCJGbGFnOiBFciBiZXbDpmdlbHNlbiBodm9yIG1hbiBzw6Z0dGVyIHNpZyBmb2QgaW5kIHRpbCBldCBwdW5rdCBww6UgdsOmZ2dlbiwgaHZvciBkZXIgaWtrZSBlciBwbGFjZXJldCBldCBncmViLiBNYW4gZ8O4ciBkZXQgZm9yIGF0IG9wbsOlIGVuIGJlZHJlIHN0YWJpbGl0ZXQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQ2LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQ2LnRleHRDb250ZW50ID1cbiAgICBcIk1hdGNoOiBFciBodm9yIG1hbiBlbnRlbiBzYW1sZXIgYmVnZ2UgaMOmbmRlciBlbGxlciBiZWdnZSBmw7hkZGVyIHDDpSBkZXQgc2FtbWUgZ3JlYi4gRGVubmUgYmV2w6ZnZWxzZSBmb3Jla29tbWVyIG9mdGUgZm9yZGkgbWFuIGhhciBicnVnZSBmb3IgYXQgc2tpZnRlIGjDpW5kIGVsbGVyIGZvZC5cIjtcblxuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQxKTtcbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0Mik7XG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDMpO1xuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQ0KTtcbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0NSk7XG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDYpO1xuXG4gIGxlZnRQYXJ0My5hcHBlbmRDaGlsZChsZWZ0UGFydDNIZWFkZXIpO1xuICBsZWZ0UGFydDMuYXBwZW5kQ2hpbGQobGVmdFBhcnQzdW5kZXJsaW5lKTtcbiAgbGVmdFBhcnQzLmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHBhcnRcbiAgY29uc3QgcmlnaHRQYXJ0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0UGFydDMuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFJpZ2h0XCIpO1xuXG4gIGNvbnN0IGJldmFlZ2Vsc2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYmV2YWVnZWxzZUltZy5zcmMgPSBiZXZhZWdlbHNlSW1nU3JjO1xuICBiZXZhZWdlbHNlSW1nLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc0ltZ1wiLCBcInRlcm1zSW1nM1wiKTtcblxuICByaWdodFBhcnQzLmFwcGVuZENoaWxkKGJldmFlZ2Vsc2VJbWcpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIHBhcnQzLmFwcGVuZENoaWxkKGxlZnRQYXJ0Myk7XG4gIHBhcnQzLmFwcGVuZENoaWxkKHJpZ2h0UGFydDMpO1xuXG4gIC8vIEFwcGVuZGluZyBhbGxcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYXJ0MSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFydDIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBhcnQzKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRlcm1zO1xuIiwiaW1wb3J0IHBhZ2VDcmVhdGVyIGZyb20gXCIuL3BhZ2VDcmVhdGVyXCI7XG5cbmNvbnN0IGJ0bkFjdGl2YXRpb24gPSB7XG4gIHBhZ2VTd2l0Y2g6IChwYWdlKSA9PiB7XG4gICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUNyZWF0ZXIocGFnZSkpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGJ0bkFjdGl2YXRpb24gfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGFnZUNyZWF0ZXIgZnJvbSBcIi4vcGFnZUNyZWF0ZXIuanNcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ3JlYXRlcihcImhvbWVcIikpO1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWVwYWdlIGZyb20gXCIuL1BhZ2VzL2hvbWVwYWdlXCI7XG5pbXBvcnQgY3JlYXRlUHJpc3BhZ2UgZnJvbSBcIi4vUGFnZXMvcHJpc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbGRQYWdlIGZyb20gXCIuL1BhZ2VzL2hvbGRcIjtcbmltcG9ydCBjcmVhdGVIYWxsZXJwYWdlIGZyb20gXCIuL1BhZ2VzL2hhbGxlclwiO1xuaW1wb3J0IGNyZWF0ZUFhcmh1c05vcmQgZnJvbSBcIi4vUGFnZXMvaGFsbGVyL25vcmRcIjtcbmltcG9ydCBjcmVhdGVFdmVudHMgZnJvbSBcIi4vUGFnZXMvZXZlbnRzXCI7XG5pbXBvcnQgY3JlYXRlVGVybXMgZnJvbSBcIi4vUGFnZXMvdGVybXNcIjtcbmltcG9ydCBjcmVhdGVGaXJzdFRpbWVyIGZyb20gXCIuL1BhZ2VzL2ZpcnN0dGltZXJcIjtcblxuaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuLy8gSW1nXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi9JbWcvYm91bGRlcnNMb2dvLnBuZ1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuL0ltZy9tZW51SWNvbi5wbmdcIjtcblxuY29uc3QgcGFnZUNyZWF0ZXIgPSAocGFnZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYm9keUNvblwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDcmVhdGVyKHBhZ2UpKTtcblxuICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlzXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByaXNwYWdlKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhvbGRcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9sZFBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFsbGVyXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhhbGxlcnBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWFyaHVzTm9yZFwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYXJodXNOb3JkKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImV2ZW50c1wiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFdmVudHMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGVybXNcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGVybXMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmlyc3R0aW1lclwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGaXJzdFRpbWVyKCkpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmNvbnN0IG1lbnVDcmVhdGVyID0gKHBhZ2UpID0+IHtcbiAgY29uc3QgbWVudUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb24uY2xhc3NMaXN0LmFkZChcIm1lbnVDb25cIik7XG5cbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IGxvZ29TcmM7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImJvdWxkZXJzTG9nb1wiKTtcblxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaG9tZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCYXIuY2xhc3NMaXN0LmFkZChcIm1lbnVCYXJcIik7XG5cbiAgY29uc3QgbWVudUJ0blByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuUHJpcy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blByaXMudGV4dENvbnRlbnQgPSBcIlBSSVNcIjtcblxuICBtZW51QnRuUHJpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcInByaXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5IYWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuSGFsbGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuSGFsbGVyLnRleHRDb250ZW50ID0gXCJIQUxMRVJcIjtcblxuICBtZW51QnRuSGFsbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaGFsbGVyXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuRmlyc3R0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5GaXJzdHRpbWVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuRmlyc3R0aW1lci50ZXh0Q29udGVudCA9IFwiRsOYUlNURSBHQU5HP1wiO1xuXG4gIG1lbnVCdG5GaXJzdHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiZmlyc3R0aW1lclwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkV2ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5FdmVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5FdmVudHMudGV4dENvbnRlbnQgPSBcIkVWRU5UU1wiO1xuXG4gIG1lbnVCdG5FdmVudHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJldmVudHNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5Ib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0bkhvbGQuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5Ib2xkLnRleHRDb250ZW50ID0gXCJIT0xEXCI7XG5cbiAgbWVudUJ0bkhvbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJob2xkXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuVGVybWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0blRlcm1lci5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blRlcm1lci50ZXh0Q29udGVudCA9IFwiVEVSTVNcIjtcblxuICBtZW51QnRuVGVybWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwidGVybXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGxpbmtUb093blBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGlua1RvT3duUGFnZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9cIik7XG4gIGxpbmtUb093blBhZ2Uuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBsaW5rVG9Pd25QYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBsaW5rVG9Pd25QYWdlLnRleHRDb250ZW50ID0gXCJMaW5rIHRpbCBCb3VsZGVyc1wiO1xuXG4gIGxpbmtUb093blBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICAvLyBDcmVhdGluZyB0aGUgc2lkZSBiYXIgZm9yIHRoZSBtb3JlIGJ0blxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICBjb25zdCBzaWRlYmFyUmVtb3ZlQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyUmVtb3ZlQXJyb3cuY2xhc3NMaXN0LmFkZChcInNpZGViYXJSZW1vdmVBcnJvd1wiKTtcbiAgc2lkZWJhclJlbW92ZUFycm93LnRleHRDb250ZW50ID0gXCLinpRcIjtcblxuICBzaWRlYmFyUmVtb3ZlQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlYmFyLnN0eWxlLnJpZ2h0ID0gXCJtYXgoLTUwMHB4LCAtODB2dylcIjtcbiAgfSk7XG5cbiAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhck1lbnVcIik7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyUmVtb3ZlQXJyb3cpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICBjb25zdCBtZW51QnRuTWVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5NZXJlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuTWVyZS50ZXh0Q29udGVudCA9IFwiTUVSRVwiO1xuXG4gIGNvbnN0IGFwcGVuZFNpZGViYXJNZW51ID0gKHNpemUpID0+IHtcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtZW51Q29uLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgICAgd2hpbGUgKHNpZGViYXJNZW51LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhck1lbnUucmVtb3ZlQ2hpbGQoc2lkZWJhck1lbnUubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaXplID09IFwibGFyZ2VcIikge1xuICAgICAgICBtZW51QnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChsaW5rVG9Pd25QYWdlKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2lkZWJhci5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgfSk7XG4gIH07XG5cbiAgbWVudUJ0bk1lcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHBlbmRTaWRlYmFyTWVudShcInNtYWxsXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51SWNvbkJ0biA9IG5ldyBJbWFnZSgpO1xuICBtZW51SWNvbkJ0bi5zcmMgPSBtZW51SWNvbjtcbiAgbWVudUljb25CdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVJY29uQnRuXCIpO1xuXG4gIG1lbnVJY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYXBwZW5kU2lkZWJhck1lbnUoXCJsYXJnZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkFycmF5ID0gW1xuICAgIG1lbnVCdG5QcmlzLFxuICAgIG1lbnVCdG5Ib2xkLFxuICAgIG1lbnVCdG5IYWxsZXIsXG4gICAgbWVudUJ0bkZpcnN0dGltZXIsXG4gICAgbWVudUJ0bkV2ZW50cyxcbiAgICBtZW51QnRuVGVybWVyLFxuICAgIG1lbnVCdG5NZXJlLFxuICBdO1xuXG4gIGxldCBzbWFsbE1lbnUgPSAwO1xuICBsZXQgbGFyZ2VNZW51ID0gMDtcblxuICBjb25zdCBhcHBlbmRMYXJnZU1lbnUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKG1lbnVCYXIuZmlyc3RDaGlsZCkgbWVudUJhci5yZW1vdmVDaGlsZChtZW51QmFyLmxhc3RDaGlsZCk7XG4gICAgbWVudUJ0bkFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgbWVudUJhci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFNtYWxsTWVudSA9ICgpID0+IHtcbiAgICB3aGlsZSAobWVudUJhci5maXJzdENoaWxkKSBtZW51QmFyLnJlbW92ZUNoaWxkKG1lbnVCYXIubGFzdENoaWxkKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uQnRuKTtcbiAgfTtcblxuICAvLyBDaGVja3MgaWYgdGhlIHdpbmRvdyBpIGxhcmdlIGVub3V0Z2hcbiAgaWYgKGlubmVyV2lkdGggPiAxMjAwKSB7XG4gICAgc21hbGxNZW51ID0gMDtcbiAgICBsYXJnZU1lbnUgPSAxO1xuICAgIGFwcGVuZExhcmdlTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIHNtYWxsTWVudSA9IDE7XG4gICAgbGFyZ2VNZW51ID0gMDtcbiAgICBhcHBlbmRTbWFsbE1lbnUoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDEyMDApIHtcbiAgICAgIGlmIChsYXJnZU1lbnUgPT0gMCkge1xuICAgICAgICBhcHBlbmRMYXJnZU1lbnUoKTtcbiAgICAgICAgbGFyZ2VNZW51ID0gMTtcbiAgICAgICAgc21hbGxNZW51ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNtYWxsTWVudSA9PSAwKSB7XG4gICAgICAgIGFwcGVuZFNtYWxsTWVudSgpO1xuICAgICAgICBsYXJnZU1lbnUgPSAwO1xuICAgICAgICBzbWFsbE1lbnUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2Nyb2xsTWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChtZW51Q29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IC00MCkge1xuICAgICAgbWVudUNvbi5jbGFzc0xpc3QuYWRkKFwibWVudVNjcm9sbFwiKTtcbiAgICAgIGxvZ28uc3R5bGUuaGVpZ2h0ID0gXCIzMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVDb24uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVTY3JvbGxcIik7XG4gICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgIH1cbiAgfTtcblxuICBzY3JvbGxNZW51RnVuY3Rpb24oKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgc2Nyb2xsTWVudUZ1bmN0aW9uKCk7XG4gIH0pO1xuXG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbiAgcmV0dXJuIG1lbnVDb247XG59O1xuXG5jb25zdCBmb290ZXJDcmVhdGVyID0gKCkgPT4ge1xuICAvLyBjcmVhdGUgZm9vdGVyXG59O1xuXG5jbGFzcyBkaXNwbGF5TGluayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltZ1NyYywgbGluaykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbWdTcmMgPSBpbWdTcmM7XG4gICAgdGhpcy5saW5rID0gbGluaztcbiAgfVxuICBlbCA9ICgpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJob2xkSW1nRnJhbWVcIik7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0aGlzLmxpbmspO1xuICAgIGVsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblxuICAgIGNvbnN0IGJnID0gbmV3IEltYWdlKCk7XG4gICAgYmcuc3JjID0gdGhpcy5pbWdTcmM7XG4gICAgYmcuY2xhc3NMaXN0LmFkZChcImhvbGRCZ0ltZ1wiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiaG9sZEltZ0hlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICBjb25zdCBsaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rRWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0aGlzLmxpbmspO1xuICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgbGlua0VsLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJob2xkTGlua0VsXCIpO1xuICAgIGxpbmtFbC50ZXh0Q29udGVudCA9IFwiTGluayB0aWwgQm91bGRlcnMuZGtcIjtcblxuICAgIGVsLmFwcGVuZENoaWxkKGJnKTtcbiAgICBlbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGVsLmFwcGVuZENoaWxkKGxpbmtFbCk7XG5cbiAgICByZXR1cm4gZWw7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VDcmVhdGVyO1xuZXhwb3J0IHsgZGlzcGxheUxpbmsgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==