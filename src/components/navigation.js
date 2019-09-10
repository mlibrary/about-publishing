import { Link } from "gatsby"
import React from "react"

import { Icon } from '@umich-lib/core'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-mission">Our Mission</Link>
      </li>
      <li>
        <Link to="/stories-of-impact">Stories of Impact</Link>
      </li>
      <li>
        <Link to="/our-reach">Our Reach</Link>
      </li>
      <li>
        <Link to="/search">
          Search
          <Icon icon="search" />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
