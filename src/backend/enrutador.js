const recursos = require("./recursos");
const veterinarias = require("./rutas/veterinarias");


module.exports = {
  ruta: (data, callback) => {
    callback(200, { mensaje: "esta es /ruta" });
  },
  mascotas: mascotas(recursos.mascotas),
  veterinarias: veterinarias(recursos.veterinarias),
  duenos: duenos(recursos.duenos),
  consultas: consultas(recursos.consultas),
  noEncontrado: (data, callback) => {
    callback(404, { mensaje: "no encontrado" });
  },
};
