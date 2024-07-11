const display = document.getElementById("display");

let displayValue = "";
let currentValue = "";
let lastOperator = "";
let result = null; // Use null to identify if the result is not yet set

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    checkValue(value);
  });
});

const handleNumber = (value) => {
  displayValue += value;
  display.innerText = displayValue;
  currentValue += value;
};

const handleOperation = (op) => {
  if (currentValue) {
    switch (op) {
      case "+":
        result =
          result !== null
            ? result + parseFloat(currentValue)
            : parseFloat(currentValue);
        break;
      case "-":
        result =
          result !== null
            ? result - parseFloat(currentValue)
            : parseFloat(currentValue);
        break;
      case "*":
        result =
          result !== null
            ? result * parseFloat(currentValue)
            : parseFloat(currentValue);
        break;
      case "/":
        result =
          result !== null
            ? result / parseFloat(currentValue)
            : parseFloat(currentValue);
        break;
    }
    display.innerText = result;
    currentValue = displayValue = "";
  }
};

const resetDisplay = () => {
  displayValue = "";
  currentValue = "";
  lastOperator = "";
  result = null;
  display.innerText = "0";
};

const toggleSign = () => {
  if (currentValue) {
    currentValue = (-parseFloat(currentValue)).toString();
    displayValue = currentValue;
    display.innerText = displayValue;
  } else if (result !== null) {
    result = -result;
    display.innerText = result;
  }
};

const percentage = () => {
  if (currentValue) {
    displayValue = parseFloat(currentValue) / 100;
    display.innerText = displayValue;
  } else if (result !== null) {
    result = result / 100;
    display.innerText = result;
  }
};

const handleOperator = (op) => {
  display.classList.add("flicker");
  setTimeout(() => {
    display.classList.remove("flicker");
  }, 500);
  if (op === "AC") {
    resetDisplay();
  } else if (op === "+/-") {
    toggleSign();
  } else if (op === "%") {
    percentage();
  } else if (op === "=") {
    if (lastOperator && currentValue) {
      handleOperation(lastOperator);
      lastOperator = ""; // Reset the last operator after performing the operation
    }
  } else {
    if (currentValue) {
      if (result === null) {
        result = parseFloat(currentValue);
      } else {
        handleOperation(lastOperator);
      }
    }
    lastOperator = op;
    currentValue = displayValue = ""; // Clear currentValue and displayValue after setting the operator
  }
};

const checkValue = (value) => {
  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else {
    handleOperator(value);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const minimizeBtn = document.querySelector(".minimize-btn");
  const windowElement = document.querySelector(".container");

  minimizeBtn.addEventListener("click", function () {
    windowElement.classList.add("minimized");
  });
});
