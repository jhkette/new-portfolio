import * as React from "react"
import { Link, graphql } from "gatsby"
<<<<<<< HEAD
import Arrow from "./../images/arrow.svg";
import Img from "gatsby-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/post.scss";
=======
import Arrow from "./../images/arrow.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import "../styles/post.scss"
>>>>>>> fixed

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log(post)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="container-allpost-content" aria role="main">
<<<<<<< HEAD
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
=======
        <h2> {post.frontmatter.title}</h2>
        <div className="categoriespost"> {post.frontmatter.code}</div>
        <Img
          fluid={post.frontmatter.main.childImageSharp.fluid}
          className="image-bloglead"
        />

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
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
>>>>>>> fixed
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
<<<<<<< HEAD
=======
        date(formatString: "MMMM DD, YYYY")
>>>>>>> fixed
        code
        description
        url
        main {
          childImageSharp {
            fluid(maxWidth: 660) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
