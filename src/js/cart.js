let addedProductsToCart = JSON.parse(localStorage.getItem("addedProductsToCart")) || {}; // prettier-ignore

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

    if (target.id === "checkout-btn")
      return (location = "/src/pages/checkout.html");
    if (target.id === "deleteItem") return removeItem(target);
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
  const inCartProducts = Object.values(addedProductsToCart);

  if (!inCartProducts.length)
    return (cartContainer.innerHTML = `<h3>Cart is empty</h3>`);
  if (inCartProducts.length)
    return (cartContainer.innerHTML = `<ul>
                                        ${createCartListElements(
                                          inCartProducts
                                        )}
                                      </ul>
                                      <div>
                                      <h3>
                                      Total: ${getTotalPrice(inCartProducts)} ${inCartProducts[0].currency}
                                      </h3>
                                      <button id="checkout-btn">Go to checkout</button>
                                      </div>
                                      `); // prettier-ignore
}

function createCartListElements(products) {
  const listItemElement = products.map(
    (product) => `<li id="${product.id}">
                    <div class="cart-product_info">
                      <img src="${product.img_src}" alt="${product.name} image">
                      <h4>${product.name}</h4>
                      <p>${product.price} ${product.currency}</p>
                    </div class="cart-checkout">
                    <i class="fas fa-trash-alt" id="deleteItem" data-productName="${product.name}"></i>
                  </li>`
  );

  return listItemElement.join("");
}

function removeItem(target) {
  const targetName = target.dataset.productname;

  delete addedProductsToCart[targetName];

  localStorage.setItem(
    "addedProductsToCart",
    JSON.stringify(addedProductsToCart)
  );

  renderCart();
}

function getTotalPrice(products) {
  const prices = products.map((product) => product.price);

  const total = prices.reduce((value, acc) => value + acc);
  const totalWithSeparators = total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return totalWithSeparators;
}

export function addToCart(product) {
  const cart = {
    ...addedProductsToCart,
    [product.name]: product,
  };

  localStorage.setItem("addedProductsToCart", JSON.stringify(cart));

  addedProductsToCart = JSON.parse(localStorage.getItem("addedProductsToCart"));
}

export default addedProductsToCart;
