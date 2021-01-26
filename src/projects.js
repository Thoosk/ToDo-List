class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addToList(task) {
    this.taskList.add(task);
  }

  removeFromList(task) {
    this.taskList.remove(task);
  }

  getName() {
    return this.name;
  }

  getProjectList(name) {
    return this.taskList;
  }
}

export { Project };
