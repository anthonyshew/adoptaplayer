import React from "react"
import '../styles/404.scss'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" >
        <meta name="og:image" content="/media/aaml-logo.jpg" />
        <meta name="twitter:image" content="/media/aaml-logo.jpg" />
        <meta name="twitter:image:alt" content="Adopt a Minor Leaguer 404 Page" />
      </SEO>
      <div className="page-404">
        <h1>404</h1>
        <p>Uh oh! Looks like this page doesn't exist.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
