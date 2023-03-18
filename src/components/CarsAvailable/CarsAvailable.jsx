import "./CarsAvailable.css";
import Cars from "./Cars.js";
import CarsImage from "./CarsImage";
import { useState } from "react";



export default function CarsAvailable(){
const [selectedCar,setSelectedCar] =useState("https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg");
const [selectedCarPrice,setSelectedCarPrice] = useState("");

  function handleClick(carname){
    const selectedCarObject=Cars.find((car) => {
      return car.name==carname;
    })
    
    setSelectedCar(selectedCarObject.imgSrc)
    console.log(selectedCarObject)
    setSelectedCarPrice(selectedCarObject.price)
  }
  return (
    <div className="container">
      <div className="content">
        <div className="description">
          <h3>Vehicle Models</h3>
          <h1>Our rental fleet</h1>
          <p>Choose from a variety of our amazing vehicles to rent dor your next adventure or buisness trip</p>
        </div>
        {Cars.map((car) => (<div className="cars" key={car.name}>
            <div className="cars-name">
              <button id="cars-button" value={car.name} onClick={() => handleClick(car.name)}>{car.name}</button>
            </div>
            
        </div>))}
        <div className="img-price">
          <div className="car-image">
            <CarsImage imageURL={selectedCar}/>
          </div>
          <div className="modal-data">
            <p>{selectedCarPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}