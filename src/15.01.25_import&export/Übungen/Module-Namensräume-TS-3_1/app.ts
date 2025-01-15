import { createOrder } from "./order/OrderFunctions";

import { addOrderToService } from "./order/OrderServiceFunctions";

import { createProduct } from "./product/ProductFunctions";

import { addProductToService } from "./product/ProductServiceFunctions";

console.log(createOrder(["Order1"]));
console.log(addOrderToService("Order1", "one"));
console.log(createProduct("Phone", 1));
console.log(addProductToService("Help", "two"));
