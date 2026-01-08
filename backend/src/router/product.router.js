const express = require("express")
const upload = require("../middleware/upload")

const router = express.Router()
const producrController = require("../controller/product.controller")
router.post("/add-product",upload.single("pimage"),producrController.AddProduct)
router.get("/get-all-data",producrController.GetAllData)
router.put("/update-data/:id",producrController.updateProduct)
router.delete("/delete-data/:id",producrController.DeletebyId)
router.get("/get-data-byid/:id",producrController.GetById)

module.exports=router