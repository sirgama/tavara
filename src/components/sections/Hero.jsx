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
    <div className="min-h-screen flex flex-col">
   

    <main className="flex-grow ">
        {/* <Navbar className=' absolute' /> */}
        <NavigationBar className=' absolute' />
      

    <div className="slider-container  " >
    <Slider {...settings}>
        <div className="relative bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/9149362/pexels-photo-9149362.jpeg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Nyali&apos;s Sun-Kissed Retreat</h1>
          <p className="text-lg md:text-xl mb-6">Bask in the warmth of Mombasa&apos;s sun-kissed beaches with Tavara Tours & Travel.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-10 ">View More</a>
        </div>
      </div>

      <div className="relative bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/18000393/pexels-photo-18000393/free-photo-of-tourist-vehicle.jpeg')]">
        <span className="absolute inset-0 bg-black opacity-50"></span>
        <span className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Kisumu&apos;s Sun-Kissed Retreat</h1>
          <p className="text-lg md:text-xl mb-6">Bask in the warmth of Mombasa&apos;s sun-kissed beaches with Tavara Tours & Travel.</p>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-10 ">View More</a>
        </span>
      </div>

      <div className="relative bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/12004885/pexels-photo-12004885.jpeg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Eldoret&apos;s Sun-Kissed Retreat</h1>
          <p className="text-lg md:text-xl mb-6">Bask in the warmth of Mombasa&apos;s sun-kissed beaches with Tavara Tours & Travel.</p>
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