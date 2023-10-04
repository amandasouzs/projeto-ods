const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});