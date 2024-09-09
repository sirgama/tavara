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
import Head from "next/head";
import { useEffect, useState } from "react";
import getPackages from "@/lib/packagesapi";

const playfair_display = Playfair_Display({
  weight: ["400"],
  subsets: ["cyrillic"],
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [apiData, setApiData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPackages();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

  }, []);



  return (
    <main className="">
      <Head>
        <title>Tavara Tours and Travel </title>
        <meta name="description" content="Explore top travel destinations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon/png" href="/tavara.png" />
      </Head>
      <div>
        <NavigationBar />
        <Hero />
        <Partners />
        <Aboutus />
        <Aboutsection apiData={apiData} />
        <Destinations apiData={apiData} />
        <Book />
        <WhatsappButton />
        <Footer />
      </div>
    </main>
  );
}
