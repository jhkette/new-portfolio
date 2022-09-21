import React, { useState } from "react"
import SideDrawer from "./SideDrawer.js"
import "./../styles/layout.scss"

import Toolbar from "./Toolbar"
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
       { children && <main className="container-bodycontent">{children}</main> }
      </div>
      <footer></footer>
    </div>
  )
}

export default Layout
