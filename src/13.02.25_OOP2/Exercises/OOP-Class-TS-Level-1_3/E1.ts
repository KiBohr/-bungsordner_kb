// * OOP-Class-TS-Level-1_3
console.warn("OOP-Class-TS-Level-1_3");
// ? https://supercode.notion.site/OOP-Class-TS-Level-1_3-ed49d0a03ac74c43a91a66c7e64ce05e

// - class "Animal" + "Person"
// - class "Animal"
class Animal {
  private _species: string;
  private _age: number;
  private _color: string;

  constructor(species: string, age: number, color: string) {
    this._species = species;
    this._age = age;
    this._color = color;
  }

  // ? get und set für alle Eigenschaften
  // für species
  get species(): string {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }
  //für age
  get age(): number {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
  // für color
  get color(): string {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }
}

// - class "Person"
class Person {
  private _name: string;
  private _birthday: Date;
  gender!: "female" | "nonbinary" | "male";

  constructor(name: string, birthday: Date) {
    this._name = name;
    this._birthday = birthday;
  }

  get name(): string {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get birthday(): Date {
    return this._birthday;
  }
}
