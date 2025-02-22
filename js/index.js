document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  const addTaskBtn = document.getElementById("addTask");

  taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
    }
  });

  addTaskBtn.addEventListener("click", function () {
    const newTask = document.createElement("li");
    newTask.textContent = "Нове завдання " + (taskList.children.length + 1);
    taskList.appendChild(newTask);
  });
});
