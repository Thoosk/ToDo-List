import { taskFactory, taskCollection, checkIfFieldIsEmpty } from "./tasks.js";
import { Project } from "./projects.js";

import plusSign from "../src/images/iconmonstr-plus-2.svg";
import downArrow from "../src/images/iconmonstr-arrow-65.svg";
import removeImg from "../src/images/iconmonstr-x-mark-9.svg";
import pencilImg from "../src/images/iconmonstr-pencil-8.svg";
import checkingImg from "../src/images/iconmonstr-check-mark-13.svg";
import upArrowImg from "../src/images/iconmonstr-arrow-66.svg";
import warningLow from "../src/images/iconmonstr-warning-10-low.svg";
import warningMedium from "../src/images/iconmonstr-warning-10-medium.svg";
import warningHigh from "../src/images/iconmonstr-warning-10-high.svg";

function createTasksWindow() {
  const tasksDiv = document.createElement("div");
  tasksDiv.setAttribute("id", "tasks");
  const taskHead = document.createElement("section");
  taskHead.classList.add("task-head");
  const h1Element = document.createElement("h1");
  h1Element.innerHTML = "Tasks";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", plusSign);
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
  let priorityLevel = setPriority(task.priority);
  priority.setAttribute("src", priorityLevel);
  const expandImg = document.createElement("img");
  expandImg.setAttribute("src", downArrow);
  const expandSpan = document.createElement("span");
  expandSpan.classList.add("expand");
  expandSpan.appendChild(expandImg);

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", removeImg);
  deleteButton.style.display = "none";
  deleteButton.classList.add("delete");

  const editButton = document.createElement("img");
  editButton.setAttribute("src", pencilImg);
  editButton.style.display = "none";
  editButton.classList.add("edit");

  const checkButton = document.createElement("img");
  checkButton.setAttribute("src", checkingImg);
  checkButton.style.display = "none";
  checkButton.classList.add("check");

  infoSection.appendChild(name);
  infoSection.appendChild(dueDate);
  infoSection.appendChild(priority);

  infoSection.appendChild(deleteButton);
  infoSection.appendChild(editButton);
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
  closeArrow.setAttribute("src", upArrowImg);
  closeSpan.appendChild(closeArrow);

  descSection.appendChild(description);
  descSection.appendChild(closeSpan);
  taskDiv.appendChild(descSection);

  const taskList = document.querySelector(".task-list");
  taskDiv.setAttribute("value", taskList.attributes.value.nodeValue);

  taskList.appendChild(taskDiv);
}

function expandTask(taskArrow) {
  const downArrowSpan = taskArrow;
  const task = downArrowSpan.parentElement.parentElement;
  const taskInfo = downArrowSpan.parentElement;
  downArrowSpan.style.display = "none";
  downArrowSpan.previousElementSibling.previousElementSibling.style.display =
    "";
  downArrowSpan.previousElementSibling.previousElementSibling.previousElementSibling.style.display =
    "";
  downArrowSpan.previousElementSibling.style.display = "";
  task.classList.add("open");
  taskInfo.nextElementSibling.classList.add("expanded");
}

function minimizeTask(taskUpArrow) {
  const descSection = taskUpArrow.parentElement;
  const task = descSection.parentElement;

  descSection.classList.remove("expanded");
  task.classList.remove("open");

  const checkImg = task.firstElementChild.lastElementChild.previousSibling;
  const editImg =
    task.firstElementChild.lastElementChild.previousSibling.previousSibling;
  const deleteImg =
    task.firstElementChild.lastElementChild.previousSibling.previousSibling
      .previousSibling;

  const downArrowImg = task.firstElementChild.lastElementChild;

  checkImg.style.display = "none";
  deleteImg.style.display = "none";
  editImg.style.display = "none";
  downArrowImg.style.display = "";
}

function showPopUp() {
  const popUp = document.querySelector("#popup");
  popUp.style.display = "block";
}

function removeTask(task) {
  task.remove();
}

function clonePopUp(task) {
  // clone old fill-out form
  const popUp = document.getElementById("popup");
  const clone = popUp.cloneNode(true);

  const mainElement = document.getElementById("main");
  clone.setAttribute("id", "edit-popup");
  clone.style.display = "";
  mainElement.appendChild(clone);

  return clone.lastElementChild.lastElementChild;
}

function editTaskInDOM(
  taskElement,
  newName,
  newDueDate,
  newDescription,
  newPriority
) {
  const taskInfoSection = taskElement.firstElementChild;
  const taskDescription = taskElement.lastElementChild;

  // change description
  if (!checkIfFieldIsEmpty(newDescription)) {
    taskDescription.firstElementChild.innerHTML = newDescription;
  }

  // change name
  if (!checkIfFieldIsEmpty(newName)) {
    taskInfoSection.firstElementChild.innerHTML = newName;
  }

  // change duedate
  if (!checkIfFieldIsEmpty(newDueDate)) {
    taskInfoSection.firstElementChild.nextElementSibling.innerHTML = newDueDate;
  }

  // change priority
  let changedPriority = setPriority(newPriority);

  taskInfoSection.firstElementChild.nextElementSibling.nextElementSibling.setAttribute(
    "src",
    changedPriority
  );
}

function setPriority(priorityGrade) {
  let priority = Number(priorityGrade);
  switch (priority) {
    case 0:
      return warningLow;
    case 1:
      return warningMedium;
    case 2:
      return warningHigh;
  }
}

function createProject() {
  const projectName = prompt(
    "What is the name of your new project?",
    "Projectname"
  );

  const newProject = new Project(projectName);

  const newProjectElement = document.createElement("p");
  newProjectElement.innerHTML = projectName;
  newProjectElement.classList.add("project");

  const projectsElement = document.getElementById("projects");
  projectsElement.appendChild(newProjectElement);

  switchProject(projectName);
}

function switchProject(projectName) {
  //where class == task-list and task-list.value != projectname -> hide

  const taskList = document.querySelector(".task-list");
  taskList.setAttribute("value", projectName);

  let taskElements = document.querySelectorAll(".task");

  taskElements.forEach((task) => {
    if (
      task.attributes.value.nodeValue.toLowerCase() == projectName.toLowerCase()
    ) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

// function

export {
  createTask,
  expandTask,
  minimizeTask,
  showPopUp,
  removeTask,
  clonePopUp,
  editTaskInDOM,
  createProject,
  switchProject,
};
