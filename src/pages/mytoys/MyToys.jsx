import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  // const [sortOption, setSortOption] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [updateToys, setUpdateToys] = useState(false);
  // console.log(myToys);
  useEffect(() => {
    fetch(`https://agglo-toys-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, updateToys]);

  // useEffect(() => {
  //   fetch(`https://agglo-toys-server.vercel.app/myToys/${user?.email}?sort=${sortOption}`)
  //     .then((res) => res.json())
  //     .then((data) => setMyToys(data));
  // }, [sortOption, user]);

  // const handleSortChange = (e) => {
  //   setSortOption(e.target.value);
  // };

  const handleDeleteToy = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://agglo-toys-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setUpdateToys(!updateToys);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-blue-900 text-center py-12 font-semibold">
        My toys :{myToys.length}
      </h2>
      {/* ascending and descending sort by price */}
      {/* <div>
        <div>
          <label htmlFor="sort">Sort by Price:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div> */}
      <>
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
              {myToys
                .slice(0, seeMore ? myToys.length : 20)
                .map((toy, count) => (
                  <MyToysRow
                    key={toy._id}
                    toy={toy}
                    count={count}
                    handleDeleteToy={handleDeleteToy}
                  ></MyToysRow>
                ))}
            </tbody>
          </table>
        </div>
        {!seeMore && (
          <div className="my-12 text-center">
            {myToys.length >= 20 ? (
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
      </>
    </div>
  );
};

export default MyToys;
