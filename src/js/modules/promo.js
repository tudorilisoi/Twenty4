import fetchData from "./fetchData.js";
import populateCardTemplate from "./populateCard.js";

export default function getPromoSection(type) {
  // Fetch store data
  fetchData().then((store) => appendToPromoSection(store));

  function appendToPromoSection(store) {
    // Get template elements
    const promoSectionTpl = document.getElementById("promo-section-tpl").content.cloneNode(true); // prettier-ignore
    const promoContainer = promoSectionTpl.querySelector(".promo-container");
    const promoCard = promoSectionTpl.querySelector(".promo-card");
    const promoCardTitle = promoSectionTpl.querySelector("h2");

    // Filter section type and add classes
    let products = [];

    switch (type) {
      case "best_sellers":
        promoCard.classList.add("best-sellers");
        promoCardTitle.innerHTML = "best <br> sellers";
        products = store.filter((product) => product.best_seller);
        break;
      case "on_sale":
        promoCard.classList.add("on-sale");
        promoCardTitle.innerHTML = "on <br> sale";
        products = store.filter((product) => product.on_sale);
        break;
    }

    // Append to section
    products.forEach((product) =>
      promoContainer.append(populateCardTemplate(product))
    );

    // Append to main element
    document.querySelector("main").appendChild(promoSectionTpl);
  }
}
