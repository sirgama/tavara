
import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import AllTours from '@/components/sections/Tours/AllTours'
import ToursHero from '@/components/sections/Tours/ToursHero'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <main>
    <Head>
      <title>Tours</title>
      <meta name="description" content="Our Journey in being the travel partner" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <NavigationBar />
      <ToursHero />
      <AllTours />
      <Footer />
    </body>
  </main>
  )
}

export default contact