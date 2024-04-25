document.addEventListener('DOMContentLoaded', function() {
    // Función para pedir el nombre al usuario
    function pedirNombre() {
      var nombre = prompt("Por favor, ingresa tu nombre:");
      // Verificar si se ingresó un nombre y actualizar el formulario
      if (nombre !== null && nombre !== "") {
        document.getElementById("encuestaForm").setAttribute("data-nombre", nombre);
        document.querySelectorAll(".nombreSpan").forEach(function(span) {
          span.textContent = nombre;
        });
      } else {
        alert("Debes ingresar tu nombre para continuar.");
        pedirNombre(); // Volver a pedir el nombre si no se ingresó nada
      }
    }
  
    // Llamar a la función para pedir el nombre al cargar la página
    pedirNombre();
  
    // Actualizar el valor de la calificación de experiencia en tiempo real
    document.getElementById('experiencia').addEventListener('input', function() {
      document.getElementById('valorExperiencia').textContent = this.value;
    });
  });