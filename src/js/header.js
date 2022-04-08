const header = document.querySelector(".header-scroll");
window.addEventListener("scroll", () => {
    window.scrollY > 10 
    ? header.classList.add("header--filled") 
    : header.classList.remove("header--filled");
})