export default function CarModalTable(props){
  function handleReserve(){
    
  }
  return (
    <>
      <div>
              <table className="car-modal-table">
          <tbody>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Model: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.modal}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Mark: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.mark}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Year: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.year}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Transmission: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.transmission}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>AC: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.AC}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Fuel: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{props.selectedCar && props.selectedCar.fuel}</span>
              </td>
            </tr>
        </tbody>
        </table>


      </div>
      <button className="reserve-button" onClick={handleReserve}>Reserve Now</button>
    </>
  )
}
