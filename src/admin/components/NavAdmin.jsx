import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Admincont } from "../../context/Admincontext";

function Nav() {
  const navigate = useNavigate();
  const { isadlogin, setadlogin } = useContext(Admincont);
  

  function loggedout() {
    setadlogin(false);

    sessionStorage.removeItem("usertoken");
    navigate("/admin/login");
  }
  return (
    <nav className="flex pl-4 pr-4 h-[4rem] items-center justify-between  ">
      <div className="sm:ml-4  flex items-center">
       <img className="w-14" src=".\head.png" alt="" srcset="" />
       <p className="text-green-900 font-extrabold text-2xl sm:text-3xl ">MCA-PREP</p>
      </div>
      <div className="flex">
        <Link to="/admin/login  ">Admin login</Link>
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