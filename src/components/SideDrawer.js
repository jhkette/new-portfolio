import React from "react"
import "./../styles/SideDrawer.scss"
import { Link } from "gatsby"
const SideDrawer = props => {
  console.log(props, "this is sidedrawerprops")
  let drawerClasses = "sidedrawer"
  if (props.show.sideDrawerOpen) {
    drawerClasses = "sidedrawer open"
  }

  return (
    <nav className={drawerClasses}>
      {/* {props.show} */}
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

export default SideDrawer
