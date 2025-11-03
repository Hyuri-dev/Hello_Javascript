const tasks = [
  { id: 1, task: "Jugar lol", completed: true },
  { id: 2, task: "Momir", completed: false },
];

export class TaskModel {
  static get = {
    allTasks: () => {
      return tasks;
    },
  };
}
