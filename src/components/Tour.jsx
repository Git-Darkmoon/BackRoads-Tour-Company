import testImage from "../assets/tour-1.jpeg"

function Tour() {
  return (
    <div className="tour-card">
      <div className="tour-imgContainer">
        <img src={testImage} alt="" />
        <h4 className="tour-date">August 26th, 2020</h4>
      </div>
      <div className="tour-info__container">
        <h3 className="tour-title">Tibet Adventure</h3>
        <h5 className="tour-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem omnis
          fugit voluptates nostrum ducimus earum, voluptatum minima amet
          doloribus nobis. <button className="readMore">Read More</button>
        </h5>
        <article className="tour-infoBelow">
          <h5 className="country">
            <i class="fa-sharp fa-solid fa-location-dot"></i>Indonesia
          </h5>
          <h5 className="duration">
            <i class="fa-regular fa-clock"></i>11 days
          </h5>
          <h5 className="price">From $1400</h5>
        </article>
      </div>
    </div>
  )
}

export default Tour
