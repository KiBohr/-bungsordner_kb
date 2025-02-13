// * OOP-Class-TS-Level-1_12
console.warn("OOP-Class-TS-Level-1_12");
// ? https://supercode.notion.site/OOP-Class-TS-Level-1_12-b08d1b8fb2924c2eb3ba7601724f7948

class IceCreamFlavor2 {
  name: string = "";
  price: number = 0;
  isPopular: boolean = false;
  flavours: string[] = [""];
  description?: string = undefined;

  constructor(
    name: string,
    price: number,
    isPopular: boolean,
    flavours: string[]
  ) {
    this.name = name;
    this.price = price;
    this.isPopular = isPopular;
    this.flavours = flavours;
  }

  //   - methoden
  getTotalPrice(numberOfScoops: number) {
    const total = numberOfScoops * this.price;
    console.log(`Your price for ${numberOfScoops} scoops is ${total} Euro.`);
  }

  printInfo() {
    let result;
    if (this.isPopular) {
      result = "popular";
    } else if (!this.isPopular) {
      result = "unpopular";
    }
    console.log(
      `The flavor "${this.name}" is ${result} and costs ${this.price} Euro.`
    );
  }

  getLenghtOfDescription() {
    if (this.description?.length === undefined) {
      console.log(
        `Sorry, no description for the flavor "${this.name}". But here are some descriptive adjectives: ${this.flavours}`
      );
    } else {
      console.log(this.description.length);
    }
  }
}

//? create the flavours with constructor
const vanilla = new IceCreamFlavor2("Vanilla", 1.2, true, ["vanilla", "sweet"]);
//- MethodenAufruf
console.log("VANILLA");
vanilla.printInfo();
vanilla.getTotalPrice(5);
vanilla.getLenghtOfDescription();

const darkChocolate = new IceCreamFlavor2("Dark Chocolate", 2.1, false, [
  "chocolaty",
  "bitter",
  "rich",
]);
//- MethodenAufruf
console.log("DARK CHOCOLATE");
darkChocolate.printInfo();
darkChocolate.getTotalPrice(5);
darkChocolate.getLenghtOfDescription();

const pistachio = new IceCreamFlavor2("Pistachio", 2.3, true, [
  "earthy",
  "nutty",
]);
console.log("PISTACHIO");
pistachio.printInfo();
pistachio.getTotalPrice(5);
pistachio.getLenghtOfDescription();

const lemon = new IceCreamFlavor2("Lemon", 1.4, false, [
  "citrucy",
  "sour",
  "sweet",
  "fruity",
]);
console.log("LEMON");
lemon.printInfo();
lemon.getTotalPrice(5);
lemon.getLenghtOfDescription();
