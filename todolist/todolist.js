const newTaskButton = document.getElementById("add-todo"); // button

let completeTodo = document.getElementById("parent");
completeTodo.addEventListener("click", (event) => {
  vanishTextArea();
});
let mainDiv = document.getElementById("todoListItem"); // UL list

let inputBox = document.getElementById("textBox"); //input box
inputBox.style.display = "none";
inputBox.addEventListener("keypress", (event) => {
  console.log(event);
  if (event.key === "Enter") {
    addTodoString();
  }
});

newTaskButton.addEventListener("click", (event) => {
  console.log(event);
  inputBox.style.display = "block";
  inputBox.focus();
  newTaskButton.disabled = true;
  newTaskButton.style.opacity = 0.5;
  completeTodo.style.opacity = 0.5;
  inputBox.style.opacity = 1;
});

const createDeleteButton = (row) => {
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "del-button");
  let deleteButtonText = document.createTextNode("X");
  deleteButton.appendChild(deleteButtonText);
  deleteButton.addEventListener("click", () => {
    row.remove();
  });
  row.appendChild(deleteButton);
};

const addTodoString = () => {
  let newItem = inputBox.value.trim();
  if (newItem === "") {
    return;
  }
  //   let div = document.createElement("div");
  //   div.setAttribute("class", "listItem");
  const row = document.createElement("div");
  let listItem = document.createTextNode(newItem);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");
  row.setAttribute("class", "row");
  row.appendChild(checkbox);

  let p1 = document.createElement("p");
  p1.setAttribute("class", "todo-text");
  p1.appendChild(listItem);
  row.appendChild(p1);

  createDeleteButton(row);

  mainDiv.appendChild(row);
  vanishTextArea();
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      p1.style = "text-decoration: line-through";
    } else p1.style = "text-decoration: none";
  });
};

function vanishTextArea() {
  inputBox.value = "";
  inputBox.style.display = "none";
  newTaskButton.style.opacity = 1;
  completeTodo.style.opacity = 1;
  newTaskButton.disabled = false;
}

localStorage.setItem("arr", JSON.stringify([1, 2, 3, 4]));
console.log(JSON.parse(localStorage.getItem("arr")));
