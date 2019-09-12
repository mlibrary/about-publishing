import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import { Icon } from "@umich-lib/core"

const link = css`
  color: #212b36;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;

  &::after {
    background-color: #00274c;
    bottom: -25px;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    transition: height 0.15s ease;
    width: 100%;
  }

  &.active::after,
  &:hover::after,
  &:focus::after {
    height: 5px;
    transition: height 0.15s ease;
  }
`

const Navigation = () => (
  <nav>
    <ul
      css={{
        display: `flex`,
        "& li": {
          marginRight: `3.25rem`,
          "&:last-child": {
            marginRight: `0`,
          },
        },
      }}
    >
      <li>
        <Link to="/" activeClassName="active" css={link}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/our-mission" activeClassName="active" css={link}>
          Our Mission
        </Link>
      </li>
      <li>
        <Link to="/stories-of-impact" activeClassName="active" css={link}>
          Stories of Impact
        </Link>
      </li>
      <li>
        <Link to="/our-reach" activeClassName="active" css={link}>
          Our Reach
        </Link>
      </li>
      <li>
        <Link to="/search" activeClassName="active" css={link}>
          Search
          <Icon
            icon="search"
            css={{
              marginLeft: `0.5rem`,
            }}
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
