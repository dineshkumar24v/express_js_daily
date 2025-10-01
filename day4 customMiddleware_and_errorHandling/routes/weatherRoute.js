const express = require("express"); // Importing express module
// route middleware imports here
const router = express.Router(); // Creating a router object

const { getWeatherData } = require("../controllers/weatherController.js"); // Importing the controller function

const { checkAPI_Key } = require("../middlewares/weatherMiddleware.js"); // Importing the middleware function

router.get("/cities", cities);

// Defining the route with middleware and controller
router.get("/", checkAPI_Key, getWeatherData);


module.exports = router; // Exporting the router object
