$(document).ready(function () {

  $(".agregar").on("click", function (event) {

    let id = $(this).data("fila");

    var newService = {
      id: id,
      servicio: servicio,
      costo: costo,
    };

    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/usuarios/servicios",
      data: JSON.stringify(newService)
    });
  }



  //   $(".agregar").on("click", function (event) {
  //   event.preventDefault();

  //   let id = $(this).data("fila");



  //   var newService = {
  //     id: id,
  //     servicio: servicio,
  //     costo: costo,
  //   };

  //   // send an AJAX to update



  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/usuarios/servicios",
  //     data: newService
  //   }).then(function (data) {
  //     alert("Updated data")
  //   });

  // });

})