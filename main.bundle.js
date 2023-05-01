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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/hallerBg.jpg */ "./src/Img/hallerBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/firsttimerBg.jpg */ "./src/Img/firsttimerBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Img/firsttimer.jpg */ "./src/Img/firsttimer.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.halllerImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  height: 350px;\n  justify-content: center;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 4px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 120px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n\n/* Aarhus Nord */\n\n.aarhusNordPart1Con {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 50px;\n  padding: 40px max(5vw, 20px);\n}\n\n.aarhusNordLeftOrRight {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.aarhusNordLidtomhallenHeader {\n  font-size: 40px;\n}\n\n.aarhusNordImg {\n  width: clamp(350px, 100%, 600px);\n}\n\n.aarhusNordPart2Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aarhusNordPart3Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 50px 0px;\n}\n\n.mapsMapAarhusNord {\n  height: 600px;\n  border: none;\n}\n\n/* Aarhus Nord END*/\n\n/* Terms */\n\n.termsPart {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 40px max(5vw, 20px);\n}\n\n.termsPartLeft {\n  display: flex;\n  flex-direction: column;\n  width: clamp(350px, 100%, 700px);\n}\n\n.termsPartRight {\n  display: flex;\n  flex-direction: column;\n}\n\n.termsImg1 {\n  height: min(20vw, 400px);\n}\n\n.termsImg2 {\n  height: min(600px, 30vw);\n}\n\n.termsImg3 {\n  height: min(600px, 30vw);\n}\n\n.termsTextCon {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n/* Terms END */\n\n/* Firsttimer */\n\n.firsttimerBgImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  height: 300px;\n  justify-content: center;\n}\n\n.firsttimeCon {\n  display: flex;\n  padding: 30px;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n\n.firsttimerLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 40px 7vw;\n}\n\n.firsttimerImgFrame {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  height: 800px;\n  width: 50vw;\n}\n\n.firsttimerTipsHeader {\n  font-size: 30px;\n}\n\n.firstimerList {\n  font-size: 20px;\n  color: white;\n  gap: 10px;\n}\n\n/* Firsttimer END */\n\n/* Footer */\n\n.footerCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  height: auto;\n  background-color: #404741;\n  padding: 60px 0px;\n}\n\n.footerLogo {\n  width: 350px;\n  margin-bottom: 30px;\n}\n\n.footerBoxCon {\n  display: flex;\n  justify-content: center;\n  border: solid white 4px;\n  border-left: none;\n  border-right: none;\n  padding: 50px 0px;\n  width: max(70vw, 250px);\n  gap: 100px;\n  flex-wrap: wrap;\n}\n\n.footerBox {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  align-items: center;\n}\n\n.footerMail {\n  text-decoration: none;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.footerTel {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n/* Footer END */\n\n/* Media change */\n\n@media only screen and (max-width: 924px) {\n  .termsPart {\n    flex-direction: column;\n  }\n\n  .partTopHaller {\n    flex-direction: column;\n  }\n\n  .aarhusNordPart1Con {\n    flex-direction: column;\n  }\n\n  .firsttimeCon {\n    flex-direction: column;\n  }\n\n  .firsttimerImgFrame {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 1750px) {\n  .termsPart {\n    flex-direction: column;\n  }\n  .termsPartLeft {\n    width: 90%;\n  }\n  .termsImg {\n    height: auto;\n    width: 100%;\n  }\n}\n\n/* Media change END*/\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\n\nbody {\n  margin: 0px;\n  font-family: \"Gantari\", sans-serif;\n  user-select: none;\n  background-color: #1d471f;\n}\n\n.bodyCon {\n}\n\n/* Universal */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n}\n\n.imgFrame {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 900px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.partWithCenEl {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 80px;\n  padding: 60px 50px;\n  flex-wrap: wrap;\n}\n\n.textCon {\n  text-align: center;\n}\n\n.thickText {\n  color: white;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.notThickText {\n  color: white;\n  font-size: 23px;\n  font-weight: 400;\n}\n\n/* Universal END */\n\n/* Menu */\n\n.menuCon {\n  background-color: #000000;\n  height: 76px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 30px;\n}\n\n.menuScroll {\n  position: sticky;\n  top: -50px;\n  z-index: 1;\n}\n\n.bouldersLogo {\n  height: 50px;\n  width: auto;\n  transition: 0.2;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  margin-right: 20px;\n  transition: 0.3s;\n  position: sticky;\n  top: 10px;\n}\n\n.menuBtn {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  transition: 0.1s;\n}\n\n.menuBtn:hover {\n  color: rgb(169, 169, 169);\n}\n\n.menuIconBtn {\n  height: 30px;\n  width: 40px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0px;\n  right: max(-500px, -80vw);\n  background-color: #757575;\n  height: 100vh;\n  width: min(500px, 80vw);\n  transition: 0.3s;\n  z-index: 1;\n}\n\n.sidebarRemoveArrow {\n  top: 10px;\n  left: 40px;\n  position: absolute;\n  font-size: 60px;\n  color: white;\n}\n\n.sidebarRemoveArrow:hover {\n  color: #c3c3c3;\n}\n\n.sidebarMenu {\n  position: absolute;\n  top: 100px;\n  padding: 0px 50px;\n  width: calc(100% - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n/* Menu END */\n\n/* Homepage */\n\n.homepageBgImg {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 1000px;\n}\n\n.homepageBgText {\n  margin-top: 250px;\n  font-size: 60px;\n  font-weight: 900;\n  color: #ffffff;\n  width: 80vw;\n  text-align: center;\n}\n\n.firsttimerBtn {\n  font-size: 40px;\n  font-weight: 700;\n  color: white;\n  margin-top: 200px;\n  background-color: #3b9440;\n  padding: 25px 60px;\n  border-radius: 15px;\n}\n\n.firsttimerBtn:active {\n  scale: 1.01;\n}\n\n/* Homepage EMD */\n\n/* pris */\n\n.prisImgFrame {\n  background-image: url(./Img/bouldersBg.jpg);\n  height: 350px;\n  justify-content: center;\n}\n\n.prisImgText {\n  color: white;\n  font-size: 80px;\n  font-weight: 700;\n}\n\n.entryPart {\n  background-color: #1d471f;\n  padding: 40px 30px;\n}\n\n.prisBox {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.engangsEntreHeader {\n  background-color: #3b9440;\n  padding: 20px 20px;\n}\n\n.prisHeader {\n  font-size: 40px;\n}\n\n/* pris EMD */\n\n/* Hold  */\n\n.holdHeaderCon {\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background-color: #3b9440;\n  text-align: center;\n}\n\n.holdHeaderText {\n  font-size: 40px;\n}\n\n.holdImgFrame {\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.holdBgImg {\n  transition: 2s;\n  align-items: center;\n  width: max(100%, 800px);\n  height: auto;\n  position: absolute;\n}\n\n.holdBgImg:hover {\n  scale: 1.15;\n}\n\n.holdImgHeader {\n  font-size: 60px;\n  text-align: center;\n  position: absolute;\n}\n\n.holdLinkEl {\n  position: absolute;\n  right: 30px;\n  bottom: 20px;\n  font-size: 20px;\n}\n\n/* Hold END */\n\n/* haller */\n\n.halllerImgFrame {\n  background-image: url(./Img/hallerBg.jpg);\n  height: 350px;\n  justify-content: center;\n}\n\n.partTopHaller {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px 5vw;\n  justify-content: center;\n}\n\n.partOfTopCon {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.mapTextHaller {\n  margin: 0px 0px 20px 0px;\n}\n\n.mapsMapHaller {\n  height: 650px;\n  border: none;\n}\n\n.hallerIntroTextHeader {\n  font-size: 50px;\n}\n\n.underlineHallerHeader {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  height: 4px;\n  background-color: #fff;\n  width: 350px;\n}\n\n.hallerIntroText {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\n.aabningtiderText {\n  margin-bottom: 50px;\n}\n\n.partBottomHaller {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 120px;\n}\n\n.hallerLinkCon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 50px;\n}\n\n.hallerFrame {\n  height: min(400px, 90vw);\n  width: min(400px, 90vw);\n}\n\n.hallerLinkText {\n  width: 75vw;\n  text-align: center;\n}\n\n.underlineHallerBottom {\n  width: 80vw;\n}\n\n/* haller END */\n\n/* Aarhus Nord */\n\n.aarhusNordPart1Con {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 50px;\n  padding: 40px max(5vw, 20px);\n}\n\n.aarhusNordLeftOrRight {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n}\n\n.aarhusNordLidtomhallenHeader {\n  font-size: 40px;\n}\n\n.aarhusNordImg {\n  width: clamp(350px, 100%, 600px);\n}\n\n.aarhusNordPart2Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.aarhusNordPart3Con {\n  padding: 20px max(5vw, 20px);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 50px 0px;\n}\n\n.mapsMapAarhusNord {\n  height: 600px;\n  border: none;\n}\n\n/* Aarhus Nord END*/\n\n/* Terms */\n\n.termsPart {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 40px max(5vw, 20px);\n}\n\n.termsPartLeft {\n  display: flex;\n  flex-direction: column;\n  width: clamp(350px, 100%, 700px);\n}\n\n.termsPartRight {\n  display: flex;\n  flex-direction: column;\n}\n\n.termsImg1 {\n  height: min(20vw, 400px);\n}\n\n.termsImg2 {\n  height: min(600px, 30vw);\n}\n\n.termsImg3 {\n  height: min(600px, 30vw);\n}\n\n.termsTextCon {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n/* Terms END */\n\n/* Firsttimer */\n\n.firsttimerBgImg {\n  background-image: url(./Img/firsttimerBg.jpg);\n  height: 300px;\n  justify-content: center;\n}\n\n.firsttimeCon {\n  display: flex;\n  padding: 30px;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n\n.firsttimerLeft {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 40px 7vw;\n}\n\n.firsttimerImgFrame {\n  background-image: url(./Img/firsttimer.jpg);\n  height: 800px;\n  width: 50vw;\n}\n\n.firsttimerTipsHeader {\n  font-size: 30px;\n}\n\n.firstimerList {\n  font-size: 20px;\n  color: white;\n  gap: 10px;\n}\n\n/* Firsttimer END */\n\n/* Footer */\n\n.footerCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  height: auto;\n  background-color: #404741;\n  padding: 60px 0px;\n}\n\n.footerLogo {\n  width: 350px;\n  margin-bottom: 30px;\n}\n\n.footerBoxCon {\n  display: flex;\n  justify-content: center;\n  border: solid white 4px;\n  border-left: none;\n  border-right: none;\n  padding: 50px 0px;\n  width: max(70vw, 250px);\n  gap: 100px;\n  flex-wrap: wrap;\n}\n\n.footerBox {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  align-items: center;\n}\n\n.footerMail {\n  text-decoration: none;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.footerTel {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n/* Footer END */\n\n/* Media change */\n\n@media only screen and (max-width: 924px) {\n  .termsPart {\n    flex-direction: column;\n  }\n\n  .partTopHaller {\n    flex-direction: column;\n  }\n\n  .aarhusNordPart1Con {\n    flex-direction: column;\n  }\n\n  .firsttimeCon {\n    flex-direction: column;\n  }\n\n  .firsttimerImgFrame {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 1750px) {\n  .termsPart {\n    flex-direction: column;\n  }\n  .termsPartLeft {\n    width: 90%;\n  }\n  .termsImg {\n    height: auto;\n    width: 100%;\n  }\n}\n\n/* Media change END*/\n"],"sourceRoot":""}]);
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

  const list1 = document.createElement("ul");
  list1.classList.add("firstimerList");

  let textFirst1 = document.createElement("li");
  textFirst1.classList.add("notThickText");
  textFirst1.textContent =
    "Det er ikke tilladt at klatre i andet end klatresko ";

  let textFirst2 = document.createElement("li");
  textFirst2.classList.add("notThickText");
  textFirst2.textContent =
    "Det er ikke et krav at booke tid (Medmindre i er over 10 personer, så vil Boulders gerne have det at vide) ";

  list1.appendChild(textFirst1);
  list1.appendChild(textFirst2);

  const header2 = document.createElement("div");
  header2.classList.add("firsttimerTipsHeader", "thickText");
  header2.textContent = "Første gang skal du...";

  const list2 = document.createElement("ul");
  list2.classList.add("firstimerList");

  let textSecond1 = document.createElement("li");
  textSecond1.classList.add("notThickText");
  textSecond1.textContent =
    "Underskrive en ansvarsfraskrivelse (For at sikre Boulders mod søgsmål), det tager ca. 1 min. ";

  let textSecond2 = document.createElement("li");
  textSecond2.classList.add("notThickText");
  textSecond2.textContent = "Købe entré ";

  let textSecond3 = document.createElement("li");
  textSecond3.classList.add("notThickText");
  textSecond3.textContent = "Leje/medbringe egne klatresko ";

  list2.appendChild(textSecond1);
  list2.appendChild(textSecond2);
  list2.appendChild(textSecond3);

  const header3 = document.createElement("div");
  header3.classList.add("firsttimerTipsHeader", "thickText");
  header3.textContent = "Vi anbefalder...";

  const list3 = document.createElement("ul");
  list3.classList.add("firstimerList");

  let textThird1 = document.createElement("li");
  textThird1.classList.add("notThickText");
  textThird1.textContent =
    "At du klatrer i tøj du let kan bevæge dig i. Tøjet må meget gerne være lidt slidstærkt, da det godt kan komme til at køre op af de ru greb. ";

  let textThird2 = document.createElement("li");
  textThird2.classList.add("notThickText");
  textThird2.textContent =
    "Varmer op i 10 minutter og starter med at klatre nogle lette baner ";

  let textThird3 = document.createElement("li");
  textThird3.classList.add("notThickText");
  textThird3.textContent = "At du ikke klatre på tom mave ";

  let textThird4 = document.createElement("li");
  textThird4.classList.add("notThickText");
  textThird4.textContent =
    "At du låner/køber noget kalk til din klatring. Kalk er ikke essentielt men godt at have, det gør så dine hænder ikke bliver så svedige ";

  list3.appendChild(textThird1);
  list3.appendChild(textThird2);
  list3.appendChild(textThird3);
  list3.appendChild(textThird4);

  leftSide.appendChild(header1);
  leftSide.appendChild(list1);
  leftSide.appendChild(header2);
  leftSide.appendChild(list2);
  leftSide.appendChild(header3);
  leftSide.appendChild(list3);

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

  // Creating header
  const imgFrame = document.createElement("div");
  imgFrame.classList.add("halllerImgFrame", "imgFrame");

  const imgText = document.createElement("span");
  imgText.classList.add("prisImgText");
  imgText.textContent = "HALLER";

  imgFrame.appendChild(imgText);

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
    "Vores haller ligger over hele landet og er åben for både dig og dine venner, vi glæder os til at se dig. Alle vores haller har åben på samme tid, så tiderne gælder i alle halder";

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
    "Valby",
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
  content.appendChild(imgFrame);
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
    "Byens første og fedeste bouldering hal i Aarhus Nord siden 2014. Hallen byder på stor variation af hældninger på væggene og er hjem for mange garvede klatrere. En stor åben hal med en port, der åbnes om sommeren, så man kan nyde sin kaffe eller øl i solen. Alle konkurrencer i Aarhus, f. eks. Blocparty,  afvikles her på vores tilskuer-venlige konkurrencevæg.";

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

  // Creating display link ( I'm lazy right now sorry )
  const imgFrame = document.createElement("div");
  imgFrame.classList.add("prisImgFrame", "imgFrame");

  const imgText = document.createElement("span");
  imgText.classList.add("prisImgText");
  imgText.textContent = "TERMS";

  imgFrame.appendChild(imgText);

  // Creating first part
  const part1 = document.createElement("div");
  part1.classList.add("termsPart");
  part1.style.marginTop = " 50px";

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
  content.appendChild(imgFrame);
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
/* harmony export */   "btnActivation": () => (/* binding */ btnActivation),
/* harmony export */   "startPage": () => (/* binding */ startPage)
/* harmony export */ });
/* harmony import */ var _pageCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageCreater */ "./src/pageCreater.js");


