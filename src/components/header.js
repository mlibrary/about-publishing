import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation";

import { UniversalHeader } from "@umich-lib/core";

const Header = ({ siteTitle }) => (
  <header
    css={{
      borderBottom: `1px solid rgba(6, 8, 10, 0.21)`,
      background: `#fefefe`,
    }}
  >
    <UniversalHeader />
    <div
      css={{
        alignItems: `center`,
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `2rem 2.5rem 1rem`,
        position: `relative`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img src="/assets/signature.svg" alt="Michigan Publishing signature" />
        </Link>
      </h1>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
