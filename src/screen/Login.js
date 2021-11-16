import React, { Fragment, useState } from "react";
import { Redirect } from "react-router";
import { authenticate, isAuthenticated, login } from "../helpers/auth";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { username, password, error, loading, didRedirect } = values;
  const handelChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const validate = () => {
    if (!password) {
      setValues({ ...values, error: "Please enter a valid password" });
    }
    if (!username)
      setValues({ ...values, error: "Please provide a valid username" });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    validate();
    if (username !== "" && password !== "")
      login(username, password).then(({ success, token, message }) => {
        if (success) {
          authenticate(token, () => {
            setValues({
              ...values,
              username: "",
              password: "",
              error: false,
              didRedirect: true,
            });
          });
        } else {
          setValues({ ...values, error: message });
        }
      });
  };
  const performRedirect = () => {
    alert("You are currently logged in");
    return <Redirect to="/" />;
  };
  const loginForm = () => (
    <form className="flex flex-col w-full sm:max-w-lg p-10 bg-green-900 bg-opacity-50 rounded-lg shadow-lg m-6 animate-fade-up">
      {error && <div className="flex flex-col mb-6 text-red-600">{error}</div>}
      <div className="flex flex-col mb-6">
        <label className="justify-self-start text-base" htmlFor="username">
          Username
        </label>
        {error && username === "" && (
          <p className="self-end text-sm text-red-600">Required Fields</p>
        )}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          onChange={handelChange("username")}
          // onBlur={verifyInput("username")}
          autoFocus
        />
      </div>
      <div className="flex flex-col mb-6">
        <label className="justify-self-start text-base" htmlFor="password">
          Password
        </label>
        {error && password === "" && (
          <p className="self-end text-sm text-red-600">Required Fields</p>
        )}

        <input
          type="password"
          id="password"
          value={password}
          onChange={handelChange("password")}
          placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          // onBlur={verifyInput("password")}
        />
      </div>

      <button
        onClick={onSubmit}
        className="mt-2 bg-green-600 hover:bg-green-800 text-gray-100 font-semibold py-2 px-4 border border-green-400 rounded shadow"
      >
        Login
      </button>
    </form>
  );
  return (
    <div className="w-full h-screen text-gray-50 flex items-center justify-center content-center ">
      {isAuthenticated() || didRedirect ? performRedirect() : loginForm()}
    </div>
  );
};

export default Login;
