import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import Modal from "../components/Modal";
import { isAuthenticated } from "../helper/auth";
import { getPosts } from "../helper/post";
const Button = ({ onClick, children }) => {
  return (
    <div
      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-gray-50 hover:text-gray-300  px-3 py-4  select-none text-center rounded-lg text-xl cursor-pointer"
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
};
const About = () => {
  const [showModal, setShowModal] = useState(true);
  const handelEventClick = () => {
    console.log("BTN CLICK");
  };
  const showAuthentication = () => {
    {
      !isAuthenticated() ? (
        <LoginComponent
          asModal={true}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <p>User is Authenticated</p>
      );
    }
  };
  return (
    <div className="w-full h-screen flex items-center">
      <div
        className="flex flex-row flex-wrap w-full  overflow-y-scroll justify-between h-screen items-center lg:p-20
                      py-20 px-5"
      >
        {getPosts()}
      </div>
    </div>
  );
};

export default About;
