import addedProductsToCart from "./cart.js";

export default function getCheckout() {
  //   const checkoutContainer = document.getElementById("checkout-container");
  const inCartProducts = Object.values(addedProductsToCart);
  renderBuyerInfo();
  renderCartCheckout(inCartProducts);
}

function renderBuyerInfo() {
  const buyerInfoContainer = document.getElementById("buyer-info");

  const ADDRESS_INFO = 1;
  const PAYMENT_INFO = 2;
  const CONFIRMATION = 3;

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";

  return buyerInfoContainer.append(nextButton);
}

function renderCartCheckout(products) {
  const cartContainer = document.getElementById("cart-items");

  return cartContainer.innerHTML = `<ul>
                                        ${createCartCheckoutElement(products)}
                                      </ul>
                                      
                                      <h3>
                                      Total: ${getTotalPrice(products)} ${products[0].currency} 
                                      </h3> 
                                      `; // prettier-ignore
}

function createCartCheckoutElement(products) {
  const listItemElement = products.map(
    (product) => `<li id="${product.id}">
                    <div class="cart-product_info">
                      <img src="${product.img_src}" alt="${product.name} image">
                      <h4>${product.name}</h4>
                      <p>${product.price} ${product.currency}</p>
                    </div class="cart-checkout">
                   
                  </li>`
  );

  return listItemElement.join("");
}

function getTotalPrice(products) {
  const prices = products.map((product) => product.price);

  const total = prices.reduce((value, acc) => value + acc);
  const totalWithSeparators = total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return totalWithSeparators;
}
