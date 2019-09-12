import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  const { frontmatter } = data.markdownRemark

  return (
    <footer
      css={{
        maxWidth: `1280px`,
        margin: `0 auto`,
        paddingLeft: `2.5rem`,
        paddingRight: `2.5rem`,
      }}
    >
      <div
        css={{
          borderTop: `10px solid #e5e9ed`,
        }}
      >
        <div
          css={{
            marginBottom: `4.375rem`,
            marginTop: `1.5rem`,
          }}
        >
          <address>
            <MarkdownContent content={frontmatter.address} />
          </address>
          <a href="mailto:{frontmatter.email}">{frontmatter.email}</a>
          <Link to={frontmatter.contact_link}>Contact Us</Link>
          {frontmatter.social &&
            frontmatter.social.map(social => {
              return (
                <a key={social.social_link} href={social.social_link}>
                  {social.social_name}
                </a>
              )
            })}
          <a href="http://www.lib.umich.edu/">
            <img src="/assets/m-library-logo.svg" alt="UM Library logo"></img>
          </a>
          © {new Date().getFullYear()}{" "}
          <a href="http://regents.umich.edu/">
            Regents of the University of Michigan
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
