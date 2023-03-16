import { useState } from "react";
import "./Rentcar.css";

export default function Rentcar(){
  const [carType,setCarType]=useState('');
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');

  function handleCarType(e){
    setCarType(e.target.value)
  }

  function handleStartDate(e){
    const toDate=e.target.value;
    console.log(toDate)
  }

  function handleEndDate(e){
    setEndDate(e.target.vaue)
    console.log(endDate)
  }
  function handleSearch(e){
    e.preventDefault()
    console.log(carType)
    console.log(startDate)
    console.log(endDate)
  }

  return (
    <div className="container">
      <div className="rentcar">
      <div className="details">
        <h1>Rent a Car</h1>
          <p>Select your car type and dates:</p>
      </div>
        <div className="choose-inputs">
          <label htmlFor="carType">Car Type:</label>
          <select id="carType" onChange={handleCarType}>
            <option value="">- Select Car Type -</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </div>
        <div className="choose-inputs">
          <label htmlFor="startDate">Start Date:</label>
          <input 
              type="date" 
              id="startDate" 
              value={startDate} 
              onChange={handleStartDate}
          />
        </div>
        <div className="choose-inputs">
          <label htmlFor="endDate">End Date:</label>
          <input 
              type="date" 
              id="endDate" 
              onChange={handleEndDate} 
              value={endDate} 
          />
        </div>
        <button id="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}