import React, { useState } from "react"
import { Link, graphql } from "gatsby"

export default function hello({ data }) {
  const posts = data
  console.log(posts)
  return <div>hello</div>
}

export const postquery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(
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
