import  React, {useState} from "react"
import { Link } from "gatsby"
import "./../styles/layout.scss"
import SideDrawer from "./SideDrawer.js";

import Toolbar from "./Toolbar"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      console.log(prevState.sideDrawerOpen, "this is prevstate")
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  return (
    <div className="wrapper" data-is-root-path={isRootPath}>
      <SideDrawer show={sideDrawerOpen} />
      <div className="maincontent">
      
        <Toolbar  drawerClickHandler={drawerToggleClickHandler}
            change={sideDrawerOpen}/>
        <main className="container-bodycontent">{children}</main>
      </div>
      <footer></footer>
    </div>
  )
}

export default Layout
