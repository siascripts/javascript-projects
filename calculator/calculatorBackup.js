const display = document.getElementById("display");
let displayValue = "";
let currentValue = "";
let lastOperator = "";
let result = 0;
let firstOperation = true;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.classList.add("flicker");
    const value = button.innerText;
    checkValue(value);
  });
});
const handleNumber = (value) => {
  debugger;
  displayValue = displayValue + value;
  display.innerText = displayValue;
  currentValue = currentValue + value;
};

const handleOperation = (op) => {
  //if I click AC again and it has become lastOperator then it is not going inside the operations because of if condition.
  debugger;
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
      case "AC":
        resetDisplay();
        break;
      case "+/-":
        display.innerText = -result;
        break;
    }
  }
};
const resetDisplay = () => {
  debugger;
  displayValue = "";
  currentValue = "";
  lastOperator = "";
  result = 0;
  firstOperation = true;
  display.innerText = "0";
};

const handleOperator = (op) => {
  debugger;
  if (firstOperation && parseFloat(currentValue)) {
    if (op !== "=") {
      // op = AC
      lastOperator = op;
    }
    result = parseFloat(currentValue); // if first operation result is assigned with currentvalue and AC does not go to else part.
    display.innerText = result;
    firstOperation = false;
    currentValue = displayValue = "";
  } else {
    // if second operation then it is calling handleOperation and with last operator which is not AC.
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
