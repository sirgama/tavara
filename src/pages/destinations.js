/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AllDestinations from "@/components/sections/Destinations/AllDestinations";
import DestinationsHero from "@/components/sections/Destinations/DestinationsHero";
import Footer from "@/components/sections/Footer/Footer";
import NavigationBar from "@/components/sections/NavigationBar";
import getPackages from "@/lib/packagesapi";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function destinations() {

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
    <main>
      <Head>
        <title>Available Destinations </title>
        <meta name="description" content="Explore top travel destinations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavigationBar />
        <DestinationsHero />
      
        <AllDestinations apiData={apiData} />
        <Footer />
      </div>
    </main>
  );
};


