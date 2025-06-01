import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Body/>
  </StrictMode>,
)
