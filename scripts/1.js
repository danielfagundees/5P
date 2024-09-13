let animação = document.getElementById("image");
let clicar = false;

function crescer() {
    clicar = !clicar;
    if (clicar) animação.classList.toggle('animation');
    else animação.classList.remove('animation');
}