let fs = require("fs")
let process = require('process')
const { leerVendidos } = require("./funcionesJSON")
const funcionesJSON = require("./funcionesJSON")
let funciones = require('./funcionesJSON')
let disponibles = funciones.leerJSON()

module.exports = casos = argumento => {
    switch(argumento){
        case "disponibles":           
            if(funciones.leerJSON().length == 0){
                console.log("Ahora somos remiseria");
            }else{
                console.log("Estos son los auto")
                disponibles.forEach(element => {
                    console.log("*******************************");
                    console.log("Marca :"  + element.marca +"\nModelo : "+ element.modelo + "\nprecio : "+ element.precio + "\nAño : "+ element.anio + "\nColor : "+ element.color);
                });
            }
            break;

        case "filtrar":
            let precio = process.argv[3];
            let precioFiltrado = funciones.filtrarPrecio(precio);
            console.log("Autos filtrados")
            precioFiltrado.forEach(autos =>{
                console.log("autos disponibles acorde a su plata  " + autos.marca + " el precio" + autos.precio)
            })
            break;
        case "vender": // se reemplazan los vendidos no se suman / no se sacan del JSON datos / no se cambia el estado de vendido a true
            let patente = process.argv[3];
            funciones.venderAuto(patente);
            break;
        case "vendidos":
            console.log(leerVendidos());
            break;
}
}
