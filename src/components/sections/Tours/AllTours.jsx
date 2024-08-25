import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Safaricard from '../Homepage/Safaricard'
import TourCard from '../Homepage/TourCard';

const AllTours = ({apiData}) => {

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
    <div >
      <Head>
        <title>Top Tours</title>
        <meta name="description" content="Tours available on our gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <div>
           <div className="mx-auto max-w-2xl py-2 sm:py-14 lg:py-14 ">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Available Tours{' '}
                
                </div>
                </div>
                <div className="text-center leading-loose ">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl py-2">
               Tours
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose your favorite tour
                </p>
                
                </div>
            </div>

            <div className='mt-5 max-sm:mt-5 max-md:mt-5   max-w-screen-2xl max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 items-center justify-center' >
              
            <TourCard tourData = {tourData} />

                  
             
            </div>
    </div>
    </div>
  )
}

export default AllTours