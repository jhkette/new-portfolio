import React, { useState, useEffect, useRef } from "react"
import Toolbar from "./Toolbar"
import SideDrawer from "./SideDrawer.js"
import "./../styles/layout.scss"


const Layout = ({ location, title, children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
     
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, []);

  return (
    <div className="wrapper">
      <SideDrawer show={sideDrawerOpen} />
      <div className="maincontent">
        <Toolbar
          drawerClickHandler={drawerToggleClickHandler}
          change={sideDrawerOpen}
          ref={mounted}
        />
       { mounted && <main className="container-bodycontent">{children}</main> }
      </div>
      <footer></footer>
    </div>
  )
}

export default Layout
