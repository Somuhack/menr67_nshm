const express = require("express")
const baseControll = require("../controller/base.controller")

const router= express.Router()

router.get("/",baseControll.Home)
router.get("/profile/:user/:age",baseControll.Profile)
router.get("/page-details",baseControll.PhoneQuery)
router.route("/about").get(baseControll.About)

module.exports=router