import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigationBar from './NavigationBar'

const Hero = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
       
      };
  return (
    <div className="min-h-screen w-full ">
   

    <main className=" ">
        {/* <Navbar className=' absolute' /> */}
        <NavigationBar className=' ' />
      

    <div className="slider-container w-screen -mr-20  h-screen " >
    <Slider {...settings}>
        <div className="relative bg-cover bg-center h-screen w-screen bg-no-repeat bg-[url('https://res.cloudinary.com/dzhpqlsy9/image/upload/f_auto,q_auto/cqaoitm3j2bdghwn36ve')] transition duration-1000 ease-in  ">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Adventure Awaits in Kenya’s Untamed</h1>
          <p className="text-lg md:text-xl mb-6">From the majestic Amboseli National Park to the pristine shores of Mombasa, explore our exclusive packages designed for the ultimate safari experience.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 ">View Packages</a>
        </div>
      </div>

      <div className="relative bg-cover bg-center h-screen w-screen bg-[url('https://res.cloudinary.com/dzhpqlsy9/image/upload/f_auto,q_auto/yhqdnqqhobzfqxoteaqj')] transition duration-1000 ease-in ">
        <span className="absolute inset-0 bg-black opacity-50 "></span>
        <span className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Heard about Kenya&apos;s Coast?</h1>
          <p className="text-lg md:text-xl mb-6">Journey through the legendary Maasai Mara, relax in Zanzibar’s paradise, and create memories that last a lifetime with our tailored holiday packages.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-10 ">Explore Mara</a>
        </span>
      </div>

      <div className="relative bg-cover bg-center h-screen w-screen bg-[url('https://res.cloudinary.com/dzhpqlsy9/image/upload/f_auto,q_auto/xtnaxpkinqcqoqdmkfl6')] transition duration-1000 ease-in ">
        <span className="absolute inset-0 bg-black opacity-50 "></span>
        <span className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Experience the Magic of Kenya</h1>
          <p className="text-lg md:text-xl mb-6">Journey through the legendary Maasai Mara, relax in Zanzibar’s paradise, and create memories that last a lifetime with our tailored holiday packages.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-10 ">Explore Mara</a>
        </span>
      </div>

      <div className="relative bg-cover bg-center h-screen w-screen bg-[url('https://images.pexels.com/photos/12004885/pexels-photo-12004885.jpeg')] transition duration-1000 ease-in ">
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Explore Kenya’s Majestic National Parks</h1>
          <p className="text-lg md:text-xl mb-6">From the iconic Maasai Mara to the stunning Amboseli, immerse yourself in the beauty and wildlife of Kenya’s renowned national parks with our exclusive safari packages.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-10 ">View More</a>
        </div>
      </div>
    </Slider>
    </div>
    </main>
  </div>
  )
}

export default Hero