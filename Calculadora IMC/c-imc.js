// Funcion para calcular el IMC
function calculateBMI() {
    // Obtener el peso y la altura ingresados por el usuario
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Calcular el IMC (peso / altura^2)
    var bmi = weight / (height * height);

 // Determinar la categoría de peso basada en el IMC
    var category;
    var result = document.getElementById('result');
    if (bmi < 18.5) {
        category = 'Bajo peso';
        result.innerHTML = '<strong>Índice de Masa Corporal (IMC):</strong> ' + bmi.toFixed(2) + '<br><strong>Categoría:</strong> <span class="low-weight">' + category + '</span>';
} else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Peso normal';
        result.innerHTML = '<strong>Índice de Masa Corporal (IMC):</strong> ' + bmi.toFixed(2) + '<br><strong>Categoría:</strong> <span class="normal-weight">' + category + '</span>';
} else if (bmi >= 25 && bmi < 29.9) {
        category = 'Sobrepeso';
        result.innerHTML = '<strong>Índice de Masa Corporal (IMC):</strong> ' + bmi.toFixed(2) + '<br><strong>Categoría:</strong> <span class="overweight">' + category + '</span>';
} else {
        category = 'Obesidad';
        result.innerHTML = '<strong>Índice de Masa Corporal (IMC):</strong> ' + bmi.toFixed(2) + '<br><strong>Categoría:</strong> <span class="obesity">' + category + '</span>';
}
}