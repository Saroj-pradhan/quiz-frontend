import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Routing from "../utils/Routing";
import {Datacont} from '../context/Context'

function Home() {
    const [currentquestion,setcurrentquestion] = useState(0);
    const [optionclk, setoptionclk] = useState(false);
    const [answer, setanswer] = useState("");
  const {user,setuser,isloggedin,setlogin} = useContext(Datacont);
const [score,setscore] = useState(0);
  function getoption(ev) {
    if(user[currentquestion].answer == ev.target.value){
        setscore(score+1)
    }
   setanswer(user[currentquestion].answer);
setoptionclk(ev.target.value);
  }

  function nextquestion(){
    console.log(user.length);
    
    if(currentquestion<user.length-1){
setcurrentquestion(currentquestion+1);
    }
  }
  function prevquestion(){
    console.log(user.length);
    
    if(currentquestion>0){
setcurrentquestion(currentquestion-1);
    }
  }
 
//  useEffect(()=>{


//  },[])
   return (
    
    <div className="flex flex-col justify-center items-center">
      { user?( <div className="">
 <div className=" text-black h-[3rem]  m-5 text-xl flex items-center justify-between p-1 ">
   <p>{currentquestion+1 } of {user.length}</p>
   <p className="border-2 p-1">score-{score}</p>
 </div>
 <div className=" h-fit w-ful l text-center  ">
   <p className="text-2xl p-4 font-serif">
    {user[currentquestion].question}
   </p>
   <div className="flex flex-col items-center justify-around pb-5 ">
     {(user[currentquestion].option).map((op)=>(
   <button
   onClick={getoption}
   key={344}
   value={op}
  className={` 
  ${optionclk?op==answer?"bg-green-500 scale-105":optionclk == op?"bg-red-600":"bg-white":"bg-white"}  
  border-1 border-b-blue-700 m-2 h-fit p-1 w-[80vw] shadow-2xl 
  hover:bg-blue-700 hover:text-white md:m-4 text-lg sm:w-[60vw] transform transition duration-300`
}
 >
   {op}
 </button>
     ))
    }
     <p>{user[currentquestion].answer}</p>
   </div>
 </div>
 
 <div className="flex justify-around items-center">
   <button onClick={ prevquestion} className="ml-3 mb-5  rounded py-2 px-7 border-black text-white bg-red-600 border-2  hover:bg-blue-700">
     Previous
   </button>
   <button onClick={nextquestion} className="mr-3 mb-5  rounded py-2 px-7 border-black text-white bg-blue-600 border-2  hover:bg-blue-700">
     Next
   </button>
 </div>
</div>

 ):(
      <p>axio failed</p>)
}
    </div>
  );
}

export default Home;