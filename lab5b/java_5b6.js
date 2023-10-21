function CheckPalindrome() {
    const number = document.getElementById("checknumber").value;
    const numberString = number.toString();
    const reversedNumberString = numberString.split('').reverse().join('');

    if (isNaN(number) || number < 0) {alert("Введіть додатнє число"); return;}
    else if (numberString === reversedNumberString) {document.getElementById("Result6").textContent = "Це число є паліндромом.";}
    else {document.getElementById("Result6").textContent = "Це число не є паліндромом.";}
}