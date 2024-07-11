const display = document.getElementById("display");
let displayValue = "";
let currentValue = "";
let operator = "";
let result = 0;
let firstOperation = true;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    checkValue(value);
  });
});
const checkValue = (value) => {
  debugger;
  if (!isNaN(value)) {
    handleNumber(value);
  } else handleOperator(value);
};

const handleNumber = (value) => {
  displayValue = displayValue + value;
  display.innerText = displayValue;
  currentValue = currentValue + value;
};

const handleOperator = (op) => {
  operator = "op";
  if (firstOperation) {
    result = parseInt(currentValue);
    display.innerText = result;
    console.log("result 55", result);
    firstOperation = false;
    currentValue = displayValue = "";
  } else {
    switch (op) {
      case "+":
        result = result + parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
      case "-":
        if (currentValue) {
          result = result - parseInt(currentValue);
          display.innerText = result;
          currentValue = displayValue = "";
        }
        break;
      case "/":
        result = result / parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
      case "*":
        result = result * parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
        break;
    }
  }
};
