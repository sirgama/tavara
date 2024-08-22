import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const TourImages = () => {
  const images = [
    "https://images.pexels.com/photos/12004884/pexels-photo-12004884.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11235470/pexels-photo-11235470.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/26841267/pexels-photo-26841267/free-photo-of-two-zebras-grazing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7637398/pexels-photo-7637398.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/27544270/pexels-photo-27544270/free-photo-of-olympus-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=600",

  ]

  const [currentImage, setCurrentImage] = useState(images[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length)
      setCurrentImage(images[randomIndex])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='relative md:h-screen'>
      <Image
        src={currentImage}
        height={1000}
        width={1000}
        alt="Destination image"
        className="object-cover h-full"
      />
    </div>
  )
}

export default TourImages

// import Image from 'next/image'
// import React, { useState, useEffect } from 'react'

// const TourImages = () => {
//   const images = [
//     "https://images.pexels.com/photos/12004884/pexels-photo-12004884.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/11235470/pexels-photo-11235470.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/26841267/pexels-photo-26841267/free-photo-of-two-zebras-grazing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/7637398/pexels-photo-7637398.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/27544270/pexels-photo-27544270/free-photo-of-olympus-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
//   ]

//   const [currentImage, setCurrentImage] = useState(images[0])
//   const [nextImage, setNextImage] = useState(images[1])
//   const [fade, setFade] = useState(false)

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setFade(true)
//       setTimeout(() => {
//         const currentIndex = images.indexOf(currentImage)
//         const nextIndex = (currentIndex + 1) % images.length
//         setCurrentImage(images[nextIndex])
//         setNextImage(images[(nextIndex + 1) % images.length])
//         setFade(false)
//       }, 500) // Half of the transition time
//     }, 3000)

//     return () => clearInterval(intervalId)
//   }, [currentImage])

//   return (
//     <div className='relative md:h-screen'>
//       <div className={`absolute inset-0 transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
//         <Image
//           src={currentImage}
//           height={1000}
//           width={1000}
//           alt="Destination image"
//           className="object-cover h-full"
//         />
//       </div>
//       <div className="absolute inset-0">
//         <Image
//           src={currentImage}
//           height={1000}
//           width={1000}
//           alt="Destination image"
//           className="object-cover h-full"
//         />
//       </div>
//     </div>
//   )
// }

// export default TourImages