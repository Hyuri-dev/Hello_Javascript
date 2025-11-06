import { TaskModel } from "../model/tasks.model.js";

export class TaskController {
  static get = {
    All: async (req, res) => {
      const tasklist = await TaskModel.get.all();
      res.status(200).json(tasklist);
    }, // este es el controller que vamos a referenciar en el route,
    getById: (req, res) => {
      const { id } = req.params;

      const task = tasks.find((t) => t.id === parseInt(id));

      if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      res.json(task);
    },
    getByStatus: (req, res) => {
      const completedTask = TaskModel.get
        .allTasks()
        .filter((task) => task.completed === true);
      res.json(completedTask);
    },
  };

  static post = {
    create: (req, res) => {
      const { text } = req.body;

      if (!text) {
        return res.status(400).json({ error: "El campo text es requerido." });
      }

      const newTask = {
        id: TaskModel.get.allTasks().length + 1,
        text: text,
        completed: false,
      };

      TaskModel.get.allTasks().push(newTask);
      res.status(201).json(newTask);
    },
  };

  static delete = {
    deleteById: (req, res) => {
      const { id } = req.params;

      const task = TaskModel.get.allTasks().find((t) => t.id === parseInt(id));

      if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      TaskModel.get.allTasks().splice(task, 1);
      res.json(task);
    },
  };
}
