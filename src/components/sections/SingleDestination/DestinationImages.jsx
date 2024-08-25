import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const DestinationImages = ({destination}) => {


  const [currentImage, setCurrentImage] = useState(destination[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * destination?.length)
      setCurrentImage(destination[randomIndex])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='relative md:h-screen'>
      <Image
        src={`https:${currentImage}`}
        height={1000}
        width={1000}
        alt="Destination image"
        className="object-cover h-full"
      />
    </div>
  )
}

export default DestinationImages

