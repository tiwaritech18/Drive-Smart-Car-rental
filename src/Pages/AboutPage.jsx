import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import "./Pages.css";
export default function AboutPage(){
  return (
    <div className="container">
      <div className="about-us">
        <div className="img">
          <div className="img-bg"></div>
           <img src="https://www.startingbusiness.com/blog/uploads/article/709/car-dealership.jpg" alt="car-buisness" />
        </div>
       
        <div className="about-us-text">
          <div className="about-us-heading">
            <h2>About Us</h2>
            <h4>Find out briefly informatively about us</h4>
          </div>
          <div className="about-us-desc">
            <p>
            We are a team of dedicated professionals who are committed to making your car rental experience smooth and hassle-free. Our fleet of cars is well-maintained and regularly serviced to ensure that you have a safe and comfortable journey.
            Whether you need a car for business or leisure, we have a wide range of vehicles to choose from. From compact cars to SUVs, we have something for everyone. Our rental rates are competitive, and we offer flexible rental options to meet your needs.
            </p>
          </div>
          <div className="about-us-shortinfo">
            <div className="time-management">
              <AccessTimeIcon />
              <p>
                24/7 Exclusive On the road
              </p>
            </div>
            <div className="luxury-desc">
              <DirectionsCarIcon />
              <p>From buisness to Luxuryclass</p>
            </div>
            <div className="online-book">
              <InstallMobileIcon />
              <p>Convinient Online Book</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}