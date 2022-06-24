import * as React from "react"
import { Link, graphql } from "gatsby"
import Arrow from "./../images/arrow.svg";
import Img from "gatsby-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/post.scss";

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
          <h2> {post.title}</h2>
    
            <div className="categoriespost"> {post.frontmatter.code}</div>
          
      
           
         
            <div className="container-arrow-link">
              <Arrow alt="arrow" className="arrow" />
              <a
                className="link-highlight"
                title={post.title}
                href={""}
              >
                {" "}
                {"url"}
              </a>
            </div>
        

          <div
            className="container text-content"
            /* sanitize innerhtml */

            dangerouslySetInnerHTML={{ __html: post.html }}
        
          />
        </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
        code
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
