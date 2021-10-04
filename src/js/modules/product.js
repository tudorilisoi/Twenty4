import fetchData from "./fetchData.js";
import { addToCart } from "../cart.js";

export default function getProduct() {
  fetchData().then((store) => appendToProductPage(store));

  function appendToProductPage(store) {
    // Get location
    const url = window.location.search;
    const productId = new URLSearchParams(url).get("id");

    // Get product elements
    const image = document.querySelector("#image");
    const title = document.querySelector(".product-title");
    const price = document.querySelector(".product-price");
    const description = document.querySelector(".product-description");
    const button = document.querySelector("#add-to-cart");

    // Find product by ID
    const [product] = store.filter(
      (product) => product.id === parseInt(productId)
    );

    image.src = product.img_src;
    image.alt = `${product.name} image`;

    title.textContent = product.name;
    price.textContent = `${product.price} ${product.currency}`;
    description.textContent = product.description;
    button.addEventListener("click", () => addToCart(product));

    if (!product.stock) {
      button.classList.add("disabled");
      button.disabled = true;
      button.textContent = "out of stock";
    }
  }
}
