import React, { useEffect } from "react";
import play1 from "../../assets/playgrounds/play1.jpeg";
import play2 from "../../assets/playgrounds/play2.jpeg";
import play3 from "../../assets/playgrounds/play3.jpeg";
import play4 from "../../assets/playgrounds/play4.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const PlayGround = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <div className="my-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
          Agglo Toys Play Grounds
        </h2>
        <p>
          The toy playground is a vibrant and exciting space where kids can
          unleash their energy and imagination. With slides, swings, climbing
          frames, and interactive play areas, it provides endless fun and
          opportunities for social interaction.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div data-aos="zoom-in" className="cursor-pointer shadow-lg rounded-lg">
          <img className="rounded-lg" src={play1} alt="PlayGround" />
          <div className="space-y-3 mt-4 px-2 pb-10">
            <h4 className="text-xl font-semibold">
              Magic Little Driver ride on Toy Cars and Transform car for kids
            </h4>
            <p className="text-red-400">by Melania Fedyna May 04, 2023</p>
          </div>
        </div>
        <div data-aos="zoom-in" className="cursor-pointer shadow-lg rounded-lg">
          <img className="rounded-lg" src={play2} alt="PlayGround" />
          <div className="space-y-3 mt-4 px-2 pb-10">
            <h4 className="text-xl font-semibold">
              Magic Little Driver ride on Toy Cars and Transform car for kids
            </h4>
            <p className="text-red-400">by Melania Fedyna May 04, 2023</p>
          </div>
        </div>
        <div data-aos="zoom-in" className="cursor-pointer shadow-lg rounded-lg">
          <img className="rounded-lg" src={play3} alt="PlayGround" />
          <div className="space-y-3 mt-4 px-2 pb-10">
            <h4 className="text-xl font-semibold">
              Magic Little Driver ride on Toy Cars and Transform car for kids
            </h4>
            <p className="text-red-400">by Melania Fedyna May 04, 2023</p>
          </div>
        </div>
        <div data-aos="zoom-in" className="cursor-pointer shadow-lg rounded-lg">
          <img className="rounded-lg" src={play4} alt="PlayGround" />
          <div className="space-y-3 mt-4 px-2 pb-10">
            <h4 className="text-xl font-semibold">
              Magic Little Driver ride on Toy Cars and Transform car for kids
            </h4>
            <p className="text-red-400">by Melania Fedyna May 04, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
