"use client"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import React from 'react'


function Navbar() {
  const router = useRouter()
  return (
    <div className='h-[80px] bg-[#000000] w-[100%] flex flex-row justify-between px-10 align-items-middle items-center'>
        <button type="button" className="cursor-pointer" onClick={() => router.push("/")}>
        <Image 
         className="dark:invert"
              src="/images/splash-icon.png"
              alt="Vercel logomark"
              width={60}
              height={40}
              />
              </button>
       <div className="flex flex-row justify-center items-center gap-15">
         <h2 className='text-[#fff] text-center'>Language Select</h2>
        <div className="flex flex-row justify-center items-center gap-5">
             <button type="button" className='text-primary uppercase cursor-pointer' onClick={() => router.push("/login")}>
              Login
            </button>
            <button type="button" className='text-primary uppercase cursor-pointer' onClick={() => router.push("/register")}>
              register
            </button>
        </div>
       </div>
    </div>
  )
}

export default Navbar