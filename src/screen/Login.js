import * as R from "ramda";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { authenticate, isAuthenticated, login } from "../helpers/auth";
import { getProfile } from "../helpers/user";
import store from "../store/store";
import { setProfileFromApi } from "../store/profileSlice";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    message: "",
    loading: false,
    didRedirect: false,
  });
  const [error, setError] = useState({});
  const { username, password, message, loading, didRedirect } = values;
  const handelChange = (key) => (event) => {
    validate(key, event.target.value);
    setValues({ ...values, message: "", [key]: event.target.value });
  };
  const validate = (key, value) => {
    if (["username", "password"].includes(key)) {
      if (R.isEmpty(value)) {
        setError((oldError) => ({
          ...oldError,
          [`${key}`]: `${key} cannot be empty`,
        }));
        return false;
      }
      setError((oldError) => {
        delete oldError[key];
        return oldError;
      });
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
      setValues({ ...values, loading: true });
      await login(username, password).then(
        ({ success, token, message: apiMessage }) => {
          if (success) {
            authenticate(token, () => {
              return setValues({
                ...values,
                username: "",
                password: "",
                message: "",
                didRedirect: true,
                loading: false,
              });
            });
          } else {
            return setValues({
              ...values,
              message: apiMessage,
              loading: false,
            });
          }
        }
      );
      await getProfile(username).then((data) =>
        store.dispatch(setProfileFromApi(data))
      );
    }
  };
  const performRedirect = () => <Redirect to="/" />;

  const loginForm = () => {
    return (
      <form className="flex flex-col w-full sm:max-w-lg p-10 bg-green-900 bg-opacity-50 rounded-lg shadow-lg m-6 animate-fade-up">
        {message && (
          <div className="flex flex-col items-center mb-4 text-red-600">
            {message}
          </div>
        )}
        <Input
          type="text"
          value={username}
          placeholder="Enter username"
          label="Username"
          error={error["username"] || !!message}
          required
          onChange={handelChange("username")}
        />
        <Input
          type="password"
          value={password}
          placeholder="Enter password"
          label="Password"
          error={error["password"] || !!message}
          required
          onChange={handelChange("password")}
        />

        <Button onClick={onSubmit} value="Login" isLoading={loading}></Button>
      </form>
    );
  };
  return (
    <div className="w-full h-screen text-gray-50 flex items-center justify-center content-center ">
      {isAuthenticated() || didRedirect ? performRedirect() : loginForm()}
    </div>
  );
};

export default Login;
