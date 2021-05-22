let fs = require("fs");

module.exports =  funcionalidadesJSON={
    leerJSON: () =>{
        let autos=fs.readFileSync('./datos.json','utf-8')
        return JSON.parse(autos)}
    ,
    guardarJSON : (autosActual) => {
         let autoJSON=JSON.stringify(autosActual);
         fs.writeFileSync('./datos.json', autoJSON, 'utf-8');
    },
    
    escribirJson : (marca, precio, color, patente) => {
        let nuevoAuto = {
            marca: marca,
            modelo: "pendiente",
            precio: precio,
            km: 0,
            color: color,
            anio: "pendiente",
            patente: patente,
            vendido: false,
        } 
        let autosStock = funcionalidadesJSON.leerJSON();
        autosStock.push(nuevoAuto);
        funcionalidadesJSON.guardarJSON(autosStock);
        console.log("auto agregado");
    },

    filtrarPrecio : (precio) => { // filtrar por precio de los autos en el array 
        let autos = funcionalidadesJSON.leerJSON();
        let filtroPrecio = autos.filter(auto => auto.precio <= precio );
        return filtroPrecio;
    },
    guardarVendido : (autoVendido) => {
        let nuevoAutoVendidoJSON=JSON.stringify(autoVendido);
        fs.writeFileSync('./vendidos.json', nuevoAutoVendidoJSON, 'utf-8');
    },
    leerVendidos : () =>{
        let autos=fs.readFileSync('./vendidos.json','utf-8')
        return JSON.parse(autos)
    },
    venderAuto : (patente) => {
        let autos = funcionalidadesJSON.leerJSON();
        let filtro = autos.find(auto => auto.patente === patente);
        if(filtro){
            let autoVendido = autos.splice(autos.indexOf(filtro),1) // array.splice (   1   ,   2)  0 1 2 3 4 5 6
            funcionalidadesJSON.guardarJSON(autos)
            let objetoAuto = autoVendido[0]// si es 0 los corchetes no son necesarios , lo que pasa es que si no pones indice te retorna el array entero , por eso va el 0
            objetoAuto.vendido = true  
            console.log(objetoAuto);
            let arrayVentas = funcionalidadesJSON.leerVendidos()
            arrayVentas.push(objetoAuto)
            funcionalidadesJSON.guardarVendido(arrayVentas)
            console.log("El vehiculo fue transferido a ventas");
        }else{
            console.log("Este vehiculo no esta disponible para la venta ")
        }        
    }/* ,
    actualizarVentas : () =>{
        funcionalidadesJSON.guardarVendido(arrayVentas)
        console.log("Ventas actualizadas");
    } */,
   /*  editarAuto: (index ,modelo,anio)=>{   //intento de funcion de editar
        let autos = funcionalidadesJSON.leerJSON();
        let patente = autos[index]
        patente.modelo = this.autos[index].modelo 
        
    } */
    eliminarAuto : (posicion)=>{          // eliminamos el auto en la posicion que le pasemos , y se guarda en auto vendido , pero no se sobreescribe , sino que a medida que va eliminar se actualiza y queda siempre un solo auto
        let autos = funcionalidadesJSON.leerJSON();
        let variable = autos.splice(posicion,1)
        funcionalidadesJSON.guardarJSON(autos)
        funcionalidadesJSON.guardarVendido(variable)
        
        console.log("Autoeliminado")
    }

}

funcionalidadesJSON.venderAuto("LLL888")

//,{"marca":"RAM","modelo":"Larimie 1500","precio":"7490000","km":"0","color":"Negro","anio":"2020","patente":"RIT590","vendido": false},{"marca":"Renault","modelo":"Duster","precio":"800000","km":"30000","color":"rojo","anio":"2013","patente":"JJJ758","vendido": false}