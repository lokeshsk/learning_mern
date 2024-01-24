const express = require("express");
const router = express.Router();
//Router works same as app, basically like mini app inside main app

// router.get("/", (req, res) => {
//   res.send("Users Routing Page");
// });

// router.post("/", (req, res) => {
//   res.send("User Created");
// });

// router.get("/new", (req, res) => {
//   res.send("New Users Form");
// });

// router.get("/:id", (req, res) => {
//   res.send(`User with id ${req.params.id}`);
// });
//-------------------------------------------------
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("Users Routing Page");
});

router.post("/", (req, res) => {
  // res.send("User Created");
  const isValid = false;
  if (isValid) {
    users.push({ name: req.body.name });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("invalid request");
    res.render("users/new", { name: req.body.name });
  }
  console.log(req.body.name);
  res.send("hi");
});

router.get("/new", (req, res) => {
  //res.send("New Users Form");
  res.render("users/new", { name: "" });
});

router.get("/:id", (req, res) => {
  res.send(`User with id ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete User with id ${req.params.id}`);
});
//--------------------------------------------------

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User with id ${req.params.id}`);
    console.log(req.user);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with id ${req.params.id}`);
  }); //also known as chaining

const users = [{ name: "john" }, { name: "harry" }];
router.param("id", (req, res, next, id) => {
  console.log(id);
  req.user = users[id];
  next();
});

//export this router
module.exports = router;
