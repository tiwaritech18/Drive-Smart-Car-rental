


export default function CarModalTable({selectedCar,handleReserveButton}){
  
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
                <span>{selectedCar && selectedCar.modal}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Mark: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{selectedCar && selectedCar.mark}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Year: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{selectedCar && selectedCar.year}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Transmission: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{selectedCar && selectedCar.transmission}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>AC: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{selectedCar && selectedCar.AC}</span>
              </td>
            </tr>
            <tr className="car-modal-table-row">
              <td className="car-modal-table-col">
                <span>Fuel: </span>
              </td>
              <td className="car-modal-table-col">
                <span>{selectedCar && selectedCar.fuel}</span>
              </td>
            </tr>
        </tbody>
        </table>


      </div>
      <button  className="reserve-button" onClick={handleReserveButton}>Reserve Now</button>
    </>
  )
}
