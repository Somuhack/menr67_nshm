require("dotenv").config()
const express = require("express");

const productRouter = require("./src/router/product.router")
const dbConn = require("./src/config/dbConn")


const server = express();
server.use(express.json())
server.use(productRouter)


dbConn().then(()=>{
  server.listen(5000, () => {
  console.log("Server is Running on http://localhost:5000/");
});
}).catch((err)=>{
  console.log(err);
  
})

