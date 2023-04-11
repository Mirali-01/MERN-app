const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/", controller.get);
// router.get("/all", controller.getAllUsers);
// router.get("/byId/:id", controller.getUser);
// router.post("/", controller.createUser);
// router.put("/", controller.updateUser);
// router.delete("/:id", controller.deleteUser);

module.exports = router;
