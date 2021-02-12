// <===================================     OBJETOS           ==============================>
// Esta hoja es muy importante porque no ayuda a definir los objetos junto a sus propiedades... Por ejemplo: Marca, color, modelo, etc

var miMoto = {
    marca: "Kawasaki",
    Linea: "z250",
    Modelo: 2016,
    Cilindraje: "250 cc",
};          // De esta manera se define un objeto con sus respectivas propiedades


 // Se puede acceder y traer la variables de las siguientes formas:

 // Para acceder a una propiedad en especifico, se hace lo siguiente:

 miMoto.marca     // Me trae el valor de la propiedad "marca"
 miMoto.Cilindraje  // Me trae el valor de la propiedad "cilindraje"
 miMoto.Linea    // Me trae el valor de la propiedad "linea"


  // A los objetos tambien podemos agregarle propiedades que cumplen una funcion en especifico. A esas propiedades se les llama "Metodos de objetos" Como por ejemplo:

  var miMoto = {
    marca: "Kawasaki",
    Linea: "z250",
    Modelo: 2016,
    Cilindraje: "250 cc",
    detalleDeLaMoto: function() {
        console.log(`Esta moto es una ${this.marca} ${this.Linea} modelo ${this.Modelo}, está compuesta por un motor de ${this.Cilindraje}`)
        console.log("¡Animate a comprarla!")
    } // De esta manera podemos definir un Metodo a un objeto en JS
};

miMoto.detalleDeLaMoto(); // Y de esta manera podemos llamar dicha funcion.
