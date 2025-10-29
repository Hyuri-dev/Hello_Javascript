const express = require("express");
const app = express();
const port = 3000;

const taskRoutes = require("./routes/tasks.routes");

app.use(express.json()); // Midleware que revisa o procesa las peticiones para luego convertirlas en un objeto js

app.use("api", taskRoutes);
let tasks = [{ id: 1, text: "Crear un roadmap de express", completed: true }];

app.get("/", (req, res) => {
  res.send("To do list API");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/newtask", (req, res) => {
  const { text } = req.body; // Capturamos el texto mediante el body de la peticion

  if (!text) {
    // Validacion
    return res.status(400).json({ error: "El campo text es requerido" });
  }
  // Crear nueva tarea
  const newTask = {
    id: tasks.length + 1,
    text: text,
    completed: false,
  };

  tasks.push(newTask); //Ingresamos la tarea al array

  res.status(201).json(newTask);
});

app.get("/task/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  res.json(task);
});

app.put("/task/:id", (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(400).json({ error: "Tarea no encontrada" });
  }

  //update task's
  tasks[taskIndex].text = text || task[taskIndex].text;
  tasks[taskIndex].completed =
    completed !== undefined ? completed : tasks[taskIndex].completed;

  res.json(tasks[taskIndex]);
});

app.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(400).json({ error: "Tarea no encontrada" });
  }

  //Delete Task
  tasks.splice(taskIndex, 1);

  res.status(200).send({ message: `Eliminada la tarea ${id}` });
});

app.listen(port, () => {
  console.log(`To do list App listening on port ${port}`);
});
