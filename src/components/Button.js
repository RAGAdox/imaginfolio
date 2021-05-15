import React from "react";

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

export default Button;
