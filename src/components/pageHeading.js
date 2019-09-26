import React from "react"
import PropTypes from "prop-types"

const PageHeading = ({ heading }) => {
  return (
    <h1 className="mb-10 font-serif text-5xl lg:text-35 overflow-hidden flex items-center">
      <span className="mr-4 flex-grow flex-shrink-0">{heading}</span>
      <span className="w-full border-b-2 border-cloudy-blue block flex-shrink mt-4 sm:block hidden"></span>
    </h1>
  )
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default PageHeading
