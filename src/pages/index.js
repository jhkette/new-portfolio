import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "./../components/seo"
import Masonry from "react-masonry-component"

import ProjectSnippet from "./../components/projectSnippet"
import BlogSnippet from "./../components/BlogSnippet"

const BlogIndex = ({ data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.projects.nodes
  const postsOther = data.posts.nodes

  const items = posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug
    const thumb = post.frontmatter.thumb.childImageSharp.fluid || ""
    return <ProjectSnippet post={post} thumb={thumb} title={title} />
  })

  const itemsOther = postsOther.map(post => {
    const title = post.frontmatter.title || post.fields.slug
    return <BlogSnippet post={post} title={title} />
  })

  if(!items){
    return <p>Loading....</p>
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <h1 className="lead-intro">
        I am a junior web developer with experience with HTML, CSS, Javascript,
        React, PHP, Python and MySQL.
      </h1>
      <Masonry
        breakpointCols={1}
        className="container-projects-posts"
        columnClassName="my-masonry-grid_column"
      >
        { items}
      </Masonry>
      <section className="container-section-post index" aria>
        <h2>Posts</h2>
        <Masonry className="container-projects-blogposts">{itemsOther}</Masonry>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___appearence], order: ASC }
      filter: { frontmatter: { status: { eq: "project" } } }
      limit: 6
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
          appearence
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
    posts: allMarkdownRemark(
      filter: { frontmatter: { status: { eq: "post" } } }
      limit: 2
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
