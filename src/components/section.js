import React from "react"
import PropTypes from "prop-types"

import DynamicLink from "../components/dynamicLink"

const Section = ({ children, heading, linkText, linkURL, className }) => {
  return (
    <section className={className}>
      <div className="md:flex items-center justify-between md:line-heading mb-8 md:mb-0">
        <h2 className="font-serif md:text-35 text-4xl md:mb-6 pr-4">{heading}</h2>
        {linkURL && (
          <DynamicLink className="text-mid-blue md:pl-4" to={linkURL}>
            <span className="link-hover">{linkText} ></span>
          </DynamicLink>
        )}
      </div>
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
