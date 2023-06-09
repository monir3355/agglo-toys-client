import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer p-10 text-base-content container mx-auto">
        <div>
          <div>
            <Link to="/">
              <img className="h-12" src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            Online shopping from a great <br /> selection at Toys & Games Store.
          </p>
          <div className="space-y-3 mt-4">
            <h6>
              <span className="footer-title">Social Media</span>
            </h6>
            <p className="inline-flex gap-4">
              <Link className="text-xl" to="https://www.facebook.com/">
                <FaFacebook />
              </Link>
              <Link className="text-xl" to="https://twitter.com/">
                <FaTwitter />
              </Link>
              <Link className="text-xl" to="https://www.instagram.com/">
                <FaInstagram />
              </Link>
              <Link
                className="text-xl"
                to="https://www.linkedin.com/in/md-monirul-islam-300871168/"
              >
                <FaLinkedin />
              </Link>
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title">SERVICES</span>
          <ul>
            <li>
              <Link className="link link-hover" to="/allToys">
                All Toys
              </Link>
            </li>
            <li>
              <Link className="link link-hover" to="/myToys">
                My Toys
              </Link>
            </li>
            <li>
              <Link className="link link-hover" to="/addToys">
                Add Toys
              </Link>
            </li>
            <li>
              <Link className="link link-hover" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="link link-hover" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="link link-hover" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@gmail.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6 container mx-auto">
        <p className="md:text-center px-4">
          Copyright © 2023 - All right reserved by Agglo toys Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
