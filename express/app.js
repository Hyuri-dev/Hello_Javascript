import { getUniqueUsers } from "./routes/getUniqueUser";
import { getUsers } from "./routes/getUSers";

const express = require("express");
const app = express();
const port = 3000;

//Datos
const users = [
  { name: "Hyuri", role: "Dev Backend", likes: ["FastApi", "Python"] },
  {
    name: "Jodomo",
    role: "Dev Frontend",
    likes: ["Succionar miembros erectos"],
  },
];

app.get("/", (req, res) => {
  res.send("Hello from Express with Js");
});

app.get("/users", getUsers);
app.get("/api/user/:name", getUniqueUsers);

app.listen(port, () => {
  console.log;
  `Example app listening on port: ${port}`;
});
