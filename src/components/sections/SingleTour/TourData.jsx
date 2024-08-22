import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import BookingForm from '../Forms/BookingForm';
import TourImages from './TourImages';
import TourHighlights from './TourHighlights';
import SimpleNavigation from '../SingleDestination/SimpleNavigation';


const TourData = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const sections = [
    { title: 'Overview', content: 'Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...Content for section 1...' },
    { title: 'Whats Included', content: 'Content for section 2...' },
    { title: 'Excluded', content: 'Content for section 3...' },
    { title: 'Itenerary', content: 'Content for section 3...' },
    // Add more sections as needed
  ];

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
            <TourImages />
        </div>



        {/* <div className=' lg:col-span-6 mx-auto h-full sm:h-screen  overflow-y-scroll ml-1/3 relative '> */}
            {/* <DestinationContent /> */}
            <div className="w-full ml-auto overflow-y-auto lg:col-span-6 mx-auto h-full sm:h-screen relative">
            <div className="sticky top-0 py-4 z-10"><SimpleNavigation /></div>
            <TourHighlights />
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-8">
            <h2 className={`text-3xl text-center font-bold py-8 bg-white sticky top-20 ${index === activeSection ? 'text-blue-600' : ''}`}>
              {section.title}
            </h2>
            <p className="mt-4 mx-10">{section.content}</p>
        
          </div>
        ))}   <div className="py-6">
         <Dialog>
           <DialogTrigger> <button
           
           className="m-5 w-full text-center  p-2.5 text-white text-sm font-semibold leading-6 bg-red-500  px-10 py-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 "
           
         >Book this Option
</button> </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
       <BookingForm />
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
      </div>
     
        {/* </div> */}


    </div>
  )
}

export default TourData