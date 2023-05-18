import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry from "react-masonry-component"
import BlogSnippet from "../components/BlogSnippet"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const items = posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug
    return <BlogSnippet post={post} title={title} />
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <div>
        <h2>All Posts</h2>
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { status: { eq: "post" } } }
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
          code
        }
      }
    }
  }
`
