import introHoldImgSrc from "../Img/bouldersIntroHold.jpg";
import fortsaetterholdSrc from "../Img/bouldersFortsaetterhold.jpg";
import langvarigtholdSrc from "../Img/langvarigthold.jpg";
import boerneholdSrc from "../Img/boernehold.jpg";
import summercampholdSrc from "../Img/summercamphold.jpg";

import { displayLink } from "../pageCreater";

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

  const introhold = new displayLink(
    "Intro Hold",
    introHoldImgSrc,
    "https://boulders.dk/intro"
  );

  const fortsaetterhold = new displayLink(
    "Fortsætter Hold",
    fortsaetterholdSrc,
    "https://boulders.dk/intermediate"
  );

  const langvarigthold = new displayLink(
    "Langvarigt Hold",
    langvarigtholdSrc,
    "https://boulders.dk/inthezone"
  );

  const boernehold = new displayLink(
    "Børne Hold",
    boerneholdSrc,
    "https://boulders.dk/boernehold"
  );

  const summercamphold = new displayLink(
    "Summer Camp",
    summercampholdSrc,
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

export default createHoldPage;
