import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy, count, handleDeleteToy }) => {
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
    <>
      <tr>
        <th>
          <label>
            <h5 className="font-semibold">{count + 1}</h5>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-28 h-28">
                <img className="rounded-lg" src={toy_pic_url} alt="Toy" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy_name}</div>
              <div className="text-sm opacity-75">
                <p>Seller Name: {seller_name}</p>
                <p>Quantity: {quantity} p</p>
              </div>
            </div>
          </div>
        </td>
        <td>{sub_category}</td>
        <td>
          <p>Price : ${price}</p>
        </td>
        <th>
          <button
            onClick={() => handleDeleteToy(_id)}
            className="btn btn-primary btn-sm mr-3"
          >
            Delete
          </button>
          <Link className="mr-3" to={`/updateToy/${_id}`}>
            <button className="btn btn-primary btn-sm">Update</button>
          </Link>
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-primary btn-sm">details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default MyToysRow;
