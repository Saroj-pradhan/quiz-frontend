
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <Context>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Context>
)
