import React, { useContext } from 'react'
import {Admincont} from '../../context/Admincontext'
import Authadmin from './Authadmin';
function ProtectAdminroute({children}) {
    const {isadlogin,setadlogin} = useContext(Admincont);
    
  return (
    <div>
        {isadlogin?(children):<Authadmin/>}
    </div>
  )
}

export default ProtectAdminroute