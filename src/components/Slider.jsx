import React from "react";
import img1 from "../assets/slider/slider-1.jpeg";
import img2 from "../assets/slider/slider-2.jpeg";
import img3 from "../assets/slider/slider-3.jpeg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center justify-center gap-5 bg-black/60 bottom-0 left-0 right-0 top-0 text-center">
          <div className="text-white space-y-7 w-5/6">
            <h2 className="text-4xl md:text-6xl font-semibold">
              Toys Mini Cars Bathtub Toy, Blue/White, Standard
            </h2>
            <p className="">
              Melissa & Doug K's Kids Pull-Back Vehicle Set - Soft Baby Toy Set
              With 4 Cars and Trucks and Carrying Case - Pull Back Cars, Soft
              Vehicles Toys For Babies And Toddlers
            </p>
            <div>
              <Link to="/allToys">
                <button className="btn btn-primary">All Toys</button>
              </Link>
              <button className="btn btn-primary ml-4">Latest Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center justify-center gap-5 bg-black/60 bottom-0 left-0 right-0 top-0 text-center">
          <div className="text-white space-y-7 w-5/6">
            <h2 className="text-4xl md:text-6xl font-semibold">
              Toys Mini Cars Bathtub Toy, Blue/White, Standard
            </h2>
            <p className="">
              Melissa & Doug K's Kids Pull-Back Vehicle Set - Soft Baby Toy Set
              With 4 Cars and Trucks and Carrying Case - Pull Back Cars, Soft
              Vehicles Toys For Babies And Toddlers
            </p>
            <div>
              <Link to="/allToys">
                <button className="btn btn-primary">All Toys</button>
              </Link>
              <button className="btn btn-primary ml-4">Latest Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center justify-center gap-5 bg-black/60 bottom-0 left-0 right-0 top-0 text-center">
          <div className="text-white space-y-7 w-5/6">
            <h2 className="text-4xl md:text-6xl font-semibold">
              Toys Mini Cars Bathtub Toy, Blue/White, Standard
            </h2>
            <p className="">
              Melissa & Doug K's Kids Pull-Back Vehicle Set - Soft Baby Toy Set
              With 4 Cars and Trucks and Carrying Case - Pull Back Cars, Soft
              Vehicles Toys For Babies And Toddlers
            </p>
            <div>
              <Link to="/allToys">
                <button className="btn btn-primary">All Toys</button>
              </Link>
              <button className="btn btn-primary ml-4">Latest Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
