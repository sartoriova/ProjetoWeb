const icone_menuHamburguer = document.querySelector(".icone-menuHamburguer");
const novoMenu = document.querySelector("#novoMenu");

icone_menuHamburguer.addEventListener("click", function () {
    if (novoMenu.style.display == "block") {
        novoMenu.style.display = "none"
    } else {
        novoMenu.style.display = "block"
    }
});

window.addEventListener("resize", function () {
    let width = window.innerWidth;
    if (width > 1505) {
        novoMenu.style.display = "none";
    }
});