import React from "react";
import Slider from "../../components/Slider";
import Gallery from "./Gallery";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Slider />
      <Gallery />
      <Categories />
    </div>
  );
};

export default Home;
