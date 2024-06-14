import Link from "next/link";
import React from "react";

const Choose = () => {
  return (
    <div className="relative w-full bg-choose bg-no-repeat bg-center bg-cover flex items-center  max-md:mt-40 max-sm:mt-48 h-[60vh] max-md:h-[55vh] max-sm:h-[80vh] bg-[url('https://videos.pexels.com/video-files/17842222/17842222-hd_1280_720_25fps.mp4')]">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between h-full w-4/5 mx-auto max-md:w-[95%] max-sm:w-[95%]">
          <div className="flex flex-col justify-center md:w-1/2 p-8">
            <div className="mb-6">
              <h3 className="text-white uppercase max-md:text-center max-sm:text-center">
                choosing us
              </h3>
              <h2 className="text-[#E8EEFF] font-black text-3xl md:text-5xl mt-2 max-md:text-center max-sm:text-center">
                What Makes Us Different
              </h2>
            </div>
            <Link
              href="/packages"
              className="bg-yellow-500 py-2 px-3 w-fit rounded-md max-md:mt-4 max-md:mx-auto max-sm:mx-auto"
            >
              <p className="text-white text-sm">Book now</p>
            </Link>
          </div>

          <div className="flex justify-center md:w-1/2">
            <p className="text-white md:text-lg max-md:text-base max-md:text-center max-sm:text-center">
              As one of the leading safari companies in Africa, we have a
              reputation for excellence and innovation. We offer a wide range of
              safari options, from classic game drives, to walking safaris, to
              fly-in safaris, to bespoke safaris. We work with the best lodges,
              camps, and conservancies in Africa, and we support local
              communities and conservation efforts. We are committed to giving
              you the best safari experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
