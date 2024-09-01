import React, { useState, useEffect, useRef } from 'react'
import DestinationImages from './DestinationImages'
import Link from 'next/link'
import DestinationHighlights from './DestinationHighlights';
import { useRouter } from 'next/router';
import Safaricard from '../Homepage/Safaricard';
import { getDestinationById } from '@/lib/getDestinationById';
import DestinationContent from './DestinationContent';
import TourCard from '../Homepage/TourCard';
import PackageCard from '../Homepage/PackageCard';
import { ClimbingBoxLoader } from 'react-spinners';


const DestinationData = () => {
  
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  


  const router = useRouter();
  // const  id  = router?.query?.slug;
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(destination)
  useEffect(() => {
    const fetchDestination = async () => {
      if (router.isReady) {
        const  id  = router?.query?.slug; // Ensure router is ready and then access query
        try {
          const data = await getDestinationById(id);
          setDestination(data);
        } catch (err) {
          setError('Failed to fetch destination');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDestination();
  }, [router.isReady, router.query]);

    const goBack = () => {
      router.back();
    };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      const active = sectionRefs.current.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= scrollPosition && rect.bottom > scrollPosition;
      });

      if (active !== -1 && active !== activeSection) {
        setActiveSection(active);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  const sections = [
    { title: 'Overview', content: <DestinationContent contentData = {destination?.description}/> },
   
    // Add more sections as needed
  ];

  if (loading) return <div className='flex items-center justify-center h-screen w-screen ' ><ClimbingBoxLoader color='#EF4444' /></div>;
  if (error) return <div>{error}</div>;
  if (!destination) return <div>No destination found</div>;
console.log(destination)

  return (
    <div className='grid lg:grid-cols-12 md:grid-cols-2  items-start gap-6 h-full sm:h-screen'>
       
        <div className='lg:col-span-6 mx-auto h-full sm:h-screen'>
            <DestinationImages destination={destination?.images} />
        </div>



        {/* <div className=' lg:col-span-6 mx-auto h-full sm:h-screen  overflow-y-scroll ml-1/3 relative '> */}
            {/* <DestinationContent /> */}
            <div className="w-full ml-auto overflow-y-auto lg:col-span-6 mx-auto h-full sm:h-screen relative">
            <div className="sticky top-0 py-4 z-10">  <div className="py-6">
            <button onClick={goBack} className="text-sm font-semibold leading-6 bg-red-500 text-white px-12 py-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 ">
         <button
            type="button"
            className="-m-3.5 rounded-md p-2.5 text-white"
            onClick={goBack}
          ><span className='p-4' aria-hidden="true">&larr;</span> 
            Go Back
         
          </button> 
        </button>
            </div></div>
            <DestinationHighlights destination={destination}  />
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-8">
            <h2 className={`text-3xl text-center font-bold py-8 sticky top-20 ${index === activeSection ? 'text-red-700' : ''}`}>
              {section.title}
            </h2>
            <p className="mt-4 mx-10">{section.content}</p>
        
          </div>
        ))}   
        <h2 className="text-2xl font-bold tracking-tight text-red-700  sm:text-3xl mb-10  text-center ">Packages Available Here</h2> 

<div className="mt-5 max-sm:mt-5 max-md:mt-5 w-full max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-8 items-center justify-center">
  
        <PackageCard destination={destination?.packages}/>
   

        
      </div>


      </div>
     
        {/* </div> */}


    </div>
  )
}



export default DestinationData