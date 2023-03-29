import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CarsAvailable from './components/CarsAvailable/CarsAvailable';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Rentcar from './components/Rentcar/Rentcar';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
  <BrowserRouter>
      <Navbar />
      <Home />
      <Rentcar />
      <About />
      <CarsAvailable />
      <Testimonial />
      <FaqSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
