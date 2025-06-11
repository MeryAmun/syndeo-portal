"use client";
import React, { useState, useEffect } from "react";
import CustomInput from "../../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { messageActions } from "@/redux/messageSlice";
import CustomMessage from "../../../components/CustomMessage";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { resetPasswordRequest } from "@/redux/actions/authActions";

const ResetPasswordRequest = () => {
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(messageActions.clearMessage());
  }, [dispatch]);

  useEffect(() => {
    if (message === "Password reset request created") {
      router.push("/reset-password");
    }
  }, [message, router]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    dispatch(resetPasswordRequest(email));
  };

  return (
    <div className="w-auto h-[73.6vh] flex justify-center items-center py-10">
      <div className="h-[100%] flex flex-col justify-center items-center shadow-xl rounded-md shadow-shade w-[45%]">
        <div className="pb-3">
          <h3 className="uppercase text-center text-lg font-bold text-primary">
            reset password form
          </h3>
        </div>
        <div className="py-2 w-[45%]">
          <CustomInput
            id="email"
            inputType="email"
            required={true}
            value={email}
            inputName="email"
            placeholder="Enter Email"
            handleChange={handleInputChange}
            style=""
          />
        </div>
        <div className="border-1 border-[#4bd5ff] px-4 py-1 rounded-sm mb-5">
          <button
            type="button"
            className="uppercase font-semibold text-[#686fff] cursor-pointer outline-none"
            onClick={handlePasswordReset}
          >
            request Password Reset
          </button>
        </div>
        {message !== "" && <CustomMessage message={message} />}

        {isLoading && <SmallLoader />}
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
