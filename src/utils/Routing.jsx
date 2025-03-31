import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Landingpage from '../components/Landingpage'
function Routing() {
  return (
    <div>
<Routes>
    <Route path='/' element = {<Landingpage/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
</Routes>
    </div>
  )
}

export default Routing