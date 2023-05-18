import React from "react";
import Slider from "../../components/Slider";
import Gallery from "./Gallery";
import Categories from "./Categories";
import PlayGround from "./PlayGround";

const Home = () => {
  return (
    <div>
      <Slider />
      <Gallery />
      <Categories />
      <PlayGround />
    </div>
  );
};

export default Home;
