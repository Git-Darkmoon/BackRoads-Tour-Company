import { Title } from "./Title"
import { servicesData } from "../data"

function Services() {
  return (
    <section className="services-section" id="Services">
      <Title firstWord={"Our"} secondWord={"Services"} />
      <div className="services-cards">
        {servicesData.map((service) => {
          const { id, icon, title, text } = service

          return (
            <div className="card" key={id}>
              <div className="service-icon">
                <i className={icon}></i>
              </div>
              <div className="service-info">
                <h2 className="service-title">{title}</h2>
                <p className="service-text">{text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
