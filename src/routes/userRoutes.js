const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

userRoutes.route("/").get(userController.index);

module.exports = userRoutes;