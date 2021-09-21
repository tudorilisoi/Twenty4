import STORE from "./store.js";

function populateCardTemplate(product) {
  const cardTemplate = document
    .getElementById("product-card-tpl")
    .content.cloneNode(true);

  cardTemplate.querySelector(".image").innerHTML = `<img src="${product.img_src}" alt="${product.name} image" />`; // prettier-ignore
  cardTemplate.querySelector("h4").textContent = product.name;
  cardTemplate.querySelector("p").textContent = product.price;

  return cardTemplate;
}

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
