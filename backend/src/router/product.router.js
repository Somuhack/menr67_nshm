const express = require("express")
const router = express.Router()
const producrController = require("../controller/crud.controller")
router.post("/add-product",producrController.AddProduct)
router.get("/get-all-data",producrController.GetAllData)
router.put("/update-data/:id",producrController.updateProduct)
router.delete("/delete-data/:id",producrController.DeletebyId)
router.get("/get-data-byid/:id",producrController.GetById)

module.exports=router