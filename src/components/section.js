import React from "react"
import PropTypes from "prop-types"

import DynamicLink from "../components/dynamicLink"

const Section = ({ children, heading, linkText, linkURL, className }) => {
  return (
    <section className={className}>
      <div class="flex items-center justify-between line-heading">
        <h2 class="font-serif text-35 mb-4 pr-4">{heading}</h2>
        {linkURL && (
          <DynamicLink className="text-mid-blue underline pl-4" to={linkURL}>
            {linkText} >
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
