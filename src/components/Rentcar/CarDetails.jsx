import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import Register from './Register';

export default function CarDetails({carType,startDate,endDate,onClose,carimg}){
  
  

  return(
    <div className="car-details-container">
      <div className="car-details-heading">
        <h1>COMPLETE RESERVATION <span><CloseIcon onClick={onClose}/> </span></h1>
        <div className="heading-section">
          <h3> <span><InfoIcon /></span> Upon completing this reservation enquiry, you will receive: </h3>
          <p>Your rental voucher to produce on arrival at the rental desk and a <br /> toll-free customer support number.</p>
        </div>
      </div>
      <div className="rent-info">
        <div className="pickup-section">
          <h2 className='heading'>Date</h2>
          <div className="pickup-date">
            <h4 id="date-h"> <DateRangeIcon />
              Pick-Up Date:  </h4>
              <p id="date-p">{startDate}</p>
          </div>
          <div className="dropoff-date">
            <h4 id="date-h"><DateRangeIcon />
              Drop-Off Date </h4>
              <p id='date-p'> {endDate}</p>
          </div>
        </div>
        <div className="selected-car-section">
          <h2 >Car - <span className='heading'>{carType}</span></h2>
        <img  id="car-img" src={carimg} alt="carimg"/>
        </div>
        
      </div>
      <hr />
      <div className="user-info">
        <Register />
      </div>
    </div>
  )
}