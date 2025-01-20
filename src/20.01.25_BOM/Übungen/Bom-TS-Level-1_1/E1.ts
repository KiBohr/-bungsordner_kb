console.log("Bom-TS-Level-1_1");
// * Bom-TS-Level-1_1

//? Function, that shoes text after x seconds
// ?setTimeout()
console.log("Start: Waiting for 3 seconds...");
function logTextAfterXTime(text: string, sec: number) {
  setTimeout(() => console.log(text), sec);
  return text;
}

// logTextAfterXTime("Done. 3 Seconds are over", 4000);

// ? function with setInterval(), clearInterval() & if/else

// let i = 10;

// const intervalId = setInterval(() => {
//   if (i <= 0) {
//     clearInterval(intervalId);
//     console.log("Endlich Feierabend!");
//     return; // weil damit die Funktion beendet wird
//   }
//   console.log(i);
//   i--;
// }, 1000);
