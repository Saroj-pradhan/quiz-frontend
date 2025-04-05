import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Routing from './utils/Routing'
import Nav from './components/Nav'
function App() {


  return (
    <>
   <div className=' h-full w-full flex flex-col justify-center items-center'>
    
          <div className='bg-gray-200 w-full md:h-[10%] h-[4rem] p-1.5'>
          <Nav/>
          </div>
        
          <div className='md:w-[100%] '>
             <Routing/>
          </div>
      </div>

    </>
  )
}

export default App
