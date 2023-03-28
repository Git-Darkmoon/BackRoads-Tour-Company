function Tour({ image, date, title, info, location, duration, cost }) {
  return (
    <div className="tour-card">
      <div className="tour-imgContainer">
        <img src={image} alt="" />
        <h4 className="tour-date">{date}</h4>
      </div>
      <div className="tour-info__container">
        <h3 className="tour-title">{title}</h3>
        <h5 className="tour-info">
          {info}
          <button className="readMore">Read More</button>
        </h5>
        <article className="tour-infoBelow">
          <h5 className="country">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            {location}
          </h5>
          <h5 className="duration">
            <i className="fa-regular fa-clock"></i>
            {`${duration} days`}
          </h5>
          <h5 className="price">{`From $ ${cost}`}</h5>
        </article>
      </div>
    </div>
  )
}

export default Tour
