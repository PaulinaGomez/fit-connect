
$(document).ready(function () {
    $("#submit").on("click", function (event) {
      event.preventDefault();
  
      // make a newCharacter obj
      var newUser = {
        // name from name input
        name: $("#nombre").val().trim(),
        // role from role input
        correo: $("#correo").val().trim(),
        // age from age input
        telefono: $("#telefono").val().trim(),
      };
  
      // send an AJAX POST-request with jQuery
      $.post("/api/admin/usuarios", newUser)
        // on success, run this callback
        .then(function (data) {
          // log the data we found
          console.log(data);
          // tell the user we're adding a character with an alert window
          alert("Agregando usuario...");
        });
  
      // empty each input box by replacing the value with an empty string
      $("#nombre").val("");
      $("#correo").val("");
      $("#telefono").val("");
    });
  
    $(".editar").on("click", function (event) {
      event.preventDefault();
  
      let id = $(this).data("fila");
  
      var editedUser = {
        id: id,
        name: $(`.fila-${id} .nombre`).text().trim(),
        correo: $(`.fila-${id} .correo`).text().trim(),
        telefono: $(`.fila-${id} .telefono`).text().trim(),
      };
      
        $.ajax({
          method: "PUT",
          url: "/api/admin/usuarios",
          data: editedUser
        }).then(function(data){
          console.log(data)
          alert("updated data");
        });
    
  
  
    });
  });
  
  
  