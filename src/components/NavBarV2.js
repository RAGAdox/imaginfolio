import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLargeScreen } from "../utility/screenUtilities";
const NavbarV2 = () => {
  const [navVisible, setNavVisible] = useState(() => isLargeScreen());
  const [menuAnimationToggle, setMenuAnimationToggle] = useState(navVisible);
  const togleNavBar = () => {
    if (navVisible) {
      setTimeout(() => {
        setNavVisible(!navVisible);
      }, 500);
      setMenuAnimationToggle(!menuAnimationToggle);
    } else {
      setNavVisible(!navVisible);
      setMenuAnimationToggle(!menuAnimationToggle);
    }
  };
  return (
    <React.Fragment>
      <span
        className="fixed top-0 m-5 text-gray-50 z-50 lg:hidden"
        onClick={togleNavBar}
      >
        <i
          className={`fas fa-bars text-md md:text-xl ${
            navVisible ? "hidden" : "inline"
          }`}
        ></i>
        <i
          className={`fa fa-times text-md md:text-xl  ${
            !navVisible ? "hidden" : "inline"
          }`}
        ></i>
      </span>
      <div
        className={`z-40 backdrop-filter backdrop-blur-2xl lg:backdrop-filter-none flex flex-col lg:flex-row px-20 text-center cursor-pointer h-screen justify-center lg:justify-between text-gray-50 w-full 
         ${navVisible ? "" : "hidden"}`}
      >
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            Home
          </Link>
        </div>
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/about"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            About
          </Link>
        </div>
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/create"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            Create
          </Link>
        </div>
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/feed"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            Get Inspired
          </Link>
        </div>
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/login"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            Login
          </Link>
        </div>
        <div
          className={`text-xl   mt-2 ${
            menuAnimationToggle ? "animate-menu-drop" : "animate-menu-hide"
          } `}
        >
          <Link
            to="/signup"
            onClick={() => {
              if (!isLargeScreen()) togleNavBar();
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarV2;
