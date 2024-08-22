import React from 'react'
import DestinationHighlights from './DestinationHighlights'
import SimpleNavigation from './SimpleNavigation';

const DestinationContent = () => {
  return (
    <div className='relative'>
        <SimpleNavigation />
        <DestinationHighlights />
      <div className=" h-full overflow-y-scroll ml-1/3 relative">
        <Section title="Overview">
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
        </Section>
        <Section title="Included">
          <p>Content of Section 2</p>
          <p>More content...</p>
          <p>Even more content...</p>
        </Section>
        <Section title="Excluded">
          <p>Content of Section 3</p>
          <p>More content...</p>
          <p>Even more content...</p>
        </Section>
        <Section title="Iternerary ">
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
        </Section>
      </div>
    
    </div>
  )
}

const Section = ({ title, children }) => {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white z-10">
        <h2 className="text-2xl font-bold p-4 bg-white text-red-700">{title}</h2>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DestinationContent