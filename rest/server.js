require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
