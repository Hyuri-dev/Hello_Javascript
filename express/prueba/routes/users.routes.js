import { Router } from "express";
import { UserController } from "../controller/users.controller";

const router = Router();

router.get("/get_all", UserController.getAll); // http:localhost:3000/users/get_all
router.get("/get_all_mayores_edad", UserController.getAll); // http:localhost:3000/users/get_all_mayores_edad
router.get("/get_all_presentations", UserController.getAllPresentations); // http:localhost:3000/users/get_all_presentations
router.post("/create_user", UserController.createUser); // http:localhost:3000/users/create_user
