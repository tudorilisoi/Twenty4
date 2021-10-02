import { addToCart } from "../cart.js";

export default function populateCardTemplate(product) {
  const cardTemplate = document.getElementById("product-card-tpl").content.cloneNode(true); // prettier-ignore

  cardTemplate.querySelector(".product-card").id = product.id;
  cardTemplate.querySelector(".image").innerHTML = `<img src="${product.img_src}" alt="${product.name} image" />`; // prettier-ignore
  cardTemplate.querySelector("h4").textContent = product.name;

  // Buttons
  const viewBtn = cardTemplate.querySelector("#view");
  viewBtn.addEventListener("click", handleViewEvent);

  const addToCartBtn = cardTemplate.querySelector("#add");
  addToCartBtn.addEventListener("click", (event) =>
    handleAddToCartEvent(event, product)
  );

  checkProductStock(product, cardTemplate);
  return cardTemplate;
}

// Handle view products
function handleViewEvent(event) {
  const parentId = event.target.parentNode.parentNode.id;
  location = `/src/pages/product.html?id=${parentId}`;
}

function handleAddToCartEvent(event, product) {
  const parentId = event.target.parentNode.parentNode.id;
  const btn = event.target;

  addToCart(product);
}

// Checking product quantity
function checkProductStock(product, cardTemplate) {
  const currency = "$";

  if (!product.stock) {
    cardTemplate.querySelector(".product-card").classList.add("out-of-stock");
    cardTemplate.querySelector("p").textContent = "out of stock";

    return cardTemplate;
  }
  if (product.stock)
    return (cardTemplate.querySelector("p").textContent = `${product.price} ${currency}`); // prettier-ignore
}
