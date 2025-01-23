console.warn("fetch-level-3_1");
// * Lernziel: Daten von einer freien API abholen und im HTML darstellen

//? select output area
const outputContainer = document.querySelector("#output-area1");

//? fetch API

const characterResponse = await fetch(
  "https://rickandmortyapi.com/api/character/26"
);

// console.log(characterResponse);

type Character = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
};

const characterData: Character = await characterResponse.json();
// console.log(characterData);

function putCharcterInDom(): void {
  if (outputContainer) {
    const newDivElement = document.createElement("div");
    newDivElement.innerHTML = `
       <p class="text-xl">${characterData.name} </p>
       <p> gender: ${characterData.gender} </p>
       <p> type: ${characterData.type} </p>
       <p> orirgin: ${characterData.origin.name} </p>
       `;
    outputContainer.appendChild(newDivElement);
  }
}

putCharcterInDom();
