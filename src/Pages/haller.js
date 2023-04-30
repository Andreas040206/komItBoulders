import { displayLink } from "../pageCreater";
import { btnActivation } from "../controller";

import aarhusNordImgSrc from "../Img/aarhusNord.jpg";
import aarhusCityImgSrc from "../Img/aarhusCity.jpg";
import odenseImgSrc from "../Img/odense.jpeg";
import aarhusSydImgSrc from "../Img/aarhusSyd.jpg";
import hvidovreImgSrc from "../Img/hvidovre.jpg";
import kbhSydhavnImgSrc from "../Img/kbhSydhavn.jpg";
import valbyImgSrc from "../Img/valby.jpg";

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
    btnActivation.pageSwitch("aarhusNord");
  });

  const aarhusNordEl = document.createElement("a");
  aarhusNordEl.classList.add("holdImgFrame");

  const aarhusNordBg = new Image();
  aarhusNordBg.src = aarhusNordImgSrc;
  aarhusNordBg.classList.add("holdBgImg");

  const header = document.createElement("span");
  header.classList.add("thickText", "holdImgHeader");
  header.textContent = "Aarhus Nord";

  aarhusNordEl.appendChild(aarhusNordBg);
  aarhusNordEl.appendChild(header);

  aarhusNordCon.appendChild(aarhusNordEl);

  const aarhusCityCon = document.createElement("a");
  aarhusCityCon.classList.add("hallerFrame");

  const aarhusCityLink = new displayLink(
    "Aarhus City",
    aarhusCityImgSrc,
    "https://boulders.dk/aarhusc"
  );

  aarhusCityCon.appendChild(aarhusCityLink.el());

  const odenseLinkCon = document.createElement("div");
  odenseLinkCon.classList.add("hallerFrame");

  const odenseLink = new displayLink(
    "Odense",
    odenseImgSrc,
    "https://boulders.dk/odense"
  );

  odenseLinkCon.appendChild(odenseLink.el());

  const aarhusSydCon = document.createElement("div");
  aarhusSydCon.classList.add("hallerFrame");

  const aarhusSydLink = new displayLink(
    "Aarhus Syd",
    aarhusSydImgSrc,
    "https://boulders.dk/aarhussyd"
  );

  aarhusSydCon.appendChild(aarhusSydLink.el());

  const hvidovreCon = document.createElement("div");
  hvidovreCon.classList.add("hallerFrame");

  const hvidovreLink = new displayLink(
    "KBH Sydhavn",
    hvidovreImgSrc,
    "https://boulders.dk/hvidovre"
  );

  hvidovreCon.appendChild(hvidovreLink.el());

  const kbhSydhavnCon = document.createElement("div");
  kbhSydhavnCon.classList.add("hallerFrame");

  const kbhSydhavnLink = new displayLink(
    "Hvidovre",
    kbhSydhavnImgSrc,
    "https://boulders.dk/kbhsydhavn"
  );

  kbhSydhavnCon.appendChild(kbhSydhavnLink.el());

  const valbyCon = document.createElement("div");
  valbyCon.classList.add("hallerFrame");

  const valbyLink = new displayLink(
    "Hvidovre",
    valbyImgSrc,
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

export default createHallerpage;
