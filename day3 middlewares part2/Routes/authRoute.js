const express = require('express'); //import express

const router = express.Router(); //create router instance

const {loginController } = require("../controllers/authController.js"); //import auth controller

// POST /api/v1/auth/login
router.post("/login", loginController); //login and method post

module.exports = router; //export router instance