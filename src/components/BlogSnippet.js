import React from "react"

import { Link } from "gatsby"
const BlogSnippet = ({ post, title }) => {
  
  return (
    <article key={post.fields.slug} className="container-singlepost">
      <Link to={`${post.fields.slug}`} style={{ textDecoration: "none" }}>
        <h3>{title}</h3>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </article>
  )
}

export default BlogSnippet
