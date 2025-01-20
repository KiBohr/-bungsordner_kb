console.log("Bom-TS-Level-2_1");

//? select elements

const selfDestroyingTextElement =
  document.querySelector<HTMLParagraphElement>("#self-destroying-p");

const selfDestroyingCountElement = document.querySelector<HTMLDivElement>(
  "#self-destroying-count"
);

if (selfDestroyingCountElement && selfDestroyingTextElement) {
  let count = 10;

  setInterval(() => {
    if (count >= 0) {
      selfDestroyingCountElement.textContent = `${count--}`;
    } else if (count < 0) {
      selfDestroyingCountElement.textContent = ``;
      selfDestroyingTextElement.textContent = ``;
    }
  }, 1000);
}
