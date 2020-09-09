// import { Observable, interval, of, Subscription, from, fromEvent } from "rxjs";

class Persona {
    constructor(
        private nombre:string, 
        private edad:number
    ) {
        this.nombre=nombre;
        this.edad=edad;

    }
}

const {log:l}=console;

export {
    l, 
    Persona
}

// l($)



/* const {log:l}=console;

module.exports={
l
} */