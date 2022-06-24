import * as React from "react"
import { Link } from "gatsby"
import "./../styles/layout.scss"

import Toolbar from "./Toolbar"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="wrapper" data-is-root-path={isRootPath}>
      <div className="maincontent">
        <Toolbar />
        <main className="container-bodycontent">{children}</main>
      </div>
      <footer></footer>
    </div>
  )
}

export default Layout
