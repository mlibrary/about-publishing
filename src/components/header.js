import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"

import { UniversalHeader } from "@umich-lib/core"

const Header = ({ siteTitle }) => (
  <header className="border-b border-almost-black-21">
    <UniversalHeader />
    <div className="items-center flex justify-between mx-auto container pt-8 px-10 pb-4 relative">
      <h1 className="w-5/12 mr-6">
        <Link to="/">
          <img
            src="/assets/signature.svg"
            alt="Michigan Publishing signature"
          />
        </Link>
      </h1>
      <div className="w-7/12">
        <Navigation />
      </div>
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
