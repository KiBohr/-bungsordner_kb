// ! Übungen

// * Loops-TS-Level-1_1
//? for Schleife

for (let i = 1; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

// * Loops-TS-Level-1_2
//? for Schleife

let numbersToTen: number[] = [];

for (let i = 0; i <= 10; i++) {
  numbersToTen.push(i);
}
console.log(numbersToTen);

// * Loops-TS-Level-1_3
//? while Schleife

let counter = 0;

while (counter < 10) {
  // geht nur bis 9
  console.log(`Hallo World ${counter}`);
  counter++;
}

//  * Loops-TS-Level-1_7
// ? do..while
// ! noch nicht fertig

let a: number = 0;

const outputElement = document.querySelector<HTMLParagraphElement>("#output");

do {
  if (outputElement) {
    const oldText = outputElement.innerHTML;
    outputElement.innerHTML = oldText + `The number is ${a}. <br>`;
    a++;
  }
} while (a <= 5);

// * Loops-TS-Level-1_8
//? do while

let b: number = 0;

const outputElement1 = document.querySelector<HTMLParagraphElement>("#output1");

if (outputElement1) {
  do {
    if (b % 2 === 0) {
      outputElement1.innerHTML += ` <p> The number ${b} is even. </p>`;
    }
    b++;
  } while (b <= 20);
}
