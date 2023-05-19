import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {
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
  console.log(toy);
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const toy_pic_url = form.toy_pic_url.value;
    const seller_name = form.seller_name.value;
    const seller_url = form.seller_url.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const toy_description = form.toy_description.value;
    const UpdateToyInfo = {
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
    };
    // console.log(UpdateToyInfo);
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully Updated Your toy",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-[#F4F3F0] p-12 lg:p-24 container mx-auto rounded-lg my-12">
        <h2 className="text-4xl mb-4">Update Toys</h2>
        <p>
          In a world of vibrant imagination, a colorful array of toys comes to
          life. Teddy bears dance with porcelain dolls, while toy cars zoom
          across the playroom floor. Action figures embark on epic adventures,
          and puzzles challenge young minds. Every toy has a story to tell,
          sparking joy and endless possibilities.
        </p>
        <div>
          <form onSubmit={handleUpdateToy}>
            {/* Row 1 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={toy_name}
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
                    defaultValue={toy_pic_url}
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
                    defaultValue={seller_name}
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
                    defaultValue={seller_url}
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
                    defaultValue={seller_email}
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
                  <input
                    type="text"
                    defaultValue={sub_category}
                    name="sub_category"
                    placeholder="Enter Sub Category"
                    className="input w-full"
                  />
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
                    defaultValue={price}
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
                    defaultValue={quantity}
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
                    defaultValue={rating}
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
                    defaultValue={toy_description}
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
                value="Update Toy"
                className="btn btn-primary w-full mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
