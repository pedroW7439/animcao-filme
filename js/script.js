const tema = new Audio("../pedro/tema.mp3");

const botao = document.querySelector(".texto");

botao.addEventListener("mouseenter", () => {
    botao.classList.remove("texto");
    botao.classList.remove("texto2");
    botao.classList.add("botao");
});

botao.addEventListener("mouseleave", () => {
    botao.classList.remove("botao");
    botao.classList.add("texto2");
});

tema.play();

// document.addEventListener("DOMContentLoaded", () => {
//     tema.play();
// });
