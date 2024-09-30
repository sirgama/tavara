/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import python from "/public/python.png";
import hiraffe from "/public/hiraffe.jpg";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div>
      <section className=" w-full  py-4 md:pb-32  ">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-5 items-start gap-6">
            <div className="lg:col-span-7 mx-auto">
              <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">
                {" "}
                
             
                  <span className="text-pink-700">Our</span>{" "}
              
                Story{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
                cojani Tours and Travels was born out of a passion for
                showcasing the breathtaking beauty and rich cultural tapestry of
                Kenya. Our founders, seasoned travelers themselves, recognized
                the need for a tour company that could provide authentic,
                immersive experiences for both local and international visitors.{" "}
              </p>

              <h4 className="font-semibold lg:leading-normal leading-normal text-xl lg:text-2xl mt-4 mb-5">
                {" "}
              
                  <span className="text-blue-700">Discover Kenya with Confidence</span>{" "}
              
              </h4>

              <p className="text-gray-700 text-lg max-w-xl mb-10">
              When you choose cojani Tours and Travel, you’re not just booking a trip—you’re partnering with a company that values your safety, satisfaction, and the sustainability
of the destinations we explore. We are dedicated to making your journey through Kenya an extraordinary and worry-free experience. Trust us to handle every detail,
so you can focus on enjoying the adventure of a lifetime.
              </p>
              <Link href="/destinations" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 my-10">View Destinations</Link>
            </div>

            <div className="lg:col-span-5">
              <Image
                src={python}
                height={"auto"}
                width={900}
                alt="Skykids Africa Student"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-8 md:mt-32">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-5 items-start gap-6">
            <div className="lg:col-span-5">
              <Image
                src={hiraffe}
                height={"auto"}
                width={900}
                alt="Skykids Africa Student"
                className="rounded-2xl"
              />
            </div>

            <div className="lg:col-span-7 mx-auto">
              <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">
                {" "}
            
                  <span className="text-pink-700">Core</span>{" "}
              {" "}
                Message{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
              At cojani Tours and Travel, we believe that travel is more than just a journey — it's an opportunity to create lasting memories, discover hidden gems, 
and experience the true beauty of Kenya. Our core ethos is rooted in delivering personalized, safe, and unforgettable travel experiences that exceed your expectations. Whether you’re exploring the wild savannas, immersing yourself in local cultures, or unwinding on pristine beaches, we are dedicated to ensuring that your adventure is as seamless and enjoyable as possible.

              </p>

              <h4 className="font-semibold lg:leading-normal leading-normal text-xl lg:text-2xl mt-8 md:mt-20 mb-5">
                {" "}
           
                  <span className="text-purple-700">Our Ethos</span>{" "}
              {" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl mb-10">
              We understand that your travel experience should be as unique as you are. That’s why we take great care in crafting customized journeys that are far from the typical 
tourist routes. We seek out hidden treasures and off-the-beaten-path destinations, ensuring that every trip with cojani Tours and Travel is a one-of-a-kind adventure.

At the heart of our company is a commitment to responsible tourism. We partner with local communities and conservationists who share our vision of sustainable travel,
ensuring that our tours not only delight our clients but also benefit the environment and the people of Kenya.
              </p>
              <Link href="/tours" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 my-10">Explore Tours</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCard;
