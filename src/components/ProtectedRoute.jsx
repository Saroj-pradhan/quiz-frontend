import React, { useContext } from 'react'
import { Datacont } from '../context/Context'
import Login from '../components/Login'

function ProtectedRoute({children}) {
   const {isloggedin } = useContext(Datacont);
  return (
    <div>
        {isloggedin?children:<Login/>}
    </div>
  )
}

export default ProtectedRoute