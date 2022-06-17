import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const Input = ({
  id,
  type,
  value,
  label,
  placeholder,
  classname,
  onChange,
  error,
  required,
}) => {
  const domId = id || uuidv4();
  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row justify-between">
        {label && (
          <label className="justify-self-start text-base" htmlFor={domId}>
            {label}
          </label>
        )}
        {error && <p className="self-end text-sm text-red-600">{error}</p>}
      </div>
      <input
        type={type}
        id={domId}
        value={value}
        placeholder={placeholder}
        className={classNames(
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          classname
        )}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "Enter text here",
  onChange: () => {},
  classname: "",
  required: false,
};

export default Input;
