import Image from 'next/image'
import React from 'react'
import hiraffe from "/public/hiraffe.jpg";

const DestinationImages = () => {
  return (
    <div className='relative md:h-screen'>
      <Image
                src={hiraffe}
                height={"screen"}
                width={"full"}
                alt="Destination image"
                className="object-cover h-full"
              />
    </div>
  )
}

export default DestinationImages