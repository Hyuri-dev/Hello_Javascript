import { Router } from "express";
import { TaskController } from "../controller/tasks.controller";

const router = Router();

router.get("/all_tasks", TaskController.getAll());
