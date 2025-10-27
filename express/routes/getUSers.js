const express = require("express");

const app = express();

const port = 3000;

app.get("/users", (req, res) => {
  const userList = users.map((user) => {
    const likesString = user.likes.join("/");
    return `${user.name} (y le gusta: ${likesString})`;
  });
  const responseText = "Lista de usuarios: " + userList.join(", ");
  res.send(responseText);
});
