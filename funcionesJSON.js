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
    /*
    1. ver si esta la patente
    2. sacar el auto
    3. agregar el auto a otro array
    */
    venderAuto : (patente) => {
        let autos = funcionalidadesJSON.leerJSON();
        let filtro = autos.find(auto => auto.patente === patente);
        let autoVendido = autos.pop(filtro);
        console.log(filtro); 
        let meterAuto = autosVendidos.push(autoVendido);
        funcionalidadesJSON.guardarJSON(meterAuto);
        
    }
    
    
    
}
console.log(funcionalidadesJSON.venderAuto("XXX000"));
console.log(autosVendidos);
console.log(meterAuto);