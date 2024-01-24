// console.log("hellow world");
const express = require("express"); //import express library that we installed
const app = express();
// app.get('/',req,resp,next)
app.use(express.static("public")); //middleware to serve static files
app.use(express.urlencoded({ extended: true })); //middleware to access body content on post request
app.use(express.json()); //middleware to handle json post request
app.use(logger);

app.set("view engine", "ejs");
// app.get("/", logger, (req, res) => {
//   console.log("Hello");
//   //   res.send("HI");
//   //   res.send(500);
//   // res.status(500).send("Hi");
//   //   res.status(500).send({ message: "Error Occured" });
//   //   res.download("server.js"); //in this case file is server.js itself
//   //   res.render("index");
//   //   res.render("index", { text: "How are you" });
//   res.render("index", { text: "How are you" });
// });

// app.get("/users", (req, res) => {
//   res.send("Users Routing Page");
// });

// app.get("/users/new", (req, res) => {
//   res.send("New Users Form");
// });
const userRouter = require("./routes/users");

function logger(req, res, next) {
  console.log(req.originalUrl); //print url the request is coming from
  next();
}

app.use("/users", userRouter);
app.listen(3000);
