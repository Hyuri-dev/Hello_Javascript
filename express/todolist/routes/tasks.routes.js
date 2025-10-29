import { Router } from "express";
import { TaskController } from "../controller/tasks.controller";

const taskController = new TaskController();
const router = Router();

router.get("/all_tasks", TaskController.getAll());
