import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, UpdateUser, setPUpdate } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("At least one uppercase");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("At least one special key");
      return;
    } else if (password.length < 8) {
      setError("Please input 8 or more letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("Successfully registration!");
        form.reset();
        UpdateUser(name, photo)
          .then(() => {
            console.log("Profile Updated");
            setPUpdate(new Date().getTime());
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="py-20 mx-4">
      <div className="flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-6">Please Register!</h1>
        </div>
        <form onSubmit={handleRegister} className="border rounded-lg">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="space-y-3">
              <p>
                Already have an account{" "}
                <Link to="/login" className="link link-hover text-blue-500">
                  Login
                </Link>
              </p>
              <p className="text-red-500">{error}</p>
              <p className="text-green-700">{success}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
