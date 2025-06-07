"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

const Register = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };
  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="h-[74vh] flex flex-col justify-center items-center">
      <div className="">
        <h2 className="font-bold text-[#686fff] text-center uppercase text-lg">
          welcome back
        </h2>
      </div>
      <form className="flex flex-col justify-center items-center w-[40%] px-4 py-4 gap-3">
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#4bd5ff] w-[50%] rounded-sm">
          <input
            type="text"
            className="border-none outline-none w-[100%]"
            placeholder="Enter Email Address"
            name="email"
            value={login.email}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#4bd5ff] w-[50%] rounded-sm">
          <input
            type={show ? "text" : "password"}
            className="border-none outline-none w-[100%]"
            placeholder="Enter Password"
            name="password"
            value={login.password}
            autoComplete="off"
            onChange={handleChange}
          />
          {!show ? (
            <EyeIcon
              size={20}
              weight="fill"
              color="#686fff"
              onClick={handleShowPassword}
            />
          ) : (
            <EyeSlashIcon
              size={20}
              weight="fill"
              color="#686fff"
              onClick={handleShowPassword}
            />
          )}
        </div>
        <div className="border-1 border-[#4bd5ff] px-4 py-1 rounded-sm">
          <button className="uppercase font-semibold text-[#686fff]">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
