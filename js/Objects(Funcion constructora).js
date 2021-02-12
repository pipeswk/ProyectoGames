//<==================================== FUNCION CONTRUCTORA ==================================================>

// De esta manera podemos contruir objetos de una forma mas automtizada y rapida.

function moto(marca, linea, modelo, cilindraje) {
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
    this.cilindraje = cilindraje;
}  // Primero contruimos una plantilla de este tipo

var motoNueva = new moto("Yamaha", "MT-09", 2019, "899 cc")   // De esta manera se asigna valores a cada propiedad de la plantilla
var motoNueva2 = new moto("Suzuki", "DRZ-400", 2000, "400 cc")
var motoNueva3 = new moto("Ducati", "Multiestrada", 2014, "1200 cc")