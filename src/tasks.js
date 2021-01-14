const taskFactory = (name, dueDate) => {
  let name = name;
  let dueDate = dueDate;
  let priority = 0;
  let finished = 0;
  let description = "";

  const changeName = (newName) => {
    name = newName;
  };

  const changeDate = (newDate) => {
    dueDate = newDate;
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

  return { name, dueDate };
};
