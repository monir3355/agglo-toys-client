import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CarCards = ({ children, category }) => {
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
  } = category;
  return (
    <>
      <div className="card glass">
        <div className="h-60">
          <img
            className="w-full h-full rounded-t-lg"
            src={toy_pic_url}
            alt="Toy"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p className="flex justify-start items-center gap-4">
            <span className="font-semibold">Price:</span> ${price}
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
          <hr className="py-1" />
          <div className="card-actions">
            <button className="btn btn-primary ml-auto">
              <Link className="p-4" to={`/toys/${_id}`}>
                View Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCards;
