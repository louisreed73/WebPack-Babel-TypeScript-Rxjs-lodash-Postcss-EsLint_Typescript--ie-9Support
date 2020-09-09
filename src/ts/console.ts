// import $ from "jQuery";

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