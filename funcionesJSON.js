let fs = require("fs");

module.exports =  FuncionalidadesJSON={
    leerJSON: () =>{
        let autos=fs.readFileSync('./tareas.json','utf-8')
        return JSON.parse(autos)}
    ,
    guardarJSON : (autosActual) => {
         let autoJSON=JSON.stringify(autosActual);
         fs.writeFileSync('./datos.json', autoJSON, 'utf-8');
    },
    escribirJson : (marca, modelo, precio, km, color, anio, patente, vendido) => {
        let nuevoAuto = {
            marca: marca,
            modelo: modelo,
            precio: precio,
            km: km,
            color: color,
            anio: anio,
            patente: patente,
            vendido: vendido,
        } 
        let autosStock = FuncionalidadesJSON.leerJSON();
        autosStock.push(nuevoAuto);
        FuncionalidadesJSON.guardarJSON(autosStock);
        console.log("auto agregado");
    }
}
