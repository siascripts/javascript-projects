//Counter Heading
const h1 = document.createElement("h1");
const textNode = document.createTextNode("Counter");
h1.appendChild(textNode);
document.body.appendChild(h1);
h1.setAttribute("style", "color:blue;text-align:center;font-size:60px;");

const div1 = document.createElement("div");
const number = document.createTextNode("0");
div1.appendChild(number);
div1.setAttribute("id", "number");
document.body.appendChild(div1);
div1.setAttribute("style", "color:black;text-align:center;font-size:40px;");

//Buttons and Styles
const div3 = document.createElement("div");
const button1 = document.createElement("button");
const minusButton = document.createTextNode("-");
button1.appendChild(minusButton);
const button2 = document.createElement("button");
const plusButton = document.createTextNode("+");
button2.appendChild(plusButton);
div3.appendChild(button1);
div3.appendChild(button2);
document.body.appendChild(div3);
div3.setAttribute("style", "text-align:center;margin-top:20px;");
button1.setAttribute(
  "style",
  "color:Red;text-align:center;font-size:50px;height:60px;width:100px;margin-right:15px;"
);
button2.setAttribute(
  "style",
  "color:green;text-align:center;font-size:50px;height:60px;width:100px;"
);

//Add Event Listener and Functions
const operation = (op) => {
  return function doOperation() {
    const numElement = document.getElementById("number");
    let intNum = parseInt(numElement.innerText);
    const operator = op;

    if (operator === "+") {
      const result = ++intNum;
      numElement.innerHTML = result;
    } else if (operator === "-" && intNum > 0) {
      const result = --intNum;
      numElement.innerHTML = result;
    }

    // Enable or disable the minus button based on the counter value
    if (intNum === 0) {
      button1.disabled = true;
    } else {
      button1.disabled = false;
    }
  };
};

button1.disabled = true;

//Add Event Listener
// const operation2 = (op) => {
//   const numElement = document.getElementById("number");
//   let intNum = parseInt(numElement.innerText);
//   const operator = op;
//   if (operator === "+") {
//     intNum += 1;
//     numElement.innerHTML = intNum;
//   } else if (operator === "-" && intNum > 0) {
//     intNum -= 1;
//     numElement.innerHTML = intNum;
//   }
// };

// button1.addEventListener("click", () => {
//   operation("-");
// });
// button2.addEventListener("click", function () {
//   operation("+");
// });

button1.addEventListener("click", operation("-"));
button2.addEventListener("click", operation("+"));
