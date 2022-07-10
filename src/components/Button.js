import React from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const Button = ({ id, type, value, classname, isLoading, onClick }) => {
  const domId = id || uuidv4();
  return (
    <button
      id={domId}
      onClick={onClick}
      className={classNames(
        "grid grid-cols-3 gap-4 mt-2 bg-green-600 hover:bg-green-800 text-gray-100 font-semibold py-2 px-4 border border-green-400 rounded shadow",
        classname
      )}
    >
      <span className="col-span-2 place-self-start">{value}</span>
      <span>
        {isLoading && <i className="fas fa-circle-notch animate-spin"></i>}
      </span>
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  value: "Click Me",
  onClick: () => {},
  classname: "",
};

export default Button;
