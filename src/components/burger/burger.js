import React from "react"

// import * as burgerStyles from "./burger.module.scss"
import { StyledBurger } from "./burger.styled"

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
