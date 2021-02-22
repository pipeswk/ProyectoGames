// ================================== Los Array son estructura de datos que contienen otros datos


var frutas = ["Mango", "Papaya", "Banana", "Manzana", "Uvas"];
                                                                // Estructura de un Array
console.log(frutas);

// ========================> Un Array se puede mutar (Modificar) de la siguiente manera

console.log(frutas.length);           // Devuelve la lomgitud del Array (Numero de datos)

var masFrutas = frutas.push("Limon")         // Agrega alementos al final de Array

var eliminarFruta = frutas.pop("Banana");    // Elimina el ultimo elemento del Array

var frutaInicial = frutas.unshift("Coco");    // Agrega elemento al inicio del Array

var eliminarFrutaInicial = frutas.shift("Coco");  // Elimina el elemento inicial

var posicionElemento = frutas.indexOf("Banana");  // Devuelve la posicion del elemento en mención



//<=================================================================================================================>

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Televisor", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 2500 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Smart Watch", costo: 3000 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 1000        // Devuelve solo los articulos que sean menores o iguales a 1000
});

var nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre
});                       // Devuelve los nombres de los articulos

var busquedaArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Celular"        // Devuelve un articulo en especifico
});


articulos.forEach(function(articulo) {
    console.log (articulo.nombre)    //  Muestra los nombres de los articulos
});



var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 5000
});

