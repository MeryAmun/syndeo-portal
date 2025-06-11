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
      <h1 className="text-[50px] uppercase font-bold text-primary">welcome to syndeo portal</h1>
      <p className="px-7"><span className="font-bold uppercase text-primary">SYNDEO Portal,</span> is the admin platform for the management of the mobile application.This portal is only available to school teachers and admins of the school profile.The following are the some of the major activities on this portal.</p>
      </main>
      <main
        className="flex flex-col gap-[32px] w-[40%] items-center pb-8"
      >
      {
        landingData?.map(({title,IconName,text,color},index) => (
          <div className="flex flex-col justify-center items-center gap-5 bg-secondary  shadow-cyan-500/50 shadow-xl rounded-md w-[80%] px-4 py-4" key={index}>
            <div className="flex flex-col justify-center items-center gap-2 border-1 border-primary rounded-md px-4 py-4 bg-white">
              <div className="bg-primary w-[50px] h-[50px] flex justify-center rounded-full items-center">
              <IconName weight="fill" size="24px"  color={color}/>
              </div>
            <h5 className="uppercase font-bold text-primary">{title}</h5>
          </div>
          <div className="w-[100%]">
            <p className="font-500 text-[14px]">{text}</p>
          </div>
          </div>
        ))
      }
      </main>
    </div>
  );
}
