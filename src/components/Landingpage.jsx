import React, { useContext, useEffect } from 'react'
import { Datacont } from '../context/Context'
import Quiz from './Quiz';
import Home from './Home'
import ProtectedRoute from './ProtectedRoute';
function Landingpage() {
    const {isloggedin , setlogin} = useContext(Datacont);
 
  
  return (

    <div className='w-full'>
      
         
       {isloggedin?<Quiz/>: <Home/>}
    </div>
  )
}

export default Landingpage