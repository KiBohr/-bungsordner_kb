import { getProducts, renderProducts, allProducts } from "./project";

// getProducts();
if (allProducts) {
  renderProducts(allProducts);
}

// ? select elements
//input feld
const searchInput = document.querySelector<HTMLInputElement>("#search-Input");

// filter buttons
const filterButtonE = document.querySelector<HTMLButtonElement>(
  "#button-electronics"
);
const filterButtonJ =
  document.querySelector<HTMLButtonElement>("#button-jewelery");
const filterButtonM = document.querySelector<HTMLButtonElement>(
  "#button-men-clothing"
);
const filterButtonW = document.querySelector<HTMLButtonElement>(
  "#button-woman-clothing"
);

//* SEARCH FUNCTION titel

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchInputValue = searchInput.value.toLocaleLowerCase().trim();
    //

    const filteredProducts = allProducts?.filter((product) => {
      return product.title.toLowerCase().includes(searchInputValue);
    });

    renderProducts(filteredProducts!);
  });
}
