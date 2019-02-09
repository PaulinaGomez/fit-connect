//var moment = require('moment');


module.exports = function (sequelize, DataTypes) {
  var mainTable = sequelize.define("mainTable", {
   
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false

    },
    fechaFinal: {
      type: DataTypes.DATE,
      allowNull: false

    },
  });

  mainTable.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    mainTable.belongsTo(models.Usuarios, {
      foreignKey: {
        allowNull: false
      }
    });

    mainTable.belongsTo(models.Servicios, {
      foreignKey: {
        allowNull: false
      }
    });

    mainTable.belongsTo(models.Ubicacion, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return mainTable;
};