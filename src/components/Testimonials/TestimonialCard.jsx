
export default function TestimonialCard({review,image,address,name}){
  return (
    <>
    <div className="card-container">
      <p>{review}</p>
      <div className="user-id">
        <img src={image} alt="" />
        <span>
          <h3>{name}</h3>
          <p>{address}</p>
        </span>
      </div>
    </div>
    </>
  )
}