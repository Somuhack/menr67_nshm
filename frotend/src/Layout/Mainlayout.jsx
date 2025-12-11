import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <>
      <header>navbar</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Mainlayout;
