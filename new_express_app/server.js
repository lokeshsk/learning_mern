const express = require("express");
const userRouter = require("./routes/users");

const app = express();

app.use("/users", userRouter);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { text: "New world" });
});

app.listen(3002);
