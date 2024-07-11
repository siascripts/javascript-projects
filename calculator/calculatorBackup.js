const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if (!isNaN(value) || value === ".") {
      handleNumber(value);
    } else {
      handleOperator(value);
    }
  });
});

const display = document.getElementById("display");
let currentValue = "";
let displayValue = "";

const handleNumber = (value) => {
  currentValue = displayValue += value;
  display.innerText = displayValue;
};

const handleOperator = (op) => {
  console.log("handleOperator", op);
  switch (op) {
    case "=":
      handleOperator(lastop);
      display.innerText = result;
      break;
    case "+":
      if (currentValue) {
        result = result + parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
      }
      break;
    case "-":
      if (currentValue) {
        result = result - parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
      }
      break;
    case "/":
      if (currentValue) {
        result =
          result === null ? currentValue : result / parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
      }
      lastop = "/";

      break;
    case "*":
      if (currentValue && currentValue != 0) {
        result = result * parseInt(currentValue);
        display.innerText = result;
        currentValue = displayValue = "";
      }
      break;
  }
};

console.log("currentValue", currentValue);
console.log("displayValue", displayValue);
console.log("result", result);
