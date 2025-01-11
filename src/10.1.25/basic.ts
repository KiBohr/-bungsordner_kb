console.log("Hi Friday");

// ! LiveCode

// // function factorial(num: number): number {
// //   let result = 1;

// //   for (let i = num; i >= 1; i--) {
// //     result *= i;
// //   }
// //   console.log(`Factorial of ${num} is ${result}.`);
// //   return result;
// // }

// // factorial(8);

// // // andere Möglichekeit

// // function factorial1(num: number): number {
// //   if (num === 0) {
// //     return 1;
// //   } else {
// //     return num * factorial1(num - 1);
// //   }
// // }

// // factorial1(8);

// // * Dom

// const paragraph = document.getElementById("paragraph");

// const themeSwitchRed = document.querySelector("#themes-switch-red");

// themeSwitchRed.addEventListener("click", function () {
//   const body = document.querySelector("body");

//   body?.classList.toggle("theme-red");
// });

// const themeSwitchYel = document.querySelector("#themes-switch-yel");

// themeSwitchYel.addEventListener("click", function () {
//   const body = document.querySelector("body");

//   body?.classList.toggle("theme-yellow");
// });

// //? shopping list

// const shoppingBtn =
//   document.querySelector<HTMLButtonElement>("#shopping-button");
// const shoppingInput =
//   document.querySelector<HTMLInputElement>("#shopping-input");
// const shoppingList = document.querySelector("#shopping-list");

// const listDelete = document.querySelector("#shopping-delet");

// if (shoppingBtn && shoppingInput && shoppingList && listDelete) {
//   shoppingBtn.addEventListener("click", function () {
//     event?.preventDefault();
//     const inputValue = shoppingInput.value;

//     const newListElement = document.createElement("li");

//     newListElement.textContent = inputValue;

//     shoppingList.appendChild(newListElement);

//     shoppingInput.value = ""; // damit nach dem Eintragen, das Input feld wieder leer ist
//   });

//   listDelete.addEventListener("click", function () {
//     const elements = shoppingList.children;

//     for (const element of elements) {
//       element.remove();
//     }
//   });
// }

// ! Übungen
console.log("Übungen:");
// * DOM-TS_Level-1_4
console.log("DOM-TS_Level-1_4:");

// elemente holen
const textButton = document.querySelector<HTMLButtonElement>("#text-button");

const textInput = document.querySelector<HTMLInputElement>("#input-text");

const textOutput = document.querySelector<HTMLParagraphElement>("#output-text");

// aktuellen Zeitstempel holen

let nowDate = new Date();

if (textButton && textInput && textOutput) {
  textButton?.addEventListener("click", function () {
    let inputValue = textInput.value;

    const newPElement = document.createElement("p");

    newPElement.textContent = `${nowDate}: ${inputValue}`;

    textOutput.appendChild(newPElement);

    textInput.value = "";
  });
}

// * DOM-TS-Level-1_2

// Elemente ziehen
const infoElement = document.querySelector<HTMLDivElement>("#info");

const containerElement = document.querySelector("#container");

// HTML Elemente in DOM reinschreiben

if (infoElement && containerElement) {
  infoElement.innerHTML += `<h2> Hello World </h2>`;
  infoElement.innerHTML += `<h3> How are you? </h3>`;

  containerElement.innerHTML += `<p> This is a paragraph </p>`;
  const textInput = document.createElement("input");

  textInput.setAttribute("type", "text");
}

// * DOM-TS-Level-1_3

// Element ziehen
const galleryElement = document.querySelector<HTMLDivElement>("#gallery");

// Elemente in DOM schreiben:
if (galleryElement) {
  // create figure elements
  const newFigureElement1 = document.createElement("figure");
  const newFigureElement2 = document.createElement("figure");
  const newFigureElement3 = document.createElement("figure");

  // create p elements
  const newPictureDescription1 = document.createElement("p");
  const newPictureDescription2 = document.createElement("p");
  const newPictureDescription3 = document.createElement("p");

  // fill the p tags with content
  newPictureDescription1.textContent = `This picture shows a small owl. How cute.`;
  newPictureDescription2.textContent = `This picture also shows a small owl. Still cute.`;
  newPictureDescription3.textContent = `This picture shows  the exact same owl?! Well, still cute.`;

  // fill the figure tags with the images
  newFigureElement1.innerHTML = `<img src="./assets/img/bird.png" alt="picture of a small owl">`;
  newFigureElement2.innerHTML = `<img src="./assets/img/bird.png" alt="picture of a small owl">`;
  newFigureElement3.innerHTML = `<img src="./assets/img/bird.png" alt="picture of a small owl">`;

  // put the content and images into the outputElement
  galleryElement.appendChild(newFigureElement1);
  galleryElement.appendChild(newPictureDescription1);
  galleryElement.appendChild(newFigureElement2);
  galleryElement.appendChild(newPictureDescription2);
  galleryElement.appendChild(newFigureElement3);
  galleryElement.appendChild(newPictureDescription3);
}

// * Dom-Elements-TS-Level-1_1
//? create Elements

// build a shoping list

//1.
