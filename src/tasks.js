const taskFactory = (name, dueDate) => {
  let taskName = name;
  let taskDueDate = dueDate;
  let priority = 0;
  let finished = 0;
  let description = "";

  const changeName = (newName) => {
    taskName = newName;
  };

  const changeDate = (newDate) => {
    taskDueDate = newDate;
  };

  const changePriority = (newPriority) => {
    priority = newPriority;
  };

  const setDescription = (des) => {
    description = des;
  };

  const check = () => {
    finished = 1;
  };

  return { taskName, taskDueDate };
};

const taskLibrary = (task) => {
  let taskCollection = [];

  const addTask = (task) => {
    taskCollection.push(task);
  };

  return { taskCollection, addTask };
};

export { taskFactory };
