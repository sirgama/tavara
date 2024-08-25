import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import DestinationData from '@/components/sections/SingleDestination/DestinationData'
import DestinationHero from '@/components/sections/SingleDestination/DestinationHero'
import DestinationHighlights from '@/components/sections/SingleDestination/DestinationHighlights'
import { getDestinationById } from '@/lib/getDestinationById'
import React from 'react'

export default function destination() {


  return (
    <div>
     <div className='block sm:hidden'>   <NavigationBar /></div>
        {/* <DestinationHero /> */}
        {/* <DestinationHighlights /> */}
        <DestinationData  />
        <Footer />
    </div>
  )

  
}

