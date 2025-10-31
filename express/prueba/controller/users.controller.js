import { UserModel } from "../model/users.model";

export class UserController {
  // Método para obtener todos los usuarios
  getAll = (req, res) => {
    const userList = UserModel.getAll();
    res.send(userList);
  };

  getAllPresentation = (req, res) => {
    const userList = UserModel.getAll.map((user) => {
      const likesString = user.likes.join("/");
      return `${user.name} (y le gusta: ${likesString})`;
    });
    const responseText = "Lista de usuarios: " + userList.join(", ");
    res.send(responseText);
  };

  getAllMayoresDeEdad = (req, res) => {
    const userList = UserModel.getAll();

    const mayoresDeEdad = userList.filter((user) => user.age >= 18);

    res.send(mayoresDeEdad);
  };

  createUser = (req, res) => {
    const newUser = "joe";
    res.send(newUser);
  };
}
