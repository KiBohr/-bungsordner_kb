console.log("15.1.25 - Import & Export");
console.warn("LiveCode");

// // ! liveCoding
// import {
//   allShopData,
//   preiseLidl,
//   preiseKaufland,
//   preiseRewe,
// } from "./price.data";

// type PriceList = { name: string; price: number }[];

// function getCartPriceforShop(
//   shoppingCart: string[],
//   shopPrices: PriceList
// ): number {
//   let total = 0;
//   shoppingCart.forEach((item) => {
//     // wir suchen hier nach dem element aus dem preis-Array, das unter dem key "name" den gleichen wert hat wie unser aktuelles item
//     // (el.name === item)
//     // dann nehmen wir dessen .price
//     // sollte kein element gefunden worden sein, waere das ergebnis undefined.
//     // "?? 0" wandelt dieses undefined zur 0 um, so dass wir auf jeden fall eine zahl zurueckkriegen

//     const itemPrice = shopPrices.find((el) => el.name === item)?.price ?? NaN;
//     if (isNaN(itemPrice)) {
//       console.error(`Es gibt ${item} nicht bei shop.shopName`);
//     }
//     total += itemPrice;
//   });
//   return total;
// }

// function comparePrices(shoppingCart: string[]) {
//   const pricesPerShop = allShopData.map(function (shop) {
//     const total = getComputedStyle(shoppingCart, shop.prices);
//     return {
//       name: shop.shopName,
//       total: total,
//     };
//   });
// }

// // gurken, tomaten und ibuprofen
// comparePrices(["gurken", "tomaten", "ibuprofen 400"]);
