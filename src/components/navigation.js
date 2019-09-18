import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

import { Icon } from "@umich-lib/core"

const Navigation = () => (
  <nav>
    <ul className="flex justify-between uppercase list-none m-0">
      <li>
        <AniLink fade duration={0.25}
          to="/"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
        >
          Home
        </AniLink>
      </li>
      <li>
        <AniLink fade duration={0.25}
          to="/our-mission"
          activeClassName="active"
          partiallyActive={true}
          className="nav-item text-dark font-bold relative"
        >
          Our Mission
        </AniLink>
      </li>
      <li>
        <AniLink fade duration={0.25}
          to="/stories-of-impact"
          activeClassName="active"
          partiallyActive={true}
          className="nav-item text-dark font-bold relative"
        >
          Stories of Impact
        </AniLink>
      </li>
      <li>
        <AniLink fade duration={0.25}
          to="/our-reach"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
          partiallyActive={true}
        >
          Our Reach
        </AniLink>
      </li>
      <li>
        <AniLink fade duration={0.25}
          to="/search"
          activeClassName="active"
          className="nav-item text-dark font-bold relative"
          partiallyActive={true}
        >
          Search
          <Icon icon="search" className="ml-2" />
        </AniLink>
      </li>
    </ul>
  </nav>
)

export default Navigation
