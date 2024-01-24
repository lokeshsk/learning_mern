const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
const users = [];

app.get("/users", (req, res) => {
  //   res.send("Hello World!");
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user) {
    try {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        res.send("Success");
      } else {
        res.send("Invalid Password");
      }
    } catch {
      res.status(500).send();
    }
  } else {
    return res.status(400).send("Cannot find user");
  }
});
app.listen(3003);
