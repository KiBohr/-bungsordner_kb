// *  UnionType-Level-1_2
console.warn("UnionType-Level-1_2");

type NumericString = number | string | null;

const example = 3;

//- checkt, ob das Argument eine Nummer ist
function isNumber(element: NumericString) {
  if (typeof element === "number") {
    console.log(`This is a number.`);
  } else {
    console.warn("Not a number");
  }
}

isNumber(5);
isNumber("Hi");
isNumber(null);
