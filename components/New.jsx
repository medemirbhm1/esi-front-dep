import React from "react";
import Image from "next/image";
import { IMG_URL } from "@/lib/constants";

const New = ({ image, description }) => {
  return (
    /*The content will be completed from the back-end*/
    <div className="h-28 sm:h-36 md:h-48 lg:h-[20rem] w-full lg:max-w-[23rem] flex flex-row lg:flex-col justify-center items-start mb-8 md:mb-0">
      <div className="w-[45%] lg:w-full h-full lg:h-[70%] relative flex items-start justify-start">
        <Image
          className="w-full h-full"
          src={image}
          alt="/"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-[55%] lg:w-full h-full lg:h-[30%] pl-2 lg:pl-0">
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default New;
