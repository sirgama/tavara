import Link from "next/link";
import React, {useEffect} from "react";
import { cn } from "@/lib/utils";
import Safaricard from "./Homepage/Safaricard";

const Choose = () => {
  useEffect(() => {
    const video = document.getElementById('autoplay-video');
    if (video) {
      video.play();
    }
  }, []);
  return (
    <div className="relative w-full bg-choose bg-no-repeat bg-center bg-cover flex items-center  max-md:pt-40 max-sm:pt-48 h-[60vh] max-md:h-[55vh] max-sm:h-[80vh] ">
           <video id="autoplay-video" className="absolute inset-0 h-full w-full object-cover" autoplay loop controls muted >
    <source
      src="https://res.cloudinary.com/dzhpqlsy9/video/upload/f_auto:video,q_auto/e773srewibrosc6oprto"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="flex flex-col h-full justify-start items-middle mx-auto text-center gap-y-10  p-8 max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-md:items-center max-sm:items-center max-md:p-3 max-sm:p-3 relative z-10">
        <h3
          className='
            "font-extrabold text-[#ffffff]   text-5xl max-md:text-md max-sm:text-md max-md:text-center max-sm:text-center"
          '
        >
          Handpicked Package Deals
        </h3>
    
        <p className="text-white font-semibold leading-6 max-md:text-center max-sm:text-center">
        Step into a world of breathtaking landscapes, encounter exotic wildlife, and embrace the thrill of the untamed wilderness.  
        </p>
        <div className="mt-5 max-sm:mt-5 max-md:mt-5 w-full max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 ">
          <Safaricard />
          <Safaricard />
          <Safaricard />
          <Safaricard />
          <Safaricard />
        </div>
      
      </div>
    </div>
  );
};

export default Choose;
