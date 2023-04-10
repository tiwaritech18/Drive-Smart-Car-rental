import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import "./Pages.css";
export default function AboutPage(){
  return (
    <div className="container">
      <div className="about-us-section">
        <div className="img-section">

            <img src="https://hips.hearstapps.com/hmg-prod/images/car-dealer-showing-new-car-to-young-couple-in-royalty-free-image-1591622064.jpg?crop=0.66661xw:1xh;center,top&resize=1200:*" alt="" />
     
          <div className="img-bg">

          </div>
        </div>
        <div className="about-us-text">
          <div className="about-us-intro">
            <h1 className='heading'>About Us</h1>
            <h3>Fine out briefly but informatively about us</h3>
          </div>
          <p>We are a team of dedicated professionals who are committed to making your car rental experience smooth and hassle-free. Our fleet of cars is well-maintained and regularly serviced to ensure that you have a safe and comfortable journey.Whether you need a car for business or leisure, we have a wide range of vehicles to choose from. From compact cars to SUVs, we have something for everyone. Our rental rates are competitive, and we offer flexible rental options to meet your needs.</p>
          
          <div className="about-main-text-icon">
            <div className="main-tools">
              <AccessTimeIcon />
              <p>24/7 Exclusive On the road</p>
            </div>
            <div className="main-tools">
              <DirectionsCarIcon />
              <p>From buisness to luxuryclass</p>
            </div>
            <div className="main-tools">
              <InstallMobileIcon />
              <p>Convenient online book</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}