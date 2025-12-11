import React, { useState } from "react";
import "../../assets/css/signup.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log( email, password);
    const authemail=localStorage.getItem("email")
    const authpass=localStorage.getItem("pass")
    if(!email || !password){
      alert("All Field Are Requerd")
    }else if(authemail===email && authpass ===password){
         alert("Login Successfull")
         navigate(`/profile-page/${email}/${localStorage.getItem("name")}`)
    }else{
      alert("Login Failed")
    }
    setEmail("");
    setPasword("");
  };
  return (
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
    // <form onSubmit={handleOnSubmit}>
    //     <label>Name :</label>
    //     <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
    //     <button type='submit'>Sign up</button>
    // </form>
  );
};

export default Login;
