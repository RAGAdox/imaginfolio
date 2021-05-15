import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import Modal from "../components/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const handelEventClick = () => {
    console.log("BTN CLICK");
  };
  return (
    <div className="w-full h-screen justify-center flex items-center">
      <LoginComponent
        asModal={true}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Click Me to Show Modal
      </Button>
    </div>
  );
};

export default About;
