import React from "react";
const Modal = ({ children, show = false, setShowModal = (f) => f }) => {
  return (
    <div
      className={
        "absolute w-full h-screen  z-50 shadow-2xl drop-shadow-2xl items-center justify-center content-center " +
        `${show ? "flex" : "hidden"}`
      }
    >
      <i
        className={`fa fa-times text-md md:text-xl order-2`}
        onClick={() => {
          setShowModal(!show);
        }}
      ></i>
      {children}
    </div>
  );
};
export default Modal;
