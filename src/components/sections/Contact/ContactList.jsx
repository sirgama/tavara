import React from 'react'

const ContactList = () => {
  return (
    <div>
                <div className="mx-auto max-w-2xl text-center my-8 md:my-28">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feel Free to Talk To Us</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600"> We are at your disposal whenever you need us. </p>
                </div>
                
        <div class="flex items-center justify-center">
            
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 h-40 my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Phone</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">+254 742607434</p>
                    
                    </div>
                
                </div>
            </div>
        </div>

        <div class="relative bg-white py-6 px-3 rounded-3xl w-68 h-40 my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
              
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Email</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">bookings@cojanitravels.com</p>
                    
                    </div>
                
                </div>
            </div>
        </div>



     
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 h-40 my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Office Location</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Embakasi, Nairobi Kenya</p>
                    
                    </div>
                
                </div>
            </div>
        </div>


        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 h-40 my-4 shadow-md">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">Website</p>
        
                 <div class="border-t-2"></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">www.cojanitravels.com</p>
                    
                    </div>
                
                </div>
            </div>
        </div>

      


    </div>
</div>
    </div>
  )
}

export default ContactList