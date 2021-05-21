let fs = require("fs")
let process = require('process')
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
    }
}
