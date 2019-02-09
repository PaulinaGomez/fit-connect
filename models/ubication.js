module.exports = function(sequelize, DataTypes) {
    var Ubicacion = sequelize.define("Ubicacion", {
      
      nombre: DataTypes.STRING,
      direccion: DataTypes.TEXT
    });
    return Ubicacion;
  };
  