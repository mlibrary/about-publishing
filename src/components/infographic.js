import React from "react"
import PropTypes from "prop-types"

const Infographic = ({ largeText, smallText }) => {
  return (
    <div>
      <div>{largeText}</div>
      <div>{smallText}</div>
    </div>
  )
}

Infographic.propTypes = {
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
}

export default Infographic
