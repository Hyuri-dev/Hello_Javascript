import { Router } from "express";

const router = Router();

const port = 3000;

const getAll = (req, res) => {
  const userList = users.map((user) => {
    const likesString = user.likes.join("/");
    return `${user.name} (y le gusta: ${likesString})`;
  });
  const responseText = "Lista de usuarios: " + userList.join(", ");
  res.send(responseText);
};

const getAll2 = (req, res) => {
  const userList = users.map((user) => {
    const likesString = user.likes.join("/");
    return `${user.name} (y le gusta: ${likesString})`;
  });
  const responseText = "Lista de usuarios: " + userList.join(", ");
  res.send(responseText);
};

router.get("/get_all", getAll); // http:localhost:3000/users/get_all
router.get("/get_all2", getAll2); // http:localhost:3000/users/get_all2
// router.post("/create_user", createUser); // http:localhost:3000/users/create_user
