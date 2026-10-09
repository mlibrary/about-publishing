import React from "react"
import { Link } from "gatsby"

const NavItem = ({ children, to }) => (
  <li className="pb-8 lg:pb-0">
    <Link
      to={to}
      activeClassName="active"
      partiallyActive={true}
      className="nav-item text-dark font-bold relative text-xl lg:text-sm xl:text-base block"
    >
      {children}
    </Link>
  </li>
)

export default NavItem
