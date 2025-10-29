export class TaskModel {
  getAll = () => {
    const tasktlist = [
      {
        id: 1,
        text: "Crear un roadmap para aprender express",
        completed: true,
      },
    ];
    return tasktlist;
  };
}
