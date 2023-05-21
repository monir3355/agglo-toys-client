import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Banner from "../components/Banner";
import useTitle from "../customHooks/useTitle";

const AddToy = () => {
  useTitle("Add Toy");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  // console.log(selectedSubcategory);
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const toy_pic_url = form.toy_pic_url.value;
    const seller_name = form.seller_name.value;
    const seller_url = form.seller_url.value;
    const seller_email = form.seller_email.value;
    // const sub_category = form.sub_category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const toy_description = form.toy_description.value;
    const addToyInfo = {
      toy_name,
      toy_pic_url,
      seller_name,
      seller_url,
      seller_email,
      sub_category: selectedSubcategory,
      price,
      quantity,
      rating,
      toy_description,
    };
    // console.log(addToyInfo);
    fetch("https://agglo-toys-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully added toy",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const options = [
    "Sports Car",
    "Trucks",
    "Regular Car",
    "Mini Fire Trucks",
    "Mini Police Car",
  ];
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };
  return (
    <>
      <Banner>Add Your Toys</Banner>
      <div className="bg-[#F4F3F0] p-12 lg:p-24 container mx-auto rounded-lg my-12">
        <h2 className="text-4xl">Add Toys</h2>
        <p>
          In a world of vibrant imagination, a colorful array of toys comes to
          life. Teddy bears dance with porcelain dolls, while toy cars zoom
          across the playroom floor. Action figures embark on epic adventures,
          and puzzles challenge young minds. Every toy has a story to tell,
          sparking joy and endless possibilities.
        </p>
        <div>
          <form onSubmit={handleAddToy}>
            {/* Row 1 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="toy_name"
                    placeholder="Enter Toy name"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Toy URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    name="toy_pic_url"
                    placeholder="Enter Toy URL"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* row 2 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    name="seller_name"
                    placeholder="Enter Seller Name"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Seller URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    defaultValue={user?.photoURL}
                    name="seller_url"
                    placeholder="Enter Seller URL"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 3 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    defaultValue={user?.email}
                    name="seller_email"
                    placeholder="Enter Your Email"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <label className="input-group">
                  <select
                    value={selectedSubcategory}
                    onChange={handleSubcategoryChange}
                    className="input w-full"
                  >
                    <option value="">Select a sub-category</option>
                    {options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            {/* Row 4 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Toy Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Your Toy Price"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Enter Available Quantity"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 5 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="Enter Your Product Rating"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 6 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Toy Description</span>
                </label>
                <label className="input-group">
                  <textarea
                    name="toy_description"
                    placeholder="Enter Toy Description"
                    className="input w-full h-32"
                  ></textarea>
                </label>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <input
                type="submit"
                value="Add Toy"
                className="btn btn-primary w-full mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToy;
