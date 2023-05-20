import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import Gallery from "./Gallery";
import PlayGround from "./PlayGround";
import Reviews from "./Reviews";
import Categories from "./categories/Categories";
import Aos from "aos";
import "aos/dist/aos.css";
import useTitle from "../../customHooks/useTitle";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Slider />
      <div className="px-4 md:px-0">
        <Gallery />
        <Categories />
        <PlayGround />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
