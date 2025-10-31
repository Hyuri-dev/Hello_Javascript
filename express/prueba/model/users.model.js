export class UserModel {
  // Método para obtener todos los usuarios
  getAll = () => {
    const userList = [
      {
        name: "Hyuri",
        role: "Dev Backend",
        likes: ["FastApi", "Python"],
        age: 19,
      },
      {
        name: "Jodomo",
        role: "Dev Frontend",
        likes: ["Succionar miembros erectos"],
        age: 13,
      },
    ];
    return userList;
  };
}
