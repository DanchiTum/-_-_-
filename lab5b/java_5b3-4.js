function CalculateByHeight() {
    const side3_4 = parseFloat(document.getElementById("side3-4").value);
    const height3_4 = parseFloat(document.getElementById("height3-4").value);

    if (isNaN(side3_4) || isNaN(height3_4) || side3_4 <= 0 || height3_4 <= 0) {
        alert("Введіть додатні числа для сторони та висоти.");
        return;
    }

    const triangleArea = (0.5 * side3_4 * height3_4);
    document.getElementById("Result3-4").textContent = triangleArea.toFixed(2);
}