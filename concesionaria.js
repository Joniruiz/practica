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
                disponibles.forEach((element ,index) => {
                    console.log("*******************************");
                    console.log("En la posicion " + index + "\nMarca :"  + element.marca +"\nModelo : "+ element.modelo + "\nprecio : "+ element.precio + "\nAño : "+ element.anio + "\nColor : "+ element.color);
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
        case "agregar":   // agrega vehiculo nuevo con las propiedades que hay abajo
            let marca = process.argv [3]
            let precio1 = process.argv[4]
            let color = process.argv[5]
            let patente1 = process.argv[6]
            funciones.escribirJson(marca , precio1 , color , patente1)
            break;
           /*  case "editar":  // no esta hecho  pero seria la idea editar las propiedades que no detallamos al agregar el auto nuevo no esta la funcion aun 
            let modelo = process.argv[4]
            let anio = process.argv[5]
            funciones.editarAuto(modelo,anio)
            break; */
        case "eliminar":  
            let eliminar = process.argv[3]
            funciones.eliminarAuto(eliminar);
            break;
}
}
