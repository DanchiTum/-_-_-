function CheckFibonacci() {
    const number = parseInt(document.getElementById("somenumber").value);
    if (isNaN(number) || number < 0) {alert("Введіть додатнє число"); return;}

    if (isFibonacci(number)) {
        document.getElementById("Result9").textContent = `${number} належить послідовності Фібоначчі.`;
    } else {
        document.getElementById("Result9").textContent = `${number} не належить послідовності Фібоначчі.`;
    }
}

function isFibonacci(n) {
    let a = 0;
    let b = 1;
    while (b < n) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b === n;
}