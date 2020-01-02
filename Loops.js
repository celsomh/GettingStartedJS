var condicion;
while (condicion) {
    //Bloque de código
}
var i = 1;
while (i < 11) {
    console.log(i);
    i++;
}
i = 1;
do {
    console.log(i);
    i++;
} while (i < 11);

for (var i = 1; i < 11; i++) {
    console.log(i);
}

var obj = {
    unArray: new Array(10000)
}
//Forma no recomendable bucle for
for (var i = 0; i < obj.unArray.length; i++) {
    obj.unArray[i] = 'Hola!';
}
//Forma recomendabe bucle for
for (var i = 0, longitud = obj.unArray.length; i < longitud; i++) {
    obj.unArray[i] = 'Hola!';
}

var miArray = [1, 2, 3, 4];
miArray.forEach(function (elemento, index) {
    console.log('El valor de la posición ' + index + ' es: ' + elemento);
});

var libro = {
    titulo: 'Aprendiendo JavaScript',
    autor: 'Carlos Azaustre',
    numPaginas: 64,
    editorial: 'carlosazaustre.es',
    precio: '2.95'
};

var propiedades = Object.getOwnPropertyNames(libro);
propiedades.forEach(function (name) {
    var valor = Object.getOwnPropertyDescriptor(libro, name).value;
    console.log('La propiedad ' + name + ' contiene: ' + valor)
});
//Otra manera de realizar lo anterior
for (var prop in libro) {
    console.log('La propiedad ' + prop + ' contiene: ' + libro[prop]);
}