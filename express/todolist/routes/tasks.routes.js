import { Router } from "express";
import { TaskController } from "../controller/tasks.controller"; //es ete mosmi no ?

const router = Router();

router.get("/all_tasks", TaskController.getAll());
