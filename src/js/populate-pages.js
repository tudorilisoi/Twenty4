import STORE from "./store.js";
import populateCardTemplate from "./card-template.js";

function appendProducts(products) {
  const bodyId = document.body.id;

  const productContainer = document.getElementById("product-container");

  if (bodyId === "all")
    return products.forEach((product) => {
      const imgSrc = product.img_src.split("/").slice(2).join("/");
      const newImgSrc = `../${imgSrc}`;

      product.img_src = newImgSrc;

      productContainer.append(populateCardTemplate(product));
    });

  const filterGenders = products.filter(
    (product) => product.gender === bodyId || product.gender === "unisex"
  );

  filterGenders.forEach((product) => {
    const imgSrc = product.img_src.split("/").slice(2).join("/");
    const newImgSrc = `../${imgSrc}`;

    product.img_src = newImgSrc;

    productContainer.append(populateCardTemplate(product));
  });
}

appendProducts(STORE);
