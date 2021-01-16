import { createTask, expandTask, minimizeTask, showPopUp } from "./dom.js";
import { taskFactory } from "./tasks.js";

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
      console.log("test");
      const newTask = taskFactory(
        document.querySelector("#taskName").value,
        document.querySelector("#dueDate").value,
        document.querySelector("#description").value,
        document.querySelector("#priority").value
      );
      popUp.style.display = "none";
      createTask(newTask);
      addSingleExpandListener();
      minimizeListener();
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
    const tasksElement = document.getElementById("tasks");
    const newTaskArrow =
      tasksElement.lastElementChild.lastElementChild.previousElementSibling
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

  // function editListener() {
  //   const editElement = document.ge
  // }

  addingListener();
  expandListener();
  minimizeListener();
  submitListener();
}

addEvents();
