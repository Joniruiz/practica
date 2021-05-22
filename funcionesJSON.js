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
    venderAuto : (patente) => {
        let autos = funcionalidadesJSON.leerJSON();
        let filtro = autos.find(auto => auto.patente === patente);
        if(filtro){
            let autoVendido = autos.splice(autos.indexOf(filtro),1)
            autoVendido.vendido = true
            console.log(autoVendido);   // si es 0 los corchetes no son necesarios
            funcionalidadesJSON.guardarVendido(filtro);
            console.log("El vehiculo fue transferido a ventas");
        }else{
            console.log("Este vehiculo no esta disponible para la venta ")
        }        
    },
    leerVendidos : () =>{
        let autos=fs.readFileSync('./vendidos.json','utf-8')
        return JSON.parse(autos)
    },
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

