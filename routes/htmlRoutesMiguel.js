var db = require("../models");

module.exports = function (app) {
    //partir de este ejemplo
    app.get("/api/posts/maintables/:maintables", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    },
        where: {
            maintables: req.fechafinal.maintables
        }
    }

    .then(function (dbUsuarios) {

        res.json(dbUsuarios);
        {
            res.render("index", {
                msg: "Suscripciones próximas a vencer",
            });
        }
    });
    });


// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
    res.render("404");
});
};
