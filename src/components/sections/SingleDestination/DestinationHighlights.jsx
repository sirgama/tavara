import React from 'react'

const DestinationHighlights = ({destination}) => {
  return (
    <div>
                <div className="mx-auto max-w-3xl text-center my-8 md:my-8">
                        <h2 className="text-2xl font-bold tracking-tight text-red-900 underline underline-offset-8 sm:text-4xl mb-10   ">{destination.name}</h2>                </div>
                
        <div class="flex w-full items-stretch  justify-evenly">
            
    {/* <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    
        <div class="relative bg-white py-3 px-3 rounded-2xl w-auto h-auto my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2M8 3v2m8-2v2M3 9h18M9 14h.01M9 17h.01M12 14h.01M12 17h.01M15 14h.01M15 17h.01" />
</svg>
            </div>
            <div class="mt-6">
                <p class="text-lg md:text-sm sm:text-md lg:text-lg font-semibold my-2">Location</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Kenya</p>
                    
                    </div>
                
                </div>
            </div>
        </div>

        <div class="relative bg-white py-3 px-3 rounded-2xl w-auto h-auto my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
              
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8" />
  <circle cx="12" cy="12" r="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18" />
</svg>
            </div>
            <div class="mt-6">
                <p class="text-lg md:text-sm sm:text-md lg:text-lg font-semibold my-2">Tour Guide</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Available</p>
                    
                    </div>
                
                </div>
            </div>
        </div>



     
        <div class="relative bg-white py-3 px-3 rounded-2xl w-auto h-auto my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14a3 3 0 100 6 3 3 0 000-6zM17 14a3 3 0 100 6 3 3 0 000-6z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14v-3a2 2 0 012-2h12a2 2 0 012 2v3" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v8" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h6" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4L9 6 8 4" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4l1 2 1-2" />
</svg>
            </div>
            <div class="mt-6">
                <p class="text-lg md:text-sm sm:text-md lg:text-lg font-semibold my-2">Cost</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Kes 3,000 PPS</p>
                    
                    </div>
                
                </div>
            </div>
        </div>


        <div class="relative bg-white py-3 px-3 rounded-2xl w-auto h-auto my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>
            <div class="mt-6">
                <p class="text-lg md:text-sm sm:text-md lg:text-lg font-semibold my-2">Transportation</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Tour Van</p>
                    
                    </div>
                
                </div>
            </div>
        </div>

      


    </div> */}
</div>
    </div>
  )
}

export default DestinationHighlights