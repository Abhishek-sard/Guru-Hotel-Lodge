import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Home/Navbar/Navbar';
import Body from './Components/Home/Body/body';
import BookingForm from './Components/Home/BookingForm/BookingForm';
import ImageHolder from './Components/Home/ImageHolder/ImageHolder';
import Footer from './Components/Home/Footer/Footer';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

// Create a Layout component that includes the Navbar and Footer
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </>
);

// Page components
const Home = () => (
  <>
    <Body />
    <BookingForm />
    <ImageHolder />
  </>
);

const AboutPage = () => <About />;

const ServicesPage = () => <Services />;

const ContactPage = () => <Contact/>;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/Contact" element={<Layout><ContactPage/></Layout>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);