import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="divider pt-0 mt-0">OR</div>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-6">
        <button onClick={handleGoogle} className="btn btn-primary btn-wide">
          <FaGoogle className="text-2xl" />{" "}
          <span className="ml-2">Login With Google</span>
        </button>
        <button onClick={handleGithub} className="btn btn-primary btn-wide">
          <FaGithub className="text-2xl" />{" "}
          <span className="ml-2">Login With Github</span>
        </button>
      </div>
      <p className="text-red-500 text-center">{error}</p>
    </div>
  );
};

export default SocialLogin;
