import "../scss/estilo.scss"
import {cL,cO} from "../utilities/utility";

const {log:l}=console;

cL("Hola a todos!!!","orange");


class MyClass3 {
  public constructor(public p1: number, public p2: string) {}
}

class Person {

  constructor(readonly nombre: string, readonly edad: number) {

  }
}
const myClass3 = new MyClass3(1, "2");
console.log(myClass3.p1);

let luis:Person;

luis=new Person("Luis",47);

cO(luis,"red",3);
// luis.nombre="Pepe"
cL(luis.nombre,"magenta")