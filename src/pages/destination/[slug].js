import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import DestinationData from '@/components/sections/SingleDestination/DestinationData'
import React from 'react'

export default function destination() {


  return (
    <div>
     <div className='block sm:hidden'>   <NavigationBar /></div>
        <DestinationData  />
        <Footer />
    </div>
  )

  
}

