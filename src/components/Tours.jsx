import { useState, useEffect } from "react"
import { Title } from "./Title"

function Tours() {
  const API_URL = "https://course-api.com/react-tours-project"

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch(API_URL)
      const toursData = await response.json()

      setTours(toursData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <main>Loading...</main>
  }

  return (
    <section className="tours-section">
      <Title firstWord={"Featured"} secondWord={"Tours"} />
    </section>
  )
}

export default Tours
