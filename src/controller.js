import pageCreater from "./pageCreater";

const btnActivation = {
  pageSwitch: (page) => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.lastChild);
    }
    document.body.appendChild(pageCreater(page));
    window.scrollTo(0, 0);
  },
};

export { btnActivation };
