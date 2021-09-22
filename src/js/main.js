import STORE from "./store.js";
import populateCardTemplate from "./card-template.js";

function appendProducts(products) {
  const onSaleCategory = document.querySelector(".promo-container_on-sale");
  const bestSellersCategory = document.querySelector(".promo-container_best-sellers"); // prettier-ignore

  const onSale = products.filter((product) => product.on_sale);
  const bestSellers = products.filter((product) => product.best_seller);

  onSale.forEach((product) =>
    onSaleCategory.append(populateCardTemplate(product))
  );
  bestSellers.forEach((product) =>
    bestSellersCategory.append(populateCardTemplate(product))
  );
}

appendProducts(STORE);
