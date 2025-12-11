import React from 'react'
import Login from '../Pages/Auth/Loging'
import { Navigate } from 'react-router-dom'
const Privateroute = ({children}) => {
    const token = localStorage.getItem("email")
  return token ? children : <Navigate to="/" replace/>
}

export default Privateroute