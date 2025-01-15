//* Kopie der vier Funktionen

//* vier Funktionen

//? 1. add
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

//? 2. substract
function substractTwoNumbers(a: number, b: number): number {
  return a - b;
}

//? 3. mutiply
function mutiplyTwoNumbers(a: number, b: number): number {
  return a * b;
}

//? 4. divide
function divideTwoNumbers(a: number, b: number): number {
  return a / b;
}

// End Export mit Alias
export {
  addTwoNumbers as addNumbers,
  substractTwoNumbers as substractNumbers,
  mutiplyTwoNumbers as multiplyNumbers,
  divideTwoNumbers as divideNumbers,
};
