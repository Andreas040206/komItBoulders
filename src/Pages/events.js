import { displayLink } from "../pageCreater";

// Img
import lateNightBoulderingImgSrc from "../Img/lateNightBouldering.jpg";
import studentFridayImgSrc from "../Img/studentFriday.png";
import climbathonImgSrc from "../Img/climathon.jpg";
import sunnySaturdayImgSrc from "../Img/sunnySaturday.jpg";

const createEvents = () => {
  const content = document.createElement("div");
  content.classList.add("contentCon");

  const lateNightBouldering = new displayLink(
    "Late Night Bouldering",
    lateNightBoulderingImgSrc,
    "https://boulders.dk/lnb"
  );

  const studentFriday = new displayLink(
    "Student Friday",
    studentFridayImgSrc,
    "https://boulders.dk/studentfriday"
  );

  const climbathon = new displayLink(
    "Climbathon",
    climbathonImgSrc,
    "https://boulders.dk/climbathon"
  );

  const sunnySaturday = new displayLink(
    "Sunny Saturday",
    sunnySaturdayImgSrc,
    "https://boulders.dk/sunnysaturday"
  );

  content.appendChild(lateNightBouldering.el());
  content.appendChild(studentFriday.el());
  content.appendChild(climbathon.el());
  content.appendChild(sunnySaturday.el());

  return content;
};

export default createEvents;
