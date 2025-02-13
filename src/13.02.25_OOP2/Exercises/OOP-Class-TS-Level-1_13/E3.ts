// * OOP-Class-TS-Level-1_13
console.warn("OOP-Class-TS-Level-1_13");
// ? https://supercode.notion.site/OOP-Class-TS-Level-1_13-82988115e3af40c99a025ef8a4d50841

class Horse {
  private _name: string;
  color: string;
  character: string[];
  currentSpeed: number;

  constructor(
    name: string,
    color: string,
    character: string[],
    currentSpeed: number
  ) {
    this._name = name;
    this.color = color;
    this.character = character;
    this.currentSpeed = currentSpeed;
  }
  // soll name nur über den Konstruktor gesetzt werden können
  // → Wert ist nur über einen Getter (get-Methode) abrufbar
  get name(): string {
    return this._name;
  }

  getSpeedInfo() {
    if (this.currentSpeed <= 20) {
      console.log(
        `The speed of ${this.currentSpeed} is pretty chill. Take your time ${this.name}❤️`
      );
    } else if (this.currentSpeed > 20 && this.currentSpeed <= 50) {
      console.log(
        `The speed of ${this.currentSpeed} is not bad. Let´s go ${this.name}!`
      );
    } else if (this.currentSpeed > 50 && this.currentSpeed <= 80) {
      console.log(
        `The speed of ${this.currentSpeed} is quiiick. Yo! Maybe slow down a little ${this.name}!`
      );
    } else if (this.currentSpeed > 80) {
      console.log(
        `The speed of ${this.currentSpeed} is magical! We are basically flying by now. How cool ${this.name}!`
      );
    }
  }
}
// - create cute horses
const Nugget = new Horse("Nugget", "orange", ["a little dumb", "cuddly"], 10);
Nugget.getSpeedInfo();
const Chestnut = new Horse("Chestnut", "warmbrown", ["loyal", "jumpy"], 40);
Chestnut.getSpeedInfo();
const Lady = new Horse("Lady", "red", ["curious", "energetic"], 60);
Lady.getSpeedInfo();
const Magic = new Horse("Magic", "white", ["majestic", "stubborn"], 100);
Magic.getSpeedInfo();

// - riders
class Rider {
  name: string;
  age: number;
  horses: Horse[];

  constructor(name: string, age: number, horses: Horse[]) {
    this.name = name;
    this.age = age;
    this.horses = horses;
  }
  getHorseNames() {
    const horseNames = this.horses.map((horse: Horse) => {
      return horse.name;
    });
    console.log(`${this.name} is riding ${horseNames.join(" & ")}.`);
  }
}
// - create Riders
const Liam = new Rider("Liam Schnuppsi", 34, [Nugget, Lady]);
Liam.getHorseNames();
const Thea = new Rider("Thea Speed", 24, [Magic]);
Thea.getHorseNames();
const Ruth = new Rider("Ruth Yes", 41, [Chestnut, Lady]);
Ruth.getHorseNames();
