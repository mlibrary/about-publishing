import React from "react"
import PropTypes from "prop-types"

const Infographic = ({ largeText, smallText, className }) => {
  return (
    <div className={`infographic ${className}`}>
      <div className="text-center text-michigan-blue rounded-full h-1675 w-1675 flex flex-col justify-center">
        <div className="text-525 font-semibold leading-none">{largeText}</div>
        <div className="w-13 mx-auto">{smallText}</div>
      </div>
    </div>
  )
}

Infographic.propTypes = {
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Infographic
