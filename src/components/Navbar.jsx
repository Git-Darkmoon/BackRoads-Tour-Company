import { logo } from "../assets/icons/logo-upscaled.png"
import React from "react"
import { linksData } from "../data"

function Navbar() {
  return (
    <nav className="navbar" id="Home">
      <div className="logo">
        <img src={logo} loading="lazy" alt="" />
      </div>
      <ul className="nav-links">
        {linksData.map((link) => {
          const { id, text } = link
          return (
            <li key={id}>
              <a href={`#${text}`}>{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
