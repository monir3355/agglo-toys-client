import React from "react";
import banner from "../assets/slider/banner.png";

const Banner = ({ children }) => {
  return (
    <div class="relative rounded-lg">
      <div class="absolute inset-0 bg-gradient-to-bl from-transparent to-black rounded-lg"></div>
      <img class="w-full h-60 rounded-lg" src={banner} alt="Background Image" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 class="text-4xl lg:text-6xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default Banner;
