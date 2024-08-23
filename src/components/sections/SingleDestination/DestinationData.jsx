import React, { useState, useEffect, useRef } from 'react'
import DestinationImages from './DestinationImages'
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import SimpleNavigation from './SimpleNavigation';
import DestinationHighlights from './DestinationHighlights';
import BookingForm from '../Forms/BookingForm';
import { useRouter } from 'next/router';
import DestinationCards from '../Homepage/DestinationCards';
import Safaricard from '../Homepage/Safaricard';


const DestinationData = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const sections = [
    { title: 'Overview', content: 'Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...' },
   
    // Add more sections as needed
  ];

  const router = useRouter();

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
  return (
    <div className='grid lg:grid-cols-12 md:grid-cols-2  items-start gap-6 h-full sm:h-screen'>
       
        <div className='lg:col-span-6 mx-auto h-full sm:h-screen'>
            <DestinationImages />
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
            <DestinationHighlights />
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-8">
            <h2 className={`text-3xl text-center font-bold py-8 bg-white sticky top-20 ${index === activeSection ? 'text-red-700' : ''}`}>
              {section.title}
            </h2>
            <p className="mt-4 mx-10">{section.content}</p>
        
          </div>
        ))}   
        <h2 className="text-2xl font-bold tracking-tight text-red-700  sm:text-3xl mb-10  text-center ">Packages Available Here</h2> 

<div className="mt-5 max-sm:mt-5 max-md:mt-5 w-full max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 items-center justify-center">
  
        <Safaricard />
        <Safaricard />
        <Safaricard />
        <Safaricard />
      </div>


      </div>
     
        {/* </div> */}


    </div>
  )
}

export default DestinationData