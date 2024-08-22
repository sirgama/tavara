/* eslint-disable react/no-unescaped-entities */
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
                   

                    <h4 className="font-semibold lg:leading-normal leading-normal text-center md:text-left text-lg lg:text-lg mt-2 mb-5 ">   <span className="text-red-700">About Tavara</span>   </h4>

                    <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">
                {" "}
                
             
                  <span className="text-red-700">Unlimited Travel</span>{" "}
              
                & Holiday Deals{" "}
              </h4>
            
                    <p className="text-gray-700 text-lg max-w-xl">
                    At Tavara Tours and Travel, we believe that travel is more than just a journey — it's an opportunity to create lasting memories, discover hidden gems, 
and experience the true beauty of Kenya. Our core ethos is rooted in delivering personalized, safe, and unforgettable travel experiences that exceed your expectations. Whether you’re exploring the wild savannas, immersing yourself in local cultures, or unwinding on pristine beaches, we are dedicated to ensuring that your adventure is as seamless and enjoyable as possible.

                    </p>

                   <div className="my-10 "> <Link  href="/destinations" className="bg-red-500 hover:bg-red-600 text-white text-center md:text-left font-bold py-3 px-10 my-5 md:my-10">Explore Destinations</Link></div>
                                        
                                        
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