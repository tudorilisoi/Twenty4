function populateCardTemplate(product) {
  const cardTemplate = document.getElementById("product-card-tpl").content.cloneNode(true); // prettier-ignore

  cardTemplate.querySelector(".product-card").id = product.id;
  cardTemplate.querySelector(".image").innerHTML = `<img src="${product.img_src}" alt="${product.name} image" />`; // prettier-ignore
  cardTemplate.querySelector("h4").textContent = product.name;
  cardTemplate
    .querySelector("#view")
    .addEventListener("click", handleViewEvent);
  cardTemplate
    .querySelector("#add")
    .addEventListener("click", handelAddToCartEvent);

  checkProductStock(product, cardTemplate);
  return cardTemplate;
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

// Handle view products
function handleViewEvent(event) {
  const parentId = event.target.parentNode.parentNode.id;
  location = `/src/pages/product.html?id=${parentId}`;
}

// Handle add to cart
function handelAddToCartEvent(event) {
  const parentId = event.target.parentNode.parentNode.id;

  console.log(`Item ${parentId}, will be added soon to cart`);
}

export default populateCardTemplate;
