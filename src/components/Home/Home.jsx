import About from "../About/About";
import CarsAvailable from "../CarsAvailable/CarsAvailable";
import FaqSection from "../FaqSection/FaqSection";
import Footer from "../Footer/Footer";
import Rentcar from "../Rentcar/Rentcar";
import Testimonial from "../Testimonials/Testimonial";
import "./Home.css";
import car1 from "./car1.png"


export default function Home(){
  return (
    <>
    <div className="container">
      <div className="home ">
        <div className="text">
          <h2>Hit the <span className="road">road </span>with confidence </h2>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className="button">
             <button>Book Ride</button>
          </div>
        </div>
        <div className="img">
          <img src={car1} alt="" />       
        </div>    
      </div>
    </div>
    <Rentcar />
    <About />
    <CarsAvailable />
    <Testimonial />
    <FaqSection />

    </>
  )
}