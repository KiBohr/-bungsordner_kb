// * UnionType-Level-2_1
console.warn("UnionType-Level-2_1");

type Circle = {
  shape: "circle";
  radius: number;
};

type Square = {
  shape: "square";
  sideLenght: number;
};

type Triangle = {
  shape: "triangle";
  base: number;
  height: number;
};

type Rectangle = {
  shape: "rectangle";
  base: number;
  height: number;
};

//? Funktion soll für jede der Formen die Fläche berechnen und bei undefined einen Fehler werfen
// ? switch dafür?
function calculateArea(
  element: Circle | Square | Triangle | Rectangle | undefined
): number | undefined {
  // als Zwischenspeicher für die if ergebnisse
  let result;
  if (element?.shape === "circle") {
    return (result = element.radius * element.radius * Math.PI);
  } else if (element?.shape === "square") {
    return (result = element.sideLenght * element.sideLenght);
  } else if (element?.shape === "triangle") {
    return (result = (1 / 2) * element.base * element.height);
  } else if (element?.shape === "rectangle") {
    return (result = element.base * element.height);
  } else {
    console.warn(`No suitable shape found.`);
  }

  return result;
}

const form1: Triangle = {
  shape: "triangle",
  base: 20,
  height: 10,
};

console.log(calculateArea(form1));
