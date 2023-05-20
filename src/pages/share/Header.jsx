import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you want Logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logout!", "You are logout", "success");
          })
          .then((error) => {
            console.log(error);
          });
      }
    });
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-3 px-4 bg-blue-600 rounded-md text-white"
              : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) =>
            isActive
              ? "py-3 px-4 bg-blue-600 rounded-md text-white"
              : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
          }
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive
                  ? "py-3 px-4 bg-blue-600 rounded-md text-white"
                  : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addToys"
              className={({ isActive }) =>
                isActive
                  ? "py-3 px-4 bg-blue-600 rounded-md text-white"
                  : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
              }
            >
              Add Toys
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "py-3 px-4 bg-blue-600 rounded-md text-white"
              : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "py-3 px-4 bg-blue-600 rounded-md text-white"
              : "py-3 px-4 hover:bg-blue-600 hover:rounded-md hover:text-white"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-4 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="h-12" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <label
              className="btn btn-ghost btn-circle avatar mr-2 tooltip tooltip-bottom tooltip-primary"
              data-tip={user?.displayName}
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
