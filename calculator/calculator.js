const display = document.getElementById("display");
let displayValue = "";
let currentValue = "";
let lastOperator = "";
let result = 0;
let firstOperation = true;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    checkValue(value);
  });
});
const handleNumber = (value) => {
  displayValue = displayValue + value;
  display.innerText = displayValue;
  currentValue = currentValue + value;
};

const handleOperation = (op) => {
  if (parseFloat(currentValue)) {
    switch (op) {
      case "+":
        result = result + parseFloat(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
      case "-":
        if (currentValue) {
          result = result - parseFloat(currentValue);
          display.innerText = result;
          currentValue = displayValue = "";
        }
        break;
      case "/":
        result = result / parseFloat(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
      case "*":
        result = result * parseFloat(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
      case "=":
        handleOperation(lastOperator);
        break;
    }
  }
};

const handleOperator = (op) => {
  debugger;

  if (firstOperation && parseFloat(currentValue)) {
    if (op !== "=") {
      lastOperator = op;
    }
    result = parseFloat(currentValue);
    display.innerText = result;
    firstOperation = false;
    currentValue = displayValue = "";
  } else {
    handleOperation(lastOperator);
    if (op !== "=") {
      lastOperator = op;
    }
  }
};

const checkValue = (value) => {
  debugger;
  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else handleOperator(value);
};
