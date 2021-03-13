import "./style.css";
import "./reset.css";
import {
  createTask,
  expandTask,
  minimizeTask,
  showPopUp,
  removeTask,
  clonePopUp,
  editTaskInDOM,
  createProject,
  switchProject,
} from "./dom.js";
import {
  taskFactory,
  addTask,
  taskCollection,
  removeTaskFromCollection,
  editTaskInCollection,
  checkOffTask,
} from "./tasks.js";

import { Project } from "./projects.js";

function addEvents() {
  function addingListener() {
    const adding = document.getElementById("add-task");
    adding.addEventListener("click", () => {
      showPopUp();
    });
  }

  function submitListener() {
    const taskSubmit = document.querySelector("#submit-task");
    const popUp = document.querySelector("#popup");

    taskSubmit.addEventListener("click", () => {
      const newTask = taskFactory(
        document.querySelector("#taskName").value,
        document.querySelector("#dueDate").value,
        document.querySelector("#description").value,
        document.querySelector("#priority").value
      );
      popUp.style.display = "none";
      document.querySelector("#taskName").value = "";
      document.querySelector("#dueDate").value = "";
      document.querySelector("#description").value = "";
      document.querySelector("#priority").value = "";
      createTask(newTask);
      addTask(newTask);
      addSingleExpandListener();
      minimizeListener();
      addSingleRemoveListener();
      editListener();
      addCheckListener();
    });
  }

  function expandListener() {
    const expandEvent = Array.from(document.querySelectorAll(".expand"));

    expandEvent.forEach((e) => {
      e.addEventListener("click", () => {
        expandTask(e);
      });
    });
  }

  // works for single new expand arrow
  function addSingleExpandListener() {
    const taskList = document.querySelector(".task-list");
    const newTaskArrow =
      taskList.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild;

    newTaskArrow.addEventListener("click", () => {
      expandTask(newTaskArrow);
    });
  }

  function minimizeListener() {
    const minimizeElements = Array.from(document.querySelectorAll(".close"));

    minimizeElements.forEach((e) => {
      e.addEventListener("click", () => {
        minimizeTask(e);
      });
    });
  }

  function addSingleRemoveListener() {
    const taskList = document.querySelector(".task-list");
    const task = taskList.lastElementChild;
    const removeElement =
      taskList.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling.previousElementSibling
        .previousElementSibling;

    removeElement.addEventListener("click", () => {
      removeTask(task);
      removeTaskFromCollection(
        task.firstElementChild.firstElementChild.textContent
      );
    });

    console.log(taskCollection);
  }

  function editListener() {
    const taskList = document.querySelector(".task-list");

    const editElement =
      taskList.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling.previousElementSibling;

    const task = editElement.parentElement.parentElement;

    editElement.addEventListener("click", () => {
      //returns the submit-button without eventlistener
      const submitElement = clonePopUp(editElement);

      const taskName = task.firstChild.firstChild.innerHTML;

      editSubmitListener(submitElement, taskName, task);
    });
  }

  function editSubmitListener(submitButton, taskName, task) {
    let oldTaskName = taskName;

    submitButton.addEventListener("click", () => {
      const priority =
        submitButton.previousElementSibling.previousElementSibling;

      const description =
        priority.previousElementSibling.previousElementSibling
          .previousElementSibling;

      const dueDate =
        description.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling;

      const name =
        dueDate.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling;

      submitButton.parentElement.parentElement.remove();

      editTaskInCollection(
        oldTaskName,
        name.value,
        dueDate.value,
        description.value,
        priority.value
      );

      editTaskInDOM(
        task,
        name.value,
        dueDate.value,
        description.value,
        priority.value
      );
    });
  }

  function addCheckListener() {
    const taskList = document.querySelector(".task-list");

    const checkElement =
      taskList.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling;

    const task = checkElement.parentElement.parentElement;

    checkElement.addEventListener("click", () => {
      task.style.opacity = 0.2;

      checkOffTask(task.firstElementChild.firstElementChild.innerHTML);
    });
  }

  function addCreateProjectListener() {
    const projectsElement = document.getElementById("projects");

    const newProjectButton =
      projectsElement.firstElementChild.nextElementSibling;

    console.log(newProjectButton);
    newProjectButton.addEventListener("click", () => {
      createProject();
      addSwitchProjectListener();
    });
  }

  function addSwitchProjectListener() {
    const projectElements = document.querySelectorAll(".project");

    projectElements.forEach((project) => {
      project.addEventListener("click", () => {
        switchProject(project.textContent);
      });
    });
  }

  addingListener();
  submitListener();
  addCreateProjectListener();
  addSwitchProjectListener();
}

addEvents();