let currentPageChecker;

if (!localStorage.getItem("currentPageChecker")) {
  localStorage.setItem("currentPageChecker", "home");
} else {
  currentPageChecker = localStorage.getItem("currentPageChecker");
}

const btnActivation = {
  pageSwitch: (page) => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.lastChild);
    }
    document.body.appendChild((0,_pageCreater__WEBPACK_IMPORTED_MODULE_0__["default"])(page));
    window.scrollTo(0, 0);
    localStorage.setItem("currentPageChecker", page);
  },
};

const startPage = () => {
  btnActivation.pageSwitch(currentPageChecker);
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



(0,_controller__WEBPACK_IMPORTED_MODULE_1__.startPage)();


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
/* harmony import */ var _Img_transLogo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Img/transLogo.png */ "./src/Img/transLogo.png");
/* harmony import */ var _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Img/menuIcon.png */ "./src/Img/menuIcon.png");











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

  content.appendChild(footerCreater());

  return content;
};

const menuCreater = () => {
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
  menuIconBtn.src = _Img_menuIcon_png__WEBPACK_IMPORTED_MODULE_11__;
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
  const content = document.createElement("div");
  content.classList.add("footerCon");

  const logo = new Image();
  logo.src = _Img_transLogo_png__WEBPACK_IMPORTED_MODULE_10__;
  logo.classList.add("footerLogo");

  logo.addEventListener("click", () => {
    _controller__WEBPACK_IMPORTED_MODULE_8__.btnActivation.pageSwitch("home");
  });

  // Creating footer content
  const footerBoxCon = document.createElement("div");
  footerBoxCon.classList.add("footerBoxCon");

  const voresMissionCon = document.createElement("div");
  voresMissionCon.classList.add("footerBox");

  let voresMissionConHeader = document.createElement("span");
  voresMissionConHeader.classList.add("thickText");
  voresMissionConHeader.textContent = "Vores Mission";

  voresMissionConHeader.style.marginBottom = "10px";

  let voresMissionText = document.createElement("span");
  voresMissionText.classList.add("notThickText");
  voresMissionText.textContent =
    "Vores mission er at få så mange mennesker som muligt, til at lukke øjnene op for klatring. Vi er her for at skabe den gode oplevelse for dig og dine venner eller familie, på en unik måde, hvor mang både kan have det sjovt og være aktiv.";
  voresMissionText.style.fontSize = "18px";
  voresMissionText.style.textAlign = "center";

  voresMissionCon.appendChild(voresMissionConHeader);
  voresMissionCon.appendChild(voresMissionText);

  const kontaktCon = document.createElement("div");
  kontaktCon.classList.add("footerBox");

  let kontaktHeader = document.createElement("span");
  kontaktHeader.classList.add("thickText");
  kontaktHeader.textContent = "Kontakt";
  kontaktHeader.style.marginBottom = "10px";

  let email = document.createElement("a");
  email.classList.add("notThickText", "footerMail");
  email.setAttribute("href", "https://boulders.dk/kontakt");
  email.setAttribute("target", "_blank");
  email.textContent = "Mail: Send en mail";

  let telefon = document.createElement("span");
  telefon.classList.add("notThickText");
  telefon.textContent = "Tel: 72100019";
  telefon.classList.add("footerTel");

  let adresseHeader = document.createElement("span");
  adresseHeader.classList.add("thickText");
  adresseHeader.style.fontSize = "18px";
  adresseHeader.textContent = "Adresse";

  let adresseText = document.createElement("span");
  adresseText.classList.add("notThickText");
  adresseText.style.fontSize = "18px";
  adresseText.textContent = "Graham Bells Vej 18A, 8200 Aarhus N, Danmark";
  adresseText.style.textAlign = "center";

  kontaktCon.appendChild(kontaktHeader);
  kontaktCon.appendChild(email);
  kontaktCon.appendChild(telefon);
  kontaktCon.appendChild(adresseHeader);
  kontaktCon.appendChild(adresseText);

  footerBoxCon.appendChild(kontaktCon);
  footerBoxCon.appendChild(voresMissionCon);

  // Appending
  content.appendChild(logo);
  content.appendChild(footerBoxCon);

  return content;
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

/***/ "./src/Img/hallerBg.jpg":
/*!******************************!*\
  !*** ./src/Img/hallerBg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a3b33923fb5d353ef29.jpg";

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

/***/ "./src/Img/transLogo.png":
/*!*******************************!*\
  !*** ./src/Img/transLogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b745fdae0d9dccaf9eab.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVJlO0FBQ0o7QUFDWTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUFZO0FBQzlCOztBQUVBOztBQUVBO0FB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2ZpcnN0dGltZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2hhbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaGFsbGVyL25vcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2hvbGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9wcmlzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy90ZXJtcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3BhZ2VDcmVhdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ltZy9ib3VsZGVyc0JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vSW1nL2hhbGxlckJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSW1nL2ZpcnN0dGltZXJCZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL0ltZy9maXJzdHRpbWVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FudGFyaTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkdhbnRhcmlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbn1cXG5cXG4uYm9keUNvbiB7XFxufVxcblxcbi8qIFVuaXZlcnNhbCAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDkwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFydFdpdGhDZW5FbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogNjBweCA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGV4dENvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aGlja1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5vdFRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBVbml2ZXJzYWwgRU5EICovXFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51Q29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMzBweDtcXG59XFxuXFxuLm1lbnVTY3JvbGwge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogLTUwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm91bGRlcnNMb2dvIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogMC4yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ubWVudUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG4ubWVudUljb25CdG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IG1heCgtNTAwcHgsIC04MHZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXJSZW1vdmVBcnJvdyB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjYzNjM2MzO1xcbn1cXG5cXG4uc2lkZWJhck1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmhvbWVwYWdlQmdJbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwMHB4O1xcbn1cXG5cXG4uaG9tZXBhZ2VCZ1RleHQge1xcbiAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogODB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDI1cHggNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5maXJzdHRpbWVyQnRuOmFjdGl2ZSB7XFxuICBzY2FsZTogMS4wMTtcXG59XFxuXFxuLyogSG9tZXBhZ2UgRU1EICovXFxuXFxuLyogcHJpcyAqL1xcblxcbi5wcmlzSW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaXNJbWdUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5lbnRyeVBhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDcxZjtcXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcXG59XFxuXFxuLnByaXNCb3gge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbmdhbmdzRW50cmVIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLnByaXNIZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4vKiBwcmlzIEVNRCAqL1xcblxcbi8qIEhvbGQgICovXFxuXFxuLmhvbGRIZWFkZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9sZEhlYWRlclRleHQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaG9sZEltZ0ZyYW1lIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZyB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDgwMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xNTtcXG59XFxuXFxuLmhvbGRJbWdIZWFkZXIge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZExpbmtFbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogSG9sZCBFTkQgKi9cXG5cXG4vKiBoYWxsZXIgKi9cXG5cXG4uaGFsbGxlckltZ0ZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0VG9wSGFsbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweCA1dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnRPZlRvcENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4ubWFwVGV4dEhhbGxlciB7XFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5tYXBzTWFwSGFsbGVyIHtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHRIZWFkZXIge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4udW5kZXJsaW5lSGFsbGVySGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uYWFibmluZ3RpZGVyVGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucGFydEJvdHRvbUhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuLmhhbGxlckxpbmtDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmhhbGxlckZyYW1lIHtcXG4gIGhlaWdodDogbWluKDQwMHB4LCA5MHZ3KTtcXG4gIHdpZHRoOiBtaW4oNDAwcHgsIDkwdncpO1xcbn1cXG5cXG4uaGFsbGVyTGlua1RleHQge1xcbiAgd2lkdGg6IDc1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51bmRlcmxpbmVIYWxsZXJCb3R0b20ge1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi8qIGhhbGxlciBFTkQgKi9cXG5cXG4vKiBBYXJodXMgTm9yZCAqL1xcblxcbi5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiA0MHB4IG1heCg1dncsIDIwcHgpO1xcbn1cXG5cXG4uYWFyaHVzTm9yZExlZnRPclJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZEltZyB7XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDYwMHB4KTtcXG59XFxuXFxuLmFhcmh1c05vcmRQYXJ0MkNvbiB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCg1dncsIDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkUGFydDNDb24ge1xcbiAgcGFkZGluZzogMjBweCBtYXgoNXZ3LCAyMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IDBweDtcXG59XFxuXFxuLm1hcHNNYXBBYXJodXNOb3JkIHtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEFhcmh1cyBOb3JkIEVORCovXFxuXFxuLyogVGVybXMgKi9cXG5cXG4udGVybXNQYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogNDBweCBtYXgoNXZ3LCAyMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydExlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDcwMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVybXNJbWcxIHtcXG4gIGhlaWdodDogbWluKDIwdncsIDQwMHB4KTtcXG59XFxuXFxuLnRlcm1zSW1nMiB7XFxuICBoZWlnaHQ6IG1pbig2MDBweCwgMzB2dyk7XFxufVxcblxcbi50ZXJtc0ltZzMge1xcbiAgaGVpZ2h0OiBtaW4oNjAwcHgsIDMwdncpO1xcbn1cXG5cXG4udGVybXNUZXh0Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4vKiBUZXJtcyBFTkQgKi9cXG5cXG4vKiBGaXJzdHRpbWVyICovXFxuXFxuLmZpcnN0dGltZXJCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmZpcnN0dGltZXJMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNDBweCA3dnc7XFxufVxcblxcbi5maXJzdHRpbWVySW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGhlaWdodDogODAwcHg7XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmZpcnN0dGltZXJUaXBzSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmZpcnN0aW1lckxpc3Qge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBGaXJzdHRpbWVyIEVORCAqL1xcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NzQxO1xcbiAgcGFkZGluZzogNjBweCAwcHg7XFxufVxcblxcbi5mb290ZXJMb2dvIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5mb290ZXJCb3hDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSA0cHg7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHBhZGRpbmc6IDUwcHggMHB4O1xcbiAgd2lkdGg6IG1heCg3MHZ3LCAyNTBweCk7XFxuICBnYXA6IDEwMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9vdGVyQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlck1haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvb3RlclRlbCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgRU5EICovXFxuXFxuLyogTWVkaWEgY2hhbmdlICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjRweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGFydFRvcEhhbGxlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWFyaHVzTm9yZFBhcnQxQ29uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5maXJzdHRpbWVDb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZpcnN0dGltZXJJbWdGcmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NTBweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAudGVybXNQYXJ0TGVmdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAudGVybXNJbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgRU5EKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdC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QUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7O0FBRWYsaUJBQWlCOztBQUVqQjtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0JBQW9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdhbnRhcmk6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkdhbnRhcmlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbn1cXG5cXG4uYm9keUNvbiB7XFxufVxcblxcbi8qIFVuaXZlcnNhbCAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDkwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFydFdpdGhDZW5FbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogNjBweCA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGV4dENvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aGlja1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5vdFRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBVbml2ZXJzYWwgRU5EICovXFxuXFxuLyogTWVudSAqL1xcblxcbi5tZW51Q29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBoZWlnaHQ6IDc2cHg7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMzBweDtcXG59XFxuXFxuLm1lbnVTY3JvbGwge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogLTUwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm91bGRlcnNMb2dvIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogMC4yO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ubWVudUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG4ubWVudUljb25CdG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IG1heCgtNTAwcHgsIC04MHZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXJSZW1vdmVBcnJvdyB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjYzNjM2MzO1xcbn1cXG5cXG4uc2lkZWJhck1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBNZW51IEVORCAqL1xcblxcbi8qIEhvbWVwYWdlICovXFxuXFxuLmhvbWVwYWdlQmdJbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2JvdWxkZXJzQmcuanBnKTtcXG4gIGhlaWdodDogMTAwMHB4O1xcbn1cXG5cXG4uaG9tZXBhZ2VCZ1RleHQge1xcbiAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogODB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG4ge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDI1cHggNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5maXJzdHRpbWVyQnRuOmFjdGl2ZSB7XFxuICBzY2FsZTogMS4wMTtcXG59XFxuXFxuLyogSG9tZXBhZ2UgRU1EICovXFxuXFxuLyogcHJpcyAqL1xcblxcbi5wcmlzSW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2JvdWxkZXJzQmcuanBnKTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByaXNJbWdUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5lbnRyeVBhcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDcxZjtcXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcXG59XFxuXFxuLnByaXNCb3gge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbmdhbmdzRW50cmVIZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTQ0MDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLnByaXNIZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4vKiBwcmlzIEVNRCAqL1xcblxcbi8qIEhvbGQgICovXFxuXFxuLmhvbGRIZWFkZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9sZEhlYWRlclRleHQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaG9sZEltZ0ZyYW1lIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZyB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDEwMCUsIDgwMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhvbGRCZ0ltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xNTtcXG59XFxuXFxuLmhvbGRJbWdIZWFkZXIge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZExpbmtFbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogSG9sZCBFTkQgKi9cXG5cXG4vKiBoYWxsZXIgKi9cXG5cXG4uaGFsbGxlckltZ0ZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0ltZy9oYWxsZXJCZy5qcGcpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFydFRvcEhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHggNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0T2ZUb3BDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLm1hcFRleHRIYWxsZXIge1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4ubWFwc01hcEhhbGxlciB7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaGFsbGVySW50cm9UZXh0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmFhYm5pbmd0aWRlclRleHQge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnBhcnRCb3R0b21IYWxsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbi5oYWxsZXJMaW5rQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5oYWxsZXJGcmFtZSB7XFxuICBoZWlnaHQ6IG1pbig0MDBweCwgOTB2dyk7XFxuICB3aWR0aDogbWluKDQwMHB4LCA5MHZ3KTtcXG59XFxuXFxuLmhhbGxlckxpbmtUZXh0IHtcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udW5kZXJsaW5lSGFsbGVyQm90dG9tIHtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG5cXG4vKiBoYWxsZXIgRU5EICovXFxuXFxuLyogQWFyaHVzIE5vcmQgKi9cXG5cXG4uYWFyaHVzTm9yZFBhcnQxQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogNDBweCBtYXgoNXZ3LCAyMHB4KTtcXG59XFxuXFxuLmFhcmh1c05vcmRMZWZ0T3JSaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRJbWcge1xcbiAgd2lkdGg6IGNsYW1wKDM1MHB4LCAxMDAlLCA2MDBweCk7XFxufVxcblxcbi5hYXJodXNOb3JkUGFydDJDb24ge1xcbiAgcGFkZGluZzogMjBweCBtYXgoNXZ3LCAyMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZFBhcnQzQ29uIHtcXG4gIHBhZGRpbmc6IDIwcHggbWF4KDV2dywgMjBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogNTBweCAwcHg7XFxufVxcblxcbi5tYXBzTWFwQWFyaHVzTm9yZCB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBBYXJodXMgTm9yZCBFTkQqL1xcblxcbi8qIFRlcm1zICovXFxuXFxuLnRlcm1zUGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDQwcHggbWF4KDV2dywgMjBweCk7XFxufVxcblxcbi50ZXJtc1BhcnRMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGNsYW1wKDM1MHB4LCAxMDAlLCA3MDBweCk7XFxufVxcblxcbi50ZXJtc1BhcnRSaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRlcm1zSW1nMSB7XFxuICBoZWlnaHQ6IG1pbigyMHZ3LCA0MDBweCk7XFxufVxcblxcbi50ZXJtc0ltZzIge1xcbiAgaGVpZ2h0OiBtaW4oNjAwcHgsIDMwdncpO1xcbn1cXG5cXG4udGVybXNJbWczIHtcXG4gIGhlaWdodDogbWluKDYwMHB4LCAzMHZ3KTtcXG59XFxuXFxuLnRlcm1zVGV4dENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuLyogVGVybXMgRU5EICovXFxuXFxuLyogRmlyc3R0aW1lciAqL1xcblxcbi5maXJzdHRpbWVyQmdJbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2ZpcnN0dGltZXJCZy5qcGcpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmZpcnN0dGltZXJMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNDBweCA3dnc7XFxufVxcblxcbi5maXJzdHRpbWVySW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2ZpcnN0dGltZXIuanBnKTtcXG4gIGhlaWdodDogODAwcHg7XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmZpcnN0dGltZXJUaXBzSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmZpcnN0aW1lckxpc3Qge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBGaXJzdHRpbWVyIEVORCAqL1xcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0NzQxO1xcbiAgcGFkZGluZzogNjBweCAwcHg7XFxufVxcblxcbi5mb290ZXJMb2dvIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5mb290ZXJCb3hDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSA0cHg7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIHBhZGRpbmc6IDUwcHggMHB4O1xcbiAgd2lkdGg6IG1heCg3MHZ3LCAyNTBweCk7XFxuICBnYXA6IDEwMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9vdGVyQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlck1haWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvb3RlclRlbCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgRU5EICovXFxuXFxuLyogTWVkaWEgY2hhbmdlICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjRweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGFydFRvcEhhbGxlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWFyaHVzTm9yZFBhcnQxQ29uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5maXJzdHRpbWVDb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZpcnN0dGltZXJJbWdGcmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NTBweCkge1xcbiAgLnRlcm1zUGFydCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAudGVybXNQYXJ0TGVmdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAudGVybXNJbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgRU5EKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlMaW5rIH0gZnJvbSBcIi4uL3BhZ2VDcmVhdGVyXCI7XG5cbi8vIEltZ1xuaW1wb3J0IGxhdGVOaWdodEJvdWxkZXJpbmdJbWdTcmMgZnJvbSBcIi4uL0ltZy9sYXRlTmlnaHRCb3VsZGVyaW5nLmpwZ1wiO1xuaW1wb3J0IHN0dWRlbnRGcmlkYXlJbWdTcmMgZnJvbSBcIi4uL0ltZy9zdHVkZW50RnJpZGF5LnBuZ1wiO1xuaW1wb3J0IGNsaW1iYXRob25JbWdTcmMgZnJvbSBcIi4uL0ltZy9jbGltYXRob24uanBnXCI7XG5pbXBvcnQgc3VubnlTYXR1cmRheUltZ1NyYyBmcm9tIFwiLi4vSW1nL3N1bm55U2F0dXJkYXkuanBnXCI7XG5cbmNvbnN0IGNyZWF0ZUV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgY29uc3QgbGF0ZU5pZ2h0Qm91bGRlcmluZyA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkxhdGUgTmlnaHQgQm91bGRlcmluZ1wiLFxuICAgIGxhdGVOaWdodEJvdWxkZXJpbmdJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2xuYlwiXG4gICk7XG5cbiAgY29uc3Qgc3R1ZGVudEZyaWRheSA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIlN0dWRlbnQgRnJpZGF5XCIsXG4gICAgc3R1ZGVudEZyaWRheUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvc3R1ZGVudGZyaWRheVwiXG4gICk7XG5cbiAgY29uc3QgY2xpbWJhdGhvbiA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkNsaW1iYXRob25cIixcbiAgICBjbGltYmF0aG9uSW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9jbGltYmF0aG9uXCJcbiAgKTtcblxuICBjb25zdCBzdW5ueVNhdHVyZGF5ID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiU3VubnkgU2F0dXJkYXlcIixcbiAgICBzdW5ueVNhdHVyZGF5SW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9zdW5ueXNhdHVyZGF5XCJcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGxhdGVOaWdodEJvdWxkZXJpbmcuZWwoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R1ZGVudEZyaWRheS5lbCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjbGltYmF0aG9uLmVsKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN1bm55U2F0dXJkYXkuZWwoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudHM7XG4iLCJjb25zdCBjcmVhdGVGaXJzdFRpbWVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBkaXNwbGF5IGhlYWRlclxuICBjb25zdCBmaXJzdHRpbWVySW1nRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdHRpbWVySW1nRnJhbWUuY2xhc3NMaXN0LmFkZChcImltZ0ZyYW1lXCIsIFwiZmlyc3R0aW1lckJnSW1nXCIpO1xuXG4gIGNvbnN0IGZpcnN0dGltZXJJbWdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZpcnN0dGltZXJJbWdUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlzSW1nVGV4dFwiKTtcbiAgZmlyc3R0aW1lckltZ1RleHQudGV4dENvbnRlbnQgPSBcIkbDuHJzdGUgZ2FuZz9cIjtcblxuICBmaXJzdHRpbWVySW1nRnJhbWUuYXBwZW5kQ2hpbGQoZmlyc3R0aW1lckltZ1RleHQpO1xuXG4gIC8vIENyZWF0aW5nIGJvdHRvbVxuICBjb25zdCBmaXJzdGltZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdGltZXJDb24uY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZUNvblwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHBhcnRcbiAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lckxlZnRcIik7XG5cbiAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXIxLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVyVGlwc0hlYWRlclwiLCBcInRoaWNrVGV4dFwiKTtcbiAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiR29kdCBhdCB2aWRlIC8gVGlwcyBvZyB0cmlja3NcIjtcblxuICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlzdDEuY2xhc3NMaXN0LmFkZChcImZpcnN0aW1lckxpc3RcIik7XG5cbiAgbGV0IHRleHRGaXJzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRGaXJzdDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dEZpcnN0MS50ZXh0Q29udGVudCA9XG4gICAgXCJEZXQgZXIgaWtrZSB0aWxsYWR0IGF0IGtsYXRyZSBpIGFuZGV0IGVuZCBrbGF0cmVza28gXCI7XG5cbiAgbGV0IHRleHRGaXJzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRGaXJzdDIuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dEZpcnN0Mi50ZXh0Q29udGVudCA9XG4gICAgXCJEZXQgZXIgaWtrZSBldCBrcmF2IGF0IGJvb2tlIHRpZCAoTWVkbWluZHJlIGkgZXIgb3ZlciAxMCBwZXJzb25lciwgc8OlIHZpbCBCb3VsZGVycyBnZXJuZSBoYXZlIGRldCBhdCB2aWRlKSBcIjtcblxuICBsaXN0MS5hcHBlbmRDaGlsZCh0ZXh0Rmlyc3QxKTtcbiAgbGlzdDEuYXBwZW5kQ2hpbGQodGV4dEZpcnN0Mik7XG5cbiAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlcjIuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJUaXBzSGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBoZWFkZXIyLnRleHRDb250ZW50ID0gXCJGw7hyc3RlIGdhbmcgc2thbCBkdS4uLlwiO1xuXG4gIGNvbnN0IGxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0Mi5jbGFzc0xpc3QuYWRkKFwiZmlyc3RpbWVyTGlzdFwiKTtcblxuICBsZXQgdGV4dFNlY29uZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRTZWNvbmQxLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHRleHRTZWNvbmQxLnRleHRDb250ZW50ID1cbiAgICBcIlVuZGVyc2tyaXZlIGVuIGFuc3ZhcnNmcmFza3JpdmVsc2UgKEZvciBhdCBzaWtyZSBCb3VsZGVycyBtb2Qgc8O4Z3Ntw6VsKSwgZGV0IHRhZ2VyIGNhLiAxIG1pbi4gXCI7XG5cbiAgbGV0IHRleHRTZWNvbmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0ZXh0U2Vjb25kMi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0U2Vjb25kMi50ZXh0Q29udGVudCA9IFwiS8O4YmUgZW50csOpIFwiO1xuXG4gIGxldCB0ZXh0U2Vjb25kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dFNlY29uZDMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFNlY29uZDMudGV4dENvbnRlbnQgPSBcIkxlamUvbWVkYnJpbmdlIGVnbmUga2xhdHJlc2tvIFwiO1xuXG4gIGxpc3QyLmFwcGVuZENoaWxkKHRleHRTZWNvbmQxKTtcbiAgbGlzdDIuYXBwZW5kQ2hpbGQodGV4dFNlY29uZDIpO1xuICBsaXN0Mi5hcHBlbmRDaGlsZCh0ZXh0U2Vjb25kMyk7XG5cbiAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlcjMuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJUaXBzSGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBoZWFkZXIzLnRleHRDb250ZW50ID0gXCJWaSBhbmJlZmFsZGVyLi4uXCI7XG5cbiAgY29uc3QgbGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3QzLmNsYXNzTGlzdC5hZGQoXCJmaXJzdGltZXJMaXN0XCIpO1xuXG4gIGxldCB0ZXh0VGhpcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0ZXh0VGhpcmQxLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHRleHRUaGlyZDEudGV4dENvbnRlbnQgPVxuICAgIFwiQXQgZHUga2xhdHJlciBpIHTDuGogZHUgbGV0IGthbiBiZXbDpmdlIGRpZyBpLiBUw7hqZXQgbcOlIG1lZ2V0IGdlcm5lIHbDpnJlIGxpZHQgc2xpZHN0w6Zya3QsIGRhIGRldCBnb2R0IGthbiBrb21tZSB0aWwgYXQga8O4cmUgb3AgYWYgZGUgcnUgZ3JlYi4gXCI7XG5cbiAgbGV0IHRleHRUaGlyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRUaGlyZDIuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFRoaXJkMi50ZXh0Q29udGVudCA9XG4gICAgXCJWYXJtZXIgb3AgaSAxMCBtaW51dHRlciBvZyBzdGFydGVyIG1lZCBhdCBrbGF0cmUgbm9nbGUgbGV0dGUgYmFuZXIgXCI7XG5cbiAgbGV0IHRleHRUaGlyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRUaGlyZDMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFRoaXJkMy50ZXh0Q29udGVudCA9IFwiQXQgZHUgaWtrZSBrbGF0cmUgcMOlIHRvbSBtYXZlIFwiO1xuXG4gIGxldCB0ZXh0VGhpcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0ZXh0VGhpcmQ0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHRleHRUaGlyZDQudGV4dENvbnRlbnQgPVxuICAgIFwiQXQgZHUgbMOlbmVyL2vDuGJlciBub2dldCBrYWxrIHRpbCBkaW4ga2xhdHJpbmcuIEthbGsgZXIgaWtrZSBlc3NlbnRpZWx0IG1lbiBnb2R0IGF0IGhhdmUsIGRldCBnw7hyIHPDpSBkaW5lIGjDpm5kZXIgaWtrZSBibGl2ZXIgc8OlIHN2ZWRpZ2UgXCI7XG5cbiAgbGlzdDMuYXBwZW5kQ2hpbGQodGV4dFRoaXJkMSk7XG4gIGxpc3QzLmFwcGVuZENoaWxkKHRleHRUaGlyZDIpO1xuICBsaXN0My5hcHBlbmRDaGlsZCh0ZXh0VGhpcmQzKTtcbiAgbGlzdDMuYXBwZW5kQ2hpbGQodGV4dFRoaXJkNCk7XG5cbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxpc3QxKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxpc3QyKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyMyk7XG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGxpc3QzKTtcblxuICAvLyBDcmVhdGluZyByaWdodCBwYXJ0XG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lckltZ0ZyYW1lXCIsIFwiaW1nRnJhbWVcIik7XG5cbiAgLy8gQXBwZW5kaW5nIHNpZGVzXG4gIGZpcnN0aW1lckNvbi5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gIGZpcnN0aW1lckNvbi5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gIC8vIEFwcGVuZGluZyBjaGlsZHJlblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZpcnN0dGltZXJJbWdGcmFtZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RpbWVyQ29uKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZpcnN0VGltZXI7XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGluayB9IGZyb20gXCIuLi9wYWdlQ3JlYXRlclwiO1xuaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuLi9jb250cm9sbGVyXCI7XG5cbmltcG9ydCBhYXJodXNOb3JkSW1nU3JjIGZyb20gXCIuLi9JbWcvYWFyaHVzTm9yZC5qcGdcIjtcbmltcG9ydCBhYXJodXNDaXR5SW1nU3JjIGZyb20gXCIuLi9JbWcvYWFyaHVzQ2l0eS5qcGdcIjtcbmltcG9ydCBvZGVuc2VJbWdTcmMgZnJvbSBcIi4uL0ltZy9vZGVuc2UuanBlZ1wiO1xuaW1wb3J0IGFhcmh1c1N5ZEltZ1NyYyBmcm9tIFwiLi4vSW1nL2Fhcmh1c1N5ZC5qcGdcIjtcbmltcG9ydCBodmlkb3ZyZUltZ1NyYyBmcm9tIFwiLi4vSW1nL2h2aWRvdnJlLmpwZ1wiO1xuaW1wb3J0IGtiaFN5ZGhhdm5JbWdTcmMgZnJvbSBcIi4uL0ltZy9rYmhTeWRoYXZuLmpwZ1wiO1xuaW1wb3J0IHZhbGJ5SW1nU3JjIGZyb20gXCIuLi9JbWcvdmFsYnkuanBnXCI7XG5cbmNvbnN0IGNyZWF0ZUhhbGxlcnBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwiaGFsbGVyQ29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgaW1nRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdGcmFtZS5jbGFzc0xpc3QuYWRkKFwiaGFsbGxlckltZ0ZyYW1lXCIsIFwiaW1nRnJhbWVcIik7XG5cbiAgY29uc3QgaW1nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpbWdUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlzSW1nVGV4dFwiKTtcbiAgaW1nVGV4dC50ZXh0Q29udGVudCA9IFwiSEFMTEVSXCI7XG5cbiAgaW1nRnJhbWUuYXBwZW5kQ2hpbGQoaW1nVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgdGhlIHVwcGVyIHBhcnQgd2l0aCB0ZXh0IGFuZCBtYXBcbiAgY29uc3QgZmlyc3RwYXJ0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0Q29uLmNsYXNzTGlzdC5hZGQoXCJwYXJ0VG9wSGFsbGVyXCIpO1xuXG4gIC8vIENyZWF0aW5nIFJJR0hUISBwYXJ0XG4gIGNvbnN0IGZpcnN0cGFydFJpZ2h0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBoYWxsZXJJbnRyb1RleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVySW50cm9UZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJJbnRyb1RleHRIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhhbGxlckludHJvVGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiSGFsbGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lSGFsbGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgaGFsbGVySW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhhbGxlckludHJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0XCIsIFwibm90VGhpY2tUZXh0XCIpO1xuICBoYWxsZXJJbnRyb1RleHQudGV4dENvbnRlbnQgPVxuICAgIFwiVm9yZXMgaGFsbGVyIGxpZ2dlciBvdmVyIGhlbGUgbGFuZGV0IG9nIGVyIMOlYmVuIGZvciBiw6VkZSBkaWcgb2cgZGluZSB2ZW5uZXIsIHZpIGdsw6ZkZXIgb3MgdGlsIGF0IHNlIGRpZy4gQWxsZSB2b3JlcyBoYWxsZXIgaGFyIMOlYmVuIHDDpSBzYW1tZSB0aWQsIHPDpSB0aWRlcm5lIGfDpmxkZXIgaSBhbGxlIGhhbGRlclwiO1xuXG4gIGNvbnN0IGFhYm5pbmdzdGlkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWFibmluZ3N0aWRlckhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGFsbGVySW50cm9UZXh0SGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBhYWJuaW5nc3RpZGVySGVhZGVyLnRleHRDb250ZW50ID0gXCLDhWJuaW5nc3RpZGVyXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lSGFsbGVySGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZGVybGluZUhhbGxlckhlYWRlcjIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBhYWJuaW5nc3RpZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhYWJuaW5nc3RpZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiYWFibmluZ3RpZGVyVGV4dFwiKTtcbiAgYWFibmluZ3N0aWRlclRleHQudGV4dENvbnRlbnQgPSBcIkZyYSAxMCAtIDIyIEh2ZXIgZGFnIVwiO1xuXG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dEhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUhhbGxlckhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGhhbGxlckludHJvVGV4dCk7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKGFhYm5pbmdzdGlkZXJIZWFkZXIpO1xuICBmaXJzdHBhcnRSaWdodENvbi5hcHBlbmRDaGlsZCh1bmRlcmxpbmVIYWxsZXJIZWFkZXIyKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoYWFibmluZ3N0aWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIExFRlQhIHBhcnRcbiAgY29uc3QgZmlyc3RwYXJ0TGVmdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0cGFydExlZnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRPZlRvcENvblwiKTtcblxuICBjb25zdCBtYXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1hcFRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcIm1hcFRleHRIYWxsZXJcIik7XG4gIG1hcFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiSGVyIGthbiBkdSBzZSBldCBrb3J0IG92ZXIgYWxsZSB2b3JlcyBmb3Jza2VsbGlnZSBhZmRlbGluZ2VyXCI7XG5cbiAgY29uc3QgbWFwc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIG1hcHNNYXAuc2V0QXR0cmlidXRlKFxuICAgIFwic3JjXCIsXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTYhMW0xMiExbTMhMWQxMTQwNDMyLjQ2ODQ5NTQ1MSEyZDEwLjcyNjcwNzk5NDk3MjQzOCEzZDU2LjA2MzU2MzYwNzc3NzEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITJtMSExc2JvdWxkZXJzITVlMCEzbTIhMXNlbiEyc2RrITR2MTY4Mjc3MjM2OTQxNSE1bTIhMXNlbiEyc2RrXCJcbiAgKTtcbiAgbWFwc01hcC5jbGFzc0xpc3QuYWRkKFwibWFwc01hcEhhbGxlclwiKTtcblxuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcFRleHQpO1xuICBmaXJzdHBhcnRMZWZ0Q29uLmFwcGVuZENoaWxkKG1hcHNNYXApO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRSaWdodENvbik7XG4gIGZpcnN0cGFydENvbi5hcHBlbmRDaGlsZChmaXJzdHBhcnRMZWZ0Q29uKTtcblxuICAvLyBDcmVhdGluZyBsb3dlcnBhcnRcbiAgY29uc3Qgc2Vjb25kcGFydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZHBhcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRCb3R0b21IYWxsZXJcIik7XG5cbiAgY29uc3QgaGFsbGVyTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVyTGlua1RleHQuY2xhc3NMaXN0LmFkZChcImhhbGxlckxpbmtUZXh0XCIsIFwidGhpY2tUZXh0XCIpO1xuICBoYWxsZXJMaW5rVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJIZXJ1bmRlciBrYW4gZHUgbGFlc2UgbWVyZSBvbSBkZSBmb3Jza2VsbGlnZSBoYWxsZXJcIjtcblxuICBjb25zdCB1bmRlcmxpbmVIYWxsZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmRlcmxpbmVIYWxsZXJCb3R0b20uY2xhc3NMaXN0LmFkZChcbiAgICBcInVuZGVybGluZUhhbGxlckhlYWRlclwiLFxuICAgIFwidW5kZXJsaW5lSGFsbGVyQm90dG9tXCJcbiAgKTtcblxuICAvLyBDcmVhdGluZyBoYWxsZXJsaW5rIGNvbnRhaW5lclxuICBjb25zdCBoYWxsZXJMaW5rQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGFsbGVyTGlua0Nvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyTGlua0NvblwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzTm9yZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgYWFyaHVzTm9yZENvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImFhcmh1c05vcmRcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYXJodXNOb3JkRWwuY2xhc3NMaXN0LmFkZChcImhvbGRJbWdGcmFtZVwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkQmcgPSBuZXcgSW1hZ2UoKTtcbiAgYWFyaHVzTm9yZEJnLnNyYyA9IGFhcmh1c05vcmRJbWdTcmM7XG4gIGFhcmh1c05vcmRCZy5jbGFzc0xpc3QuYWRkKFwiaG9sZEJnSW1nXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRJbWdIZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWFyaHVzIE5vcmRcIjtcblxuICBhYXJodXNOb3JkRWwuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZEJnKTtcbiAgYWFyaHVzTm9yZEVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgYWFyaHVzTm9yZENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkRWwpO1xuXG4gIGNvbnN0IGFhcmh1c0NpdHlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWFyaHVzQ2l0eUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzQ2l0eUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJBYXJodXMgQ2l0eVwiLFxuICAgIGFhcmh1c0NpdHlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c2NcIlxuICApO1xuXG4gIGFhcmh1c0NpdHlDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUxpbmsuZWwoKSk7XG5cbiAgY29uc3Qgb2RlbnNlTGlua0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9kZW5zZUxpbmtDb24uY2xhc3NMaXN0LmFkZChcImhhbGxlckZyYW1lXCIpO1xuXG4gIGNvbnN0IG9kZW5zZUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJPZGVuc2VcIixcbiAgICBvZGVuc2VJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL29kZW5zZVwiXG4gICk7XG5cbiAgb2RlbnNlTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rLmVsKCkpO1xuXG4gIGNvbnN0IGFhcmh1c1N5ZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c1N5ZENvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgYWFyaHVzU3lkTGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkFhcmh1cyBTeWRcIixcbiAgICBhYXJodXNTeWRJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2Fhcmh1c3N5ZFwiXG4gICk7XG5cbiAgYWFyaHVzU3lkQ29uLmFwcGVuZENoaWxkKGFhcmh1c1N5ZExpbmsuZWwoKSk7XG5cbiAgY29uc3QgaHZpZG92cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBodmlkb3ZyZUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgaHZpZG92cmVMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiS0JIIFN5ZGhhdm5cIixcbiAgICBodmlkb3ZyZUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaHZpZG92cmVcIlxuICApO1xuXG4gIGh2aWRvdnJlQ29uLmFwcGVuZENoaWxkKGh2aWRvdnJlTGluay5lbCgpKTtcblxuICBjb25zdCBrYmhTeWRoYXZuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2JoU3lkaGF2bkNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3Qga2JoU3lkaGF2bkxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJIdmlkb3ZyZVwiLFxuICAgIGtiaFN5ZGhhdm5JbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2tiaHN5ZGhhdm5cIlxuICApO1xuXG4gIGtiaFN5ZGhhdm5Db24uYXBwZW5kQ2hpbGQoa2JoU3lkaGF2bkxpbmsuZWwoKSk7XG5cbiAgY29uc3QgdmFsYnlDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2YWxieUNvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3QgdmFsYnlMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiVmFsYnlcIixcbiAgICB2YWxieUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvdmFsYnlcIlxuICApO1xuXG4gIHZhbGJ5Q29uLmFwcGVuZENoaWxkKHZhbGJ5TGluay5lbCgpKTtcblxuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKGFhcmh1c05vcmRDb24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKHZhbGJ5Q29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChrYmhTeWRoYXZuQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChodmlkb3ZyZUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzQ2l0eUNvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzU3lkQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChvZGVuc2VMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rVGV4dCk7XG4gIHNlY29uZHBhcnRDb24uYXBwZW5kQ2hpbGQodW5kZXJsaW5lSGFsbGVyQm90dG9tKTtcbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZChoYWxsZXJMaW5rQ29uKTtcblxuICAvLyBBcHBlbmRpbmcgY2hpbGRyZW5cbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWdGcmFtZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RwYXJ0Q29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRwYXJ0Q29uKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhhbGxlcnBhZ2U7XG4iLCJpbXBvcnQgYWFyaHVzTm9yZGltZ1NyYyBmcm9tIFwiLi4vLi4vSW1nL2Fhcmh1c05vcmQuanBnXCI7XG5pbXBvcnQga29ydEFhcmh1c05vcmRJbWdTcmMgZnJvbSBcIi4uLy4uL0ltZy9rb3J0QWFyaHVzTm9yZC5wbmdcIjtcblxuY29uc3QgY3JlYXRlQWFyaHVzTm9yZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgZmlyc3QgcGFydFxuICBjb25zdCBhYXJodXNOb3JkUGFydDFDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYXJodXNOb3JkUGFydDFDb24uY2xhc3NMaXN0LmFkZChcImFhcmh1c05vcmRQYXJ0MUNvblwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgbGVmdEZpcnN0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdEZpcnN0Q29uLmNsYXNzTGlzdC5hZGQoXCJhYXJodXNOb3JkTGVmdE9yUmlnaHRcIik7XG5cbiAgY29uc3QgYWFyaHVzTm9yZExpZHRvbWhhbGxlbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyXCIsXG4gICAgXCJ0aGlja1RleHRcIlxuICApO1xuICBhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyLnRleHRDb250ZW50ID0gXCJMaWR0IG9tIGhhbGxlblwiO1xuXG4gIGNvbnN0IHVuZGVybGluZUxpZHRPbUhhbGxlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZGVybGluZUxpZHRPbUhhbGxlbi5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIpO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRMaWR0b21oYWxsZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5UZXh0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5UZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkJ5ZW5zIGbDuHJzdGUgb2cgZmVkZXN0ZSBib3VsZGVyaW5nIGhhbCBpIEFhcmh1cyBOb3JkIHNpZGVuIDIwMTQuIEhhbGxlbiBieWRlciBww6Ugc3RvciB2YXJpYXRpb24gYWYgaMOmbGRuaW5nZXIgcMOlIHbDpmdnZW5lIG9nIGVyIGhqZW0gZm9yIG1hbmdlIGdhcnZlZGUga2xhdHJlcmUuIEVuIHN0b3Igw6ViZW4gaGFsIG1lZCBlbiBwb3J0LCBkZXIgw6VibmVzIG9tIHNvbW1lcmVuLCBzw6UgbWFuIGthbiBueWRlIHNpbiBrYWZmZSBlbGxlciDDuGwgaSBzb2xlbi4gQWxsZSBrb25rdXJyZW5jZXIgaSBBYXJodXMsIGYuIGVrcy4gQmxvY3BhcnR5LCAgYWZ2aWtsZXMgaGVyIHDDpSB2b3JlcyB0aWxza3Vlci12ZW5saWdlIGtvbmt1cnJlbmNldsOmZy5cIjtcblxuICBsZWZ0Rmlyc3RDb24uYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZExpZHRvbWhhbGxlbkhlYWRlcik7XG4gIGxlZnRGaXJzdENvbi5hcHBlbmRDaGlsZCh1bmRlcmxpbmVMaWR0T21IYWxsZW4pO1xuICBsZWZ0Rmlyc3RDb24uYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcbiAgY29uc3QgcmlnaHRGaXJzdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0Rmlyc3RDb24uY2xhc3NMaXN0LmFkZChcImFhcmh1c05vcmRMZWZ0T3JSaWdodFwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkSW1nID0gbmV3IEltYWdlKCk7XG4gIGFhcmh1c05vcmRJbWcuc3JjID0gYWFyaHVzTm9yZGltZ1NyYztcbiAgYWFyaHVzTm9yZEltZy5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZEltZ1wiKTtcblxuICByaWdodEZpcnN0Q29uLmFwcGVuZENoaWxkKGFhcmh1c05vcmRJbWcpO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0IGNoaWxkcmVuXG4gIGFhcmh1c05vcmRQYXJ0MUNvbi5hcHBlbmRDaGlsZChsZWZ0Rmlyc3RDb24pO1xuICBhYXJodXNOb3JkUGFydDFDb24uYXBwZW5kQ2hpbGQocmlnaHRGaXJzdENvbik7XG5cbiAgLy8gQ3JlYXRpbmcgcGFydCAyXG4gIGNvbnN0IGFhcmh1c05vcmRQYXJ0MkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c05vcmRQYXJ0MkNvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZFBhcnQyQ29uXCIpO1xuXG4gIGNvbnN0IGtvcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga29ydEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBrb3J0SGVhZGVyLnRleHRDb250ZW50ID0gXCJIZXIgZXIgZXQga29ydCBvdmVyIGhhbGxlblwiO1xuXG4gIGNvbnN0IGtvcnRBYXJodXNOb3JkID0gbmV3IEltYWdlKCk7XG4gIGtvcnRBYXJodXNOb3JkLnNyYyA9IGtvcnRBYXJodXNOb3JkSW1nU3JjO1xuICBrb3J0QWFyaHVzTm9yZC5jbGFzc0xpc3QuYWRkKFwia29ydEFhcmh1c05vcmRcIik7XG5cbiAgYWFyaHVzTm9yZFBhcnQyQ29uLmFwcGVuZENoaWxkKGtvcnRIZWFkZXIpO1xuICBhYXJodXNOb3JkUGFydDJDb24uYXBwZW5kQ2hpbGQoa29ydEFhcmh1c05vcmQpO1xuXG4gIC8vIENyZWF0aW5nIHBhcnQgM1xuICBjb25zdCBhYXJodXNOb3JkUGFydDNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYXJodXNOb3JkUGFydDNDb24uY2xhc3NMaXN0LmFkZChcImFhcmh1c05vcmRQYXJ0M0NvblwiKTtcblxuICBjb25zdCBmaW5kT3NBYXJodXNOb3JkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmaW5kT3NBYXJodXNOb3JkVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBmaW5kT3NBYXJodXNOb3JkVGV4dC5zdHlsZS5mb250U2l6ZSA9IFwiNjBweFwiO1xuICBmaW5kT3NBYXJodXNOb3JkVGV4dC50ZXh0Q29udGVudCA9IFwiRmluZCBPc1wiO1xuXG4gIGNvbnN0IG1hcHNNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBtYXBzTWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBzTWFwQWFyaHVzTm9yZFwiKTtcbiAgbWFwc01hcC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzcmNcIixcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDIyMTkuMjE4NDEyNDc3NzY3MyEyZDEwLjE3OTQ3ODYxNTk0ODE1MyEzZDU2LjIwNTE4NDY4MDY3Njc4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0NjRjMTU4YTNhNGMyMzhmJTNBMHg4YjJlYjE4YTQzNWQ3NGNmITJzQWFyaHVzJTIwQm91bGRlcnMhNWUwITNtMiExc2VuITJzZGshNHYxNjgyOTI1MjEyOTQ5ITVtMiExc2VuITJzZGtcIlxuICApO1xuXG4gIGFhcmh1c05vcmRQYXJ0M0Nvbi5hcHBlbmRDaGlsZChmaW5kT3NBYXJodXNOb3JkVGV4dCk7XG4gIGFhcmh1c05vcmRQYXJ0M0Nvbi5hcHBlbmRDaGlsZChtYXBzTWFwKTtcblxuICAvLyBBcHBlbmRpbmcgbGFzdCBjaGlsZHJlblxuICBjb250ZW50LmFwcGVuZENoaWxkKGFhcmh1c05vcmRQYXJ0MUNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZFBhcnQyQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYXJodXNOb3JkUGFydDNDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWFyaHVzTm9yZDtcbiIsImltcG9ydCBpbnRyb0hvbGRJbWdTcmMgZnJvbSBcIi4uL0ltZy9ib3VsZGVyc0ludHJvSG9sZC5qcGdcIjtcbmltcG9ydCBmb3J0c2FldHRlcmhvbGRTcmMgZnJvbSBcIi4uL0ltZy9ib3VsZGVyc0ZvcnRzYWV0dGVyaG9sZC5qcGdcIjtcbmltcG9ydCBsYW5ndmFyaWd0aG9sZFNyYyBmcm9tIFwiLi4vSW1nL2xhbmd2YXJpZ3Rob2xkLmpwZ1wiO1xuaW1wb3J0IGJvZXJuZWhvbGRTcmMgZnJvbSBcIi4uL0ltZy9ib2VybmVob2xkLmpwZ1wiO1xuaW1wb3J0IHN1bW1lcmNhbXBob2xkU3JjIGZyb20gXCIuLi9JbWcvc3VtbWVyY2FtcGhvbGQuanBnXCI7XG5cbmltcG9ydCB7IGRpc3BsYXlMaW5rIH0gZnJvbSBcIi4uL3BhZ2VDcmVhdGVyXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbGRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBoZWFkZXJcbiAgY29uc3QgaGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJob2xkSGVhZGVyQ29uXCIpO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9sZEhlYWRlclRleHRcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkhvbGRcIjtcblxuICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgZnVuY3Rpb24gdG8gY3JlYXRlIGVsLlxuXG4gIGNvbnN0IGludHJvaG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkludHJvIEhvbGRcIixcbiAgICBpbnRyb0hvbGRJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludHJvXCJcbiAgKTtcblxuICBjb25zdCBmb3J0c2FldHRlcmhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJGb3J0c8OmdHRlciBIb2xkXCIsXG4gICAgZm9ydHNhZXR0ZXJob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9pbnRlcm1lZGlhdGVcIlxuICApO1xuXG4gIGNvbnN0IGxhbmd2YXJpZ3Rob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiTGFuZ3ZhcmlndCBIb2xkXCIsXG4gICAgbGFuZ3ZhcmlndGhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludGhlem9uZVwiXG4gICk7XG5cbiAgY29uc3QgYm9lcm5laG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkLDuHJuZSBIb2xkXCIsXG4gICAgYm9lcm5laG9sZFNyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvYm9lcm5laG9sZFwiXG4gICk7XG5cbiAgY29uc3Qgc3VtbWVyY2FtcGhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJTdW1tZXIgQ2FtcFwiLFxuICAgIHN1bW1lcmNhbXBob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9zb21tZXJjYW1wXCJcbiAgKTtcblxuICAvLyBBcHBlbmRpbmcgYWxsIGVsXG4gIFByb21pc2UuYWxsKFtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGludHJvaG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcnRzYWV0dGVyaG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxhbmd2YXJpZ3Rob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9lcm5laG9sZC5lbCgpKSxcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1bW1lcmNhbXBob2xkLmVsKCkpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbGRQYWdlO1xuIiwiaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuLi9jb250cm9sbGVyXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbWVwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICBjb25zdCBob21lcGFnZUJnRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lcGFnZUJnRnJhbWUuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlQmdJbWdcIiwgXCJpbWdGcmFtZVwiKTtcblxuICBjb25zdCBob21lcGFnZUJnVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlQmdUZXh0LmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZUJnVGV4dFwiKTtcbiAgaG9tZXBhZ2VCZ1RleHQudGV4dENvbnRlbnQgPSBcIktsYXRyaW5nIC0gRsOmbGxlc3NrYWIgLSDDmGtvY2FmZVwiO1xuXG4gIGNvbnN0IGZpcnN0dGltZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdHRpbWVyQnRuLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVyQnRuXCIpO1xuICBmaXJzdHRpbWVyQnRuLnRleHRDb250ZW50ID0gXCJGw7hyc3RlIGdhbmc/XCI7XG5cbiAgZmlyc3R0aW1lckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImZpcnN0dGltZXJcIik7XG4gIH0pO1xuXG4gIGhvbWVwYWdlQmdGcmFtZS5hcHBlbmRDaGlsZChob21lcGFnZUJnVGV4dCk7XG4gIGhvbWVwYWdlQmdGcmFtZS5hcHBlbmRDaGlsZChmaXJzdHRpbWVyQnRuKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVwYWdlQmdGcmFtZSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lcGFnZTtcbiIsImNvbnN0IGNyZWF0ZVByaXNwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBpbWdGcmFtZVxuICBjb25zdCBpbWdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0ZyYW1lLmNsYXNzTGlzdC5hZGQoXCJwcmlzSW1nRnJhbWVcIiwgXCJpbWdGcmFtZVwiKTtcblxuICBjb25zdCBpbWdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGltZ1RleHQuY2xhc3NMaXN0LmFkZChcInByaXNJbWdUZXh0XCIpO1xuICBpbWdUZXh0LnRleHRDb250ZW50ID0gXCJQUklTRVJcIjtcblxuICBpbWdGcmFtZS5hcHBlbmRDaGlsZChpbWdUZXh0KTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBwcmlzIHBhcnRcbiAgY29uc3QgZW50cmVwcmlzUGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVudHJlcHJpc1BhcnQuY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIiwgXCJlbnRyeVBhcnRcIik7XG5cbiAgY29uc3QgZW50cnlQcmlzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW50cnlQcmlzQm94LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIC8vIENyZWF0aW5nIG9uZSBsaW5lXG4gIGNvbnN0IG9mZlBlYWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG9mZlBlYWtUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0Q29uXCIpO1xuXG4gIGxldCBvZmZQZWFrVGV4dEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG9mZlBlYWtUZXh0Rmlyc3QuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgb2ZmUGVha1RleHRGaXJzdC50ZXh0Q29udGVudCA9IFwiT2ZmcGVhazpcIjtcblxuICBsZXQgb2ZmUGVha1RleHRMYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG9mZlBlYWtUZXh0TGFzdC5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrVGV4dExhc3QudGV4dENvbnRlbnQgPVxuICAgIFwiIG1hbmRhZyB0aWwgZnJlZGFnIGZvZXIga2wgMTQsIGxvZXJkYWcgb2cgc29lbmRhZyBlZnRyIGtsIDE4XCI7XG5cbiAgb2ZmUGVha1RleHQuYXBwZW5kQ2hpbGQob2ZmUGVha1RleHRGaXJzdCk7XG4gIG9mZlBlYWtUZXh0LmFwcGVuZENoaWxkKG9mZlBlYWtUZXh0TGFzdCk7XG5cbiAgLy8gQ3JlYXRpbmcgc2Vjb25kIGxpbmVcbiAgY29uc3QgcGVha1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1RleHQuY2xhc3NMaXN0LmFkZChcInRleHRDb25cIik7XG5cbiAgbGV0IHBlYWtUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1RleHRGaXJzdC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBwZWFrVGV4dEZpcnN0LnRleHRDb250ZW50ID0gXCJQZWFrOlwiO1xuXG4gIGxldCBwZWFrVGV4dExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1RleHRMYXN0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHBlYWtUZXh0TGFzdC50ZXh0Q29udGVudCA9XG4gICAgXCIgbWFuZGFnIHRpbCBmcmVkYWcgZm9lciBrbCAxNCwgbG9lcmRhZyBvZyBzb2VuZGFnIGVmdHIga2wgMThcIjtcblxuICBwZWFrVGV4dC5hcHBlbmRDaGlsZChwZWFrVGV4dEZpcnN0KTtcbiAgcGVha1RleHQuYXBwZW5kQ2hpbGQocGVha1RleHRMYXN0KTtcblxuICAvLyBBcHBlbmRpbmcgYm90aCBsaW5lc1xuICBlbnRyeVByaXNCb3guYXBwZW5kQ2hpbGQob2ZmUGVha1RleHQpO1xuICBlbnRyeVByaXNCb3guYXBwZW5kQ2hpbGQocGVha1RleHQpO1xuXG4gIGVudHJlcHJpc1BhcnQuYXBwZW5kQ2hpbGQoZW50cnlQcmlzQm94KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJQYXJ0XG4gIGNvbnN0IGVuZ2FuZ3NFbnRyZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5nYW5nc0VudHJlSGVhZGVyXCIsIFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgZW5nYW5nc0VudHJlSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlbmdhbmdzRW50cmVIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJwcmlzSGVhZGVyXCIpO1xuICBlbmdhbmdzRW50cmVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJFbmdhbmdzIEVudHJlXCI7XG5cbiAgZW5nYW5nc0VudHJlSGVhZGVyLmFwcGVuZENoaWxkKGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIEVudHJlYm94XG4gIGNvbnN0IGVuZ2FuZ0VudHJlQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nRW50cmVDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IGVuZ2FuZ0VudHJlQ29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVuZ2FuZ0VudHJlQ29uTGVmdC5jbGFzc0xpc3QuYWRkKFwicHJpc0JveFwiKTtcblxuICBsZXQgb2ZmUGVha0hlYWRlclByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha0hlYWRlclByaXMuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgb2ZmUGVha0hlYWRlclByaXMudGV4dENvbnRlbnQgPSBcIkVudHJlIE9mZiBQZWFrXCI7XG5cbiAgbGV0IG9mZlBlYWtWb2tzZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1Zva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrVm9rc2VuLnRleHRDb250ZW50ID0gXCJWb2tzZW46IDk1a3JcIjtcblxuICBsZXQgb2ZmUGVha0JvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG9mZlBlYWtCb2Vybi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrQm9lcm4udGV4dENvbnRlbnQgPSBcIkJvZXJuOiA5NWtyXCI7XG5cbiAgZW5nYW5nRW50cmVDb25MZWZ0LmFwcGVuZENoaWxkKG9mZlBlYWtIZWFkZXJQcmlzKTtcbiAgZW5nYW5nRW50cmVDb25MZWZ0LmFwcGVuZENoaWxkKG9mZlBlYWtWb2tzZW4pO1xuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha0JvZXJuKTtcblxuICAvLyBDcmVhdGluZyByaWdodCBzaWRlXG4gIGNvbnN0IGVuZ2FuZ0VudHJlQ29uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbmdhbmdFbnRyZUNvblJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBwZWFrSGVhZGVyUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrSGVhZGVyUHJpcy5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBwZWFrSGVhZGVyUHJpcy50ZXh0Q29udGVudCA9IFwiRW50cmUgUGVha1wiO1xuXG4gIGxldCBwZWFrVm9rc2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtWb2tzZW4uY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgcGVha1Zva3Nlbi50ZXh0Q29udGVudCA9IFwiVm9rc2VuOiA5NWtyXCI7XG5cbiAgbGV0IHBlYWtCb2VybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrQm9lcm4uY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgcGVha0JvZXJuLnRleHRDb250ZW50ID0gXCJCb2VybjogOTVrclwiO1xuXG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha0hlYWRlclByaXMpO1xuICBlbmdhbmdFbnRyZUNvblJpZ2h0LmFwcGVuZENoaWxkKHBlYWtWb2tzZW4pO1xuICBlbmdhbmdFbnRyZUNvblJpZ2h0LmFwcGVuZENoaWxkKHBlYWtCb2Vybik7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgZW5nYW5nRW50cmVDb24uYXBwZW5kQ2hpbGQoZW5nYW5nRW50cmVDb25MZWZ0KTtcbiAgZW5nYW5nRW50cmVDb24uYXBwZW5kQ2hpbGQoZW5nYW5nRW50cmVDb25SaWdodCk7XG5cbiAgLy8gQ3JlYXRpbmcgaGVhZGVyXG4gIGNvbnN0IG1lZGxlbXNrYWJFbnRyZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lZGxlbXNrYWJFbnRyZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5nYW5nc0VudHJlSGVhZGVyXCIsIFwicGFydFdpdGhDZW5FbFwiKTtcblxuICBjb25zdCBtZWRsZW1za2FiSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBtZWRsZW1za2FiSGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwicHJpc0hlYWRlclwiKTtcbiAgbWVkbGVtc2thYkhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIk1lZGxlbXNrYWJcIjtcblxuICBtZWRsZW1za2FiRW50cmVIZWFkZXIuYXBwZW5kQ2hpbGQobWVkbGVtc2thYkhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIG1lZGxlbXNrYWJzYm94XG4gIGNvbnN0IG1lZGxlbXNrYWJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uLmNsYXNzTGlzdC5hZGQoXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgc2lkZVxuICBjb25zdCBtZWRsZW1za2FiQ29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lZGxlbXNrYWJDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBzdGFuZGFyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdGFuZGFyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBzdGFuZGFyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU3RhbmRhcmQgbWVkbGVtc2thYlwiO1xuXG4gIGxldCBzdGFuZGFyZFByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3RhbmRhcmRQcmlzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHN0YW5kYXJkUHJpcy50ZXh0Q29udGVudCA9IFwiMzk5a3IgcGVyIG1hYW5lZFwiO1xuXG4gIG1lZGxlbXNrYWJDb25MZWZ0LmFwcGVuZENoaWxkKHN0YW5kYXJkSGVhZGVyKTtcbiAgbWVkbGVtc2thYkNvbkxlZnQuYXBwZW5kQ2hpbGQoc3RhbmRhcmRQcmlzKTtcblxuICAvLyBDcmVhdGluZyBtaWRkbGUgc2lkZVxuICBjb25zdCBtZWRsZW1za2FiQ29uTWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkNvbk1pZGRsZS5jbGFzc0xpc3QuYWRkKFwicHJpc0JveFwiKTtcblxuICBsZXQgc3R1ZGllSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHN0dWRpZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBzdHVkaWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN0dWRpZSBtZWRsZW1za2FiXCI7XG5cbiAgbGV0IHN0dWRpZVByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3R1ZGllUHJpcy5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBzdHVkaWVQcmlzLnRleHRDb250ZW50ID0gXCIzNTlrciBwZXIgbWFhbmVkXCI7XG5cbiAgbWVkbGVtc2thYkNvbk1pZGRsZS5hcHBlbmRDaGlsZChzdHVkaWVIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uTWlkZGxlLmFwcGVuZENoaWxkKHN0dWRpZVByaXMpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcbiAgY29uc3QgbWVkbGVtc2thYkNvblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkNvblJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBqdW5pb3JIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAganVuaW9ySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGp1bmlvckhlYWRlci50ZXh0Q29udGVudCA9IFwiSnVuaW9yIG1lZGxlbXNrYWJcIjtcblxuICBsZXQganVuaW9yUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBqdW5pb3JQcmlzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGp1bmlvclByaXMudGV4dENvbnRlbnQgPSBcIjIxOWtyIHBlciBtYWFuZWRcIjtcblxuICBtZWRsZW1za2FiQ29uUmlnaHQuYXBwZW5kQ2hpbGQoanVuaW9ySGVhZGVyKTtcbiAgbWVkbGVtc2thYkNvblJpZ2h0LmFwcGVuZENoaWxkKGp1bmlvclByaXMpO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbkxlZnQpO1xuICBtZWRsZW1za2FiQ29uLmFwcGVuZENoaWxkKG1lZGxlbXNrYWJDb25NaWRkbGUpO1xuICBtZWRsZW1za2FiQ29uLmFwcGVuZENoaWxkKG1lZGxlbXNrYWJDb25SaWdodCk7XG5cbiAgLy8gQ3JlYXRpbmcgaGVhZGVyXG4gIGNvbnN0IGtsaXBwZWtvcnRIZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBrbGlwcGVrb3J0SGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IGtsaXBwZWtvcnRIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJwcmlzSGVhZGVyXCIpO1xuICBrbGlwcGVrb3J0SGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiS2xpcHBla29ydFwiO1xuXG4gIGtsaXBwZWtvcnRIZWFkZXJDb24uYXBwZW5kQ2hpbGQoa2xpcHBla29ydEhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIEVudHJlYm94XG4gIGNvbnN0IGtsaXBwZWtvcnRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBrbGlwcGVrb3J0Q29uLmNsYXNzTGlzdC5hZGQoXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgc2lkZVxuICBjb25zdCBrbGlwcGVrb3J0Q29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBrbGlwcGVrb3J0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtsaXBwZWtvcnRIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAga2xpcHBla29ydEhlYWRlci50ZXh0Q29udGVudCA9IFwiS2xpcHBla29ydCBhbG0uXCI7XG5cbiAgbGV0IGtsaXBwZWtvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydC5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBrbGlwcGVrb3J0LnRleHRDb250ZW50ID0gXCI5NTBrciAoMTAga2xpcClcIjtcblxuICBrbGlwcGVrb3J0Q29uTGVmdC5hcHBlbmRDaGlsZChrbGlwcGVrb3J0SGVhZGVyKTtcbiAga2xpcHBla29ydENvbkxlZnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCBrbGlwcGVrb3J0Q29uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBrbGlwcGVrb3J0Q29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGtsaXBwZWtvcnRVMTZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydFUxNkhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBrbGlwcGVrb3J0VTE2SGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IFUuMTZcIjtcblxuICBsZXQga2xpcHBla29ydFUxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0VTE2LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnRVMTYudGV4dENvbnRlbnQgPSBcIjYwMGtyICgxMCBrbGlwKVwiO1xuXG4gIGtsaXBwZWtvcnRDb25SaWdodC5hcHBlbmRDaGlsZChrbGlwcGVrb3J0VTE2SGVhZGVyKTtcbiAga2xpcHBla29ydENvblJpZ2h0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRVMTYpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIGtsaXBwZWtvcnRDb24uYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvbkxlZnQpO1xuICBrbGlwcGVrb3J0Q29uLmFwcGVuZENoaWxkKGtsaXBwZWtvcnRDb25SaWdodCk7XG5cbiAgLy8gQ3JlYXRpbmcgaGVhZGVyXG4gIGNvbnN0IHVkc3R5ckhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckhlYWRlckNvbi5jbGFzc0xpc3QuYWRkKFwiZW5nYW5nc0VudHJlSGVhZGVyXCIsIFwicGFydFdpdGhDZW5FbFwiKTtcblxuICBjb25zdCB1ZHN0eXJIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5ckhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIHVkc3R5ckhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlVkc3R5clwiO1xuXG4gIHVkc3R5ckhlYWRlckNvbi5hcHBlbmRDaGlsZCh1ZHN0eXJIZWFkZXJUZXh0KTtcblxuICAvLyBDcmVhdGluZyBFbnRyZWJveFxuICBjb25zdCB1ZHN0eXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1ZHN0eXJDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IHVkc3R5ckNvbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1ZHN0eXJDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCB1ZHN0eXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdWRzdHlySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHVkc3R5ckhlYWRlci50ZXh0Q29udGVudCA9IFwiS2xpcHBla29ydCBhbG0uXCI7XG5cbiAgbGV0IHVkc3R5clZva3NlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1ZHN0eXJWb2tzZW4uY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdWRzdHlyVm9rc2VuLnRleHRDb250ZW50ID0gXCJMZWplIGFmIHNrbzogMzVrclwiO1xuXG4gIGxldCB1ZHN0eXJCb2VybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1ZHN0eXJCb2Vybi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB1ZHN0eXJCb2Vybi50ZXh0Q29udGVudCA9IFwiS2FsazogMTBrclwiO1xuXG4gIHVkc3R5ckNvbkxlZnQuYXBwZW5kQ2hpbGQodWRzdHlySGVhZGVyKTtcbiAgdWRzdHlyQ29uTGVmdC5hcHBlbmRDaGlsZCh1ZHN0eXJWb2tzZW4pO1xuICB1ZHN0eXJDb25MZWZ0LmFwcGVuZENoaWxkKHVkc3R5ckJvZXJuKTtcblxuICAvLyBBcHBlbmRpbmcgbGFzdFxuICB1ZHN0eXJDb24uYXBwZW5kQ2hpbGQodWRzdHlyQ29uTGVmdCk7XG5cbiAgLy8gQXBwZW5kaW5nIGFsbCBjaGlsZHJlblxuICBjb250ZW50LmFwcGVuZENoaWxkKGltZ0ZyYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbnRyZXByaXNQYXJ0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbmdhbmdzRW50cmVIZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVuZ2FuZ0VudHJlQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZWRsZW1za2FiRW50cmVIZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lZGxlbXNrYWJDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRIZWFkZXJDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHVkc3R5ckhlYWRlckNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodWRzdHlyQ29uKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByaXNwYWdlO1xuIiwiaW1wb3J0IHZhZWdnZUltZ1NyYyBmcm9tIFwiLi4vSW1nL3ZhZWdnZS5wbmdcIjtcbmltcG9ydCBncmViSW1nU3JjIGZyb20gXCIuLi9JbWcvZ3JlYi5wbmdcIjtcbmltcG9ydCBiZXZhZWdlbHNlSW1nU3JjIGZyb20gXCIuLi9JbWcvYmV2YWVnZWxzZS5wbmdcIjtcblxuY29uc3QgY3JlYXRlVGVybXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGRpc3BsYXkgbGluayAoIEknbSBsYXp5IHJpZ2h0IG5vdyBzb3JyeSApXG4gIGNvbnN0IGltZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZChcInByaXNJbWdGcmFtZVwiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaW1nVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ1RleHRcIik7XG4gIGltZ1RleHQudGV4dENvbnRlbnQgPSBcIlRFUk1TXCI7XG5cbiAgaW1nRnJhbWUuYXBwZW5kQ2hpbGQoaW1nVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgZmlyc3QgcGFydFxuICBjb25zdCBwYXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRcIik7XG4gIHBhcnQxLnN0eWxlLm1hcmdpblRvcCA9IFwiIDUwcHhcIjtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHBhcnRcbiAgY29uc3QgbGVmdFBhcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRMZWZ0XCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxSGVhZGVyLnRleHRDb250ZW50ID0gXCJWw6ZnZ2VcIjtcblxuICBjb25zdCBsZWZ0UGFydDF1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDF1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBsZWZ0UGFydDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQxVGV4dC5jbGFzc0xpc3QuYWRkKFwidGVybXNUZXh0Q29uXCIpO1xuXG4gIGxldCBsZWZ0UGFydDFUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFUZXh0MS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFUZXh0MS50ZXh0Q29udGVudCA9XG4gICAgXCJTbGFiOiBFciBiZXRlZ25ldCBzb20gZW4gdsOmZ2jDpmxkbmluZyBww6Ugb3ZlciA5MG8gZnJhIGdydW5kZmxhZGVuLiBFbiBydXRlIHDDpSBzbGFiIGhhbmRsZXIgb2Z0ZSBvbSBiYWxhbmNlIGkgc3RlZGV0IGZvciBzdHlya2UuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MVRleHQyLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MVRleHQyLnRleHRDb250ZW50ID1cbiAgICBcIkZhY2U6IEVyIHbDpmdnZSBkZXIgaGFyIGVuIGjDpmxkbmluZyBww6UgdW5kZXIgOTBvIGZyYSBndWx2ZXQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MVRleHQzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MVRleHQzLnRleHRDb250ZW50ID1cbiAgICBcIk92ZXJoYW5nOiBFciB2w6ZnZ2UgbWVkIGVuIGtyYWZ0aWcgZmFjZSBow6ZsZG5pbmcsIGRlIGVyIG9mdGUgZW4gZGVsIHR1bmdlIGF0IGtsYXRyZS5cIjtcblxuICBsZXQgbGVmdFBhcnQxVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxVGV4dDQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxVGV4dDQudGV4dENvbnRlbnQgPVxuICAgIFwiUm9vZjogQnJ1Z2VzIG9tIHbDpmdnZSBkZXIgZXIgcGFyYWxsZWxsZSBtZWQgZ3VsdmV0LCBhbHRzw6UgaW5nZW4gaMOmbGRuaW5nLiBSb29mIGVyIGZvciBkZXQgbWVzdGUgbWVnZXQgdHVuZ2UgYXQga2xhdHJlLCBvZyBrcsOmdmVyIGVuIGdvZCB0ZWtuaWsuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MVRleHQ1LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MVRleHQ1LnRleHRDb250ZW50ID1cbiAgICBcIk9mdGUgYmxpdmVyIHbDpmdnZSBvZ3PDpSBiZXNrcmV2ZXQgbWVkIGRlcmVzIGjDpmxkbmluZyAoRi5la3MuIDIwZ3JhZGVyIGZhY2UpXCI7XG5cbiAgbGVmdFBhcnQxVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0MSk7XG4gIGxlZnRQYXJ0MVRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dDIpO1xuICBsZWZ0UGFydDFUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQzKTtcbiAgbGVmdFBhcnQxVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0NCk7XG4gIGxlZnRQYXJ0MVRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dDUpO1xuXG4gIGxlZnRQYXJ0MS5hcHBlbmRDaGlsZChsZWZ0UGFydDFIZWFkZXIpO1xuICBsZWZ0UGFydDEuYXBwZW5kQ2hpbGQobGVmdFBhcnQxdW5kZXJsaW5lKTtcbiAgbGVmdFBhcnQxLmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHBhcnRcbiAgY29uc3QgcmlnaHRQYXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0UGFydDEuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFJpZ2h0XCIpO1xuXG4gIGNvbnN0IHZhZWdnZUltZyA9IG5ldyBJbWFnZSgpO1xuICB2YWVnZ2VJbWcuc3JjID0gdmFlZ2dlSW1nU3JjO1xuICB2YWVnZ2VJbWcuY2xhc3NMaXN0LmFkZChcInRlcm1zSW1nXCIsIFwidGVybXNJbWcxXCIpO1xuXG4gIHJpZ2h0UGFydDEuYXBwZW5kQ2hpbGQodmFlZ2dlSW1nKTtcblxuICAvLyBBcHBlbmRpbmcgYm90aCBzaWRlc1xuICBwYXJ0MS5hcHBlbmRDaGlsZChsZWZ0UGFydDEpO1xuICBwYXJ0MS5hcHBlbmRDaGlsZChyaWdodFBhcnQxKTtcblxuICAvLyBDcmVhdGluZyBwYXJ0IDJcbiAgY29uc3QgcGFydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJ0Mi5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0XCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgcGFydFxuICBjb25zdCBsZWZ0UGFydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDIuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydExlZnRcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MkhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkdyZWJcIjtcblxuICBjb25zdCBsZWZ0UGFydDJ1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDJ1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBsZWZ0UGFydDJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGVybXNUZXh0Q29uXCIpO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0MS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0MS50ZXh0Q29udGVudCA9XG4gICAgXCJKdWc6IEJydWdlcyBvbSBncmViIGR1IGthbiB0YWdlIGZhdCBpIG1lZCBhbGxlIHRyZSBmaW5nZXJsZWQuIERlIGVyIG9mdGUgZ29kZSBhdCBob2xkZSBmYXN0IGkuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQyLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQyLnRleHRDb250ZW50ID1cbiAgICBcIkNyaW1wOiBFciBiZXRlZ25lbHNlbiBicnVndCBvbSBncmViLCBtYW4ga3VuIGthbiBmw6UgZmF0IGkgbWVkIGRldCB5ZGVyc3RlIGZpbmRlcmxlZC5cIjtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDMudGV4dENvbnRlbnQgPVxuICAgIFwiU2xvYmVyOiBFciBvZnRlIHJpZ3RpZ3Qgc3RvcmUgZ3JlYi4gTWFuIGJydWdlciBoZWxlIGjDpW5kZW4gdGlsIGF0IHRhZ2UgZmF0IGkgZGVtLCBkYSBkZSBlciBsaWR0IHVqw6Z2bmUgaSBvdmVyZmxhZGVuLlwiO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0NC5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0NC50ZXh0Q29udGVudCA9XG4gICAgXCJQb2NrZXQ6IE9nc8OlIGthbGRldCBmaW5nZXItcG9ja2V0cywgZXIgcnVuZGUgZ3JlYiBtZWQgZW4gdWRodWxpbmcgaSBtaWR0ZW4sIG1hbiBrYW4gaG9sZGUgZmFzdCBpIG1lZCBmaW5ncmVuZGUuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQ1LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQ1LnRleHRDb250ZW50ID1cbiAgICBcIkhvcm46IEVyIGV0IG5vZ2VubHVuZGUgc3RvcnQgKE9mdGUgc3BpZHN0KSBncmViLCBkZXIgc3Rpa2tlciBsaWdlIHVkIGZyYSB2w6ZnZ2VuIGVsbGVyIGxpZHQgb3BhZC4gTWFuIHRhZ2VyIGZhdCBpIGV0IGhvcm4sIHZlZCBhdCBsaWdnZSBoZWxlIGjDpW5kZW4gcnVuZHQgb20gZGV0LlwiO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0Ni5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0Ni50ZXh0Q29udGVudCA9XG4gICAgXCJQaW5jaDogU2lkZGVyIG1lc3Qgbm9ybWFsdCBww6UgaGrDuHJuZXIgYWYgdsOmZ2dlLCBvZyBrYW4gZ29kdCBiZXN0w6UgYWYgZmxlcmUgZ3JlYi4gTsOlciBtYW4gdGFnZXIgZmF0IGkgZW4gcGluY2gsIHNrYWwgbWFuIGJydWdlIGhlbGUgaMOlbmRlbiBvZyBzcMOmbmRlIG9wIG1lbGxlbSB0b21tZWxmaW5nZXJlbiBvZyBkZSBhbmRyZSBmaW5ncmUuXCI7XG5cbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0MSk7XG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDIpO1xuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQzKTtcbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0NCk7XG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDUpO1xuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQ2KTtcblxuICAvLyBBcHBkaW5nIGxhc3RcbiAgbGVmdFBhcnQyLmFwcGVuZENoaWxkKGxlZnRQYXJ0MkhlYWRlcik7XG4gIGxlZnRQYXJ0Mi5hcHBlbmRDaGlsZChsZWZ0UGFydDJ1bmRlcmxpbmUpO1xuICBsZWZ0UGFydDIuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgcGFydFxuICBjb25zdCByaWdodFBhcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRQYXJ0Mi5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0UmlnaHRcIik7XG5cbiAgY29uc3QgZ3JlYkltZyA9IG5ldyBJbWFnZSgpO1xuICBncmViSW1nLnNyYyA9IGdyZWJJbWdTcmM7XG4gIGdyZWJJbWcuY2xhc3NMaXN0LmFkZChcInRlcm1zSW1nXCIsIFwidGVybXNJbWcyXCIpO1xuXG4gIHJpZ2h0UGFydDIuYXBwZW5kQ2hpbGQoZ3JlYkltZyk7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAgcGFydDIuYXBwZW5kQ2hpbGQobGVmdFBhcnQyKTtcbiAgcGFydDIuYXBwZW5kQ2hpbGQocmlnaHRQYXJ0Mik7XG5cbiAgLy8gQ3JlYXRpbmcgcGFydCAzXG4gIGNvbnN0IHBhcnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFydDMuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHBhcnRcbiAgY29uc3QgbGVmdFBhcnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQzLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRMZWZ0XCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0M0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzSGVhZGVyLnRleHRDb250ZW50ID0gXCJHcmViXCI7XG5cbiAgY29uc3QgbGVmdFBhcnQzdW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFBhcnQzdW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1RleHRDb25cIik7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQxLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQxLnRleHRDb250ZW50ID1cbiAgICBcIlN0YXRpc2s6IEVyIG7DpXIgbWFuIGtsYXRyZXIgZW4gYmFuZSBzdGlsbGUgb2cgcm9saWd0LCBodm9yIG1hbiBhbHRpZCBoYXIgZsO4ZGRlciBvZyBow6ZuZGVyIHDDpSBncmViZW5lLlwiO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0Mi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0Mi50ZXh0Q29udGVudCA9XG4gICAgXCJEeW5hbWlzazogRXIgaHZvciBtYW4gaG9wcGVyIGZyYSBldCBncmViIHRpbCBldCBhbmRldCwgb2cgcMOlIGRlbiBtw6VkZSBzbGlwcGVyIGFsdCBrb250YWt0IG1lZCBncmViZW5lIGZvciBlbiBzdHVuZC5cIjtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDMudGV4dENvbnRlbnQgPVxuICAgIFwiSGVlbGhvb2s6IE9nc8OlIGthbGRldCBow6ZsZWh1ZywgZXIgaHZvciBtYW4gcGxhY2VyZXIgdWRlbHVra2VuZGUgc2luIGjDpmwgcMOlIGV0IGdyZWIsIGVudGVuIGZvciBhdCB0csOma2tlIHNpZyBvcCBlbGxlciBmb3Igc3RhYmlsaXRldC5cIjtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDQudGV4dENvbnRlbnQgPVxuICAgIFwiS25lZWJhcjogRXIgaHZvciBtYW4gZsO4cmVyIHNpdCBrbsOmIGluZCBtZWxsZW0gdG8gZ3JlYiBvZyBiw7hqZXIgZGV0IHVkLCB0aWwgbWFuIHNpZGRlciBpIHNww6ZuZC4gXCI7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQ1LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQ1LnRleHRDb250ZW50ID1cbiAgICBcIkZsYWc6IEVyIGJldsOmZ2Vsc2VuIGh2b3IgbWFuIHPDpnR0ZXIgc2lnIGZvZCBpbmQgdGlsIGV0IHB1bmt0IHDDpSB2w6ZnZ2VuLCBodm9yIGRlciBpa2tlIGVyIHBsYWNlcmV0IGV0IGdyZWIuIE1hbiBnw7hyIGRldCBmb3IgYXQgb3Buw6UgZW4gYmVkcmUgc3RhYmlsaXRldC5cIjtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDYuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDYudGV4dENvbnRlbnQgPVxuICAgIFwiTWF0Y2g6IEVyIGh2b3IgbWFuIGVudGVuIHNhbWxlciBiZWdnZSBow6ZuZGVyIGVsbGVyIGJlZ2dlIGbDuGRkZXIgcMOlIGRldCBzYW1tZSBncmViLiBEZW5uZSBiZXbDpmdlbHNlIGZvcmVrb21tZXIgb2Z0ZSBmb3JkaSBtYW4gaGFyIGJydWdlIGZvciBhdCBza2lmdGUgaMOlbmQgZWxsZXIgZm9kLlwiO1xuXG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDEpO1xuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQyKTtcbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0Myk7XG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDQpO1xuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQ1KTtcbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0Nik7XG5cbiAgbGVmdFBhcnQzLmFwcGVuZENoaWxkKGxlZnRQYXJ0M0hlYWRlcik7XG4gIGxlZnRQYXJ0My5hcHBlbmRDaGlsZChsZWZ0UGFydDN1bmRlcmxpbmUpO1xuICBsZWZ0UGFydDMuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgcGFydFxuICBjb25zdCByaWdodFBhcnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRQYXJ0My5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0UmlnaHRcIik7XG5cbiAgY29uc3QgYmV2YWVnZWxzZUltZyA9IG5ldyBJbWFnZSgpO1xuICBiZXZhZWdlbHNlSW1nLnNyYyA9IGJldmFlZ2Vsc2VJbWdTcmM7XG4gIGJldmFlZ2Vsc2VJbWcuY2xhc3NMaXN0LmFkZChcInRlcm1zSW1nXCIsIFwidGVybXNJbWczXCIpO1xuXG4gIHJpZ2h0UGFydDMuYXBwZW5kQ2hpbGQoYmV2YWVnZWxzZUltZyk7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAgcGFydDMuYXBwZW5kQ2hpbGQobGVmdFBhcnQzKTtcbiAgcGFydDMuYXBwZW5kQ2hpbGQocmlnaHRQYXJ0Myk7XG5cbiAgLy8gQXBwZW5kaW5nIGFsbFxuICBjb250ZW50LmFwcGVuZENoaWxkKGltZ0ZyYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYXJ0MSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFydDIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBhcnQzKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRlcm1zO1xuIiwiaW1wb3J0IHBhZ2VDcmVhdGVyIGZyb20gXCIuL3BhZ2VDcmVhdGVyXCI7XG5cbmxldCBjdXJyZW50UGFnZUNoZWNrZXI7XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGFnZUNoZWNrZXJcIikpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50UGFnZUNoZWNrZXJcIiwgXCJob21lXCIpO1xufSBlbHNlIHtcbiAgY3VycmVudFBhZ2VDaGVja2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGFnZUNoZWNrZXJcIik7XG59XG5cbmNvbnN0IGJ0bkFjdGl2YXRpb24gPSB7XG4gIHBhZ2VTd2l0Y2g6IChwYWdlKSA9PiB7XG4gICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUNyZWF0ZXIocGFnZSkpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlQ2hlY2tlclwiLCBwYWdlKTtcbiAgfSxcbn07XG5cbmNvbnN0IHN0YXJ0UGFnZSA9ICgpID0+IHtcbiAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKGN1cnJlbnRQYWdlQ2hlY2tlcik7XG59O1xuXG5leHBvcnQgeyBidG5BY3RpdmF0aW9uLCBzdGFydFBhZ2UgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzdGFydFBhZ2UgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbnN0YXJ0UGFnZSgpO1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWVwYWdlIGZyb20gXCIuL1BhZ2VzL2hvbWVwYWdlXCI7XG5pbXBvcnQgY3JlYXRlUHJpc3BhZ2UgZnJvbSBcIi4vUGFnZXMvcHJpc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbGRQYWdlIGZyb20gXCIuL1BhZ2VzL2hvbGRcIjtcbmltcG9ydCBjcmVhdGVIYWxsZXJwYWdlIGZyb20gXCIuL1BhZ2VzL2hhbGxlclwiO1xuaW1wb3J0IGNyZWF0ZUFhcmh1c05vcmQgZnJvbSBcIi4vUGFnZXMvaGFsbGVyL25vcmRcIjtcbmltcG9ydCBjcmVhdGVFdmVudHMgZnJvbSBcIi4vUGFnZXMvZXZlbnRzXCI7XG5pbXBvcnQgY3JlYXRlVGVybXMgZnJvbSBcIi4vUGFnZXMvdGVybXNcIjtcbmltcG9ydCBjcmVhdGVGaXJzdFRpbWVyIGZyb20gXCIuL1BhZ2VzL2ZpcnN0dGltZXJcIjtcblxuaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuLy8gSW1nXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi9JbWcvYm91bGRlcnNMb2dvLnBuZ1wiO1xuaW1wb3J0IHRyYW5zTG9nbyBmcm9tIFwiLi9JbWcvdHJhbnNMb2dvLnBuZ1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuL0ltZy9tZW51SWNvbi5wbmdcIjtcblxuY29uc3QgcGFnZUNyZWF0ZXIgPSAocGFnZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYm9keUNvblwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDcmVhdGVyKHBhZ2UpKTtcblxuICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlzXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByaXNwYWdlKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhvbGRcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9sZFBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFsbGVyXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhhbGxlcnBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWFyaHVzTm9yZFwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYXJodXNOb3JkKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImV2ZW50c1wiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFdmVudHMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGVybXNcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGVybXMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmlyc3R0aW1lclwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGaXJzdFRpbWVyKCkpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNyZWF0ZXIoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBtZW51Q3JlYXRlciA9ICgpID0+IHtcbiAgY29uc3QgbWVudUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb24uY2xhc3NMaXN0LmFkZChcIm1lbnVDb25cIik7XG5cbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IGxvZ29TcmM7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImJvdWxkZXJzTG9nb1wiKTtcblxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaG9tZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCYXIuY2xhc3NMaXN0LmFkZChcIm1lbnVCYXJcIik7XG5cbiAgY29uc3QgbWVudUJ0blByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuUHJpcy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blByaXMudGV4dENvbnRlbnQgPSBcIlBSSVNcIjtcblxuICBtZW51QnRuUHJpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcInByaXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5IYWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuSGFsbGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuSGFsbGVyLnRleHRDb250ZW50ID0gXCJIQUxMRVJcIjtcblxuICBtZW51QnRuSGFsbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaGFsbGVyXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuRmlyc3R0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5GaXJzdHRpbWVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuRmlyc3R0aW1lci50ZXh0Q29udGVudCA9IFwiRsOYUlNURSBHQU5HP1wiO1xuXG4gIG1lbnVCdG5GaXJzdHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiZmlyc3R0aW1lclwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkV2ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5FdmVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5FdmVudHMudGV4dENvbnRlbnQgPSBcIkVWRU5UU1wiO1xuXG4gIG1lbnVCdG5FdmVudHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJldmVudHNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5Ib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0bkhvbGQuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5Ib2xkLnRleHRDb250ZW50ID0gXCJIT0xEXCI7XG5cbiAgbWVudUJ0bkhvbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJob2xkXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuVGVybWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0blRlcm1lci5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blRlcm1lci50ZXh0Q29udGVudCA9IFwiVEVSTVNcIjtcblxuICBtZW51QnRuVGVybWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwidGVybXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGxpbmtUb093blBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGlua1RvT3duUGFnZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9cIik7XG4gIGxpbmtUb093blBhZ2Uuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBsaW5rVG9Pd25QYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBsaW5rVG9Pd25QYWdlLnRleHRDb250ZW50ID0gXCJMaW5rIHRpbCBCb3VsZGVyc1wiO1xuXG4gIGxpbmtUb093blBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICAvLyBDcmVhdGluZyB0aGUgc2lkZSBiYXIgZm9yIHRoZSBtb3JlIGJ0blxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICBjb25zdCBzaWRlYmFyUmVtb3ZlQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyUmVtb3ZlQXJyb3cuY2xhc3NMaXN0LmFkZChcInNpZGViYXJSZW1vdmVBcnJvd1wiKTtcbiAgc2lkZWJhclJlbW92ZUFycm93LnRleHRDb250ZW50ID0gXCLinpRcIjtcblxuICBzaWRlYmFyUmVtb3ZlQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlYmFyLnN0eWxlLnJpZ2h0ID0gXCJtYXgoLTUwMHB4LCAtODB2dylcIjtcbiAgfSk7XG5cbiAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhck1lbnVcIik7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyUmVtb3ZlQXJyb3cpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICBjb25zdCBtZW51QnRuTWVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5NZXJlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuTWVyZS50ZXh0Q29udGVudCA9IFwiTUVSRVwiO1xuXG4gIGNvbnN0IGFwcGVuZFNpZGViYXJNZW51ID0gKHNpemUpID0+IHtcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtZW51Q29uLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgICAgd2hpbGUgKHNpZGViYXJNZW51LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhck1lbnUucmVtb3ZlQ2hpbGQoc2lkZWJhck1lbnUubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaXplID09IFwibGFyZ2VcIikge1xuICAgICAgICBtZW51QnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChsaW5rVG9Pd25QYWdlKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2lkZWJhci5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgfSk7XG4gIH07XG5cbiAgbWVudUJ0bk1lcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHBlbmRTaWRlYmFyTWVudShcInNtYWxsXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51SWNvbkJ0biA9IG5ldyBJbWFnZSgpO1xuICBtZW51SWNvbkJ0bi5zcmMgPSBtZW51SWNvbjtcbiAgbWVudUljb25CdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVJY29uQnRuXCIpO1xuXG4gIG1lbnVJY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYXBwZW5kU2lkZWJhck1lbnUoXCJsYXJnZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkFycmF5ID0gW1xuICAgIG1lbnVCdG5QcmlzLFxuICAgIG1lbnVCdG5Ib2xkLFxuICAgIG1lbnVCdG5IYWxsZXIsXG4gICAgbWVudUJ0bkZpcnN0dGltZXIsXG4gICAgbWVudUJ0bkV2ZW50cyxcbiAgICBtZW51QnRuVGVybWVyLFxuICAgIG1lbnVCdG5NZXJlLFxuICBdO1xuXG4gIGxldCBzbWFsbE1lbnUgPSAwO1xuICBsZXQgbGFyZ2VNZW51ID0gMDtcblxuICBjb25zdCBhcHBlbmRMYXJnZU1lbnUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKG1lbnVCYXIuZmlyc3RDaGlsZCkgbWVudUJhci5yZW1vdmVDaGlsZChtZW51QmFyLmxhc3RDaGlsZCk7XG4gICAgbWVudUJ0bkFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgbWVudUJhci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFNtYWxsTWVudSA9ICgpID0+IHtcbiAgICB3aGlsZSAobWVudUJhci5maXJzdENoaWxkKSBtZW51QmFyLnJlbW92ZUNoaWxkKG1lbnVCYXIubGFzdENoaWxkKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uQnRuKTtcbiAgfTtcblxuICAvLyBDaGVja3MgaWYgdGhlIHdpbmRvdyBpIGxhcmdlIGVub3V0Z2hcbiAgaWYgKGlubmVyV2lkdGggPiAxMjAwKSB7XG4gICAgc21hbGxNZW51ID0gMDtcbiAgICBsYXJnZU1lbnUgPSAxO1xuICAgIGFwcGVuZExhcmdlTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIHNtYWxsTWVudSA9IDE7XG4gICAgbGFyZ2VNZW51ID0gMDtcbiAgICBhcHBlbmRTbWFsbE1lbnUoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDEyMDApIHtcbiAgICAgIGlmIChsYXJnZU1lbnUgPT0gMCkge1xuICAgICAgICBhcHBlbmRMYXJnZU1lbnUoKTtcbiAgICAgICAgbGFyZ2VNZW51ID0gMTtcbiAgICAgICAgc21hbGxNZW51ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNtYWxsTWVudSA9PSAwKSB7XG4gICAgICAgIGFwcGVuZFNtYWxsTWVudSgpO1xuICAgICAgICBsYXJnZU1lbnUgPSAwO1xuICAgICAgICBzbWFsbE1lbnUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2Nyb2xsTWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChtZW51Q29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IC00MCkge1xuICAgICAgbWVudUNvbi5jbGFzc0xpc3QuYWRkKFwibWVudVNjcm9sbFwiKTtcbiAgICAgIGxvZ28uc3R5bGUuaGVpZ2h0ID0gXCIzMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVDb24uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVTY3JvbGxcIik7XG4gICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgIH1cbiAgfTtcblxuICBzY3JvbGxNZW51RnVuY3Rpb24oKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgc2Nyb2xsTWVudUZ1bmN0aW9uKCk7XG4gIH0pO1xuXG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbiAgcmV0dXJuIG1lbnVDb247XG59O1xuXG5jb25zdCBmb290ZXJDcmVhdGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQ29uXCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSB0cmFuc0xvZ287XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImZvb3RlckxvZ29cIik7XG5cbiAgbG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImhvbWVcIik7XG4gIH0pO1xuXG4gIC8vIENyZWF0aW5nIGZvb3RlciBjb250ZW50XG4gIGNvbnN0IGZvb3RlckJveENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckJveENvbi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQm94Q29uXCIpO1xuXG4gIGNvbnN0IHZvcmVzTWlzc2lvbkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZvcmVzTWlzc2lvbkNvbi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQm94XCIpO1xuXG4gIGxldCB2b3Jlc01pc3Npb25Db25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdm9yZXNNaXNzaW9uQ29uSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHZvcmVzTWlzc2lvbkNvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiVm9yZXMgTWlzc2lvblwiO1xuXG4gIHZvcmVzTWlzc2lvbkNvbkhlYWRlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICBsZXQgdm9yZXNNaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB2b3Jlc01pc3Npb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHZvcmVzTWlzc2lvblRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiVm9yZXMgbWlzc2lvbiBlciBhdCBmw6Ugc8OlIG1hbmdlIG1lbm5lc2tlciBzb20gbXVsaWd0LCB0aWwgYXQgbHVra2Ugw7hqbmVuZSBvcCBmb3Iga2xhdHJpbmcuIFZpIGVyIGhlciBmb3IgYXQgc2thYmUgZGVuIGdvZGUgb3BsZXZlbHNlIGZvciBkaWcgb2cgZGluZSB2ZW5uZXIgZWxsZXIgZmFtaWxpZSwgcMOlIGVuIHVuaWsgbcOlZGUsIGh2b3IgbWFuZyBiw6VkZSBrYW4gaGF2ZSBkZXQgc2pvdnQgb2cgdsOmcmUgYWt0aXYuXCI7XG4gIHZvcmVzTWlzc2lvblRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgdm9yZXNNaXNzaW9uVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gIHZvcmVzTWlzc2lvbkNvbi5hcHBlbmRDaGlsZCh2b3Jlc01pc3Npb25Db25IZWFkZXIpO1xuICB2b3Jlc01pc3Npb25Db24uYXBwZW5kQ2hpbGQodm9yZXNNaXNzaW9uVGV4dCk7XG5cbiAgY29uc3Qga29udGFrdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtvbnRha3RDb24uY2xhc3NMaXN0LmFkZChcImZvb3RlckJveFwiKTtcblxuICBsZXQga29udGFrdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrb250YWt0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtvbnRha3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIktvbnRha3RcIjtcbiAga29udGFrdEhlYWRlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZW1haWwuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiLCBcImZvb3Rlck1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2JvdWxkZXJzLmRrL2tvbnRha3RcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcIk1haWw6IFNlbmQgZW4gbWFpbFwiO1xuXG4gIGxldCB0ZWxlZm9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbGVmb24uY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGVsZWZvbi50ZXh0Q29udGVudCA9IFwiVGVsOiA3MjEwMDAxOVwiO1xuICB0ZWxlZm9uLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJUZWxcIik7XG5cbiAgbGV0IGFkcmVzc2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRyZXNzZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBhZHJlc3NlSGVhZGVyLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gIGFkcmVzc2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkcmVzc2VcIjtcblxuICBsZXQgYWRyZXNzZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRyZXNzZVRleHQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgYWRyZXNzZVRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgYWRyZXNzZVRleHQudGV4dENvbnRlbnQgPSBcIkdyYWhhbSBCZWxscyBWZWogMThBLCA4MjAwIEFhcmh1cyBOLCBEYW5tYXJrXCI7XG4gIGFkcmVzc2VUZXh0LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAga29udGFrdENvbi5hcHBlbmRDaGlsZChrb250YWt0SGVhZGVyKTtcbiAga29udGFrdENvbi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQodGVsZWZvbik7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQoYWRyZXNzZUhlYWRlcik7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQoYWRyZXNzZVRleHQpO1xuXG4gIGZvb3RlckJveENvbi5hcHBlbmRDaGlsZChrb250YWt0Q29uKTtcbiAgZm9vdGVyQm94Q29uLmFwcGVuZENoaWxkKHZvcmVzTWlzc2lvbkNvbik7XG5cbiAgLy8gQXBwZW5kaW5nXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQm94Q29uKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmNsYXNzIGRpc3BsYXlMaW5rIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW1nU3JjLCBsaW5rKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltZ1NyYyA9IGltZ1NyYztcbiAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICB9XG4gIGVsID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImhvbGRJbWdGcmFtZVwiKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMubGluayk7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gICAgY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBiZy5zcmMgPSB0aGlzLmltZ1NyYztcbiAgICBiZy5jbGFzc0xpc3QuYWRkKFwiaG9sZEJnSW1nXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJob2xkSW1nSGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgIGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMubGluayk7XG4gICAgbGlua0VsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBsaW5rRWwuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRMaW5rRWxcIik7XG4gICAgbGlua0VsLnRleHRDb250ZW50ID0gXCJMaW5rIHRpbCBCb3VsZGVycy5ka1wiO1xuXG4gICAgZWwuYXBwZW5kQ2hpbGQoYmcpO1xuICAgIGVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblxuICAgIHJldHVybiBlbDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUNyZWF0ZXI7XG5leHBvcnQgeyBkaXNwbGF5TGluayB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9