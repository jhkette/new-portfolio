import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./../styles/404.scss"

// 404 page for gatsby
export default class fourofour extends Component {
  render() {
    return (
      <Layout>
        <title>Portfolio: Joseph Ketterer</title>

        <div className="not-found">
          <h1 className="heading-warning">404!</h1>
          <p>This page doesn't exist!</p>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
