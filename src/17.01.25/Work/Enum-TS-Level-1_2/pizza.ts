// * Enum-TS-Level-1_2

console.warn("objectEnum-TS-Level-1_2");
enum PizzaSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Family = "family",
}

enum PizzaIngredients {
  Cheese = "cheese",
  Onion = "onion",
  Corn = "corn",
  CremeFraiche = "Creme Fraiche",
}

type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

const pizza1: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Corn],
};

const pizza2: Pizza = {
  size: PizzaSize.Family,
  ingredients: [PizzaIngredients.Onion, PizzaIngredients.CremeFraiche],
};

const pizza3: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [
    PizzaIngredients.Onion,
    PizzaIngredients.CremeFraiche,
    PizzaIngredients.Cheese,
  ],
};

console.log(pizza3);
