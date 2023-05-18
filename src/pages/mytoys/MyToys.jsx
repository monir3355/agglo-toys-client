import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(myToys);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div>
      <h2 className="text-4xl text-blue-900 text-center py-12 font-semibold">
        My toys :{myToys.length}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.slice(0, seeMore ? myToys.length : 20).map((toy, count) => (
              <MyToysRow key={toy._id} toy={toy} count={count}></MyToysRow>
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

export default MyToys;
