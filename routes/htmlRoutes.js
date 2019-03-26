var db = require("../models");
var moment = require("moment");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("index", {
        login: true,
      });
    });
  });

  app.get("/usuarios", function (req, res) {
    //funcion para agregar datos de usuario con servicios por vencer
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("usuario-main", {
        usuarios: true,
      });
    });
  });

  //funciones usuario/servicios

//RENDER USUARIOS
app.get("/usuario/maintable/:id", function (req, res) {
  db.mainTable.findAll({
    where: {
      UsuarioId: req.params.id
    },
    include: [db.Servicios, db.Ubicacion, db.Usuarios]
  }).then(function (mainTable) {
    res.render("usuario-serviciosFinal", {
      usuarios: true,
      mainTable: mainTable
    });

  });
});



  // carga raiz admin-usuarios
  app.get("/admin/usuarios", function (req, res) {
    db.Usuarios.findAll({}).then(function (
      dbUsuarios
    ) {
      res.render("admin-usuarios", {
        admin: true,
        datos: dbUsuarios
      });
    });
  });

  app.get("/admin", function (req, res) {
    db.mainTable.findAll({
      where: {
        fechaFinal: {
          $gte: moment().subtract(7, 'days').toDate()
        }
      }
    }).then(function (
      dbmainTable
    ) {
      console.log(dbmainTable);

      res.render("admin-main", {
        mainTable: dbmainTable,
        admin: true
      });
    });
  });

  // carga raiz admin-servicios
  app.get("/admin/servicios", function (req, res) {
    db.Servicios.findAll({}).then(function (
      dbServicios) {
      res.render("admin-serviciosFinal", {
        admin: true,
        servicios: dbServicios
      });
    });
  });


  //carga admin, agrega y elimina servicio al usuario
  app.get("/admin/servicios/addDel", function (req, res) {
    db.mainTable.findAll({
      include: [
        db.Servicios, db.Ubicacion, db.Usuarios
      ]
    }).then(function (dbmainTable) {
      console.log(dbmainTable);
      res.render("admin-serviciosAddDelete", {
        admin: true,
        mainTable: dbmainTable
      });
    });
  });







  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
