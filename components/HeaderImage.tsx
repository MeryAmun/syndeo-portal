import React from "react";
import Image from "next/image";

type ImageProps = {
  path:string
}
const HeaderImage = ({path}:ImageProps) => {


  return (
     <div className="w-[100%] h-[70vh]">
      <div className="h-[100%]">
      <div className="w-[100%] h-[100%]">
        <Image
          className="dark:invert2"
          src={path}
          alt="Next.js logo"
           width={100}
           height={0}
          style={imageStyle}
          unoptimized
        />
      </div>
    </div>
     </div>
  );
};

export default HeaderImage;

const imageStyle = {
  width: "100%",
  height: "100%",
  // objectFit:"cover",
};