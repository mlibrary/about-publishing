import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import NavItem from "../components/navItem"

import { Icon } from "@umich-lib/core"

const Navigation = () => (
  <nav>
    <ul className="flex flex-col justify-between px-8 pt-8 m-0 uppercase list-none lg:flex-row lg:pt-0 lg:px-0">
      <li className="pb-8 lg:pb-0">
        <AniLink
          fade
          duration={0.25}
          to="/"
          activeClassName="active"
          partiallyActive={false}
          className="relative block text-xl font-bold nav-item text-dark lg:text-sm xl:text-base"
        >
          Home
        </AniLink>
      </li>
      <NavItem to="/our-mission">Our Mission</NavItem>
      <NavItem to="/debate-and-democracy">Label to be determined</NavItem>
      <NavItem to="/stories-of-impact">Stories of Impact</NavItem>
      <NavItem to="/our-reach">Our Reach</NavItem>
      <NavItem to="/search">
        Search
        <Icon icon="search" className="ml-2" />
      </NavItem>
    </ul>
  </nav>
)

export default Navigation
