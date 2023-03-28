import "./CarsAvailable.css";
import Cars from "./Cars.js";
import CarsImage from "./CarsImage";
import { useState } from "react";
import CarModalTable from "./CarModalTable";
import { useNavigate } from "react-router-dom";



export default function CarsAvailable(){
  const navigate=useNavigate();
  function handleReserveButton(){   
    navigate('./rentcar')
    setShowCar(false)
    window.scrollTo({top:0,behavior:'smooth'})
  }
  const [carImage,setCarImage]=useState("")
const [selectedCar,setSelectedCar] =useState({
    id:1,
    name:"Audi A1 S-Line",
    imgSrc:"https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg",
    price:"$45 /rent per day",
    modal:"Audi",
    mark:"A1",
    year:2012,
    Doors:4/5,
    AC:"yes",
    transmission:"Manual",
    fuel:"Gasoline"
});
const [selectedCarPrice,setSelectedCarPrice] = useState("");
const [showCar,setShowCar]=useState(false);


  function handleClick(carname){
    const selectedCarObject=Cars.find((car) => {
      return car.name==carname;
    })
    
    setSelectedCar(selectedCarObject);
    setCarImage(selectedCarObject.imgSrc)
    setSelectedCarPrice(selectedCarObject.price)
    setShowCar(true);
  }
  function handleCloseModal(){
    setShowCar(false);
  }
  return (
    <section className="cars-available-section">
      <div className="container">
        <div className="content">
          <div className="cars-available">
            <div className="description">
              <h3>Vehicle Models</h3>
              <h1>Our rental fleet</h1>
              <p>Choose from a variety of our amazing vehicles to rent for your next adventure or buisness trip</p>
            </div>
            {Cars.map((car) => (
              <div className="cars" key={car.name}>
                <div className="cars-name">
                  <button id="cars-button" value={car.name} onClick={() => handleClick(car.name)}>{car.name}</button>
                </div>
            </div>
            ))}
      
      
                <div className={`modal ${showCar ? "show" : "hide"}`} onClick={handleCloseModal}>
                <div className="modal-data" onClick={(e) => e.stopPropagation()}>
      
      
                  <div className="car-specification">
                    <CarsImage imageURL={carImage}/>
      
                    <div className="car-modal-table">
                      <p>{selectedCarPrice}</p>
                      <CarModalTable 
                      selectedCar={selectedCar}
                      handleReserveButton={handleReserveButton}
                      />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}