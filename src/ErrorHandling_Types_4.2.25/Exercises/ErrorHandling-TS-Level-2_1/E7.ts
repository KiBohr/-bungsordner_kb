// * ErrorHandling-TS-Level-2_1
console.warn("ErrorHandling-TS-Level-2_1");

function generateLottoNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber > 49) {
    throw new Error("This number is too low");
  } else {
    Lottozahlen.push(randomNumber);
    return randomNumber;
  }
}

const Lottozahlen: number[] = [];

while (Lottozahlen.length < 7) {
  try {
    generateLottoNumber();
    console.log(Lottozahlen);
  } catch (error) {
    console.log(error);
  }
}
