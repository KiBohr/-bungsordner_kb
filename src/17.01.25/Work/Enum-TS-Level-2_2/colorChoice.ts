console.warn("Enum-TS-Level-2_2");
// enum ClothingColor mit Farbnamen und Hexwerten

enum ClothingColor {
  Yellow = "rgb(210,159,32)",
  Green = "rgb(118,144,60)",
  Blue = "rgb(65,80,109)",
  Olive = "rgb(94,77,23)",
  Brown = "rgb(69,42,4)",
}

// Array mit allen Farben anlegen allColors: ClothingColor[]
const allColors: ClothingColor[] = [
  ClothingColor.Yellow,
  ClothingColor.Green,
  ClothingColor.Blue,
  ClothingColor.Olive,
  ClothingColor.Brown,
];

// loop that iterates through allColors and writes a Button with each color in Dom

// select output-field
const buttonContainerElement =
  document.querySelector<HTMLButtonElement>("#button-output");

if (buttonContainerElement) {
  for (let i = 0; i <= allColors.length - 1; i++) {
    const newButton = document.createElement("button");

    newButton.style.background = `[${allColors[i]}]`;

    buttonContainerElement.appendChild(newButton);
  }
}
