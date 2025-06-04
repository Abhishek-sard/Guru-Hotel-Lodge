import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Home/Navbar/Navbar'
import Body from './Components/Home/Body/body'
import BookingForm from './Components/Home/BookingForm/BookingForm'
import ImageHolder from './Components/Home/ImageHolder/ImageHolder'
import Footer from './Components/Home/Footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Body/>
    <BookingForm/>
    <ImageHolder/>
    <Footer/>
  </StrictMode>,
)
