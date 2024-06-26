import React, { useEffect, useRef } from "react"
import DrawerToggleButton from "./DrawerToggle"
import { Link } from "gatsby"
// import Github from "../../images/github.svg"
// import Codepen from "../../images/codepen.svg"
// import Arrow from "../../images/right-arrow-1.svg"
import "./../styles/Toolbar.scss"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const activeStyle = {
  color: "#008489",
}

const Toolbar = props => {
  return (
    <header className="toolbar">
      <div className="toolbar__navigation">
        <div className="heading">
          <div className="toolbar__logo">
            <h1>
              <Link to="/">Joseph Ketterer</Link>
            </h1>
          </div>
          <p className="text-introduction">
          I am a junior web developer with experience with HTML, CSS,
          Javascript, PHP, Java and Python. I also have a good knowledge of 
          numerous popular frameworks and libraries. 
          </p>
          <div className="underline"></div>
          <nav className="toolbar__toggle-button">
            <DrawerToggleButton
              clicked={props.drawerClickHandler}
              change={props.change}
              aria-label="Open the menu"
            />
          </nav>
        </div>
        <div className="spacer" />

        <nav className="toolbar_navigation-items" aria role="navigation">
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />

              <Link to="/" activeStyle={activeStyle} className="link-highlight">
                Home
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              <Link to="/about-me/" activeStyle={activeStyle} className="link-highlight">
                About
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              <Link to="/projects" activeStyle={activeStyle} className="link-highlight">
                All projects
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              <Link to="/allposts" activeStyle={activeStyle} className="link-highlight">
                All posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Toolbar
