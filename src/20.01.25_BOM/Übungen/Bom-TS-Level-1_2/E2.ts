console.log("Bom-TS-Level-1_2");
//* Bom-TS-Level-1_2
//? select elements

const countButton = document.querySelector<HTMLButtonElement>("#btn");
const percentOutput = document.querySelector<HTMLDivElement>("#zeit");

if (percentOutput && countButton) {
  let i = 100;

  function counter() {
    const countDownPercent = setInterval(function () {
      if (i <= 0) {
        clearInterval(countDownPercent);
      } else {
        i--;
        if (percentOutput) {
          percentOutput.textContent = `${i}%`;
        }
      }
    }, 1000);
  }
  countButton.addEventListener("click", counter);
}
