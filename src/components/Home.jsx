import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
function Home(){
  const nevigate = useNavigate();
  function snup(){
    console.log("hiiihihi");
    
    nevigate('/signup');
  }
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
  const loadtime=  setTimeout(()=>{
      setLoading(false);
    },500)
   return ()=> {clearTimeout(loadtime);
  
   }
  },[])
  if(loading){return <Loader/>}
return (
  <div>
<div className=' bg-white   w-full  flex flex-wrap justify-center'>
    <div className='min-w-[48%] p-8 md:mt-11 flex flex-col justify-start'>
           <div className=' mb-2  '>
              <h1  className='text-6xl font-extrabold '>YOUR <span className='text-green-600'>OJEE</span> <br></br><span className='text-green-600'>MCA</span> Prep Partner </h1>
              <p  className='text-2xl font-medium m-2'>Practice, Learn, and Succeed!</p>
           </div>
        <div className='mt-3'>
               <button onClick={snup} className="  rounded py-2 px-7 border-black text-white bg-blue-900 border-2  hover:bg-blue-700">get Started </button>
                {/* <button  className="m-3 rounded py-2 px-7 border-black text-white bg-blue-600 border-2  hover:bg-blue-700">Next</button> */}
        </div>
      </div>
  <div className='  sm:min-w-[44%] p-3'>
    <img className='h-[30rem] w-full' src=".\online-poll-concept-woman-with-questionnaire-internet-young-girl-choose-options-feedback_1002658-2663.jpg" alt="" srcset="" />
  </div>
</div>




  <div className='grid sm:grid-cols-2 mt-6 mb-5'>
  <div className=" h-fit p-5 m-6 text-5xl">
    <div className='bg-black w-9 h-9 rotate-45 text-white mb-1.5'>@</div>
  <p  className=''> Start your journey now,</p>
 <p>level up your</p>
<p>skills.</p>
<p className='text-2xl mt-3'>Sarojpradhan76552gmail.com</p>
</div>
  <div className="font-serif text-gray-400 h-fit p-5 m-6 text-5xl">Talent is cheaper than salt,
what separates a talented
individual from the succesful
one is a lot of hardwork</div>
  </div>
</div>
)
}
export default Home;