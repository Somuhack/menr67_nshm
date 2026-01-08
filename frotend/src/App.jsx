import React from "react";
import Button from "./components/Button";
import Priceing from "./Pages/Priceing";
import Product from "./Pages/Product";
import UseState from "./hooks/UseState";
import UseReducer from "./hooks/UseReducer";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import Loging from "./Pages/Auth/Loging";
import { MyContext } from "./hooks/Context/MyContext";
import SignUp from "./Pages/Auth/SignUp";
import Profile from "./Pages/Auth/Profile";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Privateroute from "./security/Privateroute";
import ApiCall from "./Api/ApiCall";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCake from "./Pages/Dashboard/CakeManagement/AddCake";
import Displaycake from "./Pages/Dashboard/CakeManagement/Displaycake";
import Cakedetails from "./Pages/Dashboard/CakeManagement/Cakedetails";
const App = () => {
  
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loging/>}/>
      <Route path="/test-api" element={<ApiCall/>}/>
      <Route path="/home-page" element={<Home/>}/>
      <Route path="/signup-page" element={<SignUp/>}/>
      <Route path="/profile-page" element={<Privateroute><Profile/></Privateroute>}/>
      <Route path="/admin" element={<Dashboard/>}>
            <Route path="add-cake" element={<AddCake/>}/>
            <Route path="show-cake" element={<Displaycake/>}/>
            <Route path="show-cake-details/:id" element={<Cakedetails/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
    {/* <SignUp/> */}
    {/* <Profile/> */}
    {/* <Loging/> */}
    {/* <MyContext.Provider value={name}>
       <Loging/>
    </MyContext.Provider> */}
   
    {/* <UseRef/> */}
    {/* <UseEffect/> */}
    {/* <UseReducer/> */}
    {/* <UseState/> */}
    {/* <Priceing/>  */}
    {/* <Product/> */}
    {/* <Button text="Get Your Self Ready"/>
    <Button text="Start free"/>
    <Button text="Contact Sales" bgcol="white" col="blue"/> */}
      {/* <div>App {name}</div>
      <div>App {name}</div>
      <Button name="Login" bgcol="green" col="white"></Button>
      <Button name="Register" bgcol="Red" col="white"></Button> */}
    </>
  );
};

export default App;
