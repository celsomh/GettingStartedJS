//Linea de comentario
var miDato;
miDato = 5;

var nombre;
nombre = "Juan";

var _Nombre2;

var $Nombre3;

var numberVar;
numberVar = 1234;

var booleanVar = false;

var stringVar = "Cadena de la variable stringVar";
var stringVar = 'Nuevo valor de la variable stringVar pero en comillas simples';

var undefiniedVar = undefinied;

var suma = 5 + 2;
var resta = 9 - 2;
var divisiones = 6 / 2;
var multiplicacion = 3 * 18;

var cadenaUno = "Hola ";
var cadenaDos = "Mundo!";
var saludo = cadenaUno + cadenaDos;

var x = 1;
var y = ++x;
var z = y++ + x;

typeof saludo;
typeof 10;
typeof "Hi!";
typeof undefinied;

!booleanVar;
!!booleanVar;

true === true;     //true
true === false;    //false
true !== false;    //true
true !== true;     //false

5 > 3;        //true
5 < 4;        //false
10 >= 10;     //true
15 <= 20;     //true
'a' < 'b';     //true (Se recomienda no usarlo)

true && true;    //true
true && false;     //false
false && true;     //false
false && false;    //true

0 && true;     //false, el 0 se considera false
1 && 'hola';   //'hola', el 1 o !=0 se considera true

//Valores evaluados como false
var falseValue;
falseValue = "";
falseValue = null;
falseValue = undefinied;
falseValue = 0;
falseValue = NaN;

true || true;      //true
true || false;     //true
false || true;     //true
false || false;    //false

//Asignación condicional
(true) ? 5 : 2;     //Devuelve 5
(false) ? 5 : 2;    //Devuelve 2

var condicion;
condicion = true;
if (condicion) {

}

if (condicion) {

} else {

}

if (condicion) {

} else if (condicion) {

} else if (condicion) {

} else {

}

var valor;
valor = 5
switch (condicion) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    default:
}
