const addedProductsToCart = new Set();

export function getCart() {
  const cartContainer = document.getElementById("cart-container");

  // Hide cart if scroll
  document.addEventListener(
    "scroll",
    () =>
      cartContainer.classList.contains("active") &&
      cartContainer.classList.remove("active")
  );

  // Hide cart if user clicks outside cart container
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.id === "deleteItem") removeItem(target);
    if (target.id === "cart-btn" || target.offsetParent.id === cartContainer.id)
      return;

    if (target.id !== cartContainer.id)
      return cartContainer.classList.remove("active");
  });

  // Add active class to cart container
  cartContainer.classList.toggle("active");

  // Create cart list

  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  const inCartProducts = [...addedProductsToCart];

  if (!inCartProducts.length)
    return (cartContainer.innerHTML = `<h3>You'r cart is empty</h3>`);
  if (inCartProducts.length)
    return (cartContainer.innerHTML = `<ul>
                                        ${createCartListElements(
                                          inCartProducts
                                        )}
                                        ${createCartCheckout(inCartProducts)}
                                      </ul>`);
}

function createCartListElements(products) {
  const listItemElement = products.map(
    (product) => `<li id="${product.id}">
                    <div class="cart-product_info">
                      <img src="${product.img_src}" alt="${product.name} image">
                      <h4>${product.name}</h4>
                      <p>${product.price}<p>
                    </div class="cart-checkout">
                    <i class="fas fa-trash-alt" id="deleteItem" data-productId=${product.id}></i>
                  </li>`
  );
  return listItemElement.join("");
}

function removeItem(target) {
  const itemId = parseInt(target.dataset.productid);

  addedProductsToCart.forEach(
    (prop) => prop.id === itemId && addedProductsToCart.delete(prop)
  );

  renderCart();
}

function createCartCheckout(products) {
  console.log("TBA");
}

export function addToCart(product) {
  addedProductsToCart.add(product);
}

export default addedProductsToCart;
