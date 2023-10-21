function СalculateBySidesAndRadius() {
    const sideA5 = parseFloat(document.getElementById("sideA5").value);
    const sideB5 = parseFloat(document.getElementById("sideB5").value);
    const sideC5 = parseFloat(document.getElementById("sideC5").value);
    const radius5 = parseFloat(document.getElementById("radius5").value);

    if (isNaN(sideA5) || isNaN(sideB5) || isNaN(sideC5) || isNaN(radius5) || sideA5 <= 0 || sideB5 <= 0 || sideC5 <= 0 || radius5 <= 0) {
        alert("Введіть додатні числа для сторін трикутника та радіусу.");
        return;
    }

    const triangleArea = (sideA5 * sideB5 * sideC5) / (4 * radius5);
    document.getElementById("Result5").textContent = triangleArea.toFixed(2);
}