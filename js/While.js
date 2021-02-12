//<====================================== Aqui veremos como se usa un while =======================================>


var players = ["Maria", "Sergio", "Felipe", "Kevin"];

function saludarJugadores(player) {
    console.log(`Hola ! ${player}, nos alegra que estes de nuevo en Game$`); // El ${} concatena la variable con el texto usando `` 
}

while(players.length > 0){
    var player = players.shift();
    saludarJugadores(player);
}
