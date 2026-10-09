import React from "react"
import { Link } from "gatsby"

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
      <Link
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
export default DynamicLink
