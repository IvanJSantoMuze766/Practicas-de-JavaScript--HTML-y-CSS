// Funcion para generar un color RGB aleatorio
function generateColor() {
    // Generar valores aleatorios para los componentes de color RGB
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Obtener el elemento de la caja de color
    var colorDiv = document.getElementById('color');

    // Aplicar el color generado a la caja de color
    colorDiv.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}