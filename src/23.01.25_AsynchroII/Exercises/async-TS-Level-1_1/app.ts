import waitForTwoSeconds from "./patient-waiters.ts";

// erstelle eine async Funktion main, die loggt
async function main() {
  console.log("Hi here I am...");

  //rufe waitfortwosecons auf
  await waitForTwoSeconds();

  // logge "Hello..."
  console.log("Hello...");

  // logge "Can you hear me..."
  console.log("Can you hear me...");
}

//rufe main auf
main();

//? scheint nicht wie erwartet zu warten, lol
