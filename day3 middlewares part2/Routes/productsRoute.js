const express = require('express'); //importing express

const router = express.Router(); //creating router instance

const { getProducts } = require('../controllers/productsController.js'); //importing getProducts function from productsController

router.get("/getProducts",getProducts) //defining route to get products

module.exports = router; //exporting router instance