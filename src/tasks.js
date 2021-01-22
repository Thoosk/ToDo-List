const taskFactory = (name, dueDate, desc, prior) => {
  let taskName = name ? name : "Task";
  let taskDueDate = dueDate ? dueDate : new Date().toDateString();
  let priority = prior;
  let finished = 0;
  let description = desc ? desc : "Description";

  return {
    taskName,
    taskDueDate,
    description,
    priority,
    finished,
  };
};

let taskCollection = [];

function addTask(task) {
  taskCollection.push(task);
}

function removeTaskFromCollection(taskName) {
  let foundIndex = taskCollection.findIndex(
    (task) => task.taskName === taskName
  );

  const modifiedArray = taskCollection.splice(foundIndex, 1);
}

function editTaskInCollection(
  previousName,
  newTaskName,
  newDueDate,
  newDescription,
  newPriority
) {
  let foundIndex = taskCollection.findIndex(
    (task) => task.taskName === previousName
  );

  if (!checkIfFieldIsEmpty(newTaskName)) {
    taskCollection[foundIndex].taskName = newTaskName;
  }

  if (!checkIfFieldIsEmpty(newDueDate)) {
    taskCollection[foundIndex].taskDueDate = newDueDate;
  }

  if (!checkIfFieldIsEmpty(newDescription)) {
    taskCollection[foundIndex].description = newDescription;
  }
  // taskCollection[foundIndex].taskName = newTaskName;
  // taskCollection[foundIndex].dueDate = newDueDate;
  // taskCollection[foundIndex].description = newDescription;
  taskCollection[foundIndex].priority = newPriority;
}

function checkIfFieldIsEmpty(value) {
  if (value === "") {
    return 1;
  } else {
    return 0;
  }
}

export {
  taskFactory,
  taskCollection,
  addTask,
  removeTaskFromCollection,
  editTaskInCollection,
  checkIfFieldIsEmpty,
};
