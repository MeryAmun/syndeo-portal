"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { messageActions } from "@/redux/messageSlice";
import CustomMessage from "../../../components/CustomMessage";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { resetPassword } from "@/redux/actions/authActions";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

const ResetPassword = () => {
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.loading);
  const { userId, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState({
    password:"",
    confirmPassword:""
  })

  useEffect(() => {
    dispatch(messageActions.clearMessage());
  }, [dispatch]);

  useEffect(() => {
    if (message === "New password created successfully") {
      router.push("/login");
    }
  }, [message, router]);

  const handleChange = (e) => {
     setError("");
    const value = e.target.value
   setNewPassword({...newPassword,[e.target.name]:value})
  };
 const handleShowPassword = () => {
    setShow((prev) => !prev);
  };
  const handlePasswordReset = (e) => {
        e.preventDefault();
    const { password,confirmPassword } = newPassword
     if (password === confirmPassword) {
     dispatch(resetPassword({password,userId, token}));
    } else {
      setError("Passwords do not match");
    }
   
   
  };

  return (
    <div className="w-auto h-[73.6vh] flex justify-center items-center py-10">
      <div className="h-[100%] flex flex-col justify-center items-center shadow-xl rounded-md shadow-shade w-[45%]">
        <div className="pb-3">
          <h3 className="uppercase text-center text-lg font-bold text-primary">
             Get a new password
          </h3>
        </div>
       <form
        className="flex flex-col justify-center items-center w-[100%] px-4 py-4 gap-3"
        onSubmit={handlePasswordReset}
      >
        <div className="flex justify-center items-center px-3 py-2 border-1 border-[#686fff] w-[50%] rounded-sm">
          <input
            type={show ? "text" : "password"}
            className="border-none outline-none w-[100%]"
            placeholder="Enter Password"
            name="password"
            value={newPassword.password}
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
            value={newPassword.confirmPassword}
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
        <div className="border-1 border-[#4bd5ff] px-4 py-1 rounded-sm mb-5">
          <button
            type="submit"
            className="uppercase font-semibold text-[#686fff] cursor-pointer outline-none"
          >
            Reset password
          </button>
        </div>
         {isLoading && <SmallLoader />}
         </form>
         {error !== "" && (
          <div className="border-none  px-4 py-1 rounded-sm">
            <span className="text-red-500 text-center">{error}</span>
          </div>
        )}
        {message !== "" && <CustomMessage message={message} />}

       
      </div>
    </div>
  );
};

export default ResetPassword;
