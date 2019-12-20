import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "contact_info" } }) {
        frontmatter {
          name
          address
          city
          state
          zip
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
    <footer className="site-footer container mx-auto px-10">
      <div className="border-t-8 border-very-light-blue">
        <div className="mb-16 mt-6">
          <div className="md:flex justify-between">
            <div className="flex flex-col justify-between items-center md:items-start">
              <div className="mb-8 text-center md:text-left">
                <p className="mb-0 font-bold">{frontmatter.name}</p>
                <address className="not-italic">
                  <span className="block">{frontmatter.address}</span>
                  {frontmatter.city}, {frontmatter.state} {frontmatter.zip}
                </address>
              </div>

              <div className="mb-8 md:mb-0 text-center md:text-left">
                <a
                  className="text-mid-blue md:mr-16 link-hover block md:inline mb-8 md:mb-0"
                  href={frontmatter.contact_link}
                >
                  {frontmatter.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end justify-between items-center">
              <div className="flex mb-8 md:mb-0">
                {frontmatter.social &&
                  frontmatter.social.map(social => {
                    return (
                      <a
                        key={social.social_link}
                        href={social.social_link}
                        className="social-link w-6 h-6 block bg-no-repeat bg-center"
                      >
                        <span className="clip">{social.social_name}</span>
                      </a>
                    )
                  })}
              </div>

              <a href="http://www.lib.umich.edu/">
                <img
                  src="/assets/mlibrary-logo.svg"
                  alt="UM Library logo"
                  className="logo-link mb-8 md:mb-4 md:mt-4 h-24"
                ></img>
              </a>

              <div>
                &copy; {new Date().getFullYear()}{" "}
                <a href="http://regents.umich.edu/" className="hover:underline">
                  Regents of the University of Michigan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
