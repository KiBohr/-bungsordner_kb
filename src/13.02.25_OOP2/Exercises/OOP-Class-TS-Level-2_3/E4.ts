// * OOP-Class-TS-Level-2_3
console.warn("OOP-Class-TS-Level-2_3");
// ? https://supercode.notion.site/OOP-Class-TS-Level-2_3-bc1ea35489934dc68ba0d9e480b314a5

// - Definiere eine Klasse Customer
// - sie soll die Eigenschaften name (string), email (string), address (string), postalCode (string) und city (string) enthalten
// - Implementiere Get- und Set-Methoden für jede Eigenschaft.
// - vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

class Customer {
  private _name: string;
  private _email: string;
  address: string;
  private _postalCode: string;
  city: string;

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: string,
    city: string
  ) {
    this._name = name;
    this._email = email;
    this.address = address;
    this._postalCode = postalCode;
    this.city = city;
  }

  // set methoden
  set name(value: string) {
    if (this._name.length <= 60) {
      this._name = value;
    } else {
      throw new Error("Your name is too long.");
    }
  }

  set email(value: string) {
    if (this._email.includes("@") && this.email.includes(".")) {
      this._email = value;
    } else {
      throw new Error(
        "Your Email doesnt`t contain a @ and/or a dot. Please check if its correct."
      );
    }
  }

  set postalCode(value: string) {
    if (this._postalCode.length === 5) {
      this._postalCode = value;
    } else {
      throw new Error("Something didnt work. Please check your postal code.");
    }
  }
}
