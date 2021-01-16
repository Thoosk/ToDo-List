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
  const infoSection = document.createElement("section");
  infoSection.classList.add("info");
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

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", "../src/images/iconmonstr-x-mark-9.svg");
  deleteButton.style.display = "none";

  const checkButton = document.createElement("img");
  checkButton.setAttribute("src", "../src/images/iconmonstr-check-mark-13.svg");
  checkButton.style.display = "none";

  infoSection.appendChild(name);
  infoSection.appendChild(dueDate);
  infoSection.appendChild(priority);

  infoSection.appendChild(deleteButton);
  infoSection.appendChild(checkButton);
  infoSection.appendChild(expandSpan);
  taskDiv.appendChild(infoSection);

  // description
  const descSection = document.createElement("section");
  descSection.classList.add("description");
  const description = document.createElement("p");
  description.innerHTML = task.description;

  const closeSpan = document.createElement("section");
  closeSpan.classList.add("close");

  const closeArrow = document.createElement("img");
  closeArrow.setAttribute("src", "../src/images/iconmonstr-arrow-66.svg");
  closeSpan.appendChild(closeArrow);

  descSection.appendChild(description);
  descSection.appendChild(closeSpan);
  taskDiv.appendChild(descSection);

  const tasks = document.getElementById("tasks");
  tasks.appendChild(taskDiv);
}

function expandTask(taskArrow) {
  const downArrowSpan = taskArrow;
  const task = downArrowSpan.parentElement.parentElement;
  const taskInfo = downArrowSpan.parentElement;
  downArrowSpan.style.display = "none";
  downArrowSpan.previousElementSibling.previousElementSibling.style.display =
    "";
  downArrowSpan.previousElementSibling.style.display = "";
  task.classList.add("open");
  taskInfo.nextElementSibling.classList.add("expanded");

  // add new section 'expanded'
}

function minimizeTask(taskUpArrow) {
  const descSection = taskUpArrow.parentElement;
  const task = descSection.parentElement;

  descSection.classList.remove("expanded");
  task.classList.remove("open");

  const checkImg = task.firstElementChild.lastElementChild.previousSibling;
  const deleteImg =
    task.firstElementChild.lastElementChild.previousSibling.previousSibling;

  const downArrowImg = task.firstElementChild.lastElementChild;

  checkImg.style.display = "none";
  deleteImg.style.display = "none";
  downArrowImg.style.display = "";
}

// function editTask(taskButton) {
//   const editButton = document.
// }

export { createTask, expandTask, minimizeTask };
