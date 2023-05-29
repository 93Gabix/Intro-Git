const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});


const miDiv = document.getElementById("peli1");
// Objeto que contiene los nombres y rutas de las imágenes
var imagenes = {
  "ryf1": miDiv,
  "ryf2": "../Nueva carpeta/IMG/ryf2.webp",
  "ryf3": "../Nueva carpeta/IMG/ryf3.jpg",
};

function buscarImagen() {
  var nombre = document.getElementById("inputNombre").value.toLowerCase();
  
  // Verificar si el nombre existe en el objeto de imágenes
  if (nombre in imagenes) {
    var rutaImagen = imagenes[nombre];
    // Redirigir al usuario a la ubicación de la imagen
    window.location.href = rutaImagen;
  } else {
    alert("No se encontró ninguna imagen para ese nombre.");
  }
}