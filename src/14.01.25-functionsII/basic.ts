console.log("Hallo Tag, This is 14.1.25");
console.log("Funktionen II.");
console.warn("LiveCoding");
// ! LiveCoding

function add100(num: number): number {
  return num + 100;
}
add100(30);
console.log(add100(30));

//? klassische Funktionsdeklarierung
function meineFunktion(parameter: string) {
  console.log(parameter);
}
// Aufuf der Funktion
meineFunktion("Hai");

//? arrow Funktion mit {}
const greet = (name: string) => {
  console.log(`Hello ${name}`);
};
// Aufruf der Arrow Funktion
greet("Lila");

//? arrow Funktion mit implizietem return
const square = (num: number) => num * num;
// return auf der rechten Seite direkt dabei
// nur einzelig möglich
console.log(square(4));

//? functions als Rückgabewert

// function makeGreeter(name: string) {
//   return function () {
//     console.log(`hi there ${name}`);
//   };
// }
//  const magdaGreeter = makeGreeter("Magda");

//? Funktionen höherer Ordnung

const array = [1, 2, 3, 4, 5];

const squarredArray = array.map(square);
console.log(squarredArray);

// * Call Back Funktion

const button = document.querySelector<HTMLButtonElement>("#button");
const callbackFn = function () {
  console.log("button was clicked");
};
if (button) {
  button.addEventListener("click", callbackFn);
}

// ! Übungen
console.warn("Übungen");
console.log("Functions-TS-Grundlagen-Level-1_2");
//? function, die "hallo" im HMTL ausgibt
//? function, die zwei Zahlen im HTML ausgibt
//? function, die die vorherigen zwei zahlen multipliziert und im HTML ausgibt
//? function mit Parameter typ object, die alle keys des objects in der Console ausgibt
//? --> dann alle in arrow Schreibweise umformen

// ? function 1

// select elements
const outputHalloElement = document.querySelector<HTMLDivElement>("#output-1");

//if schleife und funktion

// function sayHelloInHtml() {
//   if (outputHalloElement) {
//     const newParagraphElement = document.createElement("p");
//     newParagraphElement.textContent = `Hello`;
//     outputHalloElement?.appendChild(newParagraphElement);
//   }
// }
// sayHelloInHtml();

const sayHelloInHtml = () => {
  if (outputHalloElement) {
    outputHalloElement.textContent = `Hello`;
  }
};
sayHelloInHtml();

//? function 2
// select elements

const numberOneOutputElement =
  document.querySelector<HTMLDivElement>("#output-2");
const numberTwoOutputElement =
  document.querySelector<HTMLDivElement>("#output-2");

// if Schleife und function

// function showTwoNumbers(number1: number, number2: number) {
//   if (numberOneOutputElement && numberTwoOutputElement) {
//     const numberOutputOne = document.createElement("p");
//     const numberOutputTwo = document.createElement("p");

//     numberOutputOne.textContent = `${number1}`;
//     numberOutputTwo.textContent = `${number2}`;

//     numberOneOutputElement?.appendChild(numberOutputOne);
//     numberTwoOutputElement?.appendChild(numberOutputTwo);
//   }
// }

const showTwoNumbers = (number1: number, number2: number) => {
  if (numberOneOutputElement && numberTwoOutputElement) {
    const numberOutputOne = document.createElement("p");
    const numberOutputTwo = document.createElement("p");

    numberOutputOne.textContent = `${number1}`;
    numberOutputTwo.textContent = `${number2}`;

    numberOneOutputElement?.appendChild(numberOutputOne);
    numberTwoOutputElement?.appendChild(numberOutputTwo);
  }
};
showTwoNumbers(
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)
);

// ? function 3

// select elements

const multiplyOutputElement =
  document.querySelector<HTMLDivElement>("#output-4");

// if schleife und function

// function multiplyTwoNumbers(number1: number, number2: number) {
//   if (multiplyOutputElement) {
//     const mulSum = number1 * number2;
//     multiplyOutputElement.textContent = `${mulSum}`;
//     return mulSum;
//   }
// }

const multiplyTwoNumbers = (number1: number, number2: number) => {
  if (multiplyOutputElement) {
    const mulSum = number1 * number2;
    multiplyOutputElement.textContent = `${mulSum}`;
    return mulSum;
  }
};

multiplyTwoNumbers(
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)
);

//? function 4
const birdObject = { name: "tit", body: "round" };

// function logObjectProperties(object: object) {
//   console.log(Object.keys(object));
// }
// logObjectProperties(birdObject);

const logObjectProperties = (object: object) => {
  console.log(Object.keys(object));
};

logObjectProperties(birdObject);

// * Functions-TS-Level-1_6

//? Funktionen mit Default-Parametern
// type definieren
// function, die ein monster erzeugt und zurückgibt --> return
// name und type müssen an die Funktion übergeben werden --> default für health = 100, strenght = 50, speed = 25

type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};

function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  return { name, type, health, strength, speed };
}

const monster1 = createMonster("Clue", "one");
console.log("Monster 1:");
console.log(monster1);

const monster2 = createMonster("Grete", "two", 200, 80, 10);
console.log("Monster 2:");
console.log(monster2);

const monster3 = createMonster("Björn", "three", 89, 120, 50);
console.log("Monster three:");
console.log(monster3);

const monster4 = createMonster("Kit", "four", 120, 100, 20);
console.log("Monster four:");
console.log(monster4);

// * Functions-TS-Level-3_1
console.log("Functions-TS-Level-3_1");
// function, die jeweils background und Schriftfarbe verändern mit den farben des geglickten circles

//elemente selectieren
//circle
const circle1 = document.querySelector<HTMLDivElement>("#circle-1");
const circle2 = document.querySelector<HTMLDivElement>("#circle-2");
const circle3 = document.querySelector<HTMLDivElement>("#circle-3");
const circle4 = document.querySelector<HTMLDivElement>("#circle-4");
//background
const background1 = document.querySelector<HTMLDivElement>("#background1");
// headline
const headline = document.querySelector<HTMLHeadingElement>("#headline1");
// resetButton
const resetButton = document.querySelector<HTMLButtonElement>("#reset-button");

// if schleife und addEventListeners für die circle und den reset button
if (
  circle1 &&
  circle2 &&
  circle3 &&
  circle4 &&
  background1 &&
  headline &&
  resetButton
) {
  circle1.addEventListener("click", function () {
    background1.style.backgroundColor = "#319b5e";
    headline.style.color = "#79096a";
    resetButton.style.color = "#79096a";
    resetButton.style.borderColor = "#79096a";
  });
  circle2.addEventListener("click", function () {
    background1.style.backgroundColor = "#4f4c7b";
    headline.style.color = "#dfb74c";
    resetButton.style.color = "#dfb74c";
    resetButton.style.borderColor = "#dfb74c";
  });
  circle3.addEventListener("click", function () {
    background1.style.backgroundColor = "#010023";
    headline.style.color = "#cf6b0b";
    resetButton.style.color = "#cf6b0b";
    resetButton.style.borderColor = "#cf6b0b";
  });
  circle4.addEventListener("click", function () {
    background1.style.backgroundColor = "#07065d";
    headline.style.color = "#43d4fe";
    resetButton.style.color = "#43d4fe";
    resetButton.style.borderColor = "#43d4fe";
  });
  resetButton.addEventListener("click", function () {
    background1.style.backgroundColor = "#ecd9cb";
    headline.style.color = "#123813";
    resetButton.style.color = "#123813";
    resetButton.style.borderColor = "#123813";
  });
}
