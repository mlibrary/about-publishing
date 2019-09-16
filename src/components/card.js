import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Card = ({ title, href, image, alt, subtitle, children, className }) => {
  return (
    <Link to={href} className={className}>
      <img src={image} alt={alt} className="rounded-t" />
      <div className="border border-very-light-blue px-4 h-full rounded-b">
        <p className="text-sm uppercase text-dusk-blue mb-2 mt-4">{subtitle}</p>
        <h3 className="text-3xl leading-tight mb-6">{title}</h3>
        <p className="mb-8">{children}</p>
      </div>
    </Link>
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
