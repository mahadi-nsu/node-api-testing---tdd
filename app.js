const express = require("express");
const app = express();

app.post("/users", (req, res) => {
  // res.send({ userId: 0 });
  res.status(200).json({ userId: 0 });
});

module.exports = app;
