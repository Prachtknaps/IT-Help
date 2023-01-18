let navToggleBtn = document.querySelector(".nav-toggle-btn")
let navMenu = document.querySelector(".nav-menu")

navToggleBtn.addEventListener("click", () => {
    navToggleBtn.classList.toggle("fa-times");
    navMenu.classList.toggle("active");
});

window.onresize = () => {
    navToggleBtn.classList.remove("fa-times");
    navMenu.classList.remove("active");
};