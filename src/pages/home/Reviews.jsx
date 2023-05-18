import React from "react";
import { FaStar } from "react-icons/fa";
import testi1 from "../../assets/testimonial/testi1.jpg";
import testi2 from "../../assets/testimonial/testi2.jpg";
import testi3 from "../../assets/testimonial/testi3.jpg";

const Reviews = () => {
  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-950">
          Real Reviews From Real Customers
        </h2>
        <p>
          Today, we'll be reviewing an amazing toy. It's a versatile and
          interactive playset that offers endless hours of fun and learning.
          With its innovative design and engaging features, this toy is a
          must-have for kids of all ages.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center border rounded-lg py-6 px-3">
          <div className="flex justify-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="space-y-4 mt-3">
            <p>
              Today, we are excited to present a review of the latest and
              greatest toys that have captivated kids and adults alike. These
              toys are not only entertaining but also promote creativity and
              learning. Let's dive in!
            </p>
            <img
              className="h-20 w-20 rounded-full mx-auto border-2"
              src={testi1}
              alt=""
            />
            <h4 className="text-xl font-semibold">Lana Rouses</h4>
          </div>
        </div>
        <div className="text-center border rounded-lg py-6 px-3">
          <div className="flex justify-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="space-y-4 mt-3">
            <p>
              Today, we are excited to present a review of the latest and
              greatest toys that have captivated kids and adults alike. These
              toys are not only entertaining but also promote creativity and
              learning. Let's dive in!
            </p>
            <img
              className="h-20 w-20 rounded-full mx-auto border-2"
              src={testi2}
              alt=""
            />
            <h4 className="text-xl font-semibold">Tom Haris</h4>
          </div>
        </div>
        <div className="text-center border rounded-lg py-6 px-3">
          <div className="flex justify-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="space-y-4 mt-3">
            <p>
              Today, we are excited to present a review of the latest and
              greatest toys that have captivated kids and adults alike. These
              toys are not only entertaining but also promote creativity and
              learning. Let's dive in!
            </p>
            <img
              className="h-20 w-20 rounded-full mx-auto border-2"
              src={testi3}
              alt=""
            />
            <h4 className="text-xl font-semibold">Hallen Illus</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
