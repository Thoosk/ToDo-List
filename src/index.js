import { createTask } from "./dom.js";
import { taskFactory } from "./tasks.js";

function addEvents() {
  const adding = document.getElementById("add-task");
  adding.addEventListener("click", () => {
    const name = prompt("Name of Task", "Taskname");
    const dueDate = prompt("Due Date", "Date");
    const newTask = taskFactory(name, dueDate);
    console.log(newTask);
    createTask(newTask);
  });
}

addEvents();
