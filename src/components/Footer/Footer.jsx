import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";

export default function Footer(){
  const navigate=useNavigate();
  function handleTop(){
    navigate('./')
    window.scrollTo({top:0,behavior:'smooth',duration:3000})
  }
 return (
    <footer>
      <div className="container footer">
        <div className="contact">
        <h3><span className="heading">Drive</span> Smart</h3>
        <p style={{color:"rgb(222, 182, 182)"}}>A business that rents vehicles to customers  <br />for temporary use, usually for travel purposes, on <br /> a short-term basis.</p>
          <div className="contact-no">
            <h4 id="h4">Phone number:</h4>
            <p>+467 123 8413</p>
          </div>
          <div className="contact-address">
            <h4 id="h4">Addresses</h4>
            <ul>
              <li>
                205 Cypress Ave, Queens, NY 11385
              </li>
              <li>
                205 Cypress Ave, Queens, NY 11385
              </li>
              <li>
                205 Cypress Ave, Queens, NY 11385
              </li>
            </ul>
          </div>
          <div className="contact-links">
            <ul>
              <li> <FacebookIcon /> </li>
              <li> <InstagramIcon /> </li>
              <li> <TwitterIcon /> </li>
            </ul>
          </div>
        </div>
        <div className="subscribe-section">
          <h2>SUBCRIPTION</h2>
          <p>Subscripe to get the latest news 
            <br /> and update from us.</p>
          <div className="contact-email">
            <input type="email" placeholder="Enter Email Address"/>
            <button className="sub-button">Submit</button>
          </div>
        </div>
      </div>
      <button id="upto-top" onClick={handleTop}><KeyboardArrowUpIcon /> </button>
    </footer>
  )
}