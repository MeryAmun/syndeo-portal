"use client";
import React, { useState,useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/actions/authActions";
import Image from "next/image";

const Register = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.loading);
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");



  const handleChange = (e) => {
    setError("");
    const value = e.target.value;
    setRegister({ ...register, [e.target.name]: value });
  };
  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
     dispatch(registerUser(register))
    } else {
     setError("Passwords do not match")
    }
  };

  return (
    <div className="h-[74vh] flex flex-col justify-center items-center">
      <div className="">
        <h2 className="font-bold text-[#686fff] text-center uppercase text-lg">
          Register school admin
        </h2>
      </div>
      <form
        className="flex flex-col justify-center items-center w-[40%] px-4 py-4 gap-3"
        onSubmit={handleRegister}
      >
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#686fff] w-[50%] rounded-sm">
          <input
            type="text"
            className="border-none outline-none w-[100%]"
            placeholder="Enter Email Address"
            name="email"
            value={register.email}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#686fff] w-[50%] rounded-sm">
          <input
            type={show ? "text" : "password"}
            className="border-none outline-none w-[100%]"
            placeholder="Enter Password"
            name="password"
            value={register.password}
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
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#686fff] w-[50%] rounded-sm">
          <input
            type={show ? "text" : "password"}
            className="border-none outline-none w-[100%]"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={register.confirmPassword}
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
          <button
            type="submit"
            className="uppercase font-semibold text-[#686fff]"
          >
            Submit Registration
          </button>
        </div>
        {error !== "" && (
          <div className="border-none  px-4 py-1 rounded-sm">
            <span className="text-red-500 text-center">{error}</span>
          </div>
        )}
        {message !== "" && (
          <div className="border-none  px-4 py-1 rounded-sm">
            <span className="text-red-500 text-center">{message}</span>
          </div>
        )}
        {isLoading && (
          <Image
            className="dark:invert2"
            src="/images/loader.gif"
            alt="loader"
            width={100}
            height={0}
            style={imageStyle}
            unoptimized
          />
        )}
      </form>
    </div>
  );
};

export default Register;
const imageStyle = {
  width: "100%",
  height: "100%",
  // objectFit:"cover",
};
