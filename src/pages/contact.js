import ContactHero from '@/components/sections/Contact/ContactHero'
import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <main>
    <Head>
      <title>Contact us</title>
      <meta name="description" content="We're available 24/7 to serve your travel needs" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <NavigationBar />
      <ContactHero />
      <Footer />
    </body>
  </main>
  )
}

export default contact