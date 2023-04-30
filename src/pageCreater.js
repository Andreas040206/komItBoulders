import createHomepage from "./Pages/homepage";
import createPrispage from "./Pages/pris";
import createHoldPage from "./Pages/hold";
import createHallerpage from "./Pages/haller";
import createAarhusNord from "./Pages/haller/nord";
import createEvents from "./Pages/events";

import { btnActivation } from "./controller";

// Img
import logoSrc from "./Img/bouldersLogo.png";
import menuIcon from "./Img/menuIcon.png";

const pageCreater = (page) => {
  const content = document.createElement("div");
  content.classList.add("bodyCon");

  content.appendChild(menuCreater(page));

  switch (page) {
    case "home":
      content.appendChild(createHomepage());
      break;
    case "pris":
      content.appendChild(createPrispage());
      break;
    case "hold":
      content.appendChild(createHoldPage());
      break;
    case "haller":
      content.appendChild(createHallerpage());
      break;
    case "aarhusNord":
      content.appendChild(createAarhusNord());
      break;
    case "events":
      content.appendChild(createEvents());
      break;
  }

  return content;
};

const menuCreater = (page) => {
  const menuCon = document.createElement("div");
  menuCon.classList.add("menuCon");

  const logo = new Image();
  logo.src = logoSrc;
  logo.classList.add("bouldersLogo");

  logo.addEventListener("click", () => {
    btnActivation.pageSwitch("home");
  });

  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");

  const menuBtnPris = document.createElement("div");
  menuBtnPris.classList.add("menuBtn");
  menuBtnPris.textContent = "PRIS";

  menuBtnPris.addEventListener("click", () => {
    btnActivation.pageSwitch("pris");
  });

  const menuBtnHaller = document.createElement("div");
  menuBtnHaller.classList.add("menuBtn");
  menuBtnHaller.textContent = "HALLER";

  menuBtnHaller.addEventListener("click", () => {
    btnActivation.pageSwitch("haller");
  });

  const menuBtnFirsttimer = document.createElement("div");
  menuBtnFirsttimer.classList.add("menuBtn");
  menuBtnFirsttimer.textContent = "FØRSTE GANG?";

  menuBtnFirsttimer.addEventListener("click", () => {});

  const menuBtnEvents = document.createElement("div");
  menuBtnEvents.classList.add("menuBtn");
  menuBtnEvents.textContent = "EVENTS";

  menuBtnEvents.addEventListener("click", () => {
    btnActivation.pageSwitch("events");
  });

  const menuBtnHold = document.createElement("div");
  menuBtnHold.classList.add("menuBtn");
  menuBtnHold.textContent = "HOLD";

  menuBtnHold.addEventListener("click", () => {
    btnActivation.pageSwitch("hold");
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
  menuIconBtn.src = menuIcon;
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

export default pageCreater;
export { displayLink };
