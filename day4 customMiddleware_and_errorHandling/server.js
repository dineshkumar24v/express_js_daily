const express = require("express"); // Importing express module
const app = express(); // Creating an express application

const weatherRoute = require("./routes/weatherRoute"); // Importing weather route

const { errorMiiddleware } = require("./middlewares/errorMiddleware"); // Importing error handling middleware

app.use("/api/v1.0/weather", weatherRoute); // Using the weather route

app.use(errorMiiddleware); // Using the error handling middleware

// Starting the server 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});