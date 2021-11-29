import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-4xl font-semibold ">
          Not sure where to go? Perfect.
        </p>

        <button className="bg-white px-10 py-4 shadow-md  rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-800 to-pink-600  ">
            {" "}
            I'm flexible
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
