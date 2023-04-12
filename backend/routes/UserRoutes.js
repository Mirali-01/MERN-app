const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/UserController");

router.route("/").get(getUsers).post(createUsers);

router.route("/:id").put(updateUsers).delete(deleteUsers);

module.exports = router;
