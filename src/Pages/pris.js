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

export default createPrispage;
