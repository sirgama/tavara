import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import DestinationData from '@/components/sections/SingleDestination/DestinationData'
import DestinationHero from '@/components/sections/SingleDestination/DestinationHero'
import DestinationHighlights from '@/components/sections/SingleDestination/DestinationHighlights'
import React from 'react'

const destination = () => {
  return (
    <div>
        <NavigationBar />
        {/* <DestinationHero /> */}
        {/* <DestinationHighlights /> */}
        <DestinationData />
        <Footer />
    </div>
  )
}

export default destination