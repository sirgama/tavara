"use client";
import { Inter, Playfair_Display } from "next/font/google";

import Hero from "@/components/sections/Homepage/Hero";
import Aboutsection from "@/components/sections/Homepage/Choose";
import WhatsappButton from "@/components/sections/Webapp/WhatsappButton";
import Partners from "@/components/sections/Homepage/Partners";
import Aboutus from "@/components/sections/Homepage/Aboutus";
import NavigationBar from "@/components/sections/NavigationBar";
import Destinations from "@/components/sections/Homepage/Destinations";
import Book from "@/components/sections/Homepage/Book";
import Footer from "@/components/sections/Footer/Footer";


const playfair_display = Playfair_Display({ weight: ["400" ], subsets: ["cyrillic"]})
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=''
    >
      <NavigationBar />
    <Hero />
    <Partners />
    <Aboutus  />
    <Aboutsection />
    <Destinations />
   <Book/>
   <WhatsappButton/>
   <Footer />
    
    </main>
  )
}
