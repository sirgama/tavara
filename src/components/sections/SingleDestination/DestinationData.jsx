import React from 'react'
import DestinationImages from './DestinationImages'
import DestinationContent from './DestinationContent'

const DestinationData = () => {
  return (
    <div className='grid lg:grid-cols-12 md:grid-cols-2  items-start gap-6 h-full sm:h-screen'>
       
        <div className='lg:col-span-6 mx-auto h-full sm:h-screen'>
            <DestinationImages />
        </div>

        <div className='relative lg:col-span-6 mx-auto h-full sm:h-screen sticky'>
            <DestinationContent />
        </div>


    </div>
  )
}

export default DestinationData