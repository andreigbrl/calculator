let add = (number1, number2) => number1 + number2;
let subtract = (number1, number2) => number1 - number2;
let multiply = (number1, number2) => number1 * number2;
let divide = (number1, number2) => number1 / number2;
let display = document.querySelector('#display');
let operatorButtons = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let displayValue = 0;

let firstNumber = "";
let secondNumber = "";
let operator = "";
function operate(number1, operator, number2) {
    if (operator == "+") { return add(number1, number2); };
    if (operator == "-") { return subtract(number1, number2); };
    if (operator == "*") { return multiply(number1, number2); };
    if (operator == "/") {
        if (number2 == 0) {
            return "error";}
         else { return divide(number1, number2);} };
};
function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 9 ) {
        display.textContent = displayValue.splice(9);
    }
};
updateDisplay();
let digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((digit) => {
    digit.addEventListener('click', function (e) {
        if (operator == "") {
            firstNumber += e.target.textContent;
            displayValue = firstNumber;
            updateDisplay();
        } else {
            secondNumber += e.target.textContent;
            displayValue = secondNumber;
            updateDisplay();
        }
    });
});
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        operator = e.target.textContent;
        console.log(e);
        if (firstNumber != "" && secondNumber != "") {
            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);
            operate(firstNumber, operator, secondNumber);
        };
    });
});
clear.addEventListener('click', () => {
    display.textContent = "";
    displayValue = 0;
    firstNumber = "";
    secondNumber = "";
    operator = "";
});
let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    displayValue = operate(firstNumber, operator, secondNumber);
    updateDisplay();
    // displayValue = Number(displayValue);
    firstNumber = displayValue;
    secondNumber = "";
});