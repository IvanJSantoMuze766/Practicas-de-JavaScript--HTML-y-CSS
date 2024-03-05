// Variable global para almacenar el valor del contador
var counterValue = 0;

// Funcion para incrementar el contador
function increment() {
    counterValue++;
    updateCounter();
}

// Funcion para decrementar el contador
function decrement() {
    counterValue--;
    updateCounter();
}

// Funcion para actualizar el valor del contador en la interfaz de usuario
function updateCounter() {
    var counter = document.getElementById('counter');
    counter.textContent = counterValue;
}