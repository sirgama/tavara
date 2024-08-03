import React from 'react'
import styles from '../../../styles/destinationStyles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import DestinationsHero from './DestinationsHero'
import { RoughNotation } from 'react-rough-notation'
import DestinationCards from '../Homepage/DestinationCards'

const AllDestinations = () => {
    const destinations = [
        { name: 'Canada', image: '/canada.jpg', reviews: 0, tours: 0 },
        { name: 'Egypt', image: '/egypt.jpg', reviews: 0, tours: 0 },
        { name: 'China', image: '/china.jpg', reviews: 0, tours: 0 },
        { name: 'Dubai', image: '/dubai.jpg', reviews: 0, tours: 1 },
        { name: 'Tanzania', image: '/tanzania.jpg', reviews: 0, tours: 3 },
        { name: 'Kenya', image: '/kenya.jpg', reviews: 0, tours: 16 },
      ]
  return (
    <div >
      <Head>
        <title>Top Destinations</title>
        <meta name="description" content="Explore top travel destinations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <div>
           <div className="mx-auto max-w-2xl py-2 sm:py-14 lg:py-14 ">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Available Destinations{' '}
                
                </div>
                </div>
                <div className="text-center leading-loose ">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl py-2">
               Destinations
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                Step into a world of breathtaking landscapes, encounter exotic wildlife, and embrace the thrill of the untamed wilderness.
                </p>
                
                </div>
            </div>

            <div className='mt-5 max-sm:mt-5 max-md:mt-5   max-w-screen-2xl max-md:w-full max-sm:w-full max-md:mx-auto max-sm:mx-auto max-w-screen mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 items-center justify-center' >
              
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
                    <DestinationCards />
             
            </div>
    </div>
    </div>
  )
}

export default AllDestinations