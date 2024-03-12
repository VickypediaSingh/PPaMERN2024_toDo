function getElementByClassName(className) {
    return document.getElementsByClassName(className)[0];
  }
  
  const addButton = getElementByClassName("add-btn");
  const textInput = getElementByClassName("input-box");
  const list = getElementByClassName("list-items");
  const darkModeButton = document.createElement("button");
  darkModeButton.className = "dark-mode-btn";
  darkModeButton.textContent = "Toggle Dark Mode";
  darkModeButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
  };
  
  document.body.appendChild(darkModeButton);
  
  function deleteTodo(index) {
    const items = [...document.getElementsByClassName("todo")];
    list.removeChild(items[index]);
  }
  
  function addTheTodo() {
    const todoText = textInput.value;
    const items = document.getElementsByClassName("todo");
    const length = items.length;
  
    const newTodo = document.createElement("div");
    const dataTag = document.createElement("p");
    const deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = (e) => {
      const isChecked = e.target.checked;
      newTodo.className = isChecked ? "checked-todo" : "todo";
    };
    deleteButton.textContent = "X";
    deleteButton.onclick = () => {
      deleteTodo(length);
    };
    dataTag.textContent = todoText;
    newTodo.appendChild(dataTag);
    newTodo.appendChild(checkBox);
    newTodo.appendChild(deleteButton);
    newTodo.classList.add("todo");
    list.appendChild(newTodo);
    textInput.value = "";
  }
  
  textInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      addTheTodo();
    }
  });
  
  addButton.addEventListener("click", addTheTodo);
  