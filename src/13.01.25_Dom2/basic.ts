// ! LiveCode
//* mouseover - when hovered
const hoverMeElement =
  document.querySelector<HTMLParagraphElement>("#hover-me");

if (hoverMeElement) {
  hoverMeElement.addEventListener("mouseover", function () {
    console.log("Hovering!");
  });
}
// * mouseout - when not hovered anymore
if (hoverMeElement) {
  hoverMeElement.addEventListener("mouseout", function () {
    console.log("Stopped Hovering!");
  });
}

// * counter

const counterButton =
  document.querySelector<HTMLButtonElement>("#counter-button");

let counter = 0;

if (counterButton) {
  counterButton.addEventListener("click", function () {
    counter++;
    counterButton.textContent = `Count is: ${counter}`;
  });
}

// * filtern

const blueThings = ["🖌️", "🦕", "🫐"];

const selectElement =
  document.querySelector<HTMLSelectElement>("#bower-select");
const addButton = document.querySelector("#bower-add-button");
const nestElement = document.querySelector("#bower-nest");
const trashElement = document.querySelector("#bower-trash");

if (selectElement && addButton && nestElement && trashElement) {
  addButton.addEventListener("click", function () {
    const selectedThing = selectElement.value;
    const isThingBlue = blueThings.includes(selectedThing);

    const newElement = document.createElement("span");
    newElement.textContent = selectedThing;
    if (isThingBlue) {
      nestElement.appendChild(newElement);
    } else {
      trashElement.appendChild(newElement);
    }
  });
}

// ! Übungen
console.log("ÜBUNGEN");
// *Dom-Elements-TS-Level-1_3
console.log("Dom-Elements-TS-Level-1_3");
// select all buttons:
const button1 = document.querySelector<HTMLButtonElement>("#btn1");
const button2 = document.querySelector<HTMLButtonElement>("#btn2");
const button3 = document.querySelector<HTMLButtonElement>("#btn3");
const button4 = document.querySelector<HTMLButtonElement>("#btn4");
// select output
const output = document.querySelector("#output");
// select list
const list = document.querySelector<HTMLDListElement>("#myList");

if (button1 && button2 && button3 && button4 && output && list) {
  button1.addEventListener("click", function () {
    const firstListText = list.firstElementChild?.textContent ?? null;
    output.textContent = firstListText;
  });

  button2.addEventListener("click", function () {
    const lastListText = list.lastElementChild?.textContent ?? null;
    output.textContent = lastListText;
  });

  button3.addEventListener("click", function () {
    const secondListText =
      list.firstElementChild?.nextElementSibling?.textContent ?? null;
    output.textContent = secondListText;
  });

  button4.addEventListener("click", function () {
    const penultimateListText =
      list.lastElementChild?.previousElementSibling?.textContent ?? null;
    output.textContent = penultimateListText;
  });
}

// * Dom-Elements-TS-Level-1_9
console.log("Dom-Elements-TS-Level-1_9");
// function, die das aus der Liste gewählte ELement wieder entfernt --> basically ein reset knopf?

// select elements

const removeButton = document.querySelector<HTMLButtonElement>("#button");

const selectColor =
  document.querySelector<HTMLSelectElement>("#farbeAuswahlen");

if (removeButton && selectColor) {
  removeButton.addEventListener("click", function () {
    const selectedColor = selectColor.selectedIndex;
    selectColor.remove(selectedColor);
  });
}

// * Dom-Elements-TS-Level-2_2
console.log("Dom-Elements-TS-Level-2_2");

// function, die die Form-Werte onclick in der Console ausgibt --> dann die Werte in ein Object speichert

// select elements
const submitButton = document.querySelector<HTMLButtonElement>("#submit");

const firstNameElement =
  document.querySelector<HTMLInputElement>("#first-name");

const lastNameElement = document.querySelector<HTMLInputElement>("#last-name");

const landList = document.querySelector<HTMLSelectElement>("#land");

// create type
// type SimplePerson = [string, string, string];
type SimplePerson = {
  firstName: string;
  lastName: string;
  land: string;
};

if (submitButton && firstNameElement && lastNameElement && landList) {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // event muss als Parameter in die Funktion und preventDefault braucht noch () um zu funktionieren
    const firstNameValue = firstNameElement.value;
    const lastNameValue = lastNameElement.value;
    const landValue = landList.value;

    const person: SimplePerson = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      land: landValue,
    };
    console.log(person);
  });
}
// * Dom-Elements-TS-Level-2_4
console.log("Dom-Elements-TS-Level-2_4");
// function, die die ausgewählte Farboption auf den bg des articles anwendet

// select elements

const colorButton = document.querySelector<HTMLButtonElement>("#button2");

const colorOptionsElement =
  document.querySelector<HTMLSelectElement>("#colorChoice");

const background = document.querySelector<HTMLElement>(
  "#background-to-be-colored"
);

// if Abfrage + addEventListener()

if (colorButton && colorOptionsElement && background) {
  colorButton.addEventListener("click", function (event) {
    event.preventDefault();
    const selectedColor = colorOptionsElement.value;

    //Leerzeichen entfernen und alles lowercase, damit die Namen als Farbnamen beim styling verwendet werden können
    //? sorry für die namen :o
    const selectedColorWithoutSpace = selectedColor.replaceAll(" ", "");

    const selectedColorWithoutSpaceAndLowerCase =
      selectedColorWithoutSpace.toLowerCase();

    background.style.backgroundColor = selectedColorWithoutSpaceAndLowerCase;
  });
}
