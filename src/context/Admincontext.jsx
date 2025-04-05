import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const  Admincont = createContext();
const Admincontext =({children})=>{
    const [isadlogin,setadlogin] = useState(false);
    useEffect(()=>{
           const admintoken=  sessionStorage.getItem("admintoken");
   admintoken?setadlogin(true):setadlogin(false);
    },[])
return(
    <div>
        <Admincont.Provider value={{isadlogin,setadlogin}}>

            {children}
        </Admincont.Provider>
    </div>
)
}
export default Admincontext;