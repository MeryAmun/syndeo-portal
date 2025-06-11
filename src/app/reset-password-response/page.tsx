import React from 'react'

const page = () => {
  return (
    <div className="h-[74vh] flex flex-col justify-center items-center px-4 py-4">
      <div className="pb-3">
        <h3 className="uppercase text-center text-lg font-bold text-primary">
         Password Reset Request sent
        </h3>
      </div>
      <div className="py-2 w-[60%]">
        <p className="text-center text-lg">
     The request to reset your password has been sent successfully.
           A link has been sent to your email address.Please click on the link to reset your passsword. 
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