require("dotenv").config()
const express = require("express");

const productRouter = require("./src/router/product.router")
const authRouter=require("./src/router/auth.router")
const dbConn = require("./src/config/dbConn")


const server = express();
server.use(express.json())
server.use("/api/v1/product",productRouter)
server.use("/api/v1/user",authRouter);


dbConn().then(()=>{
  server.listen(5000, () => {
  console.log("Server is Running on http://localhost:5000/");
});
}).catch((err)=>{
  console.log(err);
  
})

