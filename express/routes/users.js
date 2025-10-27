class User {
  // Método para obtener todos los usuarios
  getAllUsers = (req, res) => {
    res.status(200).json({
      message: "Usuarios obtenidos correctamente",
      data: users,
    });
  };
}
