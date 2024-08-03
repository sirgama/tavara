"use client"
import AllDestinations from "@/components/sections/Destinations/AllDestinations";
import DestinationsHero from "@/components/sections/Destinations/DestinationsHero";
import Footer from "@/components/sections/Footer/Footer";
import NavigationBar from "@/components/sections/NavigationBar";
import { Inter, Playfair_Display } from "next/font/google";


const destinations = () => {
  return (
    <div>
           <NavigationBar />
           <DestinationsHero />
        <AllDestinations />
        <Footer />
    </div>
  )
}

export default destinations