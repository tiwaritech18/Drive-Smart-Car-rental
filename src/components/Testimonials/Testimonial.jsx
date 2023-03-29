import "./Testimonial.css"
import TestimonialCard from "./TestimonialCard"
export default function Testimonial(){
  return (
    <>
    <div className="container">
      <div className="testimonial-section">
        <div className="tes-heading">
          <h3>Reviewed by People</h3>
          <h2>Client's Testimonials</h2>
          <p>Explore the enthusiastic feedback from our satisfied clients and witness the difference our service has made in their lives. Our clients have witnessed firsthand the quality of our results and are eager to share their positive experiences with you.</p>
        </div>
        <div className="testimonial-cards">
          <TestimonialCard
          review={<q>I once rented a car from this website and let me tell you, the experience was nothing short of amazing. The booking process was a breeze and the rental rates were easy on the wallet. Highly recommend this car rental website to anyone in need of a reliable ride.</q>}
          image="https://deadline.com/wp-content/uploads/2023/03/Keanu-Reeves-john-wick-4.jpg"
          address="New York, NY, USA"
          name="wick john"
          />
          <TestimonialCard
          review={<q>Well, I must say, the car we rented from this website was in impeccable condition. It truly made our trip an even more enjoyable experience. I highly recommend this car rental website to anyone looking for a top-notch vehicle rental.</q>}
          image="https://www.pinkvilla.com/imageresize/Tony-Stark-home-Avengers-Endgame.jpg?width=752&t=pvorg"
          address="New York, NY, USA"
          name="pony spark"
          />
        </div>
      </div>
    </div>
    
    </>
  )
}