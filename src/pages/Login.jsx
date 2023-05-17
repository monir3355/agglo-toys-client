import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
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
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="py-20 mx-4">
      <div className="flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-6">Login!</h1>
        </div>
        <div className="border rounded-lg">
          <form onSubmit={handleLogin}>
            <div className="card-body">
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
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="space-y-3 card-body my-0 py-0">
            <p>
              Don't have an account{" "}
              <Link to="/register" className="link link-hover text-blue-500">
                Register
              </Link>
            </p>
            <p className="text-red-500">{error}</p>
            <p className="text-green-700">{success}</p>
          </div>
          <div className="card-body my-0 py-0">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
