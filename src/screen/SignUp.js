import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import validator from "validator";
import * as R from "ramda";
import Input from "../components/input";
import { signup } from "../helpers/auth";
const SignUp = () => {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confPassword: "",
    message: "",
    loading: false,
    didRedirect: false,
  });
  const [error, setError] = useState({});
  const {
    fullname,
    username,
    email,
    password,
    confPassword,
    message,
    param,
    loading,
    didRedirect,
  } = values;
  const handelChange = (key) => (event) => {
    validate(key, event.target.value);
    setValues({ ...values, message: "", [key]: event.target.value });
  };
  const validate = (key, value) => {
    switch (key) {
      case "email":
        if (R.isEmpty(value)) {
          setError((oldError) => ({
            ...oldError,
            email: "Email cannot be empty",
          }));
          return false;
        }
        if (value && !validator.isEmail(value)) {
          setError((oldError) => ({
            ...oldError,
            email: "Enter valid email address",
          }));
          return false;
        }
        setError((oldError) => {
          delete oldError.email;
          return oldError;
        });
        break;
      case "username":
      case "fullname":
        if (R.isEmpty(value)) {
          setError((oldError) => ({
            ...oldError,
            [key]: `${key} cannot be empty`,
          }));
          return false;
        }
        setError((oldError) => {
          delete oldError[key];
          return oldError;
        });
        break;
      case "password":
        if (R.isEmpty(value)) {
          setError((oldError) => ({
            ...oldError,
            password: "Password cannot be empty",
          }));
          return false;
        }
        if (value && !validator.isStrongPassword(value)) {
          setError((oldError) => ({
            ...oldError,
            password: "Must use a strong password",
          }));
          return false;
        }
        setError((oldError) => {
          delete oldError.password;
          return oldError;
        });
        break;
      case "confPassword":
        if (R.isEmpty(value)) {
          setError((oldError) => ({
            ...oldError,
            confPassword: "Must confirm password",
          }));
          return false;
        }
        if (value && !validator.equals(value, password)) {
          setError((oldError) => ({
            ...oldError,
            confPassword: "Please enter same password",
          }));
          return false;
        }
        setError((oldError) => {
          delete oldError.confPassword;
          return oldError;
        });
        break;
      default:
        break;
    }
    return true;
  };

  const validateAll = () => {
    return R.keys(values)
      .map((key) => {
        return validate(key, values[key]);
      })
      .every((result) => result);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateAll()) {
      setValues({ ...values, message: "", loading: true });
      await signup(fullname, username, email, password).then(
        ({ success, message, errors = {} }) => {
          if (success) {
            setValues({
              ...values,
              loading: false,
              message: "User Created Successfully",
              didRedirect: true,
            });
          } else {
            setValues({ ...values, loading: false, message: message });
            setError((oldError) => ({
              ...oldError,
              ...R.pluck("msg", errors),
            }));
          }
        }
      );
    } else {
      setValues({ ...values, message: "Please provide correct information" });
    }
  };
  const performRedirect = () => {
    alert("User created successfully");
    return <Redirect to="/login" />;
  };
  const signUpForm = () => {
    return (
      <form className="flex flex-col w-full lg:max-w-lg p-10 bg-green-900 bg-opacity-50 rounded-lg shadow-lg m-6 animate-fade-up">
        {!R.isEmpty(message) && (
          <div className="flex flex-col mb-4 text-red-600">{message}</div>
        )}
        <Input
          type="text"
          value={fullname}
          placeholder="Full Name"
          label="Full Name"
          error={error["fullname"]}
          required
          onChange={handelChange("fullname")}
        />

        <Input
          type="text"
          value={username}
          placeholder="Username"
          label="Username"
          error={error["username"]}
          required
          onChange={handelChange("username")}
        />

        <Input
          type="email"
          value={email}
          placeholder="Email Address"
          label="Email Address"
          error={error["email"]}
          required
          onChange={handelChange("email")}
        />

        <Input
          type="password"
          value={password}
          placeholder="Enter Password"
          label="Password"
          error={error["password"]}
          required
          onChange={handelChange("password")}
        />

        <Input
          type="password"
          value={confPassword}
          placeholder="Enter Password Again"
          label="Confirm Password"
          error={error["confPassword"]}
          required
          onChange={handelChange("confPassword")}
        />

        <button
          onClick={onSubmit}
          className="mt-2 bg-green-600 hover:bg-green-800 text-gray-100 font-semibold py-2 px-4 border border-green-400 rounded shadow"
        >
          Sign Up
        </button>
      </form>
    );
  };
  return (
    <div className="w-full h-screen text-gray-50 flex items-center justify-center content-center">
      {didRedirect ? performRedirect() : signUpForm()}
    </div>
  );
};

export default SignUp;
