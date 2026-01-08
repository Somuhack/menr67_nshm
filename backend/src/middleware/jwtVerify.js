const jwt = require("jsonwebtoken");
const jwtVerify = (req, res, next) => {
    const authHeadertoken=req.headers["authorization"];
    if (!authHeadertoken) {
    return res.status(404).json({ msg: "Accsess Denied" });
  }
  const token = authHeadertoken.split(" ")[1];
  if (!token) {
    return res.status(404).json({ msg: "Accsess Denied" });
  } else {
    const isDecode = jwt.verify(token, process.env.JWT_SIGNATURE);
    if (!isDecode) {
      return res.status(404).json({ msg: "Accsess Denied" });
    } else {
      req.user = isDecode;
      next();
    }
  }
};
module.exports = jwtVerify;
