
import {
    l, 
    Persona
} from "./console";



// import * as _ from "lodash";

// import $ from "jQuery";  

// const {l}=require("./console.js");
// require("../scss/estilo.scss");


import "../scss/estilo.scss";

// import img from "../imgs/img1.jpg";
// import img2 from "../imgs/img2.png";

// const {log:l}=console;

l("Hola a todos y todas vales y despues de todo!!!!");
// l($) 





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

let num1:number;

num1=123;

const button=document.querySelector("button")!;
l(button)

button.addEventListener("click",async ()=>{
/*     const data=await import("https://api.icndb.com/jokes/random/3")
    const bromas= await data.json(); */
    const data=await import("lodash")
   const {partition}= await data.default
    const part = partition([1, 2, 3, 4], (n) => n % 2); 
    // const _= data.default
    // const part = _.partition([1, 2, 3, 4], (n) => n % 2);
    
    // l(bromas.value)

    l(part);
    l("button click!!!!")
})