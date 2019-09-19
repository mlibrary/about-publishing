import React from "react"
import PropTypes from "prop-types"

import DynamicLink from "../components/dynamicLink"

const Section = ({ children, heading, linkText, linkURL, className }) => {
  return (
    <section className={className}>
      <div className="flex items-center justify-between line-heading">
        <h2 className="font-serif text-35 mb-6 pr-4">{heading}</h2>
        {linkURL && (
          <DynamicLink className="text-mid-blue pl-4" to={linkURL}>
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
