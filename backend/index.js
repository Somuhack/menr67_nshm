require("dotenv").config()
const express = require("express");

const productRouter = require("./src/router/product.router")
const authRouter=require("./src/router/auth.router")
const dbConn = require("./src/config/dbConn")
const cors = require("cors")

const server = express();
server.use(cors())
server.use(express.json())
server.use("/api/v1/product",productRouter)
server.use("/api/v1/user",authRouter);
server.use('/uploads',express.static('products_uploads'))

dbConn().then(()=>{
  server.listen(5000, () => {
  console.log("Server is Running on http://localhost:5000/");
});
}).catch((err)=>{
  console.log(err);
  
})

