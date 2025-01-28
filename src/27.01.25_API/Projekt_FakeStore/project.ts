//* datei mit products
// - import ky
import ky from "ky";

//-type
export type Product = {
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

//- fetch products
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

//- fetch categories

export async function getCategories() {
  try {
    const categoryData: string[] = await ky
      .get("https://fakestoreapi.com/products/categories")
      .json();
    return categoryData;
  } catch (er) {
    console.warn(er);
  }
}
