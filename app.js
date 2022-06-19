const express = require("express");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  // res.send({ userId: 0 });
  const { password } = req.body;

  if (!password) {
    res.sendStatus(400);
    return;
  }
  res.status(200).json({ userId: 0 });
});

module.exports = app;
