module.exports = function (sequelize, DataTypes) {
    var Servicios = sequelize.define("Servicios", {
        
        servicio: DataTypes.STRING,
        costo: DataTypes.INTEGER
    });
    return Servicios;
};
