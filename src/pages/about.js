import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>currently working on my Youtube Channel</p>
      <p>
        <Link to="/contact">Link to about page</Link>
      </p>
    </div>
  )
}

export default About
