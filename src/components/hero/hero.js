import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import StoneImg from "../../images/stone.jpg"
import { HeroBg } from "./hero.styled"

const Hero = () => {
  return (
    <HeroBg>
      <StaticImage src="../../images/stone.jpg" alt="Stone sea " />
      {/* <img className="hero-image" src={StoneImg} alt="Stone sea " /> */}
    </HeroBg>
  )
}

export default Hero
