import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { Component } from "react"

import Navigation from "./navigation"

import { UniversalHeader } from "@umich-lib/core"

class Header extends Component {
  state = {
    active: false,
  }

  hamburgerClick = () => {
    this.setState(state => ({ active: !state.active }))
  }

  render() {
    return (
      <header className="border-b border-almost-black-21">
        <div
          className={`fixed inset-0 bg-almost-black-30 z-10 ${
            this.state.active ? "block" : "hidden"
          }`}
          onClick={this.hamburgerClick}
        ></div>
        <UniversalHeader />
        <div className="items-center flex justify-between mx-auto container pt-8 lg:px-10 px-4 pb-4 relative">
          <h1 className="lg:w-5/12 mr-6">
            <AniLink fade duration={0.25} to="/">
              <img
                src="/assets/signature.svg"
                alt="Michigan Publishing signature"
              />
            </AniLink>
          </h1>
          <div
            className={`navigation lg:static lg:w-7/12 fixed left-0 top-0 bottom-0 bg-white z-10 w-320 lg:w-auto lg:translate-x-0 ${
              this.state.active
                ? "transition-transform translate-x-0"
                : "transition-transform -translate-x-320"
            }`}
          >
            <Navigation />
          </div>
          <div className={`lg:hidden ${this.state.active}`}>
            <button
              id="menu-toggle"
              className={`hamburger hamburger--collapse ${
                this.state.active ? "is-active" : ""
              }`}
              type="button"
              aria-label="Menu"
              aria-expanded="false"
              onClick={this.hamburgerClick}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
