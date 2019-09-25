import React from "react"
import PropTypes from "prop-types"

const Profile = ({ name, quote, image, title }) => {
  return (
    <div>
      <img src={image} alt={name} className="md:float-left mr-12 md:w-1/4 mb-8 md:mb-0" />
      <div>
      <blockquote className="relative">
        <span className="absolute text-michigan-maize text-6 top-0 leading-none left-9 -top-1 xl:block hidden">“</span>
        <p className="text-2xl font-serif">{quote}</p>
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
