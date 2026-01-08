import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main className="h-screen">{children}</main>
      <Footer/>
    </>
  );
};

export default Mainlayout;
