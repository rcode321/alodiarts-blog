import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I currently working on my Youtube channel.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
