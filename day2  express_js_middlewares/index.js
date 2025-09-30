const express = require('express'); // Importing the express module // initiating the express app
const app = express(); // Creating an instance of an Express application

console.log(express.json); // Logging the express.json middleware function to the console
app.use(express.json()); // is a built-in middleware which is used to access the data in post method
app.use(express.urlencoded()); // is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser

app.use(express.static('public')); // Serving static files from the 'public' directory // here public is a folder path

// logger middleware
app.use((req, res, next) => { // Defining a middleware function to log request details
  console.log("request method:",req.method, "request url:",req.url); // Logging the HTTP method, URL.
  const data = {
    method: req.method,
    endpoint: req.url,
  }
  const fs = require('fs'); // Importing the built-in 'fs' module for file system operations
  fs.appendFileSync('./logger.log', JSON.stringify(data) + '\n'); // Append the log data to a file named 'logger.log'
  next(); // Calling next() to pass control to the next middleware function
});

app.post("/add", (req, res) => { // Defining a POST route at the path "/add"
  res.json(req.body); 
});

app.use((req, res) =>{
  res.send("api not found"); // Catch-all middleware to handle undefined routes and send a "api not found" response
})

// starting the express server
const port  = 3000; // Defining the port number for the server
app.listen(port, () => {
  console.log("server started " + port); // Logging a message to the console when the server starts
}); // Listening on the specified port