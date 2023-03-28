import { Title } from "./Title"
import Tour from "./Tour"
import { tours } from "../data"

function Tours() {
  return (
    <section className="tours-section" id="Featured">
      <Title firstWord={"Featured"} secondWord={"Tours"} />
      <h1>Hello world</h1>
      <div className="tours-grid">
        {tours.map((eachTour) => {
          return <Tour key={eachTour.id} {...eachTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
