"use client";
import HeaderImage from "../../components/HeaderImage";
import { landingData } from "../../utils/constants";


export default function Home() {
  
 
  return (
    <div className="flex flex-col items-center justify-between gap-10 font-[family-name:var(--font-geist-sans)] w-full">
    
      <HeaderImage path="/images/board.jpg"/>
      <main
        className="flex flex-col gap-[32px] items-center w-[60%]"
      >
      <h1 className="text-[50px] uppercase font-bold">welcome to syndeo portal</h1>
      <p className="px-7"><span className="font-bold uppercase">SYNDEO Portal,</span> is the admin platform for the management of the mobile application.This portal is only available to school teachers and admins of the school profile.The following are the some of the major activities on this portal.</p>
      </main>
      <main
        className="flex flex-col gap-[32px] w-[40%] items-center pb-8"
      >
      {
        landingData?.map(({title,IconName,text,color},index) => (
          <div className="flex flex-col justify-center items-center gap-5 border-1 border-[#4bd5ff] rounded-md px-4 py-4" key={index}>
            <div className="flex justify-center items-center gap-4 border-1 border-[#4bd5ff] rounded-md px-4 py-4">
              <IconName weight="fill" size="24px" color={color}/>
            <h5 className="uppercase font-bold text-[#4bd5ff]">{title}</h5>
          </div>
          <div className="">
            <p className="">{text}</p>
          </div>
          </div>
        ))
      }
      </main>
    </div>
  );
}
