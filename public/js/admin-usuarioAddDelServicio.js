$(document).ready(function () {

    $(".agregar").on("click", function (event) {
        event.preventDefault();

        function validateForm() {
            var isValid = true;

            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });


            $(".custom-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                fechaInicio: $("#inicio").val(),
                fechaFinal: $("#final").val(),
                UsuarioId: $("#user").val(),
                ServicioId: $("#servicio").val(),
                UbicacionId: $("#ubicacion").val()
            };


            // AJAX post the data to the friends API.
            $.post("/api/admin/AddDelServUser", userData)
                // on success, run this callback
                .then(function (data) {
                    // log the data we found

                    // tell the user we're adding a character with an alert window
                    alert("Agregando Servicio...");
                    location.reload();
                });

                $.get("/api/admin/AddDelServUser", userData)
                // on success, run this callback
                .then(function (data) {                                        
                    
                    location.reload();
                });

            // empty each input box by replacing the value with an empty string
            $("#inicio").val("");
            $("#final").val("");
            $("#user").val("");
            $("#servicio").val("");
            $("#ubicacion").val("");
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });

    //Para eliminar un servicio del catalogo
    $(".delete").on("click", function (event) {
        event.preventDefault();

        let id = $(this).data("fila");
        // debugger;
        var deletedServicio = {
            id: id,
        };

        // send an AJAX to DELETE
        $.ajax({
            method: "DELETE",
            url: "/api/admin/usuarioDelServicio",
            data: deletedServicio
        }).then(function (data) {
            alert("Deleted data")
            location.reload();
        });

    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //Usuario
    var userSelect = $("#user");

    // Getting the authors, and their posts
    getUsuarios();

    // A function to get Users and then render our list of Authors
    function getUsuarios() {
        $.get("/api/admin/usuarios", renderUserList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderUserList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
        }
        userSelect.empty();

        // console.log(userSelect);
        userSelect.append(rowsToAdd);
        // userSelect.val(authorId);


    }

    // Creates the user options in the dropdown
    function createUserRow(user) {
        var listOption = $("<option>");
        listOption.attr("value", user.id);
        listOption.text(user.name);
        return listOption;
    }



    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //Ubicacion
    var ubicacionSelect = $("#ubicacion");

    // Getting the authors, and their posts
    getUbicaciones();

    // A function to get Users and then render our list of Authors
    function getUbicaciones() {
        $.get("/api/admin/ubicacion", renderUbicacionList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderUbicacionList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUbicacionRow(data[i]));
        }
        ubicacionSelect.empty();

        // console.log(userSelect);
        ubicacionSelect.append(rowsToAdd);
        // userSelect.val(authorId);


    }

    // Creates the user options in the dropdown
    function createUbicacionRow(ubicacion) {
        var listOption = $("<option>");
        listOption.attr("value", ubicacion.id);
        listOption.text(ubicacion.nombre);
        return listOption;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////
    //Servicio
    var servicioSelect = $("#servicio");

    // Getting the authors, and their posts
    getServicios();

    // A function to get Users and then render our list of Authors
    function getServicios() {
        $.get("/api/admin/servicios", renderServiciosList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderServiciosList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createServicioRow(data[i]));
        }
        servicioSelect.empty();

        // console.log(userSelect);
        servicioSelect.append(rowsToAdd);
        // userSelect.val(authorId);


    }

    // Creates the user options in the dropdown
    function createServicioRow(servicio) {
        var listOption = $("<option>");
        listOption.attr("value", servicio.id);
        listOption.text(servicio.servicio);
        return listOption;
    }


});

