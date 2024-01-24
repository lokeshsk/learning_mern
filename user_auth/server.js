const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
//middleware to accept json
app.use(express.json());
//creating an array
const users = []; //in realife this can be database
//creating route
app.get("/users", (req, res) => {
  res.json(users);
});
//creating a post route
// app.post("/users", async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt(); //10 is number of rounds
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     // const user = { name: req.body.name, password: req.body.password };
//     console.log(salt);
//     console.log(hashedPassword);
//     const user = { name: req.body.name, password: hashedPassword };
//     users.push(user);
//     res.status(201).send();
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

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
//listening on port 3000
app.listen(3000);
