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
  currentPageChecker = "home";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssV0FBVyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVJlO0FBQ0o7QUFDWTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUFZO0FBQzlCOztBQUVBOztBQUVBO0FB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvZmlyc3R0aW1lci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaGFsbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9QYWdlcy9oYWxsZXIvbm9yZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaG9sZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvUGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL3ByaXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1BhZ2VzL3Rlcm1zLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGFnZUNyZWF0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSW1nL2JvdWxkZXJzQmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9JbWcvaGFsbGVyQmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9JbWcvZmlyc3R0aW1lckJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vSW1nL2ZpcnN0dGltZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYW50YXJpOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2FudGFyaVxcXCIsIHNhbnMtc2VyaWY7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDQ3MWY7XFxufVxcblxcbi5ib2R5Q29uIHtcXG59XFxuXFxuLyogVW5pdmVyc2FsICovXFxuXFxuLmNvbnRlbnRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogOTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0V2l0aENlbkVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDgwcHg7XFxuICBwYWRkaW5nOiA2MHB4IDUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50ZXh0Q29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubm90VGhpY2tUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qIFVuaXZlcnNhbCBFTkQgKi9cXG5cXG4vKiBNZW51ICovXFxuXFxuLm1lbnVDb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGhlaWdodDogNzZweDtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAzMHB4O1xcbn1cXG5cXG4ubWVudVNjcm9sbCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAtNTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib3VsZGVyc0xvZ28ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICB0cmFuc2l0aW9uOiAwLjI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudUJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5tZW51QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XFxufVxcblxcbi5tZW51SWNvbkJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogbWF4KC01MDBweCwgLTgwdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogbWluKDUwMHB4LCA4MHZ3KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93IHtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyUmVtb3ZlQXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNjM2MzYzM7XFxufVxcblxcbi5zaWRlYmFyTWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMHB4O1xcbiAgcGFkZGluZzogMHB4IDUwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi8qIE1lbnUgRU5EICovXFxuXFxuLyogSG9tZXBhZ2UgKi9cXG5cXG4uaG9tZXBhZ2VCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxufVxcblxcbi5ob21lcGFnZUJnVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lckJ0biB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjVweCA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG46YWN0aXZlIHtcXG4gIHNjYWxlOiAxLjAxO1xcbn1cXG5cXG4vKiBIb21lcGFnZSBFTUQgKi9cXG5cXG4vKiBwcmlzICovXFxuXFxuLnByaXNJbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpc0ltZ1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmVudHJ5UGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcbn1cXG5cXG4ucHJpc0JveCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVuZ2FuZ3NFbnRyZUhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbn1cXG5cXG4ucHJpc0hlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qIHByaXMgRU1EICovXFxuXFxuLyogSG9sZCAgKi9cXG5cXG4uaG9sZEhlYWRlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjk0NDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob2xkSGVhZGVyVGV4dCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5ob2xkSW1nRnJhbWUge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaG9sZEJnSW1nIHtcXG4gIHRyYW5zaXRpb246IDJzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgODAwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZEJnSW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE1O1xcbn1cXG5cXG4uaG9sZEltZ0hlYWRlciB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ob2xkTGlua0VsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBIb2xkIEVORCAqL1xcblxcbi8qIGhhbGxlciAqL1xcblxcbi5oYWxsbGVySW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnRUb3BIYWxsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDV2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFydE9mVG9wQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5tYXBUZXh0SGFsbGVyIHtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXG59XFxuXFxuLm1hcHNNYXBIYWxsZXIge1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhhbGxlckludHJvVGV4dEhlYWRlciB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi51bmRlcmxpbmVIYWxsZXJIZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmhhbGxlckludHJvVGV4dCB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5hYWJuaW5ndGlkZXJUZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wYXJ0Qm90dG9tSGFsbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbn1cXG5cXG4uaGFsbGVyTGlua0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaGFsbGVyRnJhbWUge1xcbiAgaGVpZ2h0OiBtaW4oNDAwcHgsIDkwdncpO1xcbiAgd2lkdGg6IG1pbig0MDBweCwgOTB2dyk7XFxufVxcblxcbi5oYWxsZXJMaW5rVGV4dCB7XFxuICB3aWR0aDogNzV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnVuZGVybGluZUhhbGxlckJvdHRvbSB7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLyogaGFsbGVyIEVORCAqL1xcblxcbi8qIEFhcmh1cyBOb3JkICovXFxuXFxuLmFhcmh1c05vcmRQYXJ0MUNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDQwcHggbWF4KDV2dywgMjBweCk7XFxufVxcblxcbi5hYXJodXNOb3JkTGVmdE9yUmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZExpZHRvbWhhbGxlbkhlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkSW1nIHtcXG4gIHdpZHRoOiBjbGFtcCgzNTBweCwgMTAwJSwgNjAwcHgpO1xcbn1cXG5cXG4uYWFyaHVzTm9yZFBhcnQyQ29uIHtcXG4gIHBhZGRpbmc6IDIwcHggbWF4KDV2dywgMjBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRQYXJ0M0NvbiB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCg1dncsIDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDUwcHggMHB4O1xcbn1cXG5cXG4ubWFwc01hcEFhcmh1c05vcmQge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogQWFyaHVzIE5vcmQgRU5EKi9cXG5cXG4vKiBUZXJtcyAqL1xcblxcbi50ZXJtc1BhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiA0MHB4IG1heCg1dncsIDIwcHgpO1xcbn1cXG5cXG4udGVybXNQYXJ0TGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgzNTBweCwgMTAwJSwgNzAwcHgpO1xcbn1cXG5cXG4udGVybXNQYXJ0UmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXJtc0ltZzEge1xcbiAgaGVpZ2h0OiBtaW4oMjB2dywgNDAwcHgpO1xcbn1cXG5cXG4udGVybXNJbWcyIHtcXG4gIGhlaWdodDogbWluKDYwMHB4LCAzMHZ3KTtcXG59XFxuXFxuLnRlcm1zSW1nMyB7XFxuICBoZWlnaHQ6IG1pbig2MDBweCwgMzB2dyk7XFxufVxcblxcbi50ZXJtc1RleHRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxufVxcbi8qIFRlcm1zIEVORCAqL1xcblxcbi8qIEZpcnN0dGltZXIgKi9cXG5cXG4uZmlyc3R0aW1lckJnSW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5maXJzdHRpbWVDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uZmlyc3R0aW1lckxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA0MHB4IDd2dztcXG59XFxuXFxuLmZpcnN0dGltZXJJbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgaGVpZ2h0OiA4MDBweDtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uZmlyc3R0aW1lclRpcHNIZWFkZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZmlyc3RpbWVyTGlzdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIEZpcnN0dGltZXIgRU5EICovXFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ3NDE7XFxuICBwYWRkaW5nOiA2MHB4IDBweDtcXG59XFxuXFxuLmZvb3RlckxvZ28ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmZvb3RlckJveENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDRweDtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcGFkZGluZzogNTBweCAwcHg7XFxuICB3aWR0aDogbWF4KDcwdncsIDI1MHB4KTtcXG4gIGdhcDogMTAwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5mb290ZXJCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyTWFpbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyVGVsIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBFTkQgKi9cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyNHB4KSB7XFxuICAudGVybXNQYXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wYXJ0VG9wSGFsbGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZpcnN0dGltZUNvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZmlyc3R0aW1lckltZ0ZyYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc1MHB4KSB7XFxuICAudGVybXNQYXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC50ZXJtc1BhcnRMZWZ0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC50ZXJtc0ltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIGNoYW5nZSBFTkQqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VB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akI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFFZixpQkFBaUI7O0FBRWpCO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjs7QUFFQSxvQkFBb0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FudGFyaTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2FudGFyaVxcXCIsIHNhbnMtc2VyaWY7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDQ3MWY7XFxufVxcblxcbi5ib2R5Q29uIHtcXG59XFxuXFxuLyogVW5pdmVyc2FsICovXFxuXFxuLmNvbnRlbnRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogOTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0V2l0aENlbkVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDgwcHg7XFxuICBwYWRkaW5nOiA2MHB4IDUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50ZXh0Q29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRoaWNrVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubm90VGhpY2tUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qIFVuaXZlcnNhbCBFTkQgKi9cXG5cXG4vKiBNZW51ICovXFxuXFxuLm1lbnVDb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIGhlaWdodDogNzZweDtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAzMHB4O1xcbn1cXG5cXG4ubWVudVNjcm9sbCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAtNTBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib3VsZGVyc0xvZ28ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICB0cmFuc2l0aW9uOiAwLjI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudUJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5tZW51QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XFxufVxcblxcbi5tZW51SWNvbkJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogbWF4KC01MDBweCwgLTgwdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogbWluKDUwMHB4LCA4MHZ3KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhclJlbW92ZUFycm93IHtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyUmVtb3ZlQXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNjM2MzYzM7XFxufVxcblxcbi5zaWRlYmFyTWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMHB4O1xcbiAgcGFkZGluZzogMHB4IDUwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi8qIE1lbnUgRU5EICovXFxuXFxuLyogSG9tZXBhZ2UgKi9cXG5cXG4uaG9tZXBhZ2VCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvYm91bGRlcnNCZy5qcGcpO1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxufVxcblxcbi5ob21lcGFnZUJnVGV4dCB7XFxuICBtYXJnaW4tdG9wOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3R0aW1lckJ0biB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjVweCA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZpcnN0dGltZXJCdG46YWN0aXZlIHtcXG4gIHNjYWxlOiAxLjAxO1xcbn1cXG5cXG4vKiBIb21lcGFnZSBFTUQgKi9cXG5cXG4vKiBwcmlzICovXFxuXFxuLnByaXNJbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvYm91bGRlcnNCZy5qcGcpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJpc0ltZ1RleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmVudHJ5UGFydCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0NzFmO1xcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcbn1cXG5cXG4ucHJpc0JveCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVuZ2FuZ3NFbnRyZUhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5NDQwO1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbn1cXG5cXG4ucHJpc0hlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qIHByaXMgRU1EICovXFxuXFxuLyogSG9sZCAgKi9cXG5cXG4uaG9sZEhlYWRlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjk0NDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob2xkSGVhZGVyVGV4dCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5ob2xkSW1nRnJhbWUge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaG9sZEJnSW1nIHtcXG4gIHRyYW5zaXRpb246IDJzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoMTAwJSwgODAwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uaG9sZEJnSW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE1O1xcbn1cXG5cXG4uaG9sZEltZ0hlYWRlciB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ob2xkTGlua0VsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBIb2xkIEVORCAqL1xcblxcbi8qIGhhbGxlciAqL1xcblxcbi5oYWxsbGVySW1nRnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vSW1nL2hhbGxlckJnLmpwZyk7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wYXJ0VG9wSGFsbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweCA1dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnRPZlRvcENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4ubWFwVGV4dEhhbGxlciB7XFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxufVxcblxcbi5tYXBzTWFwSGFsbGVyIHtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHRIZWFkZXIge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4udW5kZXJsaW5lSGFsbGVySGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbi5oYWxsZXJJbnRyb1RleHQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uYWFibmluZ3RpZGVyVGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucGFydEJvdHRvbUhhbGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuLmhhbGxlckxpbmtDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmhhbGxlckZyYW1lIHtcXG4gIGhlaWdodDogbWluKDQwMHB4LCA5MHZ3KTtcXG4gIHdpZHRoOiBtaW4oNDAwcHgsIDkwdncpO1xcbn1cXG5cXG4uaGFsbGVyTGlua1RleHQge1xcbiAgd2lkdGg6IDc1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51bmRlcmxpbmVIYWxsZXJCb3R0b20ge1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi8qIGhhbGxlciBFTkQgKi9cXG5cXG4vKiBBYXJodXMgTm9yZCAqL1xcblxcbi5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiA0MHB4IG1heCg1dncsIDIwcHgpO1xcbn1cXG5cXG4uYWFyaHVzTm9yZExlZnRPclJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLmFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYWFyaHVzTm9yZEltZyB7XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDYwMHB4KTtcXG59XFxuXFxuLmFhcmh1c05vcmRQYXJ0MkNvbiB7XFxuICBwYWRkaW5nOiAyMHB4IG1heCg1dncsIDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hYXJodXNOb3JkUGFydDNDb24ge1xcbiAgcGFkZGluZzogMjBweCBtYXgoNXZ3LCAyMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IDBweDtcXG59XFxuXFxuLm1hcHNNYXBBYXJodXNOb3JkIHtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIEFhcmh1cyBOb3JkIEVORCovXFxuXFxuLyogVGVybXMgKi9cXG5cXG4udGVybXNQYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogNDBweCBtYXgoNXZ3LCAyMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydExlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDEwMCUsIDcwMHB4KTtcXG59XFxuXFxuLnRlcm1zUGFydFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVybXNJbWcxIHtcXG4gIGhlaWdodDogbWluKDIwdncsIDQwMHB4KTtcXG59XFxuXFxuLnRlcm1zSW1nMiB7XFxuICBoZWlnaHQ6IG1pbig2MDBweCwgMzB2dyk7XFxufVxcblxcbi50ZXJtc0ltZzMge1xcbiAgaGVpZ2h0OiBtaW4oNjAwcHgsIDMwdncpO1xcbn1cXG5cXG4udGVybXNUZXh0Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4vKiBUZXJtcyBFTkQgKi9cXG5cXG4vKiBGaXJzdHRpbWVyICovXFxuXFxuLmZpcnN0dGltZXJCZ0ltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvZmlyc3R0aW1lckJnLmpwZyk7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5maXJzdHRpbWVDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uZmlyc3R0aW1lckxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA0MHB4IDd2dztcXG59XFxuXFxuLmZpcnN0dGltZXJJbWdGcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9JbWcvZmlyc3R0aW1lci5qcGcpO1xcbiAgaGVpZ2h0OiA4MDBweDtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uZmlyc3R0aW1lclRpcHNIZWFkZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZmlyc3RpbWVyTGlzdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIEZpcnN0dGltZXIgRU5EICovXFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQ3NDE7XFxuICBwYWRkaW5nOiA2MHB4IDBweDtcXG59XFxuXFxuLmZvb3RlckxvZ28ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmZvb3RlckJveENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDRweDtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcGFkZGluZzogNTBweCAwcHg7XFxuICB3aWR0aDogbWF4KDcwdncsIDI1MHB4KTtcXG4gIGdhcDogMTAwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5mb290ZXJCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyTWFpbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyVGVsIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciBFTkQgKi9cXG5cXG4vKiBNZWRpYSBjaGFuZ2UgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyNHB4KSB7XFxuICAudGVybXNQYXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wYXJ0VG9wSGFsbGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYXJodXNOb3JkUGFydDFDb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZpcnN0dGltZUNvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZmlyc3R0aW1lckltZ0ZyYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc1MHB4KSB7XFxuICAudGVybXNQYXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC50ZXJtc1BhcnRMZWZ0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC50ZXJtc0ltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIGNoYW5nZSBFTkQqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheUxpbmsgfSBmcm9tIFwiLi4vcGFnZUNyZWF0ZXJcIjtcblxuLy8gSW1nXG5pbXBvcnQgbGF0ZU5pZ2h0Qm91bGRlcmluZ0ltZ1NyYyBmcm9tIFwiLi4vSW1nL2xhdGVOaWdodEJvdWxkZXJpbmcuanBnXCI7XG5pbXBvcnQgc3R1ZGVudEZyaWRheUltZ1NyYyBmcm9tIFwiLi4vSW1nL3N0dWRlbnRGcmlkYXkucG5nXCI7XG5pbXBvcnQgY2xpbWJhdGhvbkltZ1NyYyBmcm9tIFwiLi4vSW1nL2NsaW1hdGhvbi5qcGdcIjtcbmltcG9ydCBzdW5ueVNhdHVyZGF5SW1nU3JjIGZyb20gXCIuLi9JbWcvc3VubnlTYXR1cmRheS5qcGdcIjtcblxuY29uc3QgY3JlYXRlRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICBjb25zdCBsYXRlTmlnaHRCb3VsZGVyaW5nID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiTGF0ZSBOaWdodCBCb3VsZGVyaW5nXCIsXG4gICAgbGF0ZU5pZ2h0Qm91bGRlcmluZ0ltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvbG5iXCJcbiAgKTtcblxuICBjb25zdCBzdHVkZW50RnJpZGF5ID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiU3R1ZGVudCBGcmlkYXlcIixcbiAgICBzdHVkZW50RnJpZGF5SW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9zdHVkZW50ZnJpZGF5XCJcbiAgKTtcblxuICBjb25zdCBjbGltYmF0aG9uID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiQ2xpbWJhdGhvblwiLFxuICAgIGNsaW1iYXRob25JbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2NsaW1iYXRob25cIlxuICApO1xuXG4gIGNvbnN0IHN1bm55U2F0dXJkYXkgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJTdW5ueSBTYXR1cmRheVwiLFxuICAgIHN1bm55U2F0dXJkYXlJbWdTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL3N1bm55c2F0dXJkYXlcIlxuICApO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGF0ZU5pZ2h0Qm91bGRlcmluZy5lbCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdHVkZW50RnJpZGF5LmVsKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNsaW1iYXRob24uZWwoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VubnlTYXR1cmRheS5lbCgpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50cztcbiIsImNvbnN0IGNyZWF0ZUZpcnN0VGltZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGRpc3BsYXkgaGVhZGVyXG4gIGNvbnN0IGZpcnN0dGltZXJJbWdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0dGltZXJJbWdGcmFtZS5jbGFzc0xpc3QuYWRkKFwiaW1nRnJhbWVcIiwgXCJmaXJzdHRpbWVyQmdJbWdcIik7XG5cbiAgY29uc3QgZmlyc3R0aW1lckltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZmlyc3R0aW1lckltZ1RleHQuY2xhc3NMaXN0LmFkZChcInByaXNJbWdUZXh0XCIpO1xuICBmaXJzdHRpbWVySW1nVGV4dC50ZXh0Q29udGVudCA9IFwiRsO4cnN0ZSBnYW5nP1wiO1xuXG4gIGZpcnN0dGltZXJJbWdGcmFtZS5hcHBlbmRDaGlsZChmaXJzdHRpbWVySW1nVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgYm90dG9tXG4gIGNvbnN0IGZpcnN0aW1lckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0aW1lckNvbi5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lQ29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgcGFydFxuICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVyTGVmdFwiKTtcblxuICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhlYWRlcjEuY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJUaXBzSGVhZGVyXCIsIFwidGhpY2tUZXh0XCIpO1xuICBoZWFkZXIxLnRleHRDb250ZW50ID0gXCJHb2R0IGF0IHZpZGUgLyBUaXBzIG9nIHRyaWNrc1wiO1xuXG4gIGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0MS5jbGFzc0xpc3QuYWRkKFwiZmlyc3RpbWVyTGlzdFwiKTtcblxuICBsZXQgdGV4dEZpcnN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dEZpcnN0MS5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0Rmlyc3QxLnRleHRDb250ZW50ID1cbiAgICBcIkRldCBlciBpa2tlIHRpbGxhZHQgYXQga2xhdHJlIGkgYW5kZXQgZW5kIGtsYXRyZXNrbyBcIjtcblxuICBsZXQgdGV4dEZpcnN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dEZpcnN0Mi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0Rmlyc3QyLnRleHRDb250ZW50ID1cbiAgICBcIkRldCBlciBpa2tlIGV0IGtyYXYgYXQgYm9va2UgdGlkIChNZWRtaW5kcmUgaSBlciBvdmVyIDEwIHBlcnNvbmVyLCBzw6UgdmlsIEJvdWxkZXJzIGdlcm5lIGhhdmUgZGV0IGF0IHZpZGUpIFwiO1xuXG4gIGxpc3QxLmFwcGVuZENoaWxkKHRleHRGaXJzdDEpO1xuICBsaXN0MS5hcHBlbmRDaGlsZCh0ZXh0Rmlyc3QyKTtcblxuICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyMi5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lclRpcHNIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhlYWRlcjIudGV4dENvbnRlbnQgPSBcIkbDuHJzdGUgZ2FuZyBza2FsIGR1Li4uXCI7XG5cbiAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3QyLmNsYXNzTGlzdC5hZGQoXCJmaXJzdGltZXJMaXN0XCIpO1xuXG4gIGxldCB0ZXh0U2Vjb25kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dFNlY29uZDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFNlY29uZDEudGV4dENvbnRlbnQgPVxuICAgIFwiVW5kZXJza3JpdmUgZW4gYW5zdmFyc2ZyYXNrcml2ZWxzZSAoRm9yIGF0IHNpa3JlIEJvdWxkZXJzIG1vZCBzw7hnc23DpWwpLCBkZXQgdGFnZXIgY2EuIDEgbWluLiBcIjtcblxuICBsZXQgdGV4dFNlY29uZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRTZWNvbmQyLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHRleHRTZWNvbmQyLnRleHRDb250ZW50ID0gXCJLw7hiZSBlbnRyw6kgXCI7XG5cbiAgbGV0IHRleHRTZWNvbmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0ZXh0U2Vjb25kMy5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0U2Vjb25kMy50ZXh0Q29udGVudCA9IFwiTGVqZS9tZWRicmluZ2UgZWduZSBrbGF0cmVza28gXCI7XG5cbiAgbGlzdDIuYXBwZW5kQ2hpbGQodGV4dFNlY29uZDEpO1xuICBsaXN0Mi5hcHBlbmRDaGlsZCh0ZXh0U2Vjb25kMik7XG4gIGxpc3QyLmFwcGVuZENoaWxkKHRleHRTZWNvbmQzKTtcblxuICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyMy5jbGFzc0xpc3QuYWRkKFwiZmlyc3R0aW1lclRpcHNIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhlYWRlcjMudGV4dENvbnRlbnQgPSBcIlZpIGFuYmVmYWxkZXIuLi5cIjtcblxuICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlzdDMuY2xhc3NMaXN0LmFkZChcImZpcnN0aW1lckxpc3RcIik7XG5cbiAgbGV0IHRleHRUaGlyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRUaGlyZDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFRoaXJkMS50ZXh0Q29udGVudCA9XG4gICAgXCJBdCBkdSBrbGF0cmVyIGkgdMO4aiBkdSBsZXQga2FuIGJldsOmZ2UgZGlnIGkuIFTDuGpldCBtw6UgbWVnZXQgZ2VybmUgdsOmcmUgbGlkdCBzbGlkc3TDpnJrdCwgZGEgZGV0IGdvZHQga2FuIGtvbW1lIHRpbCBhdCBrw7hyZSBvcCBhZiBkZSBydSBncmViLiBcIjtcblxuICBsZXQgdGV4dFRoaXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dFRoaXJkMi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0VGhpcmQyLnRleHRDb250ZW50ID1cbiAgICBcIlZhcm1lciBvcCBpIDEwIG1pbnV0dGVyIG9nIHN0YXJ0ZXIgbWVkIGF0IGtsYXRyZSBub2dsZSBsZXR0ZSBiYW5lciBcIjtcblxuICBsZXQgdGV4dFRoaXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGV4dFRoaXJkMy5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB0ZXh0VGhpcmQzLnRleHRDb250ZW50ID0gXCJBdCBkdSBpa2tlIGtsYXRyZSBww6UgdG9tIG1hdmUgXCI7XG5cbiAgbGV0IHRleHRUaGlyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRleHRUaGlyZDQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGV4dFRoaXJkNC50ZXh0Q29udGVudCA9XG4gICAgXCJBdCBkdSBsw6VuZXIva8O4YmVyIG5vZ2V0IGthbGsgdGlsIGRpbiBrbGF0cmluZy4gS2FsayBlciBpa2tlIGVzc2VudGllbHQgbWVuIGdvZHQgYXQgaGF2ZSwgZGV0IGfDuHIgc8OlIGRpbmUgaMOmbmRlciBpa2tlIGJsaXZlciBzw6Ugc3ZlZGlnZSBcIjtcblxuICBsaXN0My5hcHBlbmRDaGlsZCh0ZXh0VGhpcmQxKTtcbiAgbGlzdDMuYXBwZW5kQ2hpbGQodGV4dFRoaXJkMik7XG4gIGxpc3QzLmFwcGVuZENoaWxkKHRleHRUaGlyZDMpO1xuICBsaXN0My5hcHBlbmRDaGlsZCh0ZXh0VGhpcmQ0KTtcblxuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIxKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobGlzdDEpO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIyKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobGlzdDIpO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIzKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQobGlzdDMpO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHBhcnRcbiAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJmaXJzdHRpbWVySW1nRnJhbWVcIiwgXCJpbWdGcmFtZVwiKTtcblxuICAvLyBBcHBlbmRpbmcgc2lkZXNcbiAgZmlyc3RpbWVyQ29uLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcbiAgZmlyc3RpbWVyQ29uLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgLy8gQXBwZW5kaW5nIGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3R0aW1lckltZ0ZyYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdGltZXJDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRmlyc3RUaW1lcjtcbiIsImltcG9ydCB7IGRpc3BsYXlMaW5rIH0gZnJvbSBcIi4uL3BhZ2VDcmVhdGVyXCI7XG5pbXBvcnQgeyBidG5BY3RpdmF0aW9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuaW1wb3J0IGFhcmh1c05vcmRJbWdTcmMgZnJvbSBcIi4uL0ltZy9hYXJodXNOb3JkLmpwZ1wiO1xuaW1wb3J0IGFhcmh1c0NpdHlJbWdTcmMgZnJvbSBcIi4uL0ltZy9hYXJodXNDaXR5LmpwZ1wiO1xuaW1wb3J0IG9kZW5zZUltZ1NyYyBmcm9tIFwiLi4vSW1nL29kZW5zZS5qcGVnXCI7XG5pbXBvcnQgYWFyaHVzU3lkSW1nU3JjIGZyb20gXCIuLi9JbWcvYWFyaHVzU3lkLmpwZ1wiO1xuaW1wb3J0IGh2aWRvdnJlSW1nU3JjIGZyb20gXCIuLi9JbWcvaHZpZG92cmUuanBnXCI7XG5pbXBvcnQga2JoU3lkaGF2bkltZ1NyYyBmcm9tIFwiLi4vSW1nL2tiaFN5ZGhhdm4uanBnXCI7XG5pbXBvcnQgdmFsYnlJbWdTcmMgZnJvbSBcIi4uL0ltZy92YWxieS5qcGdcIjtcblxuY29uc3QgY3JlYXRlSGFsbGVycGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJoYWxsZXJDb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclxuICBjb25zdCBpbWdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0ZyYW1lLmNsYXNzTGlzdC5hZGQoXCJoYWxsbGVySW1nRnJhbWVcIiwgXCJpbWdGcmFtZVwiKTtcblxuICBjb25zdCBpbWdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGltZ1RleHQuY2xhc3NMaXN0LmFkZChcInByaXNJbWdUZXh0XCIpO1xuICBpbWdUZXh0LnRleHRDb250ZW50ID0gXCJIQUxMRVJcIjtcblxuICBpbWdGcmFtZS5hcHBlbmRDaGlsZChpbWdUZXh0KTtcblxuICAvLyBDcmVhdGluZyB0aGUgdXBwZXIgcGFydCB3aXRoIHRleHQgYW5kIG1hcFxuICBjb25zdCBmaXJzdHBhcnRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdHBhcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRUb3BIYWxsZXJcIik7XG5cbiAgLy8gQ3JlYXRpbmcgUklHSFQhIHBhcnRcbiAgY29uc3QgZmlyc3RwYXJ0UmlnaHRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdHBhcnRSaWdodENvbi5jbGFzc0xpc3QuYWRkKFwicGFydE9mVG9wQ29uXCIpO1xuXG4gIGNvbnN0IGhhbGxlckludHJvVGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoYWxsZXJJbnRyb1RleHRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhhbGxlckludHJvVGV4dEhlYWRlclwiLCBcInRoaWNrVGV4dFwiKTtcbiAgaGFsbGVySW50cm9UZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJIYWxsZXJcIjtcblxuICBjb25zdCB1bmRlcmxpbmVIYWxsZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmRlcmxpbmVIYWxsZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBoYWxsZXJJbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGFsbGVySW50cm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJJbnRyb1RleHRcIiwgXCJub3RUaGlja1RleHRcIik7XG4gIGhhbGxlckludHJvVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJWb3JlcyBoYWxsZXIgbGlnZ2VyIG92ZXIgaGVsZSBsYW5kZXQgb2cgZXIgw6ViZW4gZm9yIGLDpWRlIGRpZyBvZyBkaW5lIHZlbm5lciwgdmkgZ2zDpmRlciBvcyB0aWwgYXQgc2UgZGlnLiBBbGxlIHZvcmVzIGhhbGxlciBoYXIgw6ViZW4gcMOlIHNhbW1lIHRpZCwgc8OlIHRpZGVybmUgZ8OmbGRlciBpIGFsbGUgaGFsZGVyXCI7XG5cbiAgY29uc3QgYWFibmluZ3N0aWRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhYWJuaW5nc3RpZGVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJJbnRyb1RleHRIZWFkZXJcIiwgXCJ0aGlja1RleHRcIik7XG4gIGFhYm5pbmdzdGlkZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIsOFYm5pbmdzdGlkZXJcIjtcblxuICBjb25zdCB1bmRlcmxpbmVIYWxsZXJIZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lSGFsbGVySGVhZGVyMi5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIpO1xuXG4gIGNvbnN0IGFhYm5pbmdzdGlkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFhYm5pbmdzdGlkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJhYWJuaW5ndGlkZXJUZXh0XCIpO1xuICBhYWJuaW5nc3RpZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRnJhIDEwIC0gMjIgSHZlciBkYWchXCI7XG5cbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoaGFsbGVySW50cm9UZXh0SGVhZGVyKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQodW5kZXJsaW5lSGFsbGVySGVhZGVyKTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoaGFsbGVySW50cm9UZXh0KTtcbiAgZmlyc3RwYXJ0UmlnaHRDb24uYXBwZW5kQ2hpbGQoYWFibmluZ3N0aWRlckhlYWRlcik7XG4gIGZpcnN0cGFydFJpZ2h0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUhhbGxlckhlYWRlcjIpO1xuICBmaXJzdHBhcnRSaWdodENvbi5hcHBlbmRDaGlsZChhYWJuaW5nc3RpZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgTEVGVCEgcGFydFxuICBjb25zdCBmaXJzdHBhcnRMZWZ0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3RwYXJ0TGVmdENvbi5jbGFzc0xpc3QuYWRkKFwicGFydE9mVG9wQ29uXCIpO1xuXG4gIGNvbnN0IG1hcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbWFwVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwibWFwVGV4dEhhbGxlclwiKTtcbiAgbWFwVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJIZXIga2FuIGR1IHNlIGV0IGtvcnQgb3ZlciBhbGxlIHZvcmVzIGZvcnNrZWxsaWdlIGFmZGVsaW5nZXJcIjtcblxuICBjb25zdCBtYXBzTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgbWFwc01hcC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzcmNcIixcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNiExbTEyITFtMyExZDExNDA0MzIuNDY4NDk1NDUxITJkMTAuNzI2NzA3OTk0OTcyNDM4ITNkNTYuMDYzNTYzNjA3Nzc3MSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhMm0xITFzYm91bGRlcnMhNWUwITNtMiExc2VuITJzZGshNHYxNjgyNzcyMzY5NDE1ITVtMiExc2VuITJzZGtcIlxuICApO1xuICBtYXBzTWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBzTWFwSGFsbGVyXCIpO1xuXG4gIGZpcnN0cGFydExlZnRDb24uYXBwZW5kQ2hpbGQobWFwVGV4dCk7XG4gIGZpcnN0cGFydExlZnRDb24uYXBwZW5kQ2hpbGQobWFwc01hcCk7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAgZmlyc3RwYXJ0Q29uLmFwcGVuZENoaWxkKGZpcnN0cGFydFJpZ2h0Q29uKTtcbiAgZmlyc3RwYXJ0Q29uLmFwcGVuZENoaWxkKGZpcnN0cGFydExlZnRDb24pO1xuXG4gIC8vIENyZWF0aW5nIGxvd2VycGFydFxuICBjb25zdCBzZWNvbmRwYXJ0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2Vjb25kcGFydENvbi5jbGFzc0xpc3QuYWRkKFwicGFydEJvdHRvbUhhbGxlclwiKTtcblxuICBjb25zdCBoYWxsZXJMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoYWxsZXJMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyTGlua1RleHRcIiwgXCJ0aGlja1RleHRcIik7XG4gIGhhbGxlckxpbmtUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkhlcnVuZGVyIGthbiBkdSBsYWVzZSBtZXJlIG9tIGRlIGZvcnNrZWxsaWdlIGhhbGxlclwiO1xuXG4gIGNvbnN0IHVuZGVybGluZUhhbGxlckJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZGVybGluZUhhbGxlckJvdHRvbS5jbGFzc0xpc3QuYWRkKFxuICAgIFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIsXG4gICAgXCJ1bmRlcmxpbmVIYWxsZXJCb3R0b21cIlxuICApO1xuXG4gIC8vIENyZWF0aW5nIGhhbGxlcmxpbmsgY29udGFpbmVyXG4gIGNvbnN0IGhhbGxlckxpbmtDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYWxsZXJMaW5rQ29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJMaW5rQ29uXCIpO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYXJodXNOb3JkQ29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBhYXJodXNOb3JkQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiYWFyaHVzTm9yZFwiKTtcbiAgfSk7XG5cbiAgY29uc3QgYWFyaHVzTm9yZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFhcmh1c05vcmRFbC5jbGFzc0xpc3QuYWRkKFwiaG9sZEltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRCZyA9IG5ldyBJbWFnZSgpO1xuICBhYXJodXNOb3JkQmcuc3JjID0gYWFyaHVzTm9yZEltZ1NyYztcbiAgYWFyaHVzTm9yZEJnLmNsYXNzTGlzdC5hZGQoXCJob2xkQmdJbWdcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwiaG9sZEltZ0hlYWRlclwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBYXJodXMgTm9yZFwiO1xuXG4gIGFhcmh1c05vcmRFbC5hcHBlbmRDaGlsZChhYXJodXNOb3JkQmcpO1xuICBhYXJodXNOb3JkRWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBhYXJodXNOb3JkQ29uLmFwcGVuZENoaWxkKGFhcmh1c05vcmRFbCk7XG5cbiAgY29uc3QgYWFyaHVzQ2l0eUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYXJodXNDaXR5Q29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBjb25zdCBhYXJodXNDaXR5TGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkFhcmh1cyBDaXR5XCIsXG4gICAgYWFyaHVzQ2l0eUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvYWFyaHVzY1wiXG4gICk7XG5cbiAgYWFyaHVzQ2l0eUNvbi5hcHBlbmRDaGlsZChhYXJodXNDaXR5TGluay5lbCgpKTtcblxuICBjb25zdCBvZGVuc2VMaW5rQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb2RlbnNlTGlua0Nvbi5jbGFzc0xpc3QuYWRkKFwiaGFsbGVyRnJhbWVcIik7XG5cbiAgY29uc3Qgb2RlbnNlTGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIk9kZW5zZVwiLFxuICAgIG9kZW5zZUltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvb2RlbnNlXCJcbiAgKTtcblxuICBvZGVuc2VMaW5rQ29uLmFwcGVuZENoaWxkKG9kZW5zZUxpbmsuZWwoKSk7XG5cbiAgY29uc3QgYWFyaHVzU3lkQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzU3lkQ29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBjb25zdCBhYXJodXNTeWRMaW5rID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiQWFyaHVzIFN5ZFwiLFxuICAgIGFhcmh1c1N5ZEltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvYWFyaHVzc3lkXCJcbiAgKTtcblxuICBhYXJodXNTeWRDb24uYXBwZW5kQ2hpbGQoYWFyaHVzU3lkTGluay5lbCgpKTtcblxuICBjb25zdCBodmlkb3ZyZUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGh2aWRvdnJlQ29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBjb25zdCBodmlkb3ZyZUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJLQkggU3lkaGF2blwiLFxuICAgIGh2aWRvdnJlSW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9odmlkb3ZyZVwiXG4gICk7XG5cbiAgaHZpZG92cmVDb24uYXBwZW5kQ2hpbGQoaHZpZG92cmVMaW5rLmVsKCkpO1xuXG4gIGNvbnN0IGtiaFN5ZGhhdm5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBrYmhTeWRoYXZuQ29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBjb25zdCBrYmhTeWRoYXZuTGluayA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkh2aWRvdnJlXCIsXG4gICAga2JoU3lkaGF2bkltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsva2Joc3lkaGF2blwiXG4gICk7XG5cbiAga2JoU3lkaGF2bkNvbi5hcHBlbmRDaGlsZChrYmhTeWRoYXZuTGluay5lbCgpKTtcblxuICBjb25zdCB2YWxieUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZhbGJ5Q29uLmNsYXNzTGlzdC5hZGQoXCJoYWxsZXJGcmFtZVwiKTtcblxuICBjb25zdCB2YWxieUxpbmsgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJWYWxieVwiLFxuICAgIHZhbGJ5SW1nU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay92YWxieVwiXG4gICk7XG5cbiAgdmFsYnlDb24uYXBwZW5kQ2hpbGQodmFsYnlMaW5rLmVsKCkpO1xuXG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZENvbik7XG4gIGhhbGxlckxpbmtDb24uYXBwZW5kQ2hpbGQodmFsYnlDb24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKGtiaFN5ZGhhdm5Db24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKGh2aWRvdnJlQ29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChhYXJodXNDaXR5Q29uKTtcbiAgaGFsbGVyTGlua0Nvbi5hcHBlbmRDaGlsZChhYXJodXNTeWRDb24pO1xuICBoYWxsZXJMaW5rQ29uLmFwcGVuZENoaWxkKG9kZW5zZUxpbmtDb24pO1xuXG4gIC8vIEFwcGVuZGluZyBjaGlsZHJlblxuICBzZWNvbmRwYXJ0Q29uLmFwcGVuZENoaWxkKGhhbGxlckxpbmtUZXh0KTtcbiAgc2Vjb25kcGFydENvbi5hcHBlbmRDaGlsZCh1bmRlcmxpbmVIYWxsZXJCb3R0b20pO1xuICBzZWNvbmRwYXJ0Q29uLmFwcGVuZENoaWxkKGhhbGxlckxpbmtDb24pO1xuXG4gIC8vIEFwcGVuZGluZyBjaGlsZHJlblxuICBjb250ZW50LmFwcGVuZENoaWxkKGltZ0ZyYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdHBhcnRDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY29uZHBhcnRDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGFsbGVycGFnZTtcbiIsImltcG9ydCBhYXJodXNOb3JkaW1nU3JjIGZyb20gXCIuLi8uLi9JbWcvYWFyaHVzTm9yZC5qcGdcIjtcbmltcG9ydCBrb3J0QWFyaHVzTm9yZEltZ1NyYyBmcm9tIFwiLi4vLi4vSW1nL2tvcnRBYXJodXNOb3JkLnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVBYXJodXNOb3JkID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBwYXJ0XG4gIGNvbnN0IGFhcmh1c05vcmRQYXJ0MUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c05vcmRQYXJ0MUNvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZFBhcnQxQ29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgc2lkZVxuICBjb25zdCBsZWZ0Rmlyc3RDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0Rmlyc3RDb24uY2xhc3NMaXN0LmFkZChcImFhcmh1c05vcmRMZWZ0T3JSaWdodFwiKTtcblxuICBjb25zdCBhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcImFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXJcIixcbiAgICBcInRoaWNrVGV4dFwiXG4gICk7XG4gIGFhcmh1c05vcmRMaWR0b21oYWxsZW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxpZHQgb20gaGFsbGVuXCI7XG5cbiAgY29uc3QgdW5kZXJsaW5lTGlkdE9tSGFsbGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5kZXJsaW5lTGlkdE9tSGFsbGVuLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVIYWxsZXJIZWFkZXJcIik7XG5cbiAgY29uc3QgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgYWFyaHVzTm9yZExpZHRvbWhhbGxlblRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQnllbnMgZsO4cnN0ZSBvZyBmZWRlc3RlIGJvdWxkZXJpbmcgaGFsIGkgQWFyaHVzIE5vcmQgc2lkZW4gMjAxNC4gSGFsbGVuIGJ5ZGVyIHDDpSBzdG9yIHZhcmlhdGlvbiBhZiBow6ZsZG5pbmdlciBww6UgdsOmZ2dlbmUgb2cgZXIgaGplbSBmb3IgbWFuZ2UgZ2FydmVkZSBrbGF0cmVyZS4gRW4gc3RvciDDpWJlbiBoYWwgbWVkIGVuIHBvcnQsIGRlciDDpWJuZXMgb20gc29tbWVyZW4sIHPDpSBtYW4ga2FuIG55ZGUgc2luIGthZmZlIGVsbGVyIMO4bCBpIHNvbGVuLiBBbGxlIGtvbmt1cnJlbmNlciBpIEFhcmh1cywgZi4gZWtzLiBCbG9jcGFydHksICBhZnZpa2xlcyBoZXIgcMOlIHZvcmVzIHRpbHNrdWVyLXZlbmxpZ2Uga29ua3VycmVuY2V2w6ZnLlwiO1xuXG4gIGxlZnRGaXJzdENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkTGlkdG9taGFsbGVuSGVhZGVyKTtcbiAgbGVmdEZpcnN0Q29uLmFwcGVuZENoaWxkKHVuZGVybGluZUxpZHRPbUhhbGxlbik7XG4gIGxlZnRGaXJzdENvbi5hcHBlbmRDaGlsZChhYXJodXNOb3JkTGlkdG9taGFsbGVuVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCByaWdodEZpcnN0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRGaXJzdENvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZExlZnRPclJpZ2h0XCIpO1xuXG4gIGNvbnN0IGFhcmh1c05vcmRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYWFyaHVzTm9yZEltZy5zcmMgPSBhYXJodXNOb3JkaW1nU3JjO1xuICBhYXJodXNOb3JkSW1nLmNsYXNzTGlzdC5hZGQoXCJhYXJodXNOb3JkSW1nXCIpO1xuXG4gIHJpZ2h0Rmlyc3RDb24uYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZEltZyk7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3QgY2hpbGRyZW5cbiAgYWFyaHVzTm9yZFBhcnQxQ29uLmFwcGVuZENoaWxkKGxlZnRGaXJzdENvbik7XG4gIGFhcmh1c05vcmRQYXJ0MUNvbi5hcHBlbmRDaGlsZChyaWdodEZpcnN0Q29uKTtcblxuICAvLyBDcmVhdGluZyBwYXJ0IDJcbiAgY29uc3QgYWFyaHVzTm9yZFBhcnQyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWFyaHVzTm9yZFBhcnQyQ29uLmNsYXNzTGlzdC5hZGQoXCJhYXJodXNOb3JkUGFydDJDb25cIik7XG5cbiAgY29uc3Qga29ydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrb3J0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtvcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhlciBlciBldCBrb3J0IG92ZXIgaGFsbGVuXCI7XG5cbiAgY29uc3Qga29ydEFhcmh1c05vcmQgPSBuZXcgSW1hZ2UoKTtcbiAga29ydEFhcmh1c05vcmQuc3JjID0ga29ydEFhcmh1c05vcmRJbWdTcmM7XG4gIGtvcnRBYXJodXNOb3JkLmNsYXNzTGlzdC5hZGQoXCJrb3J0QWFyaHVzTm9yZFwiKTtcblxuICBhYXJodXNOb3JkUGFydDJDb24uYXBwZW5kQ2hpbGQoa29ydEhlYWRlcik7XG4gIGFhcmh1c05vcmRQYXJ0MkNvbi5hcHBlbmRDaGlsZChrb3J0QWFyaHVzTm9yZCk7XG5cbiAgLy8gQ3JlYXRpbmcgcGFydCAzXG4gIGNvbnN0IGFhcmh1c05vcmRQYXJ0M0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFhcmh1c05vcmRQYXJ0M0Nvbi5jbGFzc0xpc3QuYWRkKFwiYWFyaHVzTm9yZFBhcnQzQ29uXCIpO1xuXG4gIGNvbnN0IGZpbmRPc0Fhcmh1c05vcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LnN0eWxlLmZvbnRTaXplID0gXCI2MHB4XCI7XG4gIGZpbmRPc0Fhcmh1c05vcmRUZXh0LnRleHRDb250ZW50ID0gXCJGaW5kIE9zXCI7XG5cbiAgY29uc3QgbWFwc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIG1hcHNNYXAuY2xhc3NMaXN0LmFkZChcIm1hcHNNYXBBYXJodXNOb3JkXCIpO1xuICBtYXBzTWFwLnNldEF0dHJpYnV0ZShcbiAgICBcInNyY1wiLFxuICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjIxOS4yMTg0MTI0Nzc3NjczITJkMTAuMTc5NDc4NjE1OTQ4MTUzITNkNTYuMjA1MTg0NjgwNjc2NzghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ2NGMxNThhM2E0YzIzOGYlM0EweDhiMmViMThhNDM1ZDc0Y2YhMnNBYXJodXMlMjBCb3VsZGVycyE1ZTAhM20yITFzZW4hMnNkayE0djE2ODI5MjUyMTI5NDkhNW0yITFzZW4hMnNka1wiXG4gICk7XG5cbiAgYWFyaHVzTm9yZFBhcnQzQ29uLmFwcGVuZENoaWxkKGZpbmRPc0Fhcmh1c05vcmRUZXh0KTtcbiAgYWFyaHVzTm9yZFBhcnQzQ29uLmFwcGVuZENoaWxkKG1hcHNNYXApO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0IGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWFyaHVzTm9yZFBhcnQxQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYXJodXNOb3JkUGFydDJDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFhcmh1c05vcmRQYXJ0M0Nvbik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYXJodXNOb3JkO1xuIiwiaW1wb3J0IGludHJvSG9sZEltZ1NyYyBmcm9tIFwiLi4vSW1nL2JvdWxkZXJzSW50cm9Ib2xkLmpwZ1wiO1xuaW1wb3J0IGZvcnRzYWV0dGVyaG9sZFNyYyBmcm9tIFwiLi4vSW1nL2JvdWxkZXJzRm9ydHNhZXR0ZXJob2xkLmpwZ1wiO1xuaW1wb3J0IGxhbmd2YXJpZ3Rob2xkU3JjIGZyb20gXCIuLi9JbWcvbGFuZ3ZhcmlndGhvbGQuanBnXCI7XG5pbXBvcnQgYm9lcm5laG9sZFNyYyBmcm9tIFwiLi4vSW1nL2JvZXJuZWhvbGQuanBnXCI7XG5pbXBvcnQgc3VtbWVyY2FtcGhvbGRTcmMgZnJvbSBcIi4uL0ltZy9zdW1tZXJjYW1waG9sZC5qcGdcIjtcblxuaW1wb3J0IHsgZGlzcGxheUxpbmsgfSBmcm9tIFwiLi4vcGFnZUNyZWF0ZXJcIjtcblxuY29uc3QgY3JlYXRlSG9sZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGZpcnN0IGhlYWRlclxuICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcImhvbGRIZWFkZXJDb25cIik7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJob2xkSGVhZGVyVGV4dFwiLCBcInRoaWNrVGV4dFwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSG9sZFwiO1xuXG4gIGhlYWRlckNvbi5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICAvLyBDcmVhdGluZyBmdW5jdGlvbiB0byBjcmVhdGUgZWwuXG5cbiAgY29uc3QgaW50cm9ob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiSW50cm8gSG9sZFwiLFxuICAgIGludHJvSG9sZEltZ1NyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaW50cm9cIlxuICApO1xuXG4gIGNvbnN0IGZvcnRzYWV0dGVyaG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIkZvcnRzw6Z0dGVyIEhvbGRcIixcbiAgICBmb3J0c2FldHRlcmhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL2ludGVybWVkaWF0ZVwiXG4gICk7XG5cbiAgY29uc3QgbGFuZ3ZhcmlndGhvbGQgPSBuZXcgZGlzcGxheUxpbmsoXG4gICAgXCJMYW5ndmFyaWd0IEhvbGRcIixcbiAgICBsYW5ndmFyaWd0aG9sZFNyYyxcbiAgICBcImh0dHBzOi8vYm91bGRlcnMuZGsvaW50aGV6b25lXCJcbiAgKTtcblxuICBjb25zdCBib2VybmVob2xkID0gbmV3IGRpc3BsYXlMaW5rKFxuICAgIFwiQsO4cm5lIEhvbGRcIixcbiAgICBib2VybmVob2xkU3JjLFxuICAgIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9ib2VybmVob2xkXCJcbiAgKTtcblxuICBjb25zdCBzdW1tZXJjYW1waG9sZCA9IG5ldyBkaXNwbGF5TGluayhcbiAgICBcIlN1bW1lciBDYW1wXCIsXG4gICAgc3VtbWVyY2FtcGhvbGRTcmMsXG4gICAgXCJodHRwczovL2JvdWxkZXJzLmRrL3NvbW1lcmNhbXBcIlxuICApO1xuXG4gIC8vIEFwcGVuZGluZyBhbGwgZWxcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm9ob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ydHNhZXR0ZXJob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZ3ZhcmlndGhvbGQuZWwoKSksXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2VybmVob2xkLmVsKCkpLFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VtbWVyY2FtcGhvbGQuZWwoKSksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9sZFBhZ2U7XG4iLCJpbXBvcnQgeyBidG5BY3RpdmF0aW9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuY29uc3QgY3JlYXRlSG9tZXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlQmdGcmFtZS5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VCZ0ltZ1wiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlQmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VCZ1RleHQuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlQmdUZXh0XCIpO1xuICBob21lcGFnZUJnVGV4dC50ZXh0Q29udGVudCA9IFwiS2xhdHJpbmcgLSBGw6ZsbGVzc2thYiAtIMOYa29jYWZlXCI7XG5cbiAgY29uc3QgZmlyc3R0aW1lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0dGltZXJCdG4uY2xhc3NMaXN0LmFkZChcImZpcnN0dGltZXJCdG5cIik7XG4gIGZpcnN0dGltZXJCdG4udGV4dENvbnRlbnQgPSBcIkbDuHJzdGUgZ2FuZz9cIjtcblxuICBmaXJzdHRpbWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiZmlyc3R0aW1lclwiKTtcbiAgfSk7XG5cbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGhvbWVwYWdlQmdUZXh0KTtcbiAgaG9tZXBhZ2VCZ0ZyYW1lLmFwcGVuZENoaWxkKGZpcnN0dGltZXJCdG4pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VCZ0ZyYW1lKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVwYWdlO1xuIiwiY29uc3QgY3JlYXRlUHJpc3BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gIC8vIENyZWF0aW5nIGltZ0ZyYW1lXG4gIGNvbnN0IGltZ0ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZChcInByaXNJbWdGcmFtZVwiLCBcImltZ0ZyYW1lXCIpO1xuXG4gIGNvbnN0IGltZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaW1nVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ1RleHRcIik7XG4gIGltZ1RleHQudGV4dENvbnRlbnQgPSBcIlBSSVNFUlwiO1xuXG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKGltZ1RleHQpO1xuXG4gIC8vIENyZWF0aW5nIGZpcnN0IHByaXMgcGFydFxuICBjb25zdCBlbnRyZXByaXNQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW50cmVwcmlzUGFydC5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiLCBcImVudHJ5UGFydFwiKTtcblxuICBjb25zdCBlbnRyeVByaXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbnRyeVByaXNCb3guY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgLy8gQ3JlYXRpbmcgb25lIGxpbmVcbiAgY29uc3Qgb2ZmUGVha1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHQuY2xhc3NMaXN0LmFkZChcInRleHRDb25cIik7XG5cbiAgbGV0IG9mZlBlYWtUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRGaXJzdC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrVGV4dEZpcnN0LnRleHRDb250ZW50ID0gXCJPZmZwZWFrOlwiO1xuXG4gIGxldCBvZmZQZWFrVGV4dExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha1RleHRMYXN0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtUZXh0TGFzdC50ZXh0Q29udGVudCA9XG4gICAgXCIgbWFuZGFnIHRpbCBmcmVkYWcgZm9lciBrbCAxNCwgbG9lcmRhZyBvZyBzb2VuZGFnIGVmdHIga2wgMThcIjtcblxuICBvZmZQZWFrVGV4dC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dEZpcnN0KTtcbiAgb2ZmUGVha1RleHQuYXBwZW5kQ2hpbGQob2ZmUGVha1RleHRMYXN0KTtcblxuICAvLyBDcmVhdGluZyBzZWNvbmQgbGluZVxuICBjb25zdCBwZWFrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dENvblwiKTtcblxuICBsZXQgcGVha1RleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dEZpcnN0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtUZXh0Rmlyc3QudGV4dENvbnRlbnQgPSBcIlBlYWs6XCI7XG5cbiAgbGV0IHBlYWtUZXh0TGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwZWFrVGV4dExhc3QuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgcGVha1RleHRMYXN0LnRleHRDb250ZW50ID1cbiAgICBcIiBtYW5kYWcgdGlsIGZyZWRhZyBmb2VyIGtsIDE0LCBsb2VyZGFnIG9nIHNvZW5kYWcgZWZ0ciBrbCAxOFwiO1xuXG4gIHBlYWtUZXh0LmFwcGVuZENoaWxkKHBlYWtUZXh0Rmlyc3QpO1xuICBwZWFrVGV4dC5hcHBlbmRDaGlsZChwZWFrVGV4dExhc3QpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIGxpbmVzXG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChvZmZQZWFrVGV4dCk7XG4gIGVudHJ5UHJpc0JveC5hcHBlbmRDaGlsZChwZWFrVGV4dCk7XG5cbiAgZW50cmVwcmlzUGFydC5hcHBlbmRDaGlsZChlbnRyeVByaXNCb3gpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclBhcnRcbiAgY29uc3QgZW5nYW5nc0VudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nc0VudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIC8vIENyZWF0aW5nIGhlYWRlclxuICBjb25zdCBlbmdhbmdzRW50cmVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGVuZ2FuZ3NFbnRyZUhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkVuZ2FuZ3MgRW50cmVcIjtcblxuICBlbmdhbmdzRW50cmVIZWFkZXIuYXBwZW5kQ2hpbGQoZW5nYW5nc0VudHJlSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3QgZW5nYW5nRW50cmVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbmdhbmdFbnRyZUNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW5nYW5nRW50cmVDb25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBvZmZQZWFrSGVhZGVyUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBvZmZQZWFrSGVhZGVyUHJpcy50ZXh0Q29udGVudCA9IFwiRW50cmUgT2ZmIFBlYWtcIjtcblxuICBsZXQgb2ZmUGVha1Zva3NlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBvZmZQZWFrVm9rc2VuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtWb2tzZW4udGV4dENvbnRlbnQgPSBcIlZva3NlbjogOTVrclwiO1xuXG4gIGxldCBvZmZQZWFrQm9lcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgb2ZmUGVha0JvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIG9mZlBlYWtCb2Vybi50ZXh0Q29udGVudCA9IFwiQm9lcm46IDk1a3JcIjtcblxuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha0hlYWRlclByaXMpO1xuICBlbmdhbmdFbnRyZUNvbkxlZnQuYXBwZW5kQ2hpbGQob2ZmUGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uTGVmdC5hcHBlbmRDaGlsZChvZmZQZWFrQm9lcm4pO1xuXG4gIC8vIENyZWF0aW5nIHJpZ2h0IHNpZGVcbiAgY29uc3QgZW5nYW5nRW50cmVDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHBlYWtIZWFkZXJQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtIZWFkZXJQcmlzLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHBlYWtIZWFkZXJQcmlzLnRleHRDb250ZW50ID0gXCJFbnRyZSBQZWFrXCI7XG5cbiAgbGV0IHBlYWtWb2tzZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGVha1Zva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrVm9rc2VuLnRleHRDb250ZW50ID0gXCJWb2tzZW46IDk1a3JcIjtcblxuICBsZXQgcGVha0JvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBlYWtCb2Vybi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBwZWFrQm9lcm4udGV4dENvbnRlbnQgPSBcIkJvZXJuOiA5NWtyXCI7XG5cbiAgZW5nYW5nRW50cmVDb25SaWdodC5hcHBlbmRDaGlsZChwZWFrSGVhZGVyUHJpcyk7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha1Zva3Nlbik7XG4gIGVuZ2FuZ0VudHJlQ29uUmlnaHQuYXBwZW5kQ2hpbGQocGVha0JvZXJuKTtcblxuICAvLyBBcHBlbmRpbmcgbGFzdFxuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvbkxlZnQpO1xuICBlbmdhbmdFbnRyZUNvbi5hcHBlbmRDaGlsZChlbmdhbmdFbnRyZUNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgbWVkbGVtc2thYkVudHJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkVudHJlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IG1lZGxlbXNrYWJIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG1lZGxlbXNrYWJIZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJwcmlzSGVhZGVyXCIpO1xuICBtZWRsZW1za2FiSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTWVkbGVtc2thYlwiO1xuXG4gIG1lZGxlbXNrYWJFbnRyZUhlYWRlci5hcHBlbmRDaGlsZChtZWRsZW1za2FiSGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgbWVkbGVtc2thYnNib3hcbiAgY29uc3QgbWVkbGVtc2thYkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lZGxlbXNrYWJDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVkbGVtc2thYkNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHN0YW5kYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHN0YW5kYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0YW5kYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTdGFuZGFyZCBtZWRsZW1za2FiXCI7XG5cbiAgbGV0IHN0YW5kYXJkUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdGFuZGFyZFByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgc3RhbmRhcmRQcmlzLnRleHRDb250ZW50ID0gXCIzOTlrciBwZXIgbWFhbmVkXCI7XG5cbiAgbWVkbGVtc2thYkNvbkxlZnQuYXBwZW5kQ2hpbGQoc3RhbmRhcmRIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uTGVmdC5hcHBlbmRDaGlsZChzdGFuZGFyZFByaXMpO1xuXG4gIC8vIENyZWF0aW5nIG1pZGRsZSBzaWRlXG4gIGNvbnN0IG1lZGxlbXNrYWJDb25NaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uTWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJwcmlzQm94XCIpO1xuXG4gIGxldCBzdHVkaWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3R1ZGllSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHN0dWRpZUhlYWRlci50ZXh0Q29udGVudCA9IFwiU3R1ZGllIG1lZGxlbXNrYWJcIjtcblxuICBsZXQgc3R1ZGllUHJpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzdHVkaWVQcmlzLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHN0dWRpZVByaXMudGV4dENvbnRlbnQgPSBcIjM1OWtyIHBlciBtYWFuZWRcIjtcblxuICBtZWRsZW1za2FiQ29uTWlkZGxlLmFwcGVuZENoaWxkKHN0dWRpZUhlYWRlcik7XG4gIG1lZGxlbXNrYWJDb25NaWRkbGUuYXBwZW5kQ2hpbGQoc3R1ZGllUHJpcyk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgc2lkZVxuICBjb25zdCBtZWRsZW1za2FiQ29uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGp1bmlvckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBqdW5pb3JIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAganVuaW9ySGVhZGVyLnRleHRDb250ZW50ID0gXCJKdW5pb3IgbWVkbGVtc2thYlwiO1xuXG4gIGxldCBqdW5pb3JQcmlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGp1bmlvclByaXMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAganVuaW9yUHJpcy50ZXh0Q29udGVudCA9IFwiMjE5a3IgcGVyIG1hYW5lZFwiO1xuXG4gIG1lZGxlbXNrYWJDb25SaWdodC5hcHBlbmRDaGlsZChqdW5pb3JIZWFkZXIpO1xuICBtZWRsZW1za2FiQ29uUmlnaHQuYXBwZW5kQ2hpbGQoanVuaW9yUHJpcyk7XG5cbiAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgbWVkbGVtc2thYkNvbi5hcHBlbmRDaGlsZChtZWRsZW1za2FiQ29uTGVmdCk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbk1pZGRsZSk7XG4gIG1lZGxlbXNrYWJDb24uYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3Qga2xpcHBla29ydEhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcImVuZ2FuZ3NFbnRyZUhlYWRlclwiLCBcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgY29uc3Qga2xpcHBla29ydEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcInByaXNIZWFkZXJcIik7XG4gIGtsaXBwZWtvcnRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0XCI7XG5cbiAga2xpcHBla29ydEhlYWRlckNvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0SGVhZGVyVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgRW50cmVib3hcbiAgY29uc3Qga2xpcHBla29ydENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb24uY2xhc3NMaXN0LmFkZChcInBhcnRXaXRoQ2VuRWxcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2xpcHBla29ydENvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IGtsaXBwZWtvcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2xpcHBla29ydEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBrbGlwcGVrb3J0SGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQga2xpcHBla29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnQudGV4dENvbnRlbnQgPSBcIjk1MGtyICgxMCBrbGlwKVwiO1xuXG4gIGtsaXBwZWtvcnRDb25MZWZ0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uTGVmdC5hcHBlbmRDaGlsZChrbGlwcGVrb3J0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBzaWRlXG4gIGNvbnN0IGtsaXBwZWtvcnRDb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtsaXBwZWtvcnRDb25SaWdodC5jbGFzc0xpc3QuYWRkKFwicHJpc0JveFwiKTtcblxuICBsZXQga2xpcHBla29ydFUxNkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrbGlwcGVrb3J0VTE2SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtsaXBwZWtvcnRVMTZIZWFkZXIudGV4dENvbnRlbnQgPSBcIktsaXBwZWtvcnQgVS4xNlwiO1xuXG4gIGxldCBrbGlwcGVrb3J0VTE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtsaXBwZWtvcnRVMTYuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAga2xpcHBla29ydFUxNi50ZXh0Q29udGVudCA9IFwiNjAwa3IgKDEwIGtsaXApXCI7XG5cbiAga2xpcHBla29ydENvblJpZ2h0LmFwcGVuZENoaWxkKGtsaXBwZWtvcnRVMTZIZWFkZXIpO1xuICBrbGlwcGVrb3J0Q29uUmlnaHQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydFUxNik7XG5cbiAgLy8gQXBwZW5kaW5nIGJvdGggc2lkZXNcbiAga2xpcHBla29ydENvbi5hcHBlbmRDaGlsZChrbGlwcGVrb3J0Q29uTGVmdCk7XG4gIGtsaXBwZWtvcnRDb24uYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvblJpZ2h0KTtcblxuICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgY29uc3QgdWRzdHlySGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdWRzdHlySGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJlbmdhbmdzRW50cmVIZWFkZXJcIiwgXCJwYXJ0V2l0aENlbkVsXCIpO1xuXG4gIGNvbnN0IHVkc3R5ckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIsIFwicHJpc0hlYWRlclwiKTtcbiAgdWRzdHlySGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVWRzdHlyXCI7XG5cbiAgdWRzdHlySGVhZGVyQ29uLmFwcGVuZENoaWxkKHVkc3R5ckhlYWRlclRleHQpO1xuXG4gIC8vIENyZWF0aW5nIEVudHJlYm94XG4gIGNvbnN0IHVkc3R5ckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbi5jbGFzc0xpc3QuYWRkKFwicGFydFdpdGhDZW5FbFwiKTtcblxuICAvLyBDcmVhdGluZyBsZWZ0IHNpZGVcbiAgY29uc3QgdWRzdHlyQ29uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVkc3R5ckNvbkxlZnQuY2xhc3NMaXN0LmFkZChcInByaXNCb3hcIik7XG5cbiAgbGV0IHVkc3R5ckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB1ZHN0eXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiKTtcbiAgdWRzdHlySGVhZGVyLnRleHRDb250ZW50ID0gXCJLbGlwcGVrb3J0IGFsbS5cIjtcblxuICBsZXQgdWRzdHlyVm9rc2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5clZva3Nlbi5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICB1ZHN0eXJWb2tzZW4udGV4dENvbnRlbnQgPSBcIkxlamUgYWYgc2tvOiAzNWtyXCI7XG5cbiAgbGV0IHVkc3R5ckJvZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHVkc3R5ckJvZXJuLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHVkc3R5ckJvZXJuLnRleHRDb250ZW50ID0gXCJLYWxrOiAxMGtyXCI7XG5cbiAgdWRzdHlyQ29uTGVmdC5hcHBlbmRDaGlsZCh1ZHN0eXJIZWFkZXIpO1xuICB1ZHN0eXJDb25MZWZ0LmFwcGVuZENoaWxkKHVkc3R5clZva3Nlbik7XG4gIHVkc3R5ckNvbkxlZnQuYXBwZW5kQ2hpbGQodWRzdHlyQm9lcm4pO1xuXG4gIC8vIEFwcGVuZGluZyBsYXN0XG4gIHVkc3R5ckNvbi5hcHBlbmRDaGlsZCh1ZHN0eXJDb25MZWZ0KTtcblxuICAvLyBBcHBlbmRpbmcgYWxsIGNoaWxkcmVuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nRnJhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVudHJlcHJpc1BhcnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVuZ2FuZ3NFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5nYW5nRW50cmVDb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lZGxlbXNrYWJFbnRyZUhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVkbGVtc2thYkNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydEhlYWRlckNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoa2xpcHBla29ydENvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodWRzdHlySGVhZGVyQ29uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh1ZHN0eXJDb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJpc3BhZ2U7XG4iLCJpbXBvcnQgdmFlZ2dlSW1nU3JjIGZyb20gXCIuLi9JbWcvdmFlZ2dlLnBuZ1wiO1xuaW1wb3J0IGdyZWJJbWdTcmMgZnJvbSBcIi4uL0ltZy9ncmViLnBuZ1wiO1xuaW1wb3J0IGJldmFlZ2Vsc2VJbWdTcmMgZnJvbSBcIi4uL0ltZy9iZXZhZWdlbHNlLnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVUZXJtcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgLy8gQ3JlYXRpbmcgZGlzcGxheSBsaW5rICggSSdtIGxhenkgcmlnaHQgbm93IHNvcnJ5IClcbiAgY29uc3QgaW1nRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdGcmFtZS5jbGFzc0xpc3QuYWRkKFwicHJpc0ltZ0ZyYW1lXCIsIFwiaW1nRnJhbWVcIik7XG5cbiAgY29uc3QgaW1nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpbWdUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlzSW1nVGV4dFwiKTtcbiAgaW1nVGV4dC50ZXh0Q29udGVudCA9IFwiVEVSTVNcIjtcblxuICBpbWdGcmFtZS5hcHBlbmRDaGlsZChpbWdUZXh0KTtcblxuICAvLyBDcmVhdGluZyBmaXJzdCBwYXJ0XG4gIGNvbnN0IHBhcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFydDEuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydFwiKTtcbiAgcGFydDEuc3R5bGUubWFyZ2luVG9wID0gXCIgNTBweFwiO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgcGFydFxuICBjb25zdCBsZWZ0UGFydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDEuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydExlZnRcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQxSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MUhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFIZWFkZXIudGV4dENvbnRlbnQgPSBcIlbDpmdnZVwiO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MXVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0MXVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDFUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1RleHRDb25cIik7XG5cbiAgbGV0IGxlZnRQYXJ0MVRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MVRleHQxLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MVRleHQxLnRleHRDb250ZW50ID1cbiAgICBcIlNsYWI6IEVyIGJldGVnbmV0IHNvbSBlbiB2w6ZnaMOmbGRuaW5nIHDDpSBvdmVyIDkwbyBmcmEgZ3J1bmRmbGFkZW4uIEVuIHJ1dGUgcMOlIHNsYWIgaGFuZGxlciBvZnRlIG9tIGJhbGFuY2UgaSBzdGVkZXQgZm9yIHN0eXJrZS5cIjtcblxuICBsZXQgbGVmdFBhcnQxVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxVGV4dDIuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxVGV4dDIudGV4dENvbnRlbnQgPVxuICAgIFwiRmFjZTogRXIgdsOmZ2dlIGRlciBoYXIgZW4gaMOmbGRuaW5nIHDDpSB1bmRlciA5MG8gZnJhIGd1bHZldC5cIjtcblxuICBsZXQgbGVmdFBhcnQxVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxVGV4dDMuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxVGV4dDMudGV4dENvbnRlbnQgPVxuICAgIFwiT3Zlcmhhbmc6IEVyIHbDpmdnZSBtZWQgZW4ga3JhZnRpZyBmYWNlIGjDpmxkbmluZywgZGUgZXIgb2Z0ZSBlbiBkZWwgdHVuZ2UgYXQga2xhdHJlLlwiO1xuXG4gIGxldCBsZWZ0UGFydDFUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDFUZXh0NC5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDFUZXh0NC50ZXh0Q29udGVudCA9XG4gICAgXCJSb29mOiBCcnVnZXMgb20gdsOmZ2dlIGRlciBlciBwYXJhbGxlbGxlIG1lZCBndWx2ZXQsIGFsdHPDpSBpbmdlbiBow6ZsZG5pbmcuIFJvb2YgZXIgZm9yIGRldCBtZXN0ZSBtZWdldCB0dW5nZSBhdCBrbGF0cmUsIG9nIGtyw6Z2ZXIgZW4gZ29kIHRla25pay5cIjtcblxuICBsZXQgbGVmdFBhcnQxVGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQxVGV4dDUuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQxVGV4dDUudGV4dENvbnRlbnQgPVxuICAgIFwiT2Z0ZSBibGl2ZXIgdsOmZ2dlIG9nc8OlIGJlc2tyZXZldCBtZWQgZGVyZXMgaMOmbGRuaW5nIChGLmVrcy4gMjBncmFkZXIgZmFjZSlcIjtcblxuICBsZWZ0UGFydDFUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQxKTtcbiAgbGVmdFBhcnQxVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0Mik7XG4gIGxlZnRQYXJ0MVRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dDMpO1xuICBsZWZ0UGFydDFUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MVRleHQ0KTtcbiAgbGVmdFBhcnQxVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDFUZXh0NSk7XG5cbiAgbGVmdFBhcnQxLmFwcGVuZENoaWxkKGxlZnRQYXJ0MUhlYWRlcik7XG4gIGxlZnRQYXJ0MS5hcHBlbmRDaGlsZChsZWZ0UGFydDF1bmRlcmxpbmUpO1xuICBsZWZ0UGFydDEuYXBwZW5kQ2hpbGQobGVmdFBhcnQxVGV4dCk7XG5cbiAgLy8gQ3JlYXRpbmcgcmlnaHQgcGFydFxuICBjb25zdCByaWdodFBhcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmlnaHRQYXJ0MS5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0UmlnaHRcIik7XG5cbiAgY29uc3QgdmFlZ2dlSW1nID0gbmV3IEltYWdlKCk7XG4gIHZhZWdnZUltZy5zcmMgPSB2YWVnZ2VJbWdTcmM7XG4gIHZhZWdnZUltZy5jbGFzc0xpc3QuYWRkKFwidGVybXNJbWdcIiwgXCJ0ZXJtc0ltZzFcIik7XG5cbiAgcmlnaHRQYXJ0MS5hcHBlbmRDaGlsZCh2YWVnZ2VJbWcpO1xuXG4gIC8vIEFwcGVuZGluZyBib3RoIHNpZGVzXG4gIHBhcnQxLmFwcGVuZENoaWxkKGxlZnRQYXJ0MSk7XG4gIHBhcnQxLmFwcGVuZENoaWxkKHJpZ2h0UGFydDEpO1xuXG4gIC8vIENyZWF0aW5nIHBhcnQgMlxuICBjb25zdCBwYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnQyLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRcIik7XG5cbiAgLy8gQ3JlYXRpbmcgbGVmdCBwYXJ0XG4gIGNvbnN0IGxlZnRQYXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0Mi5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0TGVmdFwiKTtcblxuICBjb25zdCBsZWZ0UGFydDJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MkhlYWRlci50ZXh0Q29udGVudCA9IFwiR3JlYlwiO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MnVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRQYXJ0MnVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lSGFsbGVySGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxlZnRQYXJ0MlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1RleHRDb25cIik7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQxLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQxLnRleHRDb250ZW50ID1cbiAgICBcIkp1ZzogQnJ1Z2VzIG9tIGdyZWIgZHUga2FuIHRhZ2UgZmF0IGkgbWVkIGFsbGUgdHJlIGZpbmdlcmxlZC4gRGUgZXIgb2Z0ZSBnb2RlIGF0IGhvbGRlIGZhc3QgaS5cIjtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDIuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDIudGV4dENvbnRlbnQgPVxuICAgIFwiQ3JpbXA6IEVyIGJldGVnbmVsc2VuIGJydWd0IG9tIGdyZWIsIG1hbiBrdW4ga2FuIGbDpSBmYXQgaSBtZWQgZGV0IHlkZXJzdGUgZmluZGVybGVkLlwiO1xuXG4gIGxldCBsZWZ0UGFydDJUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDJUZXh0My5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDJUZXh0My50ZXh0Q29udGVudCA9XG4gICAgXCJTbG9iZXI6IEVyIG9mdGUgcmlndGlndCBzdG9yZSBncmViLiBNYW4gYnJ1Z2VyIGhlbGUgaMOlbmRlbiB0aWwgYXQgdGFnZSBmYXQgaSBkZW0sIGRhIGRlIGVyIGxpZHQgdWrDpnZuZSBpIG92ZXJmbGFkZW4uXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQ0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQ0LnRleHRDb250ZW50ID1cbiAgICBcIlBvY2tldDogT2dzw6Uga2FsZGV0IGZpbmdlci1wb2NrZXRzLCBlciBydW5kZSBncmViIG1lZCBlbiB1ZGh1bGluZyBpIG1pZHRlbiwgbWFuIGthbiBob2xkZSBmYXN0IGkgbWVkIGZpbmdyZW5kZS5cIjtcblxuICBsZXQgbGVmdFBhcnQyVGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQyVGV4dDUuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQyVGV4dDUudGV4dENvbnRlbnQgPVxuICAgIFwiSG9ybjogRXIgZXQgbm9nZW5sdW5kZSBzdG9ydCAoT2Z0ZSBzcGlkc3QpIGdyZWIsIGRlciBzdGlra2VyIGxpZ2UgdWQgZnJhIHbDpmdnZW4gZWxsZXIgbGlkdCBvcGFkLiBNYW4gdGFnZXIgZmF0IGkgZXQgaG9ybiwgdmVkIGF0IGxpZ2dlIGhlbGUgaMOlbmRlbiBydW5kdCBvbSBkZXQuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0MlRleHQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0MlRleHQ2LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0MlRleHQ2LnRleHRDb250ZW50ID1cbiAgICBcIlBpbmNoOiBTaWRkZXIgbWVzdCBub3JtYWx0IHDDpSBoasO4cm5lciBhZiB2w6ZnZ2UsIG9nIGthbiBnb2R0IGJlc3TDpSBhZiBmbGVyZSBncmViLiBOw6VyIG1hbiB0YWdlciBmYXQgaSBlbiBwaW5jaCwgc2thbCBtYW4gYnJ1Z2UgaGVsZSBow6VuZGVuIG9nIHNww6ZuZGUgb3AgbWVsbGVtIHRvbW1lbGZpbmdlcmVuIG9nIGRlIGFuZHJlIGZpbmdyZS5cIjtcblxuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQxKTtcbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0Mik7XG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDMpO1xuICBsZWZ0UGFydDJUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0MlRleHQ0KTtcbiAgbGVmdFBhcnQyVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0NSk7XG4gIGxlZnRQYXJ0MlRleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQyVGV4dDYpO1xuXG4gIC8vIEFwcGRpbmcgbGFzdFxuICBsZWZ0UGFydDIuYXBwZW5kQ2hpbGQobGVmdFBhcnQySGVhZGVyKTtcbiAgbGVmdFBhcnQyLmFwcGVuZENoaWxkKGxlZnRQYXJ0MnVuZGVybGluZSk7XG4gIGxlZnRQYXJ0Mi5hcHBlbmRDaGlsZChsZWZ0UGFydDJUZXh0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBwYXJ0XG4gIGNvbnN0IHJpZ2h0UGFydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodFBhcnQyLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRSaWdodFwiKTtcblxuICBjb25zdCBncmViSW1nID0gbmV3IEltYWdlKCk7XG4gIGdyZWJJbWcuc3JjID0gZ3JlYkltZ1NyYztcbiAgZ3JlYkltZy5jbGFzc0xpc3QuYWRkKFwidGVybXNJbWdcIiwgXCJ0ZXJtc0ltZzJcIik7XG5cbiAgcmlnaHRQYXJ0Mi5hcHBlbmRDaGlsZChncmViSW1nKTtcblxuICAvLyBBcHBlbmRpbmcgYm90aCBzaWRlc1xuICBwYXJ0Mi5hcHBlbmRDaGlsZChsZWZ0UGFydDIpO1xuICBwYXJ0Mi5hcHBlbmRDaGlsZChyaWdodFBhcnQyKTtcblxuICAvLyBDcmVhdGluZyBwYXJ0IDNcbiAgY29uc3QgcGFydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJ0My5jbGFzc0xpc3QuYWRkKFwidGVybXNQYXJ0XCIpO1xuXG4gIC8vIENyZWF0aW5nIGxlZnQgcGFydFxuICBjb25zdCBsZWZ0UGFydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDMuY2xhc3NMaXN0LmFkZChcInRlcm1zUGFydExlZnRcIik7XG5cbiAgY29uc3QgbGVmdFBhcnQzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkdyZWJcIjtcblxuICBjb25zdCBsZWZ0UGFydDN1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0UGFydDN1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZUhhbGxlckhlYWRlclwiKTtcblxuICBjb25zdCBsZWZ0UGFydDNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQuY2xhc3NMaXN0LmFkZChcInRlcm1zVGV4dENvblwiKTtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDEuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDEudGV4dENvbnRlbnQgPVxuICAgIFwiU3RhdGlzazogRXIgbsOlciBtYW4ga2xhdHJlciBlbiBiYW5lIHN0aWxsZSBvZyByb2xpZ3QsIGh2b3IgbWFuIGFsdGlkIGhhciBmw7hkZGVyIG9nIGjDpm5kZXIgcMOlIGdyZWJlbmUuXCI7XG5cbiAgbGV0IGxlZnRQYXJ0M1RleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxlZnRQYXJ0M1RleHQyLmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIGxlZnRQYXJ0M1RleHQyLnRleHRDb250ZW50ID1cbiAgICBcIkR5bmFtaXNrOiBFciBodm9yIG1hbiBob3BwZXIgZnJhIGV0IGdyZWIgdGlsIGV0IGFuZGV0LCBvZyBww6UgZGVuIG3DpWRlIHNsaXBwZXIgYWx0IGtvbnRha3QgbWVkIGdyZWJlbmUgZm9yIGVuIHN0dW5kLlwiO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0My5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0My50ZXh0Q29udGVudCA9XG4gICAgXCJIZWVsaG9vazogT2dzw6Uga2FsZGV0IGjDpmxlaHVnLCBlciBodm9yIG1hbiBwbGFjZXJlciB1ZGVsdWtrZW5kZSBzaW4gaMOmbCBww6UgZXQgZ3JlYiwgZW50ZW4gZm9yIGF0IHRyw6Zra2Ugc2lnIG9wIGVsbGVyIGZvciBzdGFiaWxpdGV0LlwiO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0NC5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0NC50ZXh0Q29udGVudCA9XG4gICAgXCJLbmVlYmFyOiBFciBodm9yIG1hbiBmw7hyZXIgc2l0IGtuw6YgaW5kIG1lbGxlbSB0byBncmViIG9nIGLDuGplciBkZXQgdWQsIHRpbCBtYW4gc2lkZGVyIGkgc3DDpm5kLiBcIjtcblxuICBsZXQgbGVmdFBhcnQzVGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGVmdFBhcnQzVGV4dDUuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgbGVmdFBhcnQzVGV4dDUudGV4dENvbnRlbnQgPVxuICAgIFwiRmxhZzogRXIgYmV2w6ZnZWxzZW4gaHZvciBtYW4gc8OmdHRlciBzaWcgZm9kIGluZCB0aWwgZXQgcHVua3QgcMOlIHbDpmdnZW4sIGh2b3IgZGVyIGlra2UgZXIgcGxhY2VyZXQgZXQgZ3JlYi4gTWFuIGfDuHIgZGV0IGZvciBhdCBvcG7DpSBlbiBiZWRyZSBzdGFiaWxpdGV0LlwiO1xuXG4gIGxldCBsZWZ0UGFydDNUZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsZWZ0UGFydDNUZXh0Ni5jbGFzc0xpc3QuYWRkKFwibm90VGhpY2tUZXh0XCIpO1xuICBsZWZ0UGFydDNUZXh0Ni50ZXh0Q29udGVudCA9XG4gICAgXCJNYXRjaDogRXIgaHZvciBtYW4gZW50ZW4gc2FtbGVyIGJlZ2dlIGjDpm5kZXIgZWxsZXIgYmVnZ2UgZsO4ZGRlciBww6UgZGV0IHNhbW1lIGdyZWIuIERlbm5lIGJldsOmZ2Vsc2UgZm9yZWtvbW1lciBvZnRlIGZvcmRpIG1hbiBoYXIgYnJ1Z2UgZm9yIGF0IHNraWZ0ZSBow6VuZCBlbGxlciBmb2QuXCI7XG5cbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0MSk7XG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDIpO1xuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQzKTtcbiAgbGVmdFBhcnQzVGV4dC5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0NCk7XG4gIGxlZnRQYXJ0M1RleHQuYXBwZW5kQ2hpbGQobGVmdFBhcnQzVGV4dDUpO1xuICBsZWZ0UGFydDNUZXh0LmFwcGVuZENoaWxkKGxlZnRQYXJ0M1RleHQ2KTtcblxuICBsZWZ0UGFydDMuYXBwZW5kQ2hpbGQobGVmdFBhcnQzSGVhZGVyKTtcbiAgbGVmdFBhcnQzLmFwcGVuZENoaWxkKGxlZnRQYXJ0M3VuZGVybGluZSk7XG4gIGxlZnRQYXJ0My5hcHBlbmRDaGlsZChsZWZ0UGFydDNUZXh0KTtcblxuICAvLyBDcmVhdGluZyByaWdodCBwYXJ0XG4gIGNvbnN0IHJpZ2h0UGFydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodFBhcnQzLmNsYXNzTGlzdC5hZGQoXCJ0ZXJtc1BhcnRSaWdodFwiKTtcblxuICBjb25zdCBiZXZhZWdlbHNlSW1nID0gbmV3IEltYWdlKCk7XG4gIGJldmFlZ2Vsc2VJbWcuc3JjID0gYmV2YWVnZWxzZUltZ1NyYztcbiAgYmV2YWVnZWxzZUltZy5jbGFzc0xpc3QuYWRkKFwidGVybXNJbWdcIiwgXCJ0ZXJtc0ltZzNcIik7XG5cbiAgcmlnaHRQYXJ0My5hcHBlbmRDaGlsZChiZXZhZWdlbHNlSW1nKTtcblxuICAvLyBBcHBlbmRpbmcgYm90aCBzaWRlc1xuICBwYXJ0My5hcHBlbmRDaGlsZChsZWZ0UGFydDMpO1xuICBwYXJ0My5hcHBlbmRDaGlsZChyaWdodFBhcnQzKTtcblxuICAvLyBBcHBlbmRpbmcgYWxsXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nRnJhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBhcnQxKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYXJ0Mik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFydDMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGVybXM7XG4iLCJpbXBvcnQgcGFnZUNyZWF0ZXIgZnJvbSBcIi4vcGFnZUNyZWF0ZXJcIjtcblxubGV0IGN1cnJlbnRQYWdlQ2hlY2tlcjtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYWdlQ2hlY2tlclwiKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlQ2hlY2tlclwiLCBcImhvbWVcIik7XG4gIGN1cnJlbnRQYWdlQ2hlY2tlciA9IFwiaG9tZVwiO1xufSBlbHNlIHtcbiAgY3VycmVudFBhZ2VDaGVja2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGFnZUNoZWNrZXJcIik7XG59XG5cbmNvbnN0IGJ0bkFjdGl2YXRpb24gPSB7XG4gIHBhZ2VTd2l0Y2g6IChwYWdlKSA9PiB7XG4gICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUNyZWF0ZXIocGFnZSkpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlQ2hlY2tlclwiLCBwYWdlKTtcbiAgfSxcbn07XG5cbmNvbnN0IHN0YXJ0UGFnZSA9ICgpID0+IHtcbiAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKGN1cnJlbnRQYWdlQ2hlY2tlcik7XG59O1xuXG5leHBvcnQgeyBidG5BY3RpdmF0aW9uLCBzdGFydFBhZ2UgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzdGFydFBhZ2UgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbnN0YXJ0UGFnZSgpO1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWVwYWdlIGZyb20gXCIuL1BhZ2VzL2hvbWVwYWdlXCI7XG5pbXBvcnQgY3JlYXRlUHJpc3BhZ2UgZnJvbSBcIi4vUGFnZXMvcHJpc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbGRQYWdlIGZyb20gXCIuL1BhZ2VzL2hvbGRcIjtcbmltcG9ydCBjcmVhdGVIYWxsZXJwYWdlIGZyb20gXCIuL1BhZ2VzL2hhbGxlclwiO1xuaW1wb3J0IGNyZWF0ZUFhcmh1c05vcmQgZnJvbSBcIi4vUGFnZXMvaGFsbGVyL25vcmRcIjtcbmltcG9ydCBjcmVhdGVFdmVudHMgZnJvbSBcIi4vUGFnZXMvZXZlbnRzXCI7XG5pbXBvcnQgY3JlYXRlVGVybXMgZnJvbSBcIi4vUGFnZXMvdGVybXNcIjtcbmltcG9ydCBjcmVhdGVGaXJzdFRpbWVyIGZyb20gXCIuL1BhZ2VzL2ZpcnN0dGltZXJcIjtcblxuaW1wb3J0IHsgYnRuQWN0aXZhdGlvbiB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuLy8gSW1nXG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi9JbWcvYm91bGRlcnNMb2dvLnBuZ1wiO1xuaW1wb3J0IHRyYW5zTG9nbyBmcm9tIFwiLi9JbWcvdHJhbnNMb2dvLnBuZ1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuL0ltZy9tZW51SWNvbi5wbmdcIjtcblxuY29uc3QgcGFnZUNyZWF0ZXIgPSAocGFnZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYm9keUNvblwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDcmVhdGVyKHBhZ2UpKTtcblxuICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlzXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByaXNwYWdlKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhvbGRcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9sZFBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFsbGVyXCI6XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhhbGxlcnBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWFyaHVzTm9yZFwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYXJodXNOb3JkKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImV2ZW50c1wiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFdmVudHMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidGVybXNcIjpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGVybXMoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmlyc3R0aW1lclwiOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGaXJzdFRpbWVyKCkpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNyZWF0ZXIoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBtZW51Q3JlYXRlciA9ICgpID0+IHtcbiAgY29uc3QgbWVudUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb24uY2xhc3NMaXN0LmFkZChcIm1lbnVDb25cIik7XG5cbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IGxvZ29TcmM7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImJvdWxkZXJzTG9nb1wiKTtcblxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaG9tZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCYXIuY2xhc3NMaXN0LmFkZChcIm1lbnVCYXJcIik7XG5cbiAgY29uc3QgbWVudUJ0blByaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuUHJpcy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blByaXMudGV4dENvbnRlbnQgPSBcIlBSSVNcIjtcblxuICBtZW51QnRuUHJpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcInByaXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5IYWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QnRuSGFsbGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuSGFsbGVyLnRleHRDb250ZW50ID0gXCJIQUxMRVJcIjtcblxuICBtZW51QnRuSGFsbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiaGFsbGVyXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuRmlyc3R0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5GaXJzdHRpbWVyLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuRmlyc3R0aW1lci50ZXh0Q29udGVudCA9IFwiRsOYUlNURSBHQU5HP1wiO1xuXG4gIG1lbnVCdG5GaXJzdHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwiZmlyc3R0aW1lclwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkV2ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5FdmVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5FdmVudHMudGV4dENvbnRlbnQgPSBcIkVWRU5UU1wiO1xuXG4gIG1lbnVCdG5FdmVudHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJldmVudHNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG5Ib2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0bkhvbGQuY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIik7XG4gIG1lbnVCdG5Ib2xkLnRleHRDb250ZW50ID0gXCJIT0xEXCI7XG5cbiAgbWVudUJ0bkhvbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5BY3RpdmF0aW9uLnBhZ2VTd2l0Y2goXCJob2xkXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnRuVGVybWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUJ0blRlcm1lci5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgbWVudUJ0blRlcm1lci50ZXh0Q29udGVudCA9IFwiVEVSTVNcIjtcblxuICBtZW51QnRuVGVybWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQWN0aXZhdGlvbi5wYWdlU3dpdGNoKFwidGVybXNcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGxpbmtUb093blBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGlua1RvT3duUGFnZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9ib3VsZGVycy5kay9cIik7XG4gIGxpbmtUb093blBhZ2Uuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBsaW5rVG9Pd25QYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBsaW5rVG9Pd25QYWdlLnRleHRDb250ZW50ID0gXCJMaW5rIHRpbCBCb3VsZGVyc1wiO1xuXG4gIGxpbmtUb093blBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICAvLyBDcmVhdGluZyB0aGUgc2lkZSBiYXIgZm9yIHRoZSBtb3JlIGJ0blxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICBjb25zdCBzaWRlYmFyUmVtb3ZlQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyUmVtb3ZlQXJyb3cuY2xhc3NMaXN0LmFkZChcInNpZGViYXJSZW1vdmVBcnJvd1wiKTtcbiAgc2lkZWJhclJlbW92ZUFycm93LnRleHRDb250ZW50ID0gXCLinpRcIjtcblxuICBzaWRlYmFyUmVtb3ZlQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlYmFyLnN0eWxlLnJpZ2h0ID0gXCJtYXgoLTUwMHB4LCAtODB2dylcIjtcbiAgfSk7XG5cbiAgY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhck1lbnVcIik7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyUmVtb3ZlQXJyb3cpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICBjb25zdCBtZW51QnRuTWVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVCdG5NZXJlLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICBtZW51QnRuTWVyZS50ZXh0Q29udGVudCA9IFwiTUVSRVwiO1xuXG4gIGNvbnN0IGFwcGVuZFNpZGViYXJNZW51ID0gKHNpemUpID0+IHtcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtZW51Q29uLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgICAgd2hpbGUgKHNpZGViYXJNZW51LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhck1lbnUucmVtb3ZlQ2hpbGQoc2lkZWJhck1lbnUubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaXplID09IFwibGFyZ2VcIikge1xuICAgICAgICBtZW51QnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChsaW5rVG9Pd25QYWdlKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2lkZWJhci5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgfSk7XG4gIH07XG5cbiAgbWVudUJ0bk1lcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhcHBlbmRTaWRlYmFyTWVudShcInNtYWxsXCIpO1xuICB9KTtcblxuICBjb25zdCBtZW51SWNvbkJ0biA9IG5ldyBJbWFnZSgpO1xuICBtZW51SWNvbkJ0bi5zcmMgPSBtZW51SWNvbjtcbiAgbWVudUljb25CdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVJY29uQnRuXCIpO1xuXG4gIG1lbnVJY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYXBwZW5kU2lkZWJhck1lbnUoXCJsYXJnZVwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0bkFycmF5ID0gW1xuICAgIG1lbnVCdG5QcmlzLFxuICAgIG1lbnVCdG5Ib2xkLFxuICAgIG1lbnVCdG5IYWxsZXIsXG4gICAgbWVudUJ0bkZpcnN0dGltZXIsXG4gICAgbWVudUJ0bkV2ZW50cyxcbiAgICBtZW51QnRuVGVybWVyLFxuICAgIG1lbnVCdG5NZXJlLFxuICBdO1xuXG4gIGxldCBzbWFsbE1lbnUgPSAwO1xuICBsZXQgbGFyZ2VNZW51ID0gMDtcblxuICBjb25zdCBhcHBlbmRMYXJnZU1lbnUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKG1lbnVCYXIuZmlyc3RDaGlsZCkgbWVudUJhci5yZW1vdmVDaGlsZChtZW51QmFyLmxhc3RDaGlsZCk7XG4gICAgbWVudUJ0bkFycmF5LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgbWVudUJhci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFNtYWxsTWVudSA9ICgpID0+IHtcbiAgICB3aGlsZSAobWVudUJhci5maXJzdENoaWxkKSBtZW51QmFyLnJlbW92ZUNoaWxkKG1lbnVCYXIubGFzdENoaWxkKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uQnRuKTtcbiAgfTtcblxuICAvLyBDaGVja3MgaWYgdGhlIHdpbmRvdyBpIGxhcmdlIGVub3V0Z2hcbiAgaWYgKGlubmVyV2lkdGggPiAxMjAwKSB7XG4gICAgc21hbGxNZW51ID0gMDtcbiAgICBsYXJnZU1lbnUgPSAxO1xuICAgIGFwcGVuZExhcmdlTWVudSgpO1xuICB9IGVsc2Uge1xuICAgIHNtYWxsTWVudSA9IDE7XG4gICAgbGFyZ2VNZW51ID0gMDtcbiAgICBhcHBlbmRTbWFsbE1lbnUoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDEyMDApIHtcbiAgICAgIGlmIChsYXJnZU1lbnUgPT0gMCkge1xuICAgICAgICBhcHBlbmRMYXJnZU1lbnUoKTtcbiAgICAgICAgbGFyZ2VNZW51ID0gMTtcbiAgICAgICAgc21hbGxNZW51ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNtYWxsTWVudSA9PSAwKSB7XG4gICAgICAgIGFwcGVuZFNtYWxsTWVudSgpO1xuICAgICAgICBsYXJnZU1lbnUgPSAwO1xuICAgICAgICBzbWFsbE1lbnUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2Nyb2xsTWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChtZW51Q29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IC00MCkge1xuICAgICAgbWVudUNvbi5jbGFzc0xpc3QuYWRkKFwibWVudVNjcm9sbFwiKTtcbiAgICAgIGxvZ28uc3R5bGUuaGVpZ2h0ID0gXCIzMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVDb24uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVTY3JvbGxcIik7XG4gICAgICBsb2dvLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgIH1cbiAgfTtcblxuICBzY3JvbGxNZW51RnVuY3Rpb24oKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgc2Nyb2xsTWVudUZ1bmN0aW9uKCk7XG4gIH0pO1xuXG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1lbnVDb24uYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbiAgcmV0dXJuIG1lbnVDb247XG59O1xuXG5jb25zdCBmb290ZXJDcmVhdGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQ29uXCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSB0cmFuc0xvZ287XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImZvb3RlckxvZ29cIik7XG5cbiAgbG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkFjdGl2YXRpb24ucGFnZVN3aXRjaChcImhvbWVcIik7XG4gIH0pO1xuXG4gIC8vIENyZWF0aW5nIGZvb3RlciBjb250ZW50XG4gIGNvbnN0IGZvb3RlckJveENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckJveENvbi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQm94Q29uXCIpO1xuXG4gIGNvbnN0IHZvcmVzTWlzc2lvbkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHZvcmVzTWlzc2lvbkNvbi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyQm94XCIpO1xuXG4gIGxldCB2b3Jlc01pc3Npb25Db25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdm9yZXNNaXNzaW9uQ29uSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIHZvcmVzTWlzc2lvbkNvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiVm9yZXMgTWlzc2lvblwiO1xuXG4gIHZvcmVzTWlzc2lvbkNvbkhlYWRlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICBsZXQgdm9yZXNNaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB2b3Jlc01pc3Npb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJub3RUaGlja1RleHRcIik7XG4gIHZvcmVzTWlzc2lvblRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiVm9yZXMgbWlzc2lvbiBlciBhdCBmw6Ugc8OlIG1hbmdlIG1lbm5lc2tlciBzb20gbXVsaWd0LCB0aWwgYXQgbHVra2Ugw7hqbmVuZSBvcCBmb3Iga2xhdHJpbmcuIFZpIGVyIGhlciBmb3IgYXQgc2thYmUgZGVuIGdvZGUgb3BsZXZlbHNlIGZvciBkaWcgb2cgZGluZSB2ZW5uZXIgZWxsZXIgZmFtaWxpZSwgcMOlIGVuIHVuaWsgbcOlZGUsIGh2b3IgbWFuZyBiw6VkZSBrYW4gaGF2ZSBkZXQgc2pvdnQgb2cgdsOmcmUgYWt0aXYuXCI7XG4gIHZvcmVzTWlzc2lvblRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgdm9yZXNNaXNzaW9uVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gIHZvcmVzTWlzc2lvbkNvbi5hcHBlbmRDaGlsZCh2b3Jlc01pc3Npb25Db25IZWFkZXIpO1xuICB2b3Jlc01pc3Npb25Db24uYXBwZW5kQ2hpbGQodm9yZXNNaXNzaW9uVGV4dCk7XG5cbiAgY29uc3Qga29udGFrdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtvbnRha3RDb24uY2xhc3NMaXN0LmFkZChcImZvb3RlckJveFwiKTtcblxuICBsZXQga29udGFrdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrb250YWt0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIik7XG4gIGtvbnRha3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIktvbnRha3RcIjtcbiAga29udGFrdEhlYWRlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZW1haWwuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiLCBcImZvb3Rlck1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2JvdWxkZXJzLmRrL2tvbnRha3RcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcIk1haWw6IFNlbmQgZW4gbWFpbFwiO1xuXG4gIGxldCB0ZWxlZm9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbGVmb24uY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgdGVsZWZvbi50ZXh0Q29udGVudCA9IFwiVGVsOiA3MjEwMDAxOVwiO1xuICB0ZWxlZm9uLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJUZWxcIik7XG5cbiAgbGV0IGFkcmVzc2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRyZXNzZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGhpY2tUZXh0XCIpO1xuICBhZHJlc3NlSGVhZGVyLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gIGFkcmVzc2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkcmVzc2VcIjtcblxuICBsZXQgYWRyZXNzZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRyZXNzZVRleHQuY2xhc3NMaXN0LmFkZChcIm5vdFRoaWNrVGV4dFwiKTtcbiAgYWRyZXNzZVRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgYWRyZXNzZVRleHQudGV4dENvbnRlbnQgPSBcIkdyYWhhbSBCZWxscyBWZWogMThBLCA4MjAwIEFhcmh1cyBOLCBEYW5tYXJrXCI7XG4gIGFkcmVzc2VUZXh0LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAga29udGFrdENvbi5hcHBlbmRDaGlsZChrb250YWt0SGVhZGVyKTtcbiAga29udGFrdENvbi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQodGVsZWZvbik7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQoYWRyZXNzZUhlYWRlcik7XG4gIGtvbnRha3RDb24uYXBwZW5kQ2hpbGQoYWRyZXNzZVRleHQpO1xuXG4gIGZvb3RlckJveENvbi5hcHBlbmRDaGlsZChrb250YWt0Q29uKTtcbiAgZm9vdGVyQm94Q29uLmFwcGVuZENoaWxkKHZvcmVzTWlzc2lvbkNvbik7XG5cbiAgLy8gQXBwZW5kaW5nXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQm94Q29uKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmNsYXNzIGRpc3BsYXlMaW5rIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW1nU3JjLCBsaW5rKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltZ1NyYyA9IGltZ1NyYztcbiAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICB9XG4gIGVsID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImhvbGRJbWdGcmFtZVwiKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMubGluayk7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gICAgY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBiZy5zcmMgPSB0aGlzLmltZ1NyYztcbiAgICBiZy5jbGFzc0xpc3QuYWRkKFwiaG9sZEJnSW1nXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGlja1RleHRcIiwgXCJob2xkSW1nSGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgIGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMubGluayk7XG4gICAgbGlua0VsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBsaW5rRWwuY2xhc3NMaXN0LmFkZChcInRoaWNrVGV4dFwiLCBcImhvbGRMaW5rRWxcIik7XG4gICAgbGlua0VsLnRleHRDb250ZW50ID0gXCJMaW5rIHRpbCBCb3VsZGVycy5ka1wiO1xuXG4gICAgZWwuYXBwZW5kQ2hpbGQoYmcpO1xuICAgIGVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblxuICAgIHJldHVybiBlbDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUNyZWF0ZXI7XG5leHBvcnQgeyBkaXNwbGF5TGluayB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9