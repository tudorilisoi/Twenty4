function populateCardTemplate(product) {
  const cardTemplate = document.getElementById("product-card-tpl").content.cloneNode(true); // prettier-ignore

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

export default populateCardTemplate;
