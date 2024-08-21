import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import TourHero from '@/components/sections/SingleTour/TourHero'
import React from 'react'

const tour = () => {
  return (
   <div>
     <NavigationBar />
     <TourHero />
     <Footer />
   </div>
  )
}

export default tour