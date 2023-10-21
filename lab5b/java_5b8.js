function CalculateFibonacci() {
    const n = parseInt(document.getElementById("inputnumber").value);
    if (isNaN(n) || n < 0) {alert("Введіть додатнє число"); return;}
    const result = fibonacci(n);
    document.getElementById("Result8").textContent = `Число Фібоначчі для n=${n} дорівнює ${result}.`;
}

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let time_variable;
    for (let i = 2; i <= n; i++) {
        time_variable = a + b;
        a = b;
        b = time_variable;
    }
    return b;
}