document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");

    burgerMenu.addEventListener("click", function() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.add("is-open");
    });

    const closeButton = document.querySelector(".mobile-menu-close-button");
    closeButton.addEventListener("click", function() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.remove("is-open");
    });
});