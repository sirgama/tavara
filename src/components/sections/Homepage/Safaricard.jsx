import React from 'react'
import Image from 'next/image'
import { getPackageById } from '@/lib/getPackageById'

const Safaricard = ({destination}) => {

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
  
 <>
 {destination.map((singlePackage) => {

    


  <div key={singlePackage.id} class="relative z-10 flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition ease-in-out delay-150  hover:scale-110 mb-20"> 
 

<div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
 <Image
   src={singlePackage.mainImage} alt={singlePackage.title} height={1000} width={1000}
 />
 <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
 <button
   class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle  text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
   type="button"
   data-ripple-dark="true"
 >
   <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="currentColor"
       aria-hidden="true"
       class="h-6 w-6"
     >
       <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
     </svg>
   </span>
 </button>
</div>
<div class="p-6">
<div class="mb-3 flex items-center justify-between ">
   <div>
   <button class="cursor-pointer font-medium overflow-hidden relative z-100 border border-green-500 group px-4 py-1">
   <span class="relative z-10 text-green-500 group-hover:text-white text-sm duration-500">{singlePackage.days} days | {singlePackage.nights} nights</span>
   <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
   <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
   </button>
   </div>
   <p class="flex items-center gap-1.5  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="currentColor"
       aria-hidden="true"
       class="-mt-0.5 h-5 w-5 text-yellow-500"
     >
       <path
         fill-rule="evenodd"
         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
         clip-rule="evenodd"
       ></path>
     </svg>
     5.0
   </p>
 </div>
 <div class="mb-3 w-full flex items-start justify-start justify-items-start text-start">
   <h5 class="block  text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
   {singlePackage.title}
   </h5>
 
 </div>
 <p class="block  text-lg font-light leading-relaxed text-start text-gray-900 antialiased">
       <span className='font-bold'>Cost:</span> {formatCurrency(singlePackage.cost, singlePackage.currency ? "USD" : "KES")} {' '} pps
       </p>
 
</div>
<div class="p-6 pt-3">
 <button
   class="block w-full select-none  bg-white py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-red-500 border-2 border-red-500 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 hover:bg-red-500 hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
   type="button"
   data-ripple-light="true"
 >
   Explore
 </button>
</div>
</div>


 })}
 </>
  


  )
}

export default Safaricard