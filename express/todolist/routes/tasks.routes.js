import { Router } from "express";
import { TaskController } from "../controller/tasks.controller.js"; // en ESM es necesario incluir la extensión .js

const router = Router();

// Crear una instancia del controller y pasar la función como handler
// router.get("/:id", TaskController.get.byId); //http:localhost:3000/task/4
router.get("/get/allTasks", TaskController.get.getAll); //http:localhost:3000/task/create
router.get("/get/status", TaskController.get.getByStatus);
router.delete("/:id", TaskController.delete.deleteById); //http:localhost:3000/task/4
router.post("/create", TaskController.post.create); //http:localhost:3000/task/create

export default router;
