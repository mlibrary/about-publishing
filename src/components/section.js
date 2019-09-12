import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Section = ({ children, heading, linkText, linkURL }) => {
  return (
    <section>
      <h2>{heading}</h2>
      {linkURL && <Link to={linkURL}>{linkText}</Link>}
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
}

export default Section
