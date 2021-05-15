import React, { useState } from "react";

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { firstName, lastName, email, password, error, loading, didRedirect } =
    values;
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
        <div className="flex flex-row mb-6">
          <div className="flex flex-col mr-4">
            <label className="justify-self-start mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handelChange("firstName")}
            />
          </div>
          <div className="flex flex-col">
            <label className="justify-self-start mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handelChange("lastName")}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2" htmlFor="email">
            Email / Username
          </label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Email / Username"
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
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handelChange("password")}
            placeholder="Confirm Password"
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

export default SignUp;
