import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero>
        <h1>Hello.</h1>
        <h2>
          I'm Andrew, a full-stack developer living in beautiful Philadelphia.
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Hero>
    </Layout>
  )
}

export default IndexPage
