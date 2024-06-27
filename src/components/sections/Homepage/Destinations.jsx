import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import DestinationCards from './DestinationCards'

const Destinations = () => {
  return (
    <div>
           <div className="mx-auto max-w-2xl py-2 sm:py-8 lg:py-8 md:mt-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Destinations{' '}
                
                </div>
                </div>
                <div className="text-center leading-loose ">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl py-2">
                <RoughNotation type="highlight" animationDelay={5700} color='yellow' animationDuration={1200}  show={true}><span className="text-red-700">Popular</span> </RoughNotation> Destinations
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                Step into a world of breathtaking landscapes, encounter exotic wildlife, and embrace the thrill of the untamed wilderness.
                </p>
                
                </div>
            </div>

            <div className='mt-5 max-sm:mt-5 max-md:mt-5 w-full max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 items-center justify-center' >
              
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
             
            </div>
    </div>
  )
}

export default Destinations