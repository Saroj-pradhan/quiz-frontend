import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import { ToastContainer, toast } from "react-toastify";
import { Datacont } from "../context/Context";
import Loader from "./Loader";

function Login() {
const [loading,setloading] = useState(false);
  const nevigate = useNavigate();
  const { isloggedin,utoken, setutoken, setlogin } = useContext(Datacont);
  const [uid, setuid] = useState(" ");
  const [pass, setpass] = useState(" ");
  const id = useRef(null);
  const password = useRef(null);

  function getfdata(e) {
    e.preventDefault();
    setloading(true);
    setuid(id.current.value);
    setpass(password.current.value);

    axios
      .post("/user/login", {
        id: id.current.value,
        password: password.current.value,
      })
      .then((res) => {
        toast.success(res.data.message);
        const token = res.data.token;
        setutoken(token);

        console.log(res.headers);
        setlogin(true);
        sessionStorage.setItem("usertoken", token);
        nevigate("/quiz");
        console.log("Stored Token:", sessionStorage.getItem("usertoken"));
        setloading(false);
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.response.data);
        setloading(false);
      });
  }
 useEffect(()=>{
  if(isloggedin){
    nevigate("/quiz");
  }
  
 })
 if(loading){return <Loader/>}
  return (
    <div className="  flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="bg-white flex flex-wrap shadow-2xl justify-center items-center ">
        <div className="w-80 h-[47vh] bg-blue-700 p-8 flex flex-col justify-center items-center md:h-[25rem]">
          <p className="text-xl font-bold text-white">
            Don't Have an Account ?
          </p>
          <Link
            to="/signup"
            className="bg-white border-2 border-b-blue-400 px-11 py-2 text-blue-600 "
          >
            Signup
          </Link>
        </div>
        <div className="w-80 h-[47vh]  text-center p-8  md:h-[25rem] ">
          <p className="text-3xl font-bold">Welcome back!</p>
          <div>
            <form
              action=""
              onSubmit={getfdata}
              className="flex flex-col text-start text-2xl mt-6"
            >
              <label htmlFor="">Email</label>
              <input
                ref={id}
                required
                className="h-9 m-1 p-1.5"
                type="email"
                placeholder="Enter your email"
              />
              <label htmlFor="" className="mt-1.5">
                Password
              </label>
              <input
                ref={password}
                required
                className="h-9 m-1 p-1.5 border-blue-700 "
                type="password"
                name=""
                id=""
                placeholder="Enter your Password"
              />
              <p className="text-[1rem] mt-1.5">Remember me !</p>
              <button
                className="text-white    mt-5 px-4 py-2 bg-blue-600 rounded p-1 m-3"
                type="submit"
              >
                {" "}
                sign in{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
