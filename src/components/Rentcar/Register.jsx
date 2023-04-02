export default function Register(){
  return (
    <div className="container">
      <h1>PERSONAL INFORMATION</h1>
      <form className="form">
        <div className="top-2">
          <span className="first-name">
            <label>First Name <sup>*</sup> </label>
            <input type="text" placeholder="Enter your first name" />
          </span>
          <span className="last-name">
            <label>Last Name <sup>*</sup> </label>
            <input type="text" placeholder="Enter your last name" />
          </span>
        
          <span className="contact-no">
            <label>Phone Number <sup>*</sup> </label>
            <input type="text" placeholder="Enter your Phone Number" />
          </span>
          <span className="age-sec">
            <label>Age <sup>*</sup> </label>
            <input type="text" placeholder="18" />
          </span>
        </div>
        <div>
        <label>Email <sup>*</sup> </label>
          <input type="Email" placeholder="Enter your email address" />
          <label>Address <sup>*</sup> </label>
          <input type="text" placeholder="Enter your street address" />
        </div>
        <div>
        <label>City <sup>*</sup> </label>
          <input type="text" placeholder="Enter your city" />
          <label>Zip code <sup>*</sup> </label>
          <input type="text" placeholder="Enter your zip code" />
        </div>
        <span> <input type="checkbox" name="" id="" /> <p>Please send me latest news and updates</p></span>
      </form>
      <button>Reserve Now</button>
    </div>

  )
}