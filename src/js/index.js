
import {l} from "./console.js";

// import $ from "jQuery";  

// const {l}=require("./console.js");
// require("../scss/estilo.scss");



import "../scss/estilo.scss";

import img from "../imgs/img1.jpg";

// const {log:l}=console;

l("Hola a todos y todas vales y despues de todo!!!!");
// l($) 


function renderEl(el,txt,cls) {
    let elem=document.createElement(el);
    elem.appendChild(document.createTextNode(txt));
    elem.classList.add(cls);
    document.body.appendChild(elem)

};
function renderIm(img,cls) {
    let image=new Image();
    image.src=img;
    image.classList.add(cls)
    document.body.appendChild(image)

};

renderEl("p","Hola a todos!","img");
renderIm(img,"img")
renderEl("p",undefined,"imgBg");

// const upper = (n) => n.toUpperCase();

// let resultado="este" > | upper;

