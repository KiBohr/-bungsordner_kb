// //? select Elements
const birdZone = document.querySelector<HTMLDivElement>("#the-bird-zone");

type Bird = {
  name: string;
  latinName: string;
  url: string;
};

// //? fetch()
fetch("https://stfnsr-birdmeister.web.val.run/birds")
  // falls Daten zurueckkommen, wird das .then-callback aufgerufen
  .then((response) => response.json())
  // response.json() packt den eigentlich inhalt der antwort aus
  // wir erhalten das ergebnis, sobald es fertig ist, als parameter im naechsten then
  .then((data: Bird[]) => {
    // wir muessen hier einen Typ fuer data angeben, da Typescript nicht weiß was von der API zurückkommen wird

    // ! wuerde es hier zu einem Fehler kommen, wuerde dieser im .catch callback abgefangen, und wir koennten angemessen darauf reagieren
    // throw new Error("KAPUUUUUUTT ")

    renderBirds(data);

    // so ungefaehr koennen wir spaeter detailinformationen abholen
    // data.forEach((bird) => {
    //   fetch(bird.url)
    //     .then((response) => response.json())
    //     .then((birdDetails) => {console.log(birdDetails)});
    // });
  })
  .catch((error) => {
    // hier koennen wir auf fehler reagieren, z.B.
    // - In UI einen Button "Try again" zeigen
    // - automatisch neu versuchen
    // - Fehler in eine Logging-Datei schreiben
    console.error(error);
  });

// hiermit werden die daten in der DOM dargestellt
function renderBirds(birds: Bird[]) {
  birds.forEach((bird) => {
    if (birdZone) {
      birdZone.innerHTML += `
            <div class="shadow-md p-6 rounded-md  bg-red-50">
                <h3>${bird.name}</h3>
                <em>${bird.latinName}</em>
            </div>
        `;
    }
  });
}
