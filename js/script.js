document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-icon");

    burgerMenu.addEventListener("click", function() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.add("is-open");
    });

    const closeButton = document.querySelector(".mobile-menu-close-button");
    closeButton.addEventListener("click", function() {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.remove("is-open");
    });

    const modalOpenButton = document.querySelector(".hero-button");
    modalOpenButton.addEventListener("click", function() {
        const modal = document.querySelector(".hero-modal-overlay");
        modal.classList.add("is-open");
    });
    const modalCloseButton = document.querySelector(".hero-modal-close-button");
    modalCloseButton.addEventListener("click", function() {
        const modal = document.querySelector(".hero-modal-overlay");
        modal.classList.remove("is-open");
    });
});