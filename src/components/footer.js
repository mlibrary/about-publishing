import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MarkdownContent from "../components/markdownContent"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "contact_info" } }) {
        frontmatter {
          address
          email
          contact_link
          social {
            social_link
            social_name
          }
        }
      }
    }
  `)

  const {frontmatter} = data.markdownRemark;

  return (
    <footer>
      <address>
        <MarkdownContent content={frontmatter.address} />
      </address>
      © {new Date().getFullYear()}{" "}
      <a href="http://regents.umich.edu/">
        Regents of the University of Michigan
      </a>
    </footer>
  )
}

export default Footer
