import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from '../../utils/Axios'
import { Admincont } from '../../context/Admincontext';
import EditQuiz from './EditQuiz';
import { useNavigate } from 'react-router-dom';

function Authadmin() {
    const nevigate = useNavigate();
 const {isadlogin,setadlogin} = useContext(Admincont);
//  console.log(isadlogin);
 
    // const [name , setname] = useState(" ");
    const naam = useRef(null);
    const pass = useRef(null);
function getdata(ev){
ev.preventDefault();
console.log(naam.current.value);
console.log(pass.current.value);
axios.post('/admin/login',{
    "id":naam.current.value,
    "password":pass.current.value

}).then((res)=>{ 
    // sessionStorage.setItem("admintoken",)
    console.log(res);
    console.log(res.data.message);
    const token = res.data.token.split(' ')[1];
    console.log(token);
    sessionStorage.setItem("admintoken",token)
    
  setadlogin(true);
//   nevigate('/admin/quiz');
    console.log(isadlogin);
})
}
useEffect(()=>{
    

   isadlogin?nevigate('/admin/quiz'):nevigate('/admin/login');
},[isadlogin])
  return (
    <div className='w-full flex justify-center ms:m-4 m'>
     <div className='h-fit w-80 bg-white border-2 border-b-blue-800 '>
     <p className="text-3xl m-3 font-bold text-center text-blue-600">Welcome back!</p>
<form action="" onSubmit={getdata} className='flex flex-col m-4  text-start text-2xl mt-6'>
    <label className="mt-1.5"> Userid</label>
    <input ref={naam}  placeholder="Enter your userid" required className="h-9 m-1 p-1.5 border-2"/>
    <label className="mt-1.5"> Password</label>
    <input ref={pass} placeholder="Enter your passwird" required className="h-9 m-1 p-1.5 border-2"/>

    <button className="text-white  mt-5 px-4 py-2 bg-blue-600 rounded p-1 m-3"  type="submit" > sign in</button>
</form>
    </div>
    </div>
  )
}

export default Authadmin