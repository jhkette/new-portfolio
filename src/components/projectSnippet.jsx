import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Code from "./../images/code.svg"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectSnippet = ({ post, thumb, title, status }) => {
  const styles = "#008489"

  return (
    <article
      key={post.fields.slug}
      className="masonry-item-post"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header className="blog-header">
        <Link to={post.fields.slug} className="masonry-item-link">
          <div className="img-wrapper">
            <div className="maincode">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
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
