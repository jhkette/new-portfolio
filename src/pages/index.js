import React, { useState } from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import ProjectSnippet from "../components/projectSnippet"
const BlogIndex = ({ data, location }) => {
  const [hover, setHover] = useState(false)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const toggleHover = () => {
    setHover(true)
  }

  const turnHoverOff = () => {
    setHover(false)
  }

  const styles = "#008489"

  const items = posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug
    const thumb = post.frontmatter.thumb.childImageSharp.fluid || ""

    console.log(post)

    return <ProjectSnippet post={post} thumb={thumb} title={title} />
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <div>
        <Masonry
          breakpointCols={1}
          className="container-projects-posts"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          code
          thumb {
            childImageSharp {
              fluid(maxWidth: 660) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
