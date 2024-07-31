import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'

const Aboutus = () => {
  return (
   <Fade cascade triggerOnce>
     <div className='bg-[#f2fcfb]'>
     <section className=" w-full  py-4 md:pb-32  ">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-5 items-start gap-6">
                <div className="lg:col-span-5 mx-auto">
                   

                    <h4 className="font-semibold lg:leading-normal leading-normal text-center md:text-left text-lg lg:text-lg mt-2 mb-5 ">  <RoughNotation type=" " animationDelay={2700} color='blue' animationDuration={2200}  show={true}><span className="text-red-700">About Tavara</span> </RoughNotation>   </h4>

                    <h4 className="font-semibold lg:leading-normal leading-normal text-center md:text-left text-3xl lg:text-6xl mt-4 mb-5 text-red-700"><RoughNotation type="highlight" animationDelay={7700} color='yellow' animationDuration={4200}  show={true}><span className="text-red-700">Unlimited </span> </RoughNotation>   <RoughNotation type="circle" animationDelay={7700} color='red' animationDuration={4200}  show={true}><span className="text-red-700"> Travel </span> </RoughNotation> and Holiday  <RoughNotation type="box" animationDelay={7700} color='blue' animationDuration={4200}  show={true}><span className="text-red-700">Deals</span> </RoughNotation>   </h4>
            
                    <p className="text-gray-700 text-lg max-w-xl">
                    Tavara Tours & Travel Strives to deliver exceptional service to all its clients. By adding a personal touch to our products, we ensure that your time spent with us is comfortable and memorable. We are a reliable partner and a very flexible holiday organizer for both Safaris & Beach Holiday packages. We do organize accommodation, flights/ferry tickets and all tours and ground transfers.

                    Tavara Tours offers top quality of service and we leave nothing to chance ensuring that clients have a great time and memorable experience of their life time holidays.
                    </p>

                   <div className="my-10 "> <a href="#" className="bg-red-500 hover:bg-red-600 text-white text-center md:text-left font-bold py-3 px-10 my-5 md:my-10">Learn More</a></div>
                                        
                                        
                </div>

                <div className="lg:col-span-7">
                        <Image 
                            src = '/abtimg.jpg'
                            height = {1500}
                            width = {1500}
                            alt = 'Tavara Tours'
                            className = 'rounde'
                            />
                </div>
            </div>
        </div>
    </section>
    </div>
   </Fade>
  )
}

export default Aboutus