import  React, {useState} from "react"
import { Link } from "gatsby"
import "./../styles/layout.scss"
import SideDrawer from "./SideDrawer.js";

import Toolbar from "./Toolbar"
const Layout = ({ location, title, children }) => {
  
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      console.log(prevState.sideDrawerOpen, "this is prevstate")
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  return (
    <div className="wrapper" >
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
