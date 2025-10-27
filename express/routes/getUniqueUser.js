const express = require("express");

const app = express();

const port = 3000;

app.get("/api/user/:name", (req, res) => {
  const name = req.params.name;
  const user = users.find((user) => user.name === name);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ error: `No existe el usuario ${name}` });
  }
});
