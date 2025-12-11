// curd
/*
c=create/incert=>POST
u=update/edit=>PUT/PATCH
r=retrive/fetched=>GET
d=delete/remove=>DELETE

*/
const Product = require("../model/product");

const AddProduct = async (req, res) => {
  try {
    const { pname, pprice, pdes, brandName, review } = req.body;
    if (!pname || !pprice || !pdes || !brandName || !review) {
      return res
        .status(404)
        .json({ msg: "All Field Required!!", success: false });
    }
    const product = new Product({ pname, pprice, pdes, brandName, review });
    const isCreated = await product.save();
    if (!isCreated) {
      return res.status(500).json({ msg: "Data Not Added!!", success: false });
    }
    return res
      .status(200)
      .json({ msg: "Data Added Successfull !!", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({
        msg: "Internal server Error!!",
        error: error.message,
        success: false,
      });
  }
};
const GetAllData = async (req, res) => {
  try {
    const getAllData = await Product.find();
    if (!getAllData) {
      return res
        .status(404)
        .json({ msg: "Data Fetched Failed", data: [], success: false });
    }
    return res
      .status(200)
      .json({
        msg: "Data Fetched successfully",
        data: getAllData,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        msg: "Internal server Error!!",
        error: error.message,
        success: false,
      });
  }
};
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const isIdFound = await Product.findById(id);
    if (!isIdFound) {
      return res.status(404).json({ msg: "Id Not Found", success: false });
    }
    const isUpdated = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!isUpdated) {
      return res
        .status(500)
        .json({ msg: "Data Not Updated!!", success: false });
    }
    return res
      .status(200)
      .json({
        msg: "Data Updated Successfull !!",
        data: isUpdated,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        msg: "Internal server Error!!",
        error: error.message,
        success: false,
      });
  }
};
const DeletebyId = async (req, res) => {
  try {
    const id = req.params.id;
    const isIdFound = await Product.findById(id);
    if (!isIdFound) {
      return res.status(404).json({ msg: "Id Not Found", success: false });
    }
    const isDeleted = await Product.findByIdAndDelete(id);
    if (!isDeleted) {
      return res
        .status(500)
        .json({ msg: "Data Not Deleted!!", success: false });
    }
    return res
      .status(200)
      .json({
        msg: "Data Deleted Successfull !!",
        data: isDeleted,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        msg: "Internal server Error!!",
        error: error.message,
        success: false,
      });
  }
};

const GetById=async(req,res)=>{
    try {
    const id = req.params.id;
    const isIdFound = await Product.findById(id);
    if (!isIdFound) {
      return res.status(404).json({ msg: "Id Not Found",data:null,error:false,success: false });
    }
    return res.status(200).json({msg:"Data Fetched Successfully by id",data:isIdFound,error:false,success:true})
    } catch (error) {
        return res
      .status(500)
      .json({
        msg: "Internal server Error!!",
        data:null,
        error: error.message,
        success: false,
      });
    }
}
module.exports = { AddProduct, GetAllData, updateProduct, DeletebyId ,GetById};
