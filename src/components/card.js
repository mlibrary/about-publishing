import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Card = ({ title, href, image, alt, subtitle, children, className }) => {
  return (
    <AniLink fade duration={0.25} to={href} className={`block ${className}`}>
      <div className="card rounded flex flex-col h-full">
        <img src={image} alt={alt} className="rounded-t" />
        <div className="border border-very-light-blue px-6 h-full">
          <p className="text-sm uppercase text-dusk-blue mb-2 mt-4 tracking-widest">
            {subtitle}
          </p>
          <h3 className="text-2xl xl:text-3xl leading-tight mb-6">{title}</h3>
          <p className="mb-8">{children}</p>
        </div>
      </div>
    </AniLink>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Card
