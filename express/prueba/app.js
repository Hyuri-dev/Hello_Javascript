import { getUniqueUsers } from "./routes/getUniqueUser";
import { getUsers } from "./routes/getUSers";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express with Js");
});

app.use("/users", getUsers);

app.get("/api/user/:name", getUniqueUsers);

app.listen(port, () => {
  console.log;
  `Example app listening on port: ${port}`;
});
