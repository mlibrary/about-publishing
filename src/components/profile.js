import React from "react"
import PropTypes from "prop-types"

const Profile = ({ name, quote, image, title }) => {
  return (
    <div>
      <img src={image} alt={name} className="float-left mr-12" />
      <div>
      <blockquote className="relative">
        <span className="absolute text-michigan-maize text-6 top-0 leading-none left-9 -top-1">“</span>
        <p className="text-2xl">{quote}</p>
        <cite className="text-bluey-grey text-right block not-italic">
          <span className="block">– {name}</span>
          <span>{title}</span>
        </cite>
      </blockquote>
      </div>
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
