const express = require("express");

const app = express();
// console.log(app);

// get method
app.get("/", (req,res)=>{
  res.send("iam default api");
})
// post method
app.post("/", (req,res)=>{
  // if you want to send info in object format han use json method
  res.json({method: "POST", apiName: "/"});
})

// put method
app.put("/", (req, res)=>{
  res.status(400).send("iam put api")
})

// patch method
app.patch("/", (req, res)=>{
  res.send("iam patch api");
})

// delete method
app.delete("/", (req, res)=>{
  res.status(204).send("deleting") // No Content will be returned in delete response
})

// get method with path params
// contro logic or route handler
app.get("/books/:id", (req,res)=>{
  console.log(req.params); // [Object: null prototype] { id: '12334' } as given in URL
  const paramms = req.params; // here params is an object
  console.log(paramms.id); // 12334
  
  res.send("books" + paramms.id);
})

// nested path params
app.get("/books/:id/:name", (req, res)=>{
  console.log(req.params);  // { id: '12', name: 'space' }

  // http://localhost:8000/books/78/space?type=online book
  console.log(req.query);  // { type: 'online book' } this is the result of query params when i run a query in my postman app

  res.json(req.params) // { id: '12', name: 'space' } you can see it in postman app
})


// query params
app.get("/filterbook", (req, res)=>{

  console.log(req.query); // { name: 'harry', price: '10000' } this is the result of query params when i run a query in my postman app http://localhost:8000/filterbook?name=harry&price=10000
  res.json({message: "iam filter book", 
            name:req.query.name, 
            price:req.query.price, 
            type: req.query.type});   // [Object: null prototype] {
                  // name: 'harry',
                  // price: '10000',
                   // type: 'book'
                  // }
})

app.listen(8000, ()=>console.log("Server started on port 8000"));