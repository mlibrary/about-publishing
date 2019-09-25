import React from "react"

import NavItem from "../components/navItem"

import { Icon } from "@umich-lib/core"

const Navigation = () => (
  <nav>
    <ul className="flex flex-col lg:flex-row justify-between uppercase list-none m-0 pt-8 lg:pt-0 px-8 lg:px-0">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/our-mission">Our Mission</NavItem>
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
