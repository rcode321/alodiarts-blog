import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Nav from "../nav/nav"
import Burger from "../burger/burger"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  const [open, setOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Burger open={open} setOpen={setOpen} />
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Nav open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
