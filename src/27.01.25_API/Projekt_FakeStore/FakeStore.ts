import { getProducts, getCategories, Product } from "./project";

// ? aus der getProducts Funktion das Array mit den Produkten holen
const allProducts = await getProducts();

// ? select elements
//output field
const productArea = document.querySelector<HTMLDivElement>("#ouput-area");

//input feld
const searchInput = document.querySelector<HTMLInputElement>("#search-Input");

// filter area
const filterArea = document.querySelector<HTMLDivElement>("#filter-output");

//* Funktion, die die Produkte rendered
async function renderProducts(selectedProducts: Product[]) {
  if (productArea) {
    productArea.innerHTML = " ";
    selectedProducts.forEach((product: Product) => {
      productArea.innerHTML += `
        <div class="w-1/4 bg-white shadow-lg rounded-md flex flex-col justify-center items-center  p-5 gap-2 transisition ease-in-out hover:shadow-2xl">
                <div class=" w-[10rem] p-2 overflow-hidden">
                    <img class="rounded-md object-cover " src="${product.image}" alt="product picture">
                </div>
        
                <div class="p-2">
                    <p>${product.title}</p>
                </div>
                <div class="flex items-center gap-5 text-xl">
                    <p>⭐️ ${product.rating.rate}</p>
                    <p>$${product.price}</p>
                    <button class=" text-base border-2 border-stairs-olive rounded-md p-1 transition ease-out hover:text-white hover:border-white hover:bg-stairs-olive" type="button">Add to card </button>
                </div>
        </div>`;
    });
  }
}

// initial productrender;
if (allProducts) {
  renderProducts(allProducts);
}

//* SEARCH FUNCTION by title

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchInputValue = searchInput.value.toLocaleLowerCase().trim();
    //

    const filteredProducts =
      allProducts?.filter((product) => {
        return product.title.toLowerCase().includes(searchInputValue);
      }) ?? [];

    renderProducts(filteredProducts);
  });
}

// * Funktion, die die Produkte nach Kategorien sortiert
// in einer neuen Konstanten speichern, und mit await auspacken
const categories = await getCategories();
// console.log(categories); // ? -->  ['electronics', 'jewelery', "men's clothing", "women's clothing"]

//? auf click bei Buttons --> EventListener()

categories?.forEach((category: string) => {
  if (filterArea) {
    const newFilterButton = document.createElement("button");
    newFilterButton.textContent = category;
    // type mitgegeben mit .type
    newFilterButton.type = "button";
    // styling mit ClassName()
    newFilterButton.className =
      "border-2 border-stairs-olive p-1 rounded-md transition ease-in-out hover:text-white hover:border-white hover:bg-stairs-olive";

    // add eventListener()
    newFilterButton.addEventListener("click", (event) => {
      event.preventDefault();
      // !filterfunktion einbauen

      allProducts?.filter((product) => {
        if (product.category.includes("category")) {
        }
      });
    });

    filterArea.appendChild(newFilterButton);
  }
});
