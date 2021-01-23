import React from "react"
import { Link } from 'gatsby'

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { Profile } from 'components/Profile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">About</Link>
    <Profile />
  </Layout>
)

export default IndexPage
