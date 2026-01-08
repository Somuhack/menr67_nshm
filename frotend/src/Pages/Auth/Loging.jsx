import React, { useState } from "react";
import "../../assets/css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../Api/AllApi";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.warning("All Field Require");
      }
      const res = await LoginApi({ email, password });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.msg);
        setTimeout(() => {
          navigate("/home-page");
        }, 5000);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setEmail("");
    setPasword("");
  };
  return (
    <>
      <ToastContainer />
      <div className="form-box">
        <form onSubmit={handleOnSubmit} className="form">
          <span className="title">Log in</span>
          <span className="subtitle">Login Now for Secure Profile</span>
          <div className="form-container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              className="input"
              placeholder="Password"
            />
          </div>
          <button>Log in</button>
        </form>
        <div className="form-section">
          <p>
            New User? <Link to={"/signup-page"}>Sign up</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
