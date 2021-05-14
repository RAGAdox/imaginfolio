import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen text-gray-50 flex items-center justify-center content-center">
      <div className="flex flex-col w-full lg:max-w-lg p-10 bg-green-900 bg-opacity-50 rounded-lg shadow-lg m-6 animate-title-fade-up">
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="justify-self-start mb-2">Password</label>
          <input
            type="password"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="mt-2 bg-green-600 hover:bg-green-800 text-gray-100 font-semibold py-2 px-4 border border-green-400 rounded shadow">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
