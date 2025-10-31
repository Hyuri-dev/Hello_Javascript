import { TaskModel } from "../model/tasks.model";

export class TaskController {
  getAll = async (_req, res) => {
    const tasklist = await TaskModel.getAll();
    res.status(200).json(tasklist);
  }; // este es el controller que vamos a referenciar en el route

  createTask = (req, res) => {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "El campo text es requerido." });
    }

    const newTask = {
      id: TaskModel.getall().length + 1,
      text: text,
      completed: false,
    };

    tasklist.push(newTask);
    res.status(201).json(newTask);
  };
}
