/*
To use this component in a screen do not need to send any props 
If this component is used as a modal send all the 3 props ** required
*/

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import validator from "validator";
const LoginComponent = ({
  asModal = false,
  showModal = false,
  setShowModal = (f) => f,
}) => {
  if (!asModal) {
    showModal = true;
  }
  console.log(showModal);
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    didRedirect: false,
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const { email, password, error, loading, didRedirect } = values;

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/"></Redirect>;
    }
  };
  const handelChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(email);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid && isPasswordValid) {
      //TODO - LOGIN AND SIGNUP IMPLEMENTATION
      if (
        email === "rishirishi20121997@gmail.com" &&
        password === "rishirishi882"
      ) {
        setValues({ ...values, error: false, didRedirect: true });
      } else {
        setValues({ ...values, error: "Invalid Credentials" });
      }
    } else {
      setValues({ ...values, error: "Please Provide Correct Credentials" });
    }
  };
  const validEmailCheck = () => {
    setIsEmailValid(validator.isEmail(email));
  };
  const validPasswordCheck = () => {
    setIsPasswordValid(password.length >= 8);
  };
  return (
    <React.Fragment>
      {performRedirect()}
      <div
        className={`flex-col w-full md:max-w-lg p-10 text-lg font-medium text-gray-50  rounded-lg shadow-lg m-6 animate-fade-up
                    ${showModal ? " flex absolute z-40 " : " hidden "}
                    ${
                      asModal
                        ? " bg-green-600 "
                        : " bg-opacity-50 bg-green-900 "
                    }
        `}
      >
        <i
          className={`fa fa-times text-md md:text-xl absolute right-0 top-0 m-5 ${
            asModal ? " " : "hidden"
          }`}
          onClick={() => {
            setShowModal(!showModal);
          }}
        ></i>
        <form className="flex flex-col">
          <div
            className={
              " py-2 px-3 rounded text-gray-50 bg-red-400 ring-1 ring-red-500 mb-6 " +
              `${error ? "flex" : "hidden"}`
            }
          >
            <p>{error}</p>
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex flex-row justify-between mb-2">
              <label htmlFor="username">Username</label>
              <p
                className={
                  "text-xs text-red-400 self-end " +
                  `${isEmailValid && !error ? "hidden" : "flex"}`
                }
              >
                {!isEmailValid
                  ? "Please provide a valid Email"
                  : "Please provide correct credentials"}
              </p>
            </div>
            <input
              type="text"
              id="username"
              value={email}
              placeholder="Username / Email"
              className={
                "shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                ` ${isEmailValid && !error ? "" : "ring-4 ring-red-500"}`
              }
              onChange={handelChange("email")}
              onBlur={() => {
                validEmailCheck();
              }}
            />
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex flex-row justify-between mb-2">
              <label className="justify-self-start mb-2" htmlFor="password">
                Password
              </label>
              <p
                className={
                  "text-xs text-red-400 self-end " +
                  `${isPasswordValid && !error ? "hidden" : "flex"}`
                }
              >
                {!isPasswordValid
                  ? "Please provide a valid Password"
                  : "Please provide correct credentials"}
              </p>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handelChange("password")}
              placeholder="Password"
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                `${isPasswordValid && !error ? "" : " ring-4 ring-red-500"}`
              }
              onBlur={() => validPasswordCheck()}
            />
          </div>
          <button
            onClick={onSubmit}
            className="mt-2 bg-green-600 hover:bg-green-800 text-gray-100 font-semibold py-2 px-4 border border-green-400 rounded shadow"
          >
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginComponent;
