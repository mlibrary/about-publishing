import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Signature from "./signature"
import Navigation from "./navigation";

import { UniversalHeader } from "@umich-lib/core";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fefefe`,
      marginBottom: `1.45rem`,
    }}
  >
    <UniversalHeader />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <Signature />
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
