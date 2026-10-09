import React from "react"
import { Link } from "gatsby"

import NavItem from "../components/navItem"


const Navigation = () => (
  <nav>
    <ul className="flex flex-col justify-between px-8 pt-8 m-0 uppercase list-none lg:flex-row lg:pt-0 lg:px-0">
      <li className="pb-8 lg:pb-0">
        <Link
          to="/"
          activeClassName="active"
          partiallyActive={false}
          className="relative block text-xl font-bold nav-item text-dark lg:text-sm xl:text-base"
        >
          Home
        </Link>
      </li>
      <NavItem to="/our-mission">Our Mission</NavItem>
      <NavItem to="/features">Features</NavItem>
      <NavItem to="/stories-of-impact">Stories of Impact</NavItem>
      <NavItem to="/our-reach">Our Reach</NavItem>
      <NavItem to="/search">
        Search
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          className="inline-block ml-2 align-middle fill-current"
          aria-hidden="true"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </NavItem>
    </ul>
  </nav>
)

export default Navigation
