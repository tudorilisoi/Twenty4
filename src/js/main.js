import STORE from "./store.js";

function populateCardTemplate(product) {
  const cardTemplate = document
    .getElementById("product-card-tpl")
    .content.cloneNode(true);

  cardTemplate.querySelector(".image").innerHTML = `<img src="${product.img_src}" alt="${product.name} image" />`; // prettier-ignore
  cardTemplate.querySelector("h4").textContent = product.name;

  checkProductStock(product, cardTemplate);
  return cardTemplate;
}

function checkProductStock(product, cardTemplate) {
  const currency = "$";

  if (!product.stock) {
    cardTemplate.querySelector(".image").classList.add("out-of-stock");
    cardTemplate.querySelector("p").classList.add("out-of-stock");
    cardTemplate.querySelector("p").textContent = "out of stock";

    return cardTemplate;
  }
  if (product.stock)
    return (cardTemplate.querySelector("p").textContent = `${product.price} ${currency}`); // prettier-ignore
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

//Navigation

const location = window.location.pathname;
document
  .getElementById("nav-links")
  .addEventListener("click", (event) => getProductType(event));

function getProductType(event) {
  const dataValue = event.target.dataset.productType;

  const params = new URLSearchParams(location);
  params.set("index.html", `${dataValue}`);

  console.log(params.toString());
  // const filterProducts = products.filter(
  //   (product) => product.gender === dataValue || dataValue === "all"
  // );
}
