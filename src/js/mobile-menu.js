(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelectorAll("[data-menu]");
  const headerBtn = document.querySelector("[data-btn-tablet]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    
    mobileMenuRef.forEach(item=> item.classList.toggle("is-open"));
    headerBtn.classList.toggle("is-shown")
  });
})();