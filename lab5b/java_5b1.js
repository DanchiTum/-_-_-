function CalculateBySides() {
    const sideA1 = parseFloat(document.getElementById("sideA1").value);
    const sideB1 = parseFloat(document.getElementById("sideB1").value);
    const sideC1 = parseFloat(document.getElementById("sideC1").value);

    if (isNaN(sideA1) || isNaN(sideB1) || isNaN(sideC1) || sideA1 <= 0 || sideB1 <= 0 || sideC1 <= 0) {
        alert("Введіть додатні числа для сторін трикутника.");
        return;
    }

    const s = (sideA1 + sideB1 + sideC1) / 2;
    const triangleArea = Math.sqrt(s * (s - sideA1) * (s - sideB1) * (s - sideC1));

    document.getElementById("Result1").textContent = triangleArea.toFixed(2);
}