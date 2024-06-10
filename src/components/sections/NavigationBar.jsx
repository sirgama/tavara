'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../../public/tavara.png'
import NavigationMenuDemo from './Webapp/Navexample'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About Tavara', href: '/about' },
  { name: 'Contact us', href: '/contact' },
]

const NavigationBar = () => {
  const [loading, setLoading] = useState(true)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuClose, setMobileMenuClose] = useState("false")

  setTimeout(() => {
    setLoading(false)
  }, 2500);


  return (
   <>
   {loading ? <></> : 
    <header className="bg-opacity-100 absolute inset-x-0 top-0 z-50  w-2/3 justify-center align-middle mx-auto ">
    <nav className="w-full flex items-center justify-between p-6 sticky " aria-label="Global">
      <div className="flex lg:flex-1">
       {!mobileMenuOpen &&  <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Tavara Tours</span>
          <Image
            className="h-12 w-auto"
            width = {700}
            height = {700}
            src={logo}
            alt="Tavara Tours"
          />
        </Link>}
      </div>
      <div className="flex lg:hidden">
       {!mobileMenuOpen &&  <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>}
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {/* {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </a>
        ))} */}

<NavigationMenuDemo />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
    
        <Link href="/contact" className="text-sm font-semibold leading-6 bg-red-500 text-white px-12 py-4  ">
        Enquire Now <span aria-hidden="true">&rarr; </span> 
        </Link>
         
      </div>
    </nav> 
    <Dialog as="div" className={` ${!mobileMenuOpen && 'hidden'} lg:hidden `} open={mobileMenuOpen} onClose={setMobileMenuClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tavara</span>
            <Image
              className="h-14 w-auto"
              width={700}
              height = {700}
              src={logo}
              alt="Tavara Tours"
            />
          </Link>
         <Link href='#'> <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button></Link>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-25"
                >
                  <button
            type="submit"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
             {item.name}
         
          </button>
                
                </Link>
              ))}


            </div>
            <div className="py-6">
            <Link href="/courses" className="text-sm font-semibold leading-6 text-white bg-[#160041] px-10 py-2 rounded-lg  ">
         <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
             Enquire Now
         
          </button> <span aria-hidden="true">&rarr;</span>
        </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
   
  </header>
   }
   </>


  )
}

export default NavigationBar