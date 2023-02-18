const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.createNewUser);
router.get("/users", userController.getAllUser);
router.get("/users/:id_user", userController.getUserById);
router.patch("/users/:id_user", userController.updateUser);
router.delete("/users/:id_user", userController.deleteUser);

module.exports = router;
