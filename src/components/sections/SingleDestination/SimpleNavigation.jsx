import React from 'react'
import { Button } from "@/components/ui/button"
import {  ChevronLeftIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import BookingForm from '../Forms/BookingForm'


const SimpleNavigation = () => {
  return (
    <div className=' w-full hidden sm:flex flex-row justify-between px-5 my-2 sticky'>

        <div className="py-6">
            <Link href="/courses" className="text-sm font-semibold leading-6 bg-red-500 text-white px-12 py-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 ">
         <button
            type="button"
            className="-m-3.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          ><span className='p-4' aria-hidden="true">&larr;</span> 
            Go Back
         
          </button> 
        </Link>
            </div>




        <div className="py-6">
        
        
            <Dialog>
           <DialogTrigger> <button
           
           className="-m-2.5  p-2.5 text-white text-sm font-semibold leading-6 bg-red-500  px-12 py-4  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 "
           
         >Book this Option
</button> </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
       <BookingForm />
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
         
         
       
            </div>


    </div>
  )
}

export default SimpleNavigation