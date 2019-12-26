function saludar(nombre) {
    return ('Hola ' + nombre + '!');
}

saludar('Carlos');  //'Hola Carlos!'
saludar();  //'Hola undefined!'

//Acceder a los argumentos (no es muy utilizada)
function despedir() {
    var mensajeDepedida = arguments[0];
    var nombre = arguments[1];
    return (mensajeDepedida + ' ' + nombre + '!');
}

despedir('Adios', 'Carlos');

function saludar(tipo, nombre) {
    var tipo = tipo || 'Hola';
    var nombre = nombre || 'Carlos';
    return (tipo + ', ' + nombre + '!');
}

saludar();  //'Hola, Carlos!'
saludar('Adios');   //'Adios, Carlos!'
saludar('Hasta luego', 'Pepe');   //'Hasta luego, Pepe!'

var valor = 'Global';

function funcionLocal() {
    var valor = 'Local';
    return valor;
}

console.log(valor);     //'Global'
console.log(funcionLocal());    //'Local'
console.log(valor);     //'Global'

var caminar = function (nMetros) {
    return 'Avanzó ' + nMetros + ' metros';
};
caminar(12);    //'Avanzó 12 metros'

var a = 'OLA';
function global() {
    var b = 'K';
    function local() {
        var c = 'ASE';
        return a + b + c;
    }
    return local;
}

global();   //Devuelve la función local:'function local(){var c='ASE'...''
global()(); //Devuelve la ejecución de la función local:'OLAKEASE'

var closure = global();
closure();  //Lo mismo que global()()

var miContador = (function () {
    var _contador = 0;//Por convención, a las variables "privadas" se las llama con un `_` delante
    function incrementar() {
        return _contador++;
    }
    function decrementar() {
        return _contador--;
    }
    function valor() {
        return _contador;
    }
    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();

miContador.valor(); //0
miContador.incrementar();
miContador.incrementar();
miContador.valor(); //2
miContador.decrementar();
miContador.valor();//1

function inventario(nombre) {
    var _nombre = nombre;
    var _articulos = {};

    function add(nombre, cantidad) {
        _articulos[nombre] = cantidad;
    }
    function borrar(nombre) {
        delete _articulos[nombre];
    }
    function cantidad(nombre) {
        return _articulos[nombre];
    }
    function nombre() {
        return _nombre;
    }
    return {
        add: add,
        borrar: borrar,
        cantidad: cantidad,
        nombre: nombre
    }
}

var libros = inventario('libros');
libros.add('AngularJS', 3);
libros.add('JavaScript', 10);
libros.add('NodeJS', 5);
libros.cantidad('AngularJS');   //3
libros.cantidad('JavaScript');  //10
libros.borrar('JavaScript');
libros.cantidad('JavaScript');  //undefined 

function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = [];

    this.add = function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    }
    this.borrar = function (nombre) {
        delete this.articulos[nombre];
    }
    this.cantidad = function (nombre) {
        return this.articulos[nombre];
    }
    this.getNombre = function () {
        return this.nombre;
    }
}

var libros = new Inventario('Libros');
libros.add('AngularJS', 3);
libros.add('JavaScript', 10);
libros.add('NodeJS', 5);
libros.cantidad('AngularJS');   //3
libros.cantidad('JavaScript');  //10
libros.borrar('JavaScript');
libros.cantidad('JavaScript');

function InventarioPrototype(nombre) {
    this.nombre = nombre;
    this.articulos = [];
};
//A best way to reduce use memory so increment performance
InventarioPrototype.prototype = {
    add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function (nombre) {
        return this.articulos[nombre];
    },
    getNombre: function () {
        return this.nombre;
    }
}
//Definición de clases en estilo ECMAScript6
class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulos = [];
    }
    add(nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    }
    borrar(nombre) {
        delete this.articulos[nombre];
    }
    cantidad(nombre) {
        return this.articulos[nombre];
    }
    getNombre() {
        return this.nombre;
    }
}
var libros = new Inventario('Libros');
libros.add('AngularJS', 3);
libros.add('JavaScript', 10);
libros.add('NodeJS', 5);

libros.cantidad('NodeJS');  //5
libros.cantidad('AngularJS', 3);    //3
libros.borrar('JavaScript');
libros.cantidad('JavaScript');  //undefined
//Implementar herencia
class Vehiculo {
    constructor(tipo, nombre, ruedas) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ruedas = ruedas;
    }
    getRuedas() {
        return this.ruedas;
    }
    arrancar() {
        console.log('Arrancando el ${this.nombre}');
    }
    aparcar() {
        console.log('Aparcando el ${this.nombre}');
    }
}
class Coche extends Vehiculo() {
    constructor(nombre) {
        super('coche', nombre, 4);
    }
}
let fordFocus = new Coche('Ford Focus');
fordFocus.getRuedas();  //4
fordFocus.arrancar();   //'Arrancando el Ford Focus'