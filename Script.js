function AddTask() {
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  inputValue = document.getElementById("taskInput").value;
  if (inputValue === "") {
    alert("Please enter a task name.");
    return taskList.removeChild(newTask); // Remove the empty task item if input is empty
  }
  newTask.textContent = inputValue;
  const newtaskDate = new Date().toLocaleString();
  const taskDate = document.createElement("span");
  taskDate.textContent = newtaskDate;
  newTask.appendChild(taskDate);
  document.getElementById("taskInput").value = "";
  deleteTask(newTask);
  markAsDone(newTask);
}

function deleteTask(newTask) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newTask.appendChild(deleteButton);
  deleteButton.onclick = function () {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(newTask);
  };
}

function markAsDone(newTask) {
  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  newTask.appendChild(doneButton);
  doneButton.onclick = function () {
    newTask.style.textDecoration = "line-through";
    newTask.style.backgroundColor = "lightgreen";
    newTask.style.color = "black";
    newTask.removeChild(doneButton);
  };
}
