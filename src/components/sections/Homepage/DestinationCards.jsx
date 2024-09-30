import Link from "next/link";
import React from "react";

const DestinationCards = ({destinationsdata} ) => {




  return (
    <>
    {destinationsdata.map(destination => (
      <div key={destination.id}>
      <div class="relative grid h-[30rem] w-full max-w-[24rem] flex-col items-end justify-center overflow-hidden bg-indigo-500 shadow-lg shadow-indigo-500/50 bg-clip-border text-center text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30 mb-20">
      <div
  className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
  style={{
    backgroundImage: `url(${destination.destinationMainImage})`,
  }}
>
  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
</div>
        <div class="relative p-6 py-14 px-6 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {destination.name}
          </h2> 
          <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            By cojani Tours
          </h5>
          <Link href={`/destination/${destination.id}`}class="block w-full select-none  bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white border-2 border-red-500 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 hover:bg-transparent hover:text-red-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            
           View Destination 
        </Link>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default DestinationCards;
