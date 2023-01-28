const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const videoSource = video.src;

function addRemoveOpen () {
    modal.classList.toggle("aberto");
} 

botaoTrailer.addEventListener ("click", () => {
    addRemoveOpen();
    video.setAttribute("src", videoSource);
});

fechar.addEventListener ("click", () => {
    addRemoveOpen();
    video.setAttribute("src", "");

})




