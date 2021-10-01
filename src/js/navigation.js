// import fetchData from "./modules/fetchData.js";

export default function getNavigation() {
  const navLinks = document.querySelectorAll("#nav-links li");

  navLinks.forEach((link) => link.addEventListener("click", handleEvent));

  function handleEvent(event) {
    const linkName = event.target.dataset.linkname;
    const dropDownEl = event.target.parentElement.parentElement;
    const URL = `/src/pages/watches.html`;

    // Return home
    if (linkName === "home") return (location = "/index.html");

    // Drop down links
    if (dropDownEl.classList.contains("nav-dropdown-content")) {
      const categoryName = dropDownEl.previousElementSibling.dataset.listname;
      return (location = `${URL}?${categoryName}=${linkName}`);
    }

    // Categories links
    return (location = `${URL}?category=${linkName}`);
  }
}
