import React from "react"
import PropTypes from "prop-types"

const Profile = ({ name, quote, image, title }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <blockquote>
        <p>{quote}</p>
        <cite>
          <span>– {name} </span>
          <span>{title}</span>
        </cite>
      </blockquote>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default Profile
