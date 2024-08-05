"use client";
import AllDestinations from "@/components/sections/Destinations/AllDestinations";
import DestinationsHero from "@/components/sections/Destinations/DestinationsHero";
import Footer from "@/components/sections/Footer/Footer";
import NavigationBar from "@/components/sections/NavigationBar";
import Head from "next/head";

const destinations = () => {
  return (
    <main>
      <Head>
        <title>Available Destinations </title>
        <meta name="description" content="Explore top travel destinations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body> 
        <NavigationBar />
        <DestinationsHero />
        <AllDestinations />
        <Footer />
      </body>
    </main>
  );
};

export default destinations;
