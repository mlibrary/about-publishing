import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <p className="mb-0 font-bold">{frontmatter.name}</p>
                <address className="not-italic">
                  <span className="block">{frontmatter.address}</span>
                  {frontmatter.city}, {frontmatter.state} {frontmatter.zip}
                </address>
              </div>

              <div>
                <a
                  className="text-mid-blue mr-16 link-hover"
                  href="mailto:{frontmatter.email}"
                >
                  {frontmatter.email}
                </a>
                <Link
                  className="text-mid-blue link-hover"
                  to={frontmatter.contact_link}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <div className="flex">
                {frontmatter.social &&
                  frontmatter.social.map(social => {
                    return (
                      <a
                        key={social.social_link}
                        href={social.social_link}
                        className="social-link w-10 h-5 block bg-no-repeat bg-center"
                      >
                        <span className="clip">{social.social_name}</span>
                      </a>
                    )
                  })}
              </div>

              <a href="http://www.lib.umich.edu/">
                <img
                  src="/assets/m-library-logo.svg"
                  alt="UM Library logo"
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
