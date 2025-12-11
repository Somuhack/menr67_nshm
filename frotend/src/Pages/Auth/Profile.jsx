import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useContext } from 'react'
// import { MyContext } from '../../hooks/Context/MyContext'

const Profile = () => {
  const navigate = useNavigate()
  // const name = useContext(MyContext)
  // const authname = localStorage.getItem("name");
  const {em,name}=useParams()

  const handleLogOut =()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <div>
      Profile:
      {name ? (
        `Hello ${name} ,Wellcome to Our page and your email is ${em}`
      ) : (
        <p>No Profile Found Please Login First</p>
      )}
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Profile;
