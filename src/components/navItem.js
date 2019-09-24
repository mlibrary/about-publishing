import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavItem = ({ children, to }) => (
  <li className="pb-8 lg:pb-0">
    <AniLink
      fade
      duration={0.25}
      to={to}
      activeClassName="active"
      className="nav-item text-dark font-bold relative text-xl lg:text-sm xl:text-base block"
    >
      {children}
    </AniLink>
  </li>
)

export default NavItem
