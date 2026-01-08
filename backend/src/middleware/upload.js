const multer=require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'products_uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, "image" + '-' + uniqueSuffix+file.originalname)
  }
})

const upload = multer({ storage: storage,
    limits:{
        fileSize:10*1024*1024 //10MB
    }
 })
module.exports=upload