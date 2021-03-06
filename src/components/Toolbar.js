import React from "react"
import DrawerToggleButton from "./DrawerToggle.js"
import { Link } from "gatsby"
import Github from "../../images/github.svg"
import Codepen from "../../images/codepen.svg"
import Arrow from "../../images/right-arrow-1.svg"
import "./../styles/Toolbar.scss"

const activeStyle = {
  color: "#008489",
}

const Toolbar = props => (
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
          Javascript, React, PHP, Python and MySQL.
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
      <nav className="nav-icons" aria role="navigation">
        <ul>
          <li>
            <a href="https://github.com/jhkette" title="github">
              <img className="iconl github" alt="Github" src={Github} />
            </a>
          </li>

          <li>
            <a href="https://codepen.io/jokhenry89/" title="codepen">
              <img className="iconl codepen" alt="Codepen" src={Codepen} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="spacer" />
      <nav className="toolbar_navigation-items" aria role="navigation">
        <ul>
          <li>
            <img src={Arrow} alt="arrow" />
            <Link to="/" activeStyle={activeStyle}>
              Home
            </Link>
          </li>

          <li>
            <img src={Arrow} alt="arrow" />
            <Link to="/about-me/" activeStyle={activeStyle}>
              About
            </Link>
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            <Link to="/posts" activeStyle={activeStyle}>
              All projects
            </Link>
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            <Link to="/allposts" activeStyle={activeStyle}>
              All posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Toolbar
