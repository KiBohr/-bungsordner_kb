// * OOP-Class-TS-Level-2_1
console.warn("OOP-Class-TS-Level-2_1");
// ? https://supercode.notion.site/OOP-Class-TS-Level-2_1-73149f6d43b542a784d489ac34407e29

// - new class "Person"
export class Person {
  id: string = "";
  firstName: string = "";
  lastName: string = "";
  birthday?: Date;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
