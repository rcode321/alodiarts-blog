import React from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

import { Nav } from "./nav.styled"

const NavBar = ({ open }) => {
  return (
    <Nav open={open}>
      <motion.ul
        initial={{ x: 90, opacity: 0 }}
        animate={{ x: 40, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 8 }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </motion.ul>
    </Nav>
  )
}

export default NavBar
