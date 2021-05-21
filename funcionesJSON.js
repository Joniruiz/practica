let fs = require("fs");

let datos = fs.readFileSync("./datos.json","utf-8");

let autos = JSON.parse(datos);

console.log(autos);