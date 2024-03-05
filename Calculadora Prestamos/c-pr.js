// Funcion para calcular el pago mensual del prestamo
function calculateLoan() {
    // Obtener los valores de entrada del usuario
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    // Calcular el pago mensual utilizando la formula de una hipoteca
    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Mostrar el resultado al usuario
    var result = document.getElementById('result');
    result.textContent = 'El pago mensual es de: $' + monthlyPayment.toFixed(2);
}