// *OOP-Class-TS-Level-1_1
console.warn("OOP-Class-TS-Level-1_1:");
// ? https://supercode.notion.site/OOP-Class-TS-Level-1_1-4ba7a4c6beb746a89d3faf3c30f6ec7e

export class IceCreamFlavor {
  name: string = "";
  price: number = 0;
  isPopular: boolean = false;
  flavours: string[] = [""];
  description?: string = undefined;
}

//- create instanzen
const vanilla = new IceCreamFlavor();
vanilla.name = "Vanilla";
vanilla.price = 1;
vanilla.isPopular = true;
vanilla.flavours = ["vanilla", "sweet"];
// console.log(vanilla);

const pistachio = new IceCreamFlavor();
pistachio.name = "Pistachio";
pistachio.price = 2;
pistachio.isPopular = true;
pistachio.flavours = ["earty", "nutty"];

const darkChocolate = new IceCreamFlavor();
darkChocolate.name = "Dark Chocolate";
darkChocolate.price = 1.5;
darkChocolate.isPopular = false;
darkChocolate.flavours = ["chocalety", "bitter", "rich"];

const lemon = new IceCreamFlavor();
lemon.name = "Lemon";
lemon.price = 1.2;
lemon.isPopular = false;
lemon.flavours = ["citrucy", "sour", "sweet", "fruity"];

//- put them into an Array
const IceCreams = [vanilla, pistachio, darkChocolate, lemon];
// console.log(IceCreams);

//- give out the popluar flavours in console
IceCreams.forEach((flavour: IceCreamFlavor) => {
  if (flavour.isPopular === true) {
    console.log(flavour.name);
  }
});
