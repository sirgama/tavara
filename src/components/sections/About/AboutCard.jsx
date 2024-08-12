import React from "react";
import Image from "next/image";
import python from "/public/python.png";
import hiraffe from "/public/hiraffe.jpg";
import { RoughNotation } from "react-rough-notation";

const AboutCard = () => {
  return (
    <div>
      <section className=" w-full  py-4 md:pb-32  ">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-5 items-start gap-6">
            <div className="lg:col-span-7 mx-auto">
              <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">
                {" "}
                <RoughNotation
                  type="box"
                  animationDelay={2700}
                  color="blue"
                  animationDuration={2200}
                  show={true}
                >
                  <span className="text-pink-700">Our</span>{" "}
                </RoughNotation>{" "}
                Story{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
                Tavara Tours and Travels was born out of a passion for
                showcasing the breathtaking beauty and rich cultural tapestry of
                Kenya. Our founders, seasoned travelers themselves, recognized
                the need for a tour company that could provide authentic,
                immersive experiences for both local and international visitors.{" "}
              </p>

              <h4 className="font-semibold lg:leading-normal leading-normal text-xl lg:text-2xl mt-4 mb-5">
                {" "}
                <RoughNotation
                  type="circle"
                  animationDelay={2700}
                  color="pink"
                  animationDuration={4200}
                  show={true}
                >
                  <span className="text-blue-700">Our Mission</span>{" "}
                </RoughNotation>{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
                At Tavara Tours and Travels, our mission is to create
                unforgettable journeys that connect travelers with the heart and
                soul of Kenya. We strive to:
                <li>
                  {" "}
                  Showcase Kenya's diverse landscapes, from pristine beaches to
                  majestic savannas
                </li>
                <li> Promote sustainable and responsible tourism practices</li>
                <li>Support local communities and conservation efforts</li>
                <li>
                  Provide personalized, high-quality service to every client
                </li>
              </p>
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
                <RoughNotation
                  type=" "
                  animationDelay={2700}
                  color="blue"
                  animationDuration={2200}
                  show={true}
                >
                  <span className="text-pink-700">What Sets</span>{" "}
                </RoughNotation>{" "}
                Us Apart{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
                <li>
                  {" "}
                  Local Expertise: Our team of experienced guides are all proud
                  Kenyans with in-depth knowledge of the country's history,
                  culture, and hidden gems.
                </li>
                <li>
                  Tailored Experiences: We understand that every traveler is
                  unique. That's why we offer customized itineraries to suit
                  your interests, budget, and time constraints.
                </li>
                <li>
                  {" "}
                  Commitment to Sustainability: We're dedicated to preserving
                  Kenya's natural beauty for future generations. Our tours
                  emphasize eco-friendly practices and support conservation
                  initiatives.
                </li>
                <li>
                  Diverse Offerings: From wildlife safaris in the Masai Mara to
                  cultural experiences in vibrant Nairobi, we offer a wide range
                  of tours to satisfy every type of traveler.
                </li>
                <li>
                  {" "}
                  Customer Satisfaction: Our commitment to excellence is
                  reflected in our high rate of repeat customers and glowing
                  testimonials.
                </li>{" "}
              </p>

              <h4 className="font-semibold lg:leading-normal leading-normal text-xl lg:text-2xl mt-4 mb-5">
                {" "}
                <RoughNotation
                  type="highlight"
                  animationDelay={7700}
                  color="yellow"
                  animationDuration={4200}
                  show={true}
                >
                  <span className="text-purple-700">Join Us on a Journey</span>{" "}
                </RoughNotation>{" "}
              </h4>

              <p className="text-gray-700 text-lg max-w-xl">
                Whether you're a first-time visitor to Kenya or a local looking
                to explore more of your beautiful country, Tavara Tours and
                Travels is here to make your dreams a reality. Let us show you
                the magic of Kenya through our eyes. Contact us today to start
                planning your next adventure!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCard;
