//Ejemplo de un objeto
var libroAngular = {
    titulo: 'Desarrollo web ágil con AngularJS',
    autor: 'Carlos Azaustre',
    paginas: 64,
    formatos: ['PDF', 'ePub', 'Mobi'],
    precio: 2.79,
    publicado: false
};

//Acendiendo a las propiedades del objeto
libroAngular.titulo;        //Desarrollo web ágil con AngularJS
libroAngular['paginas'];    //64

//Modificando las propiedades del objeto
libroAngular.precio = 1.95;
libroAngular['publicado'] = true;

var propiedad = 'autor';
libroAngular[propiedad];    //'Carlos Azaustre'

//Métodos
var libroAngular = {
    paginas: 64,
    leer: function () {
        console.log('He leído el libro de AngularJS');
    }
};

libroAngular.leer();    //Devuelve:'He leído el libro de AngularJS'

var miObjeto = {
    propiedad: 'valor'
};
var miObjeto = new Object({
    propiedad: 'valor'
});

var libro = {
    titulo: 'Desarrollo Web Ágil con AngularJS',
    autor: {
        nombre: 'Carlos Azaustre',
        nacionalidad: 'Española',
        edad: 30,
        contacto: {
            email: 'carlosazaustre@gmail.com',
            twitter: '@carlosazaustre'
        }
    },
    editorial: {
        nombre: 'carloszaustre.es Books',
        web: 'https://carlosazaustre.es'
    }
};

libro.autor.nombre;                 //Carlos Azaustre
libro['autor']['edad'];             //30
libro['editorial'].web;             //'https://carlosazaustre.es'
libro.autor['contacto'].twitter;    //'@carlosazaustre

var coche1 = {
    marca: 'Ford',
    modelo: 'Focus'
};

var coche2 = {
    marca: 'Ford',
    modelo: 'Focus'
};
coche1 == coche2;                 //Devuelve false, no comparten referencia
coche1.modelo == coche2.modelo;    //Devuelve true porque el valor es el mismo
var coche3 = coche1;
coche1 == coche3                      //Devuelve true, comparten referencia

//Clase Number

var entero = 25;
var decimal = 25.5;
var hexadecimal = 0x1F;
hexademcial = 0xFF;
hexadecimal = 0x7DE;
var comaFlotante = 5.5e2;

infinityNumber = Infinity;
infinityNumber = -Infinity;
var infinityNumber = 1 / 0;
infinityNumber = -1 / 0;
infinityNumber = 1e1000;

var notANumber = 'a' / 15(NaN);  //NaN para indicar que un determinado valor no representa un número
//Dos formas de crear un numero
var numero = 6;
var numero = new Number(6);

parseInt('1111');    //Devuelve 1111
parseInt('1111', 2);         //Devuelve 15
parseInt('1111', 16);        //Devuelve 4369

parseFloat('5e3');      //Devuelve 5000

var n = 2.5674;
n.toFixed(0);   //Devuelve '3'
n.toFixed(2);   //Devuelve '2.57'

n.toExponential(2);     //Devuelve '2.56e+0'

(1111).toString(10);    //Devuelve '1111'
(15).toString(2);       //Devuelve '1111'
(4369).toString(16);    //Devuelve '1111'

Math.PI;
Math.E;
Math.random();
Math.pow(4, 3);

Math.sin(2.31);
Math.cos(0.94);

//Dos forma de crear un Array
var arregloLiteral = [];
var arregloInstancia = new Array();

var arreglo;
arreglo = [1, 2, 3, 4];
arreglo = ['Hola', 'como', 'estas'];
arreglo = [{ propiedad: 'valor1' }, { propiedad: 'valor2' }];    //Array de objetos
arreglo = [[2, 4], [3, 6]];  //Matriz
arreglo = [1, true, [3, 2], 'Hola', { clave: 'valor' }];    //Array mixto

arreglo[1];     //Devuelve 'true'
arreglo.length;     //Devuelve 5

arreglo = [3, 41, 13, 12, 6];
arreglo.sort();
arreglo.pop();
arreglo.push(2);
arreglo.reverse();

var valor = 3;
var template = [
    '<li>',
    valor,
    '</li>'
].join('');

console.log(template);  //Devuelve: '<li>3</li>'

//Obtener las raices de cada elemento
arreglo = [2, 4, 6, 8];
var raices = arreglo.map(Math.sqrt);

var resultados = arreglo.map(function (elemento) {
    return elemento *= 2;
});
//Obtener los multiplos de tres
arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var multiplosDeTres = arreglo.filter(function (elemento) {
    return elemento % 3 == 0;
});

arreglo = [1, 2, 3, 4, 5, 6, 12, 2, 42];
arreglo.slice(3, 7);    //[4,5,12]
arreglo.slice(2, -1); //[3,4,5,6,12,2]

'javascript'[2];    //'v'
'javascript'.length();   //'10'
'javascript'.charCodeAt(2);  //'118'
'javascript'.indexOf('script'); //donde comienza el string "script", el '4'
'javascript'.substring(4, 10);   //la parte del string comprendida entre los indices 4 y 10-1, 'script'

//Dos formas de crear un String
var stringPrimitivo = 'Una variable String de tipo primitivo';
var stringInstancia = new String('Una variable String instancia');

var fecha = new Date();
fecha = fecha.toString();
fecha = fecha.split(' ');
fecha[4];   //'20:16:25'

