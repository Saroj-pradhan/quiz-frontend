import React, { useRef ,useState } from 'react'
import axios from '../../utils/Axios';
import { toast,ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader' 
function Addquiz() {
  const [loading,setloading] = useState(false);
    const Aquestion =  useRef(null);
    const Aoption1 =  useRef(null);
    const Aoption2 =  useRef(null);
    const Aoption3 =  useRef(null);
    const Aoption4 =  useRef(null);
    const Aanswer =  useRef(null);
    
    const sentquiz =(e)=>{
      e.preventDefault();
      setloading(true);
      console.log(e);
      console.log(Aoption1.current.value);
      const checkoptions= [`${Aoption1.current.value.trim()}`,`${Aoption2.current.value.trim()}`,`${Aoption3.current.value.trim()}`,`${Aoption4.current.value.trim()}`]
     console.log(checkoptions);
     const checkanswer = `${Aanswer.current.value.trim()}`;
     const validate = checkoptions.includes(checkanswer);
     console.log(validate);
     if(!validate){
     return alert("answer doesn't match with any options");
     }
     
  const admintoken = sessionStorage.getItem('admintoken');
  console.log(admintoken);
  axios.post('/admin/insert',
      {
        question:`${Aquestion.current.value}`,
        option:[`${Aoption1.current.value}`,`${Aoption2.current.value}`,`${Aoption3.current.value}`,`${Aoption4.current.value}`],
        answer:`${Aanswer.current.value}`
      },
      {
        headers: {  token: `Bearer ${admintoken}` }
            
      }
    
  ).then((res)=>{ console.log(res.data);
  toast.success("quiz sucessufully added")
  Aquestion.current.value = "";
    Aoption1.current.value = "";
    Aoption2.current.value = "";
    Aoption3.current.value = "";
    Aoption4.current.value = "";
    Aanswer.current.value = "";
 
    setloading(false);
  }).catch((error)=>{console.log(error);
     setloading(false);
  })
  if(loading){return <Loader/>}
    }
  return (
    <div className='flex justify-center'>
        <div className='border-2 border-b-black p-7 w-[82vw] sm:w-[49vw]  m-8 bg-white'>
            <form className='flex flex-col text-2xl' onSubmit={sentquiz} action="">
              <ToastContainer />
                <label>Enter Question</label>
                {/* <input className='bg-amber-50' type="text" /> */}
              <textarea required ref={Aquestion} placeholder='Question ....' name="" id=""></textarea>
              <label >Enter Option1</label>
              <input required ref={Aoption1} className='bg-blue-50' type="text" />
              <label>Enter option 2</label>
              <input required ref={Aoption2} className='bg-blue-50' type="text" />
              <label>Enter option 3</label>
              <input required ref={Aoption3} className='bg-blue-50' type="text" />
              <label>Enter option 4</label>
              <input required ref={Aoption4} className='bg-blue-50' type="text" />
              <label>Enter Answer</label>
              <input required ref={Aanswer} className='bg-blue-50' type="text" />
             <button type='submit' className='px-4 py-2 bg-blue-600 mt-2'>Add Qustion</button>
            </form>
        </div>
    </div>
  )
}

export default Addquiz