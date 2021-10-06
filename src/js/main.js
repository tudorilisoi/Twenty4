window.addEventListener("DOMContentLoaded", checkPage);

function checkPage() {
  const bodyId = document.body.id;

  switch (bodyId) {
    case "home":
      getHomePage();
      break;
    case "watches":
      getWatchesPage();
      break;
    case "product":
      getProductPage();
      break;
    case "checkout":
      getCheckout();
      break;
  }
}

async function getHomePage() {
  const getNavigation = await import("/src/js/navigation.js");
  const getPromo = await import("/src/js/modules/promo.js");

  getNavigation.default();

  getPromo.default("best_sellers");
  getPromo.default("on_sale");
}

async function getWatchesPage() {
  const getNavigation = await import("/src/js/navigation.js");
  const getPopulatedCategories = await import(
    "/src/js/modules/populateCategory.js"
  );

  getNavigation.default();
  getPopulatedCategories.default();
}

async function getProductPage() {
  const getNavigation = await import("/src/js/navigation.js");
  const getProduct = await import("/src/js/modules/product.js");

  getNavigation.default();
  getProduct.default();
}

async function getCheckout() {
  // const getNavigation = await import("/src/js/navigation.js");
  const getCheckout = await import("/src/js/checkout.js");

  // getNavigation.default();
  getCheckout.default();
}
