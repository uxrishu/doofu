$(window).on("load", function(){
    $(".preloader").fadeOut("slow");
});

// Navigation Bar
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});