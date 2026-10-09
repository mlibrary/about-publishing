import { Link } from "gatsby"
import React, { Component } from "react"

import Navigation from "./navigation"

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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-almost-black-100 focus:shadow-md focus:border focus:border-almost-black-21 focus:outline-hidden"
        >
          Skip to main content
        </a>
        <div
          className={`fixed inset-0 bg-almost-black-30 z-8 ${
            this.state.active ? "block" : "hidden"
          }`}
          onClick={this.hamburgerClick}
        ></div>
        <m-universal-header></m-universal-header>
        <div className="container relative flex items-center justify-between px-4 pt-8 pb-4 mx-auto lg:block lg:px-10">
          <h1 className="mr-6 lg:mb-8 lg:w-5/12">
            <Link to="/">
              <img
                src="/assets/signature.svg"
                alt="Michigan Publishing signature"
                className="resize"
              />
            </Link>
          </h1>
          <div
            className={`navigation lg:static fixed left-0 top-0 bottom-0 bg-white z-8 w-320 lg:w-auto lg:translate-x-0 ${
              this.state.active
                ? "transition-transform translate-x-0"
                : "transition-transform -translate-x-80"
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
