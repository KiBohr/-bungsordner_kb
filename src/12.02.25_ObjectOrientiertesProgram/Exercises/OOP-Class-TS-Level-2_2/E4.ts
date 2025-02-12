// * OOP-Class-TS-Level-2_2
console.warn("OOP-Class-TS-Level-2_2");
// ? https://supercode.notion.site/OOP-Class-TS-Level-2_2-40721ee4c13c49bd8d7b73b18a5bc6bf

// - create new class "Car"
class Horse {
  name: string;
  color: string;
  character: string[];
  currentSpeed: number;

  constructor(
    name: string,
    color: string,
    character: string[],
    currentSpeed: number
  ) {
    this.name = name;
    this.color = color;
    this.character = character;
    this.currentSpeed = currentSpeed;
  }
}
// - create cute horses
const Chestnut = new Horse("Chestnut", "warmbrown", ["loyal", "jumpy"], 40);
const Nugget = new Horse("Nugget", "orange", ["a little dumb", "cuddly"], 10);
const Magic = new Horse("Magic", "white", ["majestic", "stubborn"], 100);
const Lady = new Horse("Lady", "red", ["curious", "energetic"], 60);

// - create class "Rider"
class Rider {
  name: string;
  age: number;
  horse: Horse[];

  constructor(name: string, age: number, horse: Horse[]) {
    this.name = name;
    this.age = age;
    this.horse = horse;
  }
}
// - create Riders
const Liam = new Rider("Liam Schnuppsi", 34, [Nugget, Lady]);
const Thea = new Rider("Thea Speed", 24, [Magic]);
const Ruth = new Rider("Ruth Yes", 41, [Chestnut, Lady]);

//- put them into an array and log that stuff
const Riders = [Liam, Thea, Ruth];
console.log(Riders);
