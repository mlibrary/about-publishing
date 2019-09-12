import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation";

import { UniversalHeader } from "@umich-lib/core";

const Header = ({ siteTitle }) => (
  <header
    css={{
      background: `#fefefe`,
      marginBottom: `1.45rem`,
    }}
  >
    <UniversalHeader />
    <div
      css={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1rem`,
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
