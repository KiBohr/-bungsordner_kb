import {
  addTwoNumbers,
  substractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
} from "./operations";

import {
  addNumbers,
  substractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./operations2";

//logged first imported functions
console.warn("first batch of funciotns with 1 and 2");
console.log(addTwoNumbers(1, 2));
console.log(substractTwoNumbers(1, 2));
console.log(multiplyTwoNumbers(1, 2));
console.log(divideTwoNumbers(1, 2));

//logged copied alias named imported functions
console.warn("copied batch of funciotns with 1 and 2");
console.log(addNumbers(1, 2));
console.log(substractNumbers(1, 2));
console.log(multiplyNumbers(1, 2));
console.log(divideNumbers(1, 2));
