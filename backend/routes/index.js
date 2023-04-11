const express = require("express");
const router = express.Router;
const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
