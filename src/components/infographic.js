import React from "react"
import PropTypes from "prop-types"

const Infographic = ({ largeText, smallText, className }) => {
  return (
    <div className={className}>
      <div className="text-center border rounded-full h-64 w-64 flex flex-col justify-center">
        <div className="text-525 font-semibold leading-none">{largeText}</div>
        <div>{smallText}</div>
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
