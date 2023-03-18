
export default function CarsImage(props){
  return (
    <div className="cars-image">
          <img src={props.imageURL} alt="car" />
    </div>
  )
}