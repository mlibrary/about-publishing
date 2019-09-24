import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import Hamburger from "./hamburger"

import { UniversalHeader } from "@umich-lib/core"

const Header = ({ siteTitle, clicked = false }) => (
  <header className="border-b border-almost-black-21">
    <UniversalHeader />
    <div className="items-center flex justify-between mx-auto container pt-8 px-10 pb-4 relative">
      <h1 className="w-5/12 mr-6">
        <AniLink fade duration={0.25} to="/">
          <img
            src="/assets/signature.svg"
            alt="Michigan Publishing signature"
          />
        </AniLink>
      </h1>
      <div className="lg:static lg:w-7/12 fixed left-0 top-0 bottom-0 bg-white z-20 w-320 lg:w-auto -translate-x-320 lg:translate-x-0">
        <Navigation />
      </div>
      <div className="lg:hidden">
        <Hamburger onClick={() => {console.log("click")}} />
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
