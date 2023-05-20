import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../customHooks/useTitle";

const ViewDetails = () => {
  useTitle("View Details");
  const toy = useLoaderData();
  const {
    _id,
    toy_name,
    toy_pic_url,
    seller_name,
    seller_url,
    seller_email,
    sub_category,
    price,
    quantity,
    rating,
    toy_description,
  } = toy;
  return (
    <div>
      <h2 className="container mx-auto text-4xl font-bold py-12">
        Toy details
      </h2>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center bg-base-300 rounded-lg px-6 py-8 mb-12 gap-6">
        <figure className="md:w-1/2">
          <img className="w-full rounded-lg" src={toy_pic_url} alt="Toy" />
        </figure>
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-4">
            <p className="text-2xl">
              <span className="font-semibold">Toy Name: </span> {toy_name}
            </p>
            <p>
              <span className="font-semibold">Toy Description:</span>{" "}
              {toy_description}
            </p>
            <p>
              <span className="font-semibold">Sub Category:</span>{" "}
              {sub_category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${price}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {quantity}p
            </p>
            <p className="flex justify-start items-center gap-4">
              <span className="font-semibold">Rating:</span>{" "}
              <span>
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-yellow-500" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                />
              </span>{" "}
              {rating}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              className="h-20 w-20 border border-black rounded-full"
              src={seller_url}
              alt=""
            />
            <div className="space-y-3">
              <h6 className="text-lg">
                <span className="font-semibold">Seller Name:</span>{" "}
                {seller_name}
              </h6>
              <p>
                <span className="font-semibold">Email:</span> {seller_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
