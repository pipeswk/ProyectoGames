// ================ En este archivo podras encontrar la manera en como se usa la condicional IF ================== //
if (false) {  // Dentro de los () ponemos lo condicionales 
    console.log("Hola");  // En este caso se imprime un Hola en caso de ser verdadero
} else {     //El else se ocupa en caso de que el if no sea verdadero
    console.log("Chao");
}

// ===================== Ejemplo con else if ==========================

var edad = 18;
if (edad === 18) {
    console.log("puedes votar, sera tu primera votación :D");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar :(")
}


// ============ Podemos simplifircar el uso de los else if con condiciones, por ejemplo:

var numero = 1;

var resultado = numero === 1 ? "Si! Soy un uno :D" : "No! No soy un uno :(";


// ======================= Juego de Piedra, papel o tijera =====================================

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(Player, CPU) {
    if (Player === CPU) {
        console.log("Esto es un empate !")
    } else if (Player != CPU) {
        if (Player === op1 && CPU === op3) {
            console.log("Player es el ganador! :D")
        }
        if (Player === op2 && CPU === op1) {
            console.log("Player es el ganador! :D")
        }
        if (Player === op3 && CPU == op2) {
            console.log("Player es el ganador! :D")
        }
        else {
            console.log("La CPU ha ganado :´(")
        }
    }
};

