import AboutHero from '@/components/sections/About/AboutHero'
import AboutSection from '@/components/sections/About/AboutSection'
import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <main>
    <Head>
      <title>About us</title>
      <meta name="description" content="Our Journey in being the travel partner" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <NavigationBar />
      <AboutHero />
      <AboutSection />
      <Footer />
    </div>
  </main>
  )
}

export default contact