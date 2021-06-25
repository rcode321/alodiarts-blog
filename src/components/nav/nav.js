import React from "react"
import { Link } from "gatsby"

import Burger from "../burger/burger"

import * as navStyles from "./nav.module.scss"

const Nav = () => {
  return (
    <div>
      <Burger />
      <nav>
        <ul className={navStyles.navList}>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
