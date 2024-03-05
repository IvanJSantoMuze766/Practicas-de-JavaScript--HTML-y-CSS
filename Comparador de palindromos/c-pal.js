// Funcion para verificar si una palabra es un palindromo
function checkPalindrome() {
    // Obtener la palabra ingresada
    var word = document.getElementById('word').value.toLowerCase();

    // Revertir la palabra
    var reversedWord = word.split('').reverse().join('');

    // Verificar si la palabra original es igual a la palabra invertida
    var result = document.getElementById('result');
    if (word === reversedWord) {
        result.textContent = '"' + word + '" es un palíndromo.';
    } else {
        result.textContent = '"' + word + '" no es un palíndromo.';
    }
}