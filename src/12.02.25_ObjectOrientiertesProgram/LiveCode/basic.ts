// ! LiveCoding
import { Dog } from "./Dog";
import { Owner } from "./Owner";

// const fluffi = {
//   name: "Fluffi",
//   age: 12,
//   breed: "Pudel",
// };

const marco = new Owner();
marco.name = "Marco";
marco.adress = "Daheim";

const floofy = new Dog("Floofy", "Pudel", marco, 2);
floofy.bark();
floofy.walk();
