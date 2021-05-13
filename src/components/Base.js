import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
const Base = ({ children }) => {
  return (
    <div>
      <div
        className="bg-leafs bg-center bg-cover 
                w-full h-screen"
      >
        <div className="fixed top-0 left-0 z-50 w-full lg:w-auto">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Base;
