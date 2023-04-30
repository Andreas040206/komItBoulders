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

export default createHomepage;
