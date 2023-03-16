import "./About.css";

export default function AboutCard(props){
  return (
    <div className="container">
          <div className="about-card-desc">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.desc}
            </p>
        </div>
    </div>
  )
}