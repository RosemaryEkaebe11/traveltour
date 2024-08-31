const express = require('express');
const AuthController = require('../controllers/auth.controller');


const AuthRouter = new express.Router();

AuthRouter.post('/create-user',AuthController.createUser);

AuthRouter.post('/login-user', AuthController.loginUser);

AuthRouter.post('/logout-user', AuthController.logoutUser)

module.exports = AuthRouter;