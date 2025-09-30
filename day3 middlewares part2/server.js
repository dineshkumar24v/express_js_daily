const express = require("express"); //importing express
const app = express(); // create express app

const { getProducts } = require("./controllers/apicontroller.js"); //importing getProducts function from apicontroller

const authRoute = require("./Routes/authRoute.js"); //importing auth route
const productsRoute = require("./Routes/productsRoute.js"); //importing products route

// using middleware
// Add this middleware to parse JSON bodies
app.use(express.json()); // to get data from body as json

app.use("/api/v1/auth", authRoute); //using auth route

app.use("/api/v1/products", productsRoute); //using products route

app.get("/api/products", getProducts);

const port = 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
