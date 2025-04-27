function AddTask() {
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  const inputValue = document.getElementById("taskInput").value;
  const inputSpan = document.createElement("span");
  inputSpan.id = "Todo-text";
  if (inputValue === "") {
    alert("Please enter a task name.");
    return taskList.removeChild(newTask); // Remove the empty task item if input is empty
  }
  inputSpan.innerText = inputValue;
  newTask.appendChild(inputSpan);
  const newtaskDate = new Date().toLocaleString();
  const taskDate = document.createElement("span");
  taskDate.textContent = newtaskDate;
  newTask.appendChild(taskDate);
  document.getElementById("taskInput").value = "";
  markAsDone(newTask);
  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteSpan = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteSpan.appendChild(deleteButton);
  deleteButton.textContent = "Delete";
  newTask.appendChild(deleteSpan);
  deleteButton.onclick = function () {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(newTask);
  };
}

function markAsDone(newTask) {
  const doneSpan = document.createElement("span");
  const doneButton = document.createElement("button");
  doneSpan.appendChild(doneButton);
  doneButton.textContent = "Done";
  newTask.appendChild(doneSpan);
  doneButton.onclick = function () {
    newTask.style.textDecoration = "line-through";
    newTask.style.backgroundColor = "green";
    newTask.style.color = "yellow";
    newTask.removeChild(doneSpan);
  };
}
