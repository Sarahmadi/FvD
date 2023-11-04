// JavaScript Document
console.log("hi");

/* Hamburger Menu */
const body = document.querySelector("body");
const hamburgerMenu = document.querySelector("header nav:last-of-type");
const knopOpen = document.querySelector("header nav:first-of-type img:first-of-type");
const knopDicht = document.querySelector("header nav:last-of-type section:last-of-type img");

function openMenu() {
    hamburgerMenu.classList.add("zichtbaar");
    body.classList.add("zichtbaar");
}

function sluitMenu() {
    hamburgerMenu.classList.remove("zichtbaar");
    body.classList.remove("zichtbaar");
}

knopOpen.addEventListener('click', openMenu);
knopDicht.addEventListener('click', sluitMenu);




 /* Thema switch */
const changeThemeButton = document.querySelector("buttonthema");
const root = document.documentElement;

changeThemeButton.addEventListener("click", function() {
    root.classList.toggle("alt-theme");
});