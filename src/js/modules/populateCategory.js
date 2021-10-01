import populateCardTemplate from "./populateCard.js";
import fetchData from "./fetchData.js";

export default function getPopulatedCategories() {
  fetchData().then((store) => appendToCategory(store));

  function appendToCategory(store) {
    const productContainer = document.getElementById("product-container");

    // Get location
    const url = window.location.search;
    const productCategory =
      new URLSearchParams(url).get("category") ||
      new URLSearchParams(url).get("brand");

    let products = [];

    switch (productCategory) {
      case "all":
        products = store;
        break;
      default:
        products = store.filter(
          (product) => product.category === productCategory
        );
    }

    products.forEach((product) =>
      productContainer.appendChild(populateCardTemplate(product))
    );
  }
}
