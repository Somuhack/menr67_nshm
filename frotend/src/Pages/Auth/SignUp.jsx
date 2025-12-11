import React, { useState } from "react";
import "../../assets/css/signup.css";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    if (!name || !email || !password) {
      alert("All Data Are not Field");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pass", password);
      alert("Data Registration Successfull")
      navigate("/")
    }

    setName("");
    setEmail("");
    setPasword("");
  };
  return (
    <div className="form-box">
      <form onSubmit={handleOnSubmit} className="form">
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Full Name"
          />
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
        <button>Sign up</button>
      </form>
      <div className="form-section">
        <p>
          Have an account? <Link to="/">Log in</Link>{" "}
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

export default SignUp;
