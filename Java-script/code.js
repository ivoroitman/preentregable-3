function calcularCredito() {
    var monto = document.getElementById("monto").value;
    var interes = 0.5; // Tasa de interés del 10%
    var total = parseFloat(monto) + (parseFloat(monto) * interes);
    document.getElementById("resultado").innerHTML = "El total a pagar es: $" + total.toFixed(2);
}
