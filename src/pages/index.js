"use client";
import { Inter, Playfair_Display } from "next/font/google";

import Hero from "@/components/sections/Hero";
import Aboutsection from "@/components/sections/Aboutsection";
import WhatsappButton from "@/components/sections/Webapp/WhatsappButton";


const playfair_display = Playfair_Display({ weight: ["400" ], subsets: ["cyrillic"]})
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className='w-screen'
    >
    <Hero />
    <Aboutsection />
    <WhatsappButton />
    </main>
  );
}
