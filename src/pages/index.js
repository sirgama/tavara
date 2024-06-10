"use client";
import { Inter, Playfair_Display } from "next/font/google";

import Hero from "@/components/sections/Hero";


const playfair_display = Playfair_Display({ weight: ["400" ], subsets: ["cyrillic"]})
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=''
    >
    <Hero />
    </main>
  );
}
