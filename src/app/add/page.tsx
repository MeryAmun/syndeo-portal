"use client";
import React, { useState,useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { messageActions } from "@/redux/messageSlice";
import CustomMessage from "../../../components/CustomMessage";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { loginUser } from "@/redux/actions/authActions";

const AddSchool = () => {
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

//   useEffect(() => {
//   if(message === "User Logged In" && isVerified){
//     if(nameOfSchool){
//  router.push(`/${nameOfSchool}`)
//     }else{
//        router.push("/landing")
//     }
//   }else{
//      router.push("/verify")
//   }
//   }, [message,isVerified,nameOfSchool,dispatch,router])
  
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
    <div className="h-[74vh] flex flex-col justify-center items-center">
      <div className="">
        <h2 className="font-bold text-[#686fff] text-center uppercase text-lg">
         Fill in school information
        </h2>
      </div>
      <form className="flex flex-col justify-center items-center w-[40%] px-4 py-4 gap-3" onSubmit={handleLogin}>
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
          <button type="submit" className="uppercase font-semibold text-[#686fff]">
            Sign in
          </button>
        </div>
        {message !== "" && (
                 <CustomMessage message={message}/>
                )}
        
                {isLoading && <SmallLoader />}
      </form>
    </div>
  );
};

export default AddSchool;
