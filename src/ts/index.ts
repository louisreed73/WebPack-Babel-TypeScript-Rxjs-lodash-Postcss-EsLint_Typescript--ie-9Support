import "../scss/estilo.scss"
import {cL,cO} from "../utilities/utility";

const {log:l}=console;

cL("Hola a todos!!!","orange");

abstract class FakeStaticClass {
 public static m1: number;
 static f1(): void { cL("Hola hijo de puta!!!!","magenta")}
}

console.log(FakeStaticClass.m1);
FakeStaticClass.f1();

// const instance1 = new FakeStaticClas his(); // Doesn't compile

class StaticClass {
  public static ps: number;
  private static privateStatic: number;
  protected static protecStatic: number;
}

StaticClass.ps = 1;
cO(StaticClass.protecStatic, "yellow", 2);