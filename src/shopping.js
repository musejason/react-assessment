import shoppingData from "./shoppingData.js";

const data = require("./shoppingData.js");

function ShoppingList() {
  if (!data.length) {
    return null;
  }

  const list = data;
  return list;
}
// this componant needs to receive the shopping data as props & render multiple ShoppingItems (using map) as appropriate.

function ShoppingItem(item) {
  const name = item.name;
  const category = item.category;
  const price = item.price.original;
  const discount = price * (item.price.discount / 100);
  const discountPrice = price - discount;
  if (item.price.discount < 0) return null;

  if (item.price.discount > 0) {
    return {
      name,
      category,
      price,
      discountPrice,
    };
  }

  if ((item.price.discount = 0)) {
    return {
      name,
      category,
      price,
    };
  }
}
// this componant needs to receive an individual item as its props and need to output the appropriate title, category, and actual price.
// If the item has a discount value over 0, it should render both original price and final discounted price; if discount value is 0, just render the original price.

export default shopping;
