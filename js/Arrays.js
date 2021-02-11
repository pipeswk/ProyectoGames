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



