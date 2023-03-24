import aboutImg from "../assets/about.jpeg"
import { Title } from "./Title"

function About() {
  return (
    <section className="about-section" id="About">
      <Title firstWord={"About"} secondWord={"Us"} />
      <div className="about-content">
        <div className="img-container">
          <img src={aboutImg} loading="lazy" alt="" />
        </div>
        <article className="about-description">
          <h3>Explore The Difference</h3>
          <p>
            At BackRoads, we believe that travel is about more than just
            checking off a list of must-see sights. It's about immersing
            yourself in new experiences.
          </p>
          <br />
          <p>
            As experienced travelers ourselves, we understand how important it
            is to feel confident and supported while exploring new places.
            That's why we take care of all the details for you.
          </p>
          <br />
          <button className="about-btn">Read More</button>
        </article>
      </div>
    </section>
  )
}

export default About
