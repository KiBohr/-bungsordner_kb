console.warn("Project-TS Panini Sammlerkarten");
//* Project-TS Panini Sammlerkarten

//?select elements
// ?input elements
const nameInputElement = document.querySelector<HTMLInputElement>("#name");

const typeInputElement = document.querySelector<HTMLInputElement>("#element");

const attackInputElement = document.querySelector<HTMLInputElement>("#attack");

const healthPInputElement =
  document.querySelector<HTMLInputElement>("#health-points");

const attackPInputElement =
  document.querySelector<HTMLInputElement>("#health-points");

const resistanceInputElement =
  document.querySelector<HTMLInputElement>("#resistance");

const weeknessInputElement =
  document.querySelector<HTMLInputElement>("#weekness");

const urlInputElement = document.querySelector<HTMLInputElement>("#url");

//? select output element

const outputElement =
  document.querySelector<HTMLDivElement>("#cards-container");

// ?select button
const createButton = document.querySelector<HTMLButtonElement>("#create");

//? create type
type Pokemon = {
  name: string;
  type: string;
  mainAttack: string;
  healthPoints: number;
  attackPoints: number;
  resistance: string;
  weekness: string;
};

if (
  nameInputElement &&
  typeInputElement &&
  attackInputElement &&
  healthPInputElement &&
  attackPInputElement &&
  resistanceInputElement &&
  weeknessInputElement &&
  urlInputElement &&
  createButton &&
  outputElement
) {
  createButton.addEventListener("click", function (event) {
    event.preventDefault();
    // get values from inputs
    const nameValue = nameInputElement.value;
    const typeValue = typeInputElement.value;
    const attackValue = attackInputElement.value;
    const healthPValue = Number(healthPInputElement.value);
    const attackPValue = Number(attackPInputElement.value);
    const resistanceValue = resistanceInputElement.value;
    const weeknessValue = weeknessInputElement.value;
    const urlValue = urlInputElement.value;

    // die Basis der Card
    let aCard: Pokemon = {
      name: nameValue,
      type: typeValue,
      mainAttack: attackValue,
      healthPoints: healthPValue,
      attackPoints: attackPValue,
      resistance: resistanceValue,
      weekness: weeknessValue,
    };
    console.log(aCard);

    let newOutputelement = document.createElement("div");

    newOutputelement.innerHTML = `
    <img class="h-[15rem] border-2 border-burnt-red" href="${urlValue}">

    <p class="text-[1.2rem] font-bold">${aCard.name}</p>
                        
    <div class="flex gap-[2vw]">
        <p>${aCard.type}</p>
        <p>${aCard.mainAttack}</p> 
    </div>
    
    <div class="flex gap-[2vw]">
        <p>${aCard.healthPoints}</p>
        <p>${aCard.attackPoints}</p> 
    </div>
                        
    <div class="flex gap-[2vw]">
        <p>${aCard.resistance}</p>
        <p>${aCard.weekness}</p> 
    </div>`;

    outputElement.appendChild(newOutputelement);
  });
}
