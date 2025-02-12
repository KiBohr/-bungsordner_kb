import { Owner } from "./Owner";

export class Dog {
  name: string;
  age: number;
  breed: string;
  owner: Owner;
  sleepiness: number = 0;

  constructor(name: string, breed: string, owner: Owner, age: number = 0) {
    console.log("Hurra, (" + name + ") is now here");
    this.name = name;
    this.breed = breed;
    this.owner = owner;
    this.age = age;
  }
  // methoden
  bark() {
    console.log(`${this.name} says Woof!`);
  }
  walk() {
    console.log(`${this.name} walks with ${this.owner.name}.`);
    this.sleepiness += 1;
    if (this.sleepiness >= 3) {
      this.sleep();
    }
  }
  sleep() {
    console.log(`${this.name} is fast asleep⏾`);
    this.sleepiness = 0;
  }
}
