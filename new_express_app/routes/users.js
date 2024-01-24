const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user landing page");
});
router.get("/new", (req, res) => {
  res.send("new user form");
});

module.exports = router;
