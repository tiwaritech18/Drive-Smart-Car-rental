import "./About.css";
import AboutCard from "./AboutCard";
import Capture from "./assets/Capture.PNG";
import Capture1 from "./assets/Capture1.PNG";
import Capture3 from "./assets/Capture3.PNG";


export default function About(){
  return (
    <div className="container">
      <div className="about-cards">
        <h1>Why Chose Drive Smart</h1>
        <div className="about">
          <AboutCard image={Capture} desc="Book your car offline. Follow the easy process to book your car online. Or just call us any time from anywhere" title="Fst & Easy Booking"/>
          <AboutCard image={Capture1} desc="We have an extensive number of cars that will be available to pick you up from any location throughout the country" title="many pickup location"/>
          <AboutCard image={Capture3} desc="We have 70,000+ happy customers and its increasing. View our review section to get their feedback about our service." title="Satisfied Customers"/>
        </div>
      </div>
    </div>
  )
}
