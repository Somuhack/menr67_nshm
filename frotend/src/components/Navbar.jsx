import React from "react";
import Profile from "../Pages/Auth/Profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const [isLogin,setIslogin]=useState(true)
    const navigate = useNavigate()
  const IsLoginToken = localStorage.getItem("token");
  function Logout(){
    localStorage.removeItem("token")
    setIslogin(false)
  }
  function Login(){
   navigate("/")
  }
  useEffect(()=>{
  },[isLogin])
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">SonwCake</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Special Cake</a>
          </li>
          <li>
            <details>
              <summary>Product</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Cup Cake</a>
                </li>
                <li>
                  <a>Fruit Cake</a>
                </li>
                <li>
                  <a>Pastri</a>
                </li>
              </ul>
            </details>
          </li>
          {IsLoginToken?<li>
            <details>
              <summary>Profile</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <button onClick={Logout}>Logout</button>
                </li>
              </ul>
            </details>
          </li>:<li><button onClick={Login}>Login</button></li>}
          
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
