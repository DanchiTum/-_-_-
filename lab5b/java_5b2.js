function CalculateBySidesAndAngle() {
    const sideA2 = parseFloat(document.getElementById("sideA2").value);
    const sideB2 = parseFloat(document.getElementById("sideB2").value);
    const angle2 = parseFloat(document.getElementById("angle2").value);

    if (isNaN(sideA2) || isNaN(sideB2) || isNaN(angle2) || sideA2 <= 0 || sideB2 <= 0) {
        alert("Введіть додатні числа для сторін трикутника.");
        return;
    }

    const AngleRadians = (angle2 * Math.PI) / 180;
    const TriangleArea = (0.5 * sideA2 * sideB2 * Math.sin(AngleRadians));

    document.getElementById("Result2").textContent = TriangleArea.toFixed(2);
}