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
import SimpleNavigation from '../SingleDestination/SimpleNavigation';
import { useRouter } from 'next/router';
import Inclusions from './Inclusions';
import ItineraryList from './ItineraryList';
import Exclusions from './Exclusions';
import { getPackageById } from '@/lib/getPackageById';
import PackageContent from './PackageContent';
import PackageImages from './PackageImages';
import PackageHighlights from './PackageHighlights';
import { ClimbingBoxLoader } from 'react-spinners';


const PackageData = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const router = useRouter();
  // const  id  = router?.query?.slug;
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchtour = async () => {
      if (router.isReady) {
        const  id  = router?.query?.slug; // Ensure router is ready and then access query
        try {
          const data = await getPackageById(id);
          setTour(data);
        } catch (err) {
          setError('Failed to fetch tour');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchtour();
  }, [router.isReady, router.query]);

    const goBack = () => {
      router.back();
    };


  const sections = [
    { title: 'Overview', content: <PackageContent contentData={tour?.description} /> },
    { title: 'Whats Included', content: <Inclusions tour={tour?.included} /> },
    { title: 'Excluded', content: <Exclusions tour={tour?.excluded} /> },
    { title: 'Itinerary', content: <ItineraryList tour={tour?.itinerary} /> },
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

  if (loading) return <div className='flex items-center justify-center h-screen w-screen ' ><ClimbingBoxLoader color='#EF4444' /></div>;
  if (error) return <div>{error}</div>;
  if (!tour) return <div>No tour found</div>;




  return (
    <div className='grid lg:grid-cols-12 md:grid-cols-2  items-start gap-6 h-full sm:h-screen'>
       
        <div className='lg:col-span-6 mx-auto h-full sm:h-screen'>
            <PackageImages tour={tour?.images} />
        </div>



        {/* <div className=' lg:col-span-6 mx-auto h-full sm:h-screen  overflow-y-scroll ml-1/3 relative '> */}
            {/* <tourContent /> */}
            <div className="w-full ml-auto overflow-y-auto lg:col-span-6 mx-auto h-full sm:h-screen relative">
            <div className="sticky top-0 py-4 z-10"><SimpleNavigation /></div>
            <PackageHighlights contentData={tour} />
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-8">
            <h2 className={`text-3xl text-center text-red-900 font-bold py-8 underline underline-offset-8 sticky top-10 ${index === activeSection ? 'text-red-900' : ''}`}>
              {section.title}
            </h2>
            <p className="mt-4 mx-10">{section.content}</p>
        
          </div>
        ))}   <div className="py-6 h-screen overflow-y-scroll">
         <Dialog tour={tour}>
           <DialogTrigger tour={tour} > <button
           
           className="m-5 w-full text-center  p-2.5 text-white text-sm font-semibold leading-6 bg-red-500  px-10 py-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 "
           
         >Book this Option
</button> </DialogTrigger >
  
  <DialogContent tour={tour}>
    <DialogHeader tour={tour}>
      <DialogDescription tour={tour}>
       <BookingForm tour={tour} />
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

export default PackageData