import React, {useEffect, useState} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Safaricard from "./Safaricard";
import getPackages from "@/lib/packagesapi";
import TourCard from "./TourCard";

const Choose = ({apiData}) => {

  const [tourData, setTourData] = useState([]);


  useEffect(() => {
    const video = document.getElementById('autoplay-video');
    if (video) {
      video.play()
    }
  }, [])

  useEffect(() => {
    const extractTourData = () => {
      const tours = [];

      apiData.forEach(item => {
        if (item && item.sys && item.sys.contentType && item.sys.contentType.sys.id === 'tours') {
          const { fields } = item;
          tours.push({
            id: item.sys.id,
            tourName: fields.tourName,
            tourDescription: fields.tourDescription,
            tourMainImage: fields.tourMainImage?.fields?.file?.url,
            tourImages: fields.tourImages?.map(img => img.fields.file.url),
            tourCost: fields.tourCost,
            tourGuide: fields.tourGuide,
            days: fields.days,
            included: fields.included,
            excluded: fields.excluded,
            itinerary: fields.itinerary
          });
        }
      });

      setTourData(tours);
    };

    if (apiData) {
      extractTourData();
    }
  }, [apiData]);
  



  return (
    <div className="relative w-full bg-choose bg-no-repeat bg-center bg-cover flex items-center  max-md:pt-40 max-sm:pt-48 h-auto md:h-[60vh] max-md:h-[55vh] max-sm:h-full ">
           <video id="autoplay-video" className="absolute inset-0 h-full w-full object-cover" autoplay loop controls muted >
    <source
      src="https://res.cloudinary.com/dzhpqlsy9/video/upload/f_auto:video,q_auto/e773srewibrosc6oprto"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <div className="flex flex-col h-full justify-start items-middle mx-auto text-center gap-y-10  p-8 max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-md:items-center max-sm:items-center max-md:p-3 max-sm:p-3 relative z-10">
        <h3
          className='
            "font-extrabold text-[#ffffff]   text-5xl max-md:text-md max-sm:text-md max-md:text-center max-sm:text-center"
          '
        >
          Handpicked Tour Deals
        </h3>
    
        <p className="text-white font-semibold leading-6 max-md:text-center max-sm:text-center">
        Tour various places and experience Africa with us.  
        </p>
        <div className="mt-5 max-sm:mt-5 max-md:mt-5 w-full max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 ">
          <TourCard tourData = {tourData} />
        </div>
      
      </div>
    </div>
  )
}

export default Choose
