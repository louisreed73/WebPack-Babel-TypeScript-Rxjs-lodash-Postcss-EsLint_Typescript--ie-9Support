import "../scss/estilo.scss"
import {cL,cO} from "../utilities/utility";

const {log:l}=console;

cL("Hola a todos!!!","orange");

class Empleado {

    [k:string]:any;

    constructor(
        public nombre:string,
        public posicion:string,
        private  salario:number,
        ) {

            this.nombre=nombre;
            this.posicion=posicion;
            this.salario=salario;

    }

    getSalario ():number {
        return this.salario
    }

    setSalario(v:number) {
        this.salario=v
    }

    accept(visitor:any) {
            visitor.visit(this)

    }
}

interface pot {
    // [k:string]:any;
    nuevaProperty:any;        
}

interface Emp {
    setSalario(d:number):void;
    getSalario():number;
    // [k:string]:any;
}

type Comp=Emp & pot

class AumentaSalario {
    visit<T extends Comp>(emp:T) {

        emp.setSalario( emp.getSalario() *1.5)

        // emp.Salario=emp.Salario * 1.5

    }
};
class DisminuyeSalario {
    visit<T extends Comp>(emp:T) {

        emp.setSalario( emp.getSalario() * 0.5)
        emp.nuevaProperty=23

        // emp.Salario=emp.Salario * 1.5

    }
};

let Empleados=[
    new Empleado("Luis","FrontEnd Developper",22000),
    new Empleado("Ana","UI Design",19000),
    
];

cO(Empleados,"orange",3)

for(let empl of Empleados) {
    empl.accept(new AumentaSalario())
};


cO(Empleados,"cyan",3)


for(let empl of Empleados) {
    empl.accept(new DisminuyeSalario())
};


cO(Empleados,"gray",3)

