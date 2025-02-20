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

// calulate
function calculate() {
  try {
    let result = eval(currentInput);
    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }
    currentInput = result;
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = 'erro';
    currentInput = '';
  }
}
