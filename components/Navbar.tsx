"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className='h-[80px] bg-[#000000] w-[100%] flex flex-row justify-between px-10 align-items-middle items-center'>
        <Link href="/">
        <Image 
         className="dark:invert"
              src="/images/splash-icon.png"
              alt="Vercel logomark"
              width={60}
              height={40}
              />
              </Link>
       <div className="flex flex-row justify-center items-center gap-15">
         <h2 className='text-[#fff] text-center'>Language Select</h2>
        <div className="flex flex-row justify-center items-center gap-5">
            <Link href="/login" className='text-[#4bd5ff] uppercase'>
            Login
            </Link>
            <Link href="/register" className='text-[#4bd5ff] uppercase'>
           Register
            </Link>
           
        </div>
       </div>
    </div>
  )
}

export default Navbar