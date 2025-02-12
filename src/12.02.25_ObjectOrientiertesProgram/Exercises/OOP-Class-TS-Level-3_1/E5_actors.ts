//? class "actor"
export class Actor {
  firstName: string;
  lastName: string;
  birthday: string;
  gender?: string;

  constructor(firstName: string, lastName: string, birthday: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}

// - create actors
const EmmaRoberts = new Actor("Emma", "Roberts", "10.02.1991");
const JunoTemple = new Actor("Juno", "Temple", "21.07.1989");
const GeorgiaKing = new Actor("Georgia", "King", "18.11.1986");

// array from actors
export const actors = [EmmaRoberts, JunoTemple, GeorgiaKing];
