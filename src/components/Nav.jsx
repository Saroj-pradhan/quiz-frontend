import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Datacont } from "../context/Context";

function Nav() {
  const navigate = useNavigate();
  const { isloggedin, setlogin } = useContext(Datacont);
  console.log(isloggedin);

  function loggedout() {
    setlogin(false);

    sessionStorage.removeItem("usertoken");
    navigate("/login");
  }
  return (
    <nav className="flex pl-4 pr-4  items-center justify-between  ">
      <div>
        <p className="text-3xl font-extrabold font-sans">Mca</p>
      </div>
      <div className="flex">
        <Link
          className="rounded py-2 px-4 border-black text-white bg-blue-600 border-2  hover:bg-blue-700 hidden mr-2 sm:block"
          to="/"
        >
          Home
        </Link>
        {isloggedin ? (
          <button
            className="rounded py-2 px-4 border-black text-white bg-red-600 border-2  hover:bg-red-700"
            onClick={loggedout}
          >
            logout
          </button>
        ) : (
          <Link
            className="rounded py-2 px-4 border-black text-white bg-blue-600 border-2  hover:bg-blue-700"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
