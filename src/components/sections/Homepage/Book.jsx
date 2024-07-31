import React from "react";
import Image from "next/image";
import { Volkhov, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { BsBuildings } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { Progress } from "@/components/ui/progress";

const volkhov = Poppins({ subsets: ["latin"], weight: ["700"] })

const Book = () => {
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto max-md:mx-auto mt-20 mb-36 max-md:mt-20 max-sm:mt-20 flex max-md:flex-col max-sm:flex-col items-center justify-between gap-y-8 max-sm:gap-y-0 max-sm:gap-x-6 ">
      <div className="w-full max-md:w-[90%] max-sm:w-[90%] max-md:mx-auto max-sm:mx-auto mb-20 max-sm:mb-8 max-md:mb-8">
        <h3 className="font-semibold text-[#5E6282] text-left text-md">
          Easy and Fast
        </h3>
        <h1
          className={cn(
            "mt-5 mb-5 font-bold text-[#14183E] text-4xl max-md:text-2xl max-sm:text-2xl",
            volkhov.className
          )}
        >
          Book your next trip in 3 easy steps
        </h1>
        <div className="flex flex-col space-y-8 mt-6">
          <Step
            src="/choose-destination.svg"
            alt=""
            title="Choose destination"
            description="Choose a destination you love from our website or via WhatsApp."
          />
          <Step
            src="/make-payment.svg"
            alt=""
            title="Make Payment"
            description="Fill in the booking form and make the payment for that trip."
          />
          <Step
            src="/prepare-trip.svg"
            alt=""
            title="Prepare for your trip🥳"
            description="That’s it. We’ll give you trip details on your email and phone so that you can plan accordingly."
          />

      <button
        class="inline-block w-auto select-none  bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white border-2 border-red-500 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 hover:bg-transparent hover:text-red-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Book Your Next Trip
      </button>

        </div>
      </div>
      <div className="w-full mx-auto max-md:w-4/5 max-sm:w-4/5 max-md:mx-auto max-sm:mx-auto relative flex justify-center">
        <div className="relative border rounded-2xl shadow-2xl shadow-[#59B1E6] p-5">
          <Image
            src="/safari.png"
            width={500}
            height={700}
            alt=''
            className="w-full"
          />
          <h3 className="font-medium mt-5 text-[#080809]">
            Trip to Maasai Mara
          </h3>
          <p className="text-md text-[#84829A] mt-4">14th - 16th July</p>
          <div className="flex items-center gap-x-4 mt-5">
            <Image src="/LEAF.svg" alt="" width={40} height={40} />
            <Image src="/map-icon.svg" alt="" width={40} height={40} />
            <Image src="/send.svg" alt="" width={40} height={40} />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-x-6">
              <BsBuildings className="text-[#84829A] text-xl" />
              <p className="text-xl text-[#84829A]">24 people going</p>
            </div>
            <p className="cursor-pointer">
              <IoIosHeartEmpty className="text-2xl text-[#4152CA]" />
            </p>
          </div>

          <div className="absolute w-4/5 max-sm:w-[95%] max-md:w-[95%] bottom-12 -right-24 max-sm:-bottom-32 max-sm:right-0 max-md:-bottom-32 max-md:right-0 border-0 shadow-md rounded-xl p-4 bg-white">
            <div className="flex gap-x-4">
              <Image src="/safari-rounded.svg" width={50} height={50} alt="" />
              <div className="flex flex-col">
                <p className="font-medium text-[#84829A]">Upcoming</p>
                <p className="font-medium text-xl text-[#080809] mt-3">
                  Trip to mara
                </p>
                <p className="font-medium text-[#8A79DF] mt-3 text-lg">
                  40% <span className="text-[#080809]">complete</span>
                </p>
                <p className="mt-2">
                  <Progress value={40} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step = ({ src, alt, title, description }) => {
  return (
    <div className="flex items-center gap-x-4 shadow-md py-6 px-5 rounded-lg shadow-red-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Image src={src} width={30} height={30} alt={alt} />
      <div className="flex flex-col  ">
        <h4 className="text-lg font-extrabold text-[#5E6282]">{title}</h4>
        <p className="text-md text-justify font-normal text-[#5E6282]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Book;
