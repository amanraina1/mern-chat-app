const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1>api is running</h1>");
});

app.get("/api/chat", (req, res) => {
  res.send(data);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = data.filter((user) => user._id === id);
  res.send(foundUser);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server started on PORT : ${PORT}`));
