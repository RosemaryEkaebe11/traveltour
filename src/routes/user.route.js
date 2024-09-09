const express = require("express");
const UserController = require("../controllers/user.controller");

const UserRouter = new express.Router();



UserRouter.post('/profile',UserController.createProfile)



module.exports = UserRouter;