import * as React from "react"
import { Link, graphql } from "gatsby"
import Arrow from "./../images/arrow.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import "../styles/post.scss"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="container-allpost-content" aria role="main">
        <h2> {post.frontmatter.title}</h2>
        {post.frontmatter.status =="project" ?  <div className="categoriespost"> {post.frontmatter.code}</div> :""}
        {post.frontmatter.status =="project" ?   <Img
          fluid={post.frontmatter.main.childImageSharp.fluid}
          className="image-bloglead"
        /> :""}

        <div className="container-arrow-link">
          <Arrow alt="arrow" className="arrow" />
          <a
            className="link-highlight"
            title={post.frontmatter.title}
            href={post.frontmatter.url}
          >
            {" "}
            {post.frontmatter.url}
          </a>
        </div>

        <div
          className="container text-content"
          /* sanitize innerhtml */

          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
      <nav className="blog-post-nav"></nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        code
        description
        url
        status
        main {
          childImageSharp {
            fluid(maxWidth: 660) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
