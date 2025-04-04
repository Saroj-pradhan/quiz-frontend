import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Routing from './utils/Routing'
import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className=' h-screen w-screen justify-between'>
          <div className='bg-amber-300 w-full h-[4rem] p-1.5'>
          <Nav/>
          </div>
        
          <div>
             <Routing/>
          </div>
      </div>

    </>
  )
}

export default App
