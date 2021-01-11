import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  // let pathname = window.location.pathname
  // let activePage = ""
  // if (pathname == "/") {
  //   activePage = "text-royal hover:text-nicegreen"
  // } else {
  //   activePage = "hover:text-nicegreen"
  // }

  return (
    <React.Fragment>
      <ul className="text-base font-medium">
        <li>
          <Link to="/" className="nicegreen-line">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nicegreen-line">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nicegreen-line">
            Projects
          </Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Menu
