const User = require("../model/user");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
// auth flow chart  reg -> login -> profile or other auth pages
const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(404)
        .json({ msg: "All filed Required", scucess: false });
    }
    const isEmailExist = await User.findOne({ email: email });
    if (isEmailExist) {
      return res
        .status(300)
        .json({ msg: "User Arleady Exist", scucess: false });
    }
    const hashPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({ username: name, email, password:hashPassword });
    const isuserSave = await newUser.save();
    if (!isuserSave) {
      return res
        .status(500)
        .json({ msg: "Somethings went to Worng", scucess: false });
    }
    return res
      .status(200)
      .json({ msg: "Registration Successfull", scucess: true });
  } catch (error) {
    return res
      .status(500)
      .json({
        msg: "Somethings went to Worng",
        scucess: false,
        error: error.message,
      });
  }
};
const Login =async(req,res)=>{
   try {
    const {email, password } = req.body;
    if ( !email || !password) {
      return res
        .status(404)
        .json({ msg: "All filed Required", scucess: false });
    }
     const isEmailExist = await User.findOne({ email: email });
     if (!isEmailExist) {
      return res
        .status(404)
        .json({ msg: "Invalid Credential", scucess: false });
    }
    const isVerify = bcryptjs.compareSync(password,isEmailExist.password)
    if(isVerify){
      const token = jwt.sign({userID:isEmailExist.id,email:isEmailExist.email},process.env.JWT_SIGNATURE,{expiresIn:"2h"}) 
           return res
        .status(200)
        .json({ msg: "Login Successfull", scucess: true,token})
    
    }else{
           return res
        .status(404)
        .json({ msg: "Invalid Credential", scucess: false });
    }
   } catch (error) {
      return res
        .status(404)
        .json({ msg: "Somethings went to worng", scucess: false });
   }
}
const Profile =(req,res)=>{
  return res.status(200).json({msg:"Profile Access sucessfully" ,data:req.user})
}
module.exports = { Register,Login,Profile };
