$(document).ready(function() {

// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#submit").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newService = {
      // name from name input
      servicio: $("#servicio").val().trim(),
      // points from force-points input
      costo: $("#costo").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/admin/servicios", newService)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Agregando Servicio...");
        location.reload();
      });
  
    // empty each input box by replacing the value with an empty string
    $("#servicio").val("");
    $("#costo").val(""); 
});

//Para editar un servicio del catalogo 
$(".editar").on("click", function(event) {
  event.preventDefault();

  let id = $(this).data("fila");

    var editedUser = {
      id: id,
      servicio: $(`.fila-${id} .servicio`).text().trim(),
      costo: $(`.fila-${id} .costo`).text().trim(),
    };

  // send an AJAX to update
  
    $.ajax({
      method: "PUT",
      url: "/api/admin/servicios",
      data: editedUser
    }).then(function(data){
      alert("Updated data")
      location.reload();
    });

});

//Para eliminar un servicio del catalogo
$(".delete").on("click", function(event) {
  event.preventDefault();

  let id = $(this).data("fila");
  // debugger;
    var deletedServicio = {
      id: id,
    };

  // send an AJAX to DELETE
    $.ajax({
      method: "DELETE",
      url: "/api/admin/servicios",
      data: deletedServicio
    }).then(function(data){
      alert("Deleted data")
      location.reload();
    });

});

});
