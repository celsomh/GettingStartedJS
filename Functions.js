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