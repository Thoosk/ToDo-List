import {
  createTask,
  expandTask,
  minimizeTask,
  showPopUp,
  removeTask,
  clonePopUp,
  editTaskInDOM,
} from "./dom.js";
import {
  taskFactory,
  addTask,
  taskCollection,
  removeTaskFromCollection,
  editTaskInCollection,
} from "./tasks.js";

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

  function addSingleRemoveListener() {
    const tasksElement = document.getElementById("tasks");
    const task = tasksElement.lastElementChild;
    const removeElement =
      tasksElement.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling.previousElementSibling
        .previousElementSibling;

    removeElement.addEventListener("click", () => {
      removeTask(task);
      removeTaskFromCollection(
        task.firstElementChild.firstElementChild.textContent
      );
    });
  }

  function editListener() {
    const tasksElement = document.getElementById("tasks");
    // console.log(tasksElement);
    const editElement =
      tasksElement.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling.previousElementSibling;

    const task = editElement.parentElement.parentElement;

    editElement.addEventListener("click", () => {
      //returns the submit-button without eventlistener
      const submitElement = clonePopUp(editElement);

      const taskName = task.firstChild.firstChild.innerHTML;
      // console.log(taskName);
      editSubmitListener(submitElement, taskName, task);
    });
  }

  function editSubmitListener(submitButton, taskName, task) {
    let oldTaskName = taskName;
    // console.log(oldTaskName);
    submitButton.addEventListener("click", () => {
      const priority =
        submitButton.previousElementSibling.previousElementSibling;
      // console.log(priority.value);
      const description =
        priority.previousElementSibling.previousElementSibling
          .previousElementSibling;
      // console.log(description.value);
      const dueDate =
        description.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling;
      // console.log(dueDate.value);
      const name =
        dueDate.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling;
      // console.log(name.value);
      submitButton.parentElement.parentElement.remove();

      // console.log(name.value, dueDate.value, description.value, priority.value);

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
    const tasksElement = document.getElementById("tasks");
    // console.log(tasksElement);
    const checkElement =
      tasksElement.lastElementChild.lastElementChild.previousElementSibling
        .lastElementChild.previousElementSibling;

    const task = checkElement.parentElement.parentElement;

    console.log(checkElement);
  }

  // WIP

  addingListener();
  expandListener();
  minimizeListener();
  submitListener();
  addSingleRemoveListener();
  editListener();
}

addEvents();
