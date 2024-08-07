import React, { useState, useEffect, useRef } from "react"
import Toolbar from "./Toolbar"
import SideDrawer from "./SideDrawer.jsx"
import "./../styles/layout.scss"

const Layout = ({ location, title, children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  return (
    <div className="wrapper">
      <SideDrawer show={sideDrawerOpen} />
      <div className="maincontent">
        <Toolbar
          drawerClickHandler={drawerToggleClickHandler}
          change={sideDrawerOpen}
        />
        <main className="container-bodycontent">{children}</main>
      </div>
    
    </div>
  )
}

export default Layout
