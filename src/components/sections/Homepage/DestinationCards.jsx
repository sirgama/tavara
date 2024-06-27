import React from 'react'

const DestinationCards = () => {
  return (
    <div>
        <div class="relative grid h-[30rem] w-full max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 py-14 px-6 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Nairobi National Park
    </h2>
    <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Tavara Tours
    </h5>
    <button
        class="block w-full select-none  bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white border-2 border-red-500 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 hover:bg-transparent hover:text-red-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Explore
      </button>
  </div>
</div>
    </div>
  )
}

export default DestinationCards