console.log("hallo, 9.1.25 - loops2");
// ! Übungen

//  * Loops-TS-Level-1_10

const randomNumbers = [1, 2, 8, 4, 5];

function getHighestNumbers(numbers: number[]) {
  let highestNumberRightNow = 0;
  numbers.forEach(function (currentNumber: number) {
    if (currentNumber > highestNumberRightNow) {
      highestNumberRightNow = currentNumber;
    }
  });
  return highestNumberRightNow;
}

getHighestNumbers(randomNumbers);
// console.log(getHighestNumbers(randomNumbers));
// console.log(getHighestNumbers([1, 2, 3]));

// mit Math.max()
const highestNumberWithMax = Math.max(...randomNumbers);
// console.log(highestNumberWithMax);

// * Loops-TS-Level-2_3

function getNumberOfVowels(string: string) {
  let allIndex = [];
  for (let i = 0; i <= string.toLowerCase().length; i++) {
    if (
      string.toLowerCase()[i] === "a" ||
      string.toLowerCase()[i] === "e" ||
      string.toLowerCase()[i] === "i" ||
      string.toLowerCase()[i] === "o" ||
      string.toLowerCase()[i] === "u"
    ) {
      allIndex.push(i);
    }
  }
  const amountOfVowels = allIndex.length;
  return console.log(`There are ${amountOfVowels} vowels in this string.`);
}
getNumberOfVowels("Mayonese ist voll LECKA");

// * Loops-TS-Level-2_4

function addToFifty(): void {
  let sum = 0;

  while (sum <= 50) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNumber);
    sum += randomNumber;
  }
  console.log(`${sum} > 50. Stopping right here.`);
}
addToFifty();

// * Loops-TS-Level-3_4
// ! nicht fertig

const maxNumber = document.querySelector<HTMLInputElement>("#max-num");
const firstNumber = document.querySelector<HTMLSelectElement>("#first-num");
const secendNumber = document.querySelector<HTMLSelectElement>("#sec-num");
const button = document.querySelector<HTMLButtonElement>("#button");
const outputElement = document.querySelector<HTMLParagraphElement>("#output");

const maxNumberValue = maxNumber?.value;
