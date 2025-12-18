const User = require("../model/user");

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
    const newUser = new User({ username: name, email, password });
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
    if(isEmailExist.password==password){
           return res
        .status(200)
        .json({ msg: "Login Successfull", scucess: true,user:isEmailExist })
    
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
module.exports = { Register,Login };
