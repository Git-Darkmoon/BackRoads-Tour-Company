import { allImages } from "../data"

function Gallery() {
  return (
    <section className="gallery-section" id="Gallery">
      {allImages.map((eachImg) => {
        return <img key={eachImg.id} src={eachImg.picture} alt="" />
      })}
    </section>
  )
}

export default Gallery
