import React from "react"
import * as burgerStyles from "./burger.module.scss"

const Burger = () => {
  return (
    <label for="check">
      <input type="checkbox" id="check" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  )
}

export default Burger
