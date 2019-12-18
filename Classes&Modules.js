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

