import express from "express";
import task from "./routes/tasks.routes.js";

const app = express();
const port = 3000;

app.use(express.json()); // Midleware que revisa o procesa las peticiones para luego convertirlas en un objeto js
// debo configurar el model para la bd pajupo pjaup pajupo
// q webo

app.use("/task", task);

app.listen(port, () => {
  console.log(`To do list App listening on port ${port}`);
});
