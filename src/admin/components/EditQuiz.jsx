import React, { useState } from 'react'
import Addquiz from './Addquiz';

function EditQuiz() {
  const [editmode,seteditmode] = useState(false);
  function addquiz(){
    seteditmode(true);
  }
  return (
  
    <div className=' w-full h-full'>
        <div>
          <h1>you can add quiz </h1>
          <button onClick={addquiz} className='px-4 py-2 bg-blue-600'>add quiz</button>
        </div>
        <div className=''>
          {editmode? <Addquiz/>:<p>here added</p>}
        </div>
    </div>
  )
}

export default EditQuiz