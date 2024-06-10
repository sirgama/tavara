import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

const Navbar = () => {
  return (
    <nav className="  bg-opacity-100  absolute z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">MARAB</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Destination</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Safari</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Excursions</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Transfer</a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="bg-red-500 text-white px-12 py-4 text-md font-medium">Enquire Now</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar