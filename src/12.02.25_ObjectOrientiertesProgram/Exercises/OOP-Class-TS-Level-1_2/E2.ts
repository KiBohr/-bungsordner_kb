import { Person } from "../OOP-Class-TS-Level-2_1/E3";

//* OOP-Class-TS-Level-1_2
console.warn("OOP-Class-TS-Level-1_2:");
// ? https://supercode.notion.site/OOP-Class-TS-Level-1_2-b3c9586f76814db89b31f98264cc94a0

//- create new class
export class SchoolClass {
  id: string;
  name: string;
  endDate?: Date;
  students: Person[];
  //- create constructor
  constructor(id: string, name: string, students: Person[]) {
    this.id = id;
    this.name = name;
    this.students = students;
  }
}
// - create students
const student1 = new Person("1", "Harriette", "Stump");
const student2 = new Person("2", "Jane", "Láspirateur");
const student3 = new Person("3", "Ahmet", "Boisure");
const student4 = new Person("4", "Claus", "Clee");
const student5 = new Person("5", "Maus", "i");
const student6 = new Person("6", "Perry", "das Schnabeltier");

// - initialisieren von neuen Instanzen via Constructor mit Parameter
// - ergänze die students
const classA1 = new SchoolClass("1", "1a", [student1, student2]);
classA1.name = "1A";

const classB2 = new SchoolClass("2", "2b", [student3, student4]);
classB2.name = "2B";

const classC3 = new SchoolClass("3", "3c", [student5, student6]);
classC3.name = "3C";
