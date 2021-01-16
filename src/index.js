import { createTask, expandTask, minimizeTask } from "./dom.js";
import { taskFactory } from "./tasks.js";

function addEvents() {
  function addingListener() {
    const adding = document.getElementById("add-task");
    adding.addEventListener("click", () => {
      const name = prompt("Name of Task", "Taskname");
      const dueDate = prompt("Due Date", "Date");
      const description = prompt("Description", "What to do");
      const newTask = taskFactory(name, dueDate, description);
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
}

addEvents();
