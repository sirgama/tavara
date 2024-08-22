import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import TourData from '@/components/sections/SingleTour/TourData'
import TourHero from '@/components/sections/SingleTour/TourHero'
import React from 'react'

const tour = () => {
  return (
   <div>
   <div className='block sm:hidden'>   <NavigationBar /></div>
     {/* <TourHero /> */}
     <TourData />
     <Footer />
   </div>
  )
}

export default tour