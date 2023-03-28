import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
export default function CarDetails({carType,startDate,endDate,onClose,carImg}){
  return(
    <div className="car-details-container">
      <div className="car-details-heading">
        <h1>COMPLETE RESERVATION <span><CloseIcon onClick={onClose}/> </span></h1>
      </div>
      <div className="rent-info">
        <div className="pickup-section">
          <h3>Date</h3>
          <p> <DateRangeIcon />
            Pick-Up Date: {startDate} </p>
          <p><DateRangeIcon />
            Drop-Off Date {endDate}</p>
        </div>
        <div className="selected-car-section">
          <h3><span>Car - </span>{carType}</h3>
          <img src={carImg} alt="" />
        </div>
      </div>
      <div className="user-info">
      </div>
    </div>
  )
}