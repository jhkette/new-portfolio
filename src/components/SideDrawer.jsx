import React from "react"
import { Link } from "gatsby"
import "./../styles/SideDrawer.scss"

function SideDrawer(props) {
  let drawerClasses = "sidedrawer"
  // eslint-disable-next-line react/prop-types
  if (props.show.sideDrawerOpen) {
    drawerClasses = "sidedrawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" title="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-me" title="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/posts" title="All projects">
            All projects
          </Link>
        </li>
        <li>
          <Link to="/allposts" title="All posts">
            All posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer;
