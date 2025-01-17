import ContactCard from '@/components/sections/Contact/ContactCard'
import ContactHero from '@/components/sections/Contact/ContactHero'
import ContactList from '@/components/sections/Contact/ContactList'
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
    <div>
      <NavigationBar />
      <ContactHero />
      <ContactList />
      <ContactCard />
      <Footer />
    </div>
  </main>
  )
}

export default contact