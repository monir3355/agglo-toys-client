import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [seeMore, setSeeMore] = useState(false);
  const toys = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl text-blue-900 text-center py-12 font-semibold">
        All toys: {toys.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <p>SL.</p>
                </label>
              </th>
              <th>Toys Info</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.slice(0, seeMore ? toys.length : 20).map((toy, count) => (
              <AllToysRow key={toy._id} toy={toy} count={count}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
      {!seeMore && (
        <div className="my-12 text-center">
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="btn btn-primary mx-auto"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
