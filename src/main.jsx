import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import BookingForm from './Components/BookingForm/BookingForm'
import ImageHolder from './Components/ImageHolder/ImageHolder'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Body/>
    <BookingForm/>
    <ImageHolder/>
  </StrictMode>,
)
