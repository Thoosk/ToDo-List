import { taskFactory } from "./tasks.js";

function createTasksWindow() {
  const tasksDiv = document.createElement("div");
  tasksDiv.setAttribute("id", "tasks");
  const taskHead = document.createElement("section");
  taskHead.classList.add("task-head");
  const h1Element = document.createElement("h1");
  h1Element.innerHTML = "Tasks";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "../src/images/iconmonstr-plus-2.svg");
  const imgSpan = document.createElement("span");
  imgSpan.appendChild(imgElement);

  taskHead.appendChild(h1Element);
  taskHead.appendChild(imgSpan);
  tasksDiv.appendChild(taskHead);
}

function createTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  const name = document.createElement("p");
  name.innerHTML = task.taskName;
  const dueDate = document.createElement("p");
  dueDate.innerHTML = task.taskDueDate;
  const priority = document.createElement("img");
  priority.setAttribute("src", "../src/images/iconmonstr-warning-10.svg");
  const expandImg = document.createElement("img");
  expandImg.setAttribute("src", "../src/images/iconmonstr-arrow-65.svg");
  const expandSpan = document.createElement("span");
  expandSpan.classList.add("expand");
  expandSpan.appendChild(expandImg);

  taskDiv.appendChild(name);
  taskDiv.appendChild(dueDate);
  taskDiv.appendChild(priority);
  taskDiv.appendChild(expandSpan);

  const tasks = document.getElementById("tasks");
  tasks.appendChild(taskDiv);
}

// function expandTask(task) {
//     const openTask = document.createElement("div");
//     openTask.classList.add("open");
//     const
// }

export { createTask };
