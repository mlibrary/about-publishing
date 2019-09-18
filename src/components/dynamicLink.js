import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const DynamicLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <AniLink fade duration={.25}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </AniLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
export default DynamicLink
