import React from 'react'

const page = () => {
  return (
    <div className="h-[74vh] flex flex-col justify-center items-center px-4 py-4">
      <div className="pb-3">
        <h3 className="uppercase text-center text-lg font-bold">
          Verify Your Account
        </h3>
      </div>
      <div className="py-2 w-[60%]">
        <p className="text-center text-lg">
     Your registration on  <span className="text-lg font-bold text-[#686fff]">SYNDEO </span> Portal is successful.
           A verification link has been sent to your email address.Please click on the link to verify your account. You cannot proceed to use our platform with verifying your account.
        </p>
      </div>
      <div className="py-5">
        <h5 className="text-center text-lg font-bold">
          Thanks, <span className="text-lg font-bold text-[#686fff]">SYNDEO</span> Team
        </h5>
      </div>
    </div>
  )
}

export default page