
import {
    l, 
    Persona
} from "./console.js";

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



let obj ={
    key1:"value 1",
    key2:"value 2",
    key3:"value 3",
};

let entries=Object.entries(obj);

l(entries)

let datos=[
    90, 23, 45, 67, 193
];

l(Math.min(...datos))

const luis = new Persona("Luis",47);
l(luis)