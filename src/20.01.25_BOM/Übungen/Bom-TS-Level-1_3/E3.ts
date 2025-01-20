console.log("Bom-TS-Level-1_3");
// * Bom-TS-Level-1_3
//? Function, die Daten aus dem Browser in die Dom schreibt

//? select elements

const bomOutputElement = document.querySelector<HTMLDivElement>("#bom-output");

function writeBomElementsInDom() {
  if (bomOutputElement) {
    bomOutputElement.innerHTML = `<p>Browsername : ${window.navigator.userAgent.slice(
      0,
      7
    )}</p> 
    <p>Version : ${window.navigator.userAgent.slice(8)} </p>
    <p>Betriebssystem-Architektur : ${window.navigator.userAgent.slice(
      13,
      48
    )}</p>
    <p>Die verfügbare Höhe in Pixeln : ${
      window.screen.availHeight
    }, die verfügbare Breite in Pixeln: ${window.screen.availWidth}</p>
    <p>Die colorDepth : ${window.screen.colorDepth}</p>
    <p>Die pixelDepth : ${window.screen.pixelDepth}</p>`;
  }
}

writeBomElementsInDom();
