var db = require("../models");

module.exports = function (app) {

    //Funciones admin usuarios
    app.get("/api/admin/usuarios", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

    // Get all examples
    app.post("/api/admin/usuarios", function (req, res) {
        db.Usuarios.create(req.body).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

    app.put("/api/admin/usuarios", function (req, res) {
        db.Usuarios.update({
            name: req.body.name,
            correo: req.body.correo,
            telefono: req.body.telefono

        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUsuarios) {
                res.json(dbUsuarios)
            });
    });

    app.delete("/api/admin/usuarios", function (req, res) {
        db.Usuarios.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbUsuarios) {
            res.json(dbUsuarios)
        });
    });



    //FUNCIONES ADMIN SERVICIOS

    app.get("/api/admin/servicios", function (req, res) {
        db.Servicios.findAll({}).then(function (dbServicios) {
            res.json(dbServicios);
        });
    });

    // Create a new example
    app.post("/api/admin/servicios", function (req, res) {
        db.Servicios.create(req.body).then(function (dbServicios) {
            res.json(dbServicios);
        });
    });

    //Update
    app.put("/api/admin/servicios", function (req, res) {
        db.Servicios.update({
            servicio: req.body.servicio,
            costo: req.body.costo
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbServicio) {
                res.json(dbServicio);
            })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    // Delete an example by id
    app.delete("/api/admin/servicios", function (req, res) {
        db.Servicios.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbServicios) {
            console.log("deleted");
            res.json(dbServicios);
        });
    });

    // Delete an example by id
    app.delete("/api/admin/usuarioDelServicio", function (req, res) {
        db.mainTable.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbmainTable) {
            console.log("deleted");
            res.json(dbmainTable);
        });
    });


    //usuarios
    app.get("/api/admin/usuarios", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

    //ubicaciones
    app.get("/api/admin/ubicacion", function (req, res) {
        db.Ubicacion.findAll({}).then(function (dbUbicaciones) {
            res.json(dbUbicaciones);
        });
    });

    //mainTable
    app.post("/api/admin/AddDelServUser", function (req, res) {
        db.mainTable.create(req.body).then(function (dbmainTable) {
            res.json(dbmainTable);
        });
    });

    //FUNCIONES USUARIO SERVICIOS
    //GET CURRENT PEOPLE IN MAINTABLE
    app.get("/api/maintable", function (req, res) {
        db.mainTable.findAll({}).then(function (mainTable) {
            res.json(mainTable);
        });
    });

    // GET CURRENT USERS
    app.get("/api/usuarios", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

    app.get("/api/usuario/servicios", function (req, res) {
        db.Servicios.findAll({}).then(function (dbServicios) {
            res.json(dbServicios);
        });
    });

    app.get("/api/usuario/ubicaciones", function (req, res) {
        db.Ubicacion.findAll({}).then(function (Ubicacion) {
            res.json(Ubicacion);
        });
    });

    //POST NEW SERVICE TO USER
    app.post("/api/usuario/servicios/:id", function (req, res) {
        db.mainTable.create(req.body).then(function (dbmainTable) {
            res.json(dbmainTable);
        });
    });
};

