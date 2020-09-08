


import "../scss/estilo.scss";

import img from "../imgs/img1.jpg"

const {log:l}=console;

l("Hola a todos y todas vale!!!!");


function renderEl(el,txt) {
    let elem=document.createElement(el);
    elem.appendChild(document.createTextNode(txt));
    document.body.appendChild(elem)

};
function renderIm(img) {
    let image=new Image();
    image.src=img;
    image.classList.add("img")
    document.body.appendChild(image)

};

renderEl("p","Hola a todos!")
renderIm(img)