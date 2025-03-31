import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import Routing from "../utils/Routing";
import {Datacont} from '../context/Context'
function Home() {
  const {user,setuser,isloggedin,setlogin} = useContext(Datacont);
  const [answer, setanswer] = useState("");
  function getoption(ev) {
    console.log(ev);
    console.log(ev.target);
    console.log(ev.target.value);
  setanswer(ev.target.value);
  console.log(answer);
  

  }

  
 
 useEffect(()=>{
  console.log(user);
  
 },[user])
   return (
    
     
    <div className="flex flex-col justify-center items-center">
      { user?(user.map((e)=>{
 return  <div className="">
 <div className=" text-white h-[3rem]  ml-2.5 mr-2.5 text-2xl flex items-center justify-between p-1 ">
   <p>12</p>
   <p>correct-</p>
 </div>
 <div className=" h-fit w-full text-center bg-amber-300 ">
   <p className="text-2xl p-4 font-serif">
    {e.question}
   </p>
   <div className="flex flex-col items-center justify-around pb-5 ">
     {(e.option).map((op)=>(
   <button
   onClick={getoption}
   key={344}
   value={op}
   className={`${op ==e.answer && op == answer ?"bg-emerald-500":"bg-white"} border-1 border-b-blue-700 m-2 h-fit p-1 w-[80vw] shadow-2xl hover:bg-blue-700 hover:text-white md:m-4 text-lg sm:w-[60vw]`}
 >
   {op}
 </button>
     ))
    }
     <p>{e.answer}</p>
   </div>
 </div>
 <div className="flex justify-around items-center">
   <button className="ml-3 mb-5  rounded py-2 px-7 border-black text-white bg-red-600 border-2  hover:bg-blue-700">
     Previous
   </button>
   <button className="mr-3 mb-5  rounded py-2 px-7 border-black text-white bg-blue-600 border-2  hover:bg-blue-700">
     Next
   </button>
 </div>
</div>

 }) ):(
  <p>axio failed</p>)
}
    </div>
  );
}

export default Home;
