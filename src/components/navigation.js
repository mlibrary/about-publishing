import { Link } from "gatsby"
import React from "react"

import { Icon } from "@umich-lib/core"

const Navigation = () => (
  <nav>
    <ul className="flex uppercase list-none m-0">
      <li className="pr-12">
        <Link
          to="/"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Home
        </Link>
      </li>
      <li className="pr-12">
        <Link
          to="/our-mission"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Our Mission
        </Link>
      </li>
      <li className="pr-12">
        <Link
          to="/stories-of-impact"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Stories of Impact
        </Link>
      </li>
      <li className="pr-12">
        <Link
          to="/our-reach"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Our Reach
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Search
          <Icon icon="search" className="ml-2" />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation