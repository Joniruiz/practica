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
    
}