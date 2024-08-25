
import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import AllTours from '@/components/sections/Tours/AllTours'
import ToursHero from '@/components/sections/Tours/ToursHero'
import getPackages from '@/lib/packagesapi'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function tours() {
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
      <title>Tours</title>
      <meta name="description" content="Our Journey in being the travel partner" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <NavigationBar />
      <ToursHero />
      <AllTours apiData={apiData} />
      <Footer />
    </div>
  </main>
  )
}

