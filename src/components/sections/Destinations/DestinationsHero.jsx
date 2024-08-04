import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

const DestinationsHero = () => {
    const settings = {
      className: "slider",
        dots: false,
        fade: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
       
      }
  return (
    <div className=" ">
   


<div class="h-auto bg-gray-50 flex items-center">
	<section class="relative w-full bg-cover bg-center py-32" style={{ backgroundImage: 'url(/heroimage.png)' }}>
    <div className="absolute inset-0 bg-black opacity-60 "></div>
    <div className="flex flex-col flex-wrap">
    {/* <div class="relative container mx-auto text-center text-white z-50">
			<Link href='/' class="text-4xl font-extrabold text-white mb-12 ">Destinations</Link>
		</div> */}
		<div class="relative container mx-auto text-center text-white z-50">
			<Link href='/' class="text-md font-medium mb-6 hover:underline hover:ease-in-out hover:delay-150">Home {` `} {`>`}</Link>
            <Link href='/' class="text-md font-medium mb-6">{` `} Destinations </Link>
		</div>
    </div>
	</section>
</div>

  </div>
  )
}

export default DestinationsHero