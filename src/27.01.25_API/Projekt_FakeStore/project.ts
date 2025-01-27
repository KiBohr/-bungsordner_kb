//* datei mit products
// - import ky
import ky from "ky";

// - select Elements

const productArea = document.querySelector<HTMLDivElement>("#ouput-area");

//-type
type Product = {
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

//- fetch
export async function getProducts() {
  try {
    const productData: Product[] = await ky
      .get("https://fakestoreapi.com/products")
      .json();
    // console.log(productData);
    return productData;
  } catch (error) {
    console.warn("There is a problem!", error);
  }
}

// ? aus der getProducts Funktion das Array mit den Produkten holen
export const allProducts = await getProducts();

//- function für data in dom schreiben
export async function renderProducts(selectedProducts: Product[]) {
  if (selectedProducts && productArea) {
    selectedProducts.forEach((product: Product) => {
      productArea.innerHTML += `
        <div class="w-1/4 bg-white shadow-lg rounded-md flex flex-col justify-center items-center  p-5 gap-2">
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
