let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

// show numbers
function appendNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
}

// show operator
function appendOperator(operator) {
  if (currentInput === '' && operator !== '.') return;
  currentInput += operator;
  display.textContent = currentInput;
}
