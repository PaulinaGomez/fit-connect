module.exports = function(sequelize, DataTypes) {
    var Usuarios = sequelize.define("Usuarios", {
      
      name: DataTypes.STRING,
      correo: DataTypes.STRING,
      telefono: DataTypes.INTEGER
    });
    return Usuarios;
  };
  