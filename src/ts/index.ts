import "../scss/estilo.scss"
import {cL,cO} from "../utilities/utility";

const {log:l}=console;

cL("Hola a todos!!!","orange");

abstract class FakeStaticClass {
 public static m1: number;
 public static f1(): void { }
}

console.log(FakeStaticClass.m1);
FakeStaticClass.f1();

// const instance1 = new FakeStaticClass(); // Doesn't compile