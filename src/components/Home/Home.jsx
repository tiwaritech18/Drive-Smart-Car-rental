import "./Home.css";


import car1 from "./car1.png"

export default function Home(){
  return (
    <div className="container">
      <div className="home ">
        <div className="text">
          <h2>Hit the road with confidence </h2>
          <p>DriveSmart Car Rental Service offers safe and responsible car rentals, with real-time feedback on your driving performance to help you become a better driver. Enjoy a wide selection of vehicles and customize your rental experience to fit your needs, all while driving with confidence and peace of mind.</p>
          <div className="button">
             <button>Book Ride</button>
          </div>
        </div>
        <div className="img">
          <img src={car1} alt="" />       
        </div>
       
      </div>
    </div>
  )
}