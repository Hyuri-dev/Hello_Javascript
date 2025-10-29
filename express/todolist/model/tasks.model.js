class TaskModel {
  constructor() {
    this.tasks = [
      {
        id: 1,
        text: "Crear un roadmap para aprender express",
        completed: true,
      },
    ];
    this.currentId = 1;
  }

  getAll = () => {
    return this.tasks;
  };

  findId = (id) => {
    return this.tasks.find((task) => task.id === id);
  };

  createTask = (taskText) => {
    this.currentId += 1;
    const newTask = { id: this.currentId, text: taskText, completed: false };

    this.tasks.push(newTask);
    return newTask;
  };
}

module.exports = { TaskModel };
