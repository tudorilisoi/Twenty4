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
  addToCartBtn.addEventListener("click", () => handleAddToCartEvent(product));

  checkProductStock(product, cardTemplate);
  return cardTemplate;
}

// Handle view products
function handleViewEvent(event) {
  const parentId = event.target.parentNode.parentNode.id;
  location = `/src/pages/product.html?id=${parentId}`;
}

function handleAddToCartEvent(product) {
  addToCart(product);
}

// Checking product quantity
function checkProductStock(product, cardTemplate) {
  if (!product.stock) {
    cardTemplate.querySelector(".product-card").classList.add("out-of-stock");
    cardTemplate.querySelector("p").textContent = "out of stock";

    return cardTemplate;
  }
  if (product.stock)
    return (cardTemplate.querySelector("p").textContent = `${product.price} ${product.currency}`); // prettier-ignore
}
