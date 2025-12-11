const mongoose = require("mongoose")
const URI=process.env.DATABASE_URL
const dbConn=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Database Connection successfully");
        
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=dbConn