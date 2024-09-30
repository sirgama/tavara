import { cn } from "@/lib/utils";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair_Display = Playfair_Display({ subsets: ["cyrillic"], weight: ["700"] });

const cardItems = [
  {
    id: 1,
    icon: "/hilton.png",
    alt: "Money Bag",
    title: "Affordable Prices",
    description:
      "The company offers competitive and reasonable prices for its safari packages, without compromising on quality or service",
  },
  {
    id: 2,
    icon: "/kq.png",
    alt: "Itineries",
    title: "Customized itineraries",
    description:
      " A wide range of safari options, from budget to luxury, from short to long, from group to private.",
  },
  {
    id: 3,
    icon: "/radisson.svg",
    alt: "Tour Guide",
    title: "Expert Guides and Drivers",
    description:
      "Experienced and knowledgeable guides and drivers who will take you to the best spots for wildlife viewing, cultural immersion, and scenic beauty. ",
  },
  {
    id: 4,
    icon: "/aalodge.png",
    alt: "Beach Umbrella",
    title: "Amazing destinations",
    description:
      "Get an experience from the best Africa offers. You won’t regret even a single minute.",
  },
  {
    id: 4,
    icon: "/jambojet.png",
    alt: "Beach Umbrella",
    title: "Amazing destinations",
    description:
      "Get an experience from the best Africa offers. You won’t regret even a single minute.",
  },
]

const Partners = () => {
  return (
    <div className="p-6 py-14 h-[50%] w-full relative bg_custom_ bg-[#f2fcfa]">
      <Image
        src="/pluses.svg"
        width={50}
        height={60}
        alt=""
        className="absolute right-4 top-0 z-0"
      />
      <div className="mb-6 max-md:mb-3 max-sm:mb-3">
        {/* <h2 className="font-semibold text-[#5E6282] text-center">
          The Tavara Way
        </h2> */}
        {/* <h1
          className={cn(
            "my-12 font-bold text-[#14183E] text-5xl max-md:text-3xl max-sm:text-2xl text-center",
            playfair_Display.className
          )}
        >
          Our Esteemed Partners
        </h1> */}
      </div>

      <div className="px-1 flex items-center pb-10 justify-around gap-x-2 max-md:flex-wrap max-sm:flex-wrap max-md:gap-y-3 max-sm:gap-y-3">
        {cardItems.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Partners

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-transparent  cursor-pointer  flex flex-col items-center">
      <Image src={icon} alt={title} height={150} width={150} />
   
    </div>
  )
}
