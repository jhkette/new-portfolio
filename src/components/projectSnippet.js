import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Code from "./../images/code.svg"

const ProjectSnippet = ({ post, thumb, title, status }) => {
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(true)
  }

  const turnHoverOff = () => {
    setHover(false)
  }

  const splitCode = code => {
    const mainCode = code.split(",")
    return mainCode[0]
  }

  const styles = "#008489"

  return (
    <article
      key={post.fields.slug}
      className="masonry-item-post"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header className="blog-header">
        <Link
          to={post.fields.slug}
          onMouseOut={turnHoverOff}
          onMouseEnter={toggleHover}
          onFocus={toggleHover}
          onBlur={turnHoverOff}
          className="masonry-item-link"
        >
          <div className="img-wrapper">
            <div className="maincode">
            <p className="view">
            View<br/> project
            </p>
            </div>

            <Img fluid={thumb} className="image-bloglead" />
          </div>
        </Link>
        <h3>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
      </header>
      <section>
        <div className="container-codelist">
          <Code alt="code" className="code" />

          <p className="highlight-categories">{post.frontmatter.code}</p>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  )
}

export default ProjectSnippet
