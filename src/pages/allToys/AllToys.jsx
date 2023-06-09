import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import Banner from "../../components/Banner";
import useTitle from "../../customHooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [seeMore, setSeeMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);
  const [toys, setToys] = useState([]);
  const loaderToys = useLoaderData();
  const navigate = useNavigation();
  // console.log(navigate.state);
  if (navigate.state === "loading") {
    return (
      <div className="text-center mt-8">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  useEffect(() => {
    setToys(loaderToys);
  }, [loaderToys]);
  const handleSearch = () => {
    fetch(`https://agglo-toys-server.vercel.app/searchToys/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div>
      <Banner>All Toys</Banner>
      <h2 className="text-4xl text-blue-900 text-center py-8 font-semibold">
        Total toys: {toys.length}
      </h2>
      <div className="mb-8 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full pr-16"
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary absolute top-0 right-0 rounded-l-none"
        >
          Search
        </button>
      </div>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys?.slice(0, seeMore ? toys.length : 20).map((toy, count) => (
              <AllToysRow key={toy._id} toy={toy} count={count}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
      {!seeMore && (
        <div className="my-12 text-center">
          {toys?.length >= 20 ? (
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="btn btn-primary mx-auto"
            >
              See More
            </button>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default AllToys;
