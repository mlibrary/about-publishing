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
                  <a className="w-6 h-6 block bluesky" href="https://bsky.app/profile/michiganpublishing.bsky.social">
                    <svg width="27px" height="24px" viewBox="0 0 580 510" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"></path>
                    </svg>
                  </a>
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
