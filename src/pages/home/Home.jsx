import React from "react";
import Slider from "../../components/Slider";
import Gallery from "./Gallery";
import PlayGround from "./PlayGround";
import Reviews from "./Reviews";
import Categories from "./categories/Categories";

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
