"use client";
import { Inter, Playfair_Display } from "next/font/google";

import Hero from "@/components/sections/Hero";
import Aboutsection from "@/components/sections/Choose";
import WhatsappButton from "@/components/sections/Webapp/WhatsappButton";
import Partners from "@/components/sections/Homepage/Partners";
import Aboutus from "@/components/sections/Homepage/Aboutus";
import NavigationBar from "@/components/sections/NavigationBar";


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
    <Aboutus />
    <Aboutsection />
   
    <WhatsappButton />
    </main>
  );
}
