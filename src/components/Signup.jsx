import React, { useRef, useState } from 'react'
import axios from '../utils/Axios'
import {Link} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
function Signup(){
const [naam,setnaam] = useState(" ");
const [uid,setuid] = useState(" ");
const [pass,setpass] = useState(" ");
     const name = useRef(null);
        const id = useRef(null);
        const password = useRef(null);
        function getfdata(e){
            e.preventDefault();
            setnaam(name.current.value);
            setuid(id.current.value);
            setpass(password.current.value);
         axios.post('/user/signup',{ "name":name.current.value,"id":id.current.value,"password":password.current.value})
         .then((res)=>{ 
            toast.success(res.data);
            console.log(res.data);
            
         }).catch((error)=>{
            if (error.response) {
                // Backend responded with an error
                toast.error(error.response.data || "An error occurred!");
              } else {
                // No response received from backend
                toast.error("No response from server. Please try again!");
              } 
         })
        }
        

    return(
        <div className=' flex flex-col justify-center items-center '>
             <ToastContainer />
        <div className='flex flex-wrap shadow-2xl md:h-[25rem] justify-center items-center'>
          <div className='w-80 h-[47vh] md:h-[25rem] text-center p-8 '>
  <p className='text-3xl font-bold'>Welcome back!</p>
  <div>
    <form action="" onSubmit={getfdata} className='flex flex-col text-start text-2xl mt-4'>
    <label htmlFor="">Name</label>
    <input ref={name} required className='h-9  p-1.5' type="text" placeholder='Enter your email' />
        <label htmlFor="">Email</label>
        <input ref={id} required className='h-9  p-1.5' type="email" placeholder='Enter your email' />
        <label htmlFor=""  className='mt-1.5'>Password</label>
        <input ref={password} required className='h-9  p-1.5 border-blue-700 ' type="password" name="" id="" placeholder='Enter your Password'/>
       
        <button className='text-white    mt-5 px-4 py-2 bg-blue-600 rounded p-1 m-3' type="submit"> sign in </button>
            </form>
  </div>
    </div>
         <div className='w-80 h-[45vh] bg-blue-700 p-8 flex flex-col justify-center items-center md:h-[25rem]'>
         <p className='text-xl font-bold text-white'>Already Have an Account ?</p>
         <Link to="/login" className='bg-white border-2 border-b-blue-400 px-11 py-2 text-blue-600  hover:bg-blue-600 hover:text-white' >Login</Link>
    </div>

   
        </div>
        </div>
    )
} 
export default Signup