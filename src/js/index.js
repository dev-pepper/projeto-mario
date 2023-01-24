const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});  

 botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src","");
 });

 


//-passo 1 - das um jeito de pegar o elemeto que representa o bot ao na tela usando o js
//-passo 2 - dar um jeito de indentificar quando o usuáro clicar no botão
//-passo 4 - abrir a modal na tela
//-passo 3 - dar um jeito de pegar o elemento da modal no js
//objetivo 2 - quando o usuário clicar no X devemos fechar a modal
//Passo 1 - dar um jeito de pegar o elemento de      fechar a modal
 // -passo 2 - dar um jeito de indentificar quando o usúario clicar no X
    //-passo 3 - fechar a modal