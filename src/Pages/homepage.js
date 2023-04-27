import homepageBgSrc from "../Img/bouldersBg.jpg";

const createHomepage = () => {
  const content = document.createElement("div");
  content.classList.add("homepageCon");

  const homepageBgFrame = document.createElement("div");
  homepageBgFrame.classList.add("homepageBgImg");

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

export default createHomepage;
