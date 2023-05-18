import React from "react";
import Slider from "../../components/Slider";
import Gallery from "./Gallery";
import Categories from "./Categories";
import PlayGround from "./PlayGround";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Slider />
      <Gallery />
      <Categories />
      <PlayGround />
      <Reviews />
    </div>
  );
};

export default Home;
