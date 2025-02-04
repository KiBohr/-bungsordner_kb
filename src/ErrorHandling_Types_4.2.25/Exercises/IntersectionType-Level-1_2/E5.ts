// * IntersectionType-Level-1_2
console.warn("IntersectionType-Level-1_2");

//- import
import { Schorle, Juice, Water } from "../IntersectionType-Level-1_1/E4";

function mixSchorle(juice: Juice, water: Water): Schorle {
  const mixedDrink: Schorle = {
    name: juice.name + water.name,
    fruit: juice.fruit,
    carbonated: water.carbonated,
  };
  return mixedDrink;
}

const applejuice: Juice = {
  name: "alpro",
  fruit: "apple",
};

const water1: Water = {
  name: "gerolsteiner",
  carbonated: true,
};

console.log(mixSchorle(applejuice, water1));
