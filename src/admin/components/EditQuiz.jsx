import React, { useEffect, useState } from 'react'
import Addquiz from './Addquiz';

function EditQuiz() {
  const [editmode,seteditmode] = useState(false);
  function addquiz(){
    seteditmode(true);
  }
 
  return (
  
    <div className=' w-full h-full flex justify-center align-middle flex-col bg-blue-900 '>
        <div className='text-black m-2mt-2'>
         
          <button onClick={addquiz} className='ml-3 px-4 py-2 bg-lime-500'>add quiz</button>
        </div>
        <div className='bg-blue-900'>
          {editmode? <Addquiz/>:<p></p>}
        </div>
    </div>
  )
}

export default EditQuiz