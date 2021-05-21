let fs = require("fs");
let autosVendidos = [];
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
        let autos = funcionalidadesJSON.leerJSON(); // leemos el JSON
        let buscarPatente = autos.find(auto => auto.patente === patente); // filtramos la patente
        
        if (buscarPatente) { // si encuentra la patente 

            funcionalidadesJSON.guardarVendido(buscarPatente);

            console.log("Este es el auto:");
            console.log(buscarPatente);
            return buscarPatente;
            //return funcionalidadesJSON.escribirJsonVendido(buscarPatente);
        } else {
            console.log("No se encontro esa patente o el auto esta vendido"); // sino la encuentra muestra este mensaje
        }
        
    },
}

funcionalidadesJSON.venderAuto("XXX000")
