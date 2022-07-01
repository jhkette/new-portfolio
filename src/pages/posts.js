import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry from "react-masonry-component"
import ProjectSnippet from "../components/projectSnippet"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const items = posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug
    const thumb = post.frontmatter.thumb.childImageSharp.fluid || ""

    return <ProjectSnippet post={post} thumb={thumb} title={title} />
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <h2 className="subpage-heading">All Projects</h2>
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

    allMarkdownRemark(
      sort: { fields: [frontmatter___appearence], order: ASC }
      filter: { frontmatter: { status: { eq: "project" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          appearence
          code
          thumb {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
