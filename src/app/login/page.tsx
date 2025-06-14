"use client";
import React, { useState,useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { messageActions } from "@/redux/messageSlice";
import CustomMessage from "../../../components/CustomMessage";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { loginUser } from "@/redux/actions/authActions";

const Register = () => {
  const [show, setShow] = useState(false);
  const { message } = useSelector((state) => state.message)
  const { user } = useSelector((state) => state.auth)
  const { isVerified, nameOfSchool } = user || {}
  const { isLoading } = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const router = useRouter()
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
  dispatch(messageActions.clearMessage())
  }, [dispatch])

  useEffect(() => {
  if(message === "User Logged In" && isVerified){
    if(nameOfSchool){
 router.push(`/${nameOfSchool}`)
    }else{
       router.push("/landing")
    }
  }else if(message === "User is not verified! please check email for verification Link"){
     router.push("/email-verification")
  }
  }, [message,isVerified,nameOfSchool,dispatch,router])
  
  const handleChange = (e) => {
    setLogin({
    email: "",
    password: "",
  })
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };
  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(login))
  }
  return (
    <div className="w-auto h-[73.6vh] flex justify-center items-center py-10">
      <div className="h-[100%] flex flex-col justify-center items-center shadow-xl rounded-md shadow-shade w-[45%]">
      <div className="">
        <h2 className="font-bold text-[#686fff] text-center uppercase text-lg">
          welcome back
        </h2>
      </div>
      <form className="flex flex-col justify-center items-center w-[100%] px-4 py-4 gap-3" onSubmit={handleLogin}>
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
        <div className="flex justify-start items-start w-[50%]">
          <button type="button" className="uppercase font-semibold text-[#686fff] cursor-pointer text-sm" onClick={() => router.push("/reset-password-request")}>
            forgot Password
          </button>
        </div>
        <div className="border-1 border-[#4bd5ff] px-4 py-1 rounded-sm">
          <button type="submit" className="uppercase font-semibold text-[#686fff] cursor-pointer">
            Sign in
          </button>
        </div>
        
        {message !== "" && (
                 <CustomMessage message={message}/>
                )}
        
                {isLoading && <SmallLoader />}
      </form>
    </div>
    </div>
  );
};

export default Register;
