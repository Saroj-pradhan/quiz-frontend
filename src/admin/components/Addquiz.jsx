import React, { useRef } from 'react'
import axios from '../../utils/Axios';
function Addquiz() {
    const Aquestion =  useRef(null);
    const Aoption1 =  useRef(null);
    const Aoption2 =  useRef(null);
    const Aoption3 =  useRef(null);
    const Aoption4 =  useRef(null);
    const Aanswer =  useRef(null);
    
    const sentquiz =(e)=>{
      e.preventDefault();
      console.log(e);
  // console.log(question.current.value);
  const admintoken = sessionStorage.getItem('admintoken');
  console.log(admintoken);
  
//   axios.post('/admin/insert', {
//      headers: {
//         token: `Bearer ${admintoken}`, // Send token in headers
//          }
//      },
//      {
//     question:"who are you",
//     option:["fg","fq","dfg","jjj"],
//     answer:"fq"
//   })
  axios.post('/admin/insert',
   

  {
        question:"who are you",
        option:["ffgg","fq","dfgg","jrgjj"],
        answer:"fq"
      },
      {
        headers: {  token: `Bearer ${admintoken}` }
            
      }
    
).then((res)=>{ console.log(res.data);
    console.log("all ok");
    
  }).catch((error)=>{console.log(error);
  })
      
    }
  return (
    <div className='flex justify-center'>
        <div className='border-2 border-b-black p-7 w-[82vw] sm:w-[49vw]  m-8 '>
            <form className='flex flex-col text-2xl' onSubmit={sentquiz} action="">
                <label>Enter Question</label>
                {/* <input className='bg-amber-50' type="text" /> */}
              <textarea required ref={Aquestion} placeholder='Question ....' name="" id=""></textarea>
              <label >Enter Option1</label>
              <input required ref={Aoption1} className='bg-amber-50' type="text" />
              <label>Enter option 2</label>
              <input required ref={Aoption2} className='bg-amber-50' type="text" />
              <label>Enter option 3</label>
              <input required ref={Aoption3} className='bg-amber-50' type="text" />
              <label>Enter option 4</label>
              <input required ref={Aoption4} className='bg-amber-50' type="text" />
              <label>Enter Answer</label>
              <input required ref={Aanswer} className='bg-amber-50' type="text" />
             <button type='submit' className='px-4 py-2 bg-blue-600 mt-2'>Add Qustion</button>
            </form>
        </div>
    </div>
  )
}

export default Addquiz