const express = require("express")
const authController = require("../controller/auth.controller")
const jwtMiddleWare = require("../middleware/jwtVerify")

const router = express.Router()

router.post("/register",authController.Register)
router.post("/login",authController.Login)
router.get("/profile",jwtMiddleWare,authController.Profile)


module.exports=router