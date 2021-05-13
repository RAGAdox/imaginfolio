import React, { useState } from "react";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const togleNavBar = () => {
    setNavVisible(!navVisible);
  };
  return (
    <React.Fragment>
      <span className="fixed top-0 m-5 text-gray-50" onClick={togleNavBar}>
        <i className={`fas fa-bars ${navVisible ? "hidden" : "inline"}`}></i>
        <i class={`fa fa-times  ${!navVisible ? "hidden" : "inline"}`}></i>
      </span>
      <div
        className={`flex flex-col px-20 text-center cursor-pointer h-screen justify-center text-gray-50 
                    ${navVisible ? "" : "hidden"}`}
      >
        <div className="text-xl mt-2">
          <a>Home</a>
        </div>
        <div className="text-xl mt-2">
          <a>About</a>
        </div>
        <div className="text-xl mt-2">
          <a>Create</a>
        </div>
        <div className="text-xl mt-2">
          <a>Get Inspired</a>
        </div>
        <div className="text-xl mt-2">
          <a>Login</a>
        </div>
        <div className="text-xl mt-2">
          <a>Signup</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
