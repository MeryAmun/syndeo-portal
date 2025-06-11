"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link'

const Landing = () => {
  const router = useRouter()
  return (
    <div className="w-[100%] h-[73.6vh] flex flex-col justify-center items-center py-5">
        <div className="w-[50%] ">
        <div className="w-[100%]">
         <h3 className="uppercase text-center font-bold text-primary text-2xl">
          Welcome to SYNDEO admin portal
         </h3>
        </div>
<div className="w-[100%] py-4">
         <p className="uppercase text-center font-semibold text-lg">
          You haven't added your school yet, you must add your school to proceed
         </p>
        </div>
<div className="w-[100%] flex justify-center items-center py-4">
         {/* <Link href="/add" className='text-[#686fff] uppercase text-center'>
            Add School
          
            </Link> */}
              <button className='text-primary uppercase text-center font-bold border border-primary rounded-md px-3 py-2 cursor-pointer' type="button" onClick={() => router.push("/add")}>Add school</button>
        </div>
        </div>
    </div>
  )
}

export default Landing