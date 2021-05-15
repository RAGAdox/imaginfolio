import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;
  const handelChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(email);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Email =>" + email);
    console.log("Password =>" + password);
  };
  return (
    <div className="w-full h-screen text-gray-50 flex items-center justify-center content-center">
      <form className="flex flex-col w-full lg:max-w-lg p-10 bg-green-900 bg-opacity-50 rounded-lg shadow-lg m-6 animate-fade-up">
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={email}
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handelChange("email")}
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handelChange("password")}
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  );
};

export default Login;
