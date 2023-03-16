import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar(){
  return (
    <div className="content">
      <div className="navbar">
        <h1><span className="heading">Drive</span> Smart</h1>
        <div className="navbar-ul">
          <ul className="navbar-li">
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./">Catalog</Link>
            </li>
            <li>
              <Link to="./">Contact</Link>
            </li>
            <li>
              <Link to="./">Terms and conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}