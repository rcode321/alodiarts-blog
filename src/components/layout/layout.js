import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

// import "../styles/index.scss"

import "../../styles/index.scss"

import * as layoutStyles from "../layout/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />

        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
