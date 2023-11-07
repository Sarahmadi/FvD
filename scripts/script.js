// JavaScript Document
console.log("hi");

/* hamburger menu */
const body = document.querySelector("body");
const hamburgerMenu = document.querySelector("header nav:last-of-type");
const knopOpen = document.querySelector(
  "header nav:first-of-type img:first-of-type"
);
const knopDicht = document.querySelector(
  "header nav:last-of-type section:last-of-type img"
);

function openMenu() {
  hamburgerMenu.classList.add("zichtbaar");
  body.classList.add("zichtbaar");
}

function sluitMenu() {
  hamburgerMenu.classList.remove("zichtbaar");
  body.classList.remove("zichtbaar");
}

knopOpen.addEventListener("click", openMenu);
knopDicht.addEventListener("click", sluitMenu);

/* kerst thema switch */
/* met hulp van donna :) */
const christmasImageUrl = "./images/kerst.png";

const images = document.querySelectorAll("main section div img");

/* functie waarmee de kerst img aangemaakt wordt */
const createChristmasImage = () => {
  /* nieuwe img element aanmaken */
  const christmasImage = document.createElement("img");
  christmasImage.src = christmasImageUrl;
  christmasImage.alt = "decorative christmas image";
  christmasImage.classList.add("christmas-image");
  /* de afbeelding word zo niet voorgelezen door screenreaders */
  christmasImage.setAttribute("aria-hidden", "true");

  return christmasImage;
};

const addChristmasImageToImages = () => {
  images.forEach((img) => {
    const christmasImage = createChristmasImage();
    /* de nieuwe kerst img toevoegen aan parent van bestaande afbeelding */
    img.parentNode.appendChild(christmasImage);
  });
};

/* roept functie aan om kerstafbeeldingen toe te voegen */
addChristmasImageToImages();

const changeThemeButton = document.querySelector("main button:first-of-type");
const root = document.documentElement;

changeThemeButton.addEventListener("click", function () {
  root.classList.toggle("alt-theme");

  const christmasImages = document.querySelectorAll(".christmas-image");
  christmasImages.forEach((christmasImage) => {
    /* als de alt-theme actief is, zie je de kerst img, anders niet */
    christmasImage.style.display = root.classList.contains("alt-theme")
      ? "block"
      : "none";
  });
});

/* dark mode switch */
/* bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode */
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}