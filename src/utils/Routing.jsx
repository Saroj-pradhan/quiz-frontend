import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Landingpage from '../components/Landingpage'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectAdminroute from '../admin/components/ProtectAdminroute'
import Quiz from '../components/Quiz'
import EditQuiz from '../admin/components/EditQuiz'
//
import Authadmin from '../admin/components/Authadmin'
function Routing() {
  return (
    <div>
<Routes>
    <Route path='/' element = {<Landingpage/>}></Route>
    <Route path='/quiz' element = {
       <ProtectedRoute>
      < Quiz/>
       </ProtectedRoute>
  }></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    {/* admin */}
    <Route path='/admin/login' element={<Authadmin/>}></Route>
   
    <Route path='/admin/quiz' element={ <ProtectAdminroute><EditQuiz/></ProtectAdminroute>}></Route>
    
    <Route path = '*' element={<p style={{backgroundColor:"red", textAlign:'center', fontSize:'4rem' }}> 404 Page not found</p>}></Route>
</Routes>

    </div>
  )
}

export default Routing