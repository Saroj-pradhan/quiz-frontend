import React, { useContext, useEffect } from 'react'
import { Datacont } from '../context/Context'
import Home from './Quiz';
function Landingpage() {
    const {isloggedin , setlogin} = useContext(Datacont);
 
  
  return (

    <div className=''>
       
        { isloggedin?< Home/>:  <p>this is before login</p>}
    </div>
  )
}

export default Landingpage