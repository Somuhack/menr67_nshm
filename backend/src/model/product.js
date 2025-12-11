const mongoose = require("mongoose")
const productSchema= new mongoose.Schema({
    pname:{
        type:String,
        require:true
    },
    pprice:{
        type:Number,
        require:true
    },
    pdes:{
        type:String,
        require:true
    },
    brandName:{
        type:String,
        require:true
    },
    review:{
        type:String
    },
},
{
    timestamps:true
})
const Product = mongoose.model("product",productSchema)
module.exports = Product