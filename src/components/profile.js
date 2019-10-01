import React from "react"
import PropTypes from "prop-types"

const Profile = ({ name, quote, image, title }) => {
  return (
    <div>
      <img
        src={image}
        alt={name}
        className="md:float-left md:mr-12 md:w-1/4 mb-8 md:mb-0 mx-auto md:mx-0"
      />
      <div>
        <blockquote className="relative">
          <span className="absolute text-michigan-maize text-6 top-0 leading-none left-0 md:left-12 lg:left-7 xl:left-9 -top-1 block">
            “
          </span>
          <p className="profile-quote text-2xl font-serif ml-12 md:ml-0">{quote}</p>
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
