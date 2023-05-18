import React from "react";

const AllToysRow = ({ toy, count }) => {
  const {
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
          <button className="btn btn-primary btn-sm">details</button>
        </th>
      </tr>
    </>
  );
};

export default AllToysRow;
